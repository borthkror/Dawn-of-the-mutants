// Moving the camel

/*
Determining the movement properties of the player: direction and speed;
and making the player actually move.
*/
function PlayerMovementProperties (direction, increment) {
  var xPosition = playerMain.style.top;
  xPosition = parseInt(xPosition.substring(0, xPosition.length - 2));
  var yPosition = playerMain.style.left;
  yPosition = parseInt(yPosition.substring(0, yPosition.length - 2));

  switch (direction) {
    case "up":
      playerMain.style.top = (xPosition - increment) + "px";
      break;
    case "down":
      playerMain.style.top = (xPosition + increment) + "px";
      break;
    case "left":
      playerMain.style.left = (yPosition - increment) + "px";
      playerMain.style.transform = "scaleX(1)";
      //playerMain.classList.remove("looks_right");
      //playerMain.classList.add("looks_left");
      break;
    case "right":
      playerMain.style.left = (yPosition + increment) + "px";
      playerMain.style.transform = "scaleX(-1)";
      //playerMain.classList.remove("looks_left");
      //playerMain.classList.add("looks_right");
      break;
  }
}

/*
Determining initial speed and which keypresses
*/
function MovePlayer (e) {
  var keyID = e.key;
  var speed = 20;
  if (keyID === 'w' || keyID === 'ArrowUp') {
    PlayerMovementProperties("up", speed);
    pointer = "up";
  }
  if (keyID === 's' || keyID === 'ArrowDown') {
    PlayerMovementProperties("down", speed);
    pointer = "down";
  }
  if (keyID === 'd' || keyID === 'ArrowRight') {
    PlayerMovementProperties("right", speed);
    pointer = "right"
  }
  if (keyID === 'a' || keyID === 'ArrowLeft') {
    PlayerMovementProperties("left", speed);
    pointer = "left"
  }
  //console.log(playerMain.style.top, screenHeight);
}

function DashPlayer (e) {
  var keyID = e.keyCode;
  if (keyID === 32) {
    PlayerMovementProperties(pointer, 150);
  }
}

function PlayerBounceOffWalls () {
  var xPosition = playerMain.style.top;
  xPosition = parseInt(xPosition.substring(0, xPosition.length - 2));
  var yPosition = playerMain.style.left;
  yPosition = parseInt(yPosition.substring(0, yPosition.length - 2));

  if (xPosition >= screenHeight) {
    playerMain.style.top = screenHeight + "px";
  }
  if (xPosition <= 0) {
    playerMain.style.top = "0px";
  }
  if (yPosition >= screenWidth) {
    playerMain.style.left = screenWidth + "px";
  }
  if (yPosition <= 0) {
    playerMain.style.left = "0px";
  }
}

var pointer;

var playerMain = document.getElementById("player_main");
playerMain.style.left = "500px";
playerMain.style.top = "300px";

var playerImage = document.getElementById("player_camel");

var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;

window.addEventListener("keydown", MovePlayer, false);
window.addEventListener("keydown", DashPlayer, false);
window.addEventListener("keydown", PlayerBounceOffWalls, false);
