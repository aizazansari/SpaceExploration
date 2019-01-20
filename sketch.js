function preload(){
//    font = loadFont('Gotham-Light.otf');
    loadCount = 0;
    font = "Poppins";
    
    //screens
    main = loadImage ('images/main.png');
    city = loadImage ('images/city.png');
    hurricane = loadImage ('images/hurricane.png');
    game_screen = loadImage ('images/game_screen.png');
    gameover_screen = loadImage ('images/gameover_screen.png');
    
    //info box
    info = loadImage ('images/info-box.png');

    //timer icons
    icon_city = loadImage ('images/icon_city.png');
    icon_hurricane = loadImage ('images/icon_hurricane.png');

    //rocket
    rockets = loadImage ('images/rockets.png');
    spacecraft = loadImage ('images/spacecraft.png');
    fuelsage = loadImage ('images/fuelsage.png');    
    
    //blast_off
    r01 = loadImage ('images/rocket-f01.png');
    r02 = loadImage ('images/rocket-f02.png');
    r03 = loadImage ('images/rocket-f03.png');    
    r04 = loadImage ('images/rocket-f02.png');
    blastoff_foreground = loadImage ('images/blast_off_fg.png'); 
    blastoff_background = loadImage ('images/blast_off_bg.png');
    
    //aerial 
    aerial = loadImage ('images/aerial.gif');
}

function loading() {
    loadCount +=1;
    loadText = '' + loadCount + "/19 resources loaded";
    text (100,100);
}
 
function setup(){
    var cnv = createCanvas(1280, 720);
    cnv.parent("canvas-holder");
    g = new game(); 
}

function draw() {
    background (0);
    g.update();
    g.display();
}

function keyPressed() {
     
} 

function mousePressed() {
    sControl();
    gameplayControls ();
}