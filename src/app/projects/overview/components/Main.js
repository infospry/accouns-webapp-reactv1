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
                                <h2 className="font-bold mb-0"><i className="zmdi zmdi-widgets me-1"></i> Projects Overview </h2>
                            </div>
                            <div className="pe-2">
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
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 bg-white">
                                                <div className="media border p-4 mb-2 mt-2">
                                                    <div className="media-body ptag font-h4">
                                                        <div className="row">

                                                            <div className="col-lg-4">
                                                                <div className="avatar-upload float-left mar_max">
                                                                    <div className="avatar-preview">
                                                                        <div id="imagePreview"
                                                                            style={{backgroundImage: "url(images/user.png)"}}></div>
                                                                    </div>
                                                                </div>
                                                                <div className="float-left">
                                                                    <h5 className="pb-2"> Andrew Filntuff </h5>
                                                                    <h4 className="col-grey m-0 p-0"> Project Name</h4>
                                                                    <p className="mb-2"> <span className="col-black">Home Care Services </span> </p>
                                                                    <h4 className="col-grey m-0 p-0"> Project Gropu</h4>
                                                                    <p className="mb-2"> <span className="col-black">Ungrouped Projects</span> </p>
                                                                                                                                    
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 pt-4">
                                                                    <h4 className="col-grey m-0 p-0"> Team Role</h4>
                                                                    <p className="mb-2"> <span className="col-black">Admin</span> </p>    
                                                                    <h4 className="col-grey m-0 p-0"> Estimate Value</h4>
                                                                    <p className="mb-2"> <span className="col-black"><b>$25 - 35/hrs</b> </span> </p>
                                                                      
                                                               
                                                            </div>
                                                            <div className="col-lg-3 pt-4">
                                                                    <h4 className="col-grey m-0 p-0"> Priority</h4>
                                                                    <p className="mb-2"> <span className="col-black">---</span> </p>
                                                                    <h4 className="col-grey m-0 p-0"> Contract Dates</h4>
                                                                    <p className="mb-2"> <span className="col-black">25-07-2020 to 25-08-2020</span> </p> 
                                                            </div>
                                                            <div className="col-lg-2 text-end">
                                                                <span className="float-right mt-3">
                                                                    <a href="#" className="btn btn btn-primary m-1"><i
                                                                            className="zmdi zmdi-email-open"></i> <span
                                                                            className="d-none_small">Send Email</span></a>
                                                                    <a href="#" className="btn btn btn-primary m-1"><i className="zmdi zmdi-phone"></i>
                                                                        <span className="d-none_small"> Call</span></a>                                                                   
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-3">
                                                    <div className="alert alert-danger mb-0" role="alert">
                                                        <i className="zmdi zmdi-info"></i> Type the name of your service to start searching out
                                                        thousands of available services.
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-sm-12">
                                                        <div className="bxsaddow wd100">
                                                        <div className="h6 mb-1  font-17 mt-2 text-blue">
                                                                                    <i className="zmdi zmdi-folder ps-2"></i> <b>Project Sprint /
                                                                                        Milestones</b>
                                                                                </div>
                                                                                <div className="table-responsive">
                                                                                    <table className="table table-bordered">
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th className="pt-2 pb-2">#</th>
                                                                                                <th>Name</th>
                                                                                                <th>Start Date</th>
                                                                                                <th>End Date</th>
                                                                                                <th>Description</th>
                                                                                                <th>Files</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td className="pt-3 pb-3">1</td>
                                                                                                <td className="col-black bold">Home Care Service
                                                                                                </td>
                                                                                                <td className="col-grey">May 25, 2021</td>
                                                                                                <td className="col-grey">June/25/2021</td>
                                                                                                <td>Sorry. We’re having trouble getting your
                                                                                                    pages back</td>
                                                                                                <td className="col-blue"><i
                                                                                                        className="zmdi zmdi-collection-pdf me-1"></i>usd.pdf
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="pt-3 pb-3">2</td>
                                                                                                <td className="col-black bold">Label text Here
                                                                                                </td>
                                                                                                <td className="col-grey">May 25, 2021</td>
                                                                                                <td className="col-grey">June/25/2021</td>
                                                                                                <td>Sorry. We’re having trouble getting your
                                                                                                    pages back</td>
                                                                                                <td className="col-blue"><i
                                                                                                        className="zmdi zmdi-collection-pdf me-1"></i>usd.pdf
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="pt-3 pb-3">3</td>
                                                                                                <td className="col-black bold">Rroublehalyna
                                                                                                    Nadia</td>
                                                                                                <td className="col-grey">May 25, 2021</td>
                                                                                                <td className="col-grey">June/25/2021</td>
                                                                                                <td>Sorry. We’re having trouble getting your
                                                                                                    pages back</td>
                                                                                                <td className="col-blue"><i
                                                                                                        className="zmdi zmdi-collection-pdf me-1"></i>usd.pdf
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="pt-3 pb-3">4</td>
                                                                                                <td className="col-black bold">Halyna Nadia</td>
                                                                                                <td className="col-grey">May 25, 2021</td>
                                                                                                <td className="col-grey">June/25/2021</td>
                                                                                                <td>Sorry. We’re having trouble getting your
                                                                                                    pages back</td>
                                                                                                <td className="col-blue"><i
                                                                                                        className="zmdi zmdi-collection-pdf me-1"></i>usd.pdf
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                                <div className="h6 font-17 mb-1 mt-3 text-blue">
                                                                                <i className="zmdi zmdi-folder ps-2"></i> <b>Project backlog
                                                                                    items</b>
                                                                                </div>
                                                                                <div className="table-responsive">
                                                                                    <table className="table table-bordered">
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th className="pt-2 pb-2">#</th>
                                                                                                <th>Milestone</th>
                                                                                                <th>User</th>
                                                                                                <th>Due Date</th>

                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td className="pt-3 pb-3">1</td>
                                                                                                <td className="col-black ">-</td>
                                                                                                <td className="col-black bold">Andrew Fillintuff
                                                                                                </td>
                                                                                                <td className="col-grey">June/25/2021</td>
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
                        </div>
                    </div>
                   
                </div>
            </section>

          
        </>
    )
}

export default Main
