"use client"
import Loading from '@/app/components/Loading'
import React, { useState } from 'react';
import Image from 'next/image'
function Main() {
//#region style
const customStyles = {
    borderLeft: '1px solid rgb(221, 221, 221)',
    height: '100vh',
};
//#endregion




return (
<>
    <section className="content">
        <div className="body_scroll">
            <div className="scrolfx">
                <div className="booktab d-flex justify-content-between align-items-center bdrbtm">
                    <div className="p-2">
                        <h2 className="font-bold mb-0"><i className="zmdi zmdi-receipt me-1"></i>Quotes and Proposals </h2>
                    </div>
                    <div className="pe-2">
                        {/* <a href="#" className="btn btn-outline-primary me-1"> Accept Online Payment</a> */}
                        <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addpage"><i
                                className="zmdi zmdi-plus-circle-o-duplicate"></i> Create New</a>
                        <div className="btn-group ms-1">
                            <button className="btn btn-outline-primary  dropdown-toggle font-w" type="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> More Actions</button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal"
                                    data-target="#"><i className="zmdi zmdi-upload"></i> Export</a>
                                <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal"
                                    data-target="#"><i className="zmdi zmdi-download"></i> Import</a>
                                <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal"
                                    data-target="#"><i className="zmdi zmdi-email"></i> Send Email</a>
                                <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal"
                                    data-target="#"><i className="zmdi zmdi-repeat"></i> History</a>
                                <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal"
                                    data-target="#"><i className="zmdi zmdi-rotate-left"></i> Refresh</a>
                                <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal"
                                    data-target="#"><i className="zmdi zmdi-notifications-active"></i> Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll_bar">
                <div className="booktab d-flex justify-content-between align-items-center bdrbtm">
                    <div className="">
                        <ul className="nav nav-tabs nav-justified p-0">

                            <li className="nav-item">
                                <a className="nav-link padnav font-16 clickmode active" data-show=".invoiceArea"
                                    data-hide=".recArea" href="javascript:void(0);"><i
                                        className="zmdi zmdi-receipt"></i>
                                    <span className=""> For Me </span> </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link padnav font-16  clickmode" data-hide=".invoiceArea"
                                    data-show=".recArea" href="javascript:void(0);"><i className="zmdi zmdi-folder"></i>
                                    <span className=""> To Me </span> </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12 col-lg-12 mt-3">
                            <div className='invoiceArea'>
                                <div className="card bdr5 mb-1">
                                    <div className="header d-flex justify-content-between align-items-center p-0">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <h2 className="font-bold"> All Quotes and Proposals </h2>
                                        </div>
                                        <div className="input-group" style={{ maxWidth: '460px' }}>
                                            <input type="text" className="form-control radius_l"
                                                aria-label="Text input with dropdown button" placeholder='Search...' />
                                            <button className="btn btn-outline-secondary dropdown-toggle radius_r"
                                                type="button" data-bs-toggle="dropdown" aria-expanded="false"><i
                                                    className="zmdi zmdi-tune"></i> Advance
                                                Search</button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='Lodingbox'>
                                    <Loading />
                                </div>
                                <div className='dd_none contactlist'>
                                    <div className="table-responsive">
                                        <table className="table table-bordered rwd-table btdr_none mb-0">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: '28px' }}>
                                                        <div className="checkbox">
                                                            <input className="all_slct" id="order" type="checkbox" />
                                                            <label for="order" className="pl-0">&nbsp;</label>
                                                        </div>
                                                    </th>
                                                    <th>Client/Number</th>
                                                    <th>Description</th>
                                                    <th>Date</th>
                                                    <th className='txtRgt' style={{ width: '180px' }}>Amount / Status
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr>

                                                    <td>
                                                        <div className="checkbox">
                                                            <input className="all_slct" id="product1" type="checkbox" />
                                                            <label for="product1" className="pl-0">&nbsp;</label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <span className="font-weight-bold"> Test LTD</span><br />
                                                        <a href="javascript:void(0);"
                                                            className="font-14">0000000000712</a>
                                                    </td>
                                                    <td>
                                                    <a href="javascript:void(0);" className="font-14">Proposal</a>
                                                    </td>

                                                    <td>
                                                    <a href="javascript:void(0);" className="font-14"> <i
                                                                className="zmdi zmdi-calendar"></i> 04/09/2023</a>
                                                        
                                                    </td>
                                                    <td className='txtRgt'>
                                                        £100.00GBP<br />
                                                        <span className='col-grey badge badge-lite'>Draft</span>
                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="listTotal">
                                        <div>Total</div>
                                        <div className="Invoice-list-total" style={{ textAlign: "end" }}>£0.00GBP </div>
                                    </div>
                                </div>
                            </div>
                            <div className='recArea dd_none'>
                                To Me
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="modal right-full md-one" id="addpage" role="dialog" aria-labelledby="shortModal">
        <div className="modal-dialog" role="document">
            <div className="modal-content" style={{height:"auto!important"}}>
                <div className="modal-header bg-blu-lite fixed-top">
                    <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"> </button>
                    <h4 className="modal-title" id="myModalLabel2">
                        <b> <i className="zmdi zmdi-plus-circle-o-duplicate"></i> Add New Proposal </b>
                    </h4>
                </div>
                <div className="modal-body pr-0 pl-0 pb-0 contbody">
                    <div className="row  m-0">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-9  mt-4">


                            {/* :::::: */}
                            <div className="est-inv" style={{width:"98%", margin:"0.5%"}}>
                                <div className="row justify-content-between">
                                    <div className="col-sm-6 col-lg-4 tradelogo">
                                        <label for="et_pb_contact_brand_file_request_0"
                                            className="et_pb_contact_form_label">Enter</label>
                                        <input type="file" id="et_pb_contact_brand_file_request_0"
                                            className="file-upload" />
                                    </div>
                                    <div className="col-sm-6 col-lg-4 text-end">
                                        <a href="#"><b className="cls-Preview" id="aBillToPreview"></b><strong>John
                                                Doe</strong></a><br />
                                        <p className="cls-Preview" id="ContactAddressPreview">
                                            795 Folsom Ave, Suite 600<br />
                                            San Francisco, CA 94107<br />
                                            Phone: (555) 539-1037<br />
                                            Email: john.doe@example.com<br />
                                            <a href="/">Edit to Business Information</a>
                                        </p>

                                    </div>

                                </div>
                                <div className="row justify-content-between align-items-center mt-5">
                                    <div className="col-6 col-md-3">
                                        <label className="col-grey font-16">Prepared For</label>
                                        <input className="form-control none_border" placeholder="text Client" />
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <label className="col-grey font-16">Proposal Date</label>
                                        <input className="form-control none_border" placeholder="DD/MM/YYYY" />
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <label className="col-grey font-16">Proposal Number</label>
                                        <input className="form-control none_border" placeholder="eg. 000123000" />
                                    </div>
                                    <div className="col-6 col-md-3 text-end">
                                        <label className="col-grey font-16">Amount Due(GBP)</label>
                                        <h4>£0.00</h4>
                                    </div>
                                </div>
                                <div className="row justify-content-between align-items-center mt-2">
                                    <div className="col-6 col-md-3">
                                        <a href="/">Edit Client</a><br />
                                        <a href="/">Remove Client</a>
                                    </div>
                                    <div className="col-6 col-md-3">&nbsp;
                                        {/* <label className="col-grey font-16">Due Date</label>
                                        <input className="form-control none_border" placeholder="DD/MM/YYYY" /> */}
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <label className="col-grey font-16">Reference</label>
                                        <input className="form-control none_border" placeholder="eg. PO#00" />
                                    </div>
                                    <div className="col-6 col-md-3 text-end">

                                    </div>
                                </div>
                                 <div className="dropdown mt-4">
                                <a className="btn dropdown-toggle col-blue" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{fontWeight:"bold"}}>
                                        <i className="zmdi zmdi-collection-text"></i> Add Section
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Blank Section</a></li>
                                    <li><a className="dropdown-item" href="#">Overview</a></li>
                                    <li><a className="dropdown-item" href="#">Scope of Work</a></li>
                                    <li><a className="dropdown-item" href="#">Timeline</a></li>
                                </ul>
                                </div>
                                <table className="table bgless mt-4">
                                    <thead>
                                        <tr>
                                            <th style={{width:"20px"}}></th>
                                            <th>Description</th>
                                            <th className="text-end" style={{width:"120px"}}>Rate</th>
                                            <th className="text-end" style={{width:"90px"}}>Qty</th>
                                            <th className="text-end" style={{width:"120px"}}>Line total</th>
                                            <th style={{width:"20px"}}></th>
                                        </tr>
                                    </thead>
                                    <tr className="dd_none showtd">
                                        <td><i className="zmdi zmdi-menu"></i></td>
                                        <td><div className="input-group-btn p-0">
                                                                <button type="button" className="btn btn-outline-secondary  text-left dropdown-toggle" style={{border:"0px"}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Example product
                                                                </button>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="#">Example product</a>
                                                                    <a className="dropdown-item" href="#">Sales excluding VAT</a>
                                                                    <a className="dropdown-item" href="#">Sales exempt from VAT</a>                                                   
                                                                </div>
                                                            </div></td>
                                        <td className="text-end">£10.00</td>
                                        <td className="text-end">1</td>
                                        <td className="text-end">£10.00</td>
                                        <td><i className="zmdi zmdi-delete"></i></td>
                                    </tr>

                                </table>
                                <a className="dottedBtn mt-3 mb-4 clickmode" data-show=".showtd">+ Add a Line</a>

                                <div className="row justify-content-end align-items-top">

                                    <div className="col-6 col-md-3 text-end">
                                        <p className="mb-0">Subtotal<br /><a href="/">Add a Discount</a></p>
                                    </div>
                                    <div className="col-6 col-md-3 text-end">
                                        <p className="mb-0"> £10.00</p>
                                    </div>
                                </div>
                                <div className="row justify-content-end align-items-center mt-1">

                                    <div className="col-6 col-md-3 text-end">
                                        <p className="mb-0">Tax</p>
                                    </div>
                                    <div className="col-6 col-md-3 text-end">
                                        <p className="mb-0"> 0.00</p>
                                    </div>
                                </div>
                                <div className="row justify-content-end align-items-center">

                                    <div className="col-6 col-md-6 text-end">
                                        <hr />
                                    </div>

                                </div>
                                <div className="row justify-content-end align-items-center mt-1">

                                    <div className="col-6 col-md-3 text-end">
                                        <p className="mb-0">Total</p>
                                    </div>
                                    <div className="col-6 col-md-3 text-end">
                                        <p className="mb-0"> £10.00</p>
                                    </div>
                                </div>
                                <div className="row justify-content-end align-items-center mt-1">

                                    <div className="col-6 col-md-3 text-end">
                                        <p className="mb-0">Amount Paid</p>
                                    </div>
                                    <div className="col-6 col-md-3 text-end">
                                        <p className="mb-0"> £10.00</p>
                                    </div>
                                </div>
                                <div className="row justify-content-end align-items-center">

                                    <div className="col-6 col-md-6 text-end">
                                        <hr />
                                    </div>

                                </div>
                                <div className="row justify-content-end align-items-center">
                                    <div className="col-6 col-md-3 text-end">
                                        <p className="mb-0">Amount Due(GBP)</p>
                                    </div>
                                    <div className="col-6 col-md-3 text-end">
                                        <p className="mb-0 font-20"> £10.00</p>
                                    </div>
                                </div>
                               
                                <div className="row justify-content-start mt-5 mb-3">
                                    <div className="col-sm-12 col-md-6 col-lg-6">    
                                        <div className="form-floating">
                                            <textarea className="form-control none_border" placeholder="Customer Footnote (0/250)"style={{height:"100px"}} id="floatingTextarea2"></textarea>
                                            <label for="floatingTextarea2">Customer Footnote (0/250)</label>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            {/* ::::::: */}






                        </div>

                        <div className="col-12 col-sm-12 col-md-4 col-lg-3" style={customStyles}>
                            <h4 className="mt-4 mb-0">Settings</h4>
                            <span className="font-14 col-grey"><b>For the Invoice</b></span>
                            <hr className='mt-2 mb-2' />
                            <div
                                className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2">
                                <div>
                                    <p className="m-0 font-14"><b><i className="zmdi zmdi-card"></i> Accept Online
                                            Payments</b></p>
                                    <p className="col-grey m-0 font-14">Lets clients pay online</p>
                                    <img className="m-auto" src="images/images.png" alt="img" style={{ height: 'auto'}} />
                                </div>
                                <div className="form-check form-switch ms-1">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                </div>
                            </div>
                            <hr className='mt-2 mb-2' />


                            <a href="javascript:void(0);"
                                className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2 clickmode">
                                <div>
                                    <p className="m-0 font-14"><b><i className="zmdi zmdi-aspect-ratio me-1"></i>
                                            Customize Invoice Style </b></p>
                                    <p className="col-grey m-0 font-14">Change Templets, Color </p>
                                </div>
                            </a>
                            <hr className='mt-2 mb-2' />
                            <div className="mkreqbtn">
                                <a href="javascript:void(0);"
                                    className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2 clickmode"
                                    data-show=".makeRec" data-hide=".mkreqbtn">
                                    <div>
                                        <p className="m-0 font-14"><b><i className="zmdi zmdi-refresh me-1"></i>
                                                Make Recurring</b></p>
                                        <p className="col-grey m-0 font-14">Bill your clients automatically </p>
                                        <span className="btn btn-outline-primary mb-0 mt-1 btn-sm">Make Recurring</span>
                                    </div>
                                </a>
                            </div>
                            <div className="makeRec dd_none">
                                <h4 className="mt-4 mb-0">Recurring Schedule</h4>
                                <hr className='mt-2 mb-2' />
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">How Often?</label>
                                    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                        <option selected>Monthly</option>
                                        <option value="1">Weekly</option>
                                        <option value="2">Yearly</option>
                                        <option value="3">Daily</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Next Issue date</label>
                                    <input className="form-control form-control-sm" type="text" placeholder="DD/MM/YYYY"
                                        aria-label=".form-control-sm example" />
                                </div>
                                <hr className='mt-2 mb-2' />

                                <label for="exampleFormControlTextarea1" className="form-label">Number of Invoices</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" style={{height:"1em"}} name="nobofInv"
                                        id="Infinite" checked />
                                    <label className="form-check-label col-grey" for="Infinite">
                                        Infinite
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" style={{height:"1em"}} name="nobofInv"
                                        id="specific" />
                                    <label className="form-check-label col-grey" for="specific">
                                        A specific Number
                                    </label>
                                </div>
                                <hr className='mt-2 mb-2' />
                                <label for="exampleFormControlTextarea1" className="form-label">Delivery Options</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" style={{height:"1em"}} name="delivery"
                                        id="automatically" checked />
                                    <label className="form-check-label col-grey" for="automatically">
                                        Send invoice automatically
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" style={{height:"1em"}} name="delivery"
                                        id="manually" />
                                    <label className="form-check-label col-grey" for="manually">
                                        Create Draft invoice and send manually
                                    </label>
                                </div>

                                <hr className='mt-2 mb-2' />
                                <label for="exampleFormControlTextarea1" className="form-label"><b>Accept Online
                                        Payment</b></label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label col-grey" for="flexCheckDefault">
                                        Allow clients to save credits card to make automatic payments.
                                    </label>
                                </div>
                                <hr className='mt-2 mb-2' />

                                <button className="btn btn-primary btn-sm me-1 clickmode" data-hide=".makeRec"
                                    data-show=".recSchedule">Done</button>
                                <button className="btn btn-danger btn-sm me-1">Cancel</button>
                            </div>
                            <div className="recSchedule dd_none">
                               
                                <div
                                    className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2">
                                    <div>
                                        <p className="m-0 font-14"><b><i className="zmdi zmdi-refresh me-1"></i>
                                                Recurring Schedule</b></p>
                                        <p className="col-grey m-0 font-14">Sends an Invoice every Month</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-2 mb-2' />
                            <span className="font-14 col-grey"><b>For the test ltd.</b></span>
                            <hr className='mt-2 mb-2' />
                            <div
                                className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2">
                                <div>
                                    <p className="m-0 font-14"><b><i className="zmdi zmdi-alarm"></i> Set Reminders</b>
                                    </p>
                                    <p className="col-grey m-0 font-14">At Customizable Intervals</p>
                                </div>
                                <div className="form-check form-switch ms-1">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                </div>
                            </div>
                            <hr className='mt-2 mb-2' />
                            <div
                                className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2">
                                <div>
                                    <p className="m-0 font-14"><b><i className="zmdi zmdi-alarm"></i> Charge Late
                                            Fees</b>
                                    </p>
                                    <p className="col-grey m-0 font-14">Percentage or Flat-Rate fees</p>
                                </div>
                                <div className="form-check form-switch ms-1">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                </div>
                            </div>
                            <hr className='mt-2 mb-2' />
                            <div
                                className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2">
                                <div>
                                    <p className="m-0 font-14"><b><i className="zmdi zmdi-alarm"></i> Currency &
                                            Language</b></p>
                                    <p className="col-grey m-0 font-14">GBP, English</p>
                                </div>
                                <div className="form-check form-switch ms-1">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                </div>
                            </div>
                            <hr className='mt-2 mb-2' />
                        </div>
                    </div>
                </div>
                <div className="model-footer">
                    <div className="row m-0">
                        <div className="col-md-12">
                            <div className="text-center">
                                <a href="Invoice-print.html" target="_blank" className="btn btn-outline-primary me-1">
                                    Print</a>
                                <button type="button" className="btn btn-success me-1"> Submit Payment
                                </button>
                                <button type="button" className="btn btn-primary me-2">
                                    Generate PDF
                                </button>
                                <button className="btn btn-primary clickmode me-1" data-show=".contactlist"
                                    data-hide=".md-one, .Lodingbox, .modal-backdrop" type="button"> <i
                                        className="zmdi zmdi-upload"></i> Save </button>
                                <button className="btn btn-danger" type="button"><i
                                        className="zmdi zmdi-rotate-left"></i>
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