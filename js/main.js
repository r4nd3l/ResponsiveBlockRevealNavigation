var t1 = new TimelineMax({paused: true});
t1.to(".block", 1.2, {
  width: "25%",
  ease: Power4.easeInOut
});

t1.staggerFrom(".menu ul li", 0.8, {y: 40, opacity: 0, ease: Power2.easeOut}, 0.2);

t1.reverse();
$(document).on("click", ".menu-btn", function(){
  t1.reversed(!t1.reversed());
});
$(document).on("click", ".back", function(){
  t1.reversed(!t1.reversed());
});
