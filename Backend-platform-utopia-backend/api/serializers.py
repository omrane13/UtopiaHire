from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import Profile

class UserSerializer(serializers.ModelSerializer):
    date_of_birth = serializers.DateField(write_only=True, required=False)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'first_name', 'last_name', 'date_of_birth')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        date_of_birth = validated_data.pop('date_of_birth', None)
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', '')
        )
        if date_of_birth:
            Profile.objects.create(user=user, date_of_birth=date_of_birth)
        return user


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('location', 'date_of_birth', 'job_title', 'github_username', 'linkedin_url', 'website_url', 'additional_website_url')


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        # The default validation uses username, so we'll fetch the user by email
        # and pass their username to the default validation.
        email_as_username = attrs.get('username')
        try:
            user = User.objects.get(email=email_as_username)
            # The default validator needs the user's actual username, not their email.
            attrs['username'] = user.username
        except User.DoesNotExist:
            # The user with this email does not exist, so we raise a validation error.
            raise serializers.ValidationError("No active account found with the given credentials")

        data = super().validate(attrs)

        # Add user data to the response
        # Ensure profile exists
        profile, created = Profile.objects.get_or_create(user=self.user)

        data['user'] = {
            'id': self.user.id,
            'username': self.user.username,
            'email': self.user.email,
            'first_name': self.user.first_name,
            'last_name': self.user.last_name,
            'date_joined': self.user.date_joined.isoformat(),
            'profile': ProfileSerializer(profile).data,
        }

        return data
