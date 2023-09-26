"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import LeftSidebar from '../../components/LeftSidebar';

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
                                <h2 className="font-bold mb-0"><i className="zmdi zmdi-account-alt me-1"></i>Contacts </h2>
                            </div>
                            <div className="pe-2 d-flex">
                                                            
                            </div>
                        </div>
                    </div>
                    {/* <<<<<<<<<<<< */}
                    <div class=" contactlist scroll_bar">
                        <div class="container-fluid">
                            <div class="row clearfix">
                                <div class="col-12 p-0">                        
                                    <div class="d-flex">
                                        <div class="mobile-left">
                                            <a class="btn btn-info btn-icon toggle-email-nav collapsed" data-toggle="collapse" href="#email-nav" role="button" aria-expanded="false" aria-controls="email-nav">
                                                <span class="btn-label"><i class="zmdi zmdi-more"></i></span>
                                            </a>
                                        </div>
                                        <div class="inbox left pe-0 me-0 lftfxd" id="email-nav">                                        
                                            <div class="mail-side"> 
                                            <LeftSidebar/>                                       
                                            </div>
                                        </div>                               
                                        
                                        
                                    </div>
                                    <div class="inbox right rgtinbox  htg_auto">
                            <div class="row">
                                <div class="col-md-10 offset-md-1 pro mt-3">
                                    <div class="text-center">
                                        <br/>
                                        <br/>
                                        <h2>
                                            <b>Hours of work, Probation & Employment details. </b>
                                        </h2>
                                        <p class="col-grey">
                                            Create and manage your contacts, all in one place.</p>
                                        <button class="btn btn-primary btn-lg addcontact mt-3 mb-3 font-16">
                                            <b> Create New Contact</b></button><br/>
                                        <small><a href="#">Click here </a>to import Contact from file</small>
                                        <br/>
                                        <br/>
                                    </div>
                                    <div class="panel-group" id="accordion_1" role="tablist" aria-multiselectable="true">
                                        <div class="panel panel-primary bdr">
                                            <div class="panel-heading" role="tab" id="headingOne_2">
                                                <h4 class="panel-title">
                                                    <a role="button" data-toggle="collapse" data-parent="#accordion_1" href="#collapseOne_2"
                                                        aria-expanded="false" aria-controls="collapseOne_2" class="collapsed text-left">
                                                        <span class="col-blue text-left">
                                                            <b> 1. Basu deo </b> </span>
                                                        <span class="float-right col-blue me-3">
                                                            <i class="zmdi zmdi-account-box-phone"></i> <b>9555 930 490</b> </span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne_2" class="panel-collapse in collapse collapse" role="tabpanel"
                                                aria-labelledby="headingOne_2">
                                                <div class="panel-body pt-0">
                                                    <div class="disply_viewcontact">
                                                        <div class="p-2 bdr1 h4show taskboard">
                                                            <div class="dd">
                                                                <ol class="dd-list row" style={{display:"flex"}}>
                                                                    <li class="dd-item col-md-12 col-lg-3">
                                                                        <div class="dd-content">
                                                                            <div class="avt_bg text-center mt-4 mb-3">
                                                                                <div class="avatar_circle m-auto">
                                                                                    <img src="images/no-image.jpg" alt="avatar"
                                                                                        class="img-fluid rounded-circle img"/>
                                                                                </div>
                                                                                <div class="hedlline font-18 bold ms-0">
                                                                                    Carom Recruitment Limited
                                                                                </div>
                                                                            </div>
                                                                            <ul class="social-network social-circle">
                                                                                <li><a href="#" class="" title="Facebook"><i
                                                                                            class="zmdi zmdi-facebook"></i></a></li>
                                                                                <li><a href="#" class="" title="Linkedin"><i
                                                                                            class="zmdi zmdi-linkedin"></i></a></li>
                                                                                <li><a href="#" class="" title="Facebook"><i
                                                                                            class="zmdi zmdi-twitter"></i></a></li>
                                                                                <li><a href="#" class="" title="Linkedin"><i
                                                                                            class="zmdi zmdi-whatsapp"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </li>
                                                                    <li class="dd-item col-md-12 col-lg-4 dd-bdrnone">
                                                                        <div
                                                                            class="dd-handle d-flex justify-content-between align-items-center pt-2 pb-2 ">
                                                                            <div class="h6 mb-2 mt-2 text-blue">
                                                                                <b> Information</b> <span class="bbl-light ms-1">Main</span>
                                                                            </div>

                                                                        </div>
                                                                        <div class="dd-content p-3">

                                                                            <p class="mb-1">
                                                                                <span class="wd-12px">Categories </span>
                                                                                <span>:</span>
                                                                                <span id=""> Customer </span>

                                                                            </p>

                                                                            <p class="mb-1">
                                                                                <span class="wd-12px">Tax Reg.No. </span>
                                                                                <span>:</span>
                                                                                <span id="">DK9999 - </span>
                                                                            </p>
                                                                            <p class="mb-1">
                                                                                <span class="wd-12px">UTR no.. </span>
                                                                                <span>:</span>
                                                                                <span id="">01234567890</span>
                                                                            </p>
                                                                            <p class="mb-1">
                                                                                <span class="wd-12px"> Opening Balance</span> <span>:</span>
                                                                                <span><b>$25 - 35/hrs</b></span>
                                                                            </p>
                                                                            <p class="mb-1">
                                                                                <span class="wd-12px"> Payment Method </span> <span>:</span>
                                                                                <span class="">-----</span>
                                                                            </p>

                                                                            <p class="mb-1">
                                                                                <span class="wd-12px">Terms</span>
                                                                                <span>:</span>
                                                                                <span id="">25-07-2020 to 25-08-2020</span>
                                                                            </p>
                                                                            <p class="mb-0">
                                                                                <span class="wd-12px">Portal Language </span>
                                                                                <span>:</span>
                                                                                <span id="">---</span>
                                                                            </p>

                                                                        </div>
                                                                    </li>
                                                                    <li class="dd-item col-md-12 col-lg-5">
                                                                        <div
                                                                            class="dd-handle d-flex justify-content-between align-items-center pt-2 pb-2">
                                                                            <div class="h6 mb-2 mt-2 text-blue"><b> Contact Address </b> <span
                                                                                    class="bbl-light ms-1">Main</span></div>
                                                                            <div>
                                                                                <a class="btn btn-sm btn-primary clickmode"
                                                                                    data-hide=".disply_viewcontact"
                                                                                    data-show=".disply_editcontact">
                                                                                    <i class="zmdi zmdi-edit"></i> Edit
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="dd-content p-3">
                                                                            <p class="mb-1">
                                                                                <span class="wd-12px">Company Name</span>
                                                                                <span>:</span>
                                                                                <span id="">Nixon Enterprise</span>
                                                                            </p>
                                                                            <p class="mb-1">
                                                                                <span class="wd-12px">Name </span>
                                                                                <span>:</span>
                                                                                <span id=""> Mr. jons Piterson</span>

                                                                            </p>
                                                                            <p class="mb-1">
                                                                                <span class="wd-12px"> Mobile</span> <span>:</span>
                                                                                <span id=""> 9973373851 <small class="col-green"> <i
                                                                                            class="zmdi zmdi-check-all"> </i>
                                                                                        Verified</small></span>
                                                                            </p>
                                                                            <p class="mb-1">
                                                                                <span class="wd-12px"> Email </span> <span>:</span>
                                                                                <span id="">solutions.topicccano@gmail.com</span>
                                                                            </p>

                                                                            <p class="mb-1">
                                                                                <span class="wd-12px">Address Line</span>
                                                                                <span>:</span>
                                                                                <span id="">445 Mount Eden Road</span>
                                                                            </p>
                                                                            <p class="mb-1">
                                                                                <span class="wd-12px">City &amp; County </span>
                                                                                <span>:</span>
                                                                                <span id=""> Mount Eden</span>,
                                                                                <span id=""> Auckland</span>
                                                                            </p>
                                                                            <p class="mb-1">
                                                                                <span class="wd-12px">Postcode </span>
                                                                                <span>:</span>
                                                                                <span id="">b841213</span>
                                                                            </p>
                                                                        </div>
                                                                    </li>
                                                                    <li class="dd-item col-lg-12">
                                                                        <div
                                                                            class="dd-handle d-flex justify-content-between align-items-center pt-2 pb-2">
                                                                            <div class="h6 mb-2 mt-2 text-blue">
                                                                                <i class="zmdi zmdi-accounts-list-alt me-1"></i><b>Contact
                                                                                    Person</b>
                                                                            </div>
                                                                        </div>
                                                                        <div class="dd-content p-1">

                                                                            <div class="table-responsive">
                                                                                <table
                                                                                    class="table table-bordered overflow-y rwd-table btdr_none mb-0"
                                                                                    id="sortable">
                                                                                    <thead class="font_b dnone-mob">
                                                                                        <tr class="font_btd">
                                                                                            <th style={{width:"30px"}}>
                                                                                                #
                                                                                            </th>
                                                                                            <th class=""> Contact / Company </th>
                                                                                            <th> Phone </th>
                                                                                            <th> Open Balance </th>
                                                                                            <th style={{width:"180px"}}> Action</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr class="">
                                                                                            <td class="">
                                                                                                1
                                                                                            </td>
                                                                                            <td class="pt-3 pb-3">
                                                                                                <b>DMRC </b> <i
                                                                                                    class="zmdi zmdi-email ms-2"></i><br/>
                                                                                                Delhi Metro Rail Corporation
                                                                                            </td>
                                                                                            <td> --</td>
                                                                                            <td> $596.00</td>
                                                                                            <td>
                                                                                                <div class="btn-group">
                                                                                                    <button type="button"
                                                                                                        class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                                                                                        data-toggle="dropdown"
                                                                                                        aria-haspopup="true"
                                                                                                        aria-expanded="false"> Action <span
                                                                                                            class="caret"></span></button>
                                                                                                    <ul class="dropdown-menu dr-breakout">
                                                                                                        <li class="btn btn-danger btn-sm"
                                                                                                            title="Delete" type="button"> <i
                                                                                                                class="zmdi zmdi-delete"></i>
                                                                                                            <span
                                                                                                                class="dnone-mob">Delete</span>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr class="">
                                                                                            <td class="">
                                                                                                2
                                                                                            </td>
                                                                                            <td class="pt-3 pb-3">
                                                                                                Soft technotech ltd <i
                                                                                                    class="zmdi zmdi-email ms-2"></i>
                                                                                            </td>
                                                                                            <td> --</td>
                                                                                            <td> $596.00</td>
                                                                                            <td>
                                                                                                <div class="btn-group">
                                                                                                    <button type="button"
                                                                                                        class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                                                                                        data-toggle="dropdown"
                                                                                                        aria-haspopup="true"
                                                                                                        aria-expanded="false"> Action <span
                                                                                                            class="caret"></span></button>
                                                                                                    <ul class="dropdown-menu dr-breakout">
                                                                                                        <li class="btn btn-danger btn-sm"
                                                                                                            title="Delete" type="button"> <i
                                                                                                                class="zmdi zmdi-delete"></i>
                                                                                                            <span
                                                                                                                class="dnone-mob">Delete</span>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr class="">
                                                                                            <td class="">
                                                                                                3
                                                                                            </td>
                                                                                            <td class="pt-3 pb-3">
                                                                                                Soft technotech ltd <i
                                                                                                    class="zmdi zmdi-email ms-2"></i>
                                                                                            </td>
                                                                                            <td> --</td>
                                                                                            <td> $596.00</td>
                                                                                            <td>
                                                                                                <div class="btn-group">
                                                                                                    <button type="button"
                                                                                                        class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                                                                                        data-toggle="dropdown"
                                                                                                        aria-haspopup="true"
                                                                                                        aria-expanded="false"> Action <span
                                                                                                            class="caret"></span></button>
                                                                                                    <ul class="dropdown-menu dr-breakout">
                                                                                                        <li class="btn btn-danger btn-sm"
                                                                                                            title="Delete" type="button"> <i
                                                                                                                class="zmdi zmdi-delete"></i>
                                                                                                            <span
                                                                                                                class="dnone-mob">Delete</span>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr class="">
                                                                                            <td class="">
                                                                                                <div class="checkbox">
                                                                                                    <input class="all_slct" id="product1"
                                                                                                        type="checkbox"/>
                                                                                                    <label for="product1"
                                                                                                        class="ps-0">&nbsp;</label>
                                                                                                </div>
                                                                                            </td>
                                                                                            <td class="pt-3 pb-3">
                                                                                                Soft technotech ltd <i
                                                                                                    class="zmdi zmdi-email ms-2"></i>
                                                                                            </td>
                                                                                            <td> --</td>
                                                                                            <td> $596.00</td>
                                                                                            <td>
                                                                                                <div class="btn-group">
                                                                                                    <button type="button"
                                                                                                        class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                                                                                        data-toggle="dropdown"
                                                                                                        aria-haspopup="true"
                                                                                                        aria-expanded="false"> Action <span
                                                                                                            class="caret"></span></button>
                                                                                                    <ul class="dropdown-menu dr-breakout">
                                                                                                        <li class="btn btn-danger btn-sm"
                                                                                                            title="Delete" type="button"> <i
                                                                                                                class="zmdi zmdi-delete"></i>
                                                                                                            <span
                                                                                                                class="dnone-mob">Delete</span>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr class="">
                                                                                            <td class="">
                                                                                                4
                                                                                            </td>
                                                                                            <td class="pt-3 pb-3">
                                                                                                Soft technotech ltd <i
                                                                                                    class="zmdi zmdi-email ms-2"></i>
                                                                                            </td>
                                                                                            <td> --</td>
                                                                                            <td> $596.00</td>
                                                                                            <td>
                                                                                                <div class="btn-group">
                                                                                                    <button type="button"
                                                                                                        class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                                                                                        data-toggle="dropdown"
                                                                                                        aria-haspopup="true"
                                                                                                        aria-expanded="false"> Action <span
                                                                                                            class="caret"></span></button>
                                                                                                    <ul class="dropdown-menu dr-breakout">
                                                                                                        <li class="btn btn-danger btn-sm"
                                                                                                            title="Delete" type="button"> <i
                                                                                                                class="zmdi zmdi-delete"></i>
                                                                                                            <span
                                                                                                                class="dnone-mob">Delete</span>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>

                                                                                    </tbody>
                                                                                </table>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="dd-item col-lg-12">
                                                                        <div
                                                                            class="dd-handle d-flex justify-content-between align-items-center pt-2 pb-2">
                                                                            <div class="h6 mb-2 mt-2 text-blue">

                                                                                <i class="zmdi zmdi-comment"></i> <b>Note</b>
                                                                            </div>
                                                                        </div>
                                                                        <div class="dd-content p-3">
                                                                            <div class="row m-0">
                                                                                <div class="col-12">
                                                                                    <ul class="timeline">
                                                                                        <li>
                                                                                            <div class="timeline-time">
                                                                                                <span class="date">Today</span>
                                                                                                <span class="time">04:20</span>
                                                                                            </div>
                                                                                            <div class="timeline-icon">
                                                                                                <a href="javascript:;">&nbsp;</a>
                                                                                            </div>
                                                                                            <div class="timeline-body">
                                                                                                <div class="timeline-header">
                                                                                                    <span class="userimage"><img
                                                                                                            src="images/download.jpg"/></span>
                                                                                                    <span class="username"><a
                                                                                                            href="javascript:;">John Smith</a>
                                                                                                        <small></small></span>
                                                                                                    <span
                                                                                                        class="text-right float-right text-muted">New
                                                                                                        Lead</span>
                                                                                                </div>
                                                                                                <div class="timeline-content">
                                                                                                    <p class="lead">Traning Magager Software
                                                                                                        Engneering</p>
                                                                                                    <p>
                                                                                                        A Leads Status in a campaign can be
                                                                                                        Updated from the Lead Profile in a
                                                                                                        Campaign.
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div class="timeline-time">
                                                                                                <span class="date">16/2-2021</span>
                                                                                                <span class="time">09:20</span>
                                                                                            </div>
                                                                                            <div class="timeline-icon">
                                                                                                <a href="javascript:;">&nbsp;</a>
                                                                                            </div>
                                                                                            <div class="timeline-body">
                                                                                                <div class="timeline-header">
                                                                                                    <span class="userimage"><img
                                                                                                            src="images/download.jpg"/></span>
                                                                                                    <span class="username"><a
                                                                                                            href="javascript:;">John Smith</a>
                                                                                                        <small></small></span>
                                                                                                    <span
                                                                                                        class="text-right float-right text-muted">New
                                                                                                        Lead</span>
                                                                                                </div>
                                                                                                <div class="timeline-content">
                                                                                                    <p class="lead">Traning Magager Software
                                                                                                        Engneering</p>
                                                                                                    <p>
                                                                                                        A Leads Status in a campaign can be
                                                                                                        Updated from the Lead Profile in a
                                                                                                        Campaign.
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div class="timeline-icon">
                                                                                                <a href="javascript:;">&nbsp;</a>
                                                                                            </div>
                                                                                            <div class="timeline-body">
                                                                                                Loading...
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </li>
                                                                </ol>
                                                            </div>
                                                            <div class="mb-5 text-center">
                                                                <button class="btn btn-outline-danger clickmode" data-show="." data-hide="."><b>
                                                                        Cancel</b></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="disply_editcontact ddnone p-3 pt-4">
                                                        <div class="row">
                                                            <div class="col-12 col-sm-6">
                                                                <h3 class="font-18 mb-3"><i class="zmdi zmdi-info"></i><b> Primary Contacts </b>
                                                                </h3>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <div class="group_lead">
                                                                            <input type="text" id="" class="input_text" required="required"/>
                                                                            <label for="" class="lablefilled"> First Name</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col">
                                                                        <div class="group_lead">
                                                                            <input type="text" id="" class="input_text" required="required"/>
                                                                            <label for="" class="lablefilled"> Last Name</label>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                                <div class="group_lead">
                                                                    <input type="text" id="" class="input_text" required="required"/>
                                                                    <label for="" class="lablefilled"> Email</label>

                                                                </div>
                                                                <div class="group_lead">
                                                                    <input type="text" id="" class="input_text" required="required"/>
                                                                    <label for="" class="lablefilled"> Mobile</label>

                                                                </div>
                                                                <div class="group_lead">
                                                                    <input type="text" id="" class="input_text" required="required"/>
                                                                    <label for="" class="lablefilled"> Phone</label>

                                                                </div>

                                                                <div class="group_lead">
                                                                    <input type="text" id="" class="input_text" required="required"/>
                                                                    <label for="" class="lablefilled"> Fax</label>
                                                                </div>
                                                                <div class="group_lead">
                                                                    <select id="" class="custom-select select_f" required="required">
                                                                        <option value="">Relationship</option>
                                                                        <option value="Mother">Mother</option>
                                                                        <option value="Father">Father</option>
                                                                        <option value="Daughter">Daughter</option>
                                                                        <option value="Son">Son</option>
                                                                        <option value="Sister">Sister</option>
                                                                        <option value="Brother">Brother</option>
                                                                        <option value="Aunt">Aunt</option>
                                                                        <option value="Uncle">Uncle</option>
                                                                        <option value="Niece">Niece</option>
                                                                        <option value="Nephew">Nephew</option>
                                                                        <option value="Cousin">Cousin</option>
                                                                        <option value="Grandmother">Grandmother</option>
                                                                        <option value="Grandfather">Grandfather</option>
                                                                        <option value="Granddaughter">Granddaughter</option>
                                                                        <option value="Grandson">Grandson</option>
                                                                        <option value="Stepsister">Stepsister</option>
                                                                        <option value="Stepbrother">Stepbrother</option>
                                                                        <option value="Stepmother">Stepmother</option>
                                                                        <option value="Stepfather">Stepfather</option>
                                                                        <option value="Stepdaughter">Stepdaughter</option>
                                                                        <option value="Stepson">Stepson</option>
                                                                        <option value="Sister-in-law">Sister-in-law</option>
                                                                        <option value="Brother-in-law">Brother-in-law</option>
                                                                        <option value="Mother-in-law">Mother-in-law</option>
                                                                        <option value="Father-in-law">Father-in-law</option>
                                                                        <option value="Daughter-in-law">Daughter-in-law</option>
                                                                        <option value="Son-in-law">Son-in-law</option>
                                                                    </select>
                                                                </div>
                                                                <div class="checkbox mt-3">
                                                                    <input id="billinfsame" type="checkbox"/>
                                                                    <label for="billinfsame"><b>Is Primary Contact</b> </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-sm-6">

                                                                <h3 class="font-18 mb-3"><i class="zmdi zmdi-city-alt"></i><b> Address
                                                                        Information</b></h3>
                                                                <div class="group_lead">
                                                                    <input type="text" id="txtcity2" class="input_text bglightblu"
                                                                        required="required"/>
                                                                    <label for="Address2" class="lablefilled"> Address Line 1 </label>
                                                                </div>
                                                                <div class="group_lead">
                                                                    <input type="text" id="txtcity2" class="input_text bglightblu"
                                                                        required="required"/>
                                                                    <label for="Address2" class="lablefilled"> Address Line 2 </label>
                                                                </div>
                                                                <div class="group_lead">
                                                                    <input type="text" id="txtcity2" class="input_text bglightblu"
                                                                        required="required"/>
                                                                    <label for="txtcity2" class="lablefilled"> Town / City</label>
                                                                </div>
                                                                <div class="group_lead">
                                                                    <input type="text" id="txtstate2" class="input_text bglightblu"
                                                                        required="required"/>
                                                                    <label for="txtstate2" class="lablefilled"> State</label>
                                                                </div>

                                                                <div class="group_lead">
                                                                    <input type="text" id="txtzip2" class="input_text bglightblu"
                                                                        required="required"/>
                                                                    <label for="txtzip2" class="lablefilled"> Zip Code</label>
                                                                </div>
                                                                <div class="group_lead">
                                                                    <select id="txtCountry2" class="custom-select select_f bglightblu "
                                                                        required="required">
                                                                        <option value="">Country</option>
                                                                        <option value="86">Afghanistan</option>
                                                                        <option value="87">Albania</option>
                                                                        <option value="88">Algeria</option>
                                                                        <option value="89">American Samoa</option>
                                                                        <option value="90">Andorra</option>
                                                                        <option value="91">Angola</option>
                                                                        <option value="92">Anguilla</option>
                                                                        <option value="93">Antarctica</option>
                                                                        <option value="94">Antigua and Barbuda</option>
                                                                        <option value="6">Argentina</option>
                                                                        <option value="7">Armenia</option>
                                                                        <option value="8">Aruba</option>
                                                                        <option value="9">Australia</option>
                                                                        <option value="4">Austria</option>
                                                                        <option value="10">Azerbaijan</option>
                                                                        <option value="95">Bahrain</option>
                                                                        <option value="12">Bangladesh</option>
                                                                        <option value="96">Barbados</option>
                                                                        <option value="13">Belarus</option>
                                                                        <option value="14">Belgium</option>
                                                                        <option value="15">Belize</option>
                                                                        <option value="97">Benin</option>
                                                                        <option value="16">Bermuda</option>
                                                                        <option value="98">Bhutan</option>
                                                                        <option value="17">Bolivia</option>
                                                                        <option value="18">Bosnia and Herzegovina</option>
                                                                        <option value="99">Botswana</option>
                                                                        <option value="100">Bouvet Island</option>
                                                                        <option value="19">Brazil</option>
                                                                        <option value="101">British Indian Ocean Territory</option>
                                                                        <option value="102">Brunei</option>
                                                                        <option value="20">Bulgaria</option>
                                                                        <option value="103">Burkina Faso</option>
                                                                        <option value="104">Burundi</option>
                                                                        <option value="105">Cambodia</option>
                                                                        <option value="106">Cameroon</option>
                                                                        <option value="2">Canada</option>
                                                                        <option value="107">Cape Verde</option>
                                                                        <option value="21">Cayman Islands</option>
                                                                        <option value="108">Central African Republic</option>
                                                                        <option value="109">Chad</option>
                                                                        <option value="22">Chile</option>
                                                                        <option value="23">China</option>
                                                                        <option value="110">Christmas Island</option>
                                                                        <option value="111">Cocos (Keeling) Islands</option>
                                                                        <option value="24">Colombia</option>
                                                                        <option value="112">Comoros</option>
                                                                        <option value="113">Congo (Brazzaville)</option>
                                                                        <option value="114">Cook Islands</option>
                                                                        <option value="25">Costa Rica</option>
                                                                        <option value="26">Croatia</option>
                                                                        <option value="27">Cuba</option>
                                                                        <option value="28">Cyprus</option>
                                                                        <option value="29">Czech Republic</option>
                                                                        <option value="30">Denmark</option>
                                                                        <option value="116">Djibouti</option>
                                                                        <option value="117">Dominica</option>
                                                                        <option value="31">Dominican Republic</option>
                                                                        <option value="32">Ecuador</option>
                                                                        <option value="33">Egypt</option>
                                                                        <option value="118">El Salvador</option>
                                                                        <option value="119">Equatorial Guinea</option>
                                                                        <option value="120">Eritrea</option>
                                                                        <option value="121">Estonia</option>
                                                                        <option value="122">Ethiopia</option>
                                                                        <option value="123">Falkland Islands</option>
                                                                        <option value="124">Faroe Islands</option>
                                                                        <option value="170">Federated States of Micronesia</option>
                                                                        <option value="125">Fiji</option>
                                                                        <option value="34">Finland</option>
                                                                        <option value="35">France</option>
                                                                        <option value="126">French Guiana</option>
                                                                        <option value="127">French Polynesia</option>
                                                                        <option value="128">French Southern Territories</option>
                                                                        <option value="129">Gabon</option>
                                                                        <option value="36">Georgia</option>
                                                                        <option value="3">Germany</option>
                                                                        <option value="131">Ghana</option>
                                                                        <option value="37">Gibraltar</option>
                                                                        <option value="38">Greece</option>
                                                                        <option value="132">Greenland</option>
                                                                        <option value="133">Grenada</option>
                                                                        <option value="134">Guadeloupe</option>
                                                                        <option value="135">Guam</option>
                                                                        <option value="39">Guatemala</option>
                                                                        <option value="136">Guinea</option>
                                                                        <option value="137">Guinea Bissau</option>
                                                                        <option value="138">Guyana</option>
                                                                        <option value="139">Haiti</option>
                                                                        <option value="140">Heard and Mc Donald Islands</option>
                                                                        <option value="141">Honduras</option>
                                                                        <option value="40">Hong Kong S.A.R.</option>
                                                                        <option value="41">Hungary</option>
                                                                        <option value="142">Iceland</option>
                                                                        <option value="42">India</option>
                                                                        <option value="43">Indonesia</option>
                                                                        <option value="143">Iran</option>
                                                                        <option value="144">Iraq</option>
                                                                        <option value="44">Ireland</option>
                                                                        <option value="46">Italy</option>
                                                                        <option value="115">Ivory Coast</option>
                                                                        <option value="47">Jamaica</option>
                                                                        <option value="48">Japan</option>
                                                                        <option value="49">Jordan</option>
                                                                        <option value="50">Kazakhstan</option>
                                                                        <option value="145">Kenya</option>
                                                                        <option value="146">Kiribati</option>
                                                                        <option value="52">Kuwait</option>
                                                                        <option value="148">Kyrgyzstan</option>
                                                                        <option value="149">Laos</option>
                                                                        <option value="150">Latvia</option>
                                                                        <option value="151">Lebanon</option>
                                                                        <option value="152">Lesotho</option>
                                                                        <option value="153">Liberia</option>
                                                                        <option value="154">Libya</option>
                                                                        <option value="155">Liechtenstein</option>
                                                                        <option value="156">Lithuania</option>
                                                                        <option value="157">Luxembourg</option>
                                                                        <option value="158">Macau S.A.R</option>
                                                                        <option value="159">Macedonia</option>
                                                                        <option value="160">Madagascar</option>
                                                                        <option value="161">Malawi</option>
                                                                        <option value="53">Malaysia</option>
                                                                        <option value="162">Maldives</option>
                                                                        <option value="163">Mali</option>
                                                                        <option value="164">Malta</option>
                                                                        <option value="165">Marshall Islands</option>
                                                                        <option value="166">Martinique</option>
                                                                        <option value="167">Mauritania</option>
                                                                        <option value="168">Mauritius</option>
                                                                        <option value="169">Mayotte</option>
                                                                        <option value="54">Mexico</option>
                                                                        <option value="171">Moldova</option>
                                                                        <option value="172">Monaco</option>
                                                                        <option value="173">Mongolia</option>
                                                                        <option value="174">Montenegro</option>
                                                                        <option value="175">Montserrat</option>
                                                                        <option value="176">Morocco</option>
                                                                        <option value="177">Mozambique</option>
                                                                        <option value="178">Myanmar</option>
                                                                        <option value="179">Namibia</option>
                                                                        <option value="180">Nauru</option>
                                                                        <option value="181">Nepal</option>
                                                                        <option value="55">Netherlands</option>
                                                                        <option value="182">Netherlands Antilles</option>
                                                                        <option value="183">New Caledonia</option>
                                                                        <option value="56">New Zealand</option>
                                                                        <option value="184">Nicaragua</option>
                                                                        <option value="185">Niger</option>
                                                                        <option value="186">Nigeria</option>
                                                                        <option value="187">Niue</option>
                                                                        <option value="188">Norfolk Island</option>
                                                                        <option value="51">North Korea</option>
                                                                        <option value="189">Northern Mariana Islands</option>
                                                                        <option value="57">Norway</option>
                                                                        <option value="190">Oman</option>
                                                                        <option value="58">Pakistan</option>
                                                                        <option value="191">Palau</option>
                                                                        <option value="192">Panama</option>
                                                                        <option value="193">Papua New Guinea</option>
                                                                        <option value="59">Paraguay</option>
                                                                        <option value="60">Peru</option>
                                                                        <option value="61">Philippines</option>
                                                                        <option value="194">Pitcairn</option>
                                                                        <option value="62">Poland</option>
                                                                        <option value="63">Portugal</option>
                                                                        <option value="64">Puerto Rico</option>
                                                                        <option value="65">Qatar</option>
                                                                        <option value="195">Reunion</option>
                                                                        <option value="66">Romania</option>
                                                                        <option value="67">Russia</option>
                                                                        <option value="196">Rwanda</option>
                                                                        <option value="197">Saint Kitts and Nevis</option>
                                                                        <option value="198">Saint Lucia</option>
                                                                        <option value="199">Saint Vincent and the Grenadines</option>
                                                                        <option value="200">Samoa</option>
                                                                        <option value="201">San Marino</option>
                                                                        <option value="202">Sao Tome and Principe</option>
                                                                        <option value="68">Saudi Arabia</option>
                                                                        <option value="203">Senegal</option>
                                                                        <option value="85">Serbia</option>
                                                                        <option value="204">Seychelles</option>
                                                                        <option value="205">Sierra Leone</option>
                                                                        <option value="69">Singapore</option>
                                                                        <option value="70">Slovakia</option>
                                                                        <option value="71">Slovenia</option>
                                                                        <option value="206">Solomon Islands</option>
                                                                        <option value="207">Somalia</option>
                                                                        <option value="72">South Africa</option>
                                                                        <option value="208">South Georgia and the Islands</option>
                                                                        <option value="147">South Korea</option>
                                                                        <option value="73">Spain</option>
                                                                        <option value="209">Sri Lanka</option>
                                                                        <option value="210">St. Helena</option>
                                                                        <option value="211">St. Pierre and Miquelon</option>
                                                                        <option value="212">Sudan</option>
                                                                        <option value="213">Suriname</option>
                                                                        <option value="214">Svalbard and Jan Mayen Islands</option>
                                                                        <option value="215">Swaziland</option>
                                                                        <option value="74">Sweden</option>
                                                                        <option value="5">Switzerland</option>
                                                                        <option value="216">Syria</option>
                                                                        <option value="75">Taiwan</option>
                                                                        <option value="217">Tajikistan</option>
                                                                        <option value="218">Tanzania</option>
                                                                        <option value="76">Thailand</option>
                                                                        <option value="11">The Bahamas</option>
                                                                        <option value="130">The Gambia</option>
                                                                        <option value="219">Togo</option>
                                                                        <option value="220">Tokelau</option>
                                                                        <option value="221">Tonga</option>
                                                                        <option value="222">Trinidad and Tobago</option>
                                                                        <option value="223">Tunisia</option>
                                                                        <option value="77">Turkey</option>
                                                                        <option value="224">Turkmenistan</option>
                                                                        <option value="225">Turks and Caicos Islands</option>
                                                                        <option value="226">Tuvalu</option>
                                                                        <option value="227">Uganda</option>
                                                                        <option value="78">Ukraine</option>
                                                                        <option value="79">United Arab Emirates</option>
                                                                        <option value="80">United Kingdom</option>
                                                                        <option value="81">United States minor outlying islands</option>
                                                                        <option value="1">United States of America</option>
                                                                        <option value="232">United States Virgin Islands</option>
                                                                        <option value="82">Uruguay</option>
                                                                        <option value="83">Uzbekistan</option>
                                                                        <option value="228">Vanuatu</option>
                                                                        <option value="229">Vatican (Holy Sea)</option>
                                                                        <option value="84">Venezuela</option>
                                                                        <option value="230">Vietnam</option>
                                                                        <option value="231">Virgin Islands (British)</option>
                                                                        <option value="233">Wallis and Futuna Islands</option>
                                                                        <option value="234">Western Sahara</option>
                                                                        <option value="235">Yemen</option>
                                                                        <option value="236">Zambia</option>
                                                                        <option value="237">Zimbabwe</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div class="mb-5 col-md-12 text-center">
                                                                <hr class="m-0 mb-4"/>
                                                                <button value="Submit" class="btn btn-primary clickmode"
                                                                    data-show=".disply_viewcontact" data-hide=".disply_editcontact"><b>Save
                                                                        -&gt;</b></button>
                                                                <button class="btn btn-outline-danger clickmode" data-show=".disply_viewcontact"
                                                                    data-hide=".disply_editcontact"><b> Cancel</b></button>
                                                            </div>
                                                            <div class="col-12 text-center">
                                                                <p><span class="col-red">Note</span> : You can add and manage additional
                                                                    addresses from contact details section. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="disply_contact mt-3 dd_none" >
                                        <div class="panel-group" id="accordion_1" role="tablist" aria-multiselectable="true">
                                            <div class="panel panel-primary bdr">
                                                <div class="panel-heading" role="tab" id="headingOne_1">
                                                    <h4 class="panel-title">
                                                        <a role="button" data-toggle="collapse" data-parent="#accordion_1" href="#collapseOne_1"
                                                            aria-expanded="false" aria-controls="collapseOne_1" class="collapsed">
                                                            <span class="col-blue">
                                                                <i class="zmdi zmdi-plus"></i> <b>Add New Contact </b> </span>
                                                            <span class="float-right">
                                                                <i class="zmdi zmdi-dialpad"></i></span>
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseOne_1" class="panel-collapse in collapse collapse show" role="tabpanel"
                                                    aria-labelledby="headingOne_1">
                                                    <div class="panel-body p-3">
                                                        <div class="row">
                                                            <div class="col-12 col-sm-6">
                                                                <h3 class="font-18 mb-3"><i class="zmdi zmdi-info"></i><b> Primary Contacts </b>
                                                                </h3>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <div class="group_lead">
                                                                            <input type="text" id="" class="input_text" required="required"/>
                                                                            <label for="" class="lablefilled"> First Name</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col">
                                                                        <div class="group_lead">
                                                                            <input type="text" id="" class="input_text" required="required"/>
                                                                            <label for="" class="lablefilled"> Last Name</label>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                                <div class="group_lead">
                                                                    <input type="text" id="" class="input_text" required="required"/>
                                                                    <label for="" class="lablefilled"> Email</label>

                                                                </div>
                                                                <div class="group_lead">
                                                                    <input type="text" id="" class="input_text" required="required"/>
                                                                    <label for="" class="lablefilled"> Mobile</label>

                                                                </div>
                                                                <div class="group_lead">
                                                                    <input type="text" id="" class="input_text" required="required"/>
                                                                    <label for="" class="lablefilled"> Phone</label>

                                                                </div>

                                                                <div class="group_lead">
                                                                    <input type="text" id="" class="input_text" required="required"/>
                                                                    <label for="" class="lablefilled"> Fax</label>
                                                                </div>
                                                                <div class="group_lead">
                                                                    <select id="" class="custom-select select_f" required="required">
                                                                        <option value="">Relationship</option>
                                                                        <option value="Mother">Mother</option>
                                                                        <option value="Father">Father</option>
                                                                        <option value="Daughter">Daughter</option>
                                                                        <option value="Son">Son</option>
                                                                        <option value="Sister">Sister</option>
                                                                        <option value="Brother">Brother</option>
                                                                        <option value="Aunt">Aunt</option>
                                                                        <option value="Uncle">Uncle</option>
                                                                        <option value="Niece">Niece</option>
                                                                        <option value="Nephew">Nephew</option>
                                                                        <option value="Cousin">Cousin</option>
                                                                        <option value="Grandmother">Grandmother</option>
                                                                        <option value="Grandfather">Grandfather</option>
                                                                        <option value="Granddaughter">Granddaughter</option>
                                                                        <option value="Grandson">Grandson</option>
                                                                        <option value="Stepsister">Stepsister</option>
                                                                        <option value="Stepbrother">Stepbrother</option>
                                                                        <option value="Stepmother">Stepmother</option>
                                                                        <option value="Stepfather">Stepfather</option>
                                                                        <option value="Stepdaughter">Stepdaughter</option>
                                                                        <option value="Stepson">Stepson</option>
                                                                        <option value="Sister-in-law">Sister-in-law</option>
                                                                        <option value="Brother-in-law">Brother-in-law</option>
                                                                        <option value="Mother-in-law">Mother-in-law</option>
                                                                        <option value="Father-in-law">Father-in-law</option>
                                                                        <option value="Daughter-in-law">Daughter-in-law</option>
                                                                        <option value="Son-in-law">Son-in-law</option>
                                                                    </select>
                                                                </div>
                                                                <div class="checkbox mt-3">
                                                                    <input id="billinfsame" type="checkbox"/>
                                                                    <label for="billinfsame"><b>Is Primary Contact</b> </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-sm-6">

                                                                <h3 class="font-18 mb-3"><i class="zmdi zmdi-city-alt"></i><b> Address
                                                                        Information</b></h3>
                                                                <div class="group_lead">
                                                                    <input type="text" id="txtcity2" class="input_text bglightblu"
                                                                        required="required"/>
                                                                    <label for="Address2" class="lablefilled"> Address Line 1 </label>
                                                                </div>
                                                                <div class="group_lead">
                                                                    <input type="text" id="txtcity2" class="input_text bglightblu"
                                                                        required="required"/>
                                                                    <label for="Address2" class="lablefilled"> Address Line 2 </label>
                                                                </div>
                                                                <div class="group_lead">
                                                                    <input type="text" id="txtcity2" class="input_text bglightblu"
                                                                        required="required"/>
                                                                    <label for="txtcity2" class="lablefilled"> Town / City</label>
                                                                </div>
                                                                <div class="group_lead">
                                                                    <input type="text" id="txtstate2" class="input_text bglightblu"
                                                                        required="required"/>
                                                                    <label for="txtstate2" class="lablefilled"> State</label>
                                                                </div>

                                                                <div class="group_lead">
                                                                    <input type="text" id="txtzip2" class="input_text bglightblu"
                                                                        required="required"/>
                                                                    <label for="txtzip2" class="lablefilled"> Zip Code</label>
                                                                </div>
                                                                <div class="group_lead">
                                                                    <select id="txtCountry2" class="custom-select select_f bglightblu "
                                                                        required="required">
                                                                        <option value="">Country</option>
                                                                        <option value="86">Afghanistan</option>
                                                                        <option value="87">Albania</option>
                                                                        <option value="88">Algeria</option>
                                                                        <option value="89">American Samoa</option>
                                                                        <option value="90">Andorra</option>
                                                                        <option value="91">Angola</option>
                                                                        <option value="92">Anguilla</option>
                                                                        <option value="93">Antarctica</option>
                                                                        <option value="94">Antigua and Barbuda</option>
                                                                        <option value="6">Argentina</option>
                                                                        <option value="7">Armenia</option>
                                                                        <option value="8">Aruba</option>
                                                                        <option value="9">Australia</option>
                                                                        <option value="4">Austria</option>
                                                                        <option value="10">Azerbaijan</option>
                                                                        <option value="95">Bahrain</option>
                                                                        <option value="12">Bangladesh</option>
                                                                        <option value="96">Barbados</option>
                                                                        <option value="13">Belarus</option>
                                                                        <option value="14">Belgium</option>
                                                                        <option value="15">Belize</option>
                                                                        <option value="97">Benin</option>
                                                                        <option value="16">Bermuda</option>
                                                                        <option value="98">Bhutan</option>
                                                                        <option value="17">Bolivia</option>
                                                                        <option value="18">Bosnia and Herzegovina</option>
                                                                        <option value="99">Botswana</option>
                                                                        <option value="100">Bouvet Island</option>
                                                                        <option value="19">Brazil</option>
                                                                        <option value="101">British Indian Ocean Territory</option>
                                                                        <option value="102">Brunei</option>
                                                                        <option value="20">Bulgaria</option>
                                                                        <option value="103">Burkina Faso</option>
                                                                        <option value="104">Burundi</option>
                                                                        <option value="105">Cambodia</option>
                                                                        <option value="106">Cameroon</option>
                                                                        <option value="2">Canada</option>
                                                                        <option value="107">Cape Verde</option>
                                                                        <option value="21">Cayman Islands</option>
                                                                        <option value="108">Central African Republic</option>
                                                                        <option value="109">Chad</option>
                                                                        <option value="22">Chile</option>
                                                                        <option value="23">China</option>
                                                                        <option value="110">Christmas Island</option>
                                                                        <option value="111">Cocos (Keeling) Islands</option>
                                                                        <option value="24">Colombia</option>
                                                                        <option value="112">Comoros</option>
                                                                        <option value="113">Congo (Brazzaville)</option>
                                                                        <option value="114">Cook Islands</option>
                                                                        <option value="25">Costa Rica</option>
                                                                        <option value="26">Croatia</option>
                                                                        <option value="27">Cuba</option>
                                                                        <option value="28">Cyprus</option>
                                                                        <option value="29">Czech Republic</option>
                                                                        <option value="30">Denmark</option>
                                                                        <option value="116">Djibouti</option>
                                                                        <option value="117">Dominica</option>
                                                                        <option value="31">Dominican Republic</option>
                                                                        <option value="32">Ecuador</option>
                                                                        <option value="33">Egypt</option>
                                                                        <option value="118">El Salvador</option>
                                                                        <option value="119">Equatorial Guinea</option>
                                                                        <option value="120">Eritrea</option>
                                                                        <option value="121">Estonia</option>
                                                                        <option value="122">Ethiopia</option>
                                                                        <option value="123">Falkland Islands</option>
                                                                        <option value="124">Faroe Islands</option>
                                                                        <option value="170">Federated States of Micronesia</option>
                                                                        <option value="125">Fiji</option>
                                                                        <option value="34">Finland</option>
                                                                        <option value="35">France</option>
                                                                        <option value="126">French Guiana</option>
                                                                        <option value="127">French Polynesia</option>
                                                                        <option value="128">French Southern Territories</option>
                                                                        <option value="129">Gabon</option>
                                                                        <option value="36">Georgia</option>
                                                                        <option value="3">Germany</option>
                                                                        <option value="131">Ghana</option>
                                                                        <option value="37">Gibraltar</option>
                                                                        <option value="38">Greece</option>
                                                                        <option value="132">Greenland</option>
                                                                        <option value="133">Grenada</option>
                                                                        <option value="134">Guadeloupe</option>
                                                                        <option value="135">Guam</option>
                                                                        <option value="39">Guatemala</option>
                                                                        <option value="136">Guinea</option>
                                                                        <option value="137">Guinea Bissau</option>
                                                                        <option value="138">Guyana</option>
                                                                        <option value="139">Haiti</option>
                                                                        <option value="140">Heard and Mc Donald Islands</option>
                                                                        <option value="141">Honduras</option>
                                                                        <option value="40">Hong Kong S.A.R.</option>
                                                                        <option value="41">Hungary</option>
                                                                        <option value="142">Iceland</option>
                                                                        <option value="42">India</option>
                                                                        <option value="43">Indonesia</option>
                                                                        <option value="143">Iran</option>
                                                                        <option value="144">Iraq</option>
                                                                        <option value="44">Ireland</option>
                                                                        <option value="46">Italy</option>
                                                                        <option value="115">Ivory Coast</option>
                                                                        <option value="47">Jamaica</option>
                                                                        <option value="48">Japan</option>
                                                                        <option value="49">Jordan</option>
                                                                        <option value="50">Kazakhstan</option>
                                                                        <option value="145">Kenya</option>
                                                                        <option value="146">Kiribati</option>
                                                                        <option value="52">Kuwait</option>
                                                                        <option value="148">Kyrgyzstan</option>
                                                                        <option value="149">Laos</option>
                                                                        <option value="150">Latvia</option>
                                                                        <option value="151">Lebanon</option>
                                                                        <option value="152">Lesotho</option>
                                                                        <option value="153">Liberia</option>
                                                                        <option value="154">Libya</option>
                                                                        <option value="155">Liechtenstein</option>
                                                                        <option value="156">Lithuania</option>
                                                                        <option value="157">Luxembourg</option>
                                                                        <option value="158">Macau S.A.R</option>
                                                                        <option value="159">Macedonia</option>
                                                                        <option value="160">Madagascar</option>
                                                                        <option value="161">Malawi</option>
                                                                        <option value="53">Malaysia</option>
                                                                        <option value="162">Maldives</option>
                                                                        <option value="163">Mali</option>
                                                                        <option value="164">Malta</option>
                                                                        <option value="165">Marshall Islands</option>
                                                                        <option value="166">Martinique</option>
                                                                        <option value="167">Mauritania</option>
                                                                        <option value="168">Mauritius</option>
                                                                        <option value="169">Mayotte</option>
                                                                        <option value="54">Mexico</option>
                                                                        <option value="171">Moldova</option>
                                                                        <option value="172">Monaco</option>
                                                                        <option value="173">Mongolia</option>
                                                                        <option value="174">Montenegro</option>
                                                                        <option value="175">Montserrat</option>
                                                                        <option value="176">Morocco</option>
                                                                        <option value="177">Mozambique</option>
                                                                        <option value="178">Myanmar</option>
                                                                        <option value="179">Namibia</option>
                                                                        <option value="180">Nauru</option>
                                                                        <option value="181">Nepal</option>
                                                                        <option value="55">Netherlands</option>
                                                                        <option value="182">Netherlands Antilles</option>
                                                                        <option value="183">New Caledonia</option>
                                                                        <option value="56">New Zealand</option>
                                                                        <option value="184">Nicaragua</option>
                                                                        <option value="185">Niger</option>
                                                                        <option value="186">Nigeria</option>
                                                                        <option value="187">Niue</option>
                                                                        <option value="188">Norfolk Island</option>
                                                                        <option value="51">North Korea</option>
                                                                        <option value="189">Northern Mariana Islands</option>
                                                                        <option value="57">Norway</option>
                                                                        <option value="190">Oman</option>
                                                                        <option value="58">Pakistan</option>
                                                                        <option value="191">Palau</option>
                                                                        <option value="192">Panama</option>
                                                                        <option value="193">Papua New Guinea</option>
                                                                        <option value="59">Paraguay</option>
                                                                        <option value="60">Peru</option>
                                                                        <option value="61">Philippines</option>
                                                                        <option value="194">Pitcairn</option>
                                                                        <option value="62">Poland</option>
                                                                        <option value="63">Portugal</option>
                                                                        <option value="64">Puerto Rico</option>
                                                                        <option value="65">Qatar</option>
                                                                        <option value="195">Reunion</option>
                                                                        <option value="66">Romania</option>
                                                                        <option value="67">Russia</option>
                                                                        <option value="196">Rwanda</option>
                                                                        <option value="197">Saint Kitts and Nevis</option>
                                                                        <option value="198">Saint Lucia</option>
                                                                        <option value="199">Saint Vincent and the Grenadines</option>
                                                                        <option value="200">Samoa</option>
                                                                        <option value="201">San Marino</option>
                                                                        <option value="202">Sao Tome and Principe</option>
                                                                        <option value="68">Saudi Arabia</option>
                                                                        <option value="203">Senegal</option>
                                                                        <option value="85">Serbia</option>
                                                                        <option value="204">Seychelles</option>
                                                                        <option value="205">Sierra Leone</option>
                                                                        <option value="69">Singapore</option>
                                                                        <option value="70">Slovakia</option>
                                                                        <option value="71">Slovenia</option>
                                                                        <option value="206">Solomon Islands</option>
                                                                        <option value="207">Somalia</option>
                                                                        <option value="72">South Africa</option>
                                                                        <option value="208">South Georgia and the Islands</option>
                                                                        <option value="147">South Korea</option>
                                                                        <option value="73">Spain</option>
                                                                        <option value="209">Sri Lanka</option>
                                                                        <option value="210">St. Helena</option>
                                                                        <option value="211">St. Pierre and Miquelon</option>
                                                                        <option value="212">Sudan</option>
                                                                        <option value="213">Suriname</option>
                                                                        <option value="214">Svalbard and Jan Mayen Islands</option>
                                                                        <option value="215">Swaziland</option>
                                                                        <option value="74">Sweden</option>
                                                                        <option value="5">Switzerland</option>
                                                                        <option value="216">Syria</option>
                                                                        <option value="75">Taiwan</option>
                                                                        <option value="217">Tajikistan</option>
                                                                        <option value="218">Tanzania</option>
                                                                        <option value="76">Thailand</option>
                                                                        <option value="11">The Bahamas</option>
                                                                        <option value="130">The Gambia</option>
                                                                        <option value="219">Togo</option>
                                                                        <option value="220">Tokelau</option>
                                                                        <option value="221">Tonga</option>
                                                                        <option value="222">Trinidad and Tobago</option>
                                                                        <option value="223">Tunisia</option>
                                                                        <option value="77">Turkey</option>
                                                                        <option value="224">Turkmenistan</option>
                                                                        <option value="225">Turks and Caicos Islands</option>
                                                                        <option value="226">Tuvalu</option>
                                                                        <option value="227">Uganda</option>
                                                                        <option value="78">Ukraine</option>
                                                                        <option value="79">United Arab Emirates</option>
                                                                        <option value="80">United Kingdom</option>
                                                                        <option value="81">United States minor outlying islands</option>
                                                                        <option value="1">United States of America</option>
                                                                        <option value="232">United States Virgin Islands</option>
                                                                        <option value="82">Uruguay</option>
                                                                        <option value="83">Uzbekistan</option>
                                                                        <option value="228">Vanuatu</option>
                                                                        <option value="229">Vatican (Holy Sea)</option>
                                                                        <option value="84">Venezuela</option>
                                                                        <option value="230">Vietnam</option>
                                                                        <option value="231">Virgin Islands (British)</option>
                                                                        <option value="233">Wallis and Futuna Islands</option>
                                                                        <option value="234">Western Sahara</option>
                                                                        <option value="235">Yemen</option>
                                                                        <option value="236">Zambia</option>
                                                                        <option value="237">Zimbabwe</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div class="mb-5 col-md-12 text-center">
                                                                <hr class="m-0 mb-4"/>
                                                                <button value="Submit" class="btn btn-primary clickmode"
                                                                    data-show=".disply_none_newcontact" data-hide=".disply_contact"><b>Save
                                                                        -&gt;</b></button>
                                                                <button class="btn btn-outline-danger clickmode"
                                                                    data-show=".disply_none_newcontact" data-hide=".disply_contact"><b>
                                                                        Cancel</b></button>
                                                            </div>
                                                            <div class="col-12 text-center">
                                                                <p><span class="col-red">Note</span> : You can add and manage additional
                                                                    addresses from contact details section. </p>
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
                    </div>
                    {/* <<<<<<<<<< */}
                </div>
            </section>
            




        </>
    )
}

export default Main
