// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",userFun);
var matchArr = JSON.parse(localStorage.getItem("schedule")) || [];
function userFun(){
    event.preventDefault();
    var matchObj = {
        MatchNum : masaiForm.matchNum.value,
        TeamA : masaiForm.teamA.value,
        TeamB : masaiForm.teamB.value,
        Date : masaiForm.date.value,
        Venue : masaiForm.venue.value
    }
    console.log(matchObj)
   matchArr.push(matchObj);
   localStorage.setItem("schedule",JSON.stringify(matchArr));
//    window.location.href = "matches.html"
}
