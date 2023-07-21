import React from 'react';

const Activity = () => {
  return (
    <div className="row justify-content-center">
    <div className="col-lg-12">
        <div className="p-3 timel__ine" style={{ overflow: 'auto', height: '380px' }}>
            <div className="text-center font-20" style={{ color: '#35363ab3' }}>Activities</div>
            <div className="timel__ine-container">
                <div className="timel__ine-continue">
                    <div className="row timel__ine-right">
                        <div className="col-md-6">
                            <p className="timel__ine-date"> 30/06/2023<br/><b> 9:30AM </b>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="timel__ine-box">
                                <div className="timel__ine-text">
                                    <h3><b>UPDATE</b></h3>
                                    <p><small className="col-grey">By <b
                                                className="col-blue">Healthcare Demo
                                            </b></small></p>
                                    <p>CONTACT-INFO UPDATEED</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row timel__ine-left">
                        <div className="col-md-6 d-md-none d-block">
                            <p className="timel__ine-date"> 30/06/2023<br/><b>9:29AM</b> </p>
                        </div>
                        <div className="col-md-6">
                            <div className="timel__ine-box">
                                <div className="timel__ine-text">
                                    <h3><b>UPDATE</b></h3>
                                    <p><small className="col-grey">By <b
                                                className="col-blue">Healthcare Demo
                                            </b></small></p>
                                    <p>Employee personal information UPDATEED</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-md-block d-none">
                            <p className="timel__ine-date"> 30/06/2023<br/><b>9:29AM </b>
                            </p>
                        </div>
                    </div>
                    <div className="row timel__ine-right">
                        <div className="col-md-6">
                            <p className="timel__ine-date"> 30/06/2023<br/><b> 9:28AM </b>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="timel__ine-box">
                                <div className="timel__ine-text">
                                    <h3><b>CREATE</b></h3>
                                    <p><small className="col-grey">By <b
                                                className="col-blue">Healthcare Demo
                                            </b></small></p>
                                    <p>Account created</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
  );
};

export default Activity;
