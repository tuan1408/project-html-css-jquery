import {
  inputClearMessage,
  inputRequiredCheck,
  checkEmail,
  checkValuesRequired,
  getValue,
} from "./validate.js";

// docoment is ready
$(document).ready(function () {
  const arr = [
    "maso",
    "masinhvien",
    "prename",
    "name",
    "born",
    "status",
    "email",
    "sex",
    "date",
  ];

  arr.map((item) => {
    return inputClearMessage(inputRequiredCheck, item);
  });

  const listItems = [
    { name: "dateRange", isRequired: false },
    { name: "phone", isRequired: false },
    { name: "place", isRequired: false },
    { name: "address", isRequired: false },
    { name: "masinhvien", isRequired: true },
    { name: "prename", isRequired: true },
    { name: "maso", isRequired: true },
    { name: "name", isRequired: true },
    { name: "email", isRequired: true },
    { name: "sex", isRequired: true },
    { name: "status", isRequired: true },
    { name: "indenty", isRequired: false },
    { name: "religon", isRequired: false },
    { name: "born", isRequired: true },
    { name: "ethnic", isRequired: false },
    { name: "note", isRequired: false },
    { name: "date", isRequired: true },
  ];

  // // get value
  // const getValue = (listItems) => {
  //   const newValue = listItems.map((item) => {
  //     return {
  //       name: item.name,
  //       value: $.trim($("#" + item.name).val()),
  //       isRequired: item.isRequired,
  //     };
  //   });
  //   return newValue;
  // };

  let emailItem = {
    name: "email",
    value: $.trim($("#email").val()),
    message: "email",
  };
  // // check format
  // const checkEmailFormat = () => {
  //   const regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  //   if (regex.test(emailItem.value)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  // // check email
  // const checkEmail = (emailItem) => {
  //   if (checkEmailFormat) {
  //     $("#error-message-" + emailItem.name).text("Vui long nhap email");
  //     return false;
  //   } else {
  //     $("#error-message-" + emailItem.name).text("");
  //     return true;
  //   }
  // };

  // // check value
  // const checkValuesRequired = (item) => {
  //   if (item.value == "" && item.isRequired === true) {
  //     $("#error-message-" + item.name).text("Vui long nhap truong nay");
  //     return false;
  //   } else {
  //     $("#error-message-" + item.name).text("");
  //     return true;
  //   }
  // };

  // validate form
  const validateForm = () => {
    checkEmail(emailItem);

    getValue(listItems).map((item, index) => {
      if (item.isRequired) {
        checkValuesRequired(item);
      } else {
        return true;
      }
    });
  };

  // handle submit button
  $("#button-submit").click(function (e) {
    e.preventDefault();

    getValue(listItems);
    validateForm();
    console.log(
      getValue(listItems).map((item) => {
        return {
          name: item.name,
          value: item.value,
        };
      })
    );

    if (Boolean(validateForm())) {
      window.location.assign("./studentPage.html");
    }
  });

  // handle cancle button
  $("#button-cancle").click(function (e) {
    e.preventDefault();
    console.log("cancle");
  });
});
