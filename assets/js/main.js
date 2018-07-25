const name = "Gehrig Rankin";
const role = "Full Stack Web Developer"
const projects = "projects";
const skills = "skills";
let i = 0;
let j = 0;
let p = 0;
let s = 0;
let speed = 100;
let done;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$(document).ready(function(){
    typeName();
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
$('#nav-skills').on('click',function(){ 
    scrollTo("#skills", 1000); 

    setTimeout(function(){
        typeSkills(); 
    }, 1500);
});
$('#nav-contact').on('click',function(){ 
    scrollTo("#contact", 1000); 
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

function typeSkills(){
    if (s < skills.length) {
        document.getElementById("skills-title").innerHTML += skills.charAt(s);
        s++;
        setTimeout(typeSkills, speed);
    }
}



const scrollTo = (where, speed) => {
    const position = $(where).offset().top;

    $('html,body').animate({
        scrollTop: position
    }, speed);
}

