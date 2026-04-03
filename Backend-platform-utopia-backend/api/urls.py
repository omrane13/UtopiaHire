from django.urls import path
from .views import RegisterView, ProfileUpdateView, SocialAccountListView, social_connect, GitHubStatsView, GitHubActivityView, GitHubSkillsView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('github-activity/<str:username>/', GitHubActivityView.as_view(), name='github-activity'),
    path('github-stats/<str:username>/', GitHubStatsView.as_view(), name='github-stats'),
    path('github-skills/<str:username>/', GitHubSkillsView.as_view(), name='github-skills'),
    path('social-accounts/', SocialAccountListView.as_view(), name='social-accounts'),
    path('connect/<str:provider>/', social_connect, name='social-connect'),
    path('profile/', ProfileUpdateView.as_view(), name='profile-update'),
]
