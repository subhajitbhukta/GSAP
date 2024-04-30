gsap.from("#page1 #box",{
    scale:0,
    duration:2,
    delay:1,
    rotate:360
})

gsap.from("#page2 #box", {
  scale: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller:"body",
    markers:true,
    start:"top 60%",
    scrub:4 // 2 for smoothness
    // scrub:true  
  },
});

// gsap.from("#page2 h1",{
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         markers:true,
//         start:"top 60%"
//     }
// })

// gsap.from("#page2 h2", {
//   opacity: 0,
//   duration: 2,
//   x: -500,
//   scrollTrigger: {
//     trigger: "#page2 h2",
//     markers: true,
//     start: "top 60%",
//   },
// });