var logUri = "https://staffport-apis.azurewebsites.net/api/employers/" // "http://localhost:55220/api/employers/";  //
let state = false;
let password = document.getElementById("password");
let passwordStrength = document.getElementById("password-strength");
let lowUpperCase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");

$(document).ready(function () {
    ns_employerAccount.bindddl('#ddl_industry', '#ddl_number_of_employees');
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
    $(document).on('click', ".emp-signup", function (evt) {   
        ns_employerAccount.signup(evt);
    });

    $(document).on('keyup', ".cls-enable", function () {
        var step = $(this).attr('data-step');              
        if (step == '1') {
            if ($('#txt_first_name').val().trim() !== '' && $('#txt_email').val().trim() !== '') {
                $('#btnSignup').removeClass('disabled');
            }
            else
                $('#btnSignup').addClass('disabled');          
        }
        if (step == '2') {
            if ($('#txt_password').val().trim() !== '' && $('#txt_password_confirm').val().trim() !== '') {
                $('#btnPassword').removeClass('disabled');
            }
            else
                $('#btnPassword').addClass('disabled');
        }
        if (step == '3') {
            var org_name=$('#txt_org_name').val().trim();
            var industry_type = $("#ddl_industry").val();
            var number_of_employees = $("#ddl_number_of_employees").val();
            if (org_name !== '' && industry_type !== '' && number_of_employees !== '0') {
                $('#btncreateaccount').removeClass('disabled');
            }
            else
                $('#btncreateaccount').addClass('disabled');
        }
    });
    $(document).on('change', ".cls-enable", function () {
        var org_name = $('#txt_org_name').val().trim();
        var industry_type = $("#ddl_industry").val();
        var number_of_employees = $("#ddl_number_of_employees").val();
        if (org_name !== '' && industry_type !== '' && number_of_employees !== '0') {
            $('#btncreateaccount').removeClass('disabled');
        }
        else
            $('#btncreateaccount').addClass('disabled');
    });
    
});

ns_employerAccount = {  
    signup: function (evt) {
        var id = evt.target.getAttribute('id');
        id = '#' + id;
        if (ns_employerAccount.validate(evt)) {          
            var obj = {};
            obj.action = "signup";
            obj.first_name = $("#txt_first_name").val().trim();
            obj.last_name = $("#txt_last_name").val().trim();          
            obj.email = $("#txt_email").val().trim();
            obj.mobile = "";
            obj.password = $("#txt_password").val().trim();
            obj.confirm_password = $("#txt_password_confirm").val().trim();
            obj.company_name = $("#txt_org_name").val().trim();
            obj.industry = $("#ddl_industry").find(':selected').attr('data-industry');
            obj.category = $("#ddl_industry").val();
            obj.number_of_employees = $("#ddl_number_of_employees").val();
         
            var Param = "[" + JSON.stringify(obj) + "]";
           
            try {
                $.ajax({
                    url: logUri + "signup",
                    data: this.stringifyParam(Param),
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",          
                    beforeSend: function () {
                        $(id).html('Process...');
                        $(id).attr("disabled", true);
                    },
                    complete: function () {
                        $(id).attr("disabled", false);
                        $(id).html('Create your account →');
                    },
                    success: function (data) {
                        data = $.parseJSON(data);                       
                        if (data.Status == 'OK') {
                            //var link = data.Response[0].link;
                            //$('#btnAcActLink').attr("href", link);
                            $('.trd_step').hide();
                            $('.success_step').show();                          
                        }
                        else {                          
                           ShowMessage('Message', data.Error, 'A');
                        }
                    },
                    error: function (result) {                    
                        ShowMessage('Message', result, 'A');
                    }
                });
            }
            catch (err) {
             
                ShowMessage('Message', err.message, "A");
            }
        }
    },  
    stringifyParam: function (param) { return typeof (param) == 'object' ? '{obj :' + JSON.stringify(param) + ' }' : param; },
    validate: function (evt) {
        var flag = false;
        var action = evt.target.getAttribute('data-action');
        var evt_hide = evt.target.getAttribute('data-hide');
        var evt_show = evt.target.getAttribute('data-show');      
        if (action == 'first_step') {
            var first_name = $("#txt_first_name").val();
            var last_name = $("#txt_last_name").val();
            var email = $("#txt_email").val();
            var mobile = "";
            if (first_name == '') {
                $("#txt_first_name").focus();
                ShowAlertMessage("Message", "Enter First Name", "A");
                return false;
            }
            else if (first_name !== '' && first_name.length < 3) {
                $("#txt_first_name").focus();
                ShowAlertMessage("Message", "First name must be at least 3 characters long", "A");
                return false;
            }
            else if (email == '') {
                $("#txt_email").focus();
                ShowAlertMessage("Message", "Enter Email Id", "A");
                return false;
            }
            else if (email !== '' && ns_employerAccount.IsEmail(email) == false) {
                ShowAlertMessage("Message", "Enter Valid Email", "A");
                $("#txt_email").focus();
                return false;
            }
            else {
                if (evt_hide != "") {
                    if ('.fst_step')
                        $(evt_hide).hide();
                }
                if (evt_show != "") {
                    $(evt_show).show();
                }
            }
        }
        if (action == 'second_step') {
            var password = $("#txt_password").val().trim();
            var confirmpass = $("#txt_password_confirm").val().trim();          
            if (password == '') {
                $("#txt_password").focus();
                ShowAlertMessage("Message", "Enter password", "A");
                return false;
            }
            else if (IsValidPassword(password) == false) {
                ShowAlertMessage("Message", "Enter valid password", "A");
                $('#password').focus();
                return false;
            }
            else if (password !== '' && password.length < 8) {
                $("#txt_password").focus();
                ShowAlertMessage("Message", "Password must be at least 8 characters long", "A");
                return false;
            }
            else if (confirmpass == '') {
                $("#txt_password_confirm").focus();
                ShowAlertMessage("Message", "Enter confirmation password", "A");
                return false;
            }
            else if (password!== confirmpass) {
                $("#txt_password_confirm").focus();
                ShowAlertMessage("Message", "The password and confirmation password do not match", "A");                
                return false;
            }
            else {
                if (evt_hide != "") {
                    if ('.fst_step')
                        $(evt_hide).hide();
                }
                if (evt_show != "") {
                    $(evt_show).show();
                }
            }
            
        }
        if (action == 'third_step') {
            var company_name = $("#txt_org_name").val();
            var industry_type = $("#ddl_industry").val();
            var number_of_employees = $("#ddl_number_of_employees").val();

            if (company_name == '') {
                $("#txt_org_name").focus();
                ShowAlertMessage("Message", "Enter Company/Organisation name", "A");
                return false;
            }
            else if (company_name !== '' && company_name.length < 3) {
                $("#txt_org_name").focus();
                ShowAlertMessage("Message", "Company/Organisation name must be at least 3 characters long", "A");
                return false;
            }
            else if (industry_type == null || industry_type=='' ) {
                $("#ddl_industry").focus();
                ShowAlertMessage("Message", "Select industry", "A");
                $('#ddl_industry').trigger('click');
                return false;
            }
            else if (number_of_employees == null || number_of_employees=='0') {
                ShowAlertMessage("Message", "How many have you got employee?", "A");
                $("#ddl_number_of_employees").focus();             
                return false;
            }
            else {
                if (evt_hide != "") {
                    if ('.fst_step')
                        $(evt_hide).hide();
                }
                if (evt_show != "") {
                    $(evt_show).show();
                }
                flag = true;
            }
        }
        return flag;
    },
    
    bindddl: function (ctrl_industry, ctrl_ddl_number_of_employees) {
        $(ctrl_industry).html('<option value="" disabled="disabled" selected="selected" selected>Select an industry</option>');
        $(ctrl_ddl_number_of_employees).html('<option value="0" disabled="disabled" selected="selected">How many have you got?</option>');
        var Param = { id: 0, type: 'signup' };        
        try {
            $.ajax({
                url: logUri,
                data: Param,//this.stringifyParam(Param),
                dataType: "json",
                type: "GET",
                contentType: "application/json; charset=utf-8",               
                success: function (data) {                 
                    if (data.Status == 'OK') {                      
                        //Industry
                       var str = '<option value="" disabled="disabled" selected="selected" selected>Select an industry</option>';
                        $.each(data.Response[0].Industries, function (key, value) {
                            if (value.categories.length>0)
                                str += '<optgroup label="' + value.industry_name + '">';

                            $.each(value.categories, function (key, value2) {
                                str += '<option value=' + value2.cat_id + ' data-industry="' + value.industry_id + '">' + value2.cat_name + '</option>';
                            });
                            str += '</optgroup> ';
                        });
                        $(ctrl_industry).html(str);

                        //No Of Employees
                        var str_emp = '<option value="0" disabled="disabled" selected="selected">How many have you got?</option>';
                        $.each(data.Response[0].no_of_employees, function (key, value) {
                            str_emp += '<option value=' + value.qty + '>' + value.label + '</option>';                        
                        });
                        $(ctrl_ddl_number_of_employees).html(str_emp);
                    }
                    else {
                        ShowMessage('Message', data.Error, 'A');
                    }
                },
                error: function (result) {
                    ShowMessage('Message', result, 'A');
                }
            });
        }
        catch (err) {
            ShowMessage('Message', err.message, "A");
        }      
    },

    IsEmail:function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email))
        return false;
    else
        return true;
    },


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


$(document).ready(function () {
    $(document).on('keyup', "#txt_password", function () {
        let pass = $("#txt_password").val();    
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
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.add('progress-bar-danger');
        passwordStrength.style = 'width: 10%';
    } else if (strength == 3) {
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.style = 'width: 60%';
    } else if (strength == 4) {
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.style = 'width: 100%';
    }
}

function IsValidPassword(password) {
    //var regex = '(?=^.{ 8, }$)(?=.*\d)(?=.* [!@#$%^&*]+) (? ![.\n])(?=.* [A - Z])(?=.* [a - z]).* $';
    var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (!regex.test(password))
        return false;
    else
        return true;
}