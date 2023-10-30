const MdlLeadStatuses=()=>{
    return (
        <>
        <div className="modal fade mdds" id="lead_statuses" tabIndex="-1" data-backdrop="static" role="dialog" aria-labelledby="lead_statuses" aria-hidden="true">
    <div className="modal-dialog ui-draggable ui-draggable-handle modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title text-center" id="exampleModalLongTitle">
                    <b id="status_header"></b>
                </h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body p-4">
                {/* <div className="alert alert-primary mb-4" role="alert">
                    This is a primary alert—check it out!
                </div> */}
                <div className="form-group">
                    <p> Comment</p>
                    <input type="text" id="txt_status_label" className="form-control" autoComplete="off" readOnly />
                </div>
                <div id="divDate" className="form-group">
                    <p> Date</p>
                    <input type="text" id="txt_date" className="form-control datepicker " placeholder="dd/mm/yyyy" autoComplete="off" />
                </div>
                <div id="divComment" className="form-group">
                    <p> Comments</p>
                    <textarea id="txt_status_comment" className="form-control"></textarea>
                </div>
            </div>
            <div className="modal-footer">
                <div className="text-center">
                    <a id="btnSubmitCmnt" className="btn btn-primary evt-leads-action" data-action="leads" data-request_for="action-status" data-u_id="0" data-id="0" data-type="" data-status=""><i className="zmdi zmdi-upload">&nbsp;</i>Save</a>
                    <a className="btn btn-danger" data-dismiss="modal"><i className="zmdi zmdi-rotate-left">&nbsp;</i>Cancel</a>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}
export default MdlLeadStatuses;