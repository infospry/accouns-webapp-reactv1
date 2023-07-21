import React from 'react'

export default function Documents() {
    return (
        <>
            <div class="clearfix">
                <div class="card mb-0">
                    <div class="i_action d-flex justify-content-between align-items-center p-2 mb-0">
                        <button type="button" class="btn btn-primary dr-breakout-btn">
                            <i class="zmdi zmdi-more"></i> <span class="caret"></span>
                        </button>
                        <div class="dr-breakout displayblk">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="input-group mr-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <i
                                            class="zmdi zmdi-accounts-alt"></i></span>
                                    </div>
                                    <select id="ddlCndJobRole" name="ddljobtitle0" class="form-control">
                                        <option value="0" selected="selected">Default Role
                                        </option>
                                        <option style={{ color: '#000' }} value="111">Advance Nurse
                                            Practitioner</option>
                                        <option style={{ color: '#000' }} value="114">Care Assistant
                                        </option>
                                        <option style={{ color: '#000' }} value="115">Clinical
                                            Practitioner</option>
                                        <option style={{ color: '#000' }} value="116">Forensic Nurse
                                        </option>
                                        <option style={{ color: '#000' }} value="117">General
                                            Practitioner</option>
                                        <option style={{ color: '#000' }} value="118">HCA</option>
                                        <option style={{ color: '#000' }} value="119">Home Care
                                        </option>
                                        <option style={{ color: '#000' }} value="120">Hospital Doctor
                                        </option>
                                        <option style={{ color: '#000' }} value="122">Opthalmologist
                                        </option>
                                        <option style={{ color: '#000' }} value="123">Pharmacist
                                        </option>
                                        <option style={{ color: '#000' }} value="127">Practice Nurse
                                        </option>
                                        <option style={{ color: '#000' }} value="130">Receptionist
                                        </option>
                                        <option style={{ color: '#000' }} value="131">Registered
                                            General Nurse</option>
                                        <option style={{ color: '#000' }} value="133">Support Worker
                                        </option>
                                    </select>
                                    <div class="input-group-append">
                                        <a class="btn btn-primary cursor ml-1"
                                            href="https://empapp.thestaffport.com/Settings/JobRoles"><i
                                                class="zmdi zmdi-plus"></i> Role</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span>
                            <button id="startDocsTourBtn" data-tour-action="docs"
                                class="btn btn-success">Start Tour</button>
                        </span>

                        <div>
                            1. Create your compliance document list <br />2. Create Category (<a
                                id="btn-viewsamplepage" data-toggle="modal"
                                data-target="#viewsamplepage"
                                data-original-title="click here to view sample">View
                                Sample</a>).
                        </div>
                        <div class="btn-group bdrr">
                            <button id="AddCategoryAndDocs"
                                class="btn btn-success btn-add  dropdown-toggle" type="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="ti ti-plus"></i> Item
                            </button>
                            <div class="dropdown-menu">
                                <a id="addnewdoc1" class="dropdown-item cls-document-setting"
                                    data-action="addnewdoc" data-uid="" data-toggle="modal"
                                    data-target="#addpage">Add Document</a>
                                <a id="addnewcategory2" class="dropdown-item cls-document-setting"
                                    data-target="#addpagecat" data-toggle="modal" data-uid="">Add
                                    Category</a>
                            </div>
                            <a id="btn-cls-document-setting"
                                class="btn btn-primary cls-document-setting ml-1" data-action="refresh"
                                data-uid=""><i class="zmdi zmdi-refresh">&nbsp; </i></a>
                        </div>
                    </div>
                </div>
                <div class="body pt-0 pb-0 pl-0 pr-0">
                    <div id="documentSetting_placeholder" class="d-flex">
                        <div class="panel-container">
                            <div class="panel-left">
                                <div class="formobile">
                                    <div class="card mb-0 ">
                                        <div class="state_w1 mb-0">
                                            <h2 class="font-18 col-blue ml-2"> Documents List <a
                                                id="btn-cls-doc-search"
                                                class="float-right cls-doc-search"><i
                                                    class="ti ti-filter"></i></a> </h2>
                                            <div id="divdocsearch" class="ml-2 dnnone mt-1">
                                                <input id="txtsearchDocs" type="text"
                                                    placeholder="Type here to search"
                                                    onkeyup="SeachRolesfromList()" class="form-control" />
                                            </div>
                                        </div>
                                        <hr class="mt-1 mb-2" />
                                        <ul id="docRolelist"
                                            class="list-unstyled c_review float-left connected-sortable docRolelist">
                                            <li id="master-579B8A75-3B01-4192-B1A6-824B7603B8AA"
                                                class="liRolelist  disabled"
                                                data-name="Basic Life Support"
                                                data-json="{&quot;doc_id&quot;:244,&quot;doc_uid&quot;:&quot;579B8A75-3B01-4192-B1A6-824B7603B8AA&quot;,&quot;doc_name&quot;:&quot;Basic Life Support&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:1}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">1</span><span
                                                        class="col-info"><b> Basic Life
                                                            Support</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="579B8A75-3B01-4192-B1A6-824B7603B8AA"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:244,&quot;doc_uid&quot;:&quot;579B8A75-3B01-4192-B1A6-824B7603B8AA&quot;,&quot;doc_name&quot;:&quot;Basic Life Support&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:1}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-CC60380F-99A6-4093-8DFF-317F3F319777"
                                                class="liRolelist  disabled"
                                                data-name="Conflict Resolution"
                                                data-json="{&quot;doc_id&quot;:257,&quot;doc_uid&quot;:&quot;CC60380F-99A6-4093-8DFF-317F3F319777&quot;,&quot;doc_name&quot;:&quot;Conflict Resolution&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">2</span><span
                                                        class="col-info"><b> Conflict
                                                            Resolution</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul class="dropdown-menu dropdown-menu-right"
                                                                x-placement="bottom-end">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="CC60380F-99A6-4093-8DFF-317F3F319777"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:257,&quot;doc_uid&quot;:&quot;CC60380F-99A6-4093-8DFF-317F3F319777&quot;,&quot;doc_name&quot;:&quot;Conflict Resolution&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="CC60380F-99A6-4093-8DFF-317F3F319777"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="CC60380F-99A6-4093-8DFF-317F3F319777"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-C7032D62-381F-4D28-B95F-745BB17F6978"
                                                class="liRolelist  disabled" data-name="CV"
                                                data-json="{&quot;doc_id&quot;:235,&quot;doc_uid&quot;:&quot;C7032D62-381F-4D28-B95F-745BB17F6978&quot;,&quot;doc_name&quot;:&quot;CV&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;CV describing the candidate&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:14}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">3</span><span
                                                        class="col-info"><b> CV</b></span>
                                                    </h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="C7032D62-381F-4D28-B95F-745BB17F6978"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:235,&quot;doc_uid&quot;:&quot;C7032D62-381F-4D28-B95F-745BB17F6978&quot;,&quot;doc_name&quot;:&quot;CV&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;CV describing the candidate&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:14}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-A7DB0A41-2388-4D1F-9496-83A19C851895"
                                                class="liRolelist  disabled"
                                                data-name="CV in word ( for future editing)"
                                                data-json="{&quot;doc_id&quot;:259,&quot;doc_uid&quot;:&quot;A7DB0A41-2388-4D1F-9496-83A19C851895&quot;,&quot;doc_name&quot;:&quot;CV in word ( for future editing)&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">4</span><span
                                                        class="col-info"><b> CV in word (
                                                            for future editing)</b></span>
                                                    </h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="A7DB0A41-2388-4D1F-9496-83A19C851895"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:259,&quot;doc_uid&quot;:&quot;A7DB0A41-2388-4D1F-9496-83A19C851895&quot;,&quot;doc_name&quot;:&quot;CV in word ( for future editing)&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="A7DB0A41-2388-4D1F-9496-83A19C851895"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="A7DB0A41-2388-4D1F-9496-83A19C851895"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-3A57397D-E07C-4BAC-9DC0-3E2F0CF3E4CC"
                                                class="liRolelist  disabled" data-name="DBS"
                                                data-json="{&quot;doc_id&quot;:239,&quot;doc_uid&quot;:&quot;3A57397D-E07C-4BAC-9DC0-3E2F0CF3E4CC&quot;,&quot;doc_name&quot;:&quot;DBS&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;CRB (previous Name)&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:14}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">5</span><span
                                                        class="col-info"><b> DBS</b></span>
                                                    </h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="3A57397D-E07C-4BAC-9DC0-3E2F0CF3E4CC"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:239,&quot;doc_uid&quot;:&quot;3A57397D-E07C-4BAC-9DC0-3E2F0CF3E4CC&quot;,&quot;doc_name&quot;:&quot;DBS&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;CRB (previous Name)&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:14}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-A9C6E8CE-8410-4E75-827F-6AB4AB3DA9E1"
                                                class="liRolelist  disabled"
                                                data-name="DBS Update check"
                                                data-json="{&quot;doc_id&quot;:238,&quot;doc_uid&quot;:&quot;A9C6E8CE-8410-4E75-827F-6AB4AB3DA9E1&quot;,&quot;doc_name&quot;:&quot;DBS Update check&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;If already if Update service&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">6</span><span
                                                        class="col-info"><b> DBS Update
                                                            check</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="A9C6E8CE-8410-4E75-827F-6AB4AB3DA9E1"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:238,&quot;doc_uid&quot;:&quot;A9C6E8CE-8410-4E75-827F-6AB4AB3DA9E1&quot;,&quot;doc_name&quot;:&quot;DBS Update check&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;If already if Update service&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="A9C6E8CE-8410-4E75-827F-6AB4AB3DA9E1"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="A9C6E8CE-8410-4E75-827F-6AB4AB3DA9E1"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-C1991EA3-BA74-4405-98EF-512A4CCACB9F"
                                                class="liRolelist  disabled"
                                                data-name="Equality &amp; Diversity"
                                                data-json="{&quot;doc_id&quot;:254,&quot;doc_uid&quot;:&quot;C1991EA3-BA74-4405-98EF-512A4CCACB9F&quot;,&quot;doc_name&quot;:&quot;Equality &amp; Diversity&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:1}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">7</span><span
                                                        class="col-info"><b> Equality &amp;
                                                            Diversity</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="C1991EA3-BA74-4405-98EF-512A4CCACB9F"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:254,&quot;doc_uid&quot;:&quot;C1991EA3-BA74-4405-98EF-512A4CCACB9F&quot;,&quot;doc_name&quot;:&quot;Equality &amp; Diversity&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:1}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-EC57F6B2-9990-4C88-A965-8FC5B9BC65AD"
                                                class="liRolelist  disabled" data-name="Fit To work"
                                                data-json="{&quot;doc_id&quot;:263,&quot;doc_uid&quot;:&quot;EC57F6B2-9990-4C88-A965-8FC5B9BC65AD&quot;,&quot;doc_name&quot;:&quot;Fit To work&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:3}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">8</span><span
                                                        class="col-info"><b> Fit To
                                                            work</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="EC57F6B2-9990-4C88-A965-8FC5B9BC65AD"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:263,&quot;doc_uid&quot;:&quot;EC57F6B2-9990-4C88-A965-8FC5B9BC65AD&quot;,&quot;doc_name&quot;:&quot;Fit To work&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:3}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-77F11218-E11F-4EBF-BF45-F99B420FB9F0"
                                                class="liRolelist  disabled" data-name="Food Hygiene"
                                                data-json="{&quot;doc_id&quot;:253,&quot;doc_uid&quot;:&quot;77F11218-E11F-4EBF-BF45-F99B420FB9F0&quot;,&quot;doc_name&quot;:&quot;Food Hygiene&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:3}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">9</span><span
                                                        class="col-info"><b> Food
                                                            Hygiene</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="77F11218-E11F-4EBF-BF45-F99B420FB9F0"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:253,&quot;doc_uid&quot;:&quot;77F11218-E11F-4EBF-BF45-F99B420FB9F0&quot;,&quot;doc_name&quot;:&quot;Food Hygiene&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:3}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-11AE1703-7202-4260-86E6-E89C6346EAEA"
                                                class="liRolelist  disabled"
                                                data-name="GMC/NMC/Professional Reg Number"
                                                data-json="{&quot;doc_id&quot;:264,&quot;doc_uid&quot;:&quot;11AE1703-7202-4260-86E6-E89C6346EAEA&quot;,&quot;doc_name&quot;:&quot;GMC/NMC/Professional Reg Number&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Professional Registration Number&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">10</span><span
                                                        class="col-info"><b>
                                                            GMC/NMC/Professional Reg
                                                            Number</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="11AE1703-7202-4260-86E6-E89C6346EAEA"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:264,&quot;doc_uid&quot;:&quot;11AE1703-7202-4260-86E6-E89C6346EAEA&quot;,&quot;doc_name&quot;:&quot;GMC/NMC/Professional Reg Number&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Professional Registration Number&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="11AE1703-7202-4260-86E6-E89C6346EAEA"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="11AE1703-7202-4260-86E6-E89C6346EAEA"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-F726E92E-7B9E-470B-8E8E-D0C574A13155"
                                                class="liRolelist  disabled"
                                                data-name="Health &amp; Safety"
                                                data-json="{&quot;doc_id&quot;:256,&quot;doc_uid&quot;:&quot;F726E92E-7B9E-470B-8E8E-D0C574A13155&quot;,&quot;doc_name&quot;:&quot;Health &amp; Safety&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:3}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">11</span><span
                                                        class="col-info"><b> Health &amp;
                                                            Safety</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="F726E92E-7B9E-470B-8E8E-D0C574A13155"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:256,&quot;doc_uid&quot;:&quot;F726E92E-7B9E-470B-8E8E-D0C574A13155&quot;,&quot;doc_name&quot;:&quot;Health &amp; Safety&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:3}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-36A9BBF3-A8F1-4F07-AAA4-E3892A5A7D2A"
                                                class="liRolelist  disabled" data-name="Hepatitis B"
                                                data-json="{&quot;doc_id&quot;:243,&quot;doc_uid&quot;:&quot;36A9BBF3-A8F1-4F07-AAA4-E3892A5A7D2A&quot;,&quot;doc_name&quot;:&quot;Hepatitis B&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Titre levels &gt;100&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">12</span><span
                                                        class="col-info"><b> Hepatitis
                                                            B</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="36A9BBF3-A8F1-4F07-AAA4-E3892A5A7D2A"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:243,&quot;doc_uid&quot;:&quot;36A9BBF3-A8F1-4F07-AAA4-E3892A5A7D2A&quot;,&quot;doc_name&quot;:&quot;Hepatitis B&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Titre levels &gt;100&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="36A9BBF3-A8F1-4F07-AAA4-E3892A5A7D2A"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="36A9BBF3-A8F1-4F07-AAA4-E3892A5A7D2A"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-0E667A73-553B-4424-8CBF-B127549349FD"
                                                class="liRolelist  disabled"
                                                data-name="Immunisation (other than Hep-B)"
                                                data-json="{&quot;doc_id&quot;:242,&quot;doc_uid&quot;:&quot;0E667A73-553B-4424-8CBF-B127549349FD&quot;,&quot;doc_name&quot;:&quot;Immunisation (other than Hep-B)&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Combine into single file if tehre is morethan one file&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">13</span><span
                                                        class="col-info"><b> Immunisation
                                                            (other than Hep-B)</b></span>
                                                    </h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="0E667A73-553B-4424-8CBF-B127549349FD"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:242,&quot;doc_uid&quot;:&quot;0E667A73-553B-4424-8CBF-B127549349FD&quot;,&quot;doc_name&quot;:&quot;Immunisation (other than Hep-B)&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Combine into single file if tehre is morethan one file&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="0E667A73-553B-4424-8CBF-B127549349FD"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="0E667A73-553B-4424-8CBF-B127549349FD"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-634F3F42-74CA-4118-BC58-EE7B02788A10"
                                                class="liRolelist  disabled"
                                                data-name="Infection Control"
                                                data-json="{&quot;doc_id&quot;:258,&quot;doc_uid&quot;:&quot;634F3F42-74CA-4118-BC58-EE7B02788A10&quot;,&quot;doc_name&quot;:&quot;Infection Control&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">14</span><span
                                                        class="col-info"><b> Infection
                                                            Control</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="634F3F42-74CA-4118-BC58-EE7B02788A10"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:258,&quot;doc_uid&quot;:&quot;634F3F42-74CA-4118-BC58-EE7B02788A10&quot;,&quot;doc_name&quot;:&quot;Infection Control&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="634F3F42-74CA-4118-BC58-EE7B02788A10"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="634F3F42-74CA-4118-BC58-EE7B02788A10"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-495B9663-F4AD-488C-805F-580FD94DEF63"
                                                class="liRolelist  disabled"
                                                data-name="Information Governance"
                                                data-json="{&quot;doc_id&quot;:255,&quot;doc_uid&quot;:&quot;495B9663-F4AD-488C-805F-580FD94DEF63&quot;,&quot;doc_name&quot;:&quot;Information Governance&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">15</span><span
                                                        class="col-info"><b> Information
                                                            Governance</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="495B9663-F4AD-488C-805F-580FD94DEF63"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:255,&quot;doc_uid&quot;:&quot;495B9663-F4AD-488C-805F-580FD94DEF63&quot;,&quot;doc_name&quot;:&quot;Information Governance&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="495B9663-F4AD-488C-805F-580FD94DEF63"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="495B9663-F4AD-488C-805F-580FD94DEF63"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-166304E4-5912-437E-85EC-4AB2BFAAC6E3"
                                                class="liRolelist  disabled" data-name="Manual Handling"
                                                data-json="{&quot;doc_id&quot;:248,&quot;doc_uid&quot;:&quot;166304E4-5912-437E-85EC-4AB2BFAAC6E3&quot;,&quot;doc_name&quot;:&quot;Manual Handling&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">16</span><span
                                                        class="col-info"><b> Manual
                                                            Handling</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="166304E4-5912-437E-85EC-4AB2BFAAC6E3"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:248,&quot;doc_uid&quot;:&quot;166304E4-5912-437E-85EC-4AB2BFAAC6E3&quot;,&quot;doc_name&quot;:&quot;Manual Handling&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="166304E4-5912-437E-85EC-4AB2BFAAC6E3"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="166304E4-5912-437E-85EC-4AB2BFAAC6E3"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-D8322DA6-4417-4D18-B165-85709D577794"
                                                class="liRolelist  disabled"
                                                data-name="Medical Indemnity"
                                                data-json="{&quot;doc_id&quot;:236,&quot;doc_uid&quot;:&quot;D8322DA6-4417-4D18-B165-85709D577794&quot;,&quot;doc_name&quot;:&quot;Medical Indemnity&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;No. of  sessions for OOH and In-hours&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">17</span><span
                                                        class="col-info"><b> Medical
                                                            Indemnity</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="D8322DA6-4417-4D18-B165-85709D577794"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:236,&quot;doc_uid&quot;:&quot;D8322DA6-4417-4D18-B165-85709D577794&quot;,&quot;doc_name&quot;:&quot;Medical Indemnity&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;No. of  sessions for OOH and In-hours&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="D8322DA6-4417-4D18-B165-85709D577794"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="D8322DA6-4417-4D18-B165-85709D577794"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-7C69E902-CB00-459A-B95A-0B23B66167F9"
                                                class="liRolelist  disabled" data-name="NI Number"
                                                data-json="{&quot;doc_id&quot;:247,&quot;doc_uid&quot;:&quot;7C69E902-CB00-459A-B95A-0B23B66167F9&quot;,&quot;doc_name&quot;:&quot;NI Number&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;National Insurance Number&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">18</span><span
                                                        class="col-info"><b> NI
                                                            Number</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="7C69E902-CB00-459A-B95A-0B23B66167F9"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:247,&quot;doc_uid&quot;:&quot;7C69E902-CB00-459A-B95A-0B23B66167F9&quot;,&quot;doc_name&quot;:&quot;NI Number&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;National Insurance Number&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="7C69E902-CB00-459A-B95A-0B23B66167F9"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="7C69E902-CB00-459A-B95A-0B23B66167F9"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-8B98B7F5-A892-47C0-ADF0-1CD340A2B8A4"
                                                class="liRolelist  disabled" data-name="Passport"
                                                data-json="{&quot;doc_id&quot;:232,&quot;doc_uid&quot;:&quot;8B98B7F5-A892-47C0-ADF0-1CD340A2B8A4&quot;,&quot;doc_name&quot;:&quot;Passport&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Must show clear Bio page&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:14}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">19</span><span
                                                        class="col-info"><b>
                                                            Passport</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="8B98B7F5-A892-47C0-ADF0-1CD340A2B8A4"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:232,&quot;doc_uid&quot;:&quot;8B98B7F5-A892-47C0-ADF0-1CD340A2B8A4&quot;,&quot;doc_name&quot;:&quot;Passport&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Must show clear Bio page&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:14}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-D0F462E5-F280-47F8-83E4-A222EF8FC843"
                                                class="liRolelist  disabled"
                                                data-name="Performers List - Evidence"
                                                data-json="{&quot;doc_id&quot;:234,&quot;doc_uid&quot;:&quot;D0F462E5-F280-47F8-83E4-A222EF8FC843&quot;,&quot;doc_name&quot;:&quot;Performers List - Evidence&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;for GPs only&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">20</span><span
                                                        class="col-info"><b> Performers List
                                                            - Evidence</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="D0F462E5-F280-47F8-83E4-A222EF8FC843"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:234,&quot;doc_uid&quot;:&quot;D0F462E5-F280-47F8-83E4-A222EF8FC843&quot;,&quot;doc_name&quot;:&quot;Performers List - Evidence&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;for GPs only&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="D0F462E5-F280-47F8-83E4-A222EF8FC843"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="D0F462E5-F280-47F8-83E4-A222EF8FC843"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-F3B2814B-59A5-4690-81FC-60160DC0F852"
                                                class="liRolelist  disabled" data-name="Photo ID"
                                                data-json="{&quot;doc_id&quot;:246,&quot;doc_uid&quot;:&quot;F3B2814B-59A5-4690-81FC-60160DC0F852&quot;,&quot;doc_name&quot;:&quot;Photo ID&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Driving licence or Biometric card (other than passport)&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:1}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">21</span><span
                                                        class="col-info"><b> Photo
                                                            ID</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="F3B2814B-59A5-4690-81FC-60160DC0F852"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:246,&quot;doc_uid&quot;:&quot;F3B2814B-59A5-4690-81FC-60160DC0F852&quot;,&quot;doc_name&quot;:&quot;Photo ID&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Driving licence or Biometric card (other than passport)&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:1}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-E8931F2A-E669-47D4-8B27-BD447B83D3B9"
                                                class="liRolelist  disabled"
                                                data-name="Proof of Address -1"
                                                data-json="{&quot;doc_id&quot;:260,&quot;doc_uid&quot;:&quot;E8931F2A-E669-47D4-8B27-BD447B83D3B9&quot;,&quot;doc_name&quot;:&quot;Proof of Address -1&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Record Date of evidence (Must be &lt;3 months)&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:14}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">22</span><span
                                                        class="col-info"><b> Proof of
                                                            Address -1</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="E8931F2A-E669-47D4-8B27-BD447B83D3B9"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:260,&quot;doc_uid&quot;:&quot;E8931F2A-E669-47D4-8B27-BD447B83D3B9&quot;,&quot;doc_name&quot;:&quot;Proof of Address -1&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Record Date of evidence (Must be &lt;3 months)&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:14}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-9A74C7E1-1CDC-4280-87A4-78BD5A487BEA"
                                                class="liRolelist  disabled"
                                                data-name="Proof of address -2"
                                                data-json="{&quot;doc_id&quot;:261,&quot;doc_uid&quot;:&quot;9A74C7E1-1CDC-4280-87A4-78BD5A487BEA&quot;,&quot;doc_name&quot;:&quot;Proof of address -2&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;ecord Date of evidence (Must be &lt;3 months)&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:1}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">23</span><span
                                                        class="col-info"><b> Proof of
                                                            address -2</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="9A74C7E1-1CDC-4280-87A4-78BD5A487BEA"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:261,&quot;doc_uid&quot;:&quot;9A74C7E1-1CDC-4280-87A4-78BD5A487BEA&quot;,&quot;doc_name&quot;:&quot;Proof of address -2&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;ecord Date of evidence (Must be &lt;3 months)&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:1}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-FBE41798-902F-4A90-8F09-83854AB0263C"
                                                class="liRolelist  disabled" data-name="Qualifications"
                                                data-json="{&quot;doc_id&quot;:245,&quot;doc_uid&quot;:&quot;FBE41798-902F-4A90-8F09-83854AB0263C&quot;,&quot;doc_name&quot;:&quot;Qualifications&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;From CV or attach certificates&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:1}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">24</span><span
                                                        class="col-info"><b>
                                                            Qualifications</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="FBE41798-902F-4A90-8F09-83854AB0263C"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:245,&quot;doc_uid&quot;:&quot;FBE41798-902F-4A90-8F09-83854AB0263C&quot;,&quot;doc_name&quot;:&quot;Qualifications&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;From CV or attach certificates&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:1}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-E57EA1E6-AF4E-40BE-B8E3-1E0763DCC4A2"
                                                class="liRolelist  disabled" data-name="Reference 1"
                                                data-json="{&quot;doc_id&quot;:240,&quot;doc_uid&quot;:&quot;E57EA1E6-AF4E-40BE-B8E3-1E0763DCC4A2&quot;,&quot;doc_name&quot;:&quot;Reference 1&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Reference 1 of 2&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:2}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">25</span><span
                                                        class="col-info"><b> Reference
                                                            1</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="E57EA1E6-AF4E-40BE-B8E3-1E0763DCC4A2"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:240,&quot;doc_uid&quot;:&quot;E57EA1E6-AF4E-40BE-B8E3-1E0763DCC4A2&quot;,&quot;doc_name&quot;:&quot;Reference 1&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Reference 1 of 2&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:2}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-A06E90C5-1F74-46BD-B5E1-D0AD924F86C5"
                                                class="liRolelist  disabled" data-name="Reference 2"
                                                data-json="{&quot;doc_id&quot;:241,&quot;doc_uid&quot;:&quot;A06E90C5-1F74-46BD-B5E1-D0AD924F86C5&quot;,&quot;doc_name&quot;:&quot;Reference 2&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Reference 2 of 2&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">26</span><span
                                                        class="col-info"><b> Reference
                                                            2</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="A06E90C5-1F74-46BD-B5E1-D0AD924F86C5"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:241,&quot;doc_uid&quot;:&quot;A06E90C5-1F74-46BD-B5E1-D0AD924F86C5&quot;,&quot;doc_name&quot;:&quot;Reference 2&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Reference 2 of 2&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="A06E90C5-1F74-46BD-B5E1-D0AD924F86C5"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="A06E90C5-1F74-46BD-B5E1-D0AD924F86C5"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-58EBAFD0-572E-4A44-A129-22DDEAD76711"
                                                class="liRolelist  disabled"
                                                data-name="Safe Guarding Adults (SOVA) Level 2 or above"
                                                data-json="{&quot;doc_id&quot;:252,&quot;doc_uid&quot;:&quot;58EBAFD0-572E-4A44-A129-22DDEAD76711&quot;,&quot;doc_name&quot;:&quot;Safe Guarding Adults (SOVA) Level 2 or above&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">27</span><span
                                                        class="col-info"><b> Safe Guarding
                                                            Adults (SOVA) Level 2 or
                                                            above</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="58EBAFD0-572E-4A44-A129-22DDEAD76711"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:252,&quot;doc_uid&quot;:&quot;58EBAFD0-572E-4A44-A129-22DDEAD76711&quot;,&quot;doc_name&quot;:&quot;Safe Guarding Adults (SOVA) Level 2 or above&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="58EBAFD0-572E-4A44-A129-22DDEAD76711"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="58EBAFD0-572E-4A44-A129-22DDEAD76711"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-5026EC4F-60CD-42DD-A700-9F66A1546C9B"
                                                class="liRolelist  disabled"
                                                data-name="Safe Guarding Adults (SOVA) Level 3"
                                                data-json="{&quot;doc_id&quot;:249,&quot;doc_uid&quot;:&quot;5026EC4F-60CD-42DD-A700-9F66A1546C9B&quot;,&quot;doc_name&quot;:&quot;Safe Guarding Adults (SOVA) Level 3&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">28</span><span
                                                        class="col-info"><b> Safe Guarding
                                                            Adults (SOVA) Level 3</b></span>
                                                    </h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="5026EC4F-60CD-42DD-A700-9F66A1546C9B"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:249,&quot;doc_uid&quot;:&quot;5026EC4F-60CD-42DD-A700-9F66A1546C9B&quot;,&quot;doc_name&quot;:&quot;Safe Guarding Adults (SOVA) Level 3&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="5026EC4F-60CD-42DD-A700-9F66A1546C9B"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="5026EC4F-60CD-42DD-A700-9F66A1546C9B"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-2BEDE42D-366A-4692-812F-D4F61DE733A3"
                                                class="liRolelist  disabled"
                                                data-name="Safe Guarding Children (SOCA) Level 2 or Above"
                                                data-json="{&quot;doc_id&quot;:251,&quot;doc_uid&quot;:&quot;2BEDE42D-366A-4692-812F-D4F61DE733A3&quot;,&quot;doc_name&quot;:&quot;Safe Guarding Children (SOCA) Level 2 or Above&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">29</span><span
                                                        class="col-info"><b> Safe Guarding
                                                            Children (SOCA) Level 2 or
                                                            Above</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="2BEDE42D-366A-4692-812F-D4F61DE733A3"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:251,&quot;doc_uid&quot;:&quot;2BEDE42D-366A-4692-812F-D4F61DE733A3&quot;,&quot;doc_name&quot;:&quot;Safe Guarding Children (SOCA) Level 2 or Above&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="2BEDE42D-366A-4692-812F-D4F61DE733A3"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="2BEDE42D-366A-4692-812F-D4F61DE733A3"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-E5CF03BE-DB29-476D-A761-32CC141058D2"
                                                class="liRolelist  disabled"
                                                data-name="Safe Guarding Children (SOCA) Level 3"
                                                data-json="{&quot;doc_id&quot;:250,&quot;doc_uid&quot;:&quot;E5CF03BE-DB29-476D-A761-32CC141058D2&quot;,&quot;doc_name&quot;:&quot;Safe Guarding Children (SOCA) Level 3&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">30</span><span
                                                        class="col-info"><b> Safe Guarding
                                                            Children (SOCA) Level
                                                            3</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="E5CF03BE-DB29-476D-A761-32CC141058D2"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:250,&quot;doc_uid&quot;:&quot;E5CF03BE-DB29-476D-A761-32CC141058D2&quot;,&quot;doc_name&quot;:&quot;Safe Guarding Children (SOCA) Level 3&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="E5CF03BE-DB29-476D-A761-32CC141058D2"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="E5CF03BE-DB29-476D-A761-32CC141058D2"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-2B552BA0-B0EA-469B-9FCC-CD1FEEC884EB"
                                                class="liRolelist  disabled" data-name="Smart Card"
                                                data-json="{&quot;doc_id&quot;:262,&quot;doc_uid&quot;:&quot;2B552BA0-B0EA-469B-9FCC-CD1FEEC884EB&quot;,&quot;doc_name&quot;:&quot;Smart Card&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;NHS smart card Number&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:1}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">31</span><span
                                                        class="col-info"><b> Smart
                                                            Card</b></span></h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="2B552BA0-B0EA-469B-9FCC-CD1FEEC884EB"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:262,&quot;doc_uid&quot;:&quot;2B552BA0-B0EA-469B-9FCC-CD1FEEC884EB&quot;,&quot;doc_name&quot;:&quot;Smart Card&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;NHS smart card Number&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:1}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-E61C5640-06D2-4766-BA42-0E8D8B8A681B"
                                                class="liRolelist  disabled"
                                                data-name="Traning (CCT/PMETB/JCPTGP)"
                                                data-json="{&quot;doc_id&quot;:237,&quot;doc_uid&quot;:&quot;E61C5640-06D2-4766-BA42-0E8D8B8A681B&quot;,&quot;doc_name&quot;:&quot;Traning (CCT/PMETB/JCPTGP)&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Evidence of Completion of GP training if there is no MRCGP&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">32</span><span
                                                        class="col-info"><b> Traning
                                                            (CCT/PMETB/JCPTGP)</b></span>
                                                    </h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="E61C5640-06D2-4766-BA42-0E8D8B8A681B"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:237,&quot;doc_uid&quot;:&quot;E61C5640-06D2-4766-BA42-0E8D8B8A681B&quot;,&quot;doc_name&quot;:&quot;Traning (CCT/PMETB/JCPTGP)&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Evidence of Completion of GP training if there is no MRCGP&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:0}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                                <li><a id="E61C5640-06D2-4766-BA42-0E8D8B8A681B"
                                                                    class="cls-document-setting"
                                                                    data-action="deletedocument"
                                                                    data-uid="E61C5640-06D2-4766-BA42-0E8D8B8A681B"><i
                                                                        class="zmdi zmdi-delete"></i>
                                                                    Delete</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li id="master-578B8674-9639-4E56-9B00-1A7E5E2E42AD"
                                                class="liRolelist  disabled" data-name="Visa"
                                                data-json="{&quot;doc_id&quot;:233,&quot;doc_uid&quot;:&quot;578B8674-9639-4E56-9B00-1A7E5E2E42AD&quot;,&quot;doc_name&quot;:&quot;Visa&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Needed only for Non-British passports. also upload Biometric card if that is the only evidence of renewal is available&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:1}"
                                                ondragstart="dragstartDoc_handler(event);"
                                                draggable="true">
                                                <div class="header p-1">
                                                    <h6><span class="doc-numbers">33</span><span
                                                        class="col-info"><b> Visa</b></span>
                                                    </h6>
                                                    <ul class="header-dropdown">
                                                        <li class="dropdown"> <a
                                                            href="#"
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown" role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="zmdi zmdi-more-vert"></i>
                                                        </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-right">
                                                                <li><a class="cls-document-setting"
                                                                    data-action="getdocumentdetails"
                                                                    data-docuid="578B8674-9639-4E56-9B00-1A7E5E2E42AD"
                                                                    data-uid=""
                                                                    data-json="{&quot;doc_id&quot;:233,&quot;doc_uid&quot;:&quot;578B8674-9639-4E56-9B00-1A7E5E2E42AD&quot;,&quot;doc_name&quot;:&quot;Visa&quot;,&quot;doc_parent_id&quot;:0,&quot;doc_help_desc&quot;:&quot;Needed only for Non-British passports. also upload Biometric card if that is the only evidence of renewal is available&quot;,&quot;required_issue_date&quot;:0,&quot;required_expiry_date&quot;:0,&quot;sort_order&quot;:0,&quot;required_doc_number&quot;:0,&quot;required_other_input&quot;:0,&quot;doc_issue_country_status&quot;:0,&quot;doc_required_issue_country&quot;:0,&quot;doc_status&quot;:&quot;0&quot;,&quot;doc_use_count&quot;:1}"><i
                                                                        class="zmdi zmdi-edit"></i>
                                                                    Edit</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="text-center bdrt float-left w-100"> <a
                                            class="btn btn-outline-primary mt-2 mb-1 cls-document-setting"
                                            data-action="addnewdoc" data-uid="" data-toggle="modal"
                                            data-target="#addpage"><b> +
                                                Add More</b> →</a> </div>
                                    </div>
                                </div>

                            </div>
                            <div class="splitter"> </div>
                            <div class="panel-right">
                                <div id="docs-rigth-panel" class="table-responsive">
                                    <div className='text-center' style={{ width: "100%" }}>
                                        <div class="nodata">
                                            <div class="nodata__content">
                                                <div class="nodata__icon"><img src="nodata.png"
                                                    alt="" /></div>
                                                <div class="nodata__message mb-2">No document
                                                    categories found.</div>
                                                <div class="nodata__help mb-2"> Add a category
                                                    by simpley clicking on <a id="addnewcategory1"
                                                        class="btn btn-outline-primary btn-sm cls-document-setting"
                                                        data-toggle="modal" data-target="#addpagecat"
                                                        data-uid=""><i class="ti ti-plus"></i>
                                                        Add Category</a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center"> <a id="btnsavesettings"
                                    class="btn btn-primary cls-document-setting"
                                    data-action="savesettings" data-uid="">Save</a> <a
                                        class="btn btn-danger"><i class="zmdi zmdi-rotate-left"></i>
                                        Cancel</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
