var buttons=["green","red","blue","yellow"];

var pattern=[];

var userPattern=[];

var start=false;

var currentLevel=0;

(document).keypress(function(){
    if(!start){
        ("#level-title").text("Level "+currentLevel);
        nextPattern();
        start=true;
    }
});

("btn").click(function(){
    var colourChosen=(this).attr("id");
    userPattern.push(colourChosen);
    playSound(colourChosen);
    animatePress(colourChosen);
    answerCheck(userPattern.length-1);
});

function answerCheck(currentLevel){
    if(pattern[currentLevel]===userPattern[currentLevel]){
        if(userPattern.length===pattern.length){
          setTimeout(function(){
            nextPattern();
          },1000);
        }
    } else {
        playSound("sounds_wrong");
        ("body").addClass("game-over");
        ("#level-title").text("Game Over, Press Any Key To Restart");

        setTimeout(function(){
            ("body").removeClass("game-over");
        },200);

        startOver();
    }

}

function nextPattern(){
    userPattern=[];
    currentLevel++;
    ("#level-title").text("Level "+currentLevel);
    var randomNum=Math.floor(Math.random()*4);
    var randomColour=buttons[randomNum];
    pattern.push(randomColour);

    ("#"+randomColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColour);
}

function animatePress(currentColour){
    ("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        ("#"+currentColour).removeClass("pressed");
    },100);
}

function playSound(soundName){
    var audio=new Audio("sounds/sounds_" + soundName + ".mp3");
    audio.play();
}

function startOver(){
    currentLevel=0;
    pattern=[];
    start=false;
}
