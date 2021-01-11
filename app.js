/*
const http = require('http');
const port = process.env.PORT|| 3000;
// se utiliza el método create server
const server = http.createServer((req, res) => {
  res.json({'nombre':'jorge'}); 
});


server.listen(port, () => {
 console.log('El servidor esta escuchando peticiones en localhost');
});

*/

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

