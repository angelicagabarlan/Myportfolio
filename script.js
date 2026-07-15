// ==========================================
// LOADER
// ==========================================

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},1200);

});

// ==========================================
// STICKY NAVBAR
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

header.classList.toggle("sticky",window.scrollY>30);

});

// ==========================================
// SCROLL PROGRESS BAR
// ==========================================

const progress = document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

const totalHeight =
document.body.scrollHeight-window.innerHeight;

const progressHeight =
(window.pageYOffset/totalHeight)*100;

if(progress){

progress.style.width=progressHeight+"%";

}

});

// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ==========================================
// REVEAL ANIMATION
// ==========================================

const reveals=document.querySelectorAll("section");

function revealSections(){

reveals.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

const trigger=window.innerHeight-120;

if(top<trigger){

sec.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================

const topBtn=document.createElement("div");

topBtn.className="top-btn";

topBtn.innerHTML="<i class='ri-arrow-up-line'></i>";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("show");

});

}

// ==========================================
// HERO IMAGE EFFECT
// ==========================================

const heroImage=document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

if(!heroImage) return;

const x=(window.innerWidth/2-e.pageX)/40;

const y=(window.innerHeight/2-e.pageY)/40;

heroImage.style.transform=`translate(${x}px,${y}px)`;

});

// ==========================================
// TYPEWRITER EFFECT
// ==========================================

const texts=[

"Information Systems Student",

"Future Web Developer",

"Creative Designer",

"Frontend Developer"

];

let speed=120;

let index=0;

let char=0;

const typing=document.querySelector(".hero-text h2");

function typeEffect(){

if(!typing) return;

if(char<texts[index].length){

typing.textContent+=texts[index].charAt(char);

char++;

setTimeout(typeEffect,speed);

}else{

setTimeout(eraseEffect,1800);

}

}

function eraseEffect(){

if(char>0){

typing.textContent=texts[index].substring(0,char-1);

char--;

setTimeout(eraseEffect,60);

}else{

index++;

if(index>=texts.length){

index=0;

}

setTimeout(typeEffect,300);

}

}

typing.textContent="";

typeEffect();
