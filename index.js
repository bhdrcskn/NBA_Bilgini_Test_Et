//Kategorilere ayırma kısmı başlangıç
input={part1:"En Az 5 Şampiyonluk Kazanan Takımlar",part2:"En Çok 4 Şampiyonluğu Olan Takımlar",
part1values:["Boston Celtics","LA Lakers","Golden State Warriors","Chicago Bulls","	San Antonio Spurs"],
part2values:["Detroit Pistons","Miami Heat","Houston Rockets","New York Knicks","Philadelphia 76ers","Milwaukee Bucks","Atlanta Hawks","Portland Trail Blazers","Sacramento Kings","Washington Wizards","Dallas Mavericks","Cleveland Cavaliers","Toronto Raptors"]
}
//Kategorilere ayırma kısmı bitiş
result={part1values:[],part2values:[]}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // Karıştırılacak öğeler
  while (0 !== currentIndex) {

    // Kalan öğeyi seçme
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Mevcutta olanla değiştirme
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  console.log(ev.target.id);
  result[ev.target.id].push(data);
}
function populate(){
  document.getElementById("part1").innerHTML="<strong>" + input.part1 + "</strong>";
  document.getElementById("part2").innerHTML="<strong>" + input.part2 + "</strong>";
  var j = document.getElementById("options");
  var x = input.part1values;
  var y = input.part2values;
  var bin = shuffle(x.concat(y));
  for(var i=0;i<bin.length;i++){
    var ele= '<button draggable="true" ondragstart="drag(event)" class="abc"';
    ele+=' id="';
    ele+=bin[i];
    ele+='">';
    ele+=bin[i] + '</button>';
    j.innerHTML+=ele;
  }

}
function contains(myarray,ele){
  if (myarray.indexOf(ele) > -1){
    return true;
  }
  else{
    return false;
  }
}
function getscore(){
  var score=0;
  var y = input.part1values;
  var x = result.part1values;
  for(var i=0;i<y.length;i++){
    if (contains(x,y[i])){
      score+=1;
    }
  }
  y = input.part2values;
  x = result.part2values;
  for(var i=0;i<y.length;i++){
    if (contains(x,y[i])){
      score+=1;
    }
  }
  score = (score/18) * 100;
  score=score.toPrecision(4);
  document.getElementById("score").value="%"+score;
}