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
                                <h2 className="font-bold mb-0">Items & Services </h2>
                            </div>
                            <div className="input-group" style={{ maxWidth: '300px' }}>
                                <input type="text" className="form-control radius_all" aria-label="Text input with dropdown button" placeholder='Search...' />
                            </div>
                            <div className="pe-2">
                                <a href="javascript:void(0);" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addteam"><i className="zmdi zmdi-plus-circle-o-duplicate"></i>  Add New Item</a>
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
                                                        <th>Name / Description</th>
                                                        <th>Income Account</th>
                                                        <th>Current Stock</th>
                                                        <th className='txtRgt' style={{ width: '120px' }}>Rate / Taxes</th>
                                                        <th style={{width:"20px"}}></th> 
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
                                                            <a href='javascript:void(0);' className='d-flex justify-content-start align-items-center' data-bs-toggle="modal" data-target="#addpage">
                                                                <div className='shortTitle me-2'>WD</div>
                                                                <div className='mt-2' style={{ lineHeight: "14px" }}>
                                                                    <span className="font-weight-bold"> Web design</span><br />
                                                                    <span className="col-grey font-13">------ </span>
                                                                </div>
                                                            </a>
                                                        </td>
                                                        <td className="dnone-mob">
                                                            Sales <br/>
                                                            <span className="col-blue font-13"><i className="zmdi zmdi-receipt me-1"></i>Revenue</span>
                                                        </td>
                                                        <td>
                                                            -
                                                        </td>
                                                        <td className='txtRgt'>
                                                        <b>£20.00</b>
                                                        </td>
                                                        <td><div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addpage"><i className="zmdi zmdi-search me-1"></i>View</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addteam"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                        </td>    
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="modal right-quater md-one" id="addteam" tabindex="-1" role="dialog" aria-labelledby="shortModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ height: "auto!important" }}>
                        <div className="modal-header bg-blu-lite fixed-top">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <h4 className="modal-title" id="myModalLabel2">
                                <b> <i className="zmdi zmdi-plus-circle-o-duplicate"></i> Add Items</b>
                            </h4>
                        </div>
                        <div className="modal-body pr-0 pl-0 pb-0 contbody">
                            <div className="row m-0 mt-4">
                                <div className="col-12">
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="floatingInput" placeholder="First Name" type="text" />
                                        <label for="floatingInput"> Name<span className="red">*</span></label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating mb-3">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                        <label for="floatingInput">Description</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating mb-3">
                                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                            <option selected>Sales</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                            <label for="floatingInput">Income Account</label>
                                    </div>
                                </div>   
                                <div className="col-6 col-md-6">
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="floatingInput" placeholder="First Name" type="text" />
                                        <label for="floatingInput"> Rate<span className="red">*</span></label>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="form-floating mb-3">
                                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                        <option selected>Add Tax</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <label for="floatingInput">Add Taxes</label>
                                    </div>
                                </div>
                                <p className="mb-2 mt-2"><b>Inventory</b></p>
                                <div className="checkbox">
                                    <input id="Invite" type="checkbox" />
                                    <label for="Invite" className="pl-0">
                                        Track Inventory<br/>
                                        <span className="col-grey" style={{fontWeight:"normal"}}>
                                            Track your current stock. When you invoice for an item your inventory will decrease. When you receive more, you can update your inventory here.
                                        </span>

                                    </label>
                                </div>
                                    
                            </div>
                        </div>
                        <div className="model-footer">
                            <div className="text-center">
                                <button className="btn btn-primary clickmode me-1" data-show=".contactlist" data-hide=".md-one, .Lodingbox, .modal-backdrop"> <i className="zmdi zmdi-upload"></i> Save </button>
                                <button className="btn btn-danger" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal right-half md-one" id="addpage" tabindex="-1" role="dialog" aria-labelledby="shortModal">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-blu-lite fixed-top">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>                            
                            <h4 className="modal-title" id="myModalLabel2">
                                <b> Test Member</b>
                            </h4>
                        </div>
                        <div className="modal-body ps-0 pe-0 pb-0 contbody">
                            <div className="row m-0">
                                <div className="col-12 col-sm-12 col-md-7 col-lg-8 p-0">

                                    <div className="p-4 text-center" style={{background:"#f2f2fa"}}>
                                        <div className="proTitle">BS</div>
                                        <h2 className="font-weight-bold mt-2 mb-2"> Ben Stocks</h2>                                 
                                    </div> 

                                    <div className="p-4 font-h4">          
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-phone col-grey"></i> Mobile</h4>                                        
                                                <p className="mb-3"> <span className="col-black">01234567890 <small className="col-green"> <i className="zmdi zmdi-check-all"> </i> Verified</small></span> </p>
                                            </div>
                                            <a href="javascript:void(0);" className="pointer"data-bs-toggle="modal" data-bs-target="#editpage"><i className="zmdi zmdi-edit"></i>  Edit</a>
                                        </div>      

                                        <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-email-open col-grey"></i> Email Address</h4>
                                        <p className="mb-3"> <span className="col-black">solutions.topicccano@gmail.com</span> </p>
                                    
                                        <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-pin col-grey"></i> Address </h4>
                                        <p className="mb-3"> <span className="col-black">445 Mount Eden Road Mount Eden, Auckland b841213</span> </p>
                                    
                                        <div className="media border p-0 mb-0 mt-2" style={{ borderRadius: ".25rem" }}>
                                            <div className="media-body ptag d-block p-3">
                                                <h4>Role and Permission</h4>
                                                <p className="mb-1 mt-1">
                                                    Invite your Team Members as an Admin, Employee, Contractor or Accountant to collaborate and work together on your bussiness.
                                                    <a href='/'>Learn about Permissions</a>
                                                </p>
                                                <button className='btn btn-success btn-sm mt-2 MB-2'>Invite</button>
                                            </div>
                                        </div>
                                    </div>


                                   
                                   
                                </div>
                                <div className="col-12 col-sm-12 col-md-5 col-lg-4" style={customStyles}>
                                    <h4 className="mt-4 mb-0">Team Member Settings</h4>
                                    <hr className='mt-2 mb-2' />
                                    <a href="javascript:void(0);" className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2 clickmode">
                                        <div>
                                            <p className="m-0 font-14"><b><i className="zmdi zmdi-alarm"></i> Set Billable Rate   </b></p>
                                            <p className="col-grey m-0 font-14">Set hourly rates for tracked time</p>
                                        </div>
                                    </a><hr className='mt-2 mb-2' />
                                    <a href="javascript:void(0);" className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2 clickmode">
                                        <div>
                                            <p className="m-0 font-14"><b><i className="zmdi zmdi-info"></i> Ser Cost Rate   </b></p>
                                            <p className="col-grey m-0 font-14">How much you pay your team members for the work they do</p>
                                        </div>
                                    </a><hr className='mt-2 mb-2' />
                                    <a href="javascript:void(0);" className="invwhite d-flex justify-content-between align-items-center pe-0 ps-2 pt-2 pb-2 clickmode">
                                        <div>
                                            <p className="m-0 font-14"><b><i className="zmdi zmdi-alarm"></i> Set Capacity   </b></p>
                                            <p className="col-grey m-0 font-14">40:00 hr/week</p>
                                        </div>
                                    </a><hr className='mt-2 mb-2' />


                                </div>
                            </div>
                        </div>
                        <div className="model-footer">
                            <div className="row m-0">
                                <div className="col-md-12">
                                    <div className="text-center">
                                    <a href="javascript:void(0);" className="pointer btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editpage"><i className="zmdi zmdi-edit"></i>  Edit</a>
                                        {/* <button className="btn btn-primary me-1 clickmode" data-show=".contactlist" data-hide=".md-one, .Lodingbox, .modal-backdrop" type="button"> <i className="zmdi zmdi-upload"></i> Save </button> */}
                                        <button className="btn btn-danger" type="button"><i className="zmdi zmdi-rotate-left"></i>
                                            Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className="modal right-half md-one" id="editpage" tabindex="-1" role="dialog" aria-labelledby="shortModal">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-blu-lite fixed-top">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
                            <h4 className="modal-title" id="myModalLabel2">
                                <b> Test Member</b>
                            </h4>
                        </div>
                        <div className="modal-body pr-0 pl-0 pb-0 contbody">
                       
                            <div className="row m-0 mt-4">
                                <div className='col-12'>
                                    <h4><i className='zmdi zmdi-info me-1'></i>Basic Details</h4>
                                    <hr/>
                                </div>
                            <div className="col-6 col-md-4">
        <div className="form-floating mb-3"><input className="form-control" id="floatingInput" placeholder="First Name"
                type="text"/><label for="floatingInput">First Name<span className="red">*</span></label></div>
    </div>
    <div className="col-6 col-md-4">
        <div className="form-floating mb-3"><input className="form-control" id="floatingInput" placeholder="Middle Name"
                type="text"/><label for="floatingInput">Middle Name<span className="red">*</span></label></div>
    </div>  
    <div className="col-6 col-md-4">
        <div className="form-floating mb-3"><input className="form-control" id="floatingInput" placeholder="Last Name"
                type="text"/><label for="floatingInput">Last Name<span className="red">*</span></label></div>
    </div>   
    <div className="col-12 col-md-6">
        <div className="form-floating mb-3"><input className="form-control" id="floatingInput" placeholder="Email Address"
                type="email"/><label for="floatingInput">Email Address</label></div>
    </div> 
    <div className="col-12 col-md-6">
        <div className="form-floating mb-3"><input className="form-control" id="floatingInput" placeholder="Phone"
                type="text"/><label for="floatingInput">Phone</label></div>
    </div>
    <div className="col-12 col-md-6">
        <div className="form-floating mb-3"><input className="form-control" id="floatingInput" placeholder="Title"
                type="text"/><label for="floatingInput">Job Title</label></div>
    </div>   

    <div className='col-12 mt-4'>
                                    <h4><i className='zmdi zmdi-pin me-1'></i>Home Address Details</h4>
                                    <hr/>
                                </div>
                                <div className="col-12">
    <div className="row">
        <div className="col-12 col-md-6">
            <div className="form-floating mb-3"><input className="form-control" placeholder="Address Line 2" type="text"
                    value=""/><label for="floatingInput">Address Line 2</label></div>
        </div>
        <div className="col-12 col-md-6">
            
            <div className="form-floating mb-3"><input className="form-control" placeholder="Address Line 2" type="text"
                    value=""/><label for="floatingInput">Address Line 2</label></div>
        </div>
        <div className="col-12 col-md-6">
            <div className="form-floating mb-3"><input className="form-control" placeholder="Country" type="text"
                    value=""/><label for="floatingInput">Country</label></div>
        </div>
        <div className="col-12 col-md-6">
            <div className="form-floating mb-3"><input className="form-control" placeholder="Post Town" type="text"
                    value=""/><label for="floatingInput">Post Town</label></div>
        </div>
        <div className="col-12 col-md-6">
            <div className="form-floating mb-3"><input className="form-control" placeholder="Post Town" type="text"
                    value=""/><label for="floatingInput">Postcode</label></div>
        </div>
    </div>
    <hr/>
  <button className="btn btn-outline-primary mb-3"> + Add Address</button>
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
