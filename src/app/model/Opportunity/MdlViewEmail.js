import MdlMailTemplate from "../MdlMailTemplate";

const MdlEmail = () => {
    function handleKeyPress(e) {
     //   console.log(e.charCode)
        //return e.charCode >= 48 && e.charCode <= 57;
        //onkeypress="return event.charCode >= 48 && event.charCode <= 57"
        if (e.charCode >= 48 && e.charCode <= 57) {
            return e.charCode
        }
    }
    const showMailTemplate=(e)=>{
        e.preventDefault();
        $("#template_body").summernote("enable");
        $('#templateHeader').html('Create Mail Template');
        $('#chk_custom').prop('checked', false);
        $('#btnSbmtMailTemp').attr({ 'data-uid': "0", 'data-row-num': "0", 'data-request_for': 'create' }).html('Save');
    }
    return (<>
        <div className="modal right-half md-one Modal" id="viewmail" tabIndex="-1" role="dialog" aria-labelledby="shortModal" data-backdrop="static">
            <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
                <div className="modal-content" style={{ height: "auto!important" }}>
                    <div className="modal-header bg-blu-lite fixed-top">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 className="modal-title" id="myModalLabel2">
                            <b>
                                <i className="zmdi zmdi-email-open">&nbsp;</i>Message
                            </b>
                        </h4>
                    </div>
                    <div className="modal-body pr-0 pl-0">
                        <div className="row m-0">
                            <div className="col-md-12 pl-0 pr-0">
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane in active">
                                        <div className="row m-3">
                                            <div className="col-md-12">
                                                <div id="view_email_placeholder"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="model-footer">
                            <div className="row m-0">
                                <div className="col-md-12">
                                    <div className="text-center">
                                        <a id="btnReSendEmail" className="btn btn-primary btn-lg evt-leads-action" data-email="" data-subject="" data-action="message" data-request_for="resend-email" data-toggle="modal" data-target="#emailsend"><i className="zmdi zmdi-upload">&nbsp;</i>Resend</a>
                                        <a className="btn btn-danger btn-lg" data-dismiss="modal"><i className="zmdi zmdi-rotate-left">&nbsp;</i>Close</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* // Send Email */}
        <div className="modal right-half md-one" id="emailsend" tabIndex="-1" role="dialog" aria-labelledby="shortModal" data-backdrop="static">
            <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
                <div className="modal-content" style={{ height: "auto!important" }}>
                    <div className="modal-header bg-blu-lite fixed-top">
                        <button type="button" className="close" data-toggle="modal" data-target="#delete">
                            <span aria-hidden="true" data-toggle="modal" data-target="#discardmail">×</span>
                        </button>
                        <h4 className="modal-title" id="myModalLabel2">
                            <b> <i className="zmdi zmdi-email-open"></i>Send Email</b>
                        </h4>
                    </div>
                    <div className="modal-body pr-0 pl-0 contbody">
                        <div className="row m-0 justify-content-center">
                            <div className="col-md-4 mt-2 mb-1 pt-2 pl-3 pr-3 pb-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input evt-leads-action" data-action="message" data-request_for="email" id="leademail" name="chkleadmsg" value="EMAIL" defaultChecked="checked" />
                                    <label className="custom-control-label font-18" htmlFor="leademail"> <b>  Email </b></label>
                                </div>
                            </div>
                            <div className="col-md-4 mt-2 mb-1 pt-2 pl-3 pr-3 pb-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input evt-leads-action" id="leadsms" data-action="message" data-request_for="sms" name="chkleadmsg" value="SMS" />
                                    <label className="custom-control-label font-18" htmlFor="leadsms"> <b>  SMS</b> </label>
                                </div>
                            </div>
                        </div>
                        <div className="row m-0">
                            <div id="side_lft" className="span0">
                                <div className="pt-2">
                                    <h4 className="mt-1">Create Template <a href="#" className="btn btn-danger btn-sm float-right text-righ trig-cross" type="button"> <i className="zmdi zmdi-close"></i></a></h4>
                                    <hr />
                                    <div id="template_placeholder"></div>
                                </div>
                            </div>
                            <div id="side_rgt" className="col-md-12 pl-0 pr-0">
                                <div className="tab-content p-0">
                                    <div role="tabpanel" className="tab-pane in active">
                                        <div className="row m-0">
                                            <div className="col-md-12 p-0">
                                                <div className="f8f8f8bg">
                                                    <div className="card mb-0 p-2">
                                                        <div className="clsemail">
                                                            <div className="body mb-2">
                                                                <div className="group_lead">
                                                                    <input type="text" className="input_text" id="txt_msg_to" required="required" autoComplete="off" />
                                                                    <label htmlFor="" className="lablefilled">To</label>
                                                                </div>
                                                                <div className="group_lead mb-0">
                                                                    <input type="text" className="input_text" id="txt_msg_subject" required="required" autoComplete="off" />
                                                                    <label htmlFor="" className="lablefilled">Subject</label>
                                                                </div>
                                                            </div>
                                                            <div className="body mb-2">
                                                                <a className="btn btn-primary trig-add" href="#"><i className="zmdi zmdi-file"></i> <strong>Templates</strong></a>
                                                                <a className="btn btn-primary ml-1 evt-leads-actionn" onClick={showMailTemplate}  type="button" data-toggle="modal" data-target="#modalMailTemplate" href="#"><i className="zmdi zmdi-save"></i> <strong>Save as Template</strong></a>
                                                                <a href="#" className="btn btn-danger ml-2 float-right" type="button" data-toggle="modal" data-target="#delete"> <i className="zmdi zmdi-close"></i></a>
                                                            </div>
                                                            <div className="body">
                                                                <div id="txt_msg" className="summernote-editor">  </div>
                                                            </div>
                                                        </div>
                                                        <div className="clssms" style={{ display: "none" }}>
                                                            <div className="body mb-2">
                                                                <div className="group_lead">
                                                                    <input type="text" id="txt_smsmsg_mobile" className="input_text" maxLength="10" required="required" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} placeholder="Enter mobile no." />
                                                                    <label htmlFor="" className="lablefilled">Mobile No</label>
                                                                </div>
                                                                <div className="group_lead">
                                                                    <textarea id="txt_sms_msg" className="input_text" required="required" placeholder="Enter message here..."></textarea>
                                                                    <label htmlFor="" className="lablefilled">Message</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
                                <div className="text-center">
                                    <a id="btn_send_msg" className="btn btn-primary btn-lg evt-leads-action" data-action="message" data-request_for="create"><i className="zmdi zmdi-upload">&nbsp;</i>Send </a>
                                    <button className="btn btn-danger btn-lg" type="button" data-toggle="modal" data-target="#discardmail"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* add mail template */}
       <MdlMailTemplate status_master_list={[]} template={[]} templateList={[]} setTemplateList={null} />

        {/* Discard mail */}
        <div className="modal fade" id="discardmail" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Delete Message ?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body text-center">
                <div className="p-4">
                    <p>
                        Are you sure you want to discard this message?<br />
                        Your message will not be saved.
                    </p>
                    <div className="text-center">
                        <a className="btn btn-primary btn-sm evt-leads-action" data-dismiss="modal" data-action="message" data-request_for="discard-email">  Discard </a>
                        <a className="btn btn-danger btn-sm" data-dismiss="modal"><i className="zmdi zmdi-rotate-left"></i> Cancel</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    )
}
export default MdlEmail;