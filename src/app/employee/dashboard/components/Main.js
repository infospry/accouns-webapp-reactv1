"use client"
import Loading from '@/app/components/Loading'
import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';

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
                                <h2 className="font-bold mb-0"><i className="zmdi zmdi-account-alt me-1"></i>Employee Dashboard </h2>
                            </div>
                            <div className="pe-2 d-flex">
                                <div className="input-group" style={{ maxWidth: '460px' }}>
                                    <input type="text" className="form-control radius_l" aria-label="Text input with dropdown button" placeholder='Search...' />
                                    <button className="btn btn-outline-secondary dropdown-toggle radius_r" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="zmdi zmdi-tune"></i> Advance Search</button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="scroll_bar">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-12 col-lg-12 mt-3">
                                    
                                    <div className='Lodingbox'>
                                        <Loading />
                                    </div>
                                    <div class="dd_none contactlist">
                                        
                                           
                                       
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
