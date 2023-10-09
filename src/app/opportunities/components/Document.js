"use client"
import React from 'react'

function Document() {
  return (
    <>
    <div className="booktab d-flex justify-content-between align-items-center bdrbtm">
        <div className="p-2">
            <h2 className="font-bold mb-0 font-20">My Document </h2>
        </div>
        <div className="pe-2">
            
            <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addmydoc"><i
                    className="zmdi zmdi-plus-circle-o-duplicate"></i> Add New</a>
            <div className="btn-group ms-1">
                <button className="btn btn-outline-primary  dropdown-toggle font-w" type="button"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">More</button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#"><i className="zmdi zmdi-upload"></i> Export</a>
                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#"><i className="zmdi zmdi-download"></i> Import</a>
                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#"><i className="zmdi zmdi-email"></i> Send Email</a>
                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#"><i className="zmdi zmdi-repeat"></i> History</a>
                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#"><i className="zmdi zmdi-rotate-left"></i> Refresh</a>
                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#"><i className="zmdi zmdi-notifications-active"></i> Delete</a>
                </div>
            </div>
        </div>
    </div>
    <div className="dnnone doclist">
        <div className="table-responsive mb-3">
            <table className="table table-bordered rwd-table btdr_none mb-3">
                <thead className="font_b dnone-mob">
                    <tr className="font_btd">
                        <th style={{width:"30px"}}>
                            #
                        </th>
                        <th> File Name </th>
                        <th>Folder</th>
                        <th> Modified on </th>
                        <th>File Type</th>
                        <th style={{width:"180px"}}> Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td className="">
                            1
                        </td>
                        <td className="pt-3 pb-3">
                            <span className="u_image float-left mr-2"><img src="images/pdf.png"
                                    alt="user" className="rounded" width="36" /></span>
                            <span className="float-left">
                                <span className="float-left nowrap-w220"><b>Yonger than Yestarday
                                    </b> - Delhi Metro Rail Corporation</span><br />
                                <small>File Size :- 5mb</small>
                            </span>
                        </td>
                        <td>Policies</td>
                        <td className="col-grey"> 03/06/2021</td>
                        <td>PDF</td>
                        <td>
                            <div className="btn-group">
                                <button type="button"
                                    className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"> Action <span
                                        className="caret"></span></button>
                                <ul className="dropdown-menu dr-breakout">
                                    <li className="btn btn-outline-primary btn-sm" title="Edit"
                                        data-toggle="modal" data-target=""> <i
                                            className="zmdi zmdi-download"></i> </li>
                                    <li className="btn btn-outline-primary ms-1 me-1 btn-sm" title="Edit"
                                        data-toggle="modal" data-target="#addmydoc"> <i
                                            className="zmdi zmdi-edit"></i> <span
                                            className="dnone-mob">Edit</span></li>
                                    <li className="btn btn-danger btn-sm" title="Delete"
                                        type="button"> <i className="zmdi zmdi-delete"></i> <span
                                            className="dnone-mob">Delete</span></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="">
                            2
                        </td>
                        <td className="pt-3 pb-3">
                            <span className="u_image float-left mr-2"><img src="images/word.png"
                                    alt="user" className="rounded" width="36" /></span>
                            <span className="float-left">
                                <span className="float-left nowrap-w220"><b>Delhi Metro Rail
                                        Corporation </b> - </span><br />
                                <small>File Size :- 5mb</small>
                            </span>
                        </td>
                        <td>Policies</td>
                        <td className="col-grey"> 03/06/2021</td>
                        <td>world</td>
                        <td>
                            <div className="btn-group">
                                <button type="button"
                                    className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"> Action <span
                                        className="caret"></span></button>
                                <ul className="dropdown-menu dr-breakout">
                                    <li className="btn btn-outline-primary btn-sm" title="Edit"
                                        data-toggle="modal" data-target=""> <i
                                            className="zmdi zmdi-download"></i> </li>
                                    <li className="btn btn-outline-primary ms-1 me-1 btn-sm" title="Edit"
                                        data-toggle="modal" data-target="#addmydoc"> <i
                                            className="zmdi zmdi-edit"></i> <span
                                            className="dnone-mob">Edit</span></li>
                                    <li className="btn btn-danger btn-sm" title="Delete"
                                        type="button"> <i className="zmdi zmdi-delete"></i> <span
                                            className="dnone-mob">Delete</span></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="">
                            3
                        </td>
                        <td className="pt-3 pb-3">
                            <span className="u_image float-left mr-2"><img src="images/exel.png"
                                    alt="user" className="rounded" width="36" /></span>
                            <span className="float-left">
                                <span className="float-left nowrap-w220"><b> Metro Rail Corporation
                                    </b> - </span><br />
                                <small>File Size :- 120kb</small>
                            </span>
                        </td>
                        <td>Policies</td>
                        <td className="col-grey"> 03/06/2021</td>
                        <td>Exel</td>
                        <td>
                            <div className="btn-group">
                                <button type="button"
                                    className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"> Action <span
                                        className="caret"></span></button>
                                <ul className="dropdown-menu dr-breakout">
                                    <li className="btn btn-outline-primary btn-sm" title="Edit"
                                        data-toggle="modal" data-target=""> <i
                                            className="zmdi zmdi-download"></i> </li>
                                    <li className="btn btn-outline-primary ms-1 me-1 btn-sm" title="Edit"
                                        data-toggle="modal" data-target="#addmydoc"> <i
                                            className="zmdi zmdi-edit"></i> <span
                                            className="dnone-mob">Edit</span></li>
                                    <li className="btn btn-danger btn-sm" title="Delete"
                                        type="button"> <i className="zmdi zmdi-delete"></i> <span
                                            className="dnone-mob">Delete</span></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="">
                            4
                        </td>
                        <td className="pt-3 pb-3">
                            <span className="u_image float-left mr-2"><img src="images/jpg.png"
                                    alt="user" className="rounded" width="36" /></span>
                            <span className="float-left">
                                <span className="float-left nowrap-w220"><b> Rail Corporation Delhi
                                        Metro</b> - </span><br />
                                <small>File Size :-105kb</small>
                            </span>
                        </td>
                        <td>Policies</td>
                        <td className="col-grey"> 13/06/2021</td>
                        <td>JPEG</td>
                        <td>
                            <div className="btn-group">
                                <button type="button"
                                    className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"> Action <span
                                        className="caret"></span></button>
                                <ul className="dropdown-menu dr-breakout">
                                    <li className="btn btn-outline-primary btn-sm" title="Edit"
                                        data-toggle="modal" data-target=""> <i
                                            className="zmdi zmdi-download"></i> </li>
                                    <li className="btn btn-outline-primary ms-1 me-1 btn-sm" title="Edit"
                                        data-toggle="modal" data-target="#addmydoc"> <i
                                            className="zmdi zmdi-edit"></i> <span
                                            className="dnone-mob">Edit</span></li>
                                    <li className="btn btn-danger btn-sm" title="Delete"
                                        type="button"> <i className="zmdi zmdi-delete"></i> <span
                                            className="dnone-mob">Delete</span></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="">
                            5
                        </td>
                        <td className="pt-3 pb-3">
                            <span className="u_image float-left mr-2"><img src="images/png.png"
                                    alt="user" className="rounded" width="36" /></span>
                            <span className="float-left">
                                <span className="float-left nowrap-w220"><b> Metro Rail Corporation
                                    </b> - </span><br />
                                <small>File Size :- 12mb</small>
                            </span>
                        </td>
                        <td>Policies</td>
                        <td className="col-grey"> 03/06/2021</td>
                        <td>PNG</td>
                        <td>
                            <div className="btn-group">
                                <button type="button"
                                    className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"> Action <span
                                        className="caret"></span></button>
                                <ul className="dropdown-menu dr-breakout">
                                    <li className="btn btn-outline-primary btn-sm" title="Edit"
                                        data-toggle="modal" data-target=""> <i
                                            className="zmdi zmdi-download"></i> </li>
                                    <li className="btn btn-outline-primary ms-1 me-1 btn-sm" title="Edit"
                                        data-toggle="modal" data-target="#addmydoc"> <i
                                            className="zmdi zmdi-edit"></i> <span
                                            className="dnone-mob">Edit</span></li>
                                    <li className="btn btn-danger btn-sm" title="Delete"
                                        type="button"> <i className="zmdi zmdi-delete"></i> <span
                                            className="dnone-mob">Delete</span></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="">
                            1
                        </td>
                        <td className="pt-3 pb-3">
                            <span className="u_image float-left mr-2"><img src="images/pdf.png"
                                    alt="user" className="rounded" width="36" /></span>
                            <span className="float-left">
                                <span className="float-left nowrap-w220"><b>Yonger than Yestarday
                                    </b> - Delhi Metro Rail Corporation</span><br />
                                <small>File Size :- 5mb</small>
                            </span>
                        </td>
                        <td>Policies</td>
                        <td className="col-grey"> 03/06/2021</td>
                        <td>PDF</td>
                        <td>
                            <div className="btn-group">
                                <button type="button"
                                    className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"> Action <span
                                        className="caret"></span></button>
                                <ul className="dropdown-menu dr-breakout">
                                    <li className="btn btn-outline-primary btn-sm" title="Edit"
                                        data-toggle="modal" data-target=""> <i
                                            className="zmdi zmdi-download"></i> </li>
                                    <li className="btn btn-outline-primary ms-1 me-1 btn-sm" title="Edit"
                                        data-toggle="modal" data-target="#addmydoc"> <i
                                            className="zmdi zmdi-edit"></i> <span
                                            className="dnone-mob">Edit</span></li>
                                    <li className="btn btn-danger btn-sm" title="Delete"
                                        type="button"> <i className="zmdi zmdi-delete"></i> <span
                                            className="dnone-mob">Delete</span></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="">
                            2
                        </td>
                        <td className="pt-3 pb-3">
                            <span className="u_image float-left mr-2"><img src="images/word.png"
                                    alt="user" className="rounded" width="36" /></span>
                            <span className="float-left">
                                <span className="float-left nowrap-w220"><b>Delhi Metro Rail
                                        Corporation </b> - </span><br />
                                <small>File Size :- 5mb</small>
                            </span>
                        </td>
                        <td>Policies</td>
                        <td className="col-grey"> 03/06/2021</td>
                        <td>world</td>
                        <td>
                            <div className="btn-group">
                                <button type="button"
                                    className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"> Action <span
                                        className="caret"></span></button>
                                <ul className="dropdown-menu dr-breakout">
                                    <li className="btn btn-outline-primary btn-sm" title="Edit"
                                        data-toggle="modal" data-target=""> <i
                                            className="zmdi zmdi-download"></i> </li>
                                    <li className="btn btn-outline-primary ms-1 me-1 btn-sm" title="Edit"
                                        data-toggle="modal" data-target="#addmydoc"> <i
                                            className="zmdi zmdi-edit"></i> <span
                                            className="dnone-mob">Edit</span></li>
                                    <li className="btn btn-danger btn-sm" title="Delete"
                                        type="button"> <i className="zmdi zmdi-delete"></i> <span
                                            className="dnone-mob">Delete</span></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="">
                            3
                        </td>
                        <td className="pt-3 pb-3">
                            <span className="u_image float-left mr-2"><img src="images/exel.png"
                                    alt="user" className="rounded" width="36" /></span>
                            <span className="float-left">
                                <span className="float-left nowrap-w220"><b> Metro Rail Corporation
                                    </b> - </span><br />
                                <small>File Size :- 120kb</small>
                            </span>
                        </td>
                        <td>Policies</td>
                        <td className="col-grey"> 03/06/2021</td>
                        <td>Exel</td>
                        <td>
                            <div className="btn-group">
                                <button type="button"
                                    className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"> Action <span
                                        className="caret"></span></button>
                                <ul className="dropdown-menu dr-breakout">
                                    <li className="btn btn-outline-primary btn-sm" title="Edit"
                                        data-toggle="modal" data-target=""> <i
                                            className="zmdi zmdi-download"></i> </li>
                                    <li className="btn btn-outline-primary ms-1 me-1 btn-sm" title="Edit"
                                        data-toggle="modal" data-target="#addmydoc"> <i
                                            className="zmdi zmdi-edit"></i> <span
                                            className="dnone-mob">Edit</span></li>
                                    <li className="btn btn-danger btn-sm" title="Delete"
                                        type="button"> <i className="zmdi zmdi-delete"></i> <span
                                            className="dnone-mob">Delete</span></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="">
                            4
                        </td>
                        <td className="pt-3 pb-3">
                            <span className="u_image float-left mr-2"><img src="images/jpg.png"
                                    alt="user" className="rounded" width="36" /></span>
                            <span className="float-left">
                                <span className="float-left nowrap-w220"><b> Rail Corporation Delhi
                                        Metro</b> - </span><br />
                                <small>File Size :-105kb</small>
                            </span>
                        </td>
                        <td>Policies</td>
                        <td className="col-grey"> 13/06/2021</td>
                        <td>JPEG</td>
                        <td>
                            <div className="btn-group">
                                <button type="button"
                                    className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"> Action <span
                                        className="caret"></span></button>
                                <ul className="dropdown-menu dr-breakout">
                                    <li className="btn btn-outline-primary btn-sm" title="Edit"
                                        data-toggle="modal" data-target=""> <i
                                            className="zmdi zmdi-download"></i> </li>
                                    <li className="btn btn-outline-primary ms-1 me-1 btn-sm" title="Edit"
                                        data-toggle="modal" data-target="#addmydoc"> <i
                                            className="zmdi zmdi-edit"></i> <span
                                            className="dnone-mob">Edit</span></li>
                                    <li className="btn btn-danger btn-sm" title="Delete"
                                        type="button"> <i className="zmdi zmdi-delete"></i> <span
                                            className="dnone-mob">Delete</span></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="">
                            5
                        </td>
                        <td className="pt-3 pb-3">
                            <span className="u_image float-left mr-2"><img src="images/png.png"
                                    alt="user" className="rounded" width="36" /></span>
                            <span className="float-left">
                                <span className="float-left nowrap-w220"><b> Metro Rail Corporation
                                    </b> - </span><br />
                                <small>File Size :- 12mb</small>
                            </span>
                        </td>
                        <td>Policies</td>
                        <td className="col-grey"> 03/06/2021</td>
                        <td>PNG</td>
                        <td>
                            <div className="btn-group">
                                <button type="button"
                                    className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"> Action <span
                                        className="caret"></span></button>
                                <ul className="dropdown-menu dr-breakout">
                                    <li className="btn btn-outline-primary btn-sm" title="Edit"
                                        data-toggle="modal" data-target=""> <i
                                            className="zmdi zmdi-download"></i> </li>
                                    <li className="btn btn-outline-primary ms-1 me-1 btn-sm" title="Edit"
                                        data-toggle="modal" data-target="#addmydoc"> <i
                                            className="zmdi zmdi-edit"></i> <span
                                            className="dnone-mob">Edit</span></li>
                                    <li className="btn btn-danger btn-sm" title="Delete"
                                        type="button"> <i className="zmdi zmdi-delete"></i> <span
                                            className="dnone-mob">Delete</span></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="">
                            1
                        </td>
                        <td className="pt-3 pb-3">
                            <span className="u_image float-left mr-2"><img src="images/pdf.png"
                                    alt="user" className="rounded" width="36" /></span>
                            <span className="float-left">
                                <span className="float-left nowrap-w220"><b>Yonger than Yestarday
                                    </b> - Delhi Metro Rail Corporation</span><br />
                                <small>File Size :- 5mb</small>
                            </span>
                        </td>
                        <td>Policies</td>
                        <td className="col-grey"> 03/06/2021</td>
                        <td>PDF</td>
                        <td>
                            <div className="btn-group">
                                <button type="button"
                                    className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"> Action <span
                                        className="caret"></span></button>
                                <ul className="dropdown-menu dr-breakout">
                                    <li className="btn btn-outline-primary btn-sm" title="Edit"
                                        data-toggle="modal" data-target=""> <i
                                            className="zmdi zmdi-download"></i> </li>
                                    <li className="btn btn-outline-primary ms-1 me-1 btn-sm" title="Edit"
                                        data-toggle="modal" data-target="#addmydoc"> <i
                                            className="zmdi zmdi-edit"></i> <span
                                            className="dnone-mob">Edit</span></li>
                                    <li className="btn btn-danger btn-sm" title="Delete"
                                        type="button"> <i className="zmdi zmdi-delete"></i> <span
                                            className="dnone-mob">Delete</span></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="">
                            2
                        </td>
                        <td className="pt-3 pb-3">
                            <span className="u_image float-left mr-2"><img src="images/word.png"
                                    alt="user" className="rounded" width="36" /></span>
                            <span className="float-left">
                                <span className="float-left nowrap-w220"><b>Delhi Metro Rail
                                        Corporation </b> - </span><br />
                                <small>File Size :- 5mb</small>
                            </span>
                        </td>
                        <td>Policies</td>
                        <td className="col-grey"> 03/06/2021</td>
                        <td>world</td>
                        <td>
                            <div className="btn-group">
                                <button type="button"
                                    className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"> Action <span
                                        className="caret"></span></button>
                                <ul className="dropdown-menu dr-breakout">
                                    <li className="btn btn-outline-primary btn-sm" title="Edit"
                                        data-toggle="modal" data-target=""> <i
                                            className="zmdi zmdi-download"></i> </li>
                                    <li className="btn btn-outline-primary ms-1 me-1 btn-sm" title="Edit"
                                        data-toggle="modal" data-target="#addmydoc"> <i
                                            className="zmdi zmdi-edit"></i> <span
                                            className="dnone-mob">Edit</span></li>
                                    <li className="btn btn-danger btn-sm" title="Delete"
                                        type="button"> <i className="zmdi zmdi-delete"></i> <span
                                            className="dnone-mob">Delete</span></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="">
                            3
                        </td>
                        <td className="pt-3 pb-3">
                            <span className="u_image float-left mr-2"><img src="images/exel.png"
                                    alt="user" className="rounded" width="36" /></span>
                            <span className="float-left">
                                <span className="float-left nowrap-w220"><b> Metro Rail Corporation
                                    </b> - </span><br />
                                <small>File Size :- 120kb</small>
                            </span>
                        </td>
                        <td>Policies</td>
                        <td className="col-grey"> 03/06/2021</td>
                        <td>Exel</td>
                        <td>
                            <div className="btn-group">
                                <button type="button"
                                    className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"> Action <span
                                        className="caret"></span></button>
                                <ul className="dropdown-menu dr-breakout">
                                    <li className="btn btn-outline-primary btn-sm" title="Edit"
                                        data-toggle="modal" data-target=""> <i
                                            className="zmdi zmdi-download"></i> </li>
                                    <li className="btn btn-outline-primary ms-1 me-1 btn-sm" title="Edit"
                                        data-toggle="modal" data-target="#addmydoc"> <i
                                            className="zmdi zmdi-edit"></i> <span
                                            className="dnone-mob">Edit</span></li>
                                    <li className="btn btn-danger btn-sm" title="Delete"
                                        type="button"> <i className="zmdi zmdi-delete"></i> <span
                                            className="dnone-mob">Delete</span></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="">
                            4
                        </td>
                        <td className="pt-3 pb-3">
                            <span className="u_image float-left mr-2"><img src="images/jpg.png"
                                    alt="user" className="rounded" width="36" /></span>
                            <span className="float-left">
                                <span className="float-left nowrap-w220"><b> Rail Corporation Delhi
                                        Metro</b> - </span><br />
                                <small>File Size :-105kb</small>
                            </span>
                        </td>
                        <td>Policies</td>
                        <td className="col-grey"> 13/06/2021</td>
                        <td>JPEG</td>
                        <td>
                            <div className="btn-group">
                                <button type="button"
                                    className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"> Action <span
                                        className="caret"></span></button>
                                <ul className="dropdown-menu dr-breakout">
                                    <li className="btn btn-outline-primary btn-sm" title="Edit"
                                        data-toggle="modal" data-target=""> <i
                                            className="zmdi zmdi-download"></i> </li>
                                    <li className="btn btn-outline-primary ms-1 me-1 btn-sm" title="Edit"
                                        data-toggle="modal" data-target="#addmydoc"> <i
                                            className="zmdi zmdi-edit"></i> <span
                                            className="dnone-mob">Edit</span></li>
                                    <li className="btn btn-danger btn-sm" title="Delete"
                                        type="button"> <i className="zmdi zmdi-delete"></i> <span
                                            className="dnone-mob">Delete</span></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="">
                            5
                        </td>
                        <td className="pt-3 pb-3">
                            <span className="u_image float-left mr-2"><img src="images/png.png"
                                    alt="user" className="rounded" width="36" /></span>
                            <span className="float-left">
                                <span className="float-left nowrap-w220"><b> Metro Rail Corporation
                                    </b> - </span><br />
                                <small>File Size :- 12mb</small>
                            </span>
                        </td>
                        <td>Policies</td>
                        <td className="col-grey"> 03/06/2021</td>
                        <td>PNG</td>
                        <td>
                            <div className="btn-group">
                                <button type="button"
                                    className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"> Action <span
                                        className="caret"></span></button>
                                <ul className="dropdown-menu dr-breakout">
                                    <li className="btn btn-outline-primary btn-sm" title="Edit"
                                        data-toggle="modal" data-target=""> <i
                                            className="zmdi zmdi-download"></i> </li>
                                    <li className="btn btn-outline-primary ms-1 me-1 btn-sm" title="Edit"
                                        data-toggle="modal" data-target="#addmydoc"> <i
                                            className="zmdi zmdi-edit"></i> <span
                                            className="dnone-mob">Edit</span></li>
                                    <li className="btn btn-danger btn-sm" title="Delete"
                                        type="button"> <i className="zmdi zmdi-delete"></i> <span
                                            className="dnone-mob">Delete</span></li>
                                </ul>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default Document

