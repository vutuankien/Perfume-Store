function signup(){
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    if (email === '' || password === '') {
        alert('Vui lòng nhập đầy đủ thông tin.');
        return;
    }
    if (localStorage.getItem(email)) {
        alert('Tên đăng nhập đã tồn tại.');
        return;
    }
    localStorage.setItem(email, password);
    alert('Đăng kí thành công!');

    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';


}
function login(){
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === '' || password === '') {
        alert('Vui lòng nhập đầy đủ thông tin.');
        return;
    }

    const storedPassword = localStorage.getItem(email);

    if (storedPassword === null) {
        alert('Tên đăng nhập không tồn tại.');
        return;
    }

    if (storedPassword !== password) {
        alert('Mật khẩu không đúng.');
        return;
    }
    alert('Dang nhap thanh cong');
    var newUrl = window.location.protocol + "//" + window.location.host + "/login_page/test.html";
    window.history.replaceState({ path: newUrl }, '', newUrl);
}
