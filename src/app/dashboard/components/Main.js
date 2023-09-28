"use client"
import React from 'react'
import Link from "next/link";




function Main() {
  return (
    <section className="content">
        <div className="body_scroll">
            <div className="scrolfx">
                <div className="booktab d-flex justify-content-between align-items-center bdrb">
                    <div className="p-2">
                        <h2 className="font-bold mb-0"><i className="zmdi zmdi-view-dashboard me-1"></i>Dashboard </h2>
                    </div>
                    <div className="pagination-email">
                        <div className="btn-group bdrr dnone-mob pe-0">
                            <button className="btn btn-outline-primary dropdown-toggle pe-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <span className="col-grey me-1">Last 7 Days</span>
                                <b>Jun 7 - 13,2019</b>
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#">
                                    <i className="zmdi zmdi-calendar"></i>
                                    <b>Jun 7 - 13,2019</b>
                                </a>
                                <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#">
                                    <i className="zmdi zmdi-calendar"></i>
                                    <b>Jun 8 - 14,2019</b>
                                </a>
                                <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#">
                                    <i className="zmdi zmdi-calendar"></i>
                                    <b>Jun 9 - 18,2019</b>
                                </a>
                                <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#">
                                    <i className="zmdi zmdi-calendar"></i>
                                    <b>Jun 10 - 19,2019</b>
                                </a>
                                <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#">
                                    <i className="zmdi zmdi-calendar"></i>
                                    <b>Jun 11 - 29,2019</b>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactlist scroll_bar">
                <div className="container-fluid"> 
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main
