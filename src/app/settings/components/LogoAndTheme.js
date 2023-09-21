import React from 'react'
import Image from 'next/image'


function LogoAndTheme() {
    const customStyles = {
        borderLeft: '1px solid rgb(221, 221, 221)',
        height: '100vh',
        };
  return (
    <>
    
    <div className="row">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-9 ">


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
                                        <label className="col-grey font-16">Billed To</label>
                                        <input className="form-control none_border" placeholder="text Client" />
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <label className="col-grey font-16">Date of Issue</label>
                                        <input className="form-control none_border" placeholder="DD/MM/YYYY" />
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <label className="col-grey font-16">Invoice Number</label>
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
                                    <div className="col-6 col-md-3">
                                        <label className="col-grey font-16">Due Date</label>
                                        <input className="form-control none_border" placeholder="DD/MM/YYYY" />
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <label className="col-grey font-16">Reference</label>
                                        <input className="form-control none_border" placeholder="eg. PO#00" />
                                    </div>
                                    <div className="col-6 col-md-3 text-end">

                                    </div>
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
                                        <td>Web Design</td>
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
                                    <div class="col-sm-12 col-md-6 col-lg-6">    
                                        <div class="form-floating">
                                            <textarea class="form-control none_border" placeholder="Customer Footnote (0/250)"style={{height:"100px"}} id="floatingTextarea2"></textarea>
                                            <label for="floatingTextarea2">Customer Footnote (0/250)</label>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            {/* ::::::: */}






                        </div>

                        <div className="col-12 col-sm-12 col-md-4 col-lg-3" style={customStyles}>
                            <h4 className="mt-0 mb-0">Logo & Theme </h4>
                            <span className="font-14 col-grey"><b>For the Invoice</b></span>
                            <hr className='mt-2 mb-2' />
                           
                            <a href="javascript:void(0);"
                                className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2 clickmode">
                                <div>
                                    <p className="m-0 font-14"><b><i className="zmdi zmdi-aspect-ratio me-1"></i>
                                            Customize Invoice Style </b></p>
                                    <p className="col-grey m-0 font-14">Change Templets, Color </p>
                                </div>
                            </a>
                           
                            <hr className='mt-3 mb-3' />

                            <div className="tradelogo">
                                        <label for="et_pb_contact_brand_file_request_0"
                                            className="et_pb_contact_form_label">Enter</label>
                                        <input type="file" id="et_pb_contact_brand_file_request_0"
                                            className="file-upload" />
                                    </div>
                            
                        </div>
                    </div>
    </>
  )
}

export default LogoAndTheme
