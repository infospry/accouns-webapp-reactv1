import React from 'react'

const MdlExpenses = () => {
  return (
    <div  className="modal right_one_thrd md-one" id="addpage" tabIndex="-1" role="dialog" aria-labelledby="shortModal">
        <div  className="modal-dialog" role="document">
            <div  className="modal-content">
                <div  className="modal-header bg-blu-lite fixed-top">
                    <button type="button"  className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4  className="modal-title" id="myModalLabel2">
                        <b> <i  className="zmdi zmdi-plus-circle-o-duplicate"></i>  Add / Edit Expanses</b>
                    </h4>
                </div>
                <div  className="modal-body pr-0 pl-0 pb-0 contbody">  
                    <div  className="tab-content">                                            
                        <div role="tabpanel"  className="tab-pane in active">                             
                            <div  className="bgblulgt">
                                <ul  className="nav nav-tabs nav-justified p-0">                            
                                    <li  className="nav-item">
                                        <a  className="nav-link active" data-toggle="tab" href="#Page__details"> Record Expense</a>
                                    </li> 
                                    <li  className="nav-item">
                                        <a  className="nav-link" data-toggle="tab" href="#Page__otherdetails">Record Mileage</a>
                                    </li>   
                                    <li  className="nav-item">
                                        <a  className="nav-link" data-toggle="tab" href="#Page__address">Bulk Add Expenses</a>
                                    </li>                                                                
                                </ul>
                            </div>
                            <div  className="tab-content pt-2 pb-2 pl-2 pr-2">                                            
                                <div role="tabpanel"  className=" tab-pane in active" id="Page__details">     
                                    <div  className="row m-0">
                                        <div  className="col-md-8 mt-3">
                                            <div  className="row m-0">
                                                <div  className="col-12 col-sm-6 col-md-6">
                                                    <div  className="group_lead">
                                                        <input type="text" id="date" className="input_text" required="required" />
                                                        <label htmlFor="date" className="lablefilled">Select Date</label>                                                      
                                                    </div>                                                                               
                                                </div>
                                                <div  className="col-md-4 col-9 col-sm-4">
                                                    <div  className="group_lead">
                                                        <select required="required" name="cat_id" id="SelCategory" className="custom-select select_f"><option value="" selected="selected">Category</option><option value="1">Accomodation</option><option value="2">Test Category</option><option value="3">Test Category1</option><option value="4">IT</option><option value="5">R&amp;D</option></select>
                                                      
                                                    </div>
                                                </div> 
                                                <div  className="col-3 col-sm-2 col-md-2 pl-0">
                                                    <button  className="btn btn-outline-primary btn-block  hig50" type="button" data-toggle="modal" data-target="#cCategory">Add</button>                                                                               
                                                </div>   
                                                <div  className="col-md-4 col-9 col-sm-4">
                                                    <div  className="group_lead">
                                                        <select required="required" name="vendor_id" id="SelVendor" className="custom-select select_f"><option value="" selected="selected"> Customer/Vendor</option><option value="2">Rohan Khanna (rohan@gmail.com)</option></select>
                                                    </div>
                                                </div> 
                                                <div  className="col-3 col-sm-2 col-md-2 pl-0">
                                                    <button  className="btn btn-outline-primary btn-block hig50" type="button" data-toggle="modal" data-target="#vVendor">Add</button>                                                                               
                                                </div> 
                                                <div  className="col-12 col-sm-6 col-md-6">
                                                    <div  className="group_lead">
                                                        <select required="required" name="exp_currency" id="SelCurrency" className="custom-select select_f"><option value="" selected="selected">Currency</option><option value="12">EUR - Euro</option><option value="13">CHFF - Schweizer Frankenn</option><option value="14">INR - Indian Rupee</option></select>
                                                    </div>
                                                </div>
                                                <div  className="col-12 col-sm-6">                                    
                                                    <div  className="group_lead">
                                                        <input type="text" id="Ammount" className="input_text" required="required" />
                                                        <label htmlFor="Ammount" className="lablefilled">Ammount</label>                                                      
                                                    </div>
                                                </div>
                                                <div  className="col-12 col-sm-6">
                                                    <div  className="group_lead">
                                                        <input type="text" id="Invoice" className="input_text" required="Invoice" />
                                                        <label htmlFor="Invoice" className="lablefilled">Invoice#</label>
                                                    </div>                                     
                                                </div>  
                                                <div  className="col-12 col-sm-6">                                    
                                                    <div  className="group_lead">
                                                        <input type="text" id="cusname" className="input_text" required="required" />
                                                        <label htmlFor="cusname" className="lablefilled">Customer Name</label>
                                                    </div>
                                                </div>
                                                <div  className="col-12 col-sm-6">                                    
                                                    <div  className="group_lead">
                                                        <input type="text" id="BillRef#" className="input_text" required="required" />
                                                        <label htmlFor="BillRef#" className="lablefilled">Bill Ref#</label>
                                                    </div>
                                                </div>
                                                <div  className="col-12 col-sm-6">                                    
                                                    <div  className="group_lead">
                                                        <select required="required" name="SelTaxType" id="SelTaxType"  className="custom-select select_f"><option value="" selected="selected">Tax Type</option><option value="1">GST(13.00 %)</option><option value="2">VAT(10.00 %)</option></select>
                                                       
                                                    </div>
                                                </div>
                                                <div  className="col-12 col-sm-12">
                                                    <div  className="group_lead">
                                                        <textarea required="required" id="Note"></textarea>
                                                        <label htmlFor="Note" className="lablefilled">Note</label>                                                     
                                                    </div>
                                                </div>                                                                                       
                                            </div>
                                        </div>
                                        <div  className="col-md-4 bg_gray dnnone Uploadimg" style={{display: "block"}}>
                                            
                                            <form method="post" action="#" id="#">                      
                                                <div  className="group_lead files mt-3">                                                  
                                                    <input type="file"  className="form-control mt-3" multiple="" />  
                                                    <label>Upload Your File/Image </label>
                                                </div>
                                                <p  className="col-grey font-11">Select Media(jpg, png, pdf allowed - upto 6 Mb)</p> 
                                            </form>   
                                            <div  className="text-center mt-3 mb-3">
                                                <button  className="btn btn-outline-primary" type="button"> <i  className="zmdi zmdi-upload"></i> Upload</button>                                        
                                                <button  className="btn btn-danger" type="button"><i  className="zmdi zmdi-rotate-left"></i> Cancel</button>
                                            </div>                         
                                        </div>                                       
                                    </div>
                                </div>
                                <div role="tabpanel"  className=" tab-pane" id="Page__otherdetails">
                                    <div  className="row m-0 justify-content-center">
                                        <div  className="col-xl-8 col-md-10">
                                            <div  className="row">
                                                <div  className="col-12 col-sm-6 mt-3">
                                                    <div  className="group_lead">
                                                        <input type="text" id="AddressFrom" className="input_text" required="required" />
                                                        <label htmlFor="AddressFrom" className="lablefilled">Address From</label>                          
                                                    </div>
                                                </div>
                                                <div  className="col-12 col-sm-6 mt-3">
                                                    <div  className="group_lead">
                                                        <input type="text" id="Addressto" className="input_text" required="required" />
                                                        <label htmlFor="Addressto" className="lablefilled">Address To</label>
                                                    </div> 
                                                </div>  
                                                <div  className="col-12 col-sm-6">
                                                    <div  className="group_lead">
                                                        <input type="text" id="TotalAmount"  className="input_text" required="required" />
                                                        <label htmlFor="TotalAmount" className="lablefilled">Total Amount</label>
                                                    </div>  
                                                </div> 
                                                <div  className="col-12 col-sm-12">                                            
                                                    <div  className="group_lead">
                                                        <textarea required="required" id="Note1"></textarea>
                                                        <label htmlFor="Note1" className="lablefilled">Note</label>                                            
                                                    </div> 
                                                </div>                                                       
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel"  className=" tab-pane" id="Page__address"> 
                                    <div  className="row m-0">
                                        <div  className="col-md-12 column p-0">
                                            <form id="frmexpense">
                                                <table  className="table table-bordered remdi" id="tab_Expense">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                Date
                                                            </th>
                                                            <th>
                                                                Category Name
                                                            </th>
                                                            <th>
                                                                Amount
                                                            </th>
                                                            <th>
                                                                Notes
                                                            </th>
                                                            <th>
                                                                Customer
                                                            </th>
                                                            <th>
                                                                Ref #
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr id="addr0">
                                                            <td>
                                                                <input  className="inpuut expdate manda auto-fill-dt" id="txtDate0" placeholder="N" value="2020/3/26" />
                                                            </td>
                                                            <td>
                                                                <select style={{width: "100%"}}  className="select2-single inpuut  manda" id="SelCat0"><option value="0">Select Category</option><option value="1">Accomodation</option><option value="2">Test Category</option><option value="3">Test Category1</option><option value="4">IT</option><option value="5">R&amp;D</option></select>
                                                            </td>
                                                            <td>
                                                                <select  className="inpuut  manda" required="required" style={{width:"40%",float:"right",borderLeft:"1px solid #eee", float:"left",paddingRight:"5px"}} id="SelCrncy0"><option value="0">Select Currency</option><option value="12">EUR - Euro</option><option value="13">CHFF - Schweizer Frankenn</option><option value="14">INR - Indian Rupee</option></select>
                                                                <input  className="inpuut text-right manda padding-right-1px" placeholder="Amount" id="txtAmount0" style={{width:"60%"}}/>
        
                                                            </td>
                                                            <td>
                                                                <textarea placeholder="Notes" id="txtNotes0"  className="inpuut"></textarea>
                                                            </td>
                                                            <td>
                                                                <select  className="inpuut " id="SelCust0"><option value="0">Select Contact</option><option value="3">Vishal Kapoor (vishal@gmail.com)</option><option value="1">14March Test (14march@gmail.com)</option><option value="4"></option><option value="5"></option><option value="6"></option><option value="7"></option></select>
                                                            </td>
                                                            <td>
                                                                <input  className="inpuut" placeholder="Ref #" id="txtRef0" />
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr id="addr1"></tr>
                                                    <tr id="addr2"></tr></tbody>
                                                </table>
                                            </form>
                                            <a id="add_row"  className="btn btn-info col-white  col-white mt-3 mb-3"><b>Add </b><i  className="zmdi zmdi-plus-circle-o-duplicate"></i></a>                                       
                                        </div>
                                    </div>
                                </div>
                            </div>                                                                                                                                                            
                        </div>
                    </div>                   
                </div>
                <div  className="model-footer">
                    <div  className="row m-0">
                        <div  className="col-md-12">                          
                            <div  className="text-center">
                                <button  className="btn btn-primary btn-lg clickmode btn-lg" data-show=".contactlist, .showthing, .nxtprv" data-hide=".md-one, .hdbox, .modal-backdrop" type="button"> <i  className="zmdi zmdi-upload"></i> Save </button>
                                <button  className="btn btn-danger btn-lg" type="button"><i  className="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MdlExpenses