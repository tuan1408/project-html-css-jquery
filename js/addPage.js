const inputClearMessage = (callback, id) => {
  $(`#${id}`).on("input", function () {
    const inputValue = $(`#${id}`).val();

    if (callback(inputValue)) {
      $(`#error-message-${id}`).text("");
      return false;
    }
    return true;
  });
};
const inputRequiredCheck = (string) => {
  if (string.length > 0) {
    return true;
  }
  return false;
};

$(document).ready(function () {
  inputClearMessage(inputRequiredCheck, "maso");
  inputClearMessage(inputRequiredCheck, "masinhvien");
  inputClearMessage(inputRequiredCheck, "prename");
  inputClearMessage(inputRequiredCheck, "name");
  inputClearMessage(inputRequiredCheck, "born");
  inputClearMessage(inputRequiredCheck, "status");
  inputClearMessage(inputRequiredCheck, "email");

  inputClearMessage(inputRequiredCheck, "sex");
  inputClearMessage(inputRequiredCheck, "date");

  $("#button-submit").click(function (e) {
    e.preventDefault();
    // const maso = $.trim($("#maso").val());
    // const masinhvien = $.trim($("#masinhvien").val());
    // const prename = $.trim($("#prename").val());
    // const name = $.trim($("#name").val());
    // const sex = $.trim($("#sex").val());
    // const date = $.trim($("#date").val());
    // const born = $.trim($("#born").val());
    // const email = $.trim($("#email").val());
    // const status = $.trim($("#status").val());
    // const ethnic = $.trim($("#ethnic").val());
    // const religion = $.trim($("#religion").val());
    // const indenty = $.trim($("#indenty").val());
    // const dateRange = $.trim($("#dateRange").val());
    // const phone = $.trim($("#phone").val());
    // const note = $.trim($("#note").val());
    // const place = $.trim($("#place").val());
    // const address = $.trim($("#address").val());

    const listItems = [
      "dateRange",
      "phone",
      "note",
      "place",
      "address",
      "maso",
      "masinhvien",
      "prename",
      "name",
      "sex",
      "date",
      "born",
      "email",
      "status",
      "ethnic",
      "religon",
      "indenty",
    ];

    const getValue = (listId) => {
      const newValue = listId.map((id) => {
        return {
          name: id,
          value: $.trim($("#" + id).val()),
        };
      });
      console.log(newValue);
    };
    getValue(listItems);

    let flag = true;

    const validateForm = () => {
      let requiredItem = [
        { name: "maso", value: maso, message: "ma so" },
        { name: "name", value: name, message: "ten" },
        { name: "masinhvien", value: masinhvien, message: "ma sinh vien" },
        { name: "prename", value: prename, message: "ho dem" },
        { name: "born", value: born, message: "noi sinh" },
        { name: "sex", value: sex, message: "gioi tinh" },
        { name: "date", value: date, message: "ngay sinh" },
        { name: "status", value: status, message: "trang thai" },
      ];
      let emailItem = { name: "email", value: email, message: "email" };

      const checkEmail = (emailItem) => {
        const regex =
          /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if (!regex.test(emailItem.value) || emailItem.value == "") {
          $("#error-message-" + emailItem.name).text("Vui long nhap email");
          flag = false;
        } else {
          $("#error-message-" + emailItem.name).text("");
          flag = true;
        }
      };
      checkEmail(emailItem);

      const checkValuesRequired = (item) => {
        if (item.value == "") {
          $("#error-message-" + item.name).text("Vui long nhap truong nay");
          flag = false;
        } else {
          $("#error-message-" + item.name).text("");
          flag = true;
        }
      };
      requiredItem.map((item, index) => {
        checkValuesRequired(item);
      });
    };
    validateForm();

    if (flag) {
      console.log({
        maso,
        masinhvien,
        prename,
        name,
        sex,
        date,
        born,
        ethnic,
        religion,
        dateRange,
        indenty,
        date,
        place,
        phone,
        email,
        address,
        note,
        status,
      });
    }
  });

  $("#button-cancle").click(function (e) {
    e.preventDefault();
    console.log("cancle");
  });
});
