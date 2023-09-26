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
                                <h2 className="font-bold mb-0"><i class="zmdi zmdi-timer-off me-1"></i> Absenses </h2>
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
                                        <div class="row justify-content-center">
                                            <div class="col-md-10 col-lg-10 col-xl-9 pro mt-3">                                 
                                                <div class="panel-group" id="accordion_1" role="tablist" aria-multiselectable="true">                                            
                                                    <div class="panel panel-primary bdr mb-2">
                                                        <div class="panel-heading bdr_b_0" role="tab" id="headingOne_31">
                                                            <h4 class="panel-title">
                                                                <a role="button" data-toggle="collapse" data-parent="#accordion_1" href="#collapseOne_31" aria-expanded="false" aria-controls="collapseOne_31" class="collapsed">
                                                                    <span class="col-blue font-18 me-2"> <b>Annual Leave  </b> </span> <span class="col-blue font-16"> [ 18 ]</span>                                                              
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne_31" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne_31">                                               
                                                            <div class="panel-body p-3">
                                                                <div class="disply_editsalry ddnone">
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <label>Absence Type
                                                                                <span>*</span>
                                                                            </label>
                                                                        </div>
                                                                        <div class="col-md-9">                                                               
                                                                            <div class="form-group">                                                                    
                                                                                <select class="form-control" id="selectabsencetype-0">
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
                                                                    <div class="row">
                                                                        <div class="col-md-3"><div class="form-group"><label> Leave<span>*</span></label></div></div>
                                                                        <div class="col-md-9">
                                                                            <div class="form-group">
                                                                                <div class="radio inlineblock m-r-20 fd">
                                                                                    <input type="radio" name="Leave" id="fday1" class="" value="optionone" checked=""/>
                                                                                    <label for="fday1">Full Day(s)</label>
                                                                                </div>                                
                                                                                <div class="radio inlineblock hd">
                                                                                    <input type="radio" name="Leave" id="Partial1" class="" value="optiontwo"/>
                                                                                    <label for="Partial1">Partial </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">  
                                                                        <div class="col-md-3">
                                                                            <div class="form-group"><label>Start Date<span>*</span></label></div>
                                                                        </div>  
                                                                        <div class="col-md-9">
                                                                            <div class="form-group">                                                                    
                                                                                <div class="input-group">
                                                                                    <input class="form-control" placeholder="DD/MM/YYYY"/>
                                                                                    <input class="form-control ms-1 disply_hid" placeholder="HH:MM"/>
                                                                                </div>
                                                                            </div> 
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">  
                                                                            <div class="col-md-3">
                                                                                <div class="form-group"><label>End Date<span>*</span></label></div>
                                                                            </div>  
                                                                            <div class="col-md-9">
                                                                                <div class="form-group">                                                                    
                                                                                    <div class="input-group">
                                                                                        <input class="form-control" placeholder="DD/MM/YYYY"/>
                                                                                        <input class="form-control ms-1 disply_hid" placeholder="HH:MM"/>
                                                                                    </div>
                                                                                </div> 
                                                                            </div>
                                                                    </div>  
                                                                    <div class="row">  
                                                                        <div class="col-md-3">
                                                                            <div class="form-group"><label>Details<span></span></label></div>
                                                                        </div>  
                                                                        <div class="col-md-9">          
                                                                            <div class="form-group">                                                                                                       
                                                                                <textarea class="form-control" placeholder="If ant..."></textarea>
                                                                            </div> 
                                                                        </div>                          
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="mb-0 col-md-12 text-center">  
                                                                                <hr class="m-0 mb-3"/>                               
                                                                            <button value="Submit" class="btn btn-primary save_edt_salry clickmode me-1" data-show=".disply_viewsalry" data-hide=".disply_editsalry"><b>Save -&gt;</b></button>
                                                                            <button class="btn btn-outline-danger"><b> Cancel</b></button>
                                                                        </div> 
                                                                    </div>
                                                                </div>
                                                                <div class="disply_viewsalry">
                                                                    <div class="row">                                                       
                                                                        <div class="col-12"> 
                                                                            <a class="btn btn-sm btn-primary hover salry_edt clickmode m-t--10">
                                                                                <i class="zmdi zmdi-edit"></i> Edit
                                                                            </a>
                                                                            <p class="mb-2">
                                                                                <span class="wd-16px text-center b-r-1 me-3"><b class="font-16">8 </b> <br/> Full Days </span>                                                                
                                                                                <span id="" class="col-black"><b class=""><i class="zmdi zmdi-calendar me-1"></i>1/Jun/2019 - 8/Jun/2019</b><br/></span>                                                                 
                                                                                <span class="lft--16px col-grey ps-1">Annual leave is paid time off work granted by employers to employees to be. </span>
                                                                            </p>
                                                                            <hr/>
                                                                        </div>
                                                                        <div class="col-12"> 
                                                                            <a class="btn btn-sm btn-primary hover salry_edt clickmode m-t--10" data-hide=".disply_viewsalry" data-show=".disply_editsalry">
                                                                                <i class="zmdi zmdi-edit"></i> Edit
                                                                            </a>
                                                                            <p class="mb-2">
                                                                                <span class="wd-16px text-center b-r-1 me-3"><b class="font-16">9 </b> <br/> Full Days </span>                                                                
                                                                                <span id="" class="col-black"><b class=""><i class="zmdi zmdi-calendar me-1"></i>8/Jun/2019 - 16/Jun/2019</b><br/></span>                                                                 
                                                                                <span class="lft--16px col-grey ps-1">Leave is paid time off work granted. </span>
                                                                            </p><hr/>
                                                                        </div>
                                                                        <div class="col-12"> 
                                                                            <a class="btn btn-sm btn-primary hover salry_edt clickmode m-t--10" data-hide=".disply_viewsalry" data-show=".disply_editsalry">
                                                                                <i class="zmdi zmdi-edit"></i> Edit
                                                                            </a>
                                                                            <p class="mb-2">
                                                                                <span class="wd-16px text-center b-r-1 me-3"><b class="font-16 col-orange">4 hrs</b> <br/> Partials </span>                                                                
                                                                                <span id="" class="col-black"><b class=""><i class="zmdi zmdi-calendar me-1"></i> 10/Jun/2019 3:00pm - 10/Jun/2019 4:00pm</b><br/></span>                                                                 
                                                                                <span class="lft--16px col-grey ps-1">Urgent Leave. </span>
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
