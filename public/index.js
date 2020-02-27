var realtime = new Ably.Realtime('9iS9Cg.Ikvm1w:qla3aRaBGevy2wx8');
var sendChannel = realtime.channels.get("vote-channel");
var score;
function HeroClicked(hero){
  let votes=+document.getElementById(hero).value;
  if(votes==''){
    votes=0;
  }
  document.getElementById(hero).value="";
  if(votes>0 && votes<11){
    vote(hero,votes);
  }
  else{
    alert("Range of votes (1-10)");
  }
}
function vote(score,votes){
  // console.log(score)
  // console.log(votes)
  sendChannel.publish("update", { "vote": score,"votes":votes}, errCallback);
}

function errCallback(err){
  window.alert(err.message);
}