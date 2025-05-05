# Spotify

pip install django

python -m django startproject website

pip install pymysql

python manage.py makemigrations

python manage.py migrate

python manage.py createsuperuser

python -m django startapp sportify

python manage.py runserver

# 🎧 Spotify Clone

A simple Spotify-like music web app built with Python Django (backend), Bootstrap 5 (frontend), and MySQL (database).

## 🚀 Features

- 👤 Admin can:
  - Add, edit, delete songs
  - Manage user accounts
- 🎵 User can:
  - Browse available songs
  - Create and manage personal favorite albums
  - Play music stored on the server

## 🛠️ Tech Stack

- **Backend:** Python 3, Django
- **Frontend:** HTML, CSS, Bootstrap 5
- **Database:** MySQL
- **Media:** Stored locally (e.g. in `media/` folder)

## 📦 Setup & Installation

```bash
# Clone the repository
git clone https://github.com/your-username/spotify-clone.git
cd spotify-clone

# Create virtual environment (optional but recommended)
python -m venv venv
venv\Scripts\activate  # on Windows

# Install dependencies
pip install -r requirements.txt

# Configure your database in settings.py
# Then run:
python manage.py makemigrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Run the server
python manage.py runserver
