$(document).ready(function(){
    $("input[type='text']").css({"width": "500"})

var selectNgay = $("select[name='ngay']");
for (var i = 1; i <= 31; i++) {
  selectNgay.append('<option value="' + i + '">' + i + '</option>');
}

var selectThang = $("select[name='thang']");
for (var i = 1; i <= 31; i++) {
  selectThang.append('<option value="' + i + '">' + i + '</option>');
}

var selectNam = $("select[name='nam']");
for(var i  = 1940 ; i < 2025; i++) {
  selectNam.append(
    '<option value = "' + i +'">' + i + '<option>'
  )
}

function checkName() {
    var name = $("#txtHoTen").val();
    var nameRegex = /([A-Z][a-z]*)*([A-Z][a-z]*)/;

    if(!nameRegex.test(name)) {
      $('#errName').text('Bắt đầu bằng chữ hoa');
      $('#errName').css({"color" : "red"});
      return false;
    } else {
      $('#errName').text('(*)');
      return true;
    }
}

function checkLogin() {
    var login = $("#txtLogin").val();
    var regexLogin = /[A-Za-z\s]{6,}/;

    if(!regexLogin.test(login)) {
      $('#errLogin').text('Phải trên 6 ký tự');
      $('#errLogin').css({"color" : "red"});
      return false; 
    } else {
      $('#errLogin').text('(*)');
      return true;
    }
} 

function checkPass() {
  var pass = $('#txtPass').val();
  var regexPass = /[A-Za-z0-9]+/;

  if(!regexPass.test(pass)) {
      $('#errPass').text('Không chứa khoảng trắng và ký tự đặc biệt');
      $('#errPass').css({"color" : "red"});
      return false;
  }else {
    $('#errPass').text('(*)');
    return true;
  }
}

  $("#txtLogin").on('blur',function() {
    checkLogin();
  })

  $("#txtPass").on('blur',function() {
    checkPass();
  })

  $("#txtHoTen").on('blur',function() {
    checkName();
  })

  function checkConfirm() {
    var pass = $('#txtPass').val();
      var confirm = $('#txtXacNhan').val();

      if((!checkPass() && pass===confirm) || pass !== confirm) {
          $('#errXacNhan').text('Không đúng');
          $('#errXacNhan').css({"color" : "red"});
          return false;
      } else if (checkPass() && pass===confirm) {
          $('#errXacNhan').text('Hợp lệ');
          return true;
      }
  }
  $("#txtXacNhan").on('blur',function() {
      checkConfirm();
  })


  $("#btnDK").click(function(){
    if(checkLogin() && checkName() && checkPass() && checkConfirm()) {
      var ten = $("#txtHoTen").val();
      var login = $('#txtLogin').val();
      var mk = $('#txtPass').val();
      var ngay = $("select[name='ngay']").val();
      var thang = $("select[name='thang']").val() ;
      var nam  = $("select[name='nam']").val();
      var ngaySinh = ngay + '/' + thang + '/' + nam;
      var dienThoai = $('#txtDT').val();
      var diaChi = $('#txtDC').val();
      var email = $('#txtEmail').val();
      var soThich = $('#selectSoThich').val();

      localStorage.setItem("ten",ten);
      localStorage.setItem("login",login);
      localStorage.setItem("mk",mk);
      localStorage.setItem("ngaySinh",ngaySinh);
      localStorage.setItem("dienThoai",dienThoai);
      localStorage.setItem("diaChi",diaChi);
      localStorage.setItem("email",email);
      localStorage.setItem("soThich",soThich);

      window.location.href = "thongtin.html";
    }
    else {
      alert('Điền đầy đủ thông tin');
    }
  })
});   