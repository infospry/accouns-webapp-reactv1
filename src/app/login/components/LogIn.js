'use client'
import Link from "next/link";

import Image from 'next/image'

import React from 'react';

const LogIn = () =>{

    return (
        <>
   
   <div class="full-width-wrapper">
    <div class="container">
        <div class="row justify-content-center">  
            <div class="col-lg-6 col-xl-5 col-md-9 col-sm-10">
                <form class="card auth_form login_area_hide">
                    <div class="header text-left">                       
                        <img class="m-auto" src="images/logod.png" alt="img" />
                        <p class="mt-4 mb-0 col-grey"><span class="font-24 col-black">Join as a professional</span> <br/>
                            Free to get started, instant online activation
                        </p>
                    </div>
                    <div class="body pt-1">
                        <div class="group">
                            <input type="text" id="Username" required="required"/>
                            <label for="Username"><i class="zmdi zmdi-email-open">&nbsp;</i>Your Email</label>
                            <div class="bar"></div>
                        </div>
                        <div class="group">
                            <input type="password" id="passwords" required="required"/>
                            <label for="passwords"><i class="zmdi zmdi-lock">&nbsp;</i> Password</label>
                            <span toggle="#password" class="zmdi field-icon toggle-password zmdi-eye col-grey"></span>
                            <div class="bar"></div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-6 pr-0">
                                    <div class="checkbox">
                                        <input id="remember_me" type="checkbox"/>
                                        <label for="remember_me">Remember Me </label>
                                    </div>
                                </div>
                                <div class="col-6 pl-0">
                                    <div class="float-end">
                                        <a href="#" class="col-blue  clickmode col-blue"data-hide=".login_area_hide"data-show=".forgot_passarea" ><b>Forgot Password</b></a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 mb-3 text-center">
                            <a href="/dashboard" class="btn btn-primary btn-lg btn-block waves-effect waves-light mt-3 mb-4"><b>Sign in</b> →</a>
                            <span class="text-center col-grey d-block">Don't have an account? <a href="#" class="col-blue ml-2 create-send-btn"><b> Sign Up Now</b>  →</a></span>                                    
                        </div>
                    </div>
                </form>
                <form class="card auth_form forgot_passarea ddnone">  
                    <div class="header text-center pb-0">
                        <h1 class="mb-0"><span class="col-black">Reset Password? </span> </h1>
                        <p class="mt-0 mb-0 col-grey">If you have forgotten your password, enter your e-mail address and we will send you an e mail telling you how to recover it.</p> 
                    </div>
                  
                    <div class="body pt-3">
                        <div class="group">
                            
                            <input type="text" id="email" required="required"/>
                            <label for="email"><i class="zmdi zmdi-email-open">&nbsp;</i> Mobile number or Email Id</label>
                            <div class="bar"></div>
                        </div>
                        <div class="group mt-4 mb-4 text-center">
                            <button type="submit" class="btn btn-primary btn-lg btn-block clickmode" data-hide=".forgot_passarea" data-show=".resetarea"> Send A Link to Reset </button>
                        </div>                                                             
                    </div>
                </form>
                

                <form class="card auth_form resetarea ddnone"> 
                    <div class="logo_sign text-center">  
                        <i class="zmdi zmdi-check-circle zmdi-hc-3x text-success"></i>                                              
                        <h5>OTP Process </h5>
                        <p>Please enter OTP we have sent you </p>
                    </div>                         
                    <div class="body pt-3">
                        <div class="code_group m-auto"> 
                            <input type="text" class="form-control" placeholder="0"/>
                            <input type="text" class="form-control" placeholder="0"/>
                            <input type="text" class="form-control" placeholder="0"/>
                            <input type="text" class="form-control mb-3" placeholder="0"/>
                          </div> 
                          <div class="row mt-4 mb-3 justify-content-between">
                            <div class="col-6"><p class=""><span class="">Trying to Auto Capture</span> </p></div>
                            <div class="col-6 text-end"><p class=""><span class="">00:40</span></p></div>
                        </div>
                        <div class="mt-4 mb-4 text-center">
                            <button type="submit" class="btn btn-primary btn-lg btn-block clickmode" data-hide=".resetarea" data-show=".resetareapasswordd"> Submit </button>
                        </div>                                                             
                    </div>
                </form>

                <form class="card auth_form  ddnone  resetareapasswordd">   
                    <div class="header text-center pb-0">
                        <h1 class="mb-0"><span class="col-black">Change Password </span> </h1>
                     </div>                  
                    <div class="body pt-3">
                        <div class="group">                                 
                            <input type="password" id="password" required="required"/>
                                <label for="password"><i class="zmdi zmdi-lock col-grey">&nbsp;</i>  New Password</label>
                                <span toggle="#password" class="zmdi field-icon toggle-password zmdi-eye col-grey"></span>
                                <div class="bar"></div>
                        </div> 
                        <p>
                            <span class="badge badge-light">8 Charactors</span> <span class="badge badge-light">1 Soecial</span> <span class="badge badge-light">1 Uppercase</span> <span class="badge badge-light">1 Numeric</span>
                        </p>
                        <div class="group">
                                <input type="password" id="passwordd" required="required"/>
                                <label for="passwordd"><i class="zmdi zmdi-lock-open col-grey"></i> Confirm New Password</label>
                                <span toggle="#password" class="zmdi field-icon toggle-password zmdi-eye col-grey"></span>
                                <div class="bar"></div>
                        </div>                          
                        <div class="mt-4 mb-4 text-center">
                            <button type="submit" class="btn btn-primary btn-lg btn-block  clickmode" data-hide=".resetareapasswordd" data-show=".thankspasswordd"> Reset Password </button>
                        </div>                                                             
                    </div>
                </form>
                <div class="thankspasswordd ddnone">
                    <div class="d-flex align-items-center justify-content-center mt-4"> 
                        <div class="thAnKmAiN text-center mt-4">                                  
                            <i class="zmdi zmdi-check-circle zmdi-hc-3x text-success"></i>
                            <h5>Thank You  <br/>For Change Password</h5>                                            
                            <button type="submit" class="btn btn-primary btn-lg btn-block mt-3  clickmode" data-hide=".thankspasswordd" data-show=".login_area_hide"> Login </button>
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