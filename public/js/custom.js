
$(document).on('click', ".clickmode", function() {
    var evt_hide = $(this).data('hide');
    var evt_show = $(this).data('show');
    if (evt_hide != "") {
        $(evt_hide).hide();
    }
    if (evt_show != "") {
        $(evt_show).show();
    }
});

$(document).on('click', ".clickmode", function() {
      // Remove 'active' class from all links
      $('.nav-link').removeClass('active');

      // Add 'active' class to the clicked link
      $(this).addClass('active');
   
  });

  $(document).on('click', ".nav__link", function() {
    // Remove 'active' class from all links
    $('.nav__link').removeClass('active');

    // Add 'active' class to the clicked link
    $(this).addClass('active');
 
});

$(".dropdown-toggle").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).closest(".search-dropdown").toggleClass("open");
  });
  
  $(".dropdown-menu > li > a").click(function (e) {
    e.preventDefault();
    var clicked = $(this);
    clicked
      .closest(".dropdown-menu")
      .find(".menu-active")
      .removeClass("menu-active");
    clicked.parent("li").addClass("menu-active");
    clicked
      .closest(".search-dropdown")
      .find(".toggle-active")
      .html(clicked.html());
  });
  
  $(document).click(function () {
    $(".search-dropdown.open").removeClass("open");
  });
  

  $(".dropdown-menu a ").click(function(){ 
    $(this).parents(".input-group-btn").find('.btn').text($(this).text()); 
  });


// Select all elements with the class "toggle-password" and attach a click event listener to them
document.querySelectorAll('.toggle-password').forEach(function(element) {
    element.addEventListener('click', function() {
      // Toggle the classes "zmdi-eye" and "zmdi-eye-off" on the clicked element
      this.classList.toggle('zmdi-eye');
      this.classList.toggle('zmdi-eye-off');
  
      // Find the input element based on the "toggle" attribute of the clicked element
      var input = document.querySelector(this.getAttribute('toggle'));
  
      // Toggle the input field's type attribute between "password" and "text"
      if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
      } else {
        input.setAttribute('type', 'password');
      }
    });
  });
  
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((item) => {
      item.addEventListener('click', () => {
          // Remove "active" class from all navigation items
          navItems.forEach((navItem) => {
              navItem.classList.remove('active');
          });
  
          // Add "active" class to the clicked navigation item
          item.classList.add('active');
      });
  });

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
        $('.body_scroll').scroll(function(){
            if ($('.body_scroll').scrollTop() >= 20) {
                $('.scrolfx').addClass('fixed-header');
                $('.scrolfx').addClass('visible-title');
            }
            else {
                $('.scrolfx').removeClass('fixed-header');
                $('.scrolfx').removeClass('visible-title');
            }
        });
      
