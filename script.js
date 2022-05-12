/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library
   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */
/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;
var spelerX = 375; // x-positie van speler
var spelerY = 670; // y-positie van speler
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */
var vijandX = 1280; // x-positie van vijand
var vijandY = 500; // y-positie van vijand
/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
if (keyIsDown(32)) {
  spelerY = spelerY - 6;
}
else {
  spelerY = spelerY + 5;
}
if (spelerY < 0) {
   spelerY = 0;
 }
if (spelerY > 670) {
   spelerY = 670;
 }



  // vijand
  if (vijandX > -50) {
    vijandX = vijandX - 3;
  }
  // kogel
};
/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
if (spelerX - vijandX <50 &&
    spelerX - vijandX > -50 &&
    spelerY - vijandY <50 &&
    spelerY - vijandY > -50) {
    console.log("botsing");
    }
  // botsing kogel tegen vijand

  // update punten en health
  var score = 0
if (spelerX - vijandX <50 &&
  spelerX - vijandX > -50 &&
  spelerY - vijandY <50 &&
  spelerY - vijandY > -50) {
  console.log("GameOver");
} else {
  score = score + 1;
} 

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
 fill('blue'); 
 rect(0,0,1280,720);
  // vijand
  fill('red');
  rect(vijandX, vijandY, 50, 50);
  fill ('white')
  ellipse (vijandX + 25, vijandY + 25, 10, 10)
  // kogel
  // speler
  fill("white");
  rect (spelerX, spelerY, 50, 50);
  
  fill("red");
  ellipse(spelerX + 25, spelerY + 25, 10, 10);
  // punten en health
};
/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};
/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}
/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  if (spelStatus === GAMEOVER) {
    fill('green');
    rect(0,0,1280,720);
  }
}
}