document.addEventListener("DOMContentLoaded", () => {
 const lenis = new Lenis({
  duration: 1.2,
  wheelMultiplier: 0.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  direction: "vertical",
  gestureDirection: "vertical",
  smoothTouch: true,   // ✅ FIX
});


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf);
const hero = document.querySelector(".hero-section");
const originalSlides = document.querySelectorAll(
  ".hero-section-image-wrapper"
);

if (!originalSlides.length) return;

const leftBtn = document.querySelector(".left");
const centerBtn = document.querySelector(".center");
const rightBtn = document.querySelector(".right");

const slideCount = originalSlides.length;
const middleIndex = Math.floor(slideCount / 2);

// ===============================
// CLONES
// ===============================
const firstClone = originalSlides[0].cloneNode(true);
const lastClone = originalSlides[slideCount - 1].cloneNode(true);

hero.appendChild(firstClone);
hero.insertBefore(lastClone, originalSlides[0]);

const allSlides = hero.querySelectorAll(".hero-section-image-wrapper");

// first real slide
let index = 1;

// ===============================
// SCROLL FUNCTION
// ===============================
function scrollToSlide(i, smooth = true) {
  const slide = allSlides[i];
  if (!slide) return;

  const left =
    slide.offsetLeft -
    hero.clientWidth / 2 +
    slide.offsetWidth / 2;

  hero.scrollTo({
    left,
    behavior: smooth ? "smooth" : "auto",
  });

  let realIndex = i - 1;

  if (realIndex < 0) realIndex = slideCount - 1;
  if (realIndex >= slideCount) realIndex = 0;

  updateActive(realIndex);
}

// ===============================
// ACTIVE BUTTONS
// ===============================
function updateActive(realIndex) {
  leftBtn?.classList.remove("active");
  centerBtn?.classList.remove("active");
  rightBtn?.classList.remove("active");

  if (realIndex === 0) leftBtn?.classList.add("active");
  else if (realIndex === middleIndex)
    centerBtn?.classList.add("active");
  else if (realIndex === slideCount - 1)
    rightBtn?.classList.add("active");
}

// ===============================
// INITIAL POSITION
// ===============================
scrollToSlide(index, false);

// ===============================
// INFINITE EDGE FIX
// ===============================
hero.addEventListener("scroll", () => {
  const slideWidth = allSlides[0].offsetWidth;

  // start clone
  if (hero.scrollLeft <= 0) {
    index = slideCount;
    scrollToSlide(index, false);
  }

  // end clone
  if (
    hero.scrollLeft >=
    slideWidth * (slideCount + 1)
  ) {
    index = 1;
    scrollToSlide(index, false); // 🔥 NO SMOOTH
  }
});

// ===============================
// AUTO SLIDER (LEFT → RIGHT ONLY)
// ===============================
setInterval(() => {
  index++;

  // real slides → smooth
  scrollToSlide(index, true);

  // clone → real jump
  if (index === slideCount + 1) {
    setTimeout(() => {
      index = 1;

      // 🔥 direction fix
      scrollToSlide(index, false);
    }, 600);
  }
}, 8000);

// ===============================
// BUTTONS
// ===============================
leftBtn?.addEventListener("click", () => {
  index = 1;
  scrollToSlide(index);
});

centerBtn?.addEventListener("click", () => {
  index = middleIndex + 1;
  scrollToSlide(index);
});

rightBtn?.addEventListener("click", () => {
  index = slideCount;
  scrollToSlide(index);
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
// --------------------------------cust-new-arrivals-view-box-start--------------------------------
const viewBox = document.querySelector(".cust-new-arrivals-top-right-wrapper");

viewBox.addEventListener("mouseover", () => {
  viewBox.classList.toggle("active");
});

viewBox.addEventListener("mouseleave", () => {
  viewBox.classList.toggle("active");
});

// --------------------------------cust-new-arrivals-view-box-end----------------------------------
// --------------------------------cust-shirts-view-box-start--------------------------------------

const shirtsViewBox = document.querySelector(".cust-shirts-top-right-wrapper");

shirtsViewBox.addEventListener("mouseover", () => {
  shirtsViewBox.classList.toggle("active");
});

shirtsViewBox.addEventListener("mouseleave", () => {
  shirtsViewBox.classList.toggle("active");
});

// --------------------------------cust-shirts-view-box-end----------------------------------------
// --------------------------------cust-t-shirts-view-box-start------------------------------------

const tshirtsViewBox = document.querySelector(".cust-t-shirts-top-right-wrapper");

tshirtsViewBox.addEventListener("mouseover", () => {
  tshirtsViewBox.classList.toggle("active");
});

tshirtsViewBox.addEventListener("mouseleave", () => {
  tshirtsViewBox.classList.toggle("active");
});

// --------------------------------cust-t-shirts-view-box-end--------------------------------------
// --------------------------------cust-hoodies-view-box-start-------------------------------------

const hoodiesViewBox = document.querySelector(".cust-hoodies-top-right-wrapper");

hoodiesViewBox.addEventListener("mouseover", () => {
  hoodiesViewBox.classList.toggle("active");
});

hoodiesViewBox.addEventListener("mouseleave", () => {
  hoodiesViewBox.classList.toggle("active");
});

// --------------------------------cust-hoodies-view-box-end---------------------------------------
// --------------------------------cust-bottoms-view-box-start-------------------------------------

const bottomsViewBox = document.querySelector(".cust-bottoms-top-right-wrapper");

bottomsViewBox.addEventListener("mouseover", () => {
  bottomsViewBox.classList.toggle("active");
});

bottomsViewBox.addEventListener("mouseleave", () => {
  bottomsViewBox.classList.toggle("active");
});

// --------------------------------cust-bottoms-view-box-end---------------------------------------


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
newArrivalsL.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
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
newArrivalsR.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
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




// --------------------------------cust-shirts-start--------------------------------

let calculateShirts = 0;

const shirtsBottom = document.querySelector(".cust-shirts-bottom-images");
const shirtsL = document.querySelector(".cust-shirts-left-button");
const shirtsR = document.querySelector(".cust-shirts-right-button");
const shirtsImage = document.querySelector(".cust-shirts-bottom-images .images");

const maxScrollShirts =
  shirtsBottom.scrollWidth - shirtsBottom.clientWidth;


// ---------------- INITIAL STATE ----------------
shirtsL.style.color = "rgba(0,0,0,0.3)";
shirtsR.style.color = "rgba(0,0,0,1)";


// ---------------- SCROLL DETECTION ----------------
shirtsBottom.addEventListener("scroll", () => {
  calculateShirts = shirtsBottom.scrollLeft;

  // RIGHT END
  if (calculateShirts >= maxScrollShirts - 2) {
    shirtsR.style.color = "rgba(0,0,0,0.3)";
  } else {
    shirtsR.style.color = "rgba(0,0,0,1)";
  }

  // LEFT END
  if (calculateShirts <= 2) {
    shirtsL.style.color = "rgba(0,0,0,0.3)";
  } else {
    shirtsL.style.color = "rgba(0,0,0,1)";
  }
});


// ---------------- LEFT BUTTON ----------------
shirtsL.addEventListener("click", () => {
  calculateShirts -= shirtsImage.offsetWidth;

  if (calculateShirts <= 0) {
    calculateShirts = 0;
  }

  shirtsBottom.scrollTo({
    left: calculateShirts,
    behavior: "smooth"
  });
});


// ---------------- RIGHT BUTTON ----------------
shirtsR.addEventListener("click", () => {
  calculateShirts += shirtsImage.offsetWidth;

  if (calculateShirts >= maxScrollShirts) {
    calculateShirts = maxScrollShirts;
  }

  shirtsBottom.scrollTo({
    left: calculateShirts,
    behavior: "smooth"
  });
});

// --------------------------------cust-shirts-end----------------------------------




// --------------------------------cust-t-shirts-start--------------------------------

let calculateTshirts = 0;

const tshirtsBottom = document.querySelector(".cust-t-shirts-bottom-images");
const tshirtsL = document.querySelector(".cust-t-shirts-left-button");
const tshirtsR = document.querySelector(".cust-t-shirts-right-button");
const tshirtsImage = document.querySelector(".cust-t-shirts-bottom-images .images");

const maxScrollTshirts =
  tshirtsBottom.scrollWidth - tshirtsBottom.clientWidth;


// ---------------- INITIAL STATE ----------------
tshirtsL.style.color = "rgba(0,0,0,0.3)";
tshirtsR.style.color = "rgba(0,0,0,1)";


// ---------------- SCROLL DETECTION ----------------
tshirtsBottom.addEventListener("scroll", () => {
  calculateTshirts = tshirtsBottom.scrollLeft;

  // RIGHT END
  if (calculateTshirts >= maxScrollTshirts - 2) {
    tshirtsR.style.color = "rgba(0,0,0,0.3)";
  } else {
    tshirtsR.style.color = "rgba(0,0,0,1)";
  }

  // LEFT END
  if (calculateTshirts <= 2) {
    tshirtsL.style.color = "rgba(0,0,0,0.3)";
  } else {
    tshirtsL.style.color = "rgba(0,0,0,1)";
  }
});


// ---------------- LEFT BUTTON ----------------
tshirtsL.addEventListener("click", () => {
  calculateTshirts -= tshirtsImage.offsetWidth;

  if (calculateTshirts <= 0) {
    calculateTshirts = 0;
  }

  tshirtsBottom.scrollTo({
    left: calculateTshirts,
    behavior: "smooth"
  });
});


// ---------------- RIGHT BUTTON ----------------
tshirtsR.addEventListener("click", () => {
  calculateTshirts += tshirtsImage.offsetWidth;

  if (calculateTshirts >= maxScrollTshirts) {
    calculateTshirts = maxScrollTshirts;
  }

  tshirtsBottom.scrollTo({
    left: calculateTshirts,
    behavior: "smooth"
  });
});

// --------------------------------cust-t-shirts-end----------------------------------




// --------------------------------cust-hoodies-start--------------------------------

let calculateHoodies = 0;

const hoodiesBottom = document.querySelector(".cust-hoodies-bottom-images");
const hoodiesL = document.querySelector(".cust-hoodies-left-button");
const hoodiesR = document.querySelector(".cust-hoodies-right-button");
const hoodiesImage = document.querySelector(".cust-hoodies-bottom-images .images");

const maxScrollHoodies =
  hoodiesBottom.scrollWidth - hoodiesBottom.clientWidth;


// ---------------- INITIAL STATE ----------------
hoodiesL.style.color = "rgba(0,0,0,0.3)";
hoodiesR.style.color = "rgba(0,0,0,1)";


// ---------------- SCROLL DETECTION ----------------
hoodiesBottom.addEventListener("scroll", () => {
  calculateHoodies = hoodiesBottom.scrollLeft;

  // RIGHT END
  if (calculateHoodies >= maxScrollHoodies - 2) {
    hoodiesR.style.color = "rgba(0,0,0,0.3)";
  } else {
    hoodiesR.style.color = "rgba(0,0,0,1)";
  }

  // LEFT END
  if (calculateHoodies <= 2) {
    hoodiesL.style.color = "rgba(0,0,0,0.3)";
  } else {
    hoodiesL.style.color = "rgba(0,0,0,1)";
  }
});


// ---------------- LEFT BUTTON ----------------
hoodiesL.addEventListener("click", () => {
  calculateHoodies -= hoodiesImage.offsetWidth;

  if (calculateHoodies <= 0) {
    calculateHoodies = 0;
  }

  hoodiesBottom.scrollTo({
    left: calculateHoodies,
    behavior: "smooth"
  });
});


// ---------------- RIGHT BUTTON ----------------
hoodiesR.addEventListener("click", () => {
  calculateHoodies += hoodiesImage.offsetWidth;

  if (calculateHoodies >= maxScrollHoodies) {
    calculateHoodies = maxScrollHoodies;
  }

  hoodiesBottom.scrollTo({
    left: calculateHoodies,
    behavior: "smooth"
  });
});

// --------------------------------cust-hoodies-end----------------------------------





// --------------------------------cust-bottoms-start--------------------------------

let calculateBottoms = 0;

const bottomsBottom = document.querySelector(".cust-bottoms-bottom-images");
const bottomsL = document.querySelector(".cust-bottoms-left-button");
const bottomsR = document.querySelector(".cust-bottoms-right-button");
const bottomsImage = document.querySelector(".cust-bottoms-bottom-images .images");

const maxScrollBottoms =
  bottomsBottom.scrollWidth - bottomsBottom.clientWidth;


// ---------------- INITIAL STATE ----------------
bottomsL.style.color = "rgba(0,0,0,0.3)";
bottomsR.style.color = "rgba(0,0,0,1)";


// ---------------- SCROLL DETECTION ----------------
bottomsBottom.addEventListener("scroll", () => {
  calculateBottoms = bottomsBottom.scrollLeft;

  // RIGHT END
  if (calculateBottoms >= maxScrollBottoms - 2) {
    bottomsR.style.color = "rgba(0,0,0,0.3)";
  } else {
    bottomsR.style.color = "rgba(0,0,0,1)";
  }

  // LEFT END
  if (calculateBottoms <= 2) {
    bottomsL.style.color = "rgba(0,0,0,0.3)";
  } else {
    bottomsL.style.color = "rgba(0,0,0,1)";
  }
});


// ---------------- LEFT BUTTON ----------------
bottomsL.addEventListener("click", () => {
  calculateBottoms -= bottomsImage.offsetWidth;

  if (calculateBottoms <= 0) {
    calculateBottoms = 0;
  }

  bottomsBottom.scrollTo({
    left: calculateBottoms,
    behavior: "smooth"
  });
});


// ---------------- RIGHT BUTTON ----------------
bottomsR.addEventListener("click", () => {
  calculateBottoms += bottomsImage.offsetWidth;

  if (calculateBottoms >= maxScrollBottoms) {
    calculateBottoms = maxScrollBottoms;
  }

  bottomsBottom.scrollTo({
    left: calculateBottoms,
    behavior: "smooth"
  });
});

// --------------------------------cust-bottoms-end----------------------------------


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
  // ---------------------------------menu-bar-start----------------------------------------
  const r_cust_header_right_menu=window.document.querySelector(".r-cust-header-right-menu");
  const cust_menu_bar=window.document.querySelector(".cust-menu-bar");
  r_cust_header_right_menu.addEventListener("click",function(){
      cust_menu_bar.classList.add("active");
  })
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
});

