window.onload = function() {
    alert("Welcome to 'Shopping List' App!\n\nCreated by Rock Valley College\n**Javascript(Web233) Students**\n\nQuestions?\nemail Professor Chuck Konkol\nc.konkol@rockvalleycollege.edu\n\nRegister @ RockValleyCollege.edu");
   loadJSON("https://jsonplaceholder.typicode.com/posts", myData,'jsonp');
};

function myData(Data)
{
   alert(Data);
}
