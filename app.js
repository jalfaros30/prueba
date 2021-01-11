
$(document).ready(function() {
  $("#magnify").click(function() {
    $(".search").toggleClass("focus");
    $("#magnify").toggleClass("clicked");
  });

  $(".container").focusout(function() {
    $(".search").removeClass("focus");
    $("#magnify").removeClass("clicked");
  });
});

