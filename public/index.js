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




