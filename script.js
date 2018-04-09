console.log("linking...");
var ball = $("#innerBox");
var moveLeft = -5;
var moveRight = 5;
var moveUp = -5;
var moveDown = 5;
var px = "px";
var topNum = 0;
var leftNum =0;
var top1 = "0px";
var left1 = "0px";
var location01 = [0,0];
var enemyLocation =[200, -25];
var enemyBorder = true;
var enemy = $("#enemy");
var score = 0;
//Up: 38
//Down: 40
//Right: 39
//Left: 37
var x = setInterval(randomEnemy, 2500);
$(".boxAnimate").keydown(function(){
    ball.css("background-color", "yellow");
});

$('html').on("keydown", moveBall);


function moveBall (event) {
    //console.log(event.keyCode);
//moving down
    console.log("On key: " + enemyLocation.toString());
    if(event.keyCode==40 && topNum<=370){
        topNum = topNum + moveDown;
        top1 = topNum.toString() + px;
        location01[0]= leftNum;
        location01[1]= topNum;
        //console.log("location01: " + location01.toString());
        ball.css({"left": left1, "top": top1});
        catching();
    };
    if(event.keyCode==38 && topNum>=5){
        topNum = topNum + moveUp;
        top1 = topNum.toString() + px;
        location01[0]= leftNum;
        location01[1]= topNum;
        //console.log("location01: " + location01.toString());
        ball.css({"left": left1, "top": top1});
        catching();
    };
    if(event.keyCode==39 && leftNum<=770){
        leftNum = leftNum + moveRight;
        left1 = leftNum.toString() + px;
        location01[0]= leftNum;
        location01[1]= topNum;
        //console.log("location01: " + location01.toString());
        ball.css({"left": left1, "top": top1});
        catching();
    };
    if(event.keyCode==37 && leftNum>=5){
        leftNum = leftNum + moveLeft;
        left1 = leftNum.toString() + px;
        location01[0]= leftNum;
        location01[1]= topNum;
        //console.log("location01: " + location01.toString());
        ball.css({"left": left1, "top": top1});
        catching();
    };
    
}
function catching(){
if(enemyBorder == true){
    
    //var x = setInterval(randomEnemy, 5000);
    if(enemyLocation[0]-location01[0]<=30 &&enemyLocation[0]-location01[0]>=-30 && enemyLocation[1]-location01[1]<=30 && enemyLocation[1]-location01[1]>=-30){
        //console.log(enemyLocation[0]-location01[0]);
        //console.log(enemyLocation[1]-location01[1]);
        score++;
        $("#scoreBox").html('');
        $("#scoreBox").text('Score: ' + score.toString());
        //console.log(location01);
       // console.log( enemyLocation);    
        console.log("Score: " + score.toString());
        enemyBorder = false;
        if(score>4){
        clearInterval(x);
        $("#victory").show();
        
        }
        }
     
    
}
};
function randomEnemy(){
    
    enemyLocation[0] = Math.floor(Math.random()*750);
    enemyLocation[1] = Math.floor(Math.random()*350);
    enemy.css({"left": enemyLocation[0].toString() +px, "top": enemyLocation[1].toString() +px});
    // console.log(enemyBorder);
    // console.log("Enemy Location: " + enemyLocation.toString());
    // console.log("My Location: " + location01.toString());
    // console.log(enemyLocation[0]-location01[0]);
    // console.log(enemyLocation[1]-location01[1]);
    enemyBorder = true;
   
    
}



    
   