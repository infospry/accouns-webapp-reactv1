var cnd_calendar_start_date = '', cnd_calendar_end_date = '', cnd_calendar_cnd_id = 0, event_added_from = '', total_month_days = 0;
var calendarViewType = 'month';
var cnd_calendar_data_for = 'All';
var monthName;
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var monthNumber = currentDate.getMonth();
var objCalendarData;
var cldrarrPostedJob = [];
var cnd_cldr_weekNumber_counter = 1, arr_all_marked_days = [], arr_data_by_day = [], cnd_cldr_day_counter = 1,
arr_current_month_days = [], arrAvailableEventsSummary = [], arrUnavailableEventsSummary = [], arrTasksSummary = [], arrJobsSummary = [], arrAbsenceSummary = [], cnd_cldr_current_view = 'month';
var arrEventsCountByDate = [], eventCountByDate = 0, availEventCountByDate = 0, unavailEventCountByDate = 0, taskEventCountByDate = 0;
$(document).ready(function () {
    $(document).on('click', '.cnd-calendar-navigation', function () {
        var currentMonth;
        var dataDisplayBy = $(this).attr('data-by');
        var dataDirection = $(this).attr('data-direction');
        $('.cnd-day-checkbox').prop('checked', '');
        $('.cnd-cldr-dayheader-chk').prop('checked', '');
        $('.cnd-calendar-title').text('');
        $('.cnd-cldr-dayheader-chk').prop('checked', '');
        $('.cnd-cldr-filters').prop('checked', 'checked');
        if (dataDisplayBy.toUpperCase() === 'MONTH') {
            dataDirection.toUpperCase() == 'PREV' ? monthNumber-- : monthNumber++;
            if (monthNumber == 12 && dataDirection.toUpperCase() == 'NEXT') {
                monthNumber = 0
                currentYear++;
            }
            else if (monthNumber == -1 && dataDirection.toUpperCase() == 'PREV') {
                monthNumber = 11;
                currentYear--;
            }
            ns_candidate_calendar.populateCalendar();
            monthName = ns_candidate_calendar.getMonthName(monthNumber);
            $('.cnd-calendar-title').text(monthName + ' ' + currentYear);
        }
        else if (dataDisplayBy.toUpperCase() === 'WEEK') {
            $('.calendar-day-date').css('display', 'none');
            $('.eve-title').css('display', 'none');
            $('.eve-item').css('display', 'none');
            dataDirection.toUpperCase() == 'PREV' ? cnd_cldr_weekNumber_counter-- : cnd_cldr_weekNumber_counter++;
            $('.cnd-calendar-title').text(monthName + ' ' + currentYear + ' ( Week - ' + cnd_cldr_weekNumber_counter + ' )');

            if (cnd_cldr_weekNumber_counter <= 6 && cnd_cldr_weekNumber_counter != 0)
                $('.week-number' + cnd_cldr_weekNumber_counter).css('display', '');
            else if (cnd_cldr_weekNumber_counter == 0) {
                cnd_cldr_weekNumber_counter = 6;
                dataDirection.toUpperCase() == 'PREV' ? monthNumber-- : monthNumber++;
                if (monthNumber == 12 && dataDirection.toUpperCase() == 'NEXT') {
                    monthNumber = 0
                    currentYear++;
                }
                else if (monthNumber == -1 && dataDirection.toUpperCase() == 'PREV') {
                    monthNumber = 11;
                    currentYear--;
                }
                ns_candidate_calendar.populateCalendar();
                monthName = ns_candidate_calendar.getMonthName(monthNumber);
                $('.cnd-calendar-title').text(monthName + ' ' + currentYear + ' ( Week - ' + cnd_cldr_weekNumber_counter + ' )');
                $('.week-number' + cnd_cldr_weekNumber_counter).css('display', '');
            }
            else {
                cnd_cldr_weekNumber_counter = 1;
                dataDirection.toUpperCase() == 'PREV' ? monthNumber-- : monthNumber++;
                if (monthNumber == 12 && dataDirection.toUpperCase() == 'NEXT') {
                    monthNumber = 0
                    currentYear++;
                }
                else if (monthNumber == -1 && dataDirection.toUpperCase() == 'PREV') {
                    monthNumber = 11;
                    currentYear--;
                }
                ns_candidate_calendar.populateCalendar();
                monthName = ns_candidate_calendar.getMonthName(monthNumber);
                $('.cnd-calendar-title').text(monthName + ' ' + currentYear + ' ( Week - ' + cnd_cldr_weekNumber_counter + ' )');
                $('.week-number' + cnd_cldr_weekNumber_counter).css('display', '');
            }
        }
        else if (dataDisplayBy.toUpperCase() === 'DAY') {
            //remove all day event time from calendar
            $('.med-widget-content').empty();
            $('.eve-title').css('display', 'none');
            $('.eve-item').css('display', 'none');
            dataDirection.toUpperCase() == 'PREV' ? cnd_cldr_day_counter-- : cnd_cldr_day_counter++;
            var dayNumber = cnd_cldr_day_counter < 10 ? '0' + cnd_cldr_day_counter : cnd_cldr_day_counter;
            $('.cnd-calendar-title').text(dayNumber + ' ' + monthName + ' ' + currentYear);
            $('.day-number' + cnd_cldr_day_counter).css('display', '');
            if (cnd_cldr_day_counter <= arr_current_month_days.length && cnd_cldr_day_counter != 0) {
                $('.no-event-item').remove();
                if ($('li').hasClass('day-number' + cnd_cldr_day_counter))
                    $('.day-number' + cnd_cldr_day_counter).css('display', '');
                else {
                    $('.event-show').append('<li class="eve-title eve-day  no-event-item">' + dayNumber + '/' + ((monthNumber + 1) < 10 ? '0' + (monthNumber + 1) : (monthNumber + 1)) + '/' + currentYear + '</li>');
                    $('.event-show').append('<li class="eve-item CND-event" ">\
                    <div class="eve-time"></div>\
                    <div class="eve-color"></div>\
                    <div class="eve-txt">No events</div>\
                    </li>');
                }
                //loop to draw event box on calendar
                ns_candidate_calendar.drawEventDayBox();
            }
            else if (cnd_cldr_day_counter == 0) {
                dataDirection.toUpperCase() == 'PREV' ? monthNumber-- : monthNumber++;
                if (monthNumber == 12 && dataDirection.toUpperCase() == 'NEXT') {
                    monthNumber = 0
                    currentYear++;
                }
                else if (monthNumber == -1 && dataDirection.toUpperCase() == 'PREV') {
                    monthNumber = 11;
                    currentYear--;
                }
                ns_candidate_calendar.populateCalendar();
                monthName = ns_candidate_calendar.getMonthName(monthNumber);
                arr_current_month_days = ns_candidate_calendar.getDaysOfMonth(monthNumber, currentYear);
                cnd_cldr_day_counter = arr_current_month_days.length;
                dayNumber = cnd_cldr_day_counter < 10 ? '0' + cnd_cldr_day_counter : cnd_cldr_day_counter;
                $('.cnd-calendar-title').text(dayNumber + ' ' + monthName + ' ' + currentYear);
                $('.week-number' + cnd_cldr_day_counter).css('display', '');
            }
            else {
                cnd_cldr_day_counter = 1;
                dataDirection.toUpperCase() == 'PREV' ? monthNumber-- : monthNumber++;
                if (monthNumber == 12 && dataDirection.toUpperCase() == 'NEXT') {
                    monthNumber = 0
                    currentYear++;
                }
                else if (monthNumber == -1 && dataDirection.toUpperCase() == 'PREV') {
                    monthNumber = 11;
                    currentYear--;
                }
                ns_candidate_calendar.populateCalendar();
                monthName = ns_candidate_calendar.getMonthName(monthNumber);
                arr_current_month_days = ns_candidate_calendar.getDaysOfMonth(monthNumber, currentYear);
                dayNumber = cnd_cldr_day_counter < 10 ? '0' + cnd_cldr_day_counter : cnd_cldr_day_counter;
                $('.cnd-calendar-title').text(dayNumber + ' ' + monthName + ' ' + currentYear);
                $('.week-number' + cnd_cldr_weekNumber_counter).css('display', '');
            }
        }
    });

    $(document).on('change', '.chk-CND-event', function () {
        var filterCounter = 0;
        $('.cnd-cldr-filters:checkbox:checked').map(function () { return filterCounter++ });
        //if (filterCounter > 0)
        ns_candidate_calendar.showEventSummary();
        //else {
        //    ShowAlertMessage("Message", "Please select any filter from top first to show events accordingly", "A");
        //    $('.cnd-cldr-dayheader-chk').prop('checked', '');
        //    $('.cnd-day-checkbox').prop('checked', '');
        //}
    });
    $(document).on('change', ".cnd-cldr-filters", function () {
        var allEvents = '';
        var dataFilter = $(this).attr('data-filter');
        if (dataFilter.toUpperCase() == 'ALL' && !$(this).prop('checked')) {
            $('.event-show').css('display', 'none');
            $('.selected-event-show').html('');
            $('.selected-event-show').css('display', 'none');
            $('.cnd-events-container').removeClass('all-day-available');
            $('.cnd-events-container').removeClass('all-day-unavailable');
            $('.cnd-events-container').removeClass('all-day-absence');
            $('.cnd-events-container').removeClass('all-day-task');
        }
        else if (dataFilter.toUpperCase() == 'ALL' && $(this).prop('checked')) {
            $('.event-show').css('display', '');
            $('.selected-event-show').html('');
            $('.selected-event-show').append(arrAvailableEventsSummary.join(""));
            $('.selected-event-show').append(arrUnavailableEventsSummary.join(""));
            $('.selected-event-show').append(arrTasksSummary.join(""));
            $('.selected-event-show').append(arrJobsSummary.join(""));
            $('.selected-event-show').append(arrAbsenceSummary.join(""));
            $('.selected-event-show').css('display', '');
            $('.is-all-day-available').addClass('all-day-available');
            $('.is-all-day-unavailable').addClass('all-day-unavailable');
            $('.is-all-day-absence').addClass('all-day-absence');
            $('.is-all-day-task').addClass('all-day-task');
        }
        else {
            $('.event-show').css('display', 'none');
            if ($(this).prop('checked')) {
                allEvents = $('.cnd-cldr-' + dataFilter + '-filter').attr('data-events');
                $('.selected-event-show').prepend(allEvents);
                $('.cnd-cldr-' + dataFilter).css('visibility', 'visible');
                $('.is-all-day-' + dataFilter).addClass('all-day-' + dataFilter);
            }
            else {
                $('.cnd-events-container').removeClass('all-day-' + dataFilter);
                $('.all-' + dataFilter).remove();
                $('.cnd-cldr-' + dataFilter).css('visibility', 'hidden');
            }
            $('.selected-event-show').css('display', '')
        }
    });
    $(document).on('change', '#checkAllFltr', function () {
        if ($(this).prop('checked')) {
            $(".cnd-cldr-filters").prop('checked', 'checked');
            $('.size-mark').css('visibility', 'visible');
            $('.eve-item').css('display', '');
        }
        else {
            $(".cnd-cldr-filters").prop('checked', '');
            $('.size-mark').css('visibility', 'hidden');
            $('.eve-item').css('display', 'none');
        }
    });
    $(document).on('click', ".set-cnd-cldr-event", function () {
        event_added_from = 'set-events';
        var arrCndCldrEvents = [];
        var eventStartTime = $(this).attr('data-event-starttime');
        var eventEndTime = $(this).attr('data-event-endtime');
        var eventType = $(this).attr('data-eventtype');
        var cndCldEventAction = { "action": 'add_events', "cnd_id": cnd_calendar_cnd_id };
        if (cnd_cldr_current_view.toUpperCase() == 'DAY') {
            var currDay = cnd_cldr_day_counter < 10 ? '0' + cnd_cldr_day_counter : cnd_cldr_day_counter;
            var currMonth = (monthNumber + 1) < 10 ? '0' + (monthNumber + 1) : (monthNumber + 1);
            var cndCldrEvents = {
                "event_title": "",
                "event_desc": "",
                "cnd_id": cnd_calendar_cnd_id,
                "event_start_datetime": currDay + '/' + currMonth + '/' + currentYear + ' ' + eventStartTime,
                "event_end_datetime": currDay + '/' + currMonth + '/' + currentYear + ' ' + eventEndTime,
                "event_type": eventType
            };
            arrCndCldrEvents.push(cndCldrEvents);
        }
        else {
            $('.cnd-day-checkbox:checkbox:checked').map(function () {
                var cndCldrEvents = {
                    "event_title": "",
                    "event_desc": "",
                    "cnd_id": cnd_calendar_cnd_id,
                    "event_start_datetime": $(this).attr('data-event-startdate') + ' ' + eventStartTime,
                    "event_end_datetime": $(this).attr('data-event-startdate') + ' ' + eventEndTime,
                    "event_type": eventType
                }
                arrCndCldrEvents.push(cndCldrEvents);
            }).get();
            if (arrCndCldrEvents.length == 0) {
                ShowAlertMessage("Message", "Please select any date from calendar", "A");
                return false;
            }
        }
        var strFinal = "[" + JSON.stringify(cndCldEventAction) + "," + JSON.stringify(arrCndCldrEvents) + "]";
        ns_candidate_calendar.postEvents(strFinal, 'add_events', '');
    });
    $(document).on('click', "#btnSubmitCNDEvent", function () {
        var eventData, eventTitle;
        var action = $(this).attr('data-action');

        var eventType = $('input[name=rdoEventType]:checked');
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
        if (eventStartDate.val().length !== 0) {
            var evstartDate = eventStartDate.val();
            var evEndDate = eventEndDate.val();
            if (eventEndDate.val().length !== 0) {
                evstartDate = new Date(ConvertDate(evstartDate));
                evEndDate = new Date(ConvertDate(evEndDate));
                if (+evstartDate > +evEndDate) {
                    ShowAlertMessage("Message", "Event To date should be greater", "A");
                    evEndDate.focus();
                    return false;
                }
            }
            else {
                eventEndDate.focus();
                return false;
            }
        }
        else {
            eventStartDate.focus();
            return false;
        }
        if (eventStartTime.val().length == 0)
            eventStartTime.val("00:00");
        if (eventEndTime.val().length == 0)
            eventEndTime.val("23:59");

        eventData = {
            "event_id": (action == 'update_event' ? $(this).attr('data-id') : '0'),
            "evt_id": (action == 'update_event' ? $(this).attr('data-id') : '0'),
            "cnd_id": cnd_calendar_cnd_id,
            "event_type": eventType.attr('data-item'),
            "event_title": (eventTitle.val().length > 0 ? eventTitle.val() : ''),
            "event_start_datetime": (eventStartDate.val().trim() + " " + eventStartTime.val().trim()),
            "event_end_datetime": (eventEndDate.val().trim() + " " + eventEndTime.val().trim()),
            "event_desc": (eventDescription.val().length > 0 ? eventDescription.val() : ""),
            "action": action
        }
        var arrCndCldrEvents = [];
        arrCndCldrEvents.push(eventData);
        var cndCldEventAction = { "action": action, "cnd_id": cnd_calendar_cnd_id };
        var strFinal = "[" + JSON.stringify(cndCldEventAction) + "," + JSON.stringify(arrCndCldrEvents) + "]";
        ns_candidate_calendar.postEvents(strFinal, action, this);
    });
    $(document).on('click', ".cnd-cldr-refresh", function () {
        $('.cnd-cldr-dayheader-chk').prop('checked', '');
        $('.event-show').html('');
        $('.event-show').css('display', '');
        $('.cnd-cldr-filters').prop('checked', 'checekd');
        ns_candidate_calendar.populateCalendar();
    });
    $(document).on('click', ".cnd-cldr-dayheader-chk", function () {
        var filterCounter = 0, dayHeaderCheck = 0;
        $('.cnd-cldr-filters:checkbox:checked').map(function () { return filterCounter++ });
        //if (filterCounter > 0) {
            if ($(this).prop('checked'))
                $('.chk-' + $(this).attr('data-day-name')).prop('checked', 'checked');
            else {
                $('.chk-' + $(this).attr('data-day-name')).prop('checked', '');
                $('.eve-item').css('display', '');
                $('.cnd-cldr-dayheader-chk:checkbox:checked').map(function () { return dayHeaderCheck++ });
                if (dayHeaderCheck == 0) {
                    $('.cnd-cldr-filters').prop('checked', 'checked');
                    $('.size-mark').css('visibility', 'visible');
                }
            }
            ns_candidate_calendar.showEventSummary();
        //}
        //else {
        //    ShowAlertMessage("Message", "Please select any filter from top first to show events accordingly", "A");
        //    $('.cnd-cldr-dayheader-chk').prop('checked', '');
        //    $('.cnd-day-checkbox').prop('checked', '');
        //}
    });
    $(document).on('click', ".cnd-cldr-add-event", function () {
        event_added_from = 'add-events';
        $(".clearText").val('');
        $('.tblEventsExists').empty();
        $("#rdoAllDay").prop('checked', 'checked');
        $("#rdoAvailable").prop('checked', 'checked');
        $(".time").css('display', 'none');
        $(".task-name").hide('slow');
        $(".event-title").show('slow');
        $('#CNDData').modal('hide');
        $('#divEventsExistsTable').remove();
        $("#divCreateEventsForm").removeClass('col-lg-4').addClass('col-lg-12');
        $('#addEvent').addClass('right_quater').removeClass('right_one_thrd');
        $("#btnSubmitCNDEvent").attr('data-action', 'add_events').text('Submit');
        var eventStartDate = $(this).attr('data-event-startdate');
        $('.add-new-event').modal('show');
        $('#txtEventStartDate').val(eventStartDate);
        $('#txtEventEndDate').val(eventStartDate);
    });
    $(document).on('click', "#btnCancelCNDEvent", function () {
        $('#addEvent').modal('hide');
        $(".modal-backdrop").css('display', 'none');
    });
    //24-12-2019 Chnages

    $(document).on('click', ".cnd-cldr-add-job", function () {
        $(".clearText").val('');
        $('.add-new-job').modal('show');
        $('.jobstime').show();

        fn_autocompleteWithLocation('emp', 'cnd-cldr-txt-client', 'cldrddlLocations');
        var eventStartDate = $(this).attr('data-job-startdate');
        $('#cldrTxtStartDate').val(eventStartDate);
        $('#cldrTxtEndDate').val(eventStartDate);
        ns_candidate_calendar.getCNDRate();
    });
    $(document).on('click', ".cldr-btn-preview-job", function () {
        cldrarrPostedJob = [];
        var cldremployee = $("#cldrTxtClientName").attr("data-item-id");
        var cldremployeeText = $("#cldrTxtClientName");
        var cldrlocation = $("#cldrddlLocations :selected");
        var cldrstartDate = $("#cldrTxtStartDate");
        var cldrstartTime = $("#cldrTxtStartTime");
        var cldrendDate = $("#cldrTxtEndDate");
        var cldrendTime = $("#cldrTxtEndTime");
        var cldrjobRate = $("#cldrTxtJobRate");
        var cldrCNDRate = $("#cldrTxtCNDRate");

        if (cldremployeeText.val().length === 0) {
            cldremployeeText.focus()
            ShowAlertMessage("Message", "Please enter client name !", "A");
            return false;
        }
        if (cldrlocation.val() == 0) {
            cldrlocation.focus();
            ShowAlertMessage("Message", "Please select location!", "A");
            return false;
        }
        if (cldrstartDate.val().length === 0) {
            cldrstartDate.focus()
            ShowAlertMessage("Message", "Please enter start date !", "A");
            return false;
        }
        if (cldrendDate.val().length === 0) {
            cldrstartDate.focus()
            ShowAlertMessage("Message", "Please enter end date !", "A");
            return false;
        }
        if (cldrstartTime.val().length === 0) {
            cldrstartTime.focus();
            ShowAlertMessage("Message", "Please enter start time !", "A");
            return false;
        }
        if (cldrendTime.val().length === 0) {
            cldrendTime.focus();
            ShowAlertMessage("Message", "Please enter end time !", "A");
            return false;
        }
        if (cldrjobRate.val() == 0) {
            cldrjobRate.focus();
            ShowAlertMessage("Message", "Please enter job rate !", "A");
            return false;
        }

        if (cldrCNDRate.val() == 0) {
            cldrCNDRate.focus();
            ShowAlertMessage("Message", "Please enter CND rate !", "A");
            return false;
        }

        if (parseFloat(cldrCNDRate.val()) > parseFloat(cldrjobRate.val())) {
            cldrCNDRate.focus();
            ShowAlertMessage("Message", "CND rate can't be greater than job rate!", "A");
            return false;
        }

        var cldrPostedJobs = {
            "Emp_Id": cldremployee,
            "cnd_id": cnd_calendar_cnd_id,
            "Job_Type": "L",
            "Location_Id": cldrlocation.val(),
            "Start_DateTime": (ConvertDateFormate(cldrstartDate.val()) + " " + cldrstartTime.val()),
            "End_DateTime": (ConvertDateFormate(cldrendDate.val()) + " " + cldrendTime.val()),
            "Client_Rate": cldrjobRate.val(),
            "Shift_Cost": $("#cldrTxtShiftCost").val(),
            "Sector_Id": 1,
            "Role_Id": 6,
            "Shift_Type_Id": 1,
            "It_System_Id": 1,
            "speciality_id": 1,
            "grade_id": 1,
            "department": 1,
            "Source_Id": 1,
            "Status_Id": 1,
            "org_id": 0,
            "description": '',
            "break_required": 0,
            "break_time": 0,
            "smart_card_required": 0,
            "admin_work_required": 0,
            "on_call_required": 0,
            "home_visit_required": 0,
            "home_visit_amount": 0
        };
        $("#cldrPrevClientName").text(cldremployeeText.val());
        $("#cldrPrevLocation").text(cldrlocation.text());
        $("#cldrPrevStartDateTime").text((cldrstartDate.val() + " " + cldrstartTime.val()));
        $("#cldrPrevEndDateTime").text((cldrendDate.val() + " " + cldrendTime.val()));
        $("#cldrPrevDuration").text($("#cldrTxtDuration").val());
        $("#cldrPrevJobRate").text(cldrjobRate.val());
        $("#cldrPrevCNDRate").text(cldrCNDRate.val());
        $("#cldrPrevShiftCost").text($("#cldrTxtShiftCost").val());
        $(".prev_job_area").show('slow');
        $(".cldr-add-job").hide('slow');
        $("#cldrBtnSubmitJob").show('slow');
        $("#cldrBtnCloseJob").show('slow');
        $(".cldr-btn-preview-job").hide('slow');
        cldrarrPostedJob.push(cldrPostedJobs);
    });
    $(document).on('click', ".cldr-btn-submit-job", function () {
        var cldrarrJobType = [];
        var cldrPostedJobType = {
            "Action": "Post-job"
        }
        cldrarrJobType.push(cldrPostedJobType);
        var strFinal = "[" + JSON.stringify(cldrPostedJobType) + "," + JSON.stringify(cldrarrPostedJob) + "]";
        ns_candidate_calendar.post_jobs(strFinal);
    });
    $(document).on('change', ".cldr-calculate-Amount", function () {
        ns_candidate_calendar.fn_calculate_amount();
    });
    $(document).on('click', "#cldrBtnCloseJob", function () {
        $(".prev_job_area").hide('slow');
        $(".cldr-add-job").show('slow');
        $("#cldrBtnSubmitJob").hide('slow');
        $("#cldrBtnCloseJob").hide('slow');
        $(".cldr-btn-preview-job").show('slow');
    });
    $(document).on('keyup', ".cldr-calculate-Amount", function () {
        ns_candidate_calendar.fn_calculate_amount();
    });
    $(document).on('input', "#cldrTxtJobRate", function () {
        ns_candidate_calendar.validateDecimalPlace(this);
    });
    $(document).on('change', '.rdoEventType', function () {
        if ($(this).attr('data-item') == 'Task') {
            $("#txtTaskName").val('');
            $('.task-name').show('slow');
            $('.event-title').hide('slow');
        }
        else {
            $("#txtEventTitle").val('');
            $('.event-title').show('slow');
            $('.task-name').hide('slow');
        }
    })
    $(document).on('change', '.rdoAvailability', function () {
        if ($(this).attr('data-val') == 'partial') {
            $("#txtEventStartTime").val('');
            $("#txtEventEndTime").val('');
            $('.event-time').css('display', '');
        }
        else
            $('.event-time').css('display', 'none');
    })

    //31-12-2019
    $(document).on('click', ".cnd-cldr-edit-event", function () {
        $('.clearText').val();
        var eventStartTime, eventEndTime;
        var eventDate = $(this).attr('data-event-date');
        var eventTime = $(this).attr('data-event-time');
        var eventType = $(this).attr('data-event-type');
        if (eventType.toUpperCase() == 'AVAILABLE')
            $('#rdoAvailable').prop('checked', 'checked');
        else if (eventType.toUpperCase() == 'UNAVAILABLE')
            $('#rdoUnAvailable').prop('checked', 'checked');
        else
            $('#rdoTask').prop('checked', 'checked');

        $("#txtEventStartDate").val(eventDate).attr('disabled', 'disabled');
        $("#txtEventEndDate").val(eventDate).attr('disabled', 'disabled');
        if (eventTime.toUpperCase() != 'ALL DAY') {
            eventStartTime = $(this).attr('data-event-time').split('-')[0];
            eventEndTime = $(this).attr('data-event-time').split('-')[1];
            $('#txtEventStartTime').val(eventStartTime);
            $('#txtEventEndTime').val(eventEndTime);
            $('#txtEventStartTime').css('display', '');
            $('#txtEventEndTime').css('display', '');
            $('#rdoPartial').prop('checked', 'checked');
        }
        else {
            $('#txtEventStartTime').css('display', 'none');
            $('#txtEventEndTime').css('display', 'none');
            $('#rdoAllDay').prop('checked', 'checked');
        }
        $("#btnSubmitCNDEvent").attr('data-action', 'update_event').text('Update').attr('data-id', $(this).attr('data-id'));
    });
    $(document).on('click', ".cnd-cldr-delete-event", function () {
        $("#modalCNDcldrDeleteHeading").text('Delete - ' + $(this).attr('data-type'));
        $("#cndcldrDeletelbl").text("Do you want to delete this " + $(this).attr('data-type') + "?");
        $("#modalCNDDeleteBtnYes").attr('data-id', $(this).attr('data-id'))
        $("#modalCNDDeleteBtnYes").attr('data-type', $(this).attr('data-type'));
        $("#modalCNDDeleteBtnYes").attr('data-event-date', $(this).attr('data-event-date'));
        $("#modalCNDDeleteBtnYes").attr('data-event-type', $(this).attr('data-event-type'));
    });
    $(document).on('click', ".cnd-cldr-event-deleteYESNO", function () {
        if ($(this).attr('data-title').toUpperCase() == 'NO') {
            $("#modalCNDCldrDelete").modal('hide');
            $(".modal-backdrop").css('display', 'none');
        }
        else {
            var arrCndCldrEvents = [];
            eventData = {
                "evt_id": $(this).attr('data-id'),
                "cnd_id": cnd_calendar_cnd_id,
                "action": 'delete_event'
            }
            arrCndCldrEvents.push(eventData);
            var cndCldEventAction = { "action": 'delete_event', "cnd_id": cnd_calendar_cnd_id };
            var strFinal = "[" + JSON.stringify(cndCldEventAction) + "," + JSON.stringify(arrCndCldrEvents) + "]";
            ns_candidate_calendar.postEvents(strFinal, 'delete_event', this);
        }
    });
    $(document).on('click', ".cnd-cldr-events-count", function () {
        var type = $(this).attr('data-type');
        var eventType = $(this).attr('data-event-type');
        var startDate = '01/' + ((monthNumber + 1) <= 9 ? '0' + (monthNumber + 1) : (monthNumber + 1)) + '/' + currentYear;
        ns_candidate_calendar.getHistory(startDate, type, eventType);
    });
    $(document).on('click', ".cnd-calendar-tab", function () {
        cnd_cldr_current_view = $(this).attr('data-viewtype');
        $('.cnd-day-checkbox').prop('checked', '');
        $('.cnd-cldr-dayheader-chk').prop('checked', '');
        $('.event-show').css('display', '');
        $('.selected-event-show').css('display', 'none');
        if (cnd_cldr_current_view.toUpperCase() == 'WEEK') {
            cnd_cldr_weekNumber_counter = 1;
            $('.eve-title').css('display', 'none');
            $('.eve-item').css('display', 'none');
            $('.calendar-day-date').css('display', 'none');
            $('.tbl-cnd-cldr-calendar-view').css('display', '');
            $('.tbl-cnd-cldr-day-view').css('display', 'none');
            $('.cnd-calendar-title').text(monthName + ' ' + currentYear + ' ( Week - ' + cnd_cldr_weekNumber_counter + ' )');
            $('.cnd-calendar-navigation').attr('data-by', 'week');
            $('.week-number' + cnd_cldr_weekNumber_counter).css('display', '');
        }
        else if (cnd_cldr_current_view.toUpperCase() == 'MONTH') {
            $('.eve-item').css('display', '');
            $('.eve-title').css('display', '');
            $('.cnd-calendar-title').text(monthName + ' ' + currentYear);
            $('.tbl-cnd-cldr-calendar-view').css('display', '');
            $('.tbl-cnd-cldr-day-view').css('display', 'none');
            $('.cnd-calendar-navigation').attr('data-by', 'month');
            $('.calendar-day-date').css('display', '');
        }
        else if (cnd_cldr_current_view.toUpperCase() == 'DAY') {
            //remove all day event time from calendar
            $('.med-widget-content').html('');
            cnd_cldr_day_counter = 1;
            arr_current_month_days = ns_candidate_calendar.getDaysOfMonth(monthNumber, currentYear);
            $('.tbl-cnd-cldr-day-view').css('display', '');
            $('.tbl-cnd-cldr-calendar-view').css('display', 'none');
            $('.cnd-calendar-navigation').attr('data-by', 'day');
            ns_candidate_calendar.populateDayView();
            var dayNumber = cnd_cldr_day_counter < 10 ? '0' + cnd_cldr_day_counter : cnd_cldr_day_counter;
            $('.cnd-calendar-title').text(dayNumber + ' ' + monthName + ' ' + currentYear);
            $('.eve-title').css('display', 'none');
            $('.eve-item').css('display', 'none');
            $('.day-number' + cnd_cldr_day_counter).css('display', '');
            //loop to draw event box on calendar
            ns_candidate_calendar.drawEventDayBox();
        }
    });
    //$(document).on('click', ".cnd-calendar-tab", function () {
    //    var viewType = $(this).attr('data-viewtype');
    //    if (viewType.toUpperCase() == 'WEEK') {
    //        $('#tblCNDCalendar').css('display', '');
    //        $('.tbl-cnd-cldr-day-view').css('display', 'none');
    //        $('.cnd-calendar-navigation').attr('data-by', 'week');
    //        $('.week-number2').css('display', 'none');
    //        $('.week-number3').css('display', 'none');
    //        $('.week-number4').css('display', 'none');
    //        $('.week-number5').css('display', 'none');
    //        $('.week-number6').css('display', 'none');
    //        cnd_cldr_weekNumber_counter++;
    //    }
    //    else if (viewType.toUpperCase() == 'MONTH') {
    //        $('#tblCNDCalendar').css('display', '');
    //        $('.tbl-cnd-cldr-day-view').css('display', 'none');
    //        $('.cnd-calendar-navigation').attr('data-by', 'month');
    //        $('.week-number1').css('display', '');
    //        $('.week-number2').css('display', '');
    //        $('.week-number3').css('display', '');
    //        $('.week-number4').css('display', '');
    //        $('.week-number5').css('display', '');
    //        $('.week-number6').css('display', '');
    //        cnd_cldr_weekNumber_counter++;
    //    }
    //    else if (viewType.toUpperCase() == 'DAY') {          
    //        var times = []; // time array
    //        var row;
    //        $('.tbl-cnd-cldr-day-view').remove();
    //        row = '<table class="tbl-cnd-cldr-day-view" style="width: 100%;display:none;" cellspacing="0">\
    //                    <tbody class="cnd-cldr-day-view"></tbody>\
    //                </table>';
    //        $('.candidate-calendar-container').append(row);
    //        row = '<tr style="border-bottom: 1px solid #C1CED9; border-top: 1px solid #C1CED9;">\
    //                  <th class="med-agenda-axis med-widget-header" style="width: 70px;"><b>All day</b></th>\
    //                  <td class="med-widget-content"><div style="position: relative" class="sum_daycontentallday"></div></td>\
    //             </tr>\
    //             <tr>\
    //                 <th class="med-agenda-axis med-widget-header" style="width:70px;">12 am</th>\
    //                 <td class="med-widget-content"></td>\
    //             </tr>';
    //        times.push(row);
    //        for (var i = 1; i < 24; i++) {
    //            if (i < 12) {
    //                row = '<tr>\
    //                        <th class="med-agenda-axis med-widget-header" style="width: 70px;">'+ i + ' am</th>\
    //                        <td class="med-widget-content"></td>\
    //                    </tr>';
    //                times[i] = row;
    //            }
    //            else {
    //                row = '<tr>\
    //                        <th class="med-agenda-axis med-widget-header" style="width: 70px;">'+ i + ' pm</th>\
    //                        <td class="med-widget-content"></td>\
    //                    </tr>';
    //                times[i] = row;
    //            }
    //        }
    //        $('.cnd-cldr-day-view').append(times);
    //        $('#tblCNDCalendar').css('display', 'none');
    //        $('.tbl-cnd-cldr-day-view').css('display', '');
    //    }
    //});

});
ns_candidate_calendar = {
    design: function (calendar_container_class, dataFor) {
        cnd_calendar_data_for = dataFor;
        //Clear existing calendar HTML here
        $('.' + calendar_container_class).html('');
        var calendarHTML = ns_candidate_calendar.calendarHTML();
        $('.' + calendar_container_class).html(calendarHTML);
        ns_candidate_calendar.populateCalendar();

    },
    populateCalendar: function () {
        var currentMonth, prevMonth, nextMonth, monthAllDays, dayMark, monthDay = 0, dayName, dayContent, dayPrintStart = false, jobsContainer, eventsContainer, cnd_addEvent;
        //Clear all days of previous month to reflect current days on calendar.

        $('.cnd-events-container').html('');
        $('.cnd-events-container').removeClass("all-day-available");
        $('.cnd-events-container').removeClass("all-day-unavailable");
        $('.cnd-events-container').removeClass("all-day-absence");
        $('.cnd-events-container').removeClass("all-day-task");

        $('.cnd-events-container').removeClass("is-all-day-available");
        $('.cnd-events-container').removeClass("is-all-day-unavailable");
        $('.cnd-events-container').removeClass("is-all-day-absence");
        $('.cnd-events-container').removeClass("is-all-day-task");

        $('.CND-addEvent').remove();
        $('.chk-CND-event').remove();
        $('.cnd-marked-events').remove();


        //Get All days of current month here
        monthAllDays = ns_candidate_calendar.getDaysOfMonth(monthNumber, currentYear);
        var i = 0, j = 0;
        for (i = 0; i < 6; i++) {
            for (j = 0; j < 7; j++) {
                //Get day number of current month here
                dayName = ns_candidate_calendar.dayOfWeekAsString(j);

                if (dayPrintStart == false) {
                    if (dayName.substring(0, 3).toUpperCase() === monthAllDays[0].split('#')[0].toUpperCase()) {
                        dayPrintStart = true;
                        monthDay = 0;
                        dayContent = '<div class="day date-' + i + '-' + j + '-' + dayName + '">' + (monthDay <= monthAllDays.length - 1 ? monthAllDays[monthDay].split('#')[1] : '') + '</div>';
                    }
                    else
                        dayContent = '<div class="day date-' + i + '-' + j + '-' + dayName + '"></div>';
                }
                else
                    dayContent = '<div class="day date-' + i + '-' + j + '-' + dayName + '">' + (monthDay <= monthAllDays.length - 1 ? monthAllDays[monthDay].split('#')[1] : '') + '</div>';

                //Append content to day cell here
                $('.sum_td-' + i + '-' + j + '-' + dayName).append(dayContent);

                //Check last day of month here
                if (monthDay <= monthAllDays.length - 1) {
                    if (dayPrintStart) {
                        //Get ready content of each day cell here
                        cnd_addEvent = '<div class="btn-group CND-addEvent">\
                            <i class="zmdi zmdi-plus plsidrop dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">&nbsp;</i>\
                               <div class="dropdown-menu">\
                                    <li class="cnd-cldr-add-event" data-event-startdate="' + ((monthDay + 1) <= 9 ? '0' + (monthDay + 1) : (monthDay + 1)) + '/' + (monthNumber + 1) + '/' + currentYear + '"><a>Add Event</a></li>\
                                    <li class="cnd-cldr-add-job"><a>Add Job</a></li>\
                               </div>\
                        </div>\
                        <div class="chk chkdiv chk-CND-event" id="chkdiv-' + i + '-' + j + '-' + dayName + '">\
                           <input type="checkbox" class="cnd-day-checkbox chk-day-' + (monthDay + 1) + ' chk-day-' + dayName + '" data-event-startdate="' + ((monthDay + 1) <= 9 ? '0' + (monthDay + 1) : (monthDay + 1)) + '/' + ((monthNumber + 1) <= 9 ? '0' + (monthNumber + 1) : (monthNumber + 1)) + '/' + currentYear + '" id="chk-' + i + '-' + j + '-' + dayName + '" >\
                           <label for="chk-' + i + '-' + j + '-' + dayName + '">&nbsp;</label>\
                        </div>';
                        dayMark = '<div class="marks-' + (monthDay + 1) + '"></div>'
                        $('.daycell-' + i + '-' + j + '-' + dayName).append(cnd_addEvent);
                        $('.daycell-' + i + '-' + j + '-' + dayName).append(dayContent);
                        $('.daycell-' + i + '-' + j + '-' + dayName).append(dayMark);
                    }
                    monthDay++;
                }
            }
        }
        currentMonth = monthNumber + 1;
        cnd_calendar_start_date = '01/' + (currentMonth <= 9 ? '0' + currentMonth : currentMonth) + '/' + currentYear;
        cnd_calendar_end_date = total_month_days + '/' + (currentMonth <= 9 ? '0' + currentMonth : currentMonth) + '/' + currentYear;
        //Get calendar data here
        ns_candidate_calendar.get();
    },
    populateDataToCalendar: function (calendar_data) {
        var jobsData, taskData, eventsData, mnthDay, jobType, eventType, taskType;
        $.each(calendar_data, function (index, row) {
            if (row.eventstart_date.substring(0, 1) == '0')
                mnthDay = row.eventstart_date.substring(1, 2);
            else
                mnthDay = row.eventstart_date.substring(0, 2);
            if (row.event_color != null)
                eventsData = '<div class="size-mark ' + row.event_color + ' event-' + row.event_type + '-' + row.eventstart_date.split('/')[0] + ' " data-event-startdate="' + row.eventstart_date + '" data-event-type="' + row.event_type + '" title="' + row.event_type + '" style="margin-right: 5px;"></div>';

            $('.marks-' + mnthDay).append(eventsData);

        });
    },
    events_summary: function (events_data) {
        var event_summary = '', mnthDay, dayEventsSummary = '', cndEventStartDate = '', cndEventType = '';
        $('.col-tab-rigt').empty();
        var CNDAvailOrUnAvil = '<div id="actionbuttons" class="legend" style="margin-top: 7px;margin-bottom: 5px;">\
                                  <div class="btn-group">\
                                   <div class="btn-group" role="group">\
                                      <button  type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>Set Available</span>&nbsp; <b class="badge badge-warning availableEventsCount" ></b> <span class="caret"></span></button>\
                                      <ul class="dropdown-menu" style="width:220px;">\
                                          <p><i class="fa fa-circle availabl">&nbsp;</i><b>Available</b></p>\
                                          <li class="set-cnd-cldr-event" data-eventtype="Available" data-event-starttime="00:00" data-event-endtime="23:59">  <a><i class="">&nbsp;</i>All Day<span>  (00:00 - 23:59)</span></a></li>\
                                          <li class="set-cnd-cldr-event" data-eventtype="Available" data-event-starttime="08:00" data-event-endtime="11:59">  <a><i class="">&nbsp;</i>Morning<span>  (08:00 - 11:59)</span></a></li>\
                                          <li class="set-cnd-cldr-event" data-eventtype="Available" data-event-starttime="12:00" data-event-endtime="17:59">  <a><i class="">&nbsp;</i>Afternoon<span>(12:00 - 17:59)</span></a></li>\
                                          <li class="set-cnd-cldr-event" data-eventtype="Available" data-event-starttime="18:00" data-event-endtime="23:59">  <a><i class="">&nbsp;</i>Evening<span>  (18:00 - 23:59)</span></a></li>\
                                          <li class="set-cnd-cldr-event" data-eventtype="Available" data-event-starttime="00:00" data-event-endtime="07:59">  <a><i class="">&nbsp;</i>Night<span>    (00:00 - 07:59)</span></a></li>\
                                          <li class="cnd-cldr-add-event" data-eventtype="Available" data-event-starttime="custom" data-event-endtime="custom"><a><i class="">&nbsp;</i>Custom</a></li>\
                                      </ul>\
                                  </div>\
                                  <div class="btn-group" role="group">\
                                      <button type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>Set Unavailable</span>&nbsp; <b class="badge badge-warning unAvailableEventsCount"></b> <span class="caret"></span></button>\
                                      <ul class="dropdown-menu" style="width:220px;">\
                                          <p><i class="fa fa-circle unavailabl">&nbsp;</i><b>UnAvailable</b></p>\
                                          <li class="set-cnd-cldr-event" data-eventtype="UnAvailable" data-event-starttime="00:00" data-event-endtime="23:59">  <a><i class="">&nbsp;</i>All Day<span>  (00:00 - 23:59)</span></a></li>\
                                          <li class="set-cnd-cldr-event" data-eventtype="UnAvailable" data-event-starttime="08:00" data-event-endtime="11:59">  <a><i class="">&nbsp;</i>Morning<span>  (08:00 - 11:59)</span></a></li>\
                                          <li class="set-cnd-cldr-event" data-eventtype="UnAvailable" data-event-starttime="12:00" data-event-endtime="17:59">  <a><i class="">&nbsp;</i>Afternoon<span>(12:00 - 17:59)</span></a></li>\
                                          <li class="set-cnd-cldr-event" data-eventtype="UnAvailable" data-event-starttime="18:00" data-event-endtime="23:59">  <a><i class="">&nbsp;</i>Evening<span>  (18:00 - 23:59)</span></a></li>\
                                          <li class="set-cnd-cldr-event" data-eventtype="UnAvailable" data-event-starttime="00:00" data-event-endtime="07:59">  <a><i class="">&nbsp;</i>Night<span>    (00:00 - 07:59)</span></a></li>\
                                          <li class="cnd-cldr-add-event" data-eventtype="UnAvailable" data-event-starttime="custom" data-event-endtime="custom"><a><i class="">&nbsp;</i>Custom</a></li>\
                                      </ul>\
                                  </div>\
                                  <div class="btn-group" role="group">\
                                       <button type="button" class="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\
                                               <b>Add Event &amp; Job</b>\
                                               <span class="caret"></span>\
                                       </button>\
                                       <ul class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(0px, 37px, 0px); top: 0px; left: 0px; will-change: transform;">\
                                               <li class="cnd-cldr-add-event"><a>Add Event</a></li>\
                                               <li class="cnd-cldr-add-job"><a>Add Job</a></li>\
                                       </ul>\
                                  </div>\
                               </div>\
                          </div>';

        $(".col-tab-rigt").append(CNDAvailOrUnAvil);
        $(".col-tab-rigt").append('<div class="event-show" style="height:800px;overflow-y: scroll; background:white;"></div>');
        $(".col-tab-rigt").append('<div class="selected-event-show" style="height:800px;overflow-y: scroll; background:white; display:none;"></div>');

        if (events_data != null) {
            arrEventsCountByDate.length = 0;
            var markedDaysData = '', event_summaryDayHeaderItem = '', markedDayAndTime = '', eventCountByDate = 0;
            var jobsCount = 0, availCount = 0, uavailCount = 0, tasksCount = 0, allEventsCount = 0, absenceCount = 0;

            arr_all_marked_days.length = 0; arrAvailableEventsSummary.length = 0, arrUnavailableEventsSummary.length = 0, arrJobsSummary.length = 0, arrTasksSummary.length = 0, arrAbsenceSummary.length = 0;

            $.each(events_data.Table2, function (key1, row1) {
                //counter reset
                availEventCountByDate = 0, unavailEventCountByDate = 0, taskEventCountByDate = 0;
                eventCountByDate = 0;

                if (row1.eventstart_date.substring(0, 1) == '0')
                    mnthDay = row1.eventstart_date.substring(1, 2);
                else
                    mnthDay = row1.eventstart_date.substring(0, 2);

                event_summary += '<li class="eve-title eve-day main-date-strip-' + mnthDay + ' week-number' + row1.weeknumber + ' day-number' + mnthDay + '">' + row1.eventstart_date + '</li>';
                $.each(events_data.Table1, function (key2, row2) {
                    if (row2.event_detail != null) {
                        if (row2.eventstart_date.substring(0, 1) == '0')
                            mnthDay = row2.eventstart_date.substring(1, 2);
                        else
                            mnthDay = row2.eventstart_date.substring(0, 2);

                        if (row1.event_cat.toUpperCase() == row2.event_cat.toUpperCase() && row1.eventstart_date == row2.eventstart_date) {

                            //counting all events here***
                            if (row2.event_type.toUpperCase() == 'AVAILABLE') {
                                arrAvailableEventsSummary.push('<li class="eve-title eve-day main-date-strip-' + mnthDay + ' event-' + row2.event_type + '-' + row2.eventstart_date.split('/')[0] + ' all-available week-number' + row1.weeknumber + ' day-number' + mnthDay + '">' + row1.eventstart_date + '</li>');
                                arrAvailableEventsSummary.push('<li class="eve-item  all-available CND-event event-' + row2.event_type + '-' + row2.eventstart_date.split('/')[0] + ' ' + row2.event_detail.split('&')[0] + ' week-number' + row2.weeknumber + ' day-number' + mnthDay + '" title="' + row2.event_detail.split('&')[2] + '" data-eventtype="' + row2.event_type + '" data-eventstart_date="' + row2.eventstart_date + '" data-eventstart_time="' + row2.eventstart_time + '" data-eventend_date="' + row2.eventend_date + '" data-eventend_time="' + row2.eventend_time + '">\
                                <div class="eve-time">' + row2.event_detail.split('&')[3] + '</div>\
                                <div class="eve-color" style="background:' + row2.event_detail.split('&')[1] + ';padding:3px;"></div>\
                                  <div class="eve-txt font-14"><span style="color:' + row2.event_detail.split('&')[1] + '; font-weight:bold;">' + row2.event_type + '</span></div>\
                               <div class="editdelethover">\
                                               <a class="btn btn-sm btn-outline-primary cnd-cldr-edit-event" data-id="' + row2.event_id + '" data-event-date="' + row1.eventstart_date + '" data-event-time="' + row2.event_detail.split('&')[3] + '" data-event-type="' + row2.event_type + '" data-title="Edit"  title="Edit" data-toggle="modal" data-target="#addEvent"><i class="zmdi zmdi-edit"></i></a>\
                                               <a class="btn btn-sm btn-outline-danger  cnd-cldr-delete-event" data-type="Event" data-event-type="' + row2.event_type + '" data-event-date="' + row1.eventstart_date + '"   data-id="' + row2.event_id + '" title="Delete" data-toggle="modal" data-target="#modalCNDCldrDelete"><i class="zmdi zmdi-delete"></i></a>\
                                            </div>\
                                </li>');
                                availCount++;
                                availEventCountByDate++;
                            }
                            else if (row2.event_type.toUpperCase() == 'UNAVAILABLE') {
                                arrUnavailableEventsSummary.push('<li class="eve-title eve-day  main-date-strip-' + mnthDay + '  all-unavailable event-' + row2.event_type + '-' + row2.eventstart_date.split('/')[0] + '  week-number' + row1.weeknumber + ' day-number' + mnthDay + '">' + row1.eventstart_date + '</li>');
                                arrUnavailableEventsSummary.push('<li class="eve-item all-unavailable  event-' + row2.event_type + '-' + row2.eventstart_date.split('/')[0] + ' CND-event ' + row2.event_detail.split('&')[0] + ' week-number' + row2.weeknumber + ' day-number' + mnthDay + '" title="' + row2.event_detail.split('&')[2] + '" data-eventtype="' + row2.event_type + '" data-eventstart_date="' + row2.eventstart_date + '" data-eventstart_time="' + row2.eventstart_time + '" data-eventend_date="' + row2.eventend_date + '" data-eventend_time="' + row2.eventend_time + '">\
                                <div class="eve-time">' + row2.event_detail.split('&')[3] + '</div>\
                                <div class="eve-color" style="background:' + row2.event_detail.split('&')[1] + ';padding:3px;"></div>\
                                 <div class="eve-txt font-14"><span style="color:' + row2.event_detail.split('&')[1] + '; font-weight:bold;">' + row2.event_type + '</span></div>\
                                <div class="editdelethover">\
                                               <a class="btn btn-sm btn-outline-primary cnd-cldr-edit-event" data-id="' + row2.event_id + '" data-event-date="' + row1.eventstart_date + '" data-event-time="' + row2.event_detail.split('&')[3] + '" data-event-type="' + row2.event_type + '" data-title="Edit"  title="Edit" data-toggle="modal" data-target="#addEvent"><i class="zmdi zmdi-edit"></i></a>\
                                               <a class="btn btn-sm btn-outline-danger  cnd-cldr-delete-event"   data-type="Event"  data-event-type="' + row2.event_type + '" data-event-date="' + row1.eventstart_date + '"  data-id="' + row2.event_id + '" title="Delete" data-toggle="modal" data-target="#modalCNDCldrDelete"><i class="zmdi zmdi-delete"></i></a>\
                                            </div>\
                                </li>');
                                uavailCount++;
                                unavailEventCountByDate++;
                            }
                            else if (row2.event_type.toUpperCase() == 'TASK') {
                                arrTasksSummary.push('<li class="eve-title all-tasks main-date-strip-' + mnthDay + ' eve-day event-' + row2.event_type + '-' + row2.eventstart_date.split('/')[0] + '  week-number' + row1.weeknumber + ' day-number' + mnthDay + '" >' + row1.eventstart_date + '</li>');
                                arrTasksSummary.push('<li class="eve-item all-tasks event-' + row2.event_type + '-' + row2.eventstart_date.split('/')[0] + ' CND-event ' + row2.event_detail.split('&')[0] + ' week-number' + row2.weeknumber + ' day-number' + mnthDay + '" title="' + row2.event_detail.split('&')[2] + '" data-eventtype="' + row2.event_type + '" data-eventstart_date="' + row2.eventstart_date + '" data-eventstart_time="' + row2.eventstart_time + '" data-eventend_date="' + row2.eventend_date + '" data-eventend_time="' + row2.eventend_time + '">\
                                    <div class="eve-time">' + row2.event_detail.split('&')[3] + '</div>\
                                    <div class="eve-color" style="background:' + row2.event_detail.split('&')[1] + ';padding:3px;"></div>\
                                     <div class="eve-txt font-14"><span style="color:' + row2.event_detail.split('&')[1] + '; font-weight:bold;">' + row2.event_type + '</span></div>\
                                      <div class="editdelethover">\
                                               <a class="btn btn-sm btn-outline-primary cnd-cldr-edit-event" data-id="' + row2.event_id + '" data-event-date="' + row1.eventstart_date + '" data-event-time="' + row2.event_detail.split('&')[3] + '" data-event-type="' + row2.event_type + '" data-title="Edit"  title="Edit" data-toggle="modal" data-target="#addEvent"><i class="zmdi zmdi-edit"></i></a>\
                                               <a class="btn btn-sm btn-outline-danger  cnd-cldr-delete-event"   data-type="Event"  data-event-type="' + row2.event_type + '" data-event-date="' + row1.eventstart_date + '"  data-id="' + row2.event_id + '" title="Delete" data-toggle="modal" data-target="#modalCNDCldrDelete"><i class="zmdi zmdi-delete"></i></a>\
                                            </div>\
                                    </li>');
                                tasksCount++;
                                taskEventCountByDate++;
                            }
                            else if (row2.event_cat.toUpperCase() == 'ABSENCE') {
                                arrAbsenceSummary.push('<li class="eve-title all-absence eve-day event-' + row2.event_type + '-' + row2.eventstart_date.split('/')[0] + ' week-number' + row1.weeknumber + ' day-number' + mnthDay + '" >' + row1.eventstart_date + '</li>');
                                arrAbsenceSummary.push('<li class="eve-item all-absence CND-event event-' + row2.event_type + '-' + row2.eventstart_date.split('/')[0] + ' ' + row2.event_detail.split('&')[0] + ' week-number' + row2.weeknumber + ' day-number' + mnthDay + '" title="' + row2.event_detail.split('&')[2] + '" data-eventtype="' + row2.event_type + '" data-eventstart_date="' + row2.eventstart_date + '" data-eventstart_time="' + row2.eventstart_time + '" data-eventend_date="' + row2.eventend_date + '" data-eventend_time="' + row2.eventend_time + '">\
                                <div class="eve-time">' + row2.event_detail.split('&')[3] + '</div>\
                                 <div class="eve-txt font-14"><span style="color:' + row2.event_detail.split('&')[1] + '; font-weight:bold;">' + row2.event_detail.split('&')[2] + '</span></div>\
                                <div class="eve-txt">'+ row2.event_type + '</div>\
                                </li>');
                                absenceCount++;
                            }
                            else if (row2.event_cat.toUpperCase() == 'JOB') {
                                arrJobsSummary.push('<li class="eve-title eve-day  all-jobs week-number' + row1.weeknumber + ' day-number' + mnthDay + '" >' + row1.eventstart_date + '</li>');
                                arrJobsSummary.push('<li class="eve-item all-jobs CND-event ' + row2.event_detail.split('&')[0] + ' ' + row2.event_detail.split('&')[4] + ' week-number' + row2.weeknumber + ' day-number' + mnthDay + '" title="' + row2.event_detail.split('&')[2] + '" data-eventtype="' + row2.event_type + '" data-eventstart_date="' + row2.eventstart_date + '" data-eventstart_time="' + row2.eventstart_time + '" data-eventend_date="' + row2.eventend_date + '" data-eventend_time="' + row2.eventend_time + '">\
                                    <div class="eve-time">' + row2.event_detail.split('&')[3] + '</div>\
                                    <div class="eve-color" style="background:' + row2.event_detail.split('&')[1] + ';padding: 3px;"></div>\
                                    <div class="eve-txt">' + row2.event_type + '<br/><i class="zmdi zmdi-city" style="font-size: 16px;font-weight: bolder">&nbsp;&nbsp;' + row2.event_detail.split('&')[5] + '</i><br/><i class="zmdi zmdi-pin" style="font-size: 18px;">&nbsp;&nbsp;' + row2.event_detail.split('&')[6] + '</i>' + '</div>\
                                    </li>');
                                jobsCount++;
                            }

                            // marked event as all-day available or unavailable***
                            if (row2.event_detail.split('&')[3].toUpperCase() == 'ALL DAY' && row2.event_type.toUpperCase() == 'AVAILABLE')
                                $('.marks-' + mnthDay).parent().addClass('all-day-available').addClass('is-all-day-available');
                            else if (row2.event_detail.split('&')[3].toUpperCase() == 'ALL DAY' && row2.event_type.toUpperCase() == 'UNAVAILABLE')
                                $('.marks-' + mnthDay).parent().addClass('all-day-unavailable').addClass('is-all-day-unavailable');
                            else if (row2.event_cat.toUpperCase() == 'ABSENCE')
                                $('.marks-' + mnthDay).parent().addClass('all-day-absence').addClass('is-all-day-absence');
                            else if (row2.event_detail.split('&')[3].toUpperCase() == 'ALL DAY' && row2.event_type.toUpperCase() == 'TASK')
                                $('.marks-' + mnthDay).parent().addClass('all-day-task').addClass('is-all-day-task');

                            if (row2.event_cat.toUpperCase() == 'JOB') {
                                event_summary += '<li class="eve-item CND-event ' + row2.event_detail.split('&')[0] + ' ' + row2.event_detail.split('&')[4] + ' week-number' + row2.weeknumber + ' day-number' + mnthDay + '"  title="' + row2.event_detail.split('&')[2] + '" data-eventtype="' + row2.event_type + '"  data-eventstart_date="' + row2.eventstart_date + '" data-eventstart_time="' + row2.eventstart_time + '" data-eventend_date="' + row2.eventend_date + '" data-eventend_time="' + row2.eventend_time + '">\
                                             <div class="eve-time">' + row2.event_detail.split('&')[3] + '</div>\
                                             <div class="eve-color" style="background:' + row2.event_detail.split('&')[1] + ';padding: 3px;"></div>\
                                             <div class="eve-txt font-14"><span style="color:' + row2.event_detail.split('&')[1] + '; font-weight:bold">' + row2.event_type + '</span><br/><span><i class="zmdi zmdi-pin col-grey">&nbsp;</i>' + row2.event_detail.split('&')[6] + '</span>' + '</div>\
                                          </li>';
                            }
                            else if (row2.event_cat.toUpperCase() == 'ABSENCE') {
                                event_summary += '<li class="eve-item  CND-event ' + row2.event_detail.split('&')[0] + ' ' + row2.event_detail.split('&')[4] + ' week-number' + row2.weeknumber + ' day-number' + mnthDay + '"  title="' + row2.event_detail.split('&')[2] + '" data-eventtype="' + row2.event_type + '"  data-eventstart_date="' + row2.eventstart_date + '" data-eventstart_time="' + row2.eventstart_time + '" data-eventend_date="' + row2.eventend_date + '" data-eventend_time="' + row2.eventend_time + '">\
                                             <div class="eve-time">' + row2.event_detail.split('&')[3] + '</div>\
                                             <div class="eve-color" style="background:' + row2.event_detail.split('&')[1] + ';padding:3px;"></div>\
                                            <div class="eve-txt font-14"><span style="color:' + row2.event_detail.split('&')[1] + '; font-weight:bold;">' + row2.event_detail.split('&')[2] + '</span></div>\
                                            </li>';
                            }
                            else {
                                event_summary += '<li class="eve-item  main-date-strip-' + mnthDay + ' CND-event event-' + row2.event_type + '-' + row2.eventstart_date.split('/')[0] + ' ' + row2.event_detail.split('&')[0] + ' ' + row2.event_detail.split('&')[4] + ' week-number' + row2.weeknumber + ' day-number' + mnthDay + ' event-' + row2.event_id + '"  title="' + row2.event_detail.split('&')[2] + '" data-eventtype="' + row2.event_type + '"  data-eventstart_date="' + row2.eventstart_date + '" data-eventstart_time="' + row2.eventstart_time + '" data-eventend_date="' + row2.eventend_date + '" data-eventend_time="' + row2.eventend_time + '">\
                                             <div class="eve-time">' + row2.event_detail.split('&')[3] + '</div>\
                                             <div class="eve-color" style="background:' + row2.event_detail.split('&')[1] + ';padding:3px;"></div>\
                                              <div class="eve-txt font-14"><span style="color:' + row2.event_detail.split('&')[1] + '; font-weight:bold;">' + row2.event_type + '</span></div>\
                                             <div class="editdelethover">\
                                               <a class="btn btn-sm btn-outline-primary cnd-cldr-edit-event" data-id="' + row2.event_id + '" data-event-date="' + row1.eventstart_date + '" data-event-time="' + row2.event_detail.split('&')[3] + '" data-event-type="' + row2.event_type + '" data-title="Edit"  title="Edit" data-toggle="modal" data-target="#addEvent"><i class="zmdi zmdi-edit"></i></a>\
                                               <a class="btn btn-sm btn-outline-danger  cnd-cldr-delete-event" data-type="Event" data-event-type="' + row2.event_type + '" data-event-date="' + row1.eventstart_date + '"   data-id="' + row2.event_id + '" title="Delete" data-toggle="modal" data-target="#modalCNDCldrDelete"><i class="zmdi zmdi-delete"></i></a>\
                                            </div>\
                                          </li>';
                            }
                            // Append day events summary to show in detail view
                            $('.chk-day-' + mnthDay).attr('data-day-events', event_summary);

                            //Append data for day view here
                            markedDayAndTime = mnthDay + '#&' + row2.event_detail.split('&')[3];
                            markedDaysData += row2.event_detail.split('&')[3] + '|<div class="size-mark-day ' + row2.event_detail.split('&')[4] + ' ' + row2.event_detail.split('&')[4] + '-' + row2.event_detail.split('&')[2].split(' ')[0] + '" data-day="' + mnthDay + '" data-event-time="' + row2.event_detail.split('&')[3] + '" data-event-startdate="' + row2.eventstart_date + '" data-event-type="' + row2.event_type + '" title="' + row2.event_detail.split('&')[2] + '" style="background-color:' + row2.event_detail.split('&')[1] + ' !important;"></div>&';
                            //count all event comes in specific date
                            mnthCurrDay = mnthDay;
                            eventCountByDate++;
                        }
                    }

                });

                //***
                arr_all_marked_days.push(markedDayAndTime + '#&' + markedDaysData);
                arrEventsCountByDate.push(mnthCurrDay + '&' + eventCountByDate + '&' + availEventCountByDate + '&' + unavailEventCountByDate + '&' + taskEventCountByDate);
                $(".event-show").append(event_summary);

                $('.cnd-cldr-jobs-count').text(jobsCount);
                $('.cnd-cldr-available-count').text(availCount);
                $('.cnd-cldr-unavailable-count').text(uavailCount);
                $('.cnd-cldr-tasks-count').text(tasksCount);
                $('.cnd-cldr-absence-count').text(absenceCount);

                $('.cnd-cldr-all-count').text((jobsCount + availCount + uavailCount + tasksCount + absenceCount));
                event_summary = '';
                markedDaysData = '';
            });
        }
        else {
            $(".event-show").empty();
            event_summary += '<li class="eve-item CND-event" ">\
                                             <div class="eve-time"></div>\
                                             <div class="eve-color"></div>\
                                             <div class="eve-txt">No events</div>\
                                          </li>'
            $(".event-show").append(event_summary);
            $('.cnd-cldr-jobs-count').text(0);
            $('.cnd-cldr-available-count').text(0);
            $('.cnd-cldr-unavailable-count').text(0);
            $('.cnd-cldr-tasks-count').text(0);
            $('.cnd-cldr-absence-count').text(0);
            $('.cnd-cldr-all-count').text(0);
        }
        if (cnd_cldr_current_view.toUpperCase() == 'DAY') {
            $('.eve-title').css('display', 'none');
            $('.eve-item').css('display', 'none');
            //loop to draw event box on calendar
            ns_candidate_calendar.drawEventDayBox();
            $('.day-number' + cnd_cldr_day_counter).css('display', '');
        }
        else if (cnd_cldr_current_view.toUpperCase() == 'WEEK') {
            $('.eve-title').css('display', 'none');
            $('.eve-item').css('display', 'none');
            $('.week-number' + cnd_cldr_weekNumber_counter).css('display', '');
        }

        //==========
        $('.cnd-cldr-available-filter').attr('data-events', arrAvailableEventsSummary.join(""));
        $('.cnd-cldr-unavailable-filter').attr('data-events', arrUnavailableEventsSummary.join(""));
        $('.cnd-cldr-tasks-filter').attr('data-events', arrTasksSummary.join(""));
        $('.cnd-cldr-jobs-filter').attr('data-events', arrJobsSummary.join(""));
        $('.cnd-cldr-absence-filter').attr('data-events', arrAbsenceSummary.join(""));

        $('.selected-event-show').append(arrAvailableEventsSummary.join(""));
        $('.selected-event-show').append(arrUnavailableEventsSummary.join(""));
        $('.selected-event-show').append(arrTasksSummary.join(""));
        $('.selected-event-show').append(arrJobsSummary.join(""));
        $('.selected-event-show').append(arrAbsenceSummary.join(""));

        //==========================
        if (arrEventsCountByDate.length > 0) {
            $.each(arrEventsCountByDate, function (key, row) {
                $('.main-date-strip-' + row.split('&')[0]).attr('data-event-count', row.split('&')[1]);
                $('.main-date-strip-' + row.split('&')[0]).attr('data-available-count', row.split('&')[2]);
                $('.main-date-strip-' + row.split('&')[0]).attr('data-unavailable-count', row.split('&')[3]);
                $('.main-date-strip-' + row.split('&')[0]).attr('data-task-count', row.split('&')[4]);
            });
        }
        //===========================
    },
    calendarHTML: function () {
        //var i = 0, j = 0;
        var calendarTabs, monthDates = '', monthHeader, daysName, calendarFinalHTML, monthDay = 0;
        monthName = ns_candidate_calendar.getMonthName(currentDate.getMonth());
        var calendarTitle = monthName + ' ' + currentYear;
        calendarTabs = '<ul class="nav nav-tabs nav-justified tabs bdr-tp-n" role="tablist" style="padding:0;">' +
    						  '<li role="presentation" class="nav-item cnd-calendar-tab active" data-viewtype="month">' +
    							  '<a href="#month" aria-controls="month" role="tab" class="nav-link active show font-18" data-toggle="tab">Month</a>' +
    						  '</li>' +
    						  '<li role="presentation" class="nav-item cnd-calendar-tab" data-viewtype="week">' +
    							  '<a href="#week"  aria-controls="week"  role="tab" class="nav-link font-18" data-toggle="tab">Week</a>' +
    						  '</li>' +
    						  '<li role="presentation" class="nav-item cnd-calendar-tab" data-viewtype="day">' +
    							  '<a href="#day"   aria-controls="day"   role="tab" class="nav-link font-18" data-toggle="tab">Day</a>' +
    						  '</li>' +
    					 '</ul>';

        monthHeader = '<table style="width:100%;"><tbody><tr class="calendar-month-header">' +
    						  '<th class="text-center w50">' +
    								  '<span class="cnd-calendar-navigation nav-prev pointer" data-by="' + calendarViewType + '" data-direction="prev">' +
    									  '<span class="zmdi zmdi-chevron-left font-36"></span>' +
    								  '</span>' +
    						  '</th>' +
    						  '<th colspan="5" class="text-center">' +
    							  '<span class="head-lngh cnd-calendar-title font-22 bold">' + calendarTitle + '</span>' +
    						  '</th>' +
    						  '<th class="text-center  w50">' +
    							  '<span class="cnd-calendar-navigation nav-next pointer" data-by="' + calendarViewType + '" data-direction="next">' +
    									  '<span class="zmdi zmdi-chevron-right font-36"></span>' +
    							  '</span>' +
    						  '</th>' +
    					 '</tr></tbody></table>';


        daysName = '<tr class="calendar-day-header">' +
    					  '<th>Sun<div class="chk"><input id="chk-sun" type="checkbox" class="cnd-cldr-dayheader-chk" data-day-name="day-sunday" name="chk-mon"><label    for="chk-sun">&nbsp;</label></div></th>' +
    					  '<th>Mon<div class="chk"><input id="chk-mon" type="checkbox" class="cnd-cldr-dayheader-chk" data-day-name="day-monday" name="chk-mon"><label    for="chk-mon">&nbsp;</label></div></th>' +
    					  '<th>Tue<div class="chk"><input id="chk-tue" type="checkbox" class="cnd-cldr-dayheader-chk" data-day-name="day-tuesday" name="chk-mon"><label   for="chk-tue">&nbsp;</label></div></th>' +
    					  '<th>Wed<div class="chk"><input id="chk-wed" type="checkbox" class="cnd-cldr-dayheader-chk" data-day-name="day-wednesday" name="chk-mon"><label for="chk-wed">&nbsp;</label></div></th>' +
    					  '<th>Thu<div class="chk"><input id="chk-thu" type="checkbox" class="cnd-cldr-dayheader-chk" data-day-name="day-thursday" name="chk-mon"><label  for="chk-thu">&nbsp;</label></div></th>' +
    					  '<th>Fri<div class="chk"><input id="chk-fri" type="checkbox" class="cnd-cldr-dayheader-chk" data-day-name="day-friday" name="chk-mon"><label    for="chk-fri">&nbsp;</label></div></th>' +
    					  '<th>Sat<div class="chk"><input id="chk-sat" type="checkbox" class="cnd-cldr-dayheader-chk" data-day-name="day-saturday" name="chk-mon"><label  for="chk-sat">&nbsp;</label></div></th>' +
    				  '</tr>';

        for (var i = 0; i < 6; i++) {
            monthDates += '<tr class="calendar-day-date week-number' + (i + 1) + '" style="border-bottom: 1px solid lightgray;">';
            var dayName;
            for (var j = 0; j < 7; j++) {
                dayName = ns_candidate_calendar.dayOfWeekAsString(j);
                monthDates += '<td class="dayclick cnd-events-container daycell-' + i + '-' + j + '-' + dayName + '"></td>';
            }
            monthDates += '</tr>';
        }
        calendarFinalHTML = calendarTabs + monthHeader +
    								'<div class="eve_calendar">\
                                          <table class="table table-bordered tbl-cnd-cldr-calendar-view">\
                                               <tbody>'+
    											   daysName +
    											   monthDates +
    										   '</tbody>\
                                           </table>\
                                      </div>';
        return calendarFinalHTML;
    },
    dayOfWeekAsString: function (dayIndex) {
        return ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][dayIndex];
    },
    getMonthName: function (monthIndex) {
        return ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][monthIndex];
    },
    getDaysOfMonth: function (month, year) {
        total_month_days = 0;
        var date = new Date(Date.UTC(year, month, 1));
        var days = [];
        while (date.getMonth() === month) {
            var newDate = new Date(date);
            days.push(newDate.toString().split(' ')[0] + '#' + newDate.getDate());
            date.setDate(date.getDate() + 1);
            total_month_days++;
        }
        return days;
    },
    get: function () {     
        var serverResponse;
        var params = { startDate: cnd_calendar_start_date, endDate: cnd_calendar_end_date, EMPId: cnd_calendar_cnd_id, action: cnd_calendar_data_for, subType: "TEST" }
        ns_ajax.get(
           urls.employerApi,
           params,
           function (response) {
              
               if (response.split('|')[0] === 'OK') {
                   if (response.split('|')[1] != "") {
                       serverResponse = jQuery.parseJSON(response.split('|')[1]);                     
                       ns_candidate_calendar.populateDataToCalendar(serverResponse.Table);
                      
                   }
                   else
                       serverResponse = null;

                   ns_candidate_calendar.events_summary(serverResponse);
               }
               else {
                   serverResponse = null;
                   ns_candidate_calendar.events_summary(serverResponse);
               }
           });
    },
    showEventSummary: function () {
        var eventsData = '';
        eventsData = $('.cnd-day-checkbox:checkbox:checked').map(function () { return $(this).attr('data-day-events'); }).get();
        eventsData.join("");

        $('.event-show').css('display', 'none');
        $('.selected-event-show').html('');
        if (eventsData.length > 0)
            $('.selected-event-show').append(eventsData);
        else
            $('.event-show').css('display', '');
        $('.selected-event-show').css('display', '');
    },
    post: function (params, action, e) {
        action = action.toLowerCase();
        ns_ajax.post(
		   urls.eventsApi,
		   params,
		   function (response) {
		       if (response.split('|')[0] === 'OK') {
		           if (action == "add" || action == "edit") {
		               if (action == 'edit') {
		                   $('#btnSubmitCNDEvent').removeAttr('data-val');
		                   ShowAlertMessage("Message", "Event:" + response.split('|')[1] + " updated successfully", "C");
		               }
		               else if (action == 'add') {
		                   if (response.split('|')[1] != "0") {
		                       if (event_added_from.toUpperCase() == 'SET-EVENTS')
		                           ShowAlertMessage("Message", "This time slot not available, please select another date", "A");
		                       else
		                           ns_candidate_calendar.tblEventsExists(response);
		                       return false;
		                   }
		                   else {
		                       ShowAlertMessage("Message", "Event saved successfully", "C");
		                       ns_candidate_calendar.populateCalendar();
		                       $('#divEventsExistsTable').remove();
		                       $("#divCreateEventsForm").removeClass('col-lg-4').addClass('col-lg-12');
		                       $('#addEvent').addClass('right_quater').removeClass('right_one_thrd');
		                   }
		               }
		               $('#addEvent').modal('hide');
		               $(".modal-backdrop").css('display', 'none');
		           }
		       }
		       else
		           ShowAlertMessage("Message", response.split('|')[0], "A");
		   }
	   );
    },
    tblEventsExists: function (existingEventsData) {
        existingEventsData = jQuery.parseJSON(existingEventsData.split('|')[1]);
        //If any event,task or job exists in selected date then this table is created to  show all record
        var tblEvtsExstHTML = '<div class="col-lg-8" id="divEventsExistsTable">\
                                    <div style="color:red !important;">These are all events, tasks and jobs which overlaps your current selected start & end date</div>\
                                     <div class="table-responsive js-sweetalert ">\
                                      <table class="table table-bordered list_preparecalendar_table slimtd">\
                                        <thead id="tblEventsExistsHeaders" class="tblEventsExists">\
                                            <tr><th class="text-center">SN.</th><th  class="text-center">Type</th><th  class="text-center">Start Date</th><th  class="text-center">Start Time</th><th  class="text-center">End Date</th><th  class="text-center">End Time</th></tr>\
                                        </thead>\
                                        <tbody id="tblEventsExistsBody" class="tblEventsExists"></tbody>\
                                    </table>\
                                   </div></div>';
        $('#addEvent').modal('hide');
        $('#divEventsExistsTable').remove();
        $('#divRowEventsAddModal').append(tblEvtsExstHTML);
        $('#tblEventsExistsBody').empty();
        if (existingEventsData.length > 0) {
            $.each(existingEventsData, function (index, row) {
                $('#tblEventsExistsBody').append('<tr><td class="text-center"><span>' + (index + 1) + '</span></td><td class="text-center"><span>' + row.event_type + '</span></td><td class="text-center"><span>' + row.event_start24.split(' ')[0] + '</span></td><td class="text-center"><span>' + row.event_start24.split(' ')[1] + '</span></td><td class="text-center"><span>' + row.event_end24.split(' ')[0] + '</span></td><td class="text-center"><span>' + row.event_end24.split(' ')[1] + '</span></td></tr>');
            });
        }
        $("#divCreateEventsForm").removeClass('col-lg-12').addClass('col-lg-4');
        $('#addEvent').removeClass('right_quater').addClass('right_one_thrd');
        $('#addEvent').modal('show');
    },

    //24-12-2019 Changes

    getCNDRate: function () {
        var serverResponse;
        var params = { id: cnd_calendar_cnd_id }
        ns_ajax.get(
           urls.employerApi + "getcndrate",
           params,
           function (response) {
               if (response.split('|')[0] === 'OK') {
                   serverResponse = jQuery.parseJSON(response.split('|')[1]);
                   var cldr_cnd_rate = serverResponse[0].default_rate;
                   $("#cldrTxtCNDRate").val(cldr_cnd_rate);
                   $(".prev_job_area").hide('slow');
                   $('.thanks_job_area').hide('slow');
                   $(".cldr-add-job").show('slow');
                   $("#cldrBtnSubmitJob").hide('slow');
                   $("#cldrBtnCloseJob").hide('slow');
                   $(".cldr-btn-preview-job").show('slow');
               }
               else {
                   serverResponse = null;
               }
           });
    },
    post_jobs: function (params) {
        ns_ajax.post(
            urls.employerApi + 'postjob',
            params,
            function (response) {
                if (response.split('|')[0] === 'OK') {
                    ns_candidate_calendar.populateCalendar();
                    $('.thanks_job_area').show('slow');
                    $('.prev_job_area').hide('slow');
                    $('#cldrBtnCloseJob').hide('slow');
                    $('#cldrBtnSubmitJob').hide('slow');
                }
            }
        );
    },

    postEvents: function (params, action, e) {
        action = action.toLowerCase();
        ns_ajax.post(
		  urls.employerApi + 'ADD_EVENTS',
		   params,
		   function (response) {
		       if (response.split('|')[0] === 'OK') {
		           if (action == 'delete_event') {
		               var eveType = $(e).attr('data-event-type');
		               var eveDate = $(e).attr('data-event-date');
		               var eveId = $(e).attr('data-id');
		               var eveDay = 0;
		               if (eveDate.substring(0, 1) == '0')
		                   eveDay = eveDate.substring(1, 2);
		               else
		                   eveDay = eveDate.substring(0, 2);
		               $('#modalCNDDeleteBtnYes').removeAttr('data-id');
		               ShowAlertMessage("Message", eveType + " has been deleted successfully", "C");
		               //get existing event count by event type accorrding to date
		               var existingEventCountByDate = $('.main-date-strip-' + eveDay).attr('data-' + eveType.toLowerCase() + '-count');
		               eventCountByDate = $('.main-date-strip-' + eveDay).attr('data-event-count');
		               //decrement of existing count by event type after delition
		               if (existingEventCountByDate > 0)
		                   existingEventCountByDate--;
		               //decrement of existing count of all event after delition
		               eventCountByDate--;

		               if (existingEventCountByDate > 0)
		                   $('.main-date-strip-' + eveDay).attr('data-' + eveType.toLowerCase() + '-count', existingEventCountByDate);
		               else {
		                   $('.event-' + eveType + '-' + eveDate.split('/')[0]).parent().parent().removeClass('all-day-' + eveType.toLowerCase()).removeClass('is-all-day-' + eveType.toLowerCase());
		                   $('.event-' + eveType + '-' + eveDate.split('/')[0]).remove();
		               }

		               if (eventCountByDate > 0)
		                   $('.main-date-strip-' + eveDay).attr('data-event-count', eventCountByDate);
		               else {
		                   $('.main-date-strip-' + eveDay).remove();
		                   $('.event-' + eveType + '-' + eveDate.split('/')[0]).remove();
		                   $('.chk-day-' + eveDay).removeAttr('data-day-events');
		               }
		               //removed event from summay
		               $('.event-' + eveId).remove();
		               $('#modalCNDCldrDelete').modal('hide');
		               $(".modal-backdrop").css('display', 'none');
		           }
		           else if (action == 'update_event') {
		               ns_candidate_calendar.populateCalendar();
		               $('#btnSubmitCNDEvent').removeAttr('data-id');
		               ShowAlertMessage("Message", "Event:" + response.split('|')[1] + " updated successfully", "C");
		               $('#addEvent').modal('hide');
		               $(".modal-backdrop").css('display', 'none');
		           }
		           else if (action == 'add_events') {
		               if (response.split('|')[1] != "0") {
		                   if (event_added_from.toUpperCase() == 'SET-EVENTS')
		                       ShowAlertMessage("Message", "This time slot not available, please select another date", "A");
		                   else
		                       ns_candidate_calendar.tblEventsExists(response);
		                   return false;
		               }
		               else {
		                   ShowAlertMessage("Message", "Event saved successfully", "C");
		                   ns_candidate_calendar.populateCalendar();
		                   $('#divEventsExistsTable').remove();
		                   $("#divCreateEventsForm").removeClass('col-lg-4').addClass('col-lg-12');
		                   $('#addEvent').addClass('right_quater').removeClass('right_one_thrd');
		                   $('.cnd-cldr-dayheader-chk').prop('checked', '');
		               }

		               $('#addEvent').modal('hide');
		               $(".modal-backdrop").css('display', 'none');
		           }
		       }
		       else
		           ShowAlertMessage("Message", response.split('|')[0], "A");
		   }
	   );
    },
    validateDecimalPlace: function (e) {
        var t = e.value;
        e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    },
    fn_calculate_amount: function () {
        $("#cldrTxtDuration").val('0');
        var jbStartTime = $("#cldrTxtStartTime").val();
        var jbEndTime = $("#cldrTxtEndTime").val();
        var totalTm = CalculateMinutes(jbStartTime, jbEndTime);
        $("#cldrTxtDuration").val(totalTm);
        if (!isNaN(totalTm)) {
            $("#cldrTxtDuration").val(totalTm);
            $("#cldrTxtShiftCost").val($("#cldrTxtJobRate").val() * totalTm);
        }
        else {
            $("#cldrTxtDuration").val(0);
            $("#cldrTxtShiftCost").val(0.0);
        }

    },
    getHistory: function (event_start_date, action_name, event_type) {
        var serverResponse;
        var params = { startDate: event_start_date, action: action_name, eventType: event_type, CNDId: cnd_calendar_cnd_id }
        ns_ajax.get(
           urls.employerApi,
           params,
           function (response) {
               if (response.split('|')[0] === 'OK') {
                   serverResponse = jQuery.parseJSON(response.split('|')[1]);
                   var eventsSummaryContent = '';
                   eventsSummaryContent += '<table class="table table-striped table-hover projects" style="margin:0;">';
                   eventsSummaryContent += '<thead>';
                   eventsSummaryContent += '<tr>';
                   eventsSummaryContent += '<th style="width:5%;">Sr.No.</th>';
                   //eventsSummaryContent += '<th style="width:15%;">Candidate</th>';
                   //eventsSummaryContent += '<th style="width:10%;">Mobile</th>';
                   //eventsSummaryContent += '<th style="width:15%;">Email</th>';
                   eventsSummaryContent += '<th style="width:17%;">From Date</th>';
                   eventsSummaryContent += '<th style="width:17%;">To Date</th>';
                   eventsSummaryContent += '<th style="width:5%;">Type</th>';
                   //eventsSummaryContent += '<th style="width:11%;">Created by</th>';
                   eventsSummaryContent += '<th style="width:5%;">Created date</th>';
                   //eventsSummaryContent += '<th style="width:3%;">History</th>';
                   //eventsSummaryContent += '<th style="width:3%;"></th>';
                   eventsSummaryContent += '</tr>';
                   eventsSummaryContent += '</thead>';
                   eventsSummaryContent += '<tbody>';
                   $.each(serverResponse.Table, function (key, value) {
                       eventsSummaryContent += '<tr style="cursor:pointer;">';
                       eventsSummaryContent += '<td style="text-align:center;"><b>' + (key + 1) + '</b></td>';
                       eventsSummaryContent += '<td><i class="fa fa-calendar">&nbsp;</i>' + value.eventstart_date + ' ' + value.eventstart_time + '</td>';
                       eventsSummaryContent += '<td><i class="fa fa-calendar">&nbsp;</i>' + value.eventend_date + ' ' + value.eventend_time + '</td>';

                       var icon = value.event_type == 'JOB' ? 'fa-user-md' : value.event_type == 'EVENT' ? (value.title.toUpperCase() == 'TASK' ? 'fa-file-text-o' : 'fa-battery-4') : value.event_type == 'ABSENCE' ? 'fa-plane' : '';

                       if (value.eventstart_time != '00:00' || value.eventend_time != '23:59') {
                           if (value.eventtitle == 'All Day')
                               eventsSummaryContent += '<td><b style="color:#9370DB"><i class="fa fa ' + icon + '">&nbsp;</i>Partial</b></td>';
                           else
                               eventsSummaryContent += '<td><b style="color:' + value.event_color + '"><i class="fa fa ' + icon + '">&nbsp;</i>' + value.title + '</b></td>';
                       }
                       else {
                           eventsSummaryContent += '<td><b style="color:' + value.event_color + '"><i class="fa fa ' + icon + '">&nbsp;</i>' + value.title + '</b></td>';
                       }
                       eventsSummaryContent += '<td><div><span ><i class="zmdi zmdi-calendar">&nbsp;</i>' + value.created_date + '</span></div></td>';
                       eventsSummaryContent += '</tr>';
                   });
                   eventsSummaryContent += '</tbody>';
                   if (action_name.toUpperCase() == 'JOB-SUMMARY')
                       $('#eventsSummaryModelTitle').html('<b>Jobs Summary</b>')
                   else
                       $('#eventsSummaryModelTitle').html('<b>Events Summary</b>')
                   $('.events-summary-container').html('');
                   $('.events-summary-container').append(eventsSummaryContent);
                   $('.events-summary').modal('show');
               }
               else {
                   serverResponse = null;
               }
           });
    },
    drawEventDayBox: function () {
        $('.size-mark-day').remove();
        //loop to draw event box on calendar
        $.each(arr_all_marked_days, function (index, row) {
            var dayDataFor = row.split('#&')[0];
            var eveTime = row.split('#&')[1];
            var arrEventTime = [], drawEventHTML, eveTimeStart, eveTimeEnd;
            if (dayDataFor == cnd_cldr_day_counter) {
                drawEventHTML = row.split('#&')[2];
                drawEventHTML = drawEventHTML.substring(0, drawEventHTML.length - 1);
                arrEventTime = drawEventHTML.split('&');
                drawEventHTML = drawEventHTML.split('|')[1];
                if (arrEventTime.length > 1) {
                    $.each(arrEventTime, function (index, eventBoxData) {
                        drawEventHTML = eventBoxData.split('|')[1];
                        drawEventHTML = drawEventHTML.substring(0, drawEventHTML.length - 1);
                        eveTime = eventBoxData.split('|')[0];
                        if (eveTime.toUpperCase() == 'ALL DAY') {
                            var j = 0;
                            for (var i = 0; i <= 23; i++) {
                                j = (i < 10 ? '0' + i : i);
                                //eveTime = eveTime.split('-')[0].split(':')[0];
                                $('.cnd-cldr-event-time-' + j).append(drawEventHTML);
                            }
                        }
                        else {
                            eveTimeStart = parseInt(eveTime.split('-')[0].split(':')[0]);
                            eveTimeEnd = parseInt(eveTime.split('-')[1].split(':')[0]);
                            var j = 0;
                            for (var i = eveTimeStart; i <= eveTimeEnd; i++) {
                                j = (i < 10 ? '0' + i : i);
                                //eveTime = eveTime.split('-')[0].split(':')[0];
                                $('.cnd-cldr-event-time-' + j).append(drawEventHTML);
                            }

                        }
                    });
                }
                else {
                    if (eveTime.toUpperCase() == 'ALL DAY') {
                        var j = 0;
                        for (var i = 0; i <= 23; i++) {
                            j = (i < 10 ? '0' + i : i);
                            //eveTime = eveTime.split('-')[0].split(':')[0];
                            $('.cnd-cldr-event-time-' + j).append(drawEventHTML);
                        }
                    }
                    else {
                        eveTimeStart = parseInt(eveTime.split('-')[0].split(':')[0]);
                        eveTimeEnd = parseInt(eveTime.split('-')[1].split(':')[0]);
                        var j = 0;
                        for (var i = eveTimeStart; i <= eveTimeEnd; i++) {
                            j = (i < 10 ? '0' + i : i);
                            //eveTime = eveTime.split('-')[0].split(':')[0];
                            $('.cnd-cldr-event-time-' + j).append(drawEventHTML);
                        }
                    }
                }
            }
        });
    },
    populateDayView: function () {
        var times = [], row;
        $('.tbl-cnd-cldr-day-view').remove();
        row = '<table class="tbl-cnd-cldr-day-view" style="width: 100%;display:none;" cellspacing="0"><tbody class="cnd-cldr-day-view"></tbody></table>';
        $('.candidate-calendar-container').append(row);
        row = '<tr>\
                <th class="med-agenda-axis med-widget-header" style="width:100px;font-size: 18px;border-bottom: 1px solid lightgray;border-top: 1px solid lightgray;">12 am</th>\
                <td class="med-widget-content cnd-cldr-event-time-00" style="height: 40px;vertical-align: bottom;padding:0px !important;"></td>\
                </tr>';
        times.push(row);
        //Make ready day view
        for (var hour = 1; hour < 24; hour++) {
            if (hour < 12) {
                row = '<tr>\
                        <th class="med-agenda-axis med-widget-header" style="width: 100px;font-size: 18px;border-bottom: 1px solid lightgray">' + hour + ' am</th>\
                        <td class="med-widget-content cnd-cldr-event-time-' + (hour < 10 ? '0' + hour : hour) + '" style="height: 40px;vertical-align: bottom;padding:0px !important;"></td>\
                        </tr>';
            }
            else {
                row = '<tr>\
                        <th class="med-agenda-axis med-widget-header" style="width:100px;font-size: 18px;border-bottom: 1px solid lightgray">' + hour + ' pm</th>\
                        <td class="med-widget-content cnd-cldr-event-time-' + hour + '" style="height: 40px;vertical-align: bottom;padding:0px !important;"></td>\
                        </tr>';
            }
            times[hour] = row;
        }

        $('.cnd-cldr-day-view').append(times);
        $('.cnd-cldr-day-view').append(row);
        $('.tbl-cnd-cldr-calendar-view').css('display', 'none');
        $('.tbl-cnd-cldr-day-view').css('display', '');
    },
}

