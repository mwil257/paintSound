var eraser;
var bomb;
var floppy;
var distance;
var distance2;
var hide = false;
var value2 = 255;
function preload(){
  eraser = loadImage("eraser.png");
  bomb = loadImage("bomb.png");
  floppy = loadImage("savebutton.png");
}
buffer = new Tone.Buffer("clip2.wav");
buffer2 = new Tone.Buffer("type.wav");
buffer3 = new Tone.Buffer("gliss.wav");
buffer4 = new Tone.Buffer("glock.wav");
buffer5 = new Tone.Buffer("intro.wav");
buffer6 = new Tone.Buffer("dub.wav");
buffer7 = new Tone.Buffer("guirro.wav");
buffer8 = new Tone.Buffer("whistle.wav");
buffer9 = new Tone.Buffer("synth.wav");
buffer10 = new Tone.Buffer("dub.wav");
buffer11 = new Tone.Buffer("glock2.wav");
buffer12 = new Tone.Buffer("scream.wav");
buffer13 = new Tone.Buffer("melody.wav");
buffer14 = new Tone.Buffer("keys.wav");
buffer15 = new Tone.Buffer("jaw.wav");
buffer16 = new Tone.Buffer("circuit.wav");
buffer17 = new Tone.Buffer("feedback.wav");
buffer18 = new Tone.Buffer("stun.wav");
buffer19 = new Tone.Buffer("beat2.wav");
buffer20 = new Tone.Buffer("keyboard.wav");
buffer21 = new Tone.Buffer("Clip6.wav");
Tone.Buffer.on('load', function(){
    //all buffers are loaded.
})
var player2;
var loopHigh = 2;
var argOver = 3;
var argDrift = 2;
var grainHigh = 3;
var player;
var play;
var grain;
var loopX;
var loopY;
var over;
var drift;
var tune;
var x;
var y;
var state;
var value = 0;
var tip = 1;
var crusher = new Tone.BitCrusher(4).toMaster();
var player3;
function setup(){
  player = new Tone.GrainPlayer({
    "url" : buffer,
    "overlap" : 0.1,
    "grainSize" : 0.2,
    "drift" : 0,
    "playbackRate" : 1,
    "detune" : 2100,
    "loop" : true,
    "loopStart" : 0,
    "loopEnd" : 1,
    "reverse" : false,
  }).toMaster();
  player2 = new Tone.Player("Kick.wav").connect(crusher).toMaster();
  player3 = new Tone.Player("saver.wav").toMaster();
background(255);
createCanvas(windowWidth, windowHeight);
}
function draw() {
imageMode(CENTER);
distance = dist(20, 680, mouseX, mouseY);
distance2 = dist(windowWidth-20, 680, mouseX, mouseY);
if (hide = true){
image(bomb, 20, 680, 35, 35);
image(floppy, windowWidth-20, 680, 35, 35);
noStroke();
fill(0, 0, 0);
rect(0, 0, 25, 25);
fill(255, 255, 255);
imageMode(CORNER);
rect(25, 0, 25, 25);
image(eraser, 25, 0, 25, 25);
noStroke();
fill(127, 127, 127);
rect(0, 25, 25, 25);
fill(195, 195, 195);
rect(25, 25, 25, 25);
fill(136, 0, 21);
rect(0, 50, 25, 25);
fill(185, 122, 87);
rect(25, 50, 25, 25);
fill(255, 0, 0);
rect(0, 75, 25, 25);
fill(255, 174, 201);
rect(25, 75, 25, 25);
fill(255, 127, 36);
rect(0, 100, 25, 25);
fill(255, 201, 14);
rect(25, 100, 25, 25);
fill(255, 255, 0);
rect(0, 125, 25, 25);
fill(239, 228, 176);
rect(25, 125, 25, 25);
fill(34, 177, 76);
rect(0, 150, 25, 25);
fill(181, 230, 29);
rect(25, 150, 25, 25);
fill(0, 162, 232);
rect(0, 175, 25, 25);
fill(153, 217, 234);
rect(25, 175, 25, 25);
fill(63, 72, 204);
rect(0, 200, 25, 25);
fill(112, 146, 190);
rect(25, 200, 25, 25);
fill(163, 73, 164);
rect(0, 225, 25, 25);
fill(200, 191, 231);
rect(25, 225, 25, 25);
noStroke();
fill(value2);
rect(0, 250, 50, 25);
strokeWeight(1);
stroke(value);
line(0, 262, 50, 262);
noStroke();
fill(value2);
rect(0, 275, 50, 25);
strokeWeight(2);
stroke(value);
line(0, 287, 50, 287);
noStroke();
fill(value2);
rect(0, 300, 50, 25);
strokeWeight(3);
stroke(value);
line(0, 312, 50, 312);
noStroke();
fill(value2);
rect(0, 325, 50, 25);
strokeWeight(4);
stroke(value);
line(0, 339, 50, 339);
noStroke();
fill(value2);
rect(0, 350, 50, 25);
strokeWeight(5);
stroke(value);
line(0, 364, 50, 364);
strokeWeight(tip);
stroke(value);
}
if(mouseIsPressed == true){
line(mouseX, mouseY, pmouseX, pmouseY);
print(grainHigh);
if(tip == 1){
tune = map(mouseY, 0, windowHeight, 2000, 2500);
player.detune = tune;
}
if(tip == 2){
tune = map(mouseY, 0, windowHeight, 1500, 2000);
player.detune = tune;
}
if(tip == 3){
tune = map(mouseY, 0, windowHeight, 1000, 1500);
player.detune = tune;
}
if(tip == 4){
tune = map(mouseY, 0, windowHeight, 500, 1000);
player.detune = tune;
}
if(tip == 5){
tune = map(mouseY, 0, windowHeight, 0, 500);
player.detune = tune;
}
}
x = mouseX/900;
y = mouseY/900;
play = map(mouseX, 0, windowWidth, 0.5, 5);
grain = map(mouseY, 0, windowHeight, 0.1, grainHigh);
loopX = map(mouseX, 0, windowWidth, 0.1, loopHigh/2);
loopY = map(mouseY, 0, windowHeight, loopHigh/1.8, loopHigh);
over = map(mouseX, 0, windowWidth, 0.1, argOver);
player.playbackRate = play;
player.loopStart = loopX;
player.loopEnd = loopY;

}
function mouseClicked(){
  print(mouseX, mouseY);
  state = 1;
  if(state == 1){
    player.start();
  }
  if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 0 && mouseY <= 25)){
    value = color(0, 0, 0);
    value2 = 255;
    player.buffer = buffer;
  }
  if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 0 && mouseY <= 25)){
    value = color(255, 255, 255);
    value2 = 0;
    player.buffer = buffer2;
  }
  if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 25 && mouseY <= 50)){
    value = color(127, 127, 127);
        value2 = 255;
    player.buffer = buffer3;
  }
  if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 25 && mouseY <= 50)){
    value = color(195, 195, 195);
        value2 = 255;
    player.buffer = buffer4;
  }
  if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 50 && mouseY <= 75)){
    value = color(136, 0, 21);
        value2 = 255;
    player.buffer = buffer5;
  }
  if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 50 && mouseY <= 75)){
    value = color(185, 122, 87);
        value2 = 255;
    player.buffer = buffer6;
  }
  if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 75 && mouseY <= 100)){
    value = color(255, 0, 0);
        value2 = 255;
    player.buffer = buffer7;
  }
  if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 75 && mouseY <= 100)){
    value = color(255, 174, 201);
        value2 = 255;
    player.buffer = buffer8;
  }
  if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 100 && mouseY <= 125)){
    value = color(255, 127, 36);
        value2 = 255;
      player.buffer = buffer9;
  }
  if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 100 && mouseY <= 125)){
    value = color(255, 201, 14);
        value2 = 255;
      player.buffer = buffer10;
  }
  if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 125 && mouseY <= 150)){
    value = color(255, 255, 0);
        value2 = 255;
      player.buffer = buffer11;
  }
  if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 125 && mouseY <= 150)){
    value = color(239, 228, 176);
        value2 = 255;
      player.buffer = buffer12;
  }
  if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 150 && mouseY <= 175)){
    value = color(34, 177, 76);
        value2 = 255;
      player.buffer = buffer13;
  }
  if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 150 && mouseY <= 175)){
    value = color(181, 230, 29);
        value2 = 255;
      player.buffer = buffer14;
  }
  if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 175 && mouseY <= 200)){
    value = color(0, 162, 232);
        value2 = 255;
      player.buffer = buffer15;
  }
  if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 175 && mouseY <= 200)){
    value = color(153, 217, 234);
        value2 = 255;
      player.buffer = buffer16;
  }
  if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 200 && mouseY <= 225)){
    value = color(63, 72, 204);
        value2 = 255;
      player.buffer = buffer17;
  }
  if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 200 && mouseY <= 225)){
    value = color(112, 146, 190);
        value2 = 255;
      player.buffer = buffer18;
  }
  if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 225 && mouseY <= 250)){
    value = color(163, 73, 164);
        value2 = 255;
      player.buffer = buffer19;
  }
  if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 225 && mouseY <= 250)){
    value = color(200, 191, 231);
        value2 = 255;
      player.buffer = buffer20;
  }
  if ((mouseX >= 0 && mouseX <= 50) && (mouseY >= 250 && mouseY <= 275)){
    tip = 1;
  }
  if ((mouseX >= 0 && mouseX <= 50) && (mouseY >= 275 && mouseY <= 300)){
    tip = 2;
  }
  if ((mouseX >= 0 && mouseX <= 50) && (mouseY >= 300 && mouseY <= 325)){
    tip = 3;
  }
  if ((mouseX >= 0 && mouseX <= 50) && (mouseY >= 325 && mouseY <= 350)){
    tip = 4;
  }
  if ((mouseX >= 0 && mouseX <= 50) && (mouseY >= 350 && mouseY <= 375)){
    tip = 5;
  }
  if(distance < 15){
    background(255);
    player.stop();
    player2.start();
  }
  if(distance2 < 15){
    save();
    player3.start();
    player.stop();
  }
  print(tip);
  }
  function keyReleased (){
    if(key == 'h' || key == 'H'){
      hide = !hide;
    }
  }
