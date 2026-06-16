/* ============================================================
   Mohamed Hasan — portfolio. Vanilla JS, no dependencies.
   Modules: theme · i18n · reveal · counters · typing · terminal
            · canvas constellation · tilt · magnetic · spotlight · nav
   Every motion effect respects prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";

  var root = document.documentElement;
  var REDUCE = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* ===================== i18n ===================== */
  var I18N = {
    en: {
      "a11y.skip": "Skip to content",
      "nav.about": "About", "nav.projects": "Projects", "nav.skills": "Skills",
      "nav.experience": "Experience", "nav.contact": "Contact",
      "hero.eyebrow": "full-stack developer & cs student",
      "hero.tagline": "I build real-world web apps end to end — vanilla JS on the front, Supabase and PostgreSQL on the back. Two shipped products: a national attendance system for the Syrian Ministry of Education, and an offline-first PWA used by university students.",
      "hero.status": "online · last shipped: UniManager groups",
      "hero.cta.projects": "View Projects", "hero.cta.cv": "Download CV", "hero.cta.github": "GitHub",
      "stats.apps": "Apps shipped", "stats.grading": "Grading systems", "stats.types": "Computation types",
      "stats.portals": "Portal tiers", "stats.loc": "Lines in one file",
      "about.title": "About",
      "about.p1": "I'm a Computer Engineering / CS student at AASTMT in Lattakia, Syria, who likes shipping. I build small, fast, dependency-light apps that work offline and read naturally in both Arabic and English.",
      "about.p2": "My current focus is offline-first PWAs backed by Supabase and PostgreSQL with Row-Level Security — real auth, real realtime, real data isolation — without reaching for a framework or a build step.",
      "about.chip.offline": "Offline-first", "about.chip.realtime": "Realtime", "about.chip.rls": "RLS",
      "about.chip.rtl": "RTL & i18n", "about.chip.pwa": "PWA",
      "about.fact.location": "Location", "about.fact.studying": "Studying",
      "about.fact.studying.val": "Computer Engineering, AASTMT", "about.fact.focus": "Focus",
      "about.fact.build": "Build style", "about.fact.build.val": "Vanilla JS, no build", "about.fact.email": "Email",
      "projects.title": "Projects", "projects.live": "Live demo", "projects.source": "Source",
      "projects.uni.kicker": "Offline-first PWA · Live in production",
      "projects.uni.desc": "The app that replaces everything a university student juggles — schedule, a config-driven GPA engine spanning 7 grading systems and 4 computation types, exams with countdowns, notes, tasks, Pomodoro and study logging, sleep and attendance tracking. Plus real-time collaborative groups: invite codes, synced schedules, shared exams, live chat with file attachments and admin permissions. Bilingual AR/EN, full RTL.",
      "projects.uni.h1": "grading systems", "projects.uni.h2": "computation types",
      "projects.uni.h3": "lines, one file", "projects.uni.h4": "TWA shipped",
      "projects.ruqi.kicker": "National attendance system · Syrian Ministry of Education",
      "projects.ruqi.desc": "A multi-portal system connecting all four tiers of a national school network — teacher → school → directorate → ministry — around one source of truth for daily attendance and field reports, with a parent portal and admin tooling on top. Offline-first with localStorage queues, a live directorate map (Leaflet + OpenStreetMap), Supabase with PostgreSQL Row-Level Security, per-portal auth sessions, and CI on GitHub Actions. Arabic-first, full RTL.",
      "projects.ruqi.h1": "portal tiers", "projects.ruqi.h2": "parent & admin",
      "projects.ruqi.h3": "enforced in SQL", "projects.ruqi.h4": "validate + Lighthouse",
      "skills.title": "Skills", "skills.frontend": "Frontend", "skills.backend": "Backend & Data",
      "skills.tools": "Tooling & Ops", "skills.rtl": "RTL & i18n (AR/EN)",
      "skills.a11y": "Responsive & a11y", "skills.sync": "Offline sync queues",
      "exp.title": "Experience",
      "exp.uni.role": "Creator & Developer — UniManager",
      "exp.uni.desc": "Designed and shipped an offline-first PWA from scratch: a config-driven GPA engine, real-time groups (Supabase Realtime + Storage), an IndexedDB sync queue and a hand-rolled service worker. Published an Android TWA.",
      "exp.ruqi.role": "Developer — Ruqi (Syrian Ministry of Education)",
      "exp.ruqi.desc": "Built a four-tier national attendance system with PostgreSQL Row-Level Security, per-portal auth, a live directorate map, and GitHub Actions CI (validation + Lighthouse).",
      "exp.edu.date": "ongoing", "exp.edu.role": "Computer Engineering / CS — AASTMT",
      "exp.edu.desc": "Studying at the Arab Academy for Science, Technology & Maritime Transport, Lattakia, Syria — building toward strong fundamentals in systems, performance, and shipping real software end to end.",
      "cv.title": "Want the one-page version?",
      "cv.lead": "View my résumé in the browser or print it straight to PDF.",
      "cv.view": "View / Print résumé", "cv.download": "Download CV",
      "contact.title": "Contact",
      "contact.lead": "Open to collaboration and opportunities. The fastest way to reach me:",
      "footer.note": "Built with vanilla JS — no framework, no build step.", "footer.top": "Back to top",
      "a11y.terminal": "Open command terminal (press /)", "a11y.lang": "Switch language",
      "a11y.theme": "Toggle color theme", "a11y.close": "Close terminal", "a11y.terminalInput": "Terminal command input"
    },
    ar: {
      "a11y.skip": "تخطَّ إلى المحتوى",
      "nav.about": "نبذة", "nav.projects": "المشاريع", "nav.skills": "المهارات",
      "nav.experience": "الخبرة", "nav.contact": "تواصل",
      "hero.eyebrow": "مطوّر full-stack وطالب علوم حاسوب",
      "hero.tagline": "أبني تطبيقات ويب حقيقية من البداية للنهاية — JavaScript خام في الواجهة، وSupabase وPostgreSQL في الخلفية. منتجان جاهزان: نظام حضور وطني لوزارة التربية السورية، وتطبيق PWA يعمل دون اتصال يستخدمه طلاب الجامعات.",
      "hero.status": "متّصل · آخر إصدار: مجموعات UniManager",
      "hero.cta.projects": "شاهد المشاريع", "hero.cta.cv": "حمّل السيرة", "hero.cta.github": "GitHub",
      "stats.apps": "تطبيقات منشورة", "stats.grading": "أنظمة تقدير", "stats.types": "أنواع حساب",
      "stats.portals": "بوابات وطنية", "stats.loc": "سطر في ملف واحد",
      "about.title": "نبذة",
      "about.p1": "أنا طالب هندسة حاسوب / علوم حاسوب في الأكاديمية العربية (AASTMT) باللاذقية، سوريا، أحبّ أن أُطلق منتجات حقيقية. أبني تطبيقات صغيرة وسريعة وخفيفة التبعيات تعمل دون اتصال وتُقرأ بطبيعية بالعربية والإنجليزية.",
      "about.p2": "تركيزي الحالي على تطبيقات PWA التي تعمل دون اتصال، مدعومة بـSupabase وPostgreSQL مع أمان على مستوى الصف (RLS) — مصادقة حقيقية، وتزامن لحظي، وعزل بيانات فعلي — دون إطار عمل ولا خطوة build.",
      "about.chip.offline": "يعمل دون اتصال", "about.chip.realtime": "لحظي", "about.chip.rls": "RLS",
      "about.chip.rtl": "RTL وتعدّد لغات", "about.chip.pwa": "PWA",
      "about.fact.location": "الموقع", "about.fact.studying": "الدراسة",
      "about.fact.studying.val": "هندسة حاسوب، AASTMT", "about.fact.focus": "التركيز",
      "about.fact.build": "أسلوب البناء", "about.fact.build.val": "JS خام، بلا build", "about.fact.email": "البريد",
      "projects.title": "المشاريع", "projects.live": "تجربة حيّة", "projects.source": "الكود",
      "projects.uni.kicker": "تطبيق PWA يعمل دون اتصال · منشور فعلياً",
      "projects.uni.desc": "التطبيق الذي يجمع كل ما يحتاجه الطالب الجامعي — جدول أسبوعي، ومحرّك معدّل تراكمي قابل للضبط يدعم 7 أنظمة تقدير و4 أنواع حساب، وامتحانات بعدّاد تنازلي، وملاحظات، ومهام، وبومودورو وتتبّع دراسة، وتتبّع نوم وحضور. إضافةً إلى مجموعات تعاونية لحظية: رموز دعوة، وجداول متزامنة، وامتحانات مشتركة، ومحادثة حيّة مع مرفقات وصلاحيات إشراف. ثنائي اللغة عربي/إنجليزي بدعم RTL كامل.",
      "projects.uni.h1": "أنظمة تقدير", "projects.uni.h2": "أنواع حساب",
      "projects.uni.h3": "سطر في ملف واحد", "projects.uni.h4": "حزمة أندرويد TWA",
      "projects.ruqi.kicker": "نظام حضور وطني · وزارة التربية السورية",
      "projects.ruqi.desc": "نظام متعدّد البوابات يربط المستويات الأربعة لشبكة المدارس الوطنية — معلّم ← مدرسة ← مديرية ← وزارة — حول مصدر حقيقة واحد للحضور اليومي والتقارير الميدانية، مع بوابة لأولياء الأمور وأدوات إشراف. يعمل دون اتصال عبر طوابير localStorage، وخريطة مديرية حيّة (Leaflet + OpenStreetMap)، وSupabase مع PostgreSQL وأمان على مستوى الصف، وجلسات مصادقة منفصلة لكل بوابة، وتكامل مستمر على GitHub Actions. عربي أولاً، بدعم RTL كامل.",
      "projects.ruqi.h1": "بوابات", "projects.ruqi.h2": "ولي أمر وإشراف",
      "projects.ruqi.h3": "مُطبَّق في SQL", "projects.ruqi.h4": "تحقّق + Lighthouse",
      "skills.title": "المهارات", "skills.frontend": "الواجهة", "skills.backend": "الخلفية والبيانات",
      "skills.tools": "الأدوات والتشغيل", "skills.rtl": "RTL وتعدّد لغات (عربي/إنجليزي)",
      "skills.a11y": "استجابة وإتاحة", "skills.sync": "طوابير تزامن دون اتصال",
      "exp.title": "الخبرة",
      "exp.uni.role": "المُنشئ والمطوّر — UniManager",
      "exp.uni.desc": "صمّمت وأطلقت تطبيق PWA يعمل دون اتصال من الصفر: محرّك معدّل قابل للضبط، ومجموعات لحظية (Supabase Realtime + Storage)، وطابور تزامن على IndexedDB، وservice worker مكتوب يدوياً. ونشرت حزمة أندرويد TWA.",
      "exp.ruqi.role": "مطوّر — رُقِيّ (وزارة التربية السورية)",
      "exp.ruqi.desc": "بنيت نظام حضور وطنياً من أربعة مستويات مع أمان على مستوى الصف في PostgreSQL، ومصادقة لكل بوابة، وخريطة مديرية حيّة، وتكامل مستمر على GitHub Actions (تحقّق + Lighthouse).",
      "exp.edu.date": "مستمرّ", "exp.edu.role": "هندسة حاسوب / علوم حاسوب — AASTMT",
      "exp.edu.desc": "أدرس في الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري باللاذقية، سوريا — أبني أساسيات قوية في النظم والأداء وإطلاق برمجيات حقيقية كاملة.",
      "cv.title": "تريد النسخة المختصرة؟",
      "cv.lead": "اطّلع على سيرتي في المتصفّح أو اطبعها مباشرةً كـ PDF.",
      "cv.view": "عرض / طباعة السيرة", "cv.download": "حمّل السيرة",
      "contact.title": "تواصل",
      "contact.lead": "منفتح على التعاون والفرص. أسرع طريقة للوصول إليّ:",
      "footer.note": "مبنيّ بـ JavaScript خام — بلا إطار عمل، بلا خطوة build.", "footer.top": "إلى الأعلى",
      "a11y.terminal": "افتح الطرفية (اضغط /)", "a11y.lang": "تبديل اللغة",
      "a11y.theme": "تبديل الثيم", "a11y.close": "إغلاق الطرفية", "a11y.terminalInput": "إدخال أوامر الطرفية"
    }
  };

  var ROLES = {
    en: ["Offline-first PWAs", "Supabase + PostgreSQL RLS", "Arabic RTL & bilingual UIs", "Vanilla JS, no build step"],
    ar: ["تطبيقات تعمل دون اتصال", "Supabase + PostgreSQL RLS", "واجهات عربية RTL وثنائية اللغة", "JavaScript خام، بلا build"]
  };

  var lang = "en";
  function t(key) { return (I18N[lang] && I18N[lang][key]) || (I18N.en[key] != null ? I18N.en[key] : key); }

  function applyI18n() {
    var dict = I18N[lang] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n"); if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria"); if (dict[k] != null) el.setAttribute("aria-label", dict[k]);
    });
  }

  function setLang(next, persist) {
    lang = (next === "ar") ? "ar" : "en";
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    var label = document.getElementById("langLabel");
    if (label) label.textContent = lang === "ar" ? "EN" : "AR";
    applyI18n();
    startTyping();
    if (persist) store("lang", lang);
  }

  /* ===================== Theme ===================== */
  (function theme() {
    var toggle = document.getElementById("themeToggle");
    var initial = read("theme") || "dark";
    applyTheme(initial);
    if (toggle) toggle.addEventListener("click", function () {
      applyTheme(root.getAttribute("data-theme") === "light" ? "dark" : "light");
      store("theme", root.getAttribute("data-theme"));
    });
    function applyTheme(theme) {
      root.setAttribute("data-theme", theme);
      if (toggle) toggle.setAttribute("aria-pressed", String(theme === "light"));
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", theme === "light" ? "#f8fafc" : "#0a0f1a");
    }
  })();

  /* ===================== Footer year ===================== */
  var yEl = document.getElementById("year");
  if (yEl) yEl.textContent = String(new Date().getFullYear());

  /* ===================== Reveal on scroll ===================== */
  (function reveal() {
    var els = document.querySelectorAll(".reveal");
    if (REDUCE || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var ob = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-visible"); ob.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el) { ob.observe(el); });
  })();

  /* ===================== Animated counters ===================== */
  (function counters() {
    var nums = document.querySelectorAll(".stat-num[data-count]");
    function paint(el, val) {
      var suffix = el.getAttribute("data-suffix") || "";
      var out = val >= 1000 ? Math.round(val / 100) / 10 + "K" : String(val);
      el.textContent = out + suffix;
    }
    if (REDUCE || !("IntersectionObserver" in window)) {
      nums.forEach(function (el) { paint(el, +el.getAttribute("data-count")); });
      return;
    }
    var ob = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        ob.unobserve(e.target);
        var el = e.target, target = +el.getAttribute("data-count"), start = performance.now(), dur = 1300;
        (function tick(now) {
          var p = Math.min((now - start) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
          paint(el, Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        })(start);
      });
    }, { threshold: 0.4 });
    nums.forEach(function (el) { ob.observe(el); });
  })();

  /* ===================== Typing effect ===================== */
  var typeTimer = null;
  function startTyping() {
    var el = document.getElementById("typed");
    if (!el) return;
    if (typeTimer) { clearTimeout(typeTimer); typeTimer = null; }
    var list = ROLES[lang] || ROLES.en;
    if (REDUCE) { el.textContent = list[0]; return; }
    var li = 0, ci = 0, deleting = false;
    (function loop() {
      var word = list[li];
      el.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length) { ci++; typeTimer = setTimeout(loop, 70); }
      else if (!deleting && ci === word.length) { deleting = true; typeTimer = setTimeout(loop, 1500); }
      else if (deleting && ci > 0) { ci--; typeTimer = setTimeout(loop, 35); }
      else { deleting = false; li = (li + 1) % list.length; typeTimer = setTimeout(loop, 350); }
    })();
  }

  /* ===================== Nav: burger + lang ===================== */
  (function nav() {
    var burger = document.getElementById("navBurger"), links = document.getElementById("navLinks");
    if (burger && links) {
      burger.addEventListener("click", function () {
        var open = links.classList.toggle("open");
        burger.setAttribute("aria-expanded", String(open));
      });
      links.addEventListener("click", function (e) {
        if (e.target.tagName === "A") { links.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
      });
    }
    var langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.addEventListener("click", function () { setLang(lang === "ar" ? "en" : "ar", true); });
  })();

  /* ===================== Terminal / command palette ===================== */
  (function terminal() {
    var overlay = document.getElementById("termOverlay");
    var dialog = document.getElementById("term");
    var body = document.getElementById("termBody");
    var input = document.getElementById("termInput");
    var trigger = document.getElementById("termTrigger");
    var closeBtn = document.getElementById("termClose");
    if (!overlay || !input || !body) return;

    var lastFocus = null, history = [], hIdx = -1;

    function print(html) { var d = document.createElement("div"); d.innerHTML = html; body.appendChild(d); body.scrollTop = body.scrollHeight; }
    function isOpen() { return !overlay.hasAttribute("hidden"); }

    function open() {
      lastFocus = document.activeElement;
      overlay.removeAttribute("hidden");
      document.body.style.overflow = "hidden";
      if (!body.childNodes.length) banner();
      input.value = ""; hIdx = -1;
      input.focus();
      body.scrollTop = body.scrollHeight;
    }
    function close() {
      overlay.setAttribute("hidden", "");
      document.body.style.overflow = "";
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function banner() {
      print('<span class="ok">mohamed@portfolio</span>:~$ welcome');
      print('Type <span class="cmd">help</span> for commands. Try <span class="cmd">projects</span>, <span class="cmd">whoami</span>, <span class="cmd">open projects</span>.');
    }

    var sections = { about: "about", projects: "projects", skills: "skills", experience: "experience", contact: "contact", home: "top", top: "top" };

    var COMMANDS = {
      help: function () {
        print('Available commands:');
        print('  <span class="accent">whoami</span>    who I am');
        print('  <span class="accent">projects</span>  my shipped products');
        print('  <span class="accent">stack</span>     tech I use');
        print('  <span class="accent">ls</span>        list sections');
        print('  <span class="accent">open</span> &lt;x&gt;  jump to a section (about/projects/skills/experience/contact)');
        print('  <span class="accent">cv</span>        open my résumé');
        print('  <span class="accent">contact</span>   how to reach me');
        print('  <span class="accent">theme</span>     toggle dark/light');
        print('  <span class="accent">lang</span>      toggle AR/EN');
        print('  <span class="accent">clear</span>     clear the screen');
      },
      whoami: function () {
        print('<span class="accent">Mohamed Hasan</span> — Full-Stack Developer & CS student');
        print('Lattakia, Syria · AASTMT');
        print('Offline-first PWAs · Supabase · PostgreSQL RLS · vanilla JS, no build step.');
      },
      projects: function () {
        print('<span class="accent">UniManager</span> — offline-first PWA for university students.');
        print('  7 grading systems · 4 computation types · real-time groups · Android TWA.');
        print('  live: <a href="https://unimanager-sy.pages.dev" target="_blank" rel="noopener">unimanager-sy.pages.dev</a> · <a href="https://github.com/andrewleko19-boop/unimanager" target="_blank" rel="noopener">source</a>');
        print('<span class="accent">رُقِيّ / Ruqi</span> — national school attendance, Syrian Ministry of Education.');
        print('  teacher → school → directorate → ministry · PostgreSQL RLS · live map.');
        print('  live: <a href="https://andrewleko19-boop.github.io/nsams/" target="_blank" rel="noopener">demo</a> · <a href="https://github.com/andrewleko19-boop/nsams" target="_blank" rel="noopener">source</a>');
      },
      stack: function () {
        print('frontend : vanilla JS, PWA, Service Workers, IndexedDB, Canvas, RTL/i18n');
        print('backend  : Supabase (Auth/Realtime/Storage), PostgreSQL, Row-Level Security');
        print('ops      : Git, GitHub Actions, GitHub Pages, Cloudflare Pages, Lighthouse, Sentry');
      },
      ls: function () { print('about/  projects/  skills/  experience/  contact/  resume.html'); },
      contact: function () {
        print('email : <a href="mailto:mh6127880@gmail.com">mh6127880@gmail.com</a>');
        print('github: <a href="https://github.com/andrewleko19-boop" target="_blank" rel="noopener">andrewleko19-boop</a>');
      },
      cv: function () { print('opening résumé…'); setTimeout(function () { window.location.href = "resume.html"; }, 400); },
      theme: function () { document.getElementById("themeToggle").click(); print('theme → <span class="ok">' + root.getAttribute("data-theme") + '</span>'); },
      lang: function () { setLang(lang === "ar" ? "en" : "ar", true); print('lang → <span class="ok">' + lang + '</span>'); },
      clear: function () { body.innerHTML = ""; },
      sudo: function () { print('<span class="warn">nice try.</span> this incident will be reported. 😏'); },
      github: function () { print('opening github…'); window.open("https://github.com/andrewleko19-boop", "_blank", "noopener"); }
    };

    function run(raw) {
      var line = raw.trim();
      print('<span class="ok">~/</span> $ <span class="cmd">' + esc(line) + '</span>');
      if (!line) return;
      history.unshift(line); hIdx = -1;
      var parts = line.split(/\s+/), cmd = parts[0].toLowerCase(), arg = (parts[1] || "").toLowerCase();
      if (cmd === "open" || cmd === "cd" || cmd === "goto") {
        var id = sections[arg];
        if (id) { var sec = document.getElementById(id); close(); if (sec) sec.scrollIntoView({ behavior: REDUCE ? "auto" : "smooth" }); }
        else print('<span class="warn">no such section:</span> ' + esc(arg || "(none)"));
        return;
      }
      if (COMMANDS[cmd]) COMMANDS[cmd]();
      else print('<span class="warn">command not found:</span> ' + esc(cmd) + ' — type <span class="cmd">help</span>');
    }

    if (trigger) trigger.addEventListener("click", open);
    if (closeBtn) closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { run(input.value); input.value = ""; }
      else if (e.key === "ArrowUp") { if (hIdx < history.length - 1) { hIdx++; input.value = history[hIdx]; e.preventDefault(); } }
      else if (e.key === "ArrowDown") { if (hIdx > 0) { hIdx--; input.value = history[hIdx]; } else { hIdx = -1; input.value = ""; } }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) { close(); return; }
      var tag = (document.activeElement && document.activeElement.tagName) || "";
      var typing = tag === "INPUT" || tag === "TEXTAREA";
      if (!isOpen() && !typing && (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k"))) { e.preventDefault(); open(); }
      // focus trap
      if (isOpen() && e.key === "Tab") {
        var f = dialog.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
        else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
      }
    });
  })();

  /* ===================== Pointer effects (tilt · magnetic · spotlight) ===================== */
  var FINE = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
  if (FINE && !REDUCE) {
    // Spotlight
    var sx = 0, sy = 0, sQueued = false;
    document.body.classList.add("has-pointer");
    window.addEventListener("pointermove", function (e) {
      sx = e.clientX; sy = e.clientY;
      if (!sQueued) { sQueued = true; requestAnimationFrame(function () { root.style.setProperty("--mx", sx + "px"); root.style.setProperty("--my", sy + "px"); sQueued = false; }); }
    });

    // Magnetic buttons
    document.querySelectorAll(".magnetic").forEach(function (el) {
      var raf = null;
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect(), mx = e.clientX - (r.left + r.width / 2), my = e.clientY - (r.top + r.height / 2);
        if (raf) return;
        raf = requestAnimationFrame(function () { el.style.transform = "translate(" + mx * 0.25 + "px," + my * 0.35 + "px)"; raf = null; });
      });
      el.addEventListener("pointerleave", function () { el.style.transform = ""; });
    });

    // Card tilt
    document.querySelectorAll(".tilt").forEach(function (el) {
      var raf = null;
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        if (raf) return;
        raf = requestAnimationFrame(function () { el.style.transform = "perspective(900px) rotateY(" + px * 10 + "deg) rotateX(" + (-py * 10) + "deg)"; raf = null; });
      });
      el.addEventListener("pointerleave", function () { el.style.transform = ""; });
    });
  }

  /* ===================== Hero canvas constellation ===================== */
  (function constellation() {
    var canvas = document.getElementById("heroCanvas");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var hero = canvas.parentElement;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, pts = [], raf = null, running = false, pointer = { x: -9999, y: -9999 };

    function size() {
      var r = hero.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = W + "px"; canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.max(28, Math.min(90, Math.round(W * H / 16000)));
      pts = [];
      for (var i = 0; i < count; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3 });
    }

    function colorAt(x) { // cyan -> purple across width
      var k = x / Math.max(W, 1);
      var r = Math.round(6 + (168 - 6) * k), g = Math.round(182 + (85 - 182) * k), b = Math.round(212 + (247 - 212) * k);
      return r + "," + g + "," + b;
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        var dxp = p.x - pointer.x, dyp = p.y - pointer.y, dp = dxp * dxp + dyp * dyp;
        if (dp < 14000) { p.x += dxp / 9000; p.y += dyp / 9000; }
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.7, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + colorAt(p.x) + ",0.8)"; ctx.fill();
        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d2 = dx * dx + dy * dy;
          if (d2 < 14000) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = "rgba(" + colorAt((p.x + q.x) / 2) + "," + (0.16 * (1 - d2 / 14000)) + ")";
            ctx.lineWidth = 1; ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }

    function start() { if (running) return; running = true; raf = requestAnimationFrame(draw); }
    function stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = null; }

    size();
    if (REDUCE) { // single static frame, no loop
      for (var s = 0; s < pts.length; s++) { pts[s].vx = 0; pts[s].vy = 0; }
      draw(); stop();
      return;
    }

    window.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect(); pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top;
    });
    window.addEventListener("pointerout", function () { pointer.x = -9999; pointer.y = -9999; });

    var resizeT = null;
    window.addEventListener("resize", function () { clearTimeout(resizeT); resizeT = setTimeout(size, 200); });
    document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else if (heroVisible) start(); });

    var heroVisible = true;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) {
        heroVisible = es[0].isIntersecting;
        if (heroVisible && !document.hidden) start(); else stop();
      }, { threshold: 0 }).observe(hero);
    }
    start();
  })();

  /* ===================== Boot language ===================== */
  (function boot() {
    var stored = read("lang");
    var initial = stored || ((navigator.language || "").toLowerCase().indexOf("ar") === 0 ? "ar" : "en");
    setLang(initial, false);
  })();

})();
