"use client"
import Loading from '@/app/components/Loading'
import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';

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
                        <div className="booktab d-flex justify-content-between align-items-center bdrb">
                            <div className="p-2">
                                <h2 className="font-bold mb-0"><i className="zmdi zmdi-account-alt me-1"></i>Employee </h2>
                            </div>
                            <div className="pe-2 d-flex">
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
                                <button className="btn btn-success ms-3" data-bs-toggle="modal" data-bs-target="#addpage"><i className="zmdi zmdi-plus-circle-o-duplicate"></i> Create New</button>
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
                                    
                                    <div className='Lodingbox'>
                                        <Loading />
                                    </div>
                                    <div className="dd_none contactlist">
                                        
                                            <div className="row clearfix">
                                                <div className="col-12">
                                                    <div className="table-responsive">
                                                        <table className="table table-bordered overflow-y rwd-table btdr_none mb-0" id="sortable">
                                                            <thead className="font_b dnone-mob">
                                                                <tr className="font_btd">
                                                                    <th style={{width:"30px"}}>
                                                                        <div className="checkbox">
                                                                            <input className="all_slct" id="order" type="checkbox" />
                                                                            <label for="order" className="ps-0">&nbsp;</label>
                                                                        </div>
                                                                    </th>
                                                                    <th>User</th>
                                                                    <th> Role </th>
                                                                    <th> Date </th>
                                                                    <th> Location </th>
                                                                    <th> Status </th>
                                                                    <th style={{width:"180px"}}> Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className="">
                                                                    <td className="">
                                                                        <div className="checkbox">
                                                                            <input className="all_slct" id="product1" type="checkbox" />
                                                                            <label for="product1" className="ps-0">&nbsp;</label>
                                                                        </div>
                                                                    </td>
                                                                    <td className="pt-3 pb-3">
                                                                        <span className="u_image float-left mr-2"><img src="images/user.png" alt="user"className="rounded" style={{width:"36px"}} /></span>
                                                                        <span className="float-left"><b className="col-blue">DMRC </b> <i
                                                                                className="zmdi zmdi-email ms-2"></i><br /> Delhi Metro Rail Corporation</span>
                                                                    </td>
                                                                    <td> Team Member</td>
                                                                    <td className="col-grey"> 04/03/2021</td>
                                                                    <td> California</td>
                                                                    <td> <span className="badge badge-success"> Active</span></td>
                                                                    <td>
                                                                        {/* <a className="btn btn-primary btn-sm" title="Edit" data-toggle="modal"
                                                                            data-target="#addpage"> <i className="zmdi zmdi-search"></i> <span
                                                                                className="dnone-mob">View</span></a> */}
                                                                        <a className="btn btn-outline-primary btn-sm dropdown-toggle me-1 ms-1" type="button"
                                                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                                                                className="zmdi zmdi-edit"></i> Edit</a>
                                                                        <div className="dropdown-menu wid-240px" x-placement="top-start">
                                                                            <Link className="dropdown-item" href="/employee/myProfile"><i
                                                                                className="zmdi zmdi-account"></i> My Profile</Link>
                                                                            <Link className="dropdown-item" href="/employee/contacts"><i
                                                                                className="zmdi zmdi-account-box-mail"></i> Contacts</Link>
                                                                            <Link className="dropdown-item" href="/employee/locations"><i
                                                                                className="zmdi zmdi-pin"></i> Locations</Link>
                                                                            {/* <Link className="dropdown-item" href="/employee/teams"><i className="zmdi zmdi-check-all"></i>
                                                                            Teams</Link> */}
                                                                            <Link className="dropdown-item" href="/employee/workSchedule"><i
                                                                                className="zmdi zmdi-calendar"></i> Work Schedule</Link>
                                                                            <Link className="dropdown-item" href="/employee/absenses"><i
                                                                                className="zmdi zmdi-timer-off"></i> Absenses</Link>
                                                                            <Link className="dropdown-item" href="/employee/activity"><i
                                                                                className="zmdi zmdi-alarm"></i> Activity</Link>
                                                                            <Link className="dropdown-item" href="/employee/passwordSettings"><i
                                                                                className="zmdi zmdi-lock-open"></i> Password Settings</Link>
                                                                        </div>
                                                                        <a className="btn btn-danger btn-sm" title="Delete" type="button"> <i
                                                                                className="zmdi zmdi-delete"></i> <span className="dnone-mob">Delete</span></a>
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
                    </div>
                </div>
            </section>
            <div className="modal md-one bsdmd" id="addpage" tabindex="-1" role="dialog" aria-labelledby="addpage" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-blu-lite" style={{position:"absolute"}}>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                    aria-hidden="true">×</span></button>
                            <h4 className="modal-title" id="myModalLabel2"> <b>Add Employee</b> </h4>
                        </div>
                        <div className="modal-body">
                            <div className="pagediv">
                                <div className="row  m-0">
                                    <div className="col-md-3 col-lg-3 itempro text-center pt-3 mb-3 bdrrgtt">
                                        <div className="form-group mb-1">
                                            <div className="avatar-upload">
                                                <div className="avatar-edit">
                                                    <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg"
                                                        disabled="disabled"/>
                                                </div>
                                                <div className="avatar-preview">
                                                    <div id="imagePreview" style={{backgroundImage: "url(images/user.png)"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-group mb-2">
                                            <a className="btn btn-outline-primary btn-sm"><i className="zmdi zmdi-edit"></i></a>
                                            <a className="btn btn-danger btn-sm"><i className="zmdi zmdi-delete"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-lg-9  mt-2">
                                        <div className="row">
                                            <div className="col">
                                                <div className="group_lead mt-4">
                                                    <input type="text" id="" className="input_text" required="required"/>
                                                    <label for="" className="lablefilled"><i className="zmdi zmdi-account me-1"></i>First
                                                        Name</label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="group_lead mt-4">
                                                    <input type="text" id="" className="input_text" required="required"/>
                                                    <label for="" className="lablefilled"><i className="zmdi zmdi-account me-1"></i> Last
                                                        Name</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="group_lead">
                                                    <input type="text" id="" className="input_text" required="required"/>
                                                    <label for="" className="lablefilled"><i
                                                            className="zmdi zmdi-email me-1"></i>Email</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="group_lead">
                                                    <input type="text" id="" className="input_text" required="required"/>
                                                    <label for="" className="lablefilled"><i
                                                            className="zmdi zmdi-smartphone-android me-1"></i>Mobile</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="group_lead">
                                            <select type="text" id="Role" className="custom-select select_f" required="required">
                                                <option selected="">Type</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="group_lead">
                                            <select type="text" id="Role" className="custom-select select_f" required="required">
                                                <option selected="">Role</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="group_lead">
                                            <input type="text" id="" className="input_text" required="required"/>
                                            <label for="" className="lablefilled"><i className="zmdi zmdi-calendar me-1"></i>Date</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="group_lead">
                                            <input type="text" id="" className="input_text" required="required"/>
                                            <label for="" className="lablefilled"><i className="zmdi zmdi-pin me-1"></i>Location</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <p className="mb-1"><b className="col-grey">Status</b></p>
                                    </div>
                                    <div className="col-md-6 col-12 col-sm-6 mt-0 mb-4">
                                        <div className="form-check form-check-inline me-3">
                                            <input type="radio" className="form-check-input mt-2" id="customRadio" name="example"
                                                value="customEx"style={{height:"1. rem"}}/>
                                            <label className="form-check-label bold" for="customRadio">Active</label>
                                        </div>
                                        <div className="form-check form-check-inline ms-3">
                                            <input type="radio" className="form-check-input mt-2" id="customRadio2" name="example"
                                                value="customEx"style={{height:"1. rem"}}/>
                                            <label className="form-check-label bold" for="customRadio2"> Inactive </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="model-footer">
                            <div className="row m-0">
                                <div className="col-md-12">
                                    <div className="text-center">
                                        <button className="btn btn-primary clickmode me-1"
                                            data-show=".contactlist, .showthing, .nxtprv, .contactlist"
                                            data-hide=".md-one, .hdbox, .Lodingbox, .modal-backdrop" type="button"> <i
                                                className="zmdi zmdi-upload"></i> Save </button>
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
