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
const secondinnerTop=window.document.querySelectorAll(".look-book-second-layer .inner-top");
secondinnerTop.forEach((element)=>{
  element.addEventListener("mouseover",()=>{
    element.classList.add("active");
  });
  element.addEventListener("mouseleave",()=>{
    element.classList.remove("active");
  });
});
const firstinnerTop=window.document.querySelectorAll(".look-book-first-layer .inner-top");
firstinnerTop.forEach((element)=>{
  element.addEventListener("mouseover",()=>{
    element.classList.add("active");
  });
  element.addEventListener("mouseleave",()=>{
    element.classList.remove("active");
  });
});
// --------------------------------cust-menu-bar-start--------------------------------------------
const cust_menu_bar_close=window.document.querySelector(".cust-menu-bar .close");
const cust_header_left_menu=window.document.querySelector(".cust-header-left-menu .menu");
const cust_menu_bar=window.document.querySelector(".cust-menu-bar");
cust_header_left_menu.addEventListener("click",function(event){
  cust_menu_bar.classList.add("active");
})
cust_menu_bar_close.addEventListener("click",function(event){
  cust_menu_bar.classList.remove("active");
})
// --------------------------------cust-menu-bar-end----------------------------------------------
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
})