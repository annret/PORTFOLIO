
//side-scroll timeline
gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".flexcontainer");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#timeline",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});



/*
//circle cursor
const $bigBall = document.querySelector('.cursor__ball--big');
//const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .1, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}
*/



