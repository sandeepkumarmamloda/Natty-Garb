
document.addEventListener("DOMContentLoaded", () => {
// --------------------------------cust-new-arrivals-view-box-start--------------------------------
const viewBox = document.querySelector(".cust-new-arrivals-top-right-wrapper");

viewBox.addEventListener("mouseover", () => {
  viewBox.classList.toggle("active");
});

viewBox.addEventListener("mouseleave", () => {
  viewBox.classList.toggle("active");
});

// --------------------------------cust-new-arrivals-view-box-end----------------------------------


// --------------------------------cust-new-arrivals-start--------------------------------

let calculateNew = 0;

const newArrivalsBottom = document.querySelector(".cust-new-arrivals-bottom-images");
const newArrivalsL = document.querySelector(".cust-new-arrivals-left-button");
const newArrivalsR = document.querySelector(".cust-new-arrivals-right-button");
const newArrivalsImage = document.querySelector(".cust-new-arrivals-bottom-images .images");

const maxScrollNew =
  newArrivalsBottom.scrollWidth - newArrivalsBottom.clientWidth;


// ---------------- INITIAL STATE ----------------
newArrivalsL.style.color = "rgba(0,0,0,0.3)";
newArrivalsR.style.color = "rgba(0,0,0,1)";


// ---------------- SCROLL DETECTION ----------------
newArrivalsBottom.addEventListener("scroll", () => {
  calculateNew = newArrivalsBottom.scrollLeft;

  // RIGHT END
  if (calculateNew >= maxScrollNew - 2) {
    newArrivalsR.style.color = "rgba(0,0,0,0.3)";
  } else {
    newArrivalsR.style.color = "rgba(0,0,0,1)";
  }

  // LEFT END
  if (calculateNew <= 2) {
    newArrivalsL.style.color = "rgba(0,0,0,0.3)";
  } else {
    newArrivalsL.style.color = "rgba(0,0,0,1)";
  }
});


// ---------------- LEFT BUTTON ----------------
newArrivalsL.addEventListener("click", () => {
  calculateNew -= newArrivalsImage.offsetWidth;

  if (calculateNew <= 0) {
    calculateNew = 0;
  }

  newArrivalsBottom.scrollTo({
    left: calculateNew,
    behavior: "smooth"
  });
});


// ---------------- RIGHT BUTTON ----------------
newArrivalsR.addEventListener("click", () => {
  calculateNew += newArrivalsImage.offsetWidth;

  if (calculateNew >= maxScrollNew) {
    calculateNew = maxScrollNew;
  }

  newArrivalsBottom.scrollTo({
    left: calculateNew,
    behavior: "smooth"
  });
});

// --------------------------------cust-new-arrivals-end----------------------------------
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
// -------------------------------------rotating-logo----------------------------------------
  const nattyLogo=document.querySelector(".natty-footer-logo .logo");
  nattyLogo.addEventListener("mouseover",()=>{
    nattyLogo.classList.add("rotating");
  });
  nattyLogo.addEventListener("mouseleave",()=>{
    nattyLogo.classList.remove("rotating");
  });
  // --------------------------------animate footer-content--------------------------------------------
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
});
// ===========================================================================================responsive================================================================================
document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------------menu-bar-start----------------------------------------
  const r_cust_header_right_menu=window.document.querySelector(".r-cust-header-right-menu");
  const cust_menu_bar=window.document.querySelector(".cust-menu-bar");
  r_cust_header_right_menu.addEventListener("click",function(){
      cust_menu_bar.classList.add("active");
  });
  // ---------------------------------menu-bar-end------------------------------------------
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
  // -------------------header-logic---------------------
  let lastScroll = 0;
  const header = document.querySelector(".cust-header-wrapper");
  const marquee = window.document.querySelector(".cust-marquee-content-main");
  window.addEventListener("scroll", () => {
    // ✅ sirf 950px ya usse kam par hi kaam kare
    if (window.innerWidth <= 950) {
  
      let currentScroll = window.scrollY;
  
      if (currentScroll > lastScroll) {
        header.classList.add("hidden");
        marquee.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
        marquee.classList.remove("hidden");
      }
  
      lastScroll = currentScroll;
  
    } else {
      // 🔹 desktop pe hidden class hata do
      header.classList.remove("hidden");
    }
  });
});