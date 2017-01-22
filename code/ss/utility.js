
var playerXOverlap = 4;
var scale = 40;
var maxStep = 0.05;

//var gravity = 30;
//var jumpSpeed = 17;
var playerXSpeed = 7;
var wobbleSpeed = 8, wobbleDist = 0.07;

var arrowCodes = {
        37: "left",             //Left-Arrow
        38: "up",               //Up-Arrow
        39: "right",            //Right-Arrow
        40: "down",             //Down-Arrow
        90: "actOne",           //Z
        88: "actTwo",           //X
        67: "actThree",         //C
        65: "charOneChange",    //A
        83: "charTwoChange",    //S
        68: "charThreeChange",  //D
        32: "jump",             //Space
        27: "pause"             //Esc
};

var results = [
  {name: "Satisfied", count: 1043, color: "lightblue"},
  {name: "Neutral", count: 563, color: "lightgreen"},
  {name: "Unsatisfied", count: 510, color: "pink"},
  {name: "No comment", count: 175, color: "silver"}
];

function flipHorizontally(context, around) {
  context.translate(around, 0);
  context.scale(-1, 1);
  context.translate(-around, 0);
}

function Vector(x, y) {
  this.x = x; this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};
Vector.prototype.times = function(factor) {
  return new Vector(this.x * factor, this.y * factor);
};

function drawText(text, size, xpos, ypos, id) {
  ctx = document.getElementById(id).getContext("2d");
  ctx.font = "bold " + size + " Arial";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(text, xpos, ypos);
}

function displayTextCenter(text, size, id) {
  ctx = document.getElementById(id).getContext("2d");
  clearCanvas(id);
  ctx.font = "bold " + size + " Arial";
  textString = text;
  textMeasure = ctx.measureText(textString);
  ctx.fillText(textString, ((canvas.width / 2) - (textMeasure.width / 2)), (canvas.height / 2) );
}

function clearPausedOnCanvas() {
  ctx = document.getElementById("UI").getContext("2d");
  clearCanvas("UI");
  textMeasure = ctx.measureText("");
  var text = "Deaths: " + stats.deaths;
  drawText(text, "0.8em", 100, 100, "UI");
}

function clearCanvas(id) {
  ctx = document.getElementById(id).getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function isNumber(ch) {
  return !isNaN(parseInt(ch));
}

function isUpperCase(ch) {
}
