$(document).ready(function () {
  $("#form-search").submit(function (e) {
    e.preventDefault();

    const name = $("#name").val();
    const maso = $("#maso").val();
    const masinhvien = $("#masinhvien").val();

    if ((name, maso, masinhvien)) {
      console.log({
        name,
        maso,
        masinhvien,
      });
    }
  });

  $("#button__redirect-add").click(() => {
    window.location.assign("./addPage.html");
  });
});
