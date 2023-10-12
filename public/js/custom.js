const div = document.getElementById('box');
const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');
const addBtnn = document.getElementById('add--btn');
const removeBtnn = document.getElementById('remove--btn');
addBtn.addEventListener('click',()=>{
    div.classList.add('shadw');
})
addBtnn.addEventListener('click',()=>{
  div.classList.add('shadw');
})
removeBtn.addEventListener('click',()=>{
    div.classList.remove('shadw');
})
removeBtnn.addEventListener('click',()=>{
  div.classList.remove('shadw');
})
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
  $(document).on('click', ".formobile .clickmode", function() {
    // Remove 'active' class from all links
    $('.nav__link').removeClass('bdrlftcol');

    // Add 'active' class to the clicked link
    $(this).addClass('bdrlftcol');
 
});
  
  $(document).on('click', ".nav__link", function() {
    // Remove 'active' class from all links
    $('.nav__link').removeClass('active');

    // Add 'active' class to the clicked link
    $(this).addClass('active');
 
});

// Helper function to hide an element
function hideElement(element) {
  if (element) {
      element.style.display = 'none';
  }
}

// Helper function to show an element
function showElement(element) {
  if (element) {
      element.style.display = '';
  }
}

// Event handler for elements with class 'dropdown-toggle'
document.querySelectorAll('.dropdown-toggle').forEach(function(element) {
  element.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var searchDropdown = element.closest('.search-dropdown');
      if (searchDropdown) {
          searchDropdown.classList.toggle('open');
      }
  });
});

/////////message swift left////////////

  
$(document).ready(function(){
    $(".formobile .clickmode").click(function(){
        $(".add_remove").addClass("mobile_load");      
    });
    $(".cross_remove").click(function(){
        $(".mobile_load").addClass("ddnone");      
    });
});


$('.trig-add, .trig-cross').on('click', function () {
    $('#side_lft').toggleClass('span0 col-4');
    $('#side_rgt').toggleClass('col-md-12 col-8');
});
// Event handler for elements with class 'dropdown-menu'
document.querySelectorAll('.dropdown-menu > li > a').forEach(function(element) {
  element.addEventListener('click', function(event) {
      event.preventDefault();
      var clicked = event.target;
      var dropdownMenu = clicked.closest('.dropdown-menu');
      
      if (dropdownMenu) {
          var menuActive = dropdownMenu.querySelector('.menu-active');
          if (menuActive) {
              menuActive.classList.remove('menu-active');
          }
      }

      var parentListItem = clicked.parentElement;
      if (parentListItem) {
          parentListItem.classList.add('menu-active');
      }

      var searchDropdown = clicked.closest('.search-dropdown');
      if (searchDropdown) {
          var toggleActive = searchDropdown.querySelector('.toggle-active');
          if (toggleActive) {
              toggleActive.innerHTML = clicked.innerHTML;
          }
      }
  });
});

// Event handler to close dropdown when clicking outside
document.addEventListener('click', function(event) {
  document.querySelectorAll('.search-dropdown.open').forEach(function(element) {
      element.classList.remove('open');
  });
});

// Event handler for elements inside .input-group-btn
document.querySelectorAll('.dropdown-menu a').forEach(function(element) {
  element.addEventListener('click', function() {
      var inputGroupBtn = element.closest('.input-group-btn');
      if (inputGroupBtn) {
          var btn = inputGroupBtn.querySelector('.btn');
          if (btn) {
              btn.innerText = element.innerText;
          }
      }
  });
});



