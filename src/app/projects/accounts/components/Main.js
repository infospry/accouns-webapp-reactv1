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
                            <a href="javascript:void(0);" className="btn btn-success"  data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-plus-circle-o-duplicate"></i>  Create Account</a>
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
                                                                <th style={{width:"24px"}}></th>
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
                                                                <td><div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target="#preview"><i className="zmdi zmdi-search me-1"></i>View</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div></td>
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
                                                                <td><div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target="#preview"><i className="zmdi zmdi-search me-1"></i>View</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div></td>
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
            <div class="modal right_one_thrd md-one" id="addpage" tabindex="-1" role="dialog" aria-labelledby="shortModal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-blu-lite">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 class="modal-title" id="myModalLabel2">
                                <b> <i class="zmdi zmdi-plus-circle-o-duplicate"></i> Add Accounts</b>
                            </h4>
                        </div>
                        <div class="modal-body pe-0 ps-0 pb-0 contbody">
                            <div class="pagediv p-0 pt-0" style={{minHeight:"450px"}}>
                                <table class="table table-bordered" id="editableTable">
                                    <thead>
                                        <tr>
                                            <th style={{width:"40px"}}>1</th>
                                            <th>Account Name</th>
                                            <th><select class="form-control">
                                                    <option>Category</option>
                                                </select> </th>
                                            <th>login</th>
                                            <th>password </th>
                                            <th>Description</th>
                                            <th> <button class="btn btn-primary float-right add-row"><i
                                                        class="zmdi zmdi-plus me-2"></i>Add Row</button></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{width:"24px"}}><input type='text' style={{width:"24px"}}/></td>
                                            <td><input type='url'/></td>
                                            <td><select name=''>
                                                    <option>Category</option>
                                                </select></td>
                                            <td><input type='email'/></td>
                                            <td><input type='Password'/></td>
                                            <td><input type='text'/></td>
                                            <td style={{width:"96px"}}><a class='btn btn-sm btn-outline-primary edit'
                                                    title='Edit'><i class='zmdi zmdi-save'></i></a> <a
                                                    class='btn btn-sm btn-danger' title='Delete'><i
                                                        class='zmdi zmdi-delete'></i></a></td>
                                        </tr>
                                        <tr>
                                            <td style={{width:"24px"}}>1</td>
                                            <td>https://www.google.com/</td>
                                            <td>-</td>
                                            <td>someone**@g**.com</td>
                                            <td>******</td>
                                            <td>Sorry. We’re having trouble</td>
                                            <td style={{width:"40px"}}>
                                                <a class="btn btn-sm btn-outline-primary edit" title="Edit"><i
                                                        class="zmdi zmdi-edit"></i></a> <a class="btn btn-sm btn-danger" title="Delete"><i
                                                        class="zmdi zmdi-delete"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="model-footer">
                            <div class="row m-0">
                                <div class="col-md-12">
                                    <div class="text-center">
                                        <button class="btn btn-primary btn-lg clickmode" data-hide=".md-one, .modal-backdrop"
                                            type="button"> <i class="zmdi zmdi-upload"></i> Save </button>
                                        <button class="btn btn-danger btn-lg" type="button"><i class="zmdi zmdi-rotate-left"></i>
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
