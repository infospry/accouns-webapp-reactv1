var calendar_action = 'All', calendar_view_type = 'month', calendar_request_date = '', calendar_cnd_id = 0;

$(document).ready(function () {
    $(document).on('click', '.Evt_calendar', function () {
        var action = $(this).attr('data-action');         
        if (action == 'dataview') {
            var viewtype = $(this).attr('data-viewtype');
            $('.calendarview').removeClass('active');
            $(this).addClass('active');
            calendar_view_type = viewtype;    
            ns_candidate_calendar.get();
        }
        if (action == 'navigate') {
            var Actiondate = $(this).attr('data-val');               
            var dataDirection = $(this).attr('data-direction');           
            if (dataDirection == 'next')
                calendar_request_date = Actiondate;
            if (dataDirection == 'prev')
                calendar_request_date = Actiondate;                       
            ns_candidate_calendar.get();
        }
        if (action == 'refresh')
        {      
            calendar_view_type = 'month';
            calendar_request_date = '';
            ns_candidate_calendar.get();
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
                }
                else {                 
                    $('.cls-other').hide();
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
            }
           
        }

        if (action == 'add-event') {
            if ($(this).attr('data-event-starttime') == 'custom') {
                var eventtype = $(this).attr('data-eventtype');
                var popup = $(this).data('popup');
                if (popup != '') {
                    $('#' + popup).modal('show');
                    $(".clearText").val('');
                    $("#rdoAllDay").prop('checked', 'checked');
                    $("#rdoAvailable").prop('checked', 'checked');
                    $(".task-name").hide('slow');
                    $(".event-title").show('slow');
                    $(".event-time").css('display', 'none');

                    $('#vertical_setavail, .scrollable, .scrollableun').mobiscroll().hide();
                    $('.mbsc-fr-overlay').hide();                  

                    $('#btnSubmitCNDEvent').attr('data-id', '');
                    $('#btnSubmitCNDEvent').attr('data-action', 'event_add');
                    $('#btnDeleteEvent').hide();
                    $('#btnDeleteEvent').attr('data-id', '');
                }
            }
            else {
                ns_candidate_calendar.EventsAction(this, '');
            }
        }
        if (action == 'event_add') {
            ns_candidate_calendar.EventsAction(this, 'custom');
        }
        if (action == 'event_edit') {
            ns_candidate_calendar.EventsAction(this, action);
        }
        if (action == 'delete_event') {
            ns_candidate_calendar.EventsAction(this, action);
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
            $('#btnSubmitCNDEvent').attr('data-id', event_id);
            $('#btnSubmitCNDEvent').attr('data-action', 'event_edit');
            $('#btnDeleteEvent').show();
            $('#btnDeleteEvent').attr('data-id', event_id);

            $("input[name=rdoEventType][value=" + eventtype + "]").attr('checked', 'checked');
            if (eventtype.toLowerCase().trim() == 'task') {
                $(".task-name").show('slow');
                $(".event-title").hide('slow');
                $('#txtTaskName').val(event_title);
            }
            else {
                $(".task-name").hide('slow');
                $(".event-title").show('slow');
                $('#txtEventTitle').val(event_title);
            }

            $("input[name=rdoAvailability][value=" + (IsParcial == "All Day" ? '1' : '2') + "]").attr('checked', 'checked');

            $('#txtEventStartDate').val(event_date.split("-")[0].trim());
            $('#txtEventEndDate').val(event_date.split("-")[1].trim());
            if (IsParcial.toLowerCase() !== "All Day") {
                $('#txtEventStartTime').val(event_time.split("-")[0].trim());
                $('#txtEventEndTime').val(event_time.split("-")[1].trim());
                $(".event-time").css('display', 'block');
            }            
        }
    });   
});

ns_candidate_calendar = {
    design: function (dataFor) {
        calendar_action = dataFor;
        ns_candidate_calendar.get();
    },
    get: function () {
        var param = { start_date: calendar_request_date, calendar_view_type: calendar_view_type, cnd_id: calendar_cnd_id, action: calendar_action }
        $('#overlay').show(); 
        ns_ajax.get(
            urls.candidateApi,
            param,
            function (response) {
                $('#overlay').hide();
                if (response.split('|')[0] === 'OK') {
                    //response = '|{"dates":[{"datem":"2020-06-01","name":"Monday"},{"datem":"2020-06-02","name":"Tuesday"},{"datem":"2020-06-03","name":"Wednesday"},{"datem":"2020-06-04","name":"Thursday"},{"datem":"2020-06-05","name":"Friday"},{"datem":"2020-06-06","name":"Saturday"},{"datem":"2020-06-07","name":"Sunday"},{"datem":"2020-06-08","name":"Monday"},{"datem":"2020-06-09","name":"Tuesday"},{"datem":"2020-06-10","name":"Wednesday"},{"datem":"2020-06-11","name":"Thursday"},{"datem":"2020-06-12","name":"Friday"},{"datem":"2020-06-13","name":"Saturday"},{"datem":"2020-06-14","name":"Sunday"},{"datem":"2020-06-15","name":"Monday"},{"datem":"2020-06-16","name":"Tuesday"},{"datem":"2020-06-17","name":"Wednesday"},{"datem":"2020-06-18","name":"Thursday"},{"datem":"2020-06-19","name":"Friday"},{"datem":"2020-06-20","name":"Saturday"},{"datem":"2020-06-21","name":"Sunday"},{"datem":"2020-06-22","name":"Monday"},{"datem":"2020-06-23","name":"Tuesday"},{"datem":"2020-06-24","name":"Wednesday"},{"datem":"2020-06-25","name":"Thursday"},{"datem":"2020-06-26","name":"Friday"},{"datem":"2020-06-27","name":"Saturday"},{"datem":"2020-06-28","name":"Sunday"},{"datem":"2020-06-29","name":"Monday"},{"datem":"2020-06-30","name":"Tuesday"}]}';
                    var objCal = $.parseJSON(response.split('|')[1]); 
                 
                    call_tmpl_binder(objCal, '/Template/cnd_calendar_tmpl.html', '#cnd_calendar_template', '#cnd_calendar_placeholder');                  
                    call_Sub_tmpl_binder(objCal.Calendar, '/Template/cnd_calendar_tmpl.html', '#cal_cell_template', '.cal_cell_placeholder');
                    call_tmpl_binder(objCal, '/Template/cnd_calendar_tmpl.html', '#cnd_viewlist_template', '#cnd_viewlist_placeholder');
                }
            });
    },
    EventsAction: function (e, request) {
        var arrCndCldrEvents = [], cndCldEventAction, action = '', evt;
        if (request == 'delete_event') {
            evt = e;
            var action = 'delete_event';
            var eventData = {
                "evt_id": $(e).attr('data-id'),
                "cnd_id": calendar_cnd_id,
                "action": action
            }
            arrCndCldrEvents.push(eventData);
            var cndCldEventAction = { "action": 'delete_event', "cnd_id": calendar_cnd_id };
        }
        else if (request == 'custom') {
            evt = e;
            var eventData, eventTitle;
            var action = 'add_events';// $(e).attr('data-action');        
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
                alertmsg.danger('Enter Task Name', 'bottom');
                return false;
            }
            if (eventStartDate.val() == '') {
                eventStartDate.focus();
                alertmsg.danger('Enter start date', 'bottom');
                return false;
            }
            if (eventStartTime.val() == '' && DateType == '2') {
                eventStartTime.focus();
                alertmsg.danger('Enter start time', 'bottom');
                return false;
            }

            if (eventEndDate.val() == '') {
                eventEndDate.focus();
                alertmsg.danger('Enter end date', 'bottom');
                return false;
            }
            if (eventEndTime.val() == '' && DateType == '2') {
                eventEndTime.focus();
                alertmsg.danger('Enter end time', 'bottom');
                return false;
            }
            //if (eventStartDate.val().length !== 0) {
            //    var evstartDate = eventStartDate.val();
            //    var evEndDate = eventEndDate.val();
            //    if (eventEndDate.val().length !== 0) {
            //        evstartDate = new Date(ConvertDate(evstartDate));
            //        evEndDate = new Date(ConvertDate(evEndDate));
            //        if (+evstartDate > +evEndDate) {
            //            alertmsg.danger('Event end date should be greater from date', 'bottom');
            //            evEndDate.focus();
            //            return false;
            //        }
            //    }
            //    else {
            //        eventEndDate.focus();
            //        return false;
            //    }
            //}
            //else {
            //    eventStartDate.focus();
            //    return false;
            //}
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
                "event_desc": (eventDescription.val().length > 0 ? eventDescription.val() : ""),
                "action": action
            }
            arrCndCldrEvents.push(eventData);
            cndCldEventAction = { "action": action, "cnd_id": calendar_cnd_id };
            var strFinal = "[" + JSON.stringify(cndCldEventAction) + "," + JSON.stringify(arrCndCldrEvents) + "]";
            ns_candidate_calendar.postEvents(strFinal, action, this);
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
                        "event_type": eventType
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
        ns_candidate_calendar.postEvents(strFinal, action, evt);
    },
    postEvents: function (params, action, e) {
        action = action.toLowerCase();
        ns_ajax.post(
            urls.candidateApi + 'ADD_EVENTS',
            params,           
            function (response) {             
                if (response.split("|")[0] == 'OK') {
                    if (action == 'delete_event') {
                        ShowAlertMessage("Message", "Event has been deleted successfully.", "C");                     
                        ns_candidate_calendar.get();
                    }
                    else if (action == 'update_event') {
                        ShowAlertMessage("Message", "Event:" + response.split('|')[1] + " updated successfully", "C");                
                        ns_candidate_calendar.get();
                    }
                    else if (action == 'add_events') {
                        if (response.split("|")[1] != "0") {
                            //if (event_added_from.toUpperCase() == 'SET-EVENTS')  
                            ShowAlertMessage("Message", "This time slot not available, please select another date", "A");                            
                            //else
                            //ns_candidate_calendar.tblEventsExists(response);
                            return false;
                        }
                        else {
                            $('#vertical_setavail, .scrollable, .scrollableun').mobiscroll().hide();
                            $('.mbsc-fr-overlay').hide();
                            ShowAlertMessage("Message", "Event saved successfully", "C");                  
                            ns_candidate_calendar.get();
                            $('.chkdayheader').prop('checked', '');
                        }
                    }
                    //$('#modal_addevent').modal('hide');
                    //$(".modal-backdrop").css('display', 'none');
                }
                else
                    ShowAlertMessage("Message", response.split('|')[0], "A");                
            }
        );
    },
}

