const MdlMyDocument=()=>{
    return <>
    <div className="modal right-quater md-one" id="addmydoc" tabIndex="-1" aria-labelledby="shortModal" data-backdrop="static" aria-hidden="true">
    <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
        <div className="modal-content" style={{height:"auto!important"}}>
            <div className="modal-header bg-blu-lite fixed-top">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title" id="myModalLabel2">
                    <b> <i className="zmdi zmdi-plus-circle-o-duplicate"></i> Add New Document</b>
                </h4>
            </div>
            <div className="modal-body pr-0 pl-0 pb-0">
                <div className="loader"></div>
                <div className="tab-content pt-2 pb-2 pl-2 pr-2">
                    <div role="tabpanel" className=" tab-pane in active">
                        <div className="row m-0">
                            <div className="col-md-12 Uploadimg">
                                <div className="form-group files mt-2">
                                    <label><b>Upload Your File/Image </b></label>
                                    <input type="file" id="filename" className="form-control mt-3" multiple="" />
                                </div>
                                <span className="col-red font-11 col-red spanerror" style={{display:"none"}}></span>
                                <p className="col-grey font-11">Select Media(jpg, png, pdf, doc, docx, xls, xlsx allowed - upto 6 Mb)</p>
                                <img className="imagePreview" style={{display:"none"}} />
                                <img className="showicon" style={{display:"none"}} />
                                <div className="group_lead mt-2">
                                    <input type="text" id="txt_doc_name" className="input_text" required="required" autoComplete="off" />
                                    <label htmlFor="=" className="lablefilled">Document Label</label>
                                </div>
                                <div className="group_lead">
                                    <textarea id="txt_description" required="required" className="input_text" ></textarea>
                                    <label htmlFor="txt_description" className="lablefilled">Description</label>
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
                            <a className="btn btn-primary btn-lg evt-leads-action fileupload" style={{display:"none"}} data-action="files" data-request_for="upload" data-u_id="0">
                                <i className="zmdi zmdi-upload">&nbsp;</i>Save
                            </a>
                            <button className="btn btn-danger btn-lg" type="button" data-toggle="modal" data-dismiss="modal"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
}
export default MdlMyDocument;