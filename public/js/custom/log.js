var logUri = "https://staffport-apis.azurewebsites.net/"; //"http://localhost:55220/";  //
var forgotUri = logUri + "api/coderequest/";
    $(document).ready(function () {    
        var reqtype = getParameterByName('p', '');       
        var Reqid = getParameterByName('t', '');       
        if (Reqid !== undefined && Reqid !== '' && Reqid !== null) {          
            if (reqtype == 'e') {
                $('.login_section').addClass('ddnone');
                $('.account_block').removeClass('ddnone');
                ns_account.verifyEmail(Reqid);
            }
            else if (reqtype == 'ch') {              
                $('.login_section').addClass('ddnone');
                $('.password_section_div').removeClass('ddnone');
                $('#spanreqtoken').html(Reqid);
            }
    }
    else {
        $('.account_block').addClass('ddnone');
        $('.login_section').removeClass('ddnone');
       
    }       

    $('#txtusername').focus();
    var url = window.location.pathname;//window.location.host.split('.')[0];  
    var curent_host = url.substring(url.lastIndexOf('/') + 1);
   
    if ($('#displayempname').html() == '' || $('#displayempname').html() =='Not Available') {      
        ns_log.displayName(curent_host);// empoyer-30
    }

    $('#btnEmpLogin').on('click', function () {     
        ns_log.Login();
    });
        
        $(document).on('keypress', '#txtusername', function (e) {   
        if (e.which == 13) {
            ns_log.Login();
            return false;
        }
        });

        $(document).on('keypress', '#txtpassword', function (e) {
            if (e.which == 13) {
                ns_log.Login();
                return false;
            }
        });

    $(document).on('click', '.toggle-password', function () {
        $(this).toggleClass("zmdi-eye zmdi-eye-off");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
    $(document).on('click', '#btnsignout', function () {      
        ns_log.SignOut();
    }); 
    $(document).on('click', ".cls-emp-forgotpass", function (evt) {     
        var action = $(this).attr('data-action');
        if (action == 'submit_email') {
            ns_log.sendOTP(evt);
        }
        if (action == 'resendotp') {
            ns_log.resendOTP(evt);
        }
        if (action == 'submit_code') {
            ns_log.submitcode(evt);
        }
        if (action == 'submit_password') {
            ns_log.submitNewPass(evt);
        }

    });

        $(document).on('click', ".cls-emp-authenticate", function (evt) {
            var action = $(this).attr('data-action');           
            if (action == 'resendotp') {
                ns_log.resendAuthenticateOTP(evt);
            }
            if (action == 'submit_code') {
                ns_log.Authenticate(evt);
            }
            if (action == 'having_truble_login_in') {
                $('#txt_authenticate_securitycode').val('');
                $('.authenticate_div').hide();
                $('.login_bybackup_verification_div').show();
            }
            if (action == 'back_to_having_truble_login_in') {
                $('#txt_authenticate_securitycode').val('');
                $('.login_bybackup_verification_div').hide();
                $('.authenticate_div').show();
            }
            if (action == 'backup_verification_code') {
                $('#txt_backup_verification_code').val('');               
                $('.login_bybackup_verification_div').hide();
                $('.backupverificationcode_div').show();
            }
            if (action == 'back_to_backup_verification_code') {
                $('#txt_backup_verification_code').val('');
                $('.backupverificationcode_div').hide();
                $('.login_bybackup_verification_div').show();
            }
            
            
        });

    $(document).on('click', '#btnsubmitcode_login_backupverificationcode', function () {
        ns_log.AuthenticateByBackupcode();
    });
        

});

ns_log = {
    Login: function () {
        $('#divlogmsg').html('');
        var username = $('#txtusername').val();
        var password = $('#txtpassword').val();
        var url = window.location.pathname;//window.location.host.split('.')[0];  
        var curent_host = url.substring(url.lastIndexOf('/') + 1);

        var userid = "test";// (curent_host == '' || curent_host == window.location.host) ? 'totalhealthcare' : curent_host;//'empoyer-30';// 'locums'; //
        if (username == '') {
            $('#divlogmsg').html('Please enter valid user name.');
            //ShowAlertMessage('Message', 'Please enter valid user name.', 'A');
            /*  $('#txtusername').val('');*/
            $('#txtusername').focus();
            return;
        }
        if (password == '') {
            $('#divlogmsg').html('Please enter password.');
            //ShowAlertMessage('Message', 'Please enter password.', 'A');
            /* $('#txtpassword').val('');*/
            $('#txtpassword').focus();
            return;
        }
        try {
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: logUri + "/api/v1/employer/login",   
                headers: { 'Authorization': 'Basic ' + btoa(username + ':' + password) },
                beforeSend: function () {
                    $('#btnEmpLogin').html('<b class="timer-loader"></b>');
                    $('#btnEmpLogin').addClass('btn_loder');
                    $('#btnEmpLogin').removeClass('btn btn-primary btn-block w-100');
                    $('#btnEmpLogin').attr("disabled", true);                 
                },
                complete: function () {
                    $('#btnEmpLogin').attr("disabled", false);
                    $('#btnEmpLogin').removeClass('btn_loder');
                    $('#btnEmpLogin').addClass('btn btn-primary btn-block w-100');
                    $('#btnEmpLogin').html('Log in →');
                },
                success: function (data, textStatus, request) {                 
                    if (data == "Authenticate") {                        
                        $('#btn_having_truble_login_in').attr('data-username', username);
                        var auth_type = request.getResponseHeader('authentication_type');
                        auth_type = auth_type.toLocaleUpperCase();
                        var request_token = request.getResponseHeader('request_token');                     
                        $('#txt_authenticate_securitycode').val('');
                        $('.login_section').hide();
                        $('.authenticate_div').show();
                        $('#div_resend_authenticate_otp').hide();                            
                        $('#btnsubmitcode_auth').attr('data-auth-type', auth_type);
                        $("#spanOTPVerificationTitle").html('Two Factor Authentication');
                        if (auth_type.toLocaleLowerCase() == 'sms') {
                            $('#div_resend_authenticate_otp').show();
                            $('#imgAuth').attr('src', '/images/mail.png');
                            $('#txt_authenticate_securitycode').attr('placeholder', 'Enter OTP');
                            $('#divAuthenticateMsg').html('Enter the OTP that has been sent to your Mobile / Email Id.');
                            $("#spanreq_authenticate_token").html(request_token);

                        }
                        else if (auth_type.toLocaleLowerCase() == 'authenticator_app') {
                            $('#imgAuth').attr('src', '/images/online-payment.png');
                            $("#spanOTPVerificationTitle").html('Enter time-based OTP');
                            $('#txt_authenticate_securitycode').attr('placeholder', 'Enter TOTP');

                            $('#divAuthenticateMsg').html('Enter the OTP generated on your authenticator app');
                            $("#spanreq_authenticate_token").html(username);
                        }
                        else {
                            $('#imgAuth').attr('src', '/images/padlock.png');
                            $('#txt_authenticate_securitycode').attr('placeholder', 'Enter code');
                            $('#divAuthenticateMsg').html('Enter security code');
                            $("#spanreq_authenticate_token").html(username);
                        }
                    }
                    else if (data == "Authorized") {
                        $('#divLogin').hide();
                        $('#divLoginProcess').show();
                        $('#divLoginProcess').html('<div style="font-size:20px">Loading...</div><div><img src="/images/loader.gif" /><div><div style="color:gray">Please wait</div>');

                        //checksum,token,tokenExpiry,role,name,email,employer,logindatetime
                        var logChecksum = request.getResponseHeader('checksum');
                        var logToken = request.getResponseHeader('token');
                        var logTokenExpiry = request.getResponseHeader('tokenExpiry');
                        var role = request.getResponseHeader('role');
                        var name = request.getResponseHeader('name');
                        var email = request.getResponseHeader('email');
                        var employer = request.getResponseHeader('employer');
                        var logindatetime = request.getResponseHeader('logindatetime');

                        createCookie('tokenExpiry', logTokenExpiry, logTokenExpiry);
                        createCookie('token', logToken, logTokenExpiry);
                        createCookie('checksum', logChecksum, logTokenExpiry);
                        createCookie('ptype', role, logTokenExpiry);
                        createCookie('pname', name, logTokenExpiry);
                        createCookie('pemail', email, logTokenExpiry);
                        createCookie('pempname', employer, logTokenExpiry);
                        createCookie('logdatetime', logindatetime, logTokenExpiry);

                        //if (jQuery("#chk_remember_me").is(":checked")) {
                        //    createCookie('rme', username, logTokenExpiry);
                        //}
                        //else {
                        //    localStorage.removeItem('rme');
                        //}

                        $('#txtusername').val('');
                        $('#txtpassword').val('');                      
                        window.location.href = "/Home/Index";
                    }                  
                    else {
                        $('#divlogmsg').html(data.Message);                      
                    }
                },
                error: function (result) {
                    $('#divlogmsg').html(result);                           
                }
            });
        }
        catch (err) {
            $('#divlogmsg').html(err.message);         
        }
    },
    //Authentication
    Authenticate: function (evt) {
        var evt_hide = evt.target.getAttribute('data-hide');
        var evt_show = evt.target.getAttribute('data-show');
        var auth_type = evt.target.getAttribute('data-auth-type');
        var id = evt.target.getAttribute('id');
        id = '#' + id;
        $('#divAuthenticateMsg').html('');
        var code = $("#txt_authenticate_securitycode").val().trim();
        var reqtoken = $("#spanreq_authenticate_token").html();
        if (auth_type == 'AUTHENTICATOR_APP' && code == '') {                  
            $("#divAuthenticateMsg").html('<span style="color:red">Enter the OTP generated on your authenticator app</span>');
            $('#txt_authenticate_securitycode').focus();
            return false;
        }
        else if (auth_type == 'SMS' && code == '') {
            $("#divAuthenticateMsg").html('<span style="color:red">Enter the OTP that has been sent to your Mobile / Email Id</span>');
            $('#txt_authenticate_securitycode').focus();
            return false;
        }
        else if (code == '') {
            $("#divAuthenticateMsg").html('<span style="color:red">Enter security code</span>');
            $('#txt_authenticate_securitycode').focus();
            return false;
        }       
        else {           
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: logUri + "/api/v1/employer/twofactor/authenticate",
                headers: { 'Authorization': 'Basic ' + btoa(auth_type + ':' + code + ':' + reqtoken) },
                beforeSend: function () {
                    $(id).html('Please wait...');
                    $(id).attr("disabled", true);
                },
                complete: function () {
                    $(id).attr("disabled", false);
                    $(id).html('Submit');
                },
                success: function (data, textStatus, request) {                 
                     if (data == "Authorized") {                       
                        //checksum,token,tokenExpiry,role,name,email,employer,logindatetime
                        var logChecksum = request.getResponseHeader('checksum');
                        var logToken = request.getResponseHeader('token');
                        var logTokenExpiry = request.getResponseHeader('tokenExpiry');
                        var role = request.getResponseHeader('role');
                        var name = request.getResponseHeader('name');
                        var email = request.getResponseHeader('email');
                        var employer = request.getResponseHeader('employer');
                        var logindatetime = request.getResponseHeader('logindatetime');

                        createCookie('tokenExpiry', logTokenExpiry, logTokenExpiry);
                        createCookie('token', logToken, logTokenExpiry);
                        createCookie('checksum', logChecksum, logTokenExpiry);
                        createCookie('ptype', role, logTokenExpiry);
                        createCookie('pname', name, logTokenExpiry);
                        createCookie('pemail', email, logTokenExpiry);
                        createCookie('pempname', employer, logTokenExpiry);
                        createCookie('logdatetime', logindatetime, logTokenExpiry);

                        $('#txt_authenticate_securitycode').val('');                    
                        window.location.href = "/Home/Index";
                    }
                     else {                  
                         $("#divAuthenticateMsg").html('<b style="color:red">' + data.Message + '</b>');              
                    }
                },
                error: function (result) {
                    console.log(result.responseJSON);
                    $("#divAuthenticateMsg").html('<b style="color:red">' + result.responseJSON.Message + '</b>');
                    $(id).attr("disabled", false);
                    $(id).html('Submit');
                }
            });
        }
    },
    resendAuthenticateOTP: function (evt) {
        var id = evt.target.getAttribute('id');
        id = '#' + id;
        $("#divAuthenticateMsg").html('');
        var reqtoken = $("#spanreq_authenticate_token").html();
        var obj = {};
        obj.action = "otp_request_resend";
        obj.request_type = "TWOFA";
        obj.token = reqtoken;
        obj.req_by = 'emp';
        obj.req_source = "web";
        var Param = "[" + JSON.stringify(obj) + "]";

        $.ajax({
            url: forgotUri,
            data: this.stringifyParam(Param),
            dataType: "json",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            beforeSend: function () {
                $(id).html('Sending...');
                $(id).attr("disabled", true);
            },
            complete: function () {
                $(id).attr("disabled", false);
                $(id).html('<i class="zmdi zmdi-rotate-right mr-1"></i>Resend');
            },
            success: function (data) {
                $(id).attr("disabled", false);
                $(id).html('<i class="zmdi zmdi-rotate-right mr-1"></i>Resend');
                if (data.Status == 'OK') {
                    $("#spanreq_authenticate_token").html(data.Response.request_token);
                    $("#divAuthenticateMsg").html('<b style="color:green">Code has been resent successfully.</b>');
                }
                else {
                    $("#divAuthenticateMsg").html('<b style="color:red">'+data.Error+'</b>');
                }
            },
            error: function (result) {
                $(id).attr("disabled", false);
                $(id).html('<i class="zmdi zmdi-rotate-right mr-1"></i>Resend');
                $("#divAuthenticateMsg").html('<b style="color:red">' + result + '></b>');
            }
        });
    },
    //Sign using Backup verification code
    AuthenticateByBackupcode: function () {     
        var auth_type ='backup_verification'
        var code = $("#txt_backup_verification_code").val().trim();
        var reqtoken = $('#btn_having_truble_login_in').attr('data-username');
        
        if (code == '') {
            $("#divbackupverificationcodeMsg").html('<span style="color:red">Enter backup verification code</span>');
            $('#txt_backup_verification_code').focus();
            return false;
        }
        else {           
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: logUri + "/api/v1/employer/twofactor/authenticate",
                headers: { 'Authorization': 'Basic ' + btoa(auth_type + ':' + code + ':' + reqtoken)  },
                beforeSend: function () {
                    $('#btnsubmitcode_login_backupverificationcode').html('<b class="timer-loader"></b>');
                    $('#btnsubmitcode_login_backupverificationcode').addClass('btn_loder');
                    $('#btnsubmitcode_login_backupverificationcode').removeClass('btn btn-primary btn-block w-100');
                    $('#btnsubmitcode_login_backupverificationcode').attr("disabled", true);
                },
                complete: function () {
                    $('#btnsubmitcode_login_backupverificationcode').attr("disabled", false);
                    $('#btnsubmitcode_login_backupverificationcode').removeClass('btn_loder');
                    $('#btnsubmitcode_login_backupverificationcode').addClass('btn btn-primary btn-block w-100');
                    $('#btnsubmitcode_login_backupverificationcode').html('Verify');
                },
                success: function (data, textStatus, request) {                   
                    if (data == "Authorized") {
                        //checksum,token,tokenExpiry,role,name,email,employer,logindatetime
                        var logChecksum = request.getResponseHeader('checksum');
                        var logToken = request.getResponseHeader('token');
                        var logTokenExpiry = request.getResponseHeader('tokenExpiry');
                        var role = request.getResponseHeader('role');
                        var name = request.getResponseHeader('name');
                        var email = request.getResponseHeader('email');
                        var employer = request.getResponseHeader('employer');
                        var logindatetime = request.getResponseHeader('logindatetime');

                        createCookie('tokenExpiry', logTokenExpiry, logTokenExpiry);
                        createCookie('token', logToken, logTokenExpiry);
                        createCookie('checksum', logChecksum, logTokenExpiry);
                        createCookie('ptype', role, logTokenExpiry);
                        createCookie('pname', name, logTokenExpiry);
                        createCookie('pemail', email, logTokenExpiry);
                        createCookie('pempname', employer, logTokenExpiry);
                        createCookie('logdatetime', logindatetime, logTokenExpiry);

                        $('#txt_backup_verification_code').val('');
                        window.location.href = "/Home/Index";
                    }
                    else {
                        $("#divbackupverificationcodeMsg").html('<b style="color:red">' + data.Message + '</b>');
                    }
                },
                error: function (result) {
                    $('#btnsubmitcode_login_backupverificationcode').attr("disabled", false);
                    $('#btnsubmitcode_login_backupverificationcode').removeClass('btn_loder');
                    $('#btnsubmitcode_login_backupverificationcode').addClass('btn btn-primary btn-block w-100');
                    $('#btnsubmitcode_login_backupverificationcode').html('Verify');
                    $("#divbackupverificationcodeMsg").html('<b style="color:red">' + result.responseJSON.Message + '</b>');
               
                }
            });
        }
    },

    SignOut: function () {
        //ns_ajax.get(
        //    "api/employers/logout",
        //    '',
        //    function (response) {
        //        if (response == 'OK')
        
        eraseCookie('tokenExpiry');
        eraseCookie('token');
        eraseCookie('checksum');
        eraseCookie('ptype');
        eraseCookie('pname');
        eraseCookie('pemail');
        eraseCookie('pempname');
        eraseCookie('logdatetime');
        //Remove localStorage
        localStorage.removeItem('usernav');
        localStorage.removeItem('totalunreadmsg');
        localStorage.removeItem('totalunreadLogs');

        window.location.href = "/";
        //    else
        //        ShowAlertMessage('Message', response, 'A');
        //});
    },
    IsRememberUsername: function () {
        var remPass = readCookie('rme');
        if (remPass !== 'N') {
            $('#txtusername').val(remPass);
            $('#txtpassword').val('');
         /*   jQuery("#chk_remember_me").prop("checked", true);*/
            $('#txtpassword').focus();
        }
    },
    displayName: function (userid) {
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: logUri + "api/employers/get?userid=" + userid + "",
            success: function (response) {
                $('#displayempname').html(response);
            },
            error: function (result) {

            }
        });
    },
    //Forgot Pass
    sendOTP: function (evt) {
        $('#forgotpasserror').html('');
        var evt_hide = evt.target.getAttribute('data-hide');
        var evt_show = evt.target.getAttribute('data-show');
        var id = evt.target.getAttribute('id');
        id = '#' + id;
        var email_mobile = $("#txt_forgot_email").val().trim();
        if (email_mobile == '') {
            $("#txt_forgot_email").focus();
            $('#forgotpasserror').html('Enter your E-mail address or Mobile number');
          /*  ShowAlertMessage("Message", "Enter your E-mail address or Mobile number", "A");*/
            return false;
        }
        else {
            var obj = {};
            obj.action = "otp_request";
            obj.request_type = "PC";
            obj.mobile_email = email_mobile;
            obj.req_by = 'emp';
            obj.req_source = "web";
            var Param = "[" + JSON.stringify(obj) + "]";

            $.ajax({
                url: forgotUri,// + "coderequest/",
                data: this.stringifyParam(Param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                beforeSend: function () {
                    $(id).html('Please wait...');
                    $(id).attr("disabled", true);
                },
                complete: function () {
                    $(id).attr("disabled", false);
                    $(id).html('Submit');
                },
                success: function (data) {
                    if (data.Status == 'OK') {
                        $('#txt_forgot_email, #txt_securitycode').val('');
                        $(evt_hide).hide();
                        $(evt_show).show();
                        $('#divOTPSendMsg').html('We sent security code on ' + (email_mobile.substring(0, 2)) + '*******' + email_mobile.substring(1, -3));
                        $("#spanreqtoken").html(data.Response.request_token);
                      
                    }
                    else {
                        $('#txtEmailforgot').val('');
                        //ShowAlertMessage("Message", data.Error, "A");                    
                        $('#forgotpasserror').html(data.Error);                       
                        $(id).attr("disabled", false);
                        $(id).html('Submit');
                    }
                },
                error: function (result) {
                   /* ShowAlertMessage("Message", result, "A");*/
                    $('#forgotpasserror').html(result);
                    $(id).attr("disabled", false);
                    $(id).html('Submit');
                }
            });
        }
    },
    resendOTP: function (evt) {
        var id = evt.target.getAttribute('id');
        id = '#' + id;
        $('#forgotpasserror').html('');
        $("#divOTPSendMsg").html('');
        var reqtoken = $("#spanreqtoken").html();
        var obj = {};
        obj.action = "otp_request_resend";
        obj.request_type = "PC";
        obj.token = reqtoken;
        obj.req_by = 'emp';
        obj.req_source = "web";
        var Param = "[" + JSON.stringify(obj) + "]";

        $.ajax({
            url: forgotUri ,//+ "coderequest",
            data: this.stringifyParam(Param),
            dataType: "json",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            beforeSend: function () {
                $(id).html('Sending...');
                $(id).attr("disabled", true);
            },
            complete: function () {
                $(id).attr("disabled", false);
                $(id).html('Resend');
            },
            success: function (data) {
                $(id).attr("disabled", false);
                $(id).html('Resend');
                if (data.Status == 'OK') {                  
                    $("#spanreqtoken").html(data.Response.request_token);
                    $("#divOTPSendMsg").html('<i style="color:green">Code has been resent successfully.</i>');
                }
                else {
                    $("#divOTPSendMsg").html('<span style="color:#f00;">' + data.Error + '</span>');
                }
            },
            error: function (result) {
                $(id).attr("disabled", false);
                $(id).html('Resend');
                $("#divOTPSendMsg").html('<span style="color:#f00;">' + result + '</span>');
            }
        });
    },
    submitcode: function (evt) {
        var evt_hide = evt.target.getAttribute('data-hide');
        var evt_show = evt.target.getAttribute('data-show');
        var id = evt.target.getAttribute('id');
        id = '#' + id;
        $('#divOTPSendMsg').html('');
        var code = $("#txt_securitycode").val().trim();
        var reqtoken = $("#spanreqtoken").html();
        if (code == '') {
            $("#divOTPSendMsg").html('Please enter security code');
            $('#txt_securitycode').focus();
            return false;
        }
        else {
            var obj = {};
            obj.action = "verify_code";           
            obj.token = reqtoken;
            obj.otp = code;          
            var Param = "[" + JSON.stringify(obj) + "]";

            $.ajax({
                url: forgotUri,// + "coderequest",
                data: this.stringifyParam(Param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                beforeSend: function () {
                    $(id).html('Please wait...');
                    $(id).attr("disabled", true);
                },
                complete: function () {
                    $(id).attr("disabled", false);
                    $(id).html('Submit');
                },
                success: function (data) {
                    $(id).attr("disabled", false);
                    $(id).html('Submit');
                    if (data.Status == 'OK') {
                        $('#txt_securitycode, #txt_new_password, #txt_new_confirm_password').val('');
                        $(evt_hide).hide();
                        $(evt_show).show();
                    }
                    else {
                        $('#divOTPSendMsg').html(data.Error);
                    }
                },
                error: function (result) {
                    $('#divOTPSendMsg').html(result);
                    $(id).attr("disabled", false);
                    $(id).html('Submit');
                }
            });
        }
    },
    submitNewPass: function (evt) {
        var evt_hide = evt.target.getAttribute('data-hide');
        var evt_show = evt.target.getAttribute('data-show');
        var id = evt.target.getAttribute('id');
        id = '#' + id;
        $("#divMsgPass").html('');       
        var NewPassword = $('#txt_new_password').val().trim();
        var ConfirmPassword = $('#txt_new_confirm_password').val();       
        var reqtoken = $("#spanreqtoken").html();
        if (NewPassword == '') {
            $('#divMsgPass').html('Please enter password.');
            $('#txt_new_password').focus();
            return false;
        }
        else if (IsValidPassword(NewPassword)==false) {
            $('#divMsgPass').html('Enter valid Password');           
            $('#txt_new_password').focus();
            return false;
        }
        
        else if (NewPassword.length < 8) {
            $('#divMsgPass').html('Password must be 8 characters long !');
            $('#txt_new_password').focus();
            return false;
        }
        else if (ConfirmPassword == '') {
            $('#divMsgPass').html('Enter confirm password !');
            $('#txt_new_confirm_password').focus();
            return false;
        }
        else if (NewPassword !== ConfirmPassword) {
            $('#divMsgPass').html('Password mismatched !');
            $('#txt_new_confirm_password').css('border-bottom', 'red');
            return false;
        }         
        else {
            var obj = {};
            obj.action = "CHGPASS_WITH_TOKEN";
            obj.token = reqtoken;
            obj.password = NewPassword;
            obj.confirm_password = ConfirmPassword;
            var Param = "[" + JSON.stringify(obj) + "]";           

            $.ajax({
                url: logUri + "api/employers/changepass",
                data: this.stringifyParam(Param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                beforeSend: function () {
                    $(id).html('Please wait...');
                    $(id).attr("disabled", true);
                },
                complete: function () {
                    $(id).attr("disabled", false);
                    $(id).html('Submit');
                },
                success: function (data) {
                    $(id).attr("disabled", false);
                    $(id).html('Submit');
                    data = $.parseJSON(data);
                    if (data.Status == 'OK') {                       
                      
                        $("#div_success_msg").html(data.Response[0].message);
                        $("#divMsgPass").html('');
                        $(evt_hide).hide();
                        $(evt_show).show();                       
                        $("#spanreqtoken").html('');
                        $('#txt_new_password, #txt_new_confirm_password').val('');
                        window.history.pushState('', 'Login', window.location.origin);
                    }
                    else {
                        $("#divMsgPass").html(data.Error);                        
                    }
                },
                error: function (result) {
                    $("#divMsgPass").html(result);
                    $(id).attr("disabled", false);
                    $(id).html('Submit');
                }
            });
        }
    },
    stringifyParam: function (param) { return typeof (param) == 'object' ? '{obj :' + JSON.stringify(param) + ' }' : param; },    
  
}
ns_account = {
    verifyEmail: function (Reqid) {    
        var obj = {};
        obj.action = "verifyemail";
        obj.uid = Reqid;    
        var Param = "[" + JSON.stringify(obj) + "]";
        $('#divverifymsg').html('Please Wait....');
        try {
            $.ajax({
                url: logUri + "api/employers/signup",
                data: this.stringifyParam(Param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",               
                success: function (data) {
                    data = $.parseJSON(data);
                    if (data.Status == 'OK') {
                        $('#divverifymsg').html(data.Response[0].message);
                        //ShowMessage('Message', data.Response[0].message, 'C');
                        //$('.account_block').addClass('ddnone');
                        //$('.login_section').removeClass('ddnone');
                        /*window.history.pushState('', 'Login', '/');*/
                    }
                    else {
                        $('#divverifymsg').html(data.Error);
                    }
                },
                error: function (result) {
                    $('#divverifymsg').html(result);
                }
            });
        }
        catch (err) {
            $('#divverifymsg').html(err.message);
        }
    },
    stringifyParam: function (param) { return typeof (param) == 'object' ? '{obj :' + JSON.stringify(param) + ' }' : param; },
}
function IsValidPassword(password) {
    //var regex = '(?=^.{ 8, }$)(?=.*\d)(?=.* [!@#$%^&*]+) (? ![.\n])(?=.* [A - Z])(?=.* [a - z]).* $';
    var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (!regex.test(password))
        return false;
    else
        return true;
}

//Cookies
//function createCookie(name, value, time_duration) {
//    var expires;
//    if (time_duration) {
//        var date = new Date();
//        /*date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));*/
//        date.setTime(date.getTime() + (time_duration * 1000));
//        expires = "; expires=" + date.toGMTString();
//    } else {
//        expires = "";
//    }

//    if (typeof (window.localStorage) !== 'undefined') {
//        window.localStorage.setItem(encodeURIComponent(name), encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/");
//        // alert("storage");
//    } else {
//        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
//    }

//}

//function readCookie(name) {
//    var nameEQ = '';
//    if (typeof (window.localStorage) !== 'undefined') {

//        nameEQ = encodeURIComponent(name) + "=";
//        //  alert("storage=" + name + " " + nameEQ);
//        nameEQ1 = window.localStorage.getItem(decodeURIComponent(name));

//        if (nameEQ1 !== null) {
//            var ca = nameEQ1.split(';');
//            for (var i = 0; i < ca.length; i++) {
//                var c = ca[i];
//                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
//                if (c.indexOf(nameEQ) === 0)
//                    return decodeURIComponent(c.substring(nameEQ.length, c.length));
//            }
//        }
//        else {
//            return 'N';
//        }
//    }
//    else {

//        nameEQ = encodeURIComponent(name) + "=";
//        var ca = document.cookie.split(';');
//        for (var i = 0; i < ca.length; i++) {
//            var c = ca[i];
//            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
//            if (c.indexOf(nameEQ) === 0)

//                return decodeURIComponent(c.substring(nameEQ.length, c.length));
//        }
//        return null;
//    }

//}

//function eraseCookie(name) {
//    if (typeof (window.localStorage) !== 'undefined') {
//        window.localStorage.setItem(name, '');
//    } else {
//        createCookie(name, "", -1);
//    }
//}

//function get_cookies_array(name) {
//    var cookies = {};
//    if (typeof (window.localStorage) !== 'undefined') {
//        var medchek = window.localStorage.getItem(decodeURIComponent(name))
//        var split = medchek.split(';');
//        cookies = window.localStorage.getItem(decodeURIComponent(split[0]));
//    }
//    else {
//        if (document.cookie && document.cookie != '') {
//            var split = document.cookie.split(';');
//            for (var i = 0; i < split.length; i++) {
//                var name_value = split[i].split("=");
//                name_value[0] = name_value[0].replace(/^ /, '');
//                cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
//            }
//        }
//    }
//    return cookies;
//}


//----------------------NEW---------------------------

function createCookie(name, value, time_duration) {
    var expires;   
    if (time_duration) {
        var date = new Date();      
        date.setTime(date.getTime() + (time_duration * 1000));

        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

//--------------------------------------------------
function GetParameterValues(param) {
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < url.length; i++) {
        var urlparam = url[i].split('=');
        if (urlparam[0] == param) {
            return urlparam[1];
        }
    }
}

function getLastPathSegment() {
    var href = document.location.href;
    var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
    return lastPathSegment;
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
//--------------------------------------------------------

let passwordStrength2 = document.getElementById("passwordstrength");
let lowUpperCase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");
$(document).ready(function () {
    $(document).on('keyup', "#txt_new_password", function () {
        let pass = $("#txt_new_password").val();
        checkStrength(pass);
    });
});


function checkStrength(password) {
    let strength = 0;

    //If password contains both lower and uppercase characters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
        lowUpperCase.classList.remove('fa-circle');
        lowUpperCase.classList.add('fa-check');
    } else {
        lowUpperCase.classList.add('fa-circle');
        lowUpperCase.classList.remove('fa-check');
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
        strength += 1;
        number.classList.remove('fa-circle');
        number.classList.add('fa-check');
    } else {
        number.classList.add('fa-circle');
        number.classList.remove('fa-check');
    }
    //If it has one special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
        specialChar.classList.remove('fa-circle');
        specialChar.classList.add('fa-check');
    } else {
        specialChar.classList.add('fa-circle');
        specialChar.classList.remove('fa-check');
    }
    //If password is greater than 7
    if (password.length > 7) {
        strength += 1;
        eightChar.classList.remove('fa-circle');
        eightChar.classList.add('fa-check');
    } else {
        eightChar.classList.add('fa-circle');
        eightChar.classList.remove('fa-check');
    }
   
    // If value is less than 2
    if (strength < 2) {
        passwordStrength2.classList.remove('progress-bar-warning');
        passwordStrength2.classList.remove('progress-bar-success');
        passwordStrength2.classList.add('progress-bar-danger');
        passwordStrength2.style = 'width: 10%';
    } else if (strength == 3) {
        passwordStrength2.classList.remove('progress-bar-success');
        passwordStrength2.classList.remove('progress-bar-danger');
        passwordStrength2.classList.add('progress-bar-warning');
        passwordStrength2.style = 'width: 60%';
    } else if (strength == 4) {
        passwordStrength2.classList.remove('progress-bar-warning');
        passwordStrength2.classList.remove('progress-bar-danger');
        passwordStrength2.classList.add('progress-bar-success');
        passwordStrength2.style = 'width: 100%';
    }
}


function toggle(id) {
    var type = $('#' + id).attr("type"); 
    if (type == 'text') {      
        jQuery('#' + id).attr("type", "password");
        state = false;
    } else {
        jQuery('#' + id).attr("type", "text")
        state = true;
    }
}

function myFunction(show) {
    show.classList.toggle("fa-eye-slash");
}
