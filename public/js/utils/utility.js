
var uri = "https://api-leadsv2.azurewebsites.net/", pageUri = "http://localhost:44353/", MasterURL = "http://localhost:3000/";
    //pageUri = "https://pagesapi.infospry.in/", MasterURL = "https://leads-appv2.azurewebsites.net/";
var moduleRoute = window.location.pathname.replace('/', '');
var Token = "", RequestChecksum = "", Source = "", MasterServerURL = "/app";
$(document).ready(function () {
    $(".check-password-strength").on("keypress keyup blur", function () {
        ns_util.CheckPasswordStrength(this);
    });
    
});
//Api Fuction 
var urls = {
    accountApi: uri + 'Api/AccountApi',
    leadsApi: uri + 'api/LeadApi',
    UploadApi: uri + 'api/UploadApi',
    MastersApi: uri + 'api/MastersApi',
    dropdownApi: uri + 'api/DropdownApi',
    organizationApi: uri + 'api/OrganizationApi',
    reportsApi: uri + 'api/ReportsApi',
    pagesApi: pageUri + 'api/PagesApi',
    pagesMediaApi: pageUri + 'api/PagesMediaApi',
    // Convert
    contactApi: "https://accounts-apiv2.infospry.in/v1/Contacts/quickadd",
};


ns_util = {
    loginCookieName: "signin_token",
    navLocalStorageName: "navigation_settings",
    IsEmailValid: function (email) {
        var emailval = $(email).val();
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(emailval)) {
            $(email).css("color", "red").attr("title", ns_validation_mgs.isInvalidEmail);
            return false;
        }
        else {
            $(email).css("color", "black").attr("title", ns_validation_mgs.isValidEmail);
            return true;
        }
    },
    IsUrlValid: function (url) {
        var webURL = $(url).val();
        var regex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (!regex.test(webURL)) {
            $(url).css("color", "red").attr("title", ns_validation_mgs.isInvalidURL);
            return false;
        }
        else {
            $(url).css("color", "black").attr("title", ns_validation_mgs.isValidURL);
            return true;
        }
    },
    AllowNumbers: function (event) {
        $(this).val($(this).val().replace(/[^0-9\.]/g, ''));
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    },
    showPleaseWait: function () {
        //Read action type here
        var actionType = $('.modal-please-wait').attr('data-action-type');
        //Manupulate the btn text according to the action
        ns_util.modifyBtn(actionType);
        if (actionType == "check-exists") {
            //Remove checkmark and crossMark  images from the container here
            $('.checkmark-png-img').remove(); $('.crossMark-png-img').remove();
            $('.check-exists-loader-gif-container').append(ns_gifImage.loading);
        }
        else if (actionType == "loader")
            $('.loader-gif-container').append(ns_gifImage.loading);
        else if (actionType == "delete")
            $('.delete-loader-gif-container').append(ns_gifImage.loading);
        else if (actionType == "sort-order")
            $('.sort-order-loader-gif-container').append(ns_gifImage.loading);
        else if (actionType == "fetch-data" || actionType == "submit-data" || actionType == "delete-data")
            $('.modal-please-wait').modal('show');

        $('.action-btns').attr('disabled', 'disabled');
    },
    hidePleaseWait: function () {
        var actionType = $('.modal-please-wait').attr('data-action-type');
        //Manupulate the btn text according to the action
        ns_util.modifyBtn(actionType);
        if (actionType == "check-exists" || actionType == "loader" || actionType == "sort-order" || actionType == "delete")
            $('.loading-gif-img').remove();
        else if (actionType == "fetch-data" || actionType == "submit-data" || actionType == "delete-data")
            $('.modal-please-wait').modal('hide');
        $('.action-btns').removeAttr('disabled');
    },
    modifyBtn: function (actionType) {
        var pleaseWait = $('.modal-please-wait');
        if (actionType == "submit-data") {
            var btnClass = pleaseWait.attr('data-action-btn-class');
            btnClass = $('.' + btnClass);
            var btnText = btnClass.text();
            $(".modal-please-wait-header").text("Please wait .....")
            btnClass.text(btnClass.attr('data-btn-text'));
            btnClass.attr('data-btn-text', btnText);
        }

    },
    setCookie: function (cookie_name, cookie_value, expire_days) {
        var d = new Date();
        d.setTime(d.getTime() + (expire_days * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cookie_name + "=" + cookie_value + ";" + expires + ";path=/";
    },
    getCookie: function (cookie_name) {
        var name = cookie_name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
               // return c.substring(name.length, c.length);
        return decodeURIComponent(c.substring(name.length, c.length))

            }
        }
         return "";
    },
    checkCookie: function (cookie_name) {
        var ctoken = ns_util.getCookie(cookie_name);
        if (ctoken != "") {
            return ctoken;
        } else {
            ns_util.setCookie(cookie_name, "", 0);
        }
    },
    expireCookie: function (cookie_name) {
        document.cookie = cookie_name + "='';0;path=/";
    },
    toLowerCase:function(str){
        return str.toLowerCase();
    },
    hide_element:function(id){
        if ($(id) !== null)
        $(id).hide();
    },
    show_element:function(id){
        if ($(id) !== null)
        $(id).show();
    },
    replace_html_in_element:function(id,html){
        if ($(id) !== null)
        $(id).html(html);
    },
    trigger_click:function(id){
        if ($(id) !== null)
        $(id).trigger('click');
    },
    add_css_class(id,css_class){
        if ($(id) !== null)
        $(id).addClass(css_class);
    },
    remove_css_class(id,css_class){
        if ($(id) !== null)
        $(id).removeClass(css_class);
    },
    remove_css_class_from_class(css_class,new_css_class){
        if ($(css_class) !== null)
        $(css_class).removeClass(new_css_class);
    },
    getAttachedFileSize: function formatBytes(bytes) {
        if (bytes < 1024) return bytes + " Bytes";
        else if (bytes < 1048576) return Math.round(bytes / 1024) + " KB";
        else if (bytes < 1073741824) {
            if (bytes / 1048576 > 5) return 'error';
            else return Math.round(bytes / 1048576) + " MB"
        };
    },
    CheckPasswordStrength: function (password) {
        passwordVal = $(password).val();
        var password_strength = $('.password_strength');
        //if textBox is empty
        if (passwordVal.length == 0) {
            password_strength.html('');
            return;
        }
        //Regular Expressions
        var regex = new Array();
        regex.push("[A-Z]"); //For Uppercase Alphabet
        regex.push("[a-z]"); //For Lowercase Alphabet
        regex.push("[0-9]"); //For Numeric Digits
        regex.push("[$@$!%*#?&]"); //For Special Characters
        var passed = 0;
        //Validation for each Regular Expression
        for (var i = 0; i < regex.length; i++) {
            if ((new RegExp(regex[i])).test(passwordVal)) {
                passed++;
            }
        }
        //Validation for Length of Password
        if (passed > 2 && passwordVal.length > 8) {
            passed++;
        }
        //Display of Status
        var color = "";
        var passwordStrength = "";
        switch (passed) {
            case 0:
                break;
            case 1:
                passwordStrength = "Password is Weak.";
                color = "Red";
                break;
            case 2:
                passwordStrength = "Password is Good.";
                color = "darkorange";
                break;
            case 3:
                break;
            case 4:
                passwordStrength = "Password is Strong.";
                color = "Green";
                break;
            case 5:
                passwordStrength = "Password is Very Strong.";
                color = "darkgreen";
                break;
        }
        password_strength.html(passwordStrength);
        password_strength.css('color', color);
    },
    IsPasswordValid: function (password) {
        var passwordVal = $(password).val();
        var regex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
        if (!regex.test(passwordVal)) {
            $(password).css("color", "red").attr("title", ns_validation_mgs.isInvalidPassword);
            return false;
        }
        else {
            $(password).css("color", "black").attr("title", ns_validation_mgs.isInvalidPassword);
            return true;
        }
    },
}

function ClearModalData(ModalId) {
    $(ModalId).find("input[type=text],[type=email],[type=number],[type=password], textarea, select").val('').end()
        .find("input[type=checkbox],[type=radio]").prop("checked", "").end();
}
function ClearModalDataWithoutCheckbox() {
    $('.Modal').find("input[type=text], textarea, select").val('').end();
}
function ModalHide(ModalId) {
    $(ModalId).hide();
    $(".modal-backdrop").css("display", "none")
}
function ConvertDateFormate(date) {
    var d = new Date(date.split("/").reverse().join("-"));
    var dd = d.getDate() < 10 ? d.getDate() : d.getDate();
    var mm = d.getMonth() < 10 ? d.getMonth() + 1 : d.getMonth() + 1;
    var yy = d.getFullYear();
    var newdate = mm + "/" + dd + "/" + yy;
    return newdate;
}
function IsTime(time) {
    var regex = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
    if (!regex.test(time))
        return false;
    else
        return true;
}
function IsMobile(mobile) {
    //var regex = /^\d{10}$/;
    var regex = /^[0-9]{10,11}$/;
    if (!regex.test(mobile))
        return false;
    else
        return true;
}
function daterange() {
    $('.daterange').daterangepicker({
        autoUpdateInput: true,
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'), 10),
        locale: {
            format: 'DD/MM/YYYY'
        },
        ranges: {
            'Last 3 Months': [moment().subtract(3, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'Last 15 Days': [moment().subtract(15, 'days'), moment()],
            'Last 7 Days': [moment().subtract(7, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Next 7 Days': [moment(), moment().add(7, 'days')],
            'Next 15 Days': [moment(), moment().add(15, 'days'), moment()],
            'Next 30 Days': [moment(), moment().add(29, 'days'), moment()],
            'Next 3 Months': [moment(), moment().startOf('month'), moment().add(3, 'month').endOf('month')],
        }
    });
    $('.daterange').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
    });
    $('.daterange').on('cancel.daterangepicker', function (ev, picker) { $(this).val(''); });
    $('.ranges').children().children().addClass('daterange-child');
}
function countChar(val) {
    var len = val.value.length;
    if (len >= 500) {
        val.value = val.value.substring(0, 250);
    } else {
        $('#charNum').text(250 - len);
    }
}
function copyToClip(str) {
    function listener(e) {
        e.clipboardData.setData("text/html", str);
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
        e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
};
//Alert functions (common for all) - added by Rajeev on dated:31/07/2020
var alertmsg = {
    msg: function (heading, text, icon) {
        icon = icon.toUpperCase();
        icon = (icon == 'S') ? 'success' : (icon == 'E') ? 'error' : (icon == 'W') ? 'warning' : 'info';
        $.toast({
            heading: heading, // Optional heading to be shown on the toast
            text: text, // Text that is to be shown in the toast            
            icon: icon, // Type of toast icon
            showHideTransition: 'fade', // fade, slide or plain
            allowToastClose: true, // Boolean value true or false
            hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
            stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
            position: 'top-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
        });
    }
}
//*********************** Validation function(s) ************************
ns_validations = {
    signUp: function (event) {
        var action = $(event).attr("data-action");
        var actionOn = $(event).attr("data-action-on");
        var userName = $("#txt_name").val().trim();
        var orgName = $("#txt_org_name").val().trim();
        var userEmail = $("#txt_email").val().trim();
        var password = $("#txt_password").val().trim();
        var userMobile = $("#txt_mobile").val().trim();
        var website = $("#txt_website").val().trim();
        if (userName.length == 0) {
            $("#txt_name").focus();
            alertmsg.msg("Message", "Please enter name", "W");
            return false;
        }
        else if (orgName.length == 0) {
            $("#txt_org_name").focus();
            alertmsg.msg("Message", "Please enter organization", "W");
            return false;
        }
        else if (userEmail.length == 0) {
            $("#txt_email").focus();
            alertmsg.msg("Message", "Please enter email", "W");
            return false;
        }
        else if (!ns_util.IsEmailValid("#txt_email")) {
            $("#txt_email").focus();
            alertmsg.msg("Message", "Please enter valid email", "W");
            return false;
        }
        else if (password.length == 0) {
            $("#txt_password").focus();
            alertmsg.msg("Message", "Please enter passowrd", "W");
            return false;
        }
        else if (!ns_util.IsPasswordValid("#txt_password")) {
            $("#txt_password").focus();
            $('#errorPassword').show();
            alert("Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character");
            alertmsg.msg("Message", "Invalid password", "W");
            return false;
        }
        else if (userMobile.length == 0) {
            $("#txt_mobile").focus();
            alertmsg.msg("Message", "Please enter mobile number", "W");
            return false;
        }
        else if (!IsMobile(userMobile)) {
            $("#txt_mobile").focus();
            alertmsg.msg("Message", "Please enter a valid mobile number", "W");
            return false;
        }
        else if (website.length > 0 && !ns_util.IsUrlValid('#txt_website')) {
            $("#txt_website").focus();
            alertmsg.msg("Message", "Please enter a valid URL", "W");
            return false;
        }
        if (!$('#chkTerms').prop('checked')) {
            $('.lbltermsError').show();
            alertmsg.msg("Message", "You must accept the terms and conditions to register an account", "W");
            return false;
        }
        else
            $('.lbltermsError').hide();
        // make ready final sign up object here
        var signup = {
            "sign_up": {
                "user_name": userName,
                "org_name": orgName,
                "user_email": userEmail,
                "password": password,
                "user_mobile": userMobile,
                "web_url": website
            },
            "action": action,
            "action_on": actionOn
        };
        return (JSON.stringify(signup));
    },
    signIn: function (event) {
        var action = $(event).attr("data-action");
        var action_on = $(event).attr("data-action-on");
        var userName = $("#txt_user_name").val().trim();
        var password = $("#txt_password").val().trim();
        if (userName.length == 0) {
            $("#txt_user_name").focus();
            alertmsg.msg("Message", "Please enter user name", "W");
            return false;
        }
        // else if (!ns_util.IsEmailValid("#txt_user_name")) {
        //     $("#txt_user_name").focus();
        //     alertmsg.msg("Message", "Please enter valid email", "W");
        //     return false;
        // }
        else if (password.length == 0) {
            $("#txt_password").focus();
            alertmsg.msg("Message", "Please enter password", "W");
            return false;
        }
        var signin = {
            "sign_in": {
                "user_name": userName,
                "password": password,
            },
            "log_history": {
                "browser_name": "", "ip_address": "",
            },
            "action": action,
            "action_on": action_on
        }
        return JSON.stringify(signin);
    },
    verifyMobile: function (event) {
        var action = $(event).attr("data-action");
        var actionOn = $(event).attr("data-action-on");
        var otp_code = $('#txt_otp_code').val();
        if (otp_code.length == 0) {
            $("#txt_otp_code").focus();
            alertmsg.msg("Message", "Please enter OTP code", "I");
            return false;
        }
        var signup = {
            "sign_up": {
                "otp_code": otp_code,
                "u_id": $(event).attr('data-id')
            },
            "action": action,
            "action_on": actionOn
        };
        return (JSON.stringify(signup));
    },
    forgetPassword: function (event) {
        var strJsonString = "";
        var action = $(event).attr("data-action"), actionOn = "account"; requestFor = $(event).attr("data-request-for");
        if (requestFor == "reset-link") {
            var email = $('#txt_email').val().trim(), intRegex = /[^0-9]/g;
            if (email.length == 0) {
                $("#txt_email").focus();
                alertmsg.msg("Message", "Please enter your email or mobile number", "I");
                return false;
            }
            if (!intRegex.test(email)) {
                if (!IsMobile(email)) {
                    $("#txt_phone").focus();
                    alertmsg.msg("Message", "Please enter a valid mobile number", "I");
                    return false;
                }
            }
            else {
                if (!ns_util.IsEmailValid("#txt_email")) {
                    $("#txt_email").focus();
                    alertmsg.msg("Message", "Please enter valid email", "I");
                    return false;
                }
            }
            strJsonString = {
                "sign_up": {
                    "user_email": email
                },
                "action": action,
                "action_on": actionOn,
                "request_for": requestFor
            };
        }
        else if (requestFor == "verify-otp") {
            var otp_code = $('#txt_otp_code').val();
            if (otp_code.length == 0) {
                $("#txt_otp_code").focus();
                alertmsg.msg("Message", "Please enter OTP code", "I");
                return false;
            }
            strJsonString = {
                "sign_up": {
                    "otp_code": otp_code,
                    "u_id": $(event).attr('data-id')
                },
                "action": action,
                "action_on": actionOn,
                "request_for": requestFor
            };
        }
        else if (requestFor == "reset-password") {
            var password = $("#txt_pswd").val().trim();
            var confirmPassword = $("#txt_confirm_pswd").val().trim();
            if (password.length == 0) {
                $("#txt_pswd").focus();
                alertmsg.msg("Message", "Please enter passowrd", "I");
                return false;
            }
            else if (!ns_util.IsPasswordValid("#txt_pswd")) {
                $("#txt_pswd").focus();
                alert("Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character");
                alertmsg.msg("Message", "Invalid password", "I");
                return false;
            }
            if (password != confirmPassword) {
                $("#txt_confirm_pswd").focus();
                alertmsg.msg("Message", "Password and Confirm Password does not match", "I");
                return false;
            }
            strJsonString = {
                "sign_up": {
                    "password": password,
                    "u_id": $(event).attr('data-id')
                },
                "action": action,
                "action_on": actionOn,
                "request_for": requestFor
            };
        }
        return (JSON.stringify(strJsonString));
    },
    //*********************** Lead Validation(s) ************************
    /****************Add lead***************/
    leadsMain: function (event) {
        var action = $(event).attr('data-action').toLowerCase(), actionOn = "leads_main", requestFor = $(event).attr('data-request_for').toLowerCase();
        var flag = 0, statusId = 0;
        var u_id = $(event).attr('data-u_id');
        var leadType = $('#ddl_lead_types').val();
        var category = $('#ddl_parent_cat').val();
        var channel = $('#ddl_lead_channel').val();
        //Basic Details   
        var title = $("#ddl_title").val().trim();
        var gender = $("#ddl_gender").val().trim();
        var dob = $("#txt_dob").val().trim();
        var name = $("#txt_lead_name").val().trim();
        var companyName = $("#txt_company_name").val().trim();
        var email = $("#txt_lead_email").val().trim();
        var mobile = $("#txt_lead_mobile").val().trim();
        var phone = $("#txt_lead_phone").val().trim();
        var note = $("#txt_lead_note").val().trim();
        var website = $("#txt_lead_website").val().trim();
        //Address Details
        var address = $("#txt_lead_address").val().trim();
        var city = $("#txt_lead_city").val().trim();
        var county = $("#txt_lead_county").val().trim();
        var postCode = $("#txt_lead_pincode").val().trim();
        var country = $("#ddl_lead_country").val();
        if (leadType == 0) {
            $("#ddl_lead_types").focus();
            alertmsg.msg("Message", "Please choose a lead type", "w");
            return false;
        }
        else if (title == 0) {
            $("#ddl_title").focus();
            alertmsg.msg("Message", "Please choose a title", "w");
            return false;
        }
        else if (name.length == 0) {
            $("#txt_lead_name").focus();
            alertmsg.msg("Message", "Please enter name", "w");
            return false;
        }
        else if (dob.length == 0) {
            $("#txt_dob").focus();
            alertmsg.msg("Message", "Please provide the date of birth", "w");
            return false;
        }
        else if (companyName.length == 0) {
            $("#txt_company_name").focus();
            alertmsg.msg("Message", "Please enter company's name", "w");
            return false;
        }
        else if (email.length == 0) {
            $("#txt_lead_email").focus();
            alertmsg.msg("Message", "Please enter email id", "w");
            return false;
        }
        else if (!ns_util.IsEmailValid("#txt_lead_email")) {
            $("#txt_lead_email").focus();
            alertmsg.msg("Message", "Please enter valid email id", "w");
            return false;
        }
        else if (mobile.length > 0 && !IsMobile(mobile)) {
            $("#txt_lead_mobile").focus();
            alertmsg.msg("Message", "Please enter a valid mobile no", "w");
            return false;
        }
        else if (phone.length > 0 && phone.length < 10) {
            $("#txt_lead_phone").focus();
            alertmsg.msg("Message", "Please enter a valid phone no", "w");
            return false;
        }
        else if (website.length > 0 && !ns_util.IsUrlValid('#txt_lead_website')) {
            $("#txt_lead_website").focus();
            alertmsg.msg("Message", "Please enter a valid URL", "W");
            return false;
        }
        else if (city.length == 0) {
            $("#txt_lead_city").focus();
            alertmsg.msg("Message", "Please enter city", "w");
            return false;
        }
        else if (postCode.length == 0) {
            $("#txt_lead_pincode").focus();
            alertmsg.msg("Message", "lease enter postcode", "w");
            return false;
        }
        else if (country == '0') {
            $("#ddl_lead_country").focus();
            alertmsg.msg("Message", "Please choose a country", "w");
            return false;
        }
        //Lead Details
        var leadDetailsJson = [];
        if(requestFor !='create'){
        $(".inputField").each(function () {
            var fieldId = $(this).attr('id');
            var fieldLabel = $(this).attr('data-field-label');
            var fieldValue = $(this).val();
            var isMandatory = $(this).attr('data-mandatory');
            var ValidationType = $(this).attr('data-validation');
            var item = {};
            item = {
                field_id: fieldId,
                field_label: fieldLabel,
                field_value: fieldValue,
            };
            if ((fieldValue.length == 0) && (isMandatory == "true")) {
                $("input[name=" + fieldId + "]").focus();
                alertmsg.msg("Message", "Please enter " + fieldLabel + "", "w");
                flag = 1;
                return false;
            }
            else {
                var item = {};
                item = {
                    field_id: fieldId,
                    field_label: fieldLabel,
                    field_value: fieldValue,
                };
                leadDetailsJson.push(item);
            }
        });}
        //Other Fields
        var leadCustomJson = [];
        $(".trCustomFields").each(function () {
            var counter = $(this).attr("data-counter");
            var field = $('#txt_field' + counter).val().trim();
            var label = $('#txt_label' + counter).val().trim();
            if (field.length > 0 && label.length == 0) {
                $('#txt_label' + counter).focus();
                alertmsg.msg("Message", "Please enter label name", "w");
                flag = 1;
            }
            else if (field.length == 0 && counter > 0) {
                $('#txt_field' + counter).focus();
                alertmsg.msg("Message", "Please enter field name", "w");
                flag = 1;
            }
            else if (label.length == 0 && counter > 0) {
                $('#txt_label' + counter).focus();
                alertmsg.msg("Message", "Please enter label name", "w");
                flag = 1;
            }
            if (field.length > 0 && label.length > 0) {
                item = {}
                item["field"] = field;
                item["label"] = label;
                leadCustomJson.push(item);
            }
            else
                leadCustomJson = null;
        });
        if (flag == 0) {
            //Lead Contacs Details
            var leadContactJson = {
                "title": title, "gender": gender, "lead_name": name, "lead_company_name": companyName, "lead_dob": dob,
                "lead_email": email, "lead_mobile": mobile, "lead_phone": phone, "lead_website": website, "lead_note": note, "lead_address": address, "lead_city": city,
                "lead_county": county, "lead_postcode": postCode, "lead_country": country,
                "facebook": $("#txt_facebook").val().trim(), "twitter": $("#txt_twitter").val().trim(),
                "instagram": $("#txt_instagram").val().trim(), "youtube": $("#txt_youtube").val().trim(),
                "linkedin": $("#txt_linkdin").val().trim(), "pinterest": $("#txt_pinterest").val().trim()
            };
            //Lead Keywords
            var leadKeywords = [];
            $(".amsify-select-tag").each(function () {
                item = {}
                item["keyword_name"] = $(this).attr('data-val');
                leadKeywords.push(item);
            });
            if ($(event).attr('data-action-type') == 'pipeline')
                statusId = $(event).attr('data-status-id');
            var finalObject = {
                "leads": {
                    "u_id": u_id,
                    "status_id": statusId,
                    "lead_type": leadType,
                    "lead_category_id": category,
                    "lead_channel_id": channel,
                    "lead_contact_json": leadContactJson,
                    "lead_details_json": leadDetailsJson,
                    "lead_custom_fields_json": leadCustomJson,
                    "lead_keywords": leadKeywords
                },
                "action": action,
                "action_on": actionOn,
                "request_for": requestFor,
                "action_type": $(event).attr('data-action-type')
            }
            return JSON.stringify(finalObject, event);
        }
    },
    /****************Edit Lead****************** */
    leadsMainEdit: function (event) {
        console.log(event)
        var action = $(event).attr('data-action').toLowerCase(), actionOn = "leads_main", requestFor = $(event).attr('data-request_for').toLowerCase();
        var flag = 0, statusId = 0;
        var u_id = $(event).attr('data-u_id');
        var leadType = $('#ddl_lead_typesEdit').val();
        var category = $('#ddl_parent_catEdit').val();
        var channel = $('#ddl_lead_channelEdit').val();
        //Basic Details   
        var title = $("#ddl_titleEdit").val().trim();
        var gender = $("#ddl_genderEdit").val().trim();
        var dob = $("#txt_dobEdit").val().trim();
        var name = $("#txt_lead_nameEdit").val().trim();
        var companyName = $("#txt_company_nameEdit").val().trim();
        var email = $("#txt_lead_emailEdit").val().trim();
        var mobile = $("#txt_lead_mobileEdit").val().trim();
        var phone = $("#txt_lead_phoneEdit").val().trim();
        var note = $("#txt_lead_noteEdit").val().trim();
        var website = $("#txt_lead_websiteEdit").val().trim();
        //Address Details
        var address = $("#txt_lead_address").val().trim();
        var city = $("#txt_lead_cityEdit").val().trim();
        var county = $("#txt_lead_countyEdit").val().trim();
        var postCode = $("#txt_lead_pincodeEdit").val().trim();
        var country = $("#ddl_lead_countryEdit").val();
        if (leadType == 0) {
            $("#ddl_lead_typesEdit").focus();
            alertmsg.msg("Message", "Please choose a lead type", "w");
            return false;
        }
        else if (title == 0) {
            $("#ddl_titleEdit").focus();
            alertmsg.msg("Message", "Please choose a title", "w");
            return false;
        }
        else if (name.length == 0) {
            $("#txt_lead_nameEdit").focus();
            alertmsg.msg("Message", "Please enter name", "w");
            return false;
        }
        else if (dob.length == 0) {
            $("#txt_dobEdit").focus();
            alertmsg.msg("Message", "Please provide the date of birth", "w");
            return false;
        }
        else if (companyName.length == 0) {
            $("#txt_company_nameEdit").focus();
            alertmsg.msg("Message", "Please enter company's name", "w");
            return false;
        }
        else if (email.length == 0) {
            $("#txt_lead_emailEdit").focus();
            alertmsg.msg("Message", "Please enter email id", "w");
            return false;
        }
        else if (!ns_util.IsEmailValid("#txt_lead_emailEdit")) {
            $("#txt_lead_emailEdit").focus();
            alertmsg.msg("Message", "Please enter valid email id", "w");
            return false;
        }
        else if (mobile.length > 0 && !IsMobile(mobile)) {
            $("#txt_lead_mobileEdit").focus();
            alertmsg.msg("Message", "Please enter a valid mobile no", "w");
            return false;
        }
        else if (phone.length > 0 && phone.length < 10) {
            $("#txt_lead_phoneEdit").focus();
            alertmsg.msg("Message", "Please enter a valid phone no", "w");
            return false;
        }
        else if (website.length > 0 && !ns_util.IsUrlValid('#txt_lead_websiteEdit')) {
            $("#txt_lead_websiteEdit").focus();
            alertmsg.msg("Message", "Please enter a valid URL", "W");
            return false;
        }
        else if (city.length == 0) {
            $("#txt_lead_cityEdit").focus();
            alertmsg.msg("Message", "Please enter city", "w");
            return false;
        }
        else if (postCode.length == 0) {
            $("#txt_lead_pincodeEdit").focus();
            alertmsg.msg("Message", "lease enter postcode", "w");
            return false;
        }
        else if (country == '0') {
            $("#ddl_lead_countryEdit").focus();
            alertmsg.msg("Message", "Please choose a country", "w");
            return false;
        }
        //Lead Details
        var leadDetailsJson = [];
        if(requestFor !='create'){
        $(".inputField").each(function () {
            var fieldId = $(this).attr('id');
            var fieldLabel = $(this).attr('data-field-label');
            var fieldValue = $(this).val();
            var isMandatory = $(this).attr('data-mandatory');
            var ValidationType = $(this).attr('data-validation');
            var item = {};
            item = {
                field_id: fieldId,
                field_label: fieldLabel,
                field_value: fieldValue,
            };
            if ((fieldValue.length == 0) && (isMandatory == "true")) {
                $("input[name=" + fieldId + "]").focus();
                alertmsg.msg("Message", "Please enter " + fieldLabel + "", "w");
                flag = 1;
                return false;
            }
            else {
                var item = {};
                item = {
                    field_id: fieldId,
                    field_label: fieldLabel,
                    field_value: fieldValue,
                };
                leadDetailsJson.push(item);
            }
        });}
        //Other Fields
        var leadCustomJson = [];
        $(".trCustomFields").each(function () {
            var counter = $(this).attr("data-counter");
            var field = $('#txt_field' + counter).val().trim();
            var label = $('#txt_label' + counter).val().trim();
            if (field.length > 0 && label.length == 0) {
                $('#txt_label' + counter).focus();
                alertmsg.msg("Message", "Please enter label name", "w");
                flag = 1;
            }
            else if (field.length == 0 && counter > 0) {
                $('#txt_field' + counter).focus();
                alertmsg.msg("Message", "Please enter field name", "w");
                flag = 1;
            }
            else if (label.length == 0 && counter > 0) {
                $('#txt_label' + counter).focus();
                alertmsg.msg("Message", "Please enter label name", "w");
                flag = 1;
            }
            if (field.length > 0 && label.length > 0) {
                item = {}
                item["field"] = field;
                item["label"] = label;
                leadCustomJson.push(item);
            }
            else
                leadCustomJson = null;
        });
        if (flag == 0) {
            //Lead Contacs Details
            var leadContactJson = {
                "title": title, "gender": gender, "lead_name": name, "lead_company_name": companyName, "lead_dob": dob,
                "lead_email": email, "lead_mobile": mobile, "lead_phone": phone, "lead_website": website, "lead_note": note, "lead_address": address, "lead_city": city,
                "lead_county": county, "lead_postcode": postCode, "lead_country": country,
                "facebook": $("#txt_facebook").val().trim(), "twitter": $("#txt_twitter").val().trim(),
                "instagram": $("#txt_instagram").val().trim(), "youtube": $("#txt_youtube").val().trim(),
                "linkedin": $("#txt_linkdin").val().trim(), "pinterest": $("#txt_pinterest").val().trim()
            };
            //Lead Keywords
            var leadKeywords = [];
            $(".amsify-select-tag").each(function () {
                item = {}
                item["keyword_name"] = $(this).attr('data-val');
                leadKeywords.push(item);
            });
            if ($(event).attr('data-action-type') == 'pipeline')
                statusId = $(event).attr('data-status-id');
            var finalObject = {
                "leads": {
                    "u_id": u_id,
                    "status_id": statusId,
                    "lead_type": leadType,
                    "lead_category_id": category,
                    "lead_channel_id": channel,
                    "lead_contact_json": leadContactJson,
                    "lead_details_json": leadDetailsJson,
                    "lead_custom_fields_json": leadCustomJson,
                    "lead_keywords": leadKeywords
                },
                "action": action,
                "action_on": actionOn,
                "request_for": requestFor,
                "action_type": $(event).attr('data-action-type')
            }
            return JSON.stringify(finalObject, event);
        }
    },
    
    comments: function (event) {
        var action = $(event).attr('data-action'), action_on = 'leads_main', request_for = $(event).attr('data-request_for');
        var activityId = $(event).attr('data-activity-id');
        var comment = $('#txt_comment-' + activityId).val();
        if (comment == "") {
            $('#txt_comment-' + activityId).focus();
            alertmsg.msg("Message", "Please enter comment", "W");
            return false;
        }
        // make ready final lead object here
        var comments = {
            "leads": {
                activity_id: activityId,
                comment: comment,
            },
            "action": action,
            "action_on": action_on,
            "request_for": request_for,
        };
        //Stringfy the data to pass it to server
        return JSON.stringify(comments);
    },
    note: function (event) {
        var action = $(event).attr('data-action'), actionOn = "leads_main", requestFor = $(event).attr('data-request_for');
        var type = $(event).attr('data-type');
        var leadNote = null, leadNoteType = 'call', personName = null, startDatetime = null, endDatetime = null, callBackJson = null;
        var errmsg = "", flag = 0;
        if (type == 'callback') {
            leadNote = $('#call_label').val().trim();
            personName = $('#person_name').val().trim();
            var startDate = $('#cb_start_date').val().trim();
            var startTime = $('#cb_start_time').val().trim();
            var endDate = $('#cb_end_date').val().trim();
            var endTime = $('#cb_end_time').val().trim();
            startDatetime = startDate + ' ' + startTime;
            endDatetime = endDate + ' ' + endTime;
            //conversion for comparing dates
            var sDate = startDate.split("/");
            sDate = new Date(sDate[2], sDate[1] - 1, sDate[0]);
            var eDate = endDate.split("/");
            eDate = new Date(eDate[2], eDate[1] - 1, eDate[0]);
            if (personName.length == 0) {
                $('#person_name').focus();
                errmsg = "Please enter a person name";
                flag = 1;
            }
            else if (startDate.length == 0) {
                $('#cb_start_date').focus();
                errmsg = "Please pick a date";
                flag = 1;
            }
            else if (startTime.length == 0) {
                $('#cb_start_time').focus();
                errmsg = "Please pick a time";
                flag = 1;
            }
            else if (!IsTime(startTime)) {
                $('#cb_start_time').focus();
                errmsg = "Please enter a valid time";
                flag = 1;
            }
            else if (endDate.length == 0) {
                $('#cb_end_date').focus();
                errmsg = "Please pick a date";
                flag = 1;
            }
            else if (endTime.length == 0) {
                $('#cb_end_time').focus();
                errmsg = "Please pick a time";
                flag = 1;
            }
            else if (!IsTime(endTime)) {
                $('#cb_end_time').focus();
                errmsg = "Please enter a valid time";
                flag = 1;
            }
            else if (sDate > eDate) {
                $('#cb_end_date').focus();
                errmsg = "End date should be greater than or equal to start date";
                flag = 1;
            }
            if (flag == 0)
                callBackJson = { "person_name": personName, "start_datetime": startDatetime, "end_datetime": endDatetime };
        }
        else if (type == 'ncallback') {
            leadNote = $(event).attr('data-message');
        }
        else {
            leadNote = $('#txt_note').val().trim();
            leadNoteType = null;
            if (leadNote.length == 0) {
                $('#txt_note').focus();
                errmsg = "Please enter a note";
                flag = 1;
            }
        }

        if (flag == 0) {
            var note = {
                "leads": {
                    "u_id": $('#span_leaduid').text(),
                    "lead_note": leadNote,
                    "lead_note_type": leadNoteType,
                    "callback": callBackJson
                },
                "action": action,
                "action_on": actionOn,
                "request_for": requestFor,
            };
           // ns_leads.post(JSON.stringify(note));
           return JSON.stringify(note);
        }
        else
            alertmsg.msg("Message", errmsg, "W");
        ////////////////////////////////////////// OLD
        //var u_id = $('#span_leaduid').text();
        //var note = $('#txt_note').val().trim();
        //var note = {
        //    "leads": {
        //        u_id: u_id,
        //        lead_note: note,
        //    },
        //    "action": action,
        //    "action_on": action_on,
        //    "request_for": request_for,
        //};
        //return JSON.stringify(note);
    },
    message: function (event) {
        var action = $(event).attr('data-action'), action_on = "leads_main", request_for = $(event).attr('data-request_for');
        var message = '', msgTo = '';
        var msgType = $('[name="chkleadmsg"]:checked').val();
        var msgSubject = $('#txt_msg_subject').val().trim();
        if (typeof msgType == "undefined") {
            alertmsg.msg("Message", "Please check atleast one checkbox", "w");
            return false;
        }
        if (msgType == 'SMS') {
            msgTo = $('#txt_smsmsg_mobile').val().trim();
            message = $('#txt_sms_msg').val().trim();
            if (msgTo == "") {
                $('#txt_smsmsg_mobile').focus();
                alertmsg.msg("Message", "Please enter mobile no.", "W");
                return false;
            }
            if (message == "") {
                $('#txt_sms_msg').focus();
                alertmsg.msg("Message", "Please enter message.", "W");
                return false;
            }
        }
        else {
            var msgTo = $('#txt_msg_to').val().trim();
            var message = $('#txt_msg').summernote('code');
            if (msgTo == "") {
                $('#txt_msg_to').focus();
                alertmsg.msg("Message", "Please enter msg to", "W");
                return false;
            }
            else if (msgTo.length > 0 && !ns_util.IsEmailValid("#txt_msg_to")) {
                $("#txt_msg_to").focus();
                alertmsg.msg("Message", "Please enter valid email id", "w");
                return false;
            }
            else if (msgSubject == "") {
                $('#txt_msg_subject').focus();
                alertmsg.msg("Message", "Please enter msg subject", "W");
                return false;
            }
            else if (message == "") {
                $('#txt_msg').focus();
                alertmsg.msg("Message", "Please enter message", "W");
                return false;
            }
        }
        $(event).html("Processing...").css({
            "cursor": "wait",
            "pointer-events": "none"
        });
        // make ready final lead object here
        var message = {
            "leads": {
                "u_id": $('#span_leaduid').text(),
                "message_type": msgType,
                "message_to": msgTo,
                "subject": msgSubject,
                "message": message
            },
            "action": action,
            "action_on": action_on,
            "request_for": request_for,
        };
        //Stringfy the data to pass it to server
        return JSON.stringify(message);
    },
    files: function (event) {
        var action = $(event).attr("data-action"), actionOn = "leads_main", requestFor = $(event).attr("data-request_for");
        var files = $('#filename').get(0).files;
        var fileTitle = $('#txt_doc_name').val();
        var fileDesc = $('#txt_description').val();
        if ($('#filename').val() == '') {
            alertmsg.msg("Message", "Please browse a file", "w");
            $('#filename').focus();
            return false;
        }
        //else if (fileTitle.length == 0) {
        //    alertmsg.msg("Message", "Please enter a file title", "w");
        //    $('#txt_doc_name').focus();
        //    return false;
        //}
        $(event).html("Processing...").css({
            "cursor": "wait",
            "pointer-events": "none"
        });
        var formData = new FormData();
        formData.append(files[0].name, files[0]);
        formData.append("lead_uid", $('#span_leaduid').text());
        formData.append("org_uid", $('#span_orguid').text());
        formData.append("file_title", fileTitle);
        formData.append("file_desc", fileDesc);
        formData.append("action", action);
        formData.append("action_on", actionOn);
        formData.append("request_for", requestFor);
        ns_fileupload.upload(formData, event); //calling upload api here       
    },
    tags: function (event) {
        var action = $(event).attr('data-action'), actionOn = "leads_main";
        var requestFor = $(event).attr('data-request_for'), strJsonString = '';
        var title = $('#txt_label').val().trim(), tagType = 'LEAD';
        var id = $(event).attr('data-id');
        if (requestFor == "create") {
            if (title.length == 0) {
                $('#txt_label').focus();
                alertmsg.msg("Message", "Please enter a title", "W");
                return false;
            }
            strJsonString = {
                "leads": {
                    "u_id": id,
                    "title": title,
                    "tag_type": tagType
                },
                "action": action,
                "action_on": actionOn,
                "request_for": requestFor,
            };
        }
        else {
            var tagsJson = [];
            var u_id = $(event).attr('data-id');
            $('.chkTag:checked').each(function () {
                item = {}
                item["tag_id"] = this.id;
                tagsJson.push(item);
            });
            strJsonString = {
                "leads": { "u_id": u_id },
                "lead_tags": tagsJson,
                "action": action,
                "action_on": actionOn,
                "request_for": requestFor,
            };
        }
        return JSON.stringify(strJsonString);
    },
    scheduleMeeting: function (event) {
        var strJsonString;
        var action = $(event).attr('data-action'), actionOn = "leads_main", requestFor = $(event).attr('data-request_for');
        var meetingType = $('input[name="meeting-type"]:checked').val();
        var timeZone = $("#ddlTimeZone option:selected").text();
        var linkType = null, externalLink = null, recipientPhone = null, recipientEmails = null, recipientAddress = null;
        var mailSubject = $('#spanSubject').text();
        var flag = 0, msg = "";
        if (meetingType == 'Video') {
            linkType = $('input[name="link-type"]:checked').val();
            externalLink = linkType == 'External' ? $('#txt_ExternalLink').val().trim() : null;
            recipientEmails = $('#txt_Email').val().trim();
            if (linkType == 'External' && externalLink.length == 0) {
                $('#txt_ExternalLink').focus();
                msg = "Please enter third party video conferencing link";
                flag = 1;
            }
        }
        else if (meetingType == 'Phone') {
            recipientPhone = $('#txt_Phone').val().trim();
            recipientEmails = $('#txt_Email').val().trim();
            if (recipientPhone.length == 0) {
                $('#txt_Phone').focus();
                msg = "Please enter a phone no";
                flag = 1;
            }
        }
        else {
            recipientAddress = $('#txt_Address').val().trim();
        }
        var meetingWithPerson = $('#txt_MeetingWithPerson').val().trim();
        var meetingSchedule = [];
        var id = 1, timings = "";
        $(".msrow").each(function () {
            if (id > 1)
                timings += ' and ';
            var counter = $(this).attr('data-counter');
            var date = $('#txt_date' + counter).val();
            var startTime = $('#txt_starttime' + counter).val();
            var endTime = $('#txt_endtime' + counter).val();
            var shr = startTime.split(':')[0];
            var ehr = endTime.split(':')[0];
            if (date.length == 0) {
                $('#txt_date' + counter).focus();
                msg = "Please pick a meeting's date";
                flag = 1;
            }
            else if (startTime.length == 0) {
                $('#txt_starttime' + counter).focus();
                msg = "Please pick a meeting's start time";
                flag = 1;
            }
            else if (!IsTime(startTime)) {
                $('#txt_starttime' + counter).focus();
                msg = "Please enter a valid start time";
                return false;
            }
            else if (endTime.length == 0) {
                $('#txt_endtime' + counter).focus();
                msg = "Please pick a meeting's end time";
                flag = 1;
            }
            else if (!IsTime(endTime)) {
                $('#txt_endtime' + counter).focus();
                msg = "Please enter a valid end time";
                return false;
            }
            else if ((startTime == endTime) || (startTime > endTime)) {
                $('#txt_endtime' + counter).focus();
                msg = "End time should be the greater than start time";
                flag = 1;
            }
            else if (ehr < parseInt(shr) + 1) {
                $('#txt_endtime' + counter).focus();
                msg = "Time duration should be 1 hour between the start time and end time";
                flag = 1;
            }
            else {
                timings += date + ' ' + startTime + ' to ' + endTime;
            }
            item = {};
            item["id"] = id;
            item["date"] = ConvertDateFormate(date);
            item["start_time"] = startTime;
            item["end_time"] = endTime;
            item["schedule_status"] = "false";
            meetingSchedule.push(item);
            id++;
        });
        if (flag == 0) {
            $('#msgBody').summernote('code', $('#msgBody').summernote('code').replace('{timing}', timings));
            $(event).html("Processing...").css({
                "cursor": "wait",
                "pointer-events": "none"
            });
            strJsonString = {
                "lead_schedule": {
                    "lead_uid": $('#span_leaduid').text(),
                    "entity_type": "lead",
                    "time_zone": timeZone,
                    "meeting_schedule": meetingSchedule,
                    "meeting_type": meetingType,
                    "meeting_with_person": meetingWithPerson,
                    "meeting_link_type": linkType,
                    "meeting_link_external": externalLink,
                    "mail_subject": mailSubject,
                    "recipient_msg": $('#msgBody').summernote('code'),
                    "recipient_phone": recipientPhone,
                    "recipient_add_emails": recipientEmails,
                    "recipient_address": recipientAddress,
                    "lead_email": $('#spnleadEmail').text()
                },
                "action": action,
                "action_on": actionOn,
                "request_for": requestFor,
            };
            return JSON.stringify(strJsonString);
        }
        else{
            alertmsg.msg("Message", msg, "W");
            return JSON.stringify(strJsonString);
        }
    },
    events: function (event) {
        var action = $(event).attr('data-action').toLowerCase(), actionOn = "leads_main", requestFor = $(event).attr('data-request_for');
        var flag = 0, msg = "";
        var eventTitle = $('#txt_event_title').val().trim();
        var eventType = "";
        var isPrivateEvent = $('#is_private_event').prop('checked') ? 1 : 0;
        var allDay = $('#allday').prop('checked') ? 1 : 0;
        var startDate = $('#txt_event_start_date').val().trim();
        var startTime = allDay == 1 ? '00:00' : $('#txt_event_start_time').val().trim();
        var endDate = $('#txt_event_end_date').val().trim();
        var endTime = allDay == 1 ? '00:00' : $('#txt_event_end_time').val().trim();
        var eventStart = startDate + ' ' + startTime;
        var eventEnd = endDate + ' ' + endTime;
        var attendees = $('#txt_attendees-0').val().trim();
        var eventColor = $('#event_color').val();
        var location = $('#txt_event_location').val().trim();
        var webUrl = $('#txt_weburl').val().trim();
        var desc = $('#txt_desc').val().trim();
        var associate = $('input[name="associate"]:checked').val();
        var person = "";
        var reminder = $('#ddl_reminder').val();
        //conversion for comparing dates
        var sDate = startDate.split("/");
        sDate = new Date(sDate[2], sDate[1] - 1, sDate[0]);
        var eDate = endDate.split("/");
        eDate = new Date(eDate[2], eDate[1] - 1, eDate[0]);

        var event_repeat = "";
        var attendeesArr = [];
        if ($('#chk_repeatevent').prop('checked')) {
            var repeatType = $('#ddl_event_repeat_type').val();
            var repeatUntil = ''
            if ($('input[name="event-end"]:checked').val() == 'until')
                repeatUntil = $('#txt_untildate').val();
            if (repeatType == "Daily") {
                repeatOn = $('input[name="dailyevent"]:checked').val();
                repeatValue = repeatOn == 'every_day' ? $('#txt_everyday').val() : "";
                event_repeat = {
                    "repeat_type": repeatType,
                    "repeat_on": repeatOn,
                    "repeat_value": repeatValue,
                    "repeat_until": repeatUntil
                };
            }
        }
        if (eventTitle.length == 0) {
            $('#txt_event_title').focus();
            msg = "Please enter event title";
            flag = 1;
        }
        else if (startDate.length == 0) {
            $('#txt_event_start_date').focus();
            msg = "Please enter event start date";
            flag = 1;
        }
        else if (startTime.length == 0) {
            $('#txt_event_start_time').focus();
            msg = "Please enter event start time";
            flag = 1;
        }
        else if (endDate.length == 0) {
            $('#txt_event_end_date').focus();
            msg = "Please enter event end date";
            flag = 1;
        }
        else if (endTime.length == 0) {
            $('#txt_event_end_time').focus();
            msg = "Please enter event end time";
            flag = 1;
        }
        else if (sDate > eDate) {
            $('#txt_event_end_date').focus();
            msg = "End date should be greater than or equal to start date";
            flag = 1;
        }
        else if (attendees.length > 0 && !ns_util.IsEmailValid('#txt_attendees-0')) {
            $("#txt_attendees-" + counter).focus();
            msg = "Please enter valid email id";
            flag = 1;
        }
        else if (attendees.length > 0) {
            $(".event-attendees").each(function () {
                var counter = $(this).attr('data-counter');
                var email = $('#txt_attendees-' + counter).val();
                if (email.length == 0) {
                    $('#txt_attendees-' + counter).focus();
                    msg = "Please enter an email or delete the row";
                    flag = 1;
                }
                else if (!ns_util.IsEmailValid('#txt_attendees-' + counter)) {
                    $("#txt_attendees-" + counter).focus();
                    msg = "Please enter valid email id";
                    flag = 1;
                }
                item = {};
                item["email"] = email;
                attendeesArr.push(item);
            });
        }
        if (flag == 0) {
            var strJsonString = {
                "events": {
                    "event_id": $(event).attr('data-id'),
                    "lead_uid": "",
                    "event_title": eventTitle,
                    "event_desc": desc,
                    "event_start": eventStart,
                    "event_end": eventEnd,
                    "all_day_event": allDay,
                    "event_type": eventType,
                    "event_color": eventColor,
                    "person_name": person,
                    "event_default_reminder": reminder,
                    "event_location": location,
                    "is_private_event": isPrivateEvent,
                    "attendees": attendeesArr,
                    "web_url": webUrl,
                    "associate": associate
                },
                "action": action,
                "action_on": actionOn,
                "request_for": requestFor
            }
            if (event_repeat != "")
                strJsonString.events.event_repeat = event_repeat;
            return JSON.stringify(strJsonString);
        }
        else
            alertmsg.msg("Message", msg, "W");
    },
    //*********************** Organization Validation(s) ************************
    orgInfo: function (event) {
        var action = $(event).attr("data-action"), actionOn = "organization", requestFor = $(event).attr("data-request-for");
        if (requestFor == 'update') {
            var orgMainInfo = "", orgAddressInfo = "", orgLogo = "";
            var companyName = $("#txt_company_name").val().trim();
            var mobile = $("#txt_mobile_no").val();
            var phone = $("#txt_phone_no").val();
            var web_url = $("#txt_web_url").val().trim();
            if (companyName.length == 0) {
                $('#txt_company_name').focus();
                alertmsg.msg("Message", "Please enter company name", "W");
                return false;
            }
            else if (mobile.length > 0 && !IsMobile(mobile)) {
                $("#txt_mobile_no").focus();
                alertmsg.msg("Message", "Please enter a valid mobile number", "W");
                return false;
            }
            else if (web_url.length > 0 && !ns_util.IsUrlValid('#txt_web_url')) {
                $("#txt_web_url").focus();
                alertmsg.msg("Message", "Please enter a valid URL", "W");
                return false;
            }
            orgMainInfo = {
                //Short Info            
                "logo": orgLogo,
                "org_name": companyName,
                "company_id": $("#txt_reg_no").val(),
                "industry_id": $("#ddl_industry").val(),
                "desc": $("#txt_desc").val(),
                //Contact Info
                "org_contact_name": $("#txt_contact_name").val().trim(),
                "user_mobile": mobile,
                "org_phone": phone,
            }; // ORG main info object
            orgAddressInfo = {
                //org Address Info
                "u_id": $('#span_address_uid').text(),
                "address1": $("#txt_address1").val().trim(),
                "address2": $("#txt_address2").val().trim(),
                "state": $("#txt_state").val().trim(),
                "city": $("#txt_city").val().trim(),
                "country": $("#ddl_country").val(),
                "postal_code": $("#txt_postcode").val().trim(),
                "web_url": web_url
            };
            //org social media Info
            var orgSocialMediaInfo = [], isValid = true;
            $(".social_media").each(function () {
                if ($(this).val().length > 0) {
                    var u_id = $(this).attr("data-uid");
                    var social_media_type = $(this).attr("data-media-type");
                    var social_media_link = $(this).val();
                    if (!ns_util.IsUrlValid(this)) {
                        $(this).focus();
                        alertmsg.msg("Message", "Please enter a valid URL", "W");
                        isValid = false;
                    }
                    item = {}
                    item["u_id"] = u_id;
                    item["social_media_type"] = social_media_type;
                    item["social_media_link"] = social_media_link;
                    orgSocialMediaInfo.push(item);
                }
            });
            var finalObject = {
                "main_info": orgMainInfo,//Get ready organization main info object here
                "address_info": orgAddressInfo, //Get ready organization address info object here
                "social_media_info": orgSocialMediaInfo, //Get ready organization security info object here
                "action": action,
                "action_on": actionOn,
                "request_for": requestFor
            }
            if (isValid == true)
                return JSON.stringify(finalObject);
        }
        else if (requestFor == 'update-email') {
            var email = $("#txt_email").val().trim();
            if ($('#txt_email').attr('data-email') == email) {
                return false;
            }
            else if (email.length == 0) {
                $("#txt_email").focus();
                alertmsg.msg("Message", "Please enter email", "W");
                return false;
            }
            else if (email.length > 0 && !ns_util.IsEmailValid("#txt_email")) {
                $("#txt_email").focus();
                alertmsg.msg("Message", "Please enter valid email", "W");
                return false;
            }
            var strJsonString = {
                "main_info": {
                    "org_contact_email": email,
                },
                "action": action,
                "action_on": actionOn,
                "request_for": requestFor
            };
            return JSON.stringify(strJsonString);
        }
        else if (requestFor == 'logo-upload') {
            var formData = new FormData();
            var files = $('#fileInputUpload').get(0).files;
            formData.append("org_uid", $('#span_orguid').text());
            formData.append(files[0].name, files[0]);
            formData.append("action", action);
            formData.append("action_on", actionOn);
            formData.append("request_for", requestFor);
            ns_fileupload.upload(formData, event); //calling upload api here
        }
    },
    addServices: function (event) {
        var action = $(event).attr("data-action"), actionOn = "organization", requestFor = $(event).attr("data-request-for");
        var service = $('.amsify-select-tag').attr('data-val');
        var service_info = [];
        $(".amsify-select-tag").each(function () {
            item = {}
            item["serv_title"] = $(this).attr('data-val');
            service_info.push(item);
        });
        var finalObject = {
            "service_info": service_info,
            "action": action,
            "action_on": actionOn,
            "request_for": requestFor
        }
        return JSON.stringify(finalObject);
    },
    addLocations: function (event) {
        var action = $(event).attr("data-action"), actionOn = "organization", requestFor = $(event).attr("data-request-for");
        if ($('input[name="country"]:checked').length == 0) {
            alertmsg.msg("Message", "Please choose a country ", "W");
            return false;
        }
        else if ($('input[name="location"]:checked').length == 0) {
            alertmsg.msg("Message", "Select atleast one locations ", "W");
            return false;
        }

        var location_info = [];
        $(".chk-locations:checked").each(function () {
            item = {}
            item["country_id"] = $('input[name="country"]:checked').val();
            item["loc_id"] = $(this).val();
            location_info.push(item);
        });
        var finalObject = {
            "location_info": location_info,
            "action": action,
            "action_on": actionOn,
            "request_for": requestFor
        }
        return JSON.stringify(finalObject);
    },
    addUser: function (event) {
        var action = $(event).attr("data-action"), actionOn = "organization", requestFor = $(event).attr("data-request-for");
        var roleId = $("#ddl_user_role").val();
        var userName = $("#txt_name").val().trim();
        var userMobile = $("#txt_mobile").val().trim();
        var userEmail = $("#txt_email").val().trim();
        var password = $("#txt_user_password").val().trim();
        var confirmPassword = $("#txt_confirm_user_password").val().trim();
        var Id = $('#btnSbmtUserDetails').attr('data-uid');
        var isManager = $('#ddl_user_role').find(":selected").attr('data-manager');
        var userCounts = $('.chk-org-users:checked').length;
        var verifyEmail = $('#chk_verifyEmail').prop('checked') ? '1' : '0';
        if (userName.length == 0) {
            $("#txt_name").focus();
            alertmsg.msg("Message", "Please enter user name", "W");
            return false;
        }
        else if (userMobile.length > 0 && !IsMobile(userMobile)) {
            $("#txt_mobile").focus();
            alertmsg.msg("Message", "Please enter a valid mobile number", "W");
            return false;
        }
        else if (userEmail.length == 0) {
            $("#txt_email").focus();
            alertmsg.msg("Message", "Please enter email", "W");
            return false;
        }
        else if (!ns_util.IsEmailValid("#txt_email")) {
            $("#txt_email").focus();
            alertmsg.msg("Message", "Please enter valid email", "W");
            return false;
        }
        else if (password.length == 0 && Id == 0) {
            $("#txt_user_password").focus();
            alertmsg.msg("Message", "Please enter passowrd", "W");
            return false;
        }
        else if (password.length > 0 && !ns_util.IsPasswordValid("#txt_user_password")) {
            $("#txt_user_password").focus();
            alertmsg.msg("Message","Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character","E");
           // alert("Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character");
           // alertmsg.msg("Message", "Invalid password", "I");
            return false;
        }
        else if (confirmPassword.length == 0 && Id == 0) {
            $("#txt_confirm_user_password").focus();
            alertmsg.msg("Message", "Please enter confirm passowrd", "W");
            return false;
        }
        else if (password != confirmPassword && Id == 0) {
            alertmsg.msg("Message", "Password and confirm passowrd not matched", "W");
            return false;
        }
        else if (roleId == "0") {
            $("#ddl_user_role").focus();
            alertmsg.msg("Message", "Please choose an user role", "W");
            return false;
        }
        //else if (isManager == 1 && userCounts == 0) {
        //    alertmsg.msg("Message", "Please select atleast one user", "W");
        //    return false;
        //}
        var arrUsers = [];
        $('.chk-org-users:checked').each(function () {
            var items = {};
            items["user_id"] = $(this).val();
            items["user_name"] = $(this).attr('data-user-name');
            arrUsers.push(items);
        });
        if (isManager == 0 || isManager == 1 && userCounts == 0)
            arrUsers = null;
        var addUser = {
            "add_user": {
                "u_id": Id,
                "role_id": roleId,
                "user_name": userName,
                "user_mobile": userMobile,
                "user_email": userEmail,
                "password": password,
                "manager_json": arrUsers,
                "email_verify_required": verifyEmail
            },
            "action": action,
            "action_on": actionOn,
            "request_for": requestFor
        };
        return JSON.stringify(addUser);
    },
    paymentAddressInfo: function (event) {
        var action = $(event).attr("data-action"), actionOn = "organization", requestFor = $(event).attr("data-request-for");
        var billingName = $("#txt_billing_name").val();
        var address1 = $("#txt_address_line1").val().trim();
        var address2 = $("#txt_address_line2").val().trim();
        var state = $("#txt_state").val().trim();
        var city = $("#txt_city").val().trim();
        var postCode = $("#txt_post_code").val().trim();
        var phone = $("#txt_phone").val().trim();
        var webUrl = $("#txt_web_url").val().trim();
        var taxId = "", taxType = "";
        if ($('#rdo_vat_yes').prop('checked')) {
            taxId = $("#txt_tax_id").val().trim();
            taxType = $("#txt_tax_type").val().trim();
        }
        var addr_uid = $('#span_addr_uid').text();
        if (billingName.length == 0) {
            $("#txt_billing_name").focus();
            alertmsg.msg("Message", "Please enter billing name", "W");
            return false;
        }
        else if (address1.length == 0) {
            $("#txt_address_line1").focus();
            alertmsg.msg("Message", "Please enter address", "W");
            return false;
        }
        else if (state.length == 0) {
            $("#txt_state").focus();
            alertmsg.msg("Message", "Please enter state", "W");
            return false;
        }
        else if (city.length == 0) {
            $("#txt_city").focus();
            alertmsg.msg("Message", "Please enter city", "W");
            return false;
        }
        else if (postCode.length == 0) {
            $("#txt_post_code").focus();
            alertmsg.msg("Message", "Please enter post code", "W");
            return false;
        }
        else if (webUrl.length > 0 && !ns_util.IsUrlValid('#txt_web_url')) {
            $("#txt_web_url").focus();
            alertmsg.msg("Message", "Please enter a valid URL", "W");
            return false;
        }
        else if ($('#rdo_vat_yes').prop('checked') && taxType.length == 0) {
            $("#txt_tax_type").focus();
            alertmsg.msg("Message", "Please enter tax type", "W");
            return false;
        }
        else if ($('#rdo_vat_yes').prop('checked') && taxId.length == 0) {
            $("#txt_tax_id").focus();
            alertmsg.msg("Message", "Please enter tax id", "W");
            return false;
        }
        var paymentAddressInfo = {
            "payment_address_info": {
                "u_id": addr_uid,
                "billing_name": billingName,
                "address1": address1,
                "address2": address2,
                "state": state,
                "city": city,
                "country": $("#ddl_country").val(),
                "postal_code": postCode,
                "phone": phone,
                "web_url": webUrl,
                "tax_status": $("input[name='vatStatus']:checked").val(),
                "tax_id": taxId,
                "tax_type": taxType,
                //Bank Info
                "bank_acct_no": $("#bank_acct_no").val().trim(),
                "bank_acct_sort_code": $('#bank_acct_sort_code').val().trim(),
                "bank_acct_name": $('#bank_acct_name').val().trim(),
                "invoice_message": $('#invoice_message').val().trim()
            },
            "action": action,
            "action_on": actionOn,
            "request_for": requestFor
        };
        return JSON.stringify(paymentAddressInfo);
    },
    mailTemplate: function (event) {
        var action = $(event).attr("data-action"), actionOn = "organization", requestFor = $(event).attr("data-request_for");
        var strJsonString = false;
        if (requestFor == 'create' || requestFor == 'update') {
            var templateName = $("#txt_template_name").val().trim();
            var templateKeyword = $("#txt_template_keyword_new").val();
            var templateSubject = $("#txt_subject").val().trim();
            var templateBody = $('#template_body').summernote('code');
            var statusId = $("#ddl_statusMaster").val();
            var emailType = $("#ddl_emailType").val();
            var defaultStatus = $('#chk_defaultTmpl').prop('checked') ? '1' : '0';
            var emailNotification = $('#chk_emailnotify').prop('checked') ? '1' : '0';
            var internalRecipient = $('#chk_internal').prop('checked') ? '1' : '0';
            var adminEmail = $('#chk_admin').prop('checked') ? '1' : '0';
            var customEmailStatus = $('#chk_custom').prop('checked') ? '1' : '0';
            var customEmail = $("#txt_recipient").val().trim();
            if (templateName.length == 0) {
                $("#txt_template_name").focus();
                alertmsg.msg("Message", "Please enter template name", "W");
                return false;
            }
            else if (templateKeyword.length == 0) {
                $("#txt_template_keyword_new").focus();
                alertmsg.msg("Message", "Please enter template keywords", "W");
                return false;
            }
            else if (emailNotification > 0 && $('input[name="chkemail"]:checked').length == 0) {
                alertmsg.msg("Message", "Please check a recipient", "W");
                return false;
            }
            else if (customEmailStatus > 0 && customEmail.length== 0) {
                $("#txt_recipient").focus();
                alertmsg.msg("Message", "Please enter a recipient's email", "W");
                return false;
            }
            var strJsonString = {
                "mail_template": {
                    "u_id": $(event).attr('data-uid'),
                    "template_name": templateName,
                    "template_keyword": templateKeyword,
                    "template_subject": templateSubject,
                    //"template_group": templateGroup,
                    "template_body": templateBody,
                    "status_id": statusId,
                    "email_type": emailType,
                    "default_status": defaultStatus,
                    "email_notification_status": emailNotification,
                    "internal_recipient_status": internalRecipient,
                    "admin_email_status": adminEmail,
                    "custom_email_status": customEmailStatus,
                    "custom_email": customEmail
                },
                "action": action,
                "action_on": actionOn,
                "request_for": requestFor
            };
        }
        else if (requestFor == 'save-email-config') {
            var fromName = $("#txt_from_name").val().trim();
            var fromAddress = $("#txt_from_address").val();
            if (fromName.length == 0) {
                $("#txt_from_name").focus();
                alertmsg.msg("Message", "Please enter name", "W");
                return false;
            }
            else if (fromAddress.length == 0) {
                $("#txt_from_address").focus();
                alertmsg.msg("Message", "Please enter email", "W");
                return false;
            }
            var strJsonString = {
                "mail_configuration": {
                    "from_name": fromName,
                    "from_address": fromAddress,
                    "footer_text": $('#txt_footer_text').val().trim(),
                    "base_color": $('#base_hexcolor').val().trim(),
                    "background_color": $('#background_hexcolor').val().trim(),
                    "body_background_color": $('#body_background_hexcolor').val().trim(),
                    "body_text_color": $('#body_text_hexcolor').val().trim(),
                },
                "action": action,
                "action_on": actionOn,
                "request_for": requestFor
            };
        }
        return JSON.stringify(strJsonString);
    },
    changePassword: function (event) {
        var action = $(event).attr("data-action"), actionOn = "organization", requestFor = $(event).attr("data-request-for");
        var oldPassword = $("#txt_old_password").val();
        var password = $("#txt_password").val().trim();
        var confirmPassword = $("#txt_confirm_password").val().trim();
        if (oldPassword.length == 0) {
            $("#txt_old_password").focus();
            alertmsg.msg("Message", "Please enter old password", "W");
            return false;
        }
        else if (password.length == 0) {
            $("#txt_password").focus();
            alertmsg.msg("Message", "Please enter new password", "W");
            return false;
        }
        else if (!ns_util.IsPasswordValid("#txt_password")) {
            $("#txt_password").focus();
            alert("Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character");
            alertmsg.msg("Message", "Invalid password", "I");
            return false;
        }
        else if (confirmPassword.length == 0) {
            $("#txt_confirm_password").focus();
            alertmsg.msg("Message", "Please enter confirm password", "W");
            return false;
        }
        else if (password != confirmPassword) {
            $("#txt_confirm_password").focus();
            alertmsg.msg("Message", "Password and confirm password does not match", "W");
            return false;
        }
        var changePassword = {
            "change_password": {
                "old_password": oldPassword,
                "password": password
            },
            "action": action,
            "action_on": actionOn,
            "request_for": requestFor
        };
        return JSON.stringify(changePassword);
    },
    //********************** User Profile *********************
    userProfile: function (event) {
        var action = $(event).attr("data-action"), actionOn = "organization", requestFor = $(event).attr("data-request-for");
        if (requestFor == 'update') {
            var name = $("#txt_user_name").val();
            var email = $("#txt_email").val();
            var mobile = $("#txt_mobile_no").val();
            var phone = $("#txt_phone_no").val();
            if (name.length == 0) {
                $("#txt_user_name").focus();
                alertmsg.msg("Message", "Please enter user name", "W");
                return false;
            }
            else if (mobile.length > 0 && !IsMobile(mobile)) {
                $("#txt_mobile_no").focus();
                alertmsg.msg("Message", "Please enter a valid mobile number", "W");
                return false;
            }
            else if (email.length == 0) {
                $("#txt_email").focus();
                alertmsg.msg("Message", "Please enter email id", "W");
                return false;
            }
            else if (!ns_util.IsEmailValid("#txt_email")) {
                $("#txt_email").focus();
                alertmsg.msg("Message", "Please enter valid email id", "W");
                return false;
            }
            var finalObject = {
                "main_info": {
                    "org_contact_name": name,
                    "org_contact_email": email,
                    "org_phone": phone,
                    "user_mobile": mobile
                },
                "action": action,
                "action_on": actionOn,
                "request_for": requestFor
            }
            return JSON.stringify(finalObject);
        }
    },

    //*********************** Master Validation(s) ************************
    masters: function (event) {
        var action = $(event).attr('data-action').toLowerCase(), action_on = 'masters'
        var request_for = $(event).attr('data-request_for').toLowerCase();
        var uid = $(event).attr('data-id');
        var flag = 0;
        var masters = {};
        if (action == 'category') {
            var catName = $('#txt_cat_name').val().trim();
            var catAlias = $('#txt_cat_alias').val().trim();
            var featureStatus = $('#chk_feature').prop('checked') ? '1' : '0';
            var parentCat = $('#ddl_parent_cat').val();
            var desc = $('#txt_description').val().trim();
            var sortNum = $('#txt_sort_number').val().trim();
            var featureSortNum = $('#txt_feature_sort_order').val().trim();
            var file = $('#filename').get(0).files;
            var org_uid = '50088610O2032520';

            if (catName == "") {
                $('#txt_cat_name').focus();
                alertmsg.msg("Message", "Please enter category name", "W");
                return false;
            }
            else if (catAlias == "") {
                $('#txt_cat_alias').focus();
                alertmsg.msg("Message", "Please enter category alias", "W");
                return false;
            }
            else if ($('#filename').val() == '') {
                alertmsg.msg("Message", "Please browse a file", "w");
                $('#filename').focus();
                return false;
            }
            else if ($('#chk_parent_cat').prop('checked') == true) {
                if (parentCat == "") {
                    $('#ddl_parent_cat').focus();
                    alertmsg.msg("Message", "Please select parent category ", "W");
                    return false;
                }
            }
            $(event).html("Processing...").css({
                "cursor": "wait",
                "pointer-events": "none"
            });
            var formData = new FormData();
            formData.append(file[0].name, file[0]);
            formData.append("u_id", uid);
            formData.append("org_uid", org_uid);
            formData.append("feature_status", featureStatus);
            formData.append("cat_parent_id", parentCat);
            formData.append("cat_name", catName);
            formData.append("cat_alias", catAlias);
            formData.append("cat_type", "P");
            formData.append("desc", desc);
            formData.append("sort_number", sortNum);
            formData.append("feature_sort_number", featureSortNum);
            formData.append("action", action);
            formData.append("action_on", action_on);
            formData.append("request_for", request_for);
            ns_fileupload.upload(formData, event);
        }
        else if (action == 'location') {
            var countryId = $('#ddl_country').val();
            var countyId = $('#ddl_county').val();
            var strLocations = $('#txt_location').val().trim();
            if (countryId == 0) {
                $('#ddl_country').focus();
                alertmsg.msg("Message", "Please choose a country", "W");
                return false;
            }
            else if (countyId == 0 || countyId == 'undefined') {
                $('#ddl_county').focus();
                alertmsg.msg("Message", "Please choose a county", "W");
                return false;
            }
            else if (strLocations.length == 0) {
                $('#txt_location').focus();
                alertmsg.msg("Message", "Please enter location name", "W");
                return false;
            }
            var locationInfo = [];
            if (request_for == 'create') {
                var array = strLocations.split(",");
                $.each(array, function (i) {
                    item = {}
                    item["country_id"] = countryId;
                    item["county_id"] = countyId;
                    item["loc_name"] = array[i].trim();
                    locationInfo.push(item);
                });
            }
            else {
                item = {}
                item["u_id"] = uid;
                item["country_id"] = countryId;
                item["county_id"] = countyId;
                item["loc_name"] = $('#txt_location').val();
                locationInfo.push(item);
            }
            // Final object here...
            masters = {
                "location": locationInfo,
                "action": action,
                "action_on": action_on,
                "request_for": request_for,
            };
        }
        else if (action == 'roles') {
            if (request_for == 'create' || request_for == 'update') {
                var roleName = $('#txt_role_name').val();
                var roleGroup = $('#txt_role_group').val();
                var desc = $('#txt_description').val().trim();
                var isManager = $('#chk_isManager').prop('checked') ? '1' : '0';
                if (roleName.length == 0) {
                    $('#txt_role_name').focus();
                    alertmsg.msg("Message", "Please enter role name", "W");
                    return false;
                }
                else if (roleGroup.length == 0) {
                    $('#txt_role_name').focus();
                    alertmsg.msg("Message", "Please enter role group", "W");
                    return false;
                }
                masters = {
                    "roles": {
                        "u_id": uid,
                        "role_name": roleName,
                        "role_group": roleGroup,
                        "role_desc": desc,
                        "is_manager": isManager
                    },
                    "action": action,
                    "action_on": action_on,
                    "request_for": request_for,
                };
            }
            else {
                var org_uid = $('#ddl_organizations').val();
                if ($('.chkModules:checked').length == 0) {
                    alertmsg.msg("Message", "Please check atleast one module", "W");
                    return false;
                }
                var modulesArr = [];
                $('.chkModules:checked').each(function () {
                    item = {}
                    item["module_id"] = $(this).val();
                    modulesArr.push(item);
                });
                masters = {
                    "roles": { "u_id": uid, org_uid: org_uid },
                    "role_modules": modulesArr,
                    "action": action,
                    "action_on": action_on,
                    "request_for": request_for,
                };
            }
        }
        else if (action == 'module') {
            var isChild = $('#chk_child').prop('checked') ? 1 : 0;
            var moduleParent = $('#ddl_module_parent').val();
            var moduleName = $('#txt_module_name').val();
            var controllerName = $('#txt_controller_name').val().trim();
            var actionName = $('#txt_action_name').val().trim();
            var icon = $('#txt_module_icon').val().trim();
            var moduleRoute = $('#txt_module_route').val().trim();
            var sortOrder = $('#txt_sort_order').val().trim();
            var isSettingMenu = $('#chk_setting_menu').prop('checked') ? 1 : 0;
            var isDefaultMenu = $('#chk_default_menu').prop('checked') ? 1 : 0;

            if (isChild > 0 && (moduleParent == 0 || moduleParent == null)) {
                $('#ddl_module_parent').focus();
                alertmsg.msg("Message", "Please select parent module", "W");
                return false;
            }
            else if (moduleName.length == 0) {
                $('#txt_module_name').focus();
                alertmsg.msg("Message", "Please enter module name", "W");
                return false;
            }
            else if (controllerName.length == 0) {
                $('#txt_controller_name').focus();
                alertmsg.msg("Message", "Please enter controller name", "W");
                return false;
            }
            else if (isChild > 0 && actionName.length == 0) {
                $('#txt_action_name').focus();
                alertmsg.msg("Message", "Please enter action name", "W");
                return false;
            }
            else if (isChild > 0 && moduleRoute.length == 0) {
                $('#txt_module_route').focus();
                alertmsg.msg("Message", "Please enter moule route", "W");
                return false;
            }
            masters = {
                "module": {
                    "u_id": uid,
                    "is_child": isChild,
                    "module_name": moduleName,
                    "parent_id": moduleParent,
                    "controller_name": controllerName,
                    "action": actionName,
                    "icon": icon,
                    "module_route": moduleRoute,
                    "sort_order_no": sortOrder,
                    "is_setting_menu": isSettingMenu,
                    "is_default_menu": isDefaultMenu,
                },
                "action": action,
                "action_on": action_on,
                "request_for": request_for,
            };
        }
        else if (action == 'lead-status') {
            var type = $(event).attr('data-type');
            var id = $(event).attr('data-id');
            var statusName = $('#txt_name').val();
            var statusType = $('#ddl_type').val();
            var globalStatus = 0;
            if (type == 'master')
                globalStatus = $('#chk_gstatus').prop('checked') ? '1' : '0';
            if (statusName.length == 0) {
                $('#txt_name').focus();
                alertmsg.msg("Message", "Please enter status name", "W");
                return false;
            }
            else if (statusType == "") {
                $('#ddl_type').focus();
                alertmsg.msg("Message", "Please enter status type", "W");
                return false;
            }
            masters = {
                "lead_status": {
                    "status_id": id,
                    "status_name": statusName,
                    "status_type": statusType,
                    "global_status": globalStatus,
                    "color_code": $('#hexcolor').val(),
                    "sort_order": $('#txt_sort_order').val()
                },
                "action": action,
                "action_on": action_on,
                "request_for": request_for,
                "type": type,
            };
        }
        else if (action == 'lead-type') {
            var id = $(event).attr('data-id');
            var name = $('#txt_name').val();
            var globalStatus = $('#chk_gStatus').prop('checked') ? '1' : '0';
            if (name.length == 0) {
                $('#txt_name').focus();
                alertmsg.msg("Message", "Please enter lead type name", "W");
                return false;
            }
            masters = {
                "lead_type": {
                    "u_id": id,
                    "lead_type_name": name,
                    "global_status": globalStatus
                },
                "action": action,
                "action_on": action_on,
                "request_for": request_for,
            };
        }
        else if (action == 'lead-type-setting') {
            var id = $(event).attr('data-id');
            var leadType = $('#ddl_lead_types').val();
            if (leadType == "0") {
                $('#ddl_lead_types').focus();
                alertmsg.msg("Message", "Please choose a lead type", "W");
                return false;
            }
            else if ($('#fields_list_placeholder').html() == '' && id == '') {
                alertmsg.msg("Message", "Please add a section", "W");
                return false;
            }
            var arrSection = [];
            var index = 0, sIndex = 1;
            $(".tbodySection").each(function () {
                var cntr = $(this).attr("data-counter");
                var fIndex = 1;
                var section = $('#txt_section' + cntr).val().trim();
                var sizeClass = $('#txt_sizeClass' + cntr).val().trim();
                var cssClass = $('#txt_sectionCssClass' + cntr).val().trim();
                var status = $('#chk_sectionStatus' + cntr).prop('checked') ? 'true' : 'false';
                if (section == '') {
                    flag = 1;
                    $('#divSectionForm-' + cntr).show();
                    $('#txt_section' + cntr).focus();
                    alertmsg.msg("Message", "Please enter a section", "W");
                }
                var item = {};
                item["section"] = section;
                item["cssClass"] = cssClass;
                item["sizeClass"] = sizeClass;
                item["status"] = status;
                item["sort_order"] = sIndex;
                arrSection.push(item);
                var arrfields = [];
                $('#tbl_section-' + cntr + ' .tbodyFields').each(function () {
                    var counter = $(this).attr("data-counter");
                    var fieldLabel = $('#tbl_section-' + cntr + ' #txt_label' + counter + '').val().trim();
                    var fieldId = $('#tbl_section-' + cntr + ' #txt_id' + counter + '').val().trim();
                    var fieldType = $('#tbl_section-' + cntr + ' #ddl_type' + counter + '').val().trim();
                    var status = $('#chk_fieldStatus' + cntr + '-' + counter + '').prop('checked') ? 'true' : 'false';
                    var cssClass = $('#tbl_section-' + cntr + ' #txt_cssClass' + counter + '').val().trim();
                    var isMandatory = $('#chk_isMantrue' + cntr + '-' + counter + '').prop('checked') ? 'true' : 'false';
                    var validation = $('#tbl_section-' + cntr + ' #ddl_validation' + counter + '').val().trim();
                    if (fieldLabel == '') {
                        flag = 1;
                        $('#divSectionForm-' + cntr).show();
                        $('#divFieldForm-' + counter).show();
                        $('#txt_label' + counter).focus();
                        alertmsg.msg("Message", "Please enter a field label", "W");
                    }
                    else if (fieldId == '') {
                        flag = 1;
                        $('#divSectionForm-' + cntr).show();
                        $('#divFieldForm-' + counter).show();
                        $('#txt_id' + counter).focus();
                        alertmsg.msg("Message", "Please enter a field id", "W");
                    }
                    else if (fieldType == '') {
                        flag = 1;
                        $('#divSectionForm-' + cntr).show();
                        $('#divFieldForm-' + counter).show();
                        $('#ddl_type' + counter).focus();
                        alertmsg.msg("Message", "Please select a field type", "W");
                        return false;
                    }
                    var obj = {};
                    obj["field_id"] = fieldId;
                    obj["field_label"] = fieldLabel;
                    obj["type"] = fieldType;
                    obj["sort_order"] = fIndex;
                    obj["status"] = status;
                    obj["cssClass"] = cssClass;
                    obj["mandatory"] = isMandatory;
                    obj["validation"] = validation;
                    arrfields.push(obj);
                    fIndex++;
                });
                arrSection[index].fields = arrfields;
                index++;
                sIndex++;
            });
            if (flag == 0) {
                masters = {
                    "lead_type_setting": {
                        "id": id,
                        "lead_type_id": leadType,
                        "lead_section": arrSection
                    },
                    "action": action,
                    "action_on": action_on,
                    "request_for": request_for
                };
            }
        }
        if (flag == 0)
            return JSON.stringify(masters);
    },
}

ns_validation_mgs = {
    isValidEmail: "Valid email",
    isInvalidEmail: "Invalid email",
    isValidURL: "Valid url",
    isInvalidURL: "Invalid url"
}

//**************************** Ajax Functions *************************
var ns_ajax = {
    get: function (ws_method, param, on_success) {
        Token = ns_util.checkCookie(ns_util.loginCookieName);
        if (uri === '') {
            alert('Source uri missing');
            return false;
        }
        if (ws_method === '') {
            alert('Missing web method');
            return false;
        }
        if (param === '') {
            $.ajax({
                url: uri + ws_method,
                dataType: "json",
                type: "GET",
                headers: { 'TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source, 'Content-Type': 'application/json' },
                contentType: "application/json; charset=utf-8",
                success: on_success,
                error: function (error) {
                    if (error.responseJSON == undefined)
                        alert(error.responseText.match(/<title>(.*?)<\/title>/)[1]);
                    else
                        alert(error.statusText + "(" + error.status + ")" + "\n" + error.responseJSON.Message);
                },
            });
        }
        else {
            $.ajax({
                url: ws_method,
                data: param,// this.stringifyParam(param),
                dataType: "json",
                headers: { 'TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source, 'Content-Type': 'application/json' },
                type: "GET",
                beforeSend: function () {
                    $(".loader").show();
                    //ns_util.showPleaseWait();
                },
                complete: function () {
                    $(".loader").hide();
                    //ns_util.hidePleaseWait();
                },
                contentType: "application/json; charset=utf-8",
                success: on_success,
                error: function (error) {
                    $(".loader").hide();
                    // ns_util.hidePleaseWait();
                    //ShowAlertMessage("Message")
                },
            });
        }
    },
    post: function (ws_method, param, on_success) {
        Token = ns_util.getCookie(ns_util.loginCookieName);
        // console.log(getCookie('signin_token'))
        if (uri == '') {
            alert('Source uri missing');
            return false;
        }
        if (ws_method == '') {
            alert('Missing web method');
            return false;
        }
        if (param == '') {
            $.ajax({
                url: ws_method,
                dataType: "json",
                type: "POST",
                headers: { 'TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source, 'Content-Type': 'application/json' },
                contentType: "application/json; charset=utf-8",
                success: on_success,
                error: function (error) {
                    if (error.responseJSON == undefined)
                        alert(error.responseText.match(/<title>(.*?)<\/title>/)[1]);
                    else
                        alert(error.statusText + "(" + error.status + ")" + "\n" + error.responseJSON.Message);
                },
            });
        }
        else {
            $.ajax({
                url: ws_method,
                data: this.stringifyParam(param),
                headers: { 'TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source, 'Content-Type': 'application/json' },
                dataType: "json",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                beforeSend: function () {
                    $(".loader").show();
                    //ns_util.showPleaseWait();
                },
                complete: function () {
                    $(".loader").hide();
                    //ns_util.hidePleaseWait();
                },
                success: on_success,
                error: function (error) {
                    if (error.responseJSON == undefined)
                        alert(error.responseText.match(/<title>(.*?)<\/title>/)[1]);
                    else
                        alert(error.statusText + "(" + error.status + ")" + "\n" + error.responseJSON.Message);
                },
            });
        }
    },
    upload: function (ws_method, data, on_success) {
        Token = ns_util.checkCookie(ns_util.loginCookieName);
        if (uri == '') {
            alert('Missing upload file api');
            return false;
        }
        if (data == '') {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: uri + ws_method,
                contentType: false,
                processData: false,
                dataType: "json",
                headers: { 'TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source },
                // headers: { 'X-CheckToken': RequestToken, 'Source': RequestSource },
                beforeSend: function () {
                    $(".loader").show();
                    //ns_util.showPleaseWait();
                },
                complete: function () {
                    $(".loader").hide();
                    //ns_util.hidePleaseWait();
                },
                success: on_success,
                error: function (error) {
                    if (error.responseJSON == undefined)
                        alert(error.responseText);//.match(/<title>(.*?)<\/title>/)[1]);
                    else
                        alert(error.statusText + "(" + error.status + ")" + "\n" + error.responseJSON.Message);
                },
            });
        }
        else {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: ws_method,
                data: data,// paramData,
                contentType: false,
                processData: false,
                dataType: "json",
                headers: { 'TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source },
                // headers: { 'X-CheckToken': RequestToken, 'Source': RequestSource },
                // beforeSend: beforeSend,
                success: on_success,
                error: function (error) {
                    if (error.responseJSON == undefined)
                        alert(error.responseText);// alert(error.responseText.match(/<title>(.*?)<\/title>/)[1]);
                    else
                        alert(error.statusText + "(" + error.status + ")" + "\n" + error.responseJSON.Message);
                },
            });
        }
    },
    stringifyParam: function (param) { return typeof (param) === 'object' ? '{obj :' + JSON.stringify(param) + ' }' : param; }
};