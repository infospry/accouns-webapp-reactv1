"use client"
import Loading from '@/app/components/Loading'
import React, { useState } from 'react';
import Image from 'next/image';
import menuImage from "../../images/menu-dots-vertical.svg";
import aImage from "../../images/download.jpg";
import bImage from "../../images/download.jpg";
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
//#region phone 
    const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
//#endregion
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
                            <div className="pe-2">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addpage"><i className="zmdi zmdi-plus-circle-o-duplicate"></i>  New Client</a>
                                <div className="btn-group ms-1">
                                    <button className="btn btn-outline-secondary  dropdown-toggle font-w" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> More Actions</button>
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
                                    
                                    <div className='Lodingbox'>
                                        <Loading />
                                    </div>
                                    <div className='dd_none contactlist'>
                                        <div className="table-responsive" style={{overflowX:"unset"}}>
                                            <table className="table table-bordered rwd-table btdr_none mb-0">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: '28px' }}>
                                                            <div className="checkbox">
                                                                <input className="all_slct" id="order" type="checkbox" />
                                                                <label for="order" className="ps-0">&nbsp;</label>
                                                            </div>
                                                        </th>
                                                        <th style={{ width: '240px' }}>Client Name/ Primary Contact</th>
                                                        <th>Internal Note</th>
                                                        <th style={{ width: '180px' }}>Client</th>
                                                        <th className='txtRgt' style={{ width: '140px',textAlign:"end" }}>Total Outstanding</th>
                                                        <th style={{width:"24px"}}>-</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                  
                                                    <tr>

                                                        <td>
                                                            <div className="checkbox">
                                                                <input className="all_slct" id="product1" type="checkbox" />
                                                                <label for="product1" className="ps-0">&nbsp;</label>
                                                            </div>  
                                                        </td>
                                                        <td>
                                                            <a href="javascript:void(0);" class="d-flex justify-content-start align-items-center" data-toggle="modal" data-target="#preview"><div class="shortTitle me-2">LD</div><div style={{lineHeight:"14px"}}><span class="font-weight-bold"> Loporem Dummy Pvt.ltd.</span></div><div></div></a>
                                                        </td>
                                                        <td className="dnone-mob"></td>                                                        
                                                        <td></td>
                                                        <td  className='txtRgt'>
                                                            £0.00GBP
                                                        </td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#preview"><i className="zmdi zmdi-search me-1"></i>View</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="listTotal"><div>Total</div><div className="Invoice-list-total"style={{textAlign:"end" }}>£0.00GBP  </div></div>
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
                        <div className="modal-header bg-blu-lite">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
                            <h4 className="modal-title" id="myModalLabel2">
                                <b> <i className="zmdi zmdi-plus-circle-o-duplicate"></i> Add / Edit Client</b>
                            </h4>
                        </div>
                        <div className="modal-body pe-0 ps-0 pb-0 contbody" >

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
                                            <div className="form-check form-switch ms-1">
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
                                            <div className="form-check form-switch ms-1">
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
                                        <div className="form-check form-switch ms-1">
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
            <div className="modal right_one_thrd md-one" id="preview" tabindex="-1" role="dialog" aria-labelledby="shortModal"aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-blu-lite">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel2">
                                <b> <i className="zmdi zmdi-plus-circle-o-duplicate"></i> Preview Client</b>
                            </h4>
                        </div>
                        <div className="modal-body pe-0 ps-0 pb-0 contbody">   
                            <div class="p-3 d-flex justify-content-between  align-items-center" style={{background:"#f2f2fa"}}>
                                <div className="d-flex justify-content-start align-items-center">
                                    <div class="pro__Title">LD</div>
                                    <div className="ms-2">
                                        <h2 class="font-weight-bold font-18 mb-0"> Loporem Dummy Pvt.ltd.</h2>
                                        <p className="mb-0"><span className="col-grey"> UTR Number:</span>01234567890 </p> 
                                    </div>
                                </div> 
                                <ul class="social-network social-circle m-0 p-0 text-end" style={{minHeight:"35px", width:"180px"}}>
                                    <li><a href="#" class="" title="Facebook"><i class="zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="#" class="" title="Linkedin"><i class="zmdi zmdi-linkedin"></i></a></li>
                                    <li><a href="#" class="" title="Facebook"><i class="zmdi zmdi-twitter"></i></a></li>
                                    <li><a href="#" class="" title="Linkedin"><i class="zmdi zmdi-whatsapp"></i></a></li>
                                </ul>  
                            </div>                     
                            <div className="row  m-0">
                                <div className="col-md-12 ps-0 pe-0">
                                    <div className="bgblulgt">
                                        <ul className="nav nav-tabs nav-justified p-0">                            
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="tab" href="#Overview"><i className="ti ti-layout-accordion-list"></i> Overview </a>
                                            </li>   
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#Page__Notes"><i className="zmdi zmdi-comment-edit"></i> Notes</a>
                                            </li>                      
                                        </ul>
                                    </div>
                                    <div className="tab-content p-0">                                            
                                        <div role="tabpanel" className=" tab-pane in active" id="Overview">                                             
                                           <div className="p-4">
                                           <div className="row justify-content-center font-h4">
                                                                <div className="col-xl-6 pt-1">
                                                                    <h2 class="font-18"> <i className="zmdi zmdi-info me-1 col-grey"></i><b> Information</b> <span className="bbl-light ms-1">Main</span></h2>
                                                                    <hr/>
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <h4 className="col-grey m-0 p-0"> Categories</h4>
                                                                            <p className="mb-3"> <span className="col-black">Customer </span> </p>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <h4 className="col-grey m-0 p-0"> Tax Reg.No.</h4>
                                                                            <p className="mb-3"> <span className="col-black">DK9999 - </span> </p>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <h4 className="col-grey m-0 p-0"> UTR Number</h4>
                                                                            <p className="mb-3"> <span className="col-black">01234567890 </span> </p>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <h4 className="col-grey m-0 p-0"> Opening Balance</h4>
                                                                            <p className="mb-3"> <span className="col-black"><b>$25 - 35/hrs</b> </span> </p>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <h4 className="col-grey m-0 p-0"> Payment Method</h4>
                                                                            <p className="mb-3"> <span className="col-black">---- </span> </p>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <h4 className="col-grey m-0 p-0"> Terms</h4>
                                                                            <p className="mb-3"> <span className="col-black">25-07-2020 to 25-08-2020 </span> </p>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <h4 className="col-grey m-0 p-0"> Portal Language </h4>
                                                                            <p className="mb-3"> <span className="col-black">---</span> </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                    <div className="col-xl-6 pt-1" style={{borderLeft:"1px solid #ddd"}}>   
                                                                    <h2 class="font-18"> <i className="zmdi zmdi-pin me-1 col-grey"></i><b> Contact Address </b> <span className="bbl-light ms-1">Main</span></h2>
                                                                   <hr/>
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <h4 className="col-grey m-0 p-0"> Company Name</h4>
                                                                            <p className="mb-3"> <span className="col-black">Nixon Enterprise </span> </p>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <h4 className="col-grey m-0 p-0"> Name</h4>
                                                                            <p className="mb-3"> <span className="col-black">Mr. jons Piterson</span> </p>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <h4 className="col-grey m-0 p-0"> Mobile</h4>
                                                                            <p className="mb-3"> <span className="col-black">01234567890 <small className="col-green"> <i className="zmdi zmdi-check-all"> </i> Verified</small></span> </p>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <h4 className="col-grey m-0 p-0"> Email Address</h4>
                                                                            <p className="mb-3"> <span className="col-black">solutions.topicccano@gmail.com</span> </p>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <h4 className="col-grey m-0 p-0"> Address Line</h4>
                                                                            <p className="mb-3"> <span className="col-black">445 Mount Eden Road</span> </p>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <h4 className="col-grey m-0 p-0"> City &amp; County</h4>
                                                                            <p className="mb-3"> <span className="col-black"><span id=""> Mount Eden</span>, <span id=""> Auckland</span></span> </p>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <h4 className="col-grey m-0 p-0"> Postcode </h4>
                                                                            <p className="mb-3"> <span className="col-black">b841213</span> </p>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                   
                                                                </div>
                                                            </div>
                                           </div>
                                            <div className="p-4" style={{background:"#f9f9f9"}}>
                                                <h2 class="font-18"><i className="zmdi zmdi-accounts-list-alt me-1 col-grey"></i><b>Contact Person</b></h2>
                                                                    
                                                <div className="table-responsive">
                                                    <table className="table table-bordered btdr_none mb-0" id="sortable">
                                                        <thead className="font_b dnone-mob">                     
                                                            <tr className="font_btd">
                                                                <th style={{width:"30px"}}> 
                                                                    #
                                                                </th>
                                                                <th className=""> Contact / Company </th>
                                                                <th> Phone </th>                                                                                    
                                                                <th>  Open Balance   </th>                                                  
                                                                <th class="text-start" style={{width:"90px"}}>  Action</th>
                                                            </tr>
                                                        </thead>            
                                                        <tbody>
                                                            <tr className="">
                                                                <td className="">
                                                                    1
                                                                </td> 
                                                                <td className="pt-3 pb-3">
                                                                    <b>DMRC </b> <i className="zmdi zmdi-email ms-2"></i><br/>
                                                                    Delhi Metro Rail Corporation
                                                                </td>                                                         
                                                                <td> --</td>
                                                                <td> $596.00</td>                                                
                                                                <td>
                                                                <button className="btn btn-danger btn-sm" title="Delete" type="button"> <i className="zmdi zmdi-delete"></i> <span className="dnone-mob">Delete</span></button>                                                 
                                                                </td> 
                                                            </tr>
                                                            <tr className="">
                                                                <td className="">
                                                                    2
                                                                </td> 
                                                                <td className="pt-3 pb-3">
                                                                    Soft technotech ltd <i className="zmdi zmdi-email ms-2"></i>
                                                                </td>                                                         
                                                                <td> --</td>
                                                                <td> $596.00</td>                                                
                                                                <td>
                                                                <button className="btn btn-danger btn-sm" title="Delete" type="button"> <i className="zmdi zmdi-delete"></i> <span className="dnone-mob">Delete</span></button>                                                 

                                                                </td> 
                                                            </tr>
                                                            <tr className="">
                                                                <td className="">
                                                                3 
                                                                </td> 
                                                                <td className="pt-3 pb-3">
                                                                    Soft technotech ltd <i className="zmdi zmdi-email ms-2"></i>
                                                                </td>                                                         
                                                                <td> --</td>
                                                                <td> $596.00</td>                                                
                                                                <td>
                                                                <button className="btn btn-danger btn-sm" title="Delete" type="button"> <i className="zmdi zmdi-delete"></i> <span className="dnone-mob">Delete</span></button>                                                 

                                                                </td> 
                                                            </tr>
                                                            
                                                        </tbody>        
                                                    </table>   
                                                </div>
                                            </div>                     
                                        </div>
                                        
                                        <div role="tabpanel" className=" tab-pane" id="Page__Notes"> 
                                            <div className="row justify-content-center  m-0">
                                                <div className="col-md-12 col-lg-8 col-xl-7">
                                                
                                                    
                                                        <div className="group_lead mt-4">
                                                            <textarea required="required" id="Description"></textarea>
                                                            <label for="Description" className="lablefilled"> Write a private note</label>                                                          
                                                        </div> 
                                                
                                                    <div className="text-right mt-3 mb-3">
                                                        <button className="btn btn-danger savea me-1" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                                                        <a href="" className="btn btn-primary"> <i className="zmdi zmdi-upload"></i> Update </a>                                            
                                                    </div>
                                                    <div className="card">
                                                        <div className="p-3">
                                                            <h4><i className="zmdi zmdi-comment-alt-text me-2"></i>Comments</h4>
                                                            <hr/>
                                                        </div>
                                                    
                                                        <div className="mt-2 mb-4">
                                                            <div className="d-flex flex-row p-3"> <Image src={aImage} alt="img" width={"40"} height={"40"}/>
                                                                <div className="w-100">
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <div className="d-flex flex-row align-items-center"> <span className="me-2 font-18 col-head">Brian selter</span> <small className="c-badge">Top Comment</small> </div> <small><i className="zmdi zmdi-calendar me-1"></i> 12h ago</small>
                                                                    </div>
                                                                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                                                    <div className="d-flex flex-row user-feed"> <span className="wish"><i className="zmdi zmdi-thumb-up me-2"></i>24</span> </div>
                                                                </div>
                                                            </div>
                                                            <hr/>
                                                            <div className="d-flex flex-row p-3"> <Image src={aImage} alt="img" width={"40"} height={"40"}/>
                                                                <div className="w-100">
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <div className="d-flex flex-row align-items-center"> <span className="me-2 font-18 col-head">Seltos Majito</span> <small className="c-badge">Top Comment</small> </div><small> <i className="zmdi zmdi-calendar me-1"></i> 10-Feb-2021</small>
                                                                    </div>
                                                                    <p className="text-justify">Tellus in hac habitasse platea dictumst vestibulum. Lectus nulla at volutpat diam ut venenatis tellus. Aliquam etiam erat velit scelerisque in dictum non consectetur. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Aliquam faucibus purus in massa.</p>
                                                                    <div className="d-flex flex-row user-feed"> <span className="wish"><i className="zmdi zmdi-thumb-up me-2"></i>14</span> </div>
                                                                </div>
                                                            </div>
                                                            <hr/>
                                                            <div className="d-flex flex-row p-3"> <Image src={aImage} alt="img" width={"40"} height={"40"}/>
                                                                <div className="w-100">
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <div className="d-flex flex-row align-items-center"> <span className="me-2 font-18 col-head
                                                                            ">Maria Santola</span> <small className="c-badge">Top Comment</small> </div> <small><i className="zmdi zmdi-calendar me-1"></i> 17-Feb-2021</small>
                                                                    </div>
                                                                    <p className="text-justify"> Id eu nisl nunc mi ipsum faucibus. Massa massa ultricies mi quis hendrerit dolor. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Urna condimentum mattis pellentesque id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                                                    <div className="d-flex flex-row user-feed"> <span className="wish"><i className="zmdi zmdi-thumb-up me-2"></i>54</span>  </div>
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
                        <div className="model-footer">
                            <div className="text-center">                                 
                                <button className="btn btn-danger" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>   
                        </div>
                    </div>            
                </div>
            </div>
        </>
    )
}

export default Main
