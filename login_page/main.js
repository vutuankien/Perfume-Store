function signup(){
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    if (email === '' || password === '') {
        swal("Vui lòng nhập đầy đủ thông tin !");
        return;
    }
    if (localStorage.getItem(email)) {
        swal("Tên đăng nhập đã tồn tại !");
        return;
    }
    localStorage.setItem(email, password);
    swal("Đăng ký thành công","", "Success");

    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';


}
function login(){
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === '' || password === '') {
        swal("Vui lòng nhập đầy đủ thông tin !");
        return;
    }

    const storedPassword = localStorage.getItem(email);

    if (storedPassword === null) {
        swal("Tên đăng nhập không tồn tại!");
        return;
    }

    if (storedPassword !== password) {
        swal('Mật khẩu không đúng.');
        return;
    }
    swal('Đăng nhập thành công !', "Chúc bạn có 1 trải nghiệm vui vẻ","Success");
    setTimeout(() => {
        window.location.href = '/index.html';
    }, 3000);

    console.log("say hello if logged in");

}
