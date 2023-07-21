import React from 'react'
import Link from "next/link";
export default function main() {
  return (
    <>
      <section className="content">
        <div className="body_scroll">
            <div className="container-fluid">
                <div className="row clearfix">
                    
                <div className="booktab d-flex justify-content-between align-items-center sadow">
                        <div className="p-3">
                            <h2 className="mb-0"><i className="zmdi zmdi-widgets"></i> Dashboard</h2>
                        </div>
                        <span className="float-right pr-2"><Link className="cls-personalized-wizards btn btn-outline-info" data-action="view-setting" data-toggle="modal" data-target="#ModalPersonalizedWizards" href="/"><i className="zmdi zmdi-settings zmdi-hc-spin">&nbsp;</i>Personalize Wizards</Link></span>
                    </div>

                </div>
            </div>
        </div>
    </section>
    </>
  )
}
