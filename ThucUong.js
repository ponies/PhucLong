document.addEventListener("DOMContentLoaded", () => {
    //Lấy thẻ đăng nhập từ html 
    var formOrderDoUong = document.getElementById("formOrderDoUong");
    //Click nút đăng nhập
    document.getElementById("btnDatHang").onclick = function () {
        formOrderDoUong.style.display = "flex";
    }

    var btnExitList = document.getElementsByClassName("btnExit");
    for (var i = 0; i < btnExitList.length; i++) {
        btnExitList[i].onclick = function () {
            formOrderDoUong.style.display="none";
            formDangNhap.style.display = "none";
            formDangKy.style.display = "none";
            formGioHang.style.display="none";
        }
    }
});