const lenis = new Lenis({
  duration: 1.2,
  wheelMultiplier: 0.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  direction: "vertical",
  gestureDirection: "vertical",
  smoothTouch: true,
});


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf);
// ========================================================animate footer-content============================================
// =========================================================rotating-logo===================================================
const nattyLogo=document.querySelector(".natty-footer-logo .logo");
nattyLogo.addEventListener("mouseover",()=>{
  nattyLogo.classList.add("rotating");
});
nattyLogo.addEventListener("mouseleave",()=>{
  nattyLogo.classList.remove("rotating");
});
const fContentArray=document.querySelectorAll(".natty-footer .natty-footer-inner .natty-footer-inner-right .natty-footer-inner-right-collections .body a");
fContentArray.forEach((element)=>{
  element.addEventListener("mouseover",()=>{
    element.classList.toggle("active");
  });
  element.addEventListener("mouseleave",function(){
    this.classList.toggle("active");
  })
});
// -----
const fContentArray2=document.querySelectorAll(".natty-footer .natty-footer-inner .natty-footer-inner-right .natty-footer-inner-right-customer-services .body a");
fContentArray2.forEach((element)=>{
  element.addEventListener("mouseover",()=>{
    element.classList.toggle("active");
  });
  element.addEventListener("mouseleave",function(){
    this.classList.toggle("active");
  });
});
// -----
const fContentArray3=document.querySelectorAll(".natty-footer .natty-footer-inner .natty-footer-inner-right .natty-footer-inner-right-brand .body a");
fContentArray3.forEach((element)=>{
  element.addEventListener("mouseover",()=>{
    element.classList.toggle("active");
  });
  element.addEventListener("mouseleave",function(){
    this.classList.toggle("active");
  })
});
// ===========================================================================================responsive================================================================================
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".natty-footer-child");

  items.forEach(item => {
    const body = item.querySelector(".body");

    // initial state
    body.style.height = "0px";
    body.style.overflow = "hidden";
    body.style.transition = "height 0.5s ease";

    item.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // sab close karo
      items.forEach(i => {
        i.classList.remove("active");
        const b = i.querySelector(".body");
        b.style.height = "0px";
      });

      if (!isActive) {
        item.classList.add("active");

        /* 🔑 REAL HEIGHT MEASURE KARNE KA SAHI TAREEKA */
        body.style.height = "auto";                // natural height
        const fullHeight = body.scrollHeight + "px"; // measure
        body.style.height = "0px";                 // wapas 0

        requestAnimationFrame(() => {
          body.style.height = fullHeight;          // animate to real height
        });
      }
    });
  });
});