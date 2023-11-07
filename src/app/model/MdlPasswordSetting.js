import { post } from "../services/api_axios_services";
import ApiEndPoints from "../utils/ApiEndPoints";

const MdlPasswordSetting = () => {
    const updatePassword = async (e) => {
        e.preventDefault();
        let strJsonString = ns_validations.changePassword(e.target);
        if (strJsonString !==false) {
            const resp = await post(strJsonString, ApiEndPoints.dashboard);
            if (resp.response_status === "OK") {
                alertmsg.msg("Message", resp.response_msg, "S");
            }
            else alertmsg.msg("Message", resp.response_msg, "W");
        }
    }
    return (
        <><div className="modal right-quater md-one" id="password" tabIndex="-1" role="dialog" aria-labelledby="shortModal">
            <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
                <div className="modal-content" style={{ height: "auto!important" }}>
                    <div className="modal-header bg-blu-lite">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 className="modal-title" id="myModalLabel2">
                            <b> <i className="zmdi zmdi-settings"></i> Password Setting</b>
                        </h4>
                    </div>
                    <div className="modal-body pr-0 pl-0 pb-0 contbody">
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane in active">
                                <div className="row  m-0">
                                    <div className="col-md-12 pl-0 pr-0">
                                        <div className="tab-content pt-2 pb-2 pl-2 pr-2">
                                            <div role="tabpanel" className=" tab-pane in active">
                                                <div className="row  m-0">
                                                    <div className="col-12 col-sm-12">
                                                        <div className="group_lead mt-4">
                                                            <input type="password" id="txt_old_password" className="input_text" required="required" />
                                                            <label htmlFor="" className="lablefilled"><i className="zmdi zmdi-lock col-grey">&nbsp;</i> Old Password</label>
                                                        </div>
                                                        <div className="group_lead">
                                                            <input type="password" id="txt_password" className="input_text" required="required" />
                                                            <label htmlFor="" className="lablefilled"><i className="zmdi zmdi-lock col-grey">&nbsp;</i> New Password</label>
                                                        </div>
                                                        <div className="group_lead">
                                                            <input type="password" id="txt_confirm_password" className="input_text" required="required" />
                                                            <label htmlFor="" className="lablefilled"><i className="zmdi zmdi-lock col-grey">&nbsp;</i> Confrim Password</label>
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
                                    <button className="btn btn-primary clickmode me-1" onClick={updatePassword} data-action="change-password" data-request-for="update" type="button"> <i className="zmdi zmdi-upload"></i> Save </button>
                                    <button className="btn btn-danger"data-bs-dismiss="modal" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default MdlPasswordSetting