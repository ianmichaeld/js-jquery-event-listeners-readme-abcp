//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  var img = $('img');
  img.on('load', function(){
    img.addClass('tasty');
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
  })
}

function pressIt(){
  
}
$(document).ready(function(){

// call functions here
getIt();
frameIt();
submitIt();
});
