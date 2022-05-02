// write js code here corresponding to matches.html
var matchArr = JSON.parse(localStorage.getItem("schedule"));
displayFun(matchArr);

function filteredFun(){
    console.log("clicked")
    var selected = document.querySelector("#filterVenue").value
    console.log(selected)
    
     var filteredList = matchArr.filter(function(el){
         return el.Venue == selected;
     })
     displayFun(filteredList)
    }

    var favData = JSON.parse(localStorage.getItem("favourites")) || [];
    function displayFun(data){
    document.querySelector("tbody").innerHTML = null;
    data.forEach(function(el){
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerText = el.MatchNum;
        var td2 = document.createElement("td");
        td2.innerText = el.TeamA;
        var td3 = document.createElement("td");
        td3.innerText = el.TeamB;
        var td4 = document.createElement("td");
        td4.innerText = el.Date;
        var td5 = document.createElement("td");
        td5.innerText = el.Venue;
        var td6 = document.createElement("td");
        td6.innerText = "favourites";
        td6.style.color = "blue";
        td6.style.cursor = "pointer";
        td6.addEventListener("click",function(){
            addFav(el);
        })
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
    })
    // displayFun(matchArr);
    function addFav(el){
      favData.push(el);
      localStorage.setItem("favourites",JSON.stringify(favData))
    //   window.location.href = "favourites.html"
    }
}