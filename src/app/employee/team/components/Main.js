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
                                <h2 className="font-bold mb-0"><i className="zmdi zmdi-account-alt me-1"></i>Teams </h2>
                            </div>
                            <div className="pe-2">
                                <a href="javascript:void(0);" className="btn btn-success" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-plus-circle-o-duplicate"></i>  Add Team Member</a>
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
                                    
                                    <div class="table-responsive">
                                        <table class="table table-bordered overflow-y rwd-table btdr_none mb-0" id="sortable">
                                            <thead class="font_b dnone-mob">                     
                                                <tr class="font_btd">
                                                    <th style={{width:"28px"}}> 
                                                       #
                                                    </th>
                                                    <th> Team </th>
                                                                                                 
                                                    <th style={{width:"180px"}}>  Action</th>
                                                 </tr>
                                            </thead>            
                                            <tbody>
                                                <tr class="">
                                                    <td class="">
                                                       1 
                                                    </td>                                                
                                                    <td class="pt-3 pb-3">
                                                        ADMINISTRATION
                                                    </td>                                                         
                                                                                               
                                                    <td>
                                                        <div class="btn-group">
                                                            <button type="button" class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span class="caret"></span></button>
                                                            <ul class="dropdown-menu dr-breakout">                                                          
                                                                <li class="btn btn-outline-primary btn-sm me-1" title="Edit" data-toggle="modal" data-target="#addpage"> <i class="zmdi zmdi-edit"></i> <span class="dnone-mob">Edit</span></li>
                                                                <li class="btn btn-danger btn-sm" title="Delete" type="button"> <i class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></li>                                                 
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
                    {/* <<<<<<<<<< */}
                </div>
            </section>
            

            <div class="modal right-quater md-one" id="addpage" tabindex="-1" role="dialog" aria-labelledby="shortModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-blu-lite">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel2">
                        <b> <i class="zmdi zmdi-plus-circle-o-duplicate"></i> Add Edit Team</b>
                    </h4>
                </div>
                <div class="modal-body pr-0 pl-0 pb-0 contbody">
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane in active">
                            <div class="row  m-0">
                                <div class="col-md-12 pl-0 pr-0">
                                    <div class="tab-content pt-2 pb-2 pl-2 pr-2">
                                        <div role="tabpanel" class=" tab-pane in active">
                                            <div class="row  m-0">
                                                <div class="col-12 col-sm-12">
                                                    <div class="group_lead mt-4">
                                                        <input type="text" id="" class="input_text" required="required"/>
                                                        <label for="" class="lablefilled"><i class="zmdi zmdi-account col-grey">&nbsp;</i> Team</label>
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
                <div class="model-footer">
                    <div class="row m-0">
                        <div class="col-md-12">
                            <div class="text-center">
                                <button class="btn btn-primary clickmode btn-lg me-1" data-show="." data-hide=""
                                    type="button"> <i class="zmdi zmdi-upload"></i> Save </button>
                                <button class="btn btn-danger btn-lg" type="button"><i
                                        class="zmdi zmdi-rotate-left"></i> Cancel</button>
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
