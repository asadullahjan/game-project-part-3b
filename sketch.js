var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	isLeft  = false;
	isRight	= false;
	isFalling = false;
	isPlummeting = false;
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		fill (120,120,120);
		ellipse(gameChar_x,gameChar_y-56,30);

		fill(0);
		ellipse(gameChar_x-10,gameChar_y-55,5);

		fill (0,0,225);
		rect (gameChar_x-8,gameChar_y-43,15,25);

		
		strokeWeight(5);
		stroke(1);
		line(gameChar_x-10,gameChar_y -5 ,gameChar_x-5 ,gameChar_y-18);//leg
		line(gameChar_x+3,gameChar_y-18, gameChar_x+10,gameChar_y-5);//leg

		line(gameChar_x-5,gameChar_y -35 ,gameChar_x - 20,gameChar_y-45);//arm
		line(gameChar_x+20,gameChar_y-25,gameChar_x+8,gameChar_y-35);//arm
		strokeWeight(1);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		fill (120,120,120);
		ellipse(gameChar_x,gameChar_y-56,30);

		fill(0);
		ellipse(gameChar_x+10,gameChar_y-55,5);

		fill (0,0,225);
		rect (gameChar_x-8,gameChar_y-43,15,25);

		
		strokeWeight(5);
		stroke(1);
		line(gameChar_x-10,gameChar_y -5 ,gameChar_x-5 ,gameChar_y-18);//leg
		line(gameChar_x+3,gameChar_y-18, gameChar_x+10,gameChar_y-5);//leg

		line(gameChar_x,gameChar_y -35 ,gameChar_x + 20,gameChar_y-45);//arm
		line(gameChar_x-20,gameChar_y-25,gameChar_x-10,gameChar_y-35);//arm
		strokeWeight(1);

	}
	else if(isLeft)
	{
		// add your walking left code
		
		
		fill (120,120,120);
		ellipse(gameChar_x,gameChar_y-56,35);
		
		fill(0);
		ellipse(gameChar_x-10,gameChar_y-55,5);
		
		fill (0,0,225);
		rect (gameChar_x-10,gameChar_y-40,20,30);
	
		
		strokeWeight(5);
		stroke(1);
		line(gameChar_x-10,gameChar_y  ,gameChar_x-5 ,gameChar_y-10);//leg
		line(gameChar_x+5,gameChar_y-10, gameChar_x+10,gameChar_y);//leg
	
		line(gameChar_x+10,gameChar_y -33 ,gameChar_x + 23,gameChar_y-25);//arm
		line(gameChar_x-23,gameChar_y-25,gameChar_x-5,gameChar_y-35);//arm
		strokeWeight(1);

	}
	else if(isRight)
	{
		// add your walking right code
		
		fill (120,120,120);
		ellipse(gameChar_x,gameChar_y-56,35);

		fill(0);
		ellipse(gameChar_x+10,gameChar_y-55,5);

		fill (0,0,225);
		rect (gameChar_x-10,gameChar_y-40,20,30);

		
		strokeWeight(5);
		stroke(1);
		line(gameChar_x-10,gameChar_y  ,gameChar_x-5 ,gameChar_y-10);//leg
		line(gameChar_x+5,gameChar_y-10, gameChar_x+10,gameChar_y);//leg

		line(gameChar_x+5,gameChar_y -33 ,gameChar_x + 23,gameChar_y-25);//arm
		line(gameChar_x-23,gameChar_y-25,gameChar_x-12,gameChar_y-35);//arm
		strokeWeight(1);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		fill (120,120,120);
		ellipse(gameChar_x,gameChar_y-55,30);
		fill(0);
		fill(0);
		ellipse(gameChar_x-7,gameChar_y-56,3);
		ellipse(gameChar_x+7,gameChar_y-56,3);
	
		fill(0,0,225);
		rect(gameChar_x-10,gameChar_y-40,20,25);
	
		fill(0);
		rect(gameChar_x-11,gameChar_y-15,10,10);
		rect(gameChar_x +1,gameChar_y-15,10,10);
	
		strokeWeight(5);
		stroke(1);
		line(gameChar_x+10,gameChar_y - 35 ,gameChar_x + 23,gameChar_y-50);
		line(gameChar_x-23,gameChar_y-50,gameChar_x-11,gameChar_y-35);
		strokeWeight(1);

	}
	else
	{
		// add your standing front facing code
		fill (120,120,120);
		ellipse(gameChar_x,gameChar_y-56,40);
		fill(0);
		ellipse(gameChar_x-10,gameChar_y-56,5);
		ellipse(gameChar_x+10,gameChar_y-56,5);
	
		fill (0,0,225);
		rect (gameChar_x-15,gameChar_y-37,30,30);
	
		fill (0);
		rect(gameChar_x-15,gameChar_y-7,10,10);
		rect(gameChar_x+5,gameChar_y-7,10,10);

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	if(isRight){
		gameChar_x += 1;
	}
	if(isLeft){
		gameChar_x -= 1;
	}
	if(isPlummeting && gameChar_y == floorPos_y){
		gameChar_y = floorPos_y - 100;
	}
	if(isFalling == true){
		if(gameChar_y < floorPos_y){
		gameChar_y += 1;
		}
	}
	if(gameChar_y < floorPos_y){ 
		isFalling = true;
	} 
	else{
		isFalling = false;
	}
	

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	if(keyCode == "39"){
		isRight = true;
	}
	
	if(keyCode == "37"){
		isLeft = true;
	}

	if(keyCode == "38"){
		isPlummeting = true;
	}

	
	

	//open up the console to see how these work
	// console.log("keyPressed: " + key);
	// console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	if(keyCode == "39"){
		isRight = false;
	}
	
	if(keyCode == "37"){
		isLeft = false;
	}

	if(keyCode == "38"){
		isPlummeting = false;
	}

}