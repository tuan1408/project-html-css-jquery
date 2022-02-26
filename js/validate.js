// handle message error
export const inputClearMessage = (callback, id) => {
  $(`#${id}`).on("input", function () {
    const inputValue = $(`#${id}`).val();

    if (callback(inputValue)) {
      $(`#error-message-${id}`).text("");
      return false;
    }
    return true;
  });
};
// callback
export const inputRequiredCheck = (string) => {
  if (string.length > 0) {
    return true;
  }
  return false;
};

// check format
const checkEmailFormat = () => {
  const regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  if (regex.test(emailItem.value)) {
    return true;
  } else {
    return false;
  }
};
// check email
export const checkEmail = (emailItem) => {
  if (!checkEmailFormat) {
    $("#error-message-" + emailItem.name).text("Vui long nhap email");
    return false;
  } else {
    $("#error-message-" + emailItem.name).text("");
    return true;
  }
};

// check value
export const checkValuesRequired = (item) => {
  if (item.value == "" && item.isRequired) {
    $("#error-message-" + item.name).text("Vui long nhap truong nay");
    return false;
  } else {
    $("#error-message-" + item.name).text("");
    return true;
  }
};
// get value
export const getValue = (listItems) => {
  const newValue = listItems.map((item) => {
    return {
      name: item.name,
      value: $.trim($("#" + item.name).val()),
      isRequired: item.isRequired,
    };
  });
  return newValue;
};
