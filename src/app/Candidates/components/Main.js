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

import { useState, useEffect } from 'react';
import { asyncGet } from '@/app/services/HttpServices';
import { endpoint_agency_role, endpoint_candidate, endpoint_employer, endpoint_employer_ddl } from '@/app/services/ApiEndPoints';



function Main() {
    // Select Employers
    const [selectedValueEmp, setSelectedValueEmp] = useState('');
    const handleSelectChangeEmp = (event) => {
        const newEmpValue = event.target.value;
        setSelectedValueEmp(newEmpValue);
        alert(`Selected Value is : ${newEmpValue}`);
    };
    // Select Location
    const [selectedValueLocation, setSelectedValueLocation] = useState('');
    const handleSelectChangeLocation = (event) => {
        const newLocationValue = event.target.value;
        setSelectedValueLocation(newLocationValue);
        alert(`Location Selected Value is : ${newLocationValue}`);
    };

    // Select Role
    const [selectedValueRole, setSelectedValueRole] = useState('');
    const handleSelectChangeRole = (event) => {
        const newRoleValue = event.target.value;
        setSelectedValueRole(newRoleValue);
        alert(`Role Selected Value is : ${newRoleValue}`);
    };

    const [errors, setErrors] = useState({});
    const [candidate, setCandidates] = useState([]);
    const [employerdropdown, setEmployers] = useState([]);
    const [empAgencyRoles, setAgencyRoles] = useState([]);
    const [empLocations, setEmployerLocations] = useState([]);
    const [empRoles, setEmployerRoles] = useState([]);



    useEffect(() => {

        async function fetchsetEmployerRolesData() {
            try {
                const response = await asyncGet(endpoint_employer + '/14/roles/dropdown');
                setEmployerRoles(response.Response[0].EmployerRoles);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        async function fetchCandidateData() {
            try {
                const response = await asyncGet(endpoint_candidate);
                setCandidates(response.Response[0].Candidates);
            } catch (error) {
                console.error('Error fetching candidate data:', error);
            }
        }

        async function fetchEmployerData() {
            try {
                const response = await asyncGet(endpoint_employer_ddl);
                setEmployers(response.Response[0].Employers);
            } catch (error) {
                console.error('Error fetching employer data:', error);
            }
        }

        async function fetchAgencyRolesData() {
            try {
                const response = await asyncGet(endpoint_agency_role);
                setAgencyRoles(response.Response[0].AgencyRoles);
            } catch (error) {
                console.error('Error fetching agency roles data:', error);
            }
        }

        async function fetchEmployerLocationsData() {
            try {
                const response = await asyncGet(endpoint_employer + '/14/location');
                setEmployerLocations(response.Response[0].EmployerLocations);
            } catch (error) {
                console.error('Error fetching employer locations data:', error);
            }
        }

        fetchCandidateData();
        fetchEmployerData();
        fetchAgencyRolesData();
        fetchEmployerLocationsData();
        fetchsetEmployerRolesData();
    }, []);

    // New candidate validation
    const [formData, setFormData] = useState({
        empTitle: '',
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        role: '',
        employer_status: false,
        Employers: '',
        employerRole: '',
        Location: '',
        sentInvitations: false,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setFormData({ ...formData, [id]: checked });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = {};
        // Perform validation here
        if (!formData.empTitle) {
            validationErrors.empTitle = 'Required.';
        }

        if (!formData.firstName.trim()) {
            validationErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            validationErrors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        }
        if (!formData.role) {
            validationErrors.role = 'Role is required.';
        }

        if (!formData.Employers) {
            validationErrors.Employers = 'Please select an Employer';
        }
        if (!formData.employerRole) {
            validationErrors.employerRole = 'Please select an Employer Role';
        }
        if (!formData.Location) {
            validationErrors.Location = 'Please select a Location';
        }
        // Validate mobile number format using a regular expression
        const mobileNumberRegex = /^[0-9]{10}$/; // Assuming a 10-digit mobile number format
        if (!formData.mobileNumber.trim()) {
            validationErrors.mobileNumber = 'Mobile number is required';
        } else if (!mobileNumberRegex.test(formData.mobileNumber)) {
            validationErrors.mobileNumber = 'Invalid mobile number format. Please enter a 10-digit number.';
        }



        setErrors(validationErrors);

        // If there are no errors, proceed with form submission
        if (Object.keys(validationErrors).length === 0) {
            // Handle form submission here (e.g., send data to server)
            console.log('Form submitted successfully:', formData);
        }
    };

    // New candidate validation

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
                                                            <select className="form-control" onChange={handleSelectChangeEmp} value={selectedValueEmp}>
                                                                <option data-role-id="0" data-rate="0" value="0"
                                                                    selected="selected">Select Employer</option>
                                                                {employerdropdown.map((item) => (
                                                                    <option value={item.emp_id}>
                                                                        {item.emp_name}
                                                                    </option>
                                                                ))}

                                                            </select>
                                                        </div>
                                                        <div className="input-group mr-1">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"> <i
                                                                    className="zmdi zmdi-pin"></i></span>
                                                            </div>
                                                            <select className="form-control" onChange={handleSelectChangeLocation} value={selectedValueLocation}>
                                                                <option value="0" selected="selected">All Locations</option>
                                                                {empLocations.map((item) => (
                                                                    <option value={item.emp_location_id}>{item.emp_location_name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="input-group mr-1">
                                                            <select className="form-control" onChange={handleSelectChangeRole} value={selectedValueRole}>
                                                                <option data-role-id="0" data-rate="0" value="0"
                                                                    selected="selected">Select Role</option>
                                                                {empAgencyRoles.map((item) => (
                                                                    <option value={item.id}>
                                                                        {item.name}
                                                                    </option>
                                                                ))}

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
                                                                {candidate.map((item) => (
                                                                    <tr>
                                                                        <td scope="row">{item.cnd_id}</td>
                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <div className="float-left mt-2 col-black"> <a
                                                                                    className="btn-cnd-profiles-view"
                                                                                    data-toggle="modal" data-target="#viewprofile"><i
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
                                                                                <Link href="/" data-toggle="modal"
                                                                                    data-target="#location_preview" data-id="153"
                                                                                    className="badge badge-info cnd-location-counter"><b>
                                                                                        {item.cnd_locations_total}</b></Link>
                                                                                <div className="tital-text__tooltip">
                                                                                    <p className="mb-1">{item.cnd_locations} </p>
                                                                                    <p className="wd-16pxl bold"><i className="zmdi zmdi-pin"></i> LOCATIONS</p>
                                                                                    <br />
                                                                                    <p>{item.emp_location_name}</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td> <a onclick="return confirm('Are you sure you want to send invitation to employee?');"
                                                                            className="btn btn-outline-primary btn-sm btn-cnd-invite"
                                                                            data-action="invite" title="Send Invitation"> Resend
                                                                            <b>{item.invitation_status}</b> </a> </td>

                                                                        <td> <a className="badge badge-success cursor"> {item.account_status_label} </a>
                                                                        </td>
                                                                        <td> <a className="btn btn-outline-primary btn-sm btn-cnd-profiles-view"
                                                                            data-val={item.cnd_id}
                                                                            data-toggle="modal"
                                                                            data-target="#viewprofile"><i
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
                <div className="modal-dialog" role="document">
                    <form onSubmit={handleSubmit} className="modal-content">
                        <div className="modal-header ui-draggable-handle">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">×</span></button>
                            <h4 className="modal-title" id="myModalLabel2"> <b>Add New Candidate</b> </h4>
                        </div>
                        <div className="modal-body">
                            <div className="p-3">
                                <div className="row">
                                    <div className="col-sm-12 form-group">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label>Title<span>*</span></label>

                                                <select
                                                    id="empTitle"
                                                    className="form-control"
                                                    name="empTitle"
                                                    style={{ minWidth: '78px' }}
                                                    value={formData.empTitle}
                                                    onChange={handleChange}
                                                >
                                                    <option value="" disabled>
                                                        Title
                                                    </option>

                                                    <option value="Dr">Dr.</option>
                                                    <option value="Mr">Mr.</option>
                                                    <option value="Mrs">Mrs.</option>
                                                    <option value="Miss">Miss.</option>
                                                </select>
                                                {errors.empTitle && <div className="error">{errors.empTitle}</div>}
                                            </div>

                                            <div className="col-sm-5 col-6 pl-1">
                                                <label>First Name<span>*</span></label>
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
                                            <div className="col-sm-4 col-6 pl-1">
                                                <label>Last Name<span></span></label>
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
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Email Id <span>*</span></label>
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
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Mobile Number <span>*</span></label>
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
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Role<span>*</span></label>
                                            <div className="input-group">

                                                <select
                                                    id="role"
                                                    className="form-control"
                                                    data-step="3"
                                                    name="role"
                                                    value={formData.role}
                                                    onChange={handleChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Role
                                                    </option>
                                                    {empAgencyRoles.map((item) => (
                                                        <option value={item.id}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <Link href="/Settings/JobRoles" className="btn btn-outline-primary cursor ml-1"
                                                    data-tippy="" data-original-title="Add Role"><i
                                                        className="ti ti-plus"></i></Link>
                                            </div>
                                            {errors.role && <div className="error">{errors.role}</div>}
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className="custom-control custom-checkbox checkbox-inline pl-4">
                                            <input
                                                id="employer_status"
                                                type="checkbox"
                                                className="custom-control-input"
                                                checked={formData.employer_status}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor="employer_status" className="custom-control-label line24 pointer">
                                                Employer Map Status
                                            </label>
                                        </div>
                                    </div>

                                    {formData.employer_status && (
                                        <div className="col-md-12">
                                            {/* Show this div when the checkbox is checked */}

                                            <div className="form-group">
                                                <label>Employers<span>*</span></label>
                                                <div className="input-group">
                                                    <select
                                                        id="Employers"
                                                        className="form-control"
                                                        name="Employers"
                                                        value={formData.Employers}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="" disabled>
                                                            Select Employer
                                                        </option>
                                                        {employerdropdown.map((item) => (
                                                            <option key={item.emp_id} value={item.emp_id}>
                                                                {item.emp_name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                {errors.Employers && <div className="error">{errors.Employers}</div>}
                                            </div>


                                            <div className="form-group">
                                                <label>Employer Role<span>*</span></label>
                                                <div className="input-group">
                                                    <select
                                                        id="employerRole"
                                                        className="form-control"
                                                        name="employerRole"
                                                        value={formData.employerRole}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="" disabled>
                                                            Select
                                                        </option>
                                                        {empRoles.map((item) => (
                                                            <option key={item.id} value={item.id}>
                                                                {item.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                {errors.employerRole && <div className="error">{errors.employerRole}</div>}
                                            </div>



                                            <div className="form-group">
                                                <label>Location<span>*</span></label>
                                                <div className="input-group">
                                                    <select
                                                        id="Location"
                                                        className="form-control"
                                                        name="Location"
                                                        value={formData.Location}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="" disabled>
                                                            Select
                                                        </option>
                                                        {empLocations.map((item) => (
                                                            <option key={item.emp_location_id} value={item.emp_location_id}>
                                                                {item.emp_location_name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                {errors.Location && <div className="error">{errors.Location}</div>}
                                            </div>
                                        </div>

                                    )}



                                    <div className="col-12 mb-3">
                                        <div className="custom-control custom-checkbox checkbox-inline pl-4">
                                            <input
                                                id="sentInvitations"
                                                type="checkbox"
                                                className="custom-control-input"
                                                checked={formData.sentInvitations}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor="sentInvitations" className="custom-control-label line24 pointer">
                                                Sent Invitations
                                            </label>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="modal-footer mail-footer text-center" >
                            <button type="submit" id="btnNewEmpSubmit" className="btn btn-primary">
                                Register Now
                            </button>
                            <a id="btnNewEmpClose" data-dismiss="modal" className="btn btn-outline-danger">Cancel</a>
                        </div>
                    </form>
                </div>
            </div>

            <div id="viewprofile" className="modal right-full confirm profile-id" data-id="0" tabindex="-1" role="dialog" aria-labelledby="viewprofile">
                <div className="modal-dialog" role="document">

                    <div className="modal-content upmodel" style={{ height: "99.3%" }}>
                        <div id='CndProfileHeader_Placeholder' className="modal-header">
                            <div className="">
                                <h4 className="modal-title hide-head profile-header" data-val="0"> <b>General Practitioner

                                </b>
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
                                data-val="0" data-sub-type="Agency"><i className="zmdi zmdi-refresh font-16"></i> <b
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
                                    {/* <Account /> */}
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
                                            placeholder="Enter document name" />
                                    </div>
                                </div>
                                <div className="col-12 mt-2">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg">
                                            Document No.<span>*</span>
                                        </label>
                                        <input id="" type="text" className="form-control form-control-lg "
                                            placeholder="Enter document no." />
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
                                            <hr />
                                            <a id="btnAddMoreFiles" className="btn btn-info clearTextFile  modal-taskfile-btn" style={{ marginRight: '5px' }} task-action="addMoreFiles">
                                                <i className="zmdi zmdi-plus col-white"></i> <b className="col-white">Add More Files</b>
                                            </a>
                                            <a id="btnAttachFiles" className="btn btn-success clearTextFile modal-taskfile-btn mr-1 clickmode" data-hide=".divFileAttachfile" data-show=".attachedFile,.divAttachedFiles, .browes_btn" action-from="taskAdd" task-action="attachFiles">
                                                <i className="zmdi zmdi-plus-circle-o-duplicate col-white"></i> <b className="col-white">Attach Files</b>
                                            </a>
                                            <a className="btn btn-outline-danger clearTextFile  cls-doc-file-action" data-action="cancel">
                                                Cancel
                                            </a>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-12 mb-1">
                                    <div className='row g-0'>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label col-form-label-lg">
                                                Document Issue date <input id="chkDocMasterDocIssue" type="checkbox" className="ml-2 clsswichDoc" />
                                            </label>
                                            <input type="text" id="divDocumentIssueDate" className="form-control" placeholder="DD/MM/YYYY" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label col-form-label-lg">
                                                Document Expiry date <input id="chkDocMasterDocExpiry" type="checkbox" className="ml-2 clsswichDoc" />
                                            </label>
                                            <input type="text" id="divDocumentExpiryDate" className="form-control" placeholder="DD/MM/YYYY" />
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
                                                <input type="checkbox" className="switch clsswichDoc" id="chkDocMasterStatus" />
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



            <div className="modal add-new-event right-quater" id="addEvent" tabindex="-1" role="dialog" aria-labelledby="addEvent"  aria-hidden="true">
    <div className="modal-dialog right-quater" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title" id="eventModelTitleEvent"><b>Add Event</b></h4>
            </div>
            <div className="modal-body" >
                <div className="ClsDatepair">
                    <div className="" id="divRowEventsAddModal">
                        <div id="divCreateEventsForm" className="col-lg-12">
                            <div className="row HeDslCt mt-3 mb-2">
                                <div className="col-md-4">
                                    <div className=" inputGroup bgbdr-white">
                                        <input id="rdoAvailable" type="radio" name="rdoEventType" data-item="Available" className="rdoEventType" value="Available" checked="checked"/>
                                        <label for="rdoAvailable">Available</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className=" inputGroup bgbdr-white">
                                        <input id="rdoUnAvailable" type="radio" name="rdoEventType" data-item="UnAvailable" className="rdoEventType" value="UnAvailable"/>
                                        <label for="rdoUnAvailable">UnAvailable</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className=" inputGroup bgbdr-white">
                                        <input id="rdoTask" type="radio" name="rdoEventType" data-item="Task" className="rdoEventType" value="Task"/>
                                        <label for="rdoTask">Task</label>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-12 event-title p-0">
                                <div className="form-group">
                                    <label><b>Event Title</b><span></span></label>
                                    <input
                                    id="txtEventTitle"
                                    type="text"
                                    className="form-control"
                                    autoComplete="off"
                                    placeholder="Event Title"          
                                    />
                                </div>
                            </div>
                            <div className="col-md-12 task-name p-0" >
                                <div className="form-group">
                                    <label>
                                        <b>Task Name</b>
                                        <span></span>
                                    </label>
                                    <input id="txtTaskName" type="text" className="form-control clearText" autocomplete="off" placeholder="Task Name"/>
                                </div>
                            </div>
                            <div className="col-md-12 p-0 HeDslCt pb-4">
                                <label><b>Availability</b></label>
                                <div className="row">
                                    <div className="col-sm-6 col-6 pr-1">
                                        <div className=" inputGroup bgbdr-white">
                                            <input id="rdoAllDay" type="radio" name="rdoAvailability" data-val="all-day" className="rdoAvailability" value="1" checked="checked"/>
                                            <label for="rdoAllDay">All Day</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-6">
                                        <div className=" inputGroup bgbdr-white">
                                            <input id="rdoPartail" type="radio" name="rdoAvailability" data-val="partial" className="rdoAvailability" value="2"/>
                                            <label for="rdoPartail">Partial</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xs-6">
                                    <label><b>Start Date </b></label>
                                    <div className="form-group">
                                        <div className="input-group masked-input unset mb-1">
                                            <div className="input-group-prepend">
                                                <input type="text" id="txtEventStartDate" className="form-control date start clearText mr-1" autocomplete="off" placeholder="dd/mm/yyyy"  />
                                                <input type="text" id="txtEventStartTime" className="form-control time start w-90 clearText event-time ui-timepicker-input"  autocomplete="off" placeholder="hh:mm" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-6">
                                    <div className="form-group">
                                        <label><b>End Date </b></label>
                                        <div className="input-group masked-input unset mb-1">                                           
                                            <input type="text" id="txtEventEndDate" className="form-control date end clearText mr-1" autocomplete="off" placeholder="dd/mm/yyyy"  />
                                            <input type="text" id="txtEventEndTime" className="form-control time end w-90 clearText event-time ui-timepicker-input"  autocomplete="off" placeholder="hh:mm" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 p-0">
                                <div className="form-group">
                                    <label><b>Description</b></label>
                                    <textarea id="txtEventDescription" className="form-control clearText" rows="3" placeholder="Description"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button id="btnSubmitCNDEvent" data-id="" data-action="event_add" className="btn btn-primary Evt_calendar mr-1">Submit</button>
                            <button id="btnCancelCNDEvent" data-dismiss="modal" className="btn btn-outline-danger"><b>Cancel</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




<div class="modal fade" id="ModalHowItWork" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" draggable="true">
    <div class="modal-dialog" style={{ top: '80px', width:"800px!important",height:"520px!important" }} >
        <div class="modal-content" style={{ border: '2px solid #337ab7', width:"800px!important",height:"520px!important" }} >
            <div class="form-horizontal" onsubmit="return false;">
                <div class="modal-header" style={{ border: '1px solid #337ab7', width:"800px!important" }}>
                    <h3 class="modal-title" style={{ fontSize: '18px' }}>
                        How it works
                    </h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="btnPopClose">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body" style={{ padding: '18px' }} >
                    <div class="row">
                        <video style={{ width: '100%',height:'auto' }}  controls>
                            <source src="~/Content/videos/medico-dairyv3.mp4" type="video/mp4" ></source>
                        </video>
                    </div>
                </div>
                <div ><a class="btn btn-sm btn-outline-danger" data-dismiss="modal">Close</a></div>
            </div>
        </div>
    </div>
</div>

<div class="modal right-quater" id="modalCNDCldrDelete" tabindex="-1" role="dialog">
    <div class="modal-dialog calendardiary" role="document" style={{ width: '400px',height:'200px!important' }}  >
        <div class="modal-content" style={{ width: '400px',height:'200px!important' }} >
            <div class="modal-header" id="modalDeleteHeader" style={{ padding: '5px 15px',height:'200px!important' }}>
                <h4 class="modal-title mt-2 font-16"><b id="modalCNDcldrDeleteHeading" ></b></h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="btnPopClose">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body" >
                <div class="bg-white  pt-3 pb-3" id="actionModal" style={{
            zIndex: 999999,
            position: 'relative'
          }}>
                    <table class="table">
                        <tbody>
                            <tr class="tr_bg">
                                <td style={{border: 'none',textAlign: 'center'}}        >
                                    <span class="text-blue"><b id="cndcldrDeletelbl"></b></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-center">
                                <button id="modalCNDDeleteBtnYes" value="Submit" data-action="delete" data-title="Yes" class="btn btn-warning Evt_calendar mr-1">Yes</button>
                                <button value="Submit" data-dismiss="modal" data-title="No" class="btn btn-primary  Evt_calendar">No</button>
                            </div>
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
