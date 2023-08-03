import React from 'react'
import LeftSidebar from '../../components/LeftSidebar';
import UserTable from './UserTable';


function Main() {
    return (
        <>
            <section className="content">
                <div className="body_scroll">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="card mb-0">

                                <div className="">
                                   <button className="btn btn-primary btn-sm reveal-click float-left"> <i className="zmdi zmdi-menu"></i></button>
                                    <div id="email-nav" className="inbox left pr-0 mr-0 lftfxd">
                                        <LeftSidebar />
                                    </div>
                                    <div className="inbox right rgtinbox">
                                       <UserTable/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
        </>
    )
}

export default Main
