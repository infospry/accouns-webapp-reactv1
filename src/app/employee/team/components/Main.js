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
                                <h2 className="font-bold mb-0">Teams </h2>
                            </div>
                            <div className="pe-2">
                                <a href="javascript:void(0);" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addpage"><i className="zmdi zmdi-plus-circle-o-duplicate"></i>  Add Team Member</a>
                                <div className="btn-group ms-1">
                                    <button className="btn btn-outline-primary  dropdown-toggle font-w" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">More</button>
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
                    <div className=" contactlist scroll_bar">
                        <div className="container-fluid">
                            <div className="row clearfix">
                                <div className="col-12 p-0">                        
                                    <div className="d-flex">
                                        <div className="mobile-left">
                                            <a className="btn btn-info btn-icon toggle-email-nav collapsed" data-toggle="collapse" href="#email-nav" role="button" aria-expanded="false" aria-controls="email-nav">
                                                <span className="btn-label"><i className="zmdi zmdi-more"></i></span>
                                            </a>
                                        </div>
                                        <div className="inbox left pe-0 me-0 lftfxd" id="email-nav">                                        
                                            <div className="mail-side"> 
                                            <LeftSidebar/>                                       
                                            </div>
                                        </div>                               
                                        
                                        
                                    </div>
                                    <div className="inbox right rgtinbox  htg_auto">
                                    
                                    <div className="table-responsive">
                                        <table className="table table-bordered overflow-y rwd-table btdr_none mb-0" id="sortable">
                                            <thead className="font_b dnone-mob">                     
                                                <tr className="font_btd">
                                                    <th style={{width:"28px"}}> 
                                                       #
                                                    </th>
                                                    <th> Team </th>
                                                                                                 
                                                    <th style={{width:"180px"}}>  Action</th>
                                                 </tr>
                                            </thead>            
                                            <tbody>
                                                <tr className="">
                                                    <td className="">
                                                       1 
                                                    </td>                                                
                                                    <td className="pt-3 pb-3">
                                                        ADMINISTRATION
                                                    </td>                                                         
                                                                                               
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span className="caret"></span></button>
                                                            <ul className="dropdown-menu dr-breakout">                                                          
                                                                <li className="btn btn-outline-primary btn-sm me-1" title="Edit" data-bs-toggle="modal" data-bs-target="#addpage"> <i className="zmdi zmdi-edit"></i> <span className="dnone-mob">Edit</span></li>
                                                                <li className="btn btn-danger btn-sm" title="Delete" type="button"> <i className="zmdi zmdi-delete"></i> <span className="dnone-mob">Delete</span></li>                                                 
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
            

            <div className="modal right-quater md-one" id="addpage" tabindex="-1" role="dialog" aria-labelledby="shortModal">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header bg-blu-lite">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 className="modal-title" id="myModalLabel2">
                        <b> <i className="zmdi zmdi-plus-circle-o-duplicate"></i> Add Edit Team</b>
                    </h4>
                </div>
                <div className="modal-body pr-0 pl-0 pb-0 contbody">
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane in active">
                            <div className="row  m-0">
                                <div className="col-md-12 pl-0 pr-0">
                                    <div className="tab-content pt-2 pb-2 pl-2 pr-2">
                                        <div role="tabpanel" className=" tab-pane in active">
                                            <div className="row  m-0">
                                                <div className="col-12 col-sm-12">
                                                    <div className="group_lead mt-4">
                                                        <input type="text" id="" className="input_text" required="required"/>
                                                        <label for="" className="lablefilled"><i className="zmdi zmdi-account col-grey">&nbsp;</i> Team</label>
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
                <div className="model-footer">
                    <div className="row m-0">
                        <div className="col-md-12">
                            <div className="text-center">
                                <button className="btn btn-primary clickmode btn-lg me-1" data-show="." data-hide=""
                                    type="button"> <i className="zmdi zmdi-upload"></i> Save </button>
                                <button className="btn btn-danger btn-lg" type="button"><i
                                        className="zmdi zmdi-rotate-left"></i> Cancel</button>
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
