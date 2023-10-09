"use client"
import React from 'react'

function Note() {
  return (
    <div className="row justify-content-center mb-5">
        <div className="col-md-12 col-xl-8">

            <div className="group_lead mt-4">
                <textarea required="required" className="input_text" id="Description"></textarea>
                <label for="Description" className="lablefilled">Write a private note</label>
            </div>
            <div className="text-right">
                <button className="btn btn-danger savea me-1" type="button"><i
                        className="zmdi zmdi-rotate-left"></i> Cancel</button>
                <a href="" className="btn btn-primary"> <i className="zmdi zmdi-upload"></i>
                    Update </a>
            </div>
            <div className="card mt-5">
                <div className="p-3">
                    <h4><i className="zmdi zmdi-comment-alt-text mr-2"></i>Comments</h4>
                    <hr />
                </div>

                <div className="mt-2 mb-4">
                    <div className="d-flex flex-row p-3"> <img src="images/download.jpg" width="40"
                            height="40" className="rounded-circle mr-3" />
                        <div className="w-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-row align-items-center"> <span
                                        className="mr-2 font-18 col-head">Brian selter</span> <small
                                        className="c-badge">Top Comment</small> </div> <small><i
                                        className="zmdi zmdi-calendar mr-1"></i> 12h ago</small>
                            </div>
                            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam</p>
                            <div className="d-flex flex-row user-feed"> <span className="wish"><i
                                        className="zmdi zmdi-thumb-up mr-2"></i>24</span> </div>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex flex-row p-3"> <img src="https://i.imgur.com/3J8lTLm.jpg"
                            width="40" height="40" className="rounded-circle mr-3" />
                        <div className="w-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-row align-items-center"> <span
                                        className="mr-2 font-18 col-head">Seltos Majito</span>
                                    <small className="c-badge">Top Comment</small> </div><small> <i
                                        className="zmdi zmdi-calendar mr-1"></i> 10-Feb-2021</small>
                            </div>
                            <p className="text-justify">Tellus in hac habitasse platea dictumst
                                vestibulum. Lectus nulla at volutpat diam ut venenatis tellus.
                                Aliquam etiam erat velit scelerisque in dictum non consectetur.
                                Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo
                                nec. Tellus cras adipiscing enim eu turpis egestas pretium
                                aenean pharetra. Aliquam faucibus purus in massa.</p>
                            <div className="d-flex flex-row user-feed"> <span className="wish"><i
                                        className="zmdi zmdi-thumb-up mr-2"></i>14</span> </div>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex flex-row p-3"> <img src="images/download.jpg" width="40"
                            height="40" className="rounded-circle mr-3" />
                        <div className="w-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-row align-items-center"> <span className="mr-2 font-18 col-head
                                                ">Maria Santola</span> <small
                                        className="c-badge">Top Comment</small> </div> <small><i
                                        className="zmdi zmdi-calendar mr-1"></i> 17-Feb-2021</small>
                            </div>
                            <p className="text-justify"> Id eu nisl nunc mi ipsum faucibus. Massa
                                massa ultricies mi quis hendrerit dolor. Arcu bibendum at varius
                                vel pharetra vel turpis nunc eget. Habitasse platea dictumst
                                quisque sagittis purus sit amet volutpat. Urna condimentum
                                mattis pellentesque id.Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam</p>
                            <div className="d-flex flex-row user-feed"> <span className="wish"><i
                                        className="zmdi zmdi-thumb-up mr-2"></i>54</span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Note

