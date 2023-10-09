"use client"
import Loading from '@/app/components/Loading'
import React, { useState } from 'react';

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
                        <div className="booktab d-flex justify-content-between align-items-center bdrb">
                            <div className="p-2">
                                <h2 className="font-bold mb-0"><i className="zmdi zmdi-widgets me-1"></i>Vendors </h2>
                            </div>
                            <div className="pe-2">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addpage"><i className="zmdi zmdi-plus-circle-o-duplicate"></i>  New Vendor</a>
                                <div className="btn-group ms-1">
                                    <button className="btn btn-outline-primary  dropdown-toggle font-w" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">More</button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i className="zmdi zmdi-upload"></i> Export</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i className="zmdi zmdi-download"></i> Import</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i className="zmdi zmdi-email"></i> Send Email</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i className="zmdi zmdi-repeat"></i> History</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i className="zmdi zmdi-rotate-left"></i> Refresh</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i className="zmdi zmdi-notifications-active"></i> Delete</a>
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
                                                <h2 className="font-bold"><i className="zmdi zmdi-accounts-list-alt mr-1"></i> All Venders </h2>
                                            </div>
                                            <div className="input-group" style={{ maxWidth: '360px' }}>
                                                <input type="text" className="form-control radius_all" aria-label="Text input with dropdown button" placeholder='Search...' />

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
                                                        <th style={{ width: '28px' }}><div className="checkbox">
                                                            <input className="all_slct" id="order" type="checkbox" />
                                                            <label for="order" className="pl-0">&nbsp;</label>
                                                        </div>
                                                        </th>
                                                        <th>Company Name / Primary Contact</th>
                                                        <th>Email Address</th>
                                                        <th >Account Number</th>
                                                        <th className='txtRgt' style={{ width: '180px' }}>Total Outstanding</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>

                                                        <td><div className="checkbox">
                                                            <input className="all_slct" id="product1" type="checkbox" />
                                                            <label for="product1" className="pl-0">&nbsp;</label>
                                                        </div>  </td>

                                                        <td>
                                                            <span className="font-weight-bold"> Test vendor</span><br />
                                                            <span className="col-grey font-13">test end</span>
                                                        </td>
                                                        <td className="dnone-mob">
                                                            test@gmail.com
                                                        </td>

                                                        <td>
                                                            342FAU3425
                                                        </td>
                                                        <td className='txtRgt'>
                                                            £100.00GBP
                                                        </td>
                                                    </tr>


                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="listTotal"><div>Total</div><div className="Invoice-list-total" style={{ textAlign: "end" }}>£0.00GBP  </div></div>
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
                                <b> <i className="zmdi zmdi-plus-circle-o-duplicate"></i> Create New</b>
                            </h4>
                        </div>
                        <div className="modal-body pr-0 pl-0 pb-0 contbody" >

                            <div className="row  m-0">
                                <div className="col-12 col-sm-12 col-md-7 col-lg-8  mt-4">
                                    <div className="row m-0">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="Company Name" />
                                                <label for="floatingInput">Company Name<span className='red'>*</span></label>
                                            </div>
                                        </div>
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
                                        <div className="col-6">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="Account Number" />
                                                <label for="floatingInput">Account Number</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="Website" />
                                                <label for="floatingInput">Website</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className='btn btn-outline-primary mb-3 clickmode' data-show=".addressArea" data-hide=".addAdsress"> + Add Address</button>
                                        </div>
                                        <div className='dd_none addressArea'>
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-floating mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Address Line 1"

                                                            />
                                                            <label htmlFor="floatingInput">Address Line 1</label>
                                                        </div>
                                                        <div className="form-floating mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Address Line 2"

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

                                                            />
                                                            <label htmlFor="floatingInput">Postcode</label>
                                                        </div>
                                                    </div></div>
                                            </div>
                                        </div>





                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-5 col-lg-4" style={customStyles}>
                                    <h4 className="mt-4 mb-0">Vendor Settings</h4>
                                    <hr className='mt-2 mb-2' />
                                    <a href="javascript:void(0);" className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2 clickmode">
                                        <div>
                                            <p className="m-0 font-14"><b><i className="zmdi zmdi-city"></i> Currency & Language   </b></p>
                                            <p className="col-grey m-0 font-14">GBP, English </p>
                                        </div>
                                    </a><hr className='mt-2 mb-2' />
                                    <div className="clickmode a" data-show=".b" data-hide=".a">
                                        <div className='invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2'>
                                            <div>
                                                <p className="m-0 font-14">
                                                    <b>
                                                        <i className="zmdi zmdi-city"></i> Sales tax Type
                                                    </b>
                                                </p>
                                                <p className="col-grey m-0 font-14">To record the sales tax you pay</p>
                                            </div>
                                            <div className="form-check form-switch ms-1">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexSwitchCheckDefault"
                                                />
                                            </div>
                                        </div>  <hr className="mt-2 mb-2" /></div>
                                    <div className='invwhite pe-0 ps-2 pt-2 pb-2 b dd_none' >

                                            <p className="m-0 font-14"><b>Sales Tax Type</b></p>
                                            <p className="col-grey m-0 font-14">Select the taxes that you pay to tis vendor. You
                                            will see how much sales tax you have paid on the Sales Tax Report.
                                            </p>
                                        <button className='btn btn-outline-primary btn-sm addTaskBtn mt-2 clickmode' data-hide=".addTaskBtn" data-show=".addtax"> + Add Tax</button>

                                        <div className='addtax dd_none '>
                                            <table className="table mt-3">
                                               
                                                <tbody>
                                                <tr>
                                                        <td scope="row" className='ps-0 pe-1' style={{ width: "20px" }}>-</td>
                                                        <td className='ps-0 pe-1'>Rate</td>
                                                        <td className='ps-0 pe-1'>Tax Name</td>
                                                        <td className='ps-0 pe-0'>Tax Number</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row" className='ps-0 pe-1'><div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                            <label className="form-check-label" for="flexCheckDefault"></label>
                                                        </div></td>
                                                        <td className='ps-0 pe-1'><input className="form-control form-control-sm hight-32" type="text" id="rate" /></td>
                                                        <td className='ps-0 pe-1'><input className="form-control form-control-sm hight-32" type="text" id="name" /></td>
                                                        <td className='ps-0 pe-0'><input className="form-control form-control-sm hight-32" type="text" id="taxNumber" /></td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                            <button className='btn btn-outline-secondry d-block text-center mt-2' style={{ border: "2px dashed #ddd" }}>+ Add Another Tax</button>

                                            <hr />
                                            <button className='btn btn-primary btn-sm me-1 clickmode' data-show=".asstexView" data-hide=".addtax">Apply Tax</button>
                                            <button className='btn btn-danger btn-sm clickmode' data-show=".addTaskBtn" data-hide=".addtax">Cancel</button>
                                        </div>
                                    </div>



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
            </div >




        </>
    )
}

export default Main
