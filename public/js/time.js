



// Event handler for elements with class 'clickmode'
$(document).on('click', ".clickmode", function() {
  var evt_hide = $(this).data('hide');  // Get the 'hide' data attribute value
  var evt_show = $(this).data('show');  // Get the 'show' data attribute value

  // Hide the element specified in 'hide' attribute (if not empty)
  if (evt_hide != "") {
      $(evt_hide).hide();
  }

  // Show the element specified in 'show' attribute (if not empty)
  if (evt_show != "") {
      $(evt_show).show();
  }
});

// Event handler for elements with class 'clickmode'
$(document).on('click', ".clickmode", function() {
  // Remove 'active' class from all elements with class 'nav-link'
  $('.nav-link').removeClass('active');

  // Add 'active' class to the clicked element
  $(this).addClass('active');
});

// Event handler for elements with class 'nav__link'
$(document).on('click', ".nav__link", function() {
  // Remove 'active' class from all elements with class 'nav__link'
  $('.nav__link').removeClass('active');

  // Add 'active' class to the clicked element
  $(this).addClass('active');
});

/* initialization of different variables 
to be used in Count-Up App*/
var clearTime;
var seconds = 0,
  minutes = 0,
  hours = 0;
var secs, mins, gethours;

function startWatch() {
  /* check if seconds is equal to 60 and add a +1 
    to minutes, and set seconds to 0 */
  if (seconds === 60) {
    seconds = 0;
    minutes = minutes + 1;
  }

  /* i used the javascript tenary operator to format 
    how the minutes should look and add 0 to minutes if 
    less than 10 */
  mins = minutes < 10 ? "0" + minutes + ": " : minutes + ": ";
  /* check if minutes is equal to 60 and add a +1 
    to hours set minutes to 0 */
  if (minutes === 60) {
    minutes = 0;
    hours = hours + 1;
  }
  /* i used the javascript tenary operator to format 
    how the hours should look and add 0 to hours if less than 10 */
  gethours = hours < 10 ? "0" + hours + ": " : hours + ": ";
  secs = seconds < 10 ? "0" + seconds : seconds;

  var continueButton = document.getElementById("continue");
  continueButton.removeAttribute("hidden");

  /* display the Count-Up Timer */
  var x = document.getElementById("timer");
  x.innerHTML = gethours + mins + secs;

  /* call the seconds counter after displaying the Count-Up 
    and increment seconds by +1 to keep it counting */
  seconds++;

  /* call the setTimeout( ) to keep the Count-Up alive ! */
  clearTime = setTimeout("startWatch( )", 1000);
}
//create a function to start the Count-Up
function startTime() {
  /* check if seconds, minutes, and hours are equal to zero 
    and start the Count-Up */
  if (seconds === 0 && minutes === 0 && hours === 0) {
    /* hide the fulltime when the Count-Up is running */
    var fulltime = document.getElementById("fulltime");
    fulltime.style.display = "none";
    var showStart = document.getElementById("start");
    showStart.style.display = "none";

    /* call the startWatch( ) function to execute the Count-Up 
        whenever the startTime( ) is triggered */
    startWatch();
  }
}
var start = document.getElementById("start");
start.addEventListener("click", startTime);

/*create a function to stop the time */
function stopTime() {
  /* check if seconds, minutes and hours are not equal to 0 */
  if (seconds !== 0 || minutes !== 0 || hours !== 0) {
    var continueButton = document.getElementById("continue");
    continueButton.setAttribute("hidden", "true");
    var fulltime = document.getElementById("fulltime");
    fulltime.style.display = "block";
    fulltime.style.color = "#ff4500";
    var time = gethours + mins + secs;
    fulltime.innerHTML = "Time Recorded is " + time;
    // reset the Count-Up
    seconds = 0;
    minutes = 0;
    hours = 0;
    secs = "0" + seconds;
    mins = "0" + minutes + ": ";
    gethours = "0" + hours + ": ";

    /* display the Count-Up Timer after it's been stopped */
    var x = document.getElementById("timer");
    var stopTime = gethours + mins + secs;
    x.innerHTML = stopTime;

    /* display all Count-Up control buttons */
    var showStart = document.getElementById("start");
    showStart.style.display = "inline-block";
    var showStop = document.getElementById("stop");
    showStop.style.display = "inline-block";
    var showPause = document.getElementById("pause");
    showPause.style.display = "inline-block";

    /* clear the Count-Up using the setTimeout( ) 
        return value 'clearTime' as ID */
    clearTimeout(clearTime);
  }
}
window.addEventListener("load", function() {
  var stop = document.getElementById("stop");
  stop.addEventListener("click", stopTime);
});
/*********** End of Stop Button Operations *********/

/*********** Pause Button Operations *********/
function pauseTime() {
  if (seconds !== 0 || minutes !== 0 || hours !== 0) {
    /* display the Count-Up Timer after clicking on pause button */
    var x = document.getElementById("timer");
    var stopTime = gethours + mins + secs;
    x.innerHTML = stopTime;

    /* display all Count-Up control buttons */
    var showStop = document.getElementById("stop");
    showStop.style.display = "inline-block";

    /* clear the Count-Up using the setTimeout( ) 
        return value 'clearTime' as ID */
    clearTimeout(clearTime);
  }
}

var pause = document.getElementById("pause");
pause.addEventListener("click", pauseTime);
/*********** End of Pause Button Operations *********/

/*********** Continue Button Operations *********/
function continueTime() {
  if (seconds !== 0 || minutes !== 0 || hours !== 0) {
    /* display the Count-Up Timer after it's been paused */
    var x = document.getElementById("timer");
    var continueTime = gethours + mins + secs;
    x.innerHTML = continueTime;

    /* display all Count-Up control buttons */
    var showStop = document.getElementById("stop");
    showStop.style.display = "inline-block";
    /* clear the Count-Up using the setTimeout( ) 
        return value 'clearTime' as ID.
        call the setTimeout( ) to keep the Count-Up alive ! */
    clearTimeout(clearTime);
    clearTime = setTimeout("startWatch( )", 1000);
  }
}

window.addEventListener("load", function() {
  var cTime = document.getElementById("continue");
  cTime.addEventListener("click", continueTime);
});
/*********** End of Continue Button Operations *********/



(function($, window, document, undefined) {
  var pluginName = "editable",
    defaults = {
      keyboard: true,
      dblclick: true,
      button: true,
      buttonSelector: ".edit",
      maintainWidth: true,
      dropdowns: {},
      edit: function() {},
      save: function() {},
      cancel: function() {}
    };

  function editable(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  editable.prototype = {
    init: function() {
      this.editing = false;

      if (this.options.dblclick) {
        $(this.element)
          .css('cursor', 'pointer')
          .bind('dblclick', this.toggle.bind(this));
      }

      if (this.options.button) {
        $(this.options.buttonSelector, this.element)
          .bind('click', this.toggle.bind(this));
      }
    },

    toggle: function(e) {
      e.preventDefault();

      this.editing = !this.editing;

      if (this.editing) {
        this.edit();
      } else {
        this.save();
      }
    },

    edit: function() {
      var instance = this,
        values = {};

      $('td[data-field]', this.element).each(function() {
        var input,
          field = $(this).data('field'),
          value = $(this).text(),
          width = $(this).width();

        values[field] = value;

        $(this).empty();

        if (instance.options.maintainWidth) {
          $(this).width(width);
        }

        if (field in instance.options.dropdowns) {
          input = $('<select></select>');

          for (var i = 0; i < instance.options.dropdowns[field].length; i++) {
            $('<option></option>')
              .text(instance.options.dropdowns[field][i])
              .appendTo(input);
          };

          input.val(value)
            .data('old-value', value)
            .dblclick(instance._captureEvent);
        } else {
          input = $('<input type="text" />')
            .val(value)
            .data('old-value', value)
            .dblclick(instance._captureEvent);
        }

        input.appendTo(this);

        if (instance.options.keyboard) {
          input.keydown(instance._captureKey.bind(instance));
        }
      });

      this.options.edit.bind(this.element)(values);
    },

    save: function() {
      var instance = this,
        values = {};

      $('td[data-field]', this.element).each(function() {
        var value = $(':input', this).val();

        values[$(this).data('field')] = value;

        $(this).empty()
          .text(value);
      });

      this.options.save.bind(this.element)(values);
    },

    cancel: function() {
      var instance = this,
        values = {};

      $('td[data-field]', this.element).each(function() {
        var value = $(':input', this).data('old-value');

        values[$(this).data('field')] = value;

        $(this).empty()
          .text(value);
      });

      this.options.cancel.bind(this.element)(values);
    },

    _captureEvent: function(e) {
      e.stopPropagation();
    },

    _captureKey: function(e) {
      if (e.which === 13) {
        this.editing = false;
        this.save();
      } else if (e.which === 27) {
        this.editing = false;
        this.cancel();
      }
    }
  };

  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName,
          new editable(this, options));
      }
    });
  };

})(jQuery, window, document);

editTable();

//custome editable starts
function editTable(){
  
  $(function() {
  var pickers = {};

  $('table tr').editable({
    dropdowns: {
      sex: ['Male', 'Female']
    },
    edit: function(values) {
      $(".edit i", this)
        .removeClass('zmdi-edit')
        .addClass('zmdi-save')
        .attr('title', 'Save');

      pickers[this] = new Pikaday({
        field: $("td[data-field=start] input", this)[0],
        format: 'MMM D, YYYY'
      });
    },
    save: function(values) {
      $(".edit i", this)
        .removeClass('zmdi-save')
        .addClass('zmdi-edit')
        .attr('title', 'Edit');

      if (this in pickers) {
        pickers[this].destroy();
        delete pickers[this];
      }
    },
    cancel: function(values) {
      $(".edit i", this)
        .removeClass('zmdi-save')
        .addClass('zmdi-edit')
        .attr('title', 'Edit');

      if (this in pickers) {
        pickers[this].destroy();
        delete pickers[this];
      }
    }
  });
});
  
}

$(".add-row").click(function(){
  $("#editableTable").find("tbody tr:first").before("<tr><td data-field='name'></td><td data-field='name'></td><td data-field='name'></td><td data-field='name'></td><td data-field='name'></td><td style='width:96px'><a class='btn btn-sm btn-outline-primary edit' title='Edit'><i class='zmdi zmdi-edit'></i></a> <a class='btn btn-sm btn-danger' title='Delete'><i class='zmdi zmdi-delete'></i></a></td></tr>");   
  editTable();  
  setTimeout(function(){   
    $("#editableTable").find("tbody tr:first td:last a[title='Edit']").click(); 
  }, 200); 
  
  setTimeout(function(){ 
    $("#editableTable").find("tbody tr:first td:first input[type='text']").focus();
      }, 300); 
  
   $("#editableTable").find("a[title='Delete']").unbind('click').click(function(e){
        $(this).closest("tr").remove();
    });
   
});

function myFunction() {
    
}

$("#editableTable").find("a[title='Delete']").click(function(e){  
  var x;
    if (confirm("Are you sure you want to delete entire row?") == true) {
        $(this).closest("tr").remove();
    } else {
        
    }     
});


