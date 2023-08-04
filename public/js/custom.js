

// window.onload = function() {
//     document.getElementById('bdy').className = 'ls-toggle-menu';
//   };
// document.addEventListener('DOMContentLoaded', function() {
//     document.body.classList.add('ls-toggle-menu');
//   });

  
function showhide() {
    if (document.getElementById('divLogin').style.display == 'none') {
      document.getElementById('divLogin').style.display = 'block';
      document.getElementById('authenticate_div').style.display = 'none';
    }
    else {
      document.getElementById('divLogin').style.display = 'none';
      document.getElementById('authenticate_div').style.display = 'block';
    }
};





$(document).on('click', ".clickmode", function () {
    var evt_hide = $(this).data('hide');
    var evt_show = $(this).data('show');
    if (evt_hide != "") {
        $(evt_hide).hide();
    }
    if (evt_show != "") {
        $(evt_show).show();
    }
});


$(document).on('click', ".clickmode", function () {
    var evt_hide = $(this).data('hide');
    var evt_show = $(this).data('show');

    if (evt_hide != "") {
        $(evt_hide).hide();
        $('#txtEmailforgot').val('');
        $('#divlogmsg').html('');
    }
    if (evt_show != "") {
        $(evt_show).show();
        $('#txtusername').val('');
        $('#txtpassword').val('');
        $('#divforgotPassMsg').html('');
    }
});

$(document).on('click', ".strength", function () {
    $('#popover-password').show();
});

// Dashboard

var down = false;
var scrollLeft = 0;
var x = 0;
$('.table-responsive').mousedown(function (e) {
    down = true;
    scrollLeft = this.scrollLeft;
    x = e.clientX;
}).mouseup(function () {
    down = false;
}).mousemove(function (e) {
    if (down) {
        this.scrollLeft = scrollLeft + x - e.clientX;
    }
}).mouseleave(function () {
    down = false;
});

$('.modal-dialog,.popover').draggable({
    scroll: true,
    scrollSensitivity: 40,
    scrollSpeed: 40,
    handle: ".modal-header"
});


$('.nav-tabs > li a').click(function () {
    $('.nav-tabs > li').removeClass('active');
    $(this).parent().addClass('active');
    $('.nav-tabs').toggleClass('open');
});

$('.modal-dialog').draggable({
    scroll: true,
    scrollSensitivity: 40,
    scrollSpeed: 40
});

$(".dr-breakout-btn").click(function () {
    $('.dr-breakout').addClass('displayblk');
    $(".dr-breakout").toggle();
});

$(document).ready(function () {
    
    $('.reveal-click').on('click', function () {
        $('.rgtinbox').toggleClass('full_width');
    });
    $('.reveal-click').on('click', function () {
        $('.left').toggleClass('small_width');
    });
});




    

$(document).on('click', ".cls2factor", function (evt) {
    var action = $(this).attr('data-action');
    var request = $(this).attr('data-request');
  // alert(action+'     '+request);
    if (action == 'change') {
        var hide = $(this).attr('data-hide');
        var show = $(this).attr('data-show');
        $(hide).hide();
        $(show).show();
    }
    if (action == 'cancel') {
        var hide = $(this).attr('data-hide');
        var show = $(this).attr('data-show');
        $(hide).hide();
        $(show).show();
    }
    if (action == 'security_status') {

        var obj = {};
        obj.action = 'security_status';
        obj.section = 'users';
        obj.status = status
        var params = "[" + JSON.stringify(obj) + "]";
        $('#btnverifyTwoafOTP').attr('data-json', params);
        $('#btnverifyTwoafOTP').attr('data-request', action);
        $('#txt_otp').val('');
        $('#modalVerification').modal();

    }
    if (action == 'update_2FA') {
        var authentication_type = $('input[name="rdo2fa"]:checked').val();
      
        var security_code = $('#txt_security_code').val();
        if (authentication_type == undefined) {
            ShowAlertMessage("Message", 'Select two factor authentication option', "A");
            $('#txt_security_code').focus();
            return false;
        }
        else if (authentication_type == 'security_key' && security_code=='') {
            ShowAlertMessage("Message", 'Enter security code', "A");
            $('#txt_security_code').focus();
            return false;
        }
        else if (authentication_type == 'security_key' && security_code.length !==6) {
            ShowAlertMessage("Message", 'Enter 6 digit security code', "A");
            $('#txt_security_code').focus();
            return false;
        }
        else {
            var obj = {};
            obj.action = '2FA';
            obj.section = 'users';
            obj.authentication_type = authentication_type;
            obj.security_code = authentication_type =='security_key'? security_code:'';
            var params = "[" + JSON.stringify(obj) + "]";             
            /*ns_users.post(params, evt);*/                
            $('#btnverifyTwoafOTP').attr('data-json', params);
            $('#btnverifyTwoafOTP').attr('data-action', action);
            $('#btnverifyTwoafOTP').attr('data-request', action);
            $('#txt_otp').val('');                
            $('#modalVerification').modal();
        }
    }

    if (action == 'generate_backup_code') {
        var obj = {};
        obj.action = 'generate_backup_code';
        obj.section = 'users';           
        var params = "[" + JSON.stringify(obj) + "]";        
        $('#btnverifyTwoafOTP').attr('data-json', params);
        $('#btnverifyTwoafOTP').attr('data-request', action);
        $('#btnverifyTwoafOTP').attr('data-action', 'verify_otp');
        $('#txt_otp').val('');
        $('#modalVerification').modal();       
    }
    if (action == 'verify_otp') {
        $('#divMessageBlock').html('Enter account password');
        var otp = $('#txt_otp').val();
        if (otp == '') {
            $('#divMessageBlock').html('<span style="color:red">Enter account password</span>');
            $('#txt_otp').focus();
            return false;
        }
        else {
            var request = $(this).attr('data-request');
            if (request == 'generate_qr_code') {
                ns_users.getQRCode(otp);
            }
            else {
                var obj = $.parseJSON($(this).attr('data-json'));
                obj[0].otp = otp;
                var params = JSON.stringify(obj);
                $('#btnverifyTwoafOTP').attr('data-action', request);
                ns_users.post(params, evt);
            }
        }
    }
});

$(document).on('change', ".cls_rdo2fa", function (evt) {
    var authentication_type = $(this).val();
    $('#txt_security_code').val('');
    if (authentication_type == 'sms') {
        $('.divtfaAppAuthenticatorBlock').hide('slow');
        $('.divtfaSecurityCodeBlock').hide('slow')

        $('.clsTwoFaBtn').show();
        
    }
    if (authentication_type == 'security_key') {
        $('.divtfaAppAuthenticatorBlock').hide('slow');
        $('.divtfaSecurityCodeBlock').show('slow');
        $('#txt_security_code').val('');
        $('.clsTwoFaBtn').show();

    }
    if (authentication_type == 'authenticator_app') {
        $('.divtfaSecurityCodeBlock').hide();
        $('.clsTwoFaBtn').hide();
        var obj = {};
        obj.action = 'generate_qr_code';
        var params = "[" + JSON.stringify(obj) + "]";
        $('#btnverifyTwoafOTP').attr('data-json', params);
        $('#btnverifyTwoafOTP').attr('data-request', 'generate_qr_code');
        $('#txt_otp').val('');
        $('#modalVerification').modal();
        //var objData = {};
        //objData.action = 'otp_request';
        //var params = "[" + JSON.stringify(objData) + "]";
        //ns_users.OtpRequestApi(params, evt);
    }
});

$(document).on('click', "#verifyAppAuthCode", function (evt) {
    $('#errorMsgAppVerification').html('');
    var authentication_type = $('input[name="rdo2fa"]:checked').val();
    var security_code = $('#txtAppVerificationCode').val();
    if (security_code == '') {
        $('#errorMsgAppVerification').html('Enter the verification code displayed on your mobile app.');
        $('#txt_security_code').focus();
        return false;
    }
    else {
        var obj = {};
        obj.action = 'VerifyAuthenticatorApp';
        obj.section = 'users';
        obj.authentication_type = authentication_type;
        obj.security_code = security_code;
        var params = "[" + JSON.stringify(obj) + "]";
        ns_users.GoogleAuthVerify(params, evt);
    }
});

$(document).on('click', ".cls-backup-code", function (evt) {
    var action = $(this).attr('data-action');
    if (action == 'close') {
        $('#modalBackupVerificationCode').modal('hide');
        $('#btndownloadbackup').html('Download');
        $('#btncopybackup').html('Copy');
        $('#btnBackupclose').hide();
        $('#btnBackupmsg').show();
        ns_users.get2FaSetting();
    }        
    if (action == 'copy') {
        var arrayOfJson = $(this).attr('data-json');
        var filename = '*****Recovery Codes********';
        var csv_data = Convert_JSON_to_CSV(arrayOfJson, filename, true);
        CopyToClipboard("BackupVerificationCode_placeholder");        
        $(this).html('<i class="fa fa-check" style="color:green"> Copied</i>');
        $('#btnBackupmsg').hide();
        $('#btnBackupclose').show();
    }
    if (action == 'download') {
        var arrayOfJson = $(this).attr('data-json');
        var filename ='*****Recovery Codes********';
        Export_JSON_to_CSV(arrayOfJson, filename, true);
        $(this).html('<i class="fa fa-check" style="color:green"> Downloaded</i>');
        $('#btnBackupmsg').hide();
        $('#btnBackupclose').show();
    }
});  

