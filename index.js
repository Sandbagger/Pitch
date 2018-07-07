 document.addEventListener('DOMContentLoaded', setListeners);

let scroll = function (arg){
    document.querySelector(arg).scrollIntoView({ 
  behavior: 'smooth', block: "start", inline: "nearest" 
});
}


function setListeners(){
    console.log("setting setListeners")

  $('.nav-link').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    },750);
});

    $(".arrow-bio").click(scroll.bind(this, "#bio"));
    $(".arrow-portfolio").click(scroll.bind(this, "#projects"));
    $(".arrow-contact").click(scroll.bind(this, "#contact"));
}



