// Smooth Scroll JQ 

  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    return false;
    }
  });
  

// Tooltip JQ

  $(function () {
    $('#tooltip25').tooltip();
  });

// Button to link to PDF CV

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

// Link to Facebook button in footer

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.0';
    fjs.parentNode.insertBefore(js, fjs);
    }
    (document, 'script', 'facebook-jssdk'));
    
// selects message box and changes to red border on docready

$(document).ready(function(){
    $('#contact-btn-submit').on('click', function() {
        var comment = $('#message-box').val();
    if ($("#message-box").val() === "") {
        $("#message-box").css('border', '1px solid red'); //will change the border of the message box red if input has no value
    }
    else {
      $("#visible-comment").html(comment); 
      $("#message-box").hide(300); //hides the message box on submit if not blank
    }
    return false;
        // work
      }); 
    for(var i = 0; i < works.length; ++i ) { //appends my work section with images in the work array
      $('#work1').append("\
        <div class=' col-xs-12 col-sm-4 project'>\
        <a href= '" + works[i].pic + "' class'work-img'>\
          <img class= 'img-responsive' src='" + works[i].pic + "'>\
          <span class='work-info'><p class='proj-title'>Title:</p> " + works[i].title + " </span>\
        </a>\
        </div>\
        ");
    };
  
// Notify on keyup event

$("#message-box").on("keyup", function() {
    var charCount=$('#message-box').val().length;
$('#char-Count').html(charCount + ' Characters'); //Changes colour of the text to red if above 50char
    if(charCount > 30) {
      $('#char-Count').css('color', 'red');
    } 
    else {
      $('#char-Count').css('color', 'black');
  };
});

$(".project").mouseenter( function() { //Show Project info when hovered over, hide when left
  $('.work-info', this).show();
}).mouseleave( function() {
  $('.work-info', this).hide();
})

}); //DOCREADY close

var map;  //Map inbed 
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.941353, lng: 6.95},
    zoom: 12
  });
  var marker = new google.maps.Marker({
    position: {lat: 50.931353, lng: 6.94},
    map: map
  });
}

// Calculator

var display = document.getElementById('display');

function calcBtn(obj) {
  var clicked = obj.innerHTML;
  if (clicked === '='){
    display.innerHTML = eval(display.innerHTML);
  }
  else if (clicked === 'AC') {
    display.innerHTML = '0';
  }
  else {
    if (display.innerHTML === '0') {
      display.innerHTML = clicked;
    }
    else {
      display.innerHTML += clicked;
    } 
  }
}