/* ============================================================
   Zzz_cursi — Interactions du site vitrine
   ============================================================ */

(function () {
  "use strict";

  /* --- Année courante --- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --- Navigation : fond au défilement --- */
  var nav = document.getElementById("nav");
  var onScroll = function () {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --- Menu mobile --- */
  var burger = document.getElementById("burger");
  var navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });

  /* --- Apparition des éléments au défilement --- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { revealObserver.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  /* --- Barres de compétences animées --- */
  var bars = document.querySelectorAll(".skill-bar");
  if ("IntersectionObserver" in window) {
    var barObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            barObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach(function (bar) { barObserver.observe(bar); });
  } else {
    bars.forEach(function (bar) { bar.classList.add("animate"); });
  }

  /* --- Lien de navigation actif selon la section visible --- */
  var sections = document.querySelectorAll("section[id]");
  var links = document.querySelectorAll(".nav-links a");
  if ("IntersectionObserver" in window && sections.length) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            links.forEach(function (link) {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + entry.target.id
              );
            });
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach(function (section) { sectionObserver.observe(section); });
  }
})();
