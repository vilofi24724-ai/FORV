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


const beginStoryButton = document.getElementById("beginStory");

beginStoryButton.addEventListener("click", () => {

    document.getElementById("quizSection").scrollIntoView({

        behavior: "smooth"

    });

});


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

Happy Birthday, sayangku. 🤍

Hari ini adalah hari yang spesial, bukan hanya karena usiamu bertambah, tetapi karena dunia pernah menghadirkan seseorang sepertimu. Seseorang yang tanpa sadar berhasil mengubah banyak hal dalam hidupku hanya dengan kehadirannya.

Terima kasih sudah menjadi bagian dari perjalanan hidup aku.

Terima kasih karena pernah hadir di setiap cerita yang kita tulis bersama. Terima kasih untuk setiap tawa, setiap pelukan, setiap obrolan panjang, setiap perhatian kecil, dan bahkan untuk setiap perbedaan yang akhirnya mengajarkan kita bagaimana cara memahami satu sama lain.

Aku sadar, hubungan kita tidak selalu berjalan dengan mudah. Ada hari di mana kita sama-sama lelah, ada saat kita berbeda pendapat, ada waktu ketika keadaan terasa begitu berat. Tetapi di balik semua itu, aku belajar bahwa mencintai seseorang bukan hanya tentang menikmati hari-hari yang indah, melainkan juga tentang tetap memilih orang yang sama ketika keadaan sedang tidak sempurna.

Kamu mungkin tidak pernah benar-benar tahu seberapa besar arti kehadiranmu dalam hidupku.

Kamu pernah menjadi tempatku bercerita ketika hariku terasa berat.
Kamu pernah menjadi alasan kenapa aku tersenyum tanpa sadar.
Kamu juga pernah menjadi orang yang membuatku percaya bahwa aku pantas dicintai dengan tulus.

Dan untuk semua itu...
aku benar-benar bersyukur.

Terima kasih karena sudah bersabar menghadapi segala sifatku.
Terima kasih karena tetap bertahan di saat aku mungkin sulit dimengerti.
Terima kasih karena sudah menjadi dirimu sendiri.

Kalau suatu hari nanti kamu merasa dunia sedang tidak berpihak kepadamu, aku berharap kamu mengingat satu hal...

Masih ada seseorang yang selalu mendoakanmu diam-diam.
Seseorang yang ingin melihatmu sehat.
Melihatmu sukses.
Melihatmu tersenyum.
Dan melihat semua impian yang selama ini kamu perjuangkan akhirnya menjadi kenyataan.

Di usia yang baru ini, semoga langkahmu selalu dipenuhi berkat Tuhan.
Semoga setiap usaha yang kamu lakukan membawa hasil yang terbaik.
Semoga kesehatan selalu menyertaimu.
Semoga keluargamu selalu diberikan kebahagiaan.
Semoga rezekimu semakin luas.
Dan semoga hatimu selalu dipenuhi rasa damai.

Aku berharap kamu gak pernah kehilangan semangat untuk mengejar semua mimpi yang kamu ceritakan sama ku.

Percayalah...
Aku akan selalu menjadi orang yang ikut bangga atas setiap pencapaianmu, sekecil apa pun itu.

Terima kasih sudah menjadi salah satu bagian terindah dalam hidup aku ya.

Terima kasih karena telah mengajarkan aku arti sabar, arti percaya, arti menghargai seseorang, dan arti mencintai dengan tulus.

Mungkin aku gak bisa memberikan hadiah yang paling mahal.
Aku juga gak bisa memberikan sesuatu yang sempurna.

Tapi aku berharap website kecil ini bisa menjadi pengingat...
bahwa ada seseorang yang meluangkan waktu, tenaga, dan perasaannya hanya untuk membuatmu tersenyum di hari ulang tahunmu.

Karena buat aku...

Senyummu selalu punya cara untuk membuat semuanya terasa lebih baik.

Sekali lagi, Selamat bertambah usia, Victor.

Semoga tahun ini menjadi awal dari banyak kebahagiaan baru, banyak mimpi yang tercapai, dan banyak cerita indah yang akan kamu kenang seumur hidup.

Tetaplah menjadi pribadi yang baik, rendah hati, penyayang, dan selalu membawa kebaikan untuk orang-orang di sekitarmu.

Aku bangga pernah berjalan bersamamu sampai sejauh ini.

Dan apa pun yang akan terjadi nanti...
aku akan selalu mendoakan yang terbaik untukmu.

Aku berharap bisa tua bersama kamu. Bisa punya keluarga kecil sama kamu. 
Kalau memang kita memang ditakdirkan bersama, aku harap kamu juga punya semangat untuk memperjuangkan aku dan berubah untuk hubungan kita sampai waktunya kita berjalan bersama di Altar nanti.


Thank you for existing.
Thank you for every memory.
Thank you for being you.

I love you, always.

with love, fika🤍`;







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
