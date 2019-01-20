function sIntro() {
    this.update = function(){
        
    }
    
    this.display = function(){
        image (main,0,0,1280,720);

        fill (0);
        
        textFont(font)
        textSize(30);
        textAlign(CENTER, CENTER);
        text ('Mission: Hurricane Swirly',width/2,height*.8);
        textSize (20);
        text ('Play Now',width/2,height*.9); 
    } 
}

function sHurricane() {
    this.t = 500;
     
    this.update = function(){
        if (this.t!=0){this.t -= 20;}
        
    }
    
    this.display = function(){
        image (hurricane,0,0,1280,720); 
        imageMode(CENTER);
        image (info, width/2 - this.t, height/2, 600, 337);
        imageMode(CORNER);     
        
        fill(255);
        
        if (this.t == 0){
            textFont(font);
            textSize(30);
            textAlign(CENTER, CENTER);
            text('A hurricane which can cause', width/2, height/2-10-50);
            text('massive destruction is ', width/2, height/2-10);
            text('heading towards the city', width/2, height/2-10+50);     
        }
        
        //reference play now button 
        //ellipse (width/2,height/2+112,55,55);
        
//        console.log (collidePointEllipse(mouseX,mouseY,width/2,height/2+112,55,55));
    }     
}

function sCity() {
    this.t = 500;
    this.update = function(){ 
        if (this.t!=0){this.t -= 20;}
    } 
    
    this.display = function(){
        image (city,0,0,1280,720); 
        imageMode(CENTER);
        image (info, width/2 - this.t, height/2, 600, 337);            
        imageMode(CORNER); 
        
        fill(255);

        if (this.t == 0){
            textFont(font);
            textSize(30);
            text('Meanwhile in the city, no one', width/2, height/2-10-50);
            text('knows about the hurricane', width/2, height/2-10);
            text('there is no satellite', width/2, height/2-10+50);     
        }
    } 
}


function sSuccess() {    
    this.t = 0;
    this.rSize = 550;
    this.speed = 3;  
    
    this.update = function(){
        this.t +=this.speed;
    } 
    
    this.display = function(){
        image (blastoff_background,0,0,1280,720); 
        
        
        imageMode(CENTER);
        
        if (this.t % 4 == 0){
            image (r01,width/2,height/2 - this.t,this.rSize,this.rSize);  
        } else if (this.t % 4 == 1){
            image (r02,width/2,height/2 - this.t,this.rSize,this.rSize);  
        } else if (this.t % 4 == 2){
            image (r03,width/2,height/2 - this.t,this.rSize,this.rSize);  
        } else if (this.t % 4 == 3){
            image (r04,width/2,height/2 - this.t,this.rSize,this.rSize);  
        } 
         
        imageMode(CORNER); 
          
        
        image (blastoff_foreground,0,0,1280,720); 

        fill (0);
        textFont(font)
        textSize(40);
        
        textAlign(CENTER, CENTER);
        text ('Blast off was a success!!!',width/2,height*.85); 
        
 
        if (height/2 - this.t < -this.rSize/3){
            image (aerial,0,-200,1280,1000);
            fill (255);
            textFont(font);
            textSize(30);
            text('Satellite sent this image', width*.2, height/2+200-40);
            text('and the city was evacuated', width*.2, height/2+200);
            text('YOU SAVED THE CITY!!!', width*.2, height/2+200+40);  
            
        }
 
    }  
    
}

function sOver() {    
    this.update = function(){       
    } 
    
    this.display = function(){
        image (gameover_screen,0,0,1280,720);
        fill (255);
        textFont(font);
        textSize(40);
        text ('Game Over',width*.65,height*.3); 
        textSize (25);
        text ('The city was destroyed',width*.65,height*.35);      
    } 
    
}

function sControl(){
    if (g.state == 'new'){
        if(mouseX>width/2-50 && mouseX<width/2+50 && mouseY>height*.89 && mouseY<height*.89+20){
            g.state = 'hurricane';
        } 
    } else if (g.state == 'hurricane') {
        if (collidePointEllipse(mouseX,mouseY,width/2,height/2+112,55,55)){ 
            g.state = 'city';
            }  
    } else if (g.state == 'city') {
        if (collidePointEllipse(mouseX,mouseY,width/2,height/2+112,55,55)){ 
            g.state = 'play';
        }  
    }
}  
