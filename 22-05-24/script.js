document.getElementById('toggle-password').addEventListener('click', function (e) {
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('toggle-eye');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  
  if (type === 'password') {
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  } else {
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  }
});

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Basic validation (Replace this with actual validation logic)
  if (username === 'user' && password === 'pass') {
    window.location.href = 'asset.html';
  } else {
    alert('Invalid username or password');
  }
});
