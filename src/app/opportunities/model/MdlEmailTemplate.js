import React from 'react'

const MdlEmailTemplate = () => {
  return (
    <> <div className="modal right_one_thrd md-one" id="addpage" tabIndex="-1" role="dialog" aria-labelledby="shortModal">
    <div className="modal-dialog" role="document">
        <div className="modal-content" style={{height:"auto!important"}}>
            <div className="modal-header bg-blu-lite fixed-top">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title" id="myModalLabel2">
                    <b> <i className="zmdi zmdi-plus-circle-o-duplicate"></i> Add/ Edit Mail Template</b>
                </h4>
            </div>
            <div className="modal-body pr-0 pl-0 pb-0">  
                <div className="tab-content">                                            
                    <div role="tabpanel" className=" tab-pane in active"> 
                        <div className="row  m-0">  
                            <div className="col-12 col-md-6 col-lg-8 pt-4">
                               <div className="row">
                                   <div className="col-lg-5">
                                    <div className="group_lead">
                                        <select id="DecimalPlaces" className="custom-select select_f" required="required" name="ctl00$ContentPlaceHolder1$ddlgroup">
                                            <option value="">--Select group--</option>
                                            <option value="All">All</option>
                                            <option value="Sys">System</option>
                                        </select>                                           
                                    </div> 
                                   </div>
                                   <div className="col-lg-7">
                                    <div className="group_lead">
                                        <input type="text" id="" className="input_text" required="required" />
                                        <label htmlFor="" className="lablefilled"> Templet Name<span>*</span> </label>                                           
                                    </div>
                                   </div>
                               </div>  
                                <div className="group_lead">
                                    <input type="text" id="" className="input_text" required="required" />
                                    <label htmlFor="" className="lablefilled">Subject </label>                                           
                                </div>  
                                <div className="group_lead">
                                    <textarea required="required" id="Message" style={{minHeight:"360px"}}></textarea>
                                    <label htmlFor="Message" className="lablefilled">Message</label>                                          
                                </div>
                                <h5>Insert placeholder:</h5> 
                                <a className="btn btn-outline-secondary m-1">CANDIDATE_FIRST_NAME</a>    
                                <a className="btn btn-outline-secondary m-1">CANDIDATE_NAME</a>    
                                <a className="btn btn-outline-secondary m-1">JOB_TITLE</a>    
                                <a className="btn btn-outline-secondary m-1">JOB_LOCATION</a>    
                                <a className="btn btn-outline-secondary m-1">COMPANY_NAME</a>  
                                <p className="col-grey mt-3">Insert candidate name, Job title, Job location or company name. Placeholders will automatically update between candidates.</p>                
                            </div> 
                            <div className="col-12 col-md-6 col-lg-4" style={{background:"#f9f9f9",borderLeft:"1px solid #ddd"}}>
                                <div className="p-4 col-black">
                                    <h3 className="mt-0 mb-0"><b>Preview</b></h3>
                                    <hr/>                                        
                                    <h6>Hello,</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                    
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
                            <button className="btn btn-primary clickmode btn-lg" data-show=".contactlist, .showthing, .nxtprv" data-hide=".md-one, .hdbox, .modal-backdrop" type="button"> <i className="zmdi zmdi-upload"></i> Save </button>
                            <button className="btn btn-danger btn-lg" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div></>
  )
}

export default MdlEmailTemplate