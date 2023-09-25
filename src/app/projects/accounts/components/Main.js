"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import LeftSidebar from '../../components/LeftSidebar';
function Main() {
   


    return (
        <>
            <section className="content">
                <div className="body_scroll">
                    <div className="scrolfx">
                        <div className="booktab d-flex justify-content-between align-items-center bdrb">
                            <div className="p-2">
                                <h2 className="font-bold mb-0"><i class="zmdi zmdi-accounts me-1"></i> Accounts </h2>
                            </div>
                            <div className="pe-2">
                            <a href="javascript:void(0);" className="btn btn-success" data-toggle="modal" data-target="#add"><i className="zmdi zmdi-plus-circle-o-duplicate"></i>  Create Account</a>
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
                    <div className="contactlist scroll_bar">
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="col-12 d-flex ps-0 pe-0 project">
                                    <div className="mobile-left">
                                        <a className="btn btn-info btn-icon toggle-email-nav collapsed" data-toggle="collapse" href="#email-nav"
                                            role="button" aria-expanded="false" aria-controls="email-nav">
                                            <span className="btn-label"><i className="zmdi zmdi-more"></i></span>
                                        </a>
                                    </div>
                                    <div className="inbox left pe-0 pt-3" id="email-nav">
                                        <div className="mail-side">
                                        <LeftSidebar/>
                                        </div>
                                    </div>
                                    <div className="inbox right">
                                        <div className="row">
                                            <div class="col-12">
                                                <div class="table-responsive mt-2">
                                                    <table class="table table-bordered overflow-y rwd-table btdr_none mb-0" id="sortable">
                                                        <thead class="font_b dnone-mob">
                                                            <tr class="font_btd">
                                                                <th style={{width:"30px"}}>#</th>
                                                                <th>URL</th>
                                                                <th>Login</th>
                                                                <th>Password</th>
                                                                <th>Last Created</th>
                                                                <th class="Status"></th>
                                                                <th style={{width:"180px"}}>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="">
                                                                <td class="">1</td>
                                                                <td class="col-black">https://www.google.com/</td>
                                                                <td class="pt-3 pb-3"><a href="mailto:someone@example.com?Subject=Hello%20again"
                                                                        target="_top">someone**@g**.com</a></td>
                                                                <td>********<a class="btn btn-outline-info btn-sm ms-2"><i class="zmdi zmdi-eye me-1"></i></a></td>
                                                                <td class="col-grey">04/03/2021</td>
                                                                <td class="col-grey"><span class="badge badge-success"><i
                                                                            class="zmdi zmdi-check-all me-1"></i>Done</span></td>
                                                                <td><a class="btn btn-primary btn-sm" data-toggle="modal" data-target="#addpage"><i
                                                                            class="zmdi zmdi-search"></i><span class="dnone-mob">View</span></a><a
                                                                        class="btn btn-outline-primary btn-sm  ms-1 me-1"><i class="zmdi zmdi-edit"></i>Edit</a><a
                                                                        class="btn btn-danger btn-sm" title="Delete" type="button"><i
                                                                            class="zmdi zmdi-delete"></i><span class="dnone-mob">Delete</span></a></td>
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">1</td>
                                                                <td class="col-black">https://www.google.com/</td>
                                                                <td class="pt-3 pb-3"><a href="mailto:someone@example.com?Subject=Hello%20again"
                                                                        target="_top">someone**@g**.com</a></td>
                                                                <td>********<a class="btn btn-outline-info btn-sm ms-2"><i class="zmdi zmdi-eye me-1"></i></a></td>
                                                                <td class="col-grey">04/03/2021</td>
                                                                <td class="col-grey"><span class="badge badge-warning"><i
                                                                            class="zmdi zmdi-alert-octagon me-1"></i>Pending</span></td>
                                                                <td><a class="btn btn-primary btn-sm" data-toggle="modal" data-target="#addpage"><i
                                                                            class="zmdi zmdi-search"></i><span class="dnone-mob">View</span></a><a
                                                                        class="btn btn-outline-primary btn-sm ms-1 me-1"><i class="zmdi zmdi-edit"></i>Edit</a><a
                                                                        class="btn btn-danger btn-sm" title="Delete" type="button"><i
                                                                            class="zmdi zmdi-delete"></i><span class="dnone-mob">Delete</span></a></td>
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
