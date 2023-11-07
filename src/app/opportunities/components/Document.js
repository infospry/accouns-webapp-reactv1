"use client"
import React from 'react'
import Image from 'next/image';
import menuImage from "../../images/menu-dots-vertical.svg";
function Document({ res=[] }) {

   

    let ext = '';
  return (
    <>
    <div className="booktab d-flex justify-content-between align-items-center bdrbtm">
        <div className="p-2">
            <h2 className="font-bold mb-0 font-20"> Files</h2>
        </div>
        <div className="pe-2">
            
            <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addmydoc"><i
                    className="zmdi zmdi-plus-circle-o-duplicate"></i> Add New</a>
            {/* <div className="btn-group ms-1">
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
            </div> */}
        </div>
    </div>
    <div className="doclist">
        <div className="table-responsive mb-4">
            <table className="table table-bordered table-hover overflow-y rwd-table btdr_none mb-3" id="sortable">
                        <thead className="font_b dnone-mob">
                            <tr className="font_btd">
                                <th style={{ width: "30px" }}>
                                   Sr.No.
                                </th>
                                <th> File Name </th>
                                <th>Folder</th>
                               
                              <th>File Type</th>
                               <th> Upload Date</th>
                                <th style={{width:'50px'}}>Action</th>
                            </tr>
                      </thead>
                    
                      <tbody>
                          
   {res && res.length > 0 && res[3].files_info != "" ? res && res.length > 0 && res[3].files_info.map((fl, i) => (
       <tr id={'tr_'+ fl.u_id} key={i} className="">
                                        <td className="">
                                            {fl.ROWNUMBER}
                                          <span className="dnnone">
                                            {ext = fl.file_url.split('.')[1]}</span>
           </td>
           

  
                                        <td className="pt-3 pb-3">
                                            
               


                                            {ext === 'jpg' || ext === 'jpeg' ? <>
                                                <span className="u_image float-left mr-2">
                                                    <img src="images/jpg.png" alt="user" className="rounded" width="36" />
                                                </span>
                                            </>
                                                :
                                                ext === 'pdf' ? <>
                                                    <span className="u_image float-left mr-2">
                                                        <img src="images/pdf.png" alt="user" className="rounded" width="36" />
                                                    </span>
                                                </>
                                                    :
                                                    ext === 'png' ? <>
                                                        <span className="u_image float-left mr-2">
                                                            <img src="images/png.png" alt="user" className="rounded" width="36" />
                                                        </span>
                                                    </>
                                                        :
                                                        ext === 'doc' || ext === 'docx' ? <>
                                                            <span className="u_image float-left mr-2">
                                                                <img src="../images/word.png" alt="user" className="rounded" width="36" />
                                                            </span>
                                                        </>
                                                            :
                                                            ext === 'xls' || ext === 'xlsx' ? <>
                                                                <span className="u_image float-left mr-2">
                                                                    <img src="../images/exel.png" alt="user" className="rounded" width="36" />
                                                                </span>
                                                            </>
                                                                : <></>
                                            }
                                            <span class="float-left">
                                           <span class="float-left nowrap-w220"><b>{fl.file_title}</b></span><br />
                                          <small>File Size :- {fl.file_size}</small>
                                          </span>
                                        </td>
                                         <td>{"org" + fl.org_uid}</td>
                                      
                                        <td>{ext === 'jpg' || ext === 'jpeg' ? <>
                                        JPG File
                                            </>
                                             :
                                             ext === 'pdf' ? <>
                                                PDF Document
                                             </>
                                             :
                                             ext === 'png' ? <>
                                                PNG File
                                             </>
                                              :
                                              ext === 'doc'|| ext==="docx" ? <>
                                                 Word document
                                              </>
                                               :
                                               ext === 'xls'|| ext==="xlsx" ? <>
                                                  Excel Worksheet
                                               </>
                                               :<>Some file</>
                                        }
           </td>
             <td className="col-grey"> {fl.upload_date}</td>
                                        <td style={{textAlign:'center'}}>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span className="caret"></span></button>
                   <ul className="dropdown-menu dr-breakout" style={{ textAlign: 'center' }}>
                       
                       <li className="btn btn-outline-primary btn-sm evt-leads-action" data-action="files" data-request_for="view" data-title={fl.file_title} data-file-name={fl.file_url} title="View"    data-bs-toggle="modal" data-bs-target="#ImgFrame" > <i className="zmdi zmdi-eye"></i> View</li>
                        &nbsp;
                       <li className="btn btn-outline-primary btn-sm evt-leads-action" data-action="files" data-request_for="view" data-title={fl.file_title} data-file-name={fl.file_url} data-bs-toggle="tooltip" title="View"><i className="zmdi zmdi-download me-1"></i>Download</li>
                       
                                                    &nbsp;<li className="btn btn-danger btn-sm evt-leads-action" data-u_id={fl.u_id} data-file-name={fl.file_url} data-action="files" data-request_for="delete" data-bs-toggle="tooltip" title="Delete" type="button"> <i className="zmdi zmdi-delete"></i></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                )) : <><tr><td colSpan="6">
                                    <div className="box has-advanced-upload m-1 shadow addmydocbtn">
                                        <img src="images/setting.png" className="mb-1" />
                                        <br />
                                        <h4 className="mb-0"> Add File</h4>
                                        <button className="btn btn-primary mt-2 mb-3 clickmode" data-bs-target="#addmydoc" data-toggle="modal" ><i className="zmdi zmdi-plus-circle-o-duplicate"></i> Add File</button>
                                    </div>
                                </td></tr></>}
                        </tbody>
                    </table>
        </div>
    </div>
    </>
  )
}

export default Document

