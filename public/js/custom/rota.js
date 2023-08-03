var viewtype = 'planner';
var noofweeks = 1;
var employerid;
var weekcopied = false;
var copystartdate = "", pastestartdate = "";
var copiedemployees = "";
var userid = "0";
var ctrlDown = false;
var IdCounter = 0;
var profileurl = "";
var startdatemonth;
var employeeid = "";
var editmode = 0;
var totalCost = 0, totalHours = 0;
var offset_data = 0, next_data = 10;

//Uniqe_id Generator
function Generator() { };
Generator.prototype.rand = Math.floor(Math.random() * 26) + Date.now();
Generator.prototype.getId = function () {
    return this.rand++;
};
var idGen = new Generator();
//-----ENd--------------

$(document).ready(function () {
    //Tabs

    $(document).on("click", '.clsWorkpatternAbsence', function (evt) {    
        var JsonData = $(this).attr('data-json');
        var JsonData2 = $(this).find('div').html()
        var dataAsenceJson = $(this).find('span').html()
        var candidateName = $(this).attr('data-candidate');
      
        $('#spancndnamerole').html(candidateName.split('##')[0]);
        $('#modalCandidateWorkPatternAbsence').modal();      
        if (JsonData == '' || JsonData == null)
            $('#CndWorkTimePatternAbsence_Placeholder').html('<tr><td colspan="4"><div style="text-align: center;padding: 30px;">Work Pattern Not available !</div></td></tr>');
        else
            call_tmpl_binder(jQuery.parseJSON(JsonData2), '/Template/setting_tmpl.html', '#WorkPatternList_Template', '#CndWorkTimePatternAbsence_Placeholder');

        if (dataAsenceJson == '' || dataAsenceJson == null)
            $('#viewAbsence_Placeholder').html('<tr><td colspan="4"><div style="text-align: center;padding: 30px;">No Absences</div></td></tr>');
        else
            call_tmpl_binder(jQuery.parseJSON(dataAsenceJson), '/Template/setting_tmpl.html', '#viewAbsence_Template', '#viewAbsence_Placeholder');

    });   

    $(document).on('click', '.clsrefreshjobplanner', function () {
        ns_rota_planner.GetWeekPlanner('Current');
        $('#chkInternalshiftsPlanner').prop('checked',true);
    });

    $(document).on('click', '.clsRefreshSwapRequest', function () {
        ns_rota_planner.GetShiftSwapRequest();
    });

    $(document).on('click', '.viewswaprequest', function () {
        viewtype = $(this).attr('data-value');       
        if (viewtype == 'swaprequest') {
            $('.hideforPlanner').addClass('hidethis');
            $('.clsPlannername').addClass('hidethis');
            $('.clsseachArea').addClass('hidethis');
            $('.clsRefreshAppliedShift').addClass('hidethis');
            
            $('.clsRefreshSwapRequest').removeClass('hidethis');           
            ns_rota_planner.GetShiftSwapRequest();
        }      
    });

    $(document).on('click', '.clsRefreshAppliedShift', function () {
        ns_rota_planner.GetAppliedShifts();
    });
    $(document).on('click', '.viewappliedShift', function () {
        viewtype = $(this).attr('data-value');
        if (viewtype == 'applied') {
            $('.hideforPlanner').addClass('hidethis');
            $('.clsPlannername').addClass('hidethis');
            $('.clsseachArea').addClass('hidethis');
            $('.clsRefreshSwapRequest').addClass('hidethis');
            $('.clsRefreshAppliedShift').removeClass('hidethis');
            ns_rota_planner.GetAppliedShifts();
        }
    });
    
    $(document).on('click', '.ClsShiftRequest', function (e) {
        $('#divswapmsg').html('');
        var action = $(this).attr('data-action');
        if (action == 'approve' || action == 'decline') {
            $('.btnswapApprove').attr('data-req-uid', $(this).attr('req_uid'));
            var datajson = $(this).attr('data-json');
            ns_rota_planner.ViewSwapReqDetail(datajson);
        }
        if (action == 'submit') {
            var req_uid = $(this).attr('data-req-uid');
            var status = $('input[name="rdoSwapApproveStatus"]:checked').val();           
            var comments = $('#txt_swap_approval_comments').val();
            if (status == undefined) {
                $('input[name="rdoSwapApproveStatus"]').focus();
                $('#divswapmsg').html('Select Action');               
                return false;
            }          
            else {
                var job_id = $('#btnswap').attr('data-job_id');
                var obj = {};
                obj.action = 'approve_decline';
                obj.req_uid = req_uid;
                obj.status = status;
                obj.comments = comments;
                var params = "[" + JSON.stringify(obj) + "]";
                ns_rota_planner.ActionSwapRequest(params, e);
            }          
        }
    });
    
    $(document).on('click', '.viewtype', function () {
        viewtype = $(this).attr('data-value');
      
        $('.clsRefreshSwapRequest, .clsRefreshAppliedShift').addClass('hidethis');
      
        if (viewtype == 'planner') {
            $('.hideforPlanner').addClass('hidethis');
            $('.clsPlannername').removeClass('hidethis');
             $('.clsseachArea').removeClass('hidethis');
            $('.hideforEmployeetype').addClass('hidethis');
       
            $('#startTourBtn').attr('data-tour-action','planner');
            noofweeks = 1;
            ns_rota_planner.SetWeeks();

           

        }
        else if (viewtype == 'timeline') {          
            $('.hideforPlanner').addClass('hidethis');
            $('.clsPlannername').addClass('hidethis');
            $('.clsseachArea').removeClass('hidethis');
    
            $('#startTourBtn').attr('data-tour-action', 'timeline');
        }
       
        else if (viewtype == 'employee') {
            $('.hideforEmployer').addClass('hidethis');
            $('.clsPlannername').addClass('hidethis');
            $('.clsseachArea').removeClass('hidethis');
            $('.hideforEmployeetype').removeClass('hidethis');
            $('.hideforPlanner').removeClass('hidethis');
   
            $('#startTourBtn').attr('data-tour-action', 'employee');
        }
        //else if (viewtype == 'role') {
        //    $('.hideforEmployer').removeClass('hidethis');
        //    $('.clsPlannername').removeClass('hidethis');
        //}
        else {
         
            $('.hideforEmployeetype').addClass('hidethis');
            $('.hideforPlanner').removeClass('hidethis');
            $('.clsPlannername').addClass('hidethis');
            $('.clsseachArea').removeClass('hidethis');
            $('.hideforEmployer').removeClass('hidethis');           
            $('#startTourBtn').attr('data-tour-action', 'rota');
        }
        ns_rota_planner.GetWeekPlanner('Current');

    
    });

    $(document).on('click', '.clsMakeLiveOffline', function () {
        var action = $(this).attr('data-action');
        var jobs_id = '';
        if (action == 'live') {
            $(".clsRoleViewjobsRow").find("td").each(function () {
                $(this).find('.unpublishedshiftopen').each(function () {
                    if ($(this).css('display') === 'block') {
                        var jid = $(this).attr('data-job-id');
                        if ($.isNumeric(jid))
                            jobs_id += jid + ',';
                    }
                });                
            });


            //$(".clsRoleViewjobsRow").find("td").each(function () {
            //    //$(this).find("unpublishedshiftopen").each(function () {
            //    //    alert($(this).attr('data-job-id'));
            //    //});
            //    if ($(this).find(".unpublishedshiftopen").css('display') === 'block') {
            //        var jid = $(this).find(".unpublishedshiftopen").attr('data-job-id');
            //        if ($.isNumeric(jid))
            //            jobs_id += jid + ',';
            //    }
            //});
        }
        else if (action == 'offline') {

            $(".clsRoleViewjobsRow").find("td").each(function () {
                $(this).find('.publishedshift').each(function () {
                    if ($(this).css('display') === 'block') {
                        var jid = $(this).attr('data-job-id');
                        if ($.isNumeric(jid))
                            jobs_id += jid + ',';

                    }
                });
            });

            //$(".clsRoleViewjobsRow").find("td").each(function () {
            //    if ($(this).find(".publishedshift").css('display') === 'block') {
            //        var jid = $(this).find(".publishedshift").attr('data-job-id');
            //        if ($.isNumeric(jid))
            //            jobs_id += jid + ',';
            //    }
            //});
        }
        //alert(jobs_id);
        //return false;
        if (jobs_id !== '') {
            jobs_id = jobs_id.slice(0, -1);
            //alert('Make ' + action + ':   {' + jobs_id + '}');
            var obj = {};
            obj.job_id = jobs_id;
            obj.action = action;
            var param = "[" + JSON.stringify(obj) + "]";
            
            ns_rota_planner.MakeLiveOffline(param, action);
        }
        else {
            alert(action + ' jobs not avialable for this action.');
        }
    });

    $(document).on('change', '#ddlPlanner', function () {
        viewtype = 'planner';
        $('.hideforPlanner ').addClass('hidethis');
        $('.clsPlannername ').removeClass('hidethis');
        $('#ddlPlanner').css('border', '1px solid #ced4da');
        ns_rota_planner.GetWeekPlanner('Current');
    });
    $(document).on('click', '#btn_copy_from_planner', function () {
        $('#RotaPlannerShifts_Placeholder').css("border-color", "#C1D6F1");
        ns_rota_planner.GetPlanners('#ddlPlannerCopy');
        ns_rota_planner.Get_Shift_JobRole_Location_masters('#ddlRotaDestinationLocations', '0', '0', '0', '0');
        $('#txtcopyfromdate').val('');
        $('#ddltoweek').val('');
        $('#RotaPlannerShifts_Placeholder').html('<span style="color:#b8cce7; font-size:22px;">No Shift(s)</span>');
        $('#ModalCopyPlanner').modal();

    });
    $(document).on('click', '#btnCopyPlanner', function () {
        ns_rota_planner.CopyShiftPlanner();
    });
    $(document).on('change', '#ddlPlannerCopy', function () {
        var uid = $(this).val();
        var planername = $(this).children("option:selected").text();
        if (uid !== '') {
            /*$('#divPlannerCopyLocation').show();*/
            $('#divPlannerCopyDestinationLocation').show();
            $('#ddlPlannerCopyLocation').val(planername.substring(planername.lastIndexOf("-") + 1));
            var destination_location_id=$('#ddlRotaDestinationLocations').val();
            ns_rota_planner.GetPlannerShifts(uid, destination_location_id);
           /* $('#ddlRotaDestinationLocations').val('0');           */
            
        }
        else {
          /*  $('#divPlannerCopyLocation').hide();*/
            $('#divPlannerCopyDestinationLocation').show();
            $('#ddlPlannerCopyLocation').val('');
            $('#RotaPlannerShifts_Placeholder').html('<span style="color:#b8cce7; font-size:22px;">No Shift(s)</span>');
        }

    });

    $(document).on('change', '#ddlRotaDestinationLocations', function () {
        var destination_location_id = $(this).val();
        var uid = $('#ddlPlannerCopy').val();
        var planername = $('#ddlPlannerCopy').children("option:selected").text();
        if (uid !== '') {
          /*  $('#divPlannerCopyLocation').show();*/
            $('#divPlannerCopyDestinationLocation').show();
            $('#ddlPlannerCopyLocation').val(planername.substring(planername.lastIndexOf("-") + 1));         
            ns_rota_planner.GetPlannerShifts(uid, destination_location_id);            
        }
        else {
           /* $('#divPlannerCopyLocation').hide();*/
            $('#divPlannerCopyDestinationLocation').show();
            $('#ddlPlannerCopyLocation').val('');
            $('#RotaPlannerShifts_Placeholder').html('<span style="color:#b8cce7; font-size:22px;">No Shift(s)</span>');
        }
    });

    $(document).on('click', '.btn-add-role-on-location', function () {
        var loc_id = $(this).attr('data-location');
        $('#btnaddlocationRole').attr('data-val', loc_id);
        $('#clslocationname').html($(this).attr('data-location-name'));
        $('#addlocationtitle').html('Add / Update Location Roles');
        ns_rota_planner.GetJobRoles(loc_id);
    });
    $(document).on('click', '#btnaddlocationRole', function () {
        var loc_id = $(this).attr('data-val');
        ns_rota_planner.AddUpdateLocationRoles(loc_id);
    });

    $(".selectweekvisible").on('click', function () {
        noofweeks = this.id;
        ns_rota_planner.SetWeeks();
        ns_rota_planner.GetWeekPlanner('Start');
    });
    //Prev
    $('#btnpreviousweek').on('click', function () {
        ns_rota_planner.GetWeekPlanner('Previous');
    });
    //Next
    $('#btnnextweek').on('click', function () {
        ns_rota_planner.GetWeekPlanner('Next');
    });

    $(document).on('change', '#ddlRotaLocations', function () {
        $('#ddlRotaLocations').css('border', '1px solid #ced4da');
        ns_rota_planner.GetWeekPlanner('Current');
    });

    $(document).on('focusout', '#txtPlannername', function () {
        $('#txtPlannername').css('border', '1px solid #ced4da');
    });


    $(document).on('change', '#ddlRotaRoles', function () {
        ns_rota_planner.GetWeekPlanner('Current');
    });
    $(document).on('change', '#ddlRotaCandidateType', function () {
        ns_rota_planner.GetWeekPlanner('Current');
    });
    $(document).on('change', '#ddlRolesDragdrop', function () {
        var role_id = $('#ddlRolesDragdrop').val();
        ns_rota_planner.Get_Shift_JobRole_Location_masters('', '', '#selectshifttiming', role_id, '0');
    });
    $(document).on('change', '#ddlRolesDragdropEmp', function () {
        var role_id = $('#ddlRolesDragdropEmp').val();
        $('.clscandidateslist ul li').each(function () {
            if (role_id == '0') $(this).show();
            else { if ($(this).attr("data-cnd_role_id") === role_id) $(this).show(); else $(this).hide(); }
        });
    });

    //Post jobs
    $(document).on("click", ".btn-action-planner", function () {
        
        var action = $(this).attr('data-action');
        if (action == 'addplanner') {
            $("#txtstarttimePlanner").val('');
            $("#txtendtimePlanner").val('');
            $("#txtdurationPlanner").val('');
            $("#txtbreakinminPlanner").val('');
            $("#txtNotePlanner").val('');

            var plannername = $('#ddlPlanner').val();
            var rolename = $('#ddlRotaLocations').val();

            $('#ddlRotaLocations, #ddlPlanner').css('border', '1px solid #ced4da');
            if (rolename == '0') {
                $('#ModalCreatePlanner').modal('hide');
                $(".modal-backdrop").css('display', 'none');

                $('#ddlRotaLocations').css('border', '1px solid #f00');
                $('#ddlRotaLocations').focus();
                ShowAlertMessage("Message", 'Please select a location', "A");
                return false;
            }
            else if (plannername == '') {
                $('#ModalCreatePlanner').modal('hide');
                $(".modal-backdrop").css('display', 'none');
                $('#ddlPlanner').css('border', '1px solid #f00');
                $('#ddlPlanner').focus();
                ShowAlertMessage("Message", 'Please select a planner', "A");
                return false;
            }
            else {
                var role_id = $(this).attr('data-role_id');
                var location_id = $(this).attr('data-location_id');
                var week = $(this).attr('data-week');
                var day = $(this).attr('data-date');
                var role = $(this).attr('data-role');
                var rolecolor = $(this).attr('data-role-color');
                var location = $(this).attr('data-location');
                $('#spnDay').html(day);
                $('#spnDay').attr('data-week', week);
                $('#spnLocationName').html(location);
                $('#spnRolePlanner').html(role).css('color', rolecolor);
                $('#btnCreatePlanner').attr('data-action', 'addplannershift');
                $('#btnCreatePlanner').attr('data-id', '');
                $('#btnCreatePlanner').attr('data-shift_id', '');
                $('#btnCreatePlanner').attr('data-item_id', '');
                ns_rota_planner.Get_Shift_JobRole_Location_masters('#ddlLocationPlanner', '#ddlRolePlanner', '', role_id, location_id);
            }
        }
        else if (action == 'updateplanner') {
            var data_item_id = $(this).attr('id');
            var data_shift_id = $(this).attr('data-shift_id');          
            var data_uid = $(this).attr('data-uid');
            var role_id = $(this).attr('data-role_id');
            var location_id = $(this).attr('data-location_id');
            var week = $(this).attr('data-week');
            var day = $(this).attr('data-date');
            var role = $(this).attr('data-role');
            var rolecolor = $(this).attr('data-role-color');
            var location = $(this).attr('data-location');
            var time = $(this).attr('data-time');
            var duration = $(this).attr('data-duration');
            var shif_break = $(this).attr('data-break');          
            var note = $(this).attr('data-note');
            $('#spnDay').html(day);
            $('#spnDay').attr('data-week', week);
            $('#spnLocationName').html(location);
            $('#spnRolePlanner').html(role).css('color', rolecolor);

            $("#txtstarttimePlanner").val(time.split("-")[0]);
            $("#txtendtimePlanner").val(time.split("-")[1]);
            $("#txtdurationPlanner").val(duration);
            $("#txtbreakinminPlanner").val(shif_break);
           
           
            $("#txtNotePlanner").val(note);
            $('#btnCreatePlanner').attr('data-action', 'updateplannershift');
            $('#btnCreatePlanner').attr('data-id', data_uid);
            $('#btnCreatePlanner').attr('data-shift_id', data_shift_id);
            $('#btnCreatePlanner').attr('data-item_id', data_item_id);
            
            ns_rota_planner.Get_Shift_JobRole_Location_masters('#ddlLocationPlanner', '#ddlRolePlanner', '', role_id, location_id);
        }
        else {
            var id = $(this).attr('id');
            var profilename = $(this).attr('data-profile-name');
            var role = $(this).attr('data-role');
            var role_id = $(this).attr('data-role_id');
            var location_id = $(this).attr('data-location_id');
            var cnd_id = $(this).attr('data-cnd_id');
            var job_id = $(this).attr('data-job_id');
            var DefaultRate = '0';
            var date = $(this).attr('data-date');
            var time = $(this).attr('data-time');
            var duration = $(this).attr('data-duration');
           


            $('#btnJobPostAndAssign').attr('data-action', action);
            $('#btnJobPostAndAssign').attr('data-job_id', job_id);

          
            if (action == 'jobpost') {
                ns_rota_planner.ClearControls();
                $('#spnProfileName').html(profilename);
                $('#spnRole').html(role);
                $('#spnDate').html(date);
                $('#txtshiftdate').val(date);
                $('#ddlShiftTime').attr('data-custome-time', '0');
                $("#txtstarttime").val('');
                $("#txtendtime").val('');
                $("#txtduration").val('0');
                $("#txtdurationrate").val('0');
                $('#rdo_jobstatus').prop('checked',true); 
                ns_rota_planner.Get_Shift_JobRole_Location_masters('#ddlLocation', '#ddlRole', '#ddlShiftTime', role_id, location_id);
                $('#spnDefaultRate').html(DefaultRate);
                if (role_id !== '0' && location_id !== '0') {
                    $('#ddlEmployee').attr('cnd_id', cnd_id);
                    ns_rota_planner.GetEmployeeList(location_id, role_id);
                }
            }
            if (action == 'jobupdate') {
                var DataTarget = $(this).attr('data-target');
                if (DataTarget == '#ModalUpdateRelocatedShift') {                   
                 /*   ns_rota_planner.ClearControls();*/
                    $('#spnProfileNameRelocate').html(profilename);
                    $('#spnRoleRelocate').html(role);
                    $('#spnDateRelocate').html(date);     
                    $("#txtstarttimeRelocate").val(time.split("-")[0]);
                    $("#txtendtimeRelocate").val(time.split("-")[1]);
                    $("#txtdurationRelocate").val(duration);
                    ns_rota_planner.Get_Shift_Location_masters('#ddlLocationRelocate', location_id);
                    $('#btnUpdateRelocatedShift').attr('data-action', 'UpdateRelocatedShift');
                    $('#btnUpdateRelocatedShift').attr('data-job_id', job_id);
                }
                else{

                    var job_status = $(this).attr('data-status');
                    var overtime_status = $(this).attr('data-overtime_status');
                    var agency_fee_hourly = $(this).attr('data-admin-fee-hourly');

                    ns_rota_planner.ClearControls();

                    $('#spnProfileName').html(profilename);
                    $('#spnRole').html(role);
                    $('#spnDate').html(date);
                    $('#txtshiftdate').val(date);
                    $('#ddlShiftTime').attr('data-custome-time', '');
                    $("#txtstarttime").val(time.split("-")[0]);
                    $("#txtendtime").val(time.split("-")[1]);
                    $("#txtduration").val(duration);
                    $("#txtshiftAdminFee").val(agency_fee_hourly);
                    $("#txtdurationrate").val(duration);
                    $('#chk_overtime_shift').prop('checked', overtime_status == '1' ? true : false);

                    $('#rdo_jobstatus').prop('checked', job_status == '1' ? true : false);
                    $('#divJob').removeClass('hide').addClass('show');
                    ns_rota_planner.Get_Shift_JobRole_Location_masters('#ddlLocation', '#ddlRole', '#ddlShiftTime', role_id, location_id);

                    $('#spnDefaultRate').html(DefaultRate);
                    $('#ddlEmployee').attr('cnd_id', cnd_id);
                    ns_rota_planner.GetEmployeeList(location_id, role_id);
                }
                setTimeout(function () {
                    //Write here code

                }, 500);
            }
        }
    });
    $(document).on("click", "#btnJobPostAndAssign", function () {
        var action = $(this).attr('data-action');
        ns_rota_planner.PostAndAssignJob(action);
    });
    $(document).on("click", "#btnUpdateRelocatedShift", function () {
        var action = $(this).attr('data-action');
        ns_rota_planner.UpdateRelocatedShift(action);
    });
    

    $(document).on("click", "#btnJobPostAndAssignDrag", function () {    
        $('#txtDragStarttime, #txtDragEndtime').css('border', '1px solid #ced4da');
        var startTime = $('#txtDragStarttime').val();
        var endTime = $('#txtDragEndtime').val();
        var breakinmin = $('#txtDragBreak').val().trim() == '' ? '0' : $('#txtDragBreak').val().trim();
        var override_status = $('#chkoverrideCndTime').prop('checked') ? 1 : 0;        
       
        var jobJson = $(this).attr('data-json');  
        if (startTime == '') {
            $('#txtDragStarttime').css('border', '1px solid #f00');
            $('#txtDragStarttime').focus();
            ShowAlertMessage("Message", 'Please enter start time', "A");
            return false;
        }
        else if (endTime == '') {
            $('#txtDragEndtime').css('border', '1px solid #f00');
            $('#txtDragEndtime').focus();
            ShowAlertMessage("Message", 'Please enter end time', "A");
            return false;
        }
        else {
            var obj = jQuery.parseJSON(jobJson);
            obj.start_time = startTime;// jobtime.split("-")[0];
            obj.end_time = endTime;// jobtime.split("-")[1];
            obj.break_in_min = breakinmin;
            obj.override_status = override_status;
            var param = "[" + JSON.stringify(obj) + "]";   

            var roleid = obj.role_id;
            var locationid = obj.location_id;            
            var jobdate=obj.job_date;
            var mydate = jobdate.split('/')[1] + '-' + jobdate.split('/')[0] + '-' + jobdate.split('/')[2];          
            var cellitemid = mydate + '-' + locationid + '-' + roleid;
            var TableCellid = 'td-0-' + mydate + '-' + locationid + '-' + roleid;

            jQuery('#' + TableCellid).addClass('process-start');
            jQuery('#' + TableCellid).addClass('process-start-inner');
            jQuery('#job-0-' + cellitemid).addClass('process-start');
            jQuery('#employeeshifts-0-' + cellitemid).addClass('process-start-inner');

            
            $('#btnJobPostAndAssignDrag').html('Process..<img src="/images/spin.gif" />');
            ns_ajax.post(
                urls.rotaApi + "jobpost",
                param,
                function (response) {
                    $('#btnJobPostAndAssignDrag').html('Proceed >>');
                    $('#txtDragStarttime, #txtDragEndtime').css('border', '1px solid #ced4da');
                    if (response.split('|')[0] == 'OK') {
                        $('#btnJobPostAndAssignDrag').attr('data-json', "");
                        ShowAlertMessage("Message", 'Job has been assigned successfully.', "C");
                        $('#modalSetTime').modal('hide');
                        $(".modal-backdrop").css('display', 'none');
                        jQuery('#' + TableCellid).removeClass('process-start');
                        jQuery('#' + TableCellid).removeClass('process-start-inner');
                        jQuery('#job-0-' + cellitemid).removeClass('process-start');
                        jQuery('#employeeshifts-0-' + cellitemid).removeClass('process-start-inner');
                        jQuery('#RotaPlannerRoleEmpSingleJob_Template').tmpl(jQuery.parseJSON(response.split('|')[1])).appendTo('#' + TableCellid);
                        //ns_rota_planner.GetWeekPlanner('Current');
                        setTimeout(
                            function () {
                                toolTIP();
                            }, 500);
                    }
                    else {
                        ShowAlertMessage("Message", response, "A");
                        jQuery('#' + TableCellid).removeClass('process-start');
                        jQuery('#' + TableCellid).removeClass('process-start-inner');
                        jQuery('#job-0-' + cellitemid).removeClass('process-start');
                        jQuery('#employeeshifts-0-' + cellitemid).removeClass('process-start-inner');
                    }
                });
        }
    });

    $(document).on('focusout', '#txtDragStarttime, #txtDragEndtime', function () {
        $('#txtDragStarttime, #txtDragEndtime').css('border', '1px solid #ced4da');
    });


    $(document).on("click", "#btnCreatePlanner", function () {
        ns_rota_planner.PostPlanner();
    });

    $(document).on("change", "#ddlShiftTime", function () {
        if ($('#ddlShiftTime').val() !== '0') {
            var start = $('#ddlShiftTime option:selected').attr('data-start-time');
            var end = $('#ddlShiftTime option:selected').attr('data-end-time');
            var duration = $('#ddlShiftTime option:selected').attr('data-duration');
            $('#txtstarttime').val(start);
            $('#txtendtime').val(end);
            $('#txtduration').val(duration);
            $("#txtdurationrate").val(duration);
            $('#divJob').removeClass('hide').addClass('show');
         
                $('#spanCndWp').attr('data-candidate', "");
                $('#spanCndWp').attr('data-json', "");
                $('#spanCndWp').hide('slow');           
        }
        else {
            $('#txtstarttime').val('');
            $('#txtendtime').val('');
            $('#txtduration').val('0');
            $("#txtdurationrate").val('0');
            ns_rota_planner.ClearControls(); 
            
                $('#spanCndWp').attr('data-candidate', "");
                $('#spanCndWp').attr('data-json', "");
                $('#spanCndWp').hide('slow');          
        }
    });
    $(document).on("change", "#ddlLocation", function () {
        var location_id = $("#ddlLocation").val();
        var role_id = $("#ddlRole").val();
        ns_rota_planner.GetEmployeeList(location_id, role_id);

    });
    $(document).on("change", "#ddlRole", function () {
        if ($('#ddlRole').val() !== '0') {
            var location_id = $("#ddlLocation").val();
            var role_id = $("#ddlRole").val();

            var rate = $('#ddlRole option:selected').attr('data-rate');
            if (parseFloat(rate) > 0) {
                $('.clsjobrolecost').show();
                $('#spnDefaultRate').html(rate);
                $('#txtshiftrate').val(parseFloat(rate).toFixed(2));
            }
            else
                $('.clsjobrolecost').hide();

            ns_rota_planner.GetEmployeeList(location_id, role_id);
        }
        else
            $('#spnDefaultRate').html('0.00');
    });

    $(document).on("change", "#ddlEmployee", function () {
        ns_rota_planner.calculateestimatedcost();
        if ($('#ddlEmployee').val() !== '0') {
            var candidate = $("#ddlEmployee option:selected").text();
            var Patternjson = $("#ddlEmployee option:selected").attr('data-json');
            $('#spanCndWp').attr('data-candidate', candidate);
            $('#spanCndWp').attr('data-json', Patternjson);
            $('#divCndWp').html(Patternjson);
         
            $('#spanCndWp').show('slow');
        }
        else {
            $('#spanCndWp').attr('data-candidate', "");
            $('#spanCndWp').attr('data-json', "");  
            $('#divCndWp').html('');
            $('#spanCndWp').hide('slow');
        }
    });

    $(document).on("change", "#chk_overtime_shift", function () {        
        ns_rota_planner.calculateestimatedcost();
    });
    
    $('#txtshiftrate').on('input', function () {
        ns_rota_planner.calculateestimatedcost();
    });

    //$('#txtshiftrate').keypress(function (event) {
    //    return isDecimal(event, this);
    //});
    //$('#txtshiftAdminFee').keypress(function (event) {
    //    return isDecimal(event, this);
    //});
    $('#txtshiftAdminFee').on('input', function () {  
        var fee = $(this).val();
        var shiftcost = $('.shiftcost').attr('cost');
        var duration = $(".txtduration").val();
        var agency_fee = parseFloat(fee) * parseFloat(duration);
      
        if (parseFloat(agency_fee) > 0)
            $('.shiftcost').html(parseFloat(shiftcost) + parseFloat(agency_fee));
        else
            $('.shiftcost').html(shiftcost);
    });
    //Drag & drop
    $(window).on("keydown", function (event) {
        if (event.which === 17) {
            ctrlDown = true;
        }
    }).on("keyup", function (event) {
        ctrlDown = false;
    });

    $(document).on('change', '.chksummarycheck', function () {
        if ($(this).attr('id') == 'chkopen') {
            if ($(this).is(":checked")) {
                $('#chkunpublished, #chkpublished').prop('checked', true);
            }
            else {
                $('#chkunpublished, #chkpublished').prop('checked', false);
            }
        }
        ns_rota_planner.VisibileBySummary();
    });

    $(document).on('change', '#chkInternalshifts', function () {     
        if ($(this).is(":checked")) {          
                $('.cls-internal-shift').show();
            }
            else {
                $('.cls-internal-shift').hide();
            }       
    });

    $(document).on('change', '#chkInternalshiftsPlanner', function () {
        if ($(this).is(":checked")) {
            $('.cls-internal-shift').show();
        }
        else {
            $('.cls-internal-shift').hide();
        }
    });

    $(document).on('click', '.btn-planner-name-action', function () {
        var action = $(this).attr('data-action');
        if (action == 'addnew') {
            $('#ddlPlanner').hide();
            $('#txtPlannername').show();

            $('#btnAddPlannerNameCancel').show();

            $('#btnAddPlannerName').html('Save');
            $('#btnAddPlannerName').attr('data-action', 'save');
        }
        if (action == 'cancel') {
            $('#txtPlannername').hide();
            $('#ddlPlanner').show();
            $('#btnAddPlannerNameCancel').hide();
            $('#btnAddPlannerName').html('<i class="fa fa-plus">&nbsp;</i>Add');
            $('#btnAddPlannerName').attr('data-action', 'addnew');
            $('#ddlRotaLocations').val('0');
            $('#txtPlannername').val('');
            $('#txtPlannername').css('border', '1px solid #ced4da');
            $('#ddlRotaLocations').css('border', '1px solid #ced4da');
           // ns_rota_planner.GetWeekPlanner('Start');
        }
        if (action == 'save') {
            ns_rota_planner.SavePlanner();
        }
    });

    $(document).on('change', ".calculateDuration", function () {
        fn_calculateDuration(this);
    });
    //$(document).on('keyup', ".calculateDuration", function () {
    //    fn_calculateDuration();
    //});

    $(document).on('click', ".cls-internal-user-shift", function () {
        var id = $(this).attr('id');
        var cnd_id = $(this).attr('data-cnd_id');
        var action = $(this).attr('data-action');
        var cnd_name = $(this).attr('data-cnd_name');
        var date = $(this).attr('data-date');
        var time = $(this).attr('data-time');
        var start_time = '', end_time = '';
        if (time !== '') {
            start_time = time.split('-')[0].trim();
            end_time = time.split('-')[1].trim();
        }
        var current_location = $(this).attr('data-location');
        var isRelocate = $(this).attr('data-isRelocate');
      
        $('#btnRelocateShift').attr('data-val', id);
        $('#btnRelocateShift').attr('data-time', time);
        if (action == "change_location" && isRelocate !== '1') {
            $("#lblJobId").html("<p class='text-center mb-3'><b>Are you sure you want to update the following shift?</b></p>" +
                "<div class='row justify-content-center'>" +
                "<p class= 'col-black col-6  text-right' > Employee Name:  </p> <p class='text-left col-6'>" + cnd_name + "</p >" +
                "<p class='col-black col-6 text-right mb-2'>Current location:  </p><p class='text-left col-6 '><i class='zmdi zmdi-pin col-grey'>&nbsp;</i>" + current_location + "</p>" +
                "<p class= 'col-black col-6  text-right'> Shift Date:  </p><p class='text-left col-6  mb-2'>" + date + "</p >" +
                "<p class='col-black col-6 text-right'>Shift Time:  </p>" +
                "<div class='text-left col-6'>" +
                "<div id='divRelocateTimeLbl'>" + time + "<a class= 'cls-relocate ml-1' data-action='edittime' > <i class='fa fa-edit'></i></a ></div>" +
                "<div id='divRelocateTime' style='display:none' class='input-group  ClsDatepair unset mb-1'>" +
                "<input type='text' id='txtstarttime' class='form-control time start  ui-timepicker-input' style='width:80px' placeholder='hh:mm' value='" + start_time + "' autocomplete='off'> " +
                "<input type='text' id='txtendtime' class='form-control time end ml-1 ui-timepicker-input' style='width:80px' placeholder='hh:mm' value='" + end_time + "' autocomplete='off'> " +
                "<a class= 'cls-relocate ml-1 pt-2' data-action='closetime' > <i class='fa fa-close'></i></a >" +
                "</div>" +

                "</div>" +

                "<p class='col-black col-6 text-right pt-1'>Relocate to:  </p><p class='text-left col-6'><select id='ddlRelocateLocations' class='form-control'><option>Select location</option></select></p>" +
                "<div>");
            $("#popupDeleteHeading").html("Confirmation Message!")
            $("#btnPopYes").attr('data-val', id).attr('data-action', action);
            $(".modelRelocateConfirmation").modal("show");

            setTimeout(function () {
                DatePairFuction();
                ns_rota_planner.GetEmployeeLocation(cnd_id);
            }, 500);

        }
        else {
            ShowAlertMessage("Message", "Already Relocated", "");
        }
    });


    $(document).on('click', ".cls-relocate", function () {       
        var action = $(this).attr('data-action');
        if (action == "jobpost") {
            var cnd_sub_type = "P";
            var value = $(this).attr('data-val');
            var job_date = value.split('-')[2];
            var current_location_id = value.split('-')[3];
            var role_id = value.split('-')[4];
            var cnd_id = value.split('-')[5];
            var time = $(this).attr('data-time');
            var start_time = '', end_time = '';
            if (time !== '') {
                start_time = time.split('-')[0].trim();
                end_time = time.split('-')[1].trim();
            }            
            var location_id = $('#ddlRelocateLocations').val();
            var note = 'Relocated shift';

            var relocate_reference = value;           
            if (location_id==0) {
                ShowAlertMessage("Message", 'Please select location.', "A");
                $('#ddlRelocateLocations').focus();
                return false;
            }
            else if (current_location_id == location_id) {
                ShowAlertMessage("Message", 'Shift can not relocate with same location.<br>Please select different location from list.', "A");
                $('#ddlRelocateLocations').focus();
                return false;
            }
            else {
                var obj = {};
                obj.job_id = 0;
                obj.role_id = role_id;
                obj.location_id = location_id;
                obj.cnd_id = cnd_id;
                obj.cnd_sub_type = cnd_sub_type;
                obj.job_date = job_date;
                obj.start_time = start_time;
                obj.end_time = end_time;
                obj.break_in_min = 0;
                obj.job_rate_emp = 0;
                obj.job_admin_fee = 0;
                obj.job_rate_cnd = 0
                obj.note = note;
                obj.overtime_status = 0;
                obj.publish = 1;
                obj.relocate_reference = relocate_reference;
                obj.action = action;
                var param = "[" + JSON.stringify(obj) + "]";
                ns_rota_planner.RelocateShift(param);
            }
        }
        else if (action == "no") {
            $(".modelRelocateConfirmation").modal("hide");
        }
        else if (action == "edittime") {
            $("#divRelocateTimeLbl").hide();
            $("#divRelocateTime").show('slow');
        }
        else if (action == "closetime") {
            $("#divRelocateTime").hide();
            $("#divRelocateTimeLbl").show('slow');
        }       
        
    });
    
    
});



ns_rota_planner = {
    GetAppliedShifts: function () {
        var locationid = $('#ddlRotaLocations').val();
        if (locationid == "" || locationid == null)
            locationid = "0";

        var roleid = $('#ddlRotaRoles').val();
        if (roleid == "" || locationid == null)
            roleid = "0";

        var employeetype = $('#ddlRotaCandidateType').val();
        var param = '{"action":"get_applied_shift","location":"' + locationid + '","role_id":"' + roleid + '","offset": "' + offset_data + '", "next": "' + next_data + '"}';
        param = { json: param }

        $('#divAppliedList_Placeholder').html('<div style="padding:10px;text-align:center">Loading...<img src="/images/spin.gif" /></div>');

        ns_ajax.get(
            urls.employeesRota,
            param,
            function (data) {
                if (data.Status == "OK") {
                    var objData = data.Response[0];
                    if (objData.applied_shifts.length > 0) {
                        call_tmpl_binder(objData, '/Template/rota_tmpl.html', '#divAppliedList_Template', '#divAppliedList_Placeholder');
                    }
                    else {
                        message = "Sorry! no shift(s) found at the moment.";
                        link = "";
                        $('#divAppliedList_Placeholder').html(ns_rota_planner.nodata(message, link));
                    }
                }
                else {
                    message = "Sorry! no shift(s) found at the moment.";
                    link = "";
                    $('#divAppliedList_Placeholder').html(ns_rota_planner.nodata(message, link));
                }
            });
    },
    GetShiftSwapRequest: function () {       
        var locationid = $('#ddlRotaLocations').val();
        if (locationid == "" || locationid == null)
            locationid = "0";

        var roleid = $('#ddlRotaRoles').val();
        if (roleid == "" || locationid == null)
            roleid = "0";

        var employeetype = $('#ddlRotaCandidateType').val();
        var param = '{"action":"get_swap_request","location":"' + locationid + '","role_id":"' + roleid + '","offset": "' + offset_data + '", "next": "' + next_data + '"}';
        param = { json: param }

        $('#divShiftSwapRequest_Placeholder').html('<div style="padding:10px;text-align:center">Loading...<img src="/images/spin.gif" /></div>');

        ns_ajax.get(
            urls.employeesRota,
            param,
            function (data) {
                if (data.Status == "OK") {
                    var objData = data.Response[0];
                    if (objData.swap_request.length > 0) {
                        call_tmpl_binder(objData, '/Template/rota_tmpl.html', '#divShiftSwapRequest_Template', '#divShiftSwapRequest_Placeholder');
                    }
                    else {
                        message = "Sorry! no shift(s) found at the moment.";
                        link = '';
                        $('#divShiftSwapRequest_Placeholder').html(ns_rota_planner.nodata(message, link));
                    }
                }
                else {
                    message = "Sorry! no shift(s) found at the moment.";
                    link = ''
                    $('#divShiftSwapRequest_Placeholder').html(ns_rota_planner.nodata(message, link));
                }
            });
    },
    ViewSwapReqDetail: function (datajson) {
        $('#modalSwapRequestDetails').modal();
        if (datajson !== '') {
            $('#SwapRequestDetails_placeholder').html('<div style="padding:10px;text-align:center">Loading...<img src="/images/spin.gif" /></div>');
            var objData = $.parseJSON(datajson);
            call_tmpl_binder(objData, '/Template/rota_tmpl.html', '#SwapRequestDetails_template', '#SwapRequestDetails_placeholder');
        }
        else {
            message = "Sorry ! Not Available";
            link = "";
            $('#SwapRequestDetails_placeholder').html(ns_rota_planner.nodata(message, link));
        }
    },
    ActionSwapRequest: function (param, evt) {
        var btnid = evt.target.getAttribute("id");
        $('#' + btnid).html('Process...<img src="/images/spin.gif" />');
        
        ns_ajax.post(
            urls.employeesRota +'/shiftswap',
            param,
            function (data) {
                $('#' + btnid).html('Submit');
                if (data.Status == "OK") {
                    ShowAlertMessage("Message", "Request has been processed successfully", "C");
                    $('#modalSwapRequestDetails').modal('hide');
                    $(".modal-backdrop").css('display', 'none');
                    ns_rota_planner.GetShiftSwapRequest();
                }
                else {
                    ShowAlertMessage("Message", data.Error, "A");
                }
            });
    },
    
    GetWeekPlanner: function (type) {
        $('#clstotaloffline, #clstotallive, #clstotalopen').html('0');
        $('#totalcost, #totalcostInternal, #totalcostTemporary, #totalcostStaffBank, #totalcostAgency').html('0');
        $('#totalhours, #totalDurationInternal, #totalDurationTemporary, #totalDurationStaffBank, #totalDurationAgency').html('0');


        ns_rota_planner.ProcessWait();
        var locationid = $('#ddlRotaLocations').val();
        if (locationid == "" || locationid == null)
            locationid = "0";

        var roleid = $('#ddlRotaRoles').val();
        if (roleid == "" || locationid == null)
            roleid = "0";

        var employeetype = $('#ddlRotaCandidateType').val();
        var day, month, year;
        switch (type) {
            case "Previous":
                day = $('#bstartdate').html();
                month = $('#bstartmonth').html();
                year = $('#bstartyear').html();
                break;
            case "Next":
                day = $('#benddate').html();
                month = $('#bendmonth').html();
                year = $('#bendyear').html();
                break;
            case "Current":
                day = "0";
                month = "0";
                year = "0";
                break;
            case "Start":
                day = $('#bstartdate').html();
                month = $('#bstartmonth').html();
                year = $('#bstartyear').html();
                break;
        }
        var plannerid = '';
        plannerid = (viewtype == 'planner' ? $('#ddlPlanner').val() : '');
        var Param = { day: day, month: month, year: year, type: type, locationid: locationid, roleid: roleid, weeks: noofweeks, detailtype: viewtype, employeetype: employeetype, plannerid: plannerid };
       
        ns_ajax.get(
            urls.rotaApi + "get",
            Param,
            function (data) {
                if (data.Status == "OK") {
                    var objPlanner = data.Response; //jQuery.parseJSON(response.split('@@')[1]);
                    //Next & Prev Block
                    call_tmpl_binder(objPlanner, '/Template/rota_tmpl.html', '#RotaPlannerNextPrevDate_Template', '#divNextPrevDate_Placeholder');

                    //Planner View
                    if (viewtype == 'planner')
                        call_tmpl_binder(objPlanner, '/Template/rota_tmpl.html', '#RotaPlannerView_Template', '#RotaPlannerView_Placeholder');
                    //Employee View
                    if (viewtype == 'employee')
                        call_tmpl_binder(objPlanner, '/Template/rota_tmpl.html', '#RotaPlannerEmployeeView_Template', '#RotaPlannerEmployeeView_Placeholder');
                    //Role View
                    if (viewtype == 'role')
                        call_tmpl_binder(objPlanner, '/Template/rota_tmpl.html', '#RotaPlannerRoleView_Template', '#RotaPlannerRoleView_Placeholder');

                    setTimeout(
                        function () {                        
                            toolTIP();                           
                        }, 500);
                    

                }
                else {
                    if (data.Error!=='Data is Null. This method or property cannot be called on Null values.')
                        ShowAlertMessage("Message", data.Error, "center");

                    var message = "No results available at this time.", link = "";
                    //Planner View
                    if (viewtype == 'planner') {
                        message = "Planner not available at this time.";
                        link = 'Add planner by click on button <a id="btnAddPlannerName1" class="btn btn-success btn-add btn-sm btn-planner-name-action" data-action="addnew"><i class="ti ti-plus mr-1">&nbsp;</i>Add Planner</a>';
                    }
                    //Employee View
                    if (viewtype == 'employee') {
                        message = "Sorry! no shift(s) found at the moment.";
                        link = '<a href="/Settings/JobRoles" id="btnAddActivateRoles" class="btn btn-success btn-add btn-sm">Add /Activate Roles</a>';
                    }
                    //Role View
                    if (viewtype == 'role') {
                        message = "Sorry! no shift(s) found at the moment.";
                        link = '<a href="/Settings/JobRoles" id="btnAddActivateRoles" class="btn btn-success btn-add btn-sm">Add /Activate Roles</a>';
                    }
                    ns_rota_planner.Empty_v2(message, link);
                }
               
            });
    },
    SetWeeks: function () {
        $(".selectweekvisible").removeClass('active');
        $('.week1class').hide();
        $('.week2class').hide();
        $('.week3class').hide();
        $('.week4class').hide();
        if (noofweeks == 1) {
            $('.week1class').show();
            $("#1").addClass('active');
        }
        if (noofweeks == 2) {
            $('.week1class').show();
            $('.week2class').show();
            $("#2").addClass('active');
        }
        if (noofweeks == 3) {
            $('.week1class').show();
            $('.week2class').show();
            $('.week3class').show();
            $("#3").addClass('active');
        }
        if (noofweeks == 4) {
            $('.week1class').show();
            $('.week2class').show();
            $('.week3class').show();
            $('.week4class').show();
            $("#4").addClass('active');
        }
    },
    ProcessWait: function () {
        var pwait = "";
        pwait += '<tr style = "border:1px solid #d3dbe3;background-color: #ecf0f5;">';
        pwait += '<td colspan="' + ((parseInt(noofweeks) * 7) + parseInt(1)) + '">' + waitcal() + '</td>';
        pwait += "</tr>";
        if (viewtype == 'employee')
            $('#RotaPlannerEmployeeView_Placeholder').html(pwait);
        if (viewtype == 'role')
            $('#RotaPlannerRoleView_Placeholder').html(pwait);
        if (viewtype == 'planner')
            $('#RotaPlannerView_Placeholder').html(pwait);

    },
    ProcessWaitCell: function (celid) {
        $(celid).html(waitCell());
    },
    Empty: function () {
        var pwait = "";
        pwait += '<tr style = "border:1px solid #d3dbe3;background-color: #ecf0f5;">';
        pwait += '<td colspan="' + ((parseInt(noofweeks) * 7) + parseInt(1)) + '"><div style="line-height: 1.2;font-size: 90%;margin:30px;"><div class="empty" style="color:#C4814B"><center><i class="fa fa-meh-o" style="font-size:27px; color:#95C7E7">&nbsp;SORRY !</i><br>No results available at this time. Please check again later</center></div></div></td>';
        pwait += "</tr>";
        if (viewtype == 'employee')
            $('#RotaPlannerEmployeeView_Placeholder').html(pwait);
        if (viewtype == 'role')
            $('#RotaPlannerRoleView_Placeholder').html(pwait);
        if (viewtype == 'planner')
            $('#RotaPlannerView_Placeholder').html(pwait);
    },
    Empty_v2: function (msg, link) {
        var str = '<div class="nodata">' +
            '<div class="nodata__content">' +
            '<div class="nodata__icon">' +
            '<img src="/images/nodata.png" alt="">' +
            '</div>' +
            '<div class="nodata__message mb-2">' + msg + '</div>' +
            '<div class="nodata__help mb-2">' + link
        '</div> ' +
            '</div> ' +
            '</div >';

        var pwait = "";
        pwait += '<tr style = "border:1px solid #d3dbe3;background-color: #ecf0f5;">';
        pwait += '<td colspan="' + ((parseInt(noofweeks) * 7) + parseInt(1)) + '">' + str+'</td>';
        pwait += "</tr>";
        if (viewtype == 'employee')
            $('#RotaPlannerEmployeeView_Placeholder').html(pwait);
        if (viewtype == 'role')
            $('#RotaPlannerRoleView_Placeholder').html(pwait);
        if (viewtype == 'planner')
            $('#RotaPlannerView_Placeholder').html(pwait);
    },
    nodata:function(msg, link) {
    var str = '<div class="nodata">' +
        '<div class="nodata__content">' +
        '<div class="nodata__icon">' +
        '<img src="/images/nodata.png" alt="">' +
        '</div>' +
        '<div class="nodata__message mb-2">' + msg + '</div>' +
        '<div class="nodata__help mb-2">' + link
    '</div> ' +
        '</div> ' +
        '</div >';
    return str;
},
    Get_Shift_JobRole_Location_masters: function (CtrlLocation, CtrlRole, CtrlShiftTime, role_id, location_id) {
        if (role_id == null || role_id == '')
            role_id = '0';
        var param = { id: role_id };
        ns_ajax.get(
            urls.rotaApi + "location",
            param,
            function (data) {
                if (data.Status == 'OK') {
                    var obj = data.Response; //jQuery.parseJSON(response.split('|')[1]);
                    var str = '';

                    //Location(s)
                    if (CtrlLocation !== '') {
                        if (CtrlLocation == '#ddlRotaLocations')
                            str = '<option value="0">All Locations</option>';
                        else
                            str = '<option value="0">Select Location</option>';
                        var mainlocation = 0;
                        $.each(obj.Location, function (key, value) {

                            str += "<option value=" + value.emp_location_id + " title='" + value.location_address + "'>" + value.emp_location_name + "</option>";
                            if (parseInt(value.main_location) > 0)
                                mainlocation = value.emp_location_id;
                        });

                        $(CtrlLocation).html(str);
                        if (CtrlLocation == '#ddlRotaLocations')
                            $(CtrlLocation).val(mainlocation);
                        else
                            $(CtrlLocation).val(location_id);
                    }

                    //Job Role(s)  
                    if (CtrlRole !== '') {
                        str = '<option data-role-id="0" data-rate="0" value="0" >Select Role</option>';
                        $.each(obj.JobRole, function (key, value) {
                           /* style = 'color:" + value.cnd_custom_role_color + "'*/
                            str += "<option data-role-id='" + value.role_id + "' data-rate=" + value.cnd_custom_role_rate + " value=" + value.cnd_custom_role_id + " title='" + value.cnd_custom_role_name + "' >" + value.cnd_custom_role_alias + "</option>";
                        });
                        $(CtrlRole).html(str);
                        $("#ddlRolesDragdrop").html(str);
                        $(CtrlRole).val(role_id);
                        var rate = $('#ddlRole option:selected').attr('data-rate');
                        $('#spnDefaultRate').html(rate);
                        $('#ddlRolesDragdropEmp').html(str);

                    }

                    //Shift Timming(s)
                    if (CtrlShiftTime !== '') {
                        if (CtrlShiftTime == '#selectshifttiming') {
                            $('.list-shifttiming-dragdrop').empty();
                            if (obj.ShiftTime.length > 0) {
                                $.each(obj.ShiftTime, function (key, value) {
                                    var list = '<li id="' + value.shift_start_time + "-" + value.shift_end_time + '" ondragstart="dragstartToPostJob_handler(event);" data-action="jobpost" style="cursor: move;" draggable="true" class="list-group-item list-shifttiming p-2 p-t-1 p-b-1">' +
                                        '<span class="badge badge-warning"  style = "background-color: ' + value.shift_timing_color + '!important;"><i class="zmdi zmdi-time"></i> <b>' + value.shift_timing_name + '</b></span><br>' +
                                        '<small class="col-grey"><i class="zmdi zmdi-time"></i> <b>' + value.shift_duration + ' hr(s) </b> ' + value.shift_start_time + "-" + value.shift_end_time + '</small>' +
                                        '</li>';
                                    $('.list-shifttiming-dragdrop').append(list);
                                });
                            }
                            else {
                                $('.list-shifttiming-dragdrop').append('<li style="padding:50px;padding: 50px;border: 1px solid #ded5d5!important; text-align: center;">Not Available</li>');
                            }

                            $('.rotaCellrotaCellHoveremp').on("dragenter dragover drop", function (event) {
                                event.preventDefault();
                                if (event.type === 'drop') {

                                    var data = event.originalEvent.dataTransfer.getData('Text', $(this).attr('id'));
                                    if (data.split("-").length > 1)
                                        return;

                                    var copy = (ctrlDown ? "1" : "0");
                                    var ddd = $(this);
                                    var shiftid = data;
                                    var cellno = this.id.replace('employeeshiftcell', '').split('-')[0];

                                    var employeeid = this.id.split('-')[1];
                                    var shiftdate = this.id.split('-')[2] + '-' + this.id.split('-')[3] + '-' + this.id.split('-')[4];
                                    var locationid = this.id.split('-')[5]


                                    var parm = "{shiftid:'" + shiftid + "',shiftdate:'" + shiftdate + "',employeeid:'" + employeeid + "',userid:'" + userid + "',copy:'" + copy + "',locationid:'" + locationid + "',employerid:'" + employerid + "'}";
                                    $.ajax({
                                        type: "POST",
                                        contentType: "application/json; charset=utf-8",
                                        url: url + "/UpdateEmployeeShiftDetailDataDragDrop",
                                        data: parm,
                                        dataType: "json",
                                        beforeSend: function () {
                                            blockUI('dashboardtable');
                                        },
                                        complete: function () {
                                            unblockUI('dashboardtable');
                                        },
                                        success: function (response) {
                                            try {
                                                ret = true;
                                                if (response.d.trim().toUpperCase() != "OK") {
                                                    ret = false;
                                                    Toast_Error(response.d.trim(), "Message");
                                                }
                                                else {
                                                    if (ctrlDown)
                                                        de = $('#' + data).clone();// detach();
                                                    else
                                                        de = $('#' + data).detach();

                                                    de.appendTo(ddd);
                                                }

                                                if ($('#selectviewtype').val() == 'employee')
                                                    GetWeekRangeRotaOverviewEmployee('Start');
                                                else
                                                    GetWeekRangeRotaOverviewLocation('Start');

                                            }
                                            catch (err) {
                                                Toast_Error(err.message, "Message");
                                            }
                                        },
                                        error: function (result) {
                                            Toast_Error(result, "Message");
                                        }
                                    });
                                }
                            });
                        }
                        else {
                            str = '<option value="0">Select Timing</option>';
                            $.each(obj.ShiftTime, function (key, value) {
                                str += "<optgroup style='padding-top:10px; color:" + value.shift_timing_color + "' label='" + value.shift_timing_name + " (Duration:" + value.shift_duration + " hrs)'></optgroup>" +
                                    "<option data-duration='" + value.shift_duration + "' data-start-time='" + value.shift_start_time + "' data-end-time='" + value.shift_end_time + "' value=" + value.id + ">Timing :" + (value.shift_start_time + '-' + value.shift_end_time) + "</option>";
                            });
                            str += '<option value="" style="color:#000;font-weight:bold">Custom Time</option>';
                            $(CtrlShiftTime).html(str);

                            $(CtrlShiftTime).val($('#ddlShiftTime').attr('data-custome-time'));
                        }
                    }

                    //Candidate(s) List

                    $('.list-candidate-dragdrop').empty();
                    if (obj.CandidateList.length > 0) {
                        $.each(obj.CandidateList, function (key, value) {
                            var wpJson = value.cnd_workingPatternJson == '' ? "" : value.cnd_workingPatternJson; 
                            var wpJson2 = value.cnd_workingPatternJson2 == '' ? "" : value.cnd_workingPatternJson2; 
                            var absenceJson = value.cnd_absenceJson == '' ? "" : value.cnd_absenceJson;
                            var objWpJson2 = value.cnd_workingPatternJson2 == '' ? "" : value.cnd_workingPatternJson2.replace(/ /g, ''); 
                            
                            var list = '<li id="' + value.cnd_id + '" data-cnd_role_id="' + value.cnd_role_id + '" data-cnd_sub_type="' + value.cnd_sub_type + '" ondragstart="dragstartToPostAssignJob_handler(event);" data-action="jobpost_and_assign" data-workingPatternJson2=' + objWpJson2+' style="cursor: move;" draggable="true" class="list-group-item list-shifttiming p-2 p-t-1 p-b-1" data-workingPatternJson=' + wpJson + '>' +
                                '<span><img src="/images/profile.jpg" alt="avatar" class="img-responsive rounded-circle img" width="38" style="border:1px solid #ccc"><b style="padding-left:10px;color:#161cc5">' + value.cnd_full_name + '</b></span>' +
                                '<div class="col-grey" style="padding-left:50px;margin-top: -8px;font-size:14px">' + value.cnd_sub_type_name + ' (<b style="color:' + value.cnd_role_color + '">' + value.cnd_role_name + '</b>)</div>' +
                                '<div class="col-grey" style="padding-left:50px;padding-top:10px;font-size:14px; color:#313131; display:' + ((value.cnd_sub_type == 'P' || value.cnd_sub_type == 'T') ? 'block' : 'none') + '"><a style="color: #313131;"  data-candidate="' + value.cnd_full_name + '##' + value.cnd_sub_type_name + '##' + value.cnd_role_name + '"  class="clsWorkpatternAbsence"  data-json=' + wpJson + '><div style="display:none">' + wpJson2 +'</div><span style="display:none">' + absenceJson +'</span><i class="fa fa-external-link">&nbsp;</i>View work pattern</a></div>' +
                                '</li>';
                            $('.list-candidate-dragdrop').append(list);
                        });
                    }
                    else {
                        $('.list-candidate-dragdrop').append('<li style="padding:50px;padding: 50px;border: 1px solid #ded5d5!important; text-align: center;">Not Available</li>');
                    }
                                     
                    

                    //$('.rotaCellrotaCellHoveremp').on("dragenter dragover drop", function (event) {
                    //    event.preventDefault();
                    //    if (event.type === 'drop') {
                    //        alert(event.type);
                    //        var data = event.originalEvent.dataTransfer.getData('Text', $(this).attr('id'));
                    //        if (data.split("-").length > 1)
                    //            return;

                    //        var copy = (ctrlDown ? "1" : "0");
                    //        var ddd = $(this);
                    //        var shiftid = data;
                    //        var cellno = this.id.replace('employeeshiftcell', '').split('-')[0];

                    //        var employeeid = this.id.split('-')[1];
                    //        var shiftdate = this.id.split('-')[2] + '-' + this.id.split('-')[3] + '-' + this.id.split('-')[4];
                    //        var locationid = this.id.split('-')[5]


                    //        var parm = "{shiftid:'" + shiftid + "',shiftdate:'" + shiftdate + "',employeeid:'" + employeeid + "',userid:'" + userid + "',copy:'" + copy + "',locationid:'" + locationid + "',employerid:'" + employerid + "'}";
                    //        $.ajax({
                    //            type: "POST",
                    //            contentType: "application/json; charset=utf-8",
                    //            url: url + "/UpdateEmployeeShiftDetailDataDragDrop",
                    //            data: parm,
                    //            dataType: "json",
                    //            beforeSend: function () {
                    //                blockUI('dashboardtable');
                    //            },
                    //            complete: function () {
                    //                unblockUI('dashboardtable');
                    //            },
                    //            success: function (response) {
                    //                try {
                    //                    ret = true;
                    //                    if (response.d.trim().toUpperCase() != "OK") {
                    //                        ret = false;
                    //                        Toast_Error(response.d.trim(), "Message");
                    //                    }
                    //                    else {
                    //                        if (ctrlDown)
                    //                            de = $('#' + data).clone();// detach();
                    //                        else
                    //                            de = $('#' + data).detach();

                    //                        de.appendTo(ddd);
                    //                    }

                    //                    if ($('#selectviewtype').val() == 'employee')
                    //                        GetWeekRangeRotaOverviewEmployee('Start');
                    //                    else
                    //                        GetWeekRangeRotaOverviewLocation('Start');

                    //                }
                    //                catch (err) {
                    //                    Toast_Error(err.message, "Message");
                    //                }
                    //            },
                    //            error: function (result) {
                    //                Toast_Error(result, "Message");
                    //            }
                    //        });
                    //    }
                    //});

                }
            });
    },
    Get_Shift_Location_masters: function (CtrlLocation, location_id) {        
        var param = { id: '0' };
        ns_ajax.get(
            urls.rotaApi + "location",
            param,
            function (data) {
                if (data.Status == 'OK') {
                    var obj = data.Response; //jQuery.parseJSON(response.split('|')[1]);
                    var str = '';
                    //Location(s)
                    if (CtrlLocation !== '') {                       
                        str = '<option value="0">Select Location</option>';
                        var mainlocation = 0;
                        $.each(obj.Location, function (key, value) {

                            str += "<option value=" + value.emp_location_id + " title='" + value.location_address + "'>" + value.emp_location_name + "</option>";
                            if (parseInt(value.main_location) > 0)
                                mainlocation = value.emp_location_id;
                        });
                     
                        $(CtrlLocation).html(str);
                        $(CtrlLocation).val(location_id);
                    }
                }
            });
    },
    ClearControls: function () {

        $("#txtstarttimePlanner").val('');
        $("#txtendtimePlanner").val('');
        $("#ddlLocationPlanner").val('0');
        $("#ddlRolePlanner").val('0');
        $("#txtbreakinminPlanner").val('');
        $("#txtNotePlanner").val('');

        $("#txtshiftdate").val('');
        $("#txtstarttime").val('');
        $("#txtendtime").val('');
        $("#ddlLocation").val('0');
        $("#ddlRole").val('0');
        $("#ddlEmployee").val('0');
        $("#txtbreakinmin").val('0');
        $("#txtNote").val('');
        $("#ChkPublish").prop('checked', false);
        $('#divJob').removeClass('show').addClass('hide');

        $("#chk_overtime_shift").prop('checked', false);
        $("#rdo_jobstatus").prop('checked',false);
        
    },
    GetEmployeeList: function (location_id, role_id) {
        $('#ddlEmployee').empty();
        var start_time = $('#txtstarttime').val();
        var end_time = $('#txtendtime').val();
        var param = { location_id: location_id, role_id: role_id, start_time: start_time, end_time: end_time };
        ns_ajax.get(
            urls.rotaApi + "get",
            param,
            function (data) {
                if (data.Status == 'OK') {
                    var obj = data.Response;//jQuery.parseJSON(response.split('|')[1]);                 
                    var str = '';
                    //cnd_sub_type
                    jQuery('#ddlEmployee').append($("<option></option>").val('0').html('Select Candidate'));
                    var flag_P = false, flag_S = false, flag_T = false, flag_A = false;
                    $.each(data.Response, function (key, value) {
                        if (value.cnd_sub_type == 'P') {
                            if (flag_P == false) {
                                jQuery('#ddlEmployee').append($("<optgroup style='background: rgb(226, 236, 249); line-height:26px; color:#2f4f9b;font-size:16px font-weight:bold!important' label='" + value.cnd_sub_type_title + " :-' id='" + value.parent_id + "'></optgroup>"));
                                flag_P = true;
                            }
                            //if (value.cnd_sub_type == value.cnd_sub_type)
                            jQuery('#ddlEmployee').append($("<option data-type='" + value.cnd_sub_type + "' data-cnd_overtime_rate='" + value.cnd_overtime_rate + "' data-cnd_overtime_status='" + value.cnd_overtime_status + "' data-cnd_overtime_status_msg='" + value.cnd_overtime_status_msg + "' data-cnd_overtime_status_msg='' data-json='" + value.cnd_workingPatternJson2 + "'></option>").val(value.cnd_id).html(value.cnd_name));
                        }
                        if (value.cnd_sub_type == 'S') {
                            if (flag_S == false) {
                                jQuery('#ddlEmployee').append($("<optgroup style='background: rgb(226, 236, 249); line-height:26px; color:#2f4f9b;font-size:18px font-weight:bold!important' label='" + value.cnd_sub_type_title + " :-' id='" + value.parent_id + "'></optgroup>"));
                                flag_S = true;
                            }
                            //if (value.cnd_sub_type == value.cnd_sub_type)
                            jQuery('#ddlEmployee').append($("<option data-type='" + value.cnd_sub_type + "' data-rate='" + value.cnd_rate + "' data-cnd_overtime_rate='" + value.cnd_overtime_rate + "' data-cnd_overtime_status='" + value.cnd_overtime_status + "' data-cnd_overtime_status_msg='" + value.cnd_overtime_status_msg + "' data-json=''></option>").val(value.cnd_id).html(value.cnd_name));
                        }
                        if (value.cnd_sub_type == 'T') {
                            if (flag_T == false) {
                                jQuery('#ddlEmployee').append($("<optgroup style='background: rgb(226, 236, 249); line-height:26px; color:#2f4f9b;font-size:18px font-weight:bold!important' label='" + value.cnd_sub_type_title + " :-' id='" + value.parent_id + "'></optgroup>"));
                                flag_T = true;
                            }
                            //if (value.cnd_sub_type == value.cnd_sub_type)
                            jQuery('#ddlEmployee').append($("<option data-type='" + value.cnd_sub_type + "' data-rate='" + value.cnd_rate + "' data-cnd_overtime_rate='" + value.cnd_overtime_rate + "' data-cnd_overtime_status='" + value.cnd_overtime_status + "' data-cnd_overtime_status_msg='" + value.cnd_overtime_status_msg + "' data-json='" + value.cnd_workingPatternJson2 + "'></option>").val(value.cnd_id).html(value.cnd_name));
                        }
                        if (value.cnd_sub_type == 'A') {
                            if (flag_A == false) {
                                jQuery('#ddlEmployee').append($("<optgroup style='background: rgb(226, 236, 249); line-height:26px; color:#2f4f9b;font-size:18px font-weight:bold!important' label='" + value.cnd_sub_type_title + " :-' id='" + value.parent_id + "'></optgroup>"));
                                flag_A = true;
                            }
                            //if (value.cnd_sub_type == value.cnd_sub_type)
                            jQuery('#ddlEmployee').append($("<option data-type='" + value.cnd_sub_type + "' data-rate='" + value.cnd_rate + "' data-cnd_overtime_rate='" + value.cnd_overtime_rate + "' data-cnd_overtime_status='" + value.cnd_overtime_status + "' data-cnd_overtime_status_msg='" + value.cnd_overtime_status_msg + "' data-json=''></option>").val(value.cnd_id).html(value.cnd_name));
                        }
                    });

                    $('#ddlEmployee').val($('#ddlEmployee').attr('cnd_id'));
                    ns_rota_planner.calculateestimatedcost();

                    if ($('#ddlEmployee').attr('cnd_id') !== '0') {
                        var candidate = $("#ddlEmployee option:selected").text();
                        var Patternjson = $("#ddlEmployee option:selected").attr('data-json');
                        $('#spanCndWp').attr('data-candidate', candidate);
                        $('#spanCndWp').attr('data-json', Patternjson);
                        $('#spanCndWp').show('slow');
                    }
                    else {
                        $('#spanCndWp').attr('data-candidate', "");
                        $('#spanCndWp').attr('data-json', "");
                        $('#spanCndWp').hide('slow');
                    }
                }
                else {
                    $('#spanCndWp').attr('data-candidate', "");
                    $('#spanCndWp').attr('data-json', "");
                    $('#spanCndWp').hide('slow');
                    jQuery('#ddlEmployee').append($("<option></option>").val('0').html('No matching candidate available'));
                }
            });
    },
    calculateestimatedcost: function () {
        var chk_overtime = $('#chk_overtime_shift').prop('checked') ? 1 : 0;        
        var jrate = $("#ddlRole option:selected").attr('data-rate');
        var erate = $("#ddlEmployee option:selected").attr('data-rate');
        var overtime_status = $("#ddlEmployee option:selected").attr('data-cnd_overtime_status');
        var overtime_rate = $("#ddlEmployee option:selected").attr('data-cnd_overtime_rate');
        var type = $("#ddlEmployee option:selected").attr('data-type');
       
        //alert(type + '== A && ' + chk_overtime + ' == 1 && ' + overtime_status + '==1  OT=>' + overtime_rate + '    RATE: ' + erate);
        erate = (type == 'P' && chk_overtime == 1 && overtime_status == 1) ? overtime_rate : erate;
      
        
        //alert(overtime_status +'== 0 && ('+type+' == P || '+type+' == S)');

        if (chk_overtime=1 && overtime_status == 0 && type == 'P') {         
            var msg = $("#ddlEmployee option:selected").attr('data-cnd_overtime_status_msg');         
            $('#chk_overtime_shift').prop('checked', false);          
            ShowAlertMessage("Message", msg, "center");          
        }  

        //if (chk_overtime = 1 && overtime_status == 0 && type == 'S') {
        //    var msg = $("#ddlEmployee option:selected").attr('data-cnd_overtime_status_msg');
        //    $('#chk_overtime_shift').prop('checked', false);
        //    ShowAlertMessage("Message", msg, "center");
        //}  
       

        $('#divShiftCost, #divshiftAdminFee').hide();   
      
        if (type == 'P') {          
            $('#txtshiftrate').val('0');
            $('.shiftcost').html('0');
            $('.shiftcost').attr('cost','0');
            $('#divShiftCost').hide();
            $('#divOvertime').show();
            if (overtime_status == 1) {
                $('#divShiftCost').show();

                if ($('#txtshiftrate').val() == '' || $('#txtshiftrate').val() == '0.00' || $('#txtshiftrate').val() == '0' || (parseFloat($('#txtshiftrate').val()) <= 0)) {
                    if (parseFloat(erate) > 0) {
                        $('#txtshiftrate').val(parseFloat(erate).toFixed(2));
                    }
                    else if (parseFloat(jrate) > 0) {
                        $('#txtshiftrate').val(parseFloat(jrate).toFixed(2));
                    }
                    else {
                        $('#txtshiftrate').val('0');
                        $('#divShiftCost').hide();
                        $('#divOvertime').hide();
                    }
                }
                else if (parseFloat($('#txtshiftrate').val()) == parseFloat(jrate) && (parseFloat(erate) > 0)) {
                    $('#txtshiftrate').val(parseFloat(erate).toFixed(2));
                }
                else if (parseFloat($('#txtshiftrate').val()) !== parseFloat(jrate) && (parseFloat(erate) > 0)) {
                    $('#txtshiftrate').val(parseFloat(erate).toFixed(2));
                }


                jQuery('.clsEstCostgrid').addClass('col-md-3');
                jQuery('.clsEstCostgrid').removeClass('col-md-3');
                $('#txtshiftAdminFee').val('0');
                
                $('#divShiftCost').show();
                if (type == 'P' && $('#chk_overtime_shift').prop('checked')==false) {
                    $('#divShiftCost').hide();
                }

                $('#divOvertime').show();
                if (parseFloat($('#txtshiftrate').val()) > 0) {
                    var duration = $(".txtduration").val();
                    var cost = parseFloat($('#txtshiftrate').val()) * parseFloat(duration);
                    $('.shiftcost').html(cost.toFixed(2));
                    $('.shiftcost').attr('cost', cost.toFixed(2));
                }
            }
            
        }
        else {
            if ($('#txtshiftrate').val() == '' || $('#txtshiftrate').val() == '0.00' || $('#txtshiftrate').val() == '0' || (parseFloat($('#txtshiftrate').val()) <= 0))
            {
                if (parseFloat(erate) > 0) {
                    $('#txtshiftrate').val(parseFloat(erate).toFixed(2));
                }
                else if (parseFloat(jrate) > 0) {
                    $('#txtshiftrate').val(parseFloat(jrate).toFixed(2));
                }
                else {
                    $('#txtshiftrate').val('0');
                    $('#divShiftCost').hide();
                    $('#divOvertime').hide();
                }
            }
            else if (parseFloat($('#txtshiftrate').val()) == parseFloat(jrate) && (parseFloat(erate) > 0)) {            
                $('#txtshiftrate').val(parseFloat(erate).toFixed(2));
            }
            else if (parseFloat($('#txtshiftrate').val()) !== parseFloat(jrate) && (parseFloat(erate) > 0)) {             
                $('#txtshiftrate').val(parseFloat(erate).toFixed(2));
            }

            if (type == 'T' || type == 'S') {             
                jQuery('.clsEstCostgrid').addClass('col-md-4');
                jQuery('.clsEstCostgrid').removeClass('col-md-3');
                $('#txtshiftAdminFee').val('0');
                $('#divShiftCost').show();
                $('#divOvertime').hide();
                if (parseFloat($('#txtshiftrate').val()) > 0) {
                    var duration = $(".txtduration").val();
                    var cost = parseFloat($('#txtshiftrate').val()) * parseFloat(duration);
                    $('.shiftcost').html(cost.toFixed(2));
                    $('.shiftcost').attr('cost', cost.toFixed(2));
                }               
            }
            else if (type == 'A') {
                
                jQuery('.clsEstCostgrid').addClass('col-md-3');
                jQuery('.clsEstCostgrid').removeClass('col-md-4');
                $('#divShiftCost, #divshiftAdminFee').show();
                $('#divOvertime').hide();
                if (parseFloat($('#txtshiftrate').val()) > 0) {                
                    var duration = $(".txtduration").val();
                    var cost = parseFloat($('#txtshiftrate').val()) * parseFloat(duration);
                    var agency_fee = parseFloat($('#txtshiftAdminFee').val()) * parseFloat(duration);
                    if (agency_fee>0)
                        cost = parseFloat(cost) + parseFloat(agency_fee);

                    $('.shiftcost').html(cost.toFixed(2));
                    $('.shiftcost').attr('cost', cost.toFixed(2));
                }
            }
        }


    },
    PostAndAssignJob: function (action) {
        var obj = {};
        var job_id = $("#btnJobPostAndAssign").attr('data-job_id');
        var jobdate = $("#txtshiftdate").val();
        var shift = $("#ddlShiftTime").val();
        var starttime = $("#txtstarttime").val();
        var endtime = $("#txtendtime").val();
        var locationid = $("#ddlLocation").val();
        var roleid = $("#ddlRole").val();
        var candid = $("#ddlEmployee").val();
        var type = $("#ddlEmployee option:selected").attr('data-type');
        var breakinmin = $("#txtbreakinmin").val();
        var note = $("#txtNote").val();
      
        var overtime_status = $('#chk_overtime_shift').prop('checked') ? 1 : 0;
        var publish = $('#rdo_jobstatus').prop('checked') ? 1 : 0;
       

        //Validate 
        var para = jobdate == '' ? '' : shift == '0' ? '' : starttime == '' ? '' : endtime == '' ? '' : locationid == '0' ? '' : roleid == '0' ? '' : (candid == '0' && viewtype == 'employee') ? '' : 'NA';
        var para1 = jobdate == '' ? '#txtshiftdate' : shift == '0' ? '#ddlShiftTime' : starttime == '' ? '#txtstarttime' : endtime == '' ? '#txtendtime' : locationid == '0' ? '#ddlLocation' : roleid == '0' ? '#ddlRole' : (candid == '0' && viewtype == 'employee') ? '#ddlEmployee' : 'NA';
        var msg = jobdate == '' ? 'Enter shift date' : shift == '0' ? 'Select a shift timming' : starttime == '' ? 'Enter start time' : endtime == '' ? 'Enter end time' : locationid == '0' ? 'Select a location' : roleid == '0' ? 'Select a role' : (candid == '0' && viewtype == 'employee') ? 'Select a candidate' : 'NA';
        var resp = this.Validation(para, para1, msg);
        if (resp == false) return false;
        obj.job_id = job_id;
        obj.role_id = roleid;
        obj.location_id = locationid;
        obj.cnd_id = candid;
        obj.cnd_sub_type = type;
        obj.job_date = jobdate;
        obj.start_time = starttime;
        obj.end_time = endtime;
        obj.break_in_min = breakinmin;
        obj.job_rate_emp = (type == 'P' ? (overtime_status == 1 ? $('#txtshiftrate').val() : '0')  : $('#txtshiftrate').val());
        obj.job_admin_fee = (type == 'A' ? $('#txtshiftAdminFee').val():'0' );
        
        obj.job_rate_cnd = (type == 'P' ? (overtime_status == 1 ? $('#txtshiftrate').val():'0') : $('#txtshiftrate').val()); //$('#spnDefaultRate').html()
        obj.note = note;
        obj.overtime_status = overtime_status;
        obj.publish = candid>0?1: publish;
        obj.action = action;
        var param = "[" + JSON.stringify(obj) + "]";   
     
        var rota_cnd_id = (obj.cnd_id == '' || obj.cnd_id == null) ? '0' : obj.cnd_id;      
        var mydate = jobdate.split('/')[1] + '-' + jobdate.split('/')[0] + '-' + jobdate.split('/')[2];
        var cellitemid = '0-' +mydate + '-' + locationid + '-' + roleid;
       // var TableCellid = 'td-0-' + rota_cnd_id + '-' + mydate + '-' + locationid + '-' + roleid;
        var TableCellid = 'td-0-' + mydate + '-' + locationid + '-' + roleid;
       // var selected_item_id = '#job-0-' + mydate + '-' + locationid + '-' + roleid;
      
        jQuery('#' + TableCellid).addClass('process-start');
        jQuery('#' + TableCellid).addClass('process-start-inner');
        //jQuery('#job-' + cellitemid).addClass('process-start');
        jQuery('#employeeshifts-' + cellitemid).addClass('process-start-inner');      

        ns_ajax.post(
            urls.rotaApi + "jobpost",
            param,
            function (response) {
                if (response.split('|')[0] == 'OK') {
                
                    if (action =='jobpost')
                        ShowAlertMessage("Message", 'Job has been posted successfully.', "C");
                    else
                        ShowAlertMessage("Message", 'Job has been updated successfully.', "C");

                    ModalHide('#ModalJobPostAndAssign');                   
                    if (action == 'jobupdate') {                      
                        jQuery('#job-' + cellitemid).remove();
                    }
                    jQuery('#' + TableCellid).removeClass('process-start');
                    jQuery('#' + TableCellid).removeClass('process-start-inner');
                    //jQuery('#job-' + cellitemid).removeClass('process-start');
                    jQuery('#employeeshifts-' + cellitemid).removeClass('process-start-inner');
                  

                    jQuery('#RotaPlannerRoleEmpSingleJob_Template').tmpl(jQuery.parseJSON(response.split('|')[1])).appendTo('#' + TableCellid);

                    //ns_rota_planner.GetWeekPlanner('Current');

                    ns_rota_planner.ClearControls();
                    setTimeout(
                        function () {
                            toolTIP();
                        }, 500);
                }
                else {
                    ShowAlertMessage("Message", response, "A");
                    jQuery('#' + TableCellid).removeClass('process-start');
                    jQuery('#' + TableCellid).removeClass('process-start-inner');
                    //jQuery('#job-' + cellitemid).removeClass('process-start');
                    jQuery('#employeeshifts-' + cellitemid).removeClass('process-start-inner');
                }
            });
    },
    UpdateRelocatedShift: function (action) {
        var obj = {};
        var job_id = $("#btnUpdateRelocatedShift").attr('data-job_id');
        var jobdate = $("#spnDateRelocate").html();
       
        var starttime = $("#txtstarttimeRelocate").val();
        var endtime = $("#txtendtimeRelocate").val();
        var breakinmin = $("#txtbreakinminRelocate").val();
        var locationid = $("#ddlLocationRelocate").val();
        var note = $("#txtNoteRelocate").val();
      
        if (starttime == '') {
            ShowAlertMessage("Message", 'Required start time', "A");
            $("#txtstarttimeRelocate").focus();
            return false;
        }
        else if (endtime == '') {
            ShowAlertMessage("Message", 'Required end time', "A");
            $("#txtendtimeRelocate").focus();
            return false;
        }
        else if (locationid == '' || locationid == '0') {
            ShowAlertMessage("Message", 'Select location', "A");
            $("#ddlLocationRelocate").focus();
            return false;
        }
        else {
            obj.job_id = job_id;
            obj.location_id = locationid;
            obj.job_date = jobdate;
            obj.start_time = starttime;
            obj.end_time = endtime;
            obj.break_in_min = breakinmin;
            obj.note = note;
            obj.action = action;
            var param = "[" + JSON.stringify(obj) + "]";
            ns_ajax.post(
                urls.rotaApi + "jobpost",
                param,
                function (response) {
                    if (response.split('|')[0] == 'OK') {
                        ShowAlertMessage("Message", 'Shift has been updated successfully.', "C");
                        ModalHide('#ModalUpdateRelocatedShift');
                        setTimeout(
                            function () {
                                toolTIP();
                            }, 500);
                    }
                    else {
                        ShowAlertMessage("Message", response, "A");
                        //jQuery('#' + TableCellid).removeClass('process-start');
                        //jQuery('#' + TableCellid).removeClass('process-start-inner');
                        ////jQuery('#job-' + cellitemid).removeClass('process-start');
                        //jQuery('#employeeshifts-' + cellitemid).removeClass('process-start-inner');
                    }
                });
        }
    },
    RotaAction: function (params) {
        ns_ajax.post(
            urls.rotaApi + "jobpost",
            param,
            function (response) {
                if (response.split('|')[0] == 'OK') {
                    ShowAlertMessage("Message", 'Job has been posted successfully.', "C");
                    ModalHide('#ModalJobPostAndAssign');
                    ns_rota_planner.GetWeekPlanner('Current');
                    //   var CellId = obj.cnd_id + '-' + (moment(obj.job_date).format('DD-MM-YYYY')) + '-' + obj.location_id;

                    //   var Postedjob = ' <div id="employeeshifts-' + CellId + '" style="cursor:move!important;" draggable="true" class="btn-action-planner rotaShift rotaShiftClickable font-11 mb-1 cursor ${job_bg_color}" data-action="jobupdate" data-profile-name="${cnd_name}" data-role="${job_role_name}" data-role_id="${cnd_custom_role_id}" data-location_id="${job_location_id}" data-cnd_id="${cnd_id}" data-job_id="${job_id}" data-date="${job_start_date}" data-time="${job_start_time24}-${job_end_time24}" data-duration="${job_duration_hr_day}" data-toggle="modal" data-target="#ModalJobPostAndAssign">' +
                    //       '<div class="icon_hide">' +
                    //    '<p><i class="zmdi zmdi-alarm"></i> <b style="letter-spacing: -0.5px;">${job_start_time} ${job_end_time}</b></p>' +
                    //   '<hr class="mt-1 mb-1">'+
                    //    '<p class="nowrap">${job_status_label}</p>'+
                    //'</div></div>';

                    //   $('#td-' + CellId).append(Postedjob);
                    ns_rota_planner.ClearControls();
                }
                else
                    ShowAlertMessage("Message", response, "A");
            });
    },
    MakeLiveOffline: function (param, action) {
        ns_ajax.post(
            urls.rotaApi + "jobpost",
            param,
            function (response) {
                if (response.split('|')[0] == 'OK') {
                    ShowAlertMessage("Message", 'All jobs has been maked ' + action + ' successfully.', "C");
                    ns_rota_planner.GetWeekPlanner('Start');
                }
                else
                    ShowAlertMessage("Message", response, "A");
            });
    },
    actions_rota: function (params) {
        var ParamData = JSON.parse(params);
        var action = ParamData[0]['Action'];
        var cellitemid = ParamData[0]['data-cell-item-id'].replace('cellitem-', '');
        if (action == 'delete') {
            $('#job-' + cellitemid).addClass('process-start');
            $('#employeeshifts-' + cellitemid).addClass('process-start-inner');
        }

        ns_ajax.post(
            urls.jobsApi + "post",
            params,
            function (response) {
                jQuery('.delete-shift-dragdrop').css('border', '0px dotted');
                if (response.split('|')[0] === 'OK') {
                    ShowAlertMessage("Message", response.split('|')[1], "C");
                    if (action == 'delete') {
                        //$('#employeeshifts-' + cellitemid).removeClass('process-start-inner');
                        $('#job-' + cellitemid).removeClass('process-start');
                        $('#job-' + cellitemid).remove();
                    }
                    if (action == 'copy') {
                        ns_rota_planner.GetWeekPlanner('Current');
                    }

                }
                else {
                    ShowAlertMessage("Message", response, "A");
                    if (action == 'delete') {
                        $('#employeeshifts-' + cellitemid).removeClass('process-start-inner');
                        $('#job-' + cellitemid).removeClass('process-start');
                    }
                }
            });
    },
    Validation: function (para, para1, msg) {
        if (para == '') {
            $(para1).focus();
            ShowAlertMessage("Message", msg, "A");
            return false;
        }
    },
    VisibileBySummary: function () {
        //unpublished & published both
        if ($('#chkopen').prop('checked') == true && $('#chkpublished').prop('checked') == true && $('#chkunpublished').prop('checked') == true) {
            $('.unpublishedshift').show();
            $('.unpublishedshiftopen').show();
            $('.publishedshift').show();
            $('.publishedshiftopen').show();
            $('.publishedshiftbooked').hide();
        }
        else if ($('#chkopen').prop('checked') == false && $('#chkpublished').prop('checked') == false && $('#chkunpublished').prop('checked') == false) {
            $('.unpublishedshift').show();
            $('.unpublishedshiftopen').show();
            $('.publishedshift').show();
            $('.publishedshiftopen').show();
            $('.publishedshiftbooked').show();
        }

        else {
            //Open (Publish & Unpublish)
            if ($('#chkopen').prop('checked') == true) {
                $('.unpublishedshift').show();
                $('.unpublishedshiftopen').show();
                $('.publishedshift').show();
                $('.publishedshiftopen').show();
                $('.publishedshiftbooked').hide();
            }
            else {
                $('.publishedshiftbooked').show();
                $('.unpublishedshift').hide();
                $('.unpublishedshiftopen').hide();
                $('.publishedshift').hide();
                $('.publishedshiftopen').hide();
            }

            //unpublished
            if ($('#chkunpublished').prop('checked')) {
                $('.unpublishedshift').show();
                $('.unpublishedshiftopen').show();
            }
            else {
                $('.unpublishedshift').hide();
                $('.unpublishedshiftopen').hide();
            }
            //published
            if ($('#chkpublished').prop('checked')) {
                $('.publishedshift').show();
                $('.publishedshiftopen').show();
            }
            else {
                $('.publishedshift').hide();
                $('.publishedshiftopen').hide();
            }
        }
    },
    //Planner
    SavePlanner: function () {
        var Location_id = $('#ddlRotaLocations').val();
        var LocationsName = $("#ddlRotaLocations option:selected").text();
        var plannername = $('#txtPlannername').val().trim();
        if (Location_id == '0') {
            $('#ddlRotaLocations').focus();
            $('#ddlRotaLocations').css('border', '1px solid #f00');
            ShowAlertMessage("Message", 'Please select a location', "A");
            return false;
        }
        else if (plannername == '') {
            $('#txtPlannername').focus();
            $('#txtPlannername').css('border', '1px solid #f00');
            ShowAlertMessage("Message", 'Please enter new planner name', "A");
            return false;
        }
        else {
            var action = '';
            var obj = {};
            obj.action = 'saveplanner';
            obj.planner_name = plannername + '-' + LocationsName;
            var param = "[" + JSON.stringify(obj) + "]";
            ns_ajax.post(
                urls.rotaApi + "jobpost",
                param,
                function (response) {
                    if (response.split('|')[0] == 'OK') {
                        ShowAlertMessage("Message", 'Planner has been saved successfully.', "C");
                        $('#txtPlannername').val('');
                        $('#txtPlannername').hide();
                        $('#ddlPlanner').show();
                        $('#btnAddPlannerName').html('<i class="fa fa-plus">&nbsp;</i>Add');
                        $('#btnAddPlannerName').attr('data-action', 'addnew');
                        ns_rota_planner.GetPlanners('#ddlPlanner');
                        setTimeout(
                            function () {
                                $("#ddlPlanner option:contains(" + plannername + ")").attr("selected", true);
                                ns_rota_planner.GetWeekPlanner('Start');
                            }, 700);

                    }
                    else
                        ShowAlertMessage("Message", response, "A");
                });
        }
    },
    GetPlanners: function (ctrl_id) {
      
        $(ctrl_id).empty();
        $(ctrl_id).append($("<option></option>").val('').html('Select / Create planner'));
        var param = { id: 0 };
        ns_ajax.get(
            urls.rotaApi + "planner_name",
            param,
            function (data) {             
                if (data.Status == 'OK') {
                    var obj = data.Response; //jQuery.parseJSON(response.split('|')[1]);
                    $.each(obj.planners, function (key, value) {
                        $(ctrl_id).append($("<option></option>").val(value.rowguid).html(value.planner_name));
                    });
                }
                else {
                    $(ctrl_id).html($("<option></option>").val('').html('Create a planner'));
                }
            });
    },
    GetPlannerShifts: function (uid, destination_location_id) {
        $('#RotaPlannerShifts_Placeholder').html('<li style="text-align:center">Loading...<img src="/images/spin.gif" /></li>');
        var param = { id: uid, destination_location: destination_location_id };
        ns_ajax.get(
            urls.plannershiftsApi,
            param,
            function (data) {
                if (data.Status== 'OK') {
                    $('#RotaPlannerShifts_Placeholder').html('');
                    var obj = data.Response; //jQuery.parseJSON(response.split('|')[1]);
                    call_tmpl_binder(obj, '/Template/rota_tmpl.html', '#RotaPlannerShifts_Template', '#RotaPlannerShifts_Placeholder');

                    setTimeout(() => {
                        $("#accordionShift .clsloc").each(function () {
                            var val = $(this).attr("data-val");
                            if (val == '') $(this).hide(); else $(this).show();
                        });
                    }, 400);
                }
            });
    },
    PostPlanner: function () {     
      
        var action = $('#btnCreatePlanner').attr('data-action');      
        var data_item_id = (action == 'updateplannershift' ? $('#btnCreatePlanner').attr('data-item_id') : '');
        var shift_uid = (action == 'updateplannershift' ? $('#btnCreatePlanner').attr('data-shift_id') :'');
        var planner_uid = (action == 'updateplannershift' ? $('#btnCreatePlanner').attr('data-id') : $("#ddlPlanner").val());
        var start_time = $("#txtstarttimePlanner").val().trim();
        var end_time = $("#txtendtimePlanner").val().trim();
        var location_id = $("#ddlLocationPlanner").val();
        var role_id = $("#ddlRolePlanner").val();
        var break_in_min = $("#txtbreakinminPlanner").val().trim();
        var note = $("#txtNotePlanner").val().trim();
        var week = $('#spnDay').attr('data-week');
        var day = $('#spnDay').html().substring(0, 3);
        var shiftid = (action == 'updateplannershift' ? (shift_uid+location_id + role_id + day + start_time + end_time) : '');
        if (start_time == '') {
            $("#txtstarttimePlanner").focus();
            ShowAlertMessage("Message", 'Enter shift start time', "C");
            return false;
        }
        if (end_time == '') {
            $("#txtendtimePlanner").focus();
            ShowAlertMessage("Message", 'Enter shift end time', "C");
            return false;
        }
        if (start_time==end_time) {
            $("#txtendtimePlanner").focus();
            ShowAlertMessage("Message", 'Shift start & end time can not be same', "C");
            return false;
        }
        if (location_id == '' || location_id == '0') {
            $("#ddlLocationPlanner").focus();
            ShowAlertMessage("Message", 'Select location', "C");
            return false;
        }
        if (role_id == '' || role_id == '0') {
            $("#ddlRolePlanner").focus();
            ShowAlertMessage("Message", 'Select role', "C");
            return false;
        }

        var obj = {};
        obj.uid = planner_uid;
        obj.shiftid = shiftid;
        obj.week = week;
        obj.day = day;
        obj.role_id = role_id;
        obj.location_id = location_id;
        obj.start_time = start_time;
        obj.end_time = end_time;
        obj.break_in_min = break_in_min;
        obj.note = note;
        obj.action = action;
        var param = "[" + JSON.stringify(obj) + "]";
        var TableCellid = 'td-0-' + week + '-' + day + '-' + location_id + '-' + role_id;
        jQuery('#' + TableCellid).addClass('process-start');
        jQuery('#' + TableCellid).addClass('process-start-inner');
        ns_ajax.post(
            urls.rotaApi + "jobpost",
            param,
            function (response) {
                if (response.split('|')[0] == 'OK') {              
                    ShowAlertMessage("Message", 'Shift has been added successfully.', "C");
                    ModalHide('#ModalCreatePlanner');
                    
                    if (action == 'updateplannershift') {
                        jQuery('#'+data_item_id).remove();
                    }

                    jQuery('#RotaPlannerSingleJob_Template').tmpl(jQuery.parseJSON(response.split('|')[1])).appendTo('#' + TableCellid);
                    jQuery('#' + TableCellid).removeClass('process-start');
                    jQuery('#' + TableCellid).removeClass('process-start-inner');
                    //ns_rota_planner.GetWeekPlanner('Current');

                    ns_rota_planner.ClearControls();
                }
                else
                    ShowAlertMessage("Message", response, "A");
            });
    },
    CopyShiftPlanner: function () {
        
        $('#RotaPlannerShifts_Placeholder').css("border-color", "#C1D6F1");
        var planner_uid = $("#ddlPlannerCopy").val();
        var destination_location =$('#ddlRotaDestinationLocations').val();
        var strArray = [];
        $(".ChkRoles:checked").each(function () {
            var id = $(this).attr('data-id');
            strArray.push(id);
        });
        var role_ids = strArray;
        var form_date = $("#txtcopyfromdate").val();
        var to_week = $("#ddltoweek").val();
        if (planner_uid == '') {
            ShowAlertMessage("Message", 'Please select a planner', "A");
            $("#ddlPlannerCopy").focus();
            return false;
        }       
        else if (destination_location == '' || destination_location == '0') {
            ShowAlertMessage("Message", 'Please select destination location', "A");
            $("#ddlRotaDestinationLocations").focus();
            return false;
        }
        else if (form_date == '') {
            ShowAlertMessage("Message", 'Enter from date', "A");
            $("#txtcopyfromdate").focus();
            return false;
        }
        else if (to_week == '') {
            ShowAlertMessage("Message", 'Select to next week', "A");
            $("#ddltoweek").focus();
            return false;
        }
        else if (role_ids == '0' || role_ids == '' || role_ids == undefined) {
            ShowAlertMessage("Required", 'Select role', "A");
            $('#RotaPlannerShifts_Placeholder').css("border-color", "#f00");
            return false;
        }
        else {
            var start_date = form_date;
            var action = 'copyshift';
            var obj = {};
            obj.uid = planner_uid;
            obj.destination_location = destination_location
            obj.role_id = role_ids.toString();
            obj.week = to_week;
            obj.start_date = start_date;
            obj.action = action;
            var param = "[" + JSON.stringify(obj) + "]";
            $('#btnCopyPlanner').html('Process..<img src="/images/spin.gif" />');
         
          
            ns_ajax.post(
                urls.rotaApi + "jobpost",
                param,
                function (response) {
                    $('#btnCopyPlanner').html('Submit');
                    if (response.split('|')[0] == 'OK') {
                        ShowAlertMessage("Message", 'Shift has been copied successfully.', "C");
                        ModalHide('#ModalCopyPlanner');
                        
                        ns_rota_planner.GetWeekPlanner('Current');
                        ns_rota_planner.ClearControls();
                    }
                    else
                        ShowAlertMessage("Message", response, "A");
                });
        }
    },
    deletePlannerShift: function (params) {
        var ParamData = JSON.parse(params);
        var action = ParamData[0]['Action'];
        var cellitemid = ParamData[0]['shiftid'].replace('cellitem-0-', '');
            cellitemid = cellitemid.replace(':', '_').replace(':', '_');
        if (action == 'delete') {
            jQuery('#job-0-' + cellitemid).addClass('process-start');
            jQuery('#employeeshifts-0-' + cellitemid).addClass('process-start-inner');
        }
        ns_ajax.post(
            urls.rotaApi + "jobpost",
            params,
            function (response) {
                jQuery('.delete-shift-dragdrop').css('border', '0px dotted');
                if (response.split('|')[0] === 'OK') {
                    if (action == 'delete') {
                        ShowAlertMessage("Message", 'Shift has been deleted successfully', "C");
                        jQuery('#job-0-' + cellitemid).removeClass('process-start');
                        jQuery('#job-0-' + cellitemid).remove();
                    }
                    if (action == 'copy') {
                        ShowAlertMessage("Message", 'Shift has been coppied successfully', "C");
                        ns_rota_planner.GetWeekPlanner('Start');
                    }
                }
                else {
                    ShowAlertMessage("Message", response, "A");
                    if (action == 'delete') {
                        jQuery('#employeeshifts-0-' + cellitemid).removeClass('process-start-inner');
                        jQuery('#job-0-' + cellitemid).removeClass('process-start');
                    }
                }
            });
    },
    GetJobRoles: function (location_id) {      
        $('.chkjobtitles').html('<div class="text-center w-100">Loading...<img src="/images/spin.gif" /></div>');
        if (location_id == null || location_id == '')
            location_id = '0';
        var param = { id: location_id };
        ns_ajax.get(
            urls.rotaApi + "roles",
            param,
            function (data) {
                if (data.Status == 'OK') {
                    $('.chkjobtitles').html('');
                    var obj = data.Response;// jQuery.parseJSON(response.split('|')[1]);
                    if (obj.JobRole.length > 0) {
                        $('#btnaddroles').show();
                        $.each(obj.JobRole, function (key, value) {
                            var chk = (parseInt(value.location_role) > 0 ? "checked='checked'" : "");
                            $('.chkjobtitles').append('<div class="checkbox checkbox-success col-sm-6"><input class="locationRoles" id="locationRoles' + value.role_id + '" type="checkbox" ' + chk + '/><label for="locationRoles' + value.role_id + '"><i style="color: #4778d9;">' + value.role_name + '</i></label></div>');
                        });
                    }
                    else {
                        $('#btnaddroles').hide();
                        var msg = "Role(s) not available at this time.";
                        var link = '<a href="/Settings/JobRoles" class="btn btn-outline-primary btn-sm">Activate</a> existing role(s) Or <a class="btn btn-outline-success btn-sm ClsCustomRole" data-action="openmodal" type="button" data-toggle="modal" data-target="#addJobRoles"><i class="ti ti-plus"></i> Add New Role</a>';
                        $('.chkjobtitles').html(ns_rota_planner.nodata(msg, link));
                    }
                }
                else {
                    $('#btnaddroles').hide();
                    var msg = "Role(s) not available at this time.";
                    var link = '<a href="/Settings/JobRoles" class="btn btn-outline-primary btn-sm">Activate</a> existing role(s) Or <a class="btn btn-outline-success btn-sm ClsCustomRole" data-action="openmodal" type="button" data-toggle="modal" data-target="#addJobRoles"><i class="ti ti-plus"></i> Add New Role</a>';
                    $('.chkjobtitles').html(ns_rota_planner.nodata(msg, link));
                }
            });
    },
    AddUpdateLocationRoles: function (location_id) {
        var role_id = '';
        var role_id_arr = [];
        $('.locationRoles:checked').each(function () {
            role_id_arr.push(this.id.replace("locationRoles", ""));
        });
        role_id = role_id_arr.join(',');
        if (role_id == '') {
            $('.locationRoles').focus();
            ShowAlertMessage("Message", 'Please select a role', "A");
            return false;
        }
        else {
            var obj = {};
            obj.action = 'updatelocationrole';
            obj.location_id = location_id;
            obj.role_id = role_id;
            var param = "[" + JSON.stringify(obj) + "]";
            ns_ajax.post(
                urls.rotaApi + "jobpost",
                param,
                function (response) {
                    if (response.split('|')[0] == 'OK') {
                        ShowAlertMessage("Message", "Location's role has been updated successfully.", "C");
                        $('#addnodemain').modal('hide');
                        $(".modal-backdrop").css('display', 'none');
                        ns_rota_planner.GetWeekPlanner('Start');

                    }
                    else
                        ShowAlertMessage("Message", response, "A");
                });
        }
    },

    GetEmployeeLocation: function (profile_Id) {
        var param = '{"action":"get","section":"Locations","cnd_id":"' + profile_Id + '","emp_location_ids":"" ,"emp_role_id":"","emp_search":"","cnd_sub_type":"All","startDate":"","endDate":"","offset":"0","next":"10"}';
        var params = { json: param }
        ns_ajax.get(
            urls.employees,
            params,
            function (data) {
                if (data !== null) {
                    if (data.Status == 'OK') {
                        if (data.Response.length > 0) {
                            var serverResponse = data.Response;
                            var mainlocation = 0, str = '<option value="0">Select location...</option>';                          
                            $.each(serverResponse, function (key, value) {
                                var disabled = '',title='';
                                //if (parseInt(value.allotted_locations) == 0) {
                                //    disabled = 'disabled';
                                //    title = value.emp_location_name+' not alloted'
                                //}                               
                                str += "<option value=" + value.emp_location_id + " title='" + title + "'  "+disabled+" >" + value.emp_location_name + "</option>";
                                //if (parseInt(value.main_location) > 0)
                                //    mainlocation = value.emp_location_id;
                            });

                            $('#ddlRelocateLocations').html(str);
                        }
                        else
                            objCndData = null;
                    }                  
                }                
            });
    },
    RelocateShift: function (param) {
        ns_ajax.post(
            urls.rotaApi + "jobpost",
            param,
            function (response) {
                if (response.split('|')[0] == 'OK') {                  
                        ShowAlertMessage("Message", 'shift has been relocated successfully.', "C");

                    ModalHide('#modelRelocateConfirmation');                

                   // jQuery('#RotaPlannerRoleEmpSingleJob_Template').tmpl(jQuery.parseJSON(response.split('|')[1])).appendTo('#' + TableCellid);

                    //ns_rota_planner.GetWeekPlanner('Current');                
                    setTimeout(
                        function () {
                            toolTIP();
                        }, 500);
                }
                else {
                    ShowAlertMessage("Message", response, "A");
                    //jQuery('#' + TableCellid).removeClass('process-start');
                    //jQuery('#' + TableCellid).removeClass('process-start-inner');
                    ////jQuery('#job-' + cellitemid).removeClass('process-start');
                    //jQuery('#employeeshifts-' + cellitemid).removeClass('process-start-inner');
                }
            });
    },
}


//drag & drop
$(document).on("dragenter", ".rotaCellemp", function (event) {
    $(this).css('background', '#fbf4d5');
});
$(document).on("dragleave", ".rotaCellemp", function (event) {
    $(this).css('background', '#fff');
});

function dragstartPlanner_handler(ev) {
    ev.dataTransfer.setData("jobid", ev.target.id);
    ev.dataTransfer.setData("action", ev.target.getAttribute("data-action"));
    ev.dataTransfer.setData("jobtime", ev.target.getAttribute("data-job-time"));
    ev.dataTransfer.setData("cellitemid", ev.target.getAttribute("data-cell-item-id"));
    //Hide Tooltip
    var datid = ev.target.getAttribute("data-tooltip_id");   
    jQuery('#hideit-' + datid).addClass('invisible');
    jQuery('.delete-shift-dragdrop').css('border', '1px dotted');
}
function dragstart_handler(ev) {
    ev.dataTransfer.setData("jobid", ev.target.id);
    ev.dataTransfer.setData("action", ev.target.getAttribute("data-action"));
    ev.dataTransfer.setData("jobtime", ev.target.getAttribute("data-job-time"));
    ev.dataTransfer.setData("cellitemid", ev.target.getAttribute("data-cell-item-id"));
    ev.dataTransfer.setData("isassigned", ev.target.getAttribute("data-isassigned"));
    ev.dataTransfer.setData("overtime_status", ev.target.getAttribute("data-job_overtime_status"));
    jQuery('.delete-shift-dragdrop').css('border', '1px dotted');

}
function dragstartToPostJob_handler(ev) {
    ev.dataTransfer.setData("jobtime", ev.target.id);
    ev.dataTransfer.setData("action", ev.target.getAttribute("data-action"));
}
function dragstartToPostAssignJob_handler(ev) {
    ev.dataTransfer.setData("cnd_id", ev.target.id);
    ev.dataTransfer.setData("jobtime", "09:00-10:00");
    ev.dataTransfer.setData("cndroleid", ev.target.getAttribute("data-cnd_role_id"));
    ev.dataTransfer.setData("workingPatternJson", ev.target.getAttribute("data-workingPatternJson"));   
    ev.dataTransfer.setData("workingPatternJson2", ev.target.getAttribute("data-workingPatternJson2"));  
    ev.dataTransfer.setData("cnd_sub_type", ev.target.getAttribute("data-cnd_sub_type"));

    ev.dataTransfer.setData("action", ev.target.getAttribute("data-action"));

}

function dragover_handler(ev) {
    ev.preventDefault();
  
}
function drop_handler(ev) {
    ev.preventDefault();
    // Get the data, which is the id of the drop target
    var job_Id = ev.dataTransfer.getData("jobid");
    var action = ev.dataTransfer.getData("action");

    var cellitemid = ev.dataTransfer.getData("cellitemid");
    // Clear the drag data cache (for all formats/types)
    //ev.dataTransfer.clearData();  
    if (action == 'delete') {
        var tabStatus = "";
        var actionJobType = { "Action": "Actions", "Job_Type": tabStatus };
        var actionJobData = { "Action": "delete", "job_Id": job_Id, "data-cell-item-id": cellitemid, };
        var strFinal = "[" + JSON.stringify(actionJobData) + "," + JSON.stringify(actionJobType) + "]";
        ns_rota_planner.actions_rota(strFinal);
    }
    else if (action == 'delete-planner') {
        var actionJobData = { "Action": "delete", "uid": job_Id, "shiftid": cellitemid.replace('cellitem-0-', ''), };
        var strFinal = "[" + JSON.stringify(actionJobData) + "]";
        ns_rota_planner.deletePlannerShift(strFinal);
    }
    else {
        ShowAlertMessage("Message", 'Drop on exact target location.<br>Please try again !<br>Thanks...', "");
    }
}

//Copy or Move Booking
function dropToMove_handler(ev) {
    ev.preventDefault();
    
    var job_Id = ev.dataTransfer.getData("jobid");
    var action = ev.dataTransfer.getData("action");
    var jobtime = ev.dataTransfer.getData("jobtime");
    var overtime_status = ev.dataTransfer.getData("overtime_status");
  
    //ev.dataTransfer.clearData();   
    if (ctrlDown == true) {
        if (overtime_status == '1') {
            ShowAlertMessage("Message", 'Sorry! Overtime shift can not be copied', "center");
            return false;
        }
        //Copy Job
        action = (ctrlDown ? "jobpost" : "jobupdate");
        var copy = (ctrlDown ? "1" : "0");     
        var ArrayData = ev.target.id.split("-");      
        //alert(ArrayData[0]);
        var candid = ArrayData[1];
        var jobdate = ArrayData[3] + '/' + ArrayData[2] + '/' + ArrayData[4];
        var locationid = ArrayData[5];
        var roleid = ArrayData[6];
        var breakinmin = '0';
        var obj = {};
        obj.job_id = '0';
        obj.role_id = roleid;
        obj.location_id = locationid;
        obj.cnd_id = candid;
        obj.job_date = jobdate;
        obj.start_time = jobtime.split("-")[0];
        obj.end_time = jobtime.split("-")[1];
        obj.break_in_min = breakinmin;
        obj.job_rate_emp = '0';
        obj.job_rate_cnd = '0';
        obj.note = '';
        obj.publish = '0';
        obj.action = action;
        var param = "[" + JSON.stringify(obj) + "]";              


        var mydate = jobdate.split('/')[1] + '-' + jobdate.split('/')[0] + '-' + jobdate.split('/')[2];       

        var rota_cnd_id = obj.cnd_id == '' ? '0' : obj.cnd_id;
        var cellitemid = rota_cnd_id + '-' + ev.dataTransfer.getData("cellitemid").replace('cellitem-0-', '');
        var TableCellid = 'td-' + rota_cnd_id + '-' + mydate + '-' + locationid + '-' + roleid;

        jQuery('#' + TableCellid).addClass('process-start');
        jQuery('#' + TableCellid).addClass('process-start-inner');
        jQuery('#job-' + cellitemid).addClass('process-start');
        jQuery('#employeeshifts-' + cellitemid).addClass('process-start-inner');


        ns_ajax.post(
            urls.rotaApi + "jobpost",
            param,
            function (response) {
                jQuery('.delete-shift-dragdrop').css('border', '0px dotted');
                if (response.split('|')[0] == 'OK') {
                    ShowAlertMessage("Message", 'Job has been copied successfully.', "C");

                    jQuery('#job-' + cellitemid).removeClass('process-start');
                    jQuery('#employeeshifts-' + cellitemid).removeClass('process-start-inner');

                    jQuery('#' + TableCellid).removeClass('process-start');
                    jQuery('#' + TableCellid).removeClass('process-start-inner');

                    
                    jQuery('#RotaPlannerRoleEmpSingleJob_Template').tmpl(jQuery.parseJSON(response.split('|')[1])).appendTo('#' + TableCellid);
                    //ns_rota_planner.GetWeekPlanner('Current');
                    setTimeout(
                        function () {
                            toolTIP();
                        }, 500);
                }
                else {
                    ShowAlertMessage("Message", response, "A");
                    jQuery('#job-' + cellitemid).removeClass('process-start');
                    jQuery('#employeeshifts-' + cellitemid).removeClass('process-start-inner');

                    jQuery('#' + TableCellid).removeClass('process-start');
                    jQuery('#' + TableCellid).removeClass('process-start-inner');
                }
                ctrlDown = false;
            });
        //ev.target.appendChild(document.getElementById(job_Id));       
    }
    else {
        var leave_type = $('#' + ev.target.id).find('div').attr('data-leave-type');
        var leave_time = $('#' + ev.target.id).find('div').attr('data-leave-time');
        if (overtime_status == '1') {
            jQuery('.delete-shift-dragdrop').css('border', '0px dotted');
            ShowAlertMessage("Message", 'Sorry! Overtime shift can not be moved', "center");
            return false;
        }
        if (leave_type !== undefined) {
            if (leave_type == 'F') {
                ShowAlertMessage("Message", 'Sorry! Shift could not be allotted as candidate is on full day leave', "center");
                return false;
            }
            if (leave_type == 'H') {
                var leave_time_from = leave_time.split('-')[0];
                var leave_time_to = leave_time.split('-')[1];
                var slot_code = $('#' + ev.target.id).find('div').attr('data-leave-slot_code');
                slot_code = slot_code == 'FH' ? '1st Half' : slot_code == 'SH' ? '2nd Half' : '';
                
                ShowAlertMessage("Message", 'Sorry! Shift could not be allotted as candidate is on ' + slot_code+' leave', "center");
                return false;
            }
            if (leave_type == 'O') {
                var leave_time_from = leave_time.split('-')[0];
                var leave_time_to = leave_time.split('-')[1];
                ShowAlertMessage("Message", 'Sorry! Shift could not be allotted as candidate is on leave between ' + leave_time_from + ' to ' + leave_time_to+'', "center");
                return false;
            }
        }
        //Move Job     
        action = action == 'jobpost_and_assign' ? action : ((ctrlDown == false && (job_Id == '0' || job_Id == '')) ? "jobpost" : "jobupdate");
        
        var ArrayData = ev.target.id.split("-");
        var candid = ArrayData[1];
        var jobdate = ArrayData[3] + '/' + ArrayData[2] + '/' + ArrayData[4];
        var locationid = ArrayData[5];
        var roleid = ArrayData[6];
        var breakinmin = '0';
        if (action == 'jobpost_and_assign') {
            if (roleid !== ev.dataTransfer.getData("cndroleid")) {
                ShowAlertMessage("Message", 'Candidate Role mismatch', "A");
                return false;
            }
        }
        else if (ev.dataTransfer.getData("isassigned") == 'yes') {
            if (roleid !== ev.dataTransfer.getData("cellitemid").split("-")[6]) {
                ShowAlertMessage("Message", 'Sorry! This job can not move because candidate role mismatch', "A");
                return false;
            }
        }

        var cnd_sub_type = "";
        var startTime = jobtime.split("-")[0];
        var endTime = jobtime.split("-")[1];
        if (action == 'jobpost_and_assign') {
            //alert(ev.dataTransfer.getData("cndroleid"));  
            var Myflag = true;      
            cnd_sub_type = ev.dataTransfer.getData("cnd_sub_type");  
            if (cnd_sub_type == 'P' || cnd_sub_type == 'T') {
                var targetDay = ev.target.getAttribute("data-weekday");
                var workingPatternJson = ev.dataTransfer.getData("workingPatternJson");
       
                if (workingPatternJson !== '') {
                    workingPatternJson = jQuery.parseJSON(workingPatternJson);
                    jQuery.map(workingPatternJson, function (obj) {
                        $.each(obj.week_day, function (index, value) {
                            if (value == targetDay.slice(0, 3)) {
                                startTime = obj.start;
                                endTime = obj.finish;
                                Myflag = false;
                            }
                        });
                    });
                }               
            }          
          
            if (Myflag) {
                $('#txtDragStarttime').val(startTime);
                $('#txtDragEndtime').val(endTime);
                $('#txtDragBreak').val('0');
                $('#btncndworkpatternlink').attr('data-json', ev.dataTransfer.getData("workingPatternJson"));
                $('#divbtncndworkpatternlink').html(ev.dataTransfer.getData("workingPatternJson2"));
                $('#chkoverrideCndTime').prop('checked', false);
                $('#modalSetTime').modal('show');
                if (cnd_sub_type == 'P' || cnd_sub_type == 'T') {
                    $('.clsDragpop').show();
                }
                else {
                    $('.clsDragpop').hide();
                }

                //--------------------
                var obj = {};
                obj.job_id = job_Id
                obj.role_id = roleid;
                obj.location_id = locationid;
                obj.cnd_id = action == 'jobpost_and_assign' ? ev.dataTransfer.getData("cnd_id") : candid;
                obj.job_date = jobdate;
                obj.start_time = startTime;// jobtime.split("-")[0];
                obj.end_time = endTime;// jobtime.split("-")[1];
                obj.break_in_min = breakinmin;
                obj.job_rate_emp = '0';
                obj.job_rate_cnd = '0';
                obj.note = '';
                obj.cnd_sub_type = cnd_sub_type;
                obj.publish = '1';
                obj.override_status = '0';
                obj.action = action == 'jobpost_and_assign' ? 'jobpost' : action;
                var jobData = JSON.stringify(obj);   
                $('#btnJobPostAndAssignDrag').attr('data-json', jobData);
                //--------------------
                return false;
            }
        }    

        var obj = {};
        obj.job_id = job_Id
        obj.role_id = roleid;
        obj.location_id = locationid;
        obj.cnd_id = action == 'jobpost_and_assign' ? ev.dataTransfer.getData("cnd_id") : candid;
        obj.job_date = jobdate;
        obj.start_time = startTime;// jobtime.split("-")[0];
        obj.end_time = endTime;// jobtime.split("-")[1];
        obj.break_in_min = breakinmin;
        obj.job_rate_emp = '0';
        obj.job_rate_cnd = '0';
        obj.note = '';
        obj.cnd_sub_type = cnd_sub_type;
        obj.publish = '1';
        obj.override_status = '0';
        obj.action = action == 'jobpost_and_assign' ? 'jobpost' : action;

        var rota_cnd_id = (obj.cnd_id == '' || obj.cnd_id == null) ? '0' : obj.cnd_id;
       
        var mydate = jobdate.split('/')[1] +'-'+ jobdate.split('/')[0] +'-'+ jobdate.split('/')[2];

        var cellitemid = rota_cnd_id+'-'+ev.dataTransfer.getData("cellitemid").replace('cellitem-0-','');
        var TableCellid = 'td-' + rota_cnd_id+'-' + mydate + '-' + locationid + '-' + roleid;
        jQuery('#' + TableCellid).addClass('process-start');
        jQuery('#' + TableCellid).addClass('process-start-inner');
        jQuery('#job-' + cellitemid).addClass('process-start');
        jQuery('#employeeshifts-' + cellitemid).addClass('process-start-inner');

        var param = "[" + JSON.stringify(obj) + "]";   
        ns_ajax.post(
            urls.rotaApi + "jobpost",
            param,
            function (response) {
                jQuery('.delete-shift-dragdrop').css('border', '0px dotted');
                if (response.split('|')[0] == 'OK') {
                    ShowAlertMessage("Message", 'Job has been move successfully.', "C");

                    jQuery('#job-' + cellitemid).removeClass('process-start');
                    jQuery('#employeeshifts-' + cellitemid).removeClass('process-start-inner');
                    jQuery('#job-' + cellitemid).remove();

                    jQuery('#' + TableCellid).removeClass('process-start');
                    jQuery('#' + TableCellid).removeClass('process-start-inner');
                    jQuery('#RotaPlannerRoleEmpSingleJob_Template').tmpl(jQuery.parseJSON(response.split('|')[1])).appendTo('#' + TableCellid);

                    //ns_rota_planner.GetWeekPlanner('Current');
                    setTimeout(
                        function () {
                            toolTIP();
                        }, 500);
                }
                else {
                    ShowAlertMessage("Message", response, "A");
                    jQuery('#job-' + cellitemid).removeClass('process-start');
                    jQuery('#employeeshifts-' + cellitemid).removeClass('process-start-inner');
                    jQuery('#' + TableCellid).removeClass('process-start');
                    jQuery('#' + TableCellid).removeClass('process-start-inner');
                }
            });
    }
}

//Copy or Move Planner Shift
function dropToMovePlanner_handler(ev) {  
    ev.preventDefault();
    var planner_uid = ev.dataTransfer.getData("jobid");
    var action = ev.dataTransfer.getData("action");
    var jobtime = ev.dataTransfer.getData("jobtime");
  /*  jQuery('.tital-text__tooltip').css('visibility', 'visible');*/
    //ev.dataTransfer.clearData(); 
    if (ctrlDown == true) {
        //Copy Job
        action = (ctrlDown ? "addplannershift" : "updateplannershift");
        var ArrayData = ev.target.id.split("-");
        var week = ArrayData[2];
        var day = ArrayData[3];
        var location_id = ArrayData[4];
        var role_id = ArrayData[5];
        var break_in_min = '0';
        var note = '';
        var action = action;
        var obj = {};
        obj.uid = planner_uid;
        obj.week = week;
        obj.day = day;
        obj.role_id = role_id;
        obj.location_id = location_id;
        obj.start_time = jobtime.split("-")[0].trim();
        obj.end_time = jobtime.split("-")[1].trim();
        obj.break_in_min = break_in_min;
        obj.note = note;
        obj.action = action;
        var param = "[" + JSON.stringify(obj) + "]";
        var TableCellid = 'td-0-' + week + '-' + day + '-' + location_id + '-' + role_id;
        jQuery('#' + TableCellid).addClass('process-start');
        jQuery('#' + TableCellid).addClass('process-start-inner');    
        ns_ajax.post(
            urls.rotaApi + "jobpost",
            param,
            function (response) {
                jQuery('.delete-shift-dragdrop').css('border', '0px dotted');
                if (response.split('|')[0] == 'OK') {
                    ShowAlertMessage("Message", 'Planner shift has been copied successfully.', "C");
                    jQuery('#' + TableCellid).removeClass('process-start');
                    jQuery('#' + TableCellid).removeClass('process-start-inner');
                    jQuery('#RotaPlannerSingleJob_Template').tmpl(jQuery.parseJSON(response.split('|')[1])).appendTo('#' + TableCellid);
                    //ns_rota_planner.GetWeekPlanner('Current');
                }
                else {                   
                    jQuery('#' + TableCellid).removeClass('process-start');
                    jQuery('#' + TableCellid).removeClass('process-start-inner');
                    ShowAlertMessage("Message", response, "A");
                }
                ctrlDown = false;
            });
        //ev.target.appendChild(document.getElementById(job_Id));       
    }
    else {
        var plannername = $('#ddlPlanner').val().trim();
      
        if (plannername == '' && (planner_uid == '0' || planner_uid == '')) {
            $('#ddlPlanner').focus();
            $('#ddlPlanner').css('border', '1px solid #f00');
            ShowAlertMessage("Message", 'Please select planner', "A");
            return false;
        }
        else {
            //Move Job 
            if ((ctrlDown == false && (planner_uid == '0' || planner_uid == ''))) {
                action = "addplannershift";
                planner_uid = plannername;
            }
            else
                action = "updateplannershift";
            
            var cellitemid = ev.dataTransfer.getData("cellitemid");
           
            var ArrayData = ev.target.id.split("-");
            var week = ArrayData[2];
            var day = ArrayData[3];
            var location_id = ArrayData[4];
            var role_id = ArrayData[5];
            var break_in_min = '0';
            var note = '';
            var action = action;
            var shiftid = cellitemid.replace('cellitem-0-', '');// location_id + role_id + day + jobtime.split("-")[0].trim() + jobtime.split("-")[1].trim();
       
            var obj = {};
            obj.uid = planner_uid;
            obj.shiftid = shiftid;
            obj.week = week;
            obj.day = day;
            obj.role_id = role_id;
            obj.location_id = location_id;
            obj.start_time = jobtime.split("-")[0].trim();
            obj.end_time = jobtime.split("-")[1].trim();
            obj.break_in_min = break_in_min;
            obj.note = note;
            obj.action = action;
            var param = "[" + JSON.stringify(obj) + "]";
            var TableCellid = 'td-0-' + week + '-' + day + '-' + location_id + '-' + role_id;
           
            cellitemid=cellitemid.replace('cellitem-0-', '');            
            cellitemid = cellitemid.replace(':', '_').replace(':', '_');
            jQuery('#job-0-' + cellitemid).addClass('process-start');
            jQuery('#employeeshifts-0-' + cellitemid).addClass('process-start-inner');
            jQuery('#' + TableCellid).addClass('process-start');
            jQuery('#' + TableCellid).addClass('process-start-inner');
           
          
            //alert(delete_id);       
            ns_ajax.post(
                urls.rotaApi + "jobpost",
                param,
                function (response) {
                    jQuery('.delete-shift-dragdrop').css('border', '0px dotted');
                    if (response.split('|')[0] == 'OK') {
                        ShowAlertMessage("Message", 'Planner shift has been moved successfully.', "C");
                        jQuery('#job-0-' + cellitemid).removeClass('process-start');
                        jQuery('#employeeshifts-0-' + cellitemid).removeClass('process-start-inner');
                        jQuery('#job-0-' + cellitemid).remove();
                        jQuery('#' + TableCellid).removeClass('process-start');
                        jQuery('#' + TableCellid).removeClass('process-start-inner');
                      
                        jQuery('#RotaPlannerSingleJob_Template').tmpl(jQuery.parseJSON(response.split('|')[1])).appendTo('#' + TableCellid);
                        //ns_rota_planner.GetWeekPlanner('Current');
                    }
                    else {
                        ShowAlertMessage("Message", response, "A");
                        jQuery('#job-0-' + cellitemid).removeClass('process-start');
                        jQuery('#employeeshifts-0-' + cellitemid).removeClass('process-start-inner');
                    }
                });
        }
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



function CalculateTime(type, duration, job_overtime_status) {
    type = type.toLowerCase();
  
    if ($.isNumeric(duration)) {
        if (type == 'internal') {
           // $('#totalDurationInternal').html((parseFloat($('#totalDurationInternal').html()) + parseFloat(duration)).toFixed(2));
            
            if (job_overtime_status == '1')
                $('#totalOvertimeDurationInternal').html((parseFloat($('#totalOvertimeDurationInternal').html()) + parseFloat(duration)).toFixed(2));
        }
     
        if (type == 'staffbank') {
            $('#totalDurationStaffBank').html((parseFloat($('#totalDurationStaffBank').html()) + parseFloat(duration)).toFixed(2));
            if (job_overtime_status == '1')
                $('#totalOvertimeDurationStaffBank').html((parseFloat($('#totalOvertimeDurationStaffBank').html()) + parseFloat(duration)).toFixed(2));
        }
        if (type == 'agency')
            $('#totalDurationAgency').html((parseFloat($('#totalDurationAgency').html()) + parseFloat(duration)).toFixed(2));

        if (job_overtime_status == '1' || type == 'staffbank' || type == 'agency')
            $('#totalhours').html((parseFloat($('#totalhours').html()) + parseFloat(duration)).toFixed(2));
    }
}
function calculateCost(type, cost, job_overtime_status) {
    type = type.toLowerCase();
    if ($.isNumeric(cost)) { 
        if (type == 'internal') {
            //$('#totalcostInternal').html((parseFloat($('#totalcostInternal').html()) + parseFloat(cost)).toFixed(2));
            if (job_overtime_status == '1')
                $('#totalOvertimeCostInternal').html((parseFloat($('#totalOvertimeCostInternal').html()) + parseFloat(cost)).toFixed(2));
        }
   
        if (type == 'staffbank') {
            $('#totalcostStaffBank').html((parseFloat($('#totalcostStaffBank').html()) + parseFloat(cost)).toFixed(2));
            if (job_overtime_status == '1')
                $('#totalOvertimeCostStaffBank').html((parseFloat($('#totalOvertimeCostStaffBank').html()) + parseFloat(cost)).toFixed(2));
        }
    if (type == 'agency')
        $('#totalcostAgency').html((parseFloat($('#totalcostAgency').html()) + parseFloat(cost)).toFixed(2));
  
        if (job_overtime_status == '1' || type == 'staffbank' || type == 'agency')       
            $('#totalcost').html((parseFloat($('#totalcost').html()) + parseFloat(cost)).toFixed(2));
    }
}
function GetTotaljobs(value) {
    if (value == 'publishedshiftbooked') {
        //$('#totalhours').html((parseFloat($('#totalhours').html()) + parseFloat(value)).toFixed(2));
    }

    if (value == 'unpublishedshiftopen') {
        $('#clstotaloffline').html(parseInt($('#clstotaloffline').html()) + 1);
    }
    if (value == 'publishedshift') {
        $('#clstotallive').html(parseInt($('#clstotallive').html()) + 1);
    }
    if (value == 'publishedshift' || value == 'unpublishedshiftopen') {
        $('#clstotalopen').html(parseInt($('#clstotalopen').html()) + 1);
    }

}

function fn_calculateDuration() {
    //Shif DateTime  
    var fromDate = $("#txtshiftdate").val();
    var fromTime = $("#txtstarttime").val();
    var ToDate = $("#txtshiftdate").val();
    var ToTime = $("#txtendtime").val();
    if (fromDate != "" && fromTime != "" && ToDate != "" && ToTime != "") {      
        fromDate = ConvertDateFormate2(fromDate);
        ToDate = ConvertDateFormate2(ToDate);
        var fromDT = fromDate + " " + fromTime;
        var toDT = ToDate + " " + ToTime;
      
        var startTime = new Date(fromDT);
        var endTime = new Date(toDT);
        var difference = (endTime - startTime); // This will give difference in milliseconds
        var resultInMinutes = (difference / 60000);
        if (resultInMinutes > 0)
            duration = resultInMinutes;
        else
            duration = 0;
        var hour = parseInt(resultInMinutes / 60);
        var minutes = parseInt(resultInMinutes % 60);

        if (minutes == 0)
            $("#txtduration, #txtdurationrate").val(parseInt(resultInMinutes / 60));
        else
            $("#txtduration, #txtdurationrate").val(hour + '.' + minutes);

        var amt = $("#txtshiftrate").val();
        var dur = $("#txtduration").val();
        var cost = parseFloat(amt) * parseFloat(dur);
        $('.shiftcost').html(cost.toFixed(2));
        $('.shiftcost').attr('cost', cost.toFixed(2));
       
    }
    
}

function ConvertDateFormate2(date) {
    if (date !== '') {       

        //var d = new Date(date.split("/").reverse().join("-"));
        //alert(d);
        //var dd = d.getDate() < 10 ? d.getDate() : d.getDate();
        //var mm = d.getMonth() < 10 ? d.getMonth() + 1 : d.getMonth() + 1;
        //var yy = d.getFullYear();

        var d1 = date.split('/')[0];
        var m1 = date.split('/')[1];
        var y1= date.split('/')[2];
        var newdate = m1 + "/" + d1 + "/" + y1;    
        return newdate;
    }
    else
        return "";
};

function MarkRelocated(reference) {
    reference = reference !== '' ? reference.replace('/', '-').replace('/', '-') : reference;
    var clss = '';
    if (reference !== '') {
        clss = reference + ' ';
    }
    //setTimeout(function () {   
    //    $('.' + clss).addClass('strike');
    //}, 500);  
}

function MarkRelocatedLocation(reference, location) {
    reference = reference !== '' ? reference.replace('/', '-').replace('/', '-') : reference;
    var clss = '';
    if (reference !== '') {
        clss = reference + ' ';
        setTimeout(function () {         
           // $('.duration-' + clss).append('<i class="zmdi zmdi-pin col-red" title="Relocated to ' + location+'"></i>')
         }, 500);
        
    }
    setTimeout(function () {
        $('.' + clss).addClass('strike');
    }, 500);

    setTimeout(
        function () {
            toolTIP();
        }, 500);
}


function IsRelocated(string, string2) {
    var _flag = 0;
    var i = 0, length = string.length;
    for (i; i < length; i++) {
        string = string.replace('/', '-');//.replace('relocatefrom-0-', '');
    }

    if (string == 'relocatefrom-0-'+string2)
        _flag = 1;

    return _flag;
}