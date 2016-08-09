$(document).ready(function() {
  $(".clickable").click(function() {
    $(".picture-hidden").fadeToggle("slow");
    $(".picture-showing").fadeToggle("slow");
  });
});

$(document).ready(function() {
  $(".slider").click(function() {
    $(".droptext").slideToggle();
  });
});

$(document).ready(function() {
  $(".trick").click(function() {
    $("img").fadeOut();
    $("p").fadeOut();
    $(".tricktext").fadeIn("slow");
  });
});
