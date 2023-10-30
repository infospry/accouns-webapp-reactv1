
const MdlSettinngServices = () => {
  return (
    <div className="modal right-quater md-one" id="addservice" tabIndex="-1" role="dialog" aria-labelledby="shortModal">
    <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
        <div className="modal-content" style={{height:"auto!important"}}>
            <div className="modal-header bg-blu-lite fixed-top">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title" id="myModalLabel2">
                    <b> <i className="zmdi zmdi-plus"></i> Add Services</b>
                </h4>
            </div>
            <div className="modal-body pr-0 pl-0">
                <div className="row  m-0">
                    <div className="col-md-12 pl-0 pr-0">

                        <div className="tab-content">
                            <div role="tabpanel" className=" tab-pane in active">

                                <div className="alert alert-primary" role="alert">
                                   <i className="zmdi zmdi-info"></i> Type the name of your service to start searching out thousands of available services.
                                  </div>

                                <div className="row  m-0">
                                    <div className="col-12 col-sm-12 bootstrap-tagsinput">
                                        <div className="form-group">
                                            <label htmlFor="" className="font-18"><b>Services</b></label>
                                            <input type="text" className="form-control" name="Services"/>
                                        </div>
                                        
                                        <p className="font-18 mb-0"><b>New services you are adding</b></p>
                                        <p>
                                            <span className="badge badge badge-info">Marketing Agencies<span data-role="remove"></span></span>
                                            <span className="badge badge badge-info">Business Card Design<span data-role="remove"></span></span>
                                            <span className="badge badge badge-info">Brand Design<span data-role="remove"></span></span>
                                            <span className="badge badge badge-info">Infographics<span data-role="remove"></span></span>
                                            <span className="badge badge badge-info">Branding & Brand Management<span data-role="remove"></span></span>
                                            <span className="badge badge badge-info">Print Design<span data-role="remove"></span></span>
                                        </p>
                                        <hr/>
                                        <p className="font-18 mb-0"><b>Suggestions</b><br/>
                                            We suggest the following services for you. Click to add.
                                        </p>
                                        <p>
                                            <span className="badge badge badge-secondary">Advertising +</span>
                                            <span className="badge badge badge-secondary">Marketing Strategy Consulting +</span>
                                            <span className="badge badge badge-secondary">Email Marketing +</span>
                                            <span className="badge badge badge-secondary">Flyer Design +</span>
                                            <span className="badge badge badge-secondary">Brochure Design +</span>
                                            <span className="badge badge badge-secondary">Copywriting Services +</span>
                                            <span className="badge badge badge-secondary">SEO Copywriting & Content +</span>
                                            <span className="badge badge badge-secondary">General Software development +</span>
                                            <span className="badge badge badge-secondary">Website Copywriting +</span>
                                            <span className="badge badge badge-secondary">Email Template Design +</span>                                                
                                        </p>
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
                            <button className="btn btn-primary clickmode btn-lg" data-show="." data-hide="" type="button"> <i className="zmdi zmdi-plus"></i> Add Services </button>
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

export default MdlSettinngServices