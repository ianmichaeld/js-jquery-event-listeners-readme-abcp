//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  var img = $('img');
  img.on('load', function(){
    img.className = 'tasty';
  })
}
$(document).ready(function(){

// call functions here
getIt();
frameIt();

});
