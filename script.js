
        function download(){
         var down = document.getElementById("audio").download;
        }
        function play(){
        var music = document.getElementById("audio");
        var play = document.getElementById("play");
        if(music.autoplay===false){
            music.autoplay=true;
            music.load();
            play.setAttribute("class", "fa fa-pause-circle");
            console.log("Music playing..");
        }
            else{
               music.autoplay=false;
               music.load();
               play.setAttribute("class", "fa fa-play-circle");
            console.log("Music stopped..");
        }
    }
    function loop(){
        let music = document.getElementById("audio");
        var repeat = document.getElementById("repeat");

        if(music.loop===false){
            music.loop=true;
            music.load();
            repeat.style.color="hotpink";
            console.log("Repeat on..");
        }
        else{
            music.loop=false;
            music.load();
            repeat.style.color="#FFFFFF";
            console.log("Repeat off..");
        }
    }

    /*function volume(){
    let yes = document.getElementById("value")
    let control = yes.value;
    console.log(control);
        let music = document.getElementById("audio");

        if(control===10){
            music.volume=0.1;
        }
        else if(control===20){
            music.volume=0.2;
        }
        else if(control===30){
            music.volume=0.3;
        }
        else if(control===40){
            music.volume=0.4;
        }
        else if(control===50){
            music.volume=0.5;
        }
        else if(control===60){
            music.volume=0.6;
        }
        else if(control===70){
            music.volume=0.7;
        }
        else if(control===80){
            music.volume=0.8;
        }
        else if(control===90){
            music.volume=0.9;
        }
        else if(control===100){
            music.volume=1.0;
        }
        else{
            music.volume=0.2;
        }
        
        
    }
    window.addEventListener('load',volume());
//volume();*/