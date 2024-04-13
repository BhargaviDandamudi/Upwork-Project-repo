from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import SignUpForm, LoginForm  # Import your custom signup and login forms
def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)  # Initialize the signup form with POST data
        if form.is_valid():  # Check if form data is valid
            user = form.save()  # Save user to the database
            login(request, user)  # Log in the user
            return redirect('home')  # Redirect to home page after successful signup
    else:
        form = SignUpForm()  # Initialize an empty signup form

    return render(request, 'signup.html', {'form': form})  # Render the signup form template

def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)  # Initialize the login form with POST data
        if form.is_valid():  # Check if form data is valid
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)  # Authenticate user
            if user is not None:  # If authentication is successful
                login(request, user)  # Log in the user
                return redirect('home')  # Redirect to home page after successful login
            else:
                # Display error message for invalid credentials
                return render(request, 'login.html', {'form': form, 'error': 'Invalid username or password'})
    else:
        form = LoginForm()  # Initialize an empty login form

    return render(request, 'login.html', {'form': form})  # Render the login form template
