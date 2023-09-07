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

