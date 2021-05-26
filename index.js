mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$.fn.dropdown = function(options) {
  var defaults = {};
  var opts = $.extend(defaults, options);

  this.each(function() {
    $(this)
      .find("li")
      .each(function() {
        if ($(this).find("ul").length > 0) {
          $(this).addClass("hasSub");
        }
      });
  });
  return this;
};

// MENU MAIN
$(function() {
  var navMainId = "#navMain";

  $(navMainId).dropdown();
});


