"use client"
import React from 'react'
import Link from "next/link";
import Dashboard from './viewProfile/Dashboard';
import Account from '../components/viewProfile/Account';
import Profile from './viewProfile/Profile';
import Contacts from './viewProfile/Contacts';
import Compliance from "../components/viewProfile/Compliance"
import Activity from './viewProfile/Activity';
import PasswordSetting from './viewProfile/PasswordSetting';
import Availability from './viewProfile/Availability';
import Terms from './viewProfile/Terms';
import Image from 'next/image';
import profile from '@/app/images/profile.jpg';


import { useState,useEffect } from 'react';
import { asyncGet } from '@/app/services/HttpServices';
import { endpoint_candidate } from '@/app/services/ApiEndPoints';



function Main() {
  
    const [candidate,setCandidates]=useState([])
    useEffect(async()=>{
     let data = await asyncGet(endpoint_candidate);     
     setCandidates(data.Response[0].Candidates);
    },[])  

    return (
        <>
            <section className="content">
                <div className="body_scroll ">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-md-12 p-0">
                                <div className="card mb-0">
                                    <div className="booktab d-flex justify-content-between align-items-center sadow p-2">
                                        <h2><i className="zmdi zmdi-accounts-list-alt"> </i> Candidates</h2>
                                        <span id="div_planner_tour">
                                            <button id="startTourEmployees" data-tour-action="create_employee"
                                                className="btn btn-success">Start Tour</button>
                                        </span>
                                    </div>
                                    <div className="tab-content bg-white border-top">
                                        <div role="tabpanel" className="tab-pane pt-0 pl-0 pr-0 pb-2 active show" id="list_view">
                                            <div className="i_action d-flex justify-content-between align-items-center p-2 mb-0">
                                                <button type="button" className="btn btn-primary dr-breakout-btn">
                                                    <i className="zmdi zmdi-filter-list"></i> <span className="caret"></span>
                                                </button>
                                                <div className="dr-breakout displayblk">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="input-group mr-1">
                                                            <select className="form-control" id="ddlEmployeeRoles">
                                                                <option data-role-id="0" data-rate="0" value="0"
                                                                    selected="selected">Select Employer</option>
                                                            </select>
                                                        </div>
                                                        <div className="input-group mr-1">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"> <i
                                                                    className="zmdi zmdi-pin"></i></span>
                                                            </div>
                                                            <select className="form-control" id="ddlEmployeeLocations">
                                                                <option value="0" selected="selected">All Locations</option>
                                                                <option value="7"
                                                                    title="85 Aston Street  ,  Birmingham,  West Midlands B4 7DA">
                                                                    Birmingham</option>
                                                                <option value="8"
                                                                    title="100 Kettlebrook Road  ,  Tamworth,  Staffordshire B771AE">
                                                                    Tamworth</option>
                                                                <option value="9"
                                                                    title="10 Measham Grove  ,  Birmingham,  West Midlands B261HU">
                                                                    Solihull</option>
                                                                <option value="12"
                                                                    title="3 Burcot Lane  ,  Bromsgrove,  Worcestershire B601AF">
                                                                    Bromsgrove</option>
                                                                <option value="14"
                                                                    title="Waterstones Booksellers Ltd  Hustlergate,  Bradford,  West Yorkshire BD1 1BL">
                                                                    Bradford</option>
                                                                <option value="16"
                                                                    title="Flat 102  Beckford House,  Bristol,  Gloucestershire BS1 3FD">
                                                                    Bristol</option>
                                                                <option value="10"
                                                                    title="Aberdeen City Council  Finance Department  Town House,  Aberdeen,  Aberdeenshire AB10 1AH">
                                                                    Aberdeen</option>
                                                                <option value="13"
                                                                    title="Mappleborough Green Village Hall  Birmingham Road,  Studley,  Warwickshire B807BT">
                                                                    Redditch</option>
                                                                <option value="15"
                                                                    title="Flat 105  The Pack Horse,  Bolton,  Lancashire BL11AS">
                                                                    Bolton</option>
                                                                <option value="11"
                                                                    title="1 Brodiach Cottages  ,  Aberdeen,  Aberdeenshire AB15 8QS">
                                                                    Westhill</option>
                                                            </select>
                                                        </div>
                                                        <div className="input-group mr-1">

                                                            <select className="form-control" id="ddlEmployeeRoles">
                                                                <option data-role-id="0" data-rate="0" value="0"
                                                                    selected="selected">Select Role</option>
                                                                <option data-role-id="0" data-rate="50" value="111"
                                                                    title="Advance Nurse Practitioner">Advance Nurse
                                                                    Practitioner</option>
                                                                <option data-role-id="0" data-rate="60" value="114"
                                                                    title="Care Assistant">Care Assistant</option>
                                                                <option data-role-id="0" data-rate="70" value="115"
                                                                    title="Clinical Practitioner">Clinical Practitioner</option>
                                                                <option data-role-id="0" data-rate="48.25" value="116"
                                                                    title="Forensic Nurse">Forensic Nurse</option>
                                                                <option data-role-id="0" data-rate="100" value="117"
                                                                    title="General Practitioner">General Practitioner</option>
                                                                <option data-role-id="0" data-rate="60" value="118" title="HCA">
                                                                    HCA</option>
                                                                <option data-role-id="0" data-rate="30" value="119"
                                                                    title="Home Care">Home Care</option>
                                                                <option data-role-id="0" data-rate="80" value="120"
                                                                    title="Hospital Doctor">Hospital Doctor</option>
                                                                <option data-role-id="0" data-rate="80" value="122"
                                                                    title="Opthalmologist">Opthalmologist</option>
                                                                <option data-role-id="0" data-rate="70.75" value="123"
                                                                    title="Pharmacist">Pharmacist</option>
                                                                <option data-role-id="0" data-rate="45.5" value="127"
                                                                    title="Practice Nurse">Practice Nurse</option>
                                                                <option data-role-id="0" data-rate="45.25" value="130"
                                                                    title="Receptionist">Receptionist</option>
                                                                <option data-role-id="0" data-rate="50" value="131"
                                                                    title="Registered General Nurse">Registered General Nurse
                                                                </option>
                                                                <option data-role-id="0" data-rate="40" value="133"
                                                                    title="Support Worker">Support Worker</option>
                                                            </select>
                                                        </div>

                                                        <div className="input-group mr-1">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"> <i
                                                                    className="zmdi zmdi-search-for"></i></span>
                                                            </div>
                                                            <input id="txtEmployeesname" className="form-control"
                                                                placeholder="Enter Name or Email" />
                                                        </div>

                                                        <div className="">
                                                            <a id="btnSearchEmployees" className="btn btn-primary"
                                                                data-action="save"><i
                                                                    className="zmdi zmdi-search">&nbsp;</i>Search</a>
                                                            <a className="btn btn-danger d_view_mobile">Cancel</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="btn-group bdrr">
                                                    <button id="btnAddNewCnd" className="btn btn-success  btn-add  mr-1"
                                                        data-toggle="modal" data-target="#add_internal"><i
                                                            className="ti ti-plus"></i> Add New</button>
                                                    <button id="btnImportEmployees"
                                                        className="btn btn-primary dropdown-toggle font-16" type="button"
                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        More...
                                                    </button>
                                                    <div className="dropdown-menu">

                                                        <a className="dropdown-item cls-import-action" id="btnImporyCnd"
                                                            data-action="importcndcsv" data-toggle="modal"
                                                            data-target="#bulkUpload"><i className="zmdi zmdi-download"></i>
                                                            Import</a>
                                                        <a id="btnExportEmployees" className="dropdown-item"
                                                            href="#"
                                                            onclick="confirm('Are you sure you want to export?')"><i
                                                                className="zmdi zmdi-upload"></i> Export</a>

                                                        <a className="dropdown-item btn-download-template"
                                                            href="data:text/csv;charset=utf-8,SrNo*,Title*,First_Name*,Middle_Name,Last_Name,DOB,Gender,Account_Email*,Personal_Email,Mobile*,Home_Phone,Job_Title,Tax_Code,NI_Number,Notes"
                                                            data-bulk-type="candidate" target="_blank"
                                                            download="candidate_Template.csv"><i
                                                                className="zmdi zmdi-file-text"></i> Download Import Template</a>
                                                    </div>
                                                    <a id="btnSearchEmployeesRefresh"
                                                        className="btn btn-primary ml-1 font-16 btnSearchEmployeesRefresh"
                                                        data-action="cancel"><i className="zmdi zmdi-refresh">&nbsp; </i></a>
                                                </div>
                                            </div>
                                            <ul className="nav nav-tabs nav-justified p-0 bdr-tp-n nav-tabs-responsive">
                                                <li id="tab_emp_all" className="nav-item cnd-navigation-tabs" data-get="All">
                                                    <a className="nav-link " data-toggle="tab">
                                                        <b>New </b>
                                                    </a>
                                                </li>
                                                <li className="nav-item cnd-navigation-tabs" data-get="P">
                                                    <a className="nav-link" data-toggle="tab">
                                                        <b>Verified </b>
                                                    </a>
                                                </li>
                                                <li className="nav-item cnd-navigation-tabs" data-get="P">
                                                    <a className="nav-link" data-toggle="tab">
                                                        <b>Active </b>
                                                    </a>
                                                </li>

                                                <li className="nav-item cnd-navigation-tabs active" data-get="A">
                                                    <a className="nav-link show active" data-toggle="tab">
                                                        <b> Inactive </b>
                                                    </a>
                                                </li>
                                                <li className="nav-item cnd-navigation-tabs" data-get="A">
                                                    <a className="nav-link" data-toggle="tab">
                                                        <b> Archive </b>
                                                    </a>
                                                </li>
                                                <li className="nav-item cnd-navigation-tabs" data-get="A">
                                                    <a className="nav-link" data-toggle="tab">
                                                        <b> Deleted </b>
                                                    </a>
                                                </li>
                                            </ul>

                                            <div className="tab-content p-2">
                                                <div role="tabpanel" className="tab-pane in active show" id="emp_all">

                                                    <div className="table-responsive leave_management">
                                                        <table className="table mb-0 table-hover rwd-table btdr_none emptbl">
                                                            <thead>
                                                                <tr>

                                                                    <th>EMP#</th>
                                                                    <th>Name</th>
                                                                    <th>Email Id</th>
                                                                    <th>Type / Job Role</th>
                                                                    <th>Salary</th>
                                                                    <th>Contract</th>
                                                                    <th>Locations</th>
                                                                    <th>Invite</th>
                                                                    <th>Account Status</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            { candidate.map((item) => ( 
                                                                <tr>
                                                                    <td scope="row">{item.cnd_id}</td>
                                                                    <td>
                                                                        <div className="d-flex">
                                                                            <div className="float-left mt-2 col-black"> <a
                                                                                className="btn-cnd-profiles-view"
                                                                                data-toggle="modal" data-val="153"
                                                                                data-target="#viewprofile"
                                                                                data-sub-type="Internal"><i
                                                                                    className="fa fa-user font-14">&nbsp;</i><b>
                                                                                   {item.cnd_full_name}</b></a>
                                                                                <div></div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="col-blue"><i
                                                                        className="zmdi zmdi-email">&nbsp;</i> {item.cnd_email}</td>
                                                                    <td> {item.cnd_sub_type_name} <div> <span style={{ color: "#1cbfd0" }}>
                                                                    {item.emp_role}  </span> </div>
                                                                    </td>
                                                                    <td className="text-center"> <b className="col-blue"><span
                                                                        style={{ color: "#CEC6CE" }}>{item.cnd_wage_or_salary}</span></b> </td>
                                                                    <td className="text-center"><span style={{ color: "#CEC6CE" }}>{item.cnd_contract_type}</span></td>
                                                                    <td className="text-center">
                                                                        <div className="tital-text"> <i className="zmdi zmdi-pin"></i>
                                                                            <a href="#" data-toggle="modal"
                                                                                data-target="#location_preview" data-id="153"
                                                                                className="badge badge-info cnd-location-counter"><b>
                                                                                    {item.cnd_locations_total}</b></a>
                                                                            <div className="tital-text__tooltip">
                                                                                <p className="mb-1">{item.cnd_locations} </p>
                                                                                <p className="wd-16pxl bold"><i className="zmdi zmdi-pin"></i> LOCATIONS</p>
                                                                                <br />
                                                                                <p>{item.emp_location_name}</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td> <a id="invite-153"
                                                                        onclick="return confirm('Are you sure you want to send invitation to employee?');"
                                                                        className="btn btn-outline-primary btn-sm btn-cnd-invite"
                                                                        data-cnd_id="153" data-name="Mr Internal User2"
                                                                        data-email="Iu2@demo.com" data-mobile=""
                                                                        data-action="invite" title="Send Invitation"> Resend
                                                                        <b>{item.invitation_status}</b> </a> </td>

                                                                    <td> <a className="badge badge-warning cursor"> {item.account_status_label} </a>
                                                                    </td>
                                                                    <td> <a className="btn btn-outline-primary btn-sm btn-cnd-profiles-view"
                                                                        data-toggle="modal" data-val="153"
                                                                        data-target="#viewprofile"
                                                                        data-sub-type="Internal"><i
                                                                            className="zmdi zmdi-search"></i></a>

                                                                    </td>
                                                                </tr>
                                                            ))}
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="modal right-quater" id="add_internal" tabindex="-1" role="dialog" aria-labelledby="add_internal"
                aria-hidden="true">
                <div className="modal-dialog ui-draggable" role="document">
                    <div className="modal-content">
                        <div className="modal-header ui-draggable-handle">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">×</span></button>
                            <h4 className="modal-title" id="myModalLabel2"> <b>Add New Candidate</b> </h4>
                        </div>
                        <div className="modal-body">

                            {/* <!---***************************Internal Employee**************************--> */}
                            <div id="divInternalEmployee" className="row">
                                <div className="col-md-12 col-sm-12 p-3">
                                    <div className="row">
                                        <div id="divEmployerAgency" className="col-md-12" style={{ display: "none" }}>
                                            <div className="form-group">
                                                <label>Agency<span>*</span></label>
                                                <div className="input-group">
                                                    <select id="ddlAgencies" name="ddlAgencies" className="form-control"></select>
                                                    <a id="btnAddNewOrg" data-toggle="modal" data-target="#AddOrgModal"
                                                        className="btn btn-outline-primary cursor ml-1" data-tippy=""
                                                        data-original-title="Add Agency"><i className="ti ti-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <label>Title<span>*</span></label>
                                                        <select id="ddlEmpTitle" className="form-control">
                                                            <option value="0">Title</option>
                                                            <option value="Dr">Dr.</option>
                                                            <option value="Mr">Mr.</option>
                                                            <option value="Mrs">Mrs.</option>
                                                            <option value="Miss">Miss.</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-sm-5 col-6 pl-1">
                                                        <label>First Name<span>*</span></label>
                                                        <input id="txtCndFirstName" type="text" className="form-control clearText"
                                                            placeholder="First Name" />
                                                    </div>
                                                    <div className="col-sm-4 col-6 pl-1">
                                                        <label>Last Name<span></span></label>
                                                        <input id="txtCndLastName" type="text" className="form-control clearText"
                                                            placeholder="Last Name" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Email Id <span>*</span></label>
                                                <input id="txtCndEmailId" type="text"
                                                    className="form-control clearText validateEmail" placeholder="Email Id " />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Mobile Number <span>*</span></label>
                                                <input id="txtCndMobileNumber" type="text" className="form-control clearText number"
                                                    maxlength="11" placeholder="Mobile Number" />
                                            </div>
                                        </div>
                                        <div className="col-md-12" style={{ display: "none" }}>
                                            <div className="form-group">
                                                <label>Weekly Hours / Salary<span>*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend"><span className="input-group-text"><i
                                                        className="zmdi zmdi-time"></i></span></div>
                                                    <input id="txtCndWeeklyHours" name="txtweeklyhours0"
                                                        placeholder="Weekly Hours" value="0"
                                                        className="form-control numeric clearText mr-1" type="text" maxlength="11" />
                                                    <div className="input-group-prepend"><span className="input-group-text"><i
                                                        className="zmdi zmdi-pond">£</i></span></div>
                                                    <input id="txtCndSalary" name="txtsalary0" placeholder="Salary" value="0"
                                                        className="form-control numeric clearText txtsalary" type="text"
                                                        maxlength="11" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Role<span>*</span></label>
                                                <div className="input-group">
                                                    <select id="ddlCndJobRole" name="ddljobtitle0" className="form-control">
                                                        <option value="0">Select Role</option>
                                                        <option style={{ color: "#000" }} value="111">Advance Nurse Practitioner
                                                        </option>
                                                        <option style={{ color: "#000" }} value="114">Care Assistant</option>
                                                        <option style={{ color: "#000" }} value="115">Clinical Practitioner</option>
                                                        <option style={{ color: "#000" }} value="116">Forensic Nurse</option>
                                                        <option style={{ color: "#000" }} value="117">General Practitioner</option>
                                                        <option style={{ color: "#000" }} value="118">HCA</option>
                                                        <option style={{ color: "#000" }} value="119">Home Care</option>
                                                        <option style={{ color: "#000" }} value="120">Hospital Doctor</option>
                                                        <option style={{ color: "#000" }} value="122">Opthalmologist</option>
                                                        <option style={{ color: "#000" }} value="123">Pharmacist</option>
                                                        <option style={{ color: "#000" }} value="127">Practice Nurse</option>
                                                        <option style={{ color: "#000" }} value="130">Receptionist</option>
                                                        <option style={{ color: "#000" }} value="131">Registered General Nurse
                                                        </option>
                                                        <option style={{ color: "#000" }} value="133">Support Worker</option>
                                                    </select>
                                                    <Link href="/Settings/JobRoles" className="btn btn-outline-primary cursor ml-1"
                                                        data-tippy="" data-original-title="Add Role"><i
                                                            className="ti ti-plus"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12" style={{ display: "none" }}>
                                            <div className="form-group">
                                                <label>Job Title<span>*</span></label>
                                                <input id="txtCndJobTitle" name="txtjobtitle0" placeholder="Job Title" value=""
                                                    className="form-control clearText" type="text" />
                                            </div>
                                        </div>

                                        <div id="divEmployerlocations" className="col-md-12">
                                            <div className="form-group">
                                                <label> Select locations<span>*</span></label>
                                                <div className="input-group">
                                                    <div className="select2-container form-control show-tick ms select2"
                                                        id="s2id_ddlCndLocation"><a href="javascript:void(0)"
                                                            className="select2-choice" tabindex="-1"> <span className="select2-chosen"
                                                                id="select2-chosen-1">&nbsp;</span><abbr
                                                                    className="select2-search-choice-close"></abbr> <span
                                                                        className="select2-arrow" role="presentation"><b
                                                                            role="presentation"></b></span></a><label
                                                                                for="s2id_autogen1" className="select2-offscreen"></label><input
                                                            className="select2-focusser select2-offscreen" type="text"
                                                            aria-haspopup="true" role="button"
                                                            aria-labelledby="select2-chosen-1" id="s2id_autogen1" />
                                                        <div className="select2-drop select2-display-none select2-with-searchbox">
                                                            <div className="select2-search"> <label for="s2id_autogen1_search"
                                                                className="select2-offscreen"></label> <input type="text"
                                                                 className="select2-input" id="s2id_autogen1_search"
                                                                    placeholder="" /> </div>
                                                          
                                                        </div>
                                                    </div><select id="ddlCndLocation" className="form-control show-tick ms select2"
                                                        data-placeholder="Select" tabindex="-1" title="" style={{ display: "none" }}>
                                                        <option value="7">Birmingham</option>
                                                        <option value="8">Tamworth</option>
                                                        <option value="9">Solihull</option>
                                                        <option value="10">Aberdeen</option>
                                                        <option value="11">Westhill</option>
                                                        <option value="12">Bromsgrove</option>
                                                        <option value="13">Redditch</option>
                                                        <option value="14">Bradford</option>
                                                        <option value="15">Bolton</option>
                                                        <option value="16">Bristol</option>
                                                    </select>
                                                    <Link href="/Settings/locations" className="btn btn-outline-primary cursor ml-1"
                                                        data-tippy="" data-original-title="Add Location"><i
                                                            className="ti ti-plus"></i></Link>
                                                </div>
                                            </div>
                                        </div>


                                        {/* <!--Invitation Status--> */}
                                        <div className="row col-12 mb-3 clsinvitation_status">
                                            <label className="col-8 col-form-label col-form-label-lg"><i
                                                className="fa fa-envelope font-20">&nbsp;</i>Send invitation</label>
                                            <span className="col-4 switch  pt-2">
                                                <input id="chkinvitation_status" type="checkbox" className="switch clsswichDoc" />
                                                <label for="chkinvitation_status"></label>
                                            </span>
                                        </div>


                                    </div>
                                </div>

                            </div>

                            {/* <!---***************************Agency User**************************--> */}

                            <div id="divAgencyEmployee" className="col-md-12 col-sm-12" style={{ display: "none" }}>

                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <label>Title<span>*</span></label>
                                                <select id="ddltitle_ss" className="form-control">
                                                    <option value="0">Title</option>
                                                    <option value="Dr">Dr.</option>
                                                    <option value="Mr">Mr.</option>
                                                    <option value="Mrs">Mrs.</option>
                                                    <option value="Miss">Miss.</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-5">
                                                <label>First Name<span>*</span></label>
                                                <input id="txtFirstName" type="text" className="form-control height-40 w180"
                                                    placeholder="Enter First Name" />
                                            </div>
                                            <div className="col-sm-5">
                                                <label>Last Name<span></span></label>
                                                <input id="txtLastName" type="text" className="form-control height-40"
                                                    placeholder="Enter Last Name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group" style={{ display: "none" }}>
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <label>GMC/RGN/NMC</label>
                                                <input id="txtGmcNumber" type="text" className="form-control height-40"
                                                    placeholder="Enter GMC/RGN/NMC/RegNo" maxlength="9" />
                                                <span id="msgPractice" style={{ color: "#ff0000" }} ></span>
                                            </div>
                                            <div className="col-sm-2">
                                                <label></label>
                                                <a id="verifynumber" className="btn btn-primary"><i
                                                    className="zmdi zmdi-search">&nbsp;</i>Verify</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <label>Email<span>*</span></label>
                                        <input id="txtCndEmail" type="email" className="form-control height-40"
                                            placeholder="Enter Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <label>Mobile Number<span>*</span></label>
                                        <input id="txtCndMobileNumber" type="text" className="form-control height-40"
                                            oninput="InputNumber(event); return false;"
                                            placeholder="Enter Mobile Number for verification purposes" maxlength="11" />
                                    </div>
                                </div>


                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <label>Role<span>*</span></label>
                                        <select id="ddlRole" className="form-control"></select>

                                    </div>
                                </div>
                                <div style={{ display: "none" }}>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <label>Postcode<span>*</span></label>
                                                    <input id="txtPostCode_ss" maxlength="12" name="postalcode" type="text"
                                                        className="form-control height-40" placeholder="Enter Postcode" />
                                                    <span id="spannotfound2_ss" style={{ color: "#ff0000" }}></span>
                                                </div>
                                                <div className="col-sm-2">
                                                    <label></label>
                                                    <a id="btnFindCndidatePostcode" className="btn btn-primary"><i
                                                        className="zmdi zmdi-search">&nbsp;</i>Find Address</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group divselectAddres2" style={{ display: "none" }}>
                                        <div className="col-sm-12">
                                            <select id="selectList2_ss" className="form-control height-40"></select>
                                        </div>
                                    </div>
                                    <div className="divaddress2_ss" style={{ display: "none" }}>
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <input id="txtaddressline2_ss" type="text" className="form-control height-40"
                                                    placeholder="Enter Address" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <input id="txtCndCity_ss" type="text" className="form-control height-40"
                                                    placeholder="Enter Town" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <input id="tctCndCounty_ss" type="text" className="form-control height-40"
                                                    placeholder="Enter County" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <label for="" className="f-12 control-label">GENDER</label>
                                                </div>
                                                <div className="col-sm-3 rdo">
                                                    <input type="radio" id="male" name="Gender" value="M" checked="checked" />
                                                    <label for="male" className="col-black">&nbsp;Male</label>
                                                </div>
                                                <div className="col-sm-3 rdo">
                                                    <input type="radio" id="female" name="Gender" value="F" />
                                                    <label for="female" className="col-black"><span></span>Female</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <div className="row col-sm-12">
                                                <label for="" className="f-12 control-label">Send Notification to Candidate
                                                    via</label>
                                            </div>
                                            <div className="col-sm-12 row">
                                                <div className="checkbox inlineblock m-r-20">
                                                    <input type="checkbox" id="ChkCndSignupEMAIL" className="with-gap" />
                                                    <label for="ChkCndSignupEMAIL" className="col-black">Email</label>
                                                </div>
                                                <div className="checkbox inlineblock">
                                                    <input type="checkbox" id="ChkCndSignupSMS" className="with-gap" />
                                                    <label for="ChkCndSignupSMS" className="col-black">SMS</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="row">
                                                        <div className="col-sm-4 pr-0 font-bold">
                                                            <label className="f-12 control-label">Referred user:</label>
                                                        </div>
                                                        <div className="col-sm-4 rdo">
                                                            <input type="radio" id="ReferredByInternal" name="ReferredBy"
                                                                className="clsReferredBy" value="I" checked="checked" />
                                                            <label for="ReferredByInternal"
                                                                className="col-black">&nbsp;Internal</label>
                                                        </div>
                                                        <div className="col-sm-4 rdo">
                                                            <input type="radio" id="ReferredByExternal" name="ReferredBy"
                                                                className="clsReferredBy" value="E" />
                                                            <label for="ReferredByExternal"
                                                                className="col-black"><span></span>External</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="divInternalRefUser" className="col-sm-12 pt-2 pb-4">
                                                    <label className="f-12 control-label">Search Internal reference</label>
                                                    <div className="input-group" data-toggle="tooltip" title=""
                                                        data-original-title="Referred By Candidate">
                                                        <input id="txtreferredby"
                                                            className="form-control ui-autocomplete-input txtreferredby" type="text"
                                                            placeholder="Enter referred candidate name" data-candidateid="0" />
                                                        <input id="hfcndid" type="hidden" value="0" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div id="divExternalRefUser" style={{ display: "none" }} className="col-sm-12 pt-2 pb-4">
                                            <label className="f-12 control-label">Search external reference</label>
                                            <div className="input-group" data-toggle="tooltip" title=""
                                                data-original-title="Referred By Candidate">
                                                <input id="txtreferredbyExt"
                                                    className="form-control ui-autocomplete-input txtreferredbyExt" type="text"
                                                    placeholder="Enter referred name" data-candidateid="0" />
                                                <input id="hfcndidExt" type="hidden" value="0" />
                                            </div>
                                            <div className="pt-2" style={{ fontSize: "12px" }}>If external reference is not found, then
                                                click to <a id="btnaddReference" className="btn btn-xs col-blue">add a new
                                                    reference</a></div>
                                        </div>
                                        <div id="divAddExternalRefUser" style={{ display: "none" }}>
                                            <div className="col-sm-12">
                                                <div className="row">
                                                    <div className="col-sm-2">
                                                        <label>Title<span>*</span></label>
                                                        <select id="ddltitleRef" className="form-control">
                                                            <option value="0">Title</option>
                                                            <option value="Dr">Dr.</option>
                                                            <option value="Mr">Mr.</option>
                                                            <option value="Mrs">Mrs.</option>
                                                            <option value="Miss">Miss.</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-sm-5">
                                                        <label>First Name<span>*</span></label>
                                                        <input id="txtFirstNameRef" type="text"
                                                            className="form-control height-40 w180" placeholder="Enter First Name" />
                                                    </div>
                                                    <div className="col-sm-5">
                                                        <label>Last Name</label>
                                                        <input id="txtLastNameRef" type="text" className="form-control height-40"
                                                            placeholder="Enter Last Name" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 pt-2">
                                                <label>Ref Email</label>
                                                <input id="txtEmailRef" type="email" className="form-control height-40"
                                                    placeholder="Enter Ref Email" />
                                            </div>

                                            <div className="col-sm-12 pt-2">
                                                <label>Ref Mobile Number</label>
                                                <input id="txtCndMobileNumberRef" type="text" className="form-control height-40"
                                                    oninput="InputNumber(event); return false;"
                                                    placeholder="Enter ref mobile number" maxlength="11" />
                                            </div>
                                            <div className="col-sm-12"><a id="btnCancelReference"
                                                className="btn btn-xs col-blue">Cancel</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer mail-footer text-center" >
                                    <a id="BtnCandidateRegistration" className="btn btn-primary BtnCandidateRegistration">Register
                                        Now</a>
                                    <a data-dismiss="modal" className="btn btn-outline-danger">Cancel</a>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer mail-footer text-center" >
                            <a id="btnNewEmpSubmit" className="btn btn-primary">Register Now</a>
                            <a id="btnNewEmpClose" data-dismiss="modal" className="btn btn-outline-danger">Cancel</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="viewprofile" className="modal right-full confirm" tabindex="-1" role="dialog" aria-labelledby="viewprofile">
                <div className="modal-dialog" role="document">

                    <div className="modal-content upmodel" style={{ height: "99.3%" }}>
                        <div className="modal-header">
                            <div className="">
                                <h4 className="modal-title hide-head profile-header" data-val="107"> <b>General Practitioner</b>
                                </h4>
                                <div className="show-head smd_none"> <Image src={profile} alt="img"
                                    className="img-responsive rounded-circle img" />
                                    <div className="about">
                                        <div className="name"> <b>Dr Doctor5 Agnecy</b> [<small className="col-green"><b>General
                                            Practitioner</b></small> ] </div>
                                        <div className="status"> <span className="float-left m-18"> <i
                                            className="zmdi zmdi-circle online"></i> </span> <span className="float-right">
                                                <span className=""> <b>Phone:</b><b className="text-blue"> 1236547957</b> </span> <span
                                                    className="ml-2"> <b>Email:</b><b className="text-blue"> Cruce@thestaffport.com</b>
                                                </span> </span> </div>
                                    </div>
                                </div>
                            </div>
                            <div> <a className="btn btn-outline-primary  btn-cnd-profiles-view mr-1" data-toggle="modal"
                                data-val="107" data-sub-type="Agency"><i className="zmdi zmdi-refresh font-16"></i> <b
                                    className="dis_mob">Refresh</b></a>
                                <a className="btn btn-outline-danger btnSearchEmployeesRefresh" data-dismiss="modal"
                                    aria-label="Close"> <i className="zmdi zmdi-close"></i><b className="dis_mob"> Close</b></a>
                            </div>
                        </div>
                        <div className="modal-body pl-0 pr-0">
                            <div id="CndProfileInfoHeader_Placeholder">
                                <div className="profilesectioncontent">
                                    <div className="card">
                                        <div className="row  justify-content-center">
                                            <div className="col-md-10 col-lg-8 col-xl-8">
                                                <div className="firstinfo">
                                                    <div className="avatar-upload"> <a className="change__profile_pic avatar-edit">
                                                        <input className="btn" type="file" name="myfile" id="fileInput" /> <label
                                                            for="fileInput"
                                                            title="Double click to change profile Picture"></label> </a>
                                                        <div className="avatar-preview profile_avtar cropme" id="landscape"> <Image
                                                            id="CndProfileImgBig"
                                                            className="profileImgBig img-responsive rounded-circle FullprofileImgBig img pict mr-2"
                                                            src={profile} alt="No image" /> </div>
                                                    </div>
                                                    <div className="profileinfo">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <h3 className="col-med"> Dr Doctor5 Agnecy </h3>
                                                                <p> <i className="fa fa-user"></i> <span
                                                                    className="cnd-change-account-status-container font-14"> <a
                                                                        className="cnd-change-account-status" data-val="107"
                                                                        data-account-status="ACTIVE"><small
                                                                            className="col-green"><i
                                                                                className="zmdi zmdi-circle"></i></small><span
                                                                                    className="col-green"><b>ACTIVE</b></span> <b>on </b>
                                                                        12/06/2023 5:38AM</a> </span> </p>
                                                                <p><i className="zmdi zmdi-email"></i> <span
                                                                    id="">Cruce@thestaffport.com<small
                                                                        className="col-grey  ml-3"><i
                                                                            className="zmdi zmdi-alert-triangle">
                                                                        </i></small></span></p>
                                                                <p><i className="zmdi zmdi-phone-in-talk"></i> <span
                                                                    id="">1236547957<small className="col-grey  ml-3"><i
                                                                        className="zmdi zmdi-alert-triangle">
                                                                    </i></small></span></p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="mt-1"><i
                                                                    className="zmdi zmdi-format-size">&nbsp;</i><b>Type :
                                                                    </b><span id="hProtype" className="mb-1 col-med">Agency</span></p>
                                                                <p className="mt-1"><i
                                                                    className="zmdi zmdi-view-carousel">&nbsp;</i><b>Role :
                                                                    </b>General Practitioner</p>
                                                                <p className="cls_cnd_work_status_label"> <a
                                                                    className="btn btn-outline-primary btn-sm clsCurrentStatus"
                                                                    data-json="" data-val="1" data-toggle="modal"
                                                                    data-target="#CurrentStatusModal">Working from usual
                                                                    location</a> </p>
                                                            </div>
                                                            <div className="col-md-12"> <span id="spanstatement"></span> <a
                                                                id="btnupdatestatement" style={{ display: "none" }}
                                                                data-toggle="modal" data-target="#ModalPersonalStatement"
                                                                data-statement=""><span className="fa fa-edit">Edit</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="emp-Fixed" className="bgblulgt">
                                <ul id="EmployeeProfileTabs_Placeholder" className="nav nav-tabs nav-justified p-0">

                                    <li className="nav-item active"> <a id="TabBasic" className="tab-basic nav-link active"
                                        data-toggle="tab" href="#TabBasic_Placeholder">Account</a> </li>


                                    <li className="nav-item"> <a id="TabCompliance" className="tab-compliance nav-link "
                                        data-toggle="tab" href="#TabCompliance_Placeholder">Compliance</a> </li>
                                    <li className="nav-item"> <a id="TabAvailability" className="tab-availability nav-link "
                                        data-toggle="tab" href="#TabAvailability_Placeholder">Availability</a> </li>

                                    <li className="nav-item dropdown">
                                        <a href="#" className="nav-link" data-toggle="dropdown" >Other <span
                                            className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li className="nav-item"> <a id="TabDashboard" className="tab-dashboard nav-link"
                                                data-toggle="tab" href="#TabDashboard_Placeholder">Dashboard</a> </li>
                                            <li className="nav-item"> <a id="TabProfile" className="tab-profile nav-link "
                                                data-toggle="tab" href="#TabProfile_Placeholder">Profile</a> </li>
                                            <li className="nav-item"> <a id="TabContacts" className="tab-contacts nav-link "
                                                data-toggle="tab" href="#TabContacts_Placeholder">Next of Kin</a> </li>
                                            <li className="nav-item"> <a id="TabActivity" className="tab-activity nav-link " data-toggle="tab"
                                                href="#TabActivity_Placeholder">Activity</a> </li>
                                            <li className="nav-item"> <a id="TabTerms" className="tab-terms nav-link " data-toggle="tab"
                                                href="#TabTerms_Placeholder">Terms</a> </li>




                                            <li className="nav-item"> <a id="TabSettings" className="tab-settings nav-link "
                                                data-toggle="tab" href="#TabSettings_Placeholder">Settings</a> </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content bdr-1 p-0 mgn-60">
                                <div id="TabDashboard_Placeholder" role="tabpanel" className="pl-4 pr-4 tab-pane clsemptabs">
                                    <Dashboard />
                                </div>
                                <div id="TabBasic_Placeholder" role="tabpanel" className="tab-pane clsemptabs  in active">
                                    <Account />
                                </div>
                                <div id="TabCompliance_Placeholder" role="tabpanel" class="tab-pane clsemptabs">
                                    <Compliance />
                                </div>
                                <div id="TabProfile_Placeholder" role="tabpanel" className="tab-pane clsemptabs">
                                    <Profile />
                                </div>

                                <div id="TabContacts_Placeholder" role="tabpanel" className="tab-pane clsemptabs">
                                    <Contacts />
                                </div>

                                <div id="TabTerms_Placeholder" role="tabpanel" className="tab-pane clsemptabs">
                                    <Terms />
                                </div>

                                <div id="TabAvailability_Placeholder" role="tabpanel" className="tab-pane clsemptabs">
                                    <Availability />
                                </div>

                                <div role="tabpanel" className="tab-pane p-4 pl-5 clsemptabs" id="TabActivity_Placeholder">
                                    <Activity />
                                </div>

                                <div id="TabSettings_Placeholder" role="tabpanel" className="tab-pane p-4 clsemptabs">
                                    <PasswordSetting />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="modal right-full" id="location_preview" tabIndex="-1" role="dialog" aria-labelledby="location_preview" aria-modal="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="row">
                                <h4 className="modal-title">
                                    <b>Location(s) </b>
                                </h4>
                            </div>
                        </div>
                        <div className="modal-body row" id="TabLocationsPopup_Placeholder">
                            <div className="col-md-6 col-sm-6">
                                <div className="bxsaddow mt-3">
                                    <h4>
                                        <span className="checkbox">
                                            <input id="location7" checked className="chk-profile-cnd-location" value="7" type="checkbox" />
                                            <label htmlFor="location7"><i className="zmdi zmdi-city"></i> Birmingham</label>
                                        </span>
                                    </h4>
                                    <div className="p-3 bdr1 h4show cls-location-part">
                                        <p className="mb-1">
                                            <span className="wd-16px">Hospital Name</span> <span>:</span> <span id="lblworkhospital">Birmingham</span>
                                        </p>
                                        <p className="mb-1">
                                            <span className="wd-16px">Address</span> <span>:</span> <span id="lblworkaddress">85 Aston Street ,85 Aston Street , Birmingham, West Midlands.</span>
                                        </p>
                                        <p className="mb-1">
                                            <span className="wd-16px">Onsite Parking</span> <span>:</span> <span id="epark">Available</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Add other location divs here */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="CurrentStatusModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content" style={{ height: '400px' }}>
                        <div className="modal-header" style={{ position: 'relative' }}>
                            <h5 className="modal-title" id="exampleModalLabel">Your Current Status</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body p-4">
                            <div className="radio-toolbar">
                                <input type="radio" id="work1" name="rdoWorkStatus" value="1" data-status="Working from usual location" />
                                <label htmlFor="work1"><i className="zmdi zmdi-city-alt mr-1"></i>Working from usual location</label>
                                <input type="radio" id="work2" name="rdoWorkStatus" value="2" data-status="Work from home" />
                                <label htmlFor="work2"><i className="zmdi zmdi-city-alt mr-1"></i>Work from home</label>
                                <input type="radio" id="work3" name="rdoWorkStatus" value="3" data-status="At another site" />
                                <label htmlFor="work3"><i className="zmdi zmdi-city-alt mr-1"></i>At another site</label>
                                <input type="radio" id="work4" name="rdoWorkStatus" value="4" data-status="On client visit" />
                                <label htmlFor="work4"><i className="zmdi zmdi-city-alt mr-1"></i>On client visit</label>
                            </div>
                            <div className="text-center">
                                <hr />
                                <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary btn-update-terms" data-action="Work-Status">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="addEdit" className="modal md-one right-quater" tabindex="-1" role="dialog" aria-labelledby="addEdit" aria-hidden="true">
                <div className="modal-dialog ui-draggable" role="document">
                    <div className="modal-content">
                        <div className="modal-header ui-draggable-handle">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel2">
                                <b id="lblDocMasterTitle">Add Edit Document</b>
                            </h4>
                        </div>  
                        <div className="modal-body">
                            <div className="row m-0">
                                <div className="col-12 mt-2">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                            Document name<span>*</span>
                                        </label>
                                        <input id="txtDocMasterDocName" type="text" className="form-control form-control-lg docClear" 
                                        placeholder="Enter document name"/>
                                    </div>
                                </div>
                                <div className="col-12 mt-2">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                            Document No.<span>*</span>
                                        </label>
                                        <input id="" type="text" className="form-control form-control-lg " 
                                        placeholder="Enter document no."/>
                                    </div>
                                </div> 

                                <div className="col-lg-12 upld">
                                    <div className="file_folder"></div>
                                    <div id="divAttachedFiles" className="attachedFile card pb-0 ">
                                        <table className="table table-hover table-bordered divAttachedFiles" style={{ display: 'none' }}>
                                        <thead>
                                            <tr>
                                            <th style={{ width: '40px' }}>SN.</th>
                                            <th style={{ width: '270px' }}>File Name</th>
                                            <th style={{ width: '70px' }}>Size</th>
                                            <th>File</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tblBodyAttachedFiles"></tbody>
                                        </table>
                                        <div>
                                        <a className="btn btn-primary  cls-doc-file-action browes_btn clickmode m-2" data-show=".divFileAttachfile, .admorebtn" data-hide=".browes_btn,.attachedFile ">
                                            <i className="zmdi zmdi-plus-circle-o-duplicate col-white"></i> <b className="col-white">Browse to upload file....</b>
                                        </a>
                                        </div>
                                    </div>
                                    <div id="divFileAttachfile" className="card pb-0 divFileAttachfile" style={{ display: 'none' }}>
                                        <div id="divAttchFiles">
                                            <div className="row g-0 mb-2 mt-2">
                                                <div className='col-md-1 text-center pr-0'>
                                                <div style={{ paddingTop: '33px' }}>
                                                <label id="lblTaskFile">1</label>
                                                </div>
                                                </div>
                                                <div className="col-md-6 pl-1 pr-0" id="divFileUploader1">
                                                <div>
                                                    <label>
                                                    Choose file<span>*</span>
                                                    </label>
                                                    <div className="input-group" style={{ marginBottom: '5px' }}>                                                
                                                    <div className="custom-file">
                                                        <input
                                                        id="fileUploader1"
                                                        accept="image/*,application/pdf,application/msword/,application/xlxs/,application/xlx,.txt,.docx,.doc,.zip,.rar,.mp4,.wav,.3gp"
                                                        type="file"
                                                        row-hidden="true"
                                                        data-val="1"
                                                        className="custom-file-input file-uploader clearTextFile"
                                                        aria-describedby="fileUploaderAddOn"
                                                        />
                                                        <label className="custom-file-label" htmlFor="fileUploader">
                                                        Choose file
                                                        </label>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="col-md-4 pl-1 pr-0">
                                                <div>
                                                    <label>
                                                    File Name<span></span>
                                                    </label>
                                                    <input
                                                    id="txtFileDescription1"
                                                    type="text"
                                                    row-hidden="false"
                                                    data-val="1"
                                                    className="form-control clearTextFile"
                                                    autoComplete="off"
                                                    placeholder="Enter File description"
                                                    />
                                                </div>
                                                </div>
                                                <div className="col-md-1 pl-1 pr-0">
                                                <div className="mt-4"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="divAttachFileContainer" className='admorebtn mb-3 text-center'>
                                            <hr/>
                                        <a id="btnAddMoreFiles" className="btn btn-info clearTextFile  modal-taskfile-btn" style={{ marginRight: '5px' }} task-action="addMoreFiles">
                                            <i className="zmdi zmdi-plus col-white"></i> <b className="col-white">Add More Files</b>
                                        </a>
                                        <a id="btnAttachFiles" className="btn btn-success clearTextFile modal-taskfile-btn mr-1 clickmode"data-hide=".divFileAttachfile" data-show=".attachedFile,.divAttachedFiles, .browes_btn" action-from="taskAdd" task-action="attachFiles">
                                            <i className="zmdi zmdi-plus-circle-o-duplicate col-white"></i> <b className="col-white">Attach Files</b>
                                        </a>
                                        <a className="btn btn-outline-danger clearTextFile  cls-doc-file-action"  data-action="cancel">
                                            Cancel
                                        </a>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div  className="col-12 mb-1">
                                    <div className='row g-0'>
                                    <div className="form-group col-md-6">
                                    <label className="col-form-label col-form-label-lg">
                                            Document Issue date <input id="chkDocMasterDocIssue" type="checkbox" className="ml-2 clsswichDoc"/>
                                        </label>
                                        <input type="text" id="divDocumentIssueDate"
                                        className="form-control" placeholder="DD/MM/YYYY" />
                                    </div>
                                    <div className="form-group col-md-6">
                                    <label className="col-form-label col-form-label-lg">
                                            Document Expiry date <input id="chkDocMasterDocExpiry" type="checkbox" className="ml-2 clsswichDoc"/>
                                        </label>
                                        <input type="text" id="divDocumentExpiryDate"  
                                        className="form-control" placeholder="DD/MM/YYYY" />
                                    </div>
                                    </div>
                                </div>

                               
                               
                                
                              
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                            Document description
                                            <span></span>
                                        </label>
                                        <textarea id="txtDocMasterDescription" rows="1" className="form-control form-control-lg no-resize docClear" placeholder="Enter description"></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                            Instructions / Help text
                                            <span></span>
                                        </label>
                                        <textarea id="txtDocMasterInstrections" rows="1" className="form-control form-control-lg no-resize docClear" placeholder="Instructions / Help text"></textarea>
                                    </div>
                                </div>

                             

                                <div className="col-md-12 mb-5">
                                    <div className="d-flex justify-content-start">
                                        <label>Status:</label>
                                        <div className="ml-4">
                                            <label className="">Inactive</label>
                                            <span className="switch ml-1">
                                                <input type="checkbox" className="switch clsswichDoc" id="chkDocMasterStatus"/>
                                                    <label for="chkDocMasterStatus"></label>
                                            </span>
                                            <label className="">Active</label>
                                        </div>
                                    </div>
                                </div>

                                </div>
                            
                        </div>
                        <div className="modal-footer">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-center">
                                        <a id="btnDocMasterSave" className="btn btn-primary btn-lg cls-document-setting" data-action="updatedocument" data-uid="208A89B4-33DE-4D2F-8F15-84BD71F6A235">Update</a>
                                        <a id="btnDocMasterSaveCancel" className="btn btn-outline-danger btn-lg cls-document-setting" data-dismiss="modal"><i className="zmdi zmdi-close"></i> Close</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="uploadPreview" className="modal right-full" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog ui-draggable" role="document">
                    <div className="modal-content">
                    <div className="modal-header ui-draggable-handle">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                        <div className="row">
                        <div className="col-md-12">
                            <h4 className="modal-title" id="myModalLabel2">
                            <button className="btn btn-info btn-sm reveal-click float-left mr-2" style={{ position: 'relative', margin: 0, top: 0, left: '-6px' }}>
                                <i className="zmdi zmdi-menu"></i>
                            </button>
                            <b>Preview file(s) in <span id="docFilename">CV</span></b>
                            </h4>
                        </div>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div id="divPreviewBodyContent_placeholder" className="d-flex">
                        {/* Documents List */}
                        <div className="inbox left pr-0 mr-0 lftfxd pt-3" id="email-nav">
                            <div className="file_folder">
                            {/* File 1 */}
                            <a id="file-ff4493563cf642ffbc0f05c18be531a7.png" href="javascript:void(0);" className="cls-docs-action" data-action="viewfile" data-extension=".png" data-url="https://thestaffport23.s3.eu-west-2.amazonaws.com/compliance/ff4493563cf642ffbc0f05c18be531a7.png?X-Amz-Expires=600&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA3NHQF7DCXRKNIZWF/20230724/eu-west-2/s3/aws4_request&amp;X-Amz-Date=20230724T132539Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=3e86e0827a460e0211e088ab993cc297cf67d29774f4e8a67735df2274d23d8b" data-hide=".one" data-show=".two">
                                <button id="" className="btn btn-danger btnhover cls-docs-action" data-action="deletefile" data-path="ff4493563cf642ffbc0f05c18be531a7.png" data-uid="62ED78FA-3063-424C-BD73-6476952CC53F" title="Remove File">
                                <i className="zmdi zmdi-close-circle"></i>
                                </button>
                                <div className="icon mr-0">
                                <i className="zmdi zmdi-collection-image text-info"></i>
                                </div>
                                <div className="file-name" style={{ padding: '8px' }}>
                                <p className="mb-0 text-muted">cnt.png</p>
                                <div style={{ fontSize: '11px', lineHeight: 0 }}>
                                    <b style={{ color: 'forestgreen' }}>
                                    <span className="col-grey">
                                        <i className="fa fa-external-link-square">&nbsp;NEW</i>
                                    </span>
                                    </b>
                                </div>
                                <p></p>
                                </div>
                            </a>
                            {/* File 2 */}
                            <a id="file-74bd2b17b6c648a7b0aac2f391e8558d.png" href="javascript:void(0);" className="cls-docs-action" data-action="viewfile" data-extension=".png" data-url="https://thestaffport23.s3.eu-west-2.amazonaws.com/compliance/74bd2b17b6c648a7b0aac2f391e8558d.png?X-Amz-Expires=600&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA3NHQF7DCXRKNIZWF/20230724/eu-west-2/s3/aws4_request&amp;X-Amz-Date=20230724T132539Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=1115ddf4884d90b3d786f953087b2056ff13d567e8414f9688e923ac1d6505e1" data-hide=".one" data-show=".two">
                                <button id="" className="btn btn-danger btnhover cls-docs-action" data-action="deletefile" data-path="74bd2b17b6c648a7b0aac2f391e8558d.png" data-uid="62ED78FA-3063-424C-BD73-6476952CC53F" title="Remove File">
                                <i className="zmdi zmdi-close-circle"></i>
                                </button>
                                <div className="icon mr-0">
                                <i className="zmdi zmdi-collection-image text-info"></i>
                                </div>
                                <div className="file-name" style={{ padding: '8px' }}>
                                <p className="mb-0 text-muted">border.png</p>
                                <div style={{ fontSize: '11px', lineHeight: 0 }}>
                                    <b style={{ color: 'forestgreen' }}>
                                    <span className="col-grey">
                                        <i className="fa fa-external-link-square">&nbsp;NEW</i>
                                    </span>
                                    </b>
                                </div>
                                <p></p>
                                </div>
                            </a>
                            </div>
                        </div>
                        {/* Preview & Action Block */}
                        <div className="inbox right rgtinbox">
                            {/* Document Preview */}
                            <div className="pl-3 pr-3 mt-3">
                            <iframe id="iframedocfile" src="https://thestaffport23.s3.eu-west-2.amazonaws.com/compliance/ff4493563cf642ffbc0f05c18be531a7.png?X-Amz-Expires=600&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA3NHQF7DCXRKNIZWF/20230724/eu-west-2/s3/aws4_request&amp;X-Amz-Date=20230724T132539Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=3e86e0827a460e0211e088ab993cc297cf67d29774f4e8a67735df2274d23d8b" style={{ height: '400px' }} className="one" data-download-url="https://thestaffport23.s3.eu-west-2.amazonaws.com/compliance/ff4493563cf642ffbc0f05c18be531a7.png?X-Amz-Expires=600&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA3NHQF7DCXRKNIZWF/20230724/eu-west-2/s3/aws4_request&amp;X-Amz-Date=20230724T132539Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=3e86e0827a460e0211e088ab993cc297cf67d29774f4e8a67735df2274d23d8b"></iframe>
                            </div>
                            <div className="row p-3">
                            {/* Update Status */}
                            <div className="col-md-12 mb-4">
                                <div className="row mt-0">
                                <hr />
                                
                                <div className="col-lg-6">
                                    <p className="mb-3">
                                    <span className="wd-180px">Download File</span>
                                    <span>:</span>
                                    <span className="col-black font-16 font-bold ml-1"><a id="link_download_file" className="cls-docs-action" data-action="download_file" data-url="" style={{ color: 'blue' }}>
                                            <i className="fa fa-download">&nbsp;</i>Download
                                        </a></span>
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <p className="mb-3">
                                    <span className="wd-180px">Document Name</span>
                                    <span>:</span>
                                    <span className="col-black font-16 font-bold ml-1">CV</span>
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <p className="mb-3">
                                    <span className="wd-180px">Document No.</span>
                                    <span>:</span>
                                    <span className="col-black font-16 font-bold ml-1"></span>
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <p className="mb-3">
                                    <span className="wd-180px">Issue Date</span>
                                    <span>:</span>
                                    <span className="col-black font-16 font-bold ml-1"></span>
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <p className="mb-3">
                                    <span className="wd-180px">Expiry Date</span>
                                    <span>:</span>
                                    <span className="col-black font-16 font-bold ml-1"></span>
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <p className="mb-3">
                                    <span className="wd-180px">Description</span>
                                    <span>:</span>
                                    <span className="col-black font-16 font-bold ml-1">Not available</span>
                                    </p>
                                </div>
                                </div>
                            </div>
                            {/* History */}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
  
}

export default Main
