from django.contrib.auth.models import User
from rest_framework import generics, permissions, status
from rest_framework.views import APIView
from django.conf import settings
from allauth.socialaccount.models import SocialAccount
from django.contrib.auth import login
from rest_framework_simplejwt.tokens import AccessToken
from django.contrib.auth.models import User
from django.shortcuts import redirect
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import Profile
from .serializers import UserSerializer, MyTokenObtainPairSerializer, ProfileSerializer
import requests

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class ProfileUpdateView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        profile, created = Profile.objects.get_or_create(user=request.user)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        profile, created = Profile.objects.get_or_create(user=request.user)
        serializer = ProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def social_connect(request, provider):
    token = request.GET.get('token')
    if not token:
        return Response({'error': 'Token not provided'}, status=400)

    try:
        # Decode the token to get the user ID
        access_token = AccessToken(token)
        user_id = access_token['user_id']
        user = User.objects.get(id=user_id)

        # Manually log the user in to create a session
        login(request, user, backend='django.contrib.auth.backends.ModelBackend')

        # Redirect to the allauth provider's login page
        return redirect(f'/accounts/{provider}/login/')
    except Exception as e:
        return Response({'error': 'Invalid token or user not found'}, status=400)


class SocialAccountListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user
        social_accounts = SocialAccount.objects.filter(user=user)
        data = [
            {
                'provider': acc.provider,
                'uid': acc.uid,
            }
            for acc in social_accounts
        ]
        return Response(data)


class GitHubStatsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, username, *args, **kwargs):
        headers = {'User-Agent': 'utopia-craft-backend'}
        github_app = settings.SOCIALACCOUNT_PROVIDERS.get('github', {}).get('APP', {})
        client_id = github_app.get('client_id')
        client_secret = github_app.get('secret')
        auth_params = f"&client_id={client_id}&client_secret={client_secret}"

        try:
            # Contributions and PRs
            contrib_url = f'https://api.github.com/search/issues?q=author:{username}{auth_params}'
            contrib_response = requests.get(contrib_url, headers=headers)
            contrib_response.raise_for_status()
            contributions = contrib_response.json().get('total_count', 0)

            pr_url = f'https://api.github.com/search/issues?q=author:{username}+is:pr{auth_params}'
            pr_response = requests.get(pr_url, headers=headers)
            pr_response.raise_for_status()
            pull_requests = pr_response.json().get('total_count', 0)

            # Stars
            repos_url = f'https://api.github.com/users/{username}/repos?client_id={client_id}&client_secret={client_secret}&per_page=100'
            repos_response = requests.get(repos_url, headers=headers)
            repos_response.raise_for_status()
            repos = repos_response.json()
            total_stars = sum(repo.get('stargazers_count', 0) for repo in repos)

            stats = {
                'contributions': contributions,
                'pull_requests': pull_requests,
                'stars_earned': total_stars,
            }
            return Response(stats)
        except requests.exceptions.RequestException as e:
            return Response({'error': f'Failed to fetch stats from GitHub: {str(e)}'}, status=503)


class GitHubActivityView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, username, *args, **kwargs):
        headers = {'User-Agent': 'utopia-craft-backend'}
        github_app = settings.SOCIALACCOUNT_PROVIDERS.get('github', {}).get('APP', {})
        client_id = github_app.get('client_id')
        client_secret = github_app.get('secret')
        auth_params = f"?client_id={client_id}&client_secret={client_secret}"

        try:
            url = f'https://api.github.com/users/{username}/repos{auth_params}&sort=pushed&per_page=5'
            response = requests.get(url, headers=headers)
            response.raise_for_status()
            repos = response.json()
            formatted_repos = []
            for repo in repos:
                if not repo.get('fork'):
                    formatted_repos.append({
                        'repo': repo.get('name'),
                        'description': repo.get('description'),
                        'language': repo.get('language'),
                        'stars': repo.get('stargazers_count'),
                        'url': repo.get('html_url'),
                        'pushed_at': repo.get('pushed_at'),
                    })
            return Response(formatted_repos)
        except requests.exceptions.RequestException as e:
            return Response({'error': f'Failed to fetch activity from GitHub: {str(e)}'}, status=503)


class GitHubSkillsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, username, *args, **kwargs):
        headers = {'User-Agent': 'utopia-craft-backend'}
        github_app = settings.SOCIALACCOUNT_PROVIDERS.get('github', {}).get('APP', {})
        client_id = github_app.get('client_id')
        client_secret = github_app.get('secret')
        auth_params = f"?client_id={client_id}&client_secret={client_secret}"
        language_counts = {}
        language_projects = {}

        try:
            repos_url = f'https://api.github.com/users/{username}/repos{auth_params}&per_page=100'
            repos_response = requests.get(repos_url, headers=headers)
            repos_response.raise_for_status()
            repos = repos_response.json()

            for repo in repos:
                if not repo.get('fork'):
                    lang = repo.get('language')
                    if lang:
                        language_counts[lang] = language_counts.get(lang, 0) + 1
                        language_projects[lang] = language_projects.get(lang, 0) + 1

            total_repos_with_lang = sum(language_counts.values())
            skills = []
            if total_repos_with_lang > 0:
                for lang, count in language_counts.items():
                    skills.append({
                        'name': lang,
                        'level': round((count / total_repos_with_lang) * 100),
                        'projects': language_projects.get(lang, 0)
                    })
                skills = sorted(skills, key=lambda x: x['level'], reverse=True)[:5]
            return Response(skills)
        except requests.exceptions.RequestException as e:
            return Response({'error': f'Failed to fetch skills from GitHub: {str(e)}'}, status=503)
