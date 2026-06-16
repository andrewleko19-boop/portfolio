// Mohamed Hasan — portfolio. Vanilla JS, no dependencies.
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---- Theme: persisted, falls back to OS preference ---- */
  var toggle = document.getElementById("themeToggle");
  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) { /* storage blocked */ }

  var prefersLight = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  var initial = stored || (prefersLight ? "light" : "dark");
  applyTheme(initial);

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
      try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
    });
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (toggle) { toggle.setAttribute("aria-pressed", String(theme === "light")); }
  }

  /* ---- Footer year ---- */
  var year = document.getElementById("year");
  if (year) { year.textContent = String(new Date().getFullYear()); }

  /* ---- Reveal-on-scroll (progressive enhancement) ---- */
  var reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(function (el) { observer.observe(el); });
})();
