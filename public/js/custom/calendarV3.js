var calendarArrPostedJob = [], placeholder_calendar = '', placeholder_list = '', readonly = '', tags = '', tabs = '', nav = '', calendar_action = 'All', calendar_view_type = 'month', calendar_request_from_date = '', calendar_request_to_date = '', calendar_cnd_id = 0;

$(document).ready(function () {
    //$.widget("custom.catcomplete", $.ui.autocomplete, {
    //    _create: function () {
    //        this._super();
    //        this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
    //    },
    //    _renderMenu: function (ul, items) {
    //        var that = this,
    //            currentCategory = "";
    //        $.each(items, function (index, item) {

    //            var li;
    //            if (item.category != currentCategory) {
    //                ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
    //                currentCategory = item.category;
    //            }
    //            li = that._renderItemData(ul, item);
    //            if (item.category) {
    //                li.attr("aria-label", item.category + " : " + item.label);
    //            }
    //        });
    //    }
    //});

    //$('#cldrTxtClientName').select2({
    //    selectOnClose: false,
    //    placeholder: "Select a Client..."
    //    //allowClear: true
    //});
    //ns_calendar.GetClients();
    $(document).on('change', '#cldrTxtClientName', function () {
        ns_calendar.GetEmpLocations($(this).val());
    })

    $(document).on('click', '.Evt_calendar', function () {
        var action = $(this).attr('data-action');
        if (action == 'dataview') {
            var viewtype = $(this).attr('data-viewtype');
            calendar_view_type = viewtype;
            ns_calendar.get();
            $('.calendarview').removeClass('active');
            $(this).addClass('active');
         
        }
        if (action == 'navigate') {
            var Actiondate = $(this).attr('data-val');
            var dataDirection = $(this).attr('data-direction');
            if (dataDirection == 'next')
                calendar_request_from_date = Actiondate;
            if (dataDirection == 'prev')
                calendar_request_from_date = Actiondate;
            ns_calendar.get();
        }
        if (action == 'refresh') {
            calendar_action = 'All';
            calendar_view_type = 'month';
            calendar_request_from_date = '';
            calendar_request_to_date = '';
            $('.cnd-cldr-filters').prop('checked', false);
            $('#optio3').prop('checked',true);
            ns_calendar.get();
        }
        if (action == 'refresh-dashborad') {
            calendar_action = 'job';
            calendar_view_type = 'month';
            calendar_request_from_date = '';
            calendar_request_to_date = '';
            ns_calendar.get();
        }
        if (action == 'check_header') {
            $(this).find('input:checkbox').each(function () {
                this.checked ? this.checked = false : this.checked = true;
                var day = $(this).attr('data-day-name').split("-")[1];
                $(".day-" + day + " input:checkbox").prop('checked', $(this).prop("checked"));
                var daycellCls = [];
                $('.day-' + day + ':checked').each(function () {
                    daycellCls.push($(this).attr('data-cell-number'));
                });
                daycellCls = daycellCls.join(',');
            })
        }
        if (action == 'check') {
            if ($(this).find('input:checkbox').is(":checked"))
                $(this).find('input:checkbox').prop('checked', false);
            else
                $(this).find('input:checkbox').prop('checked', true);
        }
        if (action == 'filter') {
            var filter = $(this).attr('data-filter');
            if (filter == 'all') {
                if (this.checked) {
                    $('.cls-other').show();
                    $('.cnd-cldr-filters').prop('checked', true);
                }
                else {
                    $('.cls-other').hide();
                    $('.cnd-cldr-filters').prop('checked', false);
                }
            }
            else {
                if (this.checked) {
                    //$('.cls-other').hide();
                    $('.' + filter).show();
                }
                else {
                    $('.cls-other').show();
                    $('.' + filter).hide();
                }



                //if (filter !== 'all') {                     
                //    $('.cnd-cldr-filters').prop('checked', false);
                //    $(this).prop('checked', true);
                //}
                //else {                     
                //    $('.cnd-cldr-filters').prop('checked', true);
                //}

            }
        }

        if (action == 'add-event') {
            if ($(this).attr('data-event-starttime') == 'custom') {
                var eventtype = $(this).attr('data-eventtype');
                var popup = $(this).data('popup');
                if (popup != '') {
                    $('#' + popup).modal('show');
                    $(".clearText").val('');
                    var eventStartDate = $(this).attr('data-event-startdate');

                    $('#txtEventStartDate').val(eventStartDate);
                    $('#txtEventEndDate').val(eventStartDate);
                    $("#rdoAllDay").prop('checked', 'checked');
                    $("#rdoAvailable").prop('checked', 'checked');
                    $(".task-name").hide('slow');
                    $(".event-title").show('slow');
                    $(".event-time").css('display', 'none');

                    $('#btnSubmitCNDEvent').attr('data-id', '');
                    $('#btnSubmitCNDEvent').attr('data-action', 'event_add');
                    $('#btnDeleteEvent').hide();
                    $('#btnDeleteEvent').attr('data-id', '');
                }
            }
            else {
                ns_calendar.EventsAction(this, '');
            }
        }
        if (action == 'event_add') {
            ns_calendar.EventsAction(this, 'custom');
        }

        if (action == 'edit-event') {
            var popup = $(this).data('popup');
            $('#' + popup).modal('show');
            $(".clearText").val('');
            var event_id = $(this).attr('data-id');
            var eventtype = $(this).attr('data-event-type');
            var IsParcial = $(this).attr('data-time-slot');
            var event_date = $(this).attr('data-event-date');
            var event_time = $(this).attr('data-event-time');
            var event_title = $(this).attr('data-event-title');
            var event_desc = $(this).attr('data-event-desc');
            $('#txtEventDescription').val(event_desc);
            $('#btnSubmitCNDEvent').attr('data-id', event_id);
            $('#btnSubmitCNDEvent').attr('data-action', 'event_edit');
            $('#btnDeleteEvent').show();
            $('#btnDeleteEvent').attr('data-id', event_id);

            // $('input[name=rdoEventType][value=' + eventtype + ']').attr('checked', true); 


            if (eventtype.toLowerCase().trim() == 'task') {
                $(".task-name").show('slow');
                $(".event-title").hide('slow');
                $('#txtTaskName').val(event_title);
                jQuery("#rdoTask").prop('checked', 'checked');
            }
            else {
                $(".task-name").hide('slow');
                $(".event-title").show('slow');
                $('#txtEventTitle').val(event_title);
                if (eventtype == 'Available')
                    jQuery("#rdoAvailable").prop('checked', 'checked');
                else if (eventtype == 'UnAvailable')
                    jQuery("#rdoUnAvailable").prop('checked', 'checked');
            }

            // $("input[name=rdoAvailability][value=" + (IsParcial == "All Day" ? '1' : '2') + "]").attr('checked', 'checked');        

            $('#txtEventStartDate').val(event_date.split("-")[0].trim());
            $('#txtEventEndDate').val(event_date.split("-")[1].trim());
            if (IsParcial !== "All Day") {
                $('#txtEventStartTime').val(event_time.split("-")[0].trim());
                $('#txtEventEndTime').val(event_time.split("-")[1].trim());
                $("#txtEventEndTime, #txtEventStartTime").show();
                jQuery("#rdoPartail").prop('checked', 'checked');
            }
            else {
                $("#txtEventEndTime, #txtEventStartTime").hide();
                jQuery("#rdoAllDay").prop('checked', 'checked');
            }
        }
        if (action == 'event_edit') {
            ns_calendar.EventsAction(this, action);
        }
        if (action == 'delete_event') {
            $("#modalCNDcldrDeleteHeading").text('Delete ' + $(this).attr('data-event-desc'));
            $("#cndcldrDeletelbl").text("Do you want to delete this " + $(this).attr('data-type') + "?");
            $("#modalCNDDeleteBtnYes").attr('data-id', $(this).attr('data-id'))
            $("#modalCNDDeleteBtnYes").attr('data-type', $(this).attr('data-type'));
            $("#modalCNDDeleteBtnYes").attr('data-event-date', $(this).attr('data-event-date'));
            $("#modalCNDDeleteBtnYes").attr('data-event-type', $(this).attr('data-event-type'));
        }
        if (action == 'delete') {
            if ($(this).attr('data-title').toUpperCase() == 'NO') {
                $("#modalCNDCldrDelete").modal('hide');
                $(".modal-backdrop").css('display', 'none');
            }
            else {
                ns_calendar.EventsAction(this, action);
            }
        }
        if (action == 'add-job') {
            var popup = $(this).data('popup');
            $('#' + popup).modal('show');
            var startDate = $(this).attr('data-event-startdate');
            $(".clearText").val('');
            $("#cldrTxtClientName").val("");
            $('#cldrTxtStartDate').val(startDate);
            $('#cldrTxtEndDate').val(startDate);
            $('#cldrTxtStartTime').show();
            $('#cldrTxtEndTime').show();
            $('#cldrTxtDuration').html('0');
            $('#cldrEmpId').val('0');
            $('#divdlLocations').hide();
            $('.cldr-btn-preview-job').show();
            $(".cldr-add-job").show('slow');
            $('.prev_job_area').hide('slow');
            $('.thanks_job_area').hide('slow');
            $('#cldrBtnCloseJob').hide();
            $('#cldrBtnSubmitJob').hide();
            DatePairFuction();
            ns_calendar.SearchEmpofCnd();
        }
        if (action == 'job_edit') {
            $(".prev_job_area").hide('slow');
            $(".cldr-add-job").show('slow');
            $("#cldrBtnSubmitJob").hide('slow');
            $("#cldrBtnCloseJob").hide('slow');
            $(".cldr-btn-preview-job").show('slow');
        }
        if (action == 'priview-job') {
            calendarArrPostedJob = [];
            var cldremployeeText = $("#cldrTxtClientName");
            //var cldrEmpId = $('#cldrEmpId').val();
            var cldrlocation = $("#cldrddlLocations :selected");
            var cldrstartDate = $("#cldrTxtStartDate");
            var cldrstartTime = $("#cldrTxtStartTime");
            var cldrendDate = $("#cldrTxtEndDate");
            var cldrendTime = $("#cldrTxtEndTime");
            var cldrCNDRate = $("#cldrTxtCNDRate");

            if (cldremployeeText.val() == 0 || cldremployeeText.val() == null) {
                cldremployeeText.focus()
                ShowAlertMessage("Message", "Please enter client name !", "A");
                return false;
            }
            //if (cldrEmpId.length == 0) {
            //    cldremployeeText.focus()
            //    ShowAlertMessage("Message", "Please Select client !", "A");
            //    return false;
            //}
            if (cldrlocation.val() == 0) {
                cldrlocation.focus();
                ShowAlertMessage("Message", "Please select location!", "A");
                return false;
            }
            if (cldrstartDate.val().length == 0) {
                cldrstartDate.focus()
                ShowAlertMessage("Message", "Please enter start date !", "A");
                return false;
            }
            if (cldrendDate.val().length == 0) {
                cldrstartDate.focus()
                ShowAlertMessage("Message", "Please enter end date !", "A");
                return false;
            }
            if (cldrstartTime.val().length == 0) {
                cldrstartTime.focus();
                ShowAlertMessage("Message", "Please enter start time !", "A");
                return false;
            }
            if (cldrendTime.val().length == 0) {
                cldrendTime.focus();
                ShowAlertMessage("Message", "Please enter end time !", "A");
                return false;
            }

            if (cldrCNDRate.val() == 0) {
                cldrCNDRate.focus();
                ShowAlertMessage("Message", "Please enter CND rate !", "A");
                return false;
            }

            var cldrPostedJobs = {
                "emp_id": cldremployeeText.val(),
                "location_id": cldrlocation.val(),
                "shift_type": "0",
                "it_system": "0",
                "from_datetime": cldrstartDate.val() + " " + cldrstartTime.val(),
                "to_datetime": cldrendDate.val() + " " + cldrendTime.val(),
                "jobrate": cldrCNDRate.val(),
                "cndrate": cldrCNDRate.val(),
                "job_comments": ""
            };

            $("#cldrPrevClientName").html($('#cldrTxtClientName :selected').text());
            $("#cldrPrevLocation").text(cldrlocation.text());
            $("#cldrPrevStartDateTime").text((cldrstartDate.val() + " " + cldrstartTime.val()));
            $("#cldrPrevEndDateTime").text((cldrendDate.val() + " " + cldrendTime.val()));
            $("#cldrPrevDuration").text($("#cldrTxtDuration").html());
            $("#cldrPrevCNDRate").text(cldrCNDRate.val());
            $("#cldrPrevShiftCost").text($("#cldrTxtShiftCost").val());
            $(".prev_job_area").show('slow');
            $(".cldr-add-job").hide('slow');
            $("#cldrBtnSubmitJob").show('slow');
            $("#cldrBtnCloseJob").show('slow');
            $(".cldr-btn-preview-job").hide('slow');
            calendarArrPostedJob.push(cldrPostedJobs);
        }
        if (action == 'post-job') {
            var cldrarrJobType = [];
            var cldrPostedJobType = {
                "Action": "Post-job"
            }
            cldrarrJobType.push(cldrPostedJobType);
            var strFinal = "[" + JSON.stringify(calendarArrPostedJob) + "]";     
            ns_calendar.post_jobs(strFinal, this);
        }
    });
    $(document).on('change', ".calendar-calculate-Amount", function () {
        ns_calendar.fn_calculate_amount();
    });
    $(document).on('keyup', ".calendar-calculate-Amount", function () {
        ns_calendar.fn_calculate_amount();
    });

    $(document).on("keypress", "#cldrTxtCNDRate", function (event) {
        return ns_calendar.isDecimal(event, this);
    });
    $(document).on('change', '.rdoEventType', function () {
        if ($(this).attr('data-item') == 'Task') {
            $("#txtTaskName").val('');
            $("#txtEventStartDate").prop('disabled', false);
            $("#txtEventEndDate").prop('disabled', false);
            $('.task-name').show('slow');
            $('.event-title').hide('slow');
        }
        else {
            $("#txtEventTitle").val('');
            $("#txtEventStartDate").prop('disabled', false);
            $("#txtEventEndDate").prop('disabled', false);
            $('.event-title').show('slow');
            $('.task-name').hide('slow');
        }
    });
    $(document).on('change', '.rdoAvailability', function () {
        if ($(this).attr('data-val') == 'partial') {
            $("#txtEventStartTime").val('');
            $("#txtEventEndTime").val('');
            $('.event-time').css('display', '');
        }
        else
            $('.event-time').css('display', 'none');
    })
});

ns_calendar = {
    design: function (dataFor, from_date, to_date, PlaceholderCalendar, PlaceholderList, IsReadonly, tag, layout_tabs, navigator) {
        calendar_request_from_date = from_date;
        calendar_request_to_date = to_date;
        calendar_action = dataFor;
        placeholder_calendar = PlaceholderCalendar;
        placeholder_list = PlaceholderList
        readonly = IsReadonly;
        tags = tag;
        tabs = layout_tabs;
        nav = navigator;
        ns_calendar.get();
    },
    designLanding: function (dataFor, from_date, to_date, PlaceholderCalendar, PlaceholderList, IsReadonly, tag, layout_tabs, navigator, requestid) {
        calendar_cnd_id = requestid;
        calendar_request_from_date = from_date;
        calendar_request_to_date = to_date;
        calendar_action = dataFor;
        placeholder_calendar = PlaceholderCalendar;
        placeholder_list = PlaceholderList
        readonly = IsReadonly;
        tags = tag;
        tabs = layout_tabs;
        nav = navigator;
        ns_calendar.get_for_landing();
    },
    EventsAction: function (e, request) {
        var arrCndCldrEvents = [], cndCldEventAction, action = '', evt;
        if (request == 'delete') {
            evt = e;
            action = 'delete_event';
            var eventData = {
                "evt_id": $(e).attr('data-id'),
                "cnd_id": calendar_cnd_id,
                "action": action
            }
            arrCndCldrEvents.push(eventData);
             cndCldEventAction = { "action": 'delete_event', "cnd_id": calendar_cnd_id };

        }
        else if (request == 'custom' || request == 'event_edit') {
            evt = e;
            var eventData, eventTitle;
            action = request == 'custom' ? 'add_events' : 'update_event';// $(e).attr('data-action');       
            var eventType = $('input[name=rdoEventType]:checked');
            var DateType = $('input[name=rdoAvailability]:checked');
            var eventStartDate = $("#txtEventStartDate");
            var eventStartTime = $("#txtEventStartTime");
            var eventEndDate = $("#txtEventEndDate");
            var eventEndTime = $("#txtEventEndTime");

            var eventDescription = $("#txtEventDescription");
            //Check weather its task or event
            (eventType.attr('data-item') === "Task" ? eventTitle = $("#txtTaskName") : eventTitle = $("#txtEventTitle"));
            if (eventType.attr('data-item') === "Task" && eventTitle.val() == '') {
                eventTitle.focus();
                ShowAlertMessage("Message", "Enter Task Name", "A");
                return false;
            }
            if (eventStartDate.val() == '') {
                eventStartDate.focus();
                ShowAlertMessage("Message", "Enter start date", "A");
                return false;
            }
            if (eventStartTime.val() == '' && DateType == '2') {
                eventStartTime.focus();
                ShowAlertMessage("Message", "Enter start time", "A");
                return false;
            }

            if (eventEndDate.val() == '') {
                eventEndDate.focus();
                ShowAlertMessage("Message", "Enter end date", "A");
                return false;
            }
            if (eventEndTime.val() == '' && DateType == '2') {
                eventEndTime.focus();
                ShowAlertMessage("Message", "Enter end time", "A");
                return false;
            }
            if (eventStartTime.val().length == 0)
                eventStartTime.val("00:00");
            if (eventEndTime.val().length == 0)
                eventEndTime.val("23:59");

            eventData = {
                "event_id": (action == 'update_event' ? $(e).attr('data-id') : '0'),
                "evt_id": (action == 'update_event' ? $(e).attr('data-id') : '0'),
                "cnd_id": calendar_cnd_id,
                "event_type": eventType.attr('data-item'),
                "event_title": (eventTitle.val().length > 0 ? eventTitle.val() : ''),
                "event_start_datetime": (eventStartDate.val().trim() + " " + eventStartTime.val().trim()),
                "event_end_datetime": (eventEndDate.val().trim() + " " + eventEndTime.val().trim()),
                "event_desc": (eventDescription.val().trim() !== "" ? eventDescription.val().trim() : ""),
                "action": action
            }
            arrCndCldrEvents.push(eventData);
            cndCldEventAction = { "action": action, "cnd_id": calendar_cnd_id };           

        }
        else {
            evt = '';
            action = 'add_events';
            var eventStartTime = $(e).attr('data-event-starttime');
            var eventEndTime = $(e).attr('data-event-endtime');
            var eventType = $(e).attr('data-eventtype');
            cndCldEventAction = { "action": action, "cnd_id": calendar_cnd_id };
            if (calendar_view_type == 'day') {
                var currDay = cnd_cldr_day_counter < 10 ? '0' + cnd_cldr_day_counter : cnd_cldr_day_counter;
                var currMonth = (monthNumber + 1) < 10 ? '0' + (monthNumber + 1) : (monthNumber + 1);
                var cndCldrEvents = {
                    "event_title": "",
                    "event_desc": "",
                    "cnd_id": calendar_cnd_id,
                    "event_start_datetime": currDay + '/' + currMonth + '/' + currentYear + ' ' + eventStartTime,
                    "event_end_datetime": currDay + '/' + currMonth + '/' + currentYear + ' ' + eventEndTime,
                    "event_type": eventType
                };
                arrCndCldrEvents.push(cndCldrEvents);
            }
            else {
                $('.chkeventdate:checkbox:checked').map(function () {
                    var cndCldrEvents = {
                        "event_title": "",
                        "event_desc": "",
                        "cnd_id": calendar_cnd_id,
                        "event_start_datetime": $(this).attr('data-event-startdate') + ' ' + eventStartTime,
                        "event_end_datetime": $(this).attr('data-event-startdate') + ' ' + eventEndTime,
                        "event_type": eventType,
                        "action": action
                    }
                    arrCndCldrEvents.push(cndCldrEvents);
                }).get();
                if (arrCndCldrEvents.length == 0) {
                    ShowAlertMessage("Message", 'Please select any date from calendar !', "S");
                    return false;
                }
            }
        }

        var strFinal = "[" + JSON.stringify(cndCldEventAction) + "," + JSON.stringify(arrCndCldrEvents) + "]";
     
        ns_calendar.postEvents(strFinal, action, evt);
    },
    showActionOption: function (calendar_action) {
        if (tabs == 'yes')
            $('.calendar_tabs').show();
        else
            $('.calendar_tabs').hide();

        if (nav == 'yes')
            $('.clsnav').show();
        else
            $('.clsnav').hide();

        if (readonly == 'no')
            $('.clstags').hide();
        else {
            $('.clstags').show();
            if (calendar_action == 'job') {
                $('.clsAvailableOption').hide();
                $('.clsJobOption').show();
            }
            else if (calendar_action == 'available') {
                $('.clsJobOption').hide();
                $('.clsAvailableOption').show();
            }
            else {
                $('.clsJobOption').show();
                $('.clsAvailableOption').show();
            }
        }
        if (tags == 'yes') {
            $('.clsreadonly').show();
            $('.marks').hide();
            $('.clndr-td div.day').addClass('clscellheight');
        }
        else {
            $('.clsreadonly').hide();
            $('.marks').show();
            $('.clndr-td div.day').removeClass('clscellheight');
        }
    },
    ShowAvailability: function (event)
    {      
        var flag = 0, flag_event='';
        $(".cnd-cldr-filters").each(function () {
            if ($(this).prop("checked") == true) {
                event = $(this).attr('data-filter');
                if (event == 'available') {
                    flag_event = event;
                    flag = flag + 1;                 
                }
                else 
                    flag = flag + 1;     
             
            }           
        });
        if (flag == 1 && flag_event == 'available')
        {
            $('.unavailable_show').css('background', '#fff');
            $('.cls-other').hide();            
            $('.available').show();              
        }
        else
        {
            $('.cls-other').show();
            $('.available').show();
        }       
    },    
    fn_calculate_amount: function () {
        $("#cldrTxtDuration").val('0');
        var jbStartTime = $("#cldrTxtStartTime").val();
        var jbEndTime = $("#cldrTxtEndTime").val();
        var totalTm = CalculateMinutes(jbStartTime, jbEndTime);
        var hrsMin = CalculateMinutesToHr(jbStartTime, jbEndTime);
        
        $("#cldrTxtDuration").val(hrsMin);
        if (!isNaN(totalTm)) {
            $("#cldrTxtDuration").html(hrsMin);
            $("#cldrTxtShiftCost").val((parseFloat($("#cldrTxtCNDRate").val()) * totalTm).toFixed(2));
        }
        else {
            $("#cldrTxtDuration").html('0');
            $("#cldrTxtShiftCost").val('0.0');
        }
    },
    isDecimal: function (evt, element) {
        var charCode = (evt.which) ? evt.which : event.keyCode;
        if (
            (charCode != 46 || $(element).val().indexOf('.') != -1) &&      // “.” CHECK DOT, AND ONLY ONE.
            (charCode < 48 || charCode > 57) &&
            (charCode != 8))//Backspace
            return false;
        return true;
    },

    get: function () {   
        var cal_action = calendar_action == 'available' ? 'all' : calendar_action;      
        var param = { start_date: calendar_request_from_date, end_date: calendar_request_to_date, calendar_view_type: calendar_view_type, cnd_id: calendar_cnd_id, action: cal_action};
        $('#overlay').show();   
      
        ns_ajax.get(
            urls.calendarApi,
            param,
            function (response) {               
                $('#overlay').hide();
                if (response.split('|')[0] === 'OK') {

                    var objCal = jQuery.parseJSON(response.split('|')[1]);
                 
                    call_tmpl_binder(objCal, '/Template/calendarV3_tmpl.html', '#cnd_calendar_template', (placeholder_calendar == '' ? '#Placeholder_calendar' : placeholder_calendar));
                    if (placeholder_list !== '')
                        call_tmpl_binder(objCal, '/Template/calendarV3_tmpl.html', '#cnd_viewlist_template', placeholder_list);
                  
                    setTimeout(function () {
                        $('.calendarview').removeClass('active');
                        $('#li' + calendar_view_type).addClass('active');
                        ns_calendar.showActionOption(calendar_action);
                        ns_calendar.ShowAvailability(calendar_action);                      

                    }, 800);
                    
                    var DiaryLastupdate = objCal.CndCalender[3].DiaryUpdateHistory==''?'NA': objCal.CndCalender[3].DiaryUpdateHistory[0].last_update;                 
                    ns_calendar.lastupdate(DiaryLastupdate);

                }
            });
    },
    get_for_landing: function () {
        var param = {start_date:calendar_request_from_date, end_date:calendar_request_to_date, calendar_view_type:calendar_view_type, cnd_id:calendar_cnd_id, action:calendar_action};
        $('#overlay').show();
        ns_ajax.get(
            urls.calendarApi,
            param,
            function (response) {
                $('#overlay').hide();
                if (response.split('|')[0] === 'OK') {
                    var objCal = $.parseJSON(response.split('|')[1]);
                    call_tmpl_binder(objCal, '/Template/calendarV3_tmpl.html', '#cnd_calendar_template', (placeholder_calendar == '' ? '#Placeholder_calendar' : placeholder_calendar));
                    if (placeholder_list !== '')
                        call_tmpl_binder(objCal, '/Template/calendarV3_tmpl.html', '#cnd_viewlist_template', placeholder_list);

                    setTimeout(function () {
                        $('.calendarview').removeClass('active');
                        $('#li' + calendar_view_type).addClass('active');
                        ns_calendar.showActionOption(calendar_action);
                        ns_calendar.ShowAvailability(calendar_action == 'job' ? 'job' : 'available');
                    }, 800);
                }
            });
    },
    postEvents: function (params, action, e) {
        action = action.toLowerCase();
        ns_ajax.post(
            urls.calendarApi + 'ADD_EVENTS',
            params,
            function (response) {
                if (response.split("|")[0] == 'OK') {
                    if (action == 'delete_event') {
                        ShowAlertMessage("Message", "Event has been deleted successfully.", "C");
                        $('#modalCNDCldrDelete').modal('hide');
                        ns_calendar.get();
                    }
                    else if (action == 'update_event') {
                        ShowAlertMessage("Message", "Event:" + response.split('|')[1] + " updated successfully", "C");
                        ns_calendar.get();
                    }
                    else if (action == 'add_events') {
                        //if (response.split("|")[1] != "0") {
                        //    //if (event_added_from.toUpperCase() == 'SET-EVENTS')  
                        //    ShowAlertMessage("Message", "This time slot not available, please select another date", "A");
                        //    //else
                        //    //ns_calendar.tblEventsExists(response);
                        //    return false;
                        //}
                        //else {
                        ShowAlertMessage("Message", "Event saved successfully", "C");
                        ns_calendar.get();
                        $('.chkdayheader').prop('checked', '');
                        //}
                    }
                    $('#addEvent').modal('hide');
                    $(".modal-backdrop").css('display', 'none');
                }
                else
                    ShowAlertMessage("Message", response.split('|')[0], "A");
            }
        );
    },
    post_jobs: function (params, evt) {
        ns_ajax.post(
            urls.calendarApi +'postjob',
            params,
            function (response) {
                if (response.split('|')[0] === 'OK') {
                    $('.thanks_job_area').show('slow');
                    $('.prev_job_area').hide('slow');
                    $('#cldrBtnCloseJob').hide('slow');
                    $('#cldrBtnSubmitJob').hide('slow');
                    ns_calendar.get();
                    fnPG._createPager('#PgJobs', ns_MyJobs.GetJCandidateAllJobs('all', fnPG.options.currentIndex, fnPG.options.rPP));
                }
            }
        );
    },
    SearchEmpofCnd: function () {
        $("#cldrTxtClientName").autocomplete({
            source: function (request, response) {
                $.ajax({
                    url: "candidateservices/" + 'SearchEmp',
                    data:urls2.autocompleteApi + "?type=emp&term=" + request.term,
                    type: "GET",
                    headers: { 'X-CheckToken': RequestToken, 'Source': RequestSource },
                    contentType: "application/json; charset=utf-8",
                    success: function (data) {
                        response($.map(data, function (item) {
                            return {
                                label: item.split(',')[0],
                                val: item.split(',')[1],
                                category: item.split(',')[2]
                            }
                        }))
                    },
                });
            },
            minLength: 2,
            select: function (e, i) {
                $('#cldrEmpId').val(i.item.val);
                ns_calendar.GetEmpLocations(i.item.val);
            }
        });
    },
    GetEmpLocations: function (s) {
        var params = {prefix: s ,type: 'l'};
        ns_ajax.get(
            urls.calendarApi,         
            params,         
            function (response) {              
                if (response != '') {
                    $('#cldrddlLocations').html('');
                    for (var i = 0; i < response.length; i++) {
                        $('#cldrddlLocations').append($("<option></option>").val(response[i].split(",")[1]).html(response[i].split(",")[0]));
                    }
                    if ($('#cldrddlLocations').length < 2) {
                        $('#cldrddlLocations').prop('selectedIndex', 0);
                    }
                    $('#divdlLocations').show();
                }
                else
                    ShowAlertMessage("Message", response.split('|')[0], "A");
            }
        );
    },
    GetClients: function () {
        $('#cldrTxtClientName').empty();
        var param = {selected: '',pageNum:'0','pageSize':'1000'};
        ns_ajax.get(
            urls.calendarApi,         
            param,       
            function (response) {              
                if (response.split('|')[0] === 'OK') {
                    var obj = $.parseJSON(response.split('|')[1]);
                    $.each(obj.CList, function (key, value) {
                        $("#cldrTxtClientName").append($("<option></option>").val(value.employer_id).html(value.employer_name));
                    });
                }
            });
    },

    lastupdate: function (lastUpdateDatetime) {
        $('#spanDiarylastupdate').html(lastUpdateDatetime);
    },
}



