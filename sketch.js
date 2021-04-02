var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var allPlayers;
var form, player, game;
var brackgroundImg;
var bg1_img, bg2_img;


function preload() {
bg1_img = loadImage("images/Formbg.png");
bg2_img = loadImage("images/Gamebg.png");
}

function setup(){
  canvas = createCanvas(1536,860);

  database = firebase.database();
  game = new Game();  
  game.getState();
  game.start();
}


function draw(){
background(bg1_img);
if(playerCount === 2){
  game.update(1);
}
if(gameState === 1){
  clear();
  game.play();
}
if(gameState === 2){
  game.end();
}
}
