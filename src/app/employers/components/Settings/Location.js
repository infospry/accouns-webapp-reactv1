import React from 'react'

export default function Location() {
    return (
        <>
            <div class="clearfix">
                <div class="card mb-0">
                    <div class="i_action d-flex justify-content-between align-items-center p-2 mb-0">
                        <button type="button" class="btn btn-primary dr-breakout-btn">
                            <i class="zmdi zmdi-more"></i> <span class="caret"></span>
                        </button>
                        <div class="dr-breakout displayblk">
                            <h2> Location(s)</h2>
                            <small>All locations listed here.</small>
                        </div>
                        <div class="btn-group bdrr">
                            <a id="btnAddProOtherLocation" class="btn btn-success btn-add ClsEmpProfile"
                                data-action="add" data-toggle="modal"
                                data-target="#ModalProfileLocation"> <i class="ti ti-plus mr-1"></i>Add
                                Location</a>
                            <a id="btnRefreshLocation" class="btn btn-primary ml-1"><i
                                class="zmdi zmdi-refresh">&nbsp; </i></a>

                        </div>
                    </div>
                </div>
                <div class="p-3 bdr1 h4show">


                    <div class="row" id="Location_Placeholder">
                        <div class="bxsaddow col-md-6 mb-2 pl-2 pr-2">
                            <h4> <i class="zmdi zmdi-pin mr-1"></i>Birmingham <a id="btnDel-7"
                                class="btn btn-sm btn-danger hvr ClsEmpProfile"
                                data-action="DELETE_LOCATION" data-default-status="1"
                                title="delete"><i class="zmdi zmdi-delete"></i></a> <a
                                    id="btnOther-7"
                                    class="btn btn-sm btn-primary hvr mr-1 ClsEmpProfile"
                                    data-action="edit" data-toggle="modal"
                                    data-target="#ModalProfileLocation"> <i
                                        class="zmdi zmdi-edit mr-1"></i>Edit </a> <span
                                            class="col-green mr-2 float-right"><b><i
                                                class="zmdi zmdi-check-all">&nbsp;</i>Default</b></span> <a
                                                    id="Status-7" class="btn btn-sm btn-success mr-2 hvr ClsEmpProfile"
                                                    data-default-status="1" data-action="CHANGE_LOCATION_STATUS"
                                                    data-status="1" title="change status">Active</a> </h4>
                            <div class="p-3 bdr1 h4show cls-location-part">
                                <p class="mb-1"> <span class="wd-16px">Name</span> <span>:</span> <span
                                    id="Span5">Birmingham</span> </p>
                                <p class="mb-1"> <span class="wd-16px">Address</span> <span>:</span>
                                    <span id="Span6">85 Aston Street </span> </p>
                                <p class="mb-1"> <span class="wd-16px">Contact No. </span>
                                    <span>:</span> <span id="Span7" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Email </span> <span>:</span>
                                    <span id="Span8" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Onsite Parking</span>
                                    <span>:</span> <span id="Span9" class="col-green">Available</span>
                                </p>
                            </div>
                        </div>
                        <div class="bxsaddow col-md-6 mb-2 pl-2 pr-2">
                            <h4> <i class="zmdi zmdi-pin mr-1"></i>Tamworth <a id="btnDel-8"
                                class="btn btn-sm btn-danger hvr ClsEmpProfile"
                                data-action="DELETE_LOCATION" data-default-status="0"
                                title="delete"><i class="zmdi zmdi-delete"></i></a> <a
                                    id="btnOther-8"
                                    class="btn btn-sm btn-primary hvr mr-1 ClsEmpProfile"
                                    data-action="edit" data-toggle="modal"
                                    data-target="#ModalProfileLocation"> <i
                                        class="zmdi zmdi-edit mr-1"></i>Edit </a> <a
                                            id="btnSetDefaultLocation-8" data-id="8"
                                            class="btn btn-sm btn-primary  hvr ClsEmpProfile mr-2"
                                            data-action="SETDEFAULTLOCATION">Set As Default</a> <a id="Status-8"
                                                class="btn btn-sm btn-success mr-2 hvr ClsEmpProfile"
                                                data-default-status="0" data-action="CHANGE_LOCATION_STATUS"
                                                data-status="1" title="change status">Active</a> </h4>
                            <div class="p-3 bdr1 h4show cls-location-part">
                                <p class="mb-1"> <span class="wd-16px">Name</span> <span>:</span> <span
                                    id="Span5">Tamworth</span> </p>
                                <p class="mb-1"> <span class="wd-16px">Address</span> <span>:</span>
                                    <span id="Span6">100 Kettlebrook Road </span> </p>
                                <p class="mb-1"> <span class="wd-16px">Contact No. </span>
                                    <span>:</span> <span id="Span7" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Email </span> <span>:</span>
                                    <span id="Span8" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Onsite Parking</span>
                                    <span>:</span> <span id="Span9" class="col-green">Available</span>
                                </p>
                            </div>
                        </div>
                        <div class="bxsaddow col-md-6 mb-2 pl-2 pr-2">
                            <h4> <i class="zmdi zmdi-pin mr-1"></i>Solihull <a id="btnDel-9"
                                class="btn btn-sm btn-danger hvr ClsEmpProfile"
                                data-action="DELETE_LOCATION" data-default-status="0"
                                title="delete"><i class="zmdi zmdi-delete"></i></a> <a
                                    id="btnOther-9"
                                    class="btn btn-sm btn-primary hvr mr-1 ClsEmpProfile"
                                    data-action="edit" data-toggle="modal"
                                    data-target="#ModalProfileLocation"> <i
                                        class="zmdi zmdi-edit mr-1"></i>Edit </a> <a
                                            id="btnSetDefaultLocation-9" data-id="9"
                                            class="btn btn-sm btn-primary  hvr ClsEmpProfile mr-2"
                                            data-action="SETDEFAULTLOCATION">Set As Default</a> <a id="Status-9"
                                                class="btn btn-sm btn-success mr-2 hvr ClsEmpProfile"
                                                data-default-status="0" data-action="CHANGE_LOCATION_STATUS"
                                                data-status="1" title="change status">Active</a> </h4>
                            <div class="p-3 bdr1 h4show cls-location-part">
                                <p class="mb-1"> <span class="wd-16px">Name</span> <span>:</span> <span
                                    id="Span5">Solihull</span> </p>
                                <p class="mb-1"> <span class="wd-16px">Address</span> <span>:</span>
                                    <span id="Span6">10 Measham Grove </span> </p>
                                <p class="mb-1"> <span class="wd-16px">Contact No. </span>
                                    <span>:</span> <span id="Span7" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Email </span> <span>:</span>
                                    <span id="Span8" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Onsite Parking</span>
                                    <span>:</span> <span id="Span9" class="col-green">Not
                                        Available</span> </p>
                            </div>
                        </div>
                        <div class="bxsaddow col-md-6 mb-2 pl-2 pr-2">
                            <h4> <i class="zmdi zmdi-pin mr-1"></i>Bromsgrove <a id="btnDel-12"
                                class="btn btn-sm btn-danger hvr ClsEmpProfile"
                                data-action="DELETE_LOCATION" data-default-status="0"
                                title="delete"><i class="zmdi zmdi-delete"></i></a> <a
                                    id="btnOther-12"
                                    class="btn btn-sm btn-primary hvr mr-1 ClsEmpProfile"
                                    data-action="edit" data-toggle="modal"
                                    data-target="#ModalProfileLocation"> <i
                                        class="zmdi zmdi-edit mr-1"></i>Edit </a> <a
                                            id="btnSetDefaultLocation-12" data-id="12"
                                            class="btn btn-sm btn-primary  hvr ClsEmpProfile mr-2"
                                            data-action="SETDEFAULTLOCATION">Set As Default</a> <a
                                                id="Status-12" class="btn btn-sm btn-success mr-2 hvr ClsEmpProfile"
                                                data-default-status="0" data-action="CHANGE_LOCATION_STATUS"
                                                data-status="1" title="change status">Active</a> </h4>
                            <div class="p-3 bdr1 h4show cls-location-part">
                                <p class="mb-1"> <span class="wd-16px">Name</span> <span>:</span> <span
                                    id="Span5">Bromsgrove</span> </p>
                                <p class="mb-1"> <span class="wd-16px">Address</span> <span>:</span>
                                    <span id="Span6">3 Burcot Lane </span> </p>
                                <p class="mb-1"> <span class="wd-16px">Contact No. </span>
                                    <span>:</span> <span id="Span7" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Email </span> <span>:</span>
                                    <span id="Span8" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Onsite Parking</span>
                                    <span>:</span> <span id="Span9" class="col-green">Available</span>
                                </p>
                            </div>
                        </div>
                        <div class="bxsaddow col-md-6 mb-2 pl-2 pr-2">
                            <h4> <i class="zmdi zmdi-pin mr-1"></i>Bradford <a id="btnDel-14"
                                class="btn btn-sm btn-danger hvr ClsEmpProfile"
                                data-action="DELETE_LOCATION" data-default-status="0"
                                title="delete"><i class="zmdi zmdi-delete"></i></a> <a
                                    id="btnOther-14"
                                    class="btn btn-sm btn-primary hvr mr-1 ClsEmpProfile"
                                    data-action="edit" data-toggle="modal"
                                    data-target="#ModalProfileLocation"> <i
                                        class="zmdi zmdi-edit mr-1"></i>Edit </a> <a
                                            id="btnSetDefaultLocation-14" data-id="14"
                                            class="btn btn-sm btn-primary  hvr ClsEmpProfile mr-2"
                                            data-action="SETDEFAULTLOCATION">Set As Default</a> <a
                                                id="Status-14" class="btn btn-sm btn-success mr-2 hvr ClsEmpProfile"
                                                data-default-status="0" data-action="CHANGE_LOCATION_STATUS"
                                                data-status="1" title="change status">Active</a> </h4>
                            <div class="p-3 bdr1 h4show cls-location-part">
                                <p class="mb-1"> <span class="wd-16px">Name</span> <span>:</span> <span
                                    id="Span5">Bradford</span> </p>
                                <p class="mb-1"> <span class="wd-16px">Address</span> <span>:</span>
                                    <span id="Span6">Waterstones Booksellers Ltd Hustlergate</span> </p>
                                <p class="mb-1"> <span class="wd-16px">Contact No. </span>
                                    <span>:</span> <span id="Span7" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Email </span> <span>:</span>
                                    <span id="Span8" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Onsite Parking</span>
                                    <span>:</span> <span id="Span9" class="col-green">Not
                                        Available</span> </p>
                            </div>
                        </div>
                        <div class="bxsaddow col-md-6 mb-2 pl-2 pr-2">
                            <h4> <i class="zmdi zmdi-pin mr-1"></i>Bristol <a id="btnDel-16"
                                class="btn btn-sm btn-danger hvr ClsEmpProfile"
                                data-action="DELETE_LOCATION" data-default-status="0"
                                title="delete"><i class="zmdi zmdi-delete"></i></a> <a
                                    id="btnOther-16"
                                    class="btn btn-sm btn-primary hvr mr-1 ClsEmpProfile"
                                    data-action="edit" data-toggle="modal"
                                    data-target="#ModalProfileLocation"> <i
                                        class="zmdi zmdi-edit mr-1"></i>Edit </a> <a
                                            id="btnSetDefaultLocation-16" data-id="16"
                                            class="btn btn-sm btn-primary  hvr ClsEmpProfile mr-2"
                                            data-action="SETDEFAULTLOCATION">Set As Default</a> <a
                                                id="Status-16" class="btn btn-sm btn-success mr-2 hvr ClsEmpProfile"
                                                data-default-status="0" data-action="CHANGE_LOCATION_STATUS"
                                                data-status="1" title="change status">Active</a> </h4>
                            <div class="p-3 bdr1 h4show cls-location-part">
                                <p class="mb-1"> <span class="wd-16px">Name</span> <span>:</span> <span
                                    id="Span5">Bristol</span> </p>
                                <p class="mb-1"> <span class="wd-16px">Address</span> <span>:</span>
                                    <span id="Span6">Flat 102 Beckford House</span> </p>
                                <p class="mb-1"> <span class="wd-16px">Contact No. </span>
                                    <span>:</span> <span id="Span7" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Email </span> <span>:</span>
                                    <span id="Span8" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Onsite Parking</span>
                                    <span>:</span> <span id="Span9" class="col-green">Available</span>
                                </p>
                            </div>
                        </div>
                        <div class="bxsaddow col-md-6 mb-2 pl-2 pr-2">
                            <h4> <i class="zmdi zmdi-pin mr-1"></i>Aberdeen <a id="btnDel-10"
                                class="btn btn-sm btn-danger hvr ClsEmpProfile"
                                data-action="DELETE_LOCATION" data-default-status="0"
                                title="delete"><i class="zmdi zmdi-delete"></i></a> <a
                                    id="btnOther-10"
                                    class="btn btn-sm btn-primary hvr mr-1 ClsEmpProfile"
                                    data-action="edit" data-toggle="modal"
                                    data-target="#ModalProfileLocation"> <i
                                        class="zmdi zmdi-edit mr-1"></i>Edit </a> <a
                                            id="btnSetDefaultLocation-10" data-id="10"
                                            class="btn btn-sm btn-primary  hvr ClsEmpProfile mr-2"
                                            data-action="SETDEFAULTLOCATION">Set As Default</a> <a
                                                id="Status-10" class="btn btn-sm btn-success mr-2 hvr ClsEmpProfile"
                                                data-default-status="0" data-action="CHANGE_LOCATION_STATUS"
                                                data-status="1" title="change status">Active</a> </h4>
                            <div class="p-3 bdr1 h4show cls-location-part">
                                <p class="mb-1"> <span class="wd-16px">Name</span> <span>:</span> <span
                                    id="Span5">Aberdeen</span> </p>
                                <p class="mb-1"> <span class="wd-16px">Address</span> <span>:</span>
                                    <span id="Span6">Aberdeen City Council Finance Department Town
                                        House</span> </p>
                                <p class="mb-1"> <span class="wd-16px">Contact No. </span>
                                    <span>:</span> <span id="Span7" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Email </span> <span>:</span>
                                    <span id="Span8" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Onsite Parking</span>
                                    <span>:</span> <span id="Span9" class="col-green">Available</span>
                                </p>
                            </div>
                        </div>
                        <div class="bxsaddow col-md-6 mb-2 pl-2 pr-2">
                            <h4> <i class="zmdi zmdi-pin mr-1"></i>Redditch <a id="btnDel-13"
                                class="btn btn-sm btn-danger hvr ClsEmpProfile"
                                data-action="DELETE_LOCATION" data-default-status="0"
                                title="delete"><i class="zmdi zmdi-delete"></i></a> <a
                                    id="btnOther-13"
                                    class="btn btn-sm btn-primary hvr mr-1 ClsEmpProfile"
                                    data-action="edit" data-toggle="modal"
                                    data-target="#ModalProfileLocation"> <i
                                        class="zmdi zmdi-edit mr-1"></i>Edit </a> <a
                                            id="btnSetDefaultLocation-13" data-id="13"
                                            class="btn btn-sm btn-primary  hvr ClsEmpProfile mr-2"
                                            data-action="SETDEFAULTLOCATION">Set As Default</a> <a
                                                id="Status-13" class="btn btn-sm btn-success mr-2 hvr ClsEmpProfile"
                                                data-default-status="0" data-action="CHANGE_LOCATION_STATUS"
                                                data-status="1" title="change status">Active</a> </h4>
                            <div class="p-3 bdr1 h4show cls-location-part">
                                <p class="mb-1"> <span class="wd-16px">Name</span> <span>:</span> <span
                                    id="Span5">Redditch</span> </p>
                                <p class="mb-1"> <span class="wd-16px">Address</span> <span>:</span>
                                    <span id="Span6">Mappleborough Green Village Hall Birmingham
                                        Road</span> </p>
                                <p class="mb-1"> <span class="wd-16px">Contact No. </span>
                                    <span>:</span> <span id="Span7" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Email </span> <span>:</span>
                                    <span id="Span8" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Onsite Parking</span>
                                    <span>:</span> <span id="Span9" class="col-green">Available</span>
                                </p>
                            </div>
                        </div>
                        <div class="bxsaddow col-md-6 mb-2 pl-2 pr-2">
                            <h4> <i class="zmdi zmdi-pin mr-1"></i>Bolton <a id="btnDel-15"
                                class="btn btn-sm btn-danger hvr ClsEmpProfile"
                                data-action="DELETE_LOCATION" data-default-status="0"
                                title="delete"><i class="zmdi zmdi-delete"></i></a> <a
                                    id="btnOther-15"
                                    class="btn btn-sm btn-primary hvr mr-1 ClsEmpProfile"
                                    data-action="edit" data-toggle="modal"
                                    data-target="#ModalProfileLocation"> <i
                                        class="zmdi zmdi-edit mr-1"></i>Edit </a> <a
                                            id="btnSetDefaultLocation-15" data-id="15"
                                            class="btn btn-sm btn-primary  hvr ClsEmpProfile mr-2"
                                            data-action="SETDEFAULTLOCATION">Set As Default</a> <a
                                                id="Status-15" class="btn btn-sm btn-success mr-2 hvr ClsEmpProfile"
                                                data-default-status="0" data-action="CHANGE_LOCATION_STATUS"
                                                data-status="1" title="change status">Active</a> </h4>
                            <div class="p-3 bdr1 h4show cls-location-part">
                                <p class="mb-1"> <span class="wd-16px">Name</span> <span>:</span> <span
                                    id="Span5">Bolton</span> </p>
                                <p class="mb-1"> <span class="wd-16px">Address</span> <span>:</span>
                                    <span id="Span6">Flat 105 The Pack Horse</span> </p>
                                <p class="mb-1"> <span class="wd-16px">Contact No. </span>
                                    <span>:</span> <span id="Span7" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Email </span> <span>:</span>
                                    <span id="Span8" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Onsite Parking</span>
                                    <span>:</span> <span id="Span9" class="col-green">Available</span>
                                </p>
                            </div>
                        </div>
                        <div class="bxsaddow col-md-6 mb-2 pl-2 pr-2">
                            <h4> <i class="zmdi zmdi-pin mr-1"></i>Westhill <a id="btnDel-11"
                                class="btn btn-sm btn-danger hvr ClsEmpProfile"
                                data-action="DELETE_LOCATION" data-default-status="0"
                                title="delete"><i class="zmdi zmdi-delete"></i></a> <a
                                    id="btnOther-11"
                                    class="btn btn-sm btn-primary hvr mr-1 ClsEmpProfile"
                                    data-action="edit" data-toggle="modal"
                                    data-target="#ModalProfileLocation"> <i
                                        class="zmdi zmdi-edit mr-1"></i>Edit </a> <a
                                            id="btnSetDefaultLocation-11" data-id="11"
                                            class="btn btn-sm btn-primary  hvr ClsEmpProfile mr-2"
                                            data-action="SETDEFAULTLOCATION">Set As Default</a> <a
                                                id="Status-11" class="btn btn-sm btn-success mr-2 hvr ClsEmpProfile"
                                                data-default-status="0" data-action="CHANGE_LOCATION_STATUS"
                                                data-status="1" title="change status">Active</a> </h4>
                            <div class="p-3 bdr1 h4show cls-location-part">
                                <p class="mb-1"> <span class="wd-16px">Name</span> <span>:</span> <span
                                    id="Span5">Westhill</span> </p>
                                <p class="mb-1"> <span class="wd-16px">Address</span> <span>:</span>
                                    <span id="Span6">1 Brodiach Cottages </span> </p>
                                <p class="mb-1"> <span class="wd-16px">Contact No. </span>
                                    <span>:</span> <span id="Span7" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Email </span> <span>:</span>
                                    <span id="Span8" class="col-red"></span> </p>
                                <p class="mb-1"> <span class="wd-16px">Onsite Parking</span>
                                    <span>:</span> <span id="Span9" class="col-green">Not
                                        Available</span> </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
