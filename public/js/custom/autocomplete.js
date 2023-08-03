$(document).ready(function () {   
    $.widget("custom.catcomplete", $.ui.autocomplete, {
        _create: function () {
            this._super();
            this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
        },
        _renderMenu: function (ul, items) {
            var that = this,
            currentCategory = "";
            $.each(items, function (index, item) {

                var li;
                if (item.category != currentCategory) {
                    ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
                    currentCategory = item.category;
                }
                li = that._renderItemData(ul, item);
                if (item.category) {
                    li.attr("aria-label", item.category + " : " + item.label);
                }
            });
        }
    });
    fn_autoSearch("searchbox", "all", "pgname");
    fn_autoSearch("txtEmployer", "emp", "hfempid");
    fn_autoSearch("txt_employee", "emp", "hfempid");
    
    fn_autoSearch("rptFilterCNDNameCompliance", "cnd", "hfcndid");
    fn_autoSearch("txtCandidate", "cnd", "hfcndid");
    fn_autoSearch("txtOrganisation", "org", "hforgid");
    fn_autocomplete('txtOrgUser', 'org', 'org-user');
});
//function fn_autoSearch(t, e, a) { $("#" + t).catcomplete({ delay: 0, minLength: 2, source: function (t, a) { $.ajax({ url:urls2.autocompleteApi + "?type=" + e + "&term=" + t.term, type: "GET", dataType: "json", success: function (t) { a($.map(t, function (t) { return { label: t.split(",")[0], val: t.split(",")[1], category: t.split(",")[2] } })) }, error: function (t) { alert(t.responseText) }, failure: function (t) { alert(t.responseText) } }) }, select: function (t, n) { if ("all" == e) window.location = "/" + n.item.val, $("#pgname").val(n.item.val); else { var l = n.item.val.split("/")[2];  $("#" + a).val(l) } } }) }
function fn_autoSearch(t, e, a) {
    $("#" + t).catcomplete({
        delay: 0,
        minLength: 2,
        source: function (t, a) {
            $.ajax({
                url: urls2.autocompleteApi + "?type=" + e + "&term=" + t.term,
                type: "GET",
                dataType: "json",
                headers: { "UA-TOKEN": Token, RequestChecksum: RequestChecksum, Source: Source, "Content-Type": "application/json" },
                success: function (t) {
                    a(
                        $.map(t, function (t) {
                            return { label: t.split(",")[0], val: t.split(",")[1], category: t.split(",")[2] };
                        })
                    );
                },
                error: function (t) {
                    alert(t.responseText);
                },
                failure: function (t) {
                    alert(t.responseText);
                },
            });
        },
        select: function (t, n) {
            if ("all" == e) (window.location = "/" + n.item.val), $("#pgname").val(n.item.val);
            else {
                var l = n.item.val.split("/")[2];               
                $("#" + a).val(l);
            }
        },
    });
}


//function fn_autocomplete(t, e, a) { $("." + a).catcomplete({ delay: 0, minLength: 2, source: function (t, a) { $.ajax({ url: "/Home/SearchContent", type: "GET", dataType: "json", data: { category: e, term: t.term }, success: function (t) { a($.map(t, function (t) { return { label: t.split(",")[0], val: t.split(",")[1], category: t.split(",")[2] } })) }, error: function (t) { alert(t.responseText) }, failure: function (t) { alert(t.responseText) } }) }, select: function (e, a) { var n = a.item.val.split("/")[2]; "" !== t && ($("#" + t).attr("data-item-id", n), $(".clsApply").click()) } }) }

//function fn_autoSearch(CtrlId, categoryname, hiddenfieldID) {
//    $("#" + CtrlId).catcomplete({
//        delay: 0,
//        minLength: 2,
//        source: function (request, response) {
//            $.ajax({
//                url: '/Home/SearchContent',
//                type: "GET",
//                dataType: "json",
//                data: { category: categoryname, term: request.term },
//                success: function (data) {
//                    response($.map(data, function (item) {
//                        return {
//                            label: item.split(',')[0],
//                            val: item.split(',')[1],
//                            category: item.split(',')[2]
//                        }
//                    }));
//                },
//                error: function (response) {
//                    alert(response.responseText);
//                },
//                failure: function (response) {
//                    alert(response.responseText);
//                }
//            });
//        },
//        select: function (e, i) {
//            if (categoryname == 'all') {
//                window.location = '/' + i.item.val;           
//                $("#pgname").val(i.item.val);
//            }
//            else {               
//                var id = i.item.val.split('/')[2];
//                $("#"+hiddenfieldID).val(id);
//            }          
//        }
//    });
//}
function fn_autocomplete(CtrlId, categoryname, ClassName) { 
    $("." + ClassName).catcomplete({
        delay: 0,
        minLength: 2,
        source: function (request, response) {
            $.ajax({
                url: urls2.autocompleteApi + "?type=" + categoryname + "&term=" + request.term,// '/Home/SearchContent',
                type: "GET",
                dataType: "json",
                //data: { category: categoryname, term: request.term },
                success: function (data) {
                    response($.map(data, function (item) {
                        return {
                            label: item.split(',')[0],
                            val: item.split(',')[1],
                            category: item.split(',')[2]
                        }
                    }));
                },
                error: function (response) {
                    alert(response.responseText);
                },
                failure: function (response) {
                    alert(response.responseText);
                }
            });
        },
        select: function (e, i) {           
            var id = i.item.val.split('/')[2];
            if (CtrlId !== '') {              
                $('#' + CtrlId).attr('data-item-id', id);              
                $('.clsApply').click();
            }
        }
    });
}

function fn_autocompletePostJobs(CtrlId, tabStatus) {
   
    $('#'+CtrlId).autocomplete({
        source: function (request, response) {
            $.getJSON("http://dev1.infospry.in/api2/api/auto?type=emp&term=" + request.term,
                function (data) {
                    response($.map(data, function (item) {
                        return {
                            label: item.split(',')[0],
                            val: item.split(',')[1],
                            category: item.split(',')[2]
                        };
                    }));
                }
            );
        },
        minLength: 2,
        delay: 100,
        select: function (e, i) {
            var selectedItemValue = i.item.val.split('/')[2];
            rNumber = GetRowNumber($('#' + CtrlId));
            $("#hfempid" + rNumber).val(selectedItemValue);
            var prms = "dro=l&tp=" + tabStatus + "&si=" + selectedItemValue;
            ns_api.get(urls.jobPost + 'Get?', prms).then(function (responseBack) {
                if (responseBack.split('|')[0] === 'OK') {
                    locationOptions = $.parseJSON(responseBack.split('|')[1]);
                    $('#ddlLocations' + rNumber).empty();
                    $.each(locationOptions.locations, function (index, row) {
                        $('#ddlLocations' + rNumber).append($("<option     />").val(this.Id).text(this.Name));
                    });
                }
            });
        }
    });
}

function GetRowNumber(controlName) {
    var controlId = controlName.attr('id').replace(/[^0-9]/gi, ''); // Replace everything that is not a number with nothing
    controlId = parseInt(controlId, 10);
    return controlId;
}
function fn_autocompleteLocation(CtrlId, categoryname, ClassName) {
   
    $("." + ClassName).autocomplete({
        delay: 0,
        minLength: 2,
        source: function (request, response) {
            $.ajax({
                url: urls2.autocompleteApi + "?type=" + categoryname + "&term=" + request.term,
                dataType: "json",
                type: "GET",
                contentType: "application/json; charset=utf-8",
                headers: { 'UA-TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source, 'Content-Type': 'application/json' },
                success: function (data) {
                    response($.map(data, function (item) {
                        return {
                            label: item.split(',')[0],
                            val: item.split(',')[1],
                            category: item.split(',')[2]
                        }
                    }));
                },
                error: function (response) {
                    alert(response.responseText);
                },
                failure: function (response) {
                    alert(response.responseText);
                }
            });
        },
        select: function (e, i) {
            var id = i.item.val.split('/')[2];
            if (CtrlId !== '') {
                $('#' + CtrlId).attr('data-item-id', id);
                $('.clsApply').click();
            }
        }
    });
}

function fn_autoSearchWithToken(CtrlId, categoryname, ClassName) {

    $("." + ClassName).autocomplete({
        delay: 0,
        minLength: 2,
        source: function (request, response) {
            $.ajax({
                url: urls2.autocompleteApi + "?type=" + categoryname + "&term=" + request.term,
                dataType: "json",
                type: "GET",
                contentType: "application/json; charset=utf-8",
                headers: { 'UA-TOKEN': Token, 'RequestChecksum': RequestChecksum, 'Source': Source, 'Content-Type': 'application/json' },
                success: function (data) {
                    response($.map(data, function (item) {
                        return {
                            label: item.split(',')[0],
                            val: item.split(',')[1],
                            category: item.split(',')[2]
                        }
                    }));
                },
                error: function (response) {
                    alert(response.responseText);
                },
                failure: function (response) {
                    alert(response.responseText);
                }
            });
        },
        select: function (e, i) {
            var id = i.item.val.split('/')[2];
            if (CtrlId !== '') {
                $('#' + CtrlId).attr('data-item-id', id);
                $('.clsApply').click();
            }
        }
    });
}