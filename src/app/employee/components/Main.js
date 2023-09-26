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
                            <div className="pe-2">
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
                                <a href="#" className="btn btn-success ms-1" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-plus-circle-o-duplicate"></i> Create New</a>
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
                                                <h2 className="font-bold"><i className="zmdi zmdi-accounts-list-alt mr-1"></i> All Employee </h2>
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div className='Lodingbox'>
                                        <Loading />
                                    </div>
                                    <div class="dnnone contactlist">
                                        
                                            <div class="row clearfix mt-3">
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
                                                                        <a class="btn btn-outline-primary btn-sm dropdown-toggle" type="button"
                                                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                                                                class="zmdi zmdi-edit"></i> Edit</a>
                                                                        <div class="dropdown-menu wid-240px" x-placement="top-start">
                                                                            <Link class="dropdown-item" href="/emplyee/profile"><i
                                                                                class="zmdi zmdi-account"></i> My Profile</Link>
                                                                            <Link class="dropdown-item" href="/emplyee/contacts"><i
                                                                                class="zmdi zmdi-account-box-mail"></i> Contacts</Link>
                                                                            <Link class="dropdown-item" href="/emplyee/locations"><i
                                                                                class="zmdi zmdi-pin"></i> Locations</Link>
                                                                            <Link class="dropdown-item" href="vterms"><i class="zmdi zmdi-check-all"></i>
                                                                            Terms</Link>
                                                                            <Link class="dropdown-item" href="/emplyee/workSchedule"><i
                                                                                class="zmdi zmdi-calendar"></i> Work Schedule</Link>
                                                                            <Link class="dropdown-item" href="/emplyee/absenses"><i
                                                                                class="zmdi zmdi-timer-off"></i> Absenses</Link>
                                                                            <Link class="dropdown-item" href="/emplyee/activity"><i
                                                                                class="zmdi zmdi-alarm"></i> Activity</Link>
                                                                            <Link class="dropdown-item" href="/emplyee/Passwordsettings"><i
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
          




        </>
    )
}

export default Main
