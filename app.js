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
  const DATA = (window.DIVORCES || []).slice().sort((x, y) => y.amount - x.amount);
  DATA.forEach((d, i) => {
    d.rank = i + 1;
    d.payer = d.payer || "m";
    d.days = d.marriedDays || (d.months ? d.months * 30.44 : d.married && d.ended && d.ended > d.married ? (d.ended - d.married) * 365.25 : null);
    d.perDay = d.days ? d.amount / d.days : null;
    const sa = shortName(d.a), sb = shortName(d.b);
    d.short = sa === sb ? `The ${sa}${/(s|x|z)$/.test(sa) ? "es" : "s"}` : `${sa} 💔 ${sb}`;
    d.search = `${d.a} ${d.b} ${d.year} ${d.fact} ${CATS[d.cat] || ""}`.toLowerCase();
  });
  const TOTAL = DATA.reduce((s, d) => s + d.amount, 0);
  const top = DATA[0];

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
  const RING_LINES = [
    "Ouch. That one had a prenup.", "There goes the beach house.", "Lawyers just bought a boat.",
    "Somebody's getting the dog.", "Alimony unlocked.", "That's going in the memoir.", "Half of everything. Again.",
  ];
  function ringText() {
    $("#ringCount").textContent = rings ? `${full.format(rings)} ring${rings === 1 ? "" : "s"} broken. ${pick(RING_LINES)}` : "Go on, nobody's watching.";
  }
  ringText();
  ringBtn.addEventListener("click", () => {
    rings++;
    try { localStorage.setItem("splitsville-rings", rings); } catch (_) {}
    ringBtn.textContent = "💔";
    ringBtn.classList.remove("crack"); void ringBtn.offsetWidth; ringBtn.classList.add("crack");
    sfx("crack"); rain(40); ringText();
    setTimeout(() => { ringBtn.textContent = "💍"; }, 1400);
  });

  // ---------- ticker ----------
  const tickItems = [];
  DATA.slice(0, 14).forEach((d) => tickItems.push(`${d.emoji} <b>${money(d.amount)}</b> ${d.short} (${d.year})`));
  tickItems.push(`🚨 <b>BREAKING</b> One divorce is ${Math.round((top.amount / TOTAL) * 100)}% of all the money on this list`);
  tickItems.push(`⚖️ <b>9</b> US states split marital property 50/50`);
  tickItems.push(`🧾 <b>2019</b> Alimony stops being tax-deductible`);
  const csTick = window.CHILD_SUPPORT && window.CHILD_SUPPORT.ticker;
  if (Array.isArray(csTick)) tickItems.push(...csTick);
  const tickHTML = tickItems.map((t) => `<span>${t}</span>`).join("");
  $("#ticker").innerHTML = tickHTML + tickHTML;

  // ---------- quick tiles ----------
  const withDays = DATA.filter((d) => d.days);
  const byPerDay = withDays.slice().sort((a, b) => b.perDay - a.perDay);
  const shortest = withDays.slice().sort((a, b) => a.days - b.days)[0];
  const longest = withDays.slice().sort((a, b) => b.days - a.days)[0];
  const sorted = DATA.map((d) => d.amount).sort((a, b) => a - b);
  const median = sorted.length % 2 ? sorted[(sorted.length - 1) / 2] : (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  const shePaid = DATA.filter((d) => d.payer === "f");
  const rest = TOTAL - top.amount;
  const tiles = [
    { e: "📦", v: `${Math.round((top.amount / TOTAL) * 100)}%`, l: "of the whole pot is one divorce", n: `${top.short}: ${money(top.amount)} vs ${money(rest)} for everyone else combined.` },
    { e: "⚖️", v: money(median), l: "median split on this list", n: "Half are bigger, half are smaller. All are absurd." },
    { e: "⏱️", v: money(byPerDay[0].perDay) + "/day", l: "priciest marriage, per day", n: `${byPerDay[0].short}, every day for ${Math.round(byPerDay[0].days / 365.25)} years.` },
    { e: "👩", v: `${shePaid.length} of ${DATA.length}`, l: "times she was the one who paid", n: shePaid.length ? shePaid.map((d) => shortName(d.a)).slice(0, 4).join(", ") + (shePaid.length > 4 ? " and more." : ".") : "" },
    { e: "⚡", v: lengthText(shortest), l: "shortest marriage here", n: `${shortest.short}, for ${money(shortest.amount)}.` },
    { e: "🐢", v: `${Math.round(longest.days / 365.25)} yrs`, l: "longest marriage here", n: `${longest.short}, for ${money(longest.amount)}.` },
  ];
  $("#quick").innerHTML = tiles.map((t) => `
    <div class="tile"><div class="t-emoji">${t.e}</div><div class="t-val">${t.v}</div>
    <div class="t-label">${t.l}</div><div class="t-note">${t.n}</div></div>`).join("");

  // ---------- leaderboard ----------
  const state = { q: "", payer: "all", cat: "all", sort: "amount" };
  const catCounts = DATA.reduce((m, d) => ((m[d.cat] = (m[d.cat] || 0) + 1), m), {});
  $("#cats").innerHTML = [`<button class="chip on" data-cat="all">🌈 All <span class="n">${DATA.length}</span></button>`]
    .concat(Object.keys(CATS).filter((k) => catCounts[k]).map((k) => `<button class="chip" data-cat="${k}">${CATS[k]} <span class="n">${catCounts[k]}</span></button>`))
    .join("");

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
    if (d.est) tags.push(`<span class="tag est">🤔 Estimate</span>`);
    if (d.orig) tags.push(`<span class="tag">💱 ${d.orig}</span>`);
    if (d.source) tags.push(`<a class="tag src-tag" href="${d.source}" target="_blank" rel="noopener">📰 Source</a>`);
    const meta = [d.year, yrs(d), d.perDay ? `${money(d.perDay)}/day` : ""].filter(Boolean).join(" · ");
    return `
      <article class="dcard" tabindex="0" data-rank="${d.rank}" style="animation-delay:${Math.min(i, 12) * 30}ms" aria-label="Number ${d.rank}: ${d.a} and ${d.b}, ${money(d.amount)}">
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
  function filtered() {
    const q = state.q.trim().toLowerCase();
    return DATA.filter((d) =>
      (state.payer === "all" || d.payer === state.payer) &&
      (state.cat === "all" || d.cat === state.cat) &&
      (!q || d.search.includes(q))
    ).sort(SORTS[state.sort]);
  }
  const PAGE = 24;
  state.limit = PAGE;
  function renderGrid(keepLimit) {
    if (!keepLimit) state.limit = PAGE;
    const list = filtered();
    $("#grid").innerHTML = list.slice(0, state.limit).map(cardHTML).join("");
    $("#empty").hidden = list.length > 0;
    const left = list.length - state.limit;
    $("#moreBtn").hidden = left <= 0;
    $("#moreBtn").textContent = `👀 Show ${Math.min(PAGE, left)} more (${left} to go)`;
    const sum = list.reduce((s, d) => s + d.amount, 0);
    const who = state.payer === "m" ? " where he paid" : state.payer === "f" ? " where she paid" : "";
    $("#resultLine").textContent = list.length
      ? `${list.length} split${list.length === 1 ? "" : "s"}${who}, worth ${money(sum)} combined.`
      : "";
    bindCards();
  }
  $("#moreBtn").addEventListener("click", () => { state.limit += PAGE; renderGrid(true); sfx("kaching"); });
  function bindCards() {
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
      c.addEventListener("click", () => sfx("kaching"));
    });
  }
  let qTimer;
  $("#q").addEventListener("input", (e) => { clearTimeout(qTimer); qTimer = setTimeout(() => { state.q = e.target.value; renderGrid(); }, 120); });
  $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; renderGrid(); });
  $$("#board .seg-btn").forEach((b) => b.addEventListener("click", () => {
    $$("#board .seg-btn").forEach((x) => x.classList.toggle("on", x === b));
    state.payer = b.dataset.payer; renderGrid(); sfx("tick");
  }));
  $("#cats").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    $$("#cats .chip").forEach((x) => x.classList.toggle("on", x === b));
    state.cat = b.dataset.cat; renderGrid(); sfx("tick");
  });
  renderGrid();

  $("#rouletteBtn").addEventListener("click", () => {
    state.q = ""; state.cat = "all"; state.payer = "all"; $("#q").value = "";
    $$("#board .seg-btn").forEach((x) => x.classList.toggle("on", x.dataset.payer === "all"));
    $$("#cats .chip").forEach((x) => x.classList.toggle("on", x.dataset.cat === "all"));
    state.limit = DATA.length; renderGrid(true);
    const d = pick(DATA);
    const card = $(`.dcard[data-rank="${d.rank}"]`);
    card.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
    setTimeout(() => {
      card.classList.remove("flash"); void card.offsetWidth; card.classList.add("flash");
      const r = card.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + 40, 20); sfx("kaching");
    }, reduced ? 50 : 650);
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
      <div class="bar-row" tabindex="0" data-i="${i}">
        <span class="bar-label" title="${r.label}">${r.label}</span>
        <span class="bar-track"><span class="bar ${r.hi ? "hi" : ""} ${r.cls || ""}" style="--w:0"></span><span class="bar-val">${r.text}</span></span>
      </div>`).join("");
    requestAnimationFrame(() => requestAnimationFrame(() => {
      $$(".bar", el).forEach((b, i) => b.style.setProperty("--w", (rows[i].value / max).toFixed(4)));
    }));
    $$(".bar-row", el).forEach((row) => {
      const r = rows[+row.dataset.i];
      const show = (x, y) => showTip(r.tip, x, y);
      row.addEventListener("pointermove", (e) => show(e.clientX, e.clientY));
      row.addEventListener("pointerleave", hideTip);
      row.addEventListener("focus", () => { const b = row.getBoundingClientRect(); show(b.left + b.width / 2, b.top); });
      row.addEventListener("blur", hideTip);
    });
  }
  const divTip = (d) => `<b>${d.emoji} ${d.a} 💔 ${d.b}</b>${d.est ? "~" : ""}${money(d.amount)} · ${d.year}${d.perDay ? `<br>${money(d.perDay)} per day married` : ""}`;

  let hideBezos = false;
  function renderTop() {
    const list = DATA.slice(hideBezos ? 1 : 0, (hideBezos ? 1 : 0) + 15);
    barChart($("#chartTop"), list.map((d) => ({ label: `${d.emoji} ${d.short}`, value: d.amount, text: (d.est ? "~" : "") + money(d.amount), tip: divTip(d) })));
    $("#topSub").textContent = hideBezos
      ? "Bezos hidden. Now you can actually see everyone else."
      : `Top 15 by reported amount. See the problem? Try hiding ${shortName(top.a)}.`;
  }
  $("#bezosBtn").addEventListener("click", (e) => {
    hideBezos = !hideBezos;
    e.currentTarget.setAttribute("aria-pressed", String(hideBezos));
    e.currentTarget.textContent = hideBezos ? "📦 Bring back Bezos" : "🙈 Hide Bezos";
    renderTop(); sfx("tick");
  });
  renderTop();
  barChart($("#chartDay"), byPerDay.slice(0, 12).map((d) => ({ label: `${d.emoji} ${d.short}`, value: d.perDay, text: money(d.perDay), tip: divTip(d) })));

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
  sel.innerHTML = DATA.map((d) => `<option value="${d.rank}">${d.emoji} ${d.short} (${money(d.amount)})</option>`).join("");
  const ITEMS = [
    { e: "🍔", price: 5.7, l: "Big Macs" },
    { e: "🥑", price: 14, l: "avocado toasts" },
    { e: "🏎️", price: 500e3, l: "Lamborghinis" },
    { e: "🏠", price: 420e3, l: "typical US homes" },
    { e: "🚀", price: 70e6, l: "rocket launches" },
    { e: "🎓", price: 110e3, l: "4-year public college degrees" },
  ];
  function since(years) {
    if (years < 1) return `${Math.round(years * 12)} months of work`;
    const start = NOW_YEAR - years;
    if (start > 0) return `start working in ${Math.round(start)} AD`;
    if (years < 12000) return `start working around ${full.format(Math.round(-start))} BC`;
    if (years < 300000) return `start working in the Ice Age 🧊`;
    return `start before Homo sapiens existed 🦴`;
  }
  function renderBuy() {
    const d = DATA.find((x) => x.rank === +sel.value) || top;
    const income = Math.max(1000, +$("#income").value || 80610);
    const years = d.amount / income;
    $("#buyAmount").innerHTML = `${d.emoji} ${d.a} 💔 ${d.b}: <span>${d.est ? "~" : ""}${money(d.amount)}</span>`;
    const items = ITEMS.map((it) => ({ e: it.e, n: compact.format(Math.floor(d.amount / it.price)), l: it.l }));
    items.unshift({ e: "⏳", n: `${compact.format(Math.round(years))} years`, l: `of your salary. You'd need to ${since(years)}.` });
    $("#buyGrid").innerHTML = items.map((it) => `<div class="buy-item"><div class="bi-emoji">${it.e}</div><div class="bi-num">${it.n}</div><div class="bi-label">${it.l}</div></div>`).join("");
  }
  sel.addEventListener("change", () => { renderBuy(); sfx("kaching"); });
  $("#income").addEventListener("input", renderBuy);
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

  function bindTips(root) {
    $$("[data-tip]", root).forEach((el) => {
      el.addEventListener("pointermove", (e) => showTip(el.dataset.tip, e.clientX, e.clientY));
      el.addEventListener("pointerleave", hideTip);
      el.addEventListener("focus", () => { const b = el.getBoundingClientRect(); showTip(el.dataset.tip, b.left + b.width / 2, b.top); });
      el.addEventListener("blur", hideTip);
    });
  }

  // ---------- vault ----------
  const NOPES = ["Nice try. 🤐", "Sealed! 🔒", "NDA'd. 🙊", "Lawyers say no. ⚖️", "Not today. 🚫"];
  $("#vaultGrid").innerHTML = (window.VAULT || []).map((v) => `
    <button class="vcard">
      <span class="v-nope">${pick(NOPES)}</span>
      <div class="v-emoji">${v.emoji} 🔒</div>
      <div class="v-names">${v.a} 💔 ${v.b}</div>
      <div class="v-year">Final ${v.year}</div>
      <div class="v-price">Price tag: <span class="redact">$000,000,000</span></div>
      <div class="v-note">${v.note}</div>
    </button>`).join("");
  $$(".vcard").forEach((c) => c.addEventListener("click", () => {
    $(".v-nope", c).textContent = pick(NOPES);
    c.classList.remove("shake"); void c.offsetWidth; c.classList.add("shake");
    sfx("womp");
  }));
})();
