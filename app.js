let menuBtn = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll =() =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
    if(window.scrollY > 150){
        document.querySelector('.header-2').classList.add('active');
    }
    else{
        document.querySelector('.header-2').classList.remove('active');
    }
}

let countDate = new Date("aug 28, 2021 00:00:00").getTime();

function countDown(){

let now = new Date().getTime();
gap = countDate - now;

let seconds = 1000;
let minutes = seconds * 60;
let hours = minutes * 60;
let day = hours * 24;

let d = Math.floor(gap / (day));
let h = Math.floor((gap % (day)) / (hours));
let m = Math.floor((gap % (hours)) / (minutes));
let s = Math.floor((gap % (minutes)) / (seconds));


document.getElementById('days').innerText = d;
document.getElementById('hours').innerText = h;
document.getElementById('minutes').innerText = m;
document.getElementById('seconds').innerText = s;

}
setInterval(function(){
    countDown()
},1000)