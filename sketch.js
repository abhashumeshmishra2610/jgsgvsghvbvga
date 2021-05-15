var gameState = "storyTelling";
var score = 0;
var collections = 0;

function preload(){
  StoryBG = loadImage("hujk.png");
  GameLogo = loadImage("logo.png");


  S1 = loadImage("story1.jpg");
  S2 = loadImage("story2.png");
  S3 = loadImage("story3.png");
  S4 = loadImage("story4.png");
  S5 = loadImage("story5.png");
  S6 = loadImage("story6.png");
  S7 = loadImage("story7.png");
  S8 = loadImage("story8.png");
  S9 = loadImage("story9.png");
  S10 = loadImage("story10.png");
  S11 = loadImage("story11.png");
  S12 = loadImage("story12.png");
  S13 = loadImage("story13.png");
  S14 = loadImage("story14.png");
  S15 = loadImage("story15.png");
  S16 = loadImage("story16.png");
  S17 = loadImage("story17.png");

  S91 = loadAnimation("story91.jpg","story92.jpg","story93.jpg","story94.jpg");
  S95 = loadImage("story95.png");
  GWolf2 = loadImage("motion4.png");
  GWolf = loadAnimation("motion1.png","motion2.png","motion3.png","motion4.png","motion5.png","motion6.png","motion7.png","motion8.png","motion9.png","motion10.png","motion11.png","motion12.png");
  COIN = loadAnimation("coin.png","coin copy.png","coin copy 4.png","coin copy 3.png","coin copy 2i.png","coin copy 2.png");
  GodZomi2 = loadImage("God Zomi2.png"); 
  TheSword2 = loadImage("The Sword2.png");
  RedDiamond2 = loadImage("Red Diamond2.png");
  MainText = loadImage("text1.png");
  MainText3 = loadImage("text3.png");
  MainText4 = loadImage("text4.png");
  MainTexti = loadImage("text.png");
  SCORE = loadImage("score.png");
  REFILE1 = loadImage("liveG.png");
  REFILE3 = loadImage("liveY.png");
  REFILE5 = loadImage("liveO.png");
  REFILE8 = loadImage("liveR.png");

  Line1 = loadImage("line1.png");
  Line2 = loadImage("line2.png");
  Line3 = loadImage("line3.png");
  Line4 = loadImage("line4.png");
  Line5 = loadImage("line5.png");
  Line6 = loadImage("line6.png");
  Line7 = loadImage("line7.png");
  Line8 = loadImage("line8.png");
  Line9 = loadImage("line9.png");
  Line10 = loadImage("line10.png");
  Line11 = loadImage("line11.png");
  Line12 = loadImage("line12.png");
  Line13 = loadImage("line13.png");
  Line14 = loadImage("line14.png");
  Line15 = loadImage("line15.png");
  Line16 = loadImage("line16.png");

  Skip = loadImage("line18.png");


  BGSound = loadSound("hiphop.mp3");
  BG2 = loadSound("bg.mp3");
  Sound1 = loadSound("so2.mp3");
  Sound2 = loadSound("so3.mp3");
  Sound3 = loadSound("so4.mp3");
  Sound4 = loadSound("so7.mp3");
  Sound5 = loadSound("so5.mp3");
  Sound6 = loadSound("so6.mp3");
  Sound7 = loadSound("so8.mp3");
  Sound8 = loadSound("so14.mp3");
  Sound9 = loadSound("so9.mp3");
  Sound10 = loadSound("so11.mp3");
  Sound11 = loadSound("so10.mp3");
  Sound12 = loadSound("so12.mp3");
  Sound13 = loadSound("so13.mp3");
  Sound14 = loadSound("so15.mp3");
  Sound15 = loadSound("so16.mp3");
  Sound16 = loadSound("so17.mp3");

  BG3 = loadImage("e.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  BGSound.loop();
  
  BG = createSprite(windowWidth,windowHeight);
  BG.addImage(StoryBG);
  BG.scale = 900;

  gameLogo = createSprite(height/2+310,width/2-280,width,50);
  gameLogo.addImage(GameLogo);
  gameLogo.scale = 1.1;

  Bg = createSprite(width/2,height-660);
  Bg.addImage(BG3);
  Bg.scale = 1;
  Bg.visible = false; 
  Bg.velocityX = -20;


  line2 = createSprite(height/2+1300,width/2-280,10,90000);
  line2.velocityX = -22;
  line2.visible = false;

  l2 = createSprite(height/2-400,width/2-280,10,90000);
  l2.visible = false;

  line3 = createSprite(height/2+1300,width/2-280,10,90000);
  line3.velocityX = 0;
  line3.visible = false;

  l3 = createSprite(height/2-400,width/2-280,10,90000);
  l3.visible = false;

  line4 = createSprite(height/2+1300,width/2-280,10,90000);
  line4.velocityX = 0;
  line4.visible = false;

  l4 = createSprite(height/2-400,width/2-280,10,90000);
  l4.visible = false;

  line5 = createSprite(height/2+1300,width/2-280,10,90000);
  line5.velocityX = 0;
  line5.visible = false;

  l5 = createSprite(height/2-400,width/2-280,10,90000);
  l5.visible = false;

  line6 = createSprite(height/2+1300,width/2-280,10,90000);
  line6.velocityX = 0;
  line6.visible = false;

  l6 = createSprite(height/2-400,width/2-280,10,90000);
  l6.visible = false;

  line7 = createSprite(height/2+1300,width/2-280,10,90000);
  line7.velocityX = 0;
  line7.visible = false;

  l7 = createSprite(height/2-400,width/2-280,10,90000);
  l7.visible = false;

  line8 = createSprite(height/2+1300,width/2-280,10,90000);
  line8.velocityX = 0;
  line8.visible = false;

  l8 = createSprite(height/2-400,width/2-280,10,90000);
  l8.visible = false;

  line9 = createSprite(height/2+1300,width/2-280,10,90000);
  line9.velocityX = 0;
  line9.visible = false;

  l9 = createSprite(height/2-400,width/2-280,10,90000);
  l9.visible = false;

  line10 = createSprite(height/2+1300,width/2-280,10,90000);
  line10.velocityX = 0;
  line10.visible = false;

  l10 = createSprite(height/2-400,width/2-280,10,90000);
  l10.visible = false;
   
  line11 = createSprite(height/2+1300,width/2-280,10,90000);
  line11.velocityX = 0;
  line11.visible = false;

  l11 = createSprite(height/2-400,width/2-280,10,90000);
  l11.visible = false;

  line12 = createSprite(height/2+1300,width/2-280,10,90000);
  line12.velocityX = 0;
  line12.visible = false;

  l12 = createSprite(height/2-400,width/2-280,10,90000);
  l12.visible = false;

  line13 = createSprite(height/2+1300,width/2-280,10,90000);
  line13.velocityX = 0;
  line13.visible = false;

  l13 = createSprite(height/2-400,width/2-280,10,90000);
  l13.visible = false;

  line14 = createSprite(height/2+1300,width/2-280,10,90000);
  line14.velocityX = 0;
  line14.visible = false;

  l14 = createSprite(height/2-400,width/2-280,10,90000);
  l14.visible = false;

  line15 = createSprite(height/2+1300,width/2-280,10,90000);
  line15.velocityX = 0;
  line15.visible = false;

  l15 = createSprite(height/2-400,width/2-280,10,90000);
  l15.visible = false;

  line16 = createSprite(height/2+1300,width/2-280,10,90000);
  line16.velocityX = 0;
  line16.visible = false;

  l16 = createSprite(height/2-400,width/2-280,10,90000);
  l16.visible = false;

  line17 = createSprite(height/2+1300,width/2-280,10,90000);
  line17.velocityX = 0;
  line17.visible = false;

  l17 = createSprite(height/2-400,width/2-280,10,90000);
  l17.visible = false;

  line18 = createSprite(height/2+1300,width/2-280,10,90000);
  line18.velocityX = 0;
  line18.visible = false;

  l18 = createSprite(height/2-400,width/2-280,10,90000);
  l18.visible = false;

  line19 = createSprite(height/2+1300,width/2-280,10,90000);
  line19.velocityX = 0;
  line19.visible = false;

  l19 = createSprite(height/2-400,width/2-280,10,90000);
  l19.visible = false;

  line20 = createSprite(height/2+1300,width/2-280,10,90000);
  line20.velocityX = 0;
  line20.visible = false;

  l20 = createSprite(height/2-400,width/2-280,10,90000);
  l20.visible = false;

  line21 = createSprite(height/2+1300,width/2-280,10,90000);
  line21.velocityX = 0;
  line21.visible = false;

  l21 = createSprite(height/2-400,width/2-280,10,90000);
  l21.visible = false;

  line22 = createSprite(height/2+1300,width/2-280,10,90000);
  line22.velocityX = 0;
  line22.visible = false;

  l22 = createSprite(height/2-400,width/2-280,10,90000);
  l22.visible = false;

  line23 = createSprite(height/2+1300,width/2-280,10,90000);
  line23.velocityX = 0;
  line23.visible = false;

  l23 = createSprite(height/2-400,width/2-280,10,90000);
  l23.visible = false;

  line24 = createSprite(height/2+1300,width/2-280,10,90000);
  line24.velocityX = 0;
  line24.visible = false;

  l24 = createSprite(height/2-400,width/2-280,10,90000);
  l24.visible = false;

  line25 = createSprite(height/2+1300,width/2-280,10,90000);
  line25.velocityX = 0;
  line25.visible = false;

  l25 = createSprite(height/2-400,width/2-280,10,90000);
  l25.visible = false;






  LINE1 = createSprite(height/2+310,width/2-20,width,50);
  LINE1.addImage(Line1);
  LINE1.scale = 0.5;
  LINE1.visible = false;

  LINE2 = createSprite(height/2+310,width/2-20,width,50);
  LINE2.addImage(Line2);
  LINE2.scale = 0.5;
  LINE2.visible = false;

  LINE3 = createSprite(height/2+310,width/2-20,width,50);
  LINE3.addImage(Line3);
  LINE3.scale = 0.5;
  LINE3.visible = false;

  LINE4 = createSprite(height/2+310,width/2-20,width,50);
  LINE4.addImage(Line4);
  LINE4.scale = 0.5;
  LINE4.visible = false;

  LINE5 = createSprite(height/2+310,width/2-20,width,50);
  LINE5.addImage(Line5);
  LINE5.scale = 0.5;
  LINE5.visible = false;

  LINE6 = createSprite(height/2+310,width/2-20,width,50);
  LINE6.addImage(Line6);
  LINE6.scale = 0.5;
  LINE6.visible = false;

  LINE7 = createSprite(height/2+340,width/2-20,width,50);
  LINE7.addImage(Line7);
  LINE7.scale = 0.5;
  LINE7.visible = false;

  LINE9 = createSprite(height/2+340,width/2-20,width,50);
  LINE9.addImage(Line9);
  LINE9.scale = 0.5;
  LINE9.visible = false;

  LINE10 = createSprite(height/2+340,width/2-20,width,50);
  LINE10.addImage(Line10);
  LINE10.scale = 0.5;
  LINE10.visible = false;

  LINE11 = createSprite(height/2+340,width/2-20,width,50);
  LINE11.addImage(Line11);
  LINE11.scale = 0.5;
  LINE11.visible = false;

  LINE12 = createSprite(height/2+340,width/2-20,width,50);
  LINE12.addImage(Line12);
  LINE12.scale = 0.5;
  LINE12.visible = false;

  LINE13 = createSprite(height/2+340,width/2-20,width,50);
  LINE13.addImage(Line13);
  LINE13.scale = 0.5;
  LINE13.visible = false;

  LINE14 = createSprite(height/2+340,width/2-20,width,50);
  LINE14.addImage(Line14);
  LINE14.scale = 0.5;
  LINE14.visible = false;
  
  LINE15 = createSprite(height/2+340,width/2-20,width,50);
  LINE15.addImage(Line15);
  LINE15.scale = 0.5;
  LINE15.visible = false;

  LINE16 = createSprite(height/2+340,width/2-20,width,50);
  LINE16.addImage(Line16);
  LINE16.scale = 0.5;
  LINE16.visible = false;



  

  ST1 = createSprite(height/2+310,width/2-330,width,50);
  ST1.addImage(S1);
  ST1.scale = 0.3;
  ST1.visible = false;

  ST2 = createSprite(height/2+310,width/2-330,width,50);
  ST2.addImage(S2);
  ST2.scale = 1.1;
  ST2.visible = false;

  ST3 = createSprite(height/2+310,width/2-330,width,50);
  ST3.addImage(S3);
  ST3.scale = 1.1;
  ST3.visible = false;

  ST4 = createSprite(height/2+310,width/2-330,width,50);
  ST4.addImage(S4);
  ST4.scale = 1.1;
  ST4.visible = false;

  ST5 = createSprite(height/2+310,width/2-330,width,50);
  ST5.addImage(S5);
  ST5.scale = 1.1;
  ST5.visible = false;

  ST6 = createSprite(height/2+310,width/2-330,width,50);
  ST6.addImage(S6);
  ST6.scale = 1.1;
  ST6.visible = false;

  LINE8 = createSprite(height/2+340,width/2-20,width,50);
  LINE8.addImage(Line8);
  LINE8.scale = 0.5;
  LINE8.visible = false;

  ST7 = createSprite(height/2+310,width/2-330,width,50);
  ST7.addImage(S7);
  ST7.scale = 1.1;
  ST7.visible = false;

  ST8 = createSprite(height/2+310,width/2-330,width,50);
  ST8.addImage(S8);
  ST8.scale = 1.1;
  ST8.visible = false;

  ST9 = createSprite(height/2+310,width/2-330,width,50);
  ST9.addImage(S9);
  ST9.scale = 1.1;
  ST9.visible = false;

  ST10 = createSprite(height/2+310,width/2-330,width,50);
  ST10.addImage(S95);
  ST10.scale = 1.1;
  ST10.visible = false;

  ST11 = createSprite(height/2+310,width/2-330,width,50);
  ST11.addAnimation("Wolf Jumping",S91);
  ST11.scale = 0.2;
  ST11.visible = false;
  
  ST12 = createSprite(height/2+310,width/2-330,width,50);
  ST12.addImage(S10);
  ST12.scale = 1.1;
  ST12.visible = false;

  ST13 = createSprite(height/2+310,width/2-330,width,50);
  ST13.addImage(S11);
  ST13.scale = 1.1;
  ST13.visible = false;
 
  ST14 = createSprite(height/2+310,width/2-330,width,50);
  ST14.addImage(S12);
  ST14.scale = 1.1;
  ST14.visible = false;

  ST15 = createSprite(height/2+310,width/2-330,width,50);
  ST15.addImage(S13);
  ST15.scale = 1.1;
  ST15.visible = false;

  ST16 = createSprite(height/2+310,width/2-330,width,50);
  ST16.addImage(S14);
  ST16.scale = 1.1;
  ST16.visible = false;

  ST17 = createSprite(height/2+310,width/2-330,width,50);
  ST17.addImage(S15);
  ST17.scale = 1.1;
  ST17.visible = false;

  ST18 = createSprite(height/2+310,width/2-330,width,50);
  ST18.addImage(S16);
  ST18.scale = 1.1;
  ST18.visible = false;

  ST19 = createSprite(height/2+310,width/2-330,width,50);
  ST19.addImage(S17);
  ST19.scale = 1.1;
  ST19.visible = false;

  SKIP = createSprite(height/2+340,width/2-20,width,50);
  SKIP.addImage(Skip);
  SKIP.scale = 0.7;

  GoodWolf = createSprite(height/2-180,width/2+20,width,50);
  GoodWolf.addAnimation("Running Good Wolf",GWolf);
  GoodWolf.addAnimation("Jumping Good Wolf",GWolf2);
  GoodWolf.scale = 1.4;
  GoodWolf.visible = false;

  invisibleGround = createSprite(width/2,height+30,width,125);
  invisibleGround.visible = false;

  MT = createSprite(width/2,height-70,width,125);
  MT.addImage(MainText);
  MT.scale = 0.7;
  MT.visible = false;

  S = createSprite(width/2-630,height-780,width,125);
  S.addImage(SCORE);
  S.scale = 0.1;
  S.visible = false;

  GZ = createSprite(width/2-590,height-720,width,125);
  GZ.addImage(MainText3);
  GZ.scale = 0.5;
  GZ.visible = false;

  TS = createSprite(width/2-603,height-645,width,125);
  TS.addImage(MainText4);
  TS.scale = 0.4;
  TS.visible = false;

  RD = createSprite(width/2-603,height-565,width,125);
  RD.addImage(MainTexti);
  RD.scale = 0.4;
  RD.visible = false;

  Refile = createSprite(displayHeight/2+930,displayWidth/2-680,width,50);
  Refile.addImage(REFILE1);
  Refile.scale = 0.5;
  Refile.visible = false;

  Refile2 = createSprite(displayHeight/2+880,displayWidth/2-680,width,50);
  Refile2.addImage(REFILE1);
  Refile2.scale = 0.5;
  Refile2.visible = false;

  Refile3 = createSprite(displayHeight/2+830,displayWidth/2-680,width,50);
  Refile3.addImage(REFILE3);
  Refile3.scale = 0.5;
  Refile3.visible = false;

  Refile4 = createSprite(displayHeight/2+780,displayWidth/2-680,width,50);
  Refile4.addImage(REFILE3);
  Refile4.scale = 0.5;
  Refile4.visible = false;

  Refile5 = createSprite(displayHeight/2+730,displayWidth/2-680,width,50);
  Refile5.addImage(REFILE5);
  Refile5.scale = 0.5;
  Refile5.visible = false;

  Refile6 = createSprite(displayHeight/2+680,displayWidth/2-680,width,50);
  Refile6.addImage(REFILE5);
  Refile6.scale = 0.5;
  Refile6.visible = false;

  Refile7 = createSprite(displayHeight/2+630,displayWidth/2-680,width,50);
  Refile7.addImage(REFILE8);
  Refile7.scale = 0.5;
  Refile7.visible = false;

  Refile8 = createSprite(displayHeight/2+580,displayWidth/2-680,width,50);
  Refile8.addImage(REFILE8);
  Refile8.scale = 0.5;
  Refile8.visible = false;


  GZ2 = createSprite(width/2-460,height-720,width,125);
  GZ2.addImage(GodZomi2);
  GZ2.scale = 0.3;
  GZ2.visible = false;

  TS2 = createSprite(width/2-490,height-645,width,125);
  TS2.addImage(TheSword2);
  TS2.scale = -0.3;
  TS2.visible = false;

  RD2 = createSprite(width/2-470,height-560,width,125);
  RD2.addImage(RedDiamond2);
  RD2.scale = 0.2;
  RD2.visible = false;

  line26 = createSprite(height/2+1300,width/2-280,10,90000);
  line26.velocityX = 0;
  line26.visible = false;

  l26 = createSprite(height/2-400,width/2-280,10,90000);
  l26.visible = false;

  CoinsGroup = new Group();

}

function draw() {  
  background(0);

if(gameState === "storyTelling"){
  if(line2.isTouching(l2)){
    gameLogo.destroy();
    LINE1.visible = true;
    SKIP.velocityX = -10000;
    Sound1.play();
    line3.velocityX = -6;
    line2.destroy();
    l2.destroy();
 }

 if(line3.isTouching(l3)){
    Sound1.stop();
    LINE2.visible = true;
    LINE1.destroy();
    Sound2.play();
    line4.velocityX = -10;
    line3.destroy();
    l3.destroy();
 }

 if(line4.isTouching(l4)){
   LINE3.visible = true;
   Sound2.stop();
   ST1.visible = true;
   LINE2.destroy();
   Sound3.play();
   line5.velocityX = -9;
   line4.destroy();
   l4.destroy();
 }

 if(line5.isTouching(l5)){
    ST1.destroy();
    LINE3.destroy();
    ST2.visible = true;
    LINE4.visible = true;
    line6.velocityX = -9;
    Sound4.play();
    line5.destroy();
    l5.destroy();
 }

 if(line6.isTouching(l6)){
    ST2.destroy();
    Sound4.stop();
    LINE4.destroy();
    LINE5.visible = true;
    ST3.visible = true;
    line6.destroy();
    line7.velocityX = -5;
    l6.destroy();
    Sound5.play();
 }

 if(line7.isTouching(l7)){
    LINE5.destroy();
    ST3.destroy();
    LINE6.visible = true;
    ST4.visible = true;
    line7.destroy();
    l7.destroy();
    line8.velocityX = -6;
    Sound5.stop();
    Sound6.play();
 }

 if(line8.isTouching(l8)){
   line8.destroy();
   l8.destroy();
   Sound6.stop();
   LINE6.destroy();
   ST4.destroy();
   LINE7.visible = true;
   ST5.visible = true;
   BGSound.stop();
   line9.velocityX = -10;
   BG2.loop();
   Sound7.play();
 }

 if(line9.isTouching(l9)){
   line9.destroy();
   l9.destroy();
   LINE7.destroy();
   ST5.destroy();
   LINE8.visible = true;
   ST6.visible = true;
   line10.velocityX = -10;
   Sound7.stop();
   Sound8.play();
 }

 if(line10.isTouching(l10)){
   line10.destroy();
   l10.destroy();
   LINE9.visible = true;
   ST7.visible = true;
   LINE8.destroy();
   ST6.destroy();
   line11.velocityX = -9;
   Sound8.stop();
   Sound9.play();
 }
    
 if(line11.isTouching(l11)){
   line11.destroy();
   l11.destroy();
   LINE9.destroy();
   Sound9.stop();
   line12.velocityX = -9;
   Sound10.play();
   LINE10.visible = true;
 }

 if(line12.isTouching(l12)){
   line12.destroy();
   l12.destroy();
   ST7.destroy();
   LINE10.destroy();
   ST8.visible = true;
   line13.velocityX = -9;
   LINE11.visible = true;
   Sound11.play();
   Sound10.stop();
 }
   
 if(line13.isTouching(l13)){
   line13.destroy();
   l13.destroy();
   ST8.destroy();
   LINE11.destroy();
   LINE12.visible = true;
   line14.velocityX = -16;
   ST9.visible = true;
   Sound11.stop();
   Sound12.play();
 }

 if(line14.isTouching(l14)){
   line14.destroy();
   l14.destroy();
   ST9.destroy();
   LINE12.destroy();
   ST10.visible = true;
   LINE13.visible = true;
   line15.velocityX = -12;
   Sound12.stop();
   Sound13.play();
 }

 if(line15.isTouching(l15)){
   line15.destroy();
   l15.destroy();
   ST10.destroy();
   LINE13.destroy();
   line16.velocityX = -12;
   ST11.visible = true;
 }
 
 if(line16.isTouching(l16)){
   line16.destroy();
   l16.destroy();
   ST11.destroy();
   ST12.visible = true;
   line17.velocityX = -13;
   LINE14.visible = true;
   Sound14.play();
 }

 if(line17.isTouching(l17)){
   line17.destroy();
   l17.destroy();
   LINE14.destroy();
   LINE15.visible = true;
   line18.velocityX = -13;
   Sound14.stop();
   Sound15.play();
 }

 if(line18.isTouching(l18)){
    line18.destroy();
    l18.destroy();
    LINE15.destroy();
    ST12.destroy();
    LINE16.visible = true;
    line19.velocityX = -25;
    ST13.visible = true;
    Sound15.stop();
    Sound16.play();
 }
   
 if(line19.isTouching(l19)){
   line19.destroy();
   l19.destroy();
   ST14.visible = true;
   ST13.destroy();
   line20.velocityX = -30;
   LINE16.destroy();
 }

 if(line20.isTouching(l20)){
    line20.destroy();
    l20.destroy();
    ST14.destroy();
    line21.velocityX = -30;
    ST15.visible = true;
 }

 if(line21.isTouching(l21)){
   line21.destroy();
   l21.destroy();
   ST15.destroy();
   line22.velocityX = -30;
   ST16.visible = true;
 }

 if(line22.isTouching(l22)){
   line22.destroy();
   l22.destroy();
   ST16.destroy();
   line23.velocityX = -30;
   ST17.visible = true;
 }

 if(line23.isTouching(l23)){
   line23.destroy();
   l23.destroy();
   ST17.destroy();
   line24.velocityX = -30;
   ST18.visible = true;
 }

 if(line24.isTouching(l24)){
   line24.destroy();
   l24.destroy();
   ST18.destroy();
   line25.velocityX = -30;
   ST19.visible = true;
 }

 if(line25.isTouching(l25)){
  line25.destroy();
  l25.destroy();
  line26.velocityX = -15;
  ST19.destroy();
  gameState = "level1";
}

if(mousePressedOver(SKIP)){
  gameState = "level1";
  BGSound.stop();
  line26.velocityX = -15;
  gameLogo.destroy();
  SKIP.destroy();
  LINE1.destroy();
  LINE2.destroy();
  LINE3.destroy();
  LINE4.destroy();
  LINE5.destroy();
  LINE6.destroy();
  LINE7.destroy();
  LINE8.destroy();
  LINE9.destroy();
  LINE10.destroy();
  LINE11.destroy();
  LINE12.destroy();
  LINE13.destroy();
  LINE14.destroy();
  LINE15.destroy();
  LINE16.destroy();

  ST1.destroy();
  ST2.destroy();
  ST3.destroy();
  ST4.destroy();
  ST5.destroy();
  ST6.destroy();
  ST7.destroy();
  ST8.destroy();
  ST9.destroy();
  ST10.destroy();
  ST11.destroy();
  ST12.destroy();
  ST13.destroy();
  ST14.destroy();
  ST15.destroy();
  ST16.destroy();
  ST17.destroy();
  ST18.destroy();
  ST19.destroy();

}



}
  

if(gameState === "level1"){
   GoodWolf.visible = true;
   //Coin.velocityX = -20;
   Bg.visible = true; 
   MT.visible = true;
   Refile.visible = true;
   Refile2.visible = true;
   Refile3.visible = true;
   Refile4.visible = true;
   Refile5.visible = true;
   Refile6.visible = true;
   Refile7.visible = true;
   Refile8.visible = true;
   GZ2.visible = true;
   GZ.visible = true;
   TS2.visible = true;
   TS.visible = true;
   RD2.visible = true;
   RD.visible = true;
   S.visible = true;
   if(Bg.x<0){
      Bg.x = width/2+300;
   }

   if(keyWentDown("space")&& GoodWolf.y >= 100) {
    GoodWolf.changeAnimation("Jumping Good Wolf",GWolf2);
    GoodWolf.velocityY = -12; 
  } 

  if(keyWentUp("space")){
     GoodWolf.changeAnimation("Running Good Wolf",GWolf);
  }

  GoodWolf.velocityY = GoodWolf.velocityY + 0.8;

  spawnCoins();
  
}

  

  if(CoinsGroup.isTouching(GoodWolf)){
     CoinsGroup.destroyEach();
     score = score+5;
  }

  

GoodWolf.collide(invisibleGround);
drawSprites();

//fill("white");
 //strokeWeight(3);
 //textSize(60);
 //text("Score :"+score,width/2-630,height-780);


if(line26.isTouching(l26)){
  MT.destroy();
}
  
}

function spawnCoins(){
   if(frameCount%170 === 0){
    var Coin = createSprite(width,height/2);
    Coin.addAnimation("coins",COIN);
    Coin.scale = 0.7;
    Coin.visible = true;
    Coin.velocityX = -9;
    Coin.y = Math.round(random(height/2-200,height-150));

    Coin.lifetime = width/9;

    CoinsGroup.add(Coin);
   }

}