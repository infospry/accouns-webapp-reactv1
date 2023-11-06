// import parse from 'html-react-parser';
const OppEmail = ({ res }) => {
    const DynamicHTMLComponent = (prop) => (
        <div dangerouslySetInnerHTML={{ __html: JSON.stringify(prop.msg) }} />
    );
    return (<>
        <div role="tabpanel" className=" tab-pane in active" id="Messagesemail">
            <div className="table-responsive">
                <table className="table rwd-table btdr_none mb-0">
                    <tbody>
                        {res && res.length > 0 && res[1].msg_info !== '' ?
                            res.length > 0 && res[1].msg_info.map((msg, i) => (
                                msg.message_type !== 'SMS' ?
                                    <tr key={i} className="evt-leads-action" id={"email_" + msg.u_id} data-bs-toggle="modal" data-bs-target="#viewmail" data-action="message" data-request_for="view-email" data-u_id={msg.u_id} data-message={msg.message} data-email={msg.message_to} data-subject={msg.subject}>
                                        <td>
                                            <span className="str-grey">
                                                <i className="zmdi zmdi-star-outline"></i>
                                            </span>
                                            <span className="str-yelo">
                                                <i className="zmdi zmdi-star"></i>
                                            </span>
                                        </td>
                                        <td>
                                            <span className="str-grey fnt_bld cursor">
                                                {msg.message_to}
                                            </span>
                                        </td>
                                        <td>                                          
                                            <div className="wid_head_scond fnt_bld cursor">
                                                <div className="ellipsisss">                                                 
                                                    <p className="ellipsis" style={{ fontWeight: "normal" }}>
                                                         {msg.subject}-
                                                        <DynamicHTMLComponent msg={msg.message} />
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <small> Read Status:
                                                <span className={msg.read_status == 0 ? "col-red" : "col-green"}>
                                                    <b>{msg.read_status == 0 ? "No" : "Yes"} </b>
                                                </span>
                                            </small>
                                        </td>
                                        <td>
                                            <b className="col-grey float-right">
                                                <i className="zmdi zmdi-calendar"> </i> {msg.create_date}</b>
                                            <span className="tbl-row-btn">
                                                {/* <a className="btn btn-sm btn-outline-primary me-1" data-bs-toggle="modal" data-u_id={msg.u_id} data-target="#sms_edit">
                                                    <i className="zmdi zmdi-archive"></i>
                                                </a> */}
                                                <a className="btn btn-outline-primary btn-sm open-hover  evt-leads-action" data-action="message" data-request_for="read_status" data-u_id={msg.u_id}>
                                                    {msg.read_status == 1 ? <i className="zmdi zmdi-email-open"></i> : <i className="zmdi zmdi-email"></i>}
                                                </a>
                                               
                                            </span>
                                        </td>
                                    </tr>
                                    : <></>
                            ))
                            :<></>
                        }

                    </tbody>
                </table>
            </div>
        </div>

    </>
    )
}
export default OppEmail;