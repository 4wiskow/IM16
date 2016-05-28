var bassDrumAudio;
var snareDrumAudio;
var highTomAudio;
var playing = false;
var sounds; 
var taktDisplay;
var takt = 0;


window.onload = function init()
{
	bassDrumAudio = document.getElementById("bassDrumAudio");
	snareDrumAudio = document.getElementById("snareDrumAudio");
	highTomAudio = document.getElementById("highTomAudio");

	var playBtn = document.getElementById("play");
	playBtn.addEventListener("mouseup", playPressed);
	document.getElementById("stop").addEventListener("mouseup", stopPressed);

	// var playBtn = document.getElementById("stop");
	// playBtn.addEventListener("mouseup", stopPressed);

	// Setup Takt
	//takt[0] = document.getElementById("takt1");
	//takt[1] = document.getElementById("takt2");
	//takt[2] = document.getElementById("takt3");
	//takt[3] = document.getElementById("takt4");

	//Initialize Sound Buttons
	sounds =  new Array(8);
	var i;
	for (i = 0; i < sounds.length; i++){
		sounds[i] = new Array(3);
	}
	var x = document.getElementsByClassName("Sound");
	for (i = 0; i < x.length; i++) {
		x[i].style.backgroundColor = "red";
		x[i].addEventListener("mouseup", color);
	
		//create references
		var classes = x[i].className.split(" ");
		var type;
		var point;
		switch (classes[1]) {
			case "BD" : type = 0;break;
			case "SD" : type = 1;break;
			case "HT" : type = 2;break;
			default : alert("Error of Sound Type");
		}
		switch (classes[2]) {
			case "t0" : point = 0;break;
			case "t1" : point = 1;break;
			case "t2" : point = 2;break;
			case "t3" : point = 3;break;
			case "t4" : point = 4;break;
			case "t5" : point = 5;break;
			case "t6" : point = 6;break;
			case "t7" : point = 7;break;
			default : alert("Error of Sound Time"); console.log(classes);
		}
		sounds[point][type] = x[i];
	}
	
	//Initialize Takt
	taktDisplay = new Array(8);
	x = document.getElementsByClassName("Takt");
	for (i = 0; i < x.length; i++) {
	var classes = x[i].className.split(" ");
	switch (classes[1]) {
			case "t0" : point = 0;break;
			case "t1" : point = 1;break;
			case "t2" : point = 2;break;
			case "t3" : point = 3;break;
			case "t4" : point = 4;break;
			case "t5" : point = 5;break;
			case "t6" : point = 6;break;
			case "t7" : point = 7;break;
			default : alert("Error in Takt Time"); console.log(classes);
		}
		taktDisplay[point] = x[i];
	}
	console.log(taktDisplay);
	
	//Start
	setInterval(play, 500);	
}

function play() {
	if (playing) {
		playTakt();
		if (sounds[takt][0].style.backgroundColor == 'blue') {
			bassDrumAudio.play();
		}
		if (sounds[takt][1].style.backgroundColor == 'blue') {
			snareDrumAudio.play();
		}	
		if (sounds[takt][2].style.backgroundColor == 'blue') {
			highTomAudio.play();
		}			
		if (takt > 6) {
		takt = 0;
		}
		else {
		takt++;
		};
	}
}

function playPressed()
{
	playing = true;
}

function stopPressed() 
{
	if(!playing){ 
	taktDisplay[takt-1].innerHTML = "o";
	takt = 0;
	taktDisplay[takt].innerHTML = "i";
	};
	playing = false;
}

function color(event)
{
	if (this.style.backgroundColor === 'red') 
	{
		this.style.backgroundColor='blue';
		this.innerHTML="1";
	}
	else
	{
		this.style.backgroundColor='Red';
		this.innerHTML="0";
	}
}


function playTakt()
{
	if (takt==0) 
	{
		taktDisplay[7].innerHTML="o";
		taktDisplay[0].innerHTML="i";
	}
	else
	{
		taktDisplay[takt-1].innerHTML="o";
		taktDisplay[takt].innerHTML="i";
	}
}


