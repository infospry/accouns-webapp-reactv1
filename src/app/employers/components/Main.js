"use client"
import Link from "next/link";
import Settings from "./Settings";

import { useState, useEffect } from "react";
import { asyncGet } from '@/app/services/HttpServices';
import { endpoint_category_ddl, endpoint_employer } from "@/app/services/ApiEndPoints";

function Main() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        companyName: '',
        registrationNumber: '',
        industry: '',
        sentInvitations: false,
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        // Perform validation here
        if (!formData.firstName.trim()) {
          validationErrors.firstName = 'First name is required';
        }
    
        if (!formData.lastName.trim()) {
          validationErrors.lastName = 'Last name is required';
        }
    
        if (!formData.email.trim()) {
          validationErrors.email = 'Email is required';
        }
    
       // Validate mobile number format using a regular expression
    const mobileNumberRegex = /^[0-9]{10}$/; // Assuming a 10-digit mobile number format
    if (!formData.mobileNumber.trim()) {
      validationErrors.mobileNumber = 'Mobile number is required';
    } else if (!mobileNumberRegex.test(formData.mobileNumber)) {
      validationErrors.mobileNumber = 'Invalid mobile number format. Please enter a 10-digit number.';
    }
    
        if (!formData.companyName.trim()) {
          validationErrors.companyName = 'Company name is required';
        }
    
        if (!formData.registrationNumber.trim()) {
          validationErrors.registrationNumber = 'Registration number is required';
        }
    
        if (!formData.industry.trim()) {
          validationErrors.industry = 'Industry is required';
        }
    
        setErrors(validationErrors);
    
        // If there are no errors, proceed with form submission
        if (Object.keys(validationErrors).length === 0) {
          // Handle form submission here (e.g., send data to server)
          AddNewEmployer([formData])
          console.log('Form submitted successfully:', formData);
        }
      };


    const [employer, setEmployer] = useState([]);
    const [employerProfile, setEmployerProfile] = useState([]);
    const [category_ddl, setcategory_ddl] = useState([]);
    
    const getEmployers = async () => {
        try {
            const response = await asyncGet(endpoint_employer);
            setEmployer(response.Response[0].Employers);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      };

      const FillDropdown = async () => {
        try {
            const response = await asyncGet(endpoint_category_ddl);
            setcategory_ddl(response.Response[0].Industries);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      };

      const viewEmployerProfile = async () => {
        try {
            const response = await asyncGet(endpoint_employer+'/'+14);
            console.log(response.Response[0].employer_details);           
            setEmployerProfile(response.Response[0].employer_details);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      };

      useEffect(() => {
        getEmployers();
        FillDropdown();
      }, []);  
      
      const AddNewEmployer = async (params) => {
        try {   
           
            const response = await asyncPost(endpoint_employer+'/registration',params);
            console.log(response);
                    
            if (response.Status === "OK") {
                getEmployers();
             alert(response.Response);
            
            }
            else {               
                alert(response.Error);
            }
        } catch (error) {
            console.error(error, error);
        }
      };  
      

    return (
        <>
            <section className="content">
                <div className="body_scroll ">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-md-12 p-0">
                                <div className="card mb-0">
                                    <div className="booktab d-flex justify-content-between align-items-center sadow p-2">
                                        <h2><i className="zmdi zmdi-widgets"></i> Employers</h2>
                                        <span id="div_planner_tour">
                                            <button id="startTourEmployees" data-tour-action="create_employee"
                                                className="btn btn-success">Start Tour</button>
                                        </span>
                                    </div>
                                    <div className="tab-content bg-white border-top">
                                        <div role="tabpanel" className="tab-pane pt-0 pl-0 pr-0 pb-2 active show" id="list_view">
                                            <div className="i_action d-flex justify-content-between align-items-center p-2 mb-0">
                                                <button type="button" className="btn btn-primary dr-breakout-btn dd_none">
                                                    <i className="zmdi zmdi-filter-list"></i> <span className="caret"></span>
                                                </button>
                                                <div className="dr-breakout displayblk">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="input-group mr-1">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"> <i
                                                                    className="zmdi zmdi-account"></i></span>
                                                            </div>
                                                            <select className="form-control">
                                                <option value="" disabled="disabled"selected="selected">Select an industry </option>                                      
                                        {category_ddl.map((item) => (                                       
                                        <optgroup label={item.industry_name}>
                                              {item.categories.map((categories) => {
                                                return (
                                                  <option data-industry={item.industry_id} value={categories.cat_id}>
                                                    {categories.cat_name}
                                                  </option>
                                                );
                                              })}
                                            </optgroup>
                                        ))} 
                                                            </select>
                                                        </div>

                                                        <div className="input-group mr-1">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"> <i
                                                                    className="zmdi zmdi-search-for"></i></span>
                                                            </div>
                                                            <input id="txtEmployeesname" className="form-control"
                                                                placeholder="Enter Employer" />
                                                        </div>

                                                        <div className="btn-group">
                                                            <Link id="btnSearchEmployees" href="/" className="btn btn-primary"
                                                                data-action="save"><i
                                                                    className="zmdi zmdi-search">&nbsp;</i>Search</Link>
                                                            <Link id="btnSearchEmployeesRefresh" href="/"
                                                                className="btn btn-primary ml-1 font-16 btnSearchEmployeesRefresh"
                                                                data-action="cancel"><i className="zmdi zmdi-refresh">&nbsp;
                                                                </i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button id="btnAddNewEmp" class="btn btn-success  btn-add  mr-1" data-toggle="modal" data-target="#add_new"><i class="ti ti-plus"></i> Add New</button>
                                            </div>
                                            <ul className="nav nav-tabs nav-justified p-0 bdr-tp-n nav-tabs-responsive">
                                                <li id="tab_emp_all" className="nav-item cnd-navigation-tabs active" data-get="All">
                                                    <Link className="nav-link  show active" href="/" data-toggle="tab">
                                                        <b>All</b>
                                                    </Link>
                                                </li>
                                                <li className="nav-item cnd-navigation-tabs" data-get="P">
                                                    <Link href="/" className="nav-link show" data-toggle="tab">
                                                        <b>Active</b>
                                                    </Link>
                                                </li>
                                                <li className="nav-item cnd-navigation-tabs prev" data-get="S">
                                                    <Link href="/" className="nav-link show" data-toggle="tab">
                                                        <b>Inactive</b>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="tab-content p-2">
                                                <div role="tabpanel" className="tab-pane in active show" id="emp_all">
                                                    <div className="table-responsive leave_management">
                                                        <table className="table mb-0 table-hover rwd-table btdr_none emptbl">
                                                            <thead>
                                                                <tr>
                                                                    <th>EMP#</th>
                                                                    <th>Employer name</th>
                                                                    <th>Email / Mobile</th>

                                                                    <th>Sector</th>
                                                                    <th>Category</th>
                                                                    <th>Total Employee(s)</th>
                                                                    <th>Create Date</th>
                                                                    <th>Account Status</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="CndProfiles_Placeholder">
                                                                {employer.map((item) => (
                                                                    <tr>
                                                                        <td scope="row"> {item.emp_id} </td>
                                                                        <td>
                                                                            <div className="d-flex">

                                                                                <div className="float-left mt-2 col-black"> <Link href="/"
                                                                                    className="btn-cnd-profiles-view"
                                                                                    data-toggle="modal" data-val="107"
                                                                                    data-sub-type="Agency"><b>{item.company_name}</b></Link> </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>{item.emp_email}<br />Mob:{item.emp_mobile}</td>

                                                                        <td>{item.industry}</td>
                                                                        <td className="col-blue">{item.category}</td>
                                                                        <td className="text-center">
                                                                            {item.number_of_employees}
                                                                        </td>
                                                                        <td>
                                                                            {item.create_date}
                                                                        </td>
                                                                        <td> <span className="badge badge-success cursor"> {item.account_status} </span>
                                                                        </td>
                                                                        <td>
                                                                            <button onClick={viewEmployerProfile} className="btn btn-outline-primary btn-sm"
                                                                                data-toggle="modal" data-target="#emp_settings"><i
                                                                                    className="zmdi zmdi-settings"></i></button>

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

            <div class="modal right-full" id="emp_settings" tabindex="-1" role="dialog" aria-labelledby="emp_settings"
                aria-modal="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content hightauto">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="btnPopClose">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 class="modal-title"><b>Employer Settings</b></h4>
                        </div>
                        <div class="modal-body pl-0 pr-0">
                            <Settings></Settings>
                        </div>
                        <div class="modal-footer position_relatie">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="text-center">
                                        <button value="Submit" id="btnEditSave" class="btn btn-primary"> Update</button>
                                        <button value="Submit" id="btnEditCancel" class="btn btn-outline-danger">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Role */}
            <div class="modal right-quater" id="ModalCustomRole" tabindex="-1" role="dialog" aria-labelledby="ModalRoleColor">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 class="modal-title" id="myModalLabel9">
                                <b>Role</b>
                            </h4>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-lg-12">

                                    <div class="form-group mt-3">
                                        <span class="col-blue">Role<span class="col-red">*</span></span>
                                        <input id="txtRolename" class="form-control" type="text" placeholder="Enter role name" />
                                    </div>
                                    <div class="form-group mt-3">
                                        <span class="col-blue">Role Alias<span class="col-red">*</span></span>
                                        <input id="txtRoleAlias" class="form-control" type="text"
                                            placeholder="Enter role alias" />
                                    </div>
                                    <div class="row">
                                        <div class="form-group mt-3 col-md-6">
                                            <span class="col-blue">Default Break (in min)</span>
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" style={{ borderRadius: "0px" }}> <i
                                                    class="zmdi zmdi-time"></i></span>

                                                <input id="txtDefaultBreak" class="form-control number"
                                                    style={{ borderRadius: "0px" }} maxlength="3" type="text" placeholder="0" />
                                            </div>
                                        </div>
                                        <div class="form-group mt-3 col-md-6">
                                            <span class="col-blue">Default Rate (£)</span>
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" style={{ borderRadius: "0px" }}> £</span>

                                                <input id="txtDefaultRate" class="form-control decimal"
                                                    style={{ borderRadius: "0px" }} maxlength="10" type="text" placeholder="0" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <span class="col-blue">Role Color<span class="col-red">*</span>
                                            <span class="col-grey">(eg:#009688)</span></span>
                                        <input id="txtLabelColorCode" class="form-control" maxlength="7" type="text"
                                            placeholder="Select color" />
                                        <hr />
                                        <div class="mt-3">
                                            <span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-1" class="ClslblMaster"
                                                        data-action="radio" value="#888" />
                                                    <label for="ChkColor-1" class="bg-default"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-2" class="ClslblMaster"
                                                        data-action="radio" value="#009688" />
                                                    <label for="ChkColor-2" class="bg-teal"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-3" class="ClslblMaster"
                                                        data-action="radio" value="#98f" />
                                                    <label for="ChkColor-3" class="bg-indigo"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-4" class="ClslblMaster"
                                                        data-action="radio" value="#607D8B" />
                                                    <label for="ChkColor-4" class="bg-blue-grey"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-5" class="ClslblMaster"
                                                        data-action="radio" value="#9E9E9E" />
                                                    <label for="ChkColor-5" class="bg-grey"></label>
                                                </span>
                                            </span>
                                            <span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-6" class="ClslblMaster"
                                                        data-action="radio" value="#fdd932" />
                                                    <label for="ChkColor-6" class="bg-yellow"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-7" class="ClslblMaster"
                                                        data-action="radio" value="#e47297" />
                                                    <label for="ChkColor-7" class="bg-blush"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-8" class="ClslblMaster"
                                                        data-action="radio" value="#FFC107" />
                                                    <label for="ChkColor-8" class="bg-amber"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-9" class="ClslblMaster"
                                                        data-action="radio" value="#03A9F4" />
                                                    <label for="ChkColor-9" class="bg-light-blue"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-10" class="ClslblMaster"
                                                        data-action="radio" value="#795548" />
                                                    <label for="ChkColor-10" class="bg-brown"></label>
                                                </span>
                                            </span>
                                            <span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-11" class="ClslblMaster"
                                                        data-action="radio" value="#ff4dab" />
                                                    <label for="ChkColor-11" class="bg-pink"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-12" class="ClslblMaster"
                                                        data-action="radio" value="#04BE5B" />
                                                    <label for="ChkColor-12" class="bg-success"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-13" class="ClslblMaster"
                                                        data-action="radio" value="#82c885" />
                                                    <label for="ChkColor-13" class="bg-lime"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-14" class="ClslblMaster"
                                                        data-action="radio" value="#ee2558" />
                                                    <label for="ChkColor-14" class="bg-danger"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-15" class="ClslblMaster"
                                                        data-action="radio" value="#1cbfd0" />
                                                    <label for="ChkColor-15" class="bg-info"></label>
                                                </span>
                                            </span>
                                            <span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-16" class="ClslblMaster"
                                                        data-action="radio" value="#0388d1" />
                                                    <label for="ChkColor-16" class="bg-primary"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-17" class="ClslblMaster"
                                                        data-action="radio" value="#6f42c1" />
                                                    <label for="ChkColor-17" class="bg-purple"></label>
                                                </span>
                                                <span class="round pull-left colourSelectorItem">
                                                    <input type="checkbox" name="lblcolor" id="ChkColor-18" class="ClslblMaster"
                                                        data-action="radio" value="#FF9948" />
                                                    <label for="ChkColor-18" class="bg-orange"></label>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <a class="btn btn-primary ClsCustomRole" id="btnCustomRole" data-id="0"
                                data-action="insertupdate">Save</a>
                            <a class="btn btn-outline-danger" data-dismiss="modal">Cancel</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* shift Timming */}
            <div className="modal right-quater" id="ModalShiftTimming" tabIndex="-1" role="dialog" aria-labelledby="ModalShiftTimming" aria-hidden="true">
                <div className="modal-dialog ui-draggable" role="document">
                    <div className="modal-content hightauto">
                        <div className="modal-header ui-draggable-handle">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel9">
                                <b>Shift Time</b>
                            </h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group mt-3">
                                        <span className="col-blue">Role<span className="col-red">*</span></span>

                                        <div className="input-group">
                                            <select id="ddlRoleCustom" className="form-control clsRoleList">
                                                <option value="" selected>Select Role</option>
                                                <option value="0">Default</option>
                                                <option data-role-id="0" data-rate="50" value="111" title="Advance Nurse Practitioner">Advance Nurse Practitioner</option>
                                                <option data-role-id="0" data-rate="60" value="114" title="Care Assistant">Care Assistant</option>
                                                <option data-role-id="0" data-rate="70" value="115" title="Clinical Practitioner">Clinical Practitioner</option>
                                                <option data-role-id="0" data-rate="48.25" value="116" title="Forensic Nurse">Forensic Nurse</option>
                                                <option data-role-id="0" data-rate="100" value="117" title="General Practitioner">General Practitioner</option>
                                                <option data-role-id="0" data-rate="60" value="118" title="HCA">HCA</option>
                                                <option data-role-id="0" data-rate="30" value="119" title="Home Care">Home Care</option>
                                                <option data-role-id="0" data-rate="80" value="120" title="Hospital Doctor">Hospital Doctor</option>
                                                <option data-role-id="0" data-rate="80" value="122" title="Opthalmologist">Opthalmologist</option>
                                                <option data-role-id="0" data-rate="70.75" value="123" title="Pharmacist">Pharmacist</option>
                                                <option data-role-id="0" data-rate="45.5" value="127" title="Practice Nurse">Practice Nurse</option>
                                                <option data-role-id="0" data-rate="45.25" value="130" title="Receptionist">Receptionist</option>
                                                <option data-role-id="0" data-rate="50" value="131" title="Registered General Nurse">Registered General Nurse</option>
                                                <option data-role-id="0" data-rate="40" value="133" title="Support Worker">Support Worker</option>
                                            </select>
                                            <a href="https://empapp.thestaffport.com/Settings/JobRoles" className="btn btn-outline-primary cursor ml-1" data-tippy="" data-original-title="Add Role">
                                                <i className="ti ti-plus"></i>
                                            </a>
                                        </div>
                                    </div>


                                    <div className="form-group mt-3">
                                        <span className="col-blue">Shift Time (from-to)<span className="col-red">*</span></span>
                                        <div className="col-sm-12 row">
                                            <div className="row col-sm-6">
                                                <div className="input-group masked-input unset mb-1">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="zmdi zmdi-time"></i></span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        id="txtShiftTimeFrom"
                                                        className="form-control time24 w-90 TimeFrom"
                                                        placeholder="hh:mm"
                                                        defaultValue="09:00"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group masked-input unset mb-1">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="zmdi zmdi-time"></i></span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        id="txtShiftTimeTo"
                                                        className="form-control time24 w-90 TimeTo"
                                                        placeholder="hh:mm"
                                                        defaultValue="17:00"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3 dd_none">
                                        <span className="col-blue">Duration</span>
                                        <input
                                            id="txtDuration"
                                            className="form-control txtDuration"
                                            type="text"
                                            disabled
                                            placeholder="0.0"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <span className="col-blue">Select Shift Color<span className="col-red">*</span></span>
                                        <input
                                            id="txtLabelColorCode"
                                            className="form-control"
                                            maxLength="7"
                                            type="text"
                                            placeholder="Select color"
                                            defaultValue="#04BE5B"
                                        />
                                        <div className="mt-3">

                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <span className="col-blue">Shift Timings Name<span className="col-red">*</span></span>
                                        <input id="txtShiftTimmingName" className="form-control" type="text" placeholder="Enter shift timings name" value="All Day (Full Day)" />
                                    </div>
                                    {/* Add other form fields here */}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer position_relatie">
                            <a className="btn btn-primary ClsRotaShiftTimming" id="btnRotaShiftTimming" data-id="40" data-action="insertupdate">Update</a>
                            <a className="btn btn-outline-danger" data-dismiss="modal">Cancel</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add New */}

            <div id="add_new" className="modal md-one right-quater" tabindex="-1" role="dialog" aria-labelledby="add_new" aria-hidden="true">
            
                <div className="modal-dialog ui-draggable" role="document">
                    <div className="modal-content">
                        <div className="modal-header ui-draggable-handle">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel2">
                                <b id="lblDocMasterTitle">Add New Employer</b>
                            </h4>
                        </div>  
                        <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="row m-0">
                                <div className="col-12 col-md-6 mt-2">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                           <i class="fa fa-user"></i> First name<span>*</span>
                                        </label>
                                        <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control form-control-lg"
              placeholder="Enter First name"
            />
            {errors.firstName && <div className="error">{errors.firstName}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                        <i class="fa fa-user"></i> Last name<span>*</span>
                                        </label>
                                        <input
           type="text"
           name="lastName"
           value={formData.lastName}
           onChange={handleChange}
           className="form-control form-control-lg"
           placeholder="Enter Last name"
         />
         {errors.lastName && <div className="error">{errors.lastName}</div>}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                        <i class="fa fa-envelope"></i> Email Id<span>*</span>
                                        </label>
                                        <input 
                                        type="email"
           name="email"
           value={formData.email}
           onChange={handleChange}
           className="form-control form-control-lg"
           placeholder="Enter Email Id"
         />
         {errors.email && <div className="error">{errors.email}</div>}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                        <i class="fa fa-phone"></i> Mobile Number<span>*</span>
                                        </label>
                                      
                                        <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="form-control form-control-lg"
              placeholder="Enter Mobile number"
            />
            {errors.mobileNumber && <div className="error">{errors.mobileNumber}</div>}
                                    </div>
                                </div>  
                                
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                        <i class="fa fa-industry"></i>  Company / Organisation Name<span>*</span>
                                        </label>
                                     
                                         <input 
                                        type="text"
           name="companyName"
           value={formData.companyName}
           onChange={handleChange}
           className="form-control form-control-lg"
           placeholder="Enter  Company / Organisation Name"
         />
         {errors.companyName && <div className="error">{errors.companyName}</div>}
                                    </div>
                                </div>  

                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                        <i class="fa fa-text-width" aria-hidden="true"></i> Registration Number<span>*</span>
                                        </label>
                                        <input 
                                        type="text"
           name="registrationNumber"
           value={formData.registrationNumber}
           onChange={handleChange}
           className="form-control form-control-lg"
           placeholder="Enter Registration Number"
         />
         {errors.registrationNumber && <div className="error">{errors.registrationNumber}</div>}
                                        
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                        <i class="fa fa-industry"></i> Industry<span>*</span>
                                        </label>
                                        {/* Dropdown select with options */}
                                        <select
              id="ddl_industry"
              className="form-control form-control-lg"
              data-step="3"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select an industry
              </option>
              {category_ddl.map((item) => (
                <optgroup label={item.industry_name} key={item.industry_id}>
                  {item.categories.map((categories) => (
                    <option
                      key={categories.cat_id}
                      data-industry={item.industry_id}
                      value={categories.cat_id}
                    >
                      {categories.cat_name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            {errors.industry && <div className="error">{errors.industry}</div>}
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <div class="custom-control custom-checkbox checkbox-inline pl-4">
                                        <input id="sentInvitations" type="checkbox" class="custom-control-input"/> 
                                        <label for="sentInvitations" class="custom-control-label line24 pointer">Sent Invitations</label>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                        <div className="modal-footer">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-lg mr-1"> Save </button>
                                        <a className="btn btn-outline-danger btn-lg" data-dismiss="modal"><i className="zmdi zmdi-close"></i> Close</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div> 
            </div>



        </>
    )

}
export default Main;