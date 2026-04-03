# Utopia Craft Backend

A Django REST API backend for the Utopia Craft application, providing user authentication, profile management, and API endpoints.

## 🚀 Features

- **User Authentication**: JWT-based authentication with custom token serialization
- **User Registration**: User registration with optional profile information
- **Profile Management**: User profiles with location, date of birth, and job title
- **REST API**: Django REST Framework powered API endpoints
- **CORS Support**: Cross-Origin Resource Sharing enabled for frontend integration
- **Admin Panel**: Django admin interface for data management

## 🛠️ Technology Stack

- **Django 5.2.7**: Web framework
- **Django REST Framework**: API development
- **Django REST Framework SimpleJWT**: JWT authentication
- **Django CORS Headers**: CORS handling
- **SQLite**: Database (development)
- **Python 3.11**: Programming language

## 📋 Prerequisites

- Python 3.11 or higher
- pip (Python package manager)

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd utopia_craft_backend
```

### 2. Activate Virtual Environment
The project uses a virtual environment located in the `vem/` directory:

```bash
# On Linux/macOS
source vem/bin/activate

# On Windows
vem\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Database Setup
Run migrations to set up the database:

```bash
python manage.py migrate
```

### 5. Create Superuser (Optional)
To access the Django admin panel:

```bash
python manage.py createsuperuser
```

### 6. Run the Development Server
```bash
python manage.py runserver
```

The API will be available at `http://127.0.0.1:8000/`

## 📚 API Endpoints

### Authentication
- `POST /api/token/` - Obtain JWT token (login with email/password)
- `POST /api/token/refresh/` - Refresh JWT token
- `POST /api/register/` - User registration

### User Profile
- `GET /api/profile/` - Get current user's profile
- `PUT /api/profile/` - Update current user's profile
- `PATCH /api/profile/` - Partially update current user's profile

### Admin
- `/admin/` - Django admin panel

## 🔐 Authentication

The API uses JWT (JSON Web Token) authentication. To access protected endpoints:

1. **Login**: Send a POST request to `/api/token/` with email and password
2. **Use Token**: Include the access token in the Authorization header:
   ```
   Authorization: Bearer <your_access_token>
   ```
3. **Refresh Token**: Use the refresh token at `/api/token/refresh/` when the access token expires

### Login Example
```json
POST /api/token/
{
    "username": "user@example.com",
    "password": "your_password"
}
```

Response:
```json
{
    "access": "<access_token>",
    "refresh": "<refresh_token>",
    "user": {
        "id": 1,
        "username": "user@example.com",
        "email": "user@example.com",
        "first_name": "John",
        "last_name": "Doe",
        "date_joined": "2025-10-24T22:17:00Z",
        "profile": {
            "location": "New York",
            "date_of_birth": "1990-01-01",
            "job_title": "Developer"
        }
    }
}
```

## 👤 User Registration

Register a new user with optional profile information:

```json
POST /api/register/
{
    "username": "newuser",
    "email": "newuser@example.com",
    "password": "secure_password",
    "first_name": "Jane",
    "last_name": "Smith",
    "date_of_birth": "1992-05-15"
}
```

## 👥 User Profile Management

Update user profile information:

```json
PUT /api/profile/
{
    "location": "San Francisco",
    "date_of_birth": "1990-01-01",
    "job_title": "Senior Developer"
}
```

## 🗂️ Project Structure

```
utopia_craft_backend/
├── api/                          # Main API application
│   ├── migrations/              # Database migrations
│   ├── models.py               # Data models (Profile)
│   ├── serializers.py          # API serializers
│   ├── views.py                # API views
│   ├── urls.py                 # API URL patterns
│   └── admin.py                # Admin configuration
├── utopia_craft_backend/        # Project configuration
│   ├── settings.py             # Django settings
│   ├── urls.py                 # Main URL configuration
│   ├── wsgi.py                 # WSGI application
│   └── asgi.py                 # ASGI application
├── vem/                         # Virtual environment
├── manage.py                    # Django management script
├── db.sqlite3                   # SQLite database
├── requirements.txt             # Python dependencies
└── README.md                    # This file
```

## 🔄 Development Workflow

1. **Activate Virtual Environment**: `source vem/bin/activate`
2. **Install Dependencies**: `pip install -r requirements.txt`
3. **Make Migrations**: `python manage.py makemigrations`
4. **Apply Migrations**: `python manage.py migrate`
5. **Run Server**: `python manage.py runserver`
6. **Run Tests**: `python manage.py test`

## 🌐 CORS Configuration

CORS is configured to allow all origins in development. For production, update the `CORS_ALLOW_ALL_ORIGINS` setting in `settings.py` and specify allowed origins:

```python
CORS_ALLOW_ALL_ORIGINS = False
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://your-frontend-domain.com",
]
```

## 🗃️ Database Models

### Profile Model
- `user`: OneToOne relationship with Django User
- `date_of_birth`: Optional date field
- `location`: Optional location string (max 100 chars)
- `job_title`: Optional job title string (max 100 chars)

## 🚨 Security Notes

- Change the `SECRET_KEY` in production
- Set `DEBUG = False` in production
- Configure proper `ALLOWED_HOSTS` in production
- Use a production database (PostgreSQL recommended)
- Set up proper CORS origins for production

## 📝 Environment Variables

For production, consider using environment variables for sensitive settings:

- `SECRET_KEY`
- `DEBUG`
- `DATABASE_URL`
- `ALLOWED_HOSTS`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact the development team or create an issue in the repository.