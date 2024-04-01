document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'admin') {
      window.location.href = 'admin.html'; // Chuyển hướng sang trang quản trị
    } else {
      document.getElementById('error-message').textContent = 'Tài khoản hoặc mật khẩu không chính xác';
    }
  });
  