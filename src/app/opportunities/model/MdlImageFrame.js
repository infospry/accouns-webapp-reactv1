const MdlImageFrame = () => {
    return (
        <>
            <div className="modal right-half md-one Modal" id="ImgFrame" role="dialog" aria-labelledby="shortModal">
                <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
                    <div className="modal-content" style={{ height: "auto!important" }}>
                        <div className="modal-header bg-blu-lite fixed-top">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title">
                                <b id="file_header">View File</b>
                            </h4>
                        </div>
                        <div className="modal-body">
                            <iframe id="iFrame" src="" style={{ width: "100%", height: "600px" }}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MdlImageFrame