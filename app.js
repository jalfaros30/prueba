
$(document).ready(function() {
  $("#magnify").click(function() {
    $(".search").toggleClass("focus");
    $("#magnify").toggleClass("clicked");
  });

  $(".container").focusout(function() {
    //$(".search").removeClass("focus");
    //$("#magnify").removeClass("clicked");
  });
});


const id = document.querySelector('#icon-search');
const search = document.querySelector('#search');

search.addEventListener('change',() => {
  busq_clausula = `#clausula${search.value}`;
  location.href= busq_clausula;
  document.querySelector('#search').value = '';
});


/*
function redireccionar(){
  window.locationf="http://www.cristalab.com";
} 
setTimeout ("redireccionar()", 5000);

*/

