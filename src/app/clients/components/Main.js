"use client"
import Loading from '@/app/components/Loading'
import React, { useState } from 'react';

function Main() {
    const customStyles = {
        borderLeft: '1px solid rgb(221, 221, 221)',
        height: '100vh',
    };
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [email, setEmail] = useState('');

    // Function to handle the click event and show the email input field
    const handleEmailClick = () => {
        setShowEmailInput(true);
    };

    // Function to handle changes in the email input field
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Function to handle form submission (you can customize this)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any actions with the email (e.g., validation, submission to a server, etc.)
        console.log('Email submitted:', email); console.log('Phone number submitted:', phoneNumber);
    };
    const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    // Function to handle the click event and show the phone number input field
    const handlePhoneNumberClick = () => {
        setShowPhoneNumberInput(true);
    };

    // Function to handle changes in the phone number input field
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    // Function to handle form submission (you can customize this)
    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        // Perform any actions with the phone number (e.g., validation, submission to a server, etc.)

    };
    const [showAddressFields, setShowAddressFields] = useState(false);
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [postTown, setPostTown] = useState('');
    const [postcode, setPostcode] = useState('');

    // Function to handle the click event and show the address input fields
    const handleAddressClick = () => {
        setShowAddressFields(true);
    };



    return (
        <>
            <section className="content">
                <div className="body_scroll">
                    <div className="scrolfx">
                        <div className="booktab d-flex justify-content-between align-items-center bdrb">
                            <div className="p-2">
                                <h2 className="font-bold mb-0"><i className="zmdi zmdi-graduation-cap me-1"></i>Clients </h2>
                            </div>
                            <div className="pe-2">
                                <a href="#" className="btn btn-success" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-plus-circle-o-duplicate"></i>  New Client</a>
                                <div className="btn-group ms-1">
                                    <button className="btn btn-outline-primary  dropdown-toggle font-w" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> More Actions</button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#"><i className="zmdi zmdi-upload"></i> Export</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#"><i className="zmdi zmdi-download"></i> Import</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#"><i className="zmdi zmdi-email"></i> Send Email</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#"><i className="zmdi zmdi-repeat"></i> History</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#"><i className="zmdi zmdi-rotate-left"></i> Refresh</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#"><i className="zmdi zmdi-notifications-active"></i> Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scroll_bar">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-12 col-lg-12 mt-3">
                                    <div className="card bdr5 mb-1">
                                        <div className="header d-flex justify-content-between align-items-center p-0">
                                            <div className="">
                                                <h2 className="font-bold"><i className="zmdi zmdi-accounts-list-alt mr-1"></i> All Clients </h2>
                                            </div>
                                            <div className="input-group" style={{ maxWidth: '460px' }}>
                                                <input type="text" className="form-control radius_l" aria-label="Text input with dropdown button" placeholder='Search...' />
                                                <button className="btn btn-outline-secondary dropdown-toggle radius_r" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="zmdi zmdi-tune"></i> Advance Search</button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='Lodingbox'>
                                        <Loading />
                                    </div>
                                    <div className='dd_none contactlist'>
                                        <div class="table-responsive">
                                            <table class="table table-bordered rwd-table btdr_none mb-0">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: '28px' }}><div class="checkbox">
                                                            <input class="all_slct" id="order" type="checkbox" />
                                                            <label for="order" class="pl-0">&nbsp;</label>
                                                        </div></th>

                                                        <th style={{ width: '240px' }}>Client Name/ Primary Contact</th>
                                                        <th>Internal Note</th>
                                                        <th style={{ width: '180px' }}>Client</th>
                                                        <th className='txtRgt' style={{ width: '140px',textAlign:"end" }}>Total Outstanding</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                  
                                                    <tr>

                                                        <td><div class="checkbox">
                                                            <input class="all_slct" id="product1" type="checkbox" />
                                                            <label for="product1" class="pl-0">&nbsp;</label>
                                                        </div>  </td>

                                                        <td>
                                                            <span class="font-weight-bold"> Loporem Pvt.ltd. </span>
                                                        </td>
                                                        <td class="dnone-mob"></td>
                                                        
                                                        <td></td>
                                                        <td  className='txtRgt'>
                                                            £0.00GBP
                                                        </td>
                                                    </tr>


                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="listTotal"><div>Total</div><div class="Invoice-list-total"style={{textAlign:"end" }}>£0.00GBP  </div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="modal right-half md-one" id="addpage" tabindex="-1" role="dialog" aria-labelledby="shortModal">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-blu-lite fixed-top">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
                            <h4 className="modal-title" id="myModalLabel2">
                                <b> <i className="zmdi zmdi-plus-circle-o-duplicate"></i> Add / Edit Client</b>
                            </h4>
                        </div>
                        <div className="modal-body pr-0 pl-0 pb-0 contbody" >

                            <div className="row  m-0">
                                <div className="col-12 col-sm-12 col-md-7 col-lg-8  mt-4">
                                    <div className="row m-0">
                                        <div className="col-6">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="First Name" />
                                                <label for="floatingInput">First Name<span className='red'>*</span></label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="Last Name" />
                                                <label for="floatingInput">Last Name<span className='red'>*</span></label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="Company Name" />
                                                <label for="floatingInput">Company Name<span className='red'>*</span></label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" id="floatingInput" placeholder="Email Address" />
                                                <label for="floatingInput">Email Address</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="Phone" />
                                                <label for="floatingInput">Phone</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className='btn btn-outline-primary mb-3' onClick={handleEmailClick}> + Add Email Address</button>
                                            <button className='btn btn-outline-primary mb-3 ms-1 me-1' onClick={handlePhoneNumberClick}> + Add Phone Number</button>
                                            <button className='btn btn-outline-primary mb-3' onClick={handleAddressClick}> + Add Address</button>
                                            {/* Render the email input field conditionally */}
                                            <div className="row">
                                                {showEmailInput && (
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-floating mb-3">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="floatingInput"
                                                                placeholder="Email Address"
                                                                value={email}
                                                                onChange={handleEmailChange}
                                                                required
                                                            />
                                                            <label htmlFor="floatingInput">
                                                                Email Address
                                                            </label>
                                                        </div></div>
                                                )}

                                                {/* You can add more form elements or buttons here */}

                                                {/* Render the phone number input field conditionally */}
                                                {showPhoneNumberInput && (
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-floating mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="floatingInput"
                                                                placeholder="Phone"
                                                                value={phoneNumber}
                                                                onChange={handlePhoneNumberChange}
                                                                required
                                                            />
                                                            <label htmlFor="floatingInput">
                                                                Phone
                                                            </label>
                                                        </div></div>
                                                )}
                                            </div>
                                            {/* You can add more form elements or buttons here */}
                                        </div>



                                        {showAddressFields && (
                                            <> <div className="col-12">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-floating mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Address Line 1"
                                                                value={addressLine1}
                                                                onChange={(e) => setAddressLine1(e.target.value)}
                                                            />
                                                            <label htmlFor="floatingInput">Address Line 1</label>
                                                        </div>
                                                        <div className="form-floating mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Address Line 2"
                                                                value={addressLine2}
                                                                onChange={(e) => setAddressLine2(e.target.value)}
                                                            />
                                                            <label htmlFor="floatingInput">Address Line 2</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-floating mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Country"
                                                                value={postTown}
                                                                onChange={(e) => setPostTown(e.target.value)}
                                                            />
                                                            <label htmlFor="floatingInput">Country</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-floating mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Post Town"
                                                                value={postcode}
                                                                onChange={(e) => setPostcode(e.target.value)}
                                                            />
                                                            <label htmlFor="floatingInput">Post Town</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-floating mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Post Town"
                                                                value={postcode}
                                                                onChange={(e) => setPostcode(e.target.value)}
                                                            />
                                                            <label htmlFor="floatingInput">Postcode</label>
                                                        </div>
                                                    </div></div>
                                            </div>
                                            </>
                                        )}





                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-5 col-lg-4" style={customStyles}>
                                    <h4 className="mt-4 mb-0">Client Settings</h4>
                                    <hr className='mt-2 mb-2' />
                                    <div className='invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2' >
                                            <div>
                                                <p className="m-0 font-14">
                                                    <b>
                                                        <i className="zmdi zmdi-city"></i> Send Reminders
                                                    </b>
                                                </p>
                                                <p className="col-grey m-0 font-14">At Customizable Intervals</p>
                                            </div>
                                            <div class="form-check form-switch ms-1">
                                            <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexSwitchCheckDefault"                                               
                                                />
                                            </div>
                                        </div>  <hr className="mt-2 mb-2" />

                              
                                   
                                        <div className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2">
                                            <div>
                                                <p className="m-0 font-14"><b><i className="zmdi zmdi-city"></i> Charge Late Fees  </b></p>
                                                <p className="col-grey m-0 font-14">Percentage or Flat-Rate Fees</p>
                                            </div>
                                            <div class="form-check form-switch ms-1">
                                            <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexSwitchCheckDefault"                                               
                                                />
                                            </div>
                                        </div><hr className='mt-2 mb-2' />
                                    

                               

                                    <a href="javascript:void(0);" className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2 clickmode">
                                        <div>
                                            <p className="m-0 font-14"><b><i className="zmdi zmdi-city"></i> Currency & Language   </b></p>
                                            <p className="col-grey m-0 font-14">GBP, English </p>
                                        </div>                                        
                                    </a><hr className='mt-2 mb-2' />
                                    <div className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2">
                                        <div>
                                            <p className="m-0 font-14"><b><i className="zmdi zmdi-city"></i>  Invoice Attachments</b></p>
                                            <p className="col-grey m-0 font-14">Attach PDF copy to emails</p>
                                        </div>
                                        <div class="form-check form-switch ms-1">
                                        <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexSwitchCheckDefault"                                               
                                                />
                                        </div>
                                    </div><hr className='mt-2 mb-2' />
                                </div>
                            </div>

                        </div>
                        <div className="model-footer">
                            <div className="row m-0">
                                <div className="col-md-12">
                                    <div className="text-center">
                                        <button className="btn btn-primary me-1 clickmode" data-show=".contactlist" data-hide=".md-one, .Lodingbox, .modal-backdrop" type="button"> <i className="zmdi zmdi-upload"></i> Save </button>
                                        <button className="btn btn-danger" type="button"><i className="zmdi zmdi-rotate-left"></i>
                                            Cancel</button>
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
