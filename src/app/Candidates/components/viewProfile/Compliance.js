import React from 'react'
import Image from 'next/image'
import nodata from '@/app/images/nodata.png'

function Compliance() {
  return (
    <>
        <div className="row">
            <div className="col-3 pl-0">

                <div className="border p-2">
                    <h2 className="font-16 ml-2"> <b>Documents Vault</b> <a id="btn-cls-doc-search" className="float-right cls-doc-search"><i className="ti ti-filter"></i></a> </h2>
                    <div id="divdocsearch" className="ml-2 dnnone mt-1">
                        <input id="txtsearchDocs" type="text" placeholder="Type here to search" onkeyup="SeachRolesfromList()" className="form-control"/>
                    </div>
                </div>

                <ul className="list-group listgroupright">
                    <li className="list-group-item file_folder"> 
                        <div className="icon mr-0"> <i className="zmdi zmdi-collection-image"></i></div>
                        <div className="file-name">
                            <p className="mb-0 text-muted"> <b>Passport</b> </p>
                            <div> 
                                <span className="col-grey">New passport2.jpg</span>
                            </div>
                        </div>
                        <ul className="header-dropdown d-flex">
                        <li>
                        <a  data-toggle="modal"  data-target="#uploadPreview"><i class="zmdi zmdi-search"></i></a>
                        </li>
                            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="cls-document-setting"data-toggle="modal"  data-target="#addEdit"><i className="zmdi zmdi-edit"></i> Edit</a></li>
                                    <li><a className="cls-document-setting"><i className="zmdi zmdi-delete"></i> Delete</a></li>        
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="list-group-item file_folder"> 
                        <div className="icon mr-0"> <i className="zmdi zmdi-collection-image"></i></div>
                        <div className="file-name">
                            <p className="mb-0 text-muted"> <b>CV</b> </p>
                            <div> 
                                <span className="col-grey">New Resume.jpg</span>
                            </div>
                        </div>
                        <ul className="header-dropdown d-flex">
                        <li>
                        <a  data-toggle="modal"  data-target="#uploadPreview"><i class="zmdi zmdi-search"></i></a>
                        </li>
                            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="cls-document-setting"data-toggle="modal"  data-target="#addEdit"><i className="zmdi zmdi-edit"></i> Edit</a></li>
                                    <li><a className="cls-document-setting"><i className="zmdi zmdi-delete"></i> Delete</a></li>        
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="list-group-item file_folder"> 
                        <div className="icon mr-0"> <i className="zmdi zmdi-collection-image"></i></div>
                        <div className="file-name">
                            <p className="mb-0 text-muted"> <b>DBS</b> </p>
                            <div> 
                                <span className="col-grey"> dbs -1.jpg</span>
                            </div>
                        </div>
                        <ul className="header-dropdown d-flex">
                        <li>
                        <a  data-toggle="modal"  data-target="#uploadPreview"><i class="zmdi zmdi-search"></i></a>
                        </li>
                            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="cls-document-setting"data-toggle="modal"  data-target="#addEdit"><i className="zmdi zmdi-edit"></i> Edit</a></li>
                                    <li><a className="cls-document-setting"><i className="zmdi zmdi-delete"></i> Delete</a></li>        
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="list-group-item file_folder"> 
                        <div className="icon mr-0"> <i className="zmdi zmdi-collection-image"></i></div>
                        <div className="file-name">
                            <p className="mb-0 text-muted"> <b> Proof of Address -1</b> </p>
                            <div> 
                                <span className="col-grey"> Proof of Address -1.jpg</span>
                            </div>
                        </div>
                        <ul className="header-dropdown d-flex">
                        <li>
                        <a  data-toggle="modal"  data-target="#uploadPreview"><i class="zmdi zmdi-search"></i></a>
                        </li>
                            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="cls-document-setting"data-toggle="modal"  data-target="#addEdit"><i className="zmdi zmdi-edit"></i> Edit</a></li>
                                    <li><a className="cls-document-setting"><i className="zmdi zmdi-delete"></i> Delete</a></li>        
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="list-group-item file_folder"> 
                        <div className="icon mr-0"> <i className="zmdi zmdi-collection-image"></i></div>
                        <div className="file-name">
                            <p className="mb-0 text-muted"> <b>Passport</b> </p>
                            <div> 
                                <span className="col-grey">New passport2.jpg</span>
                            </div>
                        </div>
                        <ul className="header-dropdown d-flex">
                        <li>
                        <a  data-toggle="modal"  data-target="#uploadPreview"><i class="zmdi zmdi-search"></i></a>
                        </li>
                            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="cls-document-setting"data-toggle="modal"  data-target="#addEdit"><i className="zmdi zmdi-edit"></i> Edit</a></li>
                                    <li><a className="cls-document-setting"><i className="zmdi zmdi-delete"></i> Delete</a></li>        
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="list-group-item file_folder"> 
                        <div className="icon mr-0"> <i className="zmdi zmdi-collection-image"></i></div>
                        <div className="file-name">
                            <p className="mb-0 text-muted"> <b>CV</b> </p>
                            <div> 
                                <span className="col-grey">New Resume.jpg</span>
                            </div>
                        </div>
                        
                        <ul className="header-dropdown d-flex">
                        <li>
                        <a  data-toggle="modal"  data-target="#uploadPreview"><i class="zmdi zmdi-search"></i></a>
                        </li>
                            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="cls-document-setting"data-toggle="modal"  data-target="#addEdit"><i className="zmdi zmdi-edit"></i> Edit</a></li>
                                    <li><a className="cls-document-setting"><i className="zmdi zmdi-delete"></i> Delete</a></li>        
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="list-group-item file_folder"> 
                        <div className="icon mr-0"> <i className="zmdi zmdi-collection-image"></i></div>
                        <div className="file-name">
                            <p className="mb-0 text-muted"> <b>DBS</b> </p>
                            <div> 
                                <span className="col-grey"> dbs -1.jpg</span>
                            </div>
                        </div>
                        <ul className="header-dropdown d-flex">
                        <li>
                        <a  data-toggle="modal"  data-target="#uploadPreview"><i class="zmdi zmdi-search"></i></a>
                        </li>
                            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="cls-document-setting"data-toggle="modal"  data-target="#addEdit"><i className="zmdi zmdi-edit"></i> Edit</a></li>
                                    <li><a className="cls-document-setting"><i className="zmdi zmdi-delete"></i> Delete</a></li>        
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="list-group-item file_folder"> 
                        <div className="icon mr-0"> <i className="zmdi zmdi-collection-image"></i></div>
                        <div className="file-name">
                            <p className="mb-0 text-muted"> <b> Proof of Address -1</b> </p>
                            <div> 
                                <span className="col-grey"> Proof of Address -1.jpg</span>
                            </div>
                        </div>
                        <ul className="header-dropdown d-flex">
                        <li>
                        <a  data-toggle="modal"  data-target="#uploadPreview"><i class="zmdi zmdi-search"></i></a>
                        </li>
                            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="cls-document-setting"data-toggle="modal"  data-target="#addEdit"><i className="zmdi zmdi-edit"></i> Edit</a></li>
                                    <li><a className="cls-document-setting"><i className="zmdi zmdi-delete"></i> Delete</a></li>        
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="list-group-item file_folder"> 
                        <div className="icon mr-0"> <i className="zmdi zmdi-collection-image"></i></div>
                        <div className="file-name">
                            <p className="mb-0 text-muted"> <b>Passport</b> </p>
                            <div> 
                                <span className="col-grey">New passport2.jpg</span>
                            </div>
                        </div>
                        <ul className="header-dropdown d-flex">
                        <li>
                        <a  data-toggle="modal"  data-target="#uploadPreview"><i class="zmdi zmdi-search"></i></a>
                        </li>
                            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="cls-document-setting"data-toggle="modal"  data-target="#addEdit"><i className="zmdi zmdi-edit"></i> Edit</a></li>
                                    <li><a className="cls-document-setting"><i className="zmdi zmdi-delete"></i> Delete</a></li>        
                                </ul>
                            </li>
                        </ul>
                    </li>
                    
                    
                </ul>

                <div className="border p-2 text-center">
                    <a className="btn btn-outline-primary"data-toggle="modal"  data-target="#addEdit"><b> + Add More</b> </a>
                </div>
            </div>
            <div className="col-9 pl-0">
                
                <div className="blank_doc_list">
                    <div className="nodata">
                        <div className="nodata__content">
                            <div className="nodata__icon"><Image src={nodata} alt="no data"/></div>
                            <div className="nodata__message mb-1"><b>No document list found.</b></div>
                            <div className="nodata__help mb-2 text-center mb-2"> Your compliance document list 
                                by simpley clicking on </div>
<a  className="btn btn-outline-primary btn-sm clickmode" data-hide=".blank_doc_list" data-show=".documentation_view"><i className="ti ti-plus"></i> Click here</a> 
                        </div>
                    </div>
                </div>


                <div className="documentation_view dd_none mt-2">
                    <div className="booktab border d-flex justify-content-between align-items-center sadow p-2">
                        <div className="input-group">
                            <select id="ddlemployers" className="form-control w-240">
                                <option value="1">Infospry Technologies Pvt Ltd.</option>
                            </select>
                        </div>
                        <div className="btn-group">
                            <a className="btn btn-primary clsrefreshdocuments" data-action="refresh"><i
                                    className="zmdi zmdi-refresh"></i></a>
                        </div>
                    </div>
                    <div className="accordion mt-2" id="accordion-comp">

                        <div className="item">
                            <div className="item-header" id="headingOne26">
                                <h2 className="mb-0"> <button className="btn btn-link" type="button"
                                        data-toggle="collapse" data-target="#collapsecomp26"
                                        aria-expanded="true" aria-controls="collapsecomp26">
                                        Required <span className="doc-numbers bg-amber ml-1">0
                                            / 4</span> <i className="zmdi zmdi-chevron-down"></i>
                                    </button>
                                </h2>
                            </div>
                            <div id="collapsecomp26" className="collapse" aria-labelledby="headingOne26"
                                data-parent="#accordion-comp">
                                <div className="table-responsive">
                                    <table className="table table-hover overflow-y">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div className="checkbox"> <input id="chkMaster-26"
                                                            className="clsChkUploadedDocs"
                                                            data-doc-status="26" data-action="OTA"
                                                            type="checkbox"/> <label
                                                            for="chkMaster-26">Document Name</label>
                                                    </div>
                                                </th>
                                                <th>Doc Number</th>
                                                <th>Issued date </th>
                                                <th>Expire date </th>
                                                <th> Upload Date </th>
                                                <th> Verify Status</th>
                                                <th> Upload / Reupload</th>
                                                <th> View </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="checkbox"> <input
                                                            id="chkAdditional-26"
                                                            className="clsOta-232 clsChkUploadedDocs"
                                                            data-doc-id="232" data-action="ADD"
                                                            type="checkbox"/> <label
                                                            for="chkAdditional-26"><i
                                                                className="zmdi zmdi-check-all"></i>
                                                            Passport<i className="zmdi zmdi-star"
                                                                style={{color:"orange"}}></i></label>
                                                    </div>
                                                </td>
                                                <td> <span><b></b></span> </td>
                                                <td> <span className="col-grey"> <b>&nbsp;</b> </span>
                                                </td>
                                                <td> <span className="col-grey"> <b>&nbsp;</b> </span>
                                                </td>
                                                <td> <span className="col-grey"> <b>&nbsp;</b> </span>
                                                </td>
                                                <td> <span className="col-grey"><i
                                                            className="zmdi zmdi zmdi-time"></i> Pending
                                                    </span></td>
                                                <td> <a className="btn btn-outline-primary btn-sm clickmode"
                                                        data-show=".documentation_edit"
                                                        data-hide=".documentation_view"><i
                                                            className="zmdi zmdi-upload">&nbsp;</i><b>Upload</b></a>
                                                </td>
                                                <td><a className="btn btn-outline-primary btn-sm"data-target="#modalComplanceDetails"
                                                    data-toggle="modal"> <i className="zmdi zmdi-eye"></i> View </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="checkbox"> <input
                                                            id="chkAdditional-26"
                                                            className="clsOta-235 clsChkUploadedDocs"
                                                            data-doc-id="235" data-action="ADD"
                                                            type="checkbox"/> <label
                                                            for="chkAdditional-26"><i
                                                                className="zmdi zmdi-check-all"></i>
                                                            CV<i className="zmdi zmdi-star"
                                                                style={{color:"orange"}}></i></label>
                                                    </div>
                                                </td>
                                                <td> <span><b></b></span> </td>
                                                <td> <span className="col-grey"> <b>&nbsp;</b> </span>
                                                </td>
                                                <td> <span className="col-grey"> <b>&nbsp;</b> </span>
                                                </td>
                                                <td> <span className="col-grey"> <b>&nbsp;</b> </span>
                                                </td>
                                                <td> <span className="col-grey"><i
                                                            className="zmdi zmdi zmdi-time"></i> Pending
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="col-green clsSpanUploaded"><i
                                                            className="zmdi zmdi-check-all">&nbsp;</i><b>Uploaded</b></span>
                                                    <span className="pl-2"><a
                                                            className="h-over edithover clickmode"
                                                            data-show=".documentation_edit"
                                                            data-hide=".documentation_view"><i
                                                                className="zmdi zmdi-edit text-primary"></i></a></span>
                                                </td>
                                                <td><a className="btn btn-outline-primary btn-sm"
                                                        data-target="#modalComplanceDetails"
                                                        data-toggle="modal"> <i
                                                            className="zmdi zmdi-eye"></i> View </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="checkbox"> <input
                                                            id="chkAdditional-26"
                                                            className="clsOta-239 clsChkUploadedDocs"
                                                            data-doc-id="239" data-action="ADD"
                                                            type="checkbox"/> <label
                                                            for="chkAdditional-26"><i
                                                                className="zmdi zmdi-check-all"></i>
                                                            DBS<i className="zmdi zmdi-star"
                                                                style={{color:"orange"}}></i></label>
                                                    </div>
                                                </td>
                                                <td> <span><b></b></span> </td>
                                                <td> <span className="col-grey"> <b>&nbsp;</b> </span>
                                                </td>
                                                <td> <span className="col-grey"> <b>&nbsp;</b> </span>
                                                </td>
                                                <td> <span className="col-grey"> <b>&nbsp;</b> </span>
                                                </td>
                                                <td> <span className="col-grey"><i
                                                            className="zmdi zmdi zmdi-time"></i> Pending
                                                    </span></td>
                                                <td> <a className="btn btn-outline-primary btn-sm clickmode"
                                                        data-show=".documentation_edit"
                                                        data-hide=".documentation_view"><i
                                                            className="zmdi zmdi-upload">&nbsp;</i><b>Upload</b></a>
                                                </td>
                                                <td><a className="btn btn-outline-primary btn-sm"data-target="#modalComplanceDetails"
                                                        data-toggle="modal"> <i className="zmdi zmdi-eye"></i> View </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="checkbox"> <input
                                                            id="chkAdditional-26"
                                                            className="clsOta-260 clsChkUploadedDocs"
                                                            data-doc-id="260" data-action="ADD"
                                                            type="checkbox"/> <label
                                                            for="chkAdditional-26"><i
                                                                className="zmdi zmdi-check-all"></i>
                                                            Proof of
                                                            Address -1<i className="zmdi zmdi-star"
                                                                style={{color:"orange"}}></i></label>
                                                    </div>
                                                </td>
                                                <td> <span><b></b></span> </td>
                                                <td> <span className="col-grey"> <b>&nbsp;</b> </span>
                                                </td>
                                                <td> <span className="col-grey"> <b>&nbsp;</b> </span>
                                                </td>
                                                <td> <span className="col-grey"> <b>&nbsp;</b> </span>
                                                </td>
                                                <td> <span className="col-grey"><i
                                                            className="zmdi zmdi zmdi-time"></i> Pending
                                                    </span></td>
                                                <td> <a className="btn btn-outline-primary btn-sm clickmode"
                                                        data-show=".documentation_edit"
                                                        data-hide=".documentation_view"><i
                                                            className="zmdi zmdi-upload">&nbsp;</i><b>Upload</b></a>
                                                </td>
                                                <td><a className="btn btn-outline-primary btn-sm"data-target="#modalComplanceDetails"
                                                        data-toggle="modal"> <i className="zmdi zmdi-eye"></i> View </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="documentation_edit dd_none">
                    <div id="" className="card bdr5 p-4 pt-0 mt-2">
                        <div className="row">
                            <div className="col-12">
                                <div className="avt_bg text-center pb-1">
                                    <h3 className="mb-0"><b>Upload Document / Certificates</b></h3>
                                    <p className="mb-3">CRB (previous Name)</p> <button
                                        className="cross clickmode" data-hide=".documentation_edit"
                                        data-show=".documentation_view"><i className="zmdi zmdi-close"
                                            aria-hidden="true"></i></button>
                                </div>
                            </div>
                            <hr/>
                            <div className="col-lg-6  bdr-rt" style={{height:"400px"}}>
                                <div className="row mt-0">
                                    <div className="col-md-6 form-group"> <label
                                            className="col-form-label col-form-label-lg">Document
                                            Name<span className="red"></span></label> <input
                                            id="txtDocNameView" className="form-control form-control-lg"
                                            type="text" placeholder="Enter document name"
                                            value="DBS"/> </div>
                                    <div className="col-md-6 form-group"> <label
                                            className="col-form-label col-form-label-lg">Document
                                            Number<span className="red"></span></label> <input
                                            id="txtDocNoView" disabled=""
                                            className="form-control form-control-lg date start"
                                            type="text" placeholder="Enter document number"
                                            value=""/> </div>
                                    <div className="col-md-6 form-group ClsDatepair"> <label
                                            className="col-form-label col-form-label-lg">Issue Date<span
                                                className="red"></span></label>
                                        <input id="txtDocIssueDateView" disabled=""
                                            className="form-control form-control-lg date start"
                                            type="text" placeholder="DD/MM/YYYY" value=""/>
                                    </div>
                                    <div className="col-md-6 form-group ClsDatepair"> <label
                                            className="col-form-label col-form-label-lg">Expiry
                                            Date<span className="red"></span></label>
                                        <input id="txtDocExpiryDateView" disabled=""
                                            className="form-control form-control-lg date start"
                                            type="text" placeholder="DD/MM/YYYY" value=""/>
                                    </div>
                                </div>
                                <div className="file_folder"> </div>
                            </div>
                            <div className="col-lg-6 upld p-3">
                                <div className="text-center">
                                    <div className="float-left"><b style={{color:"#1cbfd0"}}>File
                                            Preivew</b> ( click on file to preview )
                                    </div> <iframe id="iframedocfile" src="" style={{height:"250px"}}                                                            className="one" data-download-url=""></iframe>
                                </div>
                                <div id="divFileAttachfile"
                                    className="card pb-0  mb-3 dd_none divFileAttachfile">
                                    <div id="divAttchFiles">
                                        <div id="attachedFileRow1" className="row">
                                            <div class="pt-4"><label></label><label
                                                    id="lblTaskFile">1</label></div>
                                            <div className="col-md-6" id="divFileUploader1">
                                                <div><label>Choose file<span>*</span></label>
                                                    <div className="input-group mt-1">
                                                        <div className="input-group-prepend"><span
                                                                id="fileUploaderAddOn"
                                                                className="input-group-text clearTextFile">Upload</span>
                                                        </div>
                                                        <div className="custom-file"><input
                                                                id="fileUploader1"
                                                                accept="image/*,application/pdf,application/msword/,application/xlxs/,application/xlx,.txt,.docx,.doc,.zip,.rar,.mp4,.wav,.3gp"
                                                                type="file" row-hidden="true"
                                                                data-val="1"
                                                                className="custom-file-input file-uploader clearTextFile"
                                                                aria-describedby="fileUploaderAddOn"/><label
                                                                className="custom-file-label"
                                                                for="fileUploader">Choose
                                                                file</label></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div><label>File Name<span></span></label><input
                                                        id="txtFileDescription1" type="text"
                                                        row-hidden="false" data-val="1"
                                                        className="form-control clearTextFile"
                                                        autocomplete="off"
                                                        placeholder="Enter File description"/></div>
                                            </div>
                                            <div className="col-md-1">
                                                <div className="mt-4"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="divAttachFileContainer" class="mt-1 ml-1">
                                        <a id="btnAttachFiles"
                                            className="btn btn-success clearTextFile modal-taskfile-btn"
                                            action-from="taskAdd" task-action="attachFiles">
                                            <i className="zmdi zmdi-check-all col-white"></i> <b
                                                className="col-white">Done</b> </a>
                                        <a id="btnAddMoreFiles"
                                            className="btn btn-info clearTextFile  modal-taskfile-btn"
                                            task-action="addMoreFiles">
                                            <i className="zmdi zmdi-plus col-white"></i> <b
                                                className="col-white">Add More</b> </a>
                                        <a id="btncancelbrowsefile"
                                            className="btn btn-outline-danger btn-sm clearTextFile  cls-doc-file-action clickmode"
                                            data-hide=".divFileAttachfile"
                                            data-show=".upload_extiBtn">
                                            <i className="fa fa-close">&nbsp;</i>Cancel </a>
                                    </div>
                                </div>
                                <div id="divAttachedFiles" className="card pb-0 mb-3 dd_none">
                                    <table
                                        className="table table-hover table-bordered divAttachedFiles">
                                        <thead>
                                            <tr>
                                                <th class="p-1" style={{width:"50px"}}>Preview
                                                </th>
                                                <th class="p-1" style={{width:"270px"}}>File Name
                                                </th>
                                                <th class="p-1" style={{width:"70px"}}>Size</th>
                                                <th class="p-1" style={{width:"70px"}}>File Type
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody id="tblBodyAttachedFiles"></tbody>
                                    </table> <a id="btntemppreviewAddmore"
                                        className="btn btn-outline-info btn-sm clearTextFile  cls-doc-file-action dd_none mt-1"
                                        
                                        data-action="addMoreFilesAfterpreview"> <i
                                            className="zmdi zmdi-plus col-white">&nbsp;</i>Add More </a>
                                </div>
                                <div className="text-center upload_extiBtn">
                                    <a className="btn btn-primary btn-sm mt-3 ml-2 clickmode clsbtnnewupload"
                                        data-show=".divFileAttachfile" data-hide=".upload_extiBtn">
                                        <i className="zmdi zmdi-plus-circle-o-duplicate col-white"></i>
                                        <b className="col-white">Upload New</b> </a>
                                    <a className="btn btn-success btn-sm mt-3 ml-2 clsbtnnewupload cls-docs-action"
                                        data-target="#modalExistingDocs" data-toggle="modal">
                                        <i className="zmdi zmdi-plus-circle-o-duplicate"></i> <b
                                            className="col-white">Upload From Existing</b> </a>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2 text-center">
                                <hr className="m-0 mb-4"/> <a id="btnsavedocument"
                                    className="btn btn-primary btn-lg cls-docs-action"
                                    data-hide=".documentation_edit" data-show=".documentation_view"
                                    data-action="update" data-cat_id="2" data-doc_id="8" data-uid=""
                                    add_more_status="0">Save</a> <a
                                    className="btn btn-outline-danger btn-lg clickmode"
                                    data-hide=".documentation_edit"
                                    data-show=".documentation_view"><b> Cancel</b></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Compliance
