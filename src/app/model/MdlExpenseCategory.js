import React from 'react'

const MdlExpenseCategory = () => {
  return (
    <div class="modal right-quater md-one" id="addpage" tabindex="-1" role="dialog" aria-labelledby="shortModal">
    <div class="modal-dialog ui-draggable ui-draggable-handle" role="document">
        <div class="modal-content">
            <div class="modal-header bg-blu-lite fixed-top">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 class="modal-title" id="myModalLabel2">
                    <b> <i class="zmdi zmdi-plus-circle-o-duplicate"></i> Add / Edit Expense Category</b>
                </h4>
            </div>
            <div class="modal-body contbody pr-0 pl-0 pb-0">  
                <div class="tab-content">                                            
                    <div role="tabpanel" class="tab-pane in active">                             
                        <div class="pagediv">
                            <div class="row  m-0">                                            
                                <div class="col-12 col-sm-12 mt-3">
                                    <div class="group_lead">
                                        <input type="text" id="catgname"class="input_text" required="required" />
                                        <label htmlFor="catgname"class="lablefilled">Category Name</label>                                 
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12">
                                    <div class="group_lead">
                                        <input type="text" id="catgname"class="input_text" required="required" />
                                        <label htmlFor="catgname"class="lablefilled">Category Name</label>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12">
                                    <div class="group_lead">
                                        <input type="text" id="Name"class="input_text" required="required" />
                                        <label htmlFor="Name"class="lablefilled">Name</label>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12">
                                    <div class="group_lead">
                                        <input type="text" id="Dated"class="input_text" required="required" />
                                        <label htmlFor="Dated"class="lablefilled">Date</label>
                                    </div>
                                </div>                                                                                              
                            </div>  
                        </div>                                                                                                                                                                        
                    </div>
                </div>                   
            </div>
            <div class="model-footer">
                <div class="row m-0">
                    <div class="col-md-12">                          
                        <div class="text-center">
                            <button class="btn btn-primary btn-lg clickmode btn-lg" data-show=".contactlist, .showthing, .nxtprv" data-hide=".md-one, .hdbox, .modal-backdrop" type="button"> <i class="zmdi zmdi-upload"></i> Save </button>
                            <button class="btn btn-danger btn-lg" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default MdlExpenseCategory