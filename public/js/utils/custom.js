$(document).ready(function () {
    $(document).on("click", ".right_icon_toggle_btn", function () {
        $("body").toggleClass("right_icon_toggle");
    });
    $('[data-toggle="tooltip"]').tooltip();
    $('input[type="file"]').change(function () {
        var bytes = this.files[0].size, iSize = Math.round(bytes / 1024);
        var fileSize = ns_util.getAttachedFileSize(bytes);
        var errmsg = "", isValid = 0;
        var ext = $(this).val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['doc', 'docx', 'xls', 'xlsx', 'png', 'jpg', 'jpeg', 'pdf']) == -1) {
            errmsg = "Invalid extension!";
            isValid = 1;
        }
        else if (iSize > 6144) {
            errmsg = 'This file is ' + fileSize + ' exceeding the maximum file size of 6 MB.';
            isValid = 1;
        }
        if (isValid > 0) {
            $('.spanerror').show().text(errmsg);
            $('.fileupload').hide();
        }
        else {
            $('.spanerror').hide().text('');
            $('.fileupload').show();
            readURL(this);
        }
    });
    $('.nav a').filter(function () { return this.href == location.href }).parent().addClass('active').siblings().removeClass('active')
    $('.nav a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active')
    })
    $(".toggle-password").click(function () {
        $(this).addClass("zmdi-eye-off").removeClass("zmdi-eye");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            $(this).addClass("zmdi-eye").removeClass("zmdi-eye-off");
            input.attr("type", "password");
        }
    });
    $('.summernote-editor').summernote({ height: 300 });
    $('input[name="Services"]').amsifySuggestags({
        type: 'amsify',
    });
    $(document).on('click', ".clickmode", function () {
        var evt_hide = $(this).data('hide');
        var evt_show = $(this).data('show');
        if (evt_hide != "") {
            $(evt_hide).hide();
        }
        if (evt_show != "") {
            $(evt_show).show();
        }
    });
    //$("#imageUpload,#filename").change(function () {
    //    readURL(this);
    //});
    $("#sortable tbody").sortable({
        items: 'tr:not(tr:first-child)',
        cursor: "move", axis: 'y',
        placeholder: "sortable-placeholder",
        helper: function (e, tr) {
            var $originals = tr.children();
            var $helper = tr.clone();
            $helper.children().each(function (index) {
                // Set helper cell sizes to match the original sizes
                $(this).width($originals.eq(index).width());
            });
            return $helper;
        }
    }).disableSelection();
    $('table').each(function () {
        if ($(this).find('thead').length > 0 && $(this).find('th').length > 0) {
            // Clone <thead>
            var $w = $(window),
                $t = $(this),
                $thead = $t.find('thead').clone(),
                $col = $t.find('thead, tbody').clone();

            // Add class, remove margins, reset width and wrap table
            $t
                .addClass('sticky-enabled')
                .css({
                    margin: 0,
                    width: '100%'
                }).wrap('<div class="sticky-wrap" />');

            if ($t.hasClass('overflow-y')) $t.removeClass('overflow-y').parent().addClass('overflow-y');

            // Create new sticky table head (basic)
            $t.after('<table class="sticky-thead" />');

            // If <tbody> contains <th>, then we create sticky column and intersect (advanced)
            if ($t.find('tbody th').length > 0) {
                $t.after('<table class="sticky-col" /><table class="sticky-intersect" />');
            }

            // Create shorthand for things
            var $stickyHead = $(this).siblings('.sticky-thead'),
                $stickyCol = $(this).siblings('.sticky-col'),
                $stickyInsct = $(this).siblings('.sticky-intersect'),
                $stickyWrap = $(this).parent('.sticky-wrap');

            $stickyHead.append($thead);

            $stickyCol
                .append($col)
                .find('thead th:gt(0)').remove()
                .end()
                .find('tbody td').remove();

            $stickyInsct.html('<thead><tr><th>' + $t.find('thead th:first-child').html() + '</th></tr></thead>');

            // Set widths
            var setWidths = function () {
                $t
                    .find('thead th').each(function (i) {
                        $stickyHead.find('th').eq(i).width($(this).width());
                    })
                    .end()
                    .find('tr').each(function (i) {
                        $stickyCol.find('tr').eq(i).height($(this).height());
                    });

                // Set width of sticky table head
                $stickyHead.width($t.width());

                // Set width of sticky table col
                $stickyCol.find('th').add($stickyInsct.find('th')).width($t.find('thead th').width())
            },
                repositionStickyHead = function () {
                    // Return value of calculated allowance
                    var allowance = calcAllowance();

                    // Check if wrapper parent is overflowing along the y-axis
                    if ($t.height() > $stickyWrap.height()) {
                        // If it is overflowing (advanced layout)
                        // Position sticky header based on wrapper scrollTop()
                        if ($stickyWrap.scrollTop() > 0) {
                            // When top of wrapping parent is out of view
                            $stickyHead.add($stickyInsct).css({
                                opacity: 1,
                                top: $stickyWrap.scrollTop()
                            });
                        } else {
                            // When top of wrapping parent is in view
                            $stickyHead.add($stickyInsct).css({
                                opacity: 0,
                                top: 0
                            });
                        }
                    } else {
                        // If it is not overflowing (basic layout)
                        // Position sticky header based on viewport scrollTop
                        if ($w.scrollTop() > $t.offset().top && $w.scrollTop() < $t.offset().top + $t.outerHeight() - allowance) {
                            // When top of viewport is in the table itself
                            $stickyHead.add($stickyInsct).css({
                                opacity: 1,
                                top: $w.scrollTop() - $t.offset().top
                            });
                        } else {
                            // When top of viewport is above or below table
                            $stickyHead.add($stickyInsct).css({
                                opacity: 0,
                                top: 0
                            });
                        }
                    }
                },
                repositionStickyCol = function () {
                    if ($stickyWrap.scrollLeft() > 0) {
                        // When left of wrapping parent is out of view
                        $stickyCol.add($stickyInsct).css({
                            opacity: 1,
                            left: $stickyWrap.scrollLeft()
                        });
                    } else {
                        // When left of wrapping parent is in view
                        $stickyCol
                            .css({
                                opacity: 0
                            })
                            .add($stickyInsct).css({
                                left: 0
                            });
                    }
                },
                calcAllowance = function () {
                    var a = 0;
                    // Calculate allowance
                    $t.find('tbody tr:lt(3)').each(function () {
                        a += $(this).height();
                    });

                    // Set fail safe limit (last three row might be too tall)
                    // Set arbitrary limit at 0.25 of viewport height, or you can use an arbitrary pixel value
                    if (a > $w.height() * 0.25) {
                        a = $w.height() * 0.25;
                    }

                    // Add the height of sticky header
                    a += $stickyHead.height();
                    return a;
                };

            setWidths();

            
        }
    });
    $('.modal-dialog').draggable({
        scroll: true,
        scrollSensitivity: 40,
        scrollSpeed: 40
    });
    $('.popover').draggable({
        scroll: true,
        scrollSensitivity: 40,
        scrollSpeed: 40
    });

    //added on 17-02-21: changes made by Bashu sir
    $(".formobile .clickmode").click(function () {
        $(".add_remove").addClass("mobile_load");
    });
    $(".cross_remove").click(function () {
        $(".mobile_load").addClass("ddnone");
    });

    //Tags
    $(document).on("change", ".chkTag", function () {
        $('#btn_createtag').hide();
        if ($('.chkTag:checked').length > 0)
            $("#btn_applytag").show();
        else
            $("#btn_applytag").hide();
    });
    $('#txt_label').focus(function () {
        $('.chkTag').prop('checked', false);
        $('#btn_createtag').show();
        $("#btn_applytag").hide();
    });
    $('.clmnbtn').click(function (event) {
        $('.chkTag').prop('checked', false);
        $("#btn_createtag,#btn_applytag").hide();
        event.stopPropagation();
        $(".clmn").slideToggle("fast");
    });
    $(".clmn").on("click", function (event) {
        event.stopPropagation();
    });
    $(document).on("click", function () {
        $(".clmn").hide();
    });
    jQuery(".contbody").scroll(function () {
        if ($(this).scrollTop() > 185) {
            $('.bfix').addClass('adfix');
        } else {
            $('.bfix').removeClass('adfix');
        }
    });
    $('.trig-add, .trig-cross').on('click', function () {
        $('#side_lft').toggleClass('span0 col-4');
        $('#side_rgt').toggleClass('col-md-12 col-8');
    });
    $('.body_scroll').scroll(function () {
        if ($('.body_scroll').scrollTop() >= 20) {
            $('.scrolfx').addClass('fixed-header');
            $('.scrolfx').addClass('visible-title');
        }
        else {
            $('.scrolfx').removeClass('fixed-header');
            $('.scrolfx').removeClass('visible-title');
        }
    });
    $(window).scroll(function () {
        var sticky = $('.top-fix'),
            scroll = $(window).scrollTop();
        if (scroll >= 10) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
});
function readURL(event) {
    if (event.files && event.files[0]) {
        $('.showicon').attr('src', '').hide();
        $('.imagePreview').css('background-image', '').hide();
        var reader = new FileReader();
        var ext = $(event).val().split('.').pop().toLowerCase();
        if (ext == 'pdf')
            $('.showicon').attr('src', 'images/pdf.png').show();
        else if (ext == 'doc' || ext == 'docx')
            $('.showicon').attr('src', 'images/word.png').show();
        else if (ext == 'xls' || ext == 'xlsx')
            $('.showicon').attr('src', 'images/exel.png').show();
        else {
            reader.onload = function (e) {
                $('.imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('.imagePreview').hide();
                $('.imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(event.files[0]);
        }
    }
}
function datePicker() {
    $('.datepicker').datepicker({
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true
    });
}
function timePicker() {
    $('.timepicker').timepicker({});
}


