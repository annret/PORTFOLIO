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




