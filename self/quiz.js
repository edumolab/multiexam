const part1=document.getElementById("quizBar");
const welcome=document.getElementById("welcome")
const que=document.getElementById("question-bar");
const beep=document.getElementById("beep");
const timer=document.getElementById("timer");
const que_id=document.getElementById("que-id");
const q1=document.getElementById("q1")
const q2=document.getElementById("q2")
const q3=document.getElementById("q3")
const t1=document.getElementById("t1")
const t2=document.getElementById("t2")
const t3=document.getElementById("t3")
const downloadAudio =document.getElementById("downloadButton");
const preview =document.getElementById("audio-playback")
let recorder, audio_stream;

part1.style.display="none";
preview .style.display="none";
downloadAudio .style.display="none";
downloadAudio.addEventListener("click", downloadRecording);
//Recorder

function startRecording() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function (stream) {
      audio_stream = stream;
      recorder = new MediaRecorder(stream);

      // when there is data, compile into object for preview src
      recorder.ondataavailable = function (e) {
        const url = URL.createObjectURL(e.data);
		preview.src = url;
// set link href as blob url, replaced instantly if re-recorded
        downloadAudio.href = url;
      
      };
      recorder.start();

    });
}


function stopRecording() {
    recorder.stop();
  }

  function downloadRecording(){
    var name = new Date();
    var res = name.toISOString().slice(0,10)
    downloadAudio.download = res + '.mp3';
}

//Scale UpandDown
var TextSize=document.getElementById("question-bar");
 function sizeUp(){
    var style = window.getComputedStyle(TextSize, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    TextSize.style.fontSize=(fontSize+1)+'px'
 }

 function sizeDown(){
    var style = window.getComputedStyle(TextSize, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    TextSize.style.fontSize=(fontSize-1)+'px'
 }

 //Fullscreen
 function toggleFullScreen() {
	if (!document.fullscreenElement) {
	  document.documentElement.requestFullscreen();
	  document.getElementById("full-screen").innerHTML=`<i class="fa fa-compress"></i>`
	} else if (document.exitFullscreen) {
	  document.exitFullscreen();
	 document.getElementById("full-screen").innerHTML=`<i class="fa fa-expand"></i>`
	}
  }
  


//Step1
function step0() {
	if(q1.value=="" || q2.value==""|| q3.value==""){
		alert("Enter questions, please!")
		return false
	}
	else{
	startRecording()
	welcome.style.display="none";
	part1.style.display="block"
	que.innerHTML=q1.value
	que_id.innerHTML=1
	// Create a new Text-to-Speech object
  const tts1 = new SpeechSynthesisUtterance();
  tts1.text = q1.value;
  tts1.addEventListener("end", startCountdown);
  
  // Play the Text-to-Speech audio
  speechSynthesis.speak(tts1);
}
	// Define a function to start the 5-second countdown
function startCountdown() {
	let count = 5;
	timer.innerHTML += `${count} seconds`;
	const interval = setInterval(() => {
	  count--;
	  timer.innerHTML = `${count} seconds`;
	  if (count <= 0) {
		beep.play();
		clearInterval(interval);
		start30SecondCountdown();
	  }
	}, 1000);
  }

	// Define a function to start the 30-second countdown
	function start30SecondCountdown() {
		let count = t1.value;
		timer.innerHTML = ` ${count}  LEFT`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} LEFT`;
		  if (count <= 0) {
			timer.innerHTML="";
			clearInterval(interval);
			step1();
	
		  }
		}, 1000);
	  }
	
}

//Step1 fun

function step1(){
	que.innerHTML=q2.value;
	que_id.innerHTML=2
	// Create a new Text-to-Speech object
  const tts2 = new SpeechSynthesisUtterance();
  tts2.text = q2.value;
  tts2.addEventListener("end", startCountdown);
  
  // Play the Text-to-Speech audio
  speechSynthesis.speak(tts2);

	//countdown 5 sec
	function startCountdown() {
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			let count = t2.value;
			timer.innerHTML = ` ${count} LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				step2();
		
			  }
			}, 1000);
		  }
}


//step2

function step2(){
	que.innerHTML=q3.value;
	que_id.innerHTML=3
	// Create a new Text-to-Speech object
  const tts3 = new SpeechSynthesisUtterance();
  tts3.text = q3.value;
  tts3.addEventListener("end", startCountdown);
  
  // Play the Text-to-Speech audio
  speechSynthesis.speak(tts3);

	//countdown 5 sec
	function startCountdown() {
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			let count = t3.value;
			timer.innerHTML = ` ${count} LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				examEnd()
		
			  }
			}, 1000);
		  }
}

/*

function step3(){
	que.innerHTML=q4.value;
	que_id.innerHTML=4
	audio4.play();
	audio4.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				step4();
		
			  }
			}, 1000);
		  }
}


//step4

function step4(){
	que.innerHTML=q5.value
	que_id.innerHTML=5
	audio5.play();
	audio5.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				step5();
		
			  }
			}, 1000);
		  }
}


//step5

function step5(){
	que.innerHTML=q6.value;
	que_id.innerHTML=6
	audio6.play();
	audio6.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				examEnd();
		
			  }
			}, 1000);
		  }
}

*/


function examEnd(){
	que.innerHTML='';
	que_id.innerHTML='';
	preview .style.display="block";
	// Create a new Text-to-Speech object
  const tts7 = new SpeechSynthesisUtterance();
  tts7.text = "This is the end of Speaking Test"
   // Play the Text-to-Speech audio
  speechSynthesis.speak(tts7);

  tts7.addEventListener("end", function(){
		stopRecording();
		downloadAudio.style.display="block"
		document.getElementById("home").style.display="block"

})
}







	
