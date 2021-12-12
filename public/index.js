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


//animation project-headline

// var fadeStart = 100; // 100px scroll or less will equiv to 1 opacity
// var fadeUntil = 200; // 200px scroll or more will equiv to 0 opacity
// var headline = $('#project-headline');

// $(window).bind('scroll', function(){
//     var offset = $(document).scrollTop()
//         ,opacity=0
//     ;
//     if( offset<=fadeStart ){
//         opacity=1;
//     }else if( offset<=fadeUntil ){
//         opacity=1-offset/fadeUntil;
//     }
//     headline.css('opacity',opacity).html(opacity);
// });


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




