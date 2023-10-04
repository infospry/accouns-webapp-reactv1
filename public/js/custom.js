
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

  


  const bodyScroll = document.querySelector('.body_scroll');
  bodyScroll.addEventListener('scroll', () => {
      if (bodyScroll.scrollTop >= 20) {
          const scrolfx = document.querySelector('.scrolfx');
          scrolfx.classList.add('fixed-header');
          scrolfx.classList.add('visible-title');
      } else {
          const scrolfx = document.querySelector('.scrolfx');
          scrolfx.classList.remove('fixed-header');
          scrolfx.classList.remove('visible-title');
      }
  });

  function makeModalDialogDraggable() {
    const modalDialog = document.querySelector('.modal-dialog');
    
    if (!modalDialog) {
        console.error('Element with class "modal-dialog" not found.');
        return;
    }
    
    let isDragging = false;
    let initialX, initialY;
    
    modalDialog.addEventListener('mousedown', (event) => {
        isDragging = true;
        initialX = event.clientX - modalDialog.offsetLeft;
        initialY = event.clientY - modalDialog.offsetTop;
    });
    
    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const left = event.clientX - initialX;
            const top = event.clientY - initialY;
            modalDialog.style.left = `${left}px`;
            modalDialog.style.top = `${top}px`;
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

// Call the function to make .modal-dialog draggable
makeModalDialogDraggable();
function makePopoverDraggable() {
    const popover = document.querySelector('.popover');
    
    if (!popover) {
        console.error('Element with class "popover" not found.');
        return;
    }
    
    let isDragging = false;
    let initialX, initialY;
    
    popover.addEventListener('mousedown', (event) => {
        isDragging = true;
        initialX = event.clientX - popover.offsetLeft;
        initialY = event.clientY - popover.offsetTop;
    });
    
    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const left = event.clientX - initialX;
            const top = event.clientY - initialY;
            popover.style.left = `${left}px`;
            popover.style.top = `${top}px`;
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

// Call the function to make .popover draggable
makePopoverDraggable();

      
