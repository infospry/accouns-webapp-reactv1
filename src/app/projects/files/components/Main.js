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
                                <h2 className="font-bold mb-0"><i class="zmdi zmdi-file-text me-1"></i> Files </h2>
                            </div>
                           <div className="pe-2">
                            <a href="javascript:void(0);" className="btn btn-success" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-plus-circle-o-duplicate"></i>  Create New File</a>
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
                                                <div class="table-responsive">
                                                    <table class="table table-bordered overflow-y rwd-table btdr_none mb-3" id="sortable">
                                                        <thead class="font_b dnone-mob">                     
                                                            <tr class="font_btd">
                                                                <th style={{width:"30px"}}> 
                                                                    #
                                                                </th>
                                                                <th> File Name </th>  
                                                                <th>Folder</th>                                                    
                                                                <th> Modified on </th>
                                                                <th>File Type</th>                    
                                                                <th style={{width:"24px"}}>  - </th>
                                                            </tr>
                                                        </thead>            
                                                        <tbody>
                                                            <tr class="">
                                                                <td class="">
                                                                1
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/pdf.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b>Yonger than Yestarday </b> - Delhi Metro Rail Corporation</span><br/>
                                                                        <small>File Size :- 5mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>PDF</td>  
                                                                <td>
                                                                    <div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target=""><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                2
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/word.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b>Delhi Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 5mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>world</td>  
                                                                <td>
                                                                    <div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target=""><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                3
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/exel.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 120kb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>Exel</td>  
                                                                <td>
                                                                    <div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target=""><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                4
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/jpg.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Rail Corporation Delhi Metro</b> - </span><br/>
                                                                        <small>File Size :-105kb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 13/06/2021</td>  
                                                                <td>JPEG</td>  
                                                                <td>
                                                                    <div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target=""><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                5
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/png.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 12mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>PNG</td>  
                                                                <td>
                                                                    <div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target=""><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                1
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/pdf.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b>Yonger than Yestarday </b> - Delhi Metro Rail Corporation</span><br/>
                                                                        <small>File Size :- 5mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>PDF</td>  
                                                                <td>
                                                                    <div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target=""><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                2
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/word.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b>Delhi Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 5mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>world</td>  
                                                                <td>
                                                                    <div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target=""><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                3
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/exel.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 120kb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>Exel</td>  
                                                                <td>
                                                                    <div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target=""><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                4
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/jpg.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Rail Corporation Delhi Metro</b> - </span><br/>
                                                                        <small>File Size :-105kb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 13/06/2021</td>  
                                                                <td>JPEG</td>  
                                                                <td>
                                                                    <div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target=""><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                5
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/png.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 12mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>PNG</td>  
                                                                <td>
                                                                    <div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target=""><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                1
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/pdf.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b>Yonger than Yestarday </b> - Delhi Metro Rail Corporation</span><br/>
                                                                        <small>File Size :- 5mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>PDF</td>  
                                                                <td>
                                                                    <div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target=""><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                2
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/word.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b>Delhi Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 5mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>world</td>  
                                                                <td>
                                                                    <div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target=""><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                3
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/exel.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 120kb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>Exel</td>  
                                                                <td>
                                                                    <div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target=""><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                4
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/jpg.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Rail Corporation Delhi Metro</b> - </span><br/>
                                                                        <small>File Size :-105kb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 13/06/2021</td>  
                                                                <td>JPEG</td>  
                                                                <td>
                                                                    <div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target=""><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                5
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/png.png" alt="user" class="rounded" style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 12mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>PNG</td>  
                                                                <td>
                                                                <div className="dropdown">
                                                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="../images/menu-dots-vertical.svg" alt="user" />
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-toggle="modal" data-target=""><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-toggle="modal" data-target="#addpage"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
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
                        </div>
                    </div>
                   
                </div>
            </section>
            <div class="modal right-quater md-one" id="addpage" tabindex="-1" role="dialog" >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-blu-lite fixed-top">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel2">
                        <b> <i class="zmdi zmdi-plus-circle-o-duplicate"></i> Add Edit New Files </b>
                    </h4>
                </div>
                <div class="modal-body pr-0 pl-0 pb-0 contbody">  
                    <div class="row m-0">
                        <div class="col-md-12 Uploadimg mt-3">
                            
                            <div class="group_lead mt-3">
                                <input type="text" id="" class="input_text" required="required"/>
                                <label for="" class="lablefilled">Name</label>                                           
                            </div>
                            <form method="post" action="#" id="#">                      
                                <div class="form-group files mt-3">
                                <p><b>Upload Your File/Image </b></p> 
                                <input type="file" class="form-control mt-3" multiple=""/>
                                </div>
                                <p class="col-grey font- mt-2">Select Media(jpg, png, pdf allowed - upto 6 Mb)</p> 
                            </form>  
                           
                            <div class="group_lead">
                                <input type="url" id="" class="input_text" required="required"/>
                                <label for="" class="lablefilled">Modified On [Date]</label>                                           
                            </div>
                            <div class="group_lead">
                                <select type="text" id="unit" class="custom-select select_f" required="required">  
                                    <option selected="">Folder</option>                                         
                                    <option value="cm" class="option">Policy</option>                                                                                       
                                </select> 
                            </div>
                            <div class="group_lead">
                                <select type="text" id="unit" class="custom-select select_f" required="required">  
                                    <option selected="">File Type</option>                                         
                                    <option value="cm" class="option">Jpeg</option>                                                                                       
                                </select> 
                            </div>
                            <div class="group_lead">
                                <textarea required="required" id="Description"></textarea>
                                <label class="lablefilled" for="Description">Description</label>                                   
                            </div>
                                          
                        </div>                                                        
                    </div>             
                </div>
                <div class="model-footer">
                    <div class="row m-0">
                        <div class="col-md-12">                          
                            <div class="text-center">
                                <button class="btn btn-primary btn-lg clickmode btn-lg" data-show=".contactlist, .showthing, .nxtprv" data-hide=".md-one, .hdbox, .modal-backdrop" type="button"> <i class="zmdi zmdi-plus-circle-o-duplicate"></i> Add </button>
                                <button class="btn btn-danger btn-lg ms-1" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
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
