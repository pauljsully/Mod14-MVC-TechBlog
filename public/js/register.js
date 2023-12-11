const resisterFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-resister').value.trim();
    const password = document.querySelector('#password-resister').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
  .querySelector('.resister-form')
  .addEventListener('submit', resisterFormHandler);