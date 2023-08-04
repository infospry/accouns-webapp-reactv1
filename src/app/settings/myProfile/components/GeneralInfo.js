"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { asyncGet } from '@/app/services/HttpServices';
import { endpoint_account } from '@/app/services/ApiEndPoints';

export default function GeneralInfo() {

    const [errors, setErrors] = useState({});
    const [InfoAccountDetails, setAccountDetails] = useState([]);

    useEffect(() => {

        async function fetchAccountDetailsData() {
            try {
                const response = await asyncGet(endpoint_account);
                setAccountDetails(response.Response[0].AccountDetails);
            } catch (error) {
                console.error('Error fetching AccountDetails data:', error);
            }
        }

        fetchAccountDetailsData();
    }, []);

    const [formData, setFormData] = useState({
        sector: '',
        financialYear: '',
        createDate: '',
        url: '',
        timezone: '',
        language: '',
        companyId: '',
        currency: '',
        taxId: '',
        taxType: '',
        customType: '',
        customValue: '',
    });

    // Other code...

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        // Perform your validation here and set errors accordingly
        if (!formData.sector) {
            validationErrors.sector = 'Sector is required.';
        }

        // Validate other fields as needed...

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // If no validation errors, proceed with form submission or other actions
        // For example, you can call an API to save the data
        console.log('Form submitted:', formData);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <>

            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="row mt-0 mb-1 justify-content-center">
                        <div className="col-md-12 col-lg-10 col-xl-10">


                            {/* <!-- ::::::::::: --> */}
                            <div className="panel-group">
                                <div className="panel panel-primary bdr mt-4">
                                    <div className="panel-body pt-0 pb-0">
                                        <div className="row">
                                            <div className="col-sm-12 formbg p-0">
                                                <div
                                                    className="avt_bg d-flex justify-content-between align-items-center">
                                                    <h3 className="mb-0"><b>General
                                                        Information</b>
                                                    </h3>

                                                    <button
                                                        className="cross add-contact-cross clickmode dd_none General_cross"
                                                        data-hide=".edit_General_info, .General_cross"
                                                        data-show=".View_General_info, .General_edit"><i
                                                            className="zmdi zmdi-close"
                                                            aria-hidden="true"></i></button>
                                                    <a className="btn btn-sm btn-primary clickmode General_edit"
                                                        data-hide=".View_General_info, .General_edit"
                                                        data-show=".edit_General_info, .General_cross"><i
                                                            className="zmdi zmdi-edit"></i>
                                                        Edit </a>
                                                </div>
                                                {InfoAccountDetails.map((item) => (
                                                    <div
                                                        className="p-4 bdr_b1 View_General_info">
                                                        <div
                                                            className="row justify-content-start">
                                                            <div className='col-12'>
                                                                <h3 style={{ fontSize: "15px" }}><b>Profile Information</b></h3>
                                                                <hr />
                                                            </div>
                                                            <div className="col-12 col-lg-6">
                                                                <h4>Profile Name
                                                                </h4>
                                                                <p className="mb-3 profileView">
                                                                    <span id="spanProName" className="col-black font-16 font-600"key={item.user_id}>
                                                                        {item.user_full_name} </span>
                                                                    <a className="col-blue clickmode ml-2" data-show=".profileEdit" data-hide=".profileView"><i
                                                                        className="zmdi zmdi-edit font-13"></i></a>
                                                                </p>
                                                                <div className="profileEdit dd_none">
                                                                    <p className="mb-3 input-group">
                                                                        <input id="txt_user_profile_name" className="form-control" type="text" maxlength="30"
                                                                            placeholder="Enter your name"/>
                                                                        <a id="updateProName" className="btn btn-primary cls-user-profile ml-1" data-action="updatename" style={{
                                                                            width: "90px"
                                                                        }}>Submit</a>
                                                                        <a className="btn btn-danger clickmode  ml-1" data-show=".profileView" data-hide=".profileEdit">X</a>
                                                                    </p>
                                                                </div>
                                                                <h4>Role</h4>
                                                                <p className="mb-3 roleView">
                                                                    <span className="col-black font-16 font-600" key={item.role_id}>
                                                                        {item.user_role}</span>
                                                                </p>
                                                                <h4>Designation</h4>
                                                                <p className="mb-3 roleView">
                                                                    <span className="col-black font-16 font-600">
                                                                        {item.designation}</span>
                                                                </p>
                                                                



                                                            </div>
                                                            <div className="col-12 col-lg-6">
                                                                <div className="mb-3 emailView">
                                                                    <h4>Email
                                                                        Address</h4>
                                                                    <span id="spanProEmail" className="col-black font-16 font-600">
                                                                        {item.email}
                                                                    </span> <a className="col-blue clickmode ml-2" data-show=".emailEdit" data-hide=".emailView"><i
                                                                        className="zmdi zmdi-edit font-13"></i></a>
                                                                </div>
                                                                <div className="emailEdit dd_none">
                                                                    <h4>Email
                                                                        Address</h4>
                                                                    <p className="mb-3 input-group">
                                                                        <input id="txt_user_profile_email" className="form-control mr-1" maxlength="30" type="email"
                                                                            placeholder="Enter email Id"/>
                                                                        <a id="updateProEmail" className="btn btn-primary  cls-user-profile" data-action="updateemail"
                                                                            data-show=".otpEdit" data-hide=".emailEdit" style={{ width: "90px" }}>Submit</a>
                                                                        <a className="btn btn-danger clickmode ml-1" data-show=".emailView" data-hide=".emailEdit">X</a>
                                                                    </p>
                                                                </div>
                                                                <div className="otpEdit dd_none">
                                                                    <h4>Enter Code
                                                                    </h4>
                                                                    <p className="mb-3 input-group">
                                                                        <input className="form-control mr-1 text-center" maxlength="10" type="text" placeholder="" />
                                                                        <a id="updateProCode" className="btn btn-primary mr-1 clickmode" data-show=".emailView" data-hide=".otpEdit"
                                                                            style={{ width: "90px" }}>Submit</a>
                                                                        <button className="btn btn-outline-primary clickmode  ml-1" data-show="." data-hide="." style={{
                                                                            width: "90px"
                                                                        }}>Resent</button>
                                                                    </p>
                                                                </div>
                                                                <div className="mb-3 phoneView">
                                                                    <h4>Mobile
                                                                        Number</h4>
                                                                    <span id="spanProMob" className="col-black font-16 font-600">
                                                                        {item.mobile}
                                                                    </span> <a className="col-blue clickmode ml-2" data-show=".phoneEdit" data-hide=".phoneView"><i
                                                                        className="zmdi zmdi-edit font-13"></i></a>
                                                                </div>
                                                                <div className="phoneEdit dd_none">
                                                                    <h4>Mobile
                                                                        Number</h4>
                                                                    <p className="mb-3 input-group">
                                                                        <input id="txt_user_profile_mobile" className="form-control mr-1 number" maxlength="11" type="text"
                                                                            placeholder="Enter mobile number"  />
                                                                        <a id="updateProMobile" className="btn btn-primary cls-user-profile" data-action="updatemobile"
                                                                            data-show=".phone_Edit" data-hide=".phoneEdit" style={{ width: "90px" }}>Submit</a>
                                                                        <a className="btn btn-danger clickmode  ml-1" data-show=".phoneView" data-hide=".phoneEdit">X</a>
                                                                    </p>
                                                                </div>
                                                                <div className="phone_Edit dd_none">
                                                                    <h4>Enter Code
                                                                    </h4>
                                                                    <p className="mb-3 input-group">
                                                                        <input className="form-control mr-1 text-center" maxlength="4" type="text" placeholder="" />
                                                                        <button className="btn btn-primary mr-1 clickmode" data-show=".phoneView" data-hide=".phone_Edit" style={{
                                                                            width: "90px"
                                                                        }}>Submit</button>
                                                                        <button className="btn btn-outline-primary clickmode  ml-1" data-show="." data-hide="." style={{
                                                                            width: "90px"
                                                                        }}>Resent</button>
                                                                    </p>
                                                                </div>




                                                            </div>
                                                            <div className='col-12'>
                                                                <hr />
                                                                <h3 style={{ fontSize: "15px" }}><b>Company Information</b></h3>
                                                                <hr />
                                                            </div>
                                                            <div className="col-12 col-lg-6">

                                                                <h4>Sector</h4>
                                                                <p className="mb-3 roleView">
                                                                    <span className="col-black font-16 font-600" key={item.sector_id}>
                                                                        {item.sector_name}</span>
                                                                </p>

                                                                <h4> Financial Year
                                                                </h4>
                                                                <p className="mb-3">
                                                                    <span className="col-black font-16 font-600">
                                                                        {item.org_financial_year_start} -
                                                                        {item.org_financial_year_end}</span>
                                                                </p>
                                                                
                                                                <h4>Website</h4>
                                                                <p className="mb-3">
                                                                    <span className="col-black font-16 font-600">
                                                                        {item.website}
                                                                    </span>
                                                                </p>

                                                                <h4> Language</h4>
                                                                <p className="mb-3">
                                                                    <span className="col-black font-16 font-600">
                                                                        {item.org_language}
                                                                    </span>
                                                                </p>


                                                               

                                                            </div>
                                                            <div className="col-12 col-lg-6">
                                                            <h4> Create Date
                                                                </h4>
                                                                <p className="mb-3">
                                                                    <span className="col-black font-16 font-600">
                                                                        {item.create_date}
                                                                    </span>
                                                                </p>
                                                            <h4>Company Id</h4>
                                                                <p className="mb-3">
                                                                    <span className="col-black font-16 font-600">
                                                                        {item.org_company_id}
                                                                    </span>
                                                                </p>
                                                                <h4>Currency</h4>
                                                                <p className="mb-3">
                                                                    <span className="col-black font-16 font-600">
                                                                        {item.org_currency}
                                                                    </span>
                                                                </p>
                                                                <h4>Tax Id</h4>
                                                                <p className="mb-3">
                                                                    <span className="col-black font-16 font-600">
                                                                        {item.org_tax_id}
                                                                    </span>
                                                                </p>


                                                                <h4>Tax Type</h4>
                                                                <p className="mb-3">
                                                                    <span className="col-black font-16 font-600">
                                                                        {item.org_tax_type}
                                                                    </span>
                                                                </p>


                                                                





                                                            </div>
                                                            <div
                                                                className="col-md-12 mb-2 text-center">
                                                                <hr
                                                                    className="m-0 mb-4" />
                                                                <button
                                                                    value="Submit"
                                                                    className="btn btn-primary btn-lg clickmode General_edit"
                                                                    data-hide=".View_General_info, .General_edit"
                                                                    data-show=".edit_General_info, .General_cross"><b>Edit</b></button>
                                                            </div>




                                                        </div>
                                                    </div>
                                                ))}
                                                <div
                                                    className="p-4 bdr_b1 dd_none edit_General_info">
                                                    <form onSubmit={handleSubmit}>
                                                        <div
                                                            className="row justify-content-start">
                                                            <div className="col-12 col-lg-6">
                                                                <div className="form-group">
                                                                    <h4>Sector<span className='red'>*</span></h4>
                                                                    <select
                                                                        className="form-control mt-1 form-control-lg mt-1"
                                                                        name="sector"
                                                                        value={formData.sector}
                                                                        onChange={handleChange}
                                                                    >
                                                                        <option data-role-id="0" data-rate="0" value="0" selected="selected">Select Sector</option>
                                                                        {/* Add other options */}
                                                                    </select>
                                                                    {errors.sector && <div className="error">{errors.sector}</div>}
                                                                </div>


                                                                <div
                                                                    className="form-group">
                                                                    <h4>Financial
                                                                        Year</h4>
                                                                    <select
                                                                        className="form-control mt-1 form-control-lg mt-1"
                                                                        name="financialYear"
                                                                        value={formData.financialYear}
                                                                        onChange={handleChange}
                                                                    >
                                                                        <option
                                                                            value="0"
                                                                            selected="selected">
                                                                            Select
                                                                            Year
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                                <div
                                                                    className="form-group">
                                                                    <h4>Create Date
                                                                    </h4>
                                                                    <input
                                                                        className="form-control form-control-lg mt-1"
                                                                        type="text"
                                                                        placeholder="DD/MM/YYY"
                                                                        name="createDate"
                                                                        value={formData.createDate}
                                                                        onChange={handleChange} />
                                                                </div>

                                                                <div
                                                                    className="form-group">
                                                                    <h4>Url</h4>
                                                                    <input className="form-control form-control-lg mt-1"
                                                                        type="text"
                                                                        placeholder="Enter Url "
                                                                        name="url"
                                                                        value={formData.url}
                                                                        onChange={handleChange} />

                                                                </div>
                                                                <div
                                                                    className="form-group">
                                                                    <h4>Timezone
                                                                    </h4>
                                                                    <input
                                                                        className="form-control form-control-lg mt-1"
                                                                        placeholder="Enter Timezone"
                                                                        type="text"
                                                                        name="timezone"
                                                                        value={formData.timezone}
                                                                        onChange={handleChange}
                                                                    />
                                                                </div>
                                                                <div
                                                                    className="form-group">
                                                                    <h4>Language
                                                                    </h4>
                                                                    <input
                                                                        className="form-control form-control-lg mt-1"
                                                                        placeholder="Enter Language" type="text"
                                                                        name="language"
                                                                        value={formData.language}
                                                                        onChange={handleChange} />
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="col-12 col-lg-6">
                                                                <div
                                                                    className="form-group">
                                                                    <h4>Company Id
                                                                    </h4>
                                                                    <input
                                                                        className="form-control form-control-lg mt-1"
                                                                        placeholder="Enter Company Id" type="text"
                                                                        name="companyId"
                                                                        value={formData.companyId}
                                                                        onChange={handleChange} />
                                                                </div>
                                                                <div
                                                                    className="form-group">
                                                                    <h4>Currency
                                                                    </h4>

                                                                    <select
                                                                        className="form-control mt-1 form-control-lg mt-1"
                                                                        name="currency"
                                                                        value={formData.currency}
                                                                        onChange={handleChange}
                                                                    >
                                                                        <option
                                                                            value="0"
                                                                            selected="selected">
                                                                            Select
                                                                            Currency
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                                <div
                                                                    className="form-group">
                                                                    <h4>Tax Id</h4>
                                                                    <input
                                                                        className="form-control form-control-lg mt-1"
                                                                        placeholder="Enter Tax Id"
                                                                        type="text"
                                                                        name="taxId"
                                                                        value={formData.taxId}
                                                                        onChange={handleChange}
                                                                    />
                                                                </div>
                                                                <div
                                                                    className="form-group">
                                                                    <h4>Tax Type
                                                                    </h4>
                                                                    <input
                                                                        className="form-control form-control-lg mt-1"
                                                                        placeholder="Enter Tax Type"

                                                                        type="text"
                                                                        name="taxType"
                                                                        value={formData.taxType}
                                                                        onChange={handleChange}
                                                                    />
                                                                </div>
                                                                <div
                                                                    className="form-group">
                                                                    <h4>Custom Type
                                                                    </h4>
                                                                    <input
                                                                        className="form-control form-control-lg mt-1"
                                                                        placeholder="Enter Custom Type"
                                                                        type="text"
                                                                        name="customType"
                                                                        value={formData.customType}
                                                                        onChange={handleChange}
                                                                    />
                                                                </div>
                                                                <div
                                                                    className="form-group">
                                                                    <h4>Custom Value
                                                                    </h4>
                                                                    <input
                                                                        className="form-control form-control-lg mt-1"
                                                                        placeholder="Enter Custom Value" type="text"
                                                                        name="customValue"
                                                                        value={formData.customValue}
                                                                        onChange={handleChange} />
                                                                </div>





                                                            </div>
                                                            <div
                                                                className="col-md-12 mb-2 text-center">
                                                                <hr
                                                                    className="m-0 mb-4" />
                                                                <button className="btn btn-primary btn-lg clickmode dd_none General_cross" type="submit"><b>Update</b></button>
                                                                <button type='button' className="btn btn-outline-danger btn-lg clickmode dd_none General_cross"
                                                                    data-hide=".edit_General_info, .General_cross"
                                                                    data-show=".View_General_info, .General_edit"><b>Cancel</b></button>
                                                            </div>


                                                        </div>

                                                    </form>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-primary bdr mt-4">
                                    <div className="panel-body pt-0 pb-0">
                                        <div className="row">
                                            <div className="col-sm-12 formbg p-0">
                                                <div
                                                    className="avt_bg d-flex justify-content-between align-items-center">
                                                    <h3 className="mb-0"><b>Contact
                                                        Address</b> </h3>

                                                    <button
                                                        className="cross add-contact-cross clickmode dd_none Address_cross"
                                                        data-hide=".Edit_contact_address, .Address_cross"
                                                        data-show=".View_contact_address, .Address_edit"><i
                                                            className="zmdi zmdi-close"
                                                            aria-hidden="true"></i></button>
                                                    <a className="btn btn-sm btn-primary clickmode Address_edit"
                                                        data-hide=".View_contact_address, .Address_edit"
                                                        data-show=".Edit_contact_address, .Address_cross"><i
                                                            className="zmdi zmdi-edit"></i>
                                                        Edit </a>
                                                </div>
                                                <div
                                                    className="p-4 bdr_b1 View_contact_address">
                                                    <div
                                                        className="row justify-content-start">
                                                        <div className="col-12">
                                                            <h4>Branch Name</h4>
                                                            <p className="mb-3">
                                                                <span
                                                                    className="col-black font-16 font-600">
                                                                    Healthcare
                                                                    Demo Pvt.
                                                                    Ltd. </span>

                                                            </p>



                                                            <h4>Address Line
                                                            </h4>
                                                            <p
                                                                className="mb-3 roleView">
                                                                <span
                                                                    className="col-black font-16 font-600">Radclyffe
                                                                    house, 66-68
                                                                    Hagley Rd,
                                                                    Edgbaston</span>
                                                            </p>

                                                            <h4> City </h4>
                                                            <p className="mb-3">
                                                                <span
                                                                    className="col-black font-16 font-600">
                                                                    Birmingham</span>
                                                            </p>
                                                            <h4> County
                                                            </h4>
                                                            <p className="mb-3">
                                                                <span
                                                                    className="col-black font-16 font-600">
                                                                    West
                                                                    Midlands,
                                                                    United
                                                                    Kingdom
                                                                </span>
                                                            </p>
                                                            <h4>Postcode</h4>
                                                            <p className="mb-3">
                                                                <span
                                                                    className="col-black font-16 font-600">
                                                                    B16 8PF
                                                                </span>
                                                            </p>

                                                        </div>
                                                        <div
                                                            className="col-md-12 mb-2 text-center">
                                                            <hr
                                                                className="m-0 mb-4" />
                                                            <button
                                                                value="Submit"
                                                                className="btn btn-primary btn-lg clickmode  Address_edit"
                                                                data-hide=".View_contact_address, .Address_edit"
                                                                data-show=".Edit_contact_address, .Address_cross"><b>Edit</b></button>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div
                                                    className="p-4 bdr_b1 dd_none Edit_contact_address">

                                                    <div className="col-md-12">

                                                        <div
                                                            className="form-group row">
                                                            <label
                                                                className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Branch
                                                                Name</label>
                                                            <div
                                                                className="col-sm-8 col-lg-5">
                                                                <input
                                                                    id="ddl_profile_first_name"
                                                                    type="text"
                                                                    className="form-control form-control-lg"
                                                                    value="Doctor5"
                                                                    placeholder="Enter Branch Name" />
                                                            </div>
                                                        </div>

                                                        <div className="form-group row"
                                                            style={{ display: "none" }}>
                                                            <label
                                                                className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Country</label>
                                                            <div
                                                                className="col-sm-8 col-lg-5">
                                                                <select
                                                                    id="ddl_profile_country"
                                                                    className="form-control form-control-lg">
                                                                    <option>
                                                                        Select
                                                                        Country
                                                                    </option>
                                                                    <option
                                                                        value="1">
                                                                        UK
                                                                    </option>
                                                                </select> </div>
                                                        </div>
                                                        <div
                                                            className="form-group row mt-3">
                                                            <label for=""
                                                                className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Postcode<span></span></label>
                                                            <div
                                                                className="col-sm-8 col-lg-5">
                                                                <div
                                                                    className="input-group">
                                                                    <input
                                                                        id="txtContactsPostCodePI"
                                                                        placeholder="Postcode"
                                                                        value="B1 1JG"
                                                                        className="form-control form-control-lg"
                                                                        type="text" />
                                                                    <button
                                                                        className="btn btn-outline-primary btn-lg ml-1 profile-find-addresslist"><i
                                                                            className="zmdi zmdi-pin"></i>
                                                                        Find
                                                                        Address</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row form-group profile-ddl-addresslist"
                                                            style={{ display: "none" }}>
                                                            <label
                                                                className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Address
                                                                List<span></span></label>
                                                            <div
                                                                className="col-sm-8 col-lg-5">
                                                                <select
                                                                    id="ddlContactsAddressListPI"
                                                                    className="form-control form-control-lg ddl-profile-addresslist"></select>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="form-group row">
                                                            <label
                                                                className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Address
                                                                line
                                                                1<span></span></label>
                                                            <div
                                                                className="col-sm-8 col-lg-5">
                                                                <input
                                                                    id="txtContactsAddressLine1PI"
                                                                    placeholder="Address Line 1"
                                                                    value="Craven Arms  1 Upper Gough Street"
                                                                    className="form-control form-control-lg"
                                                                    type="text" />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="form-group row">
                                                            <label
                                                                className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Address
                                                                line
                                                                2<span></span></label>
                                                            <div
                                                                className="col-sm-8 col-lg-5">
                                                                <input
                                                                    id="txtContactsAddressLine2PI"
                                                                    placeholder="Address Line 2"
                                                                    value=""
                                                                    className="form-control form-control-lg"
                                                                    type="text" />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="form-group row">
                                                            <label
                                                                className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Town/City<span></span></label>
                                                            <div
                                                                className="col-sm-8 col-lg-5">
                                                                <input
                                                                    placeholder="Town/City"
                                                                    value="Birmingham"
                                                                    className="form-control form-control-lg"
                                                                    type="text" />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="form-group row">
                                                            <label
                                                                className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">County<span></span></label>
                                                            <div
                                                                className="col-sm-8 col-lg-5">
                                                                <input
                                                                    placeholder="County"
                                                                    value=" West Midlands"
                                                                    className="form-control form-control-lg"
                                                                    type="text" />
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div
                                                        className="col-md-12 mb-2 text-center">
                                                        <hr className="m-0 mb-4" /> <a
                                                            className="btn btn-primary btn-lg clickmode  dd_none Address_cross"
                                                            data-hide=".Edit_contact_address, .Address_cross"
                                                            data-show=".View_contact_address, .Address_edit"><b>Update</b></a>
                                                        <button
                                                            className="btn btn-outline-danger btn-lg clickmode  dd_none Address_cross"
                                                            data-hide=".Edit_contact_address, .Address_cross"
                                                            data-show=".View_contact_address, .Address_edit"><b>
                                                                Cancel</b></button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- ::::::::::: --> */}

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
