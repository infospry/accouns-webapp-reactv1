import React, { useCallback, useReducer, useState } from 'react'
import { post } from '../services/api_axios_services';
import ApiEndPoints from '../utils/ApiEndPoints';

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const MdlUserAccount = ({ role_list, userList, setUserList, user_info }) => {
    const [formData, setFormData] = useReducer(formReducer, {})
    // let { u_id, user_name, user_type
    //     , user_role, user_email, user_mobile } 
    //if(user_info !==undefined){
    let { u_id, user_name, user_type
        , role_id, user_email, user_mobile, email_verify_required = 0, row_num } = user_info || '';
    //}
    const [verifyMail, setVerifyMail] = useState((user_info === undefined || user_info === '') ? false : (user_info.email_verify_required === 1 ? true : false));
    //const [verifyMail, setVerifyMail] = useState((user_info && (user_info.email_verify_required===1?true :false ))|| false);
    // const [user_name, setUser_name] = useState();
    // const [user_role, setUser_role] = useState();
    // const [user_email, setUser_email] = useState();
    // const [user_mobile, setUser_mobile] = useState();
    //   let { user_name } = formData;
    //console.log(userList)
    let strJsonString = "";
    // const handleSubmit=useCallback(e=>{
    //     e.preventDefault();
    //     strJsonString = ns_validations.addUser(e.target);
    //     if(strJsonString !==false){
    //         console.log(strJsonString)
    //         console.log("submitted")
    //        // setUserList(...userList,strJsonString)
    //        const resp = await post(strJsonString, ApiEndPoints.opportunity);
    //        if (resp.response_status === "OK") {
    //            ModalHide('#leadmain');
    //            alertmsg.msg("Message", resp.response_msg, "S");
    //        }
    //     } 
    // },[setUserList])
    const handleSubmit = async (e) => {
        // e.preventDefault();
        strJsonString = ns_validations.addUser(e.target);
        let row_num = userList[userList.length - 1].row_num;
        if (strJsonString !== false) {
            const resp = await post(strJsonString, ApiEndPoints.dashboard);
            if (resp.response_status === "OK") {
                let user_uid = "0";
                if ($(e.target).attr('data-uid') === "0") { user_uid = resp.data.response.u_id; row_num = row_num + 1 }
                else {
                    user_uid = $(e.target).attr('data-uid');
                    row_num = $(e.target).attr('data-row-num');
                }
                //
                var newUser = {
                    "row_num": row_num,
                    "u_id": user_uid,
                    "user_name": $("#txt_name").val(),
                    "user_type": $("#ddl_user_role option:selected").text(),
                    "role_id": $("#ddl_user_role option:selected").val(),
                    "role_name": $("#ddl_user_role option:selected").text(),
                    "user_email": $("#txt_email").val(),
                    "user_mobile": $("#txt_mobile").val(),
                    "user_status": 1,
                    "is_manager": 0,
                    "email_verify_required": verifyMail === true ? 1 : 0,
                    "create_date": new Date().toLocaleDateString('en-CA')
                };
                ModalHide('#addUserAccount');
                alertmsg.msg("Message", resp.response_msg, "S");
                if ($(e.target).attr('data-uid') === "0")
                    setUserList([newUser, ...userList])
                else {
                    const userListClone = [...userList];
                    var index = userListClone.map(function (x) { return x.u_id; }).indexOf(user_uid);
                    userListClone[index] = { ...newUser };
                    setUserList(userListClone);
                }
            }
            else {
                alertmsg.msg("Message", resp.response_msg, "E");
            }
        }
    }//,[setUserList])

    return (
        <><div className="modal right-quater md-one" id="addUserAccount" tabIndex="-1" role="dialog" aria-labelledby="shortModal">
            <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
                <div className="modal-content" style={{ height: "auto!important" }}>
                    <div className="modal-header bg-blu-lite fixed-top">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 className="modal-title" id="myModalLabel2">
                            <b> <i className="zmdi zmdi-plus-circle-o-duplicate"></i> Add/ Edit  Account</b>
                        </h4>
                    </div>
                    <div className="modal-body pr-0 pl-0 pb-0">
                        <div className="row m-0">
                            <div className="col-md-12 pl-0 pr-0">
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane in active">
                                        <div className="row m-0">
                                            <div className="col-12 col-sm-12 mt-4">
                                                <div className="group_lead">
                                                    <input type="text" id="txt_name" name="user_name" key={u_id !== '' ? u_id : "0"} defaultValue={user_name || ''} onChange={setFormData} className="input_text" required="required" autoComplete="off" />
                                                    <label className="lablefilled"><i className="zmdi zmdi-account col-grey">&nbsp;</i>User Name<span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12">
                                                <div className="group_lead">
                                                    <input type="text" className="input_text allow-numbers-only" name='user_mobile' key={u_id !== '' ? u_id : "0"} defaultValue={user_mobile || ''} onChange={setFormData} id="txt_mobile" maxLength="11" required="required" autoComplete="off" />
                                                    <label className="lablefilled"><i className="zmdi zmdi-phone col-grey">&nbsp;</i>Mobile Number</label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12">
                                                <div className="group_lead">
                                                    <input type="email" id="txt_email" name='user_email' key={u_id !== '' ? u_id : "0"} defaultValue={user_email || ''} onChange={setFormData} className="input_text allow-email-only" required="required" autoComplete="off" />
                                                    <label className="lablefilled"><i className="zmdi zmdi-email col-grey">&nbsp;</i>Email<span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12">
                                                <div className="group_lead">
                                                    <input type="password" className="input_text check-password-strength" onChange={setFormData} id="txt_user_password" required="required" autoComplete="off" />
                                                    <label className="lablefilled"><i className="zmdi zmdi-lock col-grey">&nbsp;</i>Password<span>*</span></label>
                                                    <span className="password_strength"></span>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12">
                                                <div className="group_lead">
                                                    <input type="password" id="txt_confirm_user_password" className="input_text" required="required" autoComplete="off" />
                                                    <label className="lablefilled"><i className="zmdi zmdi-lock col-grey">&nbsp;</i>Confirm Password<span>*</span></label>
                                                    <div className="bar"></div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12">
                                                <div className="group_lead">
                                                    <select id="ddl_user_role" className="custom-select select_f" name="user_role" key={u_id !== '' ? u_id : "0"} defaultValue={role_id || ''} onChange={setFormData} data-val="0" data-uid="" required="required">
                                                        <option value="0">Select User Role</option>
                                                        {role_list.map((rol, i) => (
                                                            <option key={i} value={rol.role_id}>{rol.role_name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div id="users_placeholder" className="col-12 col-sm-12 row"></div>
                                            <div className="col-12 col-sm-12 checkbox">
                                                {/* <input id="chk_verifyEmail" name="email_verify_required" checked={email_verify_required===0?false :true}  value={email_verify_required || true} key={u_id !== '' ? u_id : "0"}  onChange={(e)=>{setFormData} }   type="checkbox" /> */}
                                                <input id="chk_verifyEmail" name="email_verify_required" checked={verifyMail === true ? true : false} value={!verifyMail} key={u_id !== '' ? u_id : "0"} onChange={(e) => setVerifyMail(!verifyMail)} type="checkbox" />
                                                <label htmlFor="chk_verifyEmail" className="pl-0"><b>Email Verification Required</b></label>
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
                                    <a id="btnSbmtUserDetails" className="btn btn-primary btn-lg " onClick={handleSubmit} data-row-num="0" data-uid="0" data-action="add-user" data-request-for="create">Save </a>
                                    <button type="button" className="btn btn-danger btn-lg evt-org-settings" data-dismiss="modal"><i className="zmdi zmdi-rotate-left">&nbsp;</i>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default MdlUserAccount