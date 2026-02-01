document.addEventListener("DOMContentLoaded",()=>{
  // -------------------------------------rotating-logo----------------------------------------
  const nattyLogo=document.querySelector(".natty-footer-logo .logo");
  nattyLogo.addEventListener("mouseover",()=>{
    nattyLogo.classList.add("rotating");
  });
  nattyLogo.addEventListener("mouseleave",()=>{
    nattyLogo.classList.remove("rotating");
  });
  // --------------------------------cust-menu-bar-start--------------------------------------------
  const cust_menu_bar_close=window.document.querySelector(".cust-menu-bar .close");
  const cust_header_left_menu=window.document.querySelector(".cust-header-left-menu .menu");
  const cust_menu_bar=window.document.querySelector(".cust-menu-bar");
  cust_header_left_menu.addEventListener("click",function(event){
    cust_menu_bar.classList.add("active");
  });
  cust_menu_bar_close.addEventListener("click",function(event){
    cust_menu_bar.classList.remove("active");
  });
// --------------------------------cust-menu-bar-end----------------------------------------------
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
})
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
// ---------------------------------menu-bar-start----------------------------------------
  const r_cust_header_right_menu=window.document.querySelector(".r-cust-header-right-menu");
  const cust_menu_bar=window.document.querySelector(".cust-menu-bar");
  r_cust_header_right_menu.addEventListener("click",function(){
      cust_menu_bar.classList.add("active");
  })
  // ---------------------------------menu-bar-end------------------------------------------
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
