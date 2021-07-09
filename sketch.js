var database;
var position;

var game, player, form;

var mygameState=0, myPlayerCount;
var gameState, playerCount;


function setup(){

  database = firebase.database();
  console.log(database);

  game = new Game();
  game.start();
  createCanvas(500,500);

  
}

function draw(){
  
  background("white");
  
}

