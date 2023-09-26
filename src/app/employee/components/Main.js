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
                                <button className="btn btn-success ms-3" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-plus-circle-o-duplicate"></i> Create New</button>
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
                                    <div class="dd_none contactlist">
                                        
                                            <div class="row clearfix">
                                                <div class="col-12">
                                                    <div class="table-responsive">
                                                        <table class="table table-bordered overflow-y rwd-table btdr_none mb-0" id="sortable">
                                                            <thead class="font_b dnone-mob">
                                                                <tr class="font_btd">
                                                                    <th style={{width:"30px"}}>
                                                                        <div class="checkbox">
                                                                            <input class="all_slct" id="order" type="checkbox" />
                                                                            <label for="order" class="ps-0">&nbsp;</label>
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
                                                                <tr class="">
                                                                    <td class="">
                                                                        <div class="checkbox">
                                                                            <input class="all_slct" id="product1" type="checkbox" />
                                                                            <label for="product1" class="ps-0">&nbsp;</label>
                                                                        </div>
                                                                    </td>
                                                                    <td class="pt-3 pb-3">
                                                                        <span class="u_image float-left mr-2"><img src="images/user.png" alt="user"class="rounded" style={{width:"36px"}} /></span>
                                                                        <span class="float-left"><b class="col-blue">DMRC </b> <i
                                                                                class="zmdi zmdi-email ms-2"></i><br /> Delhi Metro Rail Corporation</span>
                                                                    </td>
                                                                    <td> Team Member</td>
                                                                    <td class="col-grey"> 04/03/2021</td>
                                                                    <td> California</td>
                                                                    <td> <span class="badge badge-success"> Active</span></td>
                                                                    <td>
                                                                        <a class="btn btn-primary btn-sm" title="Edit" data-toggle="modal"
                                                                            data-target="#addpage"> <i class="zmdi zmdi-search"></i> <span
                                                                                class="dnone-mob">View</span></a>
                                                                        <a class="btn btn-outline-primary btn-sm dropdown-toggle me-1 ms-1" type="button"
                                                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                                                                class="zmdi zmdi-edit"></i> Edit</a>
                                                                        <div class="dropdown-menu wid-240px" x-placement="top-start">
                                                                            <Link class="dropdown-item" href="/employee/myProfile"><i
                                                                                class="zmdi zmdi-account"></i> My Profile</Link>
                                                                            <Link class="dropdown-item" href="/employee/contacts"><i
                                                                                class="zmdi zmdi-account-box-mail"></i> Contacts</Link>
                                                                            <Link class="dropdown-item" href="/employee/locations"><i
                                                                                class="zmdi zmdi-pin"></i> Locations</Link>
                                                                            {/* <Link class="dropdown-item" href="/employee/teams"><i class="zmdi zmdi-check-all"></i>
                                                                            Teams</Link> */}
                                                                            <Link class="dropdown-item" href="/employee/workSchedule"><i
                                                                                class="zmdi zmdi-calendar"></i> Work Schedule</Link>
                                                                            <Link class="dropdown-item" href="/employee/absenses"><i
                                                                                class="zmdi zmdi-timer-off"></i> Absenses</Link>
                                                                            <Link class="dropdown-item" href="/employee/activity"><i
                                                                                class="zmdi zmdi-alarm"></i> Activity</Link>
                                                                            <Link class="dropdown-item" href="/employee/passwordSettings"><i
                                                                                class="zmdi zmdi-lock-open"></i> Password Settings</Link>
                                                                        </div>
                                                                        <a class="btn btn-danger btn-sm" title="Delete" type="button"> <i
                                                                                class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></a>
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
            <div class="modal md-one bsdmd" id="addpage" tabindex="-1" role="dialog" aria-labelledby="addpage" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header bg-blu-lite" style={{position:"absolute"}}>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">×</span></button>
                <h4 class="modal-title" id="myModalLabel2"> <b>Add Employee</b> </h4>
            </div>
            <div class="modal-body">
                <div class="pagediv">
                    <div class="row  m-0">
                        <div class="col-md-3 col-lg-3 itempro text-center pt-3 mb-3 bdrrgtt">
                            <div class="form-group mb-1">
                                <div class="avatar-upload">
                                    <div class="avatar-edit">
                                        <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg"
                                            disabled="disabled"/>
                                    </div>
                                    <div class="avatar-preview">
                                        <div id="imagePreview" style={{backgroundImage: "url(images/user.png)"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-group mb-2">
                                <a class="btn btn-outline-primary btn-sm"><i class="zmdi zmdi-edit"></i></a>
                                <a class="btn btn-danger btn-sm"><i class="zmdi zmdi-delete"></i></a>
                            </div>
                        </div>
                        <div class="col-md-8 col-lg-9  mt-2">
                            <div class="row">
                                <div class="col">
                                    <div class="group_lead mt-4">
                                        <input type="text" id="" class="input_text" required="required"/>
                                        <label for="" class="lablefilled"><i class="zmdi zmdi-account me-1"></i>First
                                            Name</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="group_lead mt-4">
                                        <input type="text" id="" class="input_text" required="required"/>
                                        <label for="" class="lablefilled"><i class="zmdi zmdi-account me-1"></i> Last
                                            Name</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="group_lead">
                                        <input type="text" id="" class="input_text" required="required"/>
                                        <label for="" class="lablefilled"><i
                                                class="zmdi zmdi-email me-1"></i>Email</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="group_lead">
                                        <input type="text" id="" class="input_text" required="required"/>
                                        <label for="" class="lablefilled"><i
                                                class="zmdi zmdi-smartphone-android me-1"></i>Mobile</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="group_lead">
                                <select type="text" id="Role" class="custom-select select_f" required="required">
                                    <option selected="">Type</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="group_lead">
                                <select type="text" id="Role" class="custom-select select_f" required="required">
                                    <option selected="">Role</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="group_lead">
                                <input type="text" id="" class="input_text" required="required"/>
                                <label for="" class="lablefilled"><i class="zmdi zmdi-calendar me-1"></i>Date</label>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="group_lead">
                                <input type="text" id="" class="input_text" required="required"/>
                                <label for="" class="lablefilled"><i class="zmdi zmdi-pin me-1"></i>Location</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <p class="mb-1"><b class="col-grey">Status</b></p>
                        </div>
                        <div class="col-md-6 col-12 col-sm-6 mt-0 mb-4">
                            <div class="form-check me-3">
                                <input type="radio" class="form-check-input" id="customRadio" name="example"
                                    value="customEx"style={{height:"1. rem"}}/>
                                <label class="form-check-label bold" for="customRadio">Active</label>
                            </div>
                            <div class="form-check ml-3">
                                <input type="radio" class="form-check-input" id="customRadio2" name="example"
                                    value="customEx"style={{height:"1. rem"}}/>
                                <label class="form-check-label bold" for="customRadio2"> Inactive </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-footer">
                <div class="row m-0">
                    <div class="col-md-12">
                        <div class="text-center">
                            <button class="btn btn-primary clickmode me-1"
                                data-show=".contactlist, .showthing, .nxtprv, .contactlist"
                                data-hide=".md-one, .hdbox, .Lodingbox, .modal-backdrop" type="button"> <i
                                    class="zmdi zmdi-upload"></i> Save </button>
                            <button class="btn btn-danger" type="button"><i class="zmdi zmdi-rotate-left"></i>
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
