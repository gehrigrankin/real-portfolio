window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


$('#nav-about').on('click',function(){ 
    isActive($(this));
    
    scrollTo("#about-me", 1000); 
});
$('#nav-projects').on('click',function(){
    isActive($(this));
    
    scrollTo("#portfolio", 1000); 
  
    setTimeout(function(){
        typeProject(); 
    }, 1000);
        
});
$('#nav-career').on('click',function(){
    isActive($(this));

    scrollTo("#career", 1000); 

    setTimeout(function(){
        typeCareer(); 

        setTimeout(function(){
            typeCareerSub();
        }, 1000);
    }, 1000);
});
$('#nav-contact').on('click',function(){ 
    isActive($(this));

    scrollTo("#contact", 1000); 

    setTimeout(function(){
        typeContact(); 
    }, 1000);
});

const isActive = (element) => {
    if (!element.hasClass('active')){
        element.parent().children().removeClass('active');
        element.addClass('active');
    }
}

const scrollTo = (where, speed) => {
    const position = $(where).offset().top;

    $('html,body').animate({
        scrollTop: position
    }, speed);
}
