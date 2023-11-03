$(document).ready(function () {
    //lead event
    $(document).on("click", ".evt-leads-action", function () {
        
        ns_leads.actions(this);
    });
    $(document).on("click", ".evt-org-settings", function () {
        ns_organization.actions(this);
    });
    $(document).on("change", "#fileInputUpload", function () {
        ns_validations.orgInfo(this);
    });
    $(document).on("click", ".evt-masters-action", function () {
        ns_masters.actions(this);
    });
    $(document).on("click", ".evt-leads-main", function () {
        ns_leadsMain.actions(this);
    });
    $('#base_colorpicker').on('input', function () {
        $('#base_hexcolor').val(this.value);
    });
    $('#background_colorpicker').on('input', function () {
        $('#background_hexcolor').val(this.value);
    });
    $('#body_background_colorpicker').on('input', function () {
        $('#body_background_hexcolor').val(this.value);
    });
    $('#body_text_colorpicker').on('input', function () {
        $('#body_text_hexcolor').val(this.value);
    });
    $('#colorpicker').on('input', function () {
        $('#hexcolor').val(this.value);
    });
    $('#hexcolor').on('input', function () {
        $('#colorpicker').val(this.value);
    });

});
ns_leads = {
    get: function (params) {
      
        var action = params.action, requestFor = params.request_for;
        Params = { json_data: JSON.stringify(params) };
        ns_ajax.get(
            urls.leadsApi,
            Params,
            function (response) {
                //console.log(response);
                var serverResponse = $.parseJSON(response);
                if (serverResponse.response_status == "OK") {
                    if (action == 'leads') {
                        if (requestFor == 'lead_keyword') {
                            ns_util.callTmplBinder(serverResponse.data, ns_html_templates.leads, '#master_keywords_template', '#master_keywords_placeholder');
                        }
                        else if (requestFor == 'select-all') {
                            if (serverResponse.data.response.leads_list != '') {
                                $('.divNoResult').hide();
                                ns_util.callTmplBinder(serverResponse.data, ns_html_templates.leads, '#lead_template', '#lead_placeholder');
                                window.setTimeout(function () {
                                    $.each(serverResponse.data.response.leads_list, function (key, value) {
                                        if (key == 0)
                                            $('#lead_' + value.u_id).trigger('click');
                                    })
                                }, 250);
                            }
                            else {
                                $('.divNoResult').show();
                                $('#lead_placeholder, #lead_details_placeholder').empty();
                            }
                        }
                        else if (requestFor == 'load-more') {
                            $.each(serverResponse.data.response.leads_list, function (key, value) {
                                $('#btn_leadlm').attr({ 'data-previous': value.ROWNUMBER, 'data-cnt': value.total_count });
                            })
                            ns_util.callTmplBinderNotEmpty(serverResponse.data, ns_html_templates.leads, '#lead_sub_template', '#lead_sub_placeholder');
                        }
                        else if (requestFor == 'select') {
                            window.setTimeout(function () {
                                $('.timezone').timezones();
                            }, 250);
                        }
                        else if (requestFor == 'edit') {
                            $.each(serverResponse.data.response.lead_details, function (_key, value) {
                                $('#ddl_lead_types').attr('data-val', value.lead_type);
                                ns_dropdowns.get({ "action": "lead-types" });
                                $('#ddl_parent_cat').attr('data-val', value.lead_category_id);
                                ns_dropdowns.get({ "action": "category", "request_for": "parent" });
                                $('#ddl_lead_country').attr('data-val', value.lead_country);
                                ns_dropdowns.get({ "action": "location", "request_for": "country-list" });
                                $('#ddl_lead_channel').attr('data-val', value.lead_channel_id);
                                ns_dropdowns.get({ "action": "lead-channel" });
                                $('#ddl_title').val(value.lead_title);
                                $('#ddl_gender').val(value.lead_gender);
                                $('#txt_lead_name').val(value.lead_name);
                                $('#txt_company_name').val(value.lead_company_name);
                                $('#txt_dob').val(value.lead_dob);
                                $('#txt_lead_email').val(value.lead_email);
                                $('#txt_lead_mobile').val(value.lead_mobile);
                                $('#txt_lead_phone').val(value.lead_phone);
                                $('#txt_lead_note').val(value.lead_note);
                                $('#txt_lead_website').val(value.lead_website);
                                $('#txt_lead_address').val(value.lead_address);
                                $('#txt_lead_city').val(value.lead_city);
                                $('#txt_lead_county').val(value.lead_county);
                                $('#txt_lead_pincode').val(value.lead_postcode);
                                //Social media
                                $("#txt_facebook").val(value.facebook);
                                $("#txt_twitter").val(value.twitter);
                                $("#txt_instagram").val(value.instagram);
                                $("#txt_youtube").val(value.youtube);
                                $("#txt_linkdin").val(value.linkedin);
                                $("#txt_pinterest").val(value.pinterest);
                                window.setTimeout(function () {
                                    $(value.lead_details_json).each(function (_key1, value1) {
                                        $("#frmLeadDetails input[name=" + value1.field_id + "]").val(value1.field_value);
                                        $("#frmLeadDetails textarea[name=" + value1.field_id + "]").val(value1.field_value);
                                    });
                                }, 1000);
                                $(value.lead_custom_fields_json).each(function (key2, value2) {
                                    if (key2 == 0) {
                                        $('#txt_field0').val(value2.field);
                                        $('#txt_label0').val(value2.label);
                                    }
                                    else {
                                        var cntr = key2;
                                        var newRow = `<tr class='trCustomFields leadcfdtr' data-counter=` + cntr + `>
                                                <td>
                                                    <div class="group_lead">
                                                        <input class="input_text" id="txt_field`+ cntr + `" required = "required" type = "text" value=` + value2.field + `>
                                                        <label class="lablefilled"> Custom Fields</label>
                                                     </div>
                                                 </td>
                                                 <td>
                                                    <div class="group_lead">
                                                        <input class="input_text" id="txt_label`+ cntr + `" required="required" type="text" value=` + value2.label + `>
                                                        <label class="lablefilled"> Label</label>
                                                    </div>
                                                 </td>
                                                 <td>
                                                    <span class="table-remove btn btn-danger evt-leads-action" data-action="leads" data-request_for="delete-custom-fields" data-toggle="tooltip" title="Delete this row"><i class="zmdi zmdi-delete"></i></span>
                                                 </td></tr>`;
                                        $("#tblCustomFields").append(newRow);
                                        $('#addmorefield').attr('data-cntr', cntr);
                                    }
                                });
                                ns_leads.get({ "leads": { "u_id": value.u_id }, "action": action, "action_on": "leads_main", "request_for": "lead_keyword" });
                            })
                        }
                    }
                    else if (action == 'lead-activity') {
                        if (requestFor == 'load-more') {
                            $.each(serverResponse.data.response.activity_info, function (key, value) {
                                $('#btn_leadactlm').attr({ 'data-previous': value.ROWNUMBER, 'data-cnt': value.total_count });
                            })
                            ns_util.callTmplBinderNotEmpty(serverResponse.data, ns_html_templates.leads, '#leadActivity_sub_template', '#leadActivity_sub_placeholder');
                        }
                        else
                            ns_util.callTmplBinder(serverResponse.data, ns_html_templates.leads, '#leadActivity_template', '#leadActivity_placeholder');
                    }
                    else if (action == 'activity') {
                        if (requestFor == 'load-more') {
                            $.each(serverResponse.data.response.activity_info, function (key, value) {
                                $('#btn_activitylm').attr({ 'data-previous': value.ROWNUMBER, 'data-cnt': value.total_count });
                            })
                            ns_util.callTmplBinderNotEmpty(serverResponse.data, ns_html_templates.leads, '#activity_sub_template', '#activity_sub_placeholder');
                        }
                        else
                            ns_util.callTmplBinder(serverResponse.data, ns_html_templates.leads, '#activity_template', '#activity_placeholder');
                    }
                    else if (action == 'filter') {
                        ns_util.callTmplBinder(serverResponse.data, ns_html_templates.leads, '#lead_list_template', '#lead_list_placeholder');
                        ns_util.callTmplBinder(serverResponse.data, ns_html_templates.leads, '#lead_detail_template', '#lead_detail_placeholder');
                        ns_util.callTmplBinder(serverResponse.data, ns_html_templates.leads, '#lead_header_detail_template', '#lead_header_placeholder');
                    }
                    else if (action == 'notes') {
                        $.each(serverResponse.data.response.note_info, function (key, value) {
                            $('#btn_notelm').attr({ 'data-previous': value.ROWNUMBER, 'data-cnt': value.total_count });
                        })
                        ns_util.callTmplBinderNotEmpty(serverResponse.data, ns_html_templates.leads, '#lead_note_template', '#lead_note_loadmore_placeholder');
                    }
                    else if (action == 'files') {
                        if (requestFor == 'view') {
                            var result = $.parseJSON(serverResponse.response);
                            $("#iFrame").attr("src", result.Response);
                        }
                    }
                    else if (action == 'sales-pipeline') {
                        if (requestFor == 'select') {
                            var draggedStatus = 0;
                            ns_util.callTmplBinder(serverResponse.data, ns_html_templates.leads, '#sales_pipeline_template', '#sales_pipeline_placeholder');
                            window.setTimeout(function () {
                                $(init);
                                function init() {
                                    $(".droppable-area").sortable({
                                        connectWith: ".connected-sortable",
                                        start: function (event, ui) {
                                            draggedStatus = $(this).attr('id').split('-')[1];
                                        },
                                        receive: function (event, ui) {
                                            var uid = ui.item.attr('data-u_id');
                                            var statusId = $(this).attr('id').split('-')[1];
                                            strJsonString = {
                                                "leads": {
                                                    "u_id": uid, "status_id": statusId, "dragged_status": draggedStatus, "status_action": ''
                                                },
                                                "action": action, "action_on": 'leads_main', "request_for": 'action-status'
                                            };
                                            ns_leads.post(JSON.stringify(strJsonString), event);
                                        },
                                        stack: '.connected-sortable ul'
                                    }).disableSelection();
                                }
                            }, 250);
                        }
                        else if (requestFor == 'view-leadd') {
                            ns_util.callTmplBinder(serverResponse.data, ns_html_templates.leads, '#sp_lead_view_template', '#sp_lead_view_placeholder');
                            window.setTimeout(function () {
                                $.each(serverResponse.data.response.lead_info[0].lead_details, function (key, value) {
                                    var fieldValue = (value.field_value != '') ? value.field_value : 'NA';
                                    $('#' + value.field_id).text(fieldValue);
                                })
                            }, 250);
                        }
                        else if (requestFor == 'load-more') {
                            var statusId = params.leads.status_id;
                            var output = '';
                            $.each(serverResponse.data.response.lead_info, function (key, value) {
                                $('#lm-' + statusId).attr({ 'data-previous': value.ROWNUMBER });
                                output += `<li id="li-` + value.lead_uid + `" class="evt-leads-action" data-toggle="modal" data-u_id="` + value.lead_uid + `" data-action="sales-pipeline" data-request_for="view-lead" data-target="#view_details">
                                    <div class="comment-action">
                                        <h6 class="c_name">`+ value.lead_company_name + `</h6>
                                        <p class="c_msg col-grey">`+ value.lead_type_name + ` | ` + value.cat_name + `</p>
                                    </div>
                                </li>`
                            })
                            $('#ul-' + statusId).append(output);
                            //ns_util.callTmplBinderNotEmpty(serverResponse.data, ns_html_templates.leads, '#sp_lead_template', '#sp_lead_placeholder-' + statusId + '');
                        }
                    }
                    else if (action == 'filter-ddl') {
                        var options = "";
                        //lead tags
                        if (serverResponse.data.response[0].lead_tags != "") {
                            var tagList = "";
                            options = "<option value=0>All Tags</option>"
                            $.each(serverResponse.data.response[0].lead_tags, function (key, value) {
                                tagList += `<li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <input class="custom-control-input chkTag" id="`+ value.tag_id + `" type="checkbox">
                                        <label for="`+ value.tag_id + `" class="custom-control-label l_hgt24 text-primary">` + value.title + `</label>
                                    </div>
                                </li>`;
                                options += '<option value="' + value.tag_id + '">' + value.title + '</option>';
                            });
                            $('#tag_placeholder').html(tagList);
                            $('#ddl_tag_placeholder').html(options);
                        };
                        //lead types
                        if (serverResponse.data.response[1].lead_types != "") {
                            options = "<option value=0>All Lead Type</option>";
                            $.each(serverResponse.data.response[1].lead_types, function (key, value) {
                                options += '<option value="' + value.id + '">' + value.lead_type_name + '</option>';
                            });
                            $('#ddl_searchLeadType').html(options);
                        };
                        if (serverResponse.data.response[2].call_status != "") {
                            $('#answers_placeholder').empty();
                            options = '<option value="">All Call</option><option value="Call Back">Call Back</option>';
                            $.each(serverResponse.data.response[2].call_status, function (key, value) {
                                $('#answers_placeholder').append('<p><a class="btn btn-outline-primary btn-lg evt-leads-action" data-action="notes" data-request_for="create" data-type="ncallback" style="width:300px;cursor:pointer;" data-message="' + value.message + '">' + value.message + '</a></p>');
                                options += '<option value="' + value.message + '">' + value.message + '</option>';
                            })
                            $('#ddl_searchCallStatus').html(options);
                        };
                        if (serverResponse.data.response[3].lead_statuses != "") {
                            options = "<option value=0>All Lead Status</option>";
                            $.each(serverResponse.data.response[3].lead_statuses, function (key, value) {
                                options += '<option style="color:' + value.color_code + '" value="' + value.status_id + '">' + value.status_name + '</option>';
                            })
                            $('#ddl_searchLeadStatus').html(options);
                        };
                    }
                    else if (action == 'calendar') {
                        ns_util.callTmplBinder(serverResponse.data, ns_html_templates.leads, '#calendar_template', '#calendar_placeholder');
                    }
                    else if (action == 'events') {
                        $.each(serverResponse.data.response.events, function (key, value) {
                            $('#txt_event_title').val(value.event_title);
                            $('#is_private_event').prop('checked', value.is_private_event == 1 ? true : false);
                            $('#allday').prop('checked', value.is_all_day_event == 1 ? true : false);
                            if (value.is_all_day_event == 1) {
                                $('#allday').prop('checked', true);
                                $('#txt_event_start_time,#txt_event_end_time').attr('disabled', true);
                            }
                            else {
                                $('#allday').prop('checked', false);
                                $('#txt_event_start_time,#txt_event_end_time').attr('disabled', false);
                                $('#txt_event_start_time').val(value.event_start_time)
                                $('#txt_event_end_time').val(value.event_end_time);
                            }
                            $('#txt_event_start_date').val(value.event_start_date);
                            $('#txt_event_end_date').val(value.event_end_date);
                            $('#ddl_reminder').val(value.event_default_reminder);
                            $('#event_color').val(value.event_color);
                            $('#txt_event_location').val(value.event_location);
                            $('#txt_weburl').val(value.web_url);
                            $('#txt_desc').val(value.event_desc);
                            $("input[name=associate]").prop("checked", false);
                            $("input[name=associate][value=" + value.associate + "]").prop("checked", true);
                            if (value.attendees != "") {
                                $.each(value.attendees, function (key2, value2) {
                                    if (key2 == 0)
                                        $('#txt_attendees-0').val(value2.email)
                                    else {
                                        var cntr = key2;
                                        var divEmail = `<div class="row  event-attendees" data-counter="` + cntr + `">
                                    <div class="col pr-1">
                                        <div class="group_lead mb-3">
                                            <input type="text" id="txt_attendees-`+ cntr + `" class="input_text allow-email-only" value=` + value2.email + ` required="required">
                                            <label for="" class="lablefilled">Email Address</label>
                                        </div>
                                    </div>
                                    <div class="col pl-0">
                                        <a class="btn btn-danger btn-sm mt-2 mb-1 evt-leads-action" data-action="events" data-request_for="del-email-row" data-cntr="` + cntr + `"><i class="zmdi zmdi-delete"></i></a>
                                    </div>
                                </div>`;
                                        $('#add-email-placeholder').append(divEmail);
                                        $('#btnAddMoreEmail').attr('data-cntr', cntr);
                                    }
                                });
                            }
                            if (value.event_repeat_json != "") {
                                $('#chk_repeatevent').trigger('click').prop('checked', true);
                                $('#ddl_event_repeat_type').val(value.event_repeat_json.repeat_type);
                                if (value.repeat_type == 'Daily') {
                                    if (value.event_repeat_json.repeat_on == 'every_day') {
                                        $('#chk_everyday').prop('checked', true);
                                        $('#txt_everyday').val(value.event_repeat_json.repeat_value);
                                    }
                                    else
                                        $('#chk_everyweekday').prop('checked', true);
                                }
                                var repeatEnd = value.event_repeat_json.repeat_until;
                                if (repeatEnd != '') {
                                    $('#chk_until').prop('checked', true);
                                    $('#divUntilDate').show();
                                    $('#txt_untildate').val(value.repeat_until);
                                }
                                else
                                    $('#chk_noenddate').prop('checked', true);
                            }
                            else
                                $('#chk_repeatevent').prop('checked', false);
                        });
                    }
                    else
                        alertmsg.msg("Message", "No Data Found.", "E");
                }
                else {
                    if (serverResponse.response_code = "403")
                        $('.content').empty();
                    alertmsg.msg("Message", serverResponse.response_msg, "E");
                }
            });
    },
    actions: function (event) {
        //data-action="mail-template" data-request_for="summernote
        var strJsonString = "", next = 1, previous = 0;
        var action = $(event).attr("data-action"), action_on = "leads_main", RequestFor = $(event).attr("data-request_for");
        var requestFrom = $(event).attr("data-request_from");       
        if (action == 'leads') {
          
            if (RequestFor == "add-new") {
                $('#btn_copytoClip').html('Copy to clipboard').css({
                    "cursor": "",
                    "pointer-events": ""
                });
                if ($(event).attr('data-action-type') == 'pipeline') {
                    $('#btn_submit_lead').attr('data-status-id', $(event).attr('data-status-id'));
                }
                $('#addmorefield').attr('data-cntr', '0');
                $('#lead_header').html('<i class="zmdi zmdi-plus-circle-o-duplicate">&nbsp;</i>Add Lead');
                $('#btn_submit_lead').html('Create').attr('data-request_for', 'create').attr('data-u_id', '0');
                $('#ddl_lead_types, #ddl_parent_cat,#ddl_lead_country,#ddl_lead_channel').attr('data-val', '0');
                $('input[type=text]').val('');
                $("select").val('0');
                $('#fields_binder_placeholder, .leadcfdtr').empty();
                $(".amsify-select-tag").remove();
                ns_dropdowns.get({ "action": "lead-types" });
                ns_dropdowns.get({ "action": "location", "request_for": "country-list" });
                ns_leads.get({ "action": "leads", "action_on": action_on, "request_for": "lead_keyword" });
                ns_dropdowns.get({ "action": "category", "request_for": "parent" });
                ns_dropdowns.get({ "action": "lead-channel" });
            }
            else if (RequestFor == "add-custom-fields") {
                var index = $(event).attr('data-cntr');
                var cntr = parseInt(index) + 1;
                var newRow = $("<tr class='trCustomFields leadcfdtr' data-counter='" + cntr + "'>");
                var cols = "";
                cols += `<td>
                            <div class="group_lead">
                                <input class="input_text" id="txt_field`+ cntr + `" required = "required" type = "text">
                                <label class="lablefilled"> Custom Fields</label>
                             </div >
                         </td >
                         <td>
                            <div class="group_lead">
                                <input class="input_text" id="txt_label`+ cntr + `" required="required" type="text">
                                <label class="lablefilled"> Label</label>
                            </div>
                         </td>
                         <td>
                            <span class="table-remove btn btn-danger mb-4 evt-leads-action" data-action="leads" data-request_for="delete-custom-fields" data-toggle="tooltip" title="Delete this row"><i class="zmdi zmdi-delete"></i></span>
                         </td>`;
                newRow.append(cols);
                if (requestFrom == "edit")
                    $("#tblCustomFieldsEdit").append(newRow);
                else
                    $("#tblCustomFields").append(newRow);
                $(event).attr('data-cntr', cntr);
            }
            else if (RequestFor == "delete-custom-fields") {
                if (confirm("Are you sure you want to delete this?")) {
                    $(event).closest("tr").remove();
                }
            }
            else if (RequestFor == "edit") {
                
                $('#addmorefield').attr('data-cntr', '0');
                $('#lead_header').html('<i class="zmdi zmdi-edit">&nbsp;</i>Edit Lead');
                $('#fields_binder_placeholder, .leadcfdtr').empty();
                var u_id = $(event).attr('data-u_id');
                $('#btn_submit_lead').html('Update').attr('data-request_for', 'update').attr('data-u_id', u_id);
                ns_leadsMain.get({ "leads": { "lead_type": $(event).attr('data-lead-type') }, "action": "settings", "action_on": action_on, "request_for": "select" });
                ns_leads.get({ "leads": { "u_id": u_id }, "action": action, "action_on": action_on, "request_for": RequestFor });
            }
            else if (RequestFor == "select") {
                $('.media').removeClass('active1strow');
                $(event).addClass("active1strow");
                ns_leads.get({
                    "leads": { "u_id": $(event).attr('data-u_id') },
                    "action": action, "action_on": action_on, "request_for": RequestFor, "previous": previous, "next": next
                });
                strJsonString = { "leads": { "u_id": $(event).attr('data-u_id') }, "action": action, "action_on": action_on, "request_for": "read_status" };
                ns_leads.post(JSON.stringify(strJsonString), event);
            }
            else if (RequestFor == "refresh") {
                $('.head_btn').hide();
                $('#txt_search,#txt_daterange,#ddl_searchCallStatus').val('');
                $('#ddl_tag_placeholder,#ddl_searchLeadType,#ddl_searchLeadStatus').val('0');
                $('#btnSearchLead').attr({ 'data-delete-status': '0', 'data-archieve-status': '0' });
                strJsonString = { "request_for": "select-all", "action": action, "action_on": action_on, "previous": previous, "next": next };
                ns_leads.get(strJsonString);
            }
           
            else if (RequestFor == 'add-master-keyword') {
                $('.amsify-suggestags-input').val($(event).attr('data-keyword-title')).focus();
            }
            else if (RequestFor == 'filter') {
                var fromDate = "", toDate = "";
                var dateRange = $('#txt_daterange').val();
                if (dateRange != '') {
                    fromDate = dateRange.split('-')[0].trim();
                    toDate = dateRange.split('-')[1].trim();
                }
                var title = $('#ddl_tag_placeholder').val();
                var leadType = $('#ddl_searchLeadType').val();
                var strSearch = $('#txt_search').val().trim();
                var leadNote = $('#ddl_searchCallStatus').val();
                var leadStatus = $('#ddl_searchLeadStatus').val();
                if (title > 0 || leadType > 0 || leadStatus > 0 || strSearch.length > 0 || leadNote != '' || dateRange != '') {
                    strJsonString = {
                        "leads": {
                            "title": title, "lead_type": leadType, "lead_note": leadNote, "status_id": leadStatus,
                            "str_search": strSearch, "from_date": fromDate, "to_date": toDate,
                            "delete_status": $(event).attr('data-delete-status'),
                            "archieve_status": $(event).attr('data-archieve-status')
                        },
                        "action": action,
                        "action_on": action_on,
                        "request_for": 'select-all',
                        "previous": previous,
                        "next": next
                    };
                    ns_leads.get(strJsonString);
                }
            }
            else if (RequestFor == 'action-type') {
                $('#txt_status_label').val($(event).text());
                var id = $(event).attr('data-id'), u_id = $('#btn_lead_statuses').attr('data-u_id'), type = $(event).attr('data-type');
                if (type == 'input' || type == 'date') {
                    //$('#lead_statuses').modal('show');
                    $('#txt_status_comment').val('');
                    $('#btnSubmitCmnt').attr({ 'data-u_id': u_id, 'data-id': id, 'data-type': type, 'data-status': $(event).text() });
                    if (type == 'input') {
                        $('#divDate').hide();
                        $('#divComment').show();
                        $('#status_header').html('Enter a comment');
                    }
                    else {
                        $('#divDate').show();
                        $('#divComment').hide();
                        $('#status_header').html('Enter a date');
                    }
                }
                else {
                    strJsonString = {
                        "leads": { "u_id": u_id, "status_id": id },
                        "action": action, "action_on": action_on, "request_for": "action-status"
                    };
                    ns_leads.post(JSON.stringify(strJsonString), event);
                }
            }
            else if (RequestFor == 'action-status') {
                var statusAction = "";
                if ($(event).attr('data-type') == 'input') {
                    statusAction = $('#txt_status_comment').val();
                    if (statusAction.length == 0) {
                        $("#txt_status_comment").focus();
                        alertmsg.msg("Message", "Please enter a comment", "W");
                        return false;
                    }
                }
                else {
                    statusAction = $('#txt_date').val();
                    if (statusAction.length == 0) {
                        $("#txt_date").focus();
                        alertmsg.msg("Message", "Please choose a date", "W");
                        return false;
                    }
                }
                strJsonString = {
                    "leads": { "u_id": $(event).attr('data-u_id'), "status_id": $(event).attr('data-id'), "status_action": statusAction },
                    "action": action, "action_on": action_on, "request_for": RequestFor
                };
                ns_leads.post(JSON.stringify(strJsonString), event);
            }
            else if (RequestFor == 'favourite') {              
                isFav = $(event).attr('data-is-favourite') == 0 ? 1 : 0;
                strJsonString = {
                    "leads": { "u_id": $(event).attr('data-u_id'), "is_fav": isFav },
                    "action": action,
                    "action_on": action_on,
                    "request_for": RequestFor
                };
                ns_leads.post(JSON.stringify(strJsonString), event);
            }
            else if (RequestFor == 'verify-email') {
                if (confirm("Are you sure want to verify it manually ?")) {
                    strJsonString = {
                        "leads": { "u_id": $(event).attr('data-u_id') },
                        "action": action,
                        "action_on": action_on,
                        "request_for": RequestFor
                    };
                    ns_leads.post(JSON.stringify(strJsonString), event);
                }
            }
            else if (RequestFor == 'add-to-archieve') {
                if (confirm("Are you sure want to archieve this lead ?")) {
                    strJsonString = {
                        "leads": { "u_id": $(event).attr('data-id') },
                        "action": action,
                        "action_on": action_on,
                        "request_for": RequestFor
                    };
                    ns_leads.post(JSON.stringify(strJsonString), event);
                }
            }
           
        }
        else if (action == 'sales-pipeline') {
            if (RequestFor == "add-new-status") {
                $('#ddl_type,#txt_name').val('');
                $('#chk_gstatus').prop('checked', false);
            }
            else if (RequestFor == "view-lead") {
                ns_leads.get({
                    "leads": { "u_id": $(event).attr('data-u_id') },
                    "action": action, "action_on": action_on, "request_for": RequestFor
                });
            }
            else if (RequestFor == "load-more") {
                if ($(event).attr("data-cnt") == $(event).attr("data-previous")) {
                    alertmsg.msg("Message", "No more results found!.", "I");
                    return false;
                }
                previous = parseInt($(event).attr("data-previous"));
                strJsonString = {
                    "leads": { "status_id": $(event).attr("data-status-id") },
                    "action": action, "action_on": action_on, "request_for": RequestFor, "previous": previous, "next": next
                };
                ns_leads.get(strJsonString);
            }
            else if (RequestFor == "delete") {
                if (confirm("Are you sure you want to delete this?")) {
                    strJsonString = {
                        "leads": { "status_id": $(event).attr("data-status-id") },
                        "action": action, "action_on": action_on, "request_for": RequestFor
                    };
                    ns_leads.post(JSON.stringify(strJsonString), event);
                }
            }
            else if (RequestFor == "refresh") {
                ns_leads.get({ "action": action, "action_on": action_on, "request_for": "select", "route": moduleRoute, "previous": "0", "next": "5" });
            }
        }
        else if (action == 'tag') {
            if (RequestFor == "show-tag") {
                // alert(event.id.split('_')[1])
                if ($(event).prop('checked')) {
                    $('#btn_applytag').attr('data-id', event.id.split('_')[1]);
                    $('#btn_archieve').attr('data-id', event.id.split('_')[1]);
                    $('input[type="checkbox"]').not(event).prop('checked', false);
                    $('.head_btn').show();
                }
                else {
                    $('.head_btn').hide();
                }
            }
            else if (RequestFor == 'create' | RequestFor == 'lead-tag-create') {
                strJsonString = ns_validations.tags(event);
                if (strJsonString.length > 0)
                    ns_leads.post(strJsonString, event);
            }
            else if (RequestFor == "delete") {
                var checkstr = confirm('are you sure want to delete this?');
                if (checkstr == true) {
                    strJsonString = {
                        "lead_tags": [{ "u_id": $(event).attr('data-id') }],
                        "action": action, "action_on": action_on, "request_for": RequestFor
                    };
                    // ns_leads.post(JSON.stringify(strJsonString), event);
                }
            }
        }
        else if (action == 'comments') {
            if (RequestFor == "create") {
                strJsonString = ns_validations.comments(event);
                if (strJsonString.length > 0)
                    ns_leads.post(strJsonString, event);//calling post api here
            }
            if (RequestFor == "delete") {
                var u_id = $(event).attr('data-u_id');
                strJsonString = {
                    "leads": { "u_id": u_id },
                    "action": "comments",
                    "action_on": action_on,
                    "request_for": "delete",
                };
                if (confirm("Are you sure you want to delete this comment?")) {
                    if (u_id != 0)
                        ns_leads.post(JSON.stringify(strJsonString), event);//calling post api here
                }
            }
            if (RequestFor == "cancel") {
                var id = $(event).attr('data-activity-id');
                $('#txt_comment-' + id).val('');
                $('#divcollapse-' + id).removeClass('show');
            }
        }
        else if (action == 'message') {
            if (RequestFor == "create") {
                strJsonString = ns_validations.message(event);
                if (strJsonString.length > 0)
                    ns_leads.post(strJsonString, event);//calling post api here
            }
            else if (RequestFor == "open" || RequestFor == 'resend-email') {
                ClearModalData('#emailsend');
                // $(".tab-pane").show();
                $('#txt_msg').summernote('code', '');
                $('#btn_send_msg').html('<i class="zmdi zmdi-upload">&nbsp;</i>Send').css({
                    "cursor": "",
                    "pointer-events": ""
                });
                $('#leademail').prop('checked', true);
                $('.clsemail').show();
                $('#leadsms').prop('checked', false);
                $('.clssms').hide();
                $('#txt_msg_to').val($(event).attr("data-email"));
                if (RequestFor == 'resend-email') {
                    $('#txt_msg_subject').val($(event).attr('data-subject'));
                    $('#txt_msg').summernote('code', $('#view_email_placeholder').html());
                    $('#leadsms').prop('disabled', true);
                }
                else {
                    $('#txt_smsmsg_mobile').val($(event).attr("data-mobile"));
                    ns_templates.get({ "action": action, "action_on": action_on, "request_for": "template-list" });
                    var strJsonString = {
                        "leads": { "u_id": $('#span_leaduid').text(), "template_id": 0 },
                        "action": 'mail-template', "action_on": action_on, "request_for": "org-template"
                    };
                    ns_templates.get(strJsonString);
                }
            }
            else if (RequestFor == "email" || RequestFor == "sms") {
                if (RequestFor == 'email') {
                    $('.clsemail').show()
                    $('.clssms').hide();
                    $('#leadsms').prop('checked', false);
                    if ($('#leademail').prop('checked')) {
                        strJsonString = {
                            "leads": { "lead_name": "Lead_Template" },
                            "action": "message",
                            "action_on": action_on,
                            "request_for": "email"
                        };
                        ns_templates.get(strJsonString);
                    }
                }
                else {
                    $('.clsemail').hide();
                    $('.clssms').show();
                    $('#leademail').prop('checked', false);
                }
            }
            else if (RequestFor == "read_status") {
                var u_id = $(event).attr('data-u_id');
                strJsonString = {
                    "leads": { "u_id": u_id },
                    "action": action, "action_on": action_on, "request_for": RequestFor
                };
                if (u_id != 0)
                    ns_leads.post(JSON.stringify(strJsonString), event);//calling post api here
            }
            else if (RequestFor == "select") {
                ns_leads.get({ "leads": { "u_id": $(event).attr('data-u_id') }, "action": action, "action_on": action_on, "request_for": RequestFor });
            }
            else if (RequestFor == 'view-email') {
                $('#view_email_placeholder').html($(event).attr('data-message'));
                $('#btnReSendEmail').attr({
                    "data-email": $(event).attr('data-email'),
                    "data-subject": $(event).attr('data-subject')
                })
            }
            else if (RequestFor == 'org-template') {
                var strJsonString = {
                    "leads": { "u_id": $('#span_leaduid').text(), "template_id": $(event).attr('data-template-id') },
                    "action": 'mail-template', "action_on": "leads_main", "request_for": RequestFor
                };
                ns_templates.get(strJsonString);
            }
            else if (RequestFor == 'discard-email') {
                ModalHide('#emailsend');
            }
        }
        else if (action == "mail-template") {
            if (RequestFor == "summernote") {
                $('#template_body').summernote('code', '');
            }
            else if (RequestFor == 'create' || RequestFor == 'update') {
                strJsonString = ns_validations.mailTemplate(event); //validate user info here
                if (strJsonString !== false)
                    ns_organization.post(strJsonString); //calling post api here
            }
        }
        else if (action == 'files') {
            if (RequestFor == "upload") {
                ns_validations.files(event);
            }
            else if (RequestFor == "add-new") {
                $('.showicon').attr('src', '').hide();
                $('.imagePreview').css('background-image', '').hide();
                $('#txt_doc_name, #txt_description, #filename').val('');
                $('.fileupload, .spanerror').hide();
                $('.fileupload').html('<i class="zmdi zmdi-upload">&nbsp;</i>Save').css({
                    "cursor": "",
                    "pointer-events": ""
                });
            }
            else if (RequestFor == "delete") {
                strJsonString = {
                    "org_uid": $('#span_orguid').text(),
                    "lead_uid": $('#span_leaduid').text(),
                    "u_id": $(event).attr('data-u_id'),
                    "file_url": $(event).attr('data-file-name'),
                    "action": action,
                    "action_on": action_on,
                    "request_for": RequestFor,
                };
                if (confirm("Are you sure you want to delete this file?")) {
                    if (u_id != 0)
                        ns_leads.post(JSON.stringify(strJsonString), event);//calling post api here
                }
            }
            else if (RequestFor == "view") {
                $('#ImgFrame').modal('show');
                $('#file_header').html($(event).attr("data-title"));
                ns_leads.get({
                    "org_uid": $('#span_orguid').text(),
                    "file_url": $(event).attr('data-file-name'),
                    "action": action,
                    "action_on": action_on,
                    "request_for": RequestFor
                });
            }
        }
        else if (action == 'notes') {
            if (RequestFor == "create") {
                strJsonString = ns_validations.note(event);
                if (strJsonString.length > 0)
                    ns_leads.post(strJsonString, event);//calling post api here
            }
            else if (RequestFor == 'add-note') {
                $('#txt_note').val('');
                $('#btnAddNote').hide();
                $('#divAddNotes').show();
            }
            else if (RequestFor == 'cancel') {
                $('#divAddNotes').hide();
                $('#btnAddNote').show();
            }
            else if (RequestFor == "load_more") {
                if ($(event).attr("data-cnt") == $(event).attr("data-previous")) {
                    alertmsg.msg("Message", "No more results found!.", "I");
                    return false;
                }
                previous = parseInt($(event).attr("data-previous"));
                ns_leads.get({
                    "leads": { "u_id": $('#span_leaduid').text() },
                    "action": action, "action_on": action_on, "request_for": "select", "previous": previous, "next": next
                });
            }
            else if (RequestFor == 'answers-list') {
                $('#cfsection').hide();
                $('#clsection').show();
                $('input[type=text]').val('');
                telNo = $(event).attr('data-phone') != "" ? $(event).attr('data-phone') : 'NA';
                MobNo = $(event).attr('data-mobile') != "" ? $(event).attr('data-mobile') : 'NA';
                $('#telMobNo_placeholder').html(`<span><b>Telephone : </b>` + telNo + `</span> | <span><b>Mobile : </b>` + MobNo + `</span>`);
            }
            else if (RequestFor == 'call') {
                //var type = $(event).attr('data-type');
                //var leadNote = null, personName = null, callBackDate = null, callBackTime = null;
                //if (type == 'callback') {
                //    leadNote = $('#call_label').val().trim();
                //    personName = $('#person_name').val().trim();
                //    callBackDate = $('#callback_date').val().trim();
                //    callBackTime = $('#callback_time').val().trim();
                //    if (personName.length == 0) {
                //        $('#person_name').focus();
                //        msg = "Please pick a meeting's date";
                //        return false;
                //    }
                //    else if (callBackDate.length == 0) {
                //        $('#callback_date').focus();
                //        msg = "Please pick a date";
                //        return false;
                //    }
                //    else if (callBackTime.length == 0) {
                //        $('#callback_time').focus();
                //        msg = "Please pick a time";
                //        return false;
                //    }
                //    else if (!IsTime(startTime)) {
                //        $('#callback_time').focus();
                //        msg = "Please enter a valid time";
                //        return false;
                //    }
                //}
                //else
                //    leadNote = $(event).attr('data-message');
                //var note = {
                //    "leads": {
                //        u_id: $('#span_leaduid').text(),
                //        lead_note: leadNote,
                //        "callback": { "person_name": personName, "callback_date": callBackDate, "callback_time": callBackTime }
                //    },
                //    "action": action,
                //    "action_on": action_on,
                //    "request_for": RequestFor,
                //};
                //ns_leads.post(JSON.stringify(note));
            }
            else if (RequestFor == 'call-back') {
                $('input[type=text]').val('');
                $('#call_label').val($(event).attr('data-message'));
                $('#clsection').hide();
                $('#cfsection').show();
            }
            else if (RequestFor == 'cancel-call') {
                $('#cfsection').hide();
                $('#clsection').show();
            }
        }
        else if (action == 'schedule') {
            if (RequestFor == 'show-hide') {
                var meetingType = $('input[name="meeting-type"]:checked').val();
                $('#external-link').val('').hide();
                if (meetingType == 'Video') {
                    $('.video-section,#additional').show();
                    $('.phone-section,.inperson-section').hide();
                    $('#btnSendInvitation').html('Send video invitation');
                }
                else if (meetingType == 'Phone') {
                    $('.phone-section,#additional').show();
                    $('.video-section,.inperson-section').hide();
                    $('#btnSendInvitation').html('Send phone invitation');
                }
                else {
                    $('.inperson-section').show();
                    $('.video-section,.phone-section,#additional').hide();
                    $('#btnSendInvitation').html('Send In-person invitation');
                }
            }
            else if (RequestFor == 'open') {
                $('#btnSendInvitation').html("Send video invitation").css({
                    "cursor": "",
                    "pointer-events": ""
                });
                $('#addmore_placeholder').empty();
                $('input[type=text],textarea').val('');
                $('#txt_MeetingWithPerson').val($(event).attr('data-lead-name'));
                $('#txt_Phone').val($(event).attr('data-phone'));
                $('#btn_lsAddmore').attr('data-counter', '0');
                $('#video').prop('checked', true);
                $('.video-section,.additional').show();
                $('.phone-section,.inperson-section').hide();
                ns_templates.get({
                    "leads": { "u_id": $('#span_leaduid').text() },
                    "action": 'mail-template', "action_on": action_on, "request_for": "schedule-template"
                });
            }
            else if (RequestFor == 'link-type') {
                var linkType = $('input[name="link-type"]:checked').val();
                if (linkType == 'External') {
                    $('#external-link').show();
                    $('#txt_ExternalLink').val('');
                }
                else {
                    $('#external-link').hide();
                    $('#txt_ExternalLink').val('');
                }
            }
            else if (RequestFor == 'create') {
                strJsonString = ns_validations.scheduleMeeting(event);
                if (strJsonString != undefined)
                    ns_leads.post(strJsonString, event);
            }
            else if (RequestFor == 'add-more') {
                var index = $(event).attr('data-counter');
                var counter = parseInt(index) + 1;
                var row = '';
                row += `<div class="row msrow" data-counter="` + counter + `">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for=""><strong>Date</strong></label>
                                    <input type="text" class="form-control datepicker" id="txt_date`+ counter + `" placeholder="dd/mm/yyyy" autocomplete="off">
                                </div>
                            </div>              
                        <div class="col-md-2 col-sm-5 pr-0">
                            <div class="form-group">
                                <label for=""><strong>Start Time</strong></label>
                                <input type="text" id="txt_starttime`+ counter + `" class="form-control timepicker" autocomplete="off" />
                            </div>
                        </div>
                        <div class="col-md-1 col-1 col-sm-1 pl-0 pr-0 pt-4 mt-1 text-center"><strong>to</strong> </div>
                        <div class="col-md-2 col-sm-5 pl-0">
                            <div class="form-group">
                                <label for=""><strong>End Time</strong></label>
                                <input type="text" id="txt_endtime`+ counter + `" class="form-control timepicker" autocomplete="off" />
                            </div>
                        </div>
                        <div class="col-md-1 col-1 col-sm-1 pl-0 pr-0 pt-4 mt-1 text-center"><a class="btn btn-danger evt-leads-action" data-action="schedule" data-request_for="delete-row" data-counter="`+ counter + `">Delete</a></div>
                    </div>`;
                $('#addmore_placeholder').append(row);
                $('#txt_date' + counter).val($('#txt_date' + index).val());
                $('#txt_starttime' + counter).val($('#txt_starttime' + index).val());
                $('#txt_endtime' + counter).val($('#txt_endtime' + index).val());
                $(event).attr('data-counter', counter);
                datePicker();
                timePicker();
            }
            else if (RequestFor == 'delete-row') {
                $(event).closest('.msrow').remove();
            }
        }
    },
    post: function (params, event) {
        var obj = JSON.parse(params), action = obj.action, RequestFor = obj.request_for;
        ns_ajax.post(
            urls.leadsApi,
            params,
            function (response) {
                var serverResponse = JSON.parse(response);
                if (RequestFor == 'read_status')
                    return false;
                if (serverResponse.response_status == "OK") {
                    alertmsg.msg("Message", serverResponse.response_msg, "S");

                    $('.spanNoDataFound').hide();
                    if (action == 'leads') {
                        if (RequestFor == 'create' || RequestFor == 'update') {
                            ClearModalDataWithoutCheckbox();
                            $(event).html('Save').attr('data-request_for', 'create');
                            ModalHide('#Discount-Code');
                            ns_leads.get({ "leads": { "u_id": $(event).attr('data-u_id') }, "action": action, "action_on": "leads", "request_for": "select" });
                        }
                        else if (RequestFor == 'action-status') {
                            var actionType = $(event).attr('data-action-type');
                            if (actionType == 'pipeline') {
                                var oldStatus = $('#btn_lead_statuses').attr('data-status');
                                var newStatus = obj.leads.status_id;
                                $('#ul-' + newStatus).append($('#li-' + obj.leads.u_id).clone());
                                $('#ul-' + oldStatus + ' #li-' + obj.leads.u_id).remove();
                                var oldCount = $("#count-" + oldStatus).text();
                                var newCount = $("#count-" + newStatus).text();
                                $("#count-" + oldStatus).text(parseInt(oldCount) - 1);
                                $("#count-" + newStatus).text(parseInt(newCount) + 1);
                                ModalHide('#view_details');
                            }
                            ModalHide('#lead_statuses');
                            $('#btn_lead_statuses').text($('#ddlMenu-' + obj.leads.status_id).text());
                        }
                        else if (RequestFor == "delete") {
                            ns_leads.get({
                                "leads": {
                                    "archieve_status": $(event).attr('data-archieve-status'),
                                    "delete_status": $(event).attr('data-delete-status')
                                },
                                "action": "leads", "action_on": "leads_main", "request_for": "select-all", "previous": "0", "next": "10"
                            });
                        }
                        else if (RequestFor == "favourite") {
                            $(event).attr('data-is-favourite', obj.leads.is_fav)
                            if (obj.leads.is_fav == 1) {
                                $(event).removeClass('zmdi zmdi-favorite-outline');
                                $(event).addClass('zmdi zmdi-favorite').attr('title', 'Remove from favourite lead');
                            }
                            else {
                                $(event).removeClass('zmdi zmdi-favorite');
                                $(event).addClass('zmdi zmdi-favorite-outline').attr('title', 'Set as favourite lead');
                            }
                        }
                        else if (RequestFor == 'verify-email') {
                            $(event).hide();
                            $('#email-' + obj.leads.u_id).removeClass('col-red').addClass('col-green').html('Verified');
                            $('#labelemailVerify').removeClass('col-red').addClass('col-green').html(' Verified');
                        }
                        else if (RequestFor == 'add-to-archieve') {
                            $('.clmn,.head_btn').toggle();
                            ns_leads.get({ "action": "leads", "action_on": "leads_main", "request_for": "select-all", "previous": "0", "next": "10" });
                        }
                    }
                    else if (action == 'sales-pipeline') {
                        if (RequestFor == 'action-status') {
                            var oldStatus = obj.leads.dragged_status;
                            var newStatus = obj.leads.status_id;
                            var oldCount = $("#count-" + oldStatus).text();
                            var newCount = $("#count-" + newStatus).text();
                            $("#count-" + oldStatus).text(parseInt(oldCount) - 1);
                            $("#count-" + newStatus).text(parseInt(newCount) + 1);
                            $('#btndel-' + newStatus).attr('disabled', true);
                            if ($("#count-" + oldStatus).text() > 0)
                                $('#btndel-' + oldStatus).attr('disabled', true);
                            else
                                $('#btndel-' + oldStatus).attr('disabled', false);
                        }
                        else if (RequestFor == 'delete') {
                            ns_leads.get({ "action": action, "action_on": "leads_main", "request_for": "select", "route": moduleRoute, "previous": "0", "next": "5" });
                        }
                    }
                    else if (action == 'comments') {
                        if (RequestFor == 'create') {
                            // ns_util.callTmplBinderNotEmpty(serverResponse.data, ns_html_templates.leads, '#comment_template', '#Comment_Placeholder');
                            $('#txt_comment-' + obj.leads.activity_id).val('');
                            $('#divcollapse-' + obj.leads.activity_id).removeClass('show');
                        }
                        if (RequestFor == 'delete') {
                            $('#cmnt_' + obj.leads.u_id).remove();
                        }
                    }
                    else if (action == 'message') {
                        if (RequestFor == 'create') {
                            ModalHide('#emailsend');
                            $.each(serverResponse.data.response.msg_info, function (key, value) {
                                var messageType = value.message_type;
                                if (messageType == 'EMAIL') {
                                    $('#divNoEmailFnd').hide();
                                    // ns_util.callTmplBinderNotEmpty(serverResponse.data, ns_html_templates.leads, '#lead_email_template', '#lead_email_placeholder');
                                }
                                else {
                                    $('#divNoMsgFnd').hide();
                                    // ns_util.callTmplBinderNotEmpty(serverResponse.data, ns_html_templates.leads, '#lead_sms_template', '#lead_sms_placeholder');
                                }
                            })
                        }
                        if (RequestFor == 'delete') {
                            var messageType = $(event).attr('data-message-type');
                            if (messageType == "email")
                                $('#email_' + obj.leads.u_id).remove();
                            else
                                $('#divsms_' + obj.leads.u_id).remove();
                        }
                        if (RequestFor == 'read_status') {
                            $(event).html('<i class="zmdi zmdi-email-open"></i>');
                        }
                    }
                    else if (action == 'notes') {                      
                        if (RequestFor == 'create') {
                            $('#divAddNotes').hide();
                            $('#btnAddNote').show();
                            ModalHide('#contact');
                        }
                        var uid = $('#span_leaduid').text();
                     
                        if (obj.leads.lead_note_type == 'call')
                            $('#clstatus_' + uid).html('<span class="badge badge-primary">' + obj.leads.lead_note + '</span>&nbsp;');


                        console.log(serverResponse.data.response.note_info[0]);
                        // ns_util.callTmplBinderNotEmpty(serverResponse.data, ns_html_templates.leads, '#lead_note_template', '#lead_note_placeholder');
                    }
                    else if (action == 'files') {
                        if (RequestFor == 'delete') {
                            $('#tr_' + obj.u_id).remove();
                        }
                    }
                    else if (action == 'tag') {
                        if (RequestFor == 'create') {
                            $('#txt_label').val('');
                            $.each(serverResponse.data.response.lead_tags, function (_i, value) {
                                var tagResponse = `<li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <input class="custom-control-input chkTag" id="`+ value.tag_id + `" type="checkbox">
                                        <label for="`+ value.tag_id + `" class="custom-control-label l_hgt24 text-primary">` + value.title + `</label>
                                    </div>
                                </li>`;
                                $('#tag_placeholder').append(tagResponse);
                            });
                        }
                        else if (RequestFor == 'lead-tag-create') {
                            $('.chkTag,.all_slct').prop('checked', false);
                            $('.clmn,.head_btn').toggle();
                            $('#tag_' + obj.leads.u_id).empty();
                            $.each(serverResponse.data.response.lead_tags, function (key, value) {
                                $('#tag_' + obj.leads.u_id).append('<span id="spantag_' + value.u_id + '" class="badge badge-primary evt-leads-action" role="button" data-action="tag" data-request_for="delete" data-id="' + value.u_id + '" style="cursor:pointer;" data-toggle="tooltip" title="Delete">' + value.title + '&nbsp;&nbsp;<i class="zmdi zmdi-close"></i></span>&nbsp;');
                            });
                        }
                        else if (RequestFor == 'delete') {
                            $(event).remove();
                        }
                    }
                    else if (action == 'schedule') {
                        if (RequestFor == 'create' || RequestFor == 'update') {
                            ClearModalData();
                            ModalHide('#schedule');
                            $.each(serverResponse.data.response.msg_info, function (key, value) {
                                $('#divNoEmailFnd').hide();
                                // ns_util.callTmplBinderNotEmpty(serverResponse.data, ns_html_templates.leads, '#lead_email_template', '#lead_email_placeholder');
                            });
                        }
                    }
                    else if (action == 'events') {
                        ModalHide('#addevent');
                        ModalHide('#delevent');
                        ns_leads.get({ "events": { "requested_date": "", "calendar_view_type": "month" }, "action": "calendar", "action_on": "leads_main", "request_for": "current" });
                    }
                }
                else if (serverResponse.response_status == "FAILED") {
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
}
/*Name: Org Leads Details Insertion & Settings*/
ns_leadsMain = {
    get: function (params) {
        var action = params.action;
        params = { json_data: JSON.stringify(params) };
        ns_ajax.get(
            urls.leadsApi,
            params,
            function (response) {
                var serverResponse = $.parseJSON(response);
                if (serverResponse.response_status == "OK") {
                    if (action == "leads-main") {
                        $("#csv_ddl_placeholder, #dbfields_placeholder").empty();
                        var csv = $('#csvfile');
                        var csvFile = csv[0].files[0];
                        var ext = csv.val().split(".").pop().toLowerCase();
                        if ($.inArray(ext, ["csv"]) === -1) {
                            alert('upload csv');
                            return false;
                        }
                        if (csvFile != undefined) {
                            reader = new FileReader();
                            reader.onload = function (e) {
                                //var rows = e.target.result.split("\n");
                                var rows = e.target.result.split(/\r\n|\n/);
                                $('#spnCsvRowCount').html('Total: ' + (rows.length - 2) + ' record(s)');
                                for (var i = 0; i < rows.length; i++) {
                                    var cells = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
                                    if (cells.length > 1) {
                                        for (var j = 0; j < cells.length; j++) {
                                            if (i == 0) {
                                                $("#csv_ddl_placeholder").append('<select id="csvddl-' + j + '" class="custom-select select_f csvddl"><option value=' + cells[j] + '>' + cells[j] + '</option></select>');
                                                var output = '<select id="dbddl-' + j + '" class="custom-select select_f dbddl"><option value="0">Choose Field</option>';
                                                $.each(serverResponse.data.response[0].contact_json, function (index, value) {
                                                    output += '<option value=' + value.field_name + '>' + value.field_name + '</option>';
                                                });
                                                output += '</select>';
                                                $("#dbfields_placeholder").append(output);
                                                $('#dbddl-' + j + ' option').each(function () {
                                                    if (this.value == $('#csvddl-' + j).val()) {
                                                        $('#dbddl-' + j + '').val($('#csvddl-' + j).val());
                                                    }
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                            reader.readAsText(csvFile);
                            $('#btnvwsbmt,.csvddl').show();
                        }
                        else
                            alert("This browser does not support HTML5.");
                    }
                    else if (action == "settings") {
                        ns_util.callTmplBinder(serverResponse.data, ns_html_templates.leads, '#fields_binder_template', '#fields_binder_placeholder');
                        window.setTimeout(function () {
                            datePicker();
                        }, 250);
                    }
                }
                else {
                    if (serverResponse.response_code = "403")
                        $('.content').empty();
                    alertmsg.msg("Message", serverResponse.response_msg, "E");
                }

            });
    },
    post: function (params, event) {
        var obj = JSON.parse(params), action = obj.action, requestFor = obj.request_for;
        ns_ajax.post(
            urls.leadsApi,
            params,
            function (response) {
                var serverResponse = jQuery.parseJSON(response);
                if (serverResponse.response_status == "OK") {
                    if (requestFor == "create" || requestFor == "update") {
                        if (requestFor == "create") {
                            var type = obj.action_type;
                            if (type == 'pipeline') {
                                var output = '', statusId = obj.leads.status_id;
                                $.each(serverResponse.data.response.lead_info, function (key, value) {
                                    $('#lm-' + statusId).attr({ 'data-previous': value.ROWNUMBER });
                                    output += `<li id="li-` + value.lead_uid + `" class="evt-leads-action" data-toggle="modal" data-u_id="` + value.lead_uid + `" data-action="sales-pipeline" data-request_for="view-lead" data-target="#view_details">
                                    <div class="comment-action">
                                        <h6 class="c_name">`+ value.lead_company_name + `</h6>
                                        <p class="c_msg col-grey">`+ value.lead_type_name + ` | ` + value.cat_name + `</p>
                                    </div>
                                </li>`
                                })
                                $('#ul-' + statusId).append(output);
                                //ns_util.callTmplBinderNotEmpty(serverResponse.data, ns_html_templates.leads, '#sp_lead_template', '#sp_lead_placeholder-' + obj.leads.status_id + '');
                                var count = $("#count-" + statusId).text();
                                $("#count-" + statusId).text(parseInt(count) + 1);
                            }
                            else
                                ns_leads.get({ "action": "leads", "action_on": "leads_main", "request_for": "select-all", "previous": "0", "next": "10" });
                        }
                        else
                            ns_leads.get({ "leads": { "u_id": obj.leads.u_id }, "action": "leads", "action_on": "leads_main", "request_for": 'select', "previous": "0", "next": "10" });
                        ModalHide('#leadmain');
                    }
                    else {
                     //   ns_leads.get({ "action": "leads", "action_on": "leads_main", "request_for": "select-all", "previous": "0", "next": "10" });
                        ModalHide('#modalimport');
                    }
                    if (serverResponse.response_msg.length > 0)
                        alertmsg.msg("Message", serverResponse.response_msg, "S");
                }
                else if (serverResponse.response_status == "FAILED") {
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
        var strJsonString = "", action = $(event).attr("data-action"), action_on = "leads_main", RequestFor = $(event).attr("data-request_for");
        if (action == "leads-main") {
            if (RequestFor == "create" || RequestFor == "update") {
                strJsonString = ns_validations.leadsMain(event);
                if (strJsonString.length > 0)
                    ns_leadsMain.post(strJsonString, event);
            }
            else if (RequestFor == 'import-popup') {
                $("#csv_ddl_placeholder, #dbfields_placeholder,#spnCsvRowCount").html('').show();
                $('#csvfile').val('');
                $("#csv_tbl_placeholder,#btnbckcsv,.csvddl").hide();
                $('#btnvwsbmt').attr('data-request_for', 'view-csv').html('View').hide();
            }
            else if (RequestFor == 'import-csv') {
                if ($('#csvfile').val() == '') {
                    $('#csvfile').focus();
                    alertmsg.msg("Message", "Please browse a csv file", "W");
                    return false;
                }
                ns_leadsMain.get({ "action": action, "action_on": "leads_main", "request_for": "ddl" });
                // ns_dropdowns.get({ "action": "lead-types" });
                // ns_dropdowns.get({ "action": "category", "request_for": "parent" });
            }
            else if (RequestFor == 'export-csv') {
                var leadType = $('#ddl_leadtype_csv').val();
                var category = $('#ddl_category_csv').val();
                var isOverride = $('#chk_override').prop('checked') ? '1' : '0';
                if (leadType == "0") {
                    $('#ddl_leadtype_csv').focus();
                    alertmsg.msg("Message", "Please choose a lead type", "W");
                    return false;
                }
                var csv = $('#csvfile');
                var csvFile = csv[0].files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var csvJson = [];
                    //var rows = e.target.result.split("\n");
                    var rows = e.target.result.split(/\r\n|\n/);
                    for (var i = 0; i < rows.length; i++) {
                        var obj = {};
                        var cells = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
                        if (cells.length > 0) {
                            if (i > 0) {
                                for (var j = 0; j < cells.length; j++) {
                                    var key = $('#dbddl-' + j).val();
                                    if (key == "0") {
                                        $('#dbddl-' + j).focus();
                                        alertmsg.msg("Message", "Please choose a field", "W");
                                        return false;
                                    }
                                    obj[key] = cells[j].replace(/"/g, "").trim();
                                }
                                csvJson.push(obj);
                            }
                        }
                    }
                    var strJsonString = {
                        "leads": {
                            "lead_type": leadType,
                            "lead_category_id": category,
                            "is_override": isOverride,
                            "lead_contact_json": csvJson,
                        },
                        "action": action,
                        "action_on": action_on,
                        "request_for": RequestFor
                    }
                    ns_leadsMain.post(JSON.stringify(strJsonString), event);
                }
                reader.readAsText(csvFile);
            }
            else if (RequestFor == 'view-csv') {
                var csv = $('#csvfile');
                var csvFile = csv[0].files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var flag = 0;
                    var table = $("<table class='table table-bordered rwd-table mb-0' />");
                    //var rows = e.target.result.split("\n");
                    var rows = e.target.result.split(/\r\n|\n/);
                    for (var i = 0; i < rows.length; i++) {
                        var row = $("<tr />");
                        var cells = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
                        if (cells.length > 1) {
                            for (var j = 0; j < cells.length; j++) {
                                var key = $('#dbddl-' + j).val();
                                if (key == "0") {
                                    $('#dbddl-' + j).focus();
                                    alertmsg.msg("Message", "Please choose a field", "W");
                                    flag = 1;
                                    return false;
                                }
                                var cell = $("<td />");
                                cell.html(cells[j].replace(/"/g, "").trim());
                                row.append(cell);
                            }
                            table.append(row);
                        }
                    }
                    if (flag == 0) {
                        $("#csv_ddl_placeholder, #dbfields_placeholder,#btncnclcsv").hide();
                        $("#csv_tbl_placeholder,#btnbckcsv").show();
                        $(event).attr('data-request_for', 'export-csv').html('Submit');
                        $("#csv_tbl_placeholder").empty();
                        $("#csv_tbl_placeholder").html(table);
                    }
                }
                reader.readAsText(csvFile);
            }
            // close import csv modal
            else if (RequestFor == 'back') {
                $(event).hide();
                $('#csv_tbl_placeholder').hide();
                $("#csv_ddl_placeholder, #dbfields_placeholder,#btncnclcsv").show();
                $('#btnvwsbmt').attr('data-request_for', 'view-csv').html('View');
            }
        }
        else if (action == "settings") {
            if (RequestFor == "select") {
                $('#fields_binder_placeholder').empty();
                var leadType = $('#ddl_lead_types').val();
                if (leadType > 0) {
                    ns_leadsMain.get({ "leads": { "lead_type": leadType }, "action": action, "action_on": action_on, "request_for": RequestFor, });
                }
            }
        }
    },
    autocomplete: function (params) {
        params = { json_data: JSON.stringify(params) };
        $("#name").autocomplete({
            minLength: 0,
            source: function (request, response) {
                ns_ajax.get(
                    urls.leadsApi,
                    params,
                    function (data) {
                        var serverResponse = $.parseJSON(data);
                        if (serverResponse.response_status == "OK") {
                            response($.map(serverResponse.data.response.loc_list, function (item) {
                                return {
                                    label: item.loc_name,
                                    val: item.loc_id
                                }
                            }))
                        }
                    });
            },
            select: function (e, i) {
                var id = i.item.val;
                $('#lead_supply_location').attr('data-id', id);
                $('#lead_supply_location').val($(this).val());
            }
        }).focus(function () {
            $(this).autocomplete("search", $(this).val());
        });
    }
}
//*********************** Organization function(s) ************************
ns_organization = {
    get: function (params) {
        var action = params.action, requestFor = params.request_for;
        var params = { json_data: JSON.stringify(params) };
        ns_ajax.get(
            urls.organizationApi,
            params,
            function (response) {
                var serverResponse = jQuery.parseJSON(response);
                if (serverResponse.response_status == "OK") {
                    ns_organization.info(serverResponse, action, requestFor);
                }
                else {
                    if (serverResponse.response_code = "403")
                        $('.content').empty();
                    alertmsg.msg("Error", serverResponse.response_msg, "E");
                }
            });
    },
    post: function (params, event) {
        var obj = JSON.parse(params), action = obj.action, requestFor = obj.request_for;
        ns_ajax.post(
            urls.organizationApi,
            params,
            function (response) {
                var serverResponse = jQuery.parseJSON(response);
                if (serverResponse.response_status == "OK") {
                    if (action == 'org-info') {
                        if (requestFor == 'update') {
                            ns_organization.get({ "action": "org-info", "action_on": "organization", "request_for": "get" });
                        }
                        else {
                            $('#txt_email').attr('disabled', true);
                            $('.btn_save_email, .btn_cancel_email').hide();
                            $('.btn_edit_email ').show();
                            $('#spanEmail').text('Not Verified').addClass('col-red').removeClass('col-green');
                        }
                    }
                    else if (action == 'add-user') {
                        var roleName = $("#ddl_user_role option:selected").text();
                        if (requestFor == 'create' || requestFor == 'update') {
                            if (requestFor == 'create') {
                                var Id = serverResponse.data.response.u_id;
                                var isManager = $('#ddl_user_role').find(":selected").attr('data-manager');
                                $('#btnSbmtUserDetails').attr('data-uid', Id);
                                var rowCount = $('.trCount').length;
                                obj.add_user.u_id = Id;
                                obj.add_user.user_status = 1;
                                obj.add_user.row_num = rowCount + 1;
                                obj.add_user.role_name = roleName;
                                obj.add_user.is_manager = isManager;
                                ns_util.callTmplBinderNotEmpty(obj.add_user, ns_html_templates.org, '#org_user_sub_template', '#org_user_sub_placeholder');
                            }
                            else if (requestFor == 'update') {
                                var rowNum = $('#btnSbmtUserDetails').attr('data-row-num');
                                var isManager = $('#ddl_user_role').find(":selected").attr('data-manager');
                                $('#spanUserRole-' + rowNum).text(roleName);
                                $('#spanRoleId-' + rowNum).text(obj.add_user.role_id);
                                $('#spanUserName-' + rowNum).text(obj.add_user.user_name);
                                $('#spanUserMobile-' + rowNum).text(obj.add_user.user_mobile);
                                $('#spanUserEmail-' + rowNum).text(obj.add_user.user_email);
                                $('#edit-' + rowNum).attr({ "data-manager": isManager, "data-emailverify": obj.add_user.email_verify_required });
                            }
                            ModalHide('#modalUser');
                        }
                        else if (requestFor == 'delete') {
                            $('#UserRow-' + obj.add_user.row_num).remove();
                        }
                        else if (requestFor == 'status') {
                            var status = obj.add_user.user_status;
                            if (status == 1)
                                $(event).html('&nbspActive&nbsp').addClass('badge-success').removeClass('badge-danger').attr('data-status', '1');
                            else
                                $(event).html('Inactive').addClass('badge-danger').removeClass('badge-success').attr('data-status', '0');
                        }
                    }
                    else if (action == 'invoices') {
                        $('.btn_cancel, .btn_save').hide();
                        $('.btn_edit').show();
                        $('input,select,textarea').attr('disabled', true);
                    }
                    else if (action == 'mail-template') {
                        if (requestFor == 'create' || requestFor == 'update') {
                            ns_organization.get({ "action": action, "action_on": "organization", "request_for": "get" });
                            ModalHide('#modalMailTemplate');
                        }
                        else if (requestFor == 'save-email-config') {
                            $('.divTemplateSection').show();
                            $('.divEmailConfigSection').hide();
                        }
                        else if (requestFor == 'delete') {
                            $('#row-' + obj.mail_template.u_id).remove();
                        }
                        // else if (requestFor == 'status') {
                        //     var status = obj.mail_template.status;
                        //     if (status == 1)
                        //         $(event).html('&nbspActive&nbsp').addClass('badge-success').removeClass('badge-danger').attr('data-status', '1');
                        //     else
                        //         $(event).html('Inactive').addClass('badge-danger').removeClass('badge-success').attr('data-status', '0');
                        // }
                    }
                    else if (action == 'locations') {
                        if (requestFor == 'update') {
                            //
                        }
                    }
                    else if (action == 'services') {
                        if (requestFor == 'create') {
                            ModalHide('#addservice');
                            var params = { "action": "services", "action_on": "organization", "request_for": "get" };
                            ns_organization.get(params);
                        }
                        else if (requestFor == 'delete') {
                            $('#ServiceRow-' + obj.service_info[0].row_num).remove();
                        }
                    }
                    else if (action == 'change-password') {
                        ModalHide('#password')
                    }
                    else if (action == 'sign-out') {
                        ns_util.expireCookie(ns_util.loginCookieName);
                        window.location = ns_navigation_urls.account;
                    }
                    else if (action == 'security') {
                        if (requestFor == 'update') {
                            $('#btnSaveCancel').hide();
                            $('#txt_recovery_email').val('').attr('data-email', obj.add_user.user_email).hide();
                            $('#labelEmail').show().text(obj.add_user.user_email);
                            $('#btn_add').attr('data-request-for', 'edit-email').html('Edit →');
                        }
                        else {
                            ModalHide('#twostepauthn');
                            ns_organization.get({ "action": "security", "action_on": "organization", "request_for": "get" });
                        }
                        //else if (requestFor == 'on-twostep') {

                        //    $('#btn_2stepon').hide();
                        //    $('#btn_2stepoff').show();
                        //}
                        //else if (requestFor == 'off-twostep') {
                        //    $('#btn_2stepoff').hide();
                        //    $('#btn_2stepon').show();
                        //}
                    }
                    else if (action == 'user-profile') {
                        $('input,select').attr('disabled', true);
                        $('.btn_cancel, .btn_save').hide();
                        $('.btn_edit').show();
                    }
                    if (serverResponse.response_msg.length > 0)
                        alertmsg.msg("Message", serverResponse.response_msg, "S");
                }
                else if (serverResponse.response_status == "FAILED") {
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
        var strJsonString = "", action = $(event).attr("data-action"), actionOn = "organization", requestFor = $(event).attr("data-request-for");
        // General Information
        if (action == "org-info") {
            if (requestFor == 'update-email') {
                strJsonString = ns_validations.orgInfo(event); //validate org info here
                if (strJsonString.length > 0)
                    ns_organization.post(strJsonString, action); //calling post api here
            }
            else if (requestFor == "edit-profile") {
                $('input,select,textarea').attr('disabled', false);
                $('#txt_email').attr('disabled', true);
                $('.btn_edit').hide();
                $('.btn_cancel, .btn_save, .spanCharCount').show();
            }
            else if (requestFor == "cancel-profile") {
                $('input,select,textarea').attr('disabled', true);
                $('.btn_cancel, .btn_save, .spanCharCount').hide();
                $('.btn_edit').show();
                $('#charNum').html('0');
            }
            else if (requestFor == "edit-email") {
                $('#txt_email').attr('disabled', false).focus();
                $(event).hide();
                $('.btn_cancel_email,.btn_save_email').show();
            }
            else if (requestFor == "cancel-email") {
                $('#txt_email').attr('disabled', true);
                $(event).hide();
                $('.btn_save_email').hide();
                $('.btn_edit_email').show();
                $('#txt_email').val($('#txt_email').attr('data-email'));
            }
            else if (requestFor == 'vat-status') {
                if ($('#rdo_vat_yes').prop("checked"))
                    $('.org-tax-status').show('slow');
                else
                    $('.org-tax-status').hide('slow');
            }
            else if (requestFor == 'same-addr') {
                if ($(event).prop('checked'))
                    $('#txt_address2').val($('#txt_address1').val());
                else
                    $('#txt_address2').val('');
            }
        }
        //Services
        else if (action == 'services') {
            if (requestFor == 'get') {
                $('#txt_services').empty();
                $(".amsify-select-tag").remove();
            }
            else if (requestFor == 'create') {
                strJsonString = ns_validations.addServices(event); //validate user info here
                if (strJsonString.length > 0)
                    ns_organization.post(strJsonString); //calling post api here
            }
            else if (requestFor == 'delete') {
                var checkstr = confirm('are you sure you want to delete this?');
                if (checkstr == true) {
                    service_info = {
                        "service_info": [{
                            "u_id": $(event).attr('data-uid'),
                            "row_num": $(event).attr('data-row-num')
                        }],
                        "action": action,
                        "action_on": actionOn,
                        "request_for": requestFor
                    };
                    ns_organization.post(JSON.stringify(service_info)); //calling post api here
                }
                else
                    return false;
            }
            else if (requestFor == 'add-master-service') {
                $('.amsify-suggestags-input').val($(event).attr('data-serv-title')).focus();
            }
        }
        //Search Filters
        else if (action == 'locations') {
            if (requestFor == 'check-all') {
                if ($(event).prop('checked'))
                    $('.chk-locations').prop('checked', true);
                else
                    $('.chk-locations').prop('checked', false);
            }
            else if (requestFor == 'update') {
                strJsonString = ns_validations.addLocations(event); //validate user info here
                if (strJsonString.length > 0)
                    ns_organization.post(strJsonString); //calling post api here
            }
            else if (requestFor == 'fill-locations') {
                $('.evt-org-settings').not(event).prop('checked', false);
                if ($(event).prop('checked')) {
                    var country_id = $(event).attr('data-country-id');
                    var params = { "country_id": country_id, "action": action, "action_on": "organization", "request_for": requestFor };
                    ns_organization.get(params);
                }
                else
                    $('.chk-locations').prop('checked', false);
            }
        }
        //Account
        else if (action == "add-user") {

            if (requestFor == 'delete') {
                var row_num = $(event).attr('data-row-num');
                var status = $('#status-' + row_num).attr('data-status');
                if (status == 1) {
                    alertmsg.msg("Message", "A user with active status can not be deleted.", "W");
                    return false;
                }
                var checkstr = confirm('are you sure you want to delete this?');
                if (checkstr == true) {
                    var addUser = {
                        "add_user": {
                            "u_id": $(event).attr('data-uid'),
                            "user_status": status,
                            "row_num": row_num
                        },
                        "action": action,
                        "action_on": actionOn,
                        "request_for": requestFor
                    };
                    ns_organization.post(JSON.stringify(addUser)); //calling post api here
                }
                else
                    return false;
            }
            else if (requestFor == 'status') {
                var checkstr = confirm('are you sure you want to change the status?');
                if (checkstr == true) {
                    var status = $(event).attr('data-status') == 1 ? 0 : 1;
                    var addUser = {
                        "add_user": {
                            "u_id": $(event).attr('data-uid'),
                            "user_status": status
                        },
                        "action": action,
                        "action_on": actionOn,
                        "request_for": requestFor
                    };
                    ns_organization.post(JSON.stringify(addUser), event); //calling post api here
                }
            }
            else if (requestFor == 'search') {
                var searchInput = $('#txt_searchbox').val().trim();
                if (searchInput.length == 0) {
                    $('#txt_search_input').focus();
                    alertmsg.msg("Message", "Please enter a user name or mobile no to search.", "W");
                    return false;
                }
                strJsonString = { "add_user": { "str_search": searchInput }, "action": action, "action_on": actionOn, "request_for": 'get' };
                ns_organization.get(strJsonString);
            }
            else if (requestFor == 'refresh') {
                $('#txt_searchbox').val('');
                ns_organization.get({ "action": action, "action_on": "organization", "request_for": "get" });
            }
            else if (requestFor == 'get-users') {
                var isManager = $('#ddl_user_role').find(":selected").attr('data-manager');
                var id = $('#ddl_user_role').attr('data-uid');
                if (isManager == 1) {
                    ns_organization.get({ "add_user": { "u_id": id }, "action": action, "action_on": "organization", "request_for": requestFor });
                }
                else
                    $('#users_placeholder').empty();
            }
            else if (requestFor == 'check-all') {
                if ($(event).prop('checked'))
                    $('.chk-org-users').prop('checked', true)
                else
                    $('.chk-org-users').prop('checked', false);
            }
        }
        //Invoice & Payments
        else if (action == 'invoices') {
            if (requestFor == 'create' || requestFor == 'update') {
                strJsonString = ns_validations.paymentAddressInfo(event); //validate user info here
                if (strJsonString.length > 0)
                    ns_organization.post(strJsonString); //calling post api here
            }
            else if (requestFor == "edit") {
                $('input,select,textarea').attr('disabled', false);
                $('.btn_edit').hide();
                $('.btn_cancel, .btn_save').show();
                var addr_uid = $('#span_addr_uid').text();
                var addr_type = $('#span_addr_type').text();
                if (addr_uid.length > 0 && addr_type == 'B')
                    $('.btn_save').attr('data-request-for', 'update');
            }
            else if (requestFor == "cancel") {
                $('input,select,textarea').attr('disabled', true);
                $('.btn_cancel, .btn_save').hide();
                $('.btn_edit').show();
                var obj = $.parseJSON($(event).attr('data-json'));
                $("#txt_billing_name").val(obj.billing_name);
                $("#txt_address_line").val(obj.address_line);
                $("#txt_state").val(obj.state);
                $("#txt_city").val(obj.city);
                $("#txt_post_code").val(obj.postal_code);
                $("#txt_phone").val(obj.org_phone);
                $("#txt_web_url").val(obj.web_url);
                if (obj.tax_status == 1) {
                    $('.org-tax-status').show();
                    $("#txt_tax_id").val(obj.tax_id);
                    $("#txt_tax_type").val(obj.tax_type);
                    $('#rdo_vat_yes').prop('checked', true);
                }
                else {
                    $('.org-tax-status').hide();
                    $('#rdo_vat_no').prop('checked', true);
                }
            }
            else if (requestFor == "same-addr") {
                if ($(event).prop('checked'))
                    $('#txt_address_line2').val($('#txt_address_line1').val());
                else
                    $('#txt_address_line2').val('');
            }
        }
        // CommunicationsspanTempKwd-1
        else if (action == 'mail-template') {
            if (requestFor == 'add-new') {
                ClearModalData('#modalMailTemplate');
                $('.divRecipient,.divemail').hide();
                $('#ddl_statusMaster').val('0');
                $('#ddl_emailType').val('HTML');
                $('#preview_mailBody').html('');
                $("input[type=text]").prop('disabled', false);
                $("#template_body").summernote("enable");
                $("#template_body").summernote("code", '');
                $('#templateHeader').html('Add Mail Template');
                $('#btnSbmtMailTemp').attr({ 'data-uid': '0', 'data-request-for': 'create' }).html('Save');
                $('.divEmailNotify').hide();
                ns_dropdowns.get({ "action": "status-master" });
                ns_organization.get({ "action": action, "action_on": actionOn, "request_for": 'get-keywords' });
            }
            else if (requestFor == 'create' || requestFor == 'update') {
                strJsonString = ns_validations.mailTemplate(event); //validate user info here
                if (strJsonString.length > 0)
                    ns_organization.post(strJsonString); //calling post api here
            }
            else if (requestFor == 'edit') {
                ClearModalData('#modalMailTemplate');
                $('.divRecipient,.divemail').hide();
                var id = $(event).attr('data-uid');
                var templateGroup = $(event).attr('data-tmpl-group');
                if (templateGroup == 'system') {
                    //$("input[type=text]").prop('disabled', true);
                    //$("#template_body").summernote("disable");
                    $('#templateHeader').html('Add Mail Template');
                    $('#btnSbmtMailTemp').attr({ 'data-uid': '0', 'data-request-for': 'create' }).html('Save');
                }
                else {
                    $("input[type=text]").prop('disabled', false);
                    $("#template_body").summernote("enable");
                    $('#templateHeader').html('Update Mail Template');
                    $('#btnSbmtMailTemp').attr({ 'data-uid': id, 'data-request-for': 'update' }).html('Update');
                }
                $('#chk_defaultTmpl').prop('checked', $(event).attr('data-status') > 0 ? true : false);
                ns_organization.get({ "action": action, "action_on": actionOn, "request_for": 'get-keywords' });
                ns_organization.get({
                    "mail_template": { "u_id": id }, "action": action, "action_on": "organization", "request_for": "edit"
                });
            }

            else if (requestFor == 'show-email-chk') {
                if ($(event).prop('checked'))
                    $('.divemail').show();
                else
                    $('.divemail').hide();
            }
            else if (requestFor == 'show-recipient') {
                if ($(event).prop('checked'))
                    $('.divRecipient').show();
                else
                    $('.divRecipient').hide();
            }
            else if (requestFor == 'all-recipient') {
                if ($(event).prop('checked')) {
                    $('.divemail input:checkbox').prop('checked', true);
                    $('.divRecipient').show();
                }
                else {
                    $('#txt_recipient').val('');
                    $('.divemail input:checkbox').prop('checked', false);
                    $('.divRecipient').hide();
                }

            }
            else if (requestFor == 'add-config') {
                ns_organization.get({ "action": action, "action_on": "organization", "request_for": "get-email-config" });
                $('.divTemplateSection').hide();
                $('.divEmailConfigSection').show();

            }
            else if (requestFor == 'cancel-config') {
                $('.divTemplateSection').show();
                $('.divEmailConfigSection').hide();
            }
            else if (requestFor == 'save-email-config') {
                strJsonString = ns_validations.mailTemplate(event); //validate user info here
                if (strJsonString !== false)
                    ns_organization.post(strJsonString); //calling post api here
            }
            else if (requestFor == 'add-keyword') {
                var htmlContent = $('#template_body').summernote('code');
                htmlContent = htmlContent + $(event).attr('data-keyword');
                $('#template_body').summernote('code', htmlContent);
            }
        }
        //Sign Out
        else if (action == 'sign-out') {
            var checkCookies = ns_util.checkCookie(ns_util.loginCookieName);
            if (checkCookies === undefined || checkCookies === "''")
                window.location = ns_navigation_urls.account;
            else {
                ns_organization.post(JSON.stringify({
                    "log_history": { "ip_address": "", "browser_name": "" },
                    "action": action, "action_on": actionOn, "request_for": requestFor
                }), event);
            }
        }
        //Change Password
        else if (action == 'change-password') {
            if (requestFor == 'update') {
                strJsonString = ns_validations.changePassword(event); //validate user info here
                if (strJsonString.length > 0)
                    ns_organization.post(strJsonString); //calling post api here
            }
            else if (requestFor == 'add-new' || requestFor == 'cancel') {
                ClearModalData('#password');
            }
        }
        //Security
        else if (action == 'security') {

            if (requestFor == 'on-twostep' || requestFor == 'off-twostep') {
                var authnType = "", authnStatus = 0, flag = 0;
                if (requestFor == 'on-twostep') {
                    authnType = $('input[name="twostepauth"]:checked').val();
                    authnStatus = 1;
                }
                else if (!confirm("Are you sure you want to disable the 2-step authentication?")) {
                    flag = 1;
                }
                if (flag == 0) {
                    var strJsonString = {
                        "add_user": {
                            "two_step_authn_type": authnType,
                            "two_step_authn_status": authnStatus,
                        },
                        "action": action,
                        "action_on": actionOn,
                        "request_for": requestFor
                    };
                    ns_organization.post(JSON.stringify(strJsonString), event);
                }
            }
        }
        //User Profile
        else if (action == "user-profile") {
            if (requestFor == 'update') {
                strJsonString = ns_validations.userProfile(event);
                if (strJsonString.length > 0)
                    ns_organization.post(strJsonString, action);
            }
            else if (requestFor == "edit-profile") {
                $('input,select').attr('disabled', false);
                $('.btn_edit').hide();
                $('.btn_cancel, .btn_save').show();
            }
            else if (requestFor == "cancel-profile") {
                $('input,select').attr('disabled', true);
                $('.btn_cancel, .btn_save').hide();
                $('.btn_edit').show();
            }
            else if (requestFor == "refresh") {
                ns_organization.get({ "action": "user-profile", "action_on": "organization", "request_for": "get" });
            }
        }
    },
    info: function (serverResponse, action, requestFor) {
        if (action == "org-info") {
            ns_util.callTmplBinder(serverResponse.data, ns_html_templates.org, '#org_settings_template', '#org_settings_placeholder');
            $.each(serverResponse.data.response, function (i) {
                $.each(this, function (key, value) {
                    window.setTimeout(function () {
                        if (key == "social_media_info") {
                            $.each(value, function (key1, value1) {
                                var social_media_type = value1.social_media_type, social_media_link = value1.social_media_link;
                                switch (social_media_type) {
                                    case 'Facebook':
                                        $('#txt_facebook').val(social_media_link).attr('data-uid', value1.u_id);
                                        break;
                                    case 'Twitter':
                                        $('#txt_twitter').val(social_media_link).attr('data-uid', value1.u_id);;
                                        break;
                                    case 'Instagram':
                                        $('#txt_instagram').val(social_media_link).attr('data-uid', value1.u_id);;
                                        break;
                                    case 'Youtube':
                                        $('#txt_youtube').val(social_media_link).attr('data-uid', value1.u_id);;
                                        break;
                                    case 'Linkdin':
                                        $('#txt_linkdin').val(social_media_link).attr('data-uid', value1.u_id);;
                                        break;
                                    case 'Pinterest':
                                        $('#txt_pinterest').val(social_media_link).attr('data-uid', value1.u_id);;
                                        break;
                                    default:
                                        '';
                                }
                            })
                        }
                        if (key == "org_info") {
                            $.each(value, function (key2, value2) {
                                $('#ddl_industry').val(value2.industry);
                            });
                        }
                        if (key == "address_info") {
                            $.each(value, function (key3, value3) {
                                $('#ddl_country').val(value3.country_id);
                            });
                        }
                    }, 50);
                })
            })
        }
        else if (action == "add-user") {
            if (requestFor == 'get') {
                ns_util.callTmplBinder(serverResponse.data, ns_html_templates.org, '#org_user_template', '#org_user_placeholder');
            }
            else if (requestFor == 'get-users') {
                if (serverResponse.data.response.users != '') {
                    var users = `<div class="col-12 col-sm-4 checkbox">
                                <input id="chkAll" type="checkbox" class="evt-org-settings" data-action="add-user" data-request-for="check-all">
                                <label for="chkAll" class="pl-0"><b>All</b></label>
                            </div>`;
                    $.each(serverResponse.data.response.users, function (key, value) {
                        users += `<div class="col-12 col-sm-4 checkbox">
                              <input id="chk-` + value.user_id + `" type="checkbox" class="chk-org-users" data-user-name=` + value.user_name + ` value="` + value.user_id + `">
                              <label for="chk-` + value.user_id + `" class="pl-0"><b>` + value.user_name + `</b></label></div><hr />`;
                    });
                    $('#users_placeholder').html(users);
                }
            }
            else if (requestFor == 'edit') {
                $.each(serverResponse.data.response.users[0].manager_json, function (key, value) {
                    $('#chk-' + value.user_id).prop('checked', true);
                });
            }
        }
        else if (action == "invoices") {
            ns_util.callTmplBinder(serverResponse.data, ns_html_templates.org, '#invoices_template', '#invoices_placeholder');
            window.setTimeout(function () {
                var countryId = serverResponse.data.response.billing_info[0].country_id;
                $('#ddl_country').val(countryId);
            }, 50);
        }
        else if (action == "services") {
            ns_util.callTmplBinder(serverResponse.data, ns_html_templates.org, '#services_list_template', '#services_list_placeholder');
            ns_util.callTmplBinder(serverResponse.data, ns_html_templates.org, '#master_services_template', '#master_services_placeholder');
        }
        else if (action == "mail-template") {
            if (requestFor == 'get-email-config') {
                if (serverResponse.data.response.email_config != '') {
                    $.each(serverResponse.data.response.email_config, function (key, value) {
                        $("#txt_from_name").val(value.option_value.from_name);
                        $("#txt_from_address").val(value.option_value.from_address);
                        $('#txt_footer_text').val(value.option_value.footer_text);
                        $('#base_hexcolor').val(value.option_value.base_color);
                        $('#background_hexcolor').val(value.option_value.background_color);
                        $('#body_background_hexcolor').val(value.option_value.body_background_color);
                        $('#body_text_hexcolor').val(value.option_value.body_text_color);
                        $('.btnSaveConfig').html('<i class="zmdi zmdi-upload">&nbsp;</i>Update');
                    });
                }
                else
                    $('.btnSaveConfig').html('<i class="zmdi zmdi-upload">&nbsp;</i>Save');
            }
            else if (requestFor == 'get-keywords') {
                var keywords = "";
                $.each(serverResponse.data.response.template_fields, function (key, value) {
                    $.each(value.option_value, function (key2, value2) {
                        keywords += '<a id="btn_' + value2.field_name + '" class="btn btn-outline-secondary m-1 evt-org-settings" data-keyword="{' + value2.field_name + '}" data-action="mail-template" data-request-for="add-keyword" style="cursor:pointer;">{' + value2.field_name + '}</a>';
                    });
                });
                $('#keyword_placeholder').html(keywords);
            }
        }
        else if (action == "locations") {
            if (requestFor == 'get') {
                var orgCountry = serverResponse.data.response[1].country_info[0].org_country;
                window.setTimeout(function () {
                    if (orgCountry > 0)
                        $('#country-' + orgCountry).trigger('click');
                    else
                        $('#country-1').trigger('click');
                }, 50);
            }
            else {
                if (serverResponse.data.response[1].setting_info[0] != '') {
                    var strIds = serverResponse.data.response[1].setting_info[0].loc_ids;
                    strIds = strIds.split(',');
                    if (strIds != null) {
                        window.setTimeout(function () {
                            $.each(strIds, function (key, value) {
                                var id = value.split(',');
                                $('#locId-' + id).prop('checked', true);
                            });
                        }, 50);
                    }
                }
            }
        }
    },
}

//*********************** File Upload ************************
ns_fileupload = {
    upload: function (formData, event) {
        var action = $(event).attr("data-action");
        ns_ajax.upload(
            urls.UploadApi,
            formData,
            function (response) {
                var serverResponse = jQuery.parseJSON(response);
                if (action == 'org-info' && serverResponse.Error == "") {
                    $('#orglogoPreview').css('background-image', 'url(' + serverResponse.Response + ')');
                    alertmsg.msg("Message", "Logo uploaded successfully", "S");
                    return;
                }
                if (serverResponse.response_status == "OK") {
                    if (serverResponse.response_msg.length > 0) {
                        alertmsg.msg("Message", serverResponse.response_msg, "S");
                        if (action == 'files') {
                            ModalHide('#addmydoc');
                            $('.spanNoDataFound').hide();
                        }
                        else if (action == 'category') {
                            ModalHide('#AddCategory');
                            ns_masters.get({ "action": "category", "action_on": "masters", "request_for": "select", "previous": "0", "next": "5" });
                        }
                    }
                }
                else if (serverResponse.response_status == "FAILED") {
                    alertmsg.msg("Error", serverResponse.response_msg, "E");
                }
                else {
                    var msg = '';
                    $.each(serverResponse, function (key, value) {
                        msg += value + '<br>';
                    });
                    alertmsg.msg("Message", msg, "W");
                }
            });
    },
}
//*********************** Email Templates ************************
ns_templates = {
    get: function (params) {
        var requestFor = params.request_for;
        params = { json_data: JSON.stringify(params) };
        ns_ajax.get(
            urls.leadsApi,
            params,
            function (response) {
                var serverResponse = $.parseJSON(response);
                if (serverResponse.response_status == "OK") {
                    if (requestFor == 'org-template') {
                        $('#txt_msg_subject').val(serverResponse.data.response.email_template[0].template_subject);
                        $('#txt_msg').summernote('code', serverResponse.data.response.email_template[0].template_body);
                    }
                    else if (requestFor == 'schedule-template') {
                        // datePicker();
                        //                        $('.timezone').timezones();
                        $('#msgBody').summernote('code', serverResponse.data.response.email_template[0].template_body);
                        $('#spanSubject').text(serverResponse.data.response.email_template[0].template_subject);
                    }
                    else if (requestFor == 'template-list') {
                        var templates = '';
                        if (serverResponse.data.response.email_template != "") {
                            $.each(serverResponse.data.response.email_template, function (key, value) {
                                templates += '<a class="btn btn-outline-primary btn-block mt-2 font-16 bold evt-leads-action" data-action="message" data-request_for="org-template" data-template-id=' + value.template_id + '>' + value.template_name + '</a>';
                            });
                        }
                        else
                            templates = "<b class='col-red'><center>No data found(s)<center></b>";
                        $('#template_placeholder').html(templates);
                    }
                }
                else {
                    alertmsg.msg("Message", serverResponse.response_msg, "E");
                }
            });
    },
}
//*********************** Master function(s) ************************
// ns_masters = {
//     post: function (params, event) {
//         var obj = JSON.parse(params), action = obj.action, requestFor = obj.request_for, next = 10, previous = 0;
//         ns_ajax.post(
//             urls.MastersApi,
//             params,
//             function (response) {
//                 var serverResponse = $.parseJSON(response);
//                 if (serverResponse.response_status == "OK") {
//                     alertmsg.msg("Message", serverResponse.response_msg, "S");
//                     if (action == 'lead-status') {
//                         if (requestFor == 'create') {
//                             var type = obj.type
//                             if (type == 'pipeline')
//                                 ns_leads.get({ "action": "sales-pipeline", "action_on": "leads_main", "request_for": "select", "previous": previous, "next": next });
//                             else
//                                 ns_masters.get({ "action": "lead-status", "action_on": "masters", "request_for": "select", "previous": previous, "next": next });
//                         }
//                         else if (requestFor == 'update') {
//                             var id = $(event).attr('data-id');
//                             var color = obj.lead_status.color_code;
//                             $('#spanName-' + id).text(obj.lead_status.status_name).css('color', color).attr('data-color', color);
//                             $('#spanType-' + id).text(obj.lead_status.status_type);
//                             $('#spanStatus-' + id).text(obj.lead_status.global_status == 1 ? 'Yes' : 'No').attr('data-gstatus', obj.lead_status.global_status);
//                             $('#spanSortOrder-' + id).text(obj.lead_status.sort_order);
//                         }
//                         else if (requestFor == 'delete') {
//                             $('#trStatus-' + $(event).attr('data-id')).remove();
//                         }
//                         else if (requestFor == 'status') {
//                             var status = obj.lead_status.status;
//                             if (status == 1)
//                                 $(event).html('Active').addClass('badge-success').removeClass('badge-danger').attr('data-status', '1');
//                             else
//                                 $(event).html('Inactive').addClass('badge-danger').removeClass('badge-success').attr('data-status', '0');
//                         }
//                         ModalHide('#addstatus');
//                     }
//                 }
//             })
//     },
//     actions: function (event) {
//         var strJsonString = "", next = 10, previous = 0;
//         var action = $(event).attr("data-action").toLowerCase(), actionOn = "masters", requestFor = $(event).attr("data-request_for").toLowerCase();
//         if (action == 'lead-status') {
//             if (requestFor == "create" || requestFor == "update") {
//                 strJsonString = ns_validatios.masters(event);
//                 if (strJsonString.length > 0)
//                     ns_masters.post(strJsonString, event);
//             }
//         }
//     }
// }
ns_validatios = {
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
