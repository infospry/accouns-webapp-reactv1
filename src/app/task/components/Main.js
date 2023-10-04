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
                               

                                <div className="expanding-search-form">
                                    <div className="search-dropdown">
                                        <button className="button dropdown-toggle btnA col-blue fwN" type="button">
                                            <span className="toggle-active"><i className="zmdi zmdi-plus-circle me-1"></i> Project</span>
                                            <span className="ion-arrow-down-b"></span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <input className="search-input" id="global-search" type="search" placeholder="Search"/>
                                            <li className="menu-active"><a href="#">Everything</a></li>
                                            <li><a href="#">People</a></li>
                                            <li><a href="#">Products</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <hr/>
                                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addpage"style={{width:"100%"}}><i className="zmdi zmdi-plus-circle me-1"></i> Project</button>
                                        </ul>
                                    </div>
                                </div>



                            </div>
                            <div className="d-flex justify-content-end align-items-center">
                                
                                <a className="btnA"> <img src="images/tag-gray.svg" alt="img"/></a>
                                <a className="btnA font-20 a col-blue clickmode" data-hide=".a" data-show=".b">£</a>
                                <a className="b btnA font-20  dd_none col-grey clickmode" data-hide=".b" data-show=".a">£</a>
                               
                               
                                    <span className="btnA font-20 col-black tracker" id="timer">00:00:00</span>
                                    <button className="btn btn-success ps-4 pe-4 tracker clickmode start"id="start"data-show=".stop" data-hide=".start">START</button>                                
                                   
                                    <button className="btn btn-danger ps-4 pe-4 dd_none clickmode stop" id="stop" data-show=".start" data-hide=".stop"> Stop </button>
                                    <button id="pause" className="dd_none">  </button>
                                    <button id="continue"  className="dd_none"hidden>  </button>
       
                                <div className="menual dd_none">
                                    <div className="d-flex">
                                    <input type="text" className="form-control floatinglabel me-2" style={{width:"65px"}} placeholder='14:10' />
                                       <span className="btnA ps-0 pe-1" style={{borderRight:"0px solid #fff"}}> -</span>
                                        <input type="text" className="form-control floatinglabel me-0"style={{width:"65px"}} placeholder='14:11' />
                                        <a className="btnA font-20"style={{borderLeft:"1px solid #eee"}}>
                                        <img src="images/calendar-gray.svg" alt="img" /></a>
                                <span className="btnA font-20 col-black">00:00:00</span>
                                <button className="btn btn-success ps-4 pe-4 menual">ADD</button>
                                    </div>
                                </div>

                               
                                <div className="ms-2">
                                    <a className="btnB clickmode" data-show=".tracker" data-hide=".menual"><i className="zmdi zmdi-alarm"></i></a>
                                    <a className="btnB clickmode" data-hide=".tracker" data-show=".menual"><i className="zmdi zmdi-menu"></i></a>
                                </div>
                               
                            </div>
                            
                           
                        </div>
                    </div>
                    <div className="scroll_bar">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-12 col-lg-12 mt-3">
                                    {/* <p className="d-flex justify-content-between align-items-center col-grey mb-2">This Week Total <b className="col-black" id="fulltime"></b></p> */}
                                    <div className="bdr5 mb-0 d-flex justify-content-between align-items-center ps-3  pe-3 pt-2 pb-2 bdRT bgblulgt">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <b>Today</b>                          
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center">
                                            <b className="col-black me-1 font-16" id="fulltime"> </b>      
                                        </div>
                                    </div> 
                                    <div className="bdr5 mb-0 d-flex justify-content-between align-items-center p-1 bdRT">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <input type="text" className="form-control floatinglabel me-2" style={{width:"240px"}} placeholder='Add Description' />
                                            <a className="btnA col-blue fwN"><i className="zmdi zmdi-plus-circle me-1"></i> Project</a>                            
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center">                                
                                            <a className="btnA"> <img src="images/tag-gray.svg" alt="img" /></a>
                                            <a className="btnA font-20 a col-blue clickmode" data-hide=".a" data-show=".b">£</a>
                                            <a className="b btnA font-20  dd_none col-grey clickmode" data-hide=".b" data-show=".a">£</a>
                                            <div className="d-flex">
                                                <input type="text" className="form-control floatinglabel me-2" style={{width:"65px"}} placeholder='14:10' />
                                                <span className="btnA ps-0 pe-1" style={{borderRight:"0px solid #fff"}}> -</span>
                                                <input type="text" className="form-control floatinglabel me-0"style={{width:"65px"}} placeholder='14:11' />
                                                <a className="btnA font-20"style={{borderLeft:"1px solid #eee"}}>
                                                <img src="images/calendar-gray.svg" alt="img" /></a>
                                                <span className="btnA font-16 col-black">00:00:00</span>
                                                <a className="btnA"><img src="images/play.svg" alt="img" /></a>
                                                <a className="btnA"style={{borderRight:"0px solid #eee"}}><img src="images/menu-dots-vertical.svg" alt="img" /></a>
                                            </div>
                                        </div>
                                    </div>  

                                    <div className="bdr5 mb-0 d-flex justify-content-between align-items-center p-1 bdRT">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <button className="badge bg-primary me-1"onClick={toggleDiv}>2</button>
                                            <input type="text" className="form-control floatinglabel me-2" style={{width:"215px"}} placeholder='Task A' />
                                            <a className="btnA col-blue fwN"><i className="zmdi zmdi-plus-circle me-1"></i> Project</a>                            
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center">                                
                                            <a className="btnA"> <img src="images/tag-gray.svg" alt="img" /></a>
                                            <a className="btnA font-20 a col-blue clickmode" data-hide=".a" data-show=".b">£</a>
                                            <a className="b btnA font-20  dd_none col-grey clickmode" data-hide=".b" data-show=".a">£</a>
                                            <div className="d-flex">
                                                <input type="text" className="form-control floatinglabel me-2" style={{width:"65px"}} placeholder='14:10' />
                                                <span className="btnA ps-0 pe-1" style={{borderRight:"0px solid #fff"}}> -</span>
                                                <input type="text" className="form-control floatinglabel me-0"style={{width:"65px"}} placeholder='14:11' />
                                                <a className="btnA font-20"style={{borderLeft:"1px solid #eee"}}>
                                                <img src="images/calendar-gray.svg" alt="img" /></a>
                                                <span className="btnA font-16 col-black">00:00:00</span>
                                                <a className="btnA"><img src="images/play.svg" alt="img" /></a>
                                                <a className="btnA"style={{borderRight:"0px solid #eee"}}><img src="images/menu-dots-vertical.svg" alt="img" /></a>
                                            </div>
                                        </div>
                                    </div> 
                                    {isDivVisible && <div>
                                        
                                        <div className="bdr5 mb-0 d-flex justify-content-between align-items-center p-1 bdRT" style={{background:"#f9f9f9"}}>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <input type="text" className="form-control floatinglabel me-2" style={{width:"240px"}} placeholder='Task a.2' />
                                            <a className="btnA col-blue fwN"><i className="zmdi zmdi-plus-circle me-1"></i> Project</a>                            
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center">                                
                                            <a className="btnA"> <img src="images/tag-gray.svg" alt="img" /></a>
                                            <a className="btnA font-20 a col-blue clickmode" data-hide=".a" data-show=".b">£</a>
                                            <a className="b btnA font-20  dd_none col-grey clickmode" data-hide=".b" data-show=".a">£</a>
                                            <div className="d-flex">
                                                <input type="text" className="form-control floatinglabel me-2" style={{width:"65px"}} placeholder='14:10' />
                                                <span className="btnA ps-0 pe-1" style={{borderRight:"0px solid #fff"}}> -</span>
                                                <input type="text" className="form-control floatinglabel me-0"style={{width:"65px"}} placeholder='14:11' />
                                                <a className="btnA font-20"style={{borderLeft:"1px solid #eee"}}>
                                                <img src="images/calendar-gray.svg" alt="img" /></a>
                                                <span className="btnA font-16 col-black">00:00:00</span>
                                                <a className="btnA"><img src="images/play.svg" alt="img" /></a>
                                                <a className="btnA"style={{borderRight:"0px solid #eee"}}><img src="images/menu-dots-vertical.svg" alt="img" /></a>
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="bdr5 mb-0 d-flex justify-content-between align-items-center p-1 bdRT" style={{background:"#f9f9f9"}}>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <input type="text" className="form-control floatinglabel me-2" style={{width:"240px"}} placeholder='Task a.1' />
                                            <a className="btnA col-blue fwN"><i className="zmdi zmdi-plus-circle me-1"></i> Project</a>                            
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center">                                
                                            <a className="btnA"> <img src="images/tag-gray.svg" alt="img" /></a>
                                            <a className="btnA font-20 a col-blue clickmode" data-hide=".a" data-show=".b">£</a>
                                            <a className="b btnA font-20  dd_none col-grey clickmode" data-hide=".b" data-show=".a">£</a>
                                            <div className="d-flex">
                                                <input type="text" className="form-control floatinglabel me-2" style={{width:"65px"}} placeholder='14:10' />
                                                <span className="btnA ps-0 pe-1" style={{borderRight:"0px solid #fff"}}> -</span>
                                                <input type="text" className="form-control floatinglabel me-0"style={{width:"65px"}} placeholder='14:11' />
                                                <a className="btnA font-20"style={{borderLeft:"1px solid #eee"}}>
                                                <img src="images/calendar-gray.svg" alt="img" /></a>
                                                <span className="btnA font-16 col-black">00:00:00</span>
                                                <a className="btnA"><img src="images/play.svg" alt="img" /></a>
                                                <a className="btnA"style={{borderRight:"0px solid #eee"}}><img src="images/menu-dots-vertical.svg" alt="img" /></a>
                                            </div>
                                        </div>
                                    </div>  
                                        </div>}


                                </div>
                            </div>

                        </div>
                    </div>
                   
                </div>
            </section>
            <div className="modal right-quater md-one" id="addpage" tabindex="-1" role="dialog" aria-labelledby="shortModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-blu-lite fixed-top">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel2">
                                <b> <i className="zmdi zmdi-folder"></i> Create new project </b>
                            </h4>
                        </div>
                        <div className="modal-body ps-0 pe-0 pb-0 contbody">  
                            <div className="row  m-0">
                                <div className="col-12 col-sm-12">
                                    <div className="group_lead mt-4">
                                        <input type="text"className="input_text" required="required"/>
                                        <label for="" className="lablefilled"><i className="zmdi zmdi-folder col-grey">&nbsp;</i> Project Name</label>                                           
                                    </div>
                                    <div className="group_lead">
                                        <select className="custom-select select_f" required="required">
                                            <option>Select Client</option>                                            
                                        </select>                                           
                                    </div>
                                    <div className="group_lead">
                                        <select className="custom-select select_f" required="required">
                                            <option>Select Template</option>   
                                            <option>No Template</option>                                           
                                        </select>                                                                                  
                                    </div>
                                    <div className="checkbox mb-3 mt-0">
                                        <input id="NeverExpires " type="checkbox"/>
                                        <label for="NeverExpires ">Public</label>
                                    </div>
                                                                            
                                </div>
                            </div>
                        </div>
                        <div className="model-footer">
                            <div className="row m-0">
                                <div className="col-md-12">
                                    <div className="text-center">
                                        <button className="btn btn-primary clickmode me-1" data-show="." data-hide="" type="button"> <i className="zmdi zmdi-upload"></i> Save </button>
                                        <button className="btn btn-danger" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
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
