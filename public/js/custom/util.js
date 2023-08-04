var uri ="https://staffport-apis.azurewebsites.net/"; //"http://localhost:55220/";// 
var leaveApi = 'https://leaves-api.azurewebsites.net/'//'http://localhost:64978/';//
var Token,RequestChecksum,Source;
getToken(); 

var uri2 = uri;
//Api Fuction 
var urls2 = {
    autocompleteApi: uri2 + 'api/auto'
};

//Api Fuction  
var urls = {
    addressFinderApi: 'api/address',
    masterApi: 'api/Masters/',
    autocompleteApi:'api/auto',
    jobsApi: 'api/jobApi/',  
    jobPost: 'api/jobApi/',
    uploadFileApi:'api/upload/',
    getFileApi: 'api/upload/',
    complianceApi: 'api/complianceApi/',
    candidateApi: 'api/candidateApi/',
    employeesApi: 'api/candidateApi/',
    calendarApi: 'api/calendar/',
    documents: 'api/Documents/',
    employees: 'api/employee/',
    reports: 'api/ReportsApi/',
    payrollApi: 'api/Payroll/',
    payrollDownload: 'api/v1/Payroll/download',
    usersApi: 'api/Users/',
    QrCodeApi: 'api/v1/authenticator/qrcode',
    GoogleAuthVerifyApi: 'api/v1/authenticator/verify',
    OtpRequestApi: 'api/v1/otp/request',
    companyApi: 'api/company/',
    UserModuleApi: 'api/UserModule/',
    UserWizardApi: 'api/UserWizard/',
    MessageCenterApi: 'api/MessageCenter/',    
    
    employerApi: 'api/employers/',
    rotaApi: 'api/rota/',
    plannershiftsApi: 'api/v1/rota/plannershifts/',
    

    rotaSettingsUpdate: 'api/v1/rota/settings/update',
    rotaSettingsGet: 'api/v1/rota/settings/get',
    employeesRota: 'api/v1/employee/rota',
    organisationsApi: 'api/organisations/',
    tasksApi: 'api/tasks/',
    accountsApi: 'api/accountsApi/',
    feedbackApi: 'api/feedbackApi/',
    messageApi: 'api/messages/',
    subscription: 'api/subscription/',
    bookedjobs: 'api/v1/jobs/myjobs',
    jobsdetails: 'api/v1/jobs/details',
    conversation: 'api/v1/conversation/',
    feedback_v2: 'api/v1/feedback/',
    activitylog: 'api/v1/activity/logs/',
    makepayment: 'api/v1/subscription/makepayment/',

    CompleteRedirectFlow: 'api/v1/subscription/CompleteRedirectFlow/',    
    
};

var uploadFile = {
    extension: ['gif', 'png', 'jpg', 'jpeg', 'pdf'],
    invalidExtnMsg:'Invalid File Extension!\n Only gif, png, jpeg, jpg, pdf formats are allowed.',
    size: 5182162,//5 MB  
    invalidFileSizeMsg:"Allowed file size exceeded. (Max 5 MB allowed)"
};

//Api Fucntions 
var ns_api = {
    get: function (url, params) {
        return $.getJSON(url + params, function () { }).fail(function (jqXHR, textStatus, errorThrown) { });
    }
};

//Ajax Funtions
var ns_ajax = {
    get: function (ws_method, param, on_success) {
            
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
                url: uri + ws_method,
                dataType: "json",
                type: "GET",
                contentType: "application/json; charset=utf-8",               
                headers: { 'UA-TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source, 'Content-Type': 'application/json' },
                success: on_success,
                error: function (error) {
                    if (error.statusText == 'Unauthorized' && error.responseJSON.Message == 'Session has expired') {
                        clearCookie();
                        //alert('Your session has expired. \nPlease login again.');
                        window.location.href = "/";
                    }
                    else  if (error.responseJSON == undefined)
                        alert(error.responseText);//alert(error.responseText.match(/<title>(.*?)<\/title>/)[1]);
                    else
                        alert(error.statusText + "(" + error.status + ")" + "\n" + error.responseJSON.Message);
                },
            });
        }
        else {         
            $.ajax({
                //crossOrigin: true,
                contentType: "application/json; charset=utf-8",
                headers: { 'UA-TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source, 'Content-Type': 'application/json; charset=utf-8' },
                url: uri+ws_method,
                data:param,// this.stringifyParam(param),
                dataType: "json",
                type: "GET",               
                // beforeSend: function () {
                //     blockUI('JobsTable');
                // },
                // complete: function () {
                //     unblockUI('JobsTable');
                // },
                success: on_success,
                error: function (error) {
                    if (error.statusText == 'Unauthorized' && error.responseJSON.Message == 'Session has expired') {
                        clearCookie();
                        //alert('Your session has expired. \nPlease login again.');
                        window.location.href = "/";
                        //clearCookie();
                        //getToken();
                    }                  
                    else if (error.responseJSON == undefined)
                        alert(error.responseText);// alert(error.responseText.match(/<title>(.*?)<\/title>/)[1]);
                    else
                        alert(error.statusText + "(" + error.status + ")" + "\n" + error.responseJSON.Message);
                },
            });
        }
    },
    post: function (ws_method, param, on_success) {        
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
                contentType: "application/json; charset=utf-8",
                headers: { 'UA-TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source, 'Content-Type': 'application/json' },
                url: uri + ws_method,
                dataType: "json",
                type: "POST",               
                success: on_success,
                error: function (error) {
                    if (error.responseJSON == undefined)
                        alert(error.responseJSON);//  alert(error.responseText.match(/<title>(.*?)<\/title>/)[1]);
                    else
                        alert(error.statusText + "(" + error.status + ")" + "\n" + error.responseJSON.Message);
                },
            });
        }
        else {           
            $.ajax({
                url: uri + ws_method,
                data: this.stringifyParam(param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                headers: { 'UA-TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source, 'Content-Type': 'application/json' },
                success: on_success,
                error: function (error) {
                    if (error.statusText == 'Unauthorized' && error.responseJSON.Message == 'Session has expired') {
                        clearCookie();
                        //alert('Your session has expired. \nPlease login again.');
                        window.location.href = "/";
                    }
                    else if (error.responseJSON == undefined)                     
                        alert(error.responseJSON);
                    else
                        alert(error.statusText + "(" + error.status + ")" + "\n" + error.responseJSON.Message);
                },
            });
        }
    },
    upload: function (ws_method, data, on_success) {
        if (ws_method == '') {
            alert('Missing upload file api');
            return false;
        }
        if (data == '') {
            $.ajax({
                url: ws_method,
                dataType: "json",
                type: "POST",
                processData: false,
                contentType: false,
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
                url: uri + ws_method,
                data: data,
                dataType: "json",
                type: "POST",
                processData: false,
                contentType: false,
                success: on_success,
                error: function (error) {
                    if (error.responseJSON == undefined)
                        alert(error.responseText);//.match(/<title>(.*?)<\/title>/)[1]);
                    else
                        alert(error.statusText + "(" + error.status + ")" + "\n" + error.responseJSON.Message);
                },
            });
        }
    },
    upload2: function (ws_method, data, on_success) {
        if (ws_method == '') {
            alert('Missing upload file api');
            return false;
        }
        if (data == '') {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: ws_method,// Uris.CndUri + param,//"updateDoctorBankDetails",             
                contentType: false,
                processData: false,
                dataType: "text",
                headers: { 'UA-TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source },
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
                url: uri + ws_method,
                data: data,// paramData,
                contentType: false,
                processData: false,
                dataType: "text",
                headers: { 'UA-TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source },
                success: on_success,
                error: function (error) {
                    if (error.responseJSON == undefined)
                        alert(error.responseText);//.match(/<title>(.*?)<\/title>/)[1]);
                    else
                        alert(error.statusText + "(" + error.status + ")" + "\n" + error.responseJSON.Message);
                },
            });
        }
    },
    //With beforeSend & complete
    get_pw: function (ws_method, param, beforeSend, on_complete, on_success) {
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
                url: uri + ws_method,
                dataType: "json",
                type: "GET",
                contentType: "application/json; charset=utf-8",
                //headers: { 'Authorization': 'Basic xxxxxxxxxxxxx', 'M-UA-TOKEN': '20qwertyuiop19', 'RequestChecksum': 'ADMxxxxxx1', 'Content-Type': 'application/json' },
                headers: { 'UA-TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source, 'Content-Type': 'application/json' },
                beforeSend: beforeSend,
                complete: on_complete,
                success: on_success,
                error: function (error) {
                    if (error.statusText == 'Unauthorized' && error.responseJSON.Message == 'Session has expired') {
                        clearCookie();
                        getToken();
                    }
                    else  if (error.responseJSON == undefined)
                        alert(error.responseText.match(/<title>(.*?)<\/title>/)[1]);
                    else
                        alert(error.statusText + "(" + error.status + ")" + "\n" + error.responseJSON.Message);
                },
            });
        }
        else {
            $.ajax({
                url: uri + ws_method,
                data: param,// this.stringifyParam(param),
                dataType: "json",
                type: "GET",
                contentType: "application/json; charset=utf-8",
                headers: { 'UA-TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source, 'Content-Type': 'application/json' },

                beforeSend: beforeSend,
                complete: on_complete,
                success: on_success,
                error: function (error) {
                    if (error.statusText == 'Unauthorized' && error.responseJSON.Message == 'Session has expired') {
                        clearCookie();
                        getToken();
                    }
                    else if (error.responseJSON == undefined)
                        alert(error.responseText.match(/<title>(.*?)<\/title>/)[1]);
                    else
                        alert(error.statusText + "(" + error.status + ")" + "\n" + error.responseJSON.Message);
                },
            });
        }
    },
    post_pw: function (ws_method, param, beforeSend, on_complete, on_success) {
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
                url: uri + ws_method,
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                headers: { 'UA-TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source, 'Content-Type': 'application/json' },
                beforeSend: beforeSend,
                complete: on_complete,
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
                url: uri + ws_method,
                data: this.stringifyParam(param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                headers: { 'UA-TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source, 'Content-Type': 'application/json' },
                beforeSend: beforeSend,
                complete: on_complete,
                success: on_success,
                error: function (error) {
                    if (error.statusText == 'Unauthorized' && error.responseJSON.Message == 'Session has expired') {
                        clearCookie();
                        //alert('Your session has expired. \nPlease login again.');
                        window.location.href = "/";
                    }
                    else if (error.responseJSON == undefined)
                        alert(error.responseText.match(/<title>(.*?)<\/title>/)[1]);
                    else
                        alert(error.statusText + "(" + error.status + ")" + "\n" + error.responseJSON.Message);
                },
            });
        }
    },
    upload_pw: function (ws_method, data, beforeSend, on_complete, on_success) {
        if (ws_method == '') {
            alert('Missing upload file api');
            return false;
        }
        if (data == '') {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: ws_method,// Uris.CndUri + param,//"updateDoctorBankDetails",             
                contentType: false,
                processData: false,
                dataType: "text",
                headers: { 'UA-TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source },
                beforeSend: beforeSend,
                complete: on_complete,
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
                url: uri + ws_method,
                data: data,// paramData,
                contentType: false,
                processData: false,
                dataType: "text",
                headers: { 'UA-TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source },
                beforeSend: beforeSend,
                complete: on_complete,
                success: on_success,
                error: function (error) {
                    if (error.responseJSON == undefined)
                        alert(error.responseText);//.match(/<title>(.*?)<\/title>/)[1]);
                    else
                        alert(error.statusText + "(" + error.status + ")" + "\n" + error.responseJSON.Message);
                },
            });
        }
    },

    stringifyParam: function (param) { return typeof (param) == 'object' ? '{obj :' + JSON.stringify(param) + ' }' : param; },   
}

//Cookie
//function createCookie(t, o, e) { var a; if (e) { var n = new Date; n.setTime(n.getTime() + 24 * e * 60 * 60 * 1e3), a = "; expires=" + n.toGMTString() } else a = ""; void 0 !== window.localStorage ? window.localStorage.setItem(encodeURIComponent(t), encodeURIComponent(t) + "=" + encodeURIComponent(o) + a + "; path=/") : document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(o) + a + "; path=/" } function readCookie(t) { var o = ""; if (void 0 === window.localStorage) { o = encodeURIComponent(t) + "="; for (e = document.cookie.split(";"), a = 0; a < e.length; a++) { for (n = e[a]; " " === n.charAt(0) ;) n = n.substring(1, n.length); if (0 === n.indexOf(o)) return decodeURIComponent(n.substring(o.length, n.length)) } return null } if (o = encodeURIComponent(t) + "=", nameEQ1 = window.localStorage.getItem(decodeURIComponent(t)), null === nameEQ1) return "N"; for (var e = nameEQ1.split(";"), a = 0; a < e.length; a++) { for (var n = e[a]; " " === n.charAt(0) ;) n = n.substring(1, n.length); if (0 === n.indexOf(o)) return decodeURIComponent(n.substring(o.length, n.length)) } } function eraseCookie(t) { void 0 !== window.localStorage ? window.localStorage.setItem(t, "") : createCookie(t, "", -1) } jQuery(document).ready(function () { var t = readCookie("lbar"), o = readCookie("rbar"); "o" == t ? ($(".ls-toggle-btn").attr("data-status", "c"), $("body").removeClass("ls-toggle-menu")) : "c" == t && ($(".ls-toggle-btn").attr("data-status", "o"), $("body").addClass("ls-toggle-menu")), "o" == o ? ($(".right_icon_toggle_btn").attr("data-status", "c"), $("body").removeClass("right_icon_toggle")) : "c" == o && ($(".right_icon_toggle_btn").attr("data-status", "o"), $("body").addClass("right_icon_toggle")) }), $(".right_icon_toggle_btn").on("click", function () { "o" == $(this).attr("data-status") ? ($(this).attr("data-status", "c"), $("body").removeClass("right_icon_toggle"), createCookie("rbar", "c", 1)) : (createCookie("rbar", "o", 1), $(this).attr("data-status", "o"), $("body").addClass("right_icon_toggle")) }), $(".ls-toggle-btn").on("click", function () { "o" == $(this).attr("data-status") ? ($(this).attr("data-status", "c"), $("body").removeClass("ls-toggle-menu"), createCookie("lbar", "c", 1)) : (createCookie("lbar", "o", 1), $(this).attr("data-status", "o"), $("body").addClass("ls-toggle-menu")) });


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




function getToken(){
    Token = readCookie('token');  
    if (Token == null || Token == '') {
        clearCookie();
        alert('Your session has expired. \nPlease login again.');
        window.location.href = "/";
    }
    else {
        RequestChecksum = readCookie('checksum');
        Source = 'ORG';
        // $('#spanprofile-name, .spanprofile-name').html(readCookie('pname'));
        // $('.EmployeeAvatar').html(readCookie('pname').charAt(0));
        // $('.EmployeeAvatar').attr('title', readCookie('pname'));
        // $('#spanprofile-email, .spanprofile-email').html(readCookie('pemail'));
        // $('#spanEmpname').html(readCookie('pempname'));
        // $('#spanlogdatetime').html(readCookie('logdatetime'));       
    }
   
}

function clearCookie() {
    eraseCookie('tokenExpiry');
    eraseCookie('token');
    eraseCookie('checksum');
    // eraseCookie('ptype');
    // eraseCookie('pname');
    // eraseCookie('pemail');
    // eraseCookie('pempname');
    // eraseCookie('logdatetime');
    //Remove localStorage
    // localStorage.removeItem('usernav');
    // localStorage.removeItem('totalunreadmsg');
    // localStorage.removeItem('totalunreadLogs');
    
    window.location.href = "/";
}
//**************************Uility Fucntion**************************
function GetShortName(strName) {
    var owner = '';
    var strArray = strName.split(' ');
    if (strArray.length > 1)
        owner = (strArray[0].charAt(0).toUpperCase()) + '.' + (strArray[1].charAt(0).toUpperCase())
    else
        owner = (strName);
    return owner;
}
function ModalHide(ModalId) {
    $(ModalId).modal('hide');
    $(".modal-backdrop").css('display', 'none');
}
function IsvalidEmails(value) {
    var result = value.split(","); 
    for (var i = 0; i < result.length; i++)
        if (!IsEmail(removeSpaces(result[i])))
            return false;
    return true;
}

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email))
        return false;
    else
        return true;
};
function IsMobile(mobile) {
    var regex = /^\d{11}$/;
    if (!regex.test(mobile))
        return false;
    else
        return true;
};
function IsURL(url) {
    var regex = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
    if (!regex.test(url))
        return false;
    else
        return true;
};
function IsImage(image) {
    var regex = /([a-zA-Z0-9\s_\\.\-:])+(.jpg|.png|.tiff|.gif|.jpeg|.bat|.bpg)$/;
    if (!regex.test(image))
        return false;
    else
        return true;
}
function AllowDigits(input) {
    var regex = /[^0-9]/g;
    if (regex.test(input.value)) {
        ShowAlertMessage("Message", "This field can only contain numbers. Characters and special Characters are not allowed !", 'A');
        input.value = input.value.replace(regex, '');
    }
};
function findAndReplace(string, target, replacement) {   
    var i = 0, length = string.length;
    for (i; i < length; i++) {
        string = string.replace(target, replacement);
    }   
    return string;
}






function ClearModalData() {
    $('.Modal').find("input[type=text], textarea, select").val('').end()
        .find("input[type=checkbox],[type=radio]").prop("checked", "").end();
};
function param(obj) {
    var obj = '{obj :' + JSON.stringify(obj) + ' }';
    return obj;
};
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function copy_data(containerid) {
    var range = document.createRange();
    range.selectNode(containerid);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("copied");
}


function Export_JSON_to_CSV(JSONString, ReportName, isShowHeader) {
    var arrJsonData = typeof JSONString != 'object' ? JSON.parse(JSONString) : JSONString;
    var CSV = '';
    CSV += ReportName + '\r\n\n';
    if (isShowHeader) {
        var row = "";
        for (var index in arrJsonData[0]) {
            row += index + ',';
        }
        row = row.slice(0, -1);
        CSV += row + '\r\n';
    }
    for (var i = 0; i < arrJsonData.length; i++) {
        var row = "";
        for (var index in arrJsonData[i]) {
            row += '"' + arrJsonData[i][index] + '",';
        }
        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
    }
    if (CSV == '') {
        alert("Invalid JsonData");
        return;
    }
    var fileName = "CSV_";
    fileName += ReportName.replace(/ /g, "_");
    var uri = 'Data:text/csv;charset=utf-8,' + escape(CSV);
    var link = document.createElement("a");
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function Convert_JSON_to_CSV(JSONString, ReportName, isShowHeader) {
    var arrJsonData = typeof JSONString != 'object' ? JSON.parse(JSONString) : JSONString;
    var CSV = '';
    CSV += ReportName + '\r\n\n';
    if (isShowHeader) {
        var row = "";
        for (var index in arrJsonData[0]) {
            row += index + ',';
        }
        row = row.slice(0, -1);
        CSV += row + '\r\n';
    }
    for (var i = 0; i < arrJsonData.length; i++) {
        var row = "";
        for (var index in arrJsonData[i]) {
            row += '"' + arrJsonData[i][index] + '",';
        }
        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
    }
    if (CSV == '') {
        alert("Invalid JsonData");
        return;
    }
    return CSV;
}
function CopyToClipboard(containerid) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("copy");
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
        document.execCommand("copy");
    }
}
function getAttribute(evt, Attribute) {   
    return evt.target.getAttribute(Attribute); 
}
function GetShortName(strName)
{
    var owner = '';
    var strArray = strName.split(' ');
    if (strArray.length > 1)
        owner = (strArray[0].charAt(0).toUpperCase()) + '.' + (strArray[1].charAt(0).toUpperCase())
    else
        owner = (strName);
    return owner;
}

function removeSpaces(string) {
    return string.split(' ').join('');
}


function removeHtml(string) {
    var string= string.replace(/<script[^>]*?>.*?<\/script>/gi, '').
        replace(/<[\/\!]*?[^<>]*?>/gi, '').
        replace(/<style[^>]*?>.*?<\/style>/gi, '').
        replace(/<![\s\S]*?--[ \t\n\r]*>/gi, '').
        replace(/&nbsp;/g, '');
    return string;
}

function capitalize(str) {
    strVal = '';
    str = str.split('_');
    for (var chr = 0; chr < str.length; chr++) {
        strVal += str[chr].substring(0, 1).toUpperCase() + str[chr].substring(1, str[chr].length) + ''
    }
    return strVal
}

function isDecimal(evt, element) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (
        (charCode != 46 || $(element).val().indexOf('.') != -1) &&      // “.” CHECK DOT, AND ONLY ONE.
        (charCode < 48 || charCode > 57) &&
        (charCode != 8))//Backspace
        return false;
    return true;
}
function isDecimalTwoPlace(event, element) {
 
        if ((event.which != 46 || $(element).val().indexOf('.') != -1) &&
            ((event.which < 48 || event.which > 57) &&
                (event.which != 0 && event.which != 8))) {
            event.preventDefault();
        }

        var text = $(this).val();
        if ((event.which == 46) && (text.indexOf('.') == -1)) {
            setTimeout(function () {
                if ($(element).val().substring($(element).val().indexOf('.')).length > 3) {
                    $(element).val($(element).val().substring(0, $(element).val().indexOf('.') + 3));
                }
            }, 1);
        }

        if ((text.indexOf('.') != -1) &&
            (text.substring(text.indexOf('.')).length > 2) &&
            (event.which != 0 && event.which != 8) &&
            ($(this)[0].selectionStart >= text.length - 2)) {
            event.preventDefault();
        }
}



function FormateCode(str) {
    strVal = '';
    strVal = str.match(/.{1,4}/g);
    strVal=strVal.join('    '); 
    return strVal
    
};

function IsNumber(evt, element) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (
        (charCode != 46 || $(element).val().indexOf('') != -1) && 
        (charCode < 48 || charCode > 57) &&
        (charCode != 8))//Backspace
        return false;

    return true;
};

function ConvertDateFormate(date) {
    if (date !== '') {
    var d = new Date(date.split("/").reverse().join("-"));
    var dd = d.getDate() < 10 ? d.getDate() : d.getDate();
    var mm = d.getMonth() < 10 ? d.getMonth() + 1 : d.getMonth() + 1;
    var yy = d.getFullYear();
    var newdate = mm + "/" + dd + "/" + yy;
    return newdate;
}
    else
return "";
};
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function GetCurrentTime() {
    var now = new Date(), hh = now.getHours(), min = now.getMinutes(), ampm = (hh >= 12) ? 'PM' : 'AM', time = '';
    hh = hh % 12;
    hh = hh ? hh : 12;
    hh = hh < 10 ? '0' + hh : hh;
    min = min < 10 ? '0' + min : min;
    time = hh + " : " + min + " " + ampm;
    return time;
}
function GetLongDayName(day) {
    day = day.toUpperCase();
    switch (day) {
        case 'SUN':
            day = "Sunday";
            break;
        case "MON":
            day = "Monday";
            break;
        case "TUE":
            day = "Tuesday";
            break;
        case "WED":
            day = "Wednesday";
            break;
        case "THU":
            day = "Thursday";
            break;
        case "FRI":
            day = "Friday";
            break;
        case "SAT":
            day = "Saturday";
    }
    return day;
}
function replaceSingleQuotes(strVal) { return strVal.replace(/(['"])/g, "\\$1"); };

//**************************End Uility Fucntion****************************
function call_tmpl_binder(json_object, tmpl_file_path, tmpl_id, tmpl_placeholder)
{
    $.get(tmpl_file_path, null, function (temp) {      
        $(temp).appendTo("body");
        $(tmpl_placeholder).html('');
        $(tmpl_id).tmpl(json_object).appendTo(tmpl_placeholder);
    });
}

function call_Sub_tmpl_binder(json_object, tmpl_file_path, tmpl_id, tmpl_placeholder) {
    $.get(tmpl_file_path, null, function (temp) {
        $(temp).appendTo("body");
        //$(tmpl_placeholder).html('');
        $(tmpl_id).tmpl(json_object).appendTo(tmpl_placeholder);
    });
}

function TempCompiler(tmpl_id, tmpl_structure, tmpl_placeholder, json_object) {
    var temp = '<script id="' + tmpl_id + '" type="text/x-jquery-tmpl">' + tmpl_structure + '</script>';
    $(temp).appendTo("body");
    $(tmpl_placeholder).html('');   
    $("#" + tmpl_id).tmpl(json_object).appendTo(tmpl_placeholder);
}

// ::::::: email , phone & Location:::: hide show
$('.EShow').click(function () {
    $('.Etarget').show(100);
    $('.EShow').hide(0);
});

$('.PShow').click(function () {
    $('.Ptarget').show(100);
    $('.PShow').hide(0);
});

$('.locShow').click(function () {
    $('.loctarget').show(100);    
});

$(document).on("click", ".Editor-editor", function () {
    $(this).focus();
});
//--------Process Wait-----
function blockUI(classname) {
    jQuery('.' + classname).block({
        message: '<img src="/images/loader.gif"/>',
        css: {
            border: 'none',
            width: '15%',
            background:'none',
            color: '#fff',
        }
    });
}
function unblockUI(classname) {
    jQuery('.' + classname).unblock();
}

function blockUIbyId(id) {
    jQuery('#' + id).block({
        message: '<img src="images/wait.gif" style="margin-top:-15px" />',
        css: {
            border: 'none',
            height: '0',
            width: '0',
            color: '#fff',
        }
    });
}
function unblockUIbyId(id) {
    jQuery('#' + id).unblock();
}

//datepair
function DatePairFuction() {
    $('.ClsDatepair .time').timepicker({ 'showDuration': true, 'timeFormat': 'H:i', 'step': '15' });
    $('.ClsDatepair .date').datepicker({ 'format': 'dd/mm/yyyy', 'autoclose': true });
    $('.ClsDatepair').datepair();
}

//File Upload Functions to Validate Size and extensions
var uploadFile = {
    extension: ['gif', 'png', 'jpg', 'jpeg', 'pdf'],
    invalidExtnMsg: 'Invalid File Extension!\n Only gif, png, jpeg, jpg, pdf formats are allowed.',
    size: 5182162,//5 MB  
    invalidFileSizeMsg: "Allowed file size exceeded. (Max 5 MB allowed)"
};
function ValidateFileExtn(fileId) {
    var ext = jQuery(fileId).val().split('.').pop().toLowerCase();
    if ($.inArray(ext, uploadFile.extension) == -1) {
        alert(uploadFile.invalidExtnMsg);
        jQuery(fileId).focus();
        return false;
    }
}
function ValidateFileSize(fileId) {
    if (jQuery(fileId)[0].files[0].size > uploadFile.size) {
        alert(uploadFile.invalidFileSizeMsg);
        jQuery(fileId).focus();
        return false;
    }
}


//Process Wait
function wait() {
    var str = '<div>' +
             '<div class="w-bg"><span class="content-placeholder m-b-2" style="width:20%; float:left; height:10px; margin-right:2px;"></span><span class="content-placeholder m-b-2" style="width: 40%; float: left; height: 10px"></span><span class="content-placeholder m-b-2" style="width: 100%; height:10px"></span><span class="content-placeholder m-b-2" style="width: 90%; height:10px"></span><span class="content-placeholder" style="width:40%; height:10px"></span></div>' +
             '<div class="w-bg"><span class="content-placeholder m-b-2" style="width:20%; float:left; height:10px; margin-right:2px;"></span><span class="content-placeholder m-b-2" style="width: 40%; float: left; height: 10px"></span><span class="content-placeholder m-b-2" style="width: 100%; height:10px"></span><span class="content-placeholder m-b-2" style="width: 90%; height:10px"></span><span class="content-placeholder" style="width:40%; height:10px"></span></div>' +
             '<div class="w-bg"><span class="content-placeholder m-b-2" style="width:20%; float:left; height:10px; margin-right:2px;"></span><span class="content-placeholder m-b-2" style="width: 40%; float: left; height: 10px"></span><span class="content-placeholder m-b-2" style="width: 100%; height:10px"></span><span class="content-placeholder m-b-2" style="width: 90%; height:10px"></span><span class="content-placeholder" style="width:40%; height:10px"></span></div>' +
             '</div>';
    return str;
}
function empty() {
    var str = '<div class="w-bg"><div class="empty" style="color:#a0a0a0"><center><i class="fa fa-meh-o" style="font-size:14px; color:#04a9fe">&nbsp;SORRY !</i><br/>There is no records</center></div></div>';
    return str;
}
function waitcal() {
    var str = '<div>' +
                     '<div class="w-bg" style="border: 1px solid #ddd; padding: 2px; width: 100%; float: left">' +
                            '<span class="content-placeholder m-b-2" style="width: 9%; float: left; height: 30px;' +
                    'margin-left: 9%; margin-right: 1px"></span><span class="content-placeholder m-b-2"' +
                    'style="width: 9%; float: left; height: 30px; margin-right: 1px"></span><span class="content-placeholder m-b-2"' +
                    'style="width: 9%; float: left; height: 30px; margin-right: 9%"></span>' +
                    '<span class="content-placeholder m-b-2" style="width: 9%; float: left; height: 30px;' +
                    'margin-right: 1px"></span><span class="content-placeholder m-b-2" style="width: 9%;' +
                    'float: left; height: 30px; margin-right: 1px"></span><span class="content-placeholder m-b-2"' +
                    'style="width: 9%; float: left; height: 30px; margin-right: 1px"></span>' +
                    '<span class="content-placeholder m-b-2" style="width: 9%; float: left; height: 30px;' +
                    'margin-right: 1px"></span><span class="content-placeholder m-b-2" style="width: 9%;' +
                    'float: left; height: 30px; margin-right: 1px"></span><span class="content-placeholder m-b-2"' +
                    'style="width: 9%; float: left; height: 30px;"></span>' +
                    '<br />' +
                    '<span class="content-placeholder m-b-2" style="width: 9%; float: left; height: 30px;' +
                    'margin-right: 1px"></span><span class="content-placeholder m-b-2" style="width: 9%;' +
                    'float: left; height: 30px; margin-right: 1px"></span><span class="content-placeholder m-b-2"' +
                    'style="width: 9%; float: left; height: 30px; margin-left: 9%"></span>' +
                    '<span class="content-placeholder m-b-2" style="width: 9%; float: left; height: 30px;' +
                    'margin-right: 9%"></span><span class="content-placeholder m-b-2" style="width: 9%;' +
                    'float: left; height: 30px; margin-right: 1px"></span><span class="content-placeholder m-b-2"' +
                    'style="width: 9%; float: left; height: 30px; margin-right: 1px"></span>' +
                    '<span class="content-placeholder m-b-2" style="width: 9%; float: left; height: 30px;' +
                    'margin-right: 1px"></span><span class="content-placeholder m-b-2" style="width: 9%;' +
                    'float: left; height: 30px; margin-right: 9%"></span><span class="content-placeholder m-b-2"' +
                    'style="width: 9%; float: left; height: 30px;"></span>' +
                    '<br />' +
                    '<span class="content-placeholder m-b-2" style="width: 9%; float: left; height: 30px;' +
                    'margin-right: 1px"></span><span class="content-placeholder m-b-2" style="width: 9%;' +
                    'float: left; height: 30px; margin-right: 1px"></span><span class="content-placeholder m-b-2"' +
                    'style="width: 9%; float: left; height: 30px; margin-right: 1px"></span>' +
                    '<span class="content-placeholder m-b-2" style="width: 9%; float: left; height: 30px;' +
                    'margin-right: 1px"></span><span class="content-placeholder m-b-2" style="width: 9%;' +
                    'float: left; height: 30px; margin-right: 9%"></span><span class="content-placeholder m-b-2"' +
                    'style="width: 9%; float: left; height: 30px; margin-right: 1px"></span>' +
                    '<span class="content-placeholder m-b-2" style="width: 9%; float: left; height: 30px;' +
                    'margin-right: 1px"></span><span class="content-placeholder m-b-2" style="width: 9%;' +
                    'float: left; height: 30px; margin-right: 1px"></span><span class="content-placeholder m-b-2"' +
                    'style="width: 9%; float: left; height: 30px;"></span>' +
                    '<br />' +
                    '<span class="content-placeholder m-b-2" style="width: 9%; float: left; height: 30px;' +
                    'margin-right: 1px"></span><span class="content-placeholder m-b-2" style="width: 9%;' +
                    'float: left; height: 30px; margin-right: 1px"></span><span class="content-placeholder m-b-2"' +
                    'style="width: 9%; float: left; height: 30px; margin-right: 1px"></span>' +
                    '<span class="content-placeholder m-b-2" style="width: 9%; float: left; height: 30px;' +
                    'margin-right: 1px"></span><span class="content-placeholder m-b-2" style="width: 9%;' +
                    'float: left; height: 30px; margin-right: 1px"></span><span class="content-placeholder m-b-2"' +
                    'style="width: 9%; float: left; height: 30px; margin-right: 1px"></span>' +
                    '<span class="content-placeholder m-b-2" style="width: 9%; float: left; height: 30px;' +
                    'margin-left: 9%; margin-right: 1px"></span><span class="content-placeholder m-b-2"' +
                    'style="width: 9%; float: left; height: 30px; margin-right: 1px"></span><span class="content-placeholder m-b-2"' +
                    'style="width: 9%; float: left; height: 30px;"></span>' +
                    '<br />' +
                    '</div>' +
             '</div>';
    return str;
}
function waitCell() {
    var str = '<div>' +
             '<div class="w-bg"><span class="content-placeholder m-b-2" style="width:20%; float:left; height:10px; margin-right:2px;"></span><span class="content-placeholder m-b-2" style="width: 40%; float: left; height: 10px"></span><span class="content-placeholder" style="width:40%; height:10px"></span></div>' +
            '</div>';
    return str;
}



function nodata(link) {
    var str = '<div class="nodata">'+
        '<div class="nodata__content">'+
            '<div class="nodata__icon">'+
            '<img src="images/nodata.png" alt="">'+
              '</div>'+
            '<div class="nodata__message mb-2">No records found.</div>'+
            '<div class="nodata__help mb-2">'+link
          '</div> '+
            '</div> '+
    '</div >';
    return str;
}
function nodata2(msg,link) {
    var str = '<div class="nodata">' +
        '<div class="nodata__content">' +
        '<div class="nodata__icon">' +
        '<img src="/images/nodata.png" alt="">' +
        '</div>' +
        '<div class="nodata__message mb-2">' + msg+'</div>' +
        '<div class="nodata__help mb-2">' + link
    '</div> ' +
        '</div> ' +
        '</div >';
    return str;
}



//End Process Wait


function timeCalculating(start_time_id, end_time_id,) {
    var time1 = $(start_time_id).val();
    var time2 = $(end_time_id).val();
    var time1 = time1.split(':');
    var time2 = time2.split(':');
    var hours1 = parseInt(time1[0], 10),
        hours2 = parseInt(time2[0], 10),
        mins1 = parseInt(time1[1], 10),
        mins2 = parseInt(time2[1], 10);
    var hours = hours2 - hours1, mins = 0;
    if (hours < 0) hours = 24 + hours;
    if (mins2 >= mins1) {
        mins = mins2 - mins1;
    }
    else {
        mins = (mins2 + 60) - mins1;
        hours--;
    }
    if (mins < 9) {
        mins = '0' + mins;
    }
    if (hours < 9) {
        hours = '0' + hours;
    }
   // $("#time_duration").val(hours + ':' + mins);
    return hours + ' hr(s) ' + mins +' min(s)';
}