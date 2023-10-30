$('.trig-add, .trig-cross').on('click', function () {
    $('#side_lft').toggleClass('span0 col-4');
    $('#side_rgt').toggleClass('col-md-12 col-8');
});

$(document).ready(function () {
    datePicker();
    timePicker();
   
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
function timeZone() {
//console.log($('.timezone'))
    $('.timezone').timezones();
}