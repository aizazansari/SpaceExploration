function timerObject (img,x,y,v){
    this.img = img;
    this.x = x;
    this.y = y;
    this.v = v;
    this.r = 50;
    
    this.update = function(){
        this.y -= this.v
    }
    
    this.display = function(){
        image (this.img,this.x,this.y,this.r,this.r)
    }
}



function timer(){
    this.city = new timerObject(icon_city,62,20,0); 
    this.hurricane = new timerObject(icon_hurricane,62,height-70,1); 
    this.update = function(){
        this.city.update();
        this.hurricane.update();
        
        if (this.hurricane.y <= 30) {
            g.state = 'over';
        } 
 
    }
    
    this.display = function(){
        noStroke();
        fill(255);
        rect (82,40,5,this.hurricane.y+2); 
        this.city.display();
        this.hurricane.display();
    }
}