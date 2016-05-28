var bassDrumAudio;
var snareDrumAudio;
var highTomAudio;
var bdLaufvar = 0;
var sdLaufvar = 0;
var htLaufvar = 0;
var bassDrum = new Array(4);
var snareDrum = new Array(4);
var highTom = new Array(4);
var takt = new Array(4);


window.onload = function init()
{
	bassDrumAudio = document.getElementById("bassDrumAudio");
	snareDrumAudio = document.getElementById("snareDrumAudio");
	highTomAudio = document.getElementById("highTomAudio");

	var playBtn = document.getElementById("play");
	playBtn.addEventListener("mouseup", playPressed);

	// var playBtn = document.getElementById("stop");
	// playBtn.addEventListener("mouseup", stopPressed);

	// Setup Takt
	takt[0] = document.getElementById("takt1");
	takt[1] = document.getElementById("takt2");
	takt[2] = document.getElementById("takt3");
	takt[3] = document.getElementById("takt4");


	// Setup Bass Drum
	bassDrum[0] = document.getElementById("bd1");
	bassDrum[0].style.backgroundColor='Red';
	bassDrum[0].addEventListener("mouseup", color);

	bassDrum[1] = document.getElementById("bd2");
	bassDrum[1].style.backgroundColor='Red';
	bassDrum[1].addEventListener("mouseup", color);

	bassDrum[2] = document.getElementById("bd3");
	bassDrum[2].style.backgroundColor='Red';
	bassDrum[2].addEventListener("mouseup", color);

	bassDrum[3] = document.getElementById("bd4");
	bassDrum[3].style.backgroundColor='Red';
	bassDrum[3].addEventListener("mouseup", color);

	// Setup Snare Drum
	snareDrum[0] = document.getElementById("sd1");
	snareDrum[0].style.backgroundColor='Red';
	snareDrum[0].addEventListener("mouseup", color);

	snareDrum[1] = document.getElementById("sd2");
	snareDrum[1].style.backgroundColor='Red';
	snareDrum[1].addEventListener("mouseup", color);

	snareDrum[2] = document.getElementById("sd3");
	snareDrum[2].style.backgroundColor='Red';
	snareDrum[2].addEventListener("mouseup", color);

	snareDrum[3] = document.getElementById("sd4");
	snareDrum[3].style.backgroundColor='Red';
	snareDrum[3].addEventListener("mouseup", color);

	// Setup High Tom
	highTom[0] = document.getElementById("ht1");
	highTom[0].style.backgroundColor='Red';
	highTom[0].addEventListener("mouseup", color);

	highTom[1] = document.getElementById("ht2");
	highTom[1].style.backgroundColor='Red';
	highTom[1].addEventListener("mouseup", color);

	highTom[2] = document.getElementById("ht3");
	highTom[2].style.backgroundColor='Red';
	highTom[2].addEventListener("mouseup", color);

	highTom[3] = document.getElementById("ht4");
	highTom[3].style.backgroundColor='Red';
	highTom[3].addEventListener("mouseup", color);

}

function playPressed()
{
	// setInterval(takt, 1000);
	setInterval(bdPlay, 1000);
	setInterval(sdPlay, 1000);
	setInterval(htPlay, 1000);
}
/*
function stopPressed() 
{
	
}
*/

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
	}
}

/*
function takt()
{
	if (bdLaufvar==0) 
	{
		takt[3].innerHTML="o";
		takt[bdLaufvar].innerHTML="i";
	}
	else
	{
		takt[bdLaufvar-1].innerHTML="o";
		takt[bdLaufvar].innerHTML="i";
	}
}
*/
function bdPlay()
{
	if(bassDrum[bdLaufvar].style.backgroundColor==='blue')
	{
		bassDrumAudio.play();
		console.log(bdLaufvar);
	}

	if (bdLaufvar > 2)
	{
		bdLaufvar = 0;
	}
	else
	{
		bdLaufvar++;
	}
}

function sdPlay()
{
	if(snareDrum[sdLaufvar].style.backgroundColor==='blue')
	{
		snareDrumAudio.play();
		console.log(sdLaufvar);
	}

	if (sdLaufvar > 2)
	{
		sdLaufvar = 0;
	}
	else
	{
		sdLaufvar++;
	}
}

function htPlay()
{
	if(highTom[htLaufvar].style.backgroundColor==='blue')
	{
		highTomAudio.play();
		console.log(htLaufvar);
	}

	if (htLaufvar > 2)
	{
		htLaufvar = 0;
	}
	else
	{
		htLaufvar++;
	}
}

