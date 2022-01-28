$(document).ready(function(){
 var getsheet = get("list");
    $.getJSON(getsheet, function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
});
