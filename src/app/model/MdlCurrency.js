import React from 'react'

const MdlCurrency = () => {
  return (
    <div className="modal right-quater md-one" id="edit-currency"tabIndex="2" role="dialog" aria-labelledby="shortModal">
    <div className="modal-dialog" role="document">
        <div className="modal-content" style={{height:"auto!important"}}>
            <div className="modal-header bg-blu-lite fixed-top">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title" id="myModalLabel2">
                    <b> <i className="zmdi zmdi-money"></i> Add Currency </b>
                </h4>
            </div>
            <div className="modal-body pr-0 pl-0 contbody">                        
                <div className="row  m-0">
                    <div className="col-md-12 pl-0 pr-0">                        
                        <div className="tab-content pt-2 pb-2 pl-2 pr-2">                                            
                            <div role="tabpanel" className=" tab-pane in active">                                             
                                <div className="row  m-0">                                            
                                    <div className="col-12 col-sm-12  mt-4">
                                        <div className="group_lead">
                                            <input type="text" id="" className="input_text" required="required" />
                                            <label htmlFor=""className="lablefilled"> Currency Code </label> 
                                        </div>  
                                        <div className="group_lead">
                                            <input type="text" id="" className="input_text" required="required" />
                                            <label htmlFor=""className="lablefilled"> Currency Symbol </label>
                                        </div> 
                                        <div className="group_lead">
                                            <select id="DecimalPlaces" className="custom-select select_f" required="required">
                                                <option> Decimal Places </option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>                                           
                                        </div> 
                                        <div className="group_lead">
                                            <select id="Format" className="custom-select select_f" required="required">
                                                <option>Select Format</option>
                                                <option>1,234,567.89</option>
                                                <option>1.234.567,89</option>
                                                <option>1 234 567,89</option>
                                            </select>
                                           
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
                            <button className="btn btn-primary clickmode btn-lg" data-show=".contactlist" data-hide=".md-one, .hdbox, .modal-backdrop" type="button"> <i className="zmdi zmdi-upload"></i> Save </button>
                            <button className="btn btn-danger btn-lg" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
        
    </div>
</div>  
  )
}

export default MdlCurrency