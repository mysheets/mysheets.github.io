window.onload = function() {
    alert("Welcome to 'Shopping List' App!\n\nCreated by Rock Valley College\n**Javascript(Web233) Students**\n\nQuestions?\nemail Professor Chuck Konkol\nc.konkol@rockvalleycollege.edu\n\nRegister @ RockValleyCollege.edu");
    var getsheet = get("list");
    $.getJSON(getsheet, function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
};
