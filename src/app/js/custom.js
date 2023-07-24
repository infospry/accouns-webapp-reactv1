

window.onload = function() {
    document.getElementById('bdy').className = 'ls-toggle-menu';
  };

function showhide() {
    if (document.getElementById('divLogin').style.display == 'none') {
      document.getElementById('divLogin').style.display = 'block';
      document.getElementById('authenticate_div').style.display = 'none';
    }
    else {
      document.getElementById('divLogin').style.display = 'none';
      document.getElementById('authenticate_div').style.display = 'block';
    }
};


    
  $('.clickmode').click(function() {
    var evt_hide = $(this).data('hide');
    var evt_show = $(this).data('show');
    if (evt_hide != "") {
        $(evt_hide).hide();
    }
    if (evt_show != "") {
        $(evt_show).show();
    }
});
function valueChanged() {
    if ($(".chkDocMasterDocIssue").is(":checked")) $(".divDocumentIssueDate").show();
    else $(".divDocumentIssueDate").hide();
  }


$(document).ready(function () {
    $('#divlogmsg').html('').delay(5000);
    ns_log.IsRememberUsername();
});
$(document).on('click', ".clickmode", function () {
    var evt_hide = $(this).data('hide');
    var evt_show = $(this).data('show');

    if (evt_hide != "") {
        $(evt_hide).hide();
        $('#txtEmailforgot').val('');
        $('#divlogmsg').html('');
    }
    if (evt_show != "") {
        $(evt_show).show();
        $('#txtusername').val('');
        $('#txtpassword').val('');
        $('#divforgotPassMsg').html('');
    }
});

$(document).on('click', ".strength", function () {
    $('#popover-password').show();
});

// Dashboard

var down = false;
var scrollLeft = 0;
var x = 0;
$('.table-responsive').mousedown(function (e) {
    down = true;
    scrollLeft = this.scrollLeft;
    x = e.clientX;
}).mouseup(function () {
    down = false;
}).mousemove(function (e) {
    if (down) {
        this.scrollLeft = scrollLeft + x - e.clientX;
    }
}).mouseleave(function () {
    down = false;
});

$('.modal-dialog,.popover').draggable({
    scroll: true,
    scrollSensitivity: 40,
    scrollSpeed: 40,
    handle: ".modal-header"
});


$('.nav-tabs > li a').click(function () {
    $('.nav-tabs > li').removeClass('active');
    $(this).parent().addClass('active');
    $('.nav-tabs').toggleClass('open');
});

$('.modal-dialog').draggable({
    scroll: true,
    scrollSensitivity: 40,
    scrollSpeed: 40
});

$(".dr-breakout-btn").click(function () {
    $('.dr-breakout').addClass('displayblk');
    $(".dr-breakout").toggle();
});

$(document).ready(function () {
    
    $('.reveal-click').on('click', function () {
        $('.rgtinbox').toggleClass('full_width');
    });
    $('.reveal-click').on('click', function () {
        $('.left').toggleClass('small_width');
    });
});
