 document.addEventListener('DOMContentLoaded', function() {
            const loginTab = document.getElementById('login-tab');
            const signupTab = document.getElementById('signup-tab');
            const loginForm = document.getElementById('login-form');
            const signupForm = document.getElementById('signup-form');
            const toSignup = document.getElementById('to-signup');
            const toLogin = document.getElementById('to-login');
            
            //Signup form
            signupTab.addEventListener('click', function() {
                loginTab.classList.remove('active');
                signupTab.classList.add('active');
                loginForm.classList.add('form-hidden');
                signupForm.classList.remove('form-hidden');
            });
            
            toSignup.addEventListener('click', function(e) {
                e.preventDefault();
                signupTab.click();
            });
            
            //Login form
            loginTab.addEventListener('click', function() {
                signupTab.classList.remove('active');
                loginTab.classList.add('active');
                signupForm.classList.add('form-hidden');
                loginForm.classList.remove('form-hidden');
            });
            
            toLogin.addEventListener('click', function(e) {
                e.preventDefault();
                loginTab.click();
            });
        });