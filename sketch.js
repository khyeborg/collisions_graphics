let enemyX, enemyY;
let enemyWidth = 50;
let enemyHeight = 50;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

let myX = 25; 
let myY = 25;
let myWidth = 50;
let myHeight = 50;
let mySpeed = 3;
let myLeft, myRight, myTop, myBottom;

let points = 0;

// graphics 
let clefairy;
let togepi;

function setup() {
    createCanvas(500, 500);
    noStroke();
    textSize(15);

    // change imageMode
    imageMode(CENTER);

    // randomly generate the location of enemy
    enemyX = random(25, 475);
    enemyY = random(150, 450);

    // load images
    clefairy = loadImage("clefairy.png");
    togepi = loadImage("togepi.png");
}

function draw() {
    // paint the background black
    background(0);

    // draw the red enemy
    fill(255, 0, 0);
    image(togepi, enemyX, enemyY, enemyWidth, enemyHeight);

    // draw yourself
    fill(0, 0, 255);
    image(clefairy, myX, myY, myWidth, myHeight);

    // if LEFT_ARROW is pressed
    if (keyIsDown(LEFT_ARROW)) {
        myX -= 3;
    }

    // if RIGHT_ARROW is pressed
    if (keyIsDown(RIGHT_ARROW)) {
        myX += 3;
    }

    // if UP_ARROW is pressed
    if (keyIsDown(UP_ARROW)) {
        myY -= 3;
    }

    // if DOWN_ARROW is pressed
    if (keyIsDown(DOWN_ARROW)) {
        myY += 3;
    }

    // restrict your character to the canvas
    if (myX <= 25) {
        myX = 25;
    }

    if (myX >= 475) {
        myX = 475;
    }

    if (myY <= 25) {
        myY = 25;
    }

    if (myY >= 475) {
        myY = 475;
    }

    // define my position 
    myLeft = myX - 25;
    myRight = myX + 25;
    myTop = myY - 25;
    myBottom = myY + 25;

    // define enemy's position 
    enemyLeft = enemyX - 25;
    enemyRight = enemyX + 25;
    enemyTop = enemyY - 25;
    enemyBottom = enemyY + 25;

    // detect collision!
    if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
        // there's no collision here - do nothing
    }

    else {
        // there's collision
        console.log("Collision!");
        fill(random(255), random(255), random(255));
        text("I'm colliding with my enemy. Ouch!", 255, 480);

        // increase points by 1
        points++;

        // generate new enemy position
        enemyX = random(25, 475);
        enemyY = random(150, 450);
    }

    fill(255);
    text("Enemies collected: " + points, 340, 25);
}


