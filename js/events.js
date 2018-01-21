//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  var img = $('img');
  img.on('load', function(){
    img.class = 'tasty';
  })
}
$(document).ready(function(){

// call functions here

});
