// import { inputClearMessage, inputRequiredCheck } from "../js/validate";

$(document).ready(function () {
  const arr = ["name", "password"];

  arr.map((item) => {
    return inputClearMessage(inputRequiredCheck, item);
  });

  $("#form-login").submit(function (e) {
    e.preventDefault();
    const name = $.trim($("#name").val());
    const password = $.trim($("#password").val());

    let flag = true;

    if (name == "") {
      $("#error-message-name").text("Vui long nhap truong nay");
      flag = false;
    } else {
      $("#error-message-name").text("");
    }

    if (password.length <= 0) {
      $("#error-message-password").text("Ban phai nhap mat khau");
      flag = false;
    } else {
      $("#error-message-password").text("");
    }

    if (flag) {
      console.log({
        name,
        password,
      });
    }

    if (flag) {
      window.location.assign("./studentPage.html");
    }
  });
});
