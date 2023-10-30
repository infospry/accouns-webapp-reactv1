const MdlContact = ({ answer_list }) => {
    return (
        <>
            <div className="modal fade mdds" id="contact" role="dialog" aria-labelledby="ModalCenterTitle" tabIndex="-1" aria-hidden="true" data-backdrop="static">
                <div className="modal-dialog ui-draggable ui-draggable-handle modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title text-center" id="exampleModalLongTitle"><b>Contact</b></h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body pt-1">
                            <div id="clsection" className="dd-content text-center p-3">
                                <p id="telMobNo_placeholder"></p>
                                <div>
                                    <b>
                                        Did they answer?
                                    </b>
                                    <p>We'll save your answer as a note and notify the candidate</p>
                                </div>
                                <span id="spanLeadEmail" style={{ display: "none" }}></span>
                                <p><a className="btn btn-outline-primary btn-lg evt-leads-action" data-action="notes" data-request_for="call-back" style={{ width: "300px" }} data-message="Call Back">Call Back</a></p>
                                <div id="answers_placeholder">
                                    {answer_list.map((ans, i) => (
                                        <p key={i}><a className="btn btn-outline-primary btn-lg evt-leads-action" data-action="notes" data-request_for="create" data-type="ncallback" style={{ width: "300px", cursor: "pointer" }} data-message={ans.message}>{ans.message}</a></p>
                                    ))}
                                </div>
                            </div>
                            <div id="cfsection" className="disableform" style={{ display: "none" }}>
                                <div className="group_lead mt-3">
                                    <input type="text" id="call_label" className="input_text" required="required" autoComplete="off" value="Call Back" disabled="disabled" />
                                    <label className="lablefilled"><i className="zmdi zmdi-account">&nbsp;</i>Label</label>
                                </div>
                                <div className="group_lead">
                                    <input type="text" id="person_name" className="input_text" required="required" autoComplete="off" />
                                    <label className="lablefilled"><i className="zmdi zmdi-account">&nbsp;</i>Person Name<span>*</span></label>
                                </div>
                                <div className="row">
                                    <div className="col-6 pr-0">
                                        <p>From</p>
                                        <div className="row">
                                            <div className="col pr-0">
                                                <div className="group_lead  mb-1">
                                                    <input type="text" id="cb_start_date" className="input_text datepicker " required="required" autoComplete="off" maxLength="10" />
                                                    <label className="lablefilled"><i className="zmdi zmdi-calendar">&nbsp;</i>Date<span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col pl-1">
                                                <div className="group_lead  mb-1">
                                                    <input type="text" id="cb_start_time" className="input_text timepicker " required="required" autoComplete="off" maxLength="5" />
                                                    <label className="lablefilled"><i className="zmdi zmdi-time">&nbsp;</i>Time<span>*</span></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-1">
                                        <p>To</p>
                                        <div className="row">
                                            <div className="col pr-0">
                                                <div className="group_lead mb-1">
                                                    <input type="text" id="cb_end_date" className="input_text datepicker " required="required" autoComplete="off" maxLength="10" />
                                                    <label className="lablefilled"><i className="zmdi zmdi-calendar">&nbsp;</i>Date<span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col pl-1">
                                                <div className="group_lead  mb-1">
                                                    <input type="text" id="cb_end_time" className="input_text timepicker" required="required" autoComplete="off" maxLength="5" />
                                                    <label className="lablefilled"><i className="zmdi zmdi-time">&nbsp;</i>Time<span>*</span></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3"><small>Eg:- Date(dd/mm/yyyy), Time(hh:mm)</small></div>
                                </div>
                                <div className="text-center pt-0">
                                    <a className="btn btn-primary btn-sm evt-leads-action" data-action="notes" data-request_for="create" data-type="callback"><i className="zmdi zmdi-upload">&nbsp;</i>Submit</a>
                                    <a className="btn btn-danger btn-sm evt-leads-action" data-action="notes" data-request_for="cancel-call"><i className="zmdi zmdi-rotate-left">&nbsp;</i>Cancel</a>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer mt-2">
                            <div className="text-center">
                                <button className="btn btn-danger" data-dismiss="modal" type="button"><i className="zmdi zmdi-rotate-left"></i> Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MdlContact;