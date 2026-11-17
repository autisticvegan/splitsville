(() => {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const NOW_YEAR = new Date().getFullYear();

  const CATS = {
    tech: "💻 Tech", biz: "💼 Business", finance: "📈 Finance", sports: "🏆 Sports",
    music: "🎵 Music", screen: "🎬 Film & TV", royal: "👑 Royals",
  };
  const SHORT = {
    "Sheikh Mohammed bin Rashid": "Sheikh Mohammed", "Princess Haya": "Haya",
    "Prince Charles": "Charles", "Princess Diana": "Diana", "Dr. Dre": "Dr. Dre",
    "Melinda French Gates": "French Gates", "Anna Murdoch Mann": "Murdoch", "Madonna": "Madonna",
    "Melanie Brown (Mel B)": "Mel B", "Hulk Hogan (Terry Bollea)": "Hulk Hogan", "Prince Karim Aga Khan IV": "Aga Khan",
    "Andrew Mountbatten-Windsor": "Andrew", "Sarah Ferguson": "Fergie", "Barbara 'Bobo' Rockefeller": "Bobo",
    "Camille Grammer Meyer": "Camille", "Joanna Carson (Joanna Holland)": "Joanna",
    "Princess Gabriele zu Leiningen (ex-Begum Inaara Aga Khan)": "Gabriele",
    "Princess Salimah Aga Khan (Sally Croker-Poole)": "Salimah",
  };
  // Last name, ignoring parentheticals and Jr./II-style suffixes. Chinese/Korean names lead with the family name.
  const LEAD_FAMILY = /^(Du|Wu|Zhou|Chey|Roh|Lee|Lim|Yuan|Cai|Hu|Li|Jiang|Khoo)\s/;
  const shortName = (n) => {
    if (SHORT[n]) return SHORT[n];
    const clean = n.replace(/\s*\(.*?\)\s*/g, " ").trim();
    if (LEAD_FAMILY.test(clean)) return clean;
    const parts = clean.split(" ").filter((p) => !/^(Jr\.?|Sr\.?|II|III|IV)$/.test(p));
    return parts[parts.length - 1];
  };

  // ---------- money formatting ----------
  function money(v) {
    const [div, unit] = v >= 1e9 ? [1e9, "B"] : v >= 1e6 ? [1e6, "M"] : v >= 1e3 ? [1e3, "K"] : [1, ""];
    const n = v / div;
    const s = n >= 100 ? Math.round(n) : n >= 10 ? +n.toFixed(1) : +n.toFixed(1);
    return "$" + s + unit;
  }
  function lengthText(d) {
    if (d.marriedDays) return `${d.marriedDays} days`;
    if (d.months) return `${d.months} months`;
    const y = Math.round(d.days / 365.25);
    return `${y} yr${y === 1 ? "" : "s"}`;
  }
  const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });
  const full = new Intl.NumberFormat("en-US");

  // ---------- data prep ----------
  const normName = (s) => s.replace(/\s*\(.*?\)\s*/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
  const slugify = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const VAULT_LIST = window.VAULT || [];
  const personCounts = new Map();
  const bumpPerson = (n) => { const k = normName(n); personCounts.set(k, (personCounts.get(k) || 0) + 1); };
  (window.DIVORCES || []).forEach((d) => { bumpPerson(d.a); bumpPerson(d.b); });
  VAULT_LIST.forEach((v) => { bumpPerson(v.a); bumpPerson(v.b); });

  const BILLIONAIRES = new Set(((window.RICHEST_WOMEN || {}).board || []).filter((b) => b.ever).map((b) => b.name));
  const PRENUP_RE = /prenup|postnup|pre-nup|marital agreement/i;
  const TWICE_RE = /married each other twice/i;

  const seenSlugs = new Set();
  const DATA = (window.DIVORCES || []).slice().sort((x, y) => y.amount - x.amount);
  DATA.forEach((d, i) => {
    d.rank = i + 1;
    d.payer = d.payer || "m";
    d.days = d.marriedDays || (d.months ? d.months * 30.44 : d.married && d.ended && d.ended > d.married ? (d.ended - d.married) * 365.25 : null);
    d.perDay = d.days ? d.amount / d.days : null;
    const sa = shortName(d.a), sb = shortName(d.b);
    d.short = sa === sb ? `The ${sa}${/(s|x|z)$/.test(sa) ? "es" : "s"}` : `${sa} 💔 ${sb}`;
    const baseSlug = slugify(`${sa}-${sb}-${d.year}`);
    d.slug = seenSlugs.has(baseSlug) ? `${baseSlug}-${d.rank}` : baseSlug;
    seenSlugs.add(d.slug);
    d.repeat = (personCounts.get(normName(d.a)) || 0) > 1 || (personCounts.get(normName(d.b)) || 0) > 1 || TWICE_RE.test(d.fact);
    d.minted = BILLIONAIRES.has(d.b) || BILLIONAIRES.has(d.a);
    d.search = `${d.a} ${d.b} ${d.year} ${d.fact} ${CATS[d.cat] || ""} ${d.award ? "court award judge" : "settlement"} ${d.minted ? "billionaire" : ""}`.toLowerCase();
  });
  const TOTAL = DATA.reduce((s, d) => s + d.amount, 0);
  const top = DATA[0];

  // ---------- theme, toast & clipboard ----------
  const darkMQ = matchMedia("(prefers-color-scheme: dark)");
  const themeBtn = $("#themeBtn");
  const isDark = () => {
    const t = document.documentElement.dataset.theme;
    return t ? t === "dark" : darkMQ.matches;
  };
  const syncThemeBtn = () => {
    const dark = isDark();
    themeBtn.textContent = dark ? "☀️" : "🌙";
    const lbl = dark ? "Switch to light theme" : "Switch to dark theme";
    themeBtn.title = lbl;
    themeBtn.setAttribute("aria-label", lbl);
  };
  try {
    const savedTheme = localStorage.getItem("splitsville-theme");
    if (savedTheme === "light" || savedTheme === "dark") document.documentElement.dataset.theme = savedTheme;
  } catch (_) {}
  syncThemeBtn();
  themeBtn.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("splitsville-theme", next); } catch (_) {}
    syncThemeBtn();
    sfx("tick");
  });
  if (darkMQ.addEventListener) darkMQ.addEventListener("change", syncThemeBtn);

  let toastTimer;
  function toast(msg) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 2600);
  }
  function copyText(text, okMsg = "🔗 Copied to clipboard!") {
    const done = () => { toast(okMsg); sfx("kaching"); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, () => fallbackCopy(text, done));
    } else fallbackCopy(text, done);
  }
  function fallbackCopy(text, done) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      done();
    } catch (_) { toast("Copy failed — grab the URL from your address bar."); }
  }
  const baseShareURL = () => `${location.origin && location.origin !== "null" ? location.origin : ""}${location.pathname}`;

  // ---------- sound ----------
  let soundOn = false;
  let actx = null;
  function tone(freq, start, dur, type = "triangle", vol = 0.18, endFreq) {
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, start);
    if (endFreq) o.frequency.exponentialRampToValueAtTime(endFreq, start + dur);
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(vol, start + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    o.connect(g).connect(actx.destination);
    o.start(start); o.stop(start + dur + 0.05);
  }
  function sfx(kind) {
    if (!soundOn) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const t = actx.currentTime;
      if (kind === "kaching") { tone(1318, t, 0.12); tone(1760, t + 0.07, 0.14); tone(2637, t + 0.14, 0.45, "sine", 0.14); }
      else if (kind === "womp") { tone(330, t, 0.35, "sawtooth", 0.08, 220); tone(220, t + 0.32, 0.6, "sawtooth", 0.08, 140); }
      else if (kind === "crack") { tone(900, t, 0.08, "square", 0.08, 300); tone(1318, t + 0.1, 0.12); tone(1760, t + 0.18, 0.4, "sine", 0.12); }
      else { tone(rand(900, 1500), t, 0.08, "sine", 0.05); }
    } catch (_) { /* audio not available */ }
  }
  $("#soundBtn").addEventListener("click", (e) => {
    soundOn = !soundOn;
    e.currentTarget.textContent = soundOn ? "🔊" : "🔇";
    e.currentTarget.setAttribute("aria-pressed", String(soundOn));
    sfx("kaching");
  });

  // ---------- particles ----------
  const fx = $("#fx");
  const BURST = ["💸", "💰", "💔", "💍", "🥂", "⚖️", "✨", "🪙"];
  const TRAIL = ["💸", "✨", "💔", "💍", "🪙", "✨"];
  function spawn(x, y, emoji, size, cls = "") {
    const s = document.createElement("span");
    s.className = "p " + cls;
    s.textContent = emoji;
    s.style.left = x + "px";
    s.style.top = y + "px";
    s.style.fontSize = size + "px";
    fx.appendChild(s);
    return s;
  }
  function burst(x, y, n = 14, set = BURST) {
    if (reduced) n = Math.min(n, 4);
    for (let i = 0; i < n; i++) {
      const ang = rand(0, Math.PI * 2), v = rand(70, 190);
      const dx = Math.cos(ang) * v, dy = Math.sin(ang) * v - 70, r = rand(-200, 200);
      const el = spawn(x, y, pick(set), rand(18, 34));
      const anim = el.animate([
        { transform: "translate(-50%,-50%) scale(.3)", opacity: 1 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1) rotate(${r}deg)`, opacity: 1, offset: 0.45 },
        { transform: `translate(calc(-50% + ${dx * 1.35}px), calc(-50% + ${dy + 220}px)) scale(.7) rotate(${r * 2}deg)`, opacity: 0 },
      ], { duration: rand(900, 1500), easing: "cubic-bezier(.2,.7,.3,1)" });
      anim.onfinish = () => el.remove();
    }
  }
  function rain(n = 70) {
    if (reduced) n = 12;
    const w = innerWidth, h = innerHeight;
    for (let i = 0; i < n; i++) {
      const el = spawn(rand(0, w), -40, pick(["💸", "💸", "💵", "💰", "🪙", "💔"]), rand(20, 40));
      const sway = rand(-80, 80);
      const anim = el.animate([
        { transform: "translate(-50%,0) rotate(0deg)", opacity: 1 },
        { transform: `translate(calc(-50% + ${sway}px), ${h + 80}px) rotate(${rand(-360, 360)}deg)`, opacity: 0.9 },
      ], { duration: rand(1800, 3800), delay: rand(0, 1600), easing: "cubic-bezier(.4,.1,.7,1)", fill: "backwards" });
      anim.onfinish = () => el.remove();
    }
  }

  // Mouse trail (mouse pointers only, so phones don't get spammed).
  let lastT = 0, lastX = -99, lastY = -99;
  if (!reduced) {
    addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      const now = performance.now();
      if (now - lastT < 28 || Math.hypot(e.clientX - lastX, e.clientY - lastY) < 26) return;
      lastT = now; lastX = e.clientX; lastY = e.clientY;
      if (fx.childElementCount > 120) return;
      const el = spawn(e.clientX + rand(-6, 6), e.clientY + rand(-6, 6), pick(TRAIL), rand(12, 20), "trail");
      el.addEventListener("animationend", () => el.remove());
    }, { passive: true });
  }

  // Every click is a little celebration of financial ruin.
  addEventListener("click", (e) => {
    if (e.target.closest("input, select, label.search")) return;
    if (e.clientX === 0 && e.clientY === 0) return; // keyboard-triggered
    burst(e.clientX, e.clientY, e.target.closest(".dcard, .ring-btn") ? 22 : 10);
  });

  $("#rainBtn").addEventListener("click", () => { rain(); sfx("kaching"); });

  // ---------- hero ----------
  const FLOAT = ["💍", "💔", "💸", "⚖️", "🥂", "💰", "🏝️", "🛥️", "📜", "🧾", "💎", "🏰"];
  const floaters = $("#floaters");
  FLOAT.concat(FLOAT).forEach((e, i) => {
    const s = document.createElement("span");
    s.textContent = e;
    s.style.left = `${(i * 41 + 7) % 96}%`;
    s.style.top = `${(i * 23 + 11) % 88}%`;
    s.style.setProperty("--s", `${rand(20, 44)}px`);
    s.style.setProperty("--d", `${rand(5, 11)}s`);
    s.style.setProperty("--delay", `${rand(-6, 0)}s`);
    floaters.appendChild(s);
  });
  $("#heroCount").textContent = `${DATA.length}`;

  function countUp(el, to, dur = 2200, fmt = (v) => "$" + full.format(Math.round(v))) {
    if (reduced) { el.textContent = fmt(to); return; }
    const t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(to * e);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  countUp($("#heroTotal"), TOTAL);

  let rings = 0;
  try { rings = +localStorage.getItem("splitsville-rings") || 0; } catch (_) {}
  const ringBtn = $("#ringBtn");
  const RING_MILESTONES = {
    1: "First ring pulverized. Retainer saved: $3,570.",
    5: "5 rings down. Opposing counsel just leased a Porsche.",
    10: "10 rings! You've unlocked California community-property trauma.",
    25: "25 rings smashed. Rupert Murdoch is taking notes.",
    50: "50 rings! That's a whole Beverly Hills country club of exes.",
    100: "100 rings obliterated! You owe half of this browser tab.",
  };
  const RING_LINES = [
    "Ouch. That one definitely needed a prenup.",
    "There goes the Hamptons house—and the golden retriever.",
    "Forensic accountants just entered the chat.",
    "Opposing counsel just ordered a bigger boat.",
    "Somebody's getting the vineyard.",
    "That's going straight into the tell-all memoir.",
    "Half the index funds, all of the drama.",
  ];
  function ringText() {
    if (!rings) { $("#ringCount").textContent = "Cheaper than retaining counsel at $357/hr."; return; }
    const quip = RING_MILESTONES[rings] || pick(RING_LINES);
    $("#ringCount").textContent = `${full.format(rings)} ring${rings === 1 ? "" : "s"} smashed. ${quip}`;
  }
  ringText();
  ringBtn.addEventListener("click", () => {
    rings++;
    try { localStorage.setItem("splitsville-rings", rings); } catch (_) {}
    ringBtn.textContent = "💔";
    ringBtn.classList.remove("crack"); void ringBtn.offsetWidth; ringBtn.classList.add("crack");
    sfx("crack"); rain(RING_MILESTONES[rings] ? 65 : 40); ringText();
    setTimeout(() => { ringBtn.textContent = "💍"; }, 1400);
  });

  // ---------- ticker ----------
  const withDays = DATA.filter((d) => d.days);
  const byPerDay = withDays.slice().sort((a, b) => b.perDay - a.perDay);
  const shortest = withDays.slice().sort((a, b) => a.days - b.days)[0];
  const longest = withDays.slice().sort((a, b) => b.days - a.days)[0];

  const tickItems = [];
  DATA.slice(0, 14).forEach((d) => tickItems.push(`${d.emoji} <b>${money(d.amount)}</b> ${d.short} (${d.year})`));
  tickItems.push(`🚨 <b>BREAKING</b> One breakup (${top.short}) accounts for ${Math.round((top.amount / TOTAL) * 100)}% of every dollar on this page`);
  tickItems.push(`⏱️ <b>${money(byPerDay[0].perDay)}/day</b> Top burn rate (${byPerDay[0].short})—${money(byPerDay[0].perDay / 24)}/hr even while asleep`);
  tickItems.push(`⚖️ <b>9</b> US community-property states split marital assets 50/50—no prenup, no mercy`);
  tickItems.push(`🧾 <b>2019</b> Congress killed the alimony tax deduction—payers foot the IRS bill now`);
  const csTick = window.CHILD_SUPPORT && window.CHILD_SUPPORT.ticker;
  if (Array.isArray(csTick)) tickItems.push(...csTick);
  const rwTick = window.RICHEST_WOMEN && window.RICHEST_WOMEN.ticker;
  if (Array.isArray(rwTick)) tickItems.push(...rwTick);
  const tickHTML = tickItems.map((t) => `<span>${t}</span>`).join("");
  $("#ticker").innerHTML = tickHTML + tickHTML;

  // ---------- quick tiles ----------
  const sorted = DATA.map((d) => d.amount).sort((a, b) => a - b);
  const median = sorted.length % 2 ? sorted[(sorted.length - 1) / 2] : (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  const shePaid = DATA.filter((d) => d.payer === "f");
  const rest = TOTAL - top.amount;
  const quickTiles = [
    {
      e: "📦", go: "🧾 Pull receipt →", v: `${Math.round((top.amount / TOTAL) * 100)}%`,
      l: "of the whole pot is one divorce",
      n: `${top.short}: ${money(top.amount)} vs ${money(rest)} for the other ${DATA.length - 1} splits combined.`,
      act: () => openReceipt(top, DATA),
    },
    {
      e: "⚖️", go: "💸 $1B+ club →", v: money(median),
      l: "median check on this leaderboard",
      n: `Half walked away with more, half with less—${DATA.filter((d) => d.amount >= 1e9).length} crossed ten figures.`,
      act: () => applyBoardJump({ angle: "billion" }),
    },
    {
      e: "⏱️", go: "⏱️ Sort burn rate →", v: money(byPerDay[0].perDay) + "/day",
      l: "priciest marriage, per day",
      n: `${byPerDay[0].short}—${money(byPerDay[0].perDay / 24)} an hour for ${Math.round(byPerDay[0].days / 365.25)} straight years.`,
      act: () => applyBoardJump({ sort: "perDay" }),
    },
    {
      e: "👩", go: "👩 Filter she-paid →", v: `${shePaid.length} of ${DATA.length}`,
      l: "times she wrote the check",
      n: shePaid.length ? shePaid.map((d) => shortName(d.a)).slice(0, 4).join(", ") + (shePaid.length > 4 ? ", and more." : ".") : "",
      act: () => applyBoardJump({ payer: "f" }),
    },
    {
      e: "⚡", go: "🧾 Pull receipt →", v: lengthText(shortest),
      l: "shortest marriage on the board",
      n: `${shortest.short}—walked out with ${shortest.est ? "~" : ""}${money(shortest.amount)}.`,
      act: () => openReceipt(shortest, DATA),
    },
    {
      e: "🐢", go: "🧾 Pull receipt →", v: `${Math.round(longest.days / 365.25)} yrs`,
      l: "longest marriage to still blow up",
      n: `${longest.short}—${longest.est ? "~" : ""}${money(longest.amount)} after decades together.`,
      act: () => openReceipt(longest, DATA),
    },
  ];
  $("#quick").innerHTML = quickTiles.map((t, i) => `
    <button class="tile interactive" type="button" data-qtile="${i}">
      <div class="t-top"><span class="t-emoji">${t.e}</span><span class="t-go">${t.go}</span></div>
      <div class="t-val">${t.v}</div>
      <div class="t-label">${t.l}</div>
      <div class="t-note">${t.n}</div>
    </button>`).join("");
  $("#quick").addEventListener("click", (e) => {
    const b = e.target.closest("[data-qtile]");
    if (!b) return;
    sfx("kaching");
    quickTiles[+b.dataset.qtile].act();
  });

  // ---------- leaderboard ----------
  const ANGLES = [
    { k: "all", l: "✨ All angles", test: () => true },
    { k: "billion", l: "💸 $1B+ club", test: (d) => d.amount >= 1e9 },
    { k: "award", l: "⚖️ Judge-ordered", test: (d) => Boolean(d.award) },
    { k: "sprint", l: "⚡ Under 5 years", test: (d) => d.days != null && d.days < 5 * 365.25 },
    { k: "marathon", l: "⏳ 25+ yr marathons", test: (d) => d.days != null && d.days >= 25 * 365.25 },
    { k: "prenup", l: "📝 Prenup drama", test: (d) => PRENUP_RE.test(d.fact) },
    { k: "repeat", l: "🔁 Repeat divorcers", test: (d) => d.repeat },
    { k: "minted", l: "👑 Minted billionaire", test: (d) => d.minted },
  ];
  const ANGLE_MAP = Object.fromEntries(ANGLES.map((a) => [a.k, a]));

  const state = { q: "", payer: "all", cat: "all", angle: "all", sort: "amount" };
  const catCounts = DATA.reduce((m, d) => ((m[d.cat] = (m[d.cat] || 0) + 1), m), {});
  $("#cats").innerHTML = [`<button class="chip on" type="button" data-cat="all">🌈 All <span class="n">${DATA.length}</span></button>`]
    .concat(Object.keys(CATS).filter((k) => catCounts[k]).map((k) => `<button class="chip" type="button" data-cat="${k}">${CATS[k]} <span class="n">${catCounts[k]}</span></button>`))
    .join("");
  $("#angles").innerHTML = ANGLES.map((a) => {
    const cnt = a.k === "all" ? "" : ` <span class="n">${DATA.filter(a.test).length}</span>`;
    return `<button class="chip ${a.k === "all" ? "on" : ""}" type="button" data-angle="${a.k}">${a.l}${cnt}</button>`;
  }).join("");

  const MEDAL = ["🥇", "🥈", "🥉"];
  function yrs(d) {
    if (d.marriedDays || d.months) return `${lengthText(d)} married`;
    if (!d.days) return "";
    const y = Math.round(d.days / 365.25);
    return `${y} yr${y === 1 ? "" : "s"} married`;
  }
  function cardHTML(d, i) {
    const tags = [];
    tags.push(`<span class="tag">${CATS[d.cat] || d.cat}</span>`);
    if (d.payer === "f") tags.push(`<span class="tag she">👩 She paid</span>`);
    if (d.award) tags.push(`<span class="tag award">⚖️ Court award</span>`);
    if (d.payer === "m" && BILLIONAIRES.has(d.b)) tags.push(`<span class="tag rich">👑 Billionaire club</span>`);
    if (d.est) tags.push(`<span class="tag est">🤔 Estimate</span>`);
    if (d.orig) tags.push(`<span class="tag">💱 ${d.orig}</span>`);
    if (d.source) d.source.split(" ; ").forEach((u, idx, all) =>
      tags.push(`<a class="tag src-tag" href="${u}" target="_blank" rel="noopener">📰 Source${all.length > 1 ? ` ${idx + 1}` : ""}</a>`));
    tags.push(`<span class="dc-rcpt" aria-hidden="true">🧾 Receipt →</span>`);
    const meta = [d.year, yrs(d), d.perDay ? `${money(d.perDay)}/day` : ""].filter(Boolean).join(" · ");
    return `
      <article class="dcard" tabindex="0" role="button" data-rank="${d.rank}" style="animation-delay:${Math.min(i, 12) * 30}ms" aria-label="Number ${d.rank}: ${d.a} and ${d.b}, ${money(d.amount)}. Open receipt.">
        <div class="dc-top">
          <span class="rank ${d.rank <= 3 ? "top" : ""}">${MEDAL[d.rank - 1] || "#"}${d.rank <= 3 ? " #" + d.rank : d.rank}</span>
          <span class="dc-emoji" aria-hidden="true">${d.emoji}</span>
        </div>
        <div class="dc-amt">${d.est ? "~" : ""}${money(d.amount)}</div>
        <div class="dc-names">${d.a}<span class="heart" aria-hidden="true">💔</span>${d.b}</div>
        <div class="dc-meta">${meta}</div>
        <p class="dc-fact">${d.fact}</p>
        <div class="tags">${tags.join("")}</div>
      </article>`;
  }
  const SORTS = {
    amount: (a, b) => b.amount - a.amount,
    amountAsc: (a, b) => a.amount - b.amount,
    perDay: (a, b) => (b.perDay || -1) - (a.perDay || -1),
    newest: (a, b) => b.year - a.year || b.amount - a.amount,
    oldest: (a, b) => a.year - b.year || b.amount - a.amount,
  };
  const isDefaultBoard = () => !state.q.trim() && state.payer === "all" && state.cat === "all" && state.angle === "all" && state.sort === "amount";
  function syncBoardControls() {
    $("#q").value = state.q;
    $("#sort").value = state.sort;
    $$("#board .seg-btn").forEach((x) => x.classList.toggle("on", x.dataset.payer === state.payer));
    $$("#cats .chip").forEach((x) => x.classList.toggle("on", x.dataset.cat === state.cat));
    $$("#angles .chip").forEach((x) => x.classList.toggle("on", x.dataset.angle === state.angle));
  }
  function resetBoard() {
    state.q = ""; state.payer = "all"; state.cat = "all"; state.angle = "all"; state.sort = "amount";
    syncBoardControls();
    renderGrid();
  }
  function applyBoardJump(patch) {
    state.q = ""; state.payer = "all"; state.cat = "all"; state.angle = "all"; state.sort = "amount";
    Object.assign(state, patch);
    syncBoardControls();
    renderGrid();
    $("#board").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  }
  function filtered() {
    const q = state.q.trim().toLowerCase();
    const ang = ANGLE_MAP[state.angle] || ANGLE_MAP.all;
    return DATA.filter((d) =>
      (state.payer === "all" || d.payer === state.payer) &&
      (state.cat === "all" || d.cat === state.cat) &&
      ang.test(d) &&
      (!q || d.search.includes(q))
    ).sort(SORTS[state.sort] || SORTS.amount);
  }
  const PAGE = 24;
  state.limit = PAGE;
  function renderGrid(keepLimit) {
    if (!keepLimit) state.limit = PAGE;
    const list = filtered();
    $("#grid").innerHTML = list.slice(0, state.limit).map(cardHTML).join("");
    $("#empty").hidden = list.length > 0;
    $("#resetBtn").hidden = isDefaultBoard();
    const left = list.length - state.limit;
    $("#moreBtn").hidden = left <= 0;
    $("#moreBtn").textContent = `👀 Show ${Math.min(PAGE, left)} more (${left} to go)`;
    const sum = list.reduce((s, d) => s + d.amount, 0);
    const who = state.payer === "m" ? " where he paid" : state.payer === "f" ? " where she paid" : "";
    if (!list.length) {
      $("#resultLine").textContent = "";
    } else if (list.length === DATA.length && isDefaultBoard()) {
      $("#resultLine").textContent = `All ${DATA.length} public splits — ${money(sum)} in combined heartbreak.`;
    } else {
      const sharePct = (sum / TOTAL) * 100;
      const tail = sharePct >= 1 ? `${Math.round(sharePct)}% of the leaderboard` : `${money(Math.round(sum / list.length))} average check`;
      $("#resultLine").textContent = `${list.length} split${list.length === 1 ? "" : "s"}${who} — ${money(sum)} combined (${tail}).`;
    }
    bindCards(list);
  }
  $("#moreBtn").addEventListener("click", () => { state.limit += PAGE; renderGrid(true); sfx("kaching"); });
  function bindCards(list) {
    $$(".dcard").forEach((c) => {
      if (!reduced && matchMedia("(hover: hover)").matches) {
        c.addEventListener("pointermove", (e) => {
          const r = c.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
          c.style.setProperty("--ry", `${(px - 0.5) * 10}deg`);
          c.style.setProperty("--rx", `${(0.5 - py) * 10}deg`);
          c.style.setProperty("--mx", `${px * 100}%`);
          c.style.setProperty("--my", `${py * 100}%`);
        });
        c.addEventListener("pointerleave", () => { c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); });
      }
      const open = () => {
        const d = DATA.find((x) => x.rank === +c.dataset.rank);
        if (d) { sfx("kaching"); openReceipt(d, list); }
      };
      c.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        open();
      });
      c.addEventListener("keydown", (e) => {
        if (e.target !== c) return;
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
    });
  }
  let qTimer;
  $("#q").addEventListener("input", (e) => { clearTimeout(qTimer); qTimer = setTimeout(() => { state.q = e.target.value; renderGrid(); }, 120); });
  $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; renderGrid(); sfx("tick"); });
  $$("#board .seg-btn").forEach((b) => b.addEventListener("click", () => {
    $$("#board .seg-btn").forEach((x) => x.classList.toggle("on", x === b));
    state.payer = b.dataset.payer; renderGrid(); sfx("tick");
  }));
  $("#cats").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    $$("#cats .chip").forEach((x) => x.classList.toggle("on", x === b));
    state.cat = b.dataset.cat; renderGrid(); sfx("tick");
  });
  $("#angles").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    $$("#angles .chip").forEach((x) => x.classList.toggle("on", x === b));
    state.angle = b.dataset.angle; renderGrid(); sfx("tick");
  });
  $("#resetBtn").addEventListener("click", () => { resetBoard(); sfx("tick"); });
  $("#emptyResetBtn").addEventListener("click", () => { resetBoard(); sfx("tick"); });
  $("#shareBoardBtn").addEventListener("click", () => {
    const params = new URLSearchParams();
    if (state.q.trim()) params.set("q", state.q.trim());
    if (state.payer !== "all") params.set("payer", state.payer);
    if (state.cat !== "all") params.set("cat", state.cat);
    if (state.angle !== "all") params.set("angle", state.angle);
    if (state.sort !== "amount") params.set("sort", state.sort);
    const qs = params.toString();
    const shareUrl = `${baseShareURL()}${qs ? "?" + qs : ""}#board`;
    try { history.replaceState(null, "", `${location.pathname}${qs ? "?" + qs : ""}#board`); } catch (_) {}
    copyText(shareUrl, "🔗 Leaderboard view link copied!");
  });

  // Load any initial query-string board filters before first render.
  try {
    const sp = new URLSearchParams(location.search);
    if (sp.get("q")) state.q = sp.get("q");
    if (["all", "m", "f"].includes(sp.get("payer"))) state.payer = sp.get("payer");
    if (sp.get("cat") === "all" || CATS[sp.get("cat")]) state.cat = sp.get("cat");
    if (ANGLE_MAP[sp.get("angle")]) state.angle = sp.get("angle");
    if (SORTS[sp.get("sort")]) state.sort = sp.get("sort");
    syncBoardControls();
  } catch (_) {}
  renderGrid();

  let lastRoulette = null;
  $("#rouletteBtn").addEventListener("click", () => {
    const pool = DATA.length > 1 ? DATA.filter((x) => x !== lastRoulette) : DATA;
    const d = pick(pool);
    lastRoulette = d;
    rain(36);
    burst(innerWidth / 2, Math.min(innerHeight * 0.35, 320), 22);
    sfx("kaching");
    openReceipt(d, DATA);
  });

  // ---------- tooltip ----------
  const tip = $("#tip");
  function showTip(html, x, y) {
    tip.innerHTML = html; tip.hidden = false;
    const r = tip.getBoundingClientRect();
    let left = x + 14, topY = y + 14;
    if (left + r.width > innerWidth - 8) left = x - r.width - 14;
    if (topY + r.height > innerHeight - 8) topY = y - r.height - 14;
    tip.style.left = Math.max(8, left) + "px"; tip.style.top = Math.max(8, topY) + "px";
  }
  const hideTip = () => { tip.hidden = true; };
  addEventListener("scroll", hideTip, { passive: true });

  // ---------- bar charts ----------
  function barChart(el, rows) {
    const max = Math.max(...rows.map((r) => r.value));
    el.innerHTML = rows.map((r, i) => `
      <div class="bar-row ${r.split ? "clickable" : ""}" tabindex="0" ${r.split ? 'role="button"' : ""} data-i="${i}">
        <span class="bar-label" title="${r.label}">${r.label}</span>
        <span class="bar-track"><span class="bar ${r.hi ? "hi" : ""} ${r.cls || ""}" style="--w:0"></span><span class="bar-val">${r.text}</span></span>
      </div>`).join("");
    requestAnimationFrame(() => requestAnimationFrame(() => {
      $$(".bar", el).forEach((b, i) => b.style.setProperty("--w", (rows[i].value / max).toFixed(4)));
    }));
    $$(".bar-row", el).forEach((row) => {
      const r = rows[+row.dataset.i];
      const tipText = r.split ? `${r.tip}<br>🧾 Click for itemized receipt` : r.tip;
      const show = (x, y) => showTip(tipText, x, y);
      row.addEventListener("pointermove", (e) => show(e.clientX, e.clientY));
      row.addEventListener("pointerleave", hideTip);
      row.addEventListener("focus", () => { const b = row.getBoundingClientRect(); show(b.left + b.width / 2, b.top); });
      row.addEventListener("blur", hideTip);
      if (r.split) {
        const activate = () => { hideTip(); sfx("kaching"); openReceipt(r.split, r.list || DATA); };
        row.addEventListener("click", activate);
        row.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); } });
      }
    });
  }
  const divTip = (d) => `<b>${d.emoji} ${d.a} 💔 ${d.b}</b>${d.est ? "~" : ""}${money(d.amount)} · ${d.year}${d.perDay ? `<br>${money(d.perDay)} per day married` : ""}`;

  let hideBezos = false;
  function renderTop() {
    const list = DATA.slice(hideBezos ? 1 : 0, (hideBezos ? 1 : 0) + 15);
    barChart($("#chartTop"), list.map((d) => ({ label: `${d.emoji} ${d.short}`, value: d.amount, text: (d.est ? "~" : "") + money(d.amount), tip: divTip(d), split: d, list })));
    $("#topSub").textContent = hideBezos
      ? "Bezos hidden. Suddenly everyone below #2 stops looking like pocket change."
      : `Top 15 payouts. See why everyone below #2 looks like a rounding error?`;
  }
  $("#bezosBtn").addEventListener("click", (e) => {
    hideBezos = !hideBezos;
    e.currentTarget.setAttribute("aria-pressed", String(hideBezos));
    e.currentTarget.textContent = hideBezos ? "📦 Bring back Bezos" : "🙈 Hide Bezos";
    renderTop(); sfx("tick");
  });
  renderTop();
  const topPerDay = byPerDay.slice(0, 12);
  barChart($("#chartDay"), topPerDay.map((d) => ({ label: `${d.emoji} ${d.short}`, value: d.perDay, text: money(d.perDay), tip: divTip(d), split: d, list: topPerDay })));

  // Optional research-backed charts.
  const COUNTRY = window.COUNTRY_RATES;
  if (Array.isArray(COUNTRY) && COUNTRY.length) {
    $("#countryCard").hidden = false;
    const rows = COUNTRY.slice().sort((a, b) => b.rate - a.rate);
    barChart($("#chartCountry"), rows.map((c) => ({
      label: `${c.flag || ""} ${c.country}`.trim(), value: c.rate, text: c.rate.toFixed(1), hi: /united states/i.test(c.country),
      tip: `<b>${c.flag || ""} ${c.country}</b>${c.rate.toFixed(1)} divorces per 1,000 people (${c.year})`,
    })));
    const s = window.COUNTRY_RATES_SOURCE;
    if (s) $("#countrySrc").innerHTML = `Source: <a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>. US bar in pink.`;
  }

  // Single-series line chart with crosshair tooltip. opts: y (field), fmtY, fmtTick, tip, aria, endLabel.
  function lineChart(wrap, series, opts) {
    const W = Math.max(280, wrap.clientWidth), H = Math.round(Math.min(300, Math.max(200, W * 0.55)));
    const m = { t: 18, r: 58, b: 28, l: opts.left || 38 };
    const ys = series.map((p) => p[opts.y]), xs = series.map((p) => p.year);
    const x0 = Math.min(...xs), x1 = Math.max(...xs);
    const ticks = niceTicks(opts.zero ? 0 : Math.min(...ys), Math.max(...ys));
    const yMin = ticks[0], yMax = ticks[ticks.length - 1];
    const X = (v) => m.l + ((v - x0) / (x1 - x0)) * (W - m.l - m.r);
    const Y = (v) => m.t + (1 - (v - yMin) / (yMax - yMin)) * (H - m.t - m.b);
    const path = series.map((p, i) => `${i ? "L" : "M"}${X(p.year).toFixed(1)},${Y(p[opts.y]).toFixed(1)}`).join("");
    const area = `${path}L${X(x1).toFixed(1)},${Y(yMin)}L${X(x0).toFixed(1)},${Y(yMin)}Z`;
    const span = x1 - x0, stepX = span > 16 ? 5 : span > 8 ? 2 : 1;
    const xTicks = []; for (let v = Math.ceil(x0 / stepX) * stepX; v <= x1; v += stepX) xTicks.push(v);
    const last = series[series.length - 1];
    wrap.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${opts.aria}">
        ${ticks.map((v) => `<line x1="${m.l}" x2="${W - m.r}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)" stroke-width="1"/>
          <text x="${m.l - 8}" y="${Y(v) + 4}" text-anchor="end" font-size="11" fill="var(--muted)">${opts.fmtTick(v)}</text>`).join("")}
        ${xTicks.map((v) => `<text x="${X(v)}" y="${H - 8}" text-anchor="middle" font-size="11" fill="var(--muted)">${v}</text>`).join("")}
        <path d="${area}" fill="var(--bar)" opacity=".1"/>
        <path d="${path}" fill="none" stroke="var(--bar)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
        <circle cx="${X(last.year)}" cy="${Y(last[opts.y])}" r="5" fill="var(--bar)" stroke="var(--surface)" stroke-width="2"/>
        <text x="${X(last.year) + 9}" y="${Y(last[opts.y]) - 2}" text-anchor="start" font-size="12" font-weight="700" fill="var(--ink)">${opts.fmtY(last[opts.y])}<tspan x="${X(last.year) + 9}" dy="14" font-weight="500" fill="var(--muted)">in ${last.year}</tspan></text>
        <g class="xh" visibility="hidden">
          <line class="xhl" y1="${m.t}" y2="${H - m.b}" stroke="var(--muted)" stroke-width="1"/>
          <circle class="xhc" r="5" fill="var(--bar)" stroke="var(--surface)" stroke-width="2"/>
        </g>
        <rect class="xhit" x="${m.l}" y="${m.t}" width="${W - m.l - m.r}" height="${H - m.t - m.b}" fill="transparent"/>
      </svg>`;
    const svg = $("svg", wrap), g = $(".xh", wrap), hit = $(".xhit", wrap);
    const move = (e) => {
      const r = svg.getBoundingClientRect();
      const vx = ((e.clientX - r.left) / r.width) * W;
      const yr = x0 + ((vx - m.l) / (W - m.l - m.r)) * (x1 - x0);
      const p = series.reduce((a, b) => (Math.abs(b.year - yr) < Math.abs(a.year - yr) ? b : a));
      g.setAttribute("visibility", "visible");
      $(".xhl", wrap).setAttribute("x1", X(p.year)); $(".xhl", wrap).setAttribute("x2", X(p.year));
      $(".xhc", wrap).setAttribute("cx", X(p.year)); $(".xhc", wrap).setAttribute("cy", Y(p[opts.y]));
      showTip(opts.tip(p), e.clientX, e.clientY);
    };
    hit.addEventListener("pointermove", move);
    hit.addEventListener("pointerdown", move);
    hit.addEventListener("pointerleave", () => { g.setAttribute("visibility", "hidden"); hideTip(); });
  }
  function niceTicks(lo, hi, n = 4) {
    if (hi === lo) hi = lo + 1;
    const raw = (hi - lo) / n, mag = Math.pow(10, Math.floor(Math.log10(raw)));
    const step = [1, 2, 2.5, 5, 10].map((k) => k * mag).find((k) => k >= raw);
    const out = [];
    for (let v = Math.floor(lo / step) * step; v <= hi + step * 0.999; v += step) out.push(+v.toFixed(10));
    return out;
  }
  const srcLine = (s) => s ? `Source: <a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>.${s.note ? " " + s.note : ""}` : "";
  const lineCharts = [];

  const SERIES = window.US_SERIES;
  if (Array.isArray(SERIES) && SERIES.length > 1) {
    $("#lineCard").hidden = false;
    const x0 = SERIES[0].year, x1 = SERIES[SERIES.length - 1].year;
    $("#lineSub").textContent = `US divorces per 1,000 people, ${x0}–${x1}.`;
    $("#lineSrc").innerHTML = srcLine(window.US_SERIES_SOURCE);
    lineCharts.push(() => lineChart($("#chartLine"), SERIES, {
      y: "rate", fmtY: (v) => `${v}`, fmtTick: (v) => `${+v.toFixed(1)}`, left: 34,
      aria: `US divorce rate from ${x0} to ${x1}, from ${SERIES[0].rate} to ${SERIES[SERIES.length - 1].rate} per 1,000 people`,
      tip: (p) => `<b>${p.year}</b>${p.rate} per 1,000 people${p.divorces ? `<br>${full.format(p.divorces)} divorces` : ""}`,
    }));
  }
  const drawLines = () => lineCharts.forEach((f) => f());
  let rT;
  addEventListener("resize", () => { clearTimeout(rT); rT = setTimeout(drawLines, 150); });

  // ---------- what could it buy ----------
  const sel = $("#buySel");
  const incInput = $("#income");
  sel.innerHTML = DATA.map((d) => `<option value="${d.rank}">${d.emoji} ${d.short} (${money(d.amount)})</option>`).join("");
  const ITEMS = [
    { e: "⚖️", price: 357, l: "billable divorce-lawyer hours ($357/hr)" },
    { e: "🕊️", price: 4100, l: "amicable uncontested divorces ($4.1K)" },
    { e: "🏠", price: 420e3, l: "median-priced American homes ($420K)" },
    { e: "🏎️", price: 500e3, l: "brand-new V12 Lamborghinis ($500K)" },
    { e: "🎓", price: 110e3, l: "4-year public college degrees ($110K)" },
    { e: "🚀", price: 70e6, l: "orbital rocket launches ($70M)" },
    { e: "🥑", price: 14, l: "$14 brunch avocado toasts" },
  ];
  function since(years) {
    if (years < 1) return `work ${Math.max(1, Math.round(years * 12))} months`;
    const start = NOW_YEAR - years;
    if (start > 0) return `start working in ${Math.round(start)} AD`;
    if (years < 12000) return `start working around ${full.format(Math.round(-start))} BC`;
    if (years < 300000) return `start working in the Ice Age 🧊`;
    return `start before Homo sapiens existed 🦴`;
  }
  function syncIncPresets() {
    const val = +incInput.value;
    $$("#incPresets .chip").forEach((c) => c.classList.toggle("on", +c.dataset.inc === val));
  }
  function renderBuy() {
    const d = DATA.find((x) => x.rank === +sel.value) || top;
    const income = Math.max(1000, +incInput.value || 80610);
    const years = d.amount / income;
    $("#buyAmount").innerHTML = `${d.emoji} ${d.a} 💔 ${d.b}: <span>${d.est ? "~" : ""}${money(d.amount)}</span>`;
    const items = ITEMS.map((it) => {
      const raw = d.amount / it.price;
      const n = raw >= 10 ? compact.format(Math.floor(raw)) : raw >= 1 ? raw.toFixed(1) : raw.toFixed(2);
      return { e: it.e, n, l: it.l };
    });
    const yrLabel = years >= 1000 ? `${compact.format(Math.round(years))} years` : years >= 10 ? `${full.format(Math.round(years))} years` : `${years.toFixed(1)} years`;
    items.unshift({ e: "⏳", n: yrLabel, l: `of your pre-tax salary — you'd have to ${since(years)}.` });
    $("#buyGrid").innerHTML = items.map((it) => `<div class="buy-item"><div class="bi-emoji">${it.e}</div><div class="bi-num">${it.n}</div><div class="bi-label">${it.l}</div></div>`).join("");
  }
  sel.addEventListener("change", () => { renderBuy(); sfx("kaching"); });
  incInput.addEventListener("input", () => { syncIncPresets(); renderBuy(); });
  $("#incPresets").addEventListener("click", (e) => {
    const b = e.target.closest("[data-inc]");
    if (!b) return;
    incInput.value = b.dataset.inc;
    syncIncPresets();
    renderBuy();
    sfx("tick");
  });
  $("#shareBuyBtn").addEventListener("click", () => {
    const d = DATA.find((x) => x.rank === +sel.value) || top;
    const income = Math.max(1000, +incInput.value || 80610);
    const years = d.amount / income;
    const yrTxt = years >= 10 ? full.format(Math.round(years)) : years.toFixed(1);
    const homes = compact.format(Math.floor(d.amount / 420e3));
    const divorces = compact.format(Math.floor(d.amount / 4100));
    const line = `💸 ${d.a} 💔 ${d.b}'s ${d.est ? "~" : ""}${money(d.amount)} split = ${yrTxt} years at $${full.format(income)}/yr (${since(years)}), or ${homes} US homes & ${divorces} uncontested divorces! ${baseShareURL()}#split=${d.slug}`;
    copyText(line, "🛍️ Settlement math copied!");
  });
  syncIncPresets();
  renderBuy();

  // ---------- facts ----------
  function factBlock(chipsEl, gridEl, facts, groups) {
    const present = new Set(facts.map((f) => f.group).filter(Boolean));
    let current = "all";
    const render = () => {
      const list = facts.filter((f) => current === "all" || f.group === current);
      gridEl.innerHTML = list.map((f, i) => {
        const src = f.source ? `<div class="f-src">${f.url ? `<a href="${f.url}" target="_blank" rel="noopener">${f.source}</a>` : f.source}${f.year ? `, ${f.year}` : ""}</div>` : "";
        return `<div class="fact" style="animation-delay:${Math.min(i, 10) * 35}ms">
          <div class="f-top"><span class="f-emoji">${f.emoji}</span><span class="f-big">${f.big}</span></div>
          <div class="f-label">${f.label}</div><div class="f-note">${f.note}</div>${src}</div>`;
      }).join("");
    };
    if (present.size > 1) {
      chipsEl.innerHTML = Object.keys(groups).filter((k) => k === "all" || present.has(k))
        .map((k) => `<button class="chip ${k === "all" ? "on" : ""}" data-g="${k}">${groups[k]}</button>`).join("");
      chipsEl.addEventListener("click", (e) => {
        const b = e.target.closest(".chip"); if (!b) return;
        $$(".chip", chipsEl).forEach((x) => x.classList.toggle("on", x === b));
        current = b.dataset.g; render(); sfx("tick");
      });
    }
    render();
  }
  factBlock($("#statGroups"), $("#facts"), window.FACTS || [],
    { all: "🌈 All", money: "💰 Money", alimony: "🧾 Alimony", gender: "👫 Gender", law: "⚖️ Law", prenup: "📜 Prenups", world: "🌍 World", fun: "🎉 Fun" });

  // ---------- child support ----------
  const CS = window.CHILD_SUPPORT;
  if (CS) {
    $("#kids").hidden = false;
    $("#navKids").hidden = false;
    const fills = { full: "seg-full", partial: "seg-partial", none: "seg-none" };

    // Did the money arrive? One whole, split three ways.
    const rs = CS.received_split;
    if (rs) {
      $("#splitCard").hidden = false;
      const splits = [rs, rs.prior].filter(Boolean);
      $("#splitSub").textContent = `Custodial parents who were owed child support, ${splits.map((s) => s.year).join(" vs. ")}.`;
      const NAMES = { full: "💚 Got all of it", partial: "🫤 Got some of it", none: "👻 Got nothing" };
      $("#segBar").innerHTML = splits.map((s) => `<div class="seg-row"><span class="seg-year">${s.year}</span><div class="seg-bar">${
        ["full", "partial", "none"].map((k) =>
          `<div class="seg-part ${fills[k]}" style="flex:${s[k]} 1 0" tabindex="0" data-tip="<b>${NAMES[k]}</b>${s[k]}% of parents owed support in ${s.year}"><span>${s[k]}%</span></div>`).join("")
      }</div></div>`).join("");
      $("#segLegend").innerHTML = Object.keys(NAMES).map((k) => `<span class="lg"><i class="sw ${fills[k]}"></i>${NAMES[k]}</span>`).join("");
      $("#splitSrc").innerHTML = splits.map((s, i) => (i ? `${s.year}: ` : "Source: ") + `<a href="${s.url}" target="_blank" rel="noopener">${s.source}</a>.`).join(" ")
        + (rs.note ? ` ${rs.note}` : "");
      bindTips($("#segBar"));
      // A part too narrow for its label prints none; the tooltip and legend still carry it.
      const fit = () => $$(".seg-part", $("#segBar")).forEach((pt) => { pt.firstElementChild.hidden = pt.clientWidth < 46; });
      if ("ResizeObserver" in window) new ResizeObserver(fit).observe($("#segBar")); else fit();
    }

    // Owed vs actually paid, per year: received + unpaid = due.
    const dvr = (CS.due_vs_received || []).filter((r) => r.due && r.received != null).sort((a, b) => b.year - a.year);
    if (dvr.length) {
      $("#gapCard").hidden = false;
      const max = Math.max(...dvr.map((r) => r.due));
      $("#gapBars").innerHTML = dvr.map((r) => {
        const unpaid = r.due - r.received, pct = Math.round((r.received / r.due) * 100);
        return `<div class="gap-row" tabindex="0" data-tip="<b>${r.year}</b>${money(r.due)} owed<br>${money(r.received)} paid (${pct}%)<br>${money(unpaid)} never showed up<br>${r.nominal ? `About, in ${r.dollars} dollars. In ${r.nominal.dollars} dollars: ${money(r.nominal.due)} owed, ${money(r.nominal.received)} paid` : `In ${r.dollars || "2017"} dollars`}">
          <span class="bar-label">${r.year}</span>
          <span class="gap-track" style="--w:${(r.due / max).toFixed(4)}">
            <span class="gap-fill seg-full" style="flex:${r.received} 1 0"></span><span class="gap-fill seg-none" style="flex:${unpaid} 1 0"></span>
          </span>
          <span class="bar-val">${r.est ? "~" : ""}${money(unpaid)}<span class="wide-only"> unpaid</span></span>
        </div>`;
      }).join("");
      $("#gapLegend").innerHTML = `<span class="lg"><i class="sw seg-full"></i>Paid</span><span class="lg"><i class="sw seg-none"></i>Unpaid</span>`;
      if (CS.due_vs_received_source) $("#gapSrc").innerHTML = srcLine(CS.due_vs_received_source);
      bindTips($("#gapBars"));
    }

    // National arrears over time.
    // The government program over time: arrears, collections, caseload. One metric (one axis) at a time.
    const ar = (CS.program_series || CS.arrears_series || []).filter((r) => r.arrears).sort((a, b) => a.year - b.year);
    if (ar.length > 1) {
      $("#arrearsCard").hidden = false;
      if (CS.arrears_source) $("#arrearsSrc").innerHTML = srcLine(CS.arrears_source);
      const mil = (v) => (v ? `${+(v / 1e6).toFixed(1)}M` : "0");
      const METRIC = {
        arrears: { title: "The IOU pile 📈", sub: "Unpaid back child support owed in the US government program, by fiscal year.", fmt: money, tick: money, tip: "in unpaid back support" },
        collections: { title: "What actually gets collected 💵", sub: "Child support the government program collected and paid out each fiscal year.", fmt: money, tick: money, tip: "collected" },
        cases: { title: "Fewer and fewer cases 📁", sub: "Open child support cases in the government program, by fiscal year.", fmt: mil, tick: mil, tip: "open cases" },
      };
      let metric = "arrears";
      const drawProg = () => {
        const M = METRIC[metric], pts = ar.filter((r) => r[metric] != null);
        $("#arrearsTitle").textContent = M.title;
        $("#arrearsSub").textContent = M.sub;
        lineChart($("#chartArrears"), pts, {
          y: metric, fmtY: M.fmt, fmtTick: M.tick, zero: true, left: 46,
          aria: `${M.title.replace(/\s*\S+$/, "")}, ${pts[0].year} to ${pts[pts.length - 1].year}`,
          tip: (p) => `<b>FY${p.year}</b>${M.fmt(p[metric])} ${M.tip}${p.collected_per_dollar ? `<br>$${p.collected_per_dollar.toFixed(2)} collected per $1 spent` : ""}`,
        });
      };
      if (ar.some((r) => r.collections && r.cases)) {
        $("#progSeg").hidden = false;
        $$("#progSeg .seg-btn").forEach((b) => b.addEventListener("click", () => {
          $$("#progSeg .seg-btn").forEach((x) => x.classList.toggle("on", x === b));
          metric = b.dataset.m; drawProg(); sfx("tick");
        }));
      }
      lineCharts.push(drawProg);
    }

    // Biggest monthly checks, with the same who-pays filter as the leaderboard.
    // Sorted and scaled in USD; GBP entries keep their own symbol on screen.
    const HI = (CS.highest || []).filter((h) => h.monthly).map((h) => ({ ...h, usd: h.usd || h.monthly }))
      .sort((a, b) => b.usd - a.usd);
    if (HI.length) {
      $("#kidsBoardCard").hidden = false;
      const KIND = { order: "⚖️ court order", agreement: "🤝 agreement", request: "🙏 asked for, not granted" };
      const cash = (h, v) => (h.currency === "GBP" ? "£" + money(v).slice(1) : money(v));
      // Same surname on both sides reads as nonsense ("Simmons → Simmons"), so use first names.
      const pair = (h) => {
        const a = shortName(h.payer), b = shortName(h.recipient);
        return a === b ? `${h.payer.split(" ")[0]} → ${h.recipient.split(" ")[0]}` : `${a} → ${b}`;
      };
      let who = "all", asks = false, hideTop = false;
      const topName = shortName(HI[0].payer);
      $("#kidsTopBtn").textContent = `🙈 Hide ${topName}`;
      const draw = () => {
        const list = HI.filter((h) => (who === "all" || h.payer_gender === who) && (asks || h.kind !== "request") && !(hideTop && h === HI[0]));
        $("#kidsEmpty").hidden = list.length > 0;
        $("#kidsLegend").hidden = !asks;
        $("#kidsSub").textContent = asks
          ? "Now with what people asked for (striped). Judges mostly said no."
          : "Monthly amounts a judge ordered or both sides agreed to.";
        barChart($("#chartKids"), list.map((h) => ({
          label: `${pair(h)} ’${String(h.year).slice(2)}`,
          value: h.usd, cls: h.kind === "request" ? "ask" : "",
          text: `${h.est ? "~" : ""}${cash(h, h.monthly)}/mo${h.tag ? ` ${h.tag}` : ""}${h.kind === "request" ? " 🙏" : ""}`,
          tip: `<b>${h.payer} → ${h.recipient}</b>${cash(h, h.monthly)} a month${h.currency === "GBP" ? ` (about ${money(h.usd)})` : ""}${h.total ? ` (${money(h.total)} total)` : ""} · ${h.year}<br>${KIND[h.kind] || ""}${h.est ? " · reported" : ""}${h.fact ? `<br>${h.fact}` : ""}`,
        })));
      };
      $("#kidsTopBtn").addEventListener("click", () => {
        hideTop = !hideTop;
        $("#kidsTopBtn").setAttribute("aria-pressed", hideTop);
        $("#kidsTopBtn").textContent = hideTop ? `👀 Bring back ${topName}` : `🙈 Hide ${topName}`;
        draw(); sfx(hideTop ? "womp" : "kaching");
      });
      $("#asksBtn").addEventListener("click", () => {
        asks = !asks;
        $("#asksBtn").setAttribute("aria-pressed", asks);
        $("#asksBtn").textContent = asks ? "🙈 Hide the asks" : "🙏 Show the asks";
        draw(); sfx(asks ? "kaching" : "tick");
      });
      $$("#kidsSeg .seg-btn").forEach((b) => b.addEventListener("click", () => {
        $$("#kidsSeg .seg-btn").forEach((x) => x.classList.toggle("on", x === b));
        who = b.dataset.payer; draw(); sfx("tick");
      }));
      draw();
    }

    factBlock($("#kidGroups"), $("#kidFacts"), CS.stats || [],
      { all: "🌈 All", unpaid: "🕳️ Unpaid", program: "🏛️ The system", gender: "👫 Gender", enforcement: "🚔 Enforcement", world: "🌍 World", fun: "🎉 Fun" });
  }
  drawLines();

  // ---------- richest women ----------
  const RW = window.RICHEST_WOMEN;
  if (RW && RW.women && RW.women.length) {
    $("#rich").hidden = false;
    $("#navRich").hidden = false;
    // Fixed order = validated palette slot order; groups render in this order too.
    const PATHS = [
      { k: "inherited", e: "🧬", l: "Inherited it" },
      { k: "built", e: "🛠️", l: "Built it" },
      { k: "widowed", e: "🖤", l: "Widowed" },
      { k: "divorce", e: "💔", l: "Divorce" },
      { k: "married", e: "💍", l: "Married to it" },
    ];
    const P = Object.fromEntries(PATHS.map((p) => [p.k, p]));
    const W = RW.women.slice().sort((a, b) => a.rank - b.rank);
    const N = W.length;
    const n = Object.fromEntries(PATHS.map((p) => [p.k, W.filter((w) => w.path === p.k).length]));
    const used = PATHS.filter((p) => n[p.k]);
    const settlement = (name) => DATA.find((d) => d.b === name);
    const club = (RW.board || []).filter((b) => b.ever).sort((a, b) => (b.nw || 0) - (a.nw || 0));
    const heRows = DATA.filter((d) => d.payer === "m").length;
    const divorced = W.filter((w) => w.path === "divorce");
    const partly = W.filter((w) => w.path !== "divorce" && w.divorce_money);
    const listName = RW.list.name, asOf = RW.list.as_of;

    const onBoard = divorced.filter((w) => w.match && settlement(w.match));
    $("#richIntro").innerHTML = `You'd think divorcing a billionaire is the fast lane onto the rich list. We checked the top ${N} women on ${listName} and every woman who got paid on our leaderboard. ` +
      `<b>Verdict:</b> ${n.divorce ? `it works, but only ${n.divorce} of the top ${N} got there that way` : `not one of the top ${N} got there by divorce`}. ` +
      `${n.inherited} inherited it, ${n.widowed} were widowed and ${n.built} built it. The real cheat code is rich parents. 🧬` +
      (onBoard.length ? ` ${onBoard.length === 1 ? "The one who did is" : `The ${["", "", "two", "three", "four"][onBoard.length] || onBoard.length} who did are`} straight off our leaderboard: ` +
        onBoard.map((w) => `${w.name} (#${settlement(w.match).rank} here, #${w.rank} richest)`).join(" and ") + "." : "");

    const names = (arr) => arr.map((w) => `${w.name} (#${w.rank})`).join(", ");
    const tiles = [
      { e: "💔", v: `${n.divorce} of ${N}`, l: "got there mainly by divorce",
        t: n.divorce ? names(divorced) + (partly.length ? `. ${partly.length} more got part of it from a divorce.` : ".") : "None of them." },
      { e: "🧬", v: `${n.inherited} of ${N}`, l: "inherited it from family", t: "Daughters, granddaughters and nieces of the people who built it." },
      { e: "🔎", v: `${club.length} of ${heRows}`, l: "women on our leaderboard ever became billionaires",
        t: club.length ? club.slice(0, 4).map((b) => b.name).join(", ") + (club.length > 4 ? " and more." : ".") : "Not one." },
    ];
    $("#richTiles").innerHTML = tiles.map((t) => `
      <div class="tile"><div class="t-emoji">${t.e}</div><div class="t-val">${t.v}</div>
      <div class="t-label">${t.l}</div><div class="t-note">${t.t}</div></div>`).join("");

    // Waffle: one square per woman, grouped by path, rank order inside each group.
    const waffle = $("#waffle");
    const order = used.flatMap((p) => W.filter((w) => w.path === p.k));
    waffle.innerHTML = order.map((w, i) => {
      const p = P[w.path];
      const tipHTML = `<b>#${w.rank} ${w.name}</b>${money(w.nw)}${w.country ? ` · ${w.country}` : ""}<br>${p.e} ${w.detail}` +
        (w.divorce_note ? `<br>💔 ${w.divorce_note}` : "") + (w.match ? "<br>👉 Tap to see her split" : "");
      return `<button class="wf p-${p.k} ${w.match ? "link" : ""}" role="listitem" data-name="${w.match || ""}" data-tip="${tipHTML.replace(/"/g, "&quot;")}"
        aria-label="Number ${w.rank}, ${w.name}, ${money(w.nw)}, ${p.l}" style="animation-delay:${Math.min(i, 120) * 6}ms">${p.e}</button>`;
    }).join("");
    bindTips(waffle);
    // Pop the squares in when the chart scrolls into view.
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { waffle.classList.add("go"); io.disconnect(); } }, { threshold: 0.2 });
      io.observe(waffle);
    } else waffle.classList.add("go");
    $("#waffleSub").textContent = `Each square is one of the ${N} richest women on ${listName} (${asOf}). Tap a path to light it up.`;
    $("#waffleLegend").innerHTML = used.map((p) => `<button class="lg" data-k="${p.k}" aria-pressed="false"><i class="sw p-${p.k}"></i>${p.e} ${p.l} <span class="n">${n[p.k]}</span></button>`).join("");
    let lit = null;
    $("#waffleLegend").addEventListener("click", (e) => {
      const b = e.target.closest(".lg"); if (!b) return;
      lit = lit === b.dataset.k ? null : b.dataset.k;
      $$("#waffleLegend .lg").forEach((x) => x.setAttribute("aria-pressed", x.dataset.k === lit));
      waffle.classList.toggle("dim", !!lit);
      $$(".wf", waffle).forEach((sq) => sq.classList.toggle("on", !!lit && sq.classList.contains(`p-${lit}`)));
      sfx("tick");
    });
    const jumpTo = (name) => {
      const d = settlement(name); if (!d) return;
      openReceipt(d, DATA);
    };
    waffle.addEventListener("click", (e) => {
      const sq = e.target.closest(".wf"); if (!sq) return;
      burst(e.clientX, e.clientY, 10, [sq.textContent, "💎", "💸"]);
      if (sq.dataset.name) { sfx("kaching"); hideTip(); jumpTo(sq.dataset.name); } else sfx("tick");
    });
    $("#waffleSrc").innerHTML = `Source: <a href="${RW.list.url}" target="_blank" rel="noopener">${listName}</a>, net worth as of ${asOf}. ` +
      `How each woman got her money is our call from Forbes profiles and news coverage. A co-founder counts as "built it", even with a husband. ${RW.list.note || ""}`;

    // Leaderboard women who ever made a billionaire list, plus divorce billionaires with no public price tag.
    const sealed = (RW.extra || []).map((x) => ({ ...x, sealed: true }));
    const clubRows = club.concat(sealed).sort((a, b) => (b.nw || 0) - (a.nw || 0));
    if (clubRows.length) {
      $("#clubCard").hidden = false;
      const VIA = { divorce: "💔 The settlement is most of it", cofounder: "🛠️ She co-founded the company they split" };
      barChart($("#chartClub"), clubRows.map((b) => {
        const d = settlement(b.name);
        const how = b.sealed
          ? `<br>🔒 Split from ${b.ex} in ${b.year}. The price tag never got out, so she's not on our leaderboard.<br>👉 ${b.note}`
          : (d ? `<br>💔 Got ${d.est ? "~" : ""}${money(d.amount)} from ${d.a} in ${d.year}` : "") +
            `<br>${VIA[b.via] || ""}` + (b.where_now ? `<br>👉 ${b.where_now}` : "");
        return {
          label: `${b.gone ? "👋 " : b.sealed ? "🔒 " : ""}${b.name}`, value: b.nw || 0, cls: b.via === "cofounder" ? "ask" : "",
          text: `${money(b.nw || 0)}${b.gone ? `<span class="wide-only"> in ${b.nw_year}</span>` : ""}`,
          tip: `<b>${b.name}</b>${money(b.nw || 0)} on the ${b.list}` + (b.gone ? " (her last listing)" : "") + how,
          split: d || null,
        };
      }));
      const own = clubRows.filter((b) => b.via === "cofounder").length;
      $("#clubLegend").hidden = !own;
      $("#clubLegend").innerHTML = `<span class="lg"><i class="sw sw-bar"></i>💔 The divorce made her a billionaire</span><span class="lg"><i class="sw sw-bar ask"></i>🛠️ She co-founded the company they split</span>`;
      $("#clubSub").textContent = `Everyone on our leaderboard who ever made a Forbes billionaire list` +
        (sealed.length ? `, plus ${["", "one", "two", "three", "four", "five"][sealed.length] || sealed.length} divorce billionaire${sealed.length === 1 ? "" : "s"} whose price tag never got out (🔒)` : "") +
        `. Net worth at their latest listing; 👋 = no longer on it.`;
      $("#clubSrc").textContent = "Source: Forbes World's Billionaires and Forbes 400 lists, via each woman's Forbes profile and news coverage.";
    }

    // What happened next, for settlements with a notable, sourced epilogue.
    const later = (RW.board || []).filter((b) => b.where_now).map((b) => ({ b, d: settlement(b.name) })).filter((x) => x.d)
      .sort((x, y) => y.d.amount - x.d.amount);
    if (later.length) {
      $("#nowCard").hidden = false;
      $("#nowList").innerHTML = later.map(({ b, d }) => `
        <li><span class="now-emoji" aria-hidden="true">${d.emoji}</span><div>
          <button class="now-jump" type="button" data-rank="${d.rank}">${b.name}</button> <span class="muted">got ${d.est ? "~" : ""}${money(d.amount)} from ${shortName(d.a)}, ${d.year}</span>
          <div class="now-text">${b.where_now}${b.url ? ` <a class="now-src" href="${b.url}" target="_blank" rel="noopener">📰</a>` : ""}</div>
        </div></li>`).join("");
      $("#nowList").addEventListener("click", (e) => {
        const btn = e.target.closest(".now-jump");
        if (!btn) return;
        const d = DATA.find((x) => x.rank === +btn.dataset.rank);
        if (d) { sfx("kaching"); openReceipt(d, DATA); }
      });
    }
  }

  function bindTips(root) {
    $$("[data-tip]", root).forEach((el) => {
      el.addEventListener("pointermove", (e) => showTip(el.dataset.tip, e.clientX, e.clientY));
      el.addEventListener("pointerleave", hideTip);
      el.addEventListener("focus", () => { const b = el.getBoundingClientRect(); showTip(el.dataset.tip, b.left + b.width / 2, b.top); });
      el.addEventListener("blur", hideTip);
    });
  }

  // ---------- cross-reference helpers ----------
  const CS_HI = ((CS && CS.highest) || []).filter((h) => h.monthly);
  const csCash = (h, v) => (h.currency === "GBP" ? "£" + money(v).slice(1) : money(v));
  const CS_KIND_TAG = { order: "court-ordered", agreement: "agreed", request: "requested" };
  function findChildSupport(a, b) {
    const na = normName(a), nb = normName(b);
    return CS_HI.filter((h) => {
      const hp = normName(h.payer), hr = normName(h.recipient);
      return (hp === na && hr === nb) || (hp === nb && hr === na) || hp === na || hr === na || hp === nb || hr === nb;
    });
  }
  function findRelatedBoard(a, b, skipRank = -1) {
    const na = normName(a), nb = normName(b);
    return DATA.filter((o) => o.rank !== skipRank && (normName(o.a) === na || normName(o.b) === na || normName(o.a) === nb || normName(o.b) === nb));
  }
  function findRelatedVault(a, b, skipIdx = -1) {
    const na = normName(a), nb = normName(b);
    return VAULT_LIST.map((v, idx) => ({ v, idx }))
      .filter(({ v, idx }) => idx !== skipIdx && (normName(v.a) === na || normName(v.b) === na || normName(v.a) === nb || normName(v.b) === nb));
  }

  // ---------- vault ----------
  const NOPES_1 = ["Nice try. 🤐", "Sealed! 🔒", "NDA'd. 🙊", "Counsel objects! ⚖️", "Redacted! 🖊️"];
  const NOPES_2 = ["One more tap… 👀", "Seal cracking… 🔓", "Clerk is looking away… 📂", "Almost unsealed… 🕵️"];
  function vaultClueHTML(v, idx) {
    const relBoard = findRelatedBoard(v.a, v.b);
    const relCS = findChildSupport(v.a, v.b);
    const links = [];
    relBoard.forEach((d) => {
      links.push(`<a class="v-link" href="#split=${d.slug}">🧾 Public split: ${d.short} (${d.year} · ${d.est ? "~" : ""}${money(d.amount)}) →</a>`);
    });
    if (relCS.length) {
      const topCS = relCS.slice().sort((x, y) => (y.usd || y.monthly) - (x.usd || x.monthly))[0];
      links.push(`<a class="v-link" href="#kids">👶 Child support docket: ${csCash(topCS, topCS.monthly)}/mo (${CS_KIND_TAG[topCS.kind] || topCS.kind}, ${topCS.year}) →</a>`);
    }
    return `<b>📂 Public breadcrumbs:</b> ${v.note}${links.length ? `<br>${links.join("<br>")}` : ""}`;
  }
  $("#vaultGrid").innerHTML = VAULT_LIST.map((v, idx) => `
    <article class="vcard" role="button" tabindex="0" data-vidx="${idx}" data-taps="0" aria-expanded="false">
      <span class="v-nope">${NOPES_1[idx % NOPES_1.length]}</span>
      <div class="v-emoji">${v.emoji} 🔒</div>
      <div class="v-names">${v.a} 💔 ${v.b}</div>
      <div class="v-year">Finalized ${v.year} · Tap 3× to pry open</div>
      <div class="v-price">Price tag: <span class="redact">$000,000,000</span></div>
      <div class="v-note">Sealed under confidentiality — tap to rattle the filing cabinet.</div>
      <div class="v-clue" hidden>${vaultClueHTML(v, idx)}</div>
    </article>`).join("");

  function crackVaultCard(c, forceOpen = false) {
    const idx = +c.dataset.vidx;
    const v = VAULT_LIST[idx];
    if (!v) return;
    let taps = +c.dataset.taps || 0;
    if (forceOpen && taps < 3) taps = 2;
    if (taps >= 3) { sfx("tick"); return; }
    taps++;
    c.dataset.taps = String(taps);
    const nope = $(".v-nope", c);
    const note = $(".v-note", c);
    if (taps < 3) {
      nope.textContent = taps === 1 ? pick(NOPES_1) : pick(NOPES_2);
      note.textContent = taps === 1 ? "🔒 Still sealed — 2 more taps to shake loose breadcrumbs…" : "👀 Seal loosening — 1 more tap!";
      c.classList.add("show-nope");
      c.classList.remove("shake"); void c.offsetWidth; c.classList.add("shake");
      sfx("womp");
    } else {
      c.classList.remove("shake");
      c.classList.add("cracked", "show-nope");
      c.setAttribute("aria-expanded", "true");
      $(".v-emoji", c).textContent = `${v.emoji} 🔓`;
      nope.textContent = "🔓 Unsealed!";
      note.textContent = "Settlement stays secret, but here's what hit the public record:";
      $(".v-clue", c).hidden = false;
      const r = c.getBoundingClientRect();
      if (r.width) burst(r.left + r.width / 2, r.top + 36, 16);
      sfx("crack");
    }
  }
  $$(".vcard").forEach((c) => {
    c.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      crackVaultCard(c);
    });
    c.addEventListener("keydown", (e) => {
      if (e.target !== c) return;
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); crackVaultCard(c); }
    });
  });

  // ---------- courtroom clash mini-game ----------
  const gLeft = $("#gLeft"), gRight = $("#gRight"), gFoot = $("#gameFoot");
  const gState = { pair: null, picked: null, streak: 0, best: 0, wins: 0, total: 0, lastKey: "" };
  try { gState.best = +localStorage.getItem("splitsville-best") || 0; } catch (_) {}

  const SPOILER_RE = /(\$|£|€|₩|CHF\s?|RMB\s?)[\d,.]+\s*(?:trillion|billion|million|thousand|[TBMK])?\b|\b\d+(?:\.\d+)?\s*(?:trillion|billion|million)\s*(?:yuan|francs|pounds|dollars|euros|won|shares)?\b/gi;
  const redactClue = (fact) => fact.replace(SPOILER_RE, "███");

  function syncGameHUD() {
    $("#gStreak").innerHTML = `🔥 Streak <b>${gState.streak}</b>`;
    $("#gBest").innerHTML = `🏆 Best <b>${gState.best}</b>`;
    $("#gAcc").innerHTML = `🎯 <b>${gState.wins}/${gState.total}</b>`;
    $("#shareGameBtn").hidden = gState.total === 0;
  }
  function pickGamePair() {
    for (let tries = 0; tries < 40; tries++) {
      const a = pick(DATA);
      let pool = DATA.filter((x) => x.amount !== a.amount);
      if (Math.random() < 0.65) {
        const close = pool.filter((x) => {
          const ratio = Math.max(a.amount, x.amount) / Math.min(a.amount, x.amount);
          return ratio >= 1.15 && ratio <= 9;
        });
        if (close.length >= 2) pool = close;
      }
      const b = pick(pool);
      const key = [a.rank, b.rank].sort((x, y) => x - y).join("-");
      if (key !== gState.lastKey) {
        gState.lastKey = key;
        return Math.random() < 0.5 ? [a, b] : [b, a];
      }
    }
    return [DATA[0], DATA[1]];
  }
  function renderGameCard(btn, d, side) {
    const revealed = gState.picked !== null;
    const winSide = gState.pair[0].amount > gState.pair[1].amount ? 0 : 1;
    const isWin = side === winSide;
    const isPick = gState.picked === side;
    btn.disabled = revealed;
    btn.classList.toggle("win", revealed && isWin);
    btn.classList.toggle("lose", revealed && !isWin);
    btn.classList.toggle("wrong-pick", revealed && isPick && !isWin);

    let badgeCls = "gc-badge", badgeTxt = `${CATS[d.cat] || d.cat} · ${d.year}`;
    if (revealed) {
      if (isWin && isPick) { badgeCls += " win"; badgeTxt = `✅ Nailed it · #${d.rank}`; }
      else if (isWin) { badgeCls += " win"; badgeTxt = `💰 Paid more · #${d.rank}`; }
      else if (isPick) { badgeCls += " miss"; badgeTxt = `❌ Smaller check · #${d.rank}`; }
      else { badgeTxt = `Ranked #${d.rank}`; }
    }
    const meta = [`Finalized ${d.year}`, yrs(d), d.award ? "⚖️ Court award" : "🤝 Settlement"].filter(Boolean).join(" · ");
    btn.innerHTML = `
      <div class="gc-top">
        <span class="gc-emoji" aria-hidden="true">${d.emoji}</span>
        <span class="${badgeCls}">${badgeTxt}</span>
      </div>
      <div class="gc-names">${d.a} 💔 ${d.b}</div>
      <div class="gc-meta">${meta}</div>
      ${revealed
        ? `<div class="gc-amt">${d.est ? "~" : ""}${money(d.amount)}</div>`
        : `<span class="gc-mystery">💸 Tap: Bigger check?</span>`}
      <p class="gc-fact">${revealed ? d.fact : redactClue(d.fact)}</p>`;
  }
  function dealGame() {
    gState.pair = pickGamePair();
    gState.picked = null;
    gFoot.hidden = true;
    renderGameCard(gLeft, gState.pair[0], 0);
    renderGameCard(gRight, gState.pair[1], 1);
  }
  const WIN_QUIPS = ["✅ Sustained!", "🔨 Gavel bang—you nailed it!", "🥂 Forensic-accountant material!", "⚖️ Case closed in your favor!"];
  const LOSS_QUIPS = ["💔 Overruled!", "😬 Your lawyer winces.", "📉 Contempt of family court!", "🧾 Check the docket:"];
  function chooseGameSide(side) {
    if (gState.picked !== null || !gState.pair) return;
    gState.picked = side;
    const winSide = gState.pair[0].amount > gState.pair[1].amount ? 0 : 1;
    const winner = gState.pair[winSide], loser = gState.pair[1 - winSide];
    const right = side === winSide;
    gState.total++;
    if (right) {
      gState.wins++;
      gState.streak++;
      if (gState.streak > gState.best) {
        gState.best = gState.streak;
        try { localStorage.setItem("splitsville-best", gState.best); } catch (_) {}
      }
      sfx("kaching");
      const winEl = winSide === 0 ? gLeft : gRight;
      const r = winEl.getBoundingClientRect();
      if (r.width) burst(r.left + r.width / 2, r.top + r.height * 0.35, 20);
    } else {
      gState.streak = 0;
      sfx("womp");
    }
    syncGameHUD();
    renderGameCard(gLeft, gState.pair[0], 0);
    renderGameCard(gRight, gState.pair[1], 1);
    const mult = winner.amount / loser.amount;
    const ratioTxt = mult >= 10 ? `${Math.round(mult)}× bigger` : `${mult.toFixed(1)}× bigger`;
    const diff = winner.amount - loser.amount;
    $("#gVerdict").textContent = `${right ? pick(WIN_QUIPS) : pick(LOSS_QUIPS)} ${winner.short} (${money(winner.amount)}) beat ${loser.short} (${money(loser.amount)}) — ${ratioTxt} (${money(diff)} more).`;
    gFoot.hidden = false;
  }
  gLeft.addEventListener("click", () => chooseGameSide(0));
  gRight.addEventListener("click", () => chooseGameSide(1));
  $("#gNextBtn").addEventListener("click", () => { dealGame(); sfx("tick"); });
  $("#gInspectBtn").addEventListener("click", () => {
    if (!gState.pair) return;
    const winner = gState.pair[0].amount > gState.pair[1].amount ? gState.pair[0] : gState.pair[1];
    sfx("kaching");
    openReceipt(winner, DATA);
  });
  $("#shareGameBtn").addEventListener("click", () => {
    if (!gState.total) return;
    const pct = Math.round((gState.wins / gState.total) * 100);
    const txt = `⚖️ Splitsville Courtroom Clash: ${gState.wins}/${gState.total} (${pct}%) · 🔥 Best streak: ${gState.best}! Think you can spot the pricier breakup? ${baseShareURL()}#game`;
    copyText(txt, "🏆 Score copied — go brag!");
  });
  syncGameHUD();
  dealGame();

  // ---------- official heartbreak receipt modal ----------
  const modal = $("#receiptModal");
  const rcDialog = $(".receipt", modal);
  const rcBody = $("#rcBody");
  const rcPrev = $("#rcPrev"), rcNext = $("#rcNext"), rcClose = $("#rcClose");
  let rcList = DATA;
  let rcCurrent = null;
  let rcTrigger = null;

  const RW_BOARD_MAP = new Map((((window.RICHEST_WOMEN || {}).board) || []).map((b) => [normName(b.name), b]));
  const RW_WOMEN_MAP = new Map((((window.RICHEST_WOMEN || {}).women) || []).flatMap((w) => {
    const out = [[normName(w.name), w]];
    if (w.match) out.push([normName(w.match), w]);
    return out;
  }));

  function receiptCrossRefsHTML(d) {
    const boxes = [];
    const rwBoard = RW_BOARD_MAP.get(normName(d.b)) || RW_BOARD_MAP.get(normName(d.a));
    const rwWoman = RW_WOMEN_MAP.get(normName(d.b)) || RW_WOMEN_MAP.get(normName(d.a));
    if (rwBoard || rwWoman) {
      const parts = [];
      if (rwBoard && rwBoard.ever) {
        parts.push(`<b>👑 Billionaire List Check:</b> ${rwBoard.name} landed on the ${rwBoard.list} (${money(rwBoard.nw || 0)}${rwBoard.gone ? `, last listed ${rwBoard.nw_year}` : ""})${rwWoman ? ` — currently #${rwWoman.rank} among the world's richest women` : ""}.`);
        if (rwBoard.where_now) parts.push(rwBoard.where_now);
      } else if (rwBoard && rwBoard.where_now) {
        parts.push(`<b>🧳 Where Did the Money Go?</b> ${rwBoard.where_now}`);
      } else if (rwWoman) {
        parts.push(`<b>👑 Richest Women Check:</b> #${rwWoman.rank} richest woman globally (${money(rwWoman.nw)}). ${rwWoman.divorce_note || rwWoman.detail}`);
      }
      boxes.push(`<div class="rc-box">${parts.join(" ")}<div class="rc-rel"><button type="button" class="chip" data-rc-jump="#rich">👑 Explore Richest Women →</button></div></div>`);
    }

    const csMatches = findChildSupport(d.a, d.b);
    if (csMatches.length) {
      const lines = csMatches.slice(0, 3).map((h) => `${h.payer} → ${h.recipient}: <b>${csCash(h, h.monthly)}/mo</b> (${CS_KIND_TAG[h.kind] || h.kind}, ${h.year})`);
      boxes.push(`<div class="rc-box"><b>🍼 Child Support Docket:</b> ${lines.join(" · ")}.<div class="rc-rel"><button type="button" class="chip" data-rc-jump="#kids">👶 See Child Support section →</button></div></div>`);
    }

    const otherBoard = findRelatedBoard(d.a, d.b, d.rank);
    const otherVault = findRelatedVault(d.a, d.b);
    if (otherBoard.length || otherVault.length) {
      const chips = [
        ...otherBoard.map((o) => `<button type="button" class="chip" data-rc-open="${o.rank}">${o.emoji} ${o.short} (${o.year} · ${o.est ? "~" : ""}${money(o.amount)})</button>`),
        ...otherVault.map(({ v, idx }) => `<button type="button" class="chip" data-rc-vault="${idx}">🔒 ${v.a} 💔 ${v.b} (${v.year} NDA Vault)</button>`),
      ];
      boxes.push(`<div class="rc-box"><b>🔁 Repeat Offender File:</b> Also spotted elsewhere in our breakup files:<div class="rc-rel">${chips.join("")}</div></div>`);
    }
    return boxes.join("");
  }

  function renderReceipt() {
    const d = rcCurrent;
    if (!d) return;
    const tags = [
      `<span class="tag">${MEDAL[d.rank - 1] || "🏆"} Ranked #${d.rank} of ${DATA.length}</span>`,
      `<span class="tag">${CATS[d.cat] || d.cat}</span>`,
      `<span class="tag ${d.payer === "f" ? "she" : ""}">${d.payer === "f" ? "👩 She paid" : "👨 He paid"}</span>`,
      `<span class="tag ${d.award ? "award" : ""}">${d.award ? "⚖️ Judge-ordered" : "🤝 Settlement"}</span>`,
    ];
    if (d.est) tags.push(`<span class="tag est">🤔 Estimate</span>`);
    if (d.minted) tags.push(`<span class="tag rich">👑 Billionaire club</span>`);

    const durVal = d.married && d.ended
      ? `${lengthText(d)} (${d.married}–${d.ended})`
      : d.days ? lengthText(d) : `Finalized ${d.year}`;
    const medYears = d.amount / 80610;
    const medTxt = medYears >= 10 ? `${full.format(Math.round(medYears))} years` : `${medYears.toFixed(1)} years`;
    const lawyerHrs = compact.format(Math.round(d.amount / 357));

    const rows = [
      ["Check direction", `${d.a} → ${d.b}`],
      [`Resolution (${d.year})`, d.award ? "⚖️ Court-ordered award" : "🤝 Negotiated settlement"],
      ["Marriage span", durVal],
    ];
    if (d.perDay) {
      rows.push(["Daily burn rate", `${money(d.perDay)} / day married`]);
      rows.push(["Hourly rate (sleep included)", `${money(d.perDay / 24)} / hr`]);
    }
    rows.push(["Median US household ($80,610/yr)", `${medTxt} of work`]);
    rows.push(["Divorce-lawyer hours ($357/hr)", `${lawyerHrs} billable hrs`]);

    const srcs = (d.source ? d.source.split(" ; ") : []).map((u, i, all) =>
      `<a class="tag src-tag" href="${u}" target="_blank" rel="noopener">📰 Source${all.length > 1 ? ` ${i + 1}` : ""}</a>`).join("");

    rcBody.innerHTML = `
      <div class="rc-hero">
        <div class="rc-emoji" aria-hidden="true">${d.emoji}</div>
        <h3 class="rc-title" id="rcTitle">${d.a} 💔 ${d.b}</h3>
        <div class="rc-amt">${d.est ? "~" : ""}${money(d.amount)}</div>
        <div class="rc-exact">$${full.format(d.amount)} nominal USD${d.orig ? ` · reported as ${d.orig}` : ""}${d.est ? " · estimated" : ""}</div>
        <div class="tags rc-tags">${tags.join("")}</div>
      </div>
      <div class="rc-lines">
        ${rows.map(([k, v]) => `<div class="rc-row"><span>${k}</span><b>${v}</b></div>`).join("")}
      </div>
      <p class="rc-story">${d.fact}</p>
      ${receiptCrossRefsHTML(d)}
      <div class="rc-actions">
        <button class="pill-btn small" type="button" data-rc-act="spend">🛍️ Spend this check</button>
        <button class="pill-btn small ghost" type="button" data-rc-act="random">🎲 Random split</button>
        <button class="pill-btn small ghost" type="button" data-rc-act="share">🔗 Share receipt</button>
        ${srcs ? `<div class="rc-srcs">${srcs}</div>` : ""}
      </div>`;

    const disableNav = rcList.length <= 1;
    rcPrev.disabled = disableNav;
    rcNext.disabled = disableNav;
  }

  function openReceipt(d, list = DATA, opts = {}) {
    if (!d) return;
    const wasOpen = !modal.hidden;
    if (!wasOpen) rcTrigger = document.activeElement;
    rcList = Array.isArray(list) && list.some((x) => x.rank === d.rank) ? list : DATA;
    rcCurrent = d;
    renderReceipt();
    modal.hidden = false;
    document.body.classList.add("modal-open");
    if (!opts.fromHash) {
      try { history.replaceState(null, "", `#split=${d.slug}`); } catch (_) {}
    }
    if (!wasOpen) rcDialog.focus();
  }

  function closeReceipt(opts = {}) {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    rcCurrent = null;
    if (!opts.keepHash && location.hash.startsWith("#split=")) {
      try { history.replaceState(null, "", `${location.pathname}${location.search}`); } catch (_) {}
    }
    if (rcTrigger && typeof rcTrigger.focus === "function") {
      try { rcTrigger.focus(); } catch (_) {}
    }
    rcTrigger = null;
  }

  function stepReceipt(dir) {
    if (!rcCurrent || rcList.length <= 1) return;
    const idx = rcList.findIndex((x) => x.rank === rcCurrent.rank);
    const next = rcList[(idx + dir + rcList.length) % rcList.length] || DATA[0];
    rcCurrent = next;
    renderReceipt();
    try { history.replaceState(null, "", `#split=${next.slug}`); } catch (_) {}
    sfx("tick");
  }

  rcPrev.addEventListener("click", () => stepReceipt(-1));
  rcNext.addEventListener("click", () => stepReceipt(1));
  rcClose.addEventListener("click", () => { closeReceipt(); sfx("tick"); });
  modal.addEventListener("click", (e) => { if (e.target === modal) { closeReceipt(); sfx("tick"); } });

  rcBody.addEventListener("click", (e) => {
    const actBtn = e.target.closest("[data-rc-act]");
    if (actBtn && rcCurrent) {
      const act = actBtn.dataset.rcAct;
      if (act === "spend") {
        const d = rcCurrent;
        closeReceipt();
        sel.value = String(d.rank);
        renderBuy();
        sfx("kaching");
        $("#buy").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      } else if (act === "random") {
        const pool = DATA.length > 1 ? DATA.filter((x) => x.rank !== rcCurrent.rank) : DATA;
        rcList = DATA;
        rcCurrent = pick(pool);
        renderReceipt();
        try { history.replaceState(null, "", `#split=${rcCurrent.slug}`); } catch (_) {}
        sfx("kaching");
      } else if (act === "share") {
        copyText(`${baseShareURL()}#split=${rcCurrent.slug}`, "🧾 Heartbreak receipt link copied!");
      }
      return;
    }
    const openBtn = e.target.closest("[data-rc-open]");
    if (openBtn) {
      const other = DATA.find((x) => x.rank === +openBtn.dataset.rcOpen);
      if (other) { sfx("kaching"); openReceipt(other, DATA); }
      return;
    }
    const vaultBtn = e.target.closest("[data-rc-vault]");
    if (vaultBtn) {
      const vIdx = +vaultBtn.dataset.rcVault;
      closeReceipt();
      const vc = $(`.vcard[data-vidx="${vIdx}"]`);
      if (vc) {
        vc.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
        crackVaultCard(vc, true);
      }
      return;
    }
    const jumpBtn = e.target.closest("[data-rc-jump]");
    if (jumpBtn) {
      const target = $(jumpBtn.dataset.rcJump);
      closeReceipt();
      if (target) target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      sfx("tick");
    }
  });

  addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") { e.preventDefault(); closeReceipt(); sfx("tick"); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); stepReceipt(-1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); stepReceipt(1); }
    else if (e.key === "Tab") {
      const focusables = $$('button:not(:disabled), [href], [tabindex]:not([tabindex="-1"])', rcDialog);
      if (!focusables.length) return;
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // ---------- URL hash deep-linking ----------
  function findSplitBySlug(raw) {
    const s = decodeURIComponent(raw || "").trim().toLowerCase();
    if (!s) return null;
    return DATA.find((d) => d.slug === s || String(d.rank) === s) || DATA.find((d) => d.slug.startsWith(s)) || null;
  }
  function handleHash() {
    const h = location.hash || "";
    if (h.startsWith("#split=")) {
      const d = findSplitBySlug(h.slice(7));
      if (d) openReceipt(d, DATA, { fromHash: true });
    } else if (!modal.hidden && h && $(h)) {
      closeReceipt({ keepHash: true });
    }
  }
  addEventListener("hashchange", handleHash);
  handleHash();
})();
