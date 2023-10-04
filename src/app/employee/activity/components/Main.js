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
                                <h2 className="font-bold mb-0"><i className="zmdi zmdi-alarm me-1"></i> Activity</h2>
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
                                        <div className="col-md-10 col-lg-10 col-xl-9 pro mt-3 mb-3">                                 
                                                  
                    <div className="timeline-centered">
                
                        <article className="timeline-entry">                                    
                            <div className="timeline-entry-inner">
                                <time className="timeline-time" datetime="2014-01-10T03:45"> <span>Today</span></time>                                        
                                <div className="timeline-icon bg-primary">
                                <b>03:45 AM</b>
                                </div>                                        
                                <div className="timeline-label clickmode" data-show=".speech-bubble">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>                                
                            </div> 
                            <div className="speech-bubble text-left clickmode" data-hide=".speech-bubble">
                                <p><b>Ip Address:</b> 2401:4900:1686:fc02:196e:8df3:b817:8e59<br/>
                                  <b> Type:</b>  IPv4: Not detected</p>
                                <p>https://i.imgur.com/J8K6tr6.png</p>
                            </div>                                   
                        </article>
                        <article className="timeline-entry">                                    
                            <div className="timeline-entry-inner">
                                <time className="timeline-time" datetime="2014-01-10T03:45"> <span>5/7/2019</span></time>                                        
                                <div className="timeline-icon bg-primary">
                                <b>12:45 AM</b>
                                </div>                                        
                                <div className="timeline-label">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>
                            </div>                                    
                        </article>
                        <article className="timeline-entry">                                    
                            <div className="timeline-entry-inner">
                                <time className="timeline-time" datetime="2014-01-10T03:45"> <span>5/7/2019</span></time>                                        
                                <div className="timeline-icon bg-primary">
                                <b>12:45 AM</b>
                                </div>                                        
                                <div className="timeline-label">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>
                            </div>                                    
                        </article>
                        
                        <article className="timeline-entry">                                    
                            <div className="timeline-entry-inner">
                                <time className="timeline-time" datetime="2014-01-10T03:45"> <span>5/7/2019</span></time>                                        
                                <div className="timeline-icon bg-primary">
                                <b>12:45 AM</b>
                                </div>                                        
                                <div className="timeline-label">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>
                            </div>                                    
                        </article>
                        
                        <article className="timeline-entry">                                    
                            <div className="timeline-entry-inner">
                                <time className="timeline-time" datetime="2014-01-10T03:45"> <span>5/7/2019</span></time>                                        
                                <div className="timeline-icon bg-primary">
                                <b>12:45 AM</b>
                                </div>                                        
                                <div className="timeline-label">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>
                            </div>                                    
                        </article>
                        
                        <article className="timeline-entry">                                    
                            <div className="timeline-entry-inner">
                                <time className="timeline-time" datetime="2014-01-10T03:45"> <span>5/7/2019</span></time>                                        
                                <div className="timeline-icon bg-primary">
                                <b>12:45 AM</b>
                                </div>                                        
                                <div className="timeline-label">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>
                            </div>                                    
                        </article>
                        
                        <article className="timeline-entry">                                    
                            <div className="timeline-entry-inner">
                                <time className="timeline-time" datetime="2014-01-10T03:45"> <span>5/7/2019</span></time>                                        
                                <div className="timeline-icon bg-primary">
                                <b>12:45 AM</b>
                                </div>                                        
                                <div className="timeline-label">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>
                            </div>                                    
                        </article>
                        
                        <article className="timeline-entry">                                    
                            <div className="timeline-entry-inner">
                                <time className="timeline-time" datetime="2014-01-10T03:45"> <span>5/7/2019</span></time>                                        
                                <div className="timeline-icon bg-primary">
                                <b>12:45 AM</b>
                                </div>                                        
                                <div className="timeline-label">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>
                            </div>                                    
                        </article>
                        
                        <article className="timeline-entry">                                    
                            <div className="timeline-entry-inner">
                                <time className="timeline-time" datetime="2014-01-10T03:45"> <span>5/7/2019</span></time>                                        
                                <div className="timeline-icon bg-primary">
                                <b>12:45 AM</b>
                                </div>                                        
                                <div className="timeline-label">
                                    <h2><b>Document(s) Uploaded</b> <span>posted a status update</span></h2>
                                    <p>Document(s) Uploaded Dr Thomas Document type: CV</p>
                                </div>
                            </div>                                    
                        </article>
                        
                        
                
                        
                        <article className="timeline-entry begin mb-3">
                        
                            <div className="timeline-entry-inner">
                                
                                <div className="timeline-icon">
                                    <i className="entypo-flight"></i>
                                </div>
                                
                            </div>
                            
                        </article>
                        
                    </div>
                    <hr/>
                <div className="text-center">
                    <a href="#" className="btn btn-outline-primary"><b className=" col-blue">Load More</b> →</a> 
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
