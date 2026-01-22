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
