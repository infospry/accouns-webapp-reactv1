
import React from 'react'

const MdlInvoices = () => {
  return (
    <> <div className="modal right-full md-one" id="addpage" tabIndex="1"  role="dialog" aria-labelledby="shortModal">
    <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
        <div className="modal-content" style={{height:"auto!important"}}>
            <div className="modal-header bg-blu-lite fixed-top">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title" id="myModalLabel2">
                    <b> <i className="zmdi zmdi-plus-circle-o-duplicate"></i> Add New </b>
                </h4>
            </div>
            <div className="modal-body pr-0 pl-0 pb-0 contbody">  
                <div className="tab-content pt-0 pb-0 pl-0 pr-0">                                            
                    <div role="tabpanel" className=" tab-pane in active invheight">                      
                        <div className="row m-0">
                            <div className="col-md-8 col-lg-9 col-xl-10 col-sm-8 pt-2 pb-2">
                                <div className="recqurit">
                                    <div className="row m-0">
                                        <div className="col-12"> <h4>Recurring profile settings</h4>    </div>
                                        <div className="col-12 col-sm-6 col-md-6"> 
                                            <div className="group_lead">
                                                <input type="text" id="Invoicef"className="input_text" required="required" />
                                                <label htmlFor="Invoicef" className="lablefilled">First Invoice:
                                                    </label>
                                            </div>                                            
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6">                                            
                                            <div className="group_lead">
                                                <select required="required" onChange="getDueDate('txtInvoiceDate',this.id)" id="Frequency" 
                                                className="custom-select select_f"   title="Frequency"><option value="">Frequency</option><option value="1">Monthly</option><option value="2">7 Days</option><option value="3">14 Days</option><option value="4">21 Days</option><option value="5">30 Days</option><option value="6">60 Days</option><option value="7">90 Days</option></select>
                                              
                                            </div>                                           
                                        </div>
                                        <div className="col-8 col-sm-4 col-md-4">                                            
                                            <div className="group_lead">
                                                <select required="Duration"  onChange="getDueDate('txtInvoiceDate',this.id)" id="Duration" 
                                                className="custom-select select_f" title="Duration"><option value="" >Duration</option><option value="1">Monthly</option><option value="2">7 Days</option><option value="3">14 Days</option><option value="4">21 Days</option><option value="5">30 Days</option><option value="6">60 Days</option><option value="7">90 Days</option></select>
                                                                                           
                                            </div>                                           
                                        </div>
                                        <div className="col-4 col-sm-2 col-md-2">                                            
                                            <div className="group_lead">
                                                <input type="text" id="Times" className="input_text" required="required" />
                                                <label htmlFor="Times"className="lablefilled">Times</label>
                                              
                                            </div>                                           
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6">                                            
                                            <div className="group_lead">
                                                <select required="Delivery" onChange="getDueDate('txtInvoiceDate',this.id)" id="Delivery"
                                                className="custom-select select_f" title="Duration"><option value="" >Delivery</option><option value="1">Monthly</option><option value="2">7 Days</option><option value="3">14 Days</option><option value="4">21 Days</option><option value="5">30 Days</option><option value="6">60 Days</option><option value="7">90 Days</option></select>
                                                
                                             
                                            </div>                                           
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12">      
                                        <div className="checkbox mb-3">
                                            <input className="Notify" id="Notify" type="checkbox" name="Notify" />
                                            <label htmlFor="Notify">Notify me when an Invoice is created or sent (singhbasudeo@yahoo.com)</label>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-0">

                                    <div className="col-12 col-sm-6 col-md-4">
                                        <div className="invwhite p-3"> 
                                            <h5 className="mb-1 font-16"><b id="OrgName"><i className="zmdi zmdi-city"></i> Customer Company Ltd.</b></h5>
                                            <p className="col-grey mb-0 font-14">445 Mount Eden Road, Mount Eden, Auckland
                                                475678 Mount Eden</p>
                                            <button  className="btn btn-outline-primary btn-sm font-13 font-bold" data-toggle="modal" data-target="#editcompage">Edit Detail →</button>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-8 d-none d-sm-block"> 
                                        <div className="invwhite p-3 text-right">                                   
                                            <h1 className="mt-3">Invoice</h1>
                                        </div>
                                    </div>
                                    <div className="col-12"><hr /></div>

                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">                                            
                                        <div className="group_lead">
                                            <input type="text"className="input_text" id="InvoiceNumber" required="required" />
                                            <label htmlFor="InvoiceNumber"className="lablefilled">Invoice Number</label>                                           
                                        </div>                                            
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6  col-lg-4">                                            
                                        <div className="group_lead">
                                            <input type="text"className="input_text" id="ReferenceNumber" required="required" />
                                            <label htmlFor="ReferenceNumber"className="lablefilled">Reference Number</label>                                           
                                        </div>                                           
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                        
                                        <div className="group_lead">
                                            <input type="text"className="input_text" id="Date" required="required" />
                                            <label htmlFor="Date"className="lablefilled">Date</label>                                           
                                        </div>                                            
                                    </div>
                                    <div className="col-md-6 col-12 col-sm-6 col-lg-4">
                                        <div className="group_lead">
                                            <select required="required"  onChange="getDueDate('txtInvoiceDate',this.id)" id="txtPayTerms" className="custom-select select_f"
                                            title="Payment Terms"><option value="" >Payment Terms</option><option value="1">0 Days</option><option value="2">7 Days</option><option value="3">14 Days</option><option value="4">21 Days</option><option value="5">30 Days</option><option value="6">60 Days</option><option value="7">90 Days</option></select>
                                        </div>                                       
                                    </div>
                                    <div className="col-md-3 col-12 col-sm-3 col-lg-2">
                                        <div className="form-group"> 
                                            <div className="group_lead">
                                                <input type="text"className="input_text" id="DueDate" required="required" />
                                                <label htmlFor="DueDate"className="lablefilled">Due Date</label>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-12 col-sm-3 col-lg-2 pt-3">
                                        <div className="checkbox mb-0">
                                            <input id="NeverExpires " type="checkbox" />
                                            <label htmlFor="NeverExpires ">Never Expires</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 col-sm-6 col-lg-4">
                                        <div className="group_lead">
                                            <input type="text"className="input_text" id="AssociateprojectHours" required="required" />
                                            <label htmlFor="AssociateprojectHours" className="lablefilled">Associate project(s) Hours</label>                                           
                                        </div>                                           
                                    </div>
                                    
                                    
                                
                                    <div className="col-12 col-sm-12 ">
                                        <div className="group_lead">
                                            <textarea required="required" id="Description"></textarea>
                                            <label htmlFor="Description" className="lablefilled">Terms & Condition (0/3000)</label>                                          
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="col-12 inv">
                                        <div className="teble-responsive">
                                            <table className="table  rwd-table btdr_none mb-0" id="sortable">
                                                <thead>
                                                    <tr className="font_btd">                                                        
                                                        <th className="pt-2 pb-2 bdrtr">Description</th>	
                                                        <th className="bdrtr">Date</th>	
                                                        <th className="bdrtr">Qty</th>	
                                                        <th className="bdrtr">Unit</th>	
                                                        <th className="bdrtr">Price</th>	
                                                        <th className="bdrtr">VAT %</th>	
                                                        <th className="bdrtr">Total</th>
                                                        <th className="bdrtrn">-</th>                                                           
                                                    </tr>
                                                </thead>
                                                <tbody id="tBodyInvoice">
                                                    <tr id="addr0">
                                                        <td className="bdrtr">
                                                            <div className="input-group-btn">
                                                                <button type="button" className="btn btn-outline-secondary  text-left dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Example product
                                                                </button>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="#">Example product</a>
                                                                    <a className="dropdown-item" href="#">Sales excluding VAT</a>
                                                                    <a className="dropdown-item" href="#">Sales exempt from VAT</a>                                                   
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="pt-3 pb-3 bdrtr">
                                                            <input className="form-control-sm" style={{width:"100%"}} placeholder="DD/MM/YYYY" />
                                                        </td>
                                                        <td className="bdrtr">
                                                            <input className="form-control-sm" style={{width:"90px"}} placeholder="1.00" />
                                                        </td>
                                                        <td className="bdrtr">
                                                            <div className="input-group-btn">
                                                           <button type="button" className="btn btn-outline-secondary  text-left dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                cm
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">cm</a>
                                                                <a className="dropdown-item" href="#"> m</a>
                                                                <a className="dropdown-item" href="#">    km</a>
                                                                <a className="dropdown-item" href="#"> kg</a>
                                                                <a className="dropdown-item" href="#"> h</a>
                                                                <a className="dropdown-item" href="#"> pcs</a>                                                                                                                         
                                                            </div>
                                                            </div>
                                                        </td>
                                                        <td className="bdrtr">
                                                            <input className="form-control-sm" style={{width:"100%"}} placeholder="100.00 €" />
                                                        </td>    
                                                        <td className="bdrtr">
                                                            <div className="input-group-btn">
                                                            <button type="button" className="btn btn-outline-secondary text-left dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                0%
                                                            </button>
                                                            <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">0%</a>
                                                            <a className="dropdown-item" href="#"> Add Modify</a>   
                                                            </div>
                                                            </div>
                                                           
                                                         </td>
                                                         <td className="bdrtr">
                                                            <input className="form-control-sm" style={{width:"100%"}} placeholder="113.50 €" />
                                                        </td>  
                                                        <td className="bdrtrn">
                                                            <a className="btn btn-outline-danger" style={{width:"40px"}}>x</a>
                                                        </td>
                                                    </tr>                                                  
                                                </tbody>
                                            </table>
                                            <div className="row m-0">
                                                <div className="col-12 col-sm-6 col-md-6 pl-0">   
                                                    <div className="input-group-btn">                                                    
                                                    <button type="button" className="btn btn-info  mt-3 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Add Item 
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"id="add_row">Add Item </a>
                                                        <a className="dropdown-item" href="#"> Add Title </a>
                                                        <a className="dropdown-item" href="#">    Add Text Field</a>
                                                        <a className="dropdown-item" href="#"> Add Subtotal</a>                                                                                         
                                                    </div>
                                                    </div>
                                                </div> 
                                                <div className="col-12 col-sm-6 col-md-6 pr-0">
                                                    <table className="table table-borderless text-right mt-3 mb-3">
                                                        <tbody>
                                                            <tr> 
                                                                <td>
                                                                    <b>Net
                                                                    Total</b>
                                                                </td>                                                              
                                                                <td id="tdTotal"><b>100.00 €</b></td>
                                                            </tr>
                                                            <tr id="trNetDiscount">
                                                                <td><b>VAT 13.5 %</b></td>
                                                                <td id=""><b>13.50 €</b></td>                                                               
                                                            </tr> 
                                                            <tr>
                                                                <td className="font-18 col-black">
                                                                    <b>
                                                                        Total amount due
                                                                    </b>
                                                                </td>                                                               
                                                                <td className="font-20 col-green">
                                                                    <b id="tdFinalAmount">113.50 €</b>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="row m-0">
                                                <div className="col-12">
                                                    <hr/>
                                                </div>
                                                <div className="col-sm-12 col-md-6 col-lg-4">
                                                    <div className="group_lead">
                                                        <textarea required="required" id="Descriptions"></textarea>
                                                        <label htmlFor="Descriptions" className="lablefilled">Customer Footnote (0/250)</label>                                                       
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6 col-lg-3">
                                                    <h6><i className="zmdi zmdi-card"></i> <b>Payment method</b> </h6>
                                                    <hr className="mt-2 mb-3" />
                                                    <div className="payment_method_icon">
                                                        <p><a href="#">Add payment method</a></p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-12 col-lg-5">
                                                    <style 
                                                        ulhgt={{height:"80px",overflow: "auto"}}
                                                        ellipsis={{textOverflow: "ellipsis",whiteSpace: "nowrap",overflow: "hidden"}}
                                                    />
                                                    <h6><i className="zmdi zmdi-attachment-alt"></i> <b>Attachments</b> </h6>
                                                    <hr className="mt-2 mb-3" />
                                                    <ul className="row list-unstyled c_review ulhgt">
                                                        <li className="col-12">
                                                            <div className="checkbox float-left mb-0">
                                                                <input className="all_slct" id="order" type="checkbox" />
                                                                <label htmlFor="order" className="pl-0 col-blue font-14 ellipsis"><strong className="font-bold col-black">Attached to email</strong>
                                                                ExpenseSubmission.png(334.kb)</label>
                                                            </div>
                                                            <div className="posabs mt-0"> 
                                                                <a className="col-red mr-3" href="#"><i className="zmdi zmdi-close"></i></a>
                                                            </div>  
                                                        </li>
                                                        <li className="col-12">
                                                            <div className="checkbox float-left mb-0">
                                                                <input className="all_slct" id="order" type="checkbox" />
                                                                <label htmlFor="order" className="pl-0 col-blue font-14 ellipsis"><strong className="font-bold col-black">Attached to email</strong>
                                                                ExpenseSubmission.png(334.kb)</label>
                                                            </div>
                                                            <div className="posabs mt-0"> 
                                                                <a className="col-red mr-3" href="#"><i className="zmdi zmdi-close"></i></a>
                                                            </div>  
                                                        </li>   
                                                        <li className="col-12">
                                                            <div className="checkbox float-left mb-0">
                                                                <input className="all_slct" id="order" type="checkbox" />
                                                                <label htmlFor="order" className="pl-0 col-blue font-14 ellipsis"><strong className="font-bold col-black">Attached to email</strong>
                                                                ExpenseSubmission.png(334.kb)</label>
                                                            </div>
                                                            <div className="posabs mt-0"> 
                                                                <a className="col-red mr-3" href="#"><i className="zmdi zmdi-close"></i></a>
                                                            </div>  
                                                        </li>
                                                        <li className="col-12">
                                                            <div className="checkbox float-left mb-0">
                                                                <input className="all_slct" id="order" type="checkbox" />
                                                                <label htmlFor="order" className="pl-0 col-blue font-14 ellipsis"><strong className="font-bold col-black">Attached to email</strong>
                                                                ExpenseSubmission.png(334.kb)</label>
                                                            </div>
                                                            <div className="posabs mt-0"> 
                                                                <a className="col-red mr-3" href="#"><i className="zmdi zmdi-close"></i></a>
                                                            </div>  
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                                                    
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-2 col-sm-4 pl-0 pr-0" style={{display: "block", borderLeft: "1px solid #ddd" }}>
                            <div className="invwhite p-3">                                   
                                <h5 className="mb-1 font-14"><b id="OrgName"><i className="zmdi zmdi-city"></i> Topicccano solutions</b></h5>
                                <p className="col-grey mb-0 font-13">445 Mount Eden Road, Mount Eden, Auckland
                                    475678 Mount Eden</p>
                                <a href="#" className="font-13 font-bold"  data-toggle="modal" data-target="#editcompage">Edit Detail →</a>
                            </div>
                                <div className="invwhite">
                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div className="panel panel-default">
                                      <div className="panel-heading" role="tab" id="headingOne">
                                        <h4 className="panel-title">
                                          <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                           <i className="zmdi zmdi-settings"></i> Settings
                                          </a>
                                        </h4>
                                      </div>
                                      <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                        <div className="panel-body">
                                            <label htmlFor="">Invoice type</label>
                                            <div className="input-group-btn">
                                                <button type="button" className="btn btn-outline-secondary btn-block text-left dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Sales
                                                </button>
                                                <div className="dropdown-menu">
                                                  <a className="dropdown-item" href="#">Sales</a>
                                                  <a className="dropdown-item" href="#">Sales excluding VAT</a>
                                                  <a className="dropdown-item" href="#">Sales exempt from VAT</a>                                                   
                                                </div>
                                            </div> 
                                            <hr />

                                            <label htmlFor="">Visible Columns</label>
                                            <div className="input-group-btn">
                                                <button type="button" className="btn btn-outline-secondary btn-block text-left dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Sales
                                                </button>
                                                <div className="dropdown-menu">                                                 
                                                  <a className="dropdown-item" href="#">
                                                    <div className="form-check"><input className="form-check-input" type="checkbox" disabled="disabled" checked="checked" data-text="Item" onClick="getCheckedVisibleColumns('Item','9')" name="chkVisibleColumns" value="9" id="chkVisibleColumns_9" /> <label className="form-check-label" htmlFor="c_c">Item </label> </div></a>
                                                    <a className="dropdown-item" href="#"><div className="form-check">
                                                        <input className="form-check-input" type="checkbox" data-text="Description" onClick="getCheckedVisibleColumns('Description','10')" 
                                                        name="chkVisibleColumns" value="10" id="chkVisibleColumns_10" /> 
                                                        <label className="form-check-label" htmlFor="c_c">Description </label> </div>
                                                    </a>
                                                    <a className="dropdown-item" href="#"><div className="form-check"><input className="form-check-input" type="checkbox" disabled="disabled" checked="checked" data-text="Qty" 
                                                        onClick="getCheckedVisibleColumns('Qty','5')" name="chkVisibleColumns" value="5" id="chkVisibleColumns_5" /> <label className="form-check-label" htmlFor="c_c">Qty 
                                                        </label> </div>
                                                    </a>
                                                    <a className="dropdown-item" href="#"><div className="form-check"><input className="form-check-input" type="checkbox" disabled="disabled" checked="checked" data-text="Unit Price" 
                                                        onClick="getCheckedVisibleColumns('Unit Price','6')" name="chkVisibleColumns" value="6" id="chkVisibleColumns_6" /> <label className="form-check-label" htmlFor="c_c">
                                                            Unit Price </label> </div>
                                                        </a>
                                                    <a className="dropdown-item" href="#"><div className="form-check"><input className="form-check-input" type="checkbox" data-text="Total" onClick="getCheckedVisibleColumns('Total','8')"
                                                         name="chkVisibleColumns" value="8" id="chkVisibleColumns_8" /> <label className="form-check-label" htmlFor="c_c">Total </label> </div>
                                                    </a>                                                
                                                </div>
                                            </div>
                                        <hr />

                                        <label htmlFor="">Currency</label>
                                            <div className="input-group-btn">
                                                <button type="button" className="btn btn-outline-secondary btn-block text-left dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    EUR (Euro)
                                                </button>
                                                <div className="dropdown-menu">
                                                  <a className="dropdown-item" href="#">INR</a>
                                                  <a className="dropdown-item" href="#">Pound</a>
                                                  <a className="dropdown-item" href="#">Dollar</a>                                                   
                                                </div>
                                            </div> 
                                            <hr />
                                            <div className="group_lead">
                                                <input type="text" id="" required="required"className="input_text" />
                                                <label htmlFor=""className="lablefilled">Exchange rate</label>                                               
                                            </div>
                                            <p><small>INR→EUR</small></p>
                                            <hr />
                                            <label htmlFor="">Invoicing language</label>
                                            <div className="input-group-btn">
                                                <button type="button" className="btn btn-outline-secondary btn-block text-left dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                   English
                                                </button>
                                                <div className="dropdown-menu">
                                                  <a className="dropdown-item" href="#">German</a>
                                                   <a className="dropdown-item" href="#">English</a>
                                                    <a className="dropdown-item" href="#">Finnish</a>
                                                    <a className="dropdown-item" href="#">French</a>
                                                    <a className="dropdown-item" href="#">Dutch</a>
                                                    <a className="dropdown-item" href="#">Swedish</a>
                                                                                                
                                                </div>
                                            </div> 
                                            <hr />
                                            <div className="group_lead">
                                                <input type="text" id="" required="required"className="input_text" />
                                                <label htmlFor=""className="lablefilled">Invoice header</label>                                             
                                            </div> 
                                        </div>
                                      </div>
                                    </div>
                                  </div>                                              
                                 </div> 
                                 <div className="invwhite float-left w-100">
                                    <div className="pt-3 pl-3 pr-3">   
                                        <div className="checkbox mb-0">
                                            <input className="coupon_question" id="coupon_question" type="checkbox"name="coupon_question" />
                                            <label htmlFor="coupon_question">Discount</label>
                                        </div>
                                    </div>
                                        <hr className="mb-0" />
                                    <div className="answer" >
                                        <div className="pt-3 pl-3 pr-3">  
                                    <label><small>Discount based on</small></label>
                                        <div className="form-group">
                                            <div className="custom-control custom-radio mb-1">
                                                <input type="radio" className="custom-control-input" id="customRadio" name="example" value="customEx" />
                                                <label className="custom-control-label" htmlFor="customRadio">Online Discount </label>
                                            </div>
                                            <div className="custom-control custom-radio  mb-1">
                                                <input type="radio" className="custom-control-input" id="customRadio2" name="example" value="customEx" />
                                                <label className="custom-control-label" htmlFor="customRadio2">Discount on Net Total</label>                                    
                                            </div>                                                                                    
                                        </div>
                                        </div>
                                        <hr />
                                        <div className="pl-3 pr-3"> 
                                        <label><small>Discount type</small></label>
                                            <div className="form-group">
                                                <div className="custom-control custom-radio mb-1">
                                                    <input type="radio" className="custom-control-input" id="customRadioper" name="example1" value="customEx" />
                                                    <label className="custom-control-label" htmlFor="customRadioper">% </label>
                                                </div>
                                                <div className="custom-control custom-radio  mb-1">
                                                    <input type="radio" className="custom-control-input" id="customRadioeur" name="example1" value="customEx" />
                                                    <label className="custom-control-label" htmlFor="customRadioeur">EUR</label>                                    
                                                </div>                                                                                    
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="pl-3 pr-3"> 
                                        <label><small>Discount calculation</small></label>
                                        <div className="form-group">
                                            <div className="custom-control custom-radio mb-1">
                                                <input type="radio" className="custom-control-input" id="ExcludingVAT" name="IncludingVAT1" value="customEx" />
                                                <label className="custom-control-label" htmlFor="ExcludingVAT"> Excluding VAT </label>
                                            </div>
                                            <div className="custom-control custom-radio  mb-1">
                                                <input type="radio" className="custom-control-input" id="IncludingVAT" name="IncludingVAT1" value="customEx" />
                                                <label className="custom-control-label" htmlFor="IncludingVAT">Including VAT</label>                                    
                                            </div>                                                                                    
                                        </div>
                                        </div>
                                        <hr className="mb-0" />
                                    </div>
                                    <div className="pt-3 pl-3 pr-3">   
                                        <div className="checkbox mb-0">
                                            <input className="Recurring" id="Recurring" type="checkbox"name="Recurring" />
                                            <label htmlFor="Recurring">Recurring Invoice <i className="zmdi zmdi-star col-green font-12  ml-3"> </i></label>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="pl-3 pr-3">   
                                        <div className="checkbox mb-0">
                                            <input className="down" id="down" type="checkbox"name="down" />
                                            <label htmlFor="down">Down payment <i className="zmdi zmdi-star col-green font-12  ml-3"> </i></label>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="pl-3 pr-3">   
                                        <div className="checkbox mb-0">
                                            <input className="Paymentschedule" id="Paymentschedule" type="checkbox"name="Paymentschedule" />
                                            <label htmlFor="Paymentschedule">Payment schedule <i className="zmdi zmdi-star col-green font-12 ml-3"> </i></label>
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
</>
  )
}

export default MdlInvoices