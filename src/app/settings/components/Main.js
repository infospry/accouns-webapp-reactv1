"use client"
import Loading from '@/app/components/Loading';
import React, { useState } from 'react';
import Account from './Account'
import Business from './Business'
import LogoAndTheme from './LogoAndTheme'
import EmailNotifications from './EmailNotifications'
import EmailTemplates from './EmailTemplates'
import Security from './Security'

import Image from 'next/image'

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
                <div className="booktab d-flex justify-content-between align-items-center bdrbtm">
                    <div className="p-2">
                        <h2 className="font-bold mb-0"><i className="zmdi zmdi-settings me-1"></i>Settings </h2>
                    </div>                   
                </div>
            </div>
            <div className="scroll_bar">
                <div className="booktab d-flex justify-content-between align-items-center bdrbtm">
                    <div className="">
                        <ul className="nav nav-tabs nav-justified p-0">
                            <li className="nav-item">
                                <a className="nav-link padnav font-16 clickmode active" data-show=".account"
                                    data-hide=".business,.theme,.notifications,.templates,.security" href="javascript:void(0);"><i
                                        className="zmdi zmdi-account"></i>
                                    <span className="d-none_small"> Account </span> </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link padnav font-16  clickmode" data-hide=".account,.theme,.notifications,.templates,.security"
                                    data-show=".business" href="javascript:void(0);"><i className="zmdi zmdi-case-check"></i>
                                    <span className="d-none_small"> Business </span> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link padnav font-16  clickmode" data-hide=".account,.business,.notifications,.templates,.security"
                                    data-show=".theme" href="javascript:void(0);"><i className="zmdi zmdi-widgets"></i>
                                    <span className="d-none_small"> Logo & Theme </span> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link padnav font-16  clickmode" data-hide=".account,.theme,.business,.templates,.security"
                                    data-show=".notifications" href="javascript:void(0);"><i className="zmdi zmdi-notifications"></i>
                                    <span className="d-none_small"> Email Notifications </span> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link padnav font-16  clickmode" data-hide=".account,.theme,.notifications,.business,.security"
                                    data-show=".templates" href="javascript:void(0);"><i className="zmdi zmdi-notifications"></i>
                                    <span className="d-none_small"> Email Templates </span> </a>
                            </li>  
                            <li className="nav-item">
                                <a className="nav-link padnav font-16  clickmode" data-hide=".account,.theme,.business,.notifications,.templates"
                                    data-show=".security" href="javascript:void(0);"><i className="zmdi zmdi-notifications"></i>
                                    <span className="d-none_small"> Security </span> </a>
                            </li>                            
                        </ul>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-12 mt-3 lb">
                            <div className='account p-4'>
                               <Account/>
                            </div>
                            <div className='business p-4 dd_none'>
                               <Business/>
                            </div>
                            <div className='theme p-0 dd_none'>
                                <LogoAndTheme/>
                            </div>
                            <div className='notifications abbs p-4 dd_none'>
                               <EmailNotifications/>
                            </div>
                            <div className='templates abbs p-4 dd_none'>
                                <EmailTemplates/>
                            </div>
                            <div className='security abbs p-4 dd_none'>
                               <Security/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="modal right-quater md-one" id="two-step" tabindex="-1" role="dialog" aria-labelledby="shortModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-blu-lite fixed-top">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel2">
                        <b> <i class="zmdi zmdi-shield-security"></i> Turn on two-step authentication</b>
                    </h4>
                </div>
                <div class="modal-body pr-0 pl-0 pb-0 contbody">  
                    <div class="p-3">                                            
                        <p><b>Select an authentication methd for your account.</b></p>
                        <hr/>
                        <div class="form-check">
                            <input type="radio" id="customRadio1" name="customRadio" class="form-check-input"style={{height:'1em'}}/>
                            <label class="form-check-label" for="customRadio1">
                                <h4 class="mb-0"><strong>Authenticator app</strong></h4>
                                <p class="mb-0">Use an app to generate an authentication code when you log in.</p>
                            </label>
                        </div>
                            <hr/>
                        <div class="form-check">
                            <input type="radio" id="customRadio2" name="customRadio" class="form-check-input"style={{height:'1em'}}/>
                            <label class="form-check-label" for="customRadio2">
                                <h4 class="mb-0"><strong>Security key</strong></h4>
                                <p class="mb-0">Use a compatible security key like a fingerprint reader or USB key when you log in.</p>
                            </label>
                        </div>
                            <hr/>
                        <div class="form-check ">
                            <input type="radio" id="customRadio3" name="customRadio" class="form-check-input"style={{height:'1em'}}/>
                            <label class="form-check-label" for="customRadio3">
                                <h4 class="mb-0"><strong>SMS delivery</strong></h4>
                                <p class="mb-0">Receive an SMS/text message with an authentication code when you log in.</p>
                            </label>
                        </div>                       
                    </div>
                </div>
                <div class="model-footer">
                    <div class="row m-0">
                        <div class="col-md-12">
                            <div class="text-center">
                                <button class="btn btn-primary clickmode me-1" data-show="." data-hide="" type="button"> <i class="zmdi zmdi-upload"></i> Save </button>
                                <button class="btn btn-danger" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
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