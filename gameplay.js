function part(img,x1,x2,y1,y2,pos){
    this.state = 'rack';
    this.img = img;
    this.x1 = x1/100;
    this.y1 = y1/100;
    this.w = (x2 - x1)/100;
    this.h = (y2 - y1)/100;
    this.pos = pos;

    
    this.display = function(){
        if (this.state == 'set'){
            imageMode(CORNER);
            image (this.img,this.x1*width, this.y1*height, this.w*width, this.h*height);
        } else if (this.state == 'rack') {
            imageMode(CENTER); 
            image (this.img,.91*width, .25*height+this.pos*180, this.w*width*.3, this.h*height*.3);
            imageMode(CORNER);    
        } else if (this.state == 'move') {
            imageMode(CENTER);
            image (this.img,mouseX,mouseY, this.w*width, this.h*height); 
            imageMode(CORNER);     
        }
    }
}
 

function gameplay(){
    this.fuelsage = new part (fuelsage,45.6,52.8,15.7,74.1,0);
    this.rockets = new part (rockets,41.2,57.3,26.1,87.1,1);
    this.spacecraft = new part (spacecraft,39.5,59.1,28.2,80,2);
    this.rack = [this.fuelsage,this.rockets,this.spacecraft];
    
    this.update = function(){   
        var setCount = 0 
        for (var i = 0; i<this.rack.length; i++){
            if (this.rack[i].state == 'set'){
                setCount += 1;
            }
        }
        
        if (setCount == this.rack.length){
            g.state='success';
        }
 }  
    
    this.display = function(){
        image (game_screen,0,0,1280,720);   
        this.fuelsage.display();  
        this.rockets.display();
        this.spacecraft.display(); 
    }
}


function gameplayControls (){
    for (var i = 0; i<g.play.rack.length; i++){
        if ((g.play.rack[i].state != 'move') && collidePointRect(mouseX,mouseY,(.91*width - g.play.rack[i].w*width*.3/2),(.25*height + g.play.rack[i].pos*180 - g.play.rack[i].h*height*.3/2),g.play.rack[i].w*.3*width, g.play.rack[i].h*.3*height)){
            g.play.rack[i].state = 'move'; 
        }  
        
        if ((g.play.rack[i].state == 'move') && collidePointRect(mouseX,mouseY,g.play.rack[i].x1*width, g.play.rack[i].y1*height, g.play.rack[i].w*width, g.play.rack[i].h*height)){
            g.play.rack[i].state = 'set'; 
        } 

    }           
}

