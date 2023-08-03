var SearchWizardId, SearchParam = "[{EmpId:'0'}]", JobStatus = "", JobType = 'N-L';
var totalCount = 0, PageNumber = 1, PageSize = 100, LoadMoreCount = 10;
var msg_bond = 'inbox', msg_type = '', archive = 0, deleted = 0;
var pagenumber = 0, pagesize = 10;
var ProfileType = "", parent_id = 0, RequestedPage = "";
var OrgStatus = "", Tabrequest = "", UserStatus = "";
var IsActive = '', deletestatus = 0, j = 1, SingleRowEditcounter = 1, mediapagesize = 3, totalmediacount = 0, k = 0; counterIndex = 0, lastrownum = 0;
var lastsortorderval = '', fieldlabel = '', Wizard_id = '', StoreRoleId = [], Wizard_Role_Setting_Type = 1, AddNewFieldCounter = 0;
var Counter = 0, SerialNo = 1;

var comingSoon = 'This action is Under Process. We will update soon...';

var parametersT, parametersP, serverResponse, tblHeadRow, tabStatus = 'T', rNumber;
var locationOptions, clientName = [], arrPostedJob = [], arrPostedJobPrev = [], arrBookedJob = [], arrtblJobs = [], arrJobType = [], validatedPostedJobsCounter = 0;
var idCounter = 0, editJobDetail;
var actionJobType, actionJobData;

var agency_id = 0, employee_id = 0, job_age = '', location_id = 0, Role_id =0;

//Employer's Candidate
var page_number = 0, page_size = 10;
var emp_location_ids = '', emp_role_id = 0, emp_search = '', absence_id = 0, dynamic_id = 0, contacts_update_id = 0; cnd_profile_block = '', cnd_sub_type = 'All', cnd_profile_absence_start_date = '', cnd_profile_absence_end_date = '', cnd_profile_action_from = '';
var bindLocationPopup = false, account_status = 0;
var arrDocAttachFiles_Data = [], attchFile_IdCounter = 0;
var payrolltype = 'perm';
var editor;



//************Address Finder*********
AddressFinder = {
    Finder: function (postcode, townid, countyid, ddladdress) {
        var adrfinder = "https://apis.medicopartners.com/api/address?id=" + postcode + "";
        $.ajax({
            type: "GET",
            url: adrfinder,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            beforeSend: function (xhr) {
                $(".GetAddress2").html("Finding...");
            },
            success: function (data) {
                if (data != 'NO') {
                    $('.spannotfound2').html("");
                    $('.divselectAddres2').show();

                    var json1 = $.parseJSON(data);
                    AddressFinder.FillAddress(json1, ddladdress);
                    AddressFinder.FillForm(json1["Addresses"][0].split(',')[5], json1["Addresses"][0].split(',')[6], townid, countyid);
                    $(".GetAddress2").html('<i class="zmdi zmdi-search">&nbsp;</i>Find');
                }
                else {
                    AddressFinder.FillAddress('');
                    AddressFinder.FillForm('', '');
                    $('.txtfillEmpLAddress').val('');
                    $('.divselectAddres2').hide();
                    $(".EmpLAddressDiv").hide();
                    $('.EmpLCityDiv').hide();
                    $('.EmpLCountyDiv').hide();
                    $('.spannotfound2').html("Not found ! enter correct postcode.");
                    $(".GetAddress2").html('<i class="zmdi zmdi-search">&nbsp;</i>Find');
                }
            },
            error: function (error) {
                $('.spannotfound2').html("Not found ! enter correct postcode.");
                $(".GetAddress2").html('<i class="zmdi zmdi-search">&nbsp;</i>Find');
            }
        });
    },

    FillForm: function (town, county, townid, countyid) {
        $(townid).val(town);
        $(countyid).val(county);
    },

    FillAddress: function (addr, ddladdress) {
        var list = $(ddladdress);
       
        list.empty();
        list.append(new Option("select address", ""));
        $.each(addr.Addresses, function (index, item) {          
            list.append(new Option(item.split(',')[0] + " " + item.split(',')[1], item.split(',')[0] + " " + item.split(',')[1]));
        });
        list.append(new Option("Not Found ? enter address below", "other"));
    },
}

function FillForm(town, county) {
    $("#txttown").val(town);
    $("#txtcounty").val(county);
}

function FillAddress(addr) {
    var list = $("#ddlLocation");
    list.empty();
    list.append(new Option("select address", ""));
    $.each(addr.Addresses, function (index, item) {
        list.append(new Option(item.split(',')[0] + " " + item.split(',')[1], item.split(',')[0] + " " + item.split(',')[1]));
    });
    list.append(new Option("Not Found ? enter address below", "other"));
}
//**************END****************



$(document).ready(function () {   

    $(document).on('change', '#chk_overtime_allowed', function () {
        if ($(this).is(":checked")) {
            $("#divOvertimeDetails").show();

        } else {
            $("#divOvertimeDetails").hide();
        }
    });

    $(document).on('change', '#chk_salary_pension_eligible', function () {
        var pension_eligible = $(this).is(":checked");
        var salary_opsted_out = $('#chk_salary_opsted_out').is(":checked");
        if (pension_eligible == true && salary_opsted_out == true) {
            $("#divPensionDetails").hide();
        }
        else if (pension_eligible == true && salary_opsted_out == false) {
            $("#divPensionDetails").show();
        }
        else {
            $("#divPensionDetails").hide();

        }
    });

    $(document).on('change', '#chk_salary_opsted_out', function () {
        var pension_eligible = $('#chk_salary_pension_eligible').is(":checked");
        var salary_opsted_out = $(this).is(":checked");
        if (pension_eligible == true && salary_opsted_out==true) {
                $("#divPensionDetails").hide();           
        }
        else if (pension_eligible == true && salary_opsted_out == false) {
            $("#divPensionDetails").show();
        }
        else {
            $("#divPensionDetails").hide();

        }
    });

    $(document).on('change', '#ddlContractType', function () {
        if ($(this).val() == '2')
            $('#divFixedNotifyofexpiry').show('slow');
        else
            $('#divFixedNotifyofexpiry').hide('slow');

    });

    $(document).on('change', '#ddl_notice_period', function () {
        var period= $(this).val();
        if (period == 'No notice period')
            $('#divnotice_period').hide('slow');
        else {
            $('#divnotice_period').show('slow');
            $('#ddl_notify_of_expiry_on').val(period);
            
        }
           
    });

    $(document).on('change', '#chk_check_conducted', function () {
        if ($(this).is(":checked")) {
            $("#div_check_conducted").show('slow');

        } else {
            $("#div_check_conducted").hide('slow');
        }
    });

    $(document).on('change', '#ddl_work_status', function () {
        var workstatus = $(this).val();
        if (workstatus == 'Pre-settled') {
            $('#Pre-settled').show('slow');
            $('#div_work_status').show('slow');
        }
        else if (workstatus == 'Not declared') {
            $('#Pre-settled').hide('slow');
            $('#div_work_status').show('slow');
        }
        else
            $('#div_work_status').hide('slow');
    });

    $(document).on('change', '#ddl_company_director', function () {
        if ($(this).val() == 1) {
            $('#ddl_director_calculation_method').val('');
            $('#txt_director_appointment_date').val('');
            $('#divDirectorCaculationMethod').show('slow');
        }
        else {
            $('#ddl_director_calculation_method').val('');
            $('#txt_director_appointment_date').val('');
            $('#divDirectorCaculationMethod').hide('slow');
        }
    });

    $(document).on('change', '#ddl_StudentLoan', function () {
        if ($(this).val() == '1') {
            $('#ddl_StudentLoanPlanType').val('');
            $('#divStudentLoanPlanType').show('slow');
        }
        else {
            $('#ddl_StudentLoanPlanType').val('');
            $('#divStudentLoanPlanType').hide('slow');
        }
    });

    $(document).on('change', '#ddl_BankAccountType', function () {
        if ($(this).val() == 'b') {
            $('#txtCompanyName').val('');
            $('#txtCompanyRegNo').val('');
            $('#RegCertificate').val('');
            $('#divBusinessAccountDetails').show('slow');
        }
        else {
            $('#txtCompanyName').val('');
            $('#txtCompanyRegNo').val('');
            $('#RegCertificate').val('');

            $('#divBusinessAccountDetails').hide('slow');
        }
    });

    $(document).on('change', '#chk_work_pattern_status', function () {
        if ($(this).is(":checked")) {
            $('#ddlWorkingTimePattern').val('0');
            $("#div_work_pattern_slot").show('slow');

        } else {
            $("#div_work_pattern_slot").hide('slow');

        }
    });

    $(document).on('click', '#btnupdatestatement', function () {
        var statements = $(this).attr('data-statement');
        $('#txtPersonalStatement').val(statements);
    });

    //Overview Absence sCalender

    //Prev
    $(document).on('click', '#btnpreviousweekAbsence', function () {
        var weekdate = $(this).attr('startdate');     
        ns_employee.getOverviewAbsencesCalender('prev', weekdate);
    });

    //Next
    $(document).on('click', '#btnnextweekAbsence', function () {
        var weekdate = $(this).attr('enddate');     
        ns_employee.getOverviewAbsencesCalender('next', weekdate);
    });

    //Refresh
    $(document).on('click', '#btnrefreshAbsencesCalender', function () {
        ns_employee.getOverviewAbsencesCalender('current', '');
    });

    $(document).on('click', '#btnRefreahEmployeeAnualLeaves', function () {
        var cnd_id=$('#btnRefreahEmployeeAnualLeaves').attr('data-id');
        ns_employee.getEmployeeAnualAbsences(cnd_id);

    });

    $(document).on('click', '.btnUpdateLeaves', function () {
        var cnd_id = $(this).attr('data-id');
        ns_employee.UpdateEmoplyeeLeaves(cnd_id,$(this).attr('id'));
    });    

    $(document).on('click', '.clsCurrentStatus', function () {
        var CurrentStatus = $(this).attr('data-val');       
        $("input[name=rdoWorkStatus][value=" + CurrentStatus + "]").prop('checked', true);
    });   

    //View Profile

    $(document).on('click', ".btn-cnd-profiles-view", function () {
        // var request = $(this).attr('data-request');
        $('.profile-id').attr('data-id', $(this).attr('data-val'));     
        ns_employee.get('Personal-Info');
        //$("#viewprofile").modal('show');
       // alert(request);
        // if (request == 'compliance') {
        //     setTimeout(function () {           
        //         $(".tab-compliance").trigger("click");
        //     }, 2000);
        // }

        // if (request == 'terms') {
        //     setTimeout(function () {
        //         $(".tab-terms").trigger("click");
        //     }, 2000);
        // }        
    });
});

ns_employee = {   
    get: function (getInfoFor, act) {       
        var serverResponse;
        profile_Id = $('.profile-id').attr('data-id');
    
        var param = '{"action":"get","section":"' + getInfoFor + '","cnd_id":"' + profile_Id + '","emp_location_ids":"' + emp_location_ids + '" ,"emp_role_id":"' + emp_role_id + '","emp_search":"' + emp_search + '","cnd_sub_type":"' + cnd_sub_type + '","startDate":"' + cnd_profile_absence_start_date + '","endDate":"' + cnd_profile_absence_end_date + '","offset":"' + page_number + '","next":"' + page_size + '"}';
        var params = { json: param }
        
        if (getInfoFor.toUpperCase() === 'PROFILES') {             
            if (act=='more')
                $('.loadmoreEmployees').html('Loading...<img src="/spin.gif" />');
            else
                $('#CndProfiles_Placeholder').html('<tr><td colspan="12" style="text-align:center;">Loading...<img src="/spin.gif" /></td></tr>')
        }
        if (getInfoFor.toUpperCase() == 'PERSONAL-INFO' || getInfoFor.toUpperCase() == 'EMP-DASHBOARD') {
            $('#CndProfileHeader_Placeholder').html('<div class="text-center">Loading...<img src="/spin.gif" /></div>');
            $('#CndProfileInfoHeader_Placeholder, #EmployeeProfileTabs_Placeholder, #TabDashboard_Placeholder').html('');
        }
        
        ns_ajax.get(
            urls.employees,
            params,
            function (data) {              
                if (getInfoFor.toUpperCase() === 'PROFILES')
                    $('.loadmoreEmployees').html('Load more..&nbsp; <i class="fa fa-plus">&nbsp;</i>');
                if (data !== null) {
                    if (data.Status == 'OK') {
                        if (data.Response.length > 0)
                            serverResponse = data.Response;// jQuery.parseJSON(response.split('|')[1]);
                        else
                            objCndData = null;

                        if (getInfoFor.toUpperCase() == 'PERSONAL-INFO' || getInfoFor.toUpperCase() == 'EMP-DASHBOARD') {
                         
                            call_tmpl_binder(data.Response.ProfileHeader, '/js/Template/cnd_profile_tmpl.html', '#CndProfileHeader_Template', '#CndProfileHeader_Placeholder');
                            call_tmpl_binder(data.Response.ProfileHeader, '/js/Template/cnd_profile_tmpl.html', '#CndProfileInfoHeader_Template', '#CndProfileInfoHeader_Placeholder');
                            call_tmpl_binder(data.Response, '/js/Template/cnd_profile_tmpl.html', '#EmployeeProfileTabs_Template', '#EmployeeProfileTabs_Placeholder');
                            call_tmpl_binder(data.Response, '/js/Template/cnd_profile_tmpl.html', '#CndProfileDashboard_Template', '#TabDashboard_Placeholder');

                            ns_employee.tabAccountDeatils(data.Response.Profile);
                            ns_employee.tabProfile(data.Response.Profile);
                            call_tmpl_binder(data.Response.Locations, '/js/Template/cnd_profile_tmpl.html', '#CndLocations_Template', '#Locations_Placeholder');
                            call_tmpl_binder(data.Response.Contacts, '/js/Template/cnd_profile_tmpl.html', '#CndContacts_Template', '#TabContactsPlaceholder');
                            call_tmpl_binder(data.Response, '/js/Template/cnd_profile_tmpl.html', '#AbsenceForm_Template', '#TabAbsenses_Placeholder');
                            call_tmpl_binder(data.Response, '/js/Template/cnd_profile_tmpl.html', '#ddlLeaveCategory_Template', '#ddlLeaveCategory_placeholder');
                            call_tmpl_binder(data.Response, '/js/Template/cnd_profile_tmpl.html', '#CndTerms_Template', '#TabTerms_Placeholder');
                          
                            setTimeout(
                                function () {
                                    $('.clsemptabs').removeClass('in active');
                                    $('#TabDashboard_Placeholder').addClass('in active');
                                    if (data.Response.ProfileHeader[0].cnd_sub_type == 'A') {
                                        $('#divAnualLeaveWizard').hide();
                                        $('#divDashboardJobsWizard').addClass('col-lg-12 col-xl-12');
                                        $('#divDashboardJobsWizard').removeClass('col-lg-6').removeClass(' col-xl-6');
                                    }
                                    else {
                                        $('#divAnualLeaveWizard').show();
                                        $('#divDashboardJobsWizard').addClass('col-lg-6 col-xl-6');
                                        $('#divDashboardJobsWizard').removeClass('col-lg-12').removeClass(' col-xl-12');
                                        //My Annual Leave
                                      
                                        ns_employee.getEmployeeAnualAbsences(profile_Id);

                                        //Dashboard (Training / Compliance)
                                        call_tmpl_binder(data.Response.EmployeeDashboard[2], '/js/Template/cnd_profile_tmpl.html', '#EmployeeDashbaordDocs_Template', '#EmployeeDashbaordDocs_Placeholder');
                                      
                                    }
                                }, 500);

                        }
                        else if (getInfoFor.toUpperCase() === 'COMPLIANCE')
                            call_tmpl_binder(null, '/js/Template/cnd_profile_tmpl.html', '#CndCompliance_Template', '#TabCompliance_Placeholder');


                        else if (getInfoFor.toUpperCase() === 'CONTACTS')
                            ns_employee.tabContacts(serverResponse);
                        else if (getInfoFor.toUpperCase() === 'LOCATIONS')
                            ns_employee.tabLocations(serverResponse);
                        else if (getInfoFor.toUpperCase() === 'WORK-SCHEDULE')
                            ns_employee.tabWorkSchedule(serverResponse);
                        else if (getInfoFor.toUpperCase() === 'PROFILES')
                            ns_employee.allProfiles(serverResponse, act);
                        else if (getInfoFor.toUpperCase() === 'PROFILESEXPORT') {
                            window.location = data.Response.link.split('###')[1];
                        }

                    }
                    else {
                        ns_employee.allProfiles(null, act);
                    }
                }
                else {
                    ns_employee.allProfiles(null, act);
                }
            });
    },

    post: function (params, InfoOf, action, evt) {
        action = action.toUpperCase();
        InfoOf = InfoOf.toUpperCase();
        var id = getAttribute(evt, 'id');
        id = '#' + id;
        var btnText = $(id).html();
       
          
        $(id).html('Wait...<img src="/spin.gif" />');
       
        var serverResponse;
        ns_ajax.post(
            urls.employees + 'post',
            params,
            function (response) {   
                
                    if (InfoOf == 'SIGNUP') {
                        $(id).html('Register Now');
                        if (response == 'UPGRADESUBS') {
                            $('#spanAccountRenewalTitle').html('Upgrade subscription');
                            $('#divAccountRenewalMessage').html('Current subscription has exceeded the maximum limit of employee(s)');
                            $('#btnsubsRenewal').html('Upgrade Subscription');
                            $("#ModalSubcription").modal('show');
                            return false;
                        }
                    }
                else
                    $(id).html(btnText);
              
                if (action == 'CHGPASS') {
                    if (response.split('|')[0] == "OK") {
                        ShowAlertMessage("Message", "Password has been changed successfully.", "C");
                        $('#txtCurrentPassword').val('');
                        $('#txtNewPassword').val('');
                        $('#txtConfirmPassword').val('');
                    }
                    else
                        ShowAlertMessage("Message", response.split('|')[1], "A");
                }
                else {
                    if (response.split('|')[1] != "") {
                        try {                          
                            serverResponse = jQuery.parseJSON(response.split('|')[1]);
                        } catch (e) {                           
                            serverResponse = null;
                            ShowAlertMessage("Message", response.split('|')[1], "A");
                            return false;
                        }
                    }
                    else
                        serverResponse = null;

                    
                   
                    if (action == 'ADD') {
                        var isExists = '';
                        $.each(serverResponse, function (key, value) {
                            isExists = value.exists;
                        });

                      
                        if (InfoOf == 'SIGNUP') {
                          
                            if (isExists.toUpperCase() == 'ADDED') {
                                ShowAlertMessage("Message", "Employee saved successfully", "C");
                                page_number = 0; page_size = 10;
                                ns_employee.get('Profiles', '');

                                $('#add_internal').modal('hide');
                                $(".modal-backdrop").css('display', 'none');
                            }
                            else {                              
                                ShowAlertMessage("Message", isExists, "A");
                            }
                        }
                        else if (InfoOf == 'PERSONAL-INFO') {
                            if (isExists.toUpperCase() === 'ADDED') {
                                ShowAlertMessage("Message", "Employee saved successfully", "C");
                                page_number = 0; page_size = 10;
                                ns_employee.get('Profiles', '');

                                $('#add_internal').modal('hide');
                                $(".modal-backdrop").css('display', 'none');
                            }
                            else {
                                ShowAlertMessage("Message", isExists, "A");
                            }
                        }
                        else if (InfoOf == 'CONTACTS') {
                            if (isExists.toUpperCase() === 'ADDED') {
                                $('.addContactForm').hide(0);
                                $('.contact-new').show(500);
                                ShowAlertMessage("Message", "Contact saved successfully", "C");
                                if (params != null) {
                                    var obj_result = jQuery.parseJSON(params);
                                    jQuery('#CndContacts_Template').tmpl(obj_result).appendTo('#TabContactsPlaceholder');
                                }
                            }
                            //else {
                            //    ShowAlertMessage("Message", isExists, "A");
                            //}
                        }
                        else if (InfoOf == 'ABSENCE') {
                            //if (isExists.toUpperCase() === 'ADDED') {
                            if (cnd_profile_action_from.toLowerCase() == 'absence_modal') {
                                ShowAlertMessage("Message", "Absence added successfully", "C");
                                $('#add_timeoff').modal('hide');
                                $(".modal-backdrop").css('display', 'none');
                                ns_employee.tabAbsence(serverResponse);
                            }
                            //}
                            //else {
                            //    ShowAlertMessage("Message", isExists, "A");
                            //}
                        }
                    }
                    else if (action == 'UPDATE') {
                        if (InfoOf == 'PERSONAL-INFO' || InfoOf == 'CONTACTS') {
                            var isExists = '';
                            $.each(serverResponse, function (key, value) {
                                isExists = value.exists;
                            });
                        }
                        if (InfoOf == 'PERSONAL-INFO') {
                            if (isExists.toUpperCase() === 'UPDATED') {
                                ShowAlertMessage("Message", "Employee:" + InfoOf + " updated successfully", "C");
                                $('.disply_row').hide(0);
                                $('.disply_none_row').show(500);
                                ns_employee.get('Personal-Info');
                            }
                            else
                                ShowAlertMessage("Message", isExists, "A");
                        }
                        else if (InfoOf == 'CONTACTS') {
                            var isExists = '';
                            $.each(serverResponse, function (key, value) {
                                isExists = value.exists;
                            });

                            if (isExists.toUpperCase() === 'UPDATED') {
                                ShowAlertMessage("Message", "Contact Information has been updated successfully", "C");
                                $('#contact-firstname' + dynamic_id).html($("#txtContactsFirstName" + dynamic_id).val());
                                $('#contact-lastname' + dynamic_id).html($("#txtContactsLastName" + dynamic_id).val());
                                $('#contact-mobile' + dynamic_id).html($("#txtContactsMobileNumber" + dynamic_id).val());
                                $('#contact-homephone' + dynamic_id).html($("#txtContactsHomeNumber" + dynamic_id).val());
                                $('#contact-workphone' + dynamic_id).html($("#txtContactsWorkNumber" + dynamic_id).val());
                                $('#contact-relationship' + dynamic_id).html($("#ddlContactsRelationship" + dynamic_id + " option:selected").val());
                                $('#contact-addressline1' + dynamic_id).html($("#txtContactsAddressLine1" + dynamic_id).val());
                                $('#contact-addressline2' + dynamic_id).html($("#txtContactsAddressLine2" + dynamic_id).val());
                                $('#contact-postcode' + dynamic_id).html($("#txtContactsPostCode" + dynamic_id).val());
                                $('#contact-city' + dynamic_id).html($("#txtContactsCity" + dynamic_id).val());
                                $('#contact-county' + dynamic_id).html($("#txtContactsCounty" + dynamic_id).val());

                                $('.disply__editcontact' + dynamic_id).hide();
                                $('.disply__viewcontact' + dynamic_id).show('slow');
                            }
                            else
                                ShowAlertMessage("Message", isExists, "A");

                        }
                        else if (InfoOf == 'LOCATIONS' || InfoOf=='SETDEFAULTLOCATIONCND') {
                            $('#chkAllLocations').prop('checked', false);
                            ShowAlertMessage("Message", "Employee: Locations updated successfully", "C");
                            ns_employee.get('Locations');
                        }
                        else if (InfoOf == 'ABSENCE') {
                            var isExists = '';
                            $.each(serverResponse, function (key, value) {
                                isExists = value.exists;
                            });
                            if (isExists.toUpperCase() === 'UPDATED') {
                                ShowAlertMessage("Message", "Employee: ABSENCE-INFO  updated successfully", "C");
                                $('.disply__editabsence' + dynamic_id).hide('slow');
                                $('.disply__viewabsence' + dynamic_id).show('slow');
                                ns_employee.get('all-absences');
                            }
                            else
                                ShowAlertMessage("Message", isExists, "A");
                        }
                        else if (InfoOf == 'ACCOUNT-STATUS') {
                            var htmlToAppend = '<a href="#" class="cnd-change-account-status" data-val="' + serverResponse[0].cnd_id + '" data-account-status="' + serverResponse[0].account_status_label + '">' + serverResponse[0].account_status_label_html_circle + '  ' + (serverResponse[0].account_status_label == 'ACTIVE' ? '<b style="margin-left:12px;font-size:12px;">on </b>' + serverResponse[0].cnd_activation_date : '<i class="fa fa-long-arrow-left bold ml-2 pl-1" style="color: #9da2ab;"> Click here to activate</i>') + '</a>';
                            $('.cnd-change-account-status-container').empty().append(htmlToAppend);
                        }
                        else if (InfoOf == 'GENERAL-TERMS') {
                            ShowAlertMessage("Message", "Employee: " + InfoOf + " has been updated successfully", "C");
                            $('.disply_none_rowsummery').hide('slow');
                            $('.disply_rowsummery').show('slow');
                            call_tmpl_binder(serverResponse, '/Template/cnd_profile_tmpl.html', '#CndTerms_Template', '#TabTerms_Placeholder');
                        }
                        else if (InfoOf == 'SALARY-TERMS') {
                            ShowAlertMessage("Message", "Employee: " + InfoOf + " has been updated successfully", "C");
                            $('.disply_none_rowsummery').hide('slow');
                            $('.disply_rowsummery').show('slow');
                            call_tmpl_binder(serverResponse, '/Template/cnd_profile_tmpl.html', '#CndTerms_Template', '#TabTerms_Placeholder');
                        }
                        else if (InfoOf == 'TAX-TERMS') {
                            ShowAlertMessage("Message", "Employee: " + InfoOf + " has been updated successfully", "C");
                            $('.disply_none_rowsummery').hide('slow');
                            $('.disply_rowsummery').show('slow');
                            call_tmpl_binder(serverResponse, '/Template/cnd_profile_tmpl.html', '#CndTerms_Template', '#TabTerms_Placeholder');
                        }
                        else if (InfoOf == 'ROLE-TERMS') {
                            ShowAlertMessage("Message", "Employee: " + InfoOf + " has been updated successfully", "C");
                            $('.disply_none_rowsummery').hide('slow');
                            $('.disply_rowsummery').show('slow');
                            call_tmpl_binder(serverResponse, '/Template/cnd_profile_tmpl.html', '#CndTerms_Template', '#TabTerms_Placeholder');
                        }
                        else if (InfoOf == 'TERMINATION-TERMS') {
                            ShowAlertMessage("Message", "Employee: " + InfoOf + " has been updated successfully", "C");
                            $('.disply_none_rowsummery').hide('slow');
                            $('.disply_rowsummery').show('slow');
                            call_tmpl_binder(serverResponse, '/Template/cnd_profile_tmpl.html', '#CndTerms_Template', '#TabTerms_Placeholder');

                            setTimeout(function () {
                                jQuery('#headingfour').click();
                            }, 500);
                            
                        }
                        else if (InfoOf == 'SENSITIVE-TERMS') {
                            console.log(serverResponse);
                            ShowAlertMessage("Message", "Employee: " + InfoOf + " has been updated successfully", "C");
                            $('.disply_none_rowsummery').hide('slow');
                            $('.disply_rowsummery').show('slow');
                            call_tmpl_binder(serverResponse, '/Template/cnd_profile_tmpl.html', '#CndTerms_Template', '#TabTerms_Placeholder');
                        }
                        else if (InfoOf == 'NOTES') {
                            var isExists = '';
                            $.each(serverResponse, function (key, value) {
                                isExists = value.exists;
                            });

                            if (isExists == 'Updated') {
                                ShowAlertMessage("Message", "Employee: " + InfoOf + " has been updated successfully", "C");
                                $('.disply_none_rownote').show('slow');
                                $('.disply_rownote').hide('slow');
                                $('.term-notes').html($('#txtTermNotes').val());
                            }
                            else
                                ShowAlertMessage("Message", isExists, "A");

                        }
                        else if (InfoOf == 'WORK-STATUS') {
                            var isExists = '';
                            $.each(serverResponse, function (key, value) {
                                isExists = value.exists;
                            });

                            if (isExists == 'Updated') {                            
                                ShowAlertMessage("Message", "Employee: " + InfoOf + " has been updated successfully", "C");
                                $('.clsCurrentStatus').html($('input[name="rdoWorkStatus"]:checked').attr('data-status'));
                                $('#CurrentStatusModal').modal('hide');
                                $(".modal-backdrop").css('display', 'none');
                            }
                            else
                                ShowAlertMessage("Message", isExists, "A");

                        }
                        else if (InfoOf == 'CONTACT-INFO') {
                            var isExists = '';
                            $.each(serverResponse, function (key, value) {
                                isExists = value.result;
                            });

                            if (isExists == 'Updated') {
                                ShowAlertMessage("Message", "Employee: " + InfoOf + " has been updated successfully", "C");
                                $('.disply_none_rowmed').show('slow');
                                $('.disply_rowmed').hide('slow');

                                $('.cls_account_email').html($("#txt_account_email").val());
                                $('.cls_personal_email').html($('#txt_personal_email').val());
                                $('.cls_home_phone').html($('#txt_home_phone').val());
                                $('.cls_mobile_phone').html($('#txt_mobile_phone').val());
                                $('.cls_work_phone').html($('#txt_work_phone').val());
                                $('.cls_work_extension').html($('#txt_work_extension').val());
                            }
                            else
                                ShowAlertMessage("Message", isExists, "A");

                        }
                        else if (InfoOf == 'MEDICAL-INFO') {
                            var isExists = '';
                            $.each(serverResponse, function (key, value) {
                                isExists = value.exists;
                            });

                            if (isExists == 'Updated') {
                                ShowAlertMessage("Message", "Employee: " + InfoOf + " has been updated successfully", "C");
                                $('.disply_none_rowmed').show('slow');
                                $('.disply_rowmed').hide('slow');
                                $('.covid_vaccinated').html($("#ddl_covid_vaccinated option:selected").val());
                                $('.covid_vaccinated_comments').html($('#txt_covid_vaccinated_comments').val());
                            }
                            else
                                ShowAlertMessage("Message", isExists, "A");

                        }
                        else {
                            ShowAlertMessage("Message", "Employee:" + InfoOf + " updated successfully", "C");
                            $('.disply_none_rowsummery').hide('slow');
                            $('.disply_rowsummery').show('slow');
                        }
                    }
                }
            });
    },

    add: function (addInfoFor,evt) {
        if (addInfoFor.toLowerCase() == 'signup') {           
            var employeeData, arr_Locs = [];
            var cndSubType = $("#ddlCndType option:selected");
            var org_id = $("#ddlAgencies option:selected");
            var title = $("#ddlEmpTitle option:selected");
            var firstName = $("#txtCndFirstName");
            var lastName = $("#txtCndLastName");
            var emailId = $("#txtCndEmailId");
            var mobileNumber = $("#txtCndMobileNumber");                      
            var jobRole = $("#ddlCndJobRole option:selected");            
            var location = $("#ddlCndLocation option:selected");
            var invitation_status = $('#chkinvitation_status').prop('checked') ? 1 : 0;
            location.each(function () {             
                arr_Locs.push($(this).val());
            });            
            
            if (cndSubType.val() == 0) {
                cndSubType.focus();
                ShowAlertMessage("Message", "Please select employee type !", "A");
                return false;
            }
            if (cndSubType.val()=='A' && org_id.val() == '0') {
                org_id.focus();
                ShowAlertMessage("Message", "Please select agency !", "A");
                return false;
            }
            
            if (title.val() == '0') {
                title.focus();
                ShowAlertMessage("Message", "Please select title !", "A");
                return false;
            }
            if (firstName.val().length == 0) {
                firstName.focus();
                ShowAlertMessage("Message", "Please enter first name !", "A");
                return false;
            }

            if (emailId.val().length == 0) {
                emailId.focus();
                ShowAlertMessage("Message", "Please enter email id !", "A");
                return false;
            }
            else {
                if (!IsEmail(emailId.val())) {
                    emailId.focus();
                    ShowAlertMessage("Message", "Please enter valid email id !", "A");
                    return false;
                }
            }
            if (mobileNumber.val().length == 0) {
                mobileNumber.focus();
                ShowAlertMessage("Message", "Please enter mobile number !", "A");
                return false;
            }
            else {
                if (mobileNumber.val().length < 10) {
                    mobileNumber.focus();
                    ShowAlertMessage("Message", "Please enter correct mobile number !", "A");
                    return false;
                }
            }           
            if (jobRole.val() == 0) {
                jobRole.focus();
                ShowAlertMessage("Message", "Please select job role", "A");
                return false;
            }
          
            if (cndSubType.val()!=='A' && arr_Locs.length==0) {
                location.focus();
                ShowAlertMessage("Message", "Please select location", "A");
                return false;
            }      
           
             employeeData = {
                "action": 'signup',
                "cnd_profile": 'personal-info',
                "cnd_sub_type": cndSubType.val(),                 
                "cnd_title": title.val(),
                "first_name": firstName.val(),
                "last_name": lastName.val(),
                "email_id": emailId.val(),
                "mobile_number": mobileNumber.val(),
                "org_id": cndSubType.val()=='A'?org_id.val():"0",
                "role_id": jobRole.val(),
                "location_ids": arr_Locs,
                "invitation_status": invitation_status,
            }
            var strFinal = "[" + JSON.stringify(employeeData) + "]";           
         
           ns_employee.post(strFinal, addInfoFor, 'ADD',evt);
        }

        else if (addInfoFor.toLowerCase() == 'personal-info') {
            var employeeData, arrLocs = [], fileUploader, title = '', arrProfilePic = [], profilePic = '', fileExt = '', firstName = '', lastName = '', cndImage = '', emailId = '', mobileNumber = '', contractType = '', weeklyHrs = '0', salary = '=', jobRole = '', jobTitle = '', location = '';
            title = $("#ddlEmpTitle option:selected");
            firstName = $("#txtCndFirstName");
            lastName = $("#txtCndLastName");
            emailId = $("#txtCndEmailId");
            mobileNumber = $("#txtCndMobileNumber");
            cndSubType = $("#ddlCndType option:selected");
            weeklyHrs = $("#txtCndWeeklyHours");
            salary = $("#txtCndSalary");
            jobRole = $("#ddlCndJobRole option:selected");
            jobTitle = $("#txtCndJobTitle");
            location = $("#ddlCndLocation option:selected");
           
            //Get all selected locations
            location.each(function () {
                arrLocs.push($(this).val());
            });
           
            if (title.val() == 0) {
                title.focus();
                ShowAlertMessage("Message", "Please select title !", "A");
                return false;
            }
            if (firstName.val().length == 0) {
                firstName.focus();
                ShowAlertMessage("Message", "Please enter first name !", "A");
                return false;
            }
            
            if (emailId.val().length == 0) {
                emailId.focus();
                ShowAlertMessage("Message", "Please enter email id !", "A");
                return false;
            }
            else {
                if (!IsEmail(emailId.val())) {
                    emailId.focus();
                    ShowAlertMessage("Message", "Please enter valid email id !", "A");
                    return false;
                }
            }
            if (mobileNumber.val().length == 0) {
                mobileNumber.focus();
                ShowAlertMessage("Message", "Please enter mobile number !", "A");
                return false;
            }
            if (cndSubType.val() == 0) {
                cndSubType.focus();
                ShowAlertMessage("Message", "Please select contract type !", "A");
                return false;
            }
            //if (weeklyHrs.val() == '') {
            //    weeklyHrs.focus();
            //    ShowAlertMessage("Message", "Please enter weekly hours !", "A");
            //    return false;
            //}
            //if (salary.val() == '') {
            //    salary.focus();
            //    ShowAlertMessage("Message", "Please enter salary !", "A");
            //    return false;
            //}
            if (jobRole.val() == 0) {
                jobRole.focus();
                ShowAlertMessage("Message", "Please select job role !", "A");
                return false;
            }
            //if (jobTitle.val().length == '') {
            //    jobTitle.focus();
            //    ShowAlertMessage("Message", "Please enter job title !", "A");
            //    return false;
            //}
            if (location.val() == 0) {
                location.focus();
                ShowAlertMessage("Message", "Please select location !", "A");
                return false;
            }

            //     // geting file extention here
            //fileExt = fileUploader.get(0).files[0].name.split(/[.]+/).pop();
            //arrProfilePic.push(fileUploader.get(0).files[0]);
            //     // converting file into base64 here
            //arrProfilePic.push(fileUploader)
            //let customJsonFiles = processAllAttachedFiles(arrProfilePic);
            //customJsonFiles.then(function (promise) {
            //    $.each(arrDocAttachFiles_Data, function (key, attachData) {
            //        profilePic = promise[key].base64StringFile;
            //    });
            //});
            //console.log(profilePic);
            employeeData = {
                "action": 'Add',
                "cnd_profile": addInfoFor,
                "cnd_Id": 0,
                "cnd_image": cndImage,
                "cnd_title": title.val(),
                "first_name": firstName.val(),
                "last_name": lastName.val(),
                "email_id": emailId.val(),
                "mobile_number": mobileNumber.val(),
                "cnd_sub_type": cndSubType.val(),
                "weekly_hrs": "0",//weeklyHrs.val(),
                "salary": "0",//salary.val(),
                "job_title": jobTitle.val(),
                "role_id": jobRole.val(),
                //"profile_pic": profilePic,
                //"file_extension":fileExt,
                "location_ids": arrLocs,
            }
            var strFinal = "[" + JSON.stringify(employeeData) + "]";
           
            ns_employee.post(strFinal, addInfoFor, 'Add',evt);
        }
        else if (addInfoFor.toLowerCase() == 'contacts') {
            var contactsData, isPrimary, title = '', firstName = '', lastName = '', mobileNumber = '', homeNumber = '', workNumber = '', relationship = '', postcode = '', addressLine1 = '', addressLine2 = '', city = '', county = '';
            firstName = $("#txtContactsFirstName");
            lastName = $("#txtContactsLastName");;
            mobileNumber = $("#txtContactsMobileNumber");
            homeNumber = $("#txtContactsHomeNumber");
            isPrimary = $('#chkContactsIsPrimary');
            workNumber = $("#txtContactsWorkNumber");
            relationship = $("#ddlContactsRelationship option:selected");
            postcode = $("#txtContactsPostCode");
            addressLine1 = $("#txtContactsAddressLine1");
            addressLine2 = $("#txtContactsAddressLine2");
            city = $("#txtContactsCity");
            county = $("#txtContactsCounty");
            if (firstName.val().length == 0) {
                firstName.focus();
                ShowAlertMessage("Message", "Please enter first name !", "A");
                return false;
            }
            if (mobileNumber.val().length == 0) {
                mobileNumber.focus();
                ShowAlertMessage("Message", "Please enter mobile number !", "A");
                return false;
            }
            if (relationship.val() == 0) {
                relationship.focus();
                ShowAlertMessage("Message", "Please select relationship !", "A");
                return false;
            }
            if (addressLine1.val().length > 0) {
                if (postcode.val().length == 0) {
                    postcode.focus();
                    ShowAlertMessage("Message", "Please enter postcode !", "A");
                    return false;
                }
                else {
                    if (addressLine1.val().length == 0) {
                        addressLine1.focus();
                        ShowAlertMessage("Message", "Please enter address line 1 !", "A");
                        return false;
                    }
                    if (city.val().length == 0) {
                        city.focus();
                        ShowAlertMessage("Message", "Please enter city !", "A");
                        return false;
                    }
                    if (county.val().length == 0) {
                        county.focus();
                        ShowAlertMessage("Message", "Please enter county !", "A");
                        return false;
                    }
                }
            }
         
            contactsData = {
                "action": 'Add',
                "row_number": $('#TabContactsPlaceholder > div').length + 1,
                "cnd_profile": addInfoFor,
                "cnd_id": $('.profile-id').attr('data-id'),
                "first_name": firstName.val(),
                "last_name": lastName.val(),
                "mobile": mobileNumber.val(),
                "mobile_number": mobileNumber.val(),
                "home_number": homeNumber.val(),
                "home_phone": homeNumber.val(),
                "work_number": workNumber.val(),
                "work_phone": workNumber.val(),
                "relationship": relationship.val(),
                "primary_contact": (isPrimary.is(':checked') ? 1 : 0),
                "postcode": postcode.val(),
                "address_line1": addressLine1.val(),
                "address_line2": addressLine2.val(),
                "city": city.val(),
                "county": county.val(),
                "country": county.val()
            }
            var strFinal = "[" + JSON.stringify(contactsData) + "]";
            ns_employee.post(strFinal, addInfoFor, 'Add',evt);
        }
        else if (addInfoFor.toLowerCase() == 'absence') {
            var absenceType, leave, startDate, startTime, endDate, endTime, details;
            if (cnd_profile_action_from.toLowerCase() == 'absence_modal') {
                absenceType = $("#ddlLeaveCategory_placeholder option:selected");
                leave = $("input[name=rdoAbsenceLeave]:checked");
                startDate = $("#txtAbsenceStartDate");
                startTime = $("#txtAbsenceStartTime");
                endDate = $("#txtAbsenceEndDate");
                endTime = $("#txtAbsenceEndTime");
                details = $("#txtAbsenceDetails");
            }
            else {
                absenceType = $("#ddlLeaveCategory_placeholder option:selected");
                leave = $("input[name=rdoAbsenceLeave]:checked");
                startDate = $("#txtAbsenceStartDate");
                startTime = $("#txtAbsenceStartTime");
                endDate = $("#txtAbsenceEndDate");
                endTime = $("#txtAbsenceEndTime");
                details = $("#txtAbsenceDetails");
            }
            if (absenceType.val() == 0) {
                absenceType.focus().select();
                ShowAlertMessage("Message", "Please select leave category !", "A");
                return false;
            }
            if (startDate.val().length == 0) {
                startDate.focus();
                ShowAlertMessage("Message", "Please enter start date !", "A");
                return false;
            }
            if (startDate.val().length !== 0) {
                var abstartDate = startDate.val();
                var abendDate = endDate.val();
                if (abendDate.length !== 0) {
                    abstartDate = new Date(ConvertDate(abstartDate));
                    abendDate = new Date(ConvertDate(abendDate));
                    if (+abstartDate > +abendDate) {
                        ShowAlertMessage("Message", "Leave end datetime should be greater end datetime", "A");
                        endDate.focus();
                        return false;
                    }
                }
                else {
                    endDate.focus();
                    return false;
                }
            }
            if (leave.val() == 'Partial') {
                if (startTime.val().length == 0) {
                    startTime.focus();
                    ShowAlertMessage("Message", "Please enter start time !", "A");
                    return false;
                }
                else if (endTime.val().length == 0) {
                    endTime.focus();
                    ShowAlertMessage("Message", "Please enter end time !", "A");
                    return false;
                }
            }
            else {
                startTime.val("00:00");
                endTime.val("23:59");
            }


            var absenceData = {
                "action": 'Add',
                "cnd_profile": addInfoFor,
                "cnd_id": $('.profile-id').attr('data-id'),
                "absence_type": absenceType.val(),
                "start_datetime": ConvertDateFormate(startDate.val()) + ' ' + startTime.val(),
                "end_datetime": ConvertDateFormate(endDate.val()) + ' ' + endTime.val(),
                "detail": details.val()
            }
            var strFinal = "[" + JSON.stringify(absenceData) + "]";
            ns_employee.post(strFinal, addInfoFor, 'Add',evt);
        }
        else if (addInfoFor.toLowerCase() == 'password') {
            var txtCurrentPassword = '';// $('#txtCurrentPassword').val().trim();
            var txtNewPassword = $('#txtNewPassword').val().trim();
            var txtConfirmPassword = $('#txtConfirmPassword').val().trim();
            //if (txtCurrentPassword == '') {
            //    $("#txtCurrentPassword").focus();
            //    ShowAlertMessage("Message", "Enter Current password", "A");
            //    return false;
            //}
            if (txtNewPassword == '') {
                $("#txtNewPassword").focus();
                ShowAlertMessage("Message", "Enter New password", "A");
                return false;
            }
            if (txtNewPassword != '' && txtNewPassword.length >= 8 && txtNewPassword.length <= 20) {
                $("#txtNewPassword").focus();
                ShowAlertMessage("Message", "Password length must be between 8 and 20 characters long", "A");
                return false;
            }
            if (txtConfirmPassword == '') {
                $("#txtConfirmPassword").focus();
                ShowAlertMessage("Message", "Enter Confirm password", "A");
                return false;
            }
            if (txtNewPassword == txtConfirmPassword) {
                //var Param = "{ password: '" + txtCurrentPassword + "',NewPassword:'" + txtNewPassword + "'}";
                //var obj = {};
                //obj.Password = txtCurrentPassword;
                //obj.NewPassword = txtNewPassword;
                //obj.ConfirmPassword = txtConfirmPassword;
                //obj.block = 'CHGPASS';
                //var param = "[" + JSON.stringify(obj) + "]";

                var passwordData = {
                    "action": 'CHGPASS',                  
                    "cnd_profile": 'PROFILES',
                    "cnd_id": $('.profile-id').attr('data-id'),
                    "Password": txtCurrentPassword,
                    "NewPassword": txtNewPassword,
                    "ConfirmPassword": txtConfirmPassword
                }
                var strFinal = "[" + JSON.stringify(passwordData) + "]";
                ns_employee.post(strFinal, addInfoFor, 'CHGPASS',evt);

                //ns_ajax.post(
                //    urls.candidateApi + 'profile',
                //    param,
                //    function (response) {
                //        if (response == 'OK') {
                //            ShowAlertMessage("Message", "Password update successfully.", "C");
                //            $('#txtCurrentPassword').val('');
                //            $('#txtNewPassword').val('');
                //            $('#txtConfirmPassword').val('');
                //        }
                //        else
                //            ShowAlertMessage("Message", "Sorry ! Please try again", "C");
                //    });
            }
            else
                ShowAlertMessage("Message", "New password and confirm password are not matched.", "A");
        }
    },

    update: function (updateInfoOf,evt) {       
        if (updateInfoOf.toUpperCase() == 'WORK-STATUS') {
            var work_status = $('input[name="rdoWorkStatus"]:checked').val();
           
            if (work_status !== '1' && work_status !== '2' && work_status !== '3' && work_status !== '4') {
                ShowAlertMessage("Message", "Choose an option", "A");
                return false;
            }
            var accountStatusData = {
                "action": 'Update',
                "cnd_profile": updateInfoOf,
                "cnd_id": $('.profile-id').attr('data-id'),
                "work_status": work_status
            }
            var strFinal = "[" + JSON.stringify(accountStatusData) + "]";
            ns_employee.post(strFinal, updateInfoOf, 'Update',evt);
        }
        else if (updateInfoOf.toUpperCase() == 'CONTACT-INFO') {
            var account_email = $("#txt_account_email");
            var personal_email = $('#txt_personal_email');
            var home_phone = $('#txt_home_phone');
            var mobile_phone = $('#txt_mobile_phone');
            var work_phone = $('#txt_work_phone');
            var work_extension = $('#txt_work_extension');

            if (account_email.val().trim() == '') {
                account_email.focus();
                ShowAlertMessage("Message", "Enter account email", "A");
                return false;
            }
            if (account_email.val().trim() !== '' && !IsEmail(account_email.val().trim())) {
                account_email.focus();
                ShowAlertMessage("Message", "Please enter valid email id !", "A");
                return false;
            }
            if (personal_email.val().trim() !== '' && !IsEmail(personal_email.val().trim())) {
                personal_email.focus();
                ShowAlertMessage("Message", "Please enter valid personal email id !", "A");
                return false;
            }
            if (mobile_phone.val().trim() == '') {
                mobile_phone.focus();
                ShowAlertMessage("Message", "Enter mobile phone", "A");
                return false;
            }
            if (mobile_phone.val().trim() !== '' && (mobile_phone.val().trim().length < 10 || mobile_phone.val().trim().length > 11)) {
                mobile_phone.focus();
                ShowAlertMessage("Message", "Enter valid mobile phone", "A");
                return false;
            }
            var accountStatusData = {
                "action": 'Update',
                "cnd_profile": updateInfoOf,
                "cnd_id": $('.profile-id').attr('data-id'),
                "email_id": account_email.val().trim(),
                "personal_email": personal_email.val().trim(),
                "mobile_number": mobile_phone.val().trim(),
                "work_phone": work_phone.val().trim(),
                "home_phone": home_phone.val().trim(),
                "work_extension": work_extension.val().trim()
            }
            var strFinal = "[" + JSON.stringify(accountStatusData) + "]";
            ns_employee.post(strFinal, updateInfoOf, 'Update',evt);
        }
        else if (updateInfoOf.toUpperCase() == 'PERSONAL-INFO') {
            var employeeData, title = '', firstName = '', middleName = '', country_id = 0, sendEmailVerification = '', sendMobileVerification = '', lastName = '', gender = '', cndImage = '', emailId = '', mobileNumber = '', postcode = '', addressLine1 = '', addressLine2 = '', city = '', county = '';

            title = $("#ddl_profile_title option:selected");
            firstName = $("#ddl_profile_first_name");
            middleName = $("#ddl_profile_middle_name");
            lastName = $("#ddl_profile_last_name");
            DOB = $("#ddl_profile_dbo");
            gender = $("#ddl_profile_gender  option:selected");
            country_id = $("#ddl_profile_country option:selected");

            postcode = $("#txtContactsPostCodePI");
            addressLine1 = $("#txtContactsAddressLine1PI");
            addressLine2 = $("#txtContactsAddressLine2PI");
            city = $("#txtContactsCityPI");
            county = $("#txtContactsCountyPI");
            if (title.val() == 0) {
                title.focus();
                ShowAlertMessage("Message", "Please select title !", "A");
                return false;
            }
            if (firstName.val().length == 0) {
                firstName.focus();
                ShowAlertMessage("Message", "Please enter first name !", "A");
                return false;
            }
            if (lastName.val().length == 0) {
                lastName.focus();
                ShowAlertMessage("Message", "Please enter last name !", "A");
                return false;
            }
            if (DOB.val().length == 0) {
                DOB.focus();
                ShowAlertMessage("Message", "Please enter date of birth!", "A");
                return false;
            }
            if (gender.val() == '') {
                gender.focus();
                ShowAlertMessage("Message", "Select gender!", "A");
                return false;
            }
            //if (country_id.val() == 0) {
            //    country_id.focus();
            //    ShowAlertMessage("Message", "Select country!", "A");
            //    return false;
            //}

            if (addressLine1.val().length > 0) {
                if (postcode.val().length == 0) {
                    postcode.focus();
                    ShowAlertMessage("Message", "Please enter postcode !", "A");
                    return false;
                }
                else {
                    if (addressLine1.val().length == 0) {
                        addressLine1.focus();
                        ShowAlertMessage("Message", "Please enter address line 1 !", "A");
                        return false;
                    }
                    if (city.val().length == 0) {
                        city.focus();
                        ShowAlertMessage("Message", "Please enter city !", "A");
                        return false;
                    }
                    if (county.val().length == 0) {
                        county.focus();
                        ShowAlertMessage("Message", "Please enter county !", "A");
                        return false;
                    }
                }
            }
            employeeData = {
                "action": 'Update',
                "cnd_profile": updateInfoOf,
                "cnd_id": $('.profile-id').attr('data-id'),

                "cnd_title": title.val(),
                "first_name": firstName.val(),
                "middle_name": middleName.val(),
                "last_name": lastName.val(),

                "DOB": (DOB.val().length > 0 ? ConvertDateFormate(DOB.val()) : ''),
                "gender": gender.val(),
                "country_id":"0",//country_id.val(),
                "postcode": postcode.val(),
                "address_line1": addressLine1.val(),
                "address_line2": addressLine2.val(),
                "city": city.val(),
                "country": county.val()
            }
            var strFinal = "[" + JSON.stringify(employeeData) + "]";
            ns_employee.post(strFinal, updateInfoOf, 'Update',evt);
        }
       

        else if (updateInfoOf.toUpperCase() == 'MEDICAL-INFO') {
            var covid_vaccinated = $("#ddl_covid_vaccinated option:selected");
            var covid_vaccinated_comments = $("#txt_covid_vaccinated_comments");
            if (covid_vaccinated.val() == '') {
                covid_vaccinated.focus();
                ShowAlertMessage("Message", "Select covid vaccinated option", "A");
                return false;
            }
            var accountStatusData = {
                "action": 'Update',
                "cnd_profile": updateInfoOf,
                "cnd_id": $('.profile-id').attr('data-id'),
                "covid_vaccinated": covid_vaccinated.val(),
                "covid_vaccinated_comments": covid_vaccinated_comments.val().trim()
            }
            var strFinal = "[" + JSON.stringify(accountStatusData) + "]";
            ns_employee.post(strFinal, updateInfoOf, 'Update',evt);
        }
        else if (updateInfoOf.toUpperCase() == 'GENERAL-TERMS') {
            //Working hours
            var startDate = $("#txtEmployeeStartDate");
            var workHours = $("#txtWorkingWeekHour");
            var workMin = $("#txtWorkingWeekMin");

            //Working Pattern
            var work_pattern_status = $("#chk_work_pattern_status").prop("checked") ? 1 : 0;  
            var WorkingTimePatterns = $("#ddlWorkingTimePattern option:selected");
            var patternStartDate = $("#txtPatternStartDate");
            var patternEndDate = $("#txtPatternEndDate");
                
          

            //Annual leave entitlement
            var AnnualLeaveStartDay = $("#txtAnnualLeaveStartDay");
            var AnnualLeaveStartMonth = $("#ddlAnnualLeaveStartMonth option:selected");
            var FullTimeAnnualLeaveInDays = $("#txtFullTimeAnnualLeaveInDays");
            var MinAnnualLeaveInDays = $("#txtMinAnnualLeaveInDays");

            //Reason for Update
            var update_reason_id = $("#ddlContractUpdateReason option:selected");
            var reason_comments = $("#txtContractUpdateReason");

            if (startDate.val() == '') {
                ShowAlertMessage("Message", "Enter employee start date", "A");
                startDate.focus();
                return false;
            }
            else if (work_pattern_status == 1 && WorkingTimePatterns.val() == '0') {
                ShowAlertMessage("Message", "Select a working time patern", "A");
                WorkingTimePatterns.focus();
                return false;
            }           
           
            else if (work_pattern_status == 1 && (WorkingTimePatterns.val() !== '0' && patternStartDate.val() == '')) {
                ShowAlertMessage("Message", "Enter pattern Start Date", "A");
                patternStartDate.focus();
                return false;
            }
            else if (work_pattern_status ==1 && patternStartDate.val() !== '' && patternEndDate.val() !== '') {
                var sDate = patternStartDate.val();
                var eDate = patternEndDate.val();
                if (sDate !== '' && eDate !== '') {
                    sDate = new Date(ConvertDate(sDate));
                    eDate = new Date(ConvertDate(eDate));
                    if (+sDate > +eDate) {
                        ShowAlertMessage("Message", "Pattern End date should be greater than start date", "A");
                        patternEndDate.focus();
                        return false;
                    }
                }
            }
            else if (workHours.val() == '') {
                ShowAlertMessage("Message", "Enter employee working hour", "A");
                workHours.focus();
                return false;
            }          

            //else if (AnnualLeaveStartDay.val() == '' || AnnualLeaveStartDay.val() == '0') {
            //    ShowAlertMessage("Message", "Enter annual leave start day", "A");
            //    AnnualLeaveStartDay.focus();
            //    return false;
            //}
            //else if (AnnualLeaveStartMonth.val() == '0') {
            //    ShowAlertMessage("Message", "Enter annual leave start month", "A");
            //    AnnualLeaveStartMonth.focus();
            //    return false;
            //}
            else if (parseInt(update_reason_id.val().trim()) == 0) {
                ShowAlertMessage("Message", "Select a reason for update", "A");
                update_reason_id.focus();
                return false;
            }
            var gernalTermsData = {
                "action": 'Update',
                "cnd_profile": updateInfoOf,
                "cnd_id": $('.profile-id').attr('data-id'),

                "start_date": (startDate.val().length > 0) ? ConvertDateFormate(startDate.val()) : '',
                "cnd_weekly_hours_in_min": (parseInt(workHours.val().trim()) * 60) + parseInt(workMin.val().trim() == "" ? 0 : workMin.val().trim()),

                "working_time_pattern": WorkingTimePatterns.val() == '' ? '0' : WorkingTimePatterns.val(),
                "pattern_start_date": (patternStartDate.val().length > 0) ? ConvertDateFormate(patternStartDate.val()) : '',
                "pattern_end_date": (patternEndDate.val().length > 0) ? ConvertDateFormate(patternEndDate.val()) : '',
                "work_pattern_status": work_pattern_status,

                "annual_leave_start_day": AnnualLeaveStartDay.val(),
                "annual_leave_start_month": AnnualLeaveStartMonth.val(),
                "full_time_annual_leave_in_days": FullTimeAnnualLeaveInDays.val(),
                "min_annual_leave_in_days": MinAnnualLeaveInDays.val(),
                "update_reason_id": update_reason_id.val(),
                "update_reason": reason_comments.val()
            }
            var strFinal = "[" + JSON.stringify(gernalTermsData) + "]";
            ns_employee.post(strFinal, updateInfoOf, 'Update',evt);

        }
        else if (updateInfoOf.toUpperCase() == 'NOTES') {
            if ($('#txtTermNotes').val().trim() == '') {
                ShowAlertMessage("Message", "Enter notes", "A");
                $('#txtTermNotes').focus();
                return false;
            }
            var gernalTermsData = {
                "action": 'Update',
                "cnd_profile": updateInfoOf,
                "cnd_id": $('.profile-id').attr('data-id'),
                "notes": $('#txtTermNotes').val().trim()
            }
            var strFinal = "[" + JSON.stringify(gernalTermsData) + "]";
            ns_employee.post(strFinal, updateInfoOf, 'Update',evt);
        }
        else if (updateInfoOf.toUpperCase() == 'SALARY-TERMS') {
            //chk_salary_pension_eligible,chk_salary_opsted_out,txt_salary_employee_contribution,txt_salary_employer_contribution,txt_salary_enrolment_date
            var payroll = $('#txt_payroll_number');
            var salary = $('#txt_salary');
            var salaryMode = $("#ddl_salary_mode option:selected");
            var payment_frequency = $("#ddl_payment_frequency option:selected");

            var is_overtime_allowed = $('#chk_overtime_allowed').prop('checked') ? 1 : 0;
            var overtime_rate_per_hour = $('#txt_overtime_rate_per_hour');
            var maximmum_duration_overtime = $('#txt_maximmum_duration_overtime');

            var payment_method = $("#ddl_paymentment_method option:selected");

            var pension_eligible = $('#chk_salary_pension_eligible').prop('checked') ? 1 : 0;
            var opsted_out = $('#chk_salary_opsted_out').prop('checked') ? 1 : 0;
            var employee_contribution = $('#txt_salary_employee_contribution');
            var employer_contribution = $('#txt_salary_employer_contribution');
            var enrolment_date = $('#txt_salary_enrolment_date');

            if (payroll.val().trim() == '') {
                payroll.focus();
                ShowAlertMessage("Message", "Enter payroll number", "A");
                return false;
            }
            if (salary.val().trim().length == 0) {
                salary.focus();
                ShowAlertMessage("Message", "Enter salary !", "A");
                return false;
            }
            if (salaryMode.val() == '') {
                salaryMode.focus();
                ShowAlertMessage("Message", "Select mode", "A");
                return false;
            }
            if (payment_frequency.val() == '') {
                payment_frequency.focus();
                ShowAlertMessage("Message", "Select payment frequency", "A");
                return false;
            }


            if (is_overtime_allowed == 1) {
                if (overtime_rate_per_hour.val().length == 0) {
                    overtime_rate_per_hour.focus();
                    ShowAlertMessage("Message", "Enter overtime rate", "A");
                    return false;
                }
                if (maximmum_duration_overtime.val().length == 0) {
                    maximmum_duration_overtime.focus();
                    ShowAlertMessage("Message", "Enter maximmum duration of overtime", "A");
                    return false;
                }               
            }
            

            if (pension_eligible == 1 && opsted_out == 0) {
                if (employee_contribution.val() == 0) {
                    employee_contribution.focus();
                    ShowAlertMessage("Message", "Enter employee contribution", "A");
                    return false;
                }
                if (employer_contribution.val() == 0) {
                    employer_contribution.focus();
                    ShowAlertMessage("Message", "Enter employer contribution", "A");
                    return false;
                }
                if (enrolment_date.val() == 0) {
                    enrolment_date.focus();
                    ShowAlertMessage("Message", "Enter enrolment date", "A");
                    return false;
                }
            }


            var salaryTermsData = {
                "action": 'Update',
                "cnd_profile": updateInfoOf,
                "cnd_id": $('.profile-id').attr('data-id'),
                "payroll_number": payroll.val().trim(),
                "salary": salary.val().trim(),
                "salary_mode": salaryMode.val(),
                "payment_frequency": payment_frequency.val(),
                "payment_method": payment_method.val(),               

                "is_overtime_allowed": is_overtime_allowed,
                "overtime_rate_per_hour": is_overtime_allowed == 0 ? 0 : overtime_rate_per_hour.val(),
                "maximmum_duration_overtime": is_overtime_allowed == 0 ? 0 :maximmum_duration_overtime.val(),
             
                "pension_eligible": pension_eligible,
                "opsted_out": opsted_out,
                "employee_contribution": opsted_out == 1 ? 0 : employee_contribution.val().trim(),
                "employer_contribution": opsted_out == 1 ? 0 : employer_contribution.val().trim(),
                "enrolment_date": opsted_out == 1 ? '' : enrolment_date.val().trim()

            }
            var strFinal = "[" + JSON.stringify(salaryTermsData) + "]";
            ns_employee.post(strFinal, updateInfoOf, 'Update',evt);
        }
        else if (updateInfoOf.toUpperCase() == 'TAX-TERMS') {

          
            //ddl_tax_caculation_method, txt_tax_NI_number, ddl_tax_ni_letter, ddl_starter_declaration, ddl_company_director, ddl_StudentLoan, ddl_PostGraduateLoan

            var taxCode = $("#txt_tax_coce");
            var tax_caculation_method = $("#ddl_tax_caculation_method option:selected");
            var ni_number = $('#txt_tax_NI_number');
            var ni_letter = $("#ddl_tax_ni_letter option:selected");
            var starter_declaration = $("#ddl_starter_declaration option:selected");
            var company_director = $("#ddl_company_director option:selected");
            var director_calculation_method = $("#ddl_director_calculation_method option:selected");
            var director_appointment_date = $("#txt_director_appointment_date");           

            var student_loan = $("#ddl_StudentLoan option:selected");
            var student_loan_plan_type = $("#ddl_StudentLoanPlanType option:selected");
            var post_graduate_loan = $("#ddl_PostGraduateLoan option:selected");
           
            if (taxCode.val().trim().length == 0) {
                taxCode.focus();
                ShowAlertMessage("Message", "Enter tax code", "A");
                return false;
            }
            if (tax_caculation_method.val().trim().length == 0) {
                tax_caculation_method.focus();
                ShowAlertMessage("Message", "Select tax caculation method!", "A");
                return false;
            }
            if (ni_letter.val() == '') {
                ni_letter.focus();
                ShowAlertMessage("Message", "Select NI letter", "A");
                return false;
            }
            if (starter_declaration.val() == '') {
                starter_declaration.focus();
                ShowAlertMessage("Message", "Select starter declaration", "A");
                return false;
            }
            if (company_director.val() == '1' && director_calculation_method.val()=='') {
                director_calculation_method.focus();
                ShowAlertMessage("Message", "Select director calculation method", "A");
                return false;
            }
            if (company_director.val() == '1' && director_appointment_date.val() == '') {
                director_appointment_date.focus();
                ShowAlertMessage("Message", "Enter appointment date", "A");
                return false;
            }
            if (student_loan.val() == '1' && student_loan_plan_type.val() == '0') {
                student_loan_plan_type.focus();
                ShowAlertMessage("Message", "Select plan type", "A");
                return false;
            }
            var salaryTermsData = {
                "action": 'Update',
                "cnd_profile": updateInfoOf,
                "cnd_id": $('.profile-id').attr('data-id'),
                "tax_code": taxCode.val().trim(),
                "tax_caculation_method": tax_caculation_method.val().trim(),
                "ni_number": ni_number.val(),
                "ni_letter": ni_letter.val(),
                "starter_declaration": starter_declaration.val(),
                "company_director": company_director.val(),
                "director_calculation_method": company_director.val() == '0'?'': director_calculation_method.val(),
                "director_appointment_date": company_director.val() == '0' ? '' :director_appointment_date.val(),
                "student_loan": student_loan.val(),
                "student_loan_plan_type": student_loan.val()=='0'?'0':student_loan_plan_type.val(),
                "post_graduate_loan": post_graduate_loan.val()             
            }
            var strFinal = "[" + JSON.stringify(salaryTermsData) + "]";
            ns_employee.post(strFinal, updateInfoOf, 'Update',evt);
        } 

        else if (updateInfoOf.toUpperCase() == 'TERMINATION-TERMS') {

            var terminationDate = $("#txt_termination_date");
            var termination_reason = $("#ddlTerminationReason option:selected");
            var termination_reason_comments = $('#txt_termination_reason_comments');
            var exit_interview_performed = $('#chk_exit_interview_performed').prop('checked') ? 1 : 0;
            var suitable_for_reengagement = $('#chk_suitable_for_reengagement').prop('checked') ? 1 : 0;


            if (terminationDate.val().length == 0) {
                terminationDate.focus();
                ShowAlertMessage("Message", "Please enter termination date !", "A");
                return false;
            }
            if (termination_reason.val() == 0) {
                termination_reason.focus();
                ShowAlertMessage("Message", "Select termination reason", "A");
                return false;
            }
            var terminationTermsData = {
                "action": 'Update',
                "cnd_profile": updateInfoOf,
                "cnd_id": $('.profile-id').attr('data-id'),
                "termination_date": terminationDate.val().length > 0 ? ConvertDateFormate(terminationDate.val()) : '',
                "termination_reason": termination_reason.val(),
                "termination_reason_comments": termination_reason_comments.val().trim(),
                "exit_interview_performed": exit_interview_performed,
                "suitable_for_reengagement": suitable_for_reengagement
            }
            var strFinal = "[" + JSON.stringify(terminationTermsData) + "]";
            ns_employee.post(strFinal, updateInfoOf, 'Update',evt);
        }
        else if (updateInfoOf.toUpperCase() == 'ROLE-TERMS') {

            var job_title = $('#txt_job_title');
            var contract_type = $("#ddlContractType option:selected");
            var notify_of_expiry_date = $('#txt_Notify_of_expiry_date');
            var probation_required = $("input[name='chkProbationRequired']:checked").val();
            var notice_period = $("#ddl_notice_period option:selected");
            var notify_of_expiry_on = $('#txt_notify_of_expiry_on');
            var notify_of_expiry_on_type = $("#ddl_notify_of_expiry_on option:selected");
            var role_term_update_reason = $("#ddlUpdateReason option:selected");
            var role_term_update_reason_notes = $('#txt_role_update_reason_notes');

            if (job_title.val().trim() == '') {
                job_title.focus();
                ShowAlertMessage("Message", "Enter job title", "A");
                return false;
            }
            if (contract_type.val() == 0) {
                contract_type.focus();
                ShowAlertMessage("Message", "Select a Contract type", "A");
                return false;
            }
            if (contract_type.val() == 2 && notify_of_expiry_date.val().trim() == '') {
                notify_of_expiry_date.focus();
                ShowAlertMessage("Message", "Enter notify of expiry date", "A");
                return false;
            }
            if ($("input[name='chkProbationRequired']:checked") == false) {
                $("input[name='chkProbationRequired']").focus();
                ShowAlertMessage("Message", "Is probation required ?", "A");
                return false;
            }
            if (notice_period.val() == '') {
                notice_period.focus();
                ShowAlertMessage("Message", "Select a notice period", "A");
                return false;
            }
            if (notice_period.val() == 'No notice period' && notify_of_expiry_on.val() == '') {
                notify_of_expiry_on.focus();
                ShowAlertMessage("Message", "Enter notify of expiry on", "A");
                return false;
            }
            if (role_term_update_reason.val() == 0) {
                role_term_update_reason.focus();
                ShowAlertMessage("Message", "Select a update reason", "A");
                return false;
            }
            var salaryTermsData = {
                "action": 'Update',
                "cnd_profile": updateInfoOf,
                "cnd_id": $('.profile-id').attr('data-id'),
                "job_title": job_title.val().trim(),
                "contract_type": contract_type.val(),
                "notify_of_expiry_date": contract_type !== 2 ? '' : notify_of_expiry_date.val().trim(),
                "probation_required": probation_required,
                "notice_period": notice_period.val(),
                "notify_of_expiry_on": notice_period.val() == 'No notice period' ? '0' : notify_of_expiry_on.val().trim(),
                "notify_of_expiry_on_type": notify_of_expiry_on_type.val(),
                "role_term_update_reason": role_term_update_reason.val(),
                "role_term_update_reason_notes": role_term_update_reason_notes.val().trim()
            }
            var strFinal = "[" + JSON.stringify(salaryTermsData) + "]";

            ns_employee.post(strFinal, updateInfoOf, 'Update',evt);
        }
        else if (updateInfoOf.toUpperCase() == 'SENSITIVE-TERMS') {           
            var niNumber = $("#txt_sensitive_ni_number");
            var passportNumber = $("#txt_sensitive_passport_number");
            var passportIssueCounty = $("#ddl_sensitive_passport_country option:selected");
            var passportExpiryDate = $("#txt_sensitive_passport_date_of_expiry");

            var drivingLicenceNumber = $("#txt_sensitive_licence_number")
            var drivingLicenceIssueCountry = $("#ddl_sensitive_dl_issue_country option:selected");
            var drivingLicenceClass = $("#txt_sensitive_licence_class")
            var drivingLicenceExpiryDate = $("#txt_sensitive_driving_licence_expiry")

            var visaNumber = $("#txt_sensitive_visa_number");
            var visaExpiryDate = $("#txt_sensitive_visa_expiry");

            var DBSChecked = $("#chk_check_conducted").prop('checked') ? 1 : 0;
            var follow_up_date = $('#txt_follow_up_date');

            var work_status = $("#ddl_work_status option:selected");
            var share_code = $('#txt_share_code');
            var work_date_issued = $('#txt_date_issued');
            var work_date_checked = $('#txt_date_checked');
            var work_date_expiry = $('#txt_expiry_date');
        
            var sensitiveTermsData = {
                "action": 'Update',
                "cnd_profile": updateInfoOf,
                "cnd_id": $('.profile-id').attr('data-id'),             
                "ni_number": niNumber.val().trim(),
                "passport_number": passportNumber.val().trim(),
                "passport_expiry_date": ConvertDateFormate(passportExpiryDate.val().trim()),
                "passport_issue_country": passportIssueCounty.val().trim(),

                "driving_licence_number": drivingLicenceNumber.val().trim().trim(),
                "licence_issue_country": drivingLicenceIssueCountry.val(),
                "licence_expiry_date": ConvertDateFormate(drivingLicenceExpiryDate.val().trim()),
                "licence_class": drivingLicenceClass.val().trim(),

                "visa_number": visaNumber.val().trim(),
                "visa_exp_date": ConvertDateFormate(visaExpiryDate.val()),

                "dbs_checked": DBSChecked,
                "follow_up_date": DBSChecked == 1 ? follow_up_date.val() : '',

                "work_status": work_status.val(),
                "share_code": work_status.val() == 'Settled' ? '' : share_code.val(),
                "work_date_issued": work_status.val() == 'Settled' ? '' : work_date_issued.val(),
                "work_date_checked": work_status.val() == 'Settled' ? '' : work_date_checked.val(),
                "work_date_expiry": work_status.val() == 'Settled' ? '' : work_status.val() == 'Pre-settled' ? work_date_expiry.val() : ''
            }
            var strFinal = "[" + JSON.stringify(sensitiveTermsData) + "]";
            ns_employee.post(strFinal, updateInfoOf, 'Update',evt);
        }
        else if (updateInfoOf.toUpperCase() == 'WORK-SCHEDULE') {
            var sunday = $("#ddlWorkScheduleSunday option:selected");
            var monday = $("#ddlWorkScheduleMonday option:selected");
            var tuesday = $("#ddlWorkScheduleTuesday option:selected");
            var wednesday = $("#ddlWorkScheduleWednesday option:selected");
            var thursday = $("#ddlWorkScheduleThursday option:selected");
            var friday = $("#ddlWorkScheduleFriday option:selected");
            var saturday = $("#ddlWorkScheduleSaturday option:selected");
            var workScheduleData = {
                "action": 'Update',
                "cnd_profile": updateInfoOf,
                "cnd_Id": $('.profile-id').attr('data-id'),
                "sunday": sunday.val(),
                "monday": monday.val(),
                "tuesday": tuesday.val(),
                "wednesday": wednesday.val(),
                "thursday": thursday.val(),
                "friday": friday.val(),
                "saturday": saturday.val(),
            }
            var strFinal = "[" + JSON.stringify(workScheduleData) + "]";
            ns_employee.post(strFinal, updateInfoOf, 'Update',evt);
        }
        else if (updateInfoOf.toUpperCase() == 'CONTACTS') {
            var contactsData, isPrimary, title = '', firstName = '', lastName = '', mobileNumber = '', homeNumber = '', workNumber = '', relationship = '', postcode = '', addressLine1 = '', addressLine2 = '', city = '', county = '';
            firstName = $("#txtContactsFirstName" + dynamic_id);
            lastName = $("#txtContactsLastName" + dynamic_id);
            mobileNumber = $("#txtContactsMobileNumber" + dynamic_id);
            homeNumber = $("#txtContactsHomeNumber" + dynamic_id);
            workNumber = $("#txtContactsWorkNumber" + dynamic_id);
            relationship = $("#ddlContactsRelationship" + dynamic_id + " option:selected");
            postcode = $("#txtContactsPostCode" + dynamic_id);
            addressLine1 = $("#txtContactsAddressLine1" + dynamic_id);
            addressLine2 = $("#txtContactsAddressLine2" + dynamic_id);
            city = $("#txtContactsCity" + dynamic_id);
            county = $("#txtContactsCounty" + dynamic_id);
            isPrimary = $('#chkContactsIsPrimary' + dynamic_id);
            if (firstName.val().length == 0) {
                firstName.focus();
                ShowAlertMessage("Message", "Please enter first name !", "A");
                return false;
            }
            if (mobileNumber.val().length == 0) {
                mobileNumber.focus();
                ShowAlertMessage("Message", "Please enter mobile number !", "A");
                return false;
            }
            if (relationship.val() == 0) {
                relationship.focus();
                ShowAlertMessage("Message", "Please select relationship !", "A");
                return false;
            }
            if (county.val().length > 0) {
                if (postcode.val().length == 0) {
                    postcode.focus();
                    ShowAlertMessage("Message", "Please enter postal code !", "A");
                    return false;
                }
            }
            contactsData = {
                "action": 'Update',
                "row_id": dynamic_id,
                "cnd_profile": updateInfoOf,
                "cnd_id": $('.profile-id').attr('data-id'),
                "cid": contacts_update_id,
                "first_name": firstName.val(),
                "last_name": lastName.val(),
                "mobile_number": mobileNumber.val(),
                "home_number": homeNumber.val(),
                "work_number": workNumber.val(),
                "relationship": relationship.val(),
                "primary_contact": (isPrimary.is(':checked') ? 1 : 0),
                "postcode": postcode.val(),
                "address_line1": addressLine1.val(),
                "address_line2": addressLine2.val(),
                "city": city.val(),
                "country": county.val()
            }
            var strFinal = "[" + JSON.stringify(contactsData) + "]";
            ns_employee.post(strFinal, updateInfoOf, 'Update',evt);
        }
        else if (updateInfoOf.toUpperCase() == 'LOCATIONS') {
            var selectedlocations = [];
            selectedlocations = $('.chk-profile-cnd-location:radio:checked').map(function () {
                return this.value;
            }).get();
            if (selectedlocations.length == 0) {
                ShowAlertMessage("Message", "No location selected, Please select at least one!", "A");
                return false;
            }

            var locationData = {
                "action": 'Update',
                "cnd_profile": updateInfoOf,
                "cnd_id": $('.profile-id').attr('data-id'),
                "location_ids": selectedlocations,
            }
            var strFinal = "[" + JSON.stringify(locationData) + "]";

            ns_employee.post(strFinal, updateInfoOf, 'Update',evt);
        }
        else if (updateInfoOf.toUpperCase() == 'SETDEFAULTLOCATIONCND') {      
            var id = getAttribute(evt, 'id');
            var Locationid = id.split('-')[1];
            var locationData = {
                "action": 'Update',
                "cnd_profile": updateInfoOf,
                "cnd_id": $('.profile-id').attr('data-id'),
                "location_ids": Locationid,
            }
            var strFinal = "[" + JSON.stringify(locationData) + "]";         
            ns_employee.post(strFinal, updateInfoOf, 'Update', evt);
        }
        else if (updateInfoOf.toUpperCase() == 'ABSENCE') {
            var absenceType, leave, startDate, startTime, endDate, endTime, details;
            absenceType = $("#ddlAbsenceType" + dynamic_id + " option:selected");
            leave = $("input[name=rdoAbsenceLeave" + dynamic_id + "]:checked");
            startDate = $("#txtAbsenceStartDate" + dynamic_id);
            startTime = $("#txtAbsenceStartTime" + dynamic_id);
            endDate = $("#txtAbsenceEndDate" + dynamic_id);
            endTime = $("#txtAbsenceEndTime" + dynamic_id);
            details = $("#txtAbsenceDetails" + dynamic_id);
            if (absenceType.val() == 0) {
                absenceType.focus().select();
                ShowAlertMessage("Message", "Please select absence type !", "A");
                return false;
            }
            if (startDate.val().length == 0) {
                startDate.focus();
                ShowAlertMessage("Message", "Please enter start date !", "A");
                return false;
            }
            if (leave.val() == 'Partial') {
                if (startDate.val().length !== 0) {
                    var abstartDate = startDate.val();
                    var abendDate = endDate.val();
                    if (abendDate.length !== 0) {
                        abstartDate = new Date(ConvertDate(abstartDate));
                        abendDate = new Date(ConvertDate(abendDate));
                        if (+abstartDate != +abendDate) {
                            ShowAlertMessage("Message", "Absence start and end date should be equal", "A");
                            endDate.focus();
                            return false;
                        }
                    }
                    else {
                        endDate.focus();
                        return false;
                    }
                }
                if (startTime.val().length == 0) {
                    startTime.focus();
                    ShowAlertMessage("Message", "Please enter start time !", "A");
                    return false;
                }
                else if (endTime.val().length == 0) {
                    endTime.focus();
                    ShowAlertMessage("Message", "Please enter end time !", "A");
                    return false;
                }
            }
            else {
                if (startDate.val().length !== 0) {
                    var abstartDate = startDate.val();
                    var abendDate = endDate.val();
                    if (abendDate.length !== 0) {
                        abstartDate = new Date(ConvertDate(abstartDate));
                        abendDate = new Date(ConvertDate(abendDate));
                        if (+abstartDate > +abendDate) {
                            ShowAlertMessage("Message", "Absence end date should be greater", "A");
                            endDate.focus();
                            return false;
                        }
                    }
                    else {
                        endDate.focus();
                        return false;
                    }
                }
                startTime.val("00:00");
                endTime.val("23:59");
            }

            var absenceData = {
                "action": 'Update',
                "cnd_profile": updateInfoOf,
                "absence_id": dynamic_id,
                "cnd_id": $('.profile-id').attr('data-id'),
                "absence_type": absenceType.val(),
                "start_datetime": ConvertDateFormate(startDate.val()) + ' ' + startTime.val(),
                "end_datetime": ConvertDateFormate(endDate.val()) + ' ' + endTime.val(),
                "detail": details.val()
            }
            var strFinal = "[" + JSON.stringify(absenceData) + "]";
            ns_employee.post(strFinal, updateInfoOf, 'Update',evt);
        }
        else if (updateInfoOf.toUpperCase() == 'ACCOUNT-STATUS') {
            var accountStatusData = {
                "action": 'Update',
                "cnd_profile": updateInfoOf,
                "cnd_id": $('.profile-id').attr('data-id'),
                "acc_status": account_status
            }
            var strFinal = "[" + JSON.stringify(accountStatusData) + "]";          
            ns_employee.post(strFinal, updateInfoOf, 'Update',evt);
        }
    },    

    getOverviewAbsencesCalender: function (type, weekdate) {     
        $('#OverviewAbsences_placeholder').html('<div style="text-align:center; line-height:40px;width: 100%; padding:25px">Loading...<img src="/spin.gif" /></div>');
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: leaveApi + "api/v1/MyLeave?request_type=" + type + "&req_date=" + weekdate,
            headers: { 'token': Token, 'checksum': RequestChecksum,'Content-Type': 'application/json' },
            success: function (data) {
                if (data.Status == 'OK')                     
                    call_tmpl_binder(data.Response[0], '/Template/cnd_profile_tmpl.html', '#OverviewAbsences_Template', '#OverviewAbsences_placeholder');
                else 
                    $('#OverviewAbsences_placeholder').html('<div style="text-align:center; line-height:40px;width: 100%; padding:25px">Not Available</div>');

            },
            error: function (result) {
                $('#OverviewAbsences_placeholder').html('<div style="text-align:center; line-height:40px;width: 100%; padding:25px">Not Available</div>');
            }
        });
    },  

    getEmployeeAnualAbsences: function (cnd_id) {     
        $('#btnRefreahEmployeeAnualLeaves').attr('data-id', cnd_id);
        $('#EmployeeLeaveTotal_placeholder').html('<div style="text-align:center; line-height:40px;width: 100%; padding:25px">Loading...<img src="/spin.gif" /></div>');
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: leaveApi + "api/v1/MyLeave?id="+cnd_id,
            headers: { 'token': Token, 'checksum': RequestChecksum, 'Content-Type': 'application/json' },
            success: function (data) {               
                if (data.Status == 'OK') {
                    try {
                        if (data.Response.length > 0) {
                            if (data.Response[0].data.length > 0) {
                                call_tmpl_binder(data.Response[0], '/Template/cnd_profile_tmpl.html', '#EmployeeLeaveTotal_Template', '#EmployeeLeaveTotal_placeholder');

                                var total_leave = data.Response[0].data[0].annual_leave_allowance_total;                                
                                ns_employee.updateLeave(total_leave, cnd_id,'');
                            }
                            else {
                                $('#EmployeeLeaveTotal_placeholder').html('');
                                var link = 'Setup the leave by simpley clicking on <a href="/leave" class="col-green"><i class="ti ti-plus"></i> Setup Leave</a>';
                                $('#EmployeeLeaveTotal_placeholder').append('<div  style="text-align:center;width: 100%;">' + nodata(link) + '</div>');
                            }
                        }
                        else {
                            $('#EmployeeLeaveTotal_placeholder').html('');
                            var link = 'Setup the leaves by simpley clicking on <a href="/leave" class="col-green"><i class="ti ti-plus"></i> Setup Leave</a>';
                            $('#EmployeeLeaveTotal_placeholder').append('<div  style="text-align:center;width: 100%;">' + nodata(link) + '</div>');

                        }
                    }
                    catch (ex) {
                        $('#EmployeeLeaveTotal_placeholder').html('');
                        var link = 'Setup the leaves by simpley clicking on <a href="/leave" class="col-green"><i class="ti ti-plus"></i> Setup Leave</a>';
                        $('#EmployeeLeaveTotal_placeholder').append('<div  style="text-align:center;width: 100%;">' + nodata(link) + '</div>');
                    }
                }
                else {
                    $('#EmployeeLeaveTotal_placeholder').html('');
                    var link = 'Setup the leaves by simpley clicking on <a href="/leave" class="col-green"><i class="ti ti-plus"></i> Setup Leave</a>';
                    $('#EmployeeLeaveTotal_placeholder').append('<div  style="text-align:center;width: 100%;">' + nodata(link) + '</div>');

                }
            },
            error: function (result) {
                $('#EmployeeLeaveTotal_placeholder').html('<div style="text-align:center; line-height:40px;width: 100%; padding:25px">Not Available</div>');
            }
        });
    },

    UpdateEmoplyeeLeaves: function (cnd_id, buttonId) {
        var total_leave = 0;
        $('#' + buttonId).html('<img src="/spin.gif" />');
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: leaveApi + "api/v1/MyLeave?id=" + cnd_id,
            headers: { 'token': Token, 'checksum': RequestChecksum, 'Content-Type': 'application/json' },
            success: function (data) {
                $('#' + buttonId).html('(<b>' + total_leave + '</b>) Sync');
                if (data.Status == 'OK') {                   
                        if (data.Response.length > 0) {
                            if (data.Response[0].data.length > 0) {                               
                                total_leave = data.Response[0].data[0].annual_leave_allowance_total;
                                ns_employee.updateLeave(total_leave, cnd_id,'manual');
                                $('#' + buttonId).html('(<b>' + total_leave +'</b>) Sync');
                            }                            
                        }                                    
                }               
            },
           
        });
    },

    getOverview: function () {
        var param = '{"action":"get","section":"overview"}';
        var params = { json: param }
        $('#Overview_placeholder').html('<div class="text-center">Loading...<img src="/spin.gif" /></div>');
        ns_ajax.get(
            urls.employees,
            params,
            function (data) {               
                if (data.Status == 'OK') {                       
                    call_tmpl_binder(data, '/Template/cnd_profile_tmpl.html', '#Overview_Template', '#Overview_placeholder');

                    setTimeout(
                        function () {
                            ns_employee.getOverviewAbsencesCalender('current','');
                        }, 1000);
                   
                }               
            });
    },      
   
    tabAccountDeatils: function (objCndData) {
        console.log(objCndData);
        call_tmpl_binder(objCndData, '/js/Template/cnd_profile_tmpl.html', '#CndAccountDetails_Template', '#TabBasic_Placeholder');
    },   

    tabProfile: function (objContactsData) {
        call_tmpl_binder(objContactsData, '/js/Template/cnd_profile_tmpl.html', '#CndProfilInfo_Template', '#TabProfile_Placeholder');
    },

    tabContacts: function (objContactsData) {
        if (objContactsData != null)
            call_tmpl_binder(objContactsData, '/js/Template/cnd_profile_tmpl.html', '#CndContacts_Template', '#TabContacts_Placeholder');
    },

    tabTerms: function (objTermsData) {
        if (objTermsData != null) {
            call_tmpl_binder(objTermsData.Table, '/js/Template/cnd_profile_tmpl.html', '#CndTerms_Template', '#TabTerms_Placeholder');
            //here dr=default roles,dl = default locations
            ns_employee_template.bindDropdowns("dro=der-tm");
        }
    },

    tabLocations: function (objLocationsData) {
        if (objLocationsData != null) {
            if (bindLocationPopup) {
                call_tmpl_binder(objLocationsData, '/js/Template/cnd_profile_tmpl.html', '#CndPopLocations_Template', '#TabLocationsPopup_Placeholder');
                bindLocationPopup = false;
            }
            else
                call_tmpl_binder(objLocationsData, '/js/Template/cnd_profile_tmpl.html', '#CndLocations_Template', '#Locations_Placeholder');
        }
    },

    tabWorkSchedule: function (objWorkScheduleData) {
        $('#TabWorkschedule_Placeholder').html('');
        console.log(objWorkScheduleData);
        if (objWorkScheduleData != undefined)
            call_tmpl_binder(objWorkScheduleData, '/js/Template/cnd_profile_tmpl.html', '#CndWorkschedule_Template', '#TabWorkschedule_Placeholder');
        else {
            var workSchedulehtml = '<div class="table-responsive h__hgt">\
                                        <table class="table table-bordered">\
                                            <thead>\
                                                <tr>\
                                                    <th>Monday</th>\
                                                    <th>Tuesday</th>\
                                                    <th>Wednesday</th>\
                                                    <th>Thursday</th>\
                                                    <th>Friday</th>\
                                                    <th>Saturday</th>\
                                                    <th>Sunday</th>\
                                                </tr>\
                                            </thead>\
                                            <tbody>\
                                                <tr>\
                                                    <td>\
                                                        <select id="ddlWorkScheduleMonday" class="form-control" data-live-search="true">\
                                                            <option data-tokens=""  value="Working">Working</option>\
                                                            <option data-tokens=""  value="Day off">Day Off</option>\
                                                        </select>\
                                                    </td>\
                                                    <td>\
                                                        <select id="ddlWorkScheduleTuesday" class="form-control" data-live-search="true">\
                                                            <option data-tokens=""  value="Working">Working</option>\
                                                            <option data-tokens=""  value="Day off">Day Off</option>\
                                                        </select>\
                                                    </td>\
                                                    <td>\
                                                        <select id="ddlWorkScheduleWednesday" class="form-control" data-live-search="true">\
                                                            <option data-tokens=""  value="Working">Working</option>\
                                                            <option data-tokens=""  value="Day off">Day Off</option>\
                                                        </select>\
                                                    </td>\
                                                    <td>\
                                                        <select id="ddlWorkScheduleThursday" class="form-control" data-live-search="true">\
                                                            <option data-tokens="" value="Working">Working</option>\
                                                            <option data-tokens="" value="Day off">Day Off</option>\
                                                        </select>\
                                                    </td>\
                                                    <td>\
                                                        <select id="ddlWorkScheduleFriday" class="form-control" data-live-search="true">\
                                                            <option data-tokens=""  value="Working">Working</option>\
                                                            <option data-tokens=""  value="Day off">Day Off</option>\
                                                        </select>\
                                                    </td>\
                                                    <td>\
                                                        <select id="ddlWorkScheduleSaturday" class="form-control" data-live-search="true">\
                                                            <option data-tokens=""  value="Working">Working</option>\
                                                            <option data-tokens=""  value="Day off">Day Off</option>\
                                                        </select>\
                                                    </td>\
                                                    <td>\
                                                        <select id="ddlWorkScheduleSunday" class="form-control" data-live-search="true">\
                                                            <option data-tokens=""  value="Working">Working</option>\
                                                            <option data-tokens=""  value="Day off">Day Off</option>\
                                                        </select>\
                                                    </td>\
                                                </tr>\
                                            </tbody>\
                                        </table>\
                                        <div class="mb-5 mt-4 text-center">\
                                            <button id="btnUpdateWorkSchedule" value="Submit" class="btn btn-primary save_edt_contntn"><b>Update -&gt;</b></button>\
                                        </div>\
                                    </div>';
            $('#TabWorkschedule_Placeholder').append(workSchedulehtml);
        }

    },

    tabAbsence: function (objAbsenceData) {
        call_tmpl_binder(objAbsenceData, '/js/Template/cnd_profile_tmpl.html', '#AbsenceForm_Template', '#TabAbsenses_Placeholder');
    },

    allProfiles: function (objProfilesData, act) {
        var sr_no = 0, total_cnd = 0;
        if (objProfilesData != null) {
            if (act == 'more') {
                jQuery('#CndProfiles_Template').tmpl(objProfilesData).appendTo('#CndProfiles_Placeholder');
            }
            else
                call_tmpl_binder(objProfilesData, '/js/Template/cnd_profile_tmpl.html', '#CndProfiles_Template', '#CndProfiles_Placeholder');

            total_cnd = objProfilesData[0].total_cnd;
            $.each(objProfilesData, function (key, value) {
                sr_no = value.sr_no;
            });
        }
        else {
        
            if (act == 'more') {

            }
            else {
                $('#CndProfiles_Placeholder').empty();
                var link = 'Add a new employee by simpley clicking on <a id="btnAddNewCnd" class="col-green" data-toggle="modal" data-target="#add_internal"><i class="ti ti-plus"></i> Add Employee</a>';
                $('#CndProfiles_Placeholder').append('<tr><td colspan="12" style="text-align:center;">'+ nodata(link)+'</td></tr>');
            }
        }

        if (sr_no < total_cnd)
            $('#loadmoreEmployees').show();
        else
            $('#loadmoreEmployees').hide();
    },

    ActivityHistoryList: function () {
        $('#Activity_Placeholder').html(wait());
        var cndid = $('.profile-id').attr('data-id');
        var Param = { id: cndid };
        ns_ajax.get(
            urls.candidateApi + 'activity_employee',
            Param,
            function (data) {
                if (data.Status == 'OK') {
                    var obj = data;//jQuery.parseJSON(response.split('|')[1]);
                    call_tmpl_binder(obj, '/js/Template/cnd_profile_tmpl.html', '#Activity_Template', '#Activity_Placeholder');
                }
                else {
                    $('#Activity_Placeholder').html(empty());
                }
            });
    },

    Get_JobRole_Location: function (CtrlLocation, CtrlRole) {     
        var param = { id: '0' };
        ns_ajax.get(
            urls.rotaApi + "location",
            param,
            function (data) {         
                if (data.Status == 'OK') {               
                    var obj = data.Response;
                    var str = '';
                    //Job Role(s)  
                    if (CtrlRole !== '') {
                        str = '<option data-role-id="0" data-rate="0" value="0" >Select Role</option>';
                        $.each(obj.JobRole, function (key, value) {
                            str += "<option data-role-id='" + value.role_id + "' data-rate=" + value.cnd_custom_role_rate + " value=" + value.cnd_custom_role_id + " title='" + value.cnd_custom_role_name + "'>" + value.cnd_custom_role_alias + "</option>";
                        });
                        $(CtrlRole).html(str);
                    }
                    //Location(s)
                    if (CtrlLocation !== '') {
                        str = '<option value="0">All Locations</option>';
                        $.each(obj.Location, function (key, value) {
                            str += "<option value=" + value.emp_location_id + " title='" + value.location_address + "'>" + value.emp_location_name + "</option>";
                        });
                        $(CtrlLocation).html(str);
                        $('#ddlCndLocation').val(1).trigger('change.select2');
                        setTimeout(function () {
                            $('#ddlCndLocation').multiselect({
                                includeSelectAllOption: true
                            });
                        }, 500);
            
                      
                    }                   
                }
            });
    },

    Get_Masters: function (CtrlLocation, type) {
        var param = '{"action":"master","type":"' + type + '"}';
        var params = { json: param }
        ns_ajax.get(
            urls.employees,
            params,
            function (response) {
                if (response.split('|')[0] == 'OK') {
                    var obj = jQuery.parseJSON(response.split('|')[1]);

                    $.each(obj, function (key, value) {
                        $.each(value.ContractType, function (key, value) {
                            alert(value.jsonData);
                            //str += "<option value=" + value.emp_location_id + " title='" + value.location_address + "'>" + value.emp_location_name + "</option>";
                        });
                    });
                    var str = '';
                    //Location(s)
                    if (CtrlLocation !== '') {
                        str = '<option value="0">Select Location</option>';
                        $.each(obj.ContractType, function (key, value) {
                            alert(value.jsonData);
                            //str += "<option value=" + value.emp_location_id + " title='" + value.location_address + "'>" + value.emp_location_name + "</option>";
                        });
                        $(CtrlLocation).html(str);

                        setTimeout(function () {
                            $('#ddlEmployeeLocations').multiselect({
                                includeSelectAllOption: true
                            });

                        }, 300);

                    }
                }
            });
    },

    AddUpdateBankDetail: function (id, action) {
        var data = new FormData();
        
        var bank_account_type = $('#ddl_BankAccountType').val();
        var name = $('#txtAccountHolder').val();
        var accountnumber = $('#txtAccountNumber').val();
        var sortcode = $('#txtSortCode').val();
        var companyname = $('#txtCompanyName').val();
        var compregno = $('#txtCompanyRegNo').val();
        var fileUpload = $('#RegCertificate').get(0);
        var files = fileUpload.files;

        
        if (bank_account_type == '') {
            $('#ddl_BankAccountType').focus();
            ShowAlertMessage("Message", "Select account type", "A");
            return false;
        }
        if (name == '') {
            $('#txtAccountHolder').focus();
            ShowAlertMessage("Message", "Enter account name", "A");
            return false;
        }
        if (accountnumber == '') {
            ShowAlertMessage("Message", "Enter account number", "A");
            $('#txtAccountNumber').focus();
            return false;
        }
        if (sortcode == '') {
            ShowAlertMessage("Message", "Enter sort code", "A");
            $('#txtSortCode').focus();
            return false;
        }
        if (sortcode.length < 6) {
            ShowAlertMessage("Message", "Sortcode must be 6 characters long", "A");
            $('#txtSortCode').focus();
            return false;
        }
            data.append("FileUpload", files[0]);
        data.append("Id", id),
            
            data.append("bank_account_type", bank_account_type ),
            data.append("Name", name),
            data.append("AccountNumber", accountnumber),
            data.append("SortCode", sortcode);
            data.append("CompanyName", companyname);
            data.append("CompanyRegNo", compregno);
            data.append("cnd_id", $('.profile-id').attr('data-id'));

        ns_ajax.upload2(
            urls.complianceApi + 'cndbankdetails',
            data,
            function (response) {
                response = response.slice(1, -1);
                if (response.split('|')[0] == 'OK') {
                    ShowAlertMessage("Message", "Bank detail " + (id == 0 ? 'saved' : 'updated') + " successfully.", "C");
                    ns_employee.get('Personal-Info');
                    //var id = response.split('|')[1];
                    //var url = response.split('|')[2];
                    //if (action == 'UPDATE') {
                    //    $('#spnAccountholder-' + id).html(name);
                    //    $('#spnAccountNumber-' + id).html(accountnumber);
                    //    $('#spnSortCode-' + id).html(sortcode);
                    //    $('#spnCompanyName-' + id).html(companyname);
                    //    $('#spnCompanyRegNo-' + id).html(compregno);
                    //    $('#spnRegUrl-' + id).html('<i class="zmdi zmdi-file-text"  style="font-size: 24px;">&nbsp;</i>');
                    //    $('#spnRegUrl-' + id).attr('data-file-name', url);
                    //    $('.bdhide-' + id).hide();
                    //    $('.bdshow-' + id).show();
                    //}
                    //else {
                    //    $('.bank_add').hide();
                    //    var count = $('#Bank_Detail_Placeholder tr').length;
                    //    var lastrowSN = count > 0 ? $('#Bank_Detail_Placeholder').closest('table').find('tr:last td:first').attr('data-id') : '0';
                    //    lastrowSN++;
                    //    var obj = {};
                    //    obj.id = id;
                    //    obj.ROWNUMBER = lastrowSN;
                    //    obj.cnd_account_holder_name = name;
                    //    obj.cnd_bank_account_number = accountnumber;
                    //    obj.cnd_sort_code = sortcode;
                    //    obj.company_name = companyname;
                    //    obj.cnd_company_reg_no = compregno;
                    //    obj.cnd_reg_certificate_url = url;
                    //    call_Sub_tmpl_binder(obj, '/Template/cnd_profile_tmpl.html', '#BankDetail_footer_Template', '#BankDetail_footer_Placeholder');
                    //    $('#txtAccountHolder, #txtAccountNumber,#txtSortCode,#txtCompanyName,#txtCompanyRegNo,#RegUrl').val('');
                    //}
                }
                else
                    ShowAlertMessage("Message", response, "A");
            });

    },

    bindAgency: function (ctrl_dropdown) {
        var params = { orgIdORsecId: 0, dro: 'org' };
        ns_ajax.get(
            'api/ImportApi/',
            params,
            function (response) {
                if (response.split('|')[0] === 'OK') {
                    var serverResponse = $.parseJSON(response.split('|')[1]);

                    if (ctrl_dropdown !== '') {
                        var str = '';
                        $.each(serverResponse.dropdown_data, function (key, value) {
                            str += "<option value=" + value.Id + ">" + value.Name + "</option>";
                        });
                        $(ctrl_dropdown).html(str);                       
                    }                
                }
            }
        );
    },

    updateLeave: function (total_leave, cnd_id,action_by) {
        var JsonLeaveData = {
            "action": 'UPDATELEAVE',
            "cnd_profile": 'PROFILES',
            
            "action_by": action_by,
            "cnd_id": cnd_id,
            "total_leave": total_leave        
        }
        var params = "[" + JSON.stringify(JsonLeaveData) + "]";
      
        ns_ajax.post(
            urls.employees + 'post',
            params,
            function (response) {
                //if (response.split('|')[0] == "OK") {
                //    ShowAlertMessage("Message", 'Updated', "A");
                //}
            });
    }
}

ns_employee_template = {
    bindDropdowns: function (params) {
        ns_ajax.get(
            urls.employeesApi,
            params,
            function (data) {               
                if (data.Status === 'OK') {
                    var serverResponse = data.Response;
                    if (cnd_profile_block.toUpperCase() == 'ABSENCES') {
                        $("#modalAbsenceddlAbsenceType").empty();
                        $("#modalAbsenceddlAbsenceType").append($('<option/>', {
                            value: 0,
                            text: "All Absences"
                        }));
                        $.each(serverResponse.absences, function (key, value) {
                            $('#modalAbsenceddlAbsenceType').append($('<option/>', {
                                value: this.Id,
                                text: this.Name
                            }));
                        })
                    }
                    else if (cnd_profile_block.toUpperCase() == 'ALL-ABSENCES') {
                        $("#ddlAbsenceType" + dynamic_id).empty();
                        $("#ddlAbsenceType" + dynamic_id).append($('<option/>', {
                            value: 0,
                            text: "All Absences"
                        }));
                        $.each(serverResponse.absences, function (key, value) {
                            $("#ddlAbsenceType" + dynamic_id).append($('<option/>', {
                                value: this.Id,
                                text: this.Name
                            }));
                        })

                        $("#ddlAbsenceType" + dynamic_id + " option[value=" + absence_id + "]").attr('selected', 'selected');
                        $(".btn-update-absence").removeAttr('disabled');

                    }
                    else if (cnd_profile_block.toUpperCase() == 'TERMS') {
                        $("#ddlTermsJobRoles").empty();
                        $("#ddlTermsJobRoles").append($('<option/>', {
                            value: 0,
                            text: "All Roles"
                        }));
                        var currentparent = "", previousparent = "";
                        $.each(serverResponse.roles, function (key, value) {
                            currentparent = value.parent_id;
                            var color = (value.color_code == '' || value.color_code == null) ? '#ccc' : value.color_code;
                            if (previousparent == "" || currentparent != previousparent) {
                                $('#ddlTermsJobRoles').append($("<optgroup style='font-weight:bold;background-color:#ccc;' label='" + value.parent_name + "' id='" + value.parent_id + "'></optgroup>"));
                                previousparent = value.parent_id;
                            }
                            if (value.role_id != value.parent_id)
                                $('#ddlTermsJobRoles').append($("<option style='color:" + color + ";'></option>").val(value.role_id).html(value.role_name));
                        })
                        // set selected index of terms job role
                        $('#ddlTermsJobRoles option[value=' + $('#ddlTermsJobRoles').attr('data-selected-id') + ']').prop('selected', true)


                        // Cnd Working Pattern
                        ns_WorkingPattern.FillDropdownWithPatternList('#ddlWorkingTimePattern', 0);

                        $("#ddlTermsTeam").empty();
                        $("#ddlTermsTeam").append($('<option/>', {
                            value: 0,
                            text: "All Teams"
                        }));
                        $.each(serverResponse.teams, function (key, value) {
                            $('#ddlTermsTeam').append($('<option/>', {
                                value: this.Id,
                                text: this.Name
                            }));
                        })
                        // set selected index of terms team
                        $('#ddlTermsTeam option[value=' + $('#ddlTermsTeam').attr('data-selected-id') + ']').prop('selected', true);

                        // Cnd autocomplete
                        fn_autocomplete('txtTermsReportTo', 'cnd', 'txt-terms-report-to');

                    }
                    else {
                        $(".clearText").val('');
                        $("#ddlCndJobRole").empty();
                        $("#ddlCndJobRole").append($('<option/>', {
                            value: 0,
                            text: "Select Role"
                        }));
                        var currentparent = "", previousparent = "";
                        $.each(serverResponse.eroles, function (key, value) {
                            /*currentparent = value.parent_id;*/
                            var color = '#000';// (value.color_code == '' || value.color_code == null) ? '#ccc' : value.color_code;
                            //if (previousparent == "" || currentparent != previousparent) {
                            //    $('#ddlCndJobRole').append($("<optgroup style='font-weight:bold;background-color:#ccc;' label='" + value.parent_name + "' id='" + value.parent_id + "'></optgroup>"));
                            //    previousparent = value.parent_id;
                            //}
                            //if (value.role_id != value.parent_id)
                                $('#ddlCndJobRole').append($("<option style='color:" + color + ";'></option>").val(value.role_id).html(value.role_name));
                        })

                        $("#ddlCndLocation").empty();
                        if (serverResponse.locations.length > 0) {
                            //$("#ddlCndLocation").append($('<option/>', {
                            //    value: 0,
                            //    text: "None"
                            //}));
                            $('#ddlCndLocation').val(1).trigger('change.select2');
                            $.each(serverResponse.locations, function (key, value) {
                                $('#ddlCndLocation').append($('<option/>', {
                                    value: this.Id,
                                    text: this.Name
                                }));
                            });
                           
                        }
                    }
                }
            }
        );
    },
}

$(document).ready(function () {
    $(document).on('click', '.cls-docs-action', function (e) {
        var action = $(this).attr('data-action');
        if (action == 'edit' || action == 'upload' || action == 'reupload') {
            var dataDocJson = $(this).attr('data-doc-json');
            $('.documentation_view').hide(300);
            $('.documentation_edit').show(300);
            var add_more_status = 0;
            dataDocJson = dataDocJson == "" ? null : jQuery.parseJSON(dataDocJson);
            ns_compliance.EditDoc(dataDocJson, add_more_status);
        }
        if (action == 'edit-view') {
            var dataDocJson = $('#' + $(this).attr('id')).attr('data-doc-json');
            $('#btnsavedocument').attr('add_more_status', '0');
            $('.documentation_view').hide(300);
            $('.documentation_edit').show(300);
            var add_more_status = 0;
            dataDocJson = dataDocJson == "" ? null : jQuery.parseJSON(dataDocJson);
            ns_compliance.EditDoc(dataDocJson, add_more_status);
            $('#modalComplanceDetails').modal('hide');
            $(".modal-backdrop").css('display', 'none');
        }
        if (action == 'deletefile') {
            var filepath = $(this).attr('data-path');
            var uid = $(this).attr('data-uid');
            var jsonData = {
                "action": action,
                "section": "cndactions",
                "cnd_id": $('.profile-id').attr('data-id'),
                "uid": uid,
                "filepath": filepath
            }
            var param = "[" + JSON.stringify(jsonData) + "]";
            ns_compliance.post(param, action, e);
        }
        if (action == 'upload_more') {
            var cat_id = $(this).attr('data-cat_id');
            var doc_name = $(this).attr('data-doc_name');

            $('.documentation_view').hide(300);
            $('.documentation_edit').show(300);
            var add_more_status = 1;
            var OtherfileJson = '{"cat_id":' + cat_id + ',"doc_id":0,"sort_order":0,"required_status":0,"doc_cat_uid":"","doc_name":"' + doc_name + '","doc_desc":"","required_issue_date":1,"required_expiry_date":1,"required_doc_number":1,"required_other_input":1,"doc_help_desc":"","doc_no":"","doc_uid":"","doc_custom_name":"' + doc_name + '","doc_issue_date":"","doc_expiry_date":"","doc_path":"[]","add_more":"1"}';
            ns_compliance.EditDoc(jQuery.parseJSON(OtherfileJson), add_more_status);
        }
        if (action == 'update') {
            var add_more_status = $(this).attr('add_more_status');
            var doc_custom_name = $('#txtDocNameView').val().trim();
            var doc_no = $('#txtDocNoView').val().trim();
            var doc_issue_date = $('#txtDocIssueDateView').val().trim();
            var doc_expiry_date = $('#txtDocExpiryDateView').val().trim();
            if (doc_custom_name == '') {
                ShowAlertMessage("Message", "Please enter document custom name", "A");
                $("#txtDocNameView").focus();
                return false;
            }
            else if (add_more_status == '1' && attchFile_IdCounter == 0) {
                ShowAlertMessage("Message", "Browse the file and attach to upload", "A");
                return false;
            }
            else {
                var add_to_master_status = 0;
                add_to_master_status = $('#chkAddtoMasterList').prop('checked') ? 1 : 0;

                var cat_id = $(this).attr('data-cat_id');
                var doc_id = $(this).attr('data-doc_id');
                var uid = $(this).attr('data-uid');
                var jsonData = {
                    "action": action,
                    "section": "cndactions",
                    "cnd_id": $('.profile-id').attr('data-id'),
                    "cat_id": cat_id,
                    "doc_id": doc_id,
                    "uid": uid,
                    "doc_custom_name": doc_custom_name,
                    "doc_no": doc_no,
                    "doc_issue_date": doc_issue_date,
                    "doc_expiry_date": doc_expiry_date,
                    "add_more_status": add_more_status,
                    "add_to_master_status": add_to_master_status,
                    "doc_files": arrDocAttachFiles_Data
                }

                var param = "[" + JSON.stringify(jsonData) + "]";
                ns_compliance.post(param, action, e);
            }
        }
        if (action == 'view') {
            var uid = $(this).attr('data-uid');
            if (uid !== '') {
                var doname = $(this).attr('data-docname');              
                ns_compliance.get(action, e, uid);
                $('#docFilename').html(doname);
                $('#modalComplanceDetails').modal();
            }
            else
                ShowAlertMessage("Message", "Please first upload the document.", 'A');
        }
        if (action == 'verify') {
            if ($('input[name="rdoAprovalStatus"]:checked').length == 0) {
                ShowAlertMessage("Message", "Please select status", "A");
                $("#rdoApprove").focus();
                return false;
            }
            else {
                var docStatus = $('input[name="rdoAprovalStatus"]:checked').val();
                var comments = $('#txtDocCommentsView').val().trim();
                var uid = $(this).attr('data-uid');
                var jsonData = {
                    "action": action,
                    "section": "cndactions",
                    "cnd_id": $('.profile-id').attr('data-id'),
                    "uid": uid,
                    "status": docStatus,
                    "comments": comments
                }
                var param = "[" + JSON.stringify(jsonData) + "]";
                ns_compliance.post(param, action, e);
            }
        }
        if (action == 'viewfile') {
            var extension = $(this).attr('data-extension');
            var url = $(this).attr('data-url');
            ns_compliance.viewFile(extension, url);
        }
        if (action == 'download_file') {
            var dowloaduri = $('#iframedocfile').attr('data-download-url');
            window.open(dowloaduri);
            return false;
        }
    });
    $(document).on('click', '.clsChkUploadedDocs', function () {
        var flag = $(this).prop('checked');
        var action = $(this).attr('data-action');
        if (action == "OTA") {
            var docStatusId = $(this).attr('data-doc-status');

            $('.clsOta-' + docStatusId).each(function () {
                var doc_name = $(this).attr('id');
                var status = $(this).attr('data-status');
                if (!(status == 'PENDING') && (flag == true))
                    $('#' + doc_name).prop('checked', true);
                else
                    $('#' + doc_name).prop('checked', false);
            });
        }
        else {
            var docId = $(this).attr('data-doc-id');
            $('.clsAdd-' + docId).each(function () {
                var doc_name = $(this).attr('id');
                var status = $(this).attr('data-status');
                if (!(status == 'PENDING') && (flag == true))
                    $('#' + doc_name).prop('checked', true);
                else
                    $('#' + doc_name).prop('checked', false);
            });
        }

    });
    $(document).on('click', '#btnViewAllUploadedDocs', function () {
        var length = $('.clsViewAllUploadedDocs:checked').length;
        if (length == 0) {
            ShowAlertMessage("Message", "Select atleast one document to view", 'A');
            ModalHide('#modalViewAllDocs');
        }
        else {
            $('#modalViewAllDocs').modal('show');
            var StrFileIds = new Array();
            $('.clsViewAllUploadedDocs:checked').each(function () {
                var fileId = $(this).attr('data-file-id');
                var verifyStatus = $(this).attr('data-status');
                StrFileIds.push(fileId);
            });
            ns_CompliancesDocuments.viewAllUploadedDocs(StrFileIds);
        }
    });

    //Files
    $(document).on('click', ".file-uploader", function () {
        var index = $(this).attr('data-val');
        $("#divFileUploader" + index).css('border', 'none');
    });
    $(document).on('click', ".cls-doc-file-action", function () {
        var action = $(this).attr('data-action');
        if (action == 'add') {
            $("#divAttachedFiles, .divAttachedFiles").hide();
            $("#divFileAttachfile").show('slow');
            if (attchFile_IdCounter == 0)
                ns_compliance.addFileUploaderRow();
        }
        if (action == 'cancel') {
            $("#divFileAttachfile, .divAttachedFiles").hide();
            $("#divAttachedFiles").show('slow');
        }
    });

    $(document).on('click', ".removeTaskFile", function () {
        if (attchFile_IdCounter > 1) {
            var index = $(this).attr('data-val');
            $("#attachedFileRow" + index).remove();
            attchFile_IdCounter--;
        }
    });
    $(document).on('click', ".modal-taskfile-btn", function () {
        var action = $(this).attr('task-action');
        var actionFrom = $(this).attr('action-from');
        if (action === 'addMoreFiles') {
            if (attchFile_IdCounter == 5) {
                ShowAlertMessage("Message", "Maximum file attach limit exceeded !", "A");
                return false;
            }
            else {
                arrDocAttachFiles_Data.length = 0;
                for (i = 1; i <= attchFile_IdCounter; i++) {
                    var isRowHidden = $("#txtFileDescription" + i).attr('row-hidden');
                    if (isRowHidden == "false") {
                        var fileUploader = $("#fileUploader" + i);
                        var fileDescription = $("#txtFileDescription" + i);
                        var divFileUploader = $("#divFileUploader" + i);
                        if (fileUploader.get(0).files.length === 0) {
                            divFileUploader.css('border', '0.5px solid red');
                            ShowAlertMessage("Message", "Please select file !", "A");
                            return false;
                        }
                        if (fileDescription.val().trim() === 0) {
                            fileDescription.css('border', '0.5px solid red');
                            ShowAlertMessage("Message", "Enter file name!", "A");
                            return false;
                        }
                    }
                }
                ns_compliance.addFileUploaderRow();
            }
        }
        else if (action == "attachFiles") {
            var atFilerow = "", attachFilesData = "";
            var taskId = (actionFrom == 'taskCard' ? $(this).attr('data-val') : 0);
            arrDocAttachFiles_Data.length = 0;
            var arrTaskFiles = [], fileExt;
            var data = new FormData();
            for (i = 1; i <= attchFile_IdCounter; i++) {
                var isRowHidden = $("#txtFileDescription" + i).attr('row-hidden');
                if (isRowHidden == "false") {
                    var fileUploader = $("#fileUploader" + i);
                    var fileDescription = $("#txtFileDescription" + i);
                    var divFileUploader = $("#divFileUploader" + i);
                    if (fileUploader.get(0).files.length === 0) {
                        divFileUploader.css('border', '0.5px solid red');
                        ShowAlertMessage("Message", "Please choose file !", "A");
                        return false;
                    }
                    //Getting file size from bytes
                    var fileSize = ns_compliance.getAttachedFileSize(fileUploader.get(0).files[0].size);
                    if (fileSize == 'error') {
                        divFileUploader.css('border', '0.5px solid red');
                        ShowAlertMessage("Message", "File size should be less than or equal to 5 MB", "A");
                        return false;
                    }
                    // geting file extention here
                    fileExt = fileUploader.get(0).files[0].name.split(/[.]+/).pop();
                    arrTaskFiles.push(fileUploader.get(0).files[0]);
                    attachFilesData = { "doc_file_id": "0", "doc_file_status": "0", "doc_file_upload_date": "",  "doc_file_name": fileDescription.val(), "doc_file_extension": "." + fileExt }
                    if (fileUploader.get(0).files[0].name.split('.')[1] === ".exe") {
                        divFileUploader.css('border', '0.5px solid red');
                        ShowAlertMessage("Message", "Executeable file not alloweded", "A");
                        return false;
                    }
                    if (fileUploader.get(0).files[0].name.split('.')[1] === ".mp3" || fileUploader.get(0).files[0].name.split('.')[1] === ".mp4" || fileUploader.get(0).files[0].name.split('.')[1] === ".wav") {
                        divFileUploader.css('border', '0.5px solid red');
                        ShowAlertMessage("Message", "Music file not alloweded", "A");
                        return false;
                    }
                    if (fileDescription.val().trim() === 0) {
                        fileDescription.css('border', '0.5px solid red');
                        ShowAlertMessage("Message", "Enter file name!", "A");
                        return false;
                    }
                    arrDocAttachFiles_Data.push(attachFilesData);
                    if (actionFrom == 'taskEdit' || actionFrom == 'taskAdd') {
                        //Created attached files row to show in table
                        atFilerow += '<tr><td>' + i + '</td><td class="text-left">' + (fileDescription.val().length == 0 ? "NA" : fileDescription.val()) + '</td><td class="text-left">' + fileSize + '</td><td class="text-left">' + fileUploader.get(0).files[0].name + '</td></tr>';
                    }
                }
            }

            // converting file into base64 here
            let customJsonFiles = ns_compliance.processAllAttachedFiles(arrTaskFiles);
            customJsonFiles.then(function (promise) {
                $.each(arrDocAttachFiles_Data, function (key, attachData) {
                    attachData.doc_file_path = promise[key].base64StringFile;
                });
            });

            if (actionFrom == 'taskCard')
                ns_compliance.actions(this);
            else {
                $("#tblBodyAttachedFiles").empty();
                $("#tblBodyAttachedFiles").append(atFilerow);
                //$("#attachedFileCount").html('<b>Total Files = ' + attchFile_IdCounter + '</b>');
                $("#divFileAttachfile").hide();
                $("#divAttachedFiles, .divAttachedFiles").show('slow');
            }
        }
    });
});

ns_compliance = {
    get: function (action, evt, uid) {
        profile_Id = $('.profile-id').attr('data-id');
        var param = '{"action":"' + action + '","section":"cndactions","cnd_id":"' + profile_Id + '","uid":"' + uid + '"}';
        var params = { json: param }

        if (action == 'view')
            $('#divPreviewBodyContent_placeholder').html('<center>Loading...<img src="images/spin.gif" /></center>');
        else
            $('#TabCompliance_Placeholder').html('<div class="text-center">Loading...<img src="images/spin.gif" /></div>');

        ns_ajax.get(
            urls.employees,
            params,
            function (data) {
                if (data.Status == 'OK') {                                
                    if (action == 'view')
                        call_tmpl_binder(data.Response, '/Template/cnd_profile_tmpl.html', '#divPreviewBodyContent_Template', '#divPreviewBodyContent_placeholder');
                    else
                        call_tmpl_binder(data.Response, '/Template/cnd_profile_tmpl.html', '#CndCompliance_Template', '#TabCompliance_Placeholder');
                }
            });
    },
    post: function (params, action, evt) {
        var btnid = evt.target.getAttribute("id");
        if (action == "update")
            $('#' + btnid).html('Process...<img src="images/spin.gif" />');
        if (action == 'verify')
            $('#btnverifydocs').html('Process...<img src="images/spin.gif" />');

        ns_ajax.post(
            urls.employees + 'compliance',
            params,
            function (response) {
                if (action == "update")
                    $('#' + btnid).html('Save');
                else if (action == 'verify')
                    $('#btnverifydocs').html('Submit');

                if (response.split('|')[0] === 'OK') {
                    var objResult = jQuery.parseJSON(response.split('|')[1]);
                    if (action == 'verify') {
                        ShowAlertMessage("Message", objResult[0].result, "C");
                        ns_compliance.get('view', evt, $('#btnverifydocs').attr('data-uid'));
                        ns_compliance.get('list', evt, '');
                    }
                    else if (action == 'deletefile') {
                        ShowAlertMessage("Message", objResult[0].result, "C");
                        //alert($('#' + btnid).attr('data-path'));
                        //$('#file-').remove();  
                        ns_compliance.get('view', evt, $('#btnverifydocs').attr('data-uid'));
                    }
                    else if (action == "update") {

                        arrDocAttachFiles_Data = [];

                        //for (i = 1; i <= attchFile_IdCounter; i++) {
                        //    var isRowHidden = $("#txtFileDescription" + i).attr('row-hidden');
                        //    if (isRowHidden == "false") {
                        //        var fileUploader = $("#fileUploader" + i);
                        //        $("#txtFileDescription" + i).val('');
                        //        $("#divFileUploader" + i).val(null);                              
                        //    }
                        //}
                        attchFile_IdCounter = 0;

                        $('.documentation_edit').hide(300);
                        $('.documentation_view').show(300);
                        ShowAlertMessage("Message", objResult[0].result, "C");
                        ns_compliance.get('list', evt, '');
                    }
                    else
                        ShowAlertMessage("Message", objResult[0].result, "C");
                }
                else {
                    ShowAlertMessage("Message", response, "A");
                }
            }
        );
    },
    EditDoc: function (dataDocJson, add_more_status) {
        call_tmpl_binder(dataDocJson, '/Template/cnd_profile_tmpl.html', '#divAddEditDoc_Template', '#divAddEditDoc_Placeholder');

        setTimeout(
            function () {
                $('#btnsavedocument').attr('add_more_status', add_more_status);
            }, 300);

    },
    actions: function (e) {
        var params = "";
        var btnTitle = $(e).attr('data-title');
        var FileId = $(e).attr('data-val');
        var action = $(e).attr('task-action');
        var FileStatus = $(e).attr('task-status');
        var taskCat = $(e).attr('task-cat');
        if (taskCat == 1)
            var index = $(e).attr('data-index');
        var documentData = {
            "task_id": (action === 'delete-file' ? FileId + "," + $(e).attr('data-file') : FileId),
            "task_status": FileStatus,
            "task_category": taskCat,
            "action": action
        }
        if (btnTitle !== "UploadFiles")
            params = "[" + JSON.stringify(documentData) + "]";
        else
            params = "[" + JSON.stringify(documentData) + "]";
        ns_compliance.post(params, action, e);
    },
    viewFile: function (extension, url) {
        if (url !== "") {
            $('#iframedocfile').attr('data-download-url', url);
            if (extension == '.xls' || extension == '.xlsx' || extension == '.csv')
                $('#iframedocfile').show().attr('src', '/images/excel.png');
            else if (extension == '.doc' || extension == '.docx')
                $('#iframedocfile').show().attr('src', '/images/doc_docx.png');
            else
                $('#iframedocfile').show().attr('src', url);
        }
        else {
            $('#iframedocfile').show().attr('src', '/images/not_available.png');
        }
    },
    addFileUploaderRow: function () {
        attchFile_IdCounter++;
        var attachFileRow = '<div id="attachedFileRow' + attchFile_IdCounter + '" class="row">' +
            '<div style="padding-top: 33px;"><label ></label><label id="lblTaskFile">' + attchFile_IdCounter + '</label></div>' +
            '<div class="col-md-6" id="divFileUploader' + attchFile_IdCounter + '">' +
            '<div><label>Choose file<span>*</span></label>' +
            '<div class="input-group" style="margin-bottom:5px;">' +
            '<div class="input-group-prepend">' +
            '<span id="fileUploaderAddOn" class="input-group-text clearTextFile">Upload</span>' +
            '</div>' +
            '<div class="custom-file">' +
            '<input id="fileUploader' + attchFile_IdCounter + '"  accept="image/*,application/pdf,application/msword/,application/xlxs/,application/xlx,.txt,.docx,.doc,.zip,.rar,.mp4,.wav,.3gp" type="file" row-hidden="true" data-val="' + attchFile_IdCounter + '" class="custom-file-input file-uploader clearTextFile" aria-describedby="fileUploaderAddOn"/>' +
            '<label class="custom-file-label" for="fileUploader">Choose file</label>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-md-4">' +
            '<div><label>File Name<span></span></label><input id="txtFileDescription' + attchFile_IdCounter + '" type="text" row-hidden="false" data-val="' + attchFile_IdCounter + '" class="form-control clearTextFile" autocomplete = "off" placeholder="Enter File description"/></div>' +
            '</div>' +
            '<div class="col-md-1">' +
            '<div class="mt-4">';
        if (attchFile_IdCounter > 1) {
            attachFileRow += '<a id="btnRemoveTaskFile' + attchFile_IdCounter + '"class="btn btn-outline-danger btn-md mt-2 removeTaskFile" data-val="' + attchFile_IdCounter + '"><i class="zmdi zmdi-delete btnlgt"></i></a>';
        }
        attachFileRow += '</div></div> </div>';

        $("#divAttchFiles").append(attachFileRow);
    },
    processAllAttachedFiles: function (files) {
        return Promise.all(files.map(file => ns_compliance.genrateBase64File(file)));
    },
    genrateBase64File: function (file) {
        var reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onerror = () => { reader.abort(); reject(new Error("Error parsing file")); }
            reader.onload = function () {
                //This will result in an array that will be recognized by C#.NET WebApi as a byte[]
                let bytes = Array.from(new Uint8Array(this.result));
                //if you want the base64encoded file you would use the below line:
                let base64StringFile = btoa(bytes.map((item) => String.fromCharCode(item)).join(""));
                //Resolve the promise with your custom file structure
                resolve({
                    base64StringFile: base64StringFile,
                });
            }
            reader.readAsArrayBuffer(file);
        });
    },
    getAttachedFileSize: function formatBytes(bytes) {
        if (bytes < 1024) return bytes + " Bytes";
        else if (bytes < 1048576) return Math.round(bytes / 1024) + " KB";
        else if (bytes < 1073741824) {
            if (bytes / 1048576 > 5)
                return 'error';
            else
                return Math.round(bytes / 1048576) + " MB"
        };
    },
}

ns_Notes = {
    InsertNotes: function (ProfileId, ProfileType, TaskType, TotalRecords, Status, Action) {
        var data = new FormData();
        var NoteId = $('#btnNotesSend').attr('data-id');
        var txtNotesDesc = $("#txtNotesDesc").val();
        var fileUpload = $('#fileupload').get(0);
        var files = fileUpload.files;
        var AddToTask = $('#ChkAddTask').prop('checked') ? '1' : '0';
        var ddlReason = $("#ddlNotesReason").val();
        var ddlRemind = $("#ddlNotesRemindMe").val();
        if (txtNotesDesc == '') {
            $("#txtNotesDesc").focus();
            ShowAlertMessage("Message", "Enter description", "A");
            return false;
        }
        if (AddToTask == 1) {
            if (ddlReason == '') {
                $("#ddlNotesReason").focus();
                ShowAlertMessage("Message", "Select a reason", "A");
                return false;
            }
            if (ddlRemind == '') {
                $("#ddlNotesRemindMe").focus();
                ShowAlertMessage("Message", "Select from remind me", "A");
                return false;
            }
        }
        //for (var i = 0; i < files.length; i++) {
        data.append("FileUpload", files[0]);
        data.append("NoteId", NoteId),
            data.append("ProfileType", ProfileType),
            data.append("ProfileId", ProfileId),
            data.append("Notes", txtNotesDesc);
        data.append("Reason", ddlReason);
        data.append("TaskTitle", $("#txttasktitle").val());
        data.append("TaskRepeat", ddlRemind);
        data.append("OnDate", $("#txtNoteOnDate").val());
        data.append("UtilDate", $("#txtNoteUtilDate").val());
        data.append("Ontime", $("#txtNoteOnTime").val());
        data.append("Utiltime", $("#txtNoteUtilTime").val());
        data.append("TaskType", TaskType);
        data.append("AddToTask", AddToTask);
        // }
        ns_ajax.upload(
            'Candidate/InsertNotes',
            data,
            function (response) {
                if (response.split('|')[0] == 'OK') {
                    ShowAlertMessage("Message", (NoteId == '0' ? 'Notes has been created successfully' : 'Notes has been updated sucessfully'), "C");
                    ns_Notes.Clear();
                    ns_Notes.DisableControl();
                    ns_Notes.GetNotes(ProfileId, ProfileType, TotalRecords, Status, Action);
                }
                else
                    ShowAlertMessage("Message", response, "A");
            });
    },

    GetNotes: function (ProfileId, ProfileType, TotalRecord, Status, Action) {
        $('.clsNotesDetails').html('');
        var param = { ProfileId: ProfileId, ProfileType: ProfileType, TotalRecord: TotalRecord, DeleteStatus: Status };
        ns_ajax.get(
            'Candidate/GetNotesDetails',
            param,
            function (response) {
                if (response.split('|')[0] === 'OK') {
                    var obj = jQuery.parseJSON(response.split('|')[1]);
                    var str = '';
                    var cls = (Action == 'LIST' ? 'RemoveEdit' : '');
                    $.each(obj, function (key, value) {
                        $('#spnNotesActive').html(value.active);
                        $('#spnNotesDelete').html(value.deleted);
                        var btnNotesFile = value.file_path == '' ? '' : '<a class="btn btn-primary pop"><img id="imgNotesFile-' + value.note_id + '" src="/NotesFile/' + value.file_path + '" style="height: 50px;width: 75px;display:none;" /><i class="zmdi zmdi-file">&nbsp;</i>File</a>';


                        str += '<div  id="divNote-' + value.note_id + '" class="div-chat clearfix p-b-0">' +
                            '<img src="/images/profile.jpg" alt="avatar" class="img-responsive rounded-circle img" />' +
                            '<div class="about" style="margin-bottom:0px">' +
                            '<div class="name">' +
                            '<b class="col-blue">' + value.name + '</b>&nbsp;' +
                            //<em class="col-green">sent the proposal </em>
                            '<small><b class="col-grey ml-1">' + value.time + '</b></small>' +
                            '<span class="float-right"><a id="btnEditNotes-' + value.note_id + '" class="h_over btnEditNotes ' + cls + '" title="Edit" ><i class="zmdi zmdi-edit text-primary"></i></a>' +
                            '&nbsp;&nbsp;<a id="btnDeleteNotes-' + value.note_id + '" class="h_over ml-2 rmv btnDeleteNotes" title="Delete"><i class="zmdi zmdi-delete col-red"></i></a>' +
                            '</span>' +
                            '</div>' +
                            '<div class="noteshow"><span id="spnNotesDesc-' + value.note_id + '">' + value.notes + '</span>&nbsp;' + btnNotesFile + '</div>' +
                            '</div>' +
                            '</div>' +
                            '<hr  id = "hrNote-' + value.note_id + '" style="border: 1px solid #e9e4e4;" />';
                    });
                    if (Action == 'POP') $('.clsNotesDetails').html(str);
                    if (Action == 'SHORTNOTES') $('.clsShortNotes').html(str);
                    if (Action == 'LIST') {
                        $('.clsNotesList').html(str);
                        if (Status == 1) $('.RemoveEdit').hide();
                    }
                }
                else {
                    //ShowAlertMessage("Error !", response, "A");
                    var msg = 'Not Available !';
                    if (Action == 'POP') $('.clsNotesDetails').html(msg);
                    if (Action == 'SHORTNOTES') $('.clsShortNotes').html(msg);
                    if (Action == 'LIST') $('.clsNotesList').html(msg);
                    $('#spnNotesActive').html('0');
                    $('#spnNotesDelete').html('0');
                }
            }
        );
    },

    ChangeNoteStatus: function (NoteId, ProfileId, ProfileType, TotalRecords, Status, Action) {
        var param = '{NoteId: "' + NoteId + '",Status: "' + Status + '" }';
        ns_ajax.post(
            'Candidate/ChangeNoteStatus',
            param,
            function (response) {
                if (response.split('|')[0] == 'OK') {
                    ShowAlertMessage("Message", 'Action has been processed successfuly.', "C");
                    $('#divNote-' + NoteId).remove();
                    $('#hrNote-' + NoteId).remove();

                    //ns_Notes.GetNotes(ProfileId, ProfileType, TotalRecords, Status, Action);
                }
                else
                    ShowAlertMessage("Message", response, "A");
            });
    },

    Clear: function () {
        $("#txtNotesDesc").val('');
        $("#ddlNotesReason").val('');
        $("#txttasktitle").val('');
        $("#ddlNotesRemindMe").val('');
        $("#txtNoteOnDate").val('');
        $("#txtNoteUtilDate").val('');
        $("#txtNoteOnTime").val('');
        $("#txtNoteUtilTime").val('');
        $('#ChkAddTask').prop('checked', false);
        $('#btnNotesSend').attr('data-id', '0');
    },

    EnableControl: function () {
        $("#divTitle").show('slow');
        $("#divRemind").show('slow');
        $("#divOndate").show('slow');
        $("#divUtildate").show('slow');
        $('#btnAddNotes').show('slow');
        $('#btnCloseNotes').show('slow');
    },

    DisableControl: function () {
        $("#divTitle").hide('slow');
        $("#divRemind").hide('slow');
        $("#divOndate").hide('slow');
        $("#divUtildate").hide('slow');
        $('#btnAddNotes').hide('slow');
        $('#btnCloseNotes').hide('slow');
        $('#ChkAddTask').prop('checked', false);
    },

    NotesStringPattern: function () {
        var str = '';
        var Reason = $('#ddlNotesReason').val();
        var Remind = $('#ddlNotesRemindMe').val();
        var OnDate = $('#txtNoteOnDate').val();
        var OnTime = $('#txtNoteOnTime').val();
        var UtilDate = $('#txtNoteUtilDate').val();
        var UtilTime = $('#txtNoteUtilTime').val();
        if (Reason != '') str += Reason + ' ';
        if (Remind != '') str += Remind + ' ';
        if (OnDate != '') str += OnDate + ' ';
        if (OnTime != '') str += OnTime + ' ' + ' Until' + ' ';
        if (UtilDate != '') str += UtilDate + ' ';
        if (UtilTime != '') str += UtilTime + ' ';
        $('#txtNotesDesc').val(str.trim());
    },

    SetValue: function (ProfileId, ProfileType, Role, Name) {
        $('#spnNotesProfileId').html(ProfileId);
        $('#spnProfileType').html(ProfileType);
        $('#btnCreateNewNotes').attr('data-id', ProfileId);
        $('#btnCreateNewNotes').attr('data-role', Role);
        $('#btnCreateNewNotes').attr('data-name', Name);
        $('#spnNotesProfileName').html(name);
        $('#spnNotesTimeAndRole').html(GetCurrentTime() + '&nbsp;IST' + '&nbsp;<b class="col-green">' + Role + ' </b>');
        ns_Notes.GetNotes(ProfileId, ProfileType, 2, 0, 'SHORTNOTES');
    },
}

ns_admin_user_profile = {
    update_password: function () {
        var txtCurrentPassword = $('#txtCurrentPassword').val();
        var txtNewPassword = $('#txtNewPassword').val();
        var txtConfirmPassword = $('#txtConfirmPassword').val();
        if (txtCurrentPassword == '') {
            $("#txtCurrentPassword").focus();
            ShowAlertMessage("Message", "Enter current password", "A");
            return false;
        }
        if (txtNewPassword == '') {
            $("#txtNewPassword").focus();
            ShowAlertMessage("Message", "Enter New password", "A");
            return false;
        }
        if (txtNewPassword !== '' && txtNewPassword.length < 6) {
            $("#txtNewPassword").focus();
            ShowAlertMessage("Message", "New password should be minimum six charactor long", "A");
            return false;
        }
        if (txtConfirmPassword == '') {
            $("#txtConfirmPassword").focus();
            ShowAlertMessage("Message", "Enter Confirm password", "A");
            return false;
        }
        if (txtNewPassword == txtConfirmPassword) {
            var Param = "{ password: '" + txtCurrentPassword + "',NewPassword:'" + txtNewPassword + "'}";
            ns_ajax.post(
                'Home/UpdatePassword',
                Param,
                function (response) {
                    if (response == 'OK') {
                        ShowAlertMessage("Message", "Password update successfully.", "C");
                        $('#txtCurrentPassword').val('');
                        $('#txtNewPassword').val('');
                        $('#txtConfirmPassword').val('');
                    }
                    else {
                        ShowAlertMessage("Message", "Sorry ! Please try again.", "A");
                    }
                });
        }
        else
            ShowAlertMessage("Message", "New password and confirm password are not matched.", "A");
    },
    get_user_profile_detail: function () {
        ns_ajax.get(
            'Home/GetUserProfileDetail',
            '',
            function (response) {
                if (response.split('%')[0] == 'OK') {
                    var obj = jQuery.parseJSON(response.split('%')[1]);
                    var objloginhistory = jQuery.parseJSON(response.split('%')[2]);
                    var StrVal = '', i = 0;
                    $.each(obj, function (key, value) {
                        $('#spnorg').html(value.org_name);
                        $('#spnrolename').html(value.role_name);
                        $('#spnusername').html(value.first_name + ' ' + value.last_name);
                        $('#spnuserrole').html(value.role_name);
                        $('#spnfirstname').html(value.first_name);
                        $('#spnlastname').html(value.last_name);
                        $('#spnwebsite').html(value.website);
                        $('#spnemail').html(value.email);
                        $('#spnmobile').html(value.mobile);
                        $('#spnpostcode').html(value.postcode);
                        // $('#imglogo').attr('src', value.org_logo); 
                        $('#spnlastlogin').html(value.last_login_date);
                        //  $('#spnbrowser').html(value);
                        $('#spnipaddress').html(value.login_from_ip_address);
                        $('#spnaemail').html(value.email);
                    });

                    $.each(objloginhistory, function (key, value) {
                        i++;
                        StrVal += '<tr>' +
                            '<td>' + i + '</td>' +
                            '<td>' + (value.user_id == 1 ? 'Admin' : '') + '</td>' +
                            '<td class="col-blue">' + 'Admin User' + '</td>' +
                            '<td class="col-grey">' + '<i class="zmdi zmdi-calendar">&nbsp;</i>' + value.login + '</td>' +
                            '<td class="col-brown">' + value.ip + '</td>' +
                            '<td>' + value.browser + '</td>' +
                            '</tr>';
                    });
                    $('.tblloginhistory').html(StrVal);
                }
                else {
                    $('.tblloginhistory').html('');
                    ns_admin_user_profile.Clear();
                }
            });
    },
    Clear: function () {
        $('#spnorg').html('');
        $('#spnrolename').html('');
        $('#spnfirstname').html('');
        $('#spnlastname').html('');
        $('#spnwebsite').html('');
        $('#spnemail').html('');
        $('#spnmobile').html('');
        $('#spnpostcode').html('');
        // $('#imglogo').attr('src', ''); 
        $('#spnlastlogin').html('');
        //  $('#spnbrowser').html('');
        $('#spnipaddress').html('');
        $('#spnaemail').html('');
    },
}


ns_ComplianceSettings = {
    name: 'Add Documnets',
    InsertUpdateDocData: function () {
        var obj = {};
        obj.DocCategory = "C";
        obj.DocId = $('#btnSubmitDocData').attr('data-docid');
        obj.DocName = $('#txtDocumentName').val().trim();
        obj.DocDesc = $('#txtDocDescription').val().trim();
        obj.ParentId = $('#ddlParent').val();
        obj.DocIssueCountryStatus = $('#chkDocIssueCounStatus').prop('checked') ? '1' : '0';
        obj.DocRequiredIssueCountry = $('#txtDocRequiredIssueCountry').attr('data-countryid');
        obj.DefaultStatus = $('#chkDefaultStatus').prop('checked') ? '1' : '0';
        obj.InputType = $('#chkInputType').prop('checked') ? '1' : '0';
        obj.IsAdditional = $('#chkIsAdditional').prop('checked') ? '1' : '0';

        var msg = '', flag = 0;
        if (obj.DocCategory == "") {
            flag = 1;
            msg = "Select document category";
            $('#ddlDocCategory').focus();
        }
        else if (obj.DocName == "") {
            flag = 1;
            msg = "Enter document name";
            $('#txtDocumentName').focus();
        }
        else if (obj.DocDescription == "") {
            flag = 1;
            msg = "Enter document description";
            $('#txtDocDescription').focus();
        }
        else if (($('#chkDocIssueCounStatus').prop('checked')) && (obj.DocRequiredIssueCountry == 0)) {
            flag = 1;
            msg = "Enter a document required issue country name";
            $('#txtDocRequiredIssueCountry').focus();
        }

        else
            flag = 0;
        if (flag == 0) {
            try {
                ns_ajax.post(
                    "ComplianceSettings/InsertUpdateDocData",
                    obj,
                    function (response) {
                        if (response.split('|')[0] == "OK") {
                            ShowAlertMessage("Message", "Document data submitted successfully !", 'C');
                            //$('#modalAddDocument').modal('hide');
                            ns_ComplianceSettings.Reset();
                            ns_ComplianceSettings.FillParentType();
                            ns_ComplianceSettings.getAllDocDetails();
                        }
                        else
                            ShowAlertMessage("Message", response, 'A');
                    });
            }
            catch (error) {
                ShowAlertMessage("Error", err, 'A');
            }
        }
        else
            ShowAlertMessage("Message", msg, 'A');
    },
    getAllDocDetails: function () {
        var strVal = $('#txtSearchDoc').val().trim();
        var param = { strVal: strVal, PageNumber: PageNumber, PageSize: PageSize };
        ns_ajax.get(
            "ComplianceSettings/SelectAllDocuments",
            param,
            function (response) {
                if (response.split('|')[0] == 'OK') {
                    var obj = jQuery.parseJSON(response.split('|')[1]), row = '';
                    var counter = 0, rownumberFirst = 1, rownumberLast = 0;
                    $.each(obj, function (key, value) {
                        var id = value.doc_id, status = value.doc_status;
                        var strStatus = '<a id= "docStatus-' + id + '" data-status="' + status + '" class="btn btn-sm ChangeDocStatus ' + (status == 1 ? "btn-success" : "btn-warning") + '"><i class="zmdi ' + (status == 1 ? 'zmdi-check-all' : 'zmdi-money-off') + '"></i>' + (status == 1 ? '&nbsp&nbspActive&nbsp' : 'Inactive') + '</a>';
                        var strEdit = '<a id="editDoc-' + id + '" class="btn btn-outline-primary btn-sm EditDocument" data-toggle="tooltip" title="edit"><i class="zmdi zmdi-edit"></i></a>';
                        row += '<tr id="deleteDoc-' + id + '" class="capitalize">';
                        row += '<td><strong>' + value.RowNumber + '</strong></td>';
                        if (value.parent_id == 0)
                            row += '<td><span class="col-blue"><b>' + value.doc_name + '</b></span></td>';
                        else
                            row += '<td><span class="col-blue"><b>' + value.doc_name + '</b><br/><small>(' + value.parent + ')</small></span></td>';
                        row += '<td><span><b>' + (value.doc_category == 'C' ? 'Candidate' : 'NA') + '</b></span></td>' +
                            '<td><div class="capitalize tdmwidth nowrap col-grey"><b>' + value.doc_desc + '</b></div></td>' +
                            '<td class="text-center"><span class="' + (value.doc_issue_country_status == 1 ? 'col-green' : 'col-red') + '"><b>' + (value.doc_issue_country_status == 1 ? 'Required' : 'Not Required') + '</b></span></td>' +
                            '<td><span><b>' + (value.doc_required_issue_country > 0 ? value.country_name : '') + '</b></span></td>' +
                            '<td><span><b>' + (value.input_type == 1 ? 'Number' : 'Text') + '</b></span></td>' +
                            '<td class="text-center"><span class="' + (value.doc_additional == 1 ? 'col-green' : 'col-red') + '"><b>' + (value.doc_additional == 1 ? 'Yes' : 'No') + '</b></span></td>' +
                            '<td><span class="col-grey"><i class="zmdi zmdi-calendar">&nbsp;</i><b>' + value.create_date + ' </b></span></td>' +
                            '<td>' + strStatus + '</td>';

                        row += '<td>' + strEdit +
                            '<a id="delete-' + id + '"  class="ion btn btn-outline-danger btn-sm DeleteDocument" data-toggle="tooltip" title="delete">' +
                            '<div class="lid"></div>' +
                            '<div class="lidcap"></div>' +
                            '<div class="bin"></div></a></td>';
                        row += '</tr>';

                        //paging

                        totalCount = value.total_count;
                        if (counter == 0)
                            rownumberFirst = value.RowNumber;
                        else
                            rownumberLast = value.RowNumber;
                        counter++;
                        if (counter == 1)
                            rownumberLast = value.RowNumber;

                        if (PageNumber == 1) {
                            $(".btnPrev").addClass('a-disabled');
                            $(".btnPrev").removeClass('a-enabled');
                        }
                        else {
                            $(".btnPrev").addClass('a-enabled');
                            $(".btnPrev").removeClass('a-disabled');
                        }
                        if (rownumberLast == totalCount) {
                            $(".btnNext").addClass('a-disabled');
                            $(".btnNext").removeClass('a-enabled');
                        }
                        else {
                            $(".btnNext").addClass('a-enabled');
                            $(".btnNext").removeClass('a-disabled');
                        }
                    });

                    $('.tbodyDocMaster').html(row);
                    $('.spanUnreadMsgCount').html("<b>" + rownumberFirst + " - " + rownumberLast + "</b> of <b>" + totalCount + "</b>");
                }
                else {
                    $('.tbodyDocMaster').html("<tr><td colspan='10'><center>" + response + "</center></td></tr>");
                    $('.spanUnreadMsgCount').html('');
                }
            });
    },
    EditDocDetails: function (DocId) {
        var param = { DocId: DocId };
        try {
            ns_ajax.get(
                "ComplianceSettings/SelectDocument",
                param,
                function (response) {
                    if (response.split('|')[0] == "OK") {
                        var obj = jQuery.parseJSON(response.split('|')[1]), output = "", ParentId = 0;
                        $.each(obj, function (key, value) {
                            $('#txtDocumentName').val(value.doc_name.trim());
                            $('#txtDocDescription').val(value.doc_desc.trim());
                            $('#chkDocIssueCounStatus').prop('checked', (value.doc_issue_country_status == 1 ? 'checked' : ''));
                            if ($('#chkDocIssueCounStatus').prop('checked'))
                                $('#txtDocRequiredIssueCountry').show().val(value.country_name).attr('data-countryid', value.doc_required_issue_country);
                            else
                                $('#txtDocRequiredIssueCountry').hide().val('').attr('data-countryid', '0');

                            ParentId = value.parent_id;
                            $('#chkIsParent').prop('checked', (ParentId > 0 ? 'checked' : ''));
                            $('#chkDocStatus').prop('checked', (value.doc_status == 1 ? 'checked' : ''));
                            $('#chkInputType').prop('checked', (value.input_type == 1 ? 'checked' : ''));
                            $('#chkIsAdditional').prop('checked', (value.doc_additional == 1 ? 'checked' : ''));

                            $('#btnSubmitDocData').attr('data-docid', value.doc_id);
                            $('#chkDefaultStatus').prop('checked', (value.default_status == 1 ? 'checked' : ''));
                        });
                        $('#chkIsParent').prop('checked') ? ($('#ddlParent').show().val(ParentId)) : ($('#ddlParent').hide().val(''));
                    }
                    else
                        ShowAlertMessage("Message", response, 'A');
                });
        }
        catch (err) {
            ShowAlertMessage("Error", err.message, 'A');
        }
    },
    ChangeDocStatus: function (DocId, status) {
        if (status == 1)
            status = 0;
        else
            status = 1;
        var param = "{ DocId: '" + DocId + "', Status: '" + status + "' }";
        try {
            ns_ajax.post(
                "ComplianceSettings/ChangeDocStatus",
                param,
                function (response) {
                    if (response == "OK") {
                        $('#docStatus-' + DocId).attr('data-status', status);
                        if (status == 1)
                            $('#docStatus-' + DocId).addClass("btn-success").removeClass("btn-warning");
                        else
                            $('#docStatus-' + DocId).addClass("btn-warning").removeClass("btn-success");
                        $('#docStatus-' + DocId).html((status == 1 ? '<i class="zmdi zmdi-check-all"></i>&nbsp&nbspActive&nbsp' : '<i class="zmdi zmdi-money-off"></i>Inactive'));
                        ShowAlertMessage("Message", "Status has been changed successfully", 'C');
                    }
                    else
                        ShowAlertMessage("Message", response, 'A');
                });
        }
        catch (err) {
            ShowAlertMessage("Exception", err.message, 'A');
        }
    },
    DeleteDocument: function (id, status) {
        if (status == 1) {
            Toast_Warning("Warning", "Active status can not be deleted");
            return false;
        }
        var param = "{ DocId: '" + id + "' }";
        try {
            ns_ajax.post(
                "ComplianceSettings/DeleteDocument",
                param,
                function (response) {
                    if (response.split('|')[0] == "OK") {
                        ShowAlertMessage("Message", "Document deleted successfully", 'C');
                        $("#deleteDoc-" + id).hide();
                    }
                    else
                        ShowAlertMessage("Message", response, 'A');
                });
        }
        catch (err) {
            ShowAlertMessage("Error", err.message, 'A');
        }
    },
    FillCountryLists: function () {
        $("#txtDocRequiredIssueCountry").autocomplete({
            minLength: 0,
            source: function (request, response) {
                ns_ajax.get(
                    "ComplianceSettings/FillCountryLists",
                    { CountyVal: request.term },
                    function (data) {
                        if (data.split('|')[0] == "OK") {
                            var obj = jQuery.parseJSON(data.split('|')[1]);
                            response($.map(obj, function (item) {
                                return {
                                    label: item.country_name,
                                    val: item.id
                                }
                            }))
                        }
                    });
            },
            select: function (e, i) {
                var id = i.item.val;
                $('#txtDocRequiredIssueCountry').attr('data-countryid', id);
                $('#txtDocRequiredIssueCountry').val($(this).val());
            }
        }).focus(function () {
            $(this).autocomplete("search", $(this).val());
        });
    },
    FillParentType: function () {
        try {
            ns_ajax.get(
                "ComplianceSettings/FillAllParent",
                param,
                function (response) {
                    if (response.split('|')[0] == 'OK') {
                        var output = '';
                        output = '<option value="0">--Select Parent--</option>';
                        var obj = jQuery.parseJSON(response.split('|')[1]);
                        $.each(obj, function (key, value) {
                            output += '<option value="' + value.DocId + '" class="capitalize">' + value.DocName + '</option>';
                        });
                        $('#ddlParent').html(output);
                    }
                });
        }
        catch (err) {
            ShowAlertMessage("Error", err.message, 'A');
        }
    },
    Reset: function () {
        $("input:checkbox").prop('checked', false);
        $("#txtDocumentName").val('');
        $("#txtDocDescription").val('');
        $('#btnSubmitDocData').attr('data-docid', '0').html('Save');
        $('#txtDocRequiredIssueCountry').attr('data-countryid', '0').hide().val('');
        $('.ModalDocTitle').html('Add Document Data');
        $('#ddlParent').hide();
    },

    name: 'Assign Documents(Settings)',
    getAssignedDocuments: function () {
        var strVal = $('#txtSearchByRole').val().trim();
        var param = { strVal: strVal, PageNumber: PageNumber, PageSize: PageSize };
        ns_ajax.get("ComplianceSettings/GetAssignedDocumentsCount",
            param,
            function (response) {
                if (response.split('|')[0] == 'OK') {
                    var obj = jQuery.parseJSON(response.split('|')[1]), Index = 1, row = "";
                    $.each(obj, function (key, value) {
                        var id = value.RoleId;
                        var strEdit = '<a id="editComp-' + id + '" class="btn btn-outline-primary btn-sm EditComplSettings" data-toggle="tooltip" title="edit"><i class="zmdi zmdi-edit"></i></a>';
                        var strView = '<a id="viewComp-' + id + '" class="btn btn-outline-primary btn-sm ViewComplSettings" data-toggle="tooltip" title="view"><i class="zmdi zmdi-eye"></i></a>';
                        row += '<tr class="Compliance">' +
                            '<td>' + Index + '</td>' +
                            '<td><span class="col-blue"><b>' + value.RoleCategory + '</b></span></td>' +
                            '<td><span class="col-grey"><b>' + value.RoleName + '</b></span></td>' +
                            '<td><span class="badge badge-info">' + value.TotalDocCount + '</span></td>' +
                            '<td>' + strEdit + '&nbsp ' + strView + '</td>';
                        row += '</tr>';
                        Index += 1;
                    });
                    $('.tbodyAssignDocument').html(row);
                }
                else
                    $('.tbodyAssignDocument').html("<tr><td colspan='5'><center>" + response + "</center></td></tr>");
            });
    },
    FillAllRoles: function () {
        var profileType = $('#ddlProfileType').val();
        profileType = (profileType == 'C' ? 'CND' : profileType == 'E' ? 'EMP' : '');
        var param = { ProfileType: profileType };
        jQuery('#ddlRoleList').empty();
        try {
            ns_ajax.get(
                "ComplianceSettings/FillAllRoles",
                param,
                function (response) {
                    if (response.split('|')[0] == 'OK') {
                        var obj = jQuery.parseJSON(response.split('|')[1]);
                        var currentparent = "", previousparent = "";
                        $.each(obj, function (key, value) {
                            currentparent = value.parent_id;
                            var color = (value.color_code == '' || value.color_code == null) ? '#ccc' : value.color_code;
                            if (previousparent == "" || currentparent != previousparent) {
                                jQuery('#ddlRoleList').append($("<optgroup style='font-weight:bold;background-color:#ccc;' label='" + value.parent_name + "' id='" + value.parent_id + "'></optgroup>"));
                                previousparent = value.parent_id;
                            }
                            if (value.role_id != value.parent_id)
                                jQuery('#ddlRoleList').append($("<option style='color:" + color + ";'></option>").val(value.role_id).html(value.role_name));
                        });
                    }
                });
        }
        catch (err) {
            ShowAlertMessage("Error", err.message, 'A');
        }
    },
    getAllDocuments: function () {
        ns_ajax.get(
            "ComplianceSettings/getAllDocuments",
            "",
            function (response) {
                if (response.split('|')[0] == 'OK') {
                    var obj = jQuery.parseJSON(response.split('|')[1]), row = "";
                    $.each(obj, function (key, value) {
                        var docId = value.doc_id;
                        row += '<tr class="Compliance">' +
                            '<td>' + value.RowNumber + '</td>' +
                            '<td>' +
                            '<div class="checkbox">' +
                            '<input id="chk-' + docId + '" data-id="0" data-parentId=' + value.parent_id + ' type="checkbox" class="chkDocument chkParent-' + value.parent_id + ' lockDocAdd-' + docId + '">' +
                            '<label for="chk-' + docId + '"><b>' + value.doc_name + '</b><br/><small>' + (value.parent_id > 0 ? '(' + value.parent + ')' : '') + '</small></label>' +
                            '</div>' +
                            '</td>' +
                            '<td>' +
                            '<div class="">' +
                            '<div class="radio inlineblock m-r-20">' +
                            '<input type="radio" id="Mandatory-' + docId + '" name="DC-' + docId + '"  class="with-gap lockDocAdd-' + docId + '">' +
                            '<label for="Mandatory-' + docId + '">Mandatory </label>' +
                            '</div>' +
                            '<div class="radio inlineblock  m-r-20">' +
                            '<input type="radio" id="Training-' + docId + '" name="DC-' + docId + '" class="with-gap lockDocAdd-' + docId + '">' +
                            '<label for="Training-' + docId + '">Training </label>' +
                            '</div>' +
                            '<div class="radio inlineblock  m-r-20">' +
                            '<input type="radio" id="Admin-' + docId + '" name="DC-' + docId + '" class="with-gap lockDocAdd-' + docId + '">' +
                            '<label for="Admin-' + docId + '">Admin </label>' +
                            '</div>' +
                            '<div class="radio inlineblock  m-r-20">' +
                            '<input type="radio" id="Optional-' + docId + '" name="DC-' + docId + '" checked="checked" class="with-gap lockDocAdd-' + docId + '">' +
                            '<label for="Optional-' + docId + '">Optional</label>' +
                            '</div>' +
                            '</div>' +
                            '</td>' +
                            '<td>' +
                            '<div class="checkbox">' +
                            '<input id="level1-' + docId + '" type="checkbox" class="lockDocAdd-' + docId + '">' +
                            '<label for="level1-' + docId + '">&nbsp;</label>' +
                            '</div>' +
                            '</td>' +
                            '<td>' +
                            '<div class="checkbox">' +
                            '<input id="level2-' + docId + '" type="checkbox" class="lockDocAdd-' + docId + '">' +
                            '<label for="level2-' + docId + '">&nbsp;</label>' +
                            '</div>' +
                            '</td>' +
                            '<td>' +
                            '<div class="checkbox">' +
                            '<input id="level3-' + docId + '" type="checkbox" class="lockDocAdd-' + docId + '">' +
                            '<label for="level3-' + docId + '">&nbsp;</label>' +
                            '</div>' +
                            '</td>' +
                            '<td>' +
                            '<div class="checkbox">' +
                            '<input id="level4-' + docId + '" type="checkbox" class="lockDocAdd-' + docId + '">' +
                            '<label for="level4-' + docId + '">&nbsp;</label>' +
                            '</div>' +
                            '</td>' +
                            '<td>' +
                            '<div class="checkbox">' +
                            '<input id="level5-' + docId + '" type="checkbox" class="lockDocAdd-' + docId + '">' +
                            '<label for="level5-' + docId + '">&nbsp;</label>' +
                            '</div>' +
                            '</td>' +
                            '<td>' +
                            '<div class="checkbox">' +
                            '<input id="level6-' + docId + '" type="checkbox" class="lockDocAdd-' + docId + '">' +
                            '<label for="level6-' + docId + '">&nbsp;</label>' +
                            '</div>' +
                            '</td>' +
                            '<td>' +
                            '<div class="checkbox">' +
                            '<input id="SignUp-' + docId + '" type="checkbox" class="lockDocAdd-' + docId + '">' +
                            '<label for="SignUp-' + docId + '">&nbsp;</label>' +
                            '</div>' +
                            '</td>' +
                            '<td>' +
                            '<input id= "sortOrder-' + docId + '" type="text" class="form-control blu-bold w50 text-center lockDocAdd-' + docId + '" maxlength="6" placeholder="">' +
                            '</td>' +
                            '<td>' +
                            '<input id= "ExpiryDays-' + docId + '" type="text" class="form-control blu-bold w50 text-center lockDocAdd-' + docId + '" maxlength="6" placeholder="">' +
                            '</td>' +
                            '</tr>';
                    });
                    $('.tbodyDocSettings').html(row);
                    ns_ComplianceSettings.GetComplianceSettings();
                }
                else
                    $('.tbodyDocSettings').html("<tr><td colspan='10'><center>" + response + "</center></td></tr>");
            });
    },
    InsertUpdate_ComplianceSetting: function () {
        var profileType = $('#ddlProfileType').val();
        var role = $('#ddlRoleList').val();
        if (profileType == 0) {
            ShowAlertMessage("Message", "Select a profile type", 'A');
            $('#ddlProfileType').focus();
            return false;
        }
        if (role == 0) {
            ShowAlertMessage("Message", "Select a role", 'A');
            $('#ddlRoleList').focus();
            return false;
        }
        var checked = $('.chkDocument:checked').length > 0;
        if (!checked) {
            ShowAlertMessage("Message", "Select atleast one document to assign.", 'A');
            return false;
        }
        var allDocs = ns_ComplianceSettings.getAllCheckedDocs();
        var param = "{allDocs:'" + allDocs + "'}";
        try {
            ns_ajax.post(
                "ComplianceSettings/InsertUpdate_ComplianceSetting",
                param,
                function (response) {
                    if (response == "OK") {
                        ShowAlertMessage("Message", "Data saved successfully.", 'C');
                        ns_ComplianceSettings.getAssignedDocuments();
                    }
                    else
                        ShowAlertMessage("Message", response, 'A');
                });
        }
        catch (err) {
            ShowAlertMessage("Message", err.message, 'A');
        };
    },
    getAllCheckedDocs: function () {
        var values = '';
        $('.chkDocument').each(function () {
            var profileType = $('#ddlProfileType').val();
            var role = $('#ddlRoleList').val()
            var id = $(this).attr('data-id');
            var docId = this.id.split('-')[1];
            var docStatus = $('#Mandatory-' + docId).prop('checked') ? 1 : $('#Training-' + docId).prop('checked') ? 2 : $('#Admin-' + docId).prop('checked') ? 3 : 0;
            var label1 = $('#level1-' + docId).prop('checked') ? 1 : 0;
            var label2 = $('#level2-' + docId).prop('checked') ? 1 : 0;
            var label3 = $('#level3-' + docId).prop('checked') ? 1 : 0;
            var label4 = $('#level4-' + docId).prop('checked') ? 1 : 0;
            var label5 = $('#level5-' + docId).prop('checked') ? 1 : 0;
            var label6 = $('#level6-' + docId).prop('checked') ? 1 : 0;
            var showInSignup = $('#SignUp-' + docId).prop('checked') ? 1 : 0;
            var expiryDays = $('#ExpiryDays-' + docId).val() == "" ? '0' : $('#ExpiryDays-' + docId).val();
            var sortOrder = $('#sortOrder-' + docId).val() == "" ? '0' : $('#sortOrder-' + docId).val();
            var docPermission = $("#chk-" + docId).prop('checked') ? 1 : 0;
            values += profileType + "_" + role + "_" + id + "_" + docId + "_" + docStatus + "_" + label1 + "_" + label2 + "_" + label3 + "_" + label4 + "_" + label5 + "_" + label6 + "_" + showInSignup + "_" + expiryDays + "_" + sortOrder + "_" + docPermission + "@";
        });
        if (values !== '')
            values = values.slice(0, -1);
        return values;
    },
    GetComplianceSettings: function () {
        var profileType = $('#ddlProfileType').val();
        var role = $('#ddlRoleList').val();
        var param = { ProfileType: profileType, Role: role };
        ns_ajax.get("ComplianceSettings/GetComplianceSettings",
            param,
            function (response) {
                if (response.split('|')[0] == 'OK') {
                    var obj = jQuery.parseJSON(response.split('|')[1]);
                    $.each(obj, function (key, value) {
                        $('#chk-' + value.doc_id).prop('checked', true);
                        $('#Mandatory-' + value.doc_id).prop('checked', value.doc_status == 1 ? 'checked' : '');
                        $('#Training-' + value.doc_id).prop('checked', value.doc_status == 2 ? 'checked' : '');
                        $('#Admin-' + value.doc_id).prop('checked', value.doc_status == 3 ? 'checked' : '');
                        $('#level1-' + value.doc_id).prop('checked', value.level1 == 1 ? 'checked' : '');
                        $('#level2-' + value.doc_id).prop('checked', value.level2 == 1 ? 'checked' : '');
                        $('#level3-' + value.doc_id).prop('checked', value.level3 == 1 ? 'checked' : '');
                        $('#level4-' + value.doc_id).prop('checked', value.level4 == 1 ? 'checked' : '');
                        $('#level5-' + value.doc_id).prop('checked', value.level5 == 1 ? 'checked' : '');
                        $('#level6-' + value.doc_id).prop('checked', value.level6 == 1 ? 'checked' : '');
                        $('#SignUp-' + value.doc_id).prop('checked', value.show_in_signup == 1 ? 'checked' : '');
                        $('#sortOrder-' + value.doc_id).val(value.sort_order);
                        $('#ExpiryDays-' + value.doc_id).val(value.expiry_days);
                        $('#chk-' + value.doc_id).attr('data-id', value.id);
                        if (value.doc_additional == 1)
                            $('.lockDocAdd-' + value.doc_id).attr('disabled', true);
                    });
                }
            });
    },
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#img-upload').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
//23-08-2019 BY Manpreet
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
}
function GetRowNumber(controlName) {
    var controlId = controlName.attr('id').replace(/[^0-9]/gi, ''); // Replace everything that is not a number with nothing
    controlId = parseInt(controlId, 10);
    return controlId;
}
function ConvertTimeInto24Hr(time) {
    var arrTime = [];
    arrTime = time.split(':');
    var hrs = arrTime[0];
    var mnts = arrTime[1].replace(/(am|pm)/, '');
    var format = arrTime[1].replace(/[0-9]/g, '');
    if (format == "pm" && hrs < 12) hrs = parseInt(hrs) + parseInt(12);
    if (format == "am" && hrs == 12) hrs = parseInt(hrs) - parseInt(12);
    var hours = hrs;
    var minutes = mnts;
    if (hrs < 10) hours = 0 + hours;
    if (mnts < 10) minutes = 0 + parseInt(minutes);
    return hours + ":" + minutes;
}
function CalculateMinutes(startTime, endTime) {
    var arrStartTime = [], arrEndTime = [], totalMinutes, totalHours, totalTime;

    startTime = ConvertTimeInto24Hr(startTime);
    endTime = ConvertTimeInto24Hr(endTime);

    arrStartTime = startTime.split(':');
    arrEndTime = endTime.split(':');

    var hours = parseInt(arrEndTime[0]) - parseInt(arrStartTime[0]);
    var minutes = parseInt(arrEndTime[1]) - parseInt(arrStartTime[1]);

    totalMinutes = (parseInt(hours) * parseInt(60)) + (parseInt(minutes));

    totalTime = totalMinutes / 60;

    return totalTime = Math.round(totalTime * 100) / 100;
    //if (endTime === 0)
    //    endTime = "00";

    //return totalTime = startTime + ":" + endTime;
}
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
function ConvertDate(date) {
    var aarDate = [], newDate;
    aarDate = date.split('/');
    return newDate = aarDate[2] + "-" + aarDate[1] + "-" + aarDate[0];
};
function GetDateRange(startDate, endDate) {
    var aarDate = [], arrAllDates = [];
    aarDate = startDate.split('/');
    startDate = aarDate[2] + "-" + aarDate[1] + "-" + aarDate[0];

    aarDate = endDate.split('/');
    endDate = aarDate[2] + "-" + aarDate[1] + "-" + aarDate[0];

    startDate = new Date(startDate);
    endDate = new Date(endDate);
    while (startDate < endDate) {
        startDate.setDate(startDate.getDate() + 1);
        var year = startDate.getFullYear();
        var month = startDate.getMonth() + 1;
        var day = startDate.getDate();
        var currDate = day + "/" + month + "/" + year;
        arrAllDates.push(currDate);
    }
    return arrAllDates;

};
function CalculateDays(startDate, endDate) {
    var aarDate;

    aarDate = startDate.split('/');
    startDate = aarDate[2] + "/" + aarDate[1] + "/" + aarDate[0];

    aarDate = endDate.split('/');
    endDate = aarDate[2] + "/" + aarDate[1] + "/" + aarDate[0];

    startDate = new Date(startDate);
    endDate = new Date(endDate);

    var diffDate = (endDate - startDate) / (1000 * 60 * 60 * 24);
    var days = Math.round(diffDate);

    return days;
}

function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
}
//profile img change
$(document).ready(function () {
    $(document).on('change', '#fileInput', function (e) {
        var img = e.target.files[0];
        $('.pixelarity-img-edit-save').attr('data-val', $('.profile-id').attr('data-id'));
        if (!pixelarity.open(img, false, function (res, faces) {
            $(".FullprofileImgBig").attr("src", res);
            $(".face").hide();
            for (var i = 0; i < faces.length; i++) {
                $("body").append("<div class='face' style='height: " + faces[i].height + "px; width: " + faces[i].width + "px; top: " + ($(".FullprofileImgBig").offset().top + faces[i].y) + "px; left: " + ($(".FullprofileImgBig").offset().left + faces[i].x) + "px;'>");
            }
        }, "jpg", 0.7, true)) {
            alert("Whoops! That is not an image!");
        }
    });

    $(document).on('click', '.pixelarity-img-edit-save', function () {
        $(".face").remove();
        var cnd_id = $(this).attr('data-val');
        ns_candidate.UploadImage($(".FullprofileImgBig").attr('src'), cnd_id);
    });

    $(document).on('click', '#btnPasswordUpdate', function () {
        ns_candidate.update_password();
    });

    //Agency Candidate Regostration


    $(document).on('click', '#BtnCandidateRegistration', function () {
      
        ns_candidate.InsertCandidate();
    });
    $(document).on('change', '#ddlcat', function () {
        ns_candidate.Bind_Role();
    });
});

/*************************************************
 *    Working Pattern
* **********************************************/
$(document).ready(function () {
    $(document).on('click', '.cls-working-pattern-action', function () {
        var action = $(this).attr('data-action');
        var id = $(this).attr('data-id');
        if (action == 'new') {
            ns_WorkingPattern.addmoreTime(null);

            $('#txtPatternName').val('');
            $("input[name=rdowrokpattern][value=0]").attr('checked', 'checked');
            $("input[name=rdoPublicholidays]").attr('checked', '');
            $('.clslbloption').removeClass('active');

            $('#btnAddPattern').attr('data-id', '');
            $('#divWorkPattern').hide();
            $('#divCreateEditWorkPattern').show('slow');

        }
        else if (action == 'cancel') {
            $('#divCreateEditWorkPattern').hide();
            $('#divWorkPattern').show('slow');
        }
        else if (action == 'delete') {
            var InUse = $(this).attr('data-total-user');
            if (parseInt(InUse) == 0)
                alert('Coming soon, Thanks');
            else
                ShowAlertMessage("Message", "Sorry ! This pattern cannot be removed because it is already in use", "A");

        }
        else if (action == 'edit') {
            ns_WorkingPattern.addmoreTime($(this).attr('data-json'), '');
            $('#txtPatternName').val($(this).attr('data-name'));
            $("input[name=rdowrokpattern][value=" + $(this).attr('data-status') + "]").attr('checked', 'checked');
            var holiday = $(this).attr('data-holiday');
            $("input[name=rdoPublicholidays][value='" + holiday + "']").attr('checked', 'checked');
            $('.clslbloption').removeClass('active');
            if (holiday == 'Deducted')
                $('#lbloption1').addClass('active');
            else if (holiday == 'Not Deducted')
                $('#lbloption2').addClass('active');
            else
                $('#lbloption3').addClass('active');

            $('#btnAddPattern').html('Update');
            $('#btnAddPattern').attr('data-id', id);
            $('#btnAddPattern').attr('data-rowguid', $(this).attr('data-rowguid'));

            $('#divWorkPattern').hide();
            $('#divCreateEditWorkPattern').show('slow');
        }
        else if (action == 'addmore') {
            var totalDays = $('#spanTotalWpDays').html();
            var startTime = $("#txtWPTimeStart-" + totalDays);
            var endTime = $("#txtWPTimeFinish-" + totalDays);
            var breakTime = $("#txtWPBreak-" + totalDays);

            var flag = 0;
            $('#wprow-' + totalDays + ' td label').each(function (i) {
                var cls = $(this).attr('class');
                if (cls == 'btn btn-toggle-primary btntoggleprimaryactive' || cls == 'btn btntoggleprimaryactive') {
                    ////alert(i + '  ' + $(this).attr('data-day'));
                    flag = flag + 1;
                }
            });

            if (startTime.val().length === 0) {
                startTime.focus();
                ShowAlertMessage("Message", "Please enter start time", "A");
                return false;
            }
            else if (endTime.val().length === 0) {
                endTime.focus();
                ShowAlertMessage("Message", "Please enter finish time", "A");
                return false;
            }
            else if (endTime.val() == startTime.val()) {
                endTime.focus();
                ShowAlertMessage("Message", "Start and finish time can not be same", "A");
                return false;
            }
            else if (flag == 0) {
                $('#divwp-' + totalDays).focus();
                ShowAlertMessage("Message", "Select repeat days", "A");
                return false;
            }
            else {
                if (parseInt(totalDays) <= 6) {
                    ns_WorkingPattern.addmoreTime(null, action);
                    $('#btnaddmoreday').removeClass('a-disabled btn-default cursor-not-allowed');
                    $('#btnaddmoreday').addClass('a-enabled btn-primary');
                }
                else {
                    $('#btnaddmoreday').removeClass('a-enabled btn-primary');
                    $('#btnaddmoreday').addClass('a-disabled btn-default cursor-not-allowed');
                }
            }
        }
        else if (action == 'delete-row') {
            var rowid = id.replace('delete-wp-', '');
            $('#wprow-' + rowid).remove();
            $('#spanTotalWpDays').html(parseInt($('#spanTotalWpDays').html()) - 1);
            if (parseInt($('#spanTotalWpDays').html()) <= 6) {
                $('#btnaddmoreday').removeClass('a-disabled btn-default cursor-not-allowed');
                $('#btnaddmoreday').addClass('a-enabled btn-primary');
            }
            else {
                $('#btnaddmoreday').removeClass('a-enabled btn-primary');
                $('#btnaddmoreday').addClass('a-disabled btn-default cursor-not-allowed');
            }
        }
        else if (action == 'add') {
            var rowguid = $(this).attr('data-rowguid');
            var patternName = $('#txtPatternName').val().trim();
            var default_status = $('input[name="rdowrokpattern"]:checked').val();
            var holiday = $('input[name="rdoPublicholidays"]:checked').val();

            var WorkPatternJson = [];
            $('.clsworkingpatrrentime tbody tr').each(function () {
                var rowid = $(this).attr('id').replace('wprow-', '');
                var startTime = $("#txtWPTimeStart-" + rowid);
                var endTime = $("#txtWPTimeFinish-" + rowid);
                var breakTime = $("#txtWPBreak-" + rowid);

                var days = [];
                $('#wprow-' + rowid + ' td label').each(function (j) {
                    var cls = $(this).attr('class');
                    if (cls == 'btn btn-toggle-primary btntoggleprimaryactive' || cls == 'btn btntoggleprimaryactive') {
                        days.push($(this).attr('data-day'));
                    }
                });
                var obj = {};
                obj.start = startTime.val();
                obj.finish = endTime.val();
                obj.break = breakTime.val();
                obj.week_day = days;
                WorkPatternJson.push(obj);
            });
            var pattern_json = JSON.stringify(WorkPatternJson);

            if (patternName == '') {
                $('#txtPatternName').focus();
                ShowAlertMessage("Message", "Enter Pattern Name", "A");
                return false;
            }
            else if (default_status !== '0' && default_status !== '1') {
                $('input[name="rdowrokpattern"]').focus();
                ShowAlertMessage("Message", "Select Default Pattern status", "A");
                return false;
            }
            else if (holiday == '') {
                $('input[name="rdowrokpattern"]').focus();
                ShowAlertMessage("Message", "Select Public holidays", "A");
                return false;
            }
            else if (pattern_json == '[{"start":"","finish":"","break":"0","week_day":[]}]') {
                $('input[name="rdowrokpattern"]').focus();
                ShowAlertMessage("Message", "Time and Breaks can not blank", "A");
                return false;
            }
            else {
                var obj_workPatern = {}
                obj_workPatern.action = 'INSERTUPDATE';
                obj_workPatern.rowid = rowguid;
                obj_workPatern.pattern_id = id == '' ? '0' : id;
                obj_workPatern.pattern_name = patternName;
                obj_workPatern.default_status = default_status;
                obj_workPatern.public_holiday = holiday;
                obj_workPatern.pattern_json = pattern_json;
                var strFinal = "[" + JSON.stringify(obj_workPatern) + "]";
                ns_WorkingPattern.AddUpdate(strFinal);
            }
        }
    });

    $(document).on('change', '#ddlWorkingPattern', function () {
        var datajson = $("#ddlWorkingPattern option:selected").attr('data-json');
        ns_WorkingPattern.addmoreTime(datajson, '');
    });

    $(document).on('change', '#ddlWorkingTimePattern', function () {
        var datajson = $("#ddlWorkingTimePattern option:selected").attr('data-json');
        var total_hours_decimal = $("#ddlWorkingTimePattern option:selected").attr('data-total_hours_decimal');
        var total_hours_min = $("#ddlWorkingTimePattern option:selected").attr('data-total_hours_min');
        //$('#txtWorkingWeekHour').val(total_hours_decimal.split('.')[0]);
        //$('#txtWorkingWeekMin').val(total_hours_decimal.split('.')[1]);

        var totalMinutes = (parseFloat(total_hours_decimal) * 60);
        var hours = Math.floor(totalMinutes / 60);
        var minutes = totalMinutes % 60;
      
        $('#txtWorkingWeekHour').val(hours);
        $('#txtWorkingWeekMin').val(minutes);

   
        ns_WorkingPattern.ViewWorkTimePattern(datajson);
    });

    $(document).on('click', '.clseditgeneralPattern', function () {
        var datajson = $(this).attr('data-json');
        ns_WorkingPattern.ViewWorkTimePattern(datajson);
    });
});
ns_WorkingPattern = {   
    AddUpdate: function (params) {
        ns_ajax.post(
            urls.employerApi + "addupdatepattern",
            params,
            function (response) {
                if (response.split('|')[0] === 'OK') {
                  /*  ShowAlertMessage("Message", "Your request has been proceed successfully", "C");*/
                    ns_WorkingPattern.GetWrokingPatternList();
                    $('#divCreateEditWorkPattern').hide();
                    $('#divWorkPattern').show('slow');
                }
                else {
                    ShowAlertMessage("Message", response, "A");
                }
            });
    },
    GetWrokingPatternList: function () {
        $('#workingPattern_Placeholder').html(waitcal());
        $('#ddlWorkingPattern').html('<option value="0" data-json="">Select a Pattern..</option>');
        var type = "workpattern";
        var group_name = '';
        var param = { id: 0, role_id: 0, search: group_name, type: type };
        ns_ajax.get(
            urls.employerApi + 'Get',
            param,
            function (data) {
                if (data.Status == 'OK') {
                    var obj = data.Response;

                    call_tmpl_binder(obj, '/Template/setting_tmpl.html', '#WorkPattern_Template', '#workingPattern_Placeholder');
                    setTimeout(
                        function () {
                            $.each(obj.WorkPattern, function (key, value) {
                                $.each(value.PaternJson, function (key, myvalue) {
                                    $('#divPatternDuration' + value.pattern_id).html((parseFloat($('#divPatternDuration' + value.pattern_id).html()) + parseFloat(myvalue.duration2)).toFixed(2));
                                });
                            });
                        }, 500);

                    //duration2, pattern_id 
                    $.each(obj.WorkPattern, function (key, value) {
                        $('#ddlWorkingPattern').append("<option value=" + value.pattern_id + " data-json='" + value.pattern_jsonData + "'>" + value.pattern_name + "</option>")
                    });
                }
                else
                    $('#workingPattern_Placeholder').html("Not Available");
            });
    },
  
    FillDropdownWithPatternList: function (ctrl_id, patternid) {
        $(ctrl_id).empty();
        $(ctrl_id).html('<option value="0" data-json="">Select a Pattern..</option>');
        var type = "workpattern";
        var group_name = '';
        var param = { id: 0, role_id: 0, search: group_name, type: type };
        ns_ajax.get(
            urls.employerApi + 'Get',
            param,
            function (data) {
                if (data.Status == 'OK') {
                    var obj = data.Response;
                    //duration2, pattern_id 
                    var defaultPattern_id = '0';
                    $.each(obj.WorkPattern, function (key, value) {
                      
                        $(ctrl_id).append("<option value=" + value.pattern_id + " data-json='" + value.pattern_jsonData + "'>" + value.pattern_name + "</option>")
                        if (value.default_status == '1')
                            defaultPattern_id = value.pattern_id;

                    });
                    if (parseInt($(ctrl_id).attr('data-selected-id')) > 0)
                        $(ctrl_id).val($(ctrl_id).attr('data-selected-id'));
                    else
                        $(ctrl_id).val(defaultPattern_id);
                }
            });
    },
    workingPatternAction: function () {
        var obj = {};
        obj.DocCategory = "C";
        obj.DocId = $('#btnSubmitDocData').attr('data-docid');
        obj.DocName = $('#txtDocumentName').val().trim();
        obj.DocDesc = $('#txtDocDescription').val().trim();
        obj.ParentId = $('#ddlParent').val();
        obj.DocIssueCountryStatus = $('#chkDocIssueCounStatus').prop('checked') ? '1' : '0';
        obj.DocRequiredIssueCountry = $('#txtDocRequiredIssueCountry').attr('data-countryid');
        obj.DefaultStatus = $('#chkDefaultStatus').prop('checked') ? '1' : '0';
        obj.InputType = $('#chkInputType').prop('checked') ? '1' : '0';
        obj.IsAdditional = $('#chkIsAdditional').prop('checked') ? '1' : '0';

        var msg = '', flag = 0;
        if (obj.DocCategory == "") {
            flag = 1;
            msg = "Select document category";
            $('#ddlDocCategory').focus();
        }
        else if (obj.DocName == "") {
            flag = 1;
            msg = "Enter document name";
            $('#txtDocumentName').focus();
        }
        else if (obj.DocDescription == "") {
            flag = 1;
            msg = "Enter document description";
            $('#txtDocDescription').focus();
        }
        else if (($('#chkDocIssueCounStatus').prop('checked')) && (obj.DocRequiredIssueCountry == 0)) {
            flag = 1;
            msg = "Enter a document required issue country name";
            $('#txtDocRequiredIssueCountry').focus();
        }

        else
            flag = 0;
        if (flag == 0) {
            try {
                ns_ajax.post(
                    "ComplianceSettings/InsertUpdateDocData",
                    obj,
                    function (response) {
                        if (response.split('|')[0] == "OK") {
                            ShowAlertMessage("Message", "Document data submitted successfully !", 'C');
                            //$('#modalAddDocument').modal('hide');
                            ns_ComplianceSettings.Reset();
                            ns_ComplianceSettings.FillParentType();
                            ns_ComplianceSettings.getAllDocDetails();
                        }
                        else
                            ShowAlertMessage("Message", response, 'A');
                    });
            }
            catch (error) {
                ShowAlertMessage("Error", err, 'A');
            }
        }
        else
            ShowAlertMessage("Message", msg, 'A');
    },
    addmoreTime: function (JsonData, action) {
        JsonData = (JsonData == '' || JsonData == null) ? '[{ "start": "", "finish": "", "break": "0", "week_day": [] }]' : JsonData;
        var obj = jQuery.parseJSON(JsonData);
        if (action == 'addmore') {
            $('#AddPatternTime_Placeholder')
            $('#AddPatternTime_Template').tmpl(obj).appendTo('#AddPatternTime_Placeholder');
        }
        else {
            call_tmpl_binder(obj, '/Template/setting_tmpl.html', '#AddPatternTime_Template', '#AddPatternTime_Placeholder');
        }
        setTimeout(function () {
            DatePairFuction();

            $('.clsworkingpatrrentime [data-toggle="buttons"]  .btn').on('click', function () {
                // toggle style
                $(this).toggleClass('btn-toggle-primary btntoggleprimaryactive');

                // toggle checkbox
                var $chk = $(this).find('[type=checkbox]');
                $chk.prop('checked', !$chk.prop('checked'));
                return false;
            });

            var totalDays = $('#spanTotalWpDays').html();
            if (parseInt(totalDays) <= 6) {
                $('#btnaddmoreday').removeClass('a-disabled btn-default cursor-not-allowed');
                $('#btnaddmoreday').addClass('a-enabled btn-primary');
            }
            else {
                $('#btnaddmoreday').removeClass('a-enabled btn-primary');
                $('#btnaddmoreday').addClass('a-disabled btn-default cursor-not-allowed');
            }

        }, 200);
    },
    ViewWorkTimePattern: function (JsonData) {
        if (JsonData == '' || JsonData == null) {
            $('#viewSelectedPatternTime_Placeholder').html('');
            $('#divShowWorkPatern').hide('slow');
        }
        else {
            $('#divShowWorkPatern').show('slow');
            var obj = jQuery.parseJSON(JsonData);
            call_tmpl_binder(obj, '/Template/setting_tmpl.html', '#viewSelectedPatternTime_Template', '#viewSelectedPatternTime_Placeholder');
        }
    },
}
function GetRowCounter(rowid) {
    var count = $('#AddPatternTime_Placeholder tr').length;
    var counter = parseInt(count) + 1;
    counter = parseInt(rowid) >= counter ? rowid : counter;
    $('#spanTotalWpDays').html(counter);
    return counter;
}
function CndWorkTimePattern(JsonData) {  
    if (JsonData == '' || JsonData == null)
        $('#CndWorkTimePattern_Placeholder').html('<tr><td colspan="4"><div>Work Pattern Not available !</div></td></tr>');
    else
        call_tmpl_binder(jQuery.parseJSON(JsonData), '/Template/setting_tmpl.html', '#viewSelectedPatternTime_Template', '#CndWorkTimePattern_Placeholder');

}
function EmployeeWorkTimePattern(JsonData) {  
    if (JsonData == '' || JsonData == null)
        $('#CndWorkTimePattern_Placeholder').html('<tr><td colspan="4"><div>Work Pattern Not available !</div></td></tr>');
    else {    
        JsonData = jQuery.parseJSON(JsonData);
        call_tmpl_binder(JsonData, '/Template/setting_tmpl.html', '#CndWorkPattern_Template', '#CndWorkTimePattern_Placeholder');
       
        //totalDays, totalDuration
        console.log(JsonData);
        var totalDays=0,totalDuration = 0;
        $.each(JsonData, function (key, value) {
            totalDays = totalDays + 1;
            totalDuration = parseFloat(totalDuration) + parseFloat(value.duration2);         
        });   
         setTimeout(
            function () {
                 $('#spanTotalWokingDays').html('<b>' + totalDuration.toFixed(1) + '</b> hr(s) in week including breaks. (Total <b>' + totalDays + '</b> working days)');
            }, 300);      
    }     

}


/*************************************************
 *     Import Employee
 * **********************************************/
$(document).ready(function () {

    //Add Agency
    $(document).on('click', '#btnAddNewOrg', function () {
        ns_organisation.LoadSectors();
        $('#txtorg_name').val('');
        $('#txtorg_name').val('');
        $('#ddlindustry').val('0');
        $('#txtfirst_name').val('');
        $('#txtlast_name').val('');
        $('#txtemail').val('');
        $('#txtmobile').val('');

    });
    $(document).on('click', '#btnSaveOrgBasicDetails', function () {
        ns_organisation.InsertOrgbasicDetails();
    });

    $(document).on('change', "#ddlCndTypeImport", function () {
        var protype = $('#ddlCndTypeImport').val();
        $('#ddlBulkOrg_Placeholder')[0].selectedIndex = 0;
        $('.divBulkFileUploader').css('border', '1px solid #bbb');
        $('#ddlBulkOrg_Placeholder').css('border', '1px solid #bbb');
        if (protype == 'A') {
            $('#ddlBulkOrg').show();    
        }
        else {
            $('#ddlBulkOrg').hide();         
        }
    });
    $(document).on('change', "#ddl_role_0", function () {
        var role_id = $('#ddl_role_0').val();
        $('.clsRoleImport').val(role_id);
    });
    $(document).on('change', "#ddl_location_0", function () {
        var location_id = $('#ddl_location_0').val();
        $('.clsLocationImport').val(location_id);
    });
    $(document).on('click', ".cls-import-action", function () {
        var action = $(this).attr('data-action');
        if (action == 'importcndcsv') {
            ns_bulk_Import.bindDropdowns(0, "org", "ddlBulkOrg");
            $('.bulk-ddl-CND-type')[0].selectedIndex = 0;
            $('#ddlCndTypeImport').css('border', '1px solid #bbb');
            $('.divBulkFileUploader').css('border', '1px solid #bbb');
            $('#ddlBulkOrg_Placeholder').css('border', '1px solid #bbb');
            $('.divexistemail, .divexistmobile').hide();
            $('.divexistMsg, .divexistSucessMsg').hide();
            $('#divPromptBlock').hide();
            $('.divCsvDataPreviewBlock').hide();
            $('.divFileImportBlock').show('slow');
            $('#import-tab-step1').removeClass('completed').addClass('active');
            $('#import-tab-step2').removeClass('completed').removeClass('active');
            $('#import-tab-step3').removeClass('completed').removeClass('active');
        }
        else if (action == 'showcsvdata') {
            if (ns_bulk_Import.validateForm($(this).attr('data-bulk-type')))
                ns_bulk_Import.convertCSVToJSON($('#bulkFileUpload'), $(this).attr('data-bulk-type'));
        }
        else if (action == 'save') {
            var dataJson = $(this).attr('data-json');
            var obj = jQuery.parseJSON(dataJson)[0];

            if (obj.length > 0) {
                var flag = true;
                $.each(obj, function (key, value) {
                    var ctrddlRole = $("#ddl_role_" + (key + 1));
                    var ctrddlLocation = $("#ddl_role_" + (key + 1));

                    ctrddlRole.css('border', '1px solid #ddd');
                    ctrddlLocation.css('border', '1px solid #ddd');

                    var cnd_role_id = $("#ddl_role_" + (key + 1) + " option:selected").val();
                    var cnd_location_id = $("#ddl_location_" + (key + 1) + " option:selected").val();

                    if (cnd_role_id == '0') {
                        ctrddlRole.css('border', '1px solid #f00');
                        ShowAlertMessage("Message", "Select Employee Role", "A");
                        $("#ddl_role_" + (key + 1)).focus();
                        flag = false;
                        return false;
                    }
                    else
                        ctrddlRole.css('border', '1px solid #ddd');

                    if (cnd_location_id == '0') {
                        ctrddlLocation.css('border', '1px solid #f00');
                        ShowAlertMessage("Message", "Select Employee Role", "A");
                        $("#ddl_location_" + (key + 1)).focus();
                        flag = false;
                        return false;
                    }
                    else
                        ctrddlLocation.css('border', '1px solid #ddd');

                    if (flag) {
                        $.each(value, function (ky, val) {
                            if (ky == 'cnd_role')
                                obj[key].cnd_role = cnd_role_id;
                            if (ky == 'cnd_location')
                                obj[key].cnd_location = cnd_location_id;
                        });
                    }
                });
                if (flag) {
                    var params = "[" + JSON.stringify(obj) + "]";
                    ns_bulk_Import.post(params);
                }
            }
        }
        else if (action == 'updateignore') {
            var prompt_status = $('input[name="rdoPrompt"]:checked').val();
            if (prompt_status !== '1' && prompt_status !== '2') {
                $('input[name="rdoPrompt"]').focus();
                ShowAlertMessage("Message", "Please chose one of the option below to complete the process", "A");
                return false;
            }
            else {
                var dataJson = $(this).attr('data-json');
                var obj = jQuery.parseJSON(dataJson)[0];
                $.each(obj, function (key, value) {
                    $.each(value, function (ky, val) {
                        if (ky == 'prompt_status')
                            obj[key].prompt_status = prompt_status;
                    });
                });
                var params = "[" + JSON.stringify(obj) + "]";             
                ns_bulk_Import.post(params);
            }
        }
        else if (action == 'back') {
            $('#BtnSaveCSVDATA').attr('data-json', '');
            $('.divCsvDataPreviewBlock').hide();
            $('.divFileImportBlock').show('slow');
            $('.divexistemail, .divexistmobile').hide();
            $('.divexistMsg, .divexistSucessMsg').hide();
            $('#divPromptBlock').hide();
            $('#BtnSaveCSVDATA').attr('data-action', 'save');

            $('#import-tab-step1').removeClass('completed').addClass('active');
            $('#import-tab-step2').removeClass('completed').removeClass('active');
            $('#import-tab-step3').removeClass('completed').removeClass('active');
        }
        else if (action == 'cancel') {
            $('.bulk-upload').modal('hide');
            $('.modal-backdrop').hide('slow');
            $('#BtnSaveCSVDATA').attr('data-json', '');
            $('.divCsvDataPreviewBlock').hide();
            $('.divFileImportBlock').show('slow');
            $('.divexistemail, .divexistmobile').hide();
            $('.divexistMsg, .divexistSucessMsg').hide();
            $('#divPromptBlock').hide();
            $('#BtnSaveCSVDATA').attr('data-action', 'save');
            $('#import-tab-step1').removeClass('completed').addClass('active');
            $('#import-tab-step2').removeClass('completed').removeClass('active');
            $('#import-tab-step3').removeClass('completed').removeClass('active');
        }
    });
});
ns_bulk_Import = {
    csvInfo: function (type) {
        var csvColumns = '';
        //csvColumns = 'SrNo*,Title*,First_Name*,Middle_Name,Last_Name,DOB,Gender,Account_Email*,Personal_Email,Mobile*,Home_Phone,Payroll_Number,Wage_Salary,Pension_Eligible,Opsted_Out,Employee_contribution_Amount,Employer_contribution_Amount,Enrolment_Date,Job_Title,Contract_Type,Notify_Of_Expiry_On,Probation_Required,Notice_Period_Type,Notice_Period,Tax_Code,NI_Number,Passport_Number,Country_of_Issue,Date_of_Expiry,Visa_Number,Visa_Expiry_Date,Driving_Licence_Number,Country_of_Issue,Licence_Class,Date_of_Expiry,Notes';

        if (type.toUpperCase() == 'CANDIDATE')
            csvColumns = 'SrNo*,Title*,First_Name*,Middle_Name,Last_Name,DOB,Gender,Account_Email*,Personal_Email,Mobile*,Home_Phone,Job_Title,Tax_Code,NI_Number,Notes';
        $('.btn-download-template').attr('href', 'data:text/csv;charset=utf-8,' + encodeURI(csvColumns));
        $('.btn-download-template').attr('target', '_blank');
        $('.btn-download-template').attr('download', type + '_Template.csv');
    },
    validateForm: function (bulkType) {
        $('#ddlCndTypeImport').css('border', '1px solid #bbb');
        $('#ddlBulkOrg_Placeholder').css('border', '1px solid #bbb');
        $('.divBulkFileUploader').css('border', '1px solid #bbb');

        var bulkFileUploader = $('#bulkFileUpload');
        if (bulkType.toUpperCase() == 'CANDIDATES') {
            if ($('#ddlCndTypeImport').val() == '') {
                $('#ddlCndTypeImport').focus();
                $('#ddlCndTypeImport').css('border', '1px solid red');
                ShowAlertMessage("Message", "Please select employee type", "A");
                return false;
            }
            else if ($('#ddlCndTypeImport').val() == 'A' && $('#ddlBulkOrg_Placeholder').val() == '0') {
                $('#ddlBulkOrg_Placeholder').focus();
                $('#ddlBulkOrg_Placeholder').css('border', '1px solid red');
                ShowAlertMessage("Message", "Select an agency", "A");
                return false;
            }
        }
        if (bulkFileUploader[0].files.length == 0) {
            $('.divBulkFileUploader').css('border', '1px solid red');
            ShowAlertMessage("Message", "Please select file !", "A");
            return false;
        }
        else
            $('.divBulkFileUploader').css('border', '1px solid #bbb');

        return true;
    },
    convertCSVToJSON: function (csvFile, type) {
        var CndType = $("#ddlCndTypeImport option:selected").val();
        var agencyname = $("#ddlBulkOrg_Placeholder option:selected").text();
        var agency_id = $("#ddlBulkOrg_Placeholder option:selected").val();

        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            var arrNullFound = new Array(), arrCSV = new Array(), arrResult = new Array(), cells = new Array(), arrFileColumns = new Array();
            var bulkCSVJson = '', objAction = '', objData = '', noNullFound = true;
            reader.readAsText(csvFile[0].files[0]);
            reader.onload = function (e) {
                var csvRows = e.target.result.split("\r\n");
                //Filter empty csvRows here
                csvRows = csvRows.filter(function (element) { return element != null && element != ""; });

                if (csvRows.length > 1) {
                    //Validate diapers here
                    arrResult = ns_bulk_Import.validateCSV(csvRows, type);
                    //Get correct csv records here
                    csvRows = arrResult[0];

                    //Get csv file column names here
                    arrFileColumns = arrResult[3];

                    if (csvRows.length > 1) {
                        for (var i = 1; i < csvRows.length; i++) {
                            cells = csvRows[i].split(",");
                           
                            if (type.toUpperCase() == 'CANDIDATES') {
                                var sr_no = cells[arrFileColumns.indexOf('SrNo*')];
                                var title = cells[arrFileColumns.indexOf('Title*')];
                                var First_Name = cells[arrFileColumns.indexOf('First_Name*')];
                                var Middle_Name = cells[arrFileColumns.indexOf('Middle_Name')];
                                var Last_Name = cells[arrFileColumns.indexOf('Last_Name')];
                                var DOB = cells[arrFileColumns.indexOf('DOB')];
                                var Gender = cells[arrFileColumns.indexOf('Gender')];
                                var email_id = cells[arrFileColumns.indexOf('Account_Email*')];
                                var Personal_Email = cells[arrFileColumns.indexOf('Personal_Email')];
                                var mobile_number = cells[arrFileColumns.indexOf('Mobile*')];
                                var Home_Phone = cells[arrFileColumns.indexOf('Home_Phone')];
                                //var Payroll_Number = cells[arrFileColumns.indexOf('Payroll_Number')];
                                //var Wage_Salary = cells[arrFileColumns.indexOf('Wage_Salary')];
                                //var Pension_Eligible = cells[arrFileColumns.indexOf('Pension_Eligible')];
                                //var Opsted_Out = cells[arrFileColumns.indexOf('Opsted_Out')];
                                //var Employee_contribution_Amount = cells[arrFileColumns.indexOf('Employee_contribution_Amount')];
                                //var Employer_contribution_Amount = cells[arrFileColumns.indexOf('Employer_contribution_Amount')];
                                //var Enrolment_Date = cells[arrFileColumns.indexOf('Enrolment_Date')];
                                var Job_Title = cells[arrFileColumns.indexOf('Job_Title')];
                                //var Contract_Type = cells[arrFileColumns.indexOf('Contract_Type')];
                                //var Notify_Of_Expiry_On = cells[arrFileColumns.indexOf('Notify_Of_Expiry_On')];
                                //var Probation_Required = cells[arrFileColumns.indexOf('Probation_Required')];
                                //var Notice_Period_Type = cells[arrFileColumns.indexOf('Notice_Period_Type')];
                                //var Notice_Period = cells[arrFileColumns.indexOf('Notice_Period')];
                                var Tax_Code = cells[arrFileColumns.indexOf('Tax_Code')];
                                var NI_Number = cells[arrFileColumns.indexOf('NI_Number')];
                                //var Passport_Number = cells[arrFileColumns.indexOf('Passport_Number')];
                                //var Country_of_Issue = cells[arrFileColumns.indexOf('Country_of_Issue')];
                                //var Date_of_Expiry = cells[arrFileColumns.indexOf('Date_of_Expiry')];
                                //var Visa_Number = cells[arrFileColumns.indexOf('Visa_Number')];
                                //var Visa_Expiry_Date = cells[arrFileColumns.indexOf('Visa_Expiry_Date')];
                                //var Driving_Licence_Number = cells[arrFileColumns.indexOf('Driving_Licence_Number')];
                                //var Country_of_Issue = cells[arrFileColumns.indexOf('Country_of_Issue')];
                                //var Licence_Class = cells[arrFileColumns.indexOf('Licence_Class')];
                                //var Date_of_Expiry = cells[arrFileColumns.indexOf('Date_of_Expiry')];
                                var Notes = cells[arrFileColumns.indexOf('Notes')];

                                var cnd_role = "0", cnd_location = "0";
                                objData = {
                                    "action": 'import',
                                    "sr_no": i,
                                    "prompt_status": '0',
                                    "cnd_type": 'EMP',
                                    "cnd_sub_type": CndType,
                                    "cnd_agency": agencyname,
                                    "cnd_agency_id": agency_id,
                                    "cnd_role": cnd_role,
                                    "cnd_location": cnd_location,
                                    "title": title,
                                    "first_name": First_Name,
                                    "middle_name": Middle_Name,
                                    "last_name": Last_Name,
                                    "DOB": DOB,
                                    "gender": Gender,
                                    "email_id": email_id,
                                    "personal_email": Personal_Email,
                                    "mobile_number": mobile_number,
                                    "home_phone": Home_Phone,
                                    //"payroll_number": Payroll_Number,
                                    //"wage_salary": Wage_Salary,
                                    //"pension_eligible": Pension_Eligible,
                                    //"opsted_out": Opsted_Out,
                                    //"employee_contribution_amount": Employee_contribution_Amount,
                                    //"employer_contribution_amount": Employer_contribution_Amount,
                                    //"enrolment_date": Enrolment_Date,
                                    "job_title": Job_Title,
                                    //"contract_type": Contract_Type,
                                    //"notify_of_expiry_on": Notify_Of_Expiry_On,
                                    //"probation_required": Probation_Required,
                                    //"notice_period_type": Notice_Period_Type,
                                    //"notice_period": Notice_Period,
                                    "tax_code": Tax_Code,
                                    "ni_number": NI_Number,
                                    //"passport_number": Passport_Number,
                                    //"country_of_issue": Country_of_Issue,
                                    //"date_of_expiry": Date_of_Expiry,
                                    //"visa_number": Visa_Number,
                                    //"visa_expiry_date": Visa_Expiry_Date,
                                    //"driving_licence_number": Driving_Licence_Number,
                                    //"country_of_issue": Country_of_Issue,
                                    //"licence_class": Licence_Class,
                                    //"date_of_expiry": Date_of_Expiry,
                                    "notes": Notes
                                };
                            }
                            arrCSV.push(objData);
                        }
                        //Create JSON object to pass it to api
                        bulkCSVJson = "[" + JSON.stringify(arrCSV) + "]";
                        call_tmpl_binder(jQuery.parseJSON(bulkCSVJson)[0], '/Template/cnd_profile_tmpl.html', '#ImportCndProfiles_Template', '#bodyimportedRecordsTable');
                        setTimeout(function () { ns_bulk_Import.Get_JobRole_Location('.clsLocationImport', '.clsRoleImport'); }, 300);
                        if (jQuery.parseJSON(bulkCSVJson)[0].length > 0) {
                            $('#BtnSaveCSVDATA').attr('data-json', bulkCSVJson);
                            $('.divFileImportBlock').hide();
                            $('.divexistemail, .divexistmobile').hide();
                            $('.divexistMsg, .divexistSucessMsg').html('');
                            $('#divPromptBlock').hide();
                            $('.divCsvDataPreviewBlock').show('slow');
                            $('#import-tab-step1').removeClass('active').addClass('completed');
                            $('#import-tab-step2').addClass('active');
                        }

                        //Bulk upload api call
                        //ns_bulk_Import.post(bulkCSVJson, type, arrResult);
                    }
                    else {
                        ShowAlertMessage("Message", "There is no corrects " + type + "  record in the file.<br> Please check Required field value and pattern !", "A");
                        if (result[1].length > 1) {
                            $('<a></a>').addClass('download-file').attr('target', '_blank').attr('href', 'data:text/csv;charset=utf8,' + encodeURI(result[1].join('\n'))).attr('download', type.toUpperCase() + '_ERRORS_RECORDS.csv').css('display', 'none').appendTo('.tabs-container');
                            $('.download-file')[0].click();
                            $('.download-file').remove();
                            $('<a></a>').addClass('download-file').attr('target', '_blank').attr('href', 'data:text/csv;charset=utf8,' + encodeURI(result[2].join('\n'))).attr('download', type.toUpperCase() + '_ERRORS.csv').css('display', 'none').appendTo('.tabs-container');
                            ShowAlertMessage("Message", "These records contain errors please a look on files !", "A");
                            $('.download-file')[0].click();
                            $('.download-file').remove();
                            result[1].length = 0;
                            result[2].length = 0;
                        }
                    }
                }
                else
                    ShowAlertMessage("Message", "There is no  record in the " + type + " file, Please add some data then process again !", "A");
            }
        }
    },
    validateCSV: function (fileRows, fileType) {
        //Change fileType to upper case 
        fileType = fileType.toUpperCase();

        var arrErrors = new Array(), arrFileColumns = new Array(), arrErrorRecord = new Array(), arrCorrectRecord = new Array(), arrMaster = new Array();
        var nullColumns = '', invalidColumns = '', cells = '', csvColumns = '', cnd_titles = ['Mr,', 'Mrs', 'Miss', 'Dr'];
        for (var i = 0; i < fileRows.length; i++) {
            cells = fileRows[i].split(","); nullColumns = '', invalidColumns = '';
            if (i == 0) {
                //Get All Header columns
                arrFileColumns = cells;
                csvColumns = fileRows[i];
            }
            else {
                for (var j = 0; j < cells.length; j++) {
                    var ColumnsName = arrFileColumns[j];
                    ColumnsName = ((ColumnsName.slice(-1)) == '*' ? ColumnsName.slice(0, -1).toLowerCase() : ColumnsName.toLowerCase());

                    if (fileType == "CANDIDATES") {
                        if ((ColumnsName == 'srno' || ColumnsName == 'title' || ColumnsName == 'first_name' || ColumnsName == 'account_email' || ColumnsName == 'mobile') && cells[j].length == 0)
                            nullColumns += "[" + arrFileColumns[j] + "]";
                        if (ColumnsName == 'mobile' && cells[j] !== '' && (cells[j].length < 10 || cells[j].length > 11))
                            invalidColumns += "[" + arrFileColumns[j] + "] is invaild."
                        if (ColumnsName == 'account_email' && cells[j].length > 0 && !IsEmail(cells[j]))
                            invalidColumns += "[" + arrFileColumns[j] + "] is invaild."
                    }
                }
                if (nullColumns.length > 0) {
                    arrErrors.push(cells[0] + "," + nullColumns + " are null" + (fileType == "CANDIDATES" ? invalidColumns.length > 0 ? ' & ' : '' + invalidColumns : ''));
                    arrErrorRecord.push(fileRows[i]);
                }
                else
                    arrCorrectRecord.push(fileRows[i]);
            }
        }
        //Added head columns in array
        arrCorrectRecord.unshift(csvColumns);
        arrErrorRecord.unshift(csvColumns);
        arrErrors.unshift("Srno,Errors");

        //Generate master array
        arrMaster.push(arrCorrectRecord);
        arrMaster.push(arrErrorRecord);
        arrMaster.push(arrErrors);
        arrMaster.push(arrFileColumns);

        return arrMaster;
    },
    post: function (params) {
        $('#BtnSaveCSVDATA').addClass('a-disabled');
        $('#BtnSaveCSVDATA').html('Process...<img src="images/spin.gif" />');
        var serverResponse;
        ns_ajax.post(
            urls.employees + 'import',
            params,
            function (response) {
                $('#BtnSaveCSVDATA').removeClass('a-disabled');
                $('#BtnSaveCSVDATA').html('Save');

                if (response.split('|')[0] == "OK") {
                    if (response.split('|')[1] == "UPGRADESUBS") {
                        $('#spanAccountRenewalTitle').html('Upgrade subscription');
                        $('#divAccountRenewalMessage').html('Your current plan users limit is exceeding, please upgrade your plan to avail more license(s).');
                        $('#btnsubsRenewal').html('Upgrade Subscription');
                        $("#ModalSubcription").modal('show');
                    }
                    else {
                        serverResponse = response.split('|')[1] !== "" ? jQuery.parseJSON(response.split('|')[1]) : null;
                        var flag = true, totalRecords = 0, totalImport = 0, tbl_email = '', tbl_mobile = '', respons_status = '', msg = '';
                        $.each(serverResponse.Results, function (index, value) {
                            respons_status = value.status;
                            msg = value.msg;
                            totalRecords = value.total_records;
                            totalImport = value.total_import;


                            var objEmails = value.existing_email;
                            var objMobiles = value.exisitng_mobile;

                            if (respons_status == 'failed') {
                                $.each(jQuery.parseJSON(objEmails), function (idx, val) {
                                    tbl_email += '<tr><td>' + val.name + '</td><td>' + val.email + '</td></tr>';
                                    flag = false;
                                });
                                $.each(jQuery.parseJSON(objMobiles), function (idx, val) {
                                    tbl_mobile += '<tr><td>' + val.name + '</td><td>' + val.mobile + '</td></tr>';
                                    flag = false;
                                });
                            }
                            else {
                                flag = true;
                            }
                        });
                        if (flag) {
                            msg = '<b>' + totalImport + "</b> employees has been imported out of <b>" + totalRecords + "</b>";
                            ShowAlertMessage("Message", msg, "C");
                            $('.divexistSucessMsg').html(msg).show();
                            $('.divexistemail, .divexistmobile').show('slow');
                            $('.divexistMsg').html('').hide();
                            $('.divCsvDataPreviewBlock').hide();
                            $('#divPromptBlock').hide();
                            $('#BtnSaveCSVDATA').attr('data-action', 'save');
                            $('#import-tab-step1').addClass('completed');
                            $('#import-tab-step2').addClass('completed').removeClass('active');
                            $('#import-tab-step3').addClass('completed').removeClass('active');
                            ns_employee.get('Profiles');
                        }
                        else {
                            msg = 'We found few matching records in the system that already exists.';
                            ShowAlertMessage("Message", msg, "");
                            $('.divFileImportBlock').hide();
                            $('.divCsvDataPreviewBlock').hide();
                            $('.clsPromptAccepting').show();
                            $('#divPromptBlock').show();
                            $('.divexistMsg').html(msg).show();
                            $('.divexistSucessMsg').html('').hide();
                            $('#BtnSaveCSVDATA').attr('data-action', 'updateignore');

                            $('#import-tab-step1').addClass('completed');
                            $('#import-tab-step2').removeClass('active').addClass('completed');
                            $('#import-tab-step3').addClass('active');

                            if (tbl_email !== '') {
                                $('.divexistemail').html('<table class="table table-hover table-bordered wd-table emptbl"><thead><tr><th style="width:50px"><b>Name</b></th><th><i class="zmdi zmdi-email mr-1"></i>Matching Email Id</th></tr></thead><tbody>' + tbl_email + '</tbody></table>');
                                $('.divexistemail').show('slow');
                            }
                            if (tbl_mobile !== '') {
                                $('.divexistmobile').html('<table class="table table-hover table-bordered wd-table emptbltable"> <thead><tr><th>Name</th><th><i class="zmdi zmdi-phone-in-talk mr-1"></i>Matching Mobile Number.</th></tr></thead><tbody>' + tbl_mobile + '</tbody></table>');
                                $('.divexistmobile').show('slow');
                            }
                        }
                        //if (errors[1].length > 1 || errors[2].length > 1) {
                        //    $('<a></a>').addClass('download-file').attr('target', '_blank').attr('href', 'data:text/csv;charset=utf8,' + encodeURI(errors[1].join('\n'))).attr('download', 'CANDIDATES_ERRORS_RECORDS.csv').css('display', 'none').appendTo('.tabs-container');
                        //    $('.download-file')[0].click();
                        //    $('.download-file').remove();
                        //    $('<a></a>').addClass('download-file').attr('target', '_blank').attr('href', 'data:text/csv;charset=utf8,' + encodeURI(errors[2].join('\n'))).attr('download', 'CANDIDATES_ERRORS.csv').css('display', 'none').appendTo('.tabs-container');
                        //    ShowAlertMessage("Message", "These records contain errors please a look on files !", "A");
                        //    $('.download-file')[0].click();
                        //    $('.download-file').remove();
                        //}
                    }

                }
                else {
                  
                    ShowAlertMessage("Message", response, "A");
                }
            });
    },
    get: function (bulkUploadType, batchNo) {
        var serverResponse;
        var params = { type: bulkUploadType, batchNumber: batchNo, test: "sd" }
        ns_ajax.get(
            urls.ImportDataApi,
            params,
            function (response) {
                if (response.split('|')[0] == "OK")
                    serverResponse = jQuery.parseJSON(response.split('|')[1]);
                else
                    serverResponse = null;

                //Changed  to upper case
                bulkUploadType = bulkUploadType.toUpperCase();

                if (bulkUploadType == 'JOBS')
                    $('.col-client').text('Employer');
                else if (bulkUploadType == 'CANDIDATES' || bulkUploadType == 'EMPLOYERS')
                    $('.col-client').text('Agency');
                else if (bulkUploadType == 'JOB-SUMMARY') {
                    headRow = '<tr>\
                            <th class="text-center">Job Id</th>\
                            <th class="text-center">Start Date</th>\
                            <th class="text-center">Start Time</th>\
                            <th class="text-center">End Date</th>\
                            <th class="text-center">End Time</th>\
                            <th class="text-center">Employer Rate</th>\
                            <th class="text-center">Candidate Rate</th>\
                            <th class="text-center">Job Role</th>\
                            <th class="text-center">Job Location</th>\
                            <th class="text-center">Shift Type</th>\
                        </tr>';
                }
                else if (bulkUploadType == 'CANDIDATE-SUMMARY') {
                    headRow = '<tr>\
                            <th class="text-center">CND Id</th>\
                            <th class="text-center">Name</th>\
                            <th class="text-center">Gender</th>\
                            <th class="text-center">Email</th>\
                            <th class="text-center">Mobile</th>\
                            <th class="text-center">Role</th>\
                            <th class="text-center">CND_GMC_OR_REGNUMBER</th>\
                        </tr>';
                }
                else if (bulkUploadType == 'EMPLOYER-SUMMARY') {
                    headRow = '<tr>\
                            <th class="text-center">EMP Id</th>\
                            <th class="text-center">Name</th>\
                            <th class="text-center">Email</th>\
                            <th class="text-center">Mobile</th>\
                            <th class="text-center">Role</th>\
                            <th class="text-center">Practice Code</th>\
                        </tr>';
                }

                if (serverResponse != null) {
                    if (bulkUploadType == 'JOBS' || bulkUploadType == 'CANDIDATES' || bulkUploadType == 'EMPLOYERS') {
                        $("#BulkSummary_Placeholder").empty();
                        call_tmpl_binder(serverResponse.Bulk_Upload, '/Template/bulk_upload_tmpl.html', '#BulkUpload_Template', '#BulkUpload_Placeholder');
                    }
                    else if (bulkUploadType == 'JOB-SUMMARY' || bulkUploadType == 'CANDIDATE-SUMMARY' || bulkUploadType == 'EMPLOYER-SUMMARY') {
                        $("#BulkSummary_Placeholder").empty();
                        $("#tblBulkSummaryHead").empty();
                        $("#tblBulkSummaryHead").append(headRow);
                        console.log(serverResponse.Bulk_Summary);
                        call_tmpl_binder(serverResponse.Bulk_Summary, '/Template/bulk_upload_tmpl.html', '#BulkSummary_Template', '#BulkSummary_Placeholder');
                    }
                }
                else {
                    $("#BulkUpload_Placeholder").empty();
                    if (bulkUploadType == 'JOBS')
                        $("#BulkUpload_Placeholder").append('<tr><td colspan="7" class="text-center">No record found</td></tr>')
                    else if (bulkUploadType == 'CANDIDATES' || bulkUploadType == 'EMPLOYERS')
                        $("#BulkUpload_Placeholder").append('<tr><td colspan="6" class="text-center">No record found</td></tr>')
                }
            });
    },

    bindDropdowns: function (org_id, dropdown, dropdownToBind) {
        var params = { orgIdORsecId: org_id, dro: dropdown };
        ns_ajax.get(
            'api/ImportApi/',
            params,
            function (response) {
                if (response.split('|')[0] === 'OK') {
                    var serverResponse = $.parseJSON(response.split('|')[1]);
                    call_tmpl_binder(serverResponse.dropdown_data, '/Template/bulk_import_tmpl.html', '#' + dropdownToBind + '_Template', '#' + dropdownToBind + '_Placeholder');
                }
            }
        );
    },
    Get_JobRole_Location: function (clsLocation, clsRole) {
        var param = { id: '0' };
        ns_ajax.get(
            urls.rotaApi + "location",
            param,
            function (data) {
                if (data.Status == 'OK') {
                    var obj = data.Response; //jQuery.parseJSON(response.split('|')[1]);
                    var str = '';
                    //Location(s)
                    if (clsLocation !== '') {
                        str = '<option value="0">Select Location</option>';
                        $.each(obj.Location, function (key, value) {
                            str += "<option value=" + value.emp_location_id + " title='" + value.location_address + "'>" + value.emp_location_name + "</option>";
                        });
                        $(clsLocation).html(str);

                        setTimeout(function () {
                            $(clsLocation).multiselect({
                                includeSelectAllOption: true
                            });

                        }, 300);

                    }

                    //Job Role(s)  
                    if (clsRole !== '') {
                        str = '<option data-role-id="0" data-rate="0" value="0" >Select Role</option>';
                        $.each(obj.JobRole, function (key, value) {
                            str += "<option data-role-id='" + value.role_id + "' data-rate=" + value.cnd_custom_role_rate + " value=" + value.cnd_custom_role_id + " title='" + value.cnd_custom_role_name + "' style='color:" + value.cnd_custom_role_color + "'>" + value.cnd_custom_role_alias + "</option>";
                        });
                        $(clsRole).html(str);
                    }
                }
            });
    },
}


/*************************************************
 *     Role Master
 * **********************************************/
ns_roleMaster = {
    name: 'RoleMaster',
    InsertUpdateRoles: function () {
        var obj = {};
        obj.role_id = $('#btnSubmitRoles').attr('data-id');
        obj.role_name = $('#txtRole').val().trim();
        obj.role_alias = $('#txtRoleAlias').val().trim();
        obj.profile_type = $('#ddlProfileType').val();
        obj.sector_id = $('#ddlSectorRole').val();
        obj.role_code = $('#txtRoleCode').val();
        obj.role_color = $('#txtRoleColor').val();
        obj.sort_order = $('#txtSortorderNo').val();
        obj.parent_id = $('#chkParent').prop('checked') ? $('#ddlParent').val() : 0;
        obj.description = $('#txtDescription').val().trim();
        obj.IsVatApplicable = $('#vatapp').prop('checked') ? '1' : '0';
        obj.RoleType = $('#ddlRoleType').val();

        var msg = '', flag = 0;

        if (obj.sector_id == "") {
            flag = 1;
            msg = "Select a sector !";
            $('#ddlSectorRole').focus();
        }
        else if (obj.profile_type == "") {
            flag = 1;
            msg = "Select profile type !";
            $('#ddlProfileType').focus();
        }
        else if (obj.role_name == "") {
            flag = 1;
            msg = "Enter a role name !";
            $('#txtRole').focus();
        }
        else if (obj.role_alias == "") {
            flag = 1;
            msg = "Enter a role alias !";
            $('#txtRoleAlias').focus();
        }

        else if (obj.RoleType == "") {
            flag = 1;
            msg = "Select role type !";
            $('#ddlRoleType').focus();
        }
        else
            flag = 0;
        if (flag == 0) {
            try {
                ns_ajax.post(
                    'MasterSettings/InsertUpdateRoles',
                    obj,
                    function (response) {
                        if (response == "OK") {
                            if (obj.role_id == 0)
                                ShowAlertMessage("Message", "Role saved successfully", 'C');
                            else
                                ShowAlertMessage("Message", "Role updated successfully", 'C');
                            $('#ModalAddRole').modal('hide');
                            $(".modal-backdrop").css('display', 'none');
                            ns_roleMaster.getAllRolesDetails(ProfileType);
                        }
                        else
                            ShowAlertMessage("Message", response, 'A');
                    }
                );
            }
            catch (err) {
                ShowAlertMessage("Error", err.message, 'A');
            }
        }
        else
            ShowAlertMessage("Message", msg, 'A');

    },
    getAllRolesDetails: function (ProfileType) {
        var role_id = 0;
        var strVal = $('#txtSearchRole').val();
        var param = { role_id: role_id, ProfileType: ProfileType, strVal: strVal, PageNumber: PageNumber, PageSize: PageSize };
        ns_ajax.get(
            'MasterSettings/SelectAllRoles',
            param,
            function (response) {
                if (response.split('|')[0] == 'OK') {
                    var row = '';
                    var obj = jQuery.parseJSON(response.split('|')[1]);
                    var index = 1;
                    var counter = 0, rownumberFirst = 1, rownumberLast = 0;
                    $.each(obj, function (key, value) {
                        var id = value.role_id;
                        var status = value.status;
                        var strStatus = '<a id= "status-' + id + '" data-status="' + status + '" class="btn btn-sm ChangeRoleStatus ' + (status == 1 ? "btn-success" : "btn-warning") + '"><i id="istatus-' + id + '" class="zmdi ' + (status == 1 ? 'zmdi-check-all' : 'zmdi-money-off') + '"></i>' + (status == 1 ? '&nbsp;Active&nbsp;' : 'Inactive') + '</a>';
                        var strEdit = '<a id="edit-' + id + '" class="btn btn-outline-primary btn-sm EditRole" data-toggle="modal" data-target="#ModalAddRole"><i class="zmdi zmdi-edit"></i></a>';
                        var strDeafaultStatus = '<a id= "dstatus-' + id + '" data-dstatus="' + value.default_status + '" data-profile-type="' + value.profile_type + '"  class="btn btn-sm defaultRole-' + value.profile_type + ' ChangeDefaultStatus ' + (value.default_status == 1 ? "btn-success" : "btn-warning") + '">' + (value.default_status == 1 ? '&nbsp&nbsp&nbspDefault&nbsp&nbsp&nbsp' : 'Set Default') + '</a>';

                        row += '<tr class="capitalize">';
                        row += '<td><strong>' + value.RowNumber + '</strong></td>' +
                            '<td><span class="colourSelectorItemtable" style="background-color:' + value.role_color + '"></span><b style="color:' + value.role_color + '">' + value.role_name + '</b></td>' +
                            '<td><span><b>' + value.role_alias + '</b></span></td>' +
                            '<td>' + value.role_code + '</td>' +
                            '<td>' + value.profile_type + '</td>' +
                            '<td><b class="col-brown">' + value.parent + '</b></td>' +
                            '<td><b>' + value.role_type + '</b></td>' +
                            '<td><b>' + (value.is_vat_apllicable > 0 ? 'Yes' : 'No') + '</b></td>' +
                            '<td><b>' + value.sort_order + '</b></td>' +
                            '<td>' + value.sector_name + '</td>' +
                            '<td><span class="col-grey"><i class="zmdi zmdi-calendar">&nbsp;</i><b>' + value.create_date + ' </b></span></td>' +
                            '<td>' + strStatus + '</td>' +
                            '<td style="text-align:center">' + (value.parent_id > 0 ? strDeafaultStatus : '<b>NA</b>') + '</td>';
                        row += '<td>' + strEdit + '' +
                            '<a id="delete-' + id + '"  class="ion btn btn-outline-danger btn-sm DeleteRole">' +
                            '<div class="lid"></div>' +
                            '<div class="lidcap"></div>' +
                            '<div class="bin"></div></a>';
                        row += '</span></td></tr>';
                        //paging
                        totalCount = value.total_count;
                        if (counter == 0)
                            rownumberFirst = value.RowNumber;
                        else
                            rownumberLast = value.RowNumber;
                        counter++;
                        if (counter == 1)
                            rownumberLast = value.RowNumber;

                        if (PageNumber == 1) {
                            $(".btnPrev").addClass('a-disabled');
                            $(".btnPrev").removeClass('a-enabled');
                        }
                        else {
                            $(".btnPrev").addClass('a-enabled');
                            $(".btnPrev").removeClass('a-disabled');
                        }
                        if (rownumberLast == totalCount) {
                            $(".btnNext").addClass('a-disabled');
                            $(".btnNext").removeClass('a-enabled');
                        }
                        else {
                            $(".btnNext").addClass('a-enabled');
                            $(".btnNext").removeClass('a-disabled');
                        }
                        $('#AllCount').html(value.allCount);
                        $('#cndCount').html(value.cndCount);
                        $('#empCount').html(value.empCount);
                        $('#orgCount').html(value.orgCount);
                    });
                    $('.tbodayRoles').html(row);
                    $('.spanUnreadMsgCount').html("<b>" + rownumberFirst + " - " + rownumberLast + "</b> of <b>" + totalCount + "</b>");
                }
                else {
                    $('.tbodayRoles').html("<tr><td colspan='12'><center><strong>" + response + "</strong></center></td></tr>");
                    $('.spanUnreadMsgCount').html('');
                    if (ProfileType == 'CND')
                        $('#cndCount').html('0');
                    else if (ProfileType == 'EMP')
                        $('#empCount').html('0');
                    else if (ProfileType == 'ORG')
                        $('#orgCount').html('0');
                    else
                        $('#AllCount').html('0');
                }
            }
        );
    },
    EditRoles: function (roleId) {
        try {
            var param = { roleId: roleId };
            ns_ajax.get(
                'MasterSettings/SelectRole',
                param,
                function (response) {
                    if (response.split('|')[0] == "OK") {
                        var obj = jQuery.parseJSON(response.split('|')[1]);
                        $.each(obj, function (key, value) {
                            $('#txtRole').val(value.role_name);
                            $('#txtRoleAlias').val(value.role_alias);
                            $('#ddlProfileType').val(value.profile_type);
                            $('#ddlSectorRole').attr('data-sector-id', value.sector_id);
                            ns_roleMaster.LoadSectors();

                            $('#txtRoleCode').val(value.role_code);
                            $('#txtRoleColor').val(value.role_color);
                            $('#txtSortorderNo').val(value.sort_order);
                            if (value.parent_id > 0) {
                                $('#chkParent').prop('checked', true);
                                $('.Parent').show();
                                $('#ddlParent').attr('data-parent-id', value.parent_id);
                                ns_roleMaster.getParentType();
                            }
                            else {
                                $('#chkParent').prop('checked', false);
                                $('.Parent').hide();
                                $('#ddlParent').val('');
                            }
                            $('#txtDescription').val(value.description);
                            $('#ddlRoleType').val(value.role_type);
                            $('#vatapp').prop('checked', (value.is_vat_apllicable > 0 ? 'checked' : ''));

                        });
                        $('#ddlParent').val(parent_id);
                    }
                    else
                        ShowAlertMessage("Message", response, 'A');
                }
            );
        }
        catch (err) {
            ShowAlertMessage("Error", err.message, 'A');
        }
    },
    ChangeRoleStatus: function (roleId, status) {
        if (status == 1)
            status = 0;
        else
            status = 1;
        var param = "{ roleId: '" + roleId + "', status: '" + status + "' }";
        try {
            ns_ajax.post(
                'MasterSettings/ChangeRoleStatus',
                param,
                function (response) {
                    if (response == "OK") {
                        $('#status-' + roleId).attr('data-status', status);
                        if (status == 1)
                            $('#status-' + roleId).addClass("btn-success").removeClass("btn-warning");
                        else
                            $('#status-' + roleId).addClass("btn-warning").removeClass("btn-success");
                        $('#status-' + roleId).html((status == 1 ? '<i class="zmdi zmdi-check-all"></i>&nbsp;Active&nbsp;' : '<i class="zmdi zmdi-money-off"></i>Inactive'));
                        ShowAlertMessage("Message", "Status has been changed successfully", 'C');
                    }
                    else
                        ShowAlertMessage("Message", response, 'A');
                }
            );
        }
        catch (err) {
            ShowAlertMessage("Exception", err.message, 'A');
        }
    },
    ChangeRoleDefaultStatus: function (roleId, defaultStatus, profileType) {
        var param = "{ roleId: '" + roleId + "'}";
        try {
            ns_ajax.post(
                'MasterSettings/ChangeRoleDefaultStatus',
                param,
                function (response) {
                    if (response == "OK") {
                        $('.defaultRole-' + profileType).addClass("btn-warning").removeClass("btn-success");
                        $('.defaultRole-' + profileType).html('Set Default').attr('data-dstatus', 0);
                        $('#dstatus-' + roleId).addClass("btn-success").removeClass("btn-warning");
                        $('#dstatus-' + roleId).html('&nbsp&nbsp&nbspDefault&nbsp&nbsp&nbsp').attr('data-dstatus', defaultStatus);;
                        ShowAlertMessage("Message", "Role set as default successfully.", 'C');
                    }
                    else
                        ShowAlertMessage("Message", response, 'A');
                });
        }
        catch (err) {
            ShowAlertMessage("Exception", err.message, 'A');
        }
    },
    DeleteRole: function (roleId, status) {
        if (status == 1) {
            Toast_Warning("Warning", "Active status can not be deleted");
            return false;
        }
        try {
            var param = "{roleId : '" + roleId + "'}";
            ns_ajax.post(
                'MasterSettings/DeleteRole',
                param,
                function (response) {
                    if (response == "OK") {
                        if (response == "OK") {
                            ShowAlertMessage("Message", "Role deleted Successfully.", 'C');
                            ns_roleMaster.getAllRolesDetails(ProfileType);
                        }
                        else
                            ShowAlertMessage("Message", response, 'A');
                    }
                }
            );
        }
        catch (err) {
            ShowAlertMessage("Error", err.message, 'A');
        }
    },
    LoadSectors: function () {
        try {
            var param = '';
            ns_ajax.get(
                'MasterSettings/LoadSectors',
                param,
                function (response) {
                    if (response.split('|')[0] == 'OK') {
                        var output = '';
                        output = '<option selected="selected" value="">--Select Sector--</option>';
                        var obj = jQuery.parseJSON(response.split('|')[1]);
                        $.each(obj, function (key, value) {
                            output += '<option value="' + value.SectorId + '" class="capitalize">' + value.SectorName + '</option>';
                        });
                        $('#ddlSectorRole').html(output);
                        $('#ddlSectorRole').val($('#ddlSectorRole').attr('data-sector-id'));
                    }
                }
            );
        }
        catch (err) {
            ShowAlertMessage("Error", err.message, 'A');
        }
    },
    getParentType: function () {
        $('#ddlParent').empty();
        var ProfileType = $('#ddlProfileType').val();
        var SectorId = $('#ddlSectorRole').val();
        $.ajax({
            url: "/MasterSettings/LoadParentTypeRoles",
            method: "get",
            data: { ProfileType: ProfileType, SectorId: SectorId },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.split('|')[0] == 'OK') {
                    var obj = jQuery.parseJSON(response.split('|')[1]);
                    var row = '';
                    row += '<option value="">-Select Parent--</option>';
                    $.each(obj, function (key, value) {
                        row += '<option value="' + value.role_id + '" style="text-transform:capitalize">' + value.role_name + '</option>';
                    });
                    $('#ddlParent').html(row);
                    $('#ddlParent').val($('#ddlParent').attr('data-parent-id'));
                }
                else {
                    $('#ddlParent').html('<option value="">No Parent Found</option>');
                }
            },
            error: function (err) {
                ShowAlertMessage("Message", err, 'A');
            }
        });
    },
    Reset: function () {
        $("input[type=text], textarea, select").val('');
        $("#vatapp").prop("checked", "");
        $("#chkParent").prop("checked", "");
    },
    getAllActiveRoles: function (Id) {
        $('#txt' + Id).empty();
        $('#txt' + Id).append($("<option />").val(0).text('All Roles'));
        ns_ajax.get(
            'MasterSettings/FillDropdown',
            "",
            function (response) {
                if (response.split('|')[0] == 'OK') {
                    var obj = jQuery.parseJSON(response.split('|')[1]);
                    var currentparent = "", previousparent = "";
                    $.each(obj, function (key, value) {
                        currentparent = value.parent_id;
                        var color = (value.color_code == '' || value.color_code == null) ? '#ccc' : value.color_code;
                        if (previousparent == "" || currentparent != previousparent) {
                            jQuery('#txt' + Id).append($("<optgroup style='font-weight:bold;background-color:#ccc;' label='" + value.parent_name + "' id='" + value.parent_id + "'></optgroup>"));
                            previousparent = value.parent_id;
                        }
                        if (value.role_id != value.parent_id)
                            jQuery('#txt' + Id).append($("<option style='color:" + color + ";'></option>").val(value.role_id).html(value.role_name));
                    });
                }
            }
        );
    },
    getJobType: function (Id) {
        $('#txt' + Id).empty();
        $('#txt' + Id).append($("<option />").val(0).text('All'));
        $('#txt' + Id).append($("<option />").val('L').text('Temporary'));
        $('#txt' + Id).append($("<option />").val('P').text('Permanent'));
    },
    getJobtimesheetStatus: function (Id) {
        $('#txt' + Id).empty();
        $('#txt' + Id).append($("<option />").val('').text('All'));
        $('#txt' + Id).append($("<option />").val('1').text('Uploaded'));
        $('#txt' + Id).append($("<option />").val('0').text('Pending'));
    },

    GetEmployeeRoles: function (Cls) {
        var params = "dro=dr-dl";
        $(Cls).html('<option value="0">Choose role...</option>');     
      
        ns_ajax.get(
            urls.employeesApi,
            params,
            function (response) {
                if (response.split('|')[0] === 'OK') {
                    var obj = $.parseJSON(response.split('|')[1]);
                    var currentparent = "", previousparent = "";
                    $.each(obj.roles, function (key, value) {
                        currentparent = value.parent_id;
                        var color = (value.color_code == '' || value.color_code == null) ? '#ccc' : value.color_code;
                        if (previousparent == "" || currentparent != previousparent) {
                            $(Cls).append($("<optgroup style='font-weight:bold;background-color:#ccc;' label='" + value.parent_name + "' id='" + value.parent_id + "'></optgroup>"));
                            previousparent = value.parent_id;
                        }
                        if (value.role_id != value.parent_id)
                            $(Cls).append($("<option style='color:" + color + ";'></option>").val(value.role_id).html(value.role_name));
                    })
                }
            }
        );
    },

}
