document.addEventListener("DOMContentLoaded", () => {
    //Lấy thẻ đăng nhập từ html 
    var formOrderBanh = document.getElementById("formOrderBanh");
    //Click nút đăng nhập
    document.getElementById("btnDatBanh").onclick = function () {
        formOrderBanh.style.display = "flex";
    }

    var btnExitList = document.getElementsByClassName("btnExit");
    for (var i = 0; i < btnExitList.length; i++) {
        btnExitList[i].onclick = function () {
            formOrderBanh.style.display="none";
            formDangNhap.style.display = "none";
            formDangKy.style.display = "none";
            formGioHang.style.display="none";
        }
    }
});