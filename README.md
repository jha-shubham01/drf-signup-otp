# Signup in Django, and DRF using OTP
This project is used for creating user signup in Django, and Django Rest Framework by using OTP<br/>
And limiting the OTP sending to 3 times. After 3rd OTP user can request a new OTP after an hour.

## To run the project
Prerequisites: Python3, virutalenv

1. Checkout the code
2. Create a virtual environment (virutalenv .env)
3. Activate the environment (source .env/bin/activate)
4. Install all the packages (pip install -r requirements.txt)
5. Navigate inside the project (cd src)
6. Migrate (python manage.py migrate)
7. Create a superuser (python manage.py createsuperuser) <br />
   Fill in all the details on the terminal to create the superuser
8. Run the backend server (python manage.py runserver)
9. Visit the server link (http://localhost:8000/)

## Video Example:
Part 1: https://youtu.be/41YtXPA-Jjg<br/>
Part 2: Coming soon...
