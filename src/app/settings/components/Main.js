"use client"
import Loading from '@/app/components/Loading';
import React, { useState } from 'react';
import Account from './Account'
import Business from './Business'
import LogoAndTheme from './LogoAndTheme'
import EmailNotifications from './EmailNotifications'
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
                                    data-hide=".business,.theme,.notifications" href="javascript:void(0);"><i
                                        className="zmdi zmdi-account"></i>
                                    <span className="d-none_small"> Account </span> </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link padnav font-16  clickmode" data-hide=".account,.theme,.notifications"
                                    data-show=".business" href="javascript:void(0);"><i className="zmdi zmdi-case-check"></i>
                                    <span className="d-none_small"> Business </span> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link padnav font-16  clickmode" data-hide=".account,.business,.notifications"
                                    data-show=".theme" href="javascript:void(0);"><i className="zmdi zmdi-widgets"></i>
                                    <span className="d-none_small"> Logo & Theme </span> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link padnav font-16  clickmode" data-hide=".account,.theme,.business"
                                    data-show=".notifications" href="javascript:void(0);"><i className="zmdi zmdi-notifications"></i>
                                    <span className="d-none_small"> Email Notifications </span> </a>
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
                            <div className='notifications p-4 dd_none'>
                               <EmailNotifications/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</>
)
}

export default Main