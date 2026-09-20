/* ============================================================
   Zzz_cursi — Site personnel (v4, défilement classique)
   ============================================================ */

(function () {
  "use strict";

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* ---------- Année courante ---------- */
  var yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Notification (toast) ---------- */
  var toastEl = $("#toast");
  var toastTimer = null;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 2400);
  }

  /* ---------- Navigation : fond au défilement + retour haut ---------- */
  var nav = $("#nav");
  var toTop = $("#toTop");
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 40);
    if (toTop) toTop.classList.toggle("show", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ---------- Menu mobile ---------- */
  var burger = $("#burger");
  var navLinks = $("#navLinks");
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

  /* ---------- Lien de navigation actif selon la section visible ---------- */
  var sections = $$("section[id]");
  var links = $$(".nav-links a");
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

  /* ---------- Apparition des éléments au défilement ---------- */
  var reveals = $$(".reveal");
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
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    reveals.forEach(function (el) { revealObserver.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Barres de compétences animées ---------- */
  var bars = $$(".skill-bar");
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

  /* ---------- Compteurs animés (format lisible) ---------- */
  function fmt(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    if (isNaN(target)) { return; }
    var duration = 1600;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * eased)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = $$("[data-count]");
  if ("IntersectionObserver" in window) {
    var countObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) { countObserver.observe(el); });
  } else {
    counters.forEach(function (el) {
      el.textContent = fmt(parseInt(el.getAttribute("data-count"), 10)) + (el.getAttribute("data-suffix") || "");
    });
  }

  /* ---------- Copier dans le presse-papiers (UID, e-mail) ---------- */
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy") ? resolve() : reject();
      } catch (err) {
        reject(err);
      } finally {
        document.body.removeChild(ta);
      }
    });
  }
  $$(".copy-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      copyText(text).then(
        function () { toast("Copié : " + text); },
        function () { toast("Impossible de copier automatiquement."); }
      );
    });
  });

  /* ---------- Visionneuse (lightbox) ---------- */
  var lightbox = $("#lightbox");
  var lightboxImg = $("#lightboxImg");
  var lightboxCaption = $("#lightboxCaption");
  var lightboxClose = $("#lightboxClose");

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxImg.alt = caption || "";
    lightboxCaption.textContent = caption || "";
    lightbox.hidden = false;
    requestAnimationFrame(function () { lightbox.classList.add("open"); });
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(function () { lightbox.hidden = true; lightboxImg.src = ""; }, 300);
  }
  $$(".gallery-item").forEach(function (item) {
    item.addEventListener("click", function () {
      openLightbox(item.getAttribute("data-full"), item.getAttribute("data-caption"));
    });
  });
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox && !lightbox.hidden) closeLightbox();
  });

  /* ---------- Formulaire de contact fonctionnel ---------- */
  var form = $("#contactForm");
  var formNote = $("#formNote");
  var EMAIL = "baralangui7@gmail.com";

  function setInvalid(input, invalid) {
    var row = input.closest(".form-row");
    if (row) row.classList.toggle("invalid", invalid);
    return !invalid;
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nom = $("#fNom");
      var mail = $("#fMail");
      var msg = $("#fMsg");
      var ok = true;

      ok = setInvalid(nom, nom.value.trim().length < 2) && ok;
      ok = setInvalid(mail, !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value.trim())) && ok;
      ok = setInvalid(msg, msg.value.trim().length < 5) && ok;

      if (!ok) {
        formNote.textContent = "Vérifiez les champs signalés en rouge.";
        toast("Formulaire incomplet — vérifiez les champs.");
        return;
      }

      var subject = "Message du site personnel — " + nom.value.trim();
      var body =
        "Bonjour ᴄᴜʀs,\n\n" +
        msg.value.trim() +
        "\n\n— " + nom.value.trim() +
        "\nRépondre à : " + mail.value.trim();

      formNote.textContent = "Ouverture de votre messagerie…";
      toast("Message prêt — votre messagerie s'ouvre.");
      window.location.href =
        "mailto:" + EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      setTimeout(function () { form.reset(); formNote.textContent = ""; }, 1500);
    });

    $$("#contactForm input, #contactForm textarea").forEach(function (field) {
      field.addEventListener("input", function () { setInvalid(field, false); });
    });
  }
})();
