import React from 'react'

export default function NotificationSetting() {
    return (
        <>
            <div class="clearfix">
                <div class="card mb-0">
                    <div class="i_action d-flex justify-content-between align-items-center p-2 mb-0">
                        <button type="button" class="btn btn-primary dr-breakout-btn">
                            <i class="zmdi zmdi-more"></i> <span class="caret"></span>
                        </button>
                        <div class="dr-breakout displayblk">
                            <h2> Notifications Settings</h2>
                            <small>Have more control over your notifications</small>
                        </div>
                        <div class="btn-group bdrr">
                            <a class="btn btn-primary ml-1"
                                onclick="ns_message_center.GetMessagePreferenceSetting();"
                                data-action="refresh"><i class="zmdi zmdi-refresh">&nbsp;
                                </i></a>
                        </div>
                    </div>
                </div>
                <div class="card mb-0 list_hide border-0">
                    <div class="body clearfix p-0 border">
                        <div class="table-responsive leave_management">
                            <table id="tblmsgcat-1" class="table  rwd-table btdr_none mb-0 table-hover">
                                <thead class="dnone-mob">
                                    <tr class="font_btd">
                                        <th class="pt-1 pb-1 col-blue" colspan="3">Jobs</th>
                                    </tr>
                                </thead>
                                <tbody class="tbl-msg-pref-row">
                                    <tr id="action-55" class="font_btd">
                                        <td class="pt-3 pb-3 w70per"> Job
                                            Booking Acknowledgement to Employee <i
                                                class="zmdi zmdi-info col-blue-grey pointer cursorHelp"
                                                title=""></i> </td>
                                        <td class="text-right">
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline pr-4 pl-4">
                                                <input id="chk55email" type="checkbox" checked="checked"
                                                    class="custom-control-input" /> <label
                                                        for="chk55email"
                                                        class="custom-control-label line24 pointer">Email</label>
                                            </div>
                                            <div class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk55sms" type="checkbox"
                                                    class="custom-control-input" /> <label for="chk55sms"
                                                        class="custom-control-label line24 pointer">Text</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk55notify" type="checkbox"
                                                    class="custom-control-input" /> <label
                                                        for="chk55notify"
                                                        class="custom-control-label line24 pointer">Mob
                                                    Notify</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr id="action-54" class="font_btd">
                                        <td class="pt-3 pb-3 w70per"> Jobs
                                            Application Declined <i
                                                class="zmdi zmdi-info col-blue-grey pointer cursorHelp"
                                                title=""></i> </td>
                                        <td class="text-right">
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline pr-4 pl-4">
                                                <input id="chk54email" type="checkbox" checked="checked"
                                                    class="custom-control-input" /> <label
                                                        for="chk54email"
                                                        class="custom-control-label line24 pointer">Email</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk54sms" type="checkbox"
                                                    class="custom-control-input" /> <label for="chk54sms"
                                                        class="custom-control-label line24 pointer">Text</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk54notify" type="checkbox"
                                                    class="custom-control-input" /> <label
                                                        for="chk54notify"
                                                        class="custom-control-label line24 pointer">Mob
                                                    Notify</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr id="action-57" class="font_btd">
                                        <td class="pt-3 pb-3 w70per"> Job
                                            Completion <i
                                                class="zmdi zmdi-info col-blue-grey pointer cursorHelp"
                                                title=""></i> </td>
                                        <td class="text-right">
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline pr-4 pl-4">
                                                <input id="chk57email" type="checkbox" checked="checked"
                                                    class="custom-control-input" /> <label
                                                        for="chk57email"
                                                        class="custom-control-label line24 pointer">Email</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk57sms" type="checkbox" checked="checked"
                                                    class="custom-control-input" /> <label for="chk57sms"
                                                        class="custom-control-label line24 pointer">Text</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk57notify" type="checkbox"
                                                    class="custom-control-input" /> <label
                                                        for="chk57notify"
                                                        class="custom-control-label line24 pointer">Mob
                                                    Notify</label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <div class="table-responsive leave_management">
                            <table id="tblmsgcat-2" class="table  rwd-table btdr_none mb-0 table-hover">
                                <thead class="dnone-mob">
                                    <tr class="font_btd">
                                        <th class="pt-1 pb-1 col-blue" colspan="3">Candidate
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="tbl-msg-pref-row"> </tbody>
                            </table>
                        </div>


                        <div class="table-responsive leave_management">
                            <table id="tblmsgcat-4" class="table  rwd-table btdr_none mb-0 table-hover">
                                <thead class="dnone-mob">
                                    <tr class="font_btd">
                                        <th class="pt-1 pb-1 col-blue" colspan="3">Invoice
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="tbl-msg-pref-row"> </tbody>
                            </table>
                        </div>


                        <div class="table-responsive leave_management">
                            <table id="tblmsgcat-10"
                                class="table  rwd-table btdr_none mb-0 table-hover">
                                <thead class="dnone-mob">
                                    <tr class="font_btd">
                                        <th class="pt-1 pb-1 col-blue" colspan="3">Employee
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="tbl-msg-pref-row">
                                    <tr id="action-67" class="font_btd">
                                        <td class="pt-3 pb-3 w70per">
                                            Employee Account Closer <i
                                                class="zmdi zmdi-info col-blue-grey pointer cursorHelp"
                                                title="Request for closing account"></i>
                                        </td>
                                        <td class="text-right">
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline pr-4 pl-4">
                                                <input id="chk67email" type="checkbox"
                                                    class="custom-control-input" /> <label
                                                        for="chk67email"
                                                        class="custom-control-label line24 pointer">Email</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk67sms" type="checkbox"
                                                    class="custom-control-input" /> <label for="chk67sms"
                                                        class="custom-control-label line24 pointer">Text</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk67notify" type="checkbox"
                                                    class="custom-control-input" /> <label
                                                        for="chk67notify"
                                                        class="custom-control-label line24 pointer">Mob
                                                    Notify</label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <div class="table-responsive leave_management">
                            <table id="tblmsgcat-8" class="table  rwd-table btdr_none mb-0 table-hover">
                                <thead class="dnone-mob">
                                    <tr class="font_btd">
                                        <th class="pt-1 pb-1 col-blue" colspan="3">Documents
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="tbl-msg-pref-row"> </tbody>
                            </table>
                        </div>

                        <div class="table-responsive leave_management">
                            <table id="tblmsgcat-11"
                                class="table  rwd-table btdr_none mb-0 table-hover">
                                <thead class="dnone-mob">
                                    <tr class="font_btd">
                                        <th class="pt-1 pb-1 col-blue" colspan="3">Signup</th>
                                    </tr>
                                </thead>
                                <tbody class="tbl-msg-pref-row">
                                    <tr id="action-46" class="font_btd">
                                        <td class="pt-3 pb-3 w70per">
                                            Employer User Registration <i
                                                class="zmdi zmdi-info col-blue-grey pointer cursorHelp"
                                                title=""></i> </td>
                                        <td class="text-right">
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline pr-4 pl-4">
                                                <input id="chk46email" type="checkbox" checked="checked"
                                                    class="custom-control-input" /> <label
                                                        for="chk46email"
                                                        class="custom-control-label line24 pointer">Email</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk46sms" type="checkbox"
                                                    class="custom-control-input" /> <label for="chk46sms"
                                                        class="custom-control-label line24 pointer">Text</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk46notify" type="checkbox"
                                                    class="custom-control-input" /> <label
                                                        for="chk46notify"
                                                        class="custom-control-label line24 pointer">Mob
                                                    Notify</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr id="action-52" class="font_btd">
                                        <td class="pt-3 pb-3 w70per"> User
                                            Account Registration <i
                                                class="zmdi zmdi-info col-blue-grey pointer cursorHelp"
                                                title="Employer's user account registration"></i>
                                        </td>
                                        <td class="text-right">
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline pr-4 pl-4">
                                                <input id="chk52email" type="checkbox" checked="checked"
                                                    class="custom-control-input" /> <label
                                                        for="chk52email"
                                                        class="custom-control-label line24 pointer">Email</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk52sms" type="checkbox"
                                                    class="custom-control-input" /> <label for="chk52sms"
                                                        class="custom-control-label line24 pointer">Text</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk52notify" type="checkbox"
                                                    class="custom-control-input" /> <label
                                                        for="chk52notify"
                                                        class="custom-control-label line24 pointer">Mob
                                                    Notify</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr id="action-47" class="font_btd">
                                        <td class="pt-3 pb-3 w70per">
                                            Employee Registration <i
                                                class="zmdi zmdi-info col-blue-grey pointer cursorHelp"
                                                title=""></i> </td>
                                        <td class="text-right">
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline pr-4 pl-4">
                                                <input id="chk47email" type="checkbox" checked="checked"
                                                    class="custom-control-input" /> <label
                                                        for="chk47email"
                                                        class="custom-control-label line24 pointer">Email</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk47sms" type="checkbox"
                                                    class="custom-control-input" /> <label for="chk47sms"
                                                        class="custom-control-label line24 pointer">Text</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk47notify" type="checkbox"
                                                    class="custom-control-input" /> <label
                                                        for="chk47notify"
                                                        class="custom-control-label line24 pointer">Mob
                                                    Notify</label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="table-responsive leave_management">
                            <table id="tblmsgcat-12"
                                class="table  rwd-table btdr_none mb-0 table-hover">
                                <thead class="dnone-mob">
                                    <tr class="font_btd">
                                        <th class="pt-1 pb-1 col-blue" colspan="3">Password
                                            Change</th>
                                    </tr>
                                </thead>
                                <tbody class="tbl-msg-pref-row"> </tbody>
                            </table>
                        </div>

                        <div class="table-responsive leave_management">
                            <table id="tblmsgcat-13"
                                class="table  rwd-table btdr_none mb-0 table-hover">
                                <thead class="dnone-mob">
                                    <tr class="font_btd">
                                        <th class="pt-1 pb-1 col-blue" colspan="3">Email
                                            Verification</th>
                                    </tr>
                                </thead>
                                <tbody class="tbl-msg-pref-row">
                                    <tr id="action-51" class="font_btd">
                                        <td class="pt-3 pb-3 w70per">
                                            Employee Email Verification <i
                                                class="zmdi zmdi-info col-blue-grey pointer cursorHelp"
                                                title=""></i> </td>
                                        <td class="text-right">
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline pr-4 pl-4">
                                                <input id="chk51email" type="checkbox" checked="checked"
                                                    class="custom-control-input" /> <label
                                                        for="chk51email"
                                                        class="custom-control-label line24 pointer">Email</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk51sms" type="checkbox" checked="checked"
                                                    class="custom-control-input" /> <label for="chk51sms"
                                                        class="custom-control-label line24 pointer">Text</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk51notify" type="checkbox"
                                                    class="custom-control-input" /> <label
                                                        for="chk51notify"
                                                        class="custom-control-label line24 pointer">Mob
                                                    Notify</label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="table-responsive leave_management">
                            <table id="tblmsgcat-14"
                                class="table  rwd-table btdr_none mb-0 table-hover">
                                <thead class="dnone-mob">
                                    <tr class="font_btd">
                                        <th class="pt-1 pb-1 col-blue" colspan="3">Leave</th>
                                    </tr>
                                </thead>
                                <tbody class="tbl-msg-pref-row"> </tbody>
                            </table>
                        </div>

                        <div class="table-responsive leave_management">
                            <table id="tblmsgcat-15"
                                class="table  rwd-table btdr_none mb-0 table-hover">
                                <thead class="dnone-mob">
                                    <tr class="font_btd">
                                        <th class="pt-1 pb-1 col-blue" colspan="3">
                                            Subscription</th>
                                    </tr>
                                </thead>
                                <tbody class="tbl-msg-pref-row">
                                    <tr id="action-64" class="font_btd">
                                        <td class="pt-3 pb-3 w70per">
                                            Subscription Cancellation <i
                                                class="zmdi zmdi-info col-blue-grey pointer cursorHelp "
                                                title=""></i> </td>
                                        <td class="text-right">
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline pr-4 pl-4">
                                                <input id="chk64email" type="checkbox"
                                                    class="custom-control-input" /> <label
                                                        for="chk64email"
                                                        class="custom-control-label line24 pointer">Email</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk64sms" type="checkbox"
                                                    class="custom-control-input" /> <label for="chk64sms"
                                                        class="custom-control-label line24 pointer">Text</label>
                                            </div>
                                            <div
                                                class="custom-control custom-checkbox checkbox-inline  pr-4 pl-4">
                                                <input id="chk64notify" type="checkbox"
                                                    class="custom-control-input" /> <label
                                                        for="chk64notify"
                                                        class="custom-control-label line24 pointer">Mob
                                                    Notify</label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="p-1 text-center bdr-top pt-3">
                            <a id="btnSaveMsgConfig"
                                class="btn btn-primary btn-lg cls-notifications-setting" data-cat_id="0"
                                data-action="save-msg-config-emp">Save</a>
                            <a class="btn btn-danger btn-lg"
                                onclick="ns_message_center.GetMessagePreferenceSetting();" data-tippy=""
                                data-original-title="Refresh">Refresh</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
