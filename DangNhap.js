import { AddUser, CheckUser } from "./firebase/firebase.js";

document.addEventListener("DOMContentLoaded", () => {
    //Lấy thẻ đăng nhập từ html 
    var formDangNhap = document.getElementById("formDangNhap");
    //Lấy thẻ đăng ký từ html 
    var formDangKy = document.getElementById("formDangKy");
    //Lấy thẻ giỏ hàng từ html
    var formGioHang = document.getElementById("formGioHang");
    //Click nút đăng nhập
    document.getElementById("btnDangNhap").onclick = function () {
        formDangNhap.style.display = "flex";
    }
    //Click nút đăng ký
    document.getElementById("btnDangKy").onclick = function () {
        formDangKy.style.display = "flex";
    }

    //Click nút giỏ hàng
    document.getElementById("btnGioHang").onclick = function () {
        formGioHang.style.display = "flex";
    }

    //Click nút thanh toán
    document.getElementById("btnGioHang").onclick = function () {
        formGioHang.style.display = "flex";
    }

    //Click nút thoát
    var btnExitList = document.getElementsByClassName("btnExit");
    for (var i = 0; i < btnExitList.length; i++) {
        btnExitList[i].onclick = function () {
            formDangNhap.style.display = "none";
            formDangKy.style.display = "none";
            formGioHang.style.display = "none";

        }
    }

    document.getElementById("btnDangNhapSubmit").onclick = function () {
        var user = new Object();

        //lấy sđt từ thẻ input
        user.phone = document.querySelector("input[name='phone']").value;

        //lấy mật khẩu từ thể input
        user.pass = document.querySelector("input[name='pass']").value;

        if (!user || !user.phone || !user.pass) {
            alert("Vui lòng nhập số điện thoại và mật khẩu");
            return;
        }

        //Thêm tài khoản vào database
        CheckUser(user, function (result) {
            if (result) {
                alert("Đăng nhập thành công");
            } else {
                alert("Sai tài khoản hoặc mật khẩu");
            }
        });
    }

    document.getElementById("btnDangKySubmit").onclick = function () {
        var user = new Object();
        //lấy sđt từ thẻ input
        user.phone = document.querySelector("input[name='phoneDK']").value;
        //lấy mật khẩu từ thể input
        user.pass = document.querySelector("input[name='passDK']").value;

        if (!user || !user.phone || !user.pass) {
            alert("Vui lòng nhập số điện thoại và mật khẩu");
            return;
        }

        //Thêm tài khoản vào database
        AddUser(user);
        alert("Đăng ký thành công");
    }

});



