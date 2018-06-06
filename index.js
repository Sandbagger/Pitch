
/*Welcome splash*/

let TxtType = class{
   constructor(el, arrOfStrings) {
        this.arrOfStrings = arrOfStrings;
        this.el = el;
        this.loopNum = 0;
        this.period = 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    tick(){
        var i = this.loopNum % this.arrOfStrings.length;
        var fullTxt = this.arrOfStrings[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(() => {this.tick()}, delta);
    }

}

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var arrOfStrings = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (arrOfStrings) {
              new TxtType(elements[i], JSON.parse(arrOfStrings), period);
            }
        }  
        
    };


    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var arrOfStrings = elements[i].getAttribute('data-type');
            if (arrOfStrings) {
             new TxtType(elements[i], JSON.parse(arrOfStrings));
            }
        }  
        
    };


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



