$(document).ready(function () {
  $("#muavao").focus();

  $("#muavao").on("input", function () {
    if (!isNaN($(this).val()) && $(this).val() != "") {
      $("#state").removeAttr("disabled");
    }
  });
  $("#chon").change(function () {
    if ($(this).val() == "Toyota") {
      $("#imgcar").attr("src", "../img/car1.jpg");
      $("#pricecar").text("Giá : 35000 USD");
    }
    if ($(this).val() == "KIA") {
      $("#imgcar").attr("src", "../img/car2.jpg");
      $("#pricecar").text("Giá : 15000 USD");
    }
    if ($(this).val() == "Ford") {
      $("#imgcar").attr("src", "../img/car3.jpg");
      $("#pricecar").text("Giá : 40000 USD");
    }
    if ($(this).val() == "Civic") {
      $("#imgcar").attr("src", "../img/car4.jpg");
      $("#pricecar").text("Giá : 32000 USD");
    }
    if ($(this).val() == "Ferrari") {
      $("#imgcar").attr("src", "../img/car5.jpg");
      $("#pricecar").text("Giá : 50000 USD");
    }
    if ($(this).val() == "Mercedes") {
      $("#imgcar").attr("src", "../img/car6.jpg");
      $("#pricecar").text("Giá : 45000 USD");
    }
  });

  $("#update").click(function () {
    if ($("#v").prop("checked")) {
      $("#v_muavao").text($("#muavao").val());
      $("#v_banra").text($("#banra").val());
    }
    if ($("#u").prop("checked")) {
      $("#u_muavao").text($("#muavao").val());
      $("#u_banra").text($("#banra").val());
    }
  });
});
