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
  

// Button to link to PDF CV

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
    

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