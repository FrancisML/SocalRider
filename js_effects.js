$( document ).ready(function(){
  $( ".Meter" ).mouseover(function(){
    var element = $(this);
    var elementId = element[0].id;
    var elementPosition = elementId.substring(8);
    var hoverPositions = document.getElementById('Navigation-Meterbar');
    var selectedElements = hoverPositions.querySelectorAll('div.Meter');
    for(var i = 0 ; i < selectedElements.length ; i++){
      var positionTracker = selectedElements[i].id.substring(8);
      if(parseInt(elementPosition) >= parseInt(positionTracker)){
        var currentPostition = selectedElements[i];
        var hoverColor = (positionTracker/selectedElements.length);
        if(hoverColor < .43){
          currentPostition.classList.add("hover1");
        }else if(hoverColor < .72){
          currentPostition.classList.add("hover2");
        }else{
          currentPostition.classList.add("hover3");
        }
      }else{
        break;
      }
    }
  });
});


$( document ).ready(function(){
  $( ".Meter" ).mouseleave(function(){
    var hoverPositions = document.getElementById('Navigation-Meterbar');
    var selectedElements = hoverPositions.querySelectorAll('div.Meter');
    for(var i = 0 ; i < selectedElements.length ; i++){
        selectedElements[i].setAttribute("class", "Meter");
      }
  });
});
