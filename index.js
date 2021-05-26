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

// ------------------------------------------------
// 	jquery.dropdown.js	(depends on: jquery.hoverIntent.js)
// ------------------------------------------------
$.fn.dropdown = function(options) {
  var defaults = {};
  var opts = $.extend(defaults, options);
  // Apply class=hasSub on those items with children
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
// ------------------------------------------------
// MENU MAIN
$(function() {
  var navMainId = "#navMain";
  // -------------------
  // Calling the jquery dropdown
  $(navMainId).dropdown();
  // -------------------
  // MENU ACTIF (class active) : Sous-Menu ouvert par defaut (FACULTATIF)
  /*
  $(navMainId + " ul > li.active").addClass("open");
  $(navMainId + " ul > li.active > ul").slideDown("fast");
  */
  // -------------------
  // ouverture/fermeture sous-menu (click/touch)
  $(navMainId + " ul > li").on("click", function(event) {
    event.stopPropagation(); // important (on stoppe la propagation de l évènement)
    var the_li = $(this); // le <li>
    // 1- on supprime la class "open" sur les autres <li>
    the_li
      .siblings().not(the_li)
      .removeClass("open");
    // 2- on ajoute la class "open" sur le <li> cliqué
    the_li.toggleClass("open");
    // 3- on referme tous les autres sous-menus
    the_li
      .siblings().not(the_li).find("ul")
      .slideUp("fast");
    // 4- on ouvre le sous-menus du <li> cliqué
    if (the_li.hasClass("hasSub")) {
      the_li
        .children("ul")
        .slideToggle("fast");
    }
  });
  // -------------------
  // on désactive les liens des Menus AVEC Sous-Menus (obligatoire pour Tablettes TACTILES / Smartphones)
  $(navMainId + " > ul > li.hasSub > a").on("click", function(event) {
    event.preventDefault();
  });
  // -------------------
});


