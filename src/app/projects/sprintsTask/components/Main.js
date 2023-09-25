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
                                <h2 className="font-bold mb-0"><i class="zmdi zmdi-widgets me-1"></i> Projects Overview </h2>
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
                                                    <div className="media-body ptag">
                                                        <div className="row">

                                                            <div className="col-lg-4">
                                                                <div className="avatar-upload float-left mar_max">
                                                                    <div className="avatar-preview">
                                                                        <div id="imagePreview"
                                                                            style={{backgroundImage: "url(images/user.png)"}}></div>
                                                                    </div>
                                                                </div>
                                                                <div className="float-left">
                                                                    <h5> Andrew Filntuff
                                                                    </h5>
                                                                    <p className="mb-1">
                                                                        <span className="wd-12px">Project Name</span>
                                                                        <span>:</span>
                                                                        <span id=""> Home Care Services</span>
                                                                    </p>

                                                                    <p className="mb-1">
                                                                        <span className="wd-12px">Project Group </span>
                                                                        <span>:</span>
                                                                        <span id="">Ungrouped Projects</span>
                                                                    </p>
                                                                    <p className="mb-1">
                                                                        <span className="wd-12px">Team Role</span>
                                                                        <span>:</span>
                                                                        <span id="">Admin</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <p className="mb-1 mt-3">
                                                                    <span className="wd-12px"> Estimate Value</span> <span>:</span>
                                                                    <span><b>$25 - 35/hrs</b></span>
                                                                </p>
                                                                <p className="mb-1">
                                                                    <span className="wd-12px"> Priority </span> <span>:</span>
                                                                    <span className="">--- </span>
                                                                </p>

                                                                <p className="mb-1">
                                                                    <span className="wd-12px">Contract Dates</span>
                                                                    <span>:</span>
                                                                    <span id="">25-07-2020 to 25-08-2020</span>
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <span className="float-right mt-3">
                                                                    <a href="#" className="btn btn btn-primary m-1"><i
                                                                            className="zmdi zmdi-email-open"></i> <span
                                                                            className="d-none_small">Send Email</span></a>
                                                                    <a href="#" className="btn btn btn-primary m-1"><i className="zmdi zmdi-phone"></i>
                                                                        <span className="d-none_small"> Call</span></a>
                                                                    <a href="#" className="btn btn btn-primary m-1"><i
                                                                            className="zmdi zmdi-favorite-outline"></i> <span
                                                                            className="d-none_small">Save</span></a>

                                                                    <div className="btn-group m-1">
                                                                        <button className="btn btn-primary  dropdown-toggle" type="button"
                                                                            data-toggle="dropdown" aria-haspopup="true"
                                                                            aria-expanded="true"><i className="zmdi zmdi-alert-polygon"></i>
                                                                            <span className="d-none_small"> Status</span></button>
                                                                        <div className="dropdown-menu">
                                                                            <a className="dropdown-item" href="javascript:void(0);"
                                                                                data-toggle="modal" data-target="#fristattempt">1st
                                                                                attempt</a>
                                                                            <a className="dropdown-item" href="javascript:void(0);"
                                                                                data-toggle="modal" data-target="#fristattempt"> 2nd
                                                                                attempt</a>
                                                                            <a className="dropdown-item" href="javascript:void(0);"
                                                                                data-toggle="modal" data-target="#fristattempt">3rd
                                                                                attempt</a>
                                                                            <a className="dropdown-item" href="javascript:void(0);"
                                                                                data-toggle="modal" data-target="#fristattempt">4th
                                                                                attempt</a>
                                                                            <a className="dropdown-item" href="javascript:void(0);"
                                                                                data-toggle="modal"
                                                                                data-target="#fristattempt">Interested</a>
                                                                            <a className="dropdown-item" href="javascript:void(0);"
                                                                                data-toggle="modal" data-target="#fristattempt">Very
                                                                                Interested</a>
                                                                            <a className="dropdown-item" href="javascript:void(0);"
                                                                                data-toggle="modal" data-target="#fristattempt">Call
                                                                                Later</a>
                                                                            <a className="dropdown-item" href="javascript:void(0);"
                                                                                data-toggle="modal" data-target="#fristattempt">Not
                                                                                Interested</a>
                                                                            <a className="dropdown-item" href="javascript:void(0);"
                                                                                data-toggle="modal" data-target="#fristattempt">Fake
                                                                                Lead</a>
                                                                        </div>
                                                                    </div>
                                                                    <a href="#" className="btn btn btn-outline-primary m-1" data-toggle="modal"
                                                                        data-target="#convert"><i className="zmdi zmdi-swap"></i> <span
                                                                            className="d-none_small"><b>Convert</b> </span></a>
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
                                                            <div className="bdr1 h4show taskboard">
                                                                <div className="dd">
                                                                    <ol className="dd-list row" Style={{display:"flex"}}>

                                                                        <li className="dd-item col-lg-12 mt-2 mb-0">
                                                                            <div
                                                                                className="dd-handle d-flex justify-content-between align-items-center pt-2 pb-2">
                                                                                <div className="h6 mb-2 mt-2 text-blue">

                                                                                    <i className="zmdi zmdi-folder"></i> <b>Project Sprint /
                                                                                        Milestones</b>
                                                                                </div>
                                                                            </div>
                                                                            <div className="dd-content p-1">
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
                                                                                                        className="zmdi zmdi-collection-pdf mr-1"></i>usd.pdf
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
                                                                                                        className="zmdi zmdi-collection-pdf mr-1"></i>usd.pdf
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
                                                                                                        className="zmdi zmdi-collection-pdf mr-1"></i>usd.pdf
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
                                                                                                        className="zmdi zmdi-collection-pdf mr-1"></i>usd.pdf
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>

                                                                        </li>
                                                                        <li className="dd-item col-lg-12 mt-2 mb-0">
                                                                            <div
                                                                                className="dd-handle d-flex justify-content-between align-items-center pt-2 pb-2">
                                                                                <div className="h6 mb-2 mt-2 text-blue">

                                                                                    <i className="zmdi zmdi-folder"></i> <b>Project backlog
                                                                                        items</b>
                                                                                </div>
                                                                            </div>
                                                                            <div className="dd-content p-1">
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

                                                                        </li>
                                                                    </ol>
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
                   
                </div>
            </section>

          
        </>
    )
}

export default Main
