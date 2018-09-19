
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

 //Begin Latitude and Longitude Finding. Show my location button.
function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }
    function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;

        output.innerHTML = '<p align = "center">Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

        output.appendChild(img); 
    }
  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p align = 'center'>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

//Using the second button for latitude
function geoFindMe2() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }
    function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;

        /*output.innerHTML = latitude + '° <br>Longitude is ' + longitude + '°</p>';*/

        output.appendChild(img); 
    }
  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }
  navigator.geolocation.getCurrentPosition(success, error);
}
//End Latitude and Longitude Finding.

//Begin Stopwatch Function 

var h3 = document.getElementsByTagName('h3')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    counter = 0,
    t;

/*function storeGeo(){
    geoFindMe2()
}*/

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h3.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}

/*function timer2() {
    m = setTimeout(add, 1000);}*/


function counterUp(){
    counter = counter +1;
}
//Creates new columns and rows in the table
function createRow(){
    var table = document.getElementById("track");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    counterUp();
    cell1.innerHTML = counter;
    cell2.innerHTML = h3.textContent;
    var x = document.createElement("BUTTON");
    var y = document.createElement("BUTTON");
    x.onclick = geoFindMe2();
    cell3.innerHTML = x;
    cell4.innerHTML = y;
}

function doAllThese(){
    timer();
    createRow();
    timer2();
}
/* Start button */
start.onclick = doAllThese;


/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
    
}

/* Clear button */
clear.onclick = function() {
    h3.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
    
}



