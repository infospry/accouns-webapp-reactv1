import React from 'react'

function Activity({res,contact}) {
  return (
    <>
        <div className="dd-content p-4">
                                <ul className="timeline">                                          
                            {contact.lead_status_list && contact.lead_status_list.map((status, i) => (
                            <li key={i}>
                                <div className="timeline-time">
                                    <span className="date">{status.create_date}</span>
                                    <span className="time">{status.create_time}</span>
                                </div>
                                <div className="timeline-icon">
                                    <a href="javascript:;">&nbsp;</a>
                                </div>
                                <div className="timeline-body">
                                    <div className="timeline-header">
                                        <span className="userimage"><img
                                                src="images/download.jpg" /></span>
                                        <span className="username"><a
                                                href="javascript:;">{status.user_name}</a>
                                            <small></small></span>
                                        <span
                                            className="text-right float-right text-muted">{status.status_name}</span>
                                    </div>
                                    <div className="timeline-content">
                                        <p className="lead">Traning Magager Software
                                            Engneering</p>
                                        <p>
                                            A Leads Status in a campaign can be
                                            Updated from the Lead Profile in a
                                            Campaign.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                            </div>
    </>
  )
}

export default Activity
