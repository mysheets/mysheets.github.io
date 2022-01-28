window.onload = function() {
    alert("Welcome to 'Shopping List' App!\n\nCreated by Rock Valley College\n**Javascript(Web233) Students**\n\nQuestions?\nemail Professor Chuck Konkol\nc.konkol@rockvalleycollege.edu\n\nRegister @ RockValleyCollege.edu");
    var geturllistvalue = get("list");
    async function get() {
    let url = geturllistvalue;
    let obj = await (await fetch(url)).json();
    
    //console.log(obj);
    return obj;
}
var tags;
(async () => {
  tags = await get()
  //console.log(tags)
  document.getElementById("tags").innerHTML = JSON.stringify(tags);
})()
};
