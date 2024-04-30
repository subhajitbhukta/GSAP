var main=document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");
main.addEventListener("mousemove",function(dets){
gsap.to(cursor,{
  x:dets.x,
  y:dets.y,
  duration:0.7,
  // ease:"back.out"
})
})

image.addEventListener("mouseenter", function (dets) {
 cursor.innerHTML = "view more";
  gsap.to(cursor, {
    scale: 2,
    backgroundColor: "#ffffff8a",
  });
});
image.addEventListener("mouseleave", function (dets) {
  cursor.innerHTML=""
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});