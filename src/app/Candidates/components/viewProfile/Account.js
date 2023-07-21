import React from 'react'

function Account() {
  return (
    <>
      <div className="mt-4 mb-1">
    <div className="col-md-8 offset-md-2 pro">
        <div className="accordion" id="accordionExample"> 
            <div className="item">
                <div className="item-header" id="headingTwo">
                    <h2 className="mb-0"> <button className="btn btn-link" type="button"
                            data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo"> Personal
                            Information <i className="zmdi zmdi-chevron-down"></i> </button>
                    </h2>
                </div>
                <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo"
                    data-parent="#accordionExample">
                    <div className="t-p">
                        <div className="row disply_none_rowpersonal">
                            <div className="col-md-12 col-sm-12"> <a
                                    className="btn btn-sm btn-primary hover clickmode"
                                    data-show=".disply_rowpersonal"
                                    data-hide=".disply_none_rowpersonal"> <i
                                        className="zmdi zmdi-edit"></i> Edit </a>
                                <div className="p-3">
                                    <p className="mb-3"> <span className="wd-180px"> Name</span>
                                        <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> Dr
                                            Doctor5 Agnecy </span>
                                    </p>
                                    <p className="mb-3"> <span className="wd-180px">Date of
                                            birth</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1">
                                            11/06/1991 </span> </p>
                                    <p className="mb-3"> <span className="wd-180px"> Gender</span>
                                        <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> Female
                                        </span>
                                    </p>
                                    <p className="mb-3" style={{display:"none"}}> <span
                                            className="wd-180px"> Country</span> <span>:</span>
                                        <span className="col-black font-16 font-bold ml-1">
                                        </span>
                                    </p>
                                    <p className="mb-3"> <span className="wd-180px">Address</span>
                                        <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> Craven
                                            Arms 1 Upper Gough Street</span>
                                    </p>
                                    <p className="mb-3"> <span className="wd-180px">
                                            City/Town</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1">
                                            Birmingham </span> </p>
                                    <p className="mb-3"> <span className="wd-180px">County</span>
                                        <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> West
                                            Midlands</span>
                                    </p>
                                    <p className="mb-3"> <span className="wd-180px">Postcode</span>
                                        <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1">B1
                                            1JG</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/> <button value="Submit"
                                    className="btn btn-primary btn-lg clickmode"
                                    data-show=".disply_rowpersonal"
                                    data-hide=".disply_none_rowpersonal"><b>Edit</b></button>
                            </div>
                        </div>
                        <div className="row disply_rowpersonal pt-3 pb-3" style={{display:"none"}}>
                            <button className="cross clickmode" data-hide=".disply_rowpersonal"
                                data-show=".disply_none_rowpersonal"><i
                                    className="zmdi zmdi-close" aria-hidden="true"></i></button>
                            <div className="col-md-12">
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Title</label>
                                    <div className="col-sm-6 col-lg-4"> <select
                                            id="ddl_profile_title"
                                            className="form-control form-control-lg">
                                            <option value="">Please Select</option>
                                            <option value="Mr">Mr.</option>
                                            <option value="Mrs">Mrs.</option>
                                            <option value="Miss">Miss</option>
                                            <option value="Ms">Ms.</option>
                                            <option selected="" value="Dr">Dr.</option>
                                        </select> </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">First
                                        name</label>
                                    <div className="col-sm-8 col-lg-5"> <input
                                            id="ddl_profile_first_name" type="text"
                                            className="form-control form-control-lg"
                                            value="Doctor5" placeholder="Enter first name"/>
                                    </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Middle
                                        name</label>
                                    <div className="col-sm-8 col-lg-5"> <input
                                            id="ddl_profile_middle_name" type="text"
                                            className="form-control form-control-lg" value=""
                                            placeholder="Enter middle name"/> </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Last
                                        name</label>
                                    <div className="col-sm-8 col-lg-5"> <input
                                            id="ddl_profile_last_name" type="text"
                                            className="form-control form-control-lg"
                                            value="Agnecy" placeholder="Enter last name"/>
                                    </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Date
                                        of birth</label>
                                    <div className="col-sm-8 col-lg-5 ClsDatepair"> <input
                                            id="ddl_profile_dbo" type="text"
                                            className="form-control form-control-lg date start"
                                            value="11/06/1991" placeholder="DD/MM/YYYY"/>
                                    </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Gender</label>
                                    <div className="col-sm-6 col-lg-4"> <select
                                            id="ddl_profile_gender"
                                            className="form-control form-control-lg">
                                            <option value="">Please Select</option>
                                            <option value="M">Male</option>
                                            <option selected="" value="F">Female</option>
                                            <option value="O">Other</option>
                                        </select> </div>
                                </div>
                                <div className="form-group row" style={{display:"none"}}> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Country</label>
                                    <div className="col-sm-8 col-lg-5"> <select
                                            id="ddl_profile_country"
                                            className="form-control form-control-lg">
                                            <option>Select Country</option>
                                            <option value="1">UK </option>
                                        </select> </div>
                                </div>
                                <div className="form-group row mt-3"> <label for=""
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Postcode<span></span></label>
                                    <div className="col-sm-8 col-lg-5">
                                        <div className="input-group"> <input
                                                id="txtContactsPostCodePI"
                                                placeholder="Postcode" value="B1 1JG"
                                                className="form-control form-control-lg"
                                                type="text"/> <button
                                                className="btn btn-outline-primary btn-lg ml-1 profile-find-addresslist"><i
                                                    className="zmdi zmdi-pin"></i> Find
                                                Address</button> </div>
                                    </div>
                                </div>
                                <div className="form-group row form-group profile-ddl-addresslist"
                                    style={{display:"none"}}> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Address
                                        List<span></span></label>
                                    <div className="col-sm-8 col-lg-5"> <select
                                            id="ddlContactsAddressListPI"
                                            className="form-control form-control-lg ddl-profile-addresslist"></select>
                                    </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Address
                                        line 1<span></span></label>
                                    <div className="col-sm-8 col-lg-5"> <input
                                            id="txtContactsAddressLine1PI"
                                            placeholder="Address Line 1"
                                            value="Craven Arms  1 Upper Gough Street"
                                            className="form-control form-control-lg"
                                            type="text"/> </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Address
                                        line 2<span></span></label>
                                    <div className="col-sm-8 col-lg-5"> <input
                                            id="txtContactsAddressLine2PI"
                                            placeholder="Address Line 2" value=""
                                            className="form-control form-control-lg"
                                            type="text"/> </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Town/City<span></span></label>
                                    <div className="col-sm-8 col-lg-5"> <input
                                            id="txtContactsCityPI" placeholder="Town/City"
                                            value="Birmingham"
                                            className="form-control form-control-lg"
                                            type="text"/> </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">County<span></span></label>
                                    <div className="col-sm-8 col-lg-5"> <input
                                            id="txtContactsCountyPI" placeholder="County"
                                            value=" West Midlands"
                                            className="form-control form-control-lg"
                                            type="text"/> </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/> <a id="btnUpdatePersonalInfo"
                                    data-action="Personal-info"
                                    className="btn btn-primary btn-lg btn-update-terms"
                                    data-hide=".disply_rowsummery"
                                    data-show=".disply_none_rowsummery"><b>Update</b></a>
                                <button className="btn btn-outline-danger btn-lg clickmode"
                                    data-hide=".disply_rowpersonal"
                                    data-show=".disply_none_rowpersonal"><b>
                                        Cancel</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            
            <div className="item">
                <div className="item-header" id="headingOne">
                    <h2 className="mb-0"> <button className="btn btn-link collapsed" type="button"
                            data-toggle="collapse" data-target="#collapseOne"
                            aria-expanded="false" aria-controls="collapseOne"> Contact
                            Information <i className="zmdi zmdi-chevron-down"></i> </button>
                    </h2>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                    data-parent="#accordionExample">
                    <div className="t-p">
                        <div className="row disply_none_rowmed">
                            <div className="col-md-12 col-sm-12"> <a
                                    className="btn btn-sm btn-primary hover edt"><i
                                        className="zmdi zmdi-edit"></i> Edit</a>
                                <div className="p-3">
                                    <p className="mb-3"> <span className="wd-180px"> Account Email
                                        </span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1 cls_account_email">
                                            <span id="">Cruce@thestaffport.com<small
                                                    className="col-red  ml-3"><i
                                                        className="zmdi zmdi-alert-triangle">
                                                    </i> Unverified</small></span> </span>
                                    </p>
                                    <p className="mb-3"> <span className="wd-180px"> Personal
                                            Email</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1 cls_personal_email">
                                        </span> </p>
                                    <p className="mb-3"> <span className="wd-180px"> Home
                                            phone</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1 cls_home_phone">
                                        </span> </p>
                                    <p className="mb-3"> <span className="wd-180px"> Mobile
                                            phone</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1 cls_mobile_phone">
                                            <span id="">1236547957<small
                                                    className="col-red  ml-3"><i
                                                        className="zmdi zmdi-alert-triangle">
                                                    </i> Unverified</small></span> </span>
                                    </p>
                                    <p className="mb-3"> <span className="wd-180px"> Work
                                            phone</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1 cls_work_phone">
                                        </span> </p>
                                    <p className="mb-3"> <span className="wd-180px">Work
                                            extension</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1 cls_work_extension">
                                        </span> </p>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/> <button value="Submit"
                                    className="btn btn-primary btn-lg clickmode"
                                    data-show=".disply_rowmed"
                                    data-hide=".disply_none_rowmed"><b>Edit</b></button>
                            </div>
                        </div>
                        <div className="row disply_rowmed pt-3 pb-3" style={{display:"none"}}>
                            <button className="cross update"><i className="zmdi zmdi-close"
                                    aria-hidden="true"></i></button>
                            <div className="col-md-12">
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Account
                                        Email</label>
                                    <div className="col-sm-8 col-lg-5"> <input
                                            id="txt_account_email" type="email"
                                            className="form-control form-control-lg"
                                            placeholder="Enter account email"
                                            value="Cruce@thestaffport.com"/> </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Personal
                                        Email</label>
                                    <div className="col-sm-8 col-lg-5"> <input
                                            id="txt_personal_email" type="email"
                                            className="form-control form-control-lg" value=""
                                            placeholder="Enter persanal email"/> </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Home
                                        phone</label>
                                    <div className="col-sm-8 col-lg-5"> <input
                                            id="txt_home_phone" type="text" maxlength="11"
                                            className="form-control form-control-lg number"
                                            value="" placeholder="Enter home phone"/> </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Mobile
                                        phone</label>
                                    <div className="col-sm-8 col-lg-5"> <input
                                            id="txt_mobile_phone" type="text" maxlength="11"
                                            className="form-control form-control-lg number"
                                            placeholder="Enter mobile phone"
                                            value="1236547957"/> </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Work
                                        phone</label>
                                    <div className="col-sm-8 col-lg-5"> <input
                                            id="txt_work_phone" type="text" maxlength="11"
                                            className="form-control form-control-lg number"
                                            value="" placeholder="Enter work phone"/> </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Work
                                        extension</label>
                                    <div className="col-sm-8 col-lg-5"> <input
                                            id="txt_work_extension" type="text"
                                            className="form-control form-control-lg number"
                                            value="" placeholder="Enter work extension"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/> <a id="btnUpdateContactInfo"
                                    data-action="Contact-info"
                                    className="btn btn-primary btn-lg btn-update-terms"
                                    data-hide=".disply_row"
                                    data-show=".disply_none_row"><b>Update</b></a> <button
                                    className="btn btn-outline-danger btn-lg  clickmode"
                                    data-hide=".disply_rowmed"
                                    data-show=".disply_none_rowmed"><b> Cancel</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="item">
                <div className="item-header" id="headingBank">
                    <h2 className="mb-0"> <button className="btn btn-link collapsed" type="button"
                            data-toggle="collapse" data-target="#collapseBank"
                            aria-expanded="false" aria-controls="collapseBank"> Bank Account
                            <i className="zmdi zmdi-chevron-down"></i> </button> </h2>
                </div>
                <div id="collapseBank" className="collapse" aria-labelledby="headingBank"
                    data-parent="#accordionExample">
                    <div className="t-p">
                        <div className="row disply_none_rowBank">
                            <div className="col-md-12 col-sm-12"> <a
                                    className="btn btn-sm btn-primary hover clickmode"
                                    data-show=".disply_rowBank"
                                    data-hide=".disply_none_rowBank"> <i
                                        className="zmdi zmdi-edit"></i> Edit </a>
                                <div className="p-3">
                                    <p className="mb-3"> <span className="wd-180px"> Bank Account
                                            Type</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1">
                                            Personal </span> </p>
                                    <p className="mb-3"> <span className="wd-180px"> Account holder
                                            Name</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> Claire
                                            Cruce </span> </p>
                                    <p className="mb-3"> <span className="wd-180px">Bank Account
                                            Number</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1">
                                            123456789123456 </span> </p>
                                    <p className="mb-3"> <span className="wd-180px"> Sort
                                            code</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1"> 123456
                                        </span> </p>
                                    <div style={{display:"none"}}>
                                        <p className="mb-3"> <span className="wd-180px"> Company
                                                Name</span> <span>:</span> <span
                                                className="col-black font-16 font-bold ml-1">
                                            </span> </p>
                                        <p className="mb-3"> <span className="wd-180px">Company
                                                Registration No</span> <span>:</span> <span
                                                className="col-black font-16 font-bold ml-1">
                                            </span> </p>
                                        <p className="mb-3"> <span
                                                className="wd-180px">Certificate</span>
                                            <span>:</span> <span
                                                className="col-black font-16 font-bold ml-1"> <a
                                                    id="spnRegUrl-2"
                                                    className="clsViewcompanyCertification bdshow-2"
                                                    data-file-name=""><i
                                                        className="zmdi zmdi-file-text">&nbsp;</i></a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/> <button value="Submit"
                                    className="btn btn-primary btn-lg clickmode"
                                    data-show=".disply_rowBank"
                                    data-hide=".disply_none_rowBank"><b>Edit</b></button>
                            </div>
                        </div>
                        <div className="row disply_rowBank pt-3 pb-3" style={{display:"none"}}>
                            <button className="cross clickmode" data-hide=".disply_rowBank"
                                data-show=".disply_none_rowBank"><i className="zmdi zmdi-close"
                                    aria-hidden="true"></i></button>
                            <div className="col-md-12">
                                <div className="form-group row"> <label for=""
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Bank
                                        Account Type?</label>
                                    <div className="col-sm-8 col-lg-5"> <select
                                            id="ddl_BankAccountType"
                                            className="form-control form-control-lg">
                                            <option value="">Select account type...</option>
                                            <option selected="" value="p">Personal</option>
                                            <option value="b">Business</option>
                                        </select> </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Account
                                        name<span>*</span></label>
                                    <div className="col-sm-8 col-lg-5"> <input
                                            id="txtAccountHolder"
                                            className="form-control form-control-lg"
                                            placeholder="Enter name" value="Claire Cruce"/>
                                    </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Account
                                        number<span>*</span></label>
                                    <div className="col-sm-8 col-lg-5"> <input
                                            id="txtAccountNumber"
                                            className="form-control form-control-lg"
                                            maxlength="15"
                                            placeholder="Enter account Number"
                                            value="123456789123456"/> </div>
                                </div>
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Sort
                                        code<span>*</span></label>
                                    <div className="col-sm-8 col-lg-5"> <input id="txtSortCode"
                                            className="form-control form-control-lg"
                                            maxlength="6" placeholder="Enter sort code"
                                            value="123456"/> </div>
                                </div>
                                <div id="divBusinessAccountDetails" style={{display:"none"}}>
                                    <div className="form-group row"> <label
                                            className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Company
                                            name</label>
                                        <div className="col-sm-8 col-lg-5"> <input
                                                id="txtCompanyName"
                                                className="form-control form-control-lg"
                                                placeholder="Enter company name" value=""/>
                                        </div>
                                    </div>
                                    <div className="form-group row"> <label
                                            className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Company
                                            Reg. No.</label>
                                        <div className="col-sm-8 col-lg-5"> <input
                                                id="txtCompanyRegNo"
                                                className="form-control form-control-lg"
                                                placeholder="Enter company reg.no" value=""/>
                                        </div>
                                    </div>
                                    <div className="form-group row"> <label
                                            className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">File</label>
                                        <div className="col-sm-8 col-lg-5"> <input
                                                id="RegCertificate" type="file"
                                                className="form-control form-control-lg"/> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/>
/                                <a id="btnUpdateBankInfo"
                                    className="btn btn-primary btn-lg btn-update-terms"
                                    data-action="Bank-info" data-req="UPDATE" data-id="2"
                                    data-hide=".disply_rowsummery"
                                    data-show=".disply_none_rowsummery"><b>Update</b></a> <a
                                    className="btn btn-outline-danger btn-lg clickmode"
                                    data-hide=".disply_rowBank"
                                    data-show=".disply_none_rowBank"><b> Cancel</b></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="item">
                <div className="item-header" id="headingPension">
                    <h2 className="mb-0"> <button className="btn btn-link collapsed" type="button"
                            data-toggle="collapse" data-target="#collapsePension"
                            aria-expanded="false" aria-controls="collapsePension"> Pension
                            Details <i className="zmdi zmdi-chevron-down"></i> </button> </h2>
                </div>
                <div id="collapsePension" className="collapse" aria-labelledby="headingPension"
                    data-parent="#accordionExample">
                    <div className="t-p">
                        <div className="row disply_none_rowPension">
                            <div className="col-md-12 col-sm-12">
                                <div className="p-3">
                                    <div className="table-responsive clearfix">
                                        <table style={{width:"100%"}} className="">
                                            <tbody id="Pension_Placeholder">
                                                <tr>
                                                    <td> <span className="col-grey">NHS Pension
                                                            Scheme</span> </td>
                                                    <td> <span className="text-blue"><b
                                                                id="spnpensionscheme">Pension
                                                                Scheme1</b></span> </td>
                                                    <td> <span className="col-grey">Pension
                                                            Tiered Rate %</span> </td>
                                                    <td> <span className="text-blue"><b
                                                                id="spntiredrate">10</b></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td> <span className="col-grey">National
                                                            Insurance Number</span> </td>
                                                    <td> <span className="text-blue"><b
                                                                id="spninsurancenum">123456789123</b></span>
                                                    </td>
                                                    <td> <span className="col-grey">Pension
                                                            Added Years %</span> </td>
                                                    <td> <span className="text-blue"><b
                                                                id="spnpensionaddedyear">60</b></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td> <span className="col-grey">Date of
                                                            birth</span> </td>
                                                    <td> <span className="text-blue"><b
                                                                id="spndob">10/06/1991</b></span>
                                                    </td>
                                                    <td> <span className="col-grey">Extra MPAVCs
                                                            Type</span> </td>
                                                    <td> <span className="text-blue"><b
                                                                id="spnextrampavcstype">Type1</b></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td> <span className="col-grey">Host
                                                            NHSCB/LHB</span> </td>
                                                    <td> <span className="text-blue"><b
                                                                id="spnhostnhscb_lhb">NHSCB</b></span>
                                                    </td>
                                                    <td> <span className="col-grey">Extra MPAVCs
                                                            %</span> </td>
                                                    <td> <span className="text-blue"><b
                                                                id="spnextrampavcs">10</b></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td> <span className="col-grey">Host LHB Ref
                                                            no.</span> </td>
                                                    <td> <span className="text-blue"><b
                                                                id="spnhostlhbrefno">123456789123</b></span>
                                                    </td>
                                                    <td> <span className="col-grey">NHSPS Ref.
                                                            Number</span> </td>
                                                    <td> <span className="text-blue"><b
                                                                id="spnnhspsrefnumber">123456456</b></span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/> <button value="Submit"
                                    className="btn btn-primary btn-lg clickmode"
                                    data-show=".disply_rowPension"
                                    data-hide=".disply_none_rowPension"><b>Edit</b></button>
                            </div>
                        </div>
                        <div className="row disply_rowPension pt-3 pb-3" style={{display:"none"}}>
                            <button className="cross clickmode" data-hide=".disply_rowPension"
                                data-show=".disply_none_rowPension"><i
                                    className="zmdi zmdi-close" aria-hidden="true"></i></button>
                            <div className="col-md-12">
                                <div className="table-responsive clearfix">
                                    <table style={{width:"100%"}} className="">
                                        <tbody id="EditPension_Placeholder">
                                            <tr>
                                                <td><span className="col-grey">NHS Pension
                                                        Scheme</span></td>
                                                <td> <input id="txtNhsPensionScheme"
                                                        className="form-control text-blue"
                                                        placeholder="Enter NHS Pension Scheme"
                                                        value="Pension Scheme1"/> </td>
                                                <td><span className="col-grey">Pension Tiered
                                                        Rate %</span></td>
                                                <td> <input id="txtPensionTiredRate"
                                                        className="form-control text-blue decimal"
                                                        placeholder="0" maxlength="6"
                                                        value="10"/> </td>
                                            </tr>
                                            <tr>
                                                <td><span className="col-grey">National
                                                        Insurance Number</span></td>
                                                <td> <input id="txtNationalInsuranceNum"
                                                        className="form-control text-blue"
                                                        placeholder="Enter National Insurance Number"
                                                        value="123456789123"/> </td>
                                                <td><span className="col-grey">Pension Added
                                                        Years</span></td>
                                                <td> <input id="txtPensionAddedYears"
                                                        className="form-control text-blue number"
                                                        placeholder="yyyy" maxlength="4"
                                                        value="60"/> </td>
                                            </tr>
                                            <tr>
                                                <td><span className="col-grey">Date of
                                                        birth</span></td>
                                                <td className="ClsDatepair"> <input id="txtdob"
                                                        className="form-control text-blue date start"
                                                        placeholder="dd/mm/yyyy"
                                                        value="10/06/1991"/> </td>
                                                <td><span className="col-grey">Extra MPAVCs
                                                        Type</span></td>
                                                <td> <input id="txtExtrampavsType"
                                                        className="form-control text-blue"
                                                        placeholder="Enter Extra MPAVCs Type"
                                                        value="Type1"/> </td>
                                            </tr>
                                            <tr>
                                                <td><span className="col-grey">Host
                                                        NHSCB/LHB</span></td>
                                                <td> <input id="txtHostnhscbLhb"
                                                        className="form-control text-blue"
                                                        placeholder="Enter Host NHSCB/LHB"
                                                        value="NHSCB"/> </td>
                                                <td><span className="col-grey">Extra MPAVCs
                                                        %</span></td>
                                                <td> <input id="txtExtrampavs"
                                                        className="form-control text-blue decimal"
                                                        maxlength="6"
                                                        placeholder="Enter Extra MPAVCs"
                                                        value="10"/> </td>
                                            </tr>
                                            <tr>
                                                <td><span className="col-grey">Host LHB Ref
                                                        no.</span></td>
                                                <td> <input id="txtHostlhbRefNo"
                                                        className="form-control text-blue"
                                                        placeholder="Enter Host LHB Ref no."
                                                        value="123456789123"/> </td>
                                                <td><span className="col-grey">NHSPS Ref.
                                                        Number</span></td>
                                                <td> <input id="txtNhspsRefNumber"
                                                        className="form-control text-blue"
                                                        placeholder="Enter NHSPS Ref. Number"
                                                        value="123456456"/> </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/>
                                <a id="btnUpdateBankInfo"
                                    className="btn btn-primary btn-lg btn-update-terms"
                                    data-action="Pension-info" data-req="UPDATE" data-id="1"
                                    data-hide=".disply_rowsummery"
                                    data-show=".disply_none_rowsummery"><b>Update</b></a> <a
                                    className="btn btn-outline-danger btn-lg clickmode"
                                    data-hide=".disply_rowPension"
                                    data-show=".disply_none_rowPension"><b> Cancel</b></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="item">
                <div className="item-header" id="headingThree">
                    <h2 className="mb-0"> <button className="btn btn-link collapsed" type="button"
                            data-toggle="collapse" data-target="#collapseThree"
                            aria-expanded="false" aria-controls="collapseThree"> Medical
                            Information <i className="zmdi zmdi-chevron-down"></i> </button>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                    data-parent="#accordionExample">
                    <div className="t-p">
                        <div className="row disply_none_rowmed">
                            <div className="col-md-12 col-sm-12"> <a
                                    className="btn btn-sm btn-primary hover clickmode"
                                    data-show=".disply_rowmed"
                                    data-hide=".disply_none_rowmed"> <i
                                        className="zmdi zmdi-edit"></i> Edit </a>
                                <div className="p-3">
                                    <p className="mb-3"> <span className="wd-180px"> Covid-19
                                            vaccinated<i
                                                className="zmdi zmdi-info col-blue ml-1"></i>
                                        </span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1 covid_vaccinated">
                                            Yes </span> </p>
                                    <p className="mb-3"> <span className="wd-180px"> Add
                                            notes</span> <span>:</span> <span
                                            className="col-black font-16 font-bold ml-1 covid_vaccinated_comments">
                                            aa </span> </p>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/> <button value="Submit"
                                    className="btn btn-primary btn-lg clickmode"
                                    data-show=".disply_rowmed"
                                    data-hide=".disply_none_rowmed"><b>Edit</b></button>
                            </div>
                        </div>
                        <div className="row disply_rowmed pt-3 pb-3" style={{display:"none"}}>
                            <button className="cross clickmode" data-hide=".disply_rowmed"
                                data-show=".disply_none_rowmed"><i className="zmdi zmdi-close"
                                    aria-hidden="true"></i></button>
                            <div className="col-md-12">
                                <div className="form-group row"> <label
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Covid-19
                                        vaccinated<i
                                            className="zmdi zmdi-info col-blue ml-1"></i></label>
                                    <div className="col-sm-5 col-lg-3"> <select
                                            id="ddl_covid_vaccinated"
                                            className="form-control form-control-lg">
                                            <option value="">Please Select</option>
                                            <option selected="" value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Not Specified">Not Specified
                                            </option>
                                        </select> </div>
                                </div>
                                <div className="form-group row"> <label for=""
                                        className="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Add
                                        note</label>
                                    <div className="col-sm-8 col-lg-5"> <textarea
                                            id="txt_covid_vaccinated_comments"
                                            className="form-control form-control-lg">aa</textarea>
                                    </div>
                                    <div className="col-12">
                                        <p><small>Notes are visible to employee</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/> <a id="btnUpdateMedicalInfo"
                                    data-action="Medical-info"
                                    className="btn btn-primary btn-lg btn-update-terms"
                                    data-hide=".disply_rowmed"
                                    data-show=".disply_none_rowmed"><b>Update</b></a> <a
                                    className="btn btn-outline-danger btn-lg  clickmode"
                                    data-hide=".disply_rowmed"
                                    data-show=".disply_none_rowmed"><b> Cancel</b></a>
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

export default Account
