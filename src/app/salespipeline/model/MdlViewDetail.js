"use client"
import React, { useEffect } from 'react'

const MdlViewDetail = ({ lead_info = [] }) => {
    useEffect(()=>{
        setTimeout(() => {
           
                lead_info && lead_info[0].lead_details.length > 0 && lead_info && lead_info[0].lead_details.map((field, i) => {
                if (field.field_value !== '')
                    ns_util.replace_html_in_element("#" + field.field_id, field.field_value)
                else
                    ns_util.replace_html_in_element("#" + field.field_id, 'NA')
            })
        }, 1000);
    })
    return (
        <>
            <div className="modal right-half  md-one" id="view_details" tabIndex="-1" role="dialog" aria-labelledby="shortModal">
                <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
                    <div className="modal-content" style={{ height: "auto!important" }}>
                        <div className="modal-header bg-blu-lite fixed-top">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel2">
                                <b> <i className="zmdi zmdi-search"></i> View Details</b>
                            </h4>
                        </div>
                        <div className="modal-body pe-0 ps-0 pb-0 contbody">
                            <div className="tab-content ">
                                <div className="loader"></div>
                                <div role="tabpanel" className="account__details font-h4  tab-pane in active">
                                    <div className="media border p-4 mb-0">
                                        <div className="media-body ptag">
                                            <a className="btn cross_remove">x</a>
                                            <div class="d-flex justify-content-start align-items-center mt-2 w-100">
                                                <div class="css-3sr5s9 me-2">
                                                    <span class="css-19k1nij">
                                                        <img src="../images/no-image.jpg" alt="avatar" class="img-fluid rounded-circle img"/>
                                                    </span>
                                                </div>
                                                <div className="w-100">
                                                    <h5>
                                                        <span>{lead_info && lead_info[0].contact_info.lead_company_name}</span>
                                                        
                                                    </h5>
                                                    <p className="mb-1" id="lead_city_or_postcode"><i className="zmdi zmdi-city-alt me-1"></i> {lead_info && lead_info[0].contact_info.lead_city}, {lead_info && lead_info[0].contact_info.lead_postcode} </p>
                                                    <p className="mb-1" id="lead_mobile">
                                                        <i className="zmdi zmdi-phone me-1"></i>
                                                        {lead_info && lead_info[0].contact_info.lead_mobile !== "" ?
                                                            <span>{lead_info && lead_info[0].contact_info.lead_mobile}</span>
                                                            : <></>}
                                                        {lead_info && lead_info[0].contact_info.mobile_status === 1 ?
                                                            <small className="col-green">&nbsp;Verified</small>
                                                            :
                                                            lead_info && lead_info[0].contact_info.mobile_status === 0 ?
                                                                <small className="col-red">&nbsp;Not Verified</small>
                                                                : "NA"}
                                                    </p>
                                                    <p className="mb-1" id="lead_email">
                                                        <i className="zmdi zmdi-email-open me-1"></i>
                                                        {lead_info && lead_info[0].contact_info.lead_email !== "" ?
                                                            <span>{lead_info && lead_info[0].contact_info.lead_email}</span>
                                                            : <></>}
                                                        {lead_info && lead_info[0].contact_info.email_status === 1 ?
                                                            <small className="col-green">&nbsp;Verified</small>
                                                            :
                                                            lead_info && lead_info[0].contact_info.email_status === 0 ?
                                                                <small className="col-red">&nbsp;Not Verified</small>
                                                                : "NA"}
                                                    </p>
                                                </div>
                                                <div className="w-100">
                                                    <div className="float-right">
                                                        <div className="btn-group">
                                                            {lead_info && lead_info[0].status_update.map((sts, i) => (
                                                                <a key={i} id="btn_lead_statuses" className="btn btn-primary btn-sm dropdown-toggle" data-u_id={sts.u_id}
                                                                    data-status={sts.status_id} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                                    <i className="zmdi zmdi-alert-polygon">&nbsp;</i><span className="d-none_small">{sts.status_name}</span></a>
                                                            ))}
                                                            <div id="ddl_lead_statuses" className="dropdown-menu">
                                                                {lead_info && lead_info[0].status_master_list.map((master, j) => (
                                                                    master.status_type === "button" ?
                                                                        <a key={j} id={"ddlMenu-" + master.status_id} style={{ color: master.color_code }}
                                                                            className="dropdown-item evt-leads-action"
                                                                            data-type={master.status_type} data-id={master.status_id}
                                                                            data-action="leads" data-request_for="action-type"
                                                                            data-action-type="pipeline">{master.status_name}</a>
                                                                        :
                                                                        <a key={j} id={"ddlMenu-" + master.status_id} style={{ color: master.color_code }}
                                                                            className="dropdown-item evt-leads-action"
                                                                            data-toggle="modal" data-target="#lead_statuses"
                                                                            data-type={master.status_type} data-id={master.status_id}
                                                                            data-action="leads" data-request_for="action-type">{master.status_name}</a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div id="clstatus_E1007F59-5162-4EE8-B3B5-62DF393AFE7C" class="lable_show" style={{marginTop:'8px'}}><div><span class="badge bg-danger">Call Back</span><span class="badge col-black">To : Abc</span><div class="font-9" style={{marginTop:'-10px'}}>Time : 04/11/2023 [<b>03:00PM-06:00PM</b>]</div></div></div>

                                                    </div>
                                                </div>    
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                    <div className="accordion accordion-flush mt-1" id="faqlist1">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                                    Basic Details
                                                </button>
                                            </h2>
                                            <div id="faq-content-1" className="accordion-collapse collapse show" data-bs-parent="#faqlist1">
                                                <div className="accordion-body">
                                                    <div className="row justify-content-center align-items-top">
                                                        <div className="col-lg-6">                                                    
                                                            <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-account me-1"></i>Name</h4>
                                                                <p className="mb-2"><span className="col-black"><b>{lead_info && lead_info[0].contact_info.lead_title}&nbsp;{lead_info && lead_info[0].contact_info.lead_name}</b></span> </p>
                                                            
                                                            <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-accounts me-1"></i> Gender </h4>
                                                            <p className="mb-2"> <span className="col-black">{lead_info && lead_info[0].contact_info.gender}</span> </p>

                                                            <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-calendar">&nbsp;</i>Date of Birth </h4>
                                                            <p className="mb-2"> <span className="col-black">{lead_info && lead_info[0].contact_info.lead_dob}</span> </p>

                                                        
                                                        </div>
                                                        <div className="col-lg-6">
                                                            
                                                            <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-smartphone-android me-1"></i> Mobile</h4>
                                                            <p className="mb-2"> <span className="col-black"> {lead_info && lead_info[0].contact_info.lead_mobile !== "" &&
                                                                                                            <span>{lead_info && lead_info[0].contact_info.lead_mobile}</span>
                                                                                                        }
                                                                                                        {lead_info && lead_info[0].contact_info.mobile_status === 1 ?
                                                                                                            <small className="col-green">&nbsp;Verified</small>
                                                                                                            :
                                                                                                            lead_info && lead_info[0].contact_info.mobile_status === 0 ?
                                                                                                                <small className="col-red">&nbsp;Not Verified</small>
                                                                                                                :
                                                                                                                <span>NA</span>
                                                                                                        }</span> </p>
                                                            
                                                        
                                                            <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-email me-1"></i> Email</h4>
                                                            <p className="mb-2"> <span className="col-black">{lead_info && lead_info[0].contact_info.lead_email !== "" ? lead_info && lead_info[0].contact_info.lead_email:<span>NA</span> }</span> </p>
                                                            <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-industry me-1"></i> Company name</h4>
                                                            <p className="mb-2"> <span className="col-black">  {lead_info && lead_info[0].contact_info.lead_company_name} </span> </p>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {lead_info && lead_info[0].lead_details !== ''&&
                                        lead_info && lead_info[0].lead_settings.map((set,i)=>(
                                        <div class="accordion-item"key={i}>
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                                                <i className={set.cssClass}>&nbsp;</i>{set.section}
                                                </button>
                                            </h2>
                                            <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist1">
                                            
                                                <div className="accordion-body">
                                                    {set.fields.map((fld,k)=>(
                                                        <p key={k} className="mb-1">
                                                            <span className="wd-12px">{fld.field_label}</span>
                                                            <span>:</span>
                                                            <span id={fld.field_id}></span>
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        ))
                                        }
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                                    Contact Address <span className="ms-2 css-jcj5hu">
                                                    </span>
                                                </button>
                                            </h2>
                                            <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                                                <div className="accordion-body">
                                                    <div className="row justify-content-center align-items-top">
                                                        <div className="col-lg-6">                                                    
                                                            <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-pin me-1"></i>Address Line</h4>
                                                            <p className="mb-2"> <span className="col-black"><b>{lead_info && lead_info[0].contact_info.lead_address !== "" ? lead_info && lead_info[0].contact_info.lead_address :<span>NA</span> }</b> </span> </p>
                                                            
                                                            <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-pin me-1"></i> Country </h4>
                                                            <p className="mb-2"> <span className="col-black">{lead_info && lead_info[0].country_name}</span> </p>

                                                        </div>
                                                        <div className="col-lg-6">
                                                            
                                                            <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-pin me-1"></i> City/State</h4>
                                                            <p className="mb-2"> <span className="col-black"> <span>{lead_info && lead_info[0].contact_info.lead_city}</span> <span>{lead_info && lead_info[0].contact_info.lead_county}</span></span> </p>
                                                            
                                                            <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-pin me-1"></i> Postcode</h4>
                                                            <p className="mb-2"> <span className="col-black">{lead_info && lead_info[0].contact_info.lead_postcode}</span> </p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        { lead_info && lead_info[0].lead_custom_fields_json !== '' &&
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                                                Custom Fields
                                                </button>
                                            </h2>
                                            <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                                                <div className="accordion-body">
                                                    <table className="table table-bordered overflow-y rwd-table mb-0 templt">
                                                        <thead>
                                                            <tr className="font_btd">
                                                                <th>Field</th>
                                                                <th>Label</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {lead_info && lead_info[0].lead_custom_fields_json.map((cus_fld,l)=>(
                                                            <tr key={l}>
                                                                <td className="col-info">{cus_fld.field !=='' ?cus_fld.field :"NA"}</td>
                                                                <td className="col-info">{cus_fld.label}</td>
                                                            </tr>
                                                            )) }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                        }
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                                Lead Status History
                                                </button>
                                            </h2>
                                            <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                                                <div className="accordion-body dd-content ">
                                                    <ul id="lead_status_update_placeholder" className="timeline"></ul>
                                                    <ul className="timeline">
                                                        {lead_info && lead_info[0].lead_status_list.map((sts,j)=>(
                                                        <li key={j}>
                                                            <div className="timeline-time">
                                                                <span className="date">{sts.create_date}</span>
                                                                <span className="time">{sts.create_time}</span>
                                                            </div>
                                                            <div className="timeline-icon">
                                                                <a href="javascript:;">&nbsp;</a>
                                                            </div>
                                                            <div className="timeline-body">
                                                                <div className="timeline-header">
                                                                    <span className="userimage"><img src="/images/download.jpg" /></span>
                                                                    <span className="username"><a href="javascript:;">{sts.user_name}</a><small></small></span>
                                                                    <span className="text-right float-right text-muted">{sts.status_name}</span>
                                                                </div>
                                                                {sts.status_action !== '' &&
                                                                <div className="timeline-content">
                                                                    <p>
                                                                        {sts.status_action}
                                                                    </p>
                                                                </div>
                                                                }
                                                            </div>
                                                        </li>
                                                        )) }
                                                    </ul>    
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                    <div className="mt-1 text-center bxsaddow" style={{display:"none"}}>
                                        <a className="btn btn-primary btn-sm clickmode" data-show=".btnview" data-hide=".bxsaddow">View Less</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="model-footer">
                            <div className="row m-0">
                                <div className="col-md-12">
                                    <div className="text-center">
                                        <button className="btn btn-danger " type="button" data-bs-dismiss="modal"><i className="zmdi zmdi-rotate-left">&nbsp;</i>Close</button>
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

export default MdlViewDetail