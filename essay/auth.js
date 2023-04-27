// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




const registerForm = document.querySelector('#register-form');
		const emailInput = document.querySelector('#email');
		const passwordInput = document.querySelector('#password');
		const passwordConfirmInput = document.querySelector('#password-confirm');
	  
		registerForm.addEventListener('submit', async (event) => {
		  event.preventDefault();
	  
		  // Validate input fields
		  if (passwordInput.value !== passwordConfirmInput.value) {
			alert('Passwords do not match');
			return;
		  }
	  
		  try {
			// Create user with email and password
			const { user } = await createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
	  
			// Redirect user to dashboard or show success message
			console.log('User registered:', user);
		  } catch (error) {
			console.error(error);
			alert(error.message);
		  }
		});
	  
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
      // Sign in user with email and password
      const { user } = await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);

      // Redirect user to dashboard or show success message
      console.log('User logged in:', user);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  });
