'use client'
import Link from "next/link";

import Image from 'next/image'

import React from 'react';

const LogIn = () =>{

    return (
        <>
   
   <div className="full-width-wrapper">
    <div className="container">
        <div className="row justify-content-center">  
            <div className="col-lg-6 col-xl-5 col-md-9 col-sm-10">
                <form className="card auth_form login_area_hide">
                    <div className="header text-left">                       
                        <img className="m-auto" src="images/logod.png" alt="img" style={{ height: 'auto' }} />
                        <p className="mt-4 mb-0 col-grey"><span className="font-24 col-black">Join as a professional</span> <br/>
                            Free to get started, instant online activation
                        </p>
                    </div>
                    <div className="body pt-1">
                        <div className="group">
                            <input type="text" id="Username" required="required"/>
                            <label htmlFor="Username"><i className="zmdi zmdi-email-open">&nbsp;</i>Your Email</label>
                            <div className="bar"></div>
                        </div>
                        <div className="group">
                            <input type="password" id="passwords" required="required"/>
                            <label htmlFor="passwords"><i className="zmdi zmdi-lock">&nbsp;</i> Password</label>
                            <span toggle="#password" className="zmdi field-icon toggle-password zmdi-eye col-grey"></span>
                            <div className="bar"></div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-6 pr-0">
                                    <div className="checkbox">
                                        <input id="remember_me" type="checkbox"/>
                                        <label htmlFor="remember_me">Remember Me </label>
                                    </div>
                                </div>
                                <div className="col-6 pl-0">
                                    <div className="float-end">
                                        <a className="col-blue  clickmode col-blue"data-hide=".login_area_hide"data-show=".forgot_passarea" >Forgot Password</a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 mb-3 text-center">
                            <a href="/dashboard" className="btn btn-primary btn-lg btn-block waves-effect waves-light mt-3 mb-4">Sign in →</a>
                            <span className="text-center col-grey d-block">Don't have an account? <a  className="col-blue ml-2 create-send-btn"> Sign Up Now  →</a></span>                                    
                        </div>
                    </div>
                </form>
                <form className="auth_form forgot_passarea ddnone">  
                    <div className="header text-center pb-0">
                        <h1 className="mb-0"><span className="col-black">Reset Password? </span> </h1>
                        <p className="mt-0 mb-0 col-grey">If you have forgotten your password, enter your e-mail address and we will send you an e mail telling you how to recover it.</p> 
                    </div>
                  
                    <div className="body pt-3">
                        <div className="group">
                            
                            <input type="text" id="email" required="required"/>
                            <label htmlFor="email"><i className="zmdi zmdi-email-open">&nbsp;</i> Mobile number or Email Id</label>
                            <div className="bar"></div>
                        </div>
                        <div className="group mt-4 mb-4 text-center">
                            <button type="submit" className="btn btn-primary btn-lg btn-block clickmode" data-hide=".forgot_passarea" data-show=".resetarea"> Send A Link to Reset </button>
                        </div>                                                             
                    </div>
                </form>
                

                <form className="auth_form resetarea ddnone"> 
                    <div className="logo_sign text-center">  
                        <i className="zmdi zmdi-check-circle zmdi-hc-3x text-success"></i>                                              
                        <h5>OTP Process </h5>
                        <p>Please enter OTP we have sent you </p>
                    </div>                         
                    <div className="body pt-3">
                        <div className="code_group m-auto"> 
                            <input type="text" className="form-control" placeholder="0"/>
                            <input type="text" className="form-control" placeholder="0"/>
                            <input type="text" className="form-control" placeholder="0"/>
                            <input type="text" className="form-control mb-3" placeholder="0"/>
                          </div> 
                          <div className="row mt-4 mb-3 justify-content-between">
                            <div className="col-6"><p className=""><span className="">Trying to Auto Capture</span> </p></div>
                            <div className="col-6 text-end"><p className=""><span className="">00:40</span></p></div>
                        </div>
                        <div className="mt-4 mb-4 text-center">
                            <button type="submit" className="btn btn-primary btn-lg btn-block clickmode" data-hide=".resetarea" data-show=".resetareapasswordd"> Submit </button>
                        </div>                                                             
                    </div>
                </form>

                <form className="auth_form  ddnone  resetareapasswordd">   
                    <div className="header text-center pb-0">
                        <h1 className="mb-0"><span className="col-black">Change Password </span> </h1>
                     </div>                  
                    <div className="body pt-3">
                        <div className="group">                                 
                            <input type="password" id="password" required="required"/>
                                <label htmlFor="password"><i className="zmdi zmdi-lock col-grey">&nbsp;</i>  New Password</label>
                                <span toggle="#password" className="zmdi field-icon toggle-password zmdi-eye col-grey"></span>
                                <div className="bar"></div>
                        </div> 
                        <p>
                            <span className="badge badge-light">8 Charactors</span> <span className="badge badge-light">1 Soecial</span> <span className="badge badge-light">1 Uppercase</span> <span className="badge badge-light">1 Numeric</span>
                        </p>
                        <div className="group">
                                <input type="password" id="passwordd" required="required"/>
                                <label htmlFor="passwordd"><i className="zmdi zmdi-lock-open col-grey"></i> Confirm New Password</label>
                                <span toggle="#password" className="zmdi field-icon toggle-password zmdi-eye col-grey"></span>
                                <div className="bar"></div>
                        </div>                          
                        <div className="mt-4 mb-4 text-center">
                            <button type="submit" className="btn btn-primary btn-lg btn-block  clickmode" data-hide=".resetareapasswordd" data-show=".thankspasswordd"> Reset Password </button>
                        </div>                                                             
                    </div>
                </form>
                <div className="thankspasswordd ddnone">
                    <div className="d-flex align-items-center justify-content-center mt-4"> 
                        <div className="thAnKmAiN text-center mt-4">                                  
                            <i className="zmdi zmdi-check-circle zmdi-hc-3x text-success"></i>
                            <h5>Thank You  <br/>For Change Password</h5>                                            
                            <button type="submit" className="btn btn-primary btn-lg btn-block mt-3  clickmode" data-hide=".thankspasswordd" data-show=".login_area_hide"> Login </button>
                        </div> 
                    </div>                      
                </div>               
            </div>            
        </div>
    </div>
</div>

        </>
    );
};
export default LogIn;