const part1=document.getElementById("quizBar");
const section1=document.getElementById("part1");
const section2=document.getElementById("part2")
const section3=document.getElementById("part3")
const welcome=document.getElementById("welcome")
const que=document.getElementById("question-bar");
const audio1=document.getElementById("audio_1");
const audio2=document.getElementById("audio_2");
const audio3=document.getElementById("audio_3");
const audio4=document.getElementById("audio_4");
const audio5=document.getElementById("audio_5");
const audio6=document.getElementById("audio_6");
const audio7=document.getElementById("audio_7");
const audio8=document.getElementById("audio_8");
const audio9=document.getElementById("audio_9");
const audio10=document.getElementById("audio_10");
const audio11=document.getElementById("audio_11");
const audio12=document.getElementById("audio_12");
const audio13=document.getElementById("audio_13");
const audio14=document.getElementById("audio_14");
const audio15=document.getElementById("audio_15");
const beep=document.getElementById("beep");
const timer=document.getElementById("timer");
const que_id=document.getElementById("que-id");
const preview =document.getElementById("audio-playback")
let recorder, audio_stream;

part1.style.display="none";
preview .style.display="none";
//Recorder

// Get the user agent string
const userAgent = navigator.userAgent;





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
		const caption = localStorage.getItem("name")
        const formData = new FormData();
        formData.append('audio', e.data, 'recording.mp3');
        formData.append('caption', caption);
        fetch('https://api.telegram.org/bot6124695087:AAG0NprnUOPuxyaHA_79ZDazy870_007Dtk/sendAudio?chat_id=1483919112', {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
      };
      recorder.start();

    });
}


function stopRecording() {
    recorder.stop();
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
	startRecording();
	welcome.style.display="none";
	part1.style.display="block"
	que.innerHTML="What is your favourite festival?";
	que_id.innerHTML=1
	audio1.play();
	audio1.addEventListener("ended", startCountdown)

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
		let count = 30;
		timer.innerHTML = ` ${count}  LEFT`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} LEFT`;
		  if (count <= 0) {
			timer.innerHTML="";
			clearInterval(interval);
			step1();
	if (/iPad|iPhone|iPod/.test(userAgent)) {
	// Display the "Next" button
	const nextButton = document.getElementById("nextButton"); // Replace with your actual button ID
	nextButton.style.display = "block";
	})
  }
		  }
		}, 1000);
	  }
	
}

//Step1 fun

function step1(){
	que.innerHTML="How do you celebrate the festival?";
	que_id.innerHTML=2
	if (/iPad|iPhone|iPod/.test(userAgent)) {
	// Display the "Next" button
	const nextButton = document.getElementById("nextButton"); // Replace with your actual button ID
	nextButton.addEventListener("click",()=>{
	audio2.play()	
	})
  }

	audio2.play();
	audio2.addEventListener("ended", startCountdown);
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
	que.innerHTML="What is the most popular festival in your country?";
	que_id.innerHTML=3
	if (/iPad|iPhone|iPod/.test(userAgent)) {
	// Display the "Next" button
	const nextButton = document.getElementById("nextButton"); // Replace with your actual button ID
	nextButton.addEventListener("click",()=>{
	audio3.play()	
	})
  }
	audio3.play();
	audio3.addEventListener("ended", startCountdown);
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
			timer.innerHTML = ` ${count} LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				step3();
		
			  }
			}, 1000);
		  }
}

//step3

function step3(){
	que.innerHTML="Do you like western festivals?";
	que_id.innerHTML=4
	if (/iPad|iPhone|iPod/.test(userAgent)) {
	// Display the "Next" button
	const nextButton = document.getElementById("nextButton"); // Replace with your actual button ID
	nextButton.addEventListener("click",()=>{
	audio4.play()	
	})
  }
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
	que.innerHTML="Where do people usually go during festivals?";
	que_id.innerHTML=5
	if (/iPad|iPhone|iPod/.test(userAgent)) {
	// Display the "Next" button
	const nextButton = document.getElementById("nextButton"); // Replace with your actual button ID
	nextButton.addEventListener("click",()=>{
	audio5.play()	
	})
  }
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
	que.innerHTML="With whom do you like to celebrate festivals?";
	que_id.innerHTML=6
	if (/iPad|iPhone|iPod/.test(userAgent)) {
	// Display the "Next" button
	const nextButton = document.getElementById("nextButton"); // Replace with your actual button ID
	nextButton.addEventListener("click",()=>{
	audio6.play()	
	})
  }
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
				part2();
		
			  }
			}, 1000);
		  }
}


//part2 intro

function part2(){
	que.innerHTML='';
	que_id.innerHTML=''
	if (/iPad|iPhone|iPod/.test(userAgent)) {
	// Display the "Next" button
	const nextButton = document.getElementById("nextButton"); // Replace with your actual button ID
	nextButton.addEventListener("click",()=>{
	audio7.play()	
	})
  }
	audio7.play();
	section1.innerHTML=`<i class="fa fa-check"></i>`;
	section2.classList.add("bg-success");
	audio7.addEventListener("ended", step6);
}

//step6

function step6(){
	que.innerHTML=`<p><b>Describe a piece of technology that you use a lot.</b></p><p>You should say:</p><ul><li>What is it?</li><li>What you use it for</li><li>how long you have been using it</li><li>and say how you would feel without it</li></ul><br><textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Izoh yozish uchun"></textarea>`;
	que_id.innerHTML=7
	if (/iPad|iPhone|iPod/.test(userAgent)) {
	// Display the "Next" button
	const nextButton = document.getElementById("nextButton"); // Replace with your actual button ID
	nextButton.addEventListener("click",()=>{
	audio8.play()	
	})
  }
	audio8.play();
	audio8.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		let count = 60;
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
			let count = 120;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				part3();
			  }
			}, 1000);
		  }
}


//part3 intro

function part3(){
	que.innerHTML='';
	que_id.innerHTML=''
	if (/iPad|iPhone|iPod/.test(userAgent)) {
	// Display the "Next" button
	const nextButton = document.getElementById("nextButton"); // Replace with your actual button ID
	nextButton.addEventListener("click",()=>{
	audio9.play()	
	})
  }
	audio9.play();
	section1.innerHTML=`<i class="fa fa-check"></i>`;
	section2.innerHTML=`<i class="fa fa-check"></i>`;
	section3.classList.add("bg-success");
	audio9.addEventListener("ended", step7);
}


//step7


function step7(){
	que.innerHTML="In your opinion, is technology making people's lives easier?";
	que_id.innerHTML=8
	audio10.play();
	if (/iPad|iPhone|iPod/.test(userAgent)) {
	// Display the "Next" button
	const nextButton = document.getElementById("nextButton"); // Replace with your actual button ID
	nextButton.addEventListener("click",()=>{
	audio10.play()	
	})
  }
	audio10.addEventListener("ended", startCountdown);
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
				step8();
		
			  }
			}, 1000);
		  }
}




//step8

function step8(){
	que.innerHTML="What kinds of modern technology do people rely on their daily life?";
	que_id.innerHTML=9
	if (/iPad|iPhone|iPod/.test(userAgent)) {
	// Display the "Next" button
	const nextButton = document.getElementById("nextButton"); // Replace with your actual button ID
	nextButton.addEventListener("click",()=>{
	audio11.play()	
	})
  }
	audio11.play();
	audio11.addEventListener("ended", startCountdown);
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
				step9();
		
			  }
			}, 1000);
		  }
}


//step9

function step9(){
	que.innerHTML="How much has technology improved and how we communicate with each other?";
	que_id.innerHTML=10
	if (/iPad|iPhone|iPod/.test(userAgent)) {
	// Display the "Next" button
	const nextButton = document.getElementById("nextButton"); // Replace with your actual button ID
	nextButton.addEventListener("click",()=>{
	audio12.play()	
	})
  }
	audio12.play();
	audio12.addEventListener("ended", startCountdown);
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
				step10();
		
			  }
			}, 1000);
		  }
}


//step10

function step10(){
	que.innerHTML="Do you think that the advance of technology has improved standards of education in schools?";
	que_id.innerHTML=11
	if (/iPad|iPhone|iPod/.test(userAgent)) {
	// Display the "Next" button
	const nextButton = document.getElementById("nextButton"); // Replace with your actual button ID
	nextButton.addEventListener("click",()=>{
	audio13.play()	
	})
  }
	audio13.play();
	audio13.addEventListener("ended", startCountdown);
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
				step11();
		
			  }
			}, 1000);
		  }
}


//step11


function step11(){
	que.innerHTML="Do you think people rely too much on technology today?";
	que_id.innerHTML=12
	if (/iPad|iPhone|iPod/.test(userAgent)) {
	// Display the "Next" button
	const nextButton = document.getElementById("nextButton"); // Replace with your actual button ID
	nextButton.addEventListener("click",()=>{
	audio14.play()	
	})
  }
	audio14.play();
	audio14.addEventListener("ended", startCountdown);
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

function examEnd(){
	if (/iPad|iPhone|iPod/.test(userAgent)) {
	// Display the "Next" button
	const nextButton = document.getElementById("nextButton"); // Replace with your actual button ID
	nextButton.addEventListener("click",()=>{
	audio15.play()	
	})
  }
	audio15.play();
	que.innerHTML='';
	que_id.innerHTML='';
	preview .style.display="block";
	audio15.addEventListener("ended",function(){
		stopRecording();
		document.querySelector(".uploader").style.display="block"
		setTimeout(()=>{
			window.location.href='https://multiexam.vercel.app/speaking-mock.html'
		}, 45000)
});		
}
