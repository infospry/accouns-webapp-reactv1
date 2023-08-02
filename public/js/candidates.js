
    $(document).ready(function () {
        //DateRangeFuction();
        //  ddlToBind = "cldrddlLocations2";
        //  ns_candidate.SearchEmpofCnd();

        $(document).on('click', ".tab-availability", function () {
            calendar_cnd_id = profile_Id;
            var IsReadonly = 'yes', add_tags = 'no', layout_tabs = 'yes', navigator = 'yes';
            ns_calendar.design('available', '', '', '#Placeholder_calendar', '#cnd_viewlist_placeholder', IsReadonly, add_tags, layout_tabs, navigator);

        });

        $(document).on('click', '.chkeventtype', function () {
            var type = $(this).attr('data-title');
            $('.eventtitlesection').hide();
            $('#txteventtitle').val(type);
            if (type == 'Task') {
                $('#txteventtitle').val('');
                $('.eventtitlesection').show();
            }
        });
        $(document).on('click', '#chkalldaypartial', function () {
            if ($(this).prop('checked')) {
                $('.switchnormal').hide();
                $('.switch-normal').show();
            } else {
                $('.switchnormal').show();
                $('.switch-normal').hide();
            }
        });
    });

    $(document).ready(function () {
        $('.modal-body').scroll(function () {
            if ($('.modal-body').scrollTop() > 100) {
                $('.show-head ').slideDown(100);
                $('.hide-head').fadeOut("fast");
            }
            if ($('.modal-body').scrollTop() < 100) {
                $('.show-head').slideUp(150);
                $('.hide-head').fadeIn("fast");
            }
        });
    });

    jQuery(function ($) {
        function fixDiv() {
            var $cache = $('#empFixed');
            if ($('.modal-body').scrollTop() > 180) {
                $cache.css({
                    'position': 'fixed',
                    'top': '60px',
                    'left': '0px',
                });
            }
            else
                $cache.css({
                    'position': 'relative',
                    'top': 'auto',
                    'left': '0px'
                });
        }
        $('.modal-body').scroll(fixDiv);
        fixDiv();
    });

    $('.fd').click(function () {
        $('.disply_hid').hide(0);
    });
    $('.hd').click(function () {
        $('.disply_hid').show(500);
    });

    $('.edt').click(function () {
        $('.disply_row').show(500);
        $('.disply_none_row').hide(0);
    });
    $('.update').click(function () {
        $('.disply_none_row').show(500);
        $('.disply_row').hide(0);
    });

    $('.addcontact').click(function () {
        $('.disply_contact').show(500);
        // $('.addcontact').hide(0);
    });
    $('.savecontact').click(function () {
        $('.disply_none_newcontact').show(500);
        $('.disply_contact').hide(0);
        $('.addcontact').show(500);
    });
    $('.deletecont').click(function () {
        $('.disply_none_newcontact').hide(0);
        $('.disply_contact').hide(0);
    });
    $('.cont_edt').click(function () {
        $('.disply_editcontact').show(500);
        $('.disply_viewcontact').hide(0);
    });
    $('.save_edt_contntn').click(function () {
        $('.disply_viewcontact').show(500);
        $('.disply_editcontact').hide(0);
    });
    $('.salry_edt').click(function () {
        $('.disply_editsalry').show(500);
        $('.disply_viewsalry').hide(0);
    });
    $('.save_edt_salry').click(function () {
        $('.disply_viewsalry').show(500);
        $('.disply_editsalry').hide(0);
    });
    $('.sence_edt').click(function () {
        $('.disply_editsence').show(500);
        $('.disply_viewsence ').hide(0);
    });
    $('.save_sens_btn').click(function () {
        $('.disply_viewsence').show(500);
        $('.disply_editsence').hide(0);
    });

    $('.Termination_edt').click(function () {
        $('.disply_editTermination').show(500);
        $('.disply_viewTermination ').hide(0);
    });
    $('.save_Termination_btn').click(function () {
        $('.disply_viewTermination').show(500);
        $('.disply_editTermination').hide(0);
    });

    $(function () {
        $('#orgimage').addClass('dragging').removeClass('dragging');
    });
    $('#orgimage').on('dragover', function () {
        $('#orgimage').addClass('dragging')
    }).on('dragleave', function () {
        $('#orgimage').removeClass('dragging')
    }).on('drop', function (e) {
        $('#orgimage').removeClass('dragging hasImage');
        if (e.originalEvent) {
            var file = e.originalEvent.dataTransfer.files[0];
            console.log(file);
            var reader = new FileReader();
            //attach event handlers here...
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                console.log(reader.result);
                $('#orgimage').css('background-image', 'url(' + reader.result + ')').addClass('hasImage');
            }
        }
    })
    $('#orgimage').on('click', function (e) {
        console.log('clicked')
        $('#mediaFile').click();
    });
    window.addEventListener("dragover", function (e) {
        e = e || event;
        e.preventDefault();
    }, false);
    window.addEventListener("drop", function (e) {
        e = e || event;
        e.preventDefault();
    }, false);
    $('#mediaFile').change(function (e) {
        var input = e.target;
        if (input.files && input.files[0]) {
            var file = input.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                console.log(reader.result);
                $('#orgimage').css('background-image', 'url(' + reader.result + ')').addClass('hasImage');
            }
        }
    })

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        readURL(this);
    });

    $(".contentB").hide();
    $(function () {
        $("#switch-id").change(function () {
            if ($(this).is(":checked")) {
                $(".contentB").show();

            } else {
                $(".contentB").hide();

            }
        });
        $("#switchid").change(function () {
            if ($(this).is(":checked")) {
                $(".contentB").hide();

            } else {
                $(".contentB").show();

            }
        });
    });

    $(function () {

        // Get the form fields and hidden div
        var checkbox = $("#trigger");
        var hidden = $("#hidden_fields");
        hidden.hide();
        checkbox.change(function () {

            if (checkbox.is(':checked')) {

                hidden.show();

            } else {

                hidden.hide();
            }
        });
    });


    function showHide(elem) {
        if (elem.selectedIndex !== 0) {
            //hide the divs
            for (var i = 0; i < divsO.length; i++) {
                divsO[i].style.display = 'none';
            }
            //unhide the selected div
            document.getElementById(elem.value).style.display = 'block';
        }
    }

    window.onload = function () {
        //get the divs to show/hide
        divsO = document.getElementById("hockey").getElementsByClassName('show-hide');
    };

    $(function () {
        $('#Contractselector').change(function () {
            $('.conttyp').hide();
            $('#' + $(this).val()).show();
        });
    });

    $(function () {
        $('#priodselector').change(function () {
            $('.conttyp').hide();
            $('#' + $(this).val()).show();
        });

    });

    $('.clsworkingpatrrentime [data-toggle="buttons"]  .btn').on('click', function () {
        // toggle style
        $(this).toggleClass('btn-toggle-primary btntoggleprimaryactive');

        // toggle checkbox
        var $chk = $(this).find('[type=checkbox]');
        $chk.prop('checked', !$chk.prop('checked'));
        return false;
    });


    // function readURL(input) {
    //     if (input.files && input.files[0]) {
    //         var reader = new FileReader();
    //         reader.onload = function (e) {
    //             $('#blah')
    //                 .attr('src', e.target.result);
    //         };
    //         reader.readAsDataURL(input.files[0]);
    //     }
    // }
    $(document).on('click', ".clickmode", function () {
        var evt_hide = $(this).data('hide');
        var evt_show = $(this).data('show');
        if (evt_hide != "") { $(evt_hide).hide(); }
        if (evt_show != "") { $(evt_show).show(); }
    });
    $('.del_tr').click(function (e) {
        $(this).closest('tr').remove()
    })



    (function ($) {
        'use strict';
        $(document).on('show.bs.tab', '.nav-tabs-responsive [data-toggle="tab"]', function (e) {
            var $target = $(e.target);
            var $tabs = $target.closest('.nav-tabs-responsive');
            var $current = $target.closest('li');
            var $parent = $current.closest('li.dropdown');
            $current = $parent.length > 0 ? $parent : $current;
            var $next = $current.next();
            var $prev = $current.prev();
            var updateDropdownMenu = function ($el, position) {
                $el
                    .find('.dropdown-menu')
                    .removeClass('pull-xs-left pull-xs-center pull-xs-right')
                    .addClass('pull-xs-' + position);
            };

            $tabs.find('>li').removeClass('next prev');
            $prev.addClass('prev');
            $next.addClass('next');

            updateDropdownMenu($prev, 'left');
            updateDropdownMenu($current, 'center');
            updateDropdownMenu($next, 'right');
        });

    })(jQuery);

