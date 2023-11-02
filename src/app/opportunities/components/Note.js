"use client"
import React from 'react'

function Note({ res = [] }) {
  return (
    <div className="row justify-content-center mb-5">
        <div className="col-md-12 col-xl-8 mt-3">
            <div className="p-3 bg__Color">
                <div className="form-group">                    
                    <textarea required="required" className="form-control" style={{ height: "90px" }} id="txt_note"placeholder="Write a private note"></textarea>
                </div>
                <div className="text-right mt-3">
                    <a className="btn btn-primary evt-leads-action" data-action="notes" data-request_for="create" data-type="note"><i className="zmdi zmdi-upload">&nbsp;</i>Create</a>
                    <a className="btn btn-danger ms-1 evt-leads-action" data-action="notes" data-request_for="cancel"><i className="zmdi zmdi-rotate-left">&nbsp;</i> Cancel</a>
                </div>
            </div>
            
            <div className="card mt-3">
                <div className="p-3 bg__Color bdr__none">
                    <h4 className="font-20 mb-0"><i className="zmdi zmdi-comment-alt-text me-2"></i>Comments</h4>                    
                </div>

                <div className="mb-4  max-hght-280">
                    {res && res.length > 0 && res[2].note_info != "" ? res && res.length > 0 && res[2].note_info.map((note, i) => (
                            <div key={i}>
                                <div className="d-flex flex-row p-3"> <img src="images/download.jpg" width="40" height="40" className="rounded-circle mr-3" />
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex flex-row align-items-center">
                                                <span className="mr-2 font-18 col-head">{note.user_name}</span>
                                            </div>
                                            <small><i className="zmdi zmdi-calendar mr-1"></i> {note.create_date} {note.create_time}</small>
                                        </div>
                                        <p className="text-justify">{note.lead_note}</p>
                                        {note.event_type==='call_back'?<>
                                        <p className="text-justify">Person name: {note.person_name}</p>
                                        <p className="text-justify">Call back between: {note.start_datetime} to {note.end_datetime}</p>
                                        </>
                                        :<></>
                                    }
                                        <div className="d-flex flex-row user-feed"> 
                                        <span className="wish"><i className="zmdi zmdi-thumb-up mr-2"></i>0</span> </div>
                                    </div>
                                </div><hr /></div>
                        ))
                        : <div className="text-center pt-4">
                            <span className="spanNoDataFound" style={{ color: "red" }}>No notes found!</span><br />
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Note

