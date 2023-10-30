import { useState } from "react"
import {post} from "../services/api_axios_services"
import ApiEndPoints from "../utils/ApiEndPoints";
const MdlTwostep = ({security_detail,setSecurity_detail}) => {
    console.log(security_detail)
    const [twoStepAuth, setTwoStepAuth] = useState();
    const turnOnTwoStep = async(e) => {
        var strJsonString = "", action = $(e.target).attr("data-action"), actionOn = "organization", requestFor = $(e.target).attr("data-request-for");
        var authnStatus = 1;
        strJsonString = {
            "add_user": {
                "two_step_authn_type": twoStepAuth,
                "two_step_authn_status": authnStatus,
            },
            "action": action,
            "action_on": actionOn,
            "request_for": requestFor
        };
        const resp = await post(strJsonString, ApiEndPoints.dashboard);
            if (resp.response_status === "OK") {
                ModalHide('#twostepauthn');
                alertmsg.msg("Message", resp.response_msg, "S");
                const security_detailClone=[...security_detail];
               // var index = userListClone.map(function(x) {return x.u_id; }).indexOf(user.u_id);
               security_detailClone[0]['two_step_authn_status']=authnStatus;
               setSecurity_detail(security_detailClone);
            }

    }
    return (
        <>
            <div className="modal fade mdds" id="twostepauthn" tabIndex="-1" role="dialog" aria-labelledby="twostepauthn" aria-hidden="true" data-backdrop="static">
                <div className="modal-dialog ui-draggable ui-draggable-handle modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title text-center" id="exampleModalLongTitle"><b><i className="zmdi zmdi-shield-security">&nbsp;</i>Turn on two-step authentication</b></h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body pt-1">
                            <h4>Select an authentication method for your account </h4>
                            <div className="custom-control custom-radio mb-3">
                                <input type="radio" className="custom-control-input " id="authn_app" name="twostepauth"
                                    onChange={(e) => setTwoStepAuth(e.target.value)} 
                                    value="authentication_app"
                                    data-action="" data-request_for="two-step-authn" defaultChecked="checked" />
                              
                                <label className="custom-control-label" htmlFor="authn_app">
                                    <strong>Authenticator app</strong><span className="bbl-light ml-1 col-green">Recommended</span> <br />
                                    <span className="col-grey">
                                        Use an app to generate an authentication code when log in.
                                    </span>
                                </label>
                            </div>
                            <div className="custom-control custom-radio mb-3">
                                <input type="radio" className="custom-control-input" id="security_key" name="twostepauth" onChange={(e) => setTwoStepAuth(e.target.value)}
                                    value="security_key"  />
                                <label className="custom-control-label" htmlFor="security_key">
                                    <strong>Security key</strong><br />
                                    <span className="col-grey">
                                        Use a compatible security key like a fingerprint reader or USB key when you log in.
                                    </span>
                                </label>
                            </div>
                            <div className="custom-control custom-radio mb-3">
                                <input type="radio" className="custom-control-input " id="sms"
                                    name="twostepauth" value="sms_delivery"
                                    onChange={(e) => setTwoStepAuth(e.target.value)}
                                    />
                                <label className="custom-control-label" htmlFor="sms">
                                    <strong>Sms delivery</strong><br />
                                    <span className="col-grey">
                                        Receive an SMS/text ,message with an authentication code when you log in.
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="text-center">
                                <a className="btn btn-primary " onClick={turnOnTwoStep} data-action="security" data-request-for="on-twostep"><i className="zmdi zmdi-upload"></i> Submit </a>
                                <button className="btn btn-danger" data-dismiss="modal" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MdlTwostep