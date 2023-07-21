import React from 'react'

function Contacts() {
  return (
    <>
       <div class="row mt-4 mb-1">
                                <div id="divcontactBlock" class="col-md-8 offset-md-2 pro">
                                    
                                    <div class="text-center cnt_new contact-new">
                                        <br/>
                                        <br/>
                                        <h2>
                                            <b> Create and manage your contacts, all in one place. </b>
                                        </h2>
                                        <p class="col-grey">
                                            Contact Address, Name &amp; phone Information etc.
                                        </p>
                                        <button class="btn btn-primary btn-lg addcontact mt-3 mb-3 font-16  clickmode"
                                            data-hide=".cnt_new" data-show=".disply_contact">
                                            <b> Create New Contact</b>
                                        </button><br/>
                                        <small class="dd_none"><a href="#">Click here </a>to import Contact from
                                            file</small>
                                    </div>
                                    <div class="disply_contact mt-3 addContactForm dd_none">
                                        <div class="col-sm-12 text-center mt-4 mb-2">
                                            <h2> <span class="col-blue font-32">- <b>Create New Contact </b> -</span>
                                            </h2>
                                        </div>
                                        <div class="panel-group mt-3 ">
                                            <div class="panel panel-primary bdr">
                                                <div class="panel-body pt-0">
                                                    <div class="row">
                                                        <div class="col-sm-12 formbg h-100prnt auto p-0">
                                                            <div class="avt_bg">
                                                                <h3 class="mb-0"><b>Contact information </b></h3>
                                                                <p class="mb-0"> Contact Address, Name phone Information
                                                                    etc.</p>
                                                                <button class="cross add-contact-cross"><i
                                                                        class="zmdi zmdi-close"
                                                                        aria-hidden="true"></i></button>
                                                            </div>
                                                            <div class="p-4 bdr_b1">
                                                                <div class="form-group row">
                                                                    <label for=""
                                                                        class="col-sm-4 col-lg-3   col-form-label col-form-label-lg">First
                                                                        name<span>*</span></label>
                                                                    <div class="col-sm-8 col-lg-5">
                                                                        <input id="txtContactsFirstName" type="text"
                                                                            class="form-control form-control-lg"
                                                                            placeholder="First name"/>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <label for=""
                                                                        class="col-sm-4 col-lg-3   col-form-label col-form-label-lg">Last
                                                                        name<span></span></label>
                                                                    <div class="col-sm-8 col-lg-5">
                                                                        <input id="txtContactsLastName" type="text"
                                                                            class="form-control form-control-lg"
                                                                            placeholder="Last name"/>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <label for=""
                                                                        class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Mobile
                                                                        number<span>*</span></label>
                                                                    <div class="col-sm-8 col-lg-5">
                                                                        <input id="txtContactsMobileNumber" type="text"
                                                                            class="form-control form-control-lg numeric clearText"
                                                                            placeholder="Mobile number" maxlength="11"/>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <label for=""
                                                                        class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Home
                                                                        number<span></span></label>
                                                                    <div class="col-sm-8 col-lg-5">
                                                                        <input id="txtContactsHomeNumber" type="text"
                                                                            class="form-control form-control-lg numeric clearText"
                                                                            placeholder="Home number" maxlength="11"/>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <label for=""
                                                                        class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Work
                                                                        number<span></span></label>
                                                                    <div class="col-sm-8 col-lg-5">
                                                                        <input id="txtContactsWorkNumber" type="text"
                                                                            class="form-control form-control-lg numeric clearText"
                                                                            placeholder="Work number" maxlength="11"/>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <label for=""
                                                                        class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Relationship<span></span></label>
                                                                    <div class="col-sm-8 col-lg-5">
                                                                        <select id="ddlContactsRelationship"
                                                                            class="form-control form-control-lg clearText">
                                                                            <option value="">Choose Relationship:
                                                                            </option>
                                                                            <option value="Mother">Mother</option>
                                                                            <option value="Father">Father</option>
                                                                            <option value="Daughter">Daughter</option>
                                                                            <option value="Son">Son</option>
                                                                            <option value="Sister">Sister</option>
                                                                            <option value="Brother">Brother</option>
                                                                            <option value="Aunt">Aunt</option>
                                                                            <option value="Uncle">Uncle</option>
                                                                            <option value="Niece">Niece</option>
                                                                            <option value="Nephew">Nephew</option>
                                                                            <option value="Cousin">Cousin</option>
                                                                            <option value="Grandmother">Grandmother
                                                                            </option>
                                                                            <option value="Grandfather">Grandfather
                                                                            </option>
                                                                            <option value="Granddaughter">Granddaughter
                                                                            </option>
                                                                            <option value="Grandson">Grandson</option>
                                                                            <option value="Stepsister">Stepsister
                                                                            </option>
                                                                            <option value="Stepbrother">Stepbrother
                                                                            </option>
                                                                            <option value="Stepmother">Stepmother
                                                                            </option>
                                                                            <option value="Stepfather">Stepfather
                                                                            </option>
                                                                            <option value="Stepdaughter">Stepdaughter
                                                                            </option>
                                                                            <option value="Stepson">Stepson</option>
                                                                            <option value="Sister-in-law">Sister-in-law
                                                                            </option>
                                                                            <option value="Brother-in-law">
                                                                                Brother-in-law</option>
                                                                            <option value="Mother-in-law">Mother-in-law
                                                                            </option>
                                                                            <option value="Father-in-law">Father-in-law
                                                                            </option>
                                                                            <option value="Daughter-in-law">
                                                                                Daughter-in-law</option>
                                                                            <option value="Son-in-law">Son-in-law
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <label for=""
                                                                        class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Is
                                                                        Primary Contact?<span></span></label>
                                                                    <div class="col-sm-8 col-lg-5">
                                                                        <div class="checkbox">
                                                                            <input id="chkContactsIsPrimary"
                                                                                name="chkContactsIsPrimary"
                                                                                type="checkbox"/>
                                                                            <label for="chkContactsIsPrimary" class="">
                                                                                <b>Yes</b>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12 col-sm-12 p-4 pt-2">
                                                            <h3 class="mb-3"><b>Address Information Summary</b></h3>
                                                            <div class="form-group row mt-3">
                                                                <label for=""
                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Postcode<span></span></label>
                                                                <div class="col-sm-8 col-lg-5">
                                                                    <div class="input-group">
                                                                        <input id="txtContactsPostCode" name=""
                                                                            placeholder="Postcode"
                                                                            class="form-control form-control-lg clearText"
                                                                            type="text"/>
                                                                        <a id="btnFindContactsAddress"
                                                                            class="btn btn-outline-primary btn-lg ml-1"><i
                                                                                class="zmdi zmdi-pin"></i> Find
                                                                            Address</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row cnd-addnew-contact-ddl-addresslist dd_none">
                                                                <label for=""
                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Address
                                                                    List<span></span></label>
                                                                <div class="col-sm-8 col-lg-5">
                                                                    <select id="ddlContactsAddressList"
                                                                        class="form-control form-control-lg  clearText"></select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label for=""
                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Address
                                                                    line 1<span></span></label>
                                                                <div class="col-sm-8 col-lg-5">
                                                                    <input id="txtContactsAddressLine1" type="text"
                                                                        class="form-control form-control-lg clearText"
                                                                        placeholder="Address line 1"/>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label for=""
                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Address
                                                                    line 2<span></span></label>
                                                                <div class="col-sm-8 col-lg-5">
                                                                    <input id="txtContactsAddressLine2" type="text"
                                                                        class="form-control form-control-lg clearText"
                                                                        placeholder="Address line 2"/>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label for=""
                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Town/City<span></span></label>
                                                                <div class="col-sm-8 col-lg-5">
                                                                    <input id="txtContactsCity" type="text"
                                                                        class="form-control form-control-lg clearText"
                                                                        placeholder="Town or City"/>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label for=""
                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">County<span></span></label>
                                                                <div class="col-sm-8 col-lg-5">
                                                                    <input id="txtContactsCounty" type="text"
                                                                        class="form-control form-control-lg clearText"
                                                                        placeholder="County"/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12">
                                                            <div class="form-group row">
                                                                <hr class="m-0 mb-4"/>
                                                                <label
                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">&nbsp;<span></span></label>
                                                                <div class="col-sm-8 col-lg-5">
                                                                    <button id="btnAddContacts" value="Submit"
                                                                        class="btn btn-primary btn-lg"><b>Add
                                                                            -&gt;</b></button>
                                                                    <button
                                                                        class="btn btn-outline-danger btn-lg add-contact-cross"><b>
                                                                            Cancel</b></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--Contacts Tab Placeholder --> */}
                                    <div class="disply_none_newcontact mt-4" id="TabContactsPlaceholder">
                                        <div class="panel-group accordion mb-4" id="accordion1" role="tablist"
                                            aria-multiselectable="true">
                                            <div class="panel panel-primary bdr">
                                                <div class="panel-heading collapsed contacts-list-header" data-id="1"
                                                    data-toggle="collapse" href="#collapseOne1">
                                                    <h4 class="panel-title"> <a role="button"> <span
                                                                class="col-blue font-18"><b> 1. Tom Cruce</b> </span>
                                                        </a> </h4>
                                                </div>
                                                <div id="collapseOne1" class="panel-collapse collapse"
                                                    data-parent="#accordion1">
                                                    <div class="panel-body pt-0">
                                                        <div class="row disply__viewcontact1">
                                                            <div class="col-sm-12 formbg h-100prnt auto p-0">
                                                                <div class="avt_bg"> <a
                                                                        class="btn btn-sm btn-primary hover clickmode"
                                                                        data-hide=".disply__viewcontact1"
                                                                        data-show=".disply__editcontact1"><i
                                                                            class="zmdi zmdi-edit"></i> Edit </a>
                                                                    <h3 class="mb-0"><b>Contact information </b></h3>
                                                                    <p class="mb-3"> Contact Address, Name phone
                                                                        Information etc.</p>
                                                                </div>
                                                                <div class="p-4 bdr_b1">
                                                                    <p class="mb-3"> <span class="wd-180px">First Name
                                                                        </span> <span>:</span> <span
                                                                            id="contact-firstname1"
                                                                            class="col-black font-16 font-bold ml-1">
                                                                            Tom </span> </p>
                                                                    <p class="mb-3"> <span class="wd-180px">Last Name
                                                                        </span> <span>:</span> <span
                                                                            id="contact-lastname1"
                                                                            class="col-black font-16 font-bold ml-1">Cruce</span>
                                                                    </p>
                                                                    <p class="mb-3"> <span
                                                                            class="wd-180px">Mobile</span>
                                                                        <span>:</span> <span id="contact-mobile1"
                                                                            class="col-black font-16 font-bold ml-1">1234567891</span>
                                                                    </p>
                                                                    <p class="mb-3"> <span class="wd-180px">Home
                                                                            Phone</span> <span>:</span> <span
                                                                            id="contact-homephone1"
                                                                            class="col-grey font-16 ml-1"></span> </p>
                                                                    <p class="mb-3"> <span class="wd-180px">Work
                                                                            Phone</span> <span>:</span> <span
                                                                            id="contact-workphone1"
                                                                            class="col-grey font-16 ml-1"></span> </p>
                                                                    <p class="mb-3"> <span
                                                                            class="wd-180px">Relationship</span>
                                                                        <span>:</span> <span id="contact-relationship1"
                                                                            class="col-grey font-16 ml-1">Father</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-12 pt-2">
                                                                <div class="p-2">
                                                                    <h3 class="mb-3"><b>Contact Address </b></h3>
                                                                    <p class="mb-3"> <span class="wd-180px">Address
                                                                            Line1</span> <span>:</span> <span
                                                                            id="contact-addressline11"
                                                                            class="col-black font-16 font-bold ml-1">Craven
                                                                            Arms 1 Upper Gough Street</span> </p>
                                                                    <p class="mb-3"> <span class="wd-180px">Address Line
                                                                            2</span> <span>:</span> <span
                                                                            id="contact-addressline21"
                                                                            class="col-black font-16 font-bold ml-1"></span>
                                                                    </p>
                                                                    <p class="mb-3"> <span class="wd-180px">
                                                                            Postcode</span> <span>:</span> <span
                                                                            id="contact-postcode1"
                                                                            class="col-black font-16 font-bold ml-1">B1
                                                                            1JG</span> </p>
                                                                    <p class="mb-3"> <span class="wd-180px">City</span>
                                                                        <span>:</span> <span id="contact-city1"
                                                                            class="col-grey font-16 ml-1">
                                                                            Birmingham</span>
                                                                    </p>
                                                                    <p class="mb-3"> <span
                                                                            class="wd-180px">County</span>
                                                                        <span>:</span> <span id="contact-county1"
                                                                            class="col-grey font-16 ml-1"> West
                                                                            Midlands</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12">
                                                                <hr class="m-0 mb-4"/> <a
                                                                    class="btn btn-primary btn-lg  clickmode"
                                                                    data-val="1" data-hide=".disply__viewcontact1"
                                                                    data-show=".disply__editcontact1"> <i
                                                                        class="zmdi zmdi-edit"></i> <b>Edit</b> </a>
                                                            </div>
                                                        </div>
                                                        <div class="disply__editcontact1 dd_none">
                                                            <div class="row">
                                                                <div class="col-sm-12 formbg h-100prnt auto p-0">
                                                                    <div class="avt_bg">
                                                                        <h3 class="mb-0"><b>Contact information </b>
                                                                        </h3>
                                                                        <p class="mb-0"> Contact Address, Name phone
                                                                            Information etc.</p> <button
                                                                            class="cross clickmode"
                                                                            data-hide=".disply__editcontact1"
                                                                            data-show=".disply__viewcontact1"><i
                                                                                class="zmdi zmdi-close"
                                                                                aria-hidden="true"></i></button>
                                                                    </div>
                                                                    <div class="p-4 bdr_b1">
                                                                        <div>
                                                                            <div class="form-group row"> <label for=""
                                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">First
                                                                                    name<span>*</span></label>
                                                                                <div class="col-sm-8 col-lg-5"> <input
                                                                                        id="txtContactsFirstName1"
                                                                                        type="text"
                                                                                        class="form-control form-control-lg"
                                                                                        value="Tom "
                                                                                        placeholder="First Name"/> </div>
                                                                            </div>
                                                                            <div class="form-group row"> <label for=""
                                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Last
                                                                                    name<span></span></label>
                                                                                <div class="col-sm-8 col-lg-5"> <input
                                                                                        id="txtContactsLastName1"
                                                                                        type="text"
                                                                                        class="form-control form-control-lg"
                                                                                        value="Cruce"
                                                                                        placeholder="Last Name"/> </div>
                                                                            </div>
                                                                            <div class="form-group row"> <label for=""
                                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Mobile
                                                                                    number<span>*</span></label>
                                                                                <div class="col-sm-8 col-lg-5"> <input
                                                                                        id="txtContactsMobileNumber1"
                                                                                        maxlength="11" type="text"
                                                                                        class="form-control form-control-lg number"
                                                                                        value="1234567891"
                                                                                        placeholder="Mobile Number"/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-group row"> <label for=""
                                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Home
                                                                                    number<span></span></label>
                                                                                <div class="col-sm-8 col-lg-5"> <input
                                                                                        id="txtContactsHomeNumber1"
                                                                                        maxlength="11" type="text"
                                                                                        class="form-control form-control-lg number"
                                                                                        value=""
                                                                                        placeholder="Home Phone"/> </div>
                                                                            </div>
                                                                            <div class="form-group row"> <label for=""
                                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Work
                                                                                    number<span></span></label>
                                                                                <div class="col-sm-8 col-lg-5"> <input
                                                                                        id="txtContactsWorkNumber1"
                                                                                        maxlength="11" type="text"
                                                                                        class="form-control form-control-lg number"
                                                                                        value=""
                                                                                        placeholder="Work Phone"/> </div>
                                                                            </div>
                                                                            <div class="form-group row"> <label for=""
                                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Relationship<span>*</span></label>
                                                                                <div class="col-sm-8 col-lg-5"> <select
                                                                                        id="ddlContactsRelationship1"
                                                                                        class="form-control form-control-lg">
                                                                                        <option value="">Choose
                                                                                            Relationship:</option>
                                                                                        <option value="Mother">Mother
                                                                                        </option>
                                                                                        <option selected=""
                                                                                            value="Father">Father
                                                                                        </option>
                                                                                        <option value="Daughter">
                                                                                            Daughter</option>
                                                                                        <option value="Son">Son</option>
                                                                                        <option value="Sister">Sister
                                                                                        </option>
                                                                                        <option value="Brother">Brother
                                                                                        </option>
                                                                                        <option value="Aunt">Aunt
                                                                                        </option>
                                                                                        <option value="Uncle">Uncle
                                                                                        </option>
                                                                                        <option value="Niece">Niece
                                                                                        </option>
                                                                                        <option value="Nephew">Nephew
                                                                                        </option>
                                                                                        <option value="Cousin">Cousin
                                                                                        </option>
                                                                                        <option value="Grandmother">
                                                                                            Grandmother</option>
                                                                                        <option value="Grandfather">
                                                                                            Grandfather</option>
                                                                                        <option value="Granddaughter">
                                                                                            Granddaughter</option>
                                                                                        <option value="Grandson">
                                                                                            Grandson</option>
                                                                                        <option value="Stepsister">
                                                                                            Stepsister</option>
                                                                                        <option value="Stepbrother">
                                                                                            Stepbrother</option>
                                                                                        <option value="Stepmother">
                                                                                            Stepmother</option>
                                                                                        <option value="Stepfather">
                                                                                            Stepfather</option>
                                                                                        <option value="Stepdaughter">
                                                                                            Stepdaughter</option>
                                                                                        <option value="Stepson">Stepson
                                                                                        </option>
                                                                                        <option value="Sister-in-law">
                                                                                            Sister-in-law</option>
                                                                                        <option value="Brother-in-law">
                                                                                            Brother-in-law</option>
                                                                                        <option value="Mother-in-law">
                                                                                            Mother-in-law</option>
                                                                                        <option value="Father-in-law">
                                                                                            Father-in-law</option>
                                                                                        <option value="Daughter-in-law">
                                                                                            Daughter-in-law</option>
                                                                                        <option value="Son-in-law">
                                                                                            Son-in-law</option>
                                                                                    </select> </div>
                                                                            </div>
                                                                            <div class="form-group row"> <label for=""
                                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Is
                                                                                    Primary
                                                                                    Contact?<span></span></label>
                                                                                <div class="col-sm-8 col-lg-5">
                                                                                    <div class="checkbox"> <input
                                                                                            id="chkContactsIsPrimary1"
                                                                                            name="chkContIsPrimary1"
                                                                                            type="checkbox" checked=""
                                                                                            value="1"/> <label
                                                                                            for="chkContactsIsPrimary1">
                                                                                            Yes </label> </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 col-sm-12 p-4 pt-2">
                                                                    <h3 class="mb-3"><b>Contact Address</b></h3>
                                                                    <div>
                                                                        <div class="form-group row mt-3"> <label for=""
                                                                                class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Postcode<span></span></label>
                                                                            <div class="col-sm-8 col-lg-5">
                                                                                <div class="input-group"> <input
                                                                                        id="txtContactsPostCode1"
                                                                                        name="" placeholder="Postcode"
                                                                                        value="B1 1JG"
                                                                                        class="form-control form-control-lg"
                                                                                        type="text"/> <button
                                                                                        data-val="1"
                                                                                        class="btn btn-outline-primary btn-lg ml-1 contacts-find-addresslist"><i
                                                                                            class="zmdi zmdi-pin"></i>
                                                                                        Find Address</button> </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group row form-group cnd-contact-ddl-addresslist dd_none"> <label for=""
                                                                                class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Address
                                                                                List<span></span></label>
                                                                            <div class="col-sm-8 col-lg-5"> <select
                                                                                    id="ddlContactsAddressList1"
                                                                                    data-val="1"
                                                                                    class="form-control form-control-lg ddl-contacts-addresslist"
                                                                                    tabindex="-98"></select> </div>
                                                                        </div>
                                                                        <div class="form-group row"> <label for=""
                                                                                class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Address
                                                                                line 1<span></span></label>
                                                                            <div class="col-sm-8 col-lg-5"> <input
                                                                                    id="txtContactsAddressLine11"
                                                                                    name="" placeholder="Address Line 1"
                                                                                    value="Craven Arms  1 Upper Gough Street"
                                                                                    class="form-control form-control-lg"
                                                                                    type="text"/> </div>
                                                                        </div>
                                                                        <div class="form-group row"> <label for=""
                                                                                class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Address
                                                                                line 2<span></span></label>
                                                                            <div class="col-sm-8 col-lg-5"> <input
                                                                                    id="txtContactsAddressLine21"
                                                                                    name="" placeholder="Address Line 2"
                                                                                    value=""
                                                                                    class="form-control form-control-lg"
                                                                                    type="text"/> </div>
                                                                        </div>
                                                                        <div class="form-group row"> <label for=""
                                                                                class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Town/City<span></span></label>
                                                                            <div class="col-sm-8 col-lg-5"> <input
                                                                                    id="txtContactsCity1" name=""
                                                                                    placeholder="Town/City"
                                                                                    value=" Birmingham"
                                                                                    class="form-control form-control-lg"
                                                                                    type="text"/> </div>
                                                                        </div>
                                                                        <div class="form-group row"> <label for=""
                                                                                class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">County<span></span></label>
                                                                            <div class="col-sm-8 col-lg-5"> <input
                                                                                    id="txtContactsCounty1" name=""
                                                                                    placeholder="County"
                                                                                    value=" West Midlands"
                                                                                    class="form-control form-control-lg"
                                                                                    type="text"/> </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12">
                                                                    <div class="form-group row">
                                                                        <hr class="m-0 mb-4"/> <label
                                                                            class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">&nbsp;<span></span></label>
                                                                        <div class="col-sm-8 col-lg-5"> <button
                                                                                value="Submit"
                                                                                class="btn btn-primary btn-lg  update-contacts-info"
                                                                                data-id="1"
                                                                                data-val="4"><b>Update</b></button>
                                                                            <button
                                                                                class="btn btn-outline-danger btn-lg clickmode"
                                                                                data-hide=".disply__editcontact1"
                                                                                data-show=".disply__viewcontact1"><b>
                                                                                    Cancel</b></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel-group accordion mb-4" id="accordion2" role="tablist"
                                            aria-multiselectable="true">
                                            <div class="panel panel-primary bdr">
                                                <div class="panel-heading collapsed contacts-list-header" data-id="2"
                                                    data-toggle="collapse" href="#collapseOne2">
                                                    <h4 class="panel-title"> <a role="button"> <span
                                                                class="col-blue font-18"><b> 2. Fina Cruce</b> </span>
                                                        </a> </h4>
                                                </div>
                                                <div id="collapseOne2" class="panel-collapse collapse"
                                                    data-parent="#accordion2">
                                                    <div class="panel-body pt-0">
                                                        <div class="row disply__viewcontact2">
                                                            <div class="col-sm-12 formbg h-100prnt auto p-0">
                                                                <div class="avt_bg"> <a
                                                                        class="btn btn-sm btn-primary hover contacts-edit-click2"
                                                                        data-hide=".disply__viewcontact2"
                                                                        data-show=".disply__editcontact2"><i
                                                                            class="zmdi zmdi-edit"></i> Edit </a>
                                                                    <h3 class="mb-0"><b>Contact information </b></h3>
                                                                    <p class="mb-3"> Contact Address, Name phone
                                                                        Information etc.</p>
                                                                </div>
                                                                <div class="p-4 bdr_b1">
                                                                    <p class="mb-3"> <span class="wd-180px">First Name
                                                                        </span> <span>:</span> <span
                                                                            id="contact-firstname2"
                                                                            class="col-black font-16 font-bold ml-1">
                                                                            Fina</span> </p>
                                                                    <p class="mb-3"> <span class="wd-180px">Last Name
                                                                        </span> <span>:</span> <span
                                                                            id="contact-lastname2"
                                                                            class="col-black font-16 font-bold ml-1">Cruce</span>
                                                                    </p>
                                                                    <p class="mb-3"> <span
                                                                            class="wd-180px">Mobile</span>
                                                                        <span>:</span> <span id="contact-mobile2"
                                                                            class="col-black font-16 font-bold ml-1">1234567890</span>
                                                                    </p>
                                                                    <p class="mb-3"> <span class="wd-180px">Home
                                                                            Phone</span> <span>:</span> <span
                                                                            id="contact-homephone2"
                                                                            class="col-grey font-16 ml-1"></span> </p>
                                                                    <p class="mb-3"> <span class="wd-180px">Work
                                                                            Phone</span> <span>:</span> <span
                                                                            id="contact-workphone2"
                                                                            class="col-grey font-16 ml-1"></span> </p>
                                                                    <p class="mb-3"> <span
                                                                            class="wd-180px">Relationship</span>
                                                                        <span>:</span> <span id="contact-relationship2"
                                                                            class="col-grey font-16 ml-1">Mother</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-12 pt-2">
                                                                <div class="p-2">
                                                                    <h3 class="mb-3"><b>Contact Address </b></h3>
                                                                    <p class="mb-3"> <span class="wd-180px">Address
                                                                            Line1</span> <span>:</span> <span
                                                                            id="contact-addressline12"
                                                                            class="col-black font-16 font-bold ml-1">Craven
                                                                            Arms Upper Gough Street</span> </p>
                                                                    <p class="mb-3"> <span class="wd-180px">Address Line
                                                                            2</span> <span>:</span> <span
                                                                            id="contact-addressline22"
                                                                            class="col-black font-16 font-bold ml-1"></span>
                                                                    </p>
                                                                    <p class="mb-3"> <span class="wd-180px">
                                                                            Postcode</span> <span>:</span> <span
                                                                            id="contact-postcode2"
                                                                            class="col-black font-16 font-bold ml-1">B1
                                                                            1JG</span> </p>
                                                                    <p class="mb-3"> <span class="wd-180px">City</span>
                                                                        <span>:</span> <span id="contact-city2"
                                                                            class="col-grey font-16 ml-1">
                                                                            Birmingham</span>
                                                                    </p>
                                                                    <p class="mb-3"> <span
                                                                            class="wd-180px">County</span>
                                                                        <span>:</span> <span id="contact-county2"
                                                                            class="col-grey font-16 ml-1"> West
                                                                            Midlands</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12">
                                                                <hr class="m-0 mb-4"/> <a
                                                                    class="btn btn-primary btn-lg  contacts-edit-click2"
                                                                    data-val="2" data-hide=".disply__viewcontact2"
                                                                    data-show=".disply__editcontact2"> <i
                                                                        class="zmdi zmdi-edit"></i> <b>Edit</b> </a>
                                                            </div>
                                                        </div>
                                                        <div class="disply__editcontact2 dd_none">
                                                            <div class="row">
                                                                <div class="col-sm-12 formbg h-100prnt auto p-0">
                                                                    <div class="avt_bg">
                                                                        <h3 class="mb-0"><b>Contact information </b>
                                                                        </h3>
                                                                        <p class="mb-0"> Contact Address, Name phone
                                                                            Information etc.</p> <button
                                                                            class="cross contacts-edit-click2"
                                                                            data-hide=".disply__editcontact2"
                                                                            data-show=".disply__viewcontact2"><i
                                                                                class="zmdi zmdi-close"
                                                                                aria-hidden="true"></i></button>
                                                                    </div>
                                                                    <div class="p-4 bdr_b1">
                                                                        <div>
                                                                            <div class="form-group row"> <label for=""
                                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">First
                                                                                    name<span>*</span></label>
                                                                                <div class="col-sm-8 col-lg-5"> <input
                                                                                        id="txtContactsFirstName2"
                                                                                        type="text"
                                                                                        class="form-control form-control-lg"
                                                                                        value="Fina"
                                                                                        placeholder="First Name"/> </div>
                                                                            </div>
                                                                            <div class="form-group row"> <label for=""
                                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Last
                                                                                    name<span></span></label>
                                                                                <div class="col-sm-8 col-lg-5"> <input
                                                                                        id="txtContactsLastName2"
                                                                                        type="text"
                                                                                        class="form-control form-control-lg"
                                                                                        value="Cruce"
                                                                                        placeholder="Last Name"/> </div>
                                                                            </div>
                                                                            <div class="form-group row"> <label for=""
                                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Mobile
                                                                                    number<span>*</span></label>
                                                                                <div class="col-sm-8 col-lg-5"> <input
                                                                                        id="txtContactsMobileNumber2"
                                                                                        maxlength="11" type="text"
                                                                                        class="form-control form-control-lg number"
                                                                                        value="1234567890"
                                                                                        placeholder="Mobile Number"/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-group row"> <label for=""
                                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Home
                                                                                    number<span></span></label>
                                                                                <div class="col-sm-8 col-lg-5"> <input
                                                                                        id="txtContactsHomeNumber2"
                                                                                        maxlength="11" type="text"
                                                                                        class="form-control form-control-lg number"
                                                                                        value=""
                                                                                        placeholder="Home Phone"/> </div>
                                                                            </div>
                                                                            <div class="form-group row"> <label for=""
                                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Work
                                                                                    number<span></span></label>
                                                                                <div class="col-sm-8 col-lg-5"> <input
                                                                                        id="txtContactsWorkNumber2"
                                                                                        maxlength="11" type="text"
                                                                                        class="form-control form-control-lg number"
                                                                                        value=""
                                                                                        placeholder="Work Phone"/> </div>
                                                                            </div>
                                                                            <div class="form-group row"> <label for=""
                                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Relationship<span>*</span></label>
                                                                                <div class="col-sm-8 col-lg-5"> <select
                                                                                        id="ddlContactsRelationship2"
                                                                                        class="form-control form-control-lg">
                                                                                        <option value="">Choose
                                                                                            Relationship:</option>
                                                                                        <option selected=""
                                                                                            value="Mother">Mother
                                                                                        </option>
                                                                                        <option value="Father">Father
                                                                                        </option>
                                                                                        <option value="Daughter">
                                                                                            Daughter</option>
                                                                                        <option value="Son">Son</option>
                                                                                        <option value="Sister">Sister
                                                                                        </option>
                                                                                        <option value="Brother">Brother
                                                                                        </option>
                                                                                        <option value="Aunt">Aunt
                                                                                        </option>
                                                                                        <option value="Uncle">Uncle
                                                                                        </option>
                                                                                        <option value="Niece">Niece
                                                                                        </option>
                                                                                        <option value="Nephew">Nephew
                                                                                        </option>
                                                                                        <option value="Cousin">Cousin
                                                                                        </option>
                                                                                        <option value="Grandmother">
                                                                                            Grandmother</option>
                                                                                        <option value="Grandfather">
                                                                                            Grandfather</option>
                                                                                        <option value="Granddaughter">
                                                                                            Granddaughter</option>
                                                                                        <option value="Grandson">
                                                                                            Grandson</option>
                                                                                        <option value="Stepsister">
                                                                                            Stepsister</option>
                                                                                        <option value="Stepbrother">
                                                                                            Stepbrother</option>
                                                                                        <option value="Stepmother">
                                                                                            Stepmother</option>
                                                                                        <option value="Stepfather">
                                                                                            Stepfather</option>
                                                                                        <option value="Stepdaughter">
                                                                                            Stepdaughter</option>
                                                                                        <option value="Stepson">Stepson
                                                                                        </option>
                                                                                        <option value="Sister-in-law">
                                                                                            Sister-in-law</option>
                                                                                        <option value="Brother-in-law">
                                                                                            Brother-in-law</option>
                                                                                        <option value="Mother-in-law">
                                                                                            Mother-in-law</option>
                                                                                        <option value="Father-in-law">
                                                                                            Father-in-law</option>
                                                                                        <option value="Daughter-in-law">
                                                                                            Daughter-in-law</option>
                                                                                        <option value="Son-in-law">
                                                                                            Son-in-law</option>
                                                                                    </select> </div>
                                                                            </div>
                                                                            <div class="form-group row"> <label for=""
                                                                                    class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Is
                                                                                    Primary
                                                                                    Contact?<span></span></label>
                                                                                <div class="col-sm-8 col-lg-5">
                                                                                    <div class="checkbox"> <input
                                                                                            id="chkContactsIsPrimary2"
                                                                                            name="chkContIsPrimary2"
                                                                                            type="checkbox" checked=""
                                                                                            value="1"/> <label
                                                                                            for="chkContactsIsPrimary2">
                                                                                            Yes </label> </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 col-sm-12 p-4 pt-2">
                                                                    <h3 class="mb-3"><b>Contact Address</b></h3>
                                                                    <div>
                                                                        <div class="form-group row mt-3"> <label for=""
                                                                                class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Postcode<span></span></label>
                                                                            <div class="col-sm-8 col-lg-5">
                                                                                <div class="input-group"> <input
                                                                                        id="txtContactsPostCode2"
                                                                                        name="" placeholder="Postcode"
                                                                                        value="B1 1JG"
                                                                                        class="form-control form-control-lg"
                                                                                        type="text"/> <button
                                                                                        data-val="2"
                                                                                        class="btn btn-outline-primary btn-lg ml-1 contacts-find-addresslist"><i
                                                                                            class="zmdi zmdi-pin"></i>
                                                                                        Find Address</button> </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group row form-group cnd-contact-ddl-addresslist dd_none"
                                                                           > <label for=""
                                                                                class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Address
                                                                                List<span></span></label>
                                                                            <div class="col-sm-8 col-lg-5"> <select
                                                                                    id="ddlContactsAddressList2"
                                                                                    data-val="2"
                                                                                    class="form-control form-control-lg ddl-contacts-addresslist"
                                                                                    tabindex="-98"></select> </div>
                                                                        </div>
                                                                        <div class="form-group row"> <label for=""
                                                                                class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Address
                                                                                line 1<span></span></label>
                                                                            <div class="col-sm-8 col-lg-5"> <input
                                                                                    id="txtContactsAddressLine12"
                                                                                    name="" placeholder="Address Line 1"
                                                                                    value="Craven Arms  Upper Gough Street"
                                                                                    class="form-control form-control-lg"
                                                                                    type="text"/> </div>
                                                                        </div>
                                                                        <div class="form-group row"> <label for=""
                                                                                class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Address
                                                                                line 2<span></span></label>
                                                                            <div class="col-sm-8 col-lg-5"> <input
                                                                                    id="txtContactsAddressLine22"
                                                                                    name="" placeholder="Address Line 2"
                                                                                    value=""
                                                                                    class="form-control form-control-lg"
                                                                                    type="text"/> </div>
                                                                        </div>
                                                                        <div class="form-group row"> <label for=""
                                                                                class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">Town/City<span></span></label>
                                                                            <div class="col-sm-8 col-lg-5"> <input
                                                                                    id="txtContactsCity2" name=""
                                                                                    placeholder="Town/City"
                                                                                    value=" Birmingham"
                                                                                    class="form-control form-control-lg"
                                                                                    type="text"/> </div>
                                                                        </div>
                                                                        <div class="form-group row"> <label for=""
                                                                                class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">County<span></span></label>
                                                                            <div class="col-sm-8 col-lg-5"> <input
                                                                                    id="txtContactsCounty2" name=""
                                                                                    placeholder="County"
                                                                                    value=" West Midlands"
                                                                                    class="form-control form-control-lg"
                                                                                    type="text"/> </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12">
                                                                    <div class="form-group row">
                                                                        <hr class="m-0 mb-4"/> <label
                                                                            class="col-sm-4 col-lg-3  col-form-label col-form-label-lg">&nbsp;<span></span></label>
                                                                        <div class="col-sm-8 col-lg-5"> <button
                                                                                value="Submit"
                                                                                class="btn btn-primary btn-lg  update-contacts-info"
                                                                                data-id="2"
                                                                                data-val="3"><b>Update</b></button>
                                                                            <button
                                                                                class="btn btn-outline-danger btn-lg contacts-edit-click2"
                                                                                data-hide=".disply__editcontact2"
                                                                                data-show=".disply__viewcontact2"><b>
                                                                                    Cancel</b></button>
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
                                </div>
                            </div>
    </>
  )
}

export default Contacts
