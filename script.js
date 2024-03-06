document.addEventListener("DOMContentLoaded", function () {
  // Khai báo biến để lưu trạng thái đăng nhập
  var isLoggedIn = false;

  // Lấy phần nội dung chính và phần đăng nhập
  var mainContent = document.getElementById("main-content");
  var loginForm = document.getElementById("login-form");

  // Ẩn phần nội dung chính ban đầu
  mainContent.style.display = "none";

  // Bắt sự kiện khi người dùng gửi biểu mẫu đăng nhập
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu

    // Lấy giá trị của ô nhập tên đăng nhập và mật khẩu
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    // Kiểm tra tên đăng nhập và mật khẩu
    // Trong trường hợp thực, bạn có thể thay thế đoạn mã này bằng việc kiểm tra với dữ liệu đăng nhập thực tế từ máy chủ
    if (usernameInput === "Sis Mười Anh" && passwordInput === "26sis10Anh") {
      isLoggedIn = true; // Đặt trạng thái đăng nhập là true
      loginForm.style.display = "none"; // Ẩn biểu mẫu đăng nhập
      mainContent.style.display = "block"; // Hiển thị phần nội dung chính
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại.");
    }
  });
});

var viewMoreButtons = document.querySelectorAll(".view-more");

viewMoreButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var description = this.nextElementSibling;
    // Toggle hiển thị miêu tả ẩn
    if (
      description.style.display === "none" ||
      description.style.display === ""
    ) {
      description.style.display = "block";
      this.textContent = "View less";
    } else {
      description.style.display = "none";
      this.textContent = "View more";
    }
  });
});
