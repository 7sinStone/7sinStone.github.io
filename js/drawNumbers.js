$(document).ready(function() {

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
c.width=window.innerWidth;
c.height=document.getElementById("parentCanvas").offsetHeight;
var drawingString = "01";

stringsToDraw = drawingString.split("");

var font_size = 15;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(140, 186, 250, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);
	
	ctx.fillStyle = "#FFF"; //green text
	ctx.font = font_size + "px binary";
	//looping over drops

	var change =0;
	for(var i = 0; i < drops.length; i++)
	{
		
		if((i%2+change)==0)
		{
			var text = stringsToDraw[Math.floor(Math.random()*stringsToDraw.length)];
			//x = i*font_size, y = value of drops[i]*font_size
			ctx.fillText(text, i*font_size, drops[i]*font_size);
		
			//sending the drop back to the top randomly after it has crossed the screen
			//adding a randomness to the reset to make the drops scattered on the Y axis
			if(drops[i]*font_size > c.height && Math.random() > 0.975)
			{
				drops[i] = 0;
				if(change==0)
				change=-1;
				else
					change=0;
			}
			//incrementing Y coordinate
			drops[i]+=1;
		}				
	}
}

setInterval(draw,33);

});