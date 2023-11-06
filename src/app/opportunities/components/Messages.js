import React from 'react'
import OppEmail from "./OppEmail";
import OppSms from "./OppSms";
function Messages({ res = [] }) {

    
  return (
    <>
       <div role="tabpanel" className=" tab-pane opp-tab" id="Messages">
            <ul className="nav nav-tabs p-0 justifyleft">
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#Messagesemail"><i className="zmdi zmdi-email-open me-1"></i> Email</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " data-bs-toggle="tab" href="#Messagessms"><i className="zmdi zmdi-comment-text me-1"></i> SMS</a>
                </li>
            </ul>
            <div className="tab-content p-0">
                <OppEmail res={res && res} />
                <OppSms res={res && res} />
            </div>
        </div>
    </>
  )
}

export default Messages

