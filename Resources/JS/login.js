
function validate () {
  var username = document.getElementById('username').value
var password = document.getElementById('password').value
if (username === 'edi' && password === '12345') {
  window.open('https://supplypike.com/spedi')
} else { alert('login unsucessfully') }
};
