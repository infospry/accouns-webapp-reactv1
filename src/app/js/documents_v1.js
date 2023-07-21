var doc_role_id = 0, doc_parent_id=0;
jQuery(document).ready(function () {   
    $.widget("custom.catcomplete", $.ui.autocomplete, {
        _create: function () {
            this._super();
            this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
        },
        _renderMenu: function (ul, items) {
            var that = this,
                currentCategory = "";
            $.each(items, function (index, item) {

                var li;
                if (item.category != currentCategory) {
                    ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
                    currentCategory = item.category;
                }
                li = that._renderItemData(ul, item);
                if (item.category) {
                    li.attr("aria-label", item.category + " : " + item.label);
                }
            });
        }
    });
    ns_documents.GetRoles();
    ns_documents.get('listsettings', '', '');  
    $(document).on('click', ".ClslblDocCategory", function () {
        var action = $(this).attr('data-action');
        if (action == 'radio') {
            $('.ClslblDocCategory').prop('checked', false);
            this.checked = true;
            var chkval = $('#' + this.id).val();
            $('#txtDocCategoryColorCode').val(chkval);        
        }
    });
    $(document).on('click', '#chkDocMasterDocHasParent', function () {
        if ($(this).prop('checked')) {
            $('#divDocumentParent').show('slow');
            $('#ddlDocMasterParent').focus();
        }
        else {
            $('#divDocumentParent').hide('slow');
            $('#ddlDocMasterParent').val('0');
        }
    });
    $(document).on('click', '#chkDocMasterDocIssueCountry', function () {
        if ($(this).prop('checked')) {
            $('#divDocumentIssueCountry').show('slow');
            $('#txtDocRequiredIssueCountry').focus();
        }
        else {
            $('#divDocumentIssueCountry').hide('slow');
            $('#txtDocRequiredIssueCountry').val('');
            $('#txtDocRequiredIssueCountry').attr('data-countryid','0');
        }
    });
    $('#txtDocRequiredIssueCountry').on("focusin", function () {
        ns_documents.GetCountryLists();
    });    
    $(document).on('change', '#ddlCndJobRole', function () {        
            doc_role_id = $(this).val();
            ns_documents.get('listsettings', '', '');        
    });
    $(document).on('click', '.cls-document-setting', function (evt) {
        var action = $(this).attr('data-action');      
        var uid = '';   
         //Category
        if (action == 'addnewcategory') {
            //if (jQuery('#ddlCndJobRole').val() == '0') {              
            //    ShowAlertMessage("Message", "Select Role", "A");
            //    $('#ddlCndJobRole').focus();
            //    return false;
            //}
            //else {          
                ns_documents.ResetCategoryForm();
                $('#lblDocCategoryTitle').html('Add Category');
                $('#ddlCndJobRoleCategory').val($("#ddlCndJobRole option:selected").val());
                $('#addpagecat').modal();               
            //}           
        }
        if (action == 'editcategory') {
            $('#lblDocCategoryTitle').html('Update Category'); 
            ns_documents.ResetCategoryForm();                
            var add_more_status = $(this).attr('data-add_more_status');   
            var privacy_status = $(this).attr('data-privacy_status');
            $('#ddlCndJobRoleCategory').val($("#ddlCndJobRole option:selected").val());            
            $("#txtDocCategoryName").val($(this).attr('data-cat_name'));
            $("#txtDocCategoryColorCode").val($(this).attr('data-cat_color'));
            $("#txtDocCategoryDesc").val($(this).attr('data-cat_desc'));

            
            add_more_status == 1 ? $("#chkDocCategoryAddMore").prop('checked', true) : $("#chkDocCategoryAddMore").prop('checked', false);
            privacy_status == 1 ? $("#chkDocCategoryStatus").prop('checked', true) : $("#chkDocCategoryStatus").prop('checked', false);

            $('#btnDocCategorySave').html('Update');
            $('#btnDocCategorySave').attr('data-uid', $(this).attr('data-uid'));
            $('#btnDocCategorySave').attr('data-action', 'updatecategory');              
            $('#addpagecat').modal();                
        }
        if (action == 'addcategory') {         
            ns_documents.actions(action,evt,uid);
        }
        if (action == 'updatecategory') {          
            ns_documents.actions(action, evt, $(this).attr('data-uid'));
        }      
              
        if (action == 'deletecategory') {
            ns_documents.actions(action, evt, $(this).attr('data-uid'));
        }       

         //document
        if (action == 'addnewdoc') {          
            $('#lblDocMasterTitle').html('Add Document'); 
            ns_documents.ResetDocForm();
            ns_documents.getParentDocs();
        }
        if (action == 'editdocument') {           
            $('#lblDocMasterTitle').html('Update Document'); 
            ns_documents.ResetDocForm();          
            var docJson = $(this).attr('data-json');
            if (docJson !== '') {
                var obj = JSON.parse(docJson);
                console.log(obj);
                $("#txtDocMasterDocName").val(obj.doc_name);
                //Parent 
                doc_parent_id = obj.doc_parent_id;
                obj.doc_parent_id > 0 ? $("#chkDocMasterDocHasParent").prop('checked', true) : $("#chkDocMasterDocHasParent").prop('checked', false);
                if (obj.doc_parent_id > 0) 
                    $('#divDocumentParent').show('slow');                     
                else 
                    $('#divDocumentParent').hide('slow');
                ns_documents.getParentDocs();
             

                //Issue Country
                obj.doc_issue_country_status == 1 ? $("#chkDocMasterDocIssueCountry").prop('checked', true) : $("#chkDocMasterDocIssueCountry").prop('checked', false);
                if (obj.doc_issue_country_status == 1) {
                    $('#divDocumentIssueCountry').show('slow');
                    $('#txtDocRequiredIssueCountry').val('');                   
                    $('#txtDocRequiredIssueCountry').attr('data-countryid', obj.doc_required_issue_country);
                }
                else {
                    $('#divDocumentIssueCountry').hide('slow');
                    $('#txtDocRequiredIssueCountry').val('');
                    $('#txtDocRequiredIssueCountry').attr('data-countryid', '0');
                }

                //Doc Issue,Expiry,Number,AnyOtherInput
                obj.required_issue_date == 1 ? $("#chkDocMasterDocIssue").prop('checked', true) : $("#chkDocMasterDocIssue").prop('checked', false);
                obj.required_expiry_date == 1 ? $("#chkDocMasterDocExpiry").prop('checked', true) : $("#chkDocMasterDocExpiry").prop('checked', false);
                obj.required_doc_number == 1 ? $("#chkDocMasterDocNumber").prop('checked', true) : $("#chkDocMasterDocNumber").prop('checked', false);
                obj.required_other_input == 1 ? $("#chkDocMasterAnyOtherInput").prop('checked', true) : $("#chkDocMasterAnyOtherInput").prop('checked', false);

               
                $("#txtDocMasterDescription").val(obj.doc_desc);
                $("#txtDocMasterInstrections").val(obj.doc_help_desc);
                alert(obj.doc_status);
                obj.doc_status == 0 ? $("#chkDocMasterStatus").prop('checked', false) : $("#chkDocMasterStatus").prop('checked', true);
               
                $('#btnDocMasterSave').html('Update');
                $('#btnDocMasterSave').attr('data-uid', obj.doc_uid);
                $('#btnDocMasterSave').attr('data-action', 'updatedocument');     
                $('#addpage').modal(); 
            }
            else {
                ShowAlertMessage("Message", "Sorry! Document details not found.", "A");
            }
        }
        if (action == 'getdocumentdetails') {
            $('#lblDocMasterTitle').html('Update Document');
            ns_documents.ResetDocForm();

            var doc_uid = $(this).attr('data-docuid');
            var param = '{"action":"' + action + '","section":"settings","uid":"' + doc_uid + '"}';
            var params = { json: param }
            ns_ajax.get(
                urls.documents,
                params,
                function (data) {                  
                    if (data.Status === 'OK') {                     
                        var obj = data.Response.doc_details[0];                       
                            $("#txtDocMasterDocName").val(obj.doc_name);
                            //Parent 
                            doc_parent_id = obj.doc_parent_id;
                            obj.doc_parent_id > 0 ? $("#chkDocMasterDocHasParent").prop('checked', true) : $("#chkDocMasterDocHasParent").prop('checked', false);
                            if (obj.doc_parent_id > 0)
                                $('#divDocumentParent').show('slow');
                            else
                                $('#divDocumentParent').hide('slow');
                            ns_documents.getParentDocs();


                            //Issue Country
                            obj.doc_issue_country_status == 1 ? $("#chkDocMasterDocIssueCountry").prop('checked', true) : $("#chkDocMasterDocIssueCountry").prop('checked', false);
                            if (obj.doc_issue_country_status == 1) {
                                $('#divDocumentIssueCountry').show('slow');
                                $('#txtDocRequiredIssueCountry').val('');
                                $('#txtDocRequiredIssueCountry').attr('data-countryid', obj.doc_required_issue_country);
                            }
                            else {
                                $('#divDocumentIssueCountry').hide('slow');
                                $('#txtDocRequiredIssueCountry').val('');
                                $('#txtDocRequiredIssueCountry').attr('data-countryid', '0');
                            }

                            //Doc Issue,Expiry,Number,AnyOtherInput
                            obj.required_issue_date == 1 ? $("#chkDocMasterDocIssue").prop('checked', true) : $("#chkDocMasterDocIssue").prop('checked', false);
                            obj.required_expiry_date == 1 ? $("#chkDocMasterDocExpiry").prop('checked', true) : $("#chkDocMasterDocExpiry").prop('checked', false);
                            obj.required_doc_number == 1 ? $("#chkDocMasterDocNumber").prop('checked', true) : $("#chkDocMasterDocNumber").prop('checked', false);
                            obj.required_other_input == 1 ? $("#chkDocMasterAnyOtherInput").prop('checked', true) : $("#chkDocMasterAnyOtherInput").prop('checked', false);


                            $("#txtDocMasterDescription").val(obj.doc_desc);
                            $("#txtDocMasterInstrections").val(obj.doc_help_desc);
                            obj.doc_status == 0 ? $("#chkDocMasterStatus").prop('checked', false) : $("#chkDocMasterStatus").prop('checked', true);

                            $('#btnDocMasterSave').html('Update');
                            $('#btnDocMasterSave').attr('data-uid', obj.doc_uid);
                            $('#btnDocMasterSave').attr('data-action', 'updatedocument');
                            $('#addpage').modal();
                       
                    }
                    else {
                        ShowAlertMessage("Message", "Sorry! Document details not found.", "A");
                    }                   
                });           
        }
        if (action == 'adddocument') {
            ns_documents.actions(action, evt, uid);
        }
        if (action == 'updatedocument') {
            ns_documents.actions(action, evt, $(this).attr('data-uid'));
        }    
        if (action == 'deletedocument') {             
            ns_documents.actions(action, evt, $(this).attr('data-uid'));
        }

        //document setting
        if (action == 'editdocument_setting') {
            $('#lblDocMasterTitle').html('Update Document');
            ns_documents.ResetDocForm();
            ns_documents.getParentDocs();
            $('#addpage').modal();              
        }
        if (action == 'deletedocument_setting') {         
            var li_id = $(this).attr('data-id');
            $('#' + li_id).remove();
        }     
        if (action == 'savesettings') {            
            ns_documents.actions(action, evt,'');
        }
        if (action == 'refresh') {
            $('#txtsearchDocs').val('');
            $('#ddlCndJobRole').val(0);
            doc_role_id = 0, doc_parent_id = 0;
            ns_documents.get('listsettings', '', '');  
        }        
    });
    $(document).on('change', '.cls-statuschange-category', function (evt) {
        var action = $(this).attr('data-action');   
        ns_documents.actions(action, evt, $(this).attr('data-uid'));
    });
    $(document).on('click', ".cls-doc-search", function () {      
        $('#divdocsearch').toggle('fast');
    });
    $(document).on('click', ".clsviewsample", function () {
        var id = $(this).attr('data-id');
        $('.cls_sample').hide();
       
        $('#'+id).show();
    });
    
});

ns_documents = {
    actions: function (action, evt, uid) {
        var obj = {}, params = '', section = 'settings';
        //Category
        if (action == 'addcategory' || action == 'updatecategory') {
            var role_id = $("#ddlCndJobRoleCategory option:selected").val(); 
            var cat_name = $("#txtDocCategoryName").val();
            var cat_color = $("#txtDocCategoryColorCode").val();
            var cat_desc = $("#txtDocCategoryDesc").val();
            var add_more_status = $("#chkDocCategoryAddMore").prop('checked') ? 1 : 0;            
            var privacy_status = $("#chkDocCategoryStatus").prop('checked') ? 1 : 0;
            //if (role_id == '0') {
            //    $("#ddlCndJobRole").focus();
            //    ShowAlertMessage("Message", "Select a Role", "A");
            //    return false;
            //}
            if (cat_name == '') {
                $("#txtDocCategoryName").focus();
                ShowAlertMessage("Message", "Enter category name", "A");
                return false;
            }
            if (cat_color == '') {
                $("#txtDocCategoryColorCode").focus();
                ShowAlertMessage("Message", "Enter color code", "A");
                return false;
            }

            obj.action = action;
            obj.section = section;            
            obj.cat_uid = uid;
            obj.role_id = role_id;
            obj.cat_name = cat_name;
            obj.cat_color = cat_color;
            obj.cat_desc = cat_desc;            
            obj.add_more_status = add_more_status;
            obj.privacy_status = privacy_status;

            params = "[" + JSON.stringify(obj) + "]";
        }
        if (action == 'deletecategory') {
            obj.action = action;
            obj.section = section;
            obj.cat_uid = uid;
            params = "[" + JSON.stringify(obj) + "]";
        }
        if (action == 'statuschange') {
            var chkStatusId = evt.target.getAttribute("id");
            var privacy_status = $('#' + chkStatusId).prop('checked') ? 1 : 0;
            obj.action = action;
            obj.section = section;
            obj.cat_uid = uid;
            obj.privacy_status = privacy_status;
            params = "[" + JSON.stringify(obj) + "]";            
        }

        //Documents
        if (action == 'adddocument' || action == 'updatedocument') {          
            var doc_name = $("#txtDocMasterDocName").val();
            var doc_parent_id = $('#ddlDocMasterParent').val();
            var doc_issue_country_status = $('#chkDocMasterDocIssueCountry').prop('checked') ? 1 : 0;
            var doc_required_issue_country = $('#txtDocRequiredIssueCountry').attr('data-countryid');
                      
            var required_issue_date = $("#chkDocMasterDocIssue").prop('checked') ? 1 : 0;
            var required_expiry_date = $("#chkDocMasterDocExpiry").prop('checked') ? 1 : 0;
            var required_doc_number = $("#chkDocMasterDocNumber").prop('checked') ? 1 : 0;
            var required_other_input = $("#chkDocMasterAnyOtherInput").prop('checked') ? 1 : 0;
            var doc_desc = $("#txtDocMasterDescription").val();  
            var doc_help_desc = $("#txtDocMasterInstrections").val();
            var doc_status = $("#chkDocMasterStatus").prop('checked') ? 1 : 0;

            if (doc_name == '') {
                $("#txtDocMasterDocName").focus();
                ShowAlertMessage("Message", "Enter document name", "A");
                return false;
            }
            else if (($('#chkDocMasterDocHasParent').prop('checked')) && (doc_parent_id =='0')) {
                $("#ddlDocMasterParent").focus();
                ShowAlertMessage("Message", "Select Parent document", "A");
                return false;
            }
            else if (($('#chkDocMasterDocIssueCountry').prop('checked')) && ($('#txtDocRequiredIssueCountry').val() == '')) {
                $("#txtDocRequiredIssueCountry").focus();
                ShowAlertMessage("Message", "Enter a document required issue country name", "A");
                return false;               
            }
           
            obj.action = action;
            obj.section = section;
            obj.doc_uid = uid;
            obj.doc_name = doc_name;
            obj.doc_parent_id = doc_parent_id;
            obj.doc_issue_country_status = doc_issue_country_status;
            obj.doc_required_issue_country = doc_required_issue_country;
            obj.doc_desc = doc_desc;
            obj.required_issue_date = required_issue_date;
            obj.required_expiry_date = required_expiry_date;
            obj.required_doc_number = required_doc_number;
            obj.required_other_input = required_other_input;
            obj.doc_help_desc = doc_help_desc;
            obj.doc_status = doc_status;
            params = "[" + JSON.stringify(obj) + "]";
        }
        if (action == 'deletedocument') {
            obj.action = action;
            obj.section = section;
            obj.doc_uid = uid;            
            params = "[" + JSON.stringify(obj) + "]";
        }

        if (action == 'savesettings') {           
            var role_id = $("#ddlCndJobRole option:selected").val();
            if (role_id == '0') {
                $("#ddlCndJobRole").focus();
                ShowAlertMessage("Message", "Select a Role", "A");
                return false;
            }           
            var categories = [];
            $('.clsSettingDocuments tr td').each(function () {              
                var cat_id = $(this).attr('data-cat_id');  
                var privacy_status = $('#chkcat-' + cat_id).prop('checked') ? 1 : 0;
               
                if (cat_id !=='undefined') {
                    var docs = [];
                    $('#ulcat-' + cat_id + ' li').each(function () {
                        var doc_id = $(this).attr('data-doc_id');
                   
                        if (doc_id !== undefined) {                    
                            var doc_uid = $(this).attr('data-doc_uid');

                            var sort_order = $(this).attr('data-sort_order');
                            var required_status = $('#Mandatory' + cat_id + '-' + doc_id).prop('checked')?1:0;                           
                            docs.push({ "doc_id": doc_id, "doc_uid": doc_uid, "sort_order": sort_order, "required_status": required_status });
                        }
                    });
                    var obj = {};
                    obj.cat_id = cat_id;
                    obj.privacy_status = privacy_status;
                    obj.docs = docs;
                    categories.push(obj);
                    //categories.push({ "cat_id": cat_id, "privacy_status": privacy_status, "docs": docs});
                }
            });         

            obj.action = action;
            obj.section = section;            
            obj.role_id = role_id;
            obj.categories = categories;     

            params = "[" + JSON.stringify(obj) + "]";
        }     
       
        if (params!=='')
            ns_documents.post(params, action, evt);
        else
            ShowAlertMessage("Message", "Sorry ! There is something missing in the parameters, try again.", "A");
    },
    get: function (action, evt, uid) {             
     
        var param = '{"action":"' + action + '","section":"settings","uid":"' + uid + '","role_id":"' + doc_role_id + '"}';
        var params = { json: param }       
        $('#documentSetting_placeholder').html('Loading...<img src="/images/spin.gif" />');     
        ns_ajax.get(
            urls.documents,
            params,
            function (data) {              
                if (data.Status === 'OK') {
                    var objData = data.Response;
                    //if (action == 'view')
                    //    call_tmpl_binder(objcompliance, '/Template/setting_tmpl.html', '#documentSetting_Template', '#documentSetting_placeholder');
                    //else 
                   
                    call_tmpl_binder(objData, '/Template/setting_tmpl.html', '#documentSetting_Template', '#documentSetting_placeholder');

                    setTimeout(function () {   
                        $(init);
                        $(".panel-left").resizable({
                            handleSelector: ".splitter",
                            resizeHeight: false
                        });
                    }, 300);
                }
            });
    },
    post: function (params, action, evt) {       
        var btnid = evt.target.getAttribute("id");        
        $('#' + btnid).html('Process...<img src="/images/spin.gif" />');      
        ns_ajax.post(
            urls.documents,
            params,
            function (response) {               
                $('#' + btnid).html('Save');
                if (response.split('|')[0] === 'OK') {
                    var objResult = jQuery.parseJSON(response.split('|')[1]);
                   
                    ShowAlertMessage("Message", objResult[0].result, "C");
                    if (action == 'deletedocument') {
                        $('#master-' + btnid).remove();
                    }
                    else if (action == 'statuschange') {
                    }
                    else {
                        ns_documents.get('listsettings', '', '');
                        $('#addpagecat').modal('hide');
                        $('#addpage').modal('hide');
                        $('.modal-backdrop').hide('slow');
                    }
                }
                else {
                    ShowAlertMessage("Message", response, "A");
                }
            }
        );
    },
    GetRoles: function () {
        var params="dro=der-dl";
        $('#ddlCndJobRole, #ddlCndJobRoleCategory').html('<option value="0">Default Role</option>');      
        ns_ajax.get(
            urls.employeesApi,
            params,
            function (data) {
                if (data.Status === 'OK') {
                    var obj = data.Response;// $.parseJSON(response.split('|')[1]);
                    var currentparent = "", previousparent = "";
                    $.each(obj.eroles, function (key, value) {
                         /*   currentparent = value.parent_id;*/
                        var color = '#000';// (value.color_code == '' || value.color_code == null) ? '#ccc' : value.color_code;
                            //if (previousparent == "" || currentparent != previousparent) {
                            //    $('#ddlCndJobRole, #ddlCndJobRoleCategory').append($("<optgroup style='font-weight:bold;background-color:#ccc;' label='" + value.parent_name + "' id='" + value.parent_id + "'></optgroup>"));
                            //    previousparent = value.parent_id;
                            //}
                            /*if (value.role_id != value.parent_id)*/
                                $('#ddlCndJobRole, #ddlCndJobRoleCategory').append($("<option style='color:" + color + ";'></option>").val(value.role_id).html(value.role_name));
                        })              
                }
            }
        );
    },
    GetCountryLists: function () {
        $("#txtDocRequiredIssueCountry").autocomplete({
            minLength: 0,
            source: function (request, response) {
                ns_ajax.get(
                    urls.documents,
                    {json: '{"action":"countrylist","section":"settings","country_name":"' + request.term + '"}' },            
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
    getParentDocs: function () {
        try {
            $('#ddlDocMasterParent').html('<option value="0" data-uid="">Choose a Parent...</option>');
            var param = '{"action":"getdocumentparents","section":"settings","uid":""}';
            var params = { json: param };      
            ns_ajax.get(
                urls.documents,
                params,
                function (data) {                  
                    if (data.Status== 'OK') {
                        $.each(data.Response.doc_parent, function (key, value) {
                            $('#ddlDocMasterParent').append('<option value="' + value.doc_id + '" data-uid=' + value.doc_uid + ' class="capitalize">' + value.doc_name + '</option>');
                        });   
                        $('#ddlDocMasterParent').val(doc_parent_id);
                    }
                });
        }
        catch (err) {
            ShowAlertMessage("Error", err.message, 'A');
        }
    },
    ResetDocForm: function () {
        $('.docClear').val('');
        $('#ddlDocMasterParent').val('0');
        $('.clsswichDoc').prop('checked', false);
        $('#chkDocMasterStatus').prop('checked', true);
        $('#divDocumentIssueCountry, #divDocumentParent').hide('slow');
        $('#txtDocRequiredIssueCountry').attr('data-countryid', '0');
    },
    ResetCategoryForm: function () {
        $('#ddlCndJobRoleCategory').val(0);
        $('.catClear').val('');
        $('.ClslblDocCategory').prop('checked', false);
        $('.clsswichDoc').prop('checked', false);        
        $('#chkDocCategoryStatus').prop('checked', true); 
        $('#btnDocCategorySave').html('Save');
        $('#btnDocCategorySave').attr('data-uid', '');
        $('#btnDocCategorySave').attr('data-action', 'addcategory');   
    },    
    EditDoc: function (dataDocJson, add_more_status) {
        call_tmpl_binder(dataDocJson, '/Template/cnd_profile_tmpl.html', '#divAddEditDoc_Template', '#divAddEditDoc_Placeholder');

        setTimeout(
            function () {
                $('#btnsavedocument').attr('add_more_status', add_more_status);
            }, 300);

    },
  
}

function getLastOrderNumber() {
    $('.clsSettingDocuments tr td').each(function () {
        var cat_id = $(this).attr('data-cat_id');      
        if (cat_id !== 'undefined') {

            var orderNumber = $('#ulcat-' + cat_id + ' li').length;
          
            $('#ulcat-' + cat_id + ' li').each(function () {
                var doc_id = $(this).attr('data-doc_id');
                if (doc_id !== 'undefined') {
                  
                }
            });        
        }
    }); 
}

function SeachRolesfromList() {
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById("txtsearchDocs");
    filter = input.value.toUpperCase();
    ul = document.getElementById("docRolelist");
    li = ul.getElementsByClassName("liRolelist");
    for (i = 0; i < li.length; i++) {       
        var lbl = li[i];       
        txtValue = lbl.getAttribute('data-name');        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//Drag And Drop Docs

function dragstartDoc_handler(ev) { 
    ev.dataTransfer.setData("data-json", ev.target.getAttribute("data-json")); 
}
function dragover_handler(ev) {
    ev.preventDefault();
}
function dropToMoveDoc_handler(ev) {
    ev.preventDefault(); 
    var ul_id = ev.target.id;  
    var cat_id = ul_id.replace('ulcat-', '');    
    var docJson = ev.dataTransfer.getData("data-json");
    var role_id = $("#ddlCndJobRole option:selected").val(); 
    var sort_order = $('#' + ul_id + ' li').length+1;
   
    if (role_id == '0') {
        $("#ddlCndJobRole").focus();
        ShowAlertMessage("Message", "Select a Role", "A");
        return false;
    }
    if (docJson !== '') {      
        var obj = JSON.parse(docJson);
        obj.cat_id = cat_id;
        obj.sort_order = sort_order;
        jQuery('#SingaldocumentSetting_Template').tmpl(obj).appendTo('#' + ul_id);
    }
}

