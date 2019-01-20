

function game() {
    this.state = 'new';
    this.screen_intro = new sIntro();
    this.screen_city = new sCity();
    this.screen_hurricane = new sHurricane();
    this.screen_over = new sOver();
    this.screen_success = new sSuccess();
    this.play = new gameplay();
    this.t = new timer;
    
    this.update = function(){
        
    }
     
    this.display = function(){
        if (g.state == 'new'){
            this.screen_intro.update();
            this.screen_intro.display();
        } else if (g.state == 'hurricane'){
            this.screen_hurricane.update();
            this.screen_hurricane.display();
        } else if (g.state == 'city'){
            this.screen_city.update();
            this.screen_city.display();
        } else if (g.state == 'play'){
            this.play.update();
            this.play.display();
            
            this.t.update();
            this.t.display();
        } else if (g.state == 'over'){
            this.screen_over.update();
            this.screen_over.display();
        } else if (g.state == 'success'){
            this.screen_success.update();
            this.screen_success.display();
        } 
    }   
}   