let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const result_p = document.getElementById("result");
const rock_img = document.getElementById("r");
const paper_img = document.getElementById("p");
const scissor_img = document.getElementById("s");
const userchoice_img = document.getElementById("u");
const computerchoice_img = document.getElementById("c");
const userchoice_div = document.getElementById("u-div");
const computerchoice_div = document.getElementById("c-div");
const winaudio_audio = document.getElementById("win-audio");
const loseaudio_audio = document.getElementById("lose-audio");

function getcomputerchoice(){
	const choice = ['r','p','s'];
	return choice[Math.floor(Math.random()*3)]
};

function win(){
	userscore++;
	result_p.innerHTML= "You Win  &#128293; &#128293;";
	userscore_span.innerHTML = userscore;
	userchoice_div.classList.add("green");
	setTimeout(function(){userchoice_div.classList.remove("green")},700);
	computerchoice_div.classList.add("red");
	setTimeout(function(){computerchoice_div.classList.remove("red")},700);
	winaudio_audio.play();
	setTimeout(function(){winaudio_audio.pause();winaudio_audio.currentTime = 0;},1000);
	
};

function lose(){
	computerscore++;
	result_p.innerHTML = "You Lose &#x1F614;";
	computerscore_span.innerHTML = computerscore;
	computerchoice_div.classList.add("green");
	setTimeout(function(){computerchoice_div.classList.remove("green")},700);
	userchoice_div.classList.add("red");
	setTimeout(function(){userchoice_div.classList.remove("red")},700);
	loseaudio_audio.play();
	setTimeout(function(){loseaudio_audio.pause();loseaudio_audio.currentTime = 0;},1000);
};

function draw(){
		result_p.innerHTML="It's Draw &#x1F648;";
		computerchoice_div.classList.add("grey");
		setTimeout(function(){computerchoice_div.classList.remove("grey")},700);
		userchoice_div.classList.add("grey");
		setTimeout(function(){userchoice_div.classList.remove("grey")},700);
};

function showimages(userchoice,computerchoice){

		switch (userchoice){
			case "r":
				userchoice_img.src = "images/rock.png";
				break;
			case "p":
				userchoice_img.src = "images/paper2.png";
				break;
			case "s":
				userchoice_img.src = "images/scissor.png";
				break;
		}
		
		switch (computerchoice){
			case "r":
				computerchoice_img.src = "images/rock.png";
				break;
			case "p":
				computerchoice_img.src = "images/paper2.png";
				break;
			case "s":
				computerchoice_img.src = "images/scissor.png";
				break;
		}
		
};

function game(userchoice){
	let computerchoice = getcomputerchoice();
	
	showimages(userchoice,computerchoice);
	
	switch (userchoice+computerchoice){
		case "rr":
		case "pp":
		case "ss": 
			draw();
			break;
		case "rs":
		case "pr":
		case "sp":
			win();
			break;
		case "rp":
		case "ps":
		case "sr":
			lose();
			break;
	}
		
};

function main(){
	
rock_img.addEventListener('click',function(){
	game('r');	
});

paper_img.addEventListener('click',function(){
	game('p');
});

scissor_img.addEventListener('click',function(){
	game('s');
});

};

main();

