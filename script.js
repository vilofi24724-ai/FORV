/* =====================================
   DOM ELEMENT
===================================== */


document.addEventListener(
"DOMContentLoaded",
() => {


const loadingScreen =
document.getElementById("loadingScreen");


const loadingProgress =
document.getElementById("loadingProgress");


const loadingPercentage =
document.getElementById("loadingPercentage");


const beginStoryButton =
document.getElementById("beginStoryButton");


const quizForm =
document.getElementById("quizForm");


const quizSection =
document.getElementById("quizSection");


const storyEngine =
document.getElementById("storyEngine");


const quizMessage =
document.getElementById("quizMessage");


const messageCount =
document.getElementById("messageCount");





/* =====================================
   LOADING ENGINE
===================================== */


let progress = 0;



const loadingTimer =
setInterval(() => {



progress += 1;



loadingProgress.style.width =
`${progress}%`;



loadingPercentage.textContent =
`${progress}%`;





if(progress >= 100){


clearInterval(loadingTimer);



setTimeout(() => {


loadingScreen.style.opacity =
"0";



loadingScreen.style.pointerEvents =
"none";



setTimeout(() => {


loadingScreen.remove();



},600);



},500);



}



},25);









/* =====================================
   OPEN STORY BUTTON
===================================== */


if(beginStoryButton){



beginStoryButton.addEventListener(
"click",
()=>{


quizSection.scrollIntoView({

behavior:
"smooth"

});


});



}









/* =====================================
   TEXTAREA COUNTER
===================================== */


if(quizMessage){



quizMessage.addEventListener(
"input",
()=>{



const length =
quizMessage.value.length;



messageCount.textContent =
length;



});



}









/* =====================================
   QUIZ SYSTEM
===================================== */


if(quizForm){



quizForm.addEventListener(
"submit",
(event)=>{


event.preventDefault();




const formData =
new FormData(quizForm);



const answerOne =
formData.get(
"questionOne"
);



const answerTwo =
formData.get(
"questionTwo"
);



const answerThree =
formData.get(
"questionThree"
);



const message =
formData.get(
"message"
);








if(
!answerOne ||
!answerTwo ||
!answerThree ||
!message
){


alert(
"Lengkapi semua jawaban dulu ya 🤍"
);



return;


}







/*
   SIMPAN JAWABAN
*/


localStorage.setItem(
"victorAnswer",
JSON.stringify({

one:
answerOne,


two:
answerTwo,


three:
answerThree,


message:
message


})
);







unlockStory();






});



}









/* =====================================
   STORY UNLOCK FUNCTION
===================================== */


function unlockStory(){





const heroSection =
document.getElementById(
"heroSection"
);





if(heroSection){



heroSection.scrollIntoView({

behavior:
"smooth"

});



}






startExperience();



}









/* =====================================
   START EXPERIENCE
===================================== */


function startExperience(){



document.body.classList.add(
"story-active"
);





console.log(
"Story Engine Started"
);



}








});

/* =====================================
   MUSIC ENGINE
===================================== */


const backgroundMusic =
document.getElementById(
"backgroundMusic"
);


const musicButton =
document.getElementById(
"musicButton"
);



let musicPlaying = false;





function startMusic(){



if(!backgroundMusic)
return;




backgroundMusic.volume =
0.35;



backgroundMusic.play()
.then(()=>{


musicPlaying =
true;



updateMusicIcon();



})
.catch(()=>{


console.log(
"Music waiting for interaction"
);



});



}









function toggleMusic(){



if(!backgroundMusic)
return;





if(musicPlaying){



backgroundMusic.pause();



musicPlaying =
false;



}else{



backgroundMusic.play();



musicPlaying =
true;



}



updateMusicIcon();



}









function updateMusicIcon(){



if(!musicButton)
return;





const icon =
musicButton.querySelector(
"i"
);




if(!icon)
return;





if(musicPlaying){



icon.className =
"fa-solid fa-volume-high";



}else{



icon.className =
"fa-solid fa-volume-xmark";



}



}








if(musicButton){



musicButton.addEventListener(
"click",
()=>{


toggleMusic();


});



}







/*
ANDROID RULE:

Music mulai setelah user
melakukan interaksi
*/


document.addEventListener(
"click",
()=>{


if(!musicPlaying){


startMusic();


}


},
{
once:true
}

);











/* =====================================
   TYPEWRITER ENGINE
===================================== */



function typeWriter(
element,
text,
speed = 40
){



if(!element)
return;




element.textContent =
"";



let index = 0;





const typing =
setInterval(()=>{



element.textContent +=
text.charAt(index);



index++;





if(index >= text.length){



clearInterval(
typing
);



}



},speed);





}











/* =====================================
   MEMORY TYPEWRITER
===================================== */


const memoryTexts =
document.querySelectorAll(
".typewriter-text"
);





const memoryObserver =
new IntersectionObserver(
(entries)=>{



entries.forEach(
(entry)=>{



if(
entry.isIntersecting
){



const element =
entry.target;



const text =
element.textContent.trim();





typeWriter(
element,
text,
35
);





memoryObserver.unobserve(
element
);



}



});


},
{

threshold:
0.6

}

);







memoryTexts.forEach(
(item)=>{


memoryObserver.observe(
item
);


});











/* =====================================
   LETTER TYPEWRITER
===================================== */



const letterElement =
document.getElementById(
"typingLetter"
);





const letterMessage =

`Victor,

Terima kasih sudah menjadi bagian
dari perjalanan hidupku.

Terima kasih untuk semua waktu,
perhatian, dan hal kecil
yang selalu berarti.

Semoga kamu selalu bahagia,
diberikan kesehatan,
dan semua impianmu perlahan
menjadi nyata.

Happy Birthday 🤍`;







let letterStarted =
false;








const letterObserver =
new IntersectionObserver(
(entries)=>{



entries.forEach(
(entry)=>{



if(
entry.isIntersecting &&
!letterStarted
){



letterStarted =
true;



typeWriter(

letterElement,

letterMessage,

45

);



}



});


},
{

threshold:
0.5

}

);








const letterSection =
document.getElementById(
"letterSection"
);




if(letterSection){


letterObserver.observe(
letterSection
);



}









/* =====================================
   SCROLL REVEAL
===================================== */


const revealElements =
document.querySelectorAll(
".memory-card"
);







const revealObserver =
new IntersectionObserver(
(entries)=>{



entries.forEach(
(entry)=>{



if(
entry.isIntersecting
){



entry.target.style.opacity =
"1";



entry.target.style.transform =
"translateY(0)";



revealObserver.unobserve(
entry.target
);



}



});


},
{

threshold:
0.2

}

);







revealElements.forEach(
(element)=>{


revealObserver.observe(
element
);



});

/* =====================================
   STORY PROGRESS BAR
===================================== */


const progressBar =
document.getElementById(
"storyProgressBar"
);



function updateStoryProgress(){



if(!progressBar)
return;





const scrollTop =
window.scrollY;





const documentHeight =
document.documentElement.scrollHeight
-
window.innerHeight;





const progress =
(scrollTop / documentHeight) * 100;





progressBar.style.width =
`${progress}%`;



}





window.addEventListener(
"scroll",
updateStoryProgress
);









/* =====================================
   AUTO SCROLL ENGINE
===================================== */


function autoScrollTo(
sectionID
){



const section =
document.getElementById(
sectionID
);





if(section){



section.scrollIntoView({

behavior:
"smooth",

block:
"start"

});


}



}









const scrollTargets =
document.querySelectorAll(
"[data-scroll]"
);





scrollTargets.forEach(
(button)=>{



button.addEventListener(
"click",
()=>{



const target =
button.dataset.scroll;



autoScrollTo(
target
);



});



});









/* =====================================
   GSAP SCROLL ANIMATION
===================================== */


if(
typeof gsap !== "undefined"
&&
typeof ScrollTrigger !== "undefined"
){



gsap.registerPlugin(
ScrollTrigger
);






gsap.utils.toArray(
".memory-card"
)
.forEach(
(card)=>{



gsap.to(
card,
{

opacity:
1,


y:
0,


duration:
1,


ease:
"power3.out",



scrollTrigger:{


trigger:
card,


start:
"top 80%",



toggleActions:
"play none none reverse"



}



}

);



});







gsap.from(
".hero-content",
{

opacity:
0,


y:
40,


duration:
1.5,


ease:
"power3.out"



}

);





}









/* =====================================
   VIDEO SMART LOADING
===================================== */


const memoryVideo =
document.getElementById(
"memoryVideo"
);





if(memoryVideo){





const videoObserver =
new IntersectionObserver(
(entries)=>{



entries.forEach(
(entry)=>{



if(entry.isIntersecting){



memoryVideo.play()
.catch(()=>{});



}else{



memoryVideo.pause();



}



});


},
{

threshold:
0.5

}

);





videoObserver.observe(
memoryVideo
);



}









/* =====================================
   HERO VIDEO CONTROL
===================================== */


const heroVideo =
document.getElementById(
"heroVideo"
);




if(heroVideo){



heroVideo.play()
.catch(()=>{


console.log(
"Hero video waiting"
);


});



}









/* =====================================
   CONFETTI EFFECT
===================================== */


function birthdayConfetti(){



if(
typeof confetti === "undefined"
)
return;






confetti({

particleCount:
120,

spread:
100,

origin:

{

y:
0.6

}

});



}









const endingSection =
document.getElementById(
"endingSection"
);





if(endingSection){



const endingObserver =
new IntersectionObserver(
(entries)=>{



entries.forEach(
(entry)=>{



if(entry.isIntersecting){



birthdayConfetti();



endingObserver.unobserve(
endingSection
);



}



});


},
{

threshold:
0.6

}

);





endingObserver.observe(
endingSection
);



}









/* =====================================
   PAGE READY MESSAGE
===================================== */


console.log(
`
============================

Birthday Story Engine Ready 🤍

✓ Loading System
✓ Quiz Gate
✓ Music Engine
✓ Typewriter
✓ Story Scroll
✓ Video Observer
✓ Progress Bar

============================
`
);