const name = "Gehrig Rankin";
const role = "Full Stack Web Developer"
const projects = "PROJECTS";
const career = "CAREER";
let i = 0;
let j = 0;
let p = 0;
let c = 0;
let speed = 100;
let done;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$(document).ready(function(){
    typeName();
});

$('#quick-contact').on("click", function(){
    $('#twitter-btn').toggleClass('transition-twit');
    $('#linkedin-btn').toggleClass('transition-linkedin');
    $('#github-btn').toggleClass('transition-github');
});


$('#nav-about').on('click',function(){ 
    scrollTo("#about-me", 1000); 
});
$('#nav-projects').on('click',function(){
    scrollTo("#portfolio", 1000); 
  
    setTimeout(function(){
        typeProject(); 
    }, 1000);
        
});
$('#nav-career').on('click',function(){ 
    scrollTo("#career", 1000); 

    setTimeout(function(){
        typeCareer(); 

        setTimeout(function(){
            typeCareerSub();
        }, 1000);
    }, 1000);
});
$('#nav-contact').on('click',function(){ 
    scrollTo("#contact", 1000); 

    setTimeout(function(){
        typeContact(); 
    }, 1000);
});



function typeName(){
    if (i < name.length) {
        document.getElementById("land-full-name").innerHTML += name.charAt(i);
        i++;
        setTimeout(typeName, speed);
    }
    let text = $('#land-full-name').text();

    if (text.length == name.length){
        done = "yes"
    }
    if (done === "yes"){
        typeRole();
    }
   
}

function typeRole(){
    if (j < role.length) {
        document.getElementById("land-role").innerHTML += role.charAt(j);
        j++;
        setTimeout(typeRole, speed);
    }
}

function typeProject(){
    if (p < projects.length) {
        document.getElementById("project-title").innerHTML += projects.charAt(p);
        p++;
        setTimeout(typeProject, speed);
    }
}

function typeCareer(){
    if (c < career.length) {
        document.getElementById("career-title").innerHTML += career.charAt(c);
        c++;
        setTimeout(typeCareer, speed);
    }
}

let ed = 0;
let sk = 0;
let ex = 0;

let education = 'Education';
let skills = 'Skills';
let experience = 'Experience';



function typeCareerSub(){
    if (ed < education.length) {
        document.getElementById("education-title").innerHTML += education.charAt(ed);
        ed++;
    }
    if (sk < skills.length) {
        document.getElementById("skills-title").innerHTML += skills.charAt(sk);
        sk++;
    }
    if (ex < experience.length) {
        document.getElementById("experience-title").innerHTML += experience.charAt(ex);
        ex++;
        setTimeout(typeCareerSub, speed);
    }
}

let co = 0;
const contact = 'CONTACT';

function typeContact(){
    if (co < contact.length) {
        document.getElementById("contact-title").innerHTML += contact.charAt(co);
        co++;
        setTimeout(typeContact, speed);
    }
}

const scrollTo = (where, speed) => {
    const position = $(where).offset().top;

    $('html,body').animate({
        scrollTop: position
    }, speed);
}

