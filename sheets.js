 //v 4.1 get URL
var getsheet = get("list");
    if (geturllistvalue) {
     
      shoppinglist = geturllistvalue;
  }else if (y){
       y = y.split('%2C');
      shoppinglist = y;
  }
$(document).ready(function(){
 var getsheet = get("list");
    $.getJSON(getsheet, function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
});
