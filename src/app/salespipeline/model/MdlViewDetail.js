"use client"
import React, { useEffect } from 'react'

const MdlViewDetail = ({ lead_info = [] }) => {
    useEffect(()=>{
        setTimeout(() => {
            // lead_info && lead_info[0].lead_details.length > 0 && lead_info && lead_info[0].lead_details
            //     .map((section, i) => {
            //         section.fields.map((field, i) => {
            //             ns_util.replace_html_in_element("#" + field.field_id, 'NA')
            //         })
            //     })
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
                        <div className="modal-body pr-0 pl-0 pb-0 contbody">
                            <div className="tab-content">
                                <div className="loader"></div>
                                <div role="tabpanel" className="tab-pane in active">
                                    <div className="media border p-4 mb-0">
                                        <div className="media-body ptag">
                                            <a className="btn cross_remove">x</a>
                                            <h5>
                                                <span>{lead_info && lead_info[0].contact_info.lead_company_name}</span>
                                                <span className="float-right">
                                                    <div className="btn-group">
                                                        {lead_info && lead_info[0].status_update.map((sts, i) => (
                                                            <a key={i} id="btn_lead_statuses" className="btn btn-primary dropdown-toggle" data-u_id={sts.u_id}
                                                                data-status={sts.status_id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
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
                                                </span>
                                            </h5>
                                            <p className="mb-1" id="lead_city_or_postcode"><i className="zmdi zmdi-city-alt"></i> {lead_info && lead_info[0].contact_info.lead_city}, {lead_info && lead_info[0].contact_info.lead_postcode} </p>
                                            <p className="mb-1" id="lead_mobile">
                                                <i className="zmdi zmdi-phone"></i>
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
                                                <i className="zmdi zmdi-email-open"></i>
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
                                    </div>
                                    <div className="mt-1 text-center btnview">
                                        <a className="btn btn-primary btn-sm clickmode" data-show=".bxsaddow" data-hide=".btnview">View More</a>
                                    </div>
                                    <div className="bxsaddow wd100" style={{ display: "block" }}>
                                        <div className="p-2 bdr1 h4show taskboard">
                                            <div className="dd">
                                                <ol className="dd-list row" style={{display: "flex"}}>
                                                    <li className="dd-item col-md-12 col-lg-4">
                                                        <div className="dd-content">
                                                            <div className="avt_bg text-center mt-4 mb-3">
                                                                <div className="avatar_circle m-auto">
                                                                    <img src="/images/no-image.jpg" alt="avatar" className="img-fluid rounded-circle img" />
                                                                </div>
                                                                <div className="hedlline font-18 bold ml-0">
                                                                    {lead_info && lead_info[0].contact_info.lead_company_name}
                                                                </div>
                                                            </div>
                                                            <ul className="social-network social-circle">
                                                                {lead_info && lead_info[0].contact_info.facebook !== '' &&
                                                                    <li><a href={lead_info && lead_info[0].contact_info.facebook} className="" title="facebook" target="_blank"><i className="zmdi zmdi-facebook"></i></a></li>
                                                                }
                                                                {lead_info && lead_info[0].contact_info.twitter !== '' &&
                                                                    <li><a href={lead_info && lead_info[0].contact_info.twitter} className="" title="Twitter" target="_blank"><i className="zmdi zmdi-twitter"></i></a></li>
                                                                }
                                                                {lead_info && lead_info[0].contact_info.instagram !== '' &&
                                                                    <li><a href={lead_info && lead_info[0].contact_info.instagram} className="" title="instagram" target="_blank"><i className="zmdi zmdi-instagram"></i></a></li>
                                                                }
                                                                {lead_info && lead_info[0].contact_info.youtube !== '' &&
                                                                    <li><a href={lead_info && lead_info[0].contact_info.youtube} className="" title="YouTube" target="_blank"><i className="zmdi zmdi-youtube"></i></a></li>
                                                                }
                                                                {lead_info && lead_info[0].contact_info.linkedin !== '' &&
                                                                    <li><a href={lead_info && lead_info[0].contact_info.linkedin} className="" title="linkedin" target="_blank"><i className="zmdi zmdi-linkedin"></i></a></li>
                                                                }
                                                                {lead_info && lead_info[0].contact_info.pinterest !== '' &&
                                                                    <li><a href={lead_info && lead_info[0].contact_info.pinterest} className="" title="Pinterest" target="_blank"><i className="zmdi zmdi-pinterest"></i></a></li>
                                                                }
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="dd-item col-md-12 col-lg-8">
                                                        <div className="dd-handle d-flex justify-content-between align-items-center pt-2 pb-2">
                                                            <div className="h6 mb-2 mt-2 text-blue"><b> Contact Address </b> <span className="bbl-light ml-1">Main</span></div>
                                                        </div>
                                                        <div className="dd-content p-3">
                                                            <p className="mb-1">
                                                                <span className="wd-12px">Name</span>
                                                                <span>:</span>
                                                                <span>{lead_info && lead_info[0].contact_info.lead_title}&nbsp;{lead_info && lead_info[0].contact_info.lead_name}</span>
                                                            </p>
                                                            <p className="mb-1">
                                                                <span className="wd-12px">Gender</span>
                                                                <span>:</span>
                                                                <span> {lead_info && lead_info[0].contact_info.gender}</span>
                                                            </p>
                                                            <p className="mb-1">
                                                                <span className="wd-12px">Date of Birth</span>
                                                                <span>:</span>
                                                                <span> {lead_info && lead_info[0].contact_info.lead_dob}</span>
                                                            </p>
                                                            <p className="mb-1">
                                                                <span className="wd-12px">Company Name</span>
                                                                <span>:</span>
                                                                <span> {lead_info && lead_info[0].contact_info.lead_company_name}</span>
                                                            </p>
                                                            <p className="mb-1">
                                                                <span className="wd-12px">Mobile</span>
                                                                <span>:</span>
                                                                <span>
                                                                    {lead_info && lead_info[0].contact_info.lead_mobile !== "" &&
                                                                        <span>{lead_info && lead_info[0].contact_info.lead_mobile}</span>
                                                                    }
                                                                    {lead_info && lead_info[0].contact_info.mobile_status === 1 ?
                                                                        <small className="col-green">&nbsp;Verified</small>
                                                                        :
                                                                        lead_info && lead_info[0].contact_info.mobile_status === 0 ?
                                                                            <small className="col-red">&nbsp;Not Verified</small>
                                                                            :
                                                                            <span>NA</span>
                                                                    }
                                                                </span>
                                                            </p>
                                                            <p className="mb-1">
                                                                <span className="wd-12px">Email</span>
                                                                <span>:</span>
                                                                <span>
                                                                    {lead_info && lead_info[0].contact_info.lead_email !== "" ? lead_info && lead_info[0].contact_info.lead_email:<span>NA</span> }</span>
                                                            </p>
                                                            <p className="mb-1">
                                                                <span className="wd-12px">Address Line</span>
                                                                <span>:</span>
                                                                <span>{lead_info && lead_info[0].contact_info.lead_address !== "" ? lead_info && lead_info[0].contact_info.lead_address :<span>NA</span> }</span>
                                                            </p>
                                                            <p className="mb-1">
                                                                <span className="wd-12px">City &amp; State </span>
                                                                <span>:</span>
                                                                <span>{lead_info && lead_info[0].contact_info.lead_city}</span>
                                                                <span>{lead_info && lead_info[0].contact_info.lead_county}</span>
                                                            </p>
                                                            <p className="mb-1">
                                                                <span className="wd-12px">Country</span>
                                                                <span>:</span>
                                                                <span>{lead_info && lead_info[0].country_name}</span>
                                                            </p>
                                                            <p className="mb-1">
                                                                <span className="wd-12px">Postcode </span>
                                                                <span>:</span>
                                                                <span>{lead_info && lead_info[0].contact_info.lead_postcode}</span>
                                                            </p>
                                                        </div>
                                                    </li>
                                                    {lead_info && lead_info[0].lead_details !== ''&&
                                                   lead_info && lead_info[0].lead_settings.map((set,i)=>(
                                                    <li key={i} className="dd-item {sizeClass} dd-bdrnone">
                                                        <div className="dd-handle d-flex justify-content-between align-items-center pt-2 pb-2">
                                                            <div className="h6 mb-2 mt-2 text-blue">
                                                                <b><i className={set.cssClass}>&nbsp;</i>{set.section}</b>
                                                            </div>
                                                        </div>
                                                        <div className="dd-content p-3">
                                                            {set.fields.map((fld,k)=>(
                                                            <p key={k} className="mb-1">
                                                                <span className="wd-12px">{fld.field_label}</span>
                                                                <span>:</span>
                                                                <span id={fld.field_id}></span>
                                                            </p>
                                                            ))}
                                                        </div>
                                                    </li>
                                                    ))
                                                    }
                                                    { lead_info && lead_info[0].lead_custom_fields_json !== '' &&
                                                    <li className="dd-item col-lg-12">
                                                        <div className="dd-handle d-flex justify-content-between align-items-center pt-2 pb-2">
                                                            <div className="h6 mb-2 mt-2 text-blue">
                                                                <i className="zmdi zmdi-folder"></i> <b>Custom Fields</b>
                                                            </div>
                                                        </div>
                                                        <div className="dd-content p-3">
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
                                                    </li>
                                                    }
                                                    <li className="dd-item col-lg-12">
                                                        <div className="dd-handle d-flex justify-content-between align-items-center pt-2 pb-2">
                                                            <div className="h6 mb-2 mt-2 text-blue">
                                                                <i className="zmdi zmdi-folder"></i> <b>Lead Status History</b>
                                                            </div>
                                                        </div>
                                                        <div className="dd-content p-3">
                                                            <div className="row m-0">
                                                                <div className="col-12">
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
                                                    </li>



                                                </ol>
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
                                        <button className="btn btn-danger btn-lg" type="button" data-bs-dismiss="modal"><i className="zmdi zmdi-rotate-left">&nbsp;</i>Close</button>
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