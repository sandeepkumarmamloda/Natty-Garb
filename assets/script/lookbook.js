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