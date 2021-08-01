let backgroundImg, issImage, spacecraftImg, sL, sR, sU;
let iss, spacecraft, hasDocked = false;

function preload() {

  backgroundImg = loadImage("Images/spacebg.jpg");
  issImage = loadImage("Images/iss.png");
  spacecraftImg = loadImage("Images/spacecraft1.png");
  sL = loadImage("Images/spacecraft3.png");
  sR = loadImage("Images/spacecraft4.png");
  sU = loadImage("Images/spacecraft2.png");

}

function setup() {

  createCanvas(800, 400);

  iss = createSprite(400, 220);
  iss.addImage(issImage);
  iss.scale = 0.8;

  spacecraft = createSprite(300, 300);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale = 0.15;
  spacecraft.x = Math.round(random(150, 500));
  //console.log(spacecraft.x)
  //console.log(spacecraft.y)

}

function draw() {

  background(backgroundImg);

  //console.log(spacecraft.x)

  if (!hasDocked) {

    //console.log("hi")

    spacecraft.addImage(spacecraftImg);

    if (keyDown(LEFT_ARROW)) {

      spacecraft.addImage(sL);
      spacecraft.x = spacecraft.x - 2;

    } else if (keyDown(RIGHT_ARROW)) {

      spacecraft.addImage(sR);
      spacecraft.x = spacecraft.x + 2;

    } else if (keyDown(DOWN_ARROW)) {

      spacecraft.addImage(sU);

    } else if(spacecraft.x >= 339 && spacecraft.x <= 349 && keyDown(UP_ARROW)) {

      //spacecraft.addImage(sR);
      spacecraft.y = spacecraft.y - 2;
    }

    if(spacecraft.y <= 280 && spacecraft.x >= 339 && spacecraft.x <= 349) {

      hasDocked = true;
      

    }

  } else if(hasDocked) {

    text("Docking Successful!",  380, 380);

  }

  drawSprites();
}