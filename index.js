var arrGame = [];
var arrYou = [];
var numberOfclicks = 0;

var arrColors = ["red", "green", "yellow", "blue"];

$(document).on("keypress", function(event) {

  if (event.key == "a") {
    nextGameSequence();
    console.log(arrGame);
    $("#level-title").text("Level 1");
  } else {
    $("#level-title").text("Wrong key pressed");
  }
  });


$(":button").click(function(event) {
  arrYou.push(this.className);
  checkSequence();
  var audio = new Audio("sounds/" + this.className + ".mp3");
  audio.play();
  $("body").css("background-color", "black");
  setTimeout(function() {
    $("body").css("background-color", "#00af91")
  }, 200);
  console.log("ArrayYou:" + arrYou);
});


function checkSequence() {

  if (arrYou.length == arrGame.length)
  {
    start2();
   setTimeout(function(){  nextGameSequence();}, 1000);
    arrYou.splice(0, arrYou.length);
  } else {
    console.log("continue");
  }
}


function nextGameSequence() {
  var d = Math.floor((Math.random() * 4));
  arrGame.push(arrColors[d]);
  console.log("Array Game:" + arrGame);
  $("button." + arrColors[d]).css("visibility", "hidden");

  setTimeout(function() {
    $("button." + arrColors[d]).css("visibility", "visible")
  }, 200);
}




function start2() {
  var i = arrGame.length;
  for (var n = 0; n < i; n++) {
    if (arrYou[n] === arrGame[n]) {
      $("h1").text("Level" + " " + arrGame.length);
    } else if (arrYou[n] != arrGame[n]) {
      $("h1").text("Game Over");
    }
  }
}






// $("#red").on("click", function MakeSound()

//
//
// $("#yellow").on("click", function MakeSound()
//   {var audio1 = new Audio("sounds/yellow.mp3");
//   audio1.play();
//   $("body").css("background-color","red");
//   setTimeout(function(){$("body").css("background-color", "#011F3F")},200);
// });
// $("#green").on("click", function MakeSound()
//   {var audio2 = new Audio("sounds/green.mp3");
//   audio2.play();
//   $("body").css("background-color","red");
//   setTimeout(function(){$("body").css("background-color", "#011F3F")},200);
//
// });
//
// $("#blue").on("click", function MakeSound()
//   {var audio3 = new Audio("sounds/blue.mp3");
//   audio3.play();
//   $("body").css("background-color","red");
//   setTimeout(function(){$("body").css("background-color", "#011F3F")},200);
//
// });
