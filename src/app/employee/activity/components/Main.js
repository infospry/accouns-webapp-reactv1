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
                                <h2 className="font-bold mb-0"><i class="zmdi zmdi-alarm me-1"></i> Activity</h2>
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
                                        <div class="col-md-10 col-lg-10 col-xl-9 pro mt-3 mb-3">                                 
                                                  
                    <div class="timeline-centered">
                
                        <article class="timeline-entry">                                    
                            <div class="timeline-entry-inner">
                                <time class="timeline-time" datetime="2014-01-10T03:45"> <span>Today</span></time>                                        
                                <div class="timeline-icon bg-primary">
                                <b>03:45 AM</b>
                                </div>                                        
                                <div class="timeline-label clickmode" data-show=".speech-bubble">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>                                
                            </div> 
                            <div class="speech-bubble text-left clickmode" data-hide=".speech-bubble">
                                <p><b>Ip Address:</b> 2401:4900:1686:fc02:196e:8df3:b817:8e59<br/>
                                  <b> Type:</b>  IPv4: Not detected</p>
                                <p>https://i.imgur.com/J8K6tr6.png</p>
                            </div>                                   
                        </article>
                        <article class="timeline-entry">                                    
                            <div class="timeline-entry-inner">
                                <time class="timeline-time" datetime="2014-01-10T03:45"> <span>5/7/2019</span></time>                                        
                                <div class="timeline-icon bg-primary">
                                <b>12:45 AM</b>
                                </div>                                        
                                <div class="timeline-label">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>
                            </div>                                    
                        </article>
                        <article class="timeline-entry">                                    
                            <div class="timeline-entry-inner">
                                <time class="timeline-time" datetime="2014-01-10T03:45"> <span>5/7/2019</span></time>                                        
                                <div class="timeline-icon bg-primary">
                                <b>12:45 AM</b>
                                </div>                                        
                                <div class="timeline-label">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>
                            </div>                                    
                        </article>
                        
                        <article class="timeline-entry">                                    
                            <div class="timeline-entry-inner">
                                <time class="timeline-time" datetime="2014-01-10T03:45"> <span>5/7/2019</span></time>                                        
                                <div class="timeline-icon bg-primary">
                                <b>12:45 AM</b>
                                </div>                                        
                                <div class="timeline-label">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>
                            </div>                                    
                        </article>
                        
                        <article class="timeline-entry">                                    
                            <div class="timeline-entry-inner">
                                <time class="timeline-time" datetime="2014-01-10T03:45"> <span>5/7/2019</span></time>                                        
                                <div class="timeline-icon bg-primary">
                                <b>12:45 AM</b>
                                </div>                                        
                                <div class="timeline-label">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>
                            </div>                                    
                        </article>
                        
                        <article class="timeline-entry">                                    
                            <div class="timeline-entry-inner">
                                <time class="timeline-time" datetime="2014-01-10T03:45"> <span>5/7/2019</span></time>                                        
                                <div class="timeline-icon bg-primary">
                                <b>12:45 AM</b>
                                </div>                                        
                                <div class="timeline-label">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>
                            </div>                                    
                        </article>
                        
                        <article class="timeline-entry">                                    
                            <div class="timeline-entry-inner">
                                <time class="timeline-time" datetime="2014-01-10T03:45"> <span>5/7/2019</span></time>                                        
                                <div class="timeline-icon bg-primary">
                                <b>12:45 AM</b>
                                </div>                                        
                                <div class="timeline-label">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>
                            </div>                                    
                        </article>
                        
                        <article class="timeline-entry">                                    
                            <div class="timeline-entry-inner">
                                <time class="timeline-time" datetime="2014-01-10T03:45"> <span>5/7/2019</span></time>                                        
                                <div class="timeline-icon bg-primary">
                                <b>12:45 AM</b>
                                </div>                                        
                                <div class="timeline-label">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>
                            </div>                                    
                        </article>
                        
                        <article class="timeline-entry">                                    
                            <div class="timeline-entry-inner">
                                <time class="timeline-time" datetime="2014-01-10T03:45"> <span>5/7/2019</span></time>                                        
                                <div class="timeline-icon bg-primary">
                                <b>12:45 AM</b>
                                </div>                                        
                                <div class="timeline-label">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>
                            </div>                                    
                        </article>
                        
                        
                
                        
                        <article class="timeline-entry begin mb-3">
                        
                            <div class="timeline-entry-inner">
                                
                                <div class="timeline-icon">
                                    <i class="entypo-flight"></i>
                                </div>
                                
                            </div>
                            
                        </article>
                        
                    </div>
                    <hr/>
                <div class="text-center">
                    <a href="#" class="btn btn-outline-primary"><b class=" col-blue">Load More</b> →</a> 
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
