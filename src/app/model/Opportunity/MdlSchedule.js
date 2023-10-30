import { useState } from "react";

const MdlSchedule=({lead_detail})=>{
    const selectdateRange = () => {
        timeZone();
    }
    
    return (<>
    <div className="modal right-half md-one" id="schedule" tabIndex="-1" role="dialog" aria-labelledby="shortModal">
    <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
        <div className="modal-content" style={{height:"auto!important"}}>
            <div className="modal-header bg-blu-lite fixed-top">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title" id="myModalLabel2">
                    <b> <i className="zmdi zmdi-alarm-check"></i> Schedule</b>
                </h4>
            </div>
            <div className="modal-body pr-0 pl-0 contbody">
                <div className="row  m-0">
                    <div className="col-md-12 pl-0 pr-0">
                        <div className="tab-content p-0">
                            <div role="tabpanel" className="tab-pane in active">
                                {/* <div id="lead-details" className="media border p-4 mb-0"></div> */}
                                <div id="lead-details" className="media border p-4 mb-0">
                                <div className="media-body ptag">
                                        <h5>{lead_detail !==false && lead_detail.lead_company_name}</h5>
                                        <p className="mb-1">{lead_detail !==false && lead_detail.lead_type_name} / <span className="col-black">{lead_detail !==false && lead_detail.cat_name}</span> </p>
                                        <p className="mb-1"><span id="spnleadEmail">{lead_detail !==false && lead_detail.lead_email}</span>
                                        <small id="labelemailVerify" className={lead_detail !==false && lead_detail.email_status===1?"col-green":"col-red"}>{lead_detail !==false && lead_detail.email_status===1?" Verified":" Unverified"}</small></p><p className="mb-1">{lead_detail !==false && lead_detail.lead_city}, {lead_detail !==false && lead_detail.lead_postcode}</p>
                                </div></div>
                                <div className="pt-3 pb-2 pl-4 pr-4">
                                    <h4 className="mb-0">Application</h4>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor=""><strong>Time zone</strong></label>
                                                <select id="ddlTimeZone" name="ddlTimeZone"  onFocus={selectdateRange} className="form-control timezone">
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor=""><strong>Meeting with Person</strong></label>
                                                <input type="text" className="form-control" id="txt_MeetingWithPerson" autoComplete="off" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row msrow" data-counter="0">
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor=""><strong>Date</strong></label>
                                                <input type="text" className="form-control datepicker" id="txt_date0" autoComplete="off" placeholder="dd/mm/yyyy" maxLength="10" />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-5 pr-0">
                                            <div className="form-group">
                                                <label htmlFor=""><strong>Start Time</strong></label>
                                                <input type="text" id="txt_starttime0" className="form-control timepicker" autoComplete="off" placeholder="hh:mm" maxLength="5" />
                                            </div>
                                        </div>
                                        <div className="col-md-1 col-1 col-sm-1 pl-0 pr-0 pt-4 mt-1 text-center"> <strong>to</strong> </div>
                                        <div className="col-md-2 col-sm-5 pl-0">
                                            <div className="form-group">
                                                <label htmlFor=""><strong>End Time</strong></label>
                                                <input type="text" id="txt_endtime0" className="form-control timepicker end-time" data-counter="0" autoComplete="off" placeholder="hh:mm" maxLength="5" />
                                            </div>
                                        </div>
                                    </div>
                                    <div id="addmore_placeholder"></div>
                                    <p><a id="btn_lsAddmore" className="btn btn-primary bgtn-sm evt-leads-action" data-action="schedule" data-request_for="add-more" data-counter="0"><i className="zmdi zmdi-plus-circle-o-duplicate"></i> Suggest multiple times</a></p>
                                    <h5 className="mb-2 mt-4"><b>Schedule Type</b></h5>
                                    <div className="row pl-3">
                                        <div className="col-md-2 col-sm-2 custom-control custom-radio">
                                            <input type="radio" className="custom-control-input evt-leads-action" id="video" name="meeting-type" defaultValue="Video" data-action="schedule" data-request_for="show-hide" />
                                            <label className="custom-control-label" htmlFor="video"><strong>Video</strong></label>
                                        </div>
                                        <div className="col-md-2 col-sm-2 custom-control custom-radio">
                                            <input type="radio" className="custom-control-input evt-leads-action" id="phone" name="meeting-type" defaultValue="Phone" data-action="schedule" data-request_for="show-hide" />
                                            <label className="custom-control-label" htmlFor="phone"><strong>Phone</strong></label>
                                        </div>
                                        <div className="col-md-2 col-sm-2 custom-control custom-radio">
                                            <input type="radio" className="custom-control-input evt-leads-action" id="in-person" name="meeting-type" defaultValue="In-person" data-action="schedule" data-request_for="show-hide" />
                                            <label className="custom-control-label" htmlFor="in-person"><strong>In-person</strong></label>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="mb-2 mt-3"><b>Video conference link</b></h5>
                                        <div className="custom-control custom-radio mb-3 video-section">
                                            <input type="radio" className="custom-control-input evt-leads-action" defaultChecked="checked" id="link_internal" name="link-type" defaultValue="Internal" data-action="schedule" data-request_for="link-type"  />
                                            <label className="custom-control-label" htmlFor="link_internal">
                                                <strong>Use Indeed video conferencing</strong><span className="bbl-light ml-1 col-green">Recommended</span> <br />
                                                <span className="col-grey">
                                                    No need to download software or import your own links,
                                                    <strong>We will send a video conference link</strong> to you and your candidate when your interview is confirmed.
                                                </span>
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio mb-3 video-section">
                                            <input type="radio" className="custom-control-input evt-leads-action" id="link_external" name="link-type" defaultValue="External" data-action="schedule" data-request_for="link-type" />
                                            <label className="custom-control-label" htmlFor="link_external"><strong>Use third-party video conferencing service</strong> <br /> <span className="col-grey">Paste your third-party video conferencing links.</span></label>
                                        </div>
                                        <div id="external-link" className="ddnone">
                                            <div className="group_lead">
                                                <input className="input_text" id="txt_ExternalLink" required="required" type="text" autoComplete="off" />
                                                <label className="lablefilled">External Link</label>
                                            </div>
                                        </div>
                                        <div className="group_lead mt-4 phone-section ddnone">
                                            <input className="input_text allow-numbers-only" id="txt_Phone" required="required" type="text" maxLength="15" autoComplete="off" />
                                            <label className="lablefilled">Phone number <i className="zmdi zmdi-info col-blue"></i></label>
                                        </div>
                                        <div className="group_lead mt-4 inperson-section ddnone">
                                            <input className="input_text" id="txt_Address" required="required" type="text" autoComplete="off" />
                                            <label className="lablefilled">Address</label>
                                        </div>
                                        <div className="group_lead">
                                            <label htmlFor="Message">Message</label>
                                            <textarea required="required" id="msgBody" className="summernote-editor"></textarea>
                                            <span id="spanSubject" style={{display:"none"}}></span>
                                        </div>
                                        <div className="group_lead" id="additional">
                                            <input className="input_text" id="txt_Email" required="required" autoComplete="off" type="text" />
                                            <label className="lablefilled">Add additional emails</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="model-footer">
                <div className="row m-0">
                    <div className="col-md-12">
                        <div className="text-center comment-video">
                            <a id="btnSendInvitation" className="btn btn-primary btn-lg evt-leads-action" data-action="schedule" data-request_for="create">Send video invitation</a>
                            <button className="btn btn-danger btn-lg" type="button" data-dismiss="modal"><i className="zmdi zmdi-rotate-left">&nbsp;</i>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>)
}
export default MdlSchedule;