var canvas = document.getElementById("main-bar-graph");
var context = canvas.getContext("2d");
const graphWidth = canvas.width * .65;
const graphHeight = canvas.height * .65;
const xOffset = canvas.width * .34;
const yOffset = canvas.height * .125; 

function BarValue(height, fill){  
    fill = fill || "blue";
    
    this.height = height;
    this.fill = fill;
}
BarValue.prototype.WIDTH = graphWidth * .15;
BarValue.prototype.draw = function(position){
    var xPos, yPos;
    yPos =  yOffset + graphHeight - this.height;
    xPos = xOffset + graphWidth * .1 + ((graphWidth * .32 + this.WIDTH) * position); 
    context.beginPath();
    context.fillStyle = this.fill;
    context.fillRect(xPos,yPos, this.WIDTH, this.height);
    
    context.strokeStyle = "black";
    context.strokeRect(xPos,yPos,this.WIDTH, this.height);
    
    context.closePath();
    
};


function drawGraphBackground() {
    context.beginPath();

    context.fillStyle = "white";

    context.fillRect(xOffset, yOffset, graphWidth, graphHeight);
    
    context.strokeStyle = "black";
    context.strokeRect(xOffset,yOffset,graphWidth,graphHeight);
    context.closePath();
}



var ourValue = new BarValue(graphHeight * .8, "green");
var theirValue = new BarValue(graphHeight * .25, "red");

drawGraphBackground();

ourValue.draw(0);

theirValue.draw(1);

drawLabels();


function drawLabels(){

    context.beginPath();
    
    context.font =  graphWidth * .004+ "em 'Chivo'";
    
    context.fillStyle = "black";
    
    context.fillText("$$$", xOffset + (graphWidth * .1), yOffset * 2, canvas.width);
    
    context.fillText("\u00a3", xOffset + (graphWidth * .45) + BarValue.prototype.WIDTH, 
                     graphHeight - theirValue.height + yOffset, canvas.width);
    
    let bottomLabelY = graphHeight + yOffset + yOffset * .4;
    context.fillText("Our Price", xOffset + (graphWidth * .03), bottomLabelY);
    context.fillText("Competitor Price", xOffset + (graphWidth * .4), bottomLabelY);
    
    
    context.fillText("Satisfaction", xOffset * .2, yOffset * 4);
    
    context.closePath();
    
    
}