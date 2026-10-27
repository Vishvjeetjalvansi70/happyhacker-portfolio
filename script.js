/* HappyHacker Portfolio — rendering logic. All content comes from content.js. */
(function () {
  var C = window.HH_CONTENT;
  var $ = function (id) { return document.getElementById(id); };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (m) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]; }); }
  function money(n) { return "₹" + Number(n).toLocaleString("en-IN"); }
  /* Mobile navigation */
  var navToggle = $("navToggle"), navMenu = $("navMenu");
  if (navToggle && navMenu) {
    function closeMenu() {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.querySelector("span:last-child").textContent = "Menu";
    }
    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navMenu.classList.toggle("open", !isOpen);
      navToggle.querySelector("span:last-child").textContent = isOpen ? "Menu" : "Close";
    });
    navMenu.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
    window.addEventListener("resize", function () { if (window.innerWidth > 780) closeMenu(); });
  }

  /* Brand / hero */
  document.title = C.brand.name + " — Video Editing & Motion Graphics";
  $("heroName").textContent = (C.brand.shortName || "Happy").toUpperCase() + ".";
  $("heroRole").textContent = "I'M A " + (C.brand.role || "Video Editor").toUpperCase();
  $("heroText").textContent = C.brand.heroText;
  $("tagline").textContent = C.brand.tagline;
  $("aboutText").textContent = C.brand.about;
  $("ownerName").textContent = C.brand.owner;
  $("aboutHeading").innerHTML = esc(C.brand.aboutHeading).replace("VIDEO EDITING", '<span class="accent">VIDEO EDITING</span>');

  /* Stats (About section, reference style) */
  $("stats").innerHTML = C.brand.stats.map(function (s) {
    return '<div class="stat"><b>' + esc(s.value) + "</b><small>" + esc(s.label) + "</small></div>";
  }).join("");

  $("skills").innerHTML = C.brand.skills.map(function (s) { return '<span class="chip">' + esc(s) + "</span>"; }).join("");
  $("tools").innerHTML = C.brand.tools.map(function (s) { return '<span class="chip gray">' + esc(s) + "</span>"; }).join("");

  /* Services — tiered by price: each plan adds features on top of the previous one */
  $("serviceCards").innerHTML = C.services.map(function (svc) {
    var inc = svc.includes.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("");
    var exc = (svc.excludes || []).map(function (i) { return '<li class="no">' + esc(i) + " — not included</li>"; }).join("");
    var note = svc.note ? '<div class="note">' + esc(svc.note) + "</div>" : "";
    var popular = svc.popular ? '<span class="tag pill" style="margin-left:8px">Most Popular</span>' : "";
    return '<article class="card hz' + (svc.popular ? " popular" : "") + '"><span class="tag pill">' + esc(svc.level) + " · " + esc(svc.maxDuration) + "</span>" + popular +
      "<h3>" + esc(svc.name) + '</h3><div class="price">' + money(svc.price) + " <small>/ video</small></div>" +
      '<p class="meta">' + esc(svc.bestFor) + "</p>" + note +
      '<p class="incl-head">' + esc(svc.includesHeader) + "</p><ul>" + inc + exc + "</ul>" +
      '<p class="why">' + esc(svc.why) + "</p>" +
      '<a class="btn red small" href="#contact" data-package="' + esc(svc.id) + '">Choose This Package</a></article>';
  }).join("");

  $("rulesNote").innerHTML =
    "<b style='color:#fff'>Delivery:</b> " + esc(C.rules.deliveryTime) + " &nbsp;•&nbsp; <b style='color:#fff'>Max duration:</b> " + esc(C.rules.maxDuration) +
    " &nbsp;•&nbsp; <b style='color:#fff'>Revisions:</b> " + C.rules.revisionsIncluded + " included. " + esc(C.rules.extraRevisionNote) + " " + esc(C.rules.longVideoNote);

  /* Projects (reference style: light cards + round arrow button) */
  $("projects").innerHTML = C.projects.map(function (p, idx) {
    var video = p.videoUrl
      ? '<a class="watch" href="' + esc(p.videoUrl) + '" target="_blank" rel="noopener">Watch Video</a>'
      : '<span class="video-note">Video coming soon</span>';
    return '<article class="work-card hz"><div class="thumb' + (idx % 3 === 1 ? " redbg" : "") + '">' +
      '<span class="badge">' + esc(p.label) + "</span><h3>" + esc(p.name) + "</h3></div>" +
      '<div class="work-body"><div class="meta">' + esc(p.category || "") + " · " + esc(p.platform) + " · " + esc(p.duration) + "</div>" +
      "<p>" + esc(p.description) + "</p>" +
      "<details><summary>Project details</summary><dl class='dl'>" +
      "<dt>Editing goal</dt><dd>" + esc(p.goal) + "</dd>" +
      "<dt>Visual style</dt><dd>" + esc(p.style) + "</dd>" +
      "<dt>Tools used</dt><dd>" + esc(p.tools) + "</dd>" +
      "<dt>Before</dt><dd>" + esc(p.before) + "</dd>" +
      "<dt>Final result</dt><dd>" + esc(p.final) + "</dd>" +
      "<dt>Motion techniques</dt><dd>" + esc(p.techniques) + "</dd>" +
      "<dt>Thumbnail idea</dt><dd>" + esc(p.thumbnail) + "</dd>" +
      "</dl></details>" +
      '<div class="card-foot">' + video + '<button class="arrow-btn" type="button" title="Toggle project details" aria-label="Toggle project details">→</button></div>' +
      "</div></article>";
  }).join("");

  document.querySelectorAll(".arrow-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var d = btn.closest(".work-card").querySelector("details");
      if (d) { d.open = !d.open; btn.textContent = d.open ? "↑" : "→"; }
    });
  });

  /* Process */
  $("processSteps").innerHTML = C.process.map(function (s, i) {
    return '<div class="step"><b class="num">' + (i + 1) + "</b><h3>" + esc(s.step) + "</h3><p>" + esc(s.detail) + "</p></div>";
  }).join("");

  /* Reels showcase — "Reels I Have Edited" */
  var reelsEl = $("reelsGrid");
  if (reelsEl && C.reels) {
    reelsEl.innerHTML = C.reels.map(function (r, i) {
      var inner =
        '<div class="reel-top"><span class="badge">' + esc(r.label) + '</span><span class="reel-dur">' + esc(r.duration) + "</span></div>" +
        '<div class="reel-play">▶</div>' +
        '<div class="reel-info"><h3>' + esc(r.title) + '</h3><p>' + esc(r.type) + "</p>" +
        (r.videoUrl ? '<span class="watch">Watch Reel →</span>' : '<span class="video-note">Video coming soon</span>') + "</div>";
      var cls = "reel-card hz" + (i % 3 === 1 ? " alt" : "");
      return r.videoUrl
        ? '<a class="' + cls + '" href="' + esc(r.videoUrl) + '" target="_blank" rel="noopener">' + inner + "</a>"
        : '<article class="' + cls + '">' + inner + "</article>";
    }).join("");
  }

  /* Smooth reveal on scroll (transform + opacity only, so it stays fast) */
  var revealTargets = document.querySelectorAll("section .wrap > *, .work-card, .reel-card, .card, .step");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealTargets.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.08 });
    revealTargets.forEach(function (el) { io.observe(el); });
  }

  /* Before / After demo slider */
  var range = $("baRange"), afterPhone = $("afterPhone");
  if (range && afterPhone) {
    range.addEventListener("input", function () { afterPhone.style.opacity = 0.35 + (range.value / 100) * 0.65; });
  }

  /* Contact links — active only when set in content.js; otherwise they scroll to the form */
  function wire(ids, url) {
    ids.forEach(function (id) {
      var el = $(id); if (!el) return;
      if (url) {
        el.href = url;
        if (/^https?:/i.test(url)) { el.target = "_blank"; el.rel = "noopener noreferrer"; }
      } else {
        el.hidden = true;
      }
    });
  }
  var wa = C.contact.whatsapp ? "https://wa.me/" + C.contact.whatsapp.replace(/\D/g, "") : "";
  wire(["waBtn", "waBtn2", "waBtn3", "floatWa"], wa);
  wire(["igBtn", "igBtn2"], C.contact.instagram);
  wire(["ytBtn", "ytBtn2"], C.contact.youtube);
  wire(["mailBtn", "mailBtn2"], C.contact.email ? "mailto:" + C.contact.email : "");
  $("bookingNote").textContent = C.rules.bookingNote;

  /* Package dropdown + "Choose This Package" buttons */
  var pkgSelect = $("fPackage");
  pkgSelect.innerHTML = C.services.map(function (s) { return '<option value="' + esc(s.id) + '">' + esc(s.name) + " — " + money(s.price) + "</option>"; }).join("") + '<option value="not-sure">Not sure — I need guidance</option>';
  document.querySelectorAll("[data-package]").forEach(function (a) {
    a.addEventListener("click", function () { pkgSelect.value = a.getAttribute("data-package"); });
  });

  /* Enquiry form -> ready-to-send message (English) */
  $("enquiryForm").addEventListener("submit", function (e) {
    e.preventDefault();
    function v(id) { var el = $(id); return el.type === "checkbox" ? (el.checked ? "Yes" : "No") : el.value.trim(); }
    var pkgName = pkgSelect.options[pkgSelect.selectedIndex].text;
    var msg =
      "Hi HappyHacker, I would like to enquire about video editing.\n\n" +
      "Name: " + v("fName") + "\n" +
      "Video purpose: " + v("fPurpose") + "\n" +
      "Platform: " + v("fPlatform") + "\n" +
      "Duration: " + v("fDuration") + "\n" +
      "Package: " + pkgName + "\n" +
      "Footage ready: " + v("fFootage") + "\n" +
      "Voice-over ready: " + v("fVO") + "\n" +
      "Captions needed: " + v("fCaptions") + "\n" +
      "B-roll needed: " + v("fBroll") + "\n" +
      "Motion graphics needed: " + v("fMotion") + "\n" +
      "Brand colors: " + (v("fBrand") || "—") + "\n" +
      "Deadline: " + (v("fDeadline") || "—") + "\n" +
      "I agree to 1 included revision: " + v("fRevision") + "\n" +
      "Portfolio permission: " + v("fPortfolio");
    var out = $("msgOut");
    out.style.display = "block";
    out.textContent = msg + "\n\n— Use the button below to send this message on WhatsApp or by email.";
    var send = $("sendWa");
    if (C.contact.whatsapp) { send.href = "https://wa.me/" + C.contact.whatsapp.replace(/\D/g, "") + "?text=" + encodeURIComponent(msg); send.textContent = "Send on WhatsApp"; send.style.display = "inline-block"; }
    else if (C.contact.email) { send.href = "mailto:" + C.contact.email + "?subject=Video Editing Enquiry&body=" + encodeURIComponent(msg); send.textContent = "Send by Email"; send.style.display = "inline-block"; }
    out.scrollIntoView({ behavior: "smooth", block: "center" });
  });
})();
