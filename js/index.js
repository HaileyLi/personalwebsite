$(document).ready(function(){
  // On mousemove
  $(document).on('mousemove', function(e){
    moveLines(e.pageX, e.pageY);
    
    // Display position info
    $('.positionXY').fadeIn();
    infoX.textContent = e.pageX + "px";
    infoY.textContent = e.pageY + "px";
  });
});

function moveLines(x, y) {
  // X axis
  $('.bars .bar.vertical').css({
    left: x
  });
  
  // Y axis
  $('.bars .bar.horizontal').css({
    top: y
  });
}