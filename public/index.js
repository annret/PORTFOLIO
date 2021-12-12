//side-scroll timeline
gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".flexcontainer");

gsap.to(sections, {
  xPercent: -100 * (sections.length -1),
  ease: "none",
  scrollTrigger: {
    trigger: "#timeline",
   pin: true,
   scrub: 1,

    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=4500",
  }
});

//animation project-images
ScrollTrigger.matchMedia({

  "(min-width: 650px)": function(){
    gsap.to("#img-project1", {
      scrollTrigger: {
          trigger:  "#img-project1",
          scrub: 1,
          //markers: true,
          end: "+=300px",
          start: "top 20%"
      }
     ,
      y :  -100,
    });
  
    gsap.to("#img-project2", {
      scrollTrigger: {
          trigger:  "#img-project2",
          scrub: 1,
          //markers: true,
          end: "+=300px",
          start: "top 50%"
      }
     ,
      y :  -100,
    });
    gsap.to("#img-project3", {
      scrollTrigger: {
          trigger:  "#img-project3",
          scrub: 1,
          //markers: true,
          end: "+=300px",
          start: "top 50%"
      }
     ,
      y :  -100,
    });
  }
});


//circle cursor
options = {
  "cursorOuter": "circle-basic",
  "hoverEffect": "pointer-blur",
  "hoverItemMove": false,
  "defaultCursor": false,
  "outerWidth": 30,
  "outerHeight": 30,
      };
      
    magicMouse(options);


//animations
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('#projects p');
      listelements1 = document.querySelectorAll('#programming-skills li');
      listelements2 = document.querySelectorAll('#creative-skills li');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
        
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('p-animation');
        }
      }
      for (var i = 0; i < listelements1.length; i++) {
        var element = listelements1[i];
        var positionFromTop = listelements1[i].getBoundingClientRect().top;
        
        if (positionFromTop - windowHeight <= 100) {
          element.classList.add('li-animation');
        }
      }
      for (var i = 0; i < listelements2.length; i++) {
        var element = listelements2[i];
        var positionFromTop = listelements2[i].getBoundingClientRect().top;
        
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('li-animation');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();