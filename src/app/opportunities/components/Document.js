"use client"
import React from 'react'
import Image from 'next/image';
import menuImage from "../../images/menu-dots-vertical.svg";
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
        <div className="table-responsive mb-4">
            <table className="table btdr_none mb-3">
                <thead className="font_b dnone-mob">
                    <tr className="font_btd">
                        <th style={{width:"30px"}}>
                            #
                        </th>
                        <th> File Name </th>
                        <th>Folder</th>
                        <th> Modified on </th>
                        <th>File Type</th>
                        <th style={{width:"20px"}}> - </th>
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
                            <div className="dropdown">
                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal"><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addmydoc"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
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
                           <div className="dropdown">
                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal"><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addmydoc"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
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
                           <div className="dropdown">
                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal"><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addmydoc"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
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
                           <div className="dropdown">
                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal"><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addmydoc"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
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
                           <div className="dropdown">
                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal"><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addmydoc"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
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
                           <div className="dropdown">
                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal"><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addmydoc"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
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
                           <div className="dropdown">
                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal"><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addmydoc"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
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
                           <div className="dropdown">
                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal"><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addmydoc"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
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
                           <div className="dropdown">
                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal"><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addmydoc"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
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
                           <div className="dropdown">
                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal"><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addmydoc"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
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
                           <div className="dropdown">
                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal"><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addmydoc"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
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
                           <div className="dropdown">
                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal"><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addmydoc"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
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
                           <div className="dropdown">
                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal"><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addmydoc"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
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
                           <div className="dropdown">
                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal"><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addmydoc"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
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
                           <div className="dropdown">
                                <button className="btn dropdown-toggle"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item col-green" href="javascript:void(0);" data-bs-toggle="modal"><i className="zmdi zmdi-download me-1"></i>Download</a></li>
                                    <li><a className="dropdown-item col-blue" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addmydoc"><i className="zmdi zmdi-edit me-1"></i>Edit</a></li>
                                    <li><a className="dropdown-item text-danger" href="#"><i className="zmdi zmdi-delete me-1"></i>Delete</a></li>
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

