$(document).on("click", ".evt-user-account", function () {
    ns_account.actions(this);
   
});
ns_account = {
    get: function (params) {
        params = { json_data: params };
        console.log(params)
        ns_ajax.get(
            urls.accountApi,
            params,
            function (response) {
                var serverResponse = jQuery.parseJSON(response);
                console.log(serverResponse)
                if (serverResponse.response_status == "OK") {
                    $('.spanErrMsg').hide().text('');
                    var userInfo = serverResponse.response[0].signin_info[0];
                    var nCookie = serverResponse.token_info + '#' + userInfo.user_name + '#' + userInfo.user_email + '#' + userInfo.org_user_type;
                    ns_util.setCookie(ns_util.loginCookieName, nCookie, 1);
                    localStorage.setItem(ns_util.navLocalStorageName, JSON.stringify(serverResponse));
                    //window.location = ns_navigation_urls.dashboard;
                }
                else {
                    $('.spanErrMsg').show().text(serverResponse.response_msg);
                    //alertmsg.msg("Error", serverResponse.response_msg, "E");
                }
            });
    },
    post: function (params, event) {
        var obj = JSON.parse(params), action = obj.action, requestFor = obj.request_for;
        ns_ajax.post(
            urls.accountApi,
            params,
            function (response) {
                var serverResponse = jQuery.parseJSON(response);
                if (serverResponse.response_status == "OK") {
                    if (action == 'sign-up') {
                        //var cookieValue = serverResponse.token_info + '#' + obj.sign_up.user_name + '#' + obj.sign_up.user_email + '#A';
                        //ns_util.expireCookie(ns_util.loginCookieName);
                        //ns_util.setCookie(ns_util.loginCookieName, cookieValue, 1);
                        var otp = serverResponse.response[0].otp_code;
                        if (otp > 0) {
                            $('.fststep').hide();
                            $('.secststep').show();
                            $('#span_otp_code').text(serverResponse.response[0].otp_code);
                            $('#btnSbmtOtp').attr('data-id', serverResponse.response[0].u_id);
                        }
                        else {
                            $('.fststep').hide();
                            $('.secststep').hide();
                            $('.thirdststep').show();
                        }
                    }
                    else if (action == 'verify-mobile') {
                        $('.secststep').hide();
                        $('.thirdststep').show();
                        alertmsg.msg("Message", serverResponse.response_msg, "S");
                    }
                    else if (action == 'forget-password') {
                        if (requestFor == "reset-link") {
                            $('#span_otp_code').text(serverResponse.response[0].otp_code);
                            $('#btnSbmtOtp, #btnResetPswd').attr('data-id', serverResponse.response[0].u_id);
                        }
                    }
                    var evt_hide = $(event).data('hide');
                    var evt_show = $(event).data('show');
                    if (evt_hide != "") { $(evt_hide).hide(); }
                    if (evt_show != "") { $(evt_show).show(); }
                }
                else if (serverResponse.response_status == "FAILED") {
                    if (serverResponse.error_code == 'email_exists') {
                        $('#baremobile').css('background', '#acacac');
                        $('#spanErrMobile').hide().text('');
                        $('#baremail').css('background', '#ff0000');
                        $('#spanErrEmail').show().text(serverResponse.response_msg);
                    }
                    else if (serverResponse.error_code == 'mobile_exists') {
                        $('#baremail').css('background', '#acacac');
                        $('#spanErrEmail').hide().text('');
                        $('#baremobile').css('background', '#ff0000');
                        $('#spanErrMobile').show().text(serverResponse.response_msg);
                    }
                    alertmsg.msg("Error", serverResponse.response_msg, "E");
                }
                else {
                    var msg = '';
                    $.each(serverResponse, function (key, value) {
                        msg += value + '<br>';
                    });
                    alertmsg.msg("Message", msg, "W");
                }
            }
        );
    },
    actions: function (event) {
        var strJsonString = "", action = $(event).attr("data-action");
        // if (action == "sign-up") {
        //     strJsonString = ns_validations.signUp(event); //validate signup here
        //     if (strJsonString.length > 0)
        //         ns_account.post(strJsonString, event);//calling post api here
        // }
        // else if (action == "sign-in") {
        //     strJsonString = ns_validations.signIn(event); //validate sign in here
        //     if (strJsonString.length > 0)
        //         ns_account.get(strJsonString, event);//calling get api here 
        // }
        // else if (action == "dashboard") {
        //     //window.location = ns_navigation_urls.dashboard;
        // }
        // else if (action == "verify-mobile") {
        //     strJsonString = ns_validations.verifyMobile(event);
        //     if (strJsonString.length > 0)
        //         ns_account.post(strJsonString, event);
        // }
         if (action == "forget-password") {
            strJsonString = ns_validations.forgetPassword(event);
            if (strJsonString.length > 0)
                ns_account.post(strJsonString, event);
        }
    },
}
