const OppSms = ({ res }) => {
    return (
        <div role="tabpanel" className=" tab-pane pt-3" id="Messagessms">
            {res && res.length > 0 && res[1].msg_info !== '' ?
                res.length > 0 && res[1].msg_info.map((sms, i) => (
                    sms.message_type === 'SMS' ?
                        <div key={i} id={"divsms_" + sms.u_id} className="messages_content ms-3 float-left w-100">
                            <span className="wid_bold_head crsr">{sms.message_to}</span><br />
                            <p>{sms.message}</p>
                            <small className="col-grey">{sms.create_date}&nbsp;{sms.create_time} by {sms.user_name}</small>
                        </div>
                        : <span key={i}></span>
                ))
                : <div><center className="fnt_bld">No sms found !</center></div>
            }
        </div>
    )
}
export default OppSms