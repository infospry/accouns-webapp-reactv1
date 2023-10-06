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
                                <h2 className="font-bold mb-0"><i className="zmdi zmdi-timer-off me-1"></i> Absenses </h2>
                            </div>
                            <div className="pe-2 d-flex">
                                                            
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
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-10 col-xl-9 pro mt-3">                                 
                                                <div className="panel-group" id="accordion_1" role="tablist" aria-multiselectable="true">                                            
                                                    <div className="panel panel-primary bdr mb-2">
                                                        <div className="panel-heading bdr_b_0" role="tab" id="headingOne_31">
                                                            <h4 className="panel-title">
                                                                <a role="button" data-toggle="collapse" data-parent="#accordion_1" href="#collapseOne_31" aria-expanded="false" aria-controls="collapseOne_31" className="collapsed">
                                                                    <span className="col-blue font-18 me-2"> <b>Annual Leave  </b> </span> <span className="col-blue font-16"> [ 18 ]</span>                                                              
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne_31" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne_31">                                               
                                                            <div className="panel-body p-3">
                                                                <div className="disply_editsalry ddnone">
                                                                    <div className="row">
                                                                        <div className="col-md-3">
                                                                            <label>Absence Type
                                                                                <span>*</span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="col-md-9">                                                               
                                                                            <div className="form-group">                                                                    
                                                                                <select className="form-control" id="selectabsencetype-0">
                                                                                    <option value="Adoption">Adoption</option>
                                                                                    <option value="Annual Leave" selected="selected">Annual Leave</option>
                                                                                    <option value="Doctors Appointment">Doctors Appointment</option>
                                                                                    <option value="Lateness">Lateness</option>
                                                                                    <option value="Other Absence">Other Absence</option>
                                                                                    <option value="Parental Leave">Parental Leave</option>
                                                                                    <option value="Shared Parental Leave">Shared Parental Leave</option>
                                                                                    <option value="Sickness">Sickness</option>
                                                                                    <option value="Timeoff for Dependants">Timeoff for Dependants</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-3"><div className="form-group"><label> Leave<span>*</span></label></div></div>
                                                                        <div className="col-md-9">
                                                                            <div className="form-group">
                                                                                <div className="radio inlineblock m-r-20 fd">
                                                                                    <input type="radio" name="Leave" id="fday1" className="" value="optionone" checked=""/>
                                                                                    <label for="fday1">Full Day(s)</label>
                                                                                </div>                                
                                                                                <div className="radio inlineblock hd">
                                                                                    <input type="radio" name="Leave" id="Partial1" className="" value="optiontwo"/>
                                                                                    <label for="Partial1">Partial </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">  
                                                                        <div className="col-md-3">
                                                                            <div className="form-group"><label>Start Date<span>*</span></label></div>
                                                                        </div>  
                                                                        <div className="col-md-9">
                                                                            <div className="form-group">                                                                    
                                                                                <div className="input-group">
                                                                                    <input className="form-control" placeholder="DD/MM/YYYY"/>
                                                                                    <input className="form-control ms-1 disply_hid" placeholder="HH:MM"/>
                                                                                </div>
                                                                            </div> 
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">  
                                                                            <div className="col-md-3">
                                                                                <div className="form-group"><label>End Date<span>*</span></label></div>
                                                                            </div>  
                                                                            <div className="col-md-9">
                                                                                <div className="form-group">                                                                    
                                                                                    <div className="input-group">
                                                                                        <input className="form-control" placeholder="DD/MM/YYYY"/>
                                                                                        <input className="form-control ms-1 disply_hid" placeholder="HH:MM"/>
                                                                                    </div>
                                                                                </div> 
                                                                            </div>
                                                                    </div>  
                                                                    <div className="row">  
                                                                        <div className="col-md-3">
                                                                            <div className="form-group"><label>Details<span></span></label></div>
                                                                        </div>  
                                                                        <div className="col-md-9">          
                                                                            <div className="form-group">                                                                                                       
                                                                                <textarea className="form-control" placeholder="If ant..."></textarea>
                                                                            </div> 
                                                                        </div>                          
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="mb-0 col-md-12 text-center">  
                                                                                <hr className="m-0 mb-3"/>                               
                                                                            <button value="Submit" className="btn btn-primary save_edt_salry clickmode me-1" data-show=".disply_viewsalry" data-hide=".disply_editsalry"><b>Save -&gt;</b></button>
                                                                            <button className="btn btn-outline-danger"><b> Cancel</b></button>
                                                                        </div> 
                                                                    </div>
                                                                </div>
                                                                <div className="disply_viewsalry">
                                                                    <div className="row">                                                       
                                                                        <div className="col-12"> 
                                                                            <a className="btn btn-sm btn-primary hover salry_edt clickmode m-t--10">
                                                                                <i className="zmdi zmdi-edit"></i> Edit
                                                                            </a>
                                                                            <p className="mb-2">
                                                                                <span className="wd-16px text-center b-r-1 me-3"><b className="font-16">8 </b> <br/> Full Days </span>                                                                
                                                                                <span id="" className="col-black"><b className=""><i className="zmdi zmdi-calendar me-1"></i>1/Jun/2019 - 8/Jun/2019</b><br/></span>                                                                 
                                                                                <span className="lft--16px col-grey ps-1">Annual leave is paid time off work granted by employers to employees to be. </span>
                                                                            </p>
                                                                            <hr/>
                                                                        </div>
                                                                        <div className="col-12"> 
                                                                            <a className="btn btn-sm btn-primary hover salry_edt clickmode m-t--10" data-hide=".disply_viewsalry" data-show=".disply_editsalry">
                                                                                <i className="zmdi zmdi-edit"></i> Edit
                                                                            </a>
                                                                            <p className="mb-2">
                                                                                <span className="wd-16px text-center b-r-1 me-3"><b className="font-16">9 </b> <br/> Full Days </span>                                                                
                                                                                <span id="" className="col-black"><b className=""><i className="zmdi zmdi-calendar me-1"></i>8/Jun/2019 - 16/Jun/2019</b><br/></span>                                                                 
                                                                                <span className="lft--16px col-grey ps-1">Leave is paid time off work granted. </span>
                                                                            </p><hr/>
                                                                        </div>
                                                                        <div className="col-12"> 
                                                                            <a className="btn btn-sm btn-primary hover salry_edt clickmode m-t--10" data-hide=".disply_viewsalry" data-show=".disply_editsalry">
                                                                                <i className="zmdi zmdi-edit"></i> Edit
                                                                            </a>
                                                                            <p className="mb-2">
                                                                                <span className="wd-16px text-center b-r-1 me-3"><b className="font-16 col-orange">4 hrs</b> <br/> Partials </span>                                                                
                                                                                <span id="" className="col-black"><b className=""><i className="zmdi zmdi-calendar me-1"></i> 10/Jun/2019 3:00pm - 10/Jun/2019 4:00pm</b><br/></span>                                                                 
                                                                                <span className="lft--16px col-grey ps-1">Urgent Leave. </span>
                                                                            </p>
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
