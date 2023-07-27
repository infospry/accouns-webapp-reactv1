js_util={
    loginToken: "token",
    loginChecksum: "checksum",
    loginUsername: "userEmail",
    hide_element:function(id){
        if ($(id) !== null)
        $(id).hide();
    },
    show_element:function(id){
        if ($(id) !== null)
        $(id).show();
    },
    hide_element_css:function(id){
        if ($("."+id) !== null)
        $("."+id).hide();
    },
    show_element_css:function(id){
        if ($("."+id) !== null)
        $("."+id).show();
    },
    replace_html_in_element:function(id,html){
        if ($(id) !== null)
        $(id).html(html);
    },
    disable_element:function(id){
        if ($(id) !== null)
        $(id).show();
    },
    replace_disable_button:function(ele){
       // alert($(ele).html())
        if ($(ele) !== null){
            $(ele).html("<i class='fa fa-spinner fa-spin fa-fw'></i> Loading...")
            $(ele).prop('disabled', true);
        }
    },
    replace_enable_button:function(ele,html){
        if ($(ele) !== null){
            $(ele).html(html)
            $(ele).prop('disabled', false);
        }
    },
    HideElement: function (id) {
        $(id).addClass('dd_none');
    },
    ShowElement: function (id) {
        $(id).removeClass('dd_none');
    },
    RemoveElement: function (id) {
        $(id).remove();
    },
}
