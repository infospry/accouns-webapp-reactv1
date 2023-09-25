"use client"

import React, { useState } from 'react';
import Image from 'next/image'
function Main() {
   
    const [isDivVisible, setIsDivVisible] = useState(false);

    const toggleDiv = () => {
      setIsDivVisible(!isDivVisible);
    };


    return (
        <>
            <section className="content">
                <div className="body_scroll">
                    <div className="scrolfx">
                        <div className="booktab d-flex justify-content-between align-items-center bdrb p-1">
                            <div className="d-flex justify-content-start align-items-center">
                                <input type="text" className="form-control floatinglabel me-2" placeholder='What are you working on...' />
                                <a class="btnA col-blue fwN"><i className="zmdi zmdi-plus-circle me-1"></i> Project</a>                            
                            </div>
                            <div className="d-flex justify-content-end align-items-center">
                                
                                <a class="btnA"> <img src="images/tag-gray.svg" alt="img" /></a>
                                <a class="btnA font-20 a col-blue clickmode" data-hide=".a" data-show=".b">£</a>
                                <a class="b btnA font-20  dd_none col-grey clickmode" data-hide=".b" data-show=".a">£</a>

                               
                                    <span class="btnA font-20 col-black tracker"id="timer">00:00:00</span>
                                    <button class="btn btn-success ps-4 pe-4 tracker"id="start">START</button>                                
                               
                                <div class="menual dd_none">
                                    <div class="d-flex">
                                    <input type="text" className="form-control floatinglabel me-2" style={{width:"65px"}} placeholder='14:10' />
                                       <span class="btnA ps-0 pe-1" style={{borderRight:"0px solid #fff"}}> -</span>
                                        <input type="text" className="form-control floatinglabel me-0"style={{width:"65px"}} placeholder='14:11' />
                                        <a class="btnA font-20"style={{borderLeft:"1px solid #eee"}}>
                                        <img src="images/calendar-gray.svg" alt="img" /></a>
                                <span class="btnA font-20 col-black">00:00:00</span>
                                <button class="btn btn-success ps-4 pe-4 menual">ADD</button>
                                    </div>
                                </div>

                               
                                <div className="ms-2">
                                    <a class="btnB clickmode" data-show=".tracker" data-hide=".menual"><i className="zmdi zmdi-alarm"></i></a>
                                    <a class="btnB clickmode" data-hide=".tracker" data-show=".menual"><i className="zmdi zmdi-menu"></i></a>
                                </div>
                               
                            </div>
                            
                           
                        </div>
                    </div>
                    <div className="scroll_bar">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-12 col-lg-12 mt-3">
                                    <p class="d-flex justify-content-between align-items-center col-grey mb-2">This Week <b class="col-black">Week Total - 00:00:14</b></p>
                                    <div className="bdr5 mb-0 d-flex justify-content-between align-items-center ps-3  pe-3 pt-2 pb-2 bdRT bgblulgt">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <b>Today</b>                          
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center">
                                            <b class="col-black me-1 font-16">Total - 00:00:14</b>      
                                        </div>
                                    </div> 
                                    <div className="bdr5 mb-0 d-flex justify-content-between align-items-center p-1 bdRT">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <input type="text" className="form-control floatinglabel me-2" style={{width:"240px"}} placeholder='Add Description' />
                                            <a class="btnA col-blue fwN"><i className="zmdi zmdi-plus-circle me-1"></i> Project</a>                            
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center">                                
                                            <a class="btnA"> <img src="images/tag-gray.svg" alt="img" /></a>
                                            <a class="btnA font-20 a col-blue clickmode" data-hide=".a" data-show=".b">£</a>
                                            <a class="b btnA font-20  dd_none col-grey clickmode" data-hide=".b" data-show=".a">£</a>
                                            <div class="d-flex">
                                                <input type="text" className="form-control floatinglabel me-2" style={{width:"65px"}} placeholder='14:10' />
                                                <span class="btnA ps-0 pe-1" style={{borderRight:"0px solid #fff"}}> -</span>
                                                <input type="text" className="form-control floatinglabel me-0"style={{width:"65px"}} placeholder='14:11' />
                                                <a class="btnA font-20"style={{borderLeft:"1px solid #eee"}}>
                                                <img src="images/calendar-gray.svg" alt="img" /></a>
                                                <span class="btnA font-16 col-black">00:00:00</span>
                                                <a class="btnA"><img src="images/play.svg" alt="img" /></a>
                                                <a class="btnA"style={{borderRight:"0px solid #eee"}}><img src="images/menu-dots-vertical.svg" alt="img" /></a>
                                            </div>
                                        </div>
                                    </div>  

                                    <div className="bdr5 mb-0 d-flex justify-content-between align-items-center p-1 bdRT">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <button class="badge bg-primary me-1"onClick={toggleDiv}>2</button>
                                            <input type="text" className="form-control floatinglabel me-2" style={{width:"215px"}} placeholder='Task A' />
                                            <a class="btnA col-blue fwN"><i className="zmdi zmdi-plus-circle me-1"></i> Project</a>                            
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center">                                
                                            <a class="btnA"> <img src="images/tag-gray.svg" alt="img" /></a>
                                            <a class="btnA font-20 a col-blue clickmode" data-hide=".a" data-show=".b">£</a>
                                            <a class="b btnA font-20  dd_none col-grey clickmode" data-hide=".b" data-show=".a">£</a>
                                            <div class="d-flex">
                                                <input type="text" className="form-control floatinglabel me-2" style={{width:"65px"}} placeholder='14:10' />
                                                <span class="btnA ps-0 pe-1" style={{borderRight:"0px solid #fff"}}> -</span>
                                                <input type="text" className="form-control floatinglabel me-0"style={{width:"65px"}} placeholder='14:11' />
                                                <a class="btnA font-20"style={{borderLeft:"1px solid #eee"}}>
                                                <img src="images/calendar-gray.svg" alt="img" /></a>
                                                <span class="btnA font-16 col-black">00:00:00</span>
                                                <a class="btnA"><img src="images/play.svg" alt="img" /></a>
                                                <a class="btnA"style={{borderRight:"0px solid #eee"}}><img src="images/menu-dots-vertical.svg" alt="img" /></a>
                                            </div>
                                        </div>
                                    </div> 
                                    {isDivVisible && <div>
                                        
                                        <div className="bdr5 mb-0 d-flex justify-content-between align-items-center p-1 bdRT" style={{background:"#f9f9f9"}}>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <input type="text" className="form-control floatinglabel me-2" style={{width:"240px"}} placeholder='Task a.2' />
                                            <a class="btnA col-blue fwN"><i className="zmdi zmdi-plus-circle me-1"></i> Project</a>                            
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center">                                
                                            <a class="btnA"> <img src="images/tag-gray.svg" alt="img" /></a>
                                            <a class="btnA font-20 a col-blue clickmode" data-hide=".a" data-show=".b">£</a>
                                            <a class="b btnA font-20  dd_none col-grey clickmode" data-hide=".b" data-show=".a">£</a>
                                            <div class="d-flex">
                                                <input type="text" className="form-control floatinglabel me-2" style={{width:"65px"}} placeholder='14:10' />
                                                <span class="btnA ps-0 pe-1" style={{borderRight:"0px solid #fff"}}> -</span>
                                                <input type="text" className="form-control floatinglabel me-0"style={{width:"65px"}} placeholder='14:11' />
                                                <a class="btnA font-20"style={{borderLeft:"1px solid #eee"}}>
                                                <img src="images/calendar-gray.svg" alt="img" /></a>
                                                <span class="btnA font-16 col-black">00:00:00</span>
                                                <a class="btnA"><img src="images/play.svg" alt="img" /></a>
                                                <a class="btnA"style={{borderRight:"0px solid #eee"}}><img src="images/menu-dots-vertical.svg" alt="img" /></a>
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="bdr5 mb-0 d-flex justify-content-between align-items-center p-1 bdRT" style={{background:"#f9f9f9"}}>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <input type="text" className="form-control floatinglabel me-2" style={{width:"240px"}} placeholder='Task a.1' />
                                            <a class="btnA col-blue fwN"><i className="zmdi zmdi-plus-circle me-1"></i> Project</a>                            
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center">                                
                                            <a class="btnA"> <img src="images/tag-gray.svg" alt="img" /></a>
                                            <a class="btnA font-20 a col-blue clickmode" data-hide=".a" data-show=".b">£</a>
                                            <a class="b btnA font-20  dd_none col-grey clickmode" data-hide=".b" data-show=".a">£</a>
                                            <div class="d-flex">
                                                <input type="text" className="form-control floatinglabel me-2" style={{width:"65px"}} placeholder='14:10' />
                                                <span class="btnA ps-0 pe-1" style={{borderRight:"0px solid #fff"}}> -</span>
                                                <input type="text" className="form-control floatinglabel me-0"style={{width:"65px"}} placeholder='14:11' />
                                                <a class="btnA font-20"style={{borderLeft:"1px solid #eee"}}>
                                                <img src="images/calendar-gray.svg" alt="img" /></a>
                                                <span class="btnA font-16 col-black">00:00:00</span>
                                                <a class="btnA"><img src="images/play.svg" alt="img" /></a>
                                                <a class="btnA"style={{borderRight:"0px solid #eee"}}><img src="images/menu-dots-vertical.svg" alt="img" /></a>
                                            </div>
                                        </div>
                                    </div>  
                                        </div>}


                                </div>
                            </div>

                        </div>
                    </div>
                    <p id="fulltime" class="fulltime"> </p>
                </div>
            </section>

          
        </>
    )
}

export default Main
