"use client"
import Loading from '@/app/components/Loading'
import React, { useState } from 'react';

function Main() {
const customStyles = {
borderLeft: '1px solid rgb(221, 221, 221)',
height: '100vh',
};



return (
<>
    <section className="content">
        <div className="body_scroll">
            <div className="scrolfx">
                <div className="booktab d-flex justify-content-between align-items-center bdrbtm">
                    <div className="p-2">
                        <h2 className="font-bold mb-0"><i className="zmdi zmdi-receipt me-1"></i>Invoices </h2>
                    </div>
                    <div className="pe-2">
                        <a href="#" className="btn btn-outline-primary me-1"> Accept Online Payment</a>
                        <a href="#" className="btn btn-success" data-toggle="modal" data-target="#addpage"><i
                                className="zmdi zmdi-plus-circle-o-duplicate"></i> New Invoice</a>
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
                <div class="booktab d-flex justify-content-between align-items-center bdrbtm">
                    <div class="">
                        <ul class="nav nav-tabs nav-justified p-0">

                            <li class="nav-item">
                                <a class="nav-link padnav font-16 clickmode active" data-show=".invoiceArea"
                                    data-hide=".recArea" href="javascript:void(0);"><i class="zmdi zmdi-receipt"></i>
                                    <span class="d-none_small"> Invoices </span> </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link padnav font-16  clickmode" data-hide=".invoiceArea"
                                    data-show=".recArea" href="javascript:void(0);"><i class="zmdi zmdi-folder"></i>
                                    <span class="d-none_small"> Recurring Templates </span> </a>
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
                                            <h2 className="font-bold"> All Invoices </h2>
                                            <a href="#" className="btn btn-success btn-sm ms-3" style={{padding:".1rem .5rem"}} data-toggle="modal" data-target="#addpage">+</a>
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
                                                    <th>Client</th>
                                                    <th>Last Issued</th>
                                                    <th>Frequency / Duration</th>
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
                                                        <a href="javascript:void(0);" className="font-14"> <i
                                                                className="zmdi zmdi-calendar"></i> 04/09/2023</a>

                                                    </td>

                                                    <td>
                                                        Every Month<br />
                                                        <span className='col-grey font-14'>Infinite</span>
                                                    </td>
                                                    <td className='txtRgt'>
                                                        £100.00GBP<br />
                                                        <span className='col-grey badge badge-success'>Auto-Sent</span>
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
                            <div className="card bdr5 mb-1">
                                    <div className="header d-flex justify-content-between align-items-center p-0">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <h2 className="font-bold"> All Recurring Templates </h2>
                                            <a href="#" className="btn btn-success btn-sm ms-3" style={{padding:".1rem .5rem"}} data-toggle="modal" data-target="#addpage">+</a>
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
                                                    <th>Client</th>
                                                    <th>Last Issued</th>
                                                    <th>Frequency / Duration</th>
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
                                                        <a href="javascript:void(0);" className="font-14"> <i
                                                                className="zmdi zmdi-calendar"></i> 04/09/2023</a>

                                                    </td>

                                                    <td>
                                                        Every Month<br />
                                                        <span className='col-grey font-14'>Infinite</span>
                                                    </td>
                                                    <td className='txtRgt'>
                                                        £100.00GBP<br />
                                                        <span className='col-grey badge badge-success'>Auto-Sent</span>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="modal right-full md-one" id="addpage"  role="dialog" aria-labelledby="shortModal">
        <div class="modal-dialog" role="document">
        <div class="modal-content" style={{height:"auto!important"}}>
                <div class="modal-header bg-blu-lite fixed-top">
                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"> </button>
                    <h4 class="modal-title" id="myModalLabel2">
                        <b> <i class="zmdi zmdi-plus-circle-o-duplicate"></i> Add New Invoice </b>
                    </h4>
                </div>
                <div class="modal-body pr-0 pl-0 pb-0 contbody">  
                <div className="row  m-0">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-9  mt-4">
                            
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-3" style={customStyles}>
                            <h4 className="mt-4 mb-0">Settings</h4>
                            <hr className='mt-2 mb-2' />
                            <div
                                className='invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2'>
                                <div>
                                    <p className="m-0 font-14">
                                        <b>
                                            <i className="zmdi zmdi-city"></i> Assign to client/Project
                                        </b>
                                    </p>
                                    <p className="col-grey m-0 font-14">test Ltd.</p>
                                </div>
                            </div>
                            <hr className="mt-2 mb-2" />
                            <div className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2">
                                <div>
                                    <p className="m-0 font-14"><b><i className="zmdi zmdi-refresh"></i> Make
                                            Recurring</b></p>
                                    <p className="col-grey m-0 font-14">Repeat this expanses automatically</p>
                                </div>
                                <div class="form-check form-switch ms-1">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                </div>
                            </div>
                            <hr className='mt-2 mb-2' />
                            <a href="javascript:void(0);"
                                className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2 clickmode">
                                <div>
                                    <p className="m-0 font-14"><b><i className="zmdi zmdi-city"></i> Currency </b></p>
                                    <p className="col-grey m-0 font-14">GBP </p>
                                </div>
                            </a>
                            <hr className='mt-2 mb-2' />
                        </div>
                    </div>               
                </div>
                <div class="model-footer">
                    <div class="row m-0">
                        <div class="col-md-12">                          
                            <div class="text-center">
                            <a href="Invoice-print.html" target="_blank" class="btn btn-outline-primary me-1"> Print</a>
                                <button type="button" class="btn btn-success me-1"> Submit Payment
                                </button>
                                <button type="button" class="btn btn-primary me-2">
                                   Generate PDF
                                </button>
                                <button class="btn btn-primary clickmode me-1"data-show=".contactlist"
                                    data-hide=".md-one, .Lodingbox, .modal-backdrop" type="button"> <i
                                        className="zmdi zmdi-upload"></i> Save </button>
                                <button class="btn btn-danger" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    <div className="modal right-half md-one" id="addpage9" tabindex="-1" role="dialog" aria-labelledby="shortModal">
        <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content">
                <div className="modal-header bg-blu-lite fixed-top">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
                    <h4 className="modal-title" id="myModalLabel2">
                        <b> <i className="zmdi zmdi-plus-circle-o-duplicate"></i> Create New</b>
                    </h4>
                </div>
                <div className="modal-body pr-0 pl-0 pb-0 contbody">

                    <div className="row  m-0">
                        <div className="col-12 col-sm-12 col-md-7 col-lg-8  mt-4">
                            <div className="row m-0">
                                <div className="col-6">
                                    <div className="form-floating">
                                        <select className="form-select" id="floatingSelect"
                                            aria-label="Floating label select example">
                                            <option selected>Select Category</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <label for="floatingSelect">Add Category</label>
                                    </div>

                                </div>
                                <div className="col-6">
                                    <div className="form-floating mb-3">
                                        <input type="date" className="form-control" id="floatingInput"
                                            placeholder="date" />
                                        <label for="floatingInput">Date</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-0">
                                <div className="col-12">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput"
                                            placeholder="Company Name" />
                                        <label for="floatingInput">Name<span className='red'>*</span></label>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-0">
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a comment here"
                                            id="floatingTextarea"></textarea>
                                        <label for="floatingTextarea">Add Description(Optional)</label>
                                    </div>
                                    <button className='btn btn-outline-primary addTaskBtn mt-3 clickmode'
                                        data-hide=".addTaskBtn" data-show=".addtax"> + Add Tax</button>

                                    <div className='addtax dd_none'>
                                        <table className="table mt-3">
                                            <thead>
                                                <tr>
                                                    <th scope="col" style={{ width: "28px" }}>-</th>
                                                    <th scope="col">Rate</th>
                                                    <th scope="col">Tax Name</th>
                                                    <th scope="col">Tax Number(Optinal)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td scope="row">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""
                                                                id="flexCheckDefault" />
                                                            <label className="form-check-label"
                                                                for="flexCheckDefault"></label>
                                                        </div>
                                                    </td>
                                                    <td><input className="form-control form-control-sm" type="text"
                                                            id="rate" /></td>
                                                    <td><input className="form-control form-control-sm" type="text"
                                                            id="name" /></td>
                                                    <td><input className="form-control form-control-sm" type="text"
                                                            id="taxNumber" /></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                        <button className='btn btn-outline-secondry d-block text-center mt-2' style={{
                                            border: "2px dashed #ddd" }}>+ Add Another Tax</button>

                                        <hr />
                                        <button className='btn btn-primary me-1 clickmode' data-show=".asstexView"
                                            data-hide=".addtax">Apply Tax</button>
                                        <button className='btn btn-danger clickmode' data-show=".addTaskBtn"
                                            data-hide=".addtax">Cancel</button>
                                    </div>

                                    <div className='asstexView dd_none'>
                                        <table className="table mt-3">
                                            <tr>
                                                <td className='col-black'>Subtotal(GBP )</td>
                                                <td style={{ textAlign: "end" }}>£0.00 </td>
                                                <td style={{width:"20px"}}> <i
                                                        className='zmdi zmdi-refresh col-grey'></i></td>
                                            </tr>
                                            <tr>
                                                <td className='col-blue'>VAT 5%</td>
                                                <td style={{ textAlign: "end" }}>£0.00 </td>
                                                <td style={{width:"20px"}}> <i
                                                        className='zmdi zmdi-delete col-grey'></i></td>
                                            </tr>
                                            <tr>
                                                <td className='col-blue'>ST 2%</td>
                                                <td style={{ textAlign: "end" }}>£0.00 </td>
                                                <td style={{width:"20px"}}> <i
                                                        className='zmdi zmdi-delete col-grey'></i></td>
                                            </tr>
                                        </table>
                                    </div>
                                    <hr />
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>Grand Total(GBP )</div>
                                        <div class="Invoice-list-total font-20" style={{ textAlign: "end" }}>£0.00
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-5 col-lg-4" style={customStyles}>
                            <h4 className="mt-4 mb-0">Expanses Settings</h4>
                            <hr className='mt-2 mb-2' />
                            <div
                                className='invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2'>
                                <div>
                                    <p className="m-0 font-14">
                                        <b>
                                            <i className="zmdi zmdi-city"></i> Assign to client/Project
                                        </b>
                                    </p>
                                    <p className="col-grey m-0 font-14">test Ltd.</p>
                                </div>

                            </div>
                            <hr className="mt-2 mb-2" />



                            <div
                                className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2">
                                <div>
                                    <p className="m-0 font-14"><b><i className="zmdi zmdi-refresh"></i> Make
                                            Recurring</b></p>
                                    <p className="col-grey m-0 font-14">Repeat this expanses automatically</p>
                                </div>
                                <div class="form-check form-switch ms-1">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                </div>
                            </div>
                            <hr className='mt-2 mb-2' />




                            <a href="javascript:void(0);"
                                className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2 clickmode">
                                <div>
                                    <p className="m-0 font-14"><b><i className="zmdi zmdi-city"></i> Currency </b></p>
                                    <p className="col-grey m-0 font-14">GBP </p>
                                </div>
                            </a>
                            <hr className='mt-2 mb-2' />

                        </div>
                    </div>

                </div>
                <div className="model-footer">
                    <div className="row m-0">
                        <div className="col-md-12">
                            <div className="text-center">
                                <button className="btn btn-primary me-1 clickmode" data-show=".contactlist"
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