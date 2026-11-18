(function () {
  const D = window.KC;
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const SP = Object.fromEntries(D.specialties.map((s) => [s.id, s]));
  const A = Object.fromEntries(D.articles.map((a) => [a.slug, a]));
  const V = Object.fromEntries(D.videos.map((v) => [v.id, v]));
  const main = $('#main');
  const fmtDate = (iso) => new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  const ICONS = {
    heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.1 4.1 0 0 1 12 7.4a4.1 4.1 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z"/><path d="M4.5 12h4l1.5-2.5 2.5 5 1.5-2.5h5"/>',
    ribbon: '<path d="M12 3.2c-1.9 0-3.4 1.5-3.4 3.5 0 2 1.3 3.9 3.4 6.5 2.1-2.6 3.4-4.5 3.4-6.5 0-2-1.5-3.5-3.4-3.5z"/><path d="M10 12.2 6 20.5l2.8-.9 1.5 2.4 3-6.2"/><path d="M14 12.2l4 8.3-2.8-.9-1.5 2.4-3-6.2"/>',
    brain: '<path d="M11.5 5.2A3 3 0 0 0 6.3 6.6a3 3 0 0 0-1.8 5.1 3 3 0 0 0 1.6 4.8 3 3 0 0 0 5.4 1.6z"/><path d="M12.5 5.2a3 3 0 0 1 5.2 1.4 3 3 0 0 1 1.8 5.1 3 3 0 0 1-1.6 4.8 3 3 0 0 1-5.4 1.6z"/><path d="M12 5.5v13"/>',
    bone: '<path d="M9.3 6.7 17.3 14.7"/><path d="M6.6 3.8a2.1 2.1 0 0 0-2.9 2.9 2.1 2.1 0 1 0 3 3l2.6-3a2.1 2.1 0 1 0-2.7-2.9z"/><path d="M17.4 20.2a2.1 2.1 0 0 0 2.9-2.9 2.1 2.1 0 1 0-3-3l-2.6 3a2.1 2.1 0 1 0 2.7 2.9z"/>',
    spine: '<rect x="9" y="2.5" width="6" height="3.4" rx="1.3"/><rect x="8.4" y="7.3" width="7.2" height="3.4" rx="1.3"/><rect x="8.4" y="12.1" width="7.2" height="3.4" rx="1.3"/><rect x="9" y="16.9" width="6" height="3.4" rx="1.3"/><path d="M6 9h2.4M15.6 9H18M6 13.8h2.4M15.6 13.8H18"/>',
    hair: '<path d="M3.5 20.5h17"/><path d="M7.5 20.5c0-6 1.2-10.5 3.5-14.5"/><path d="M12 20.5c0-6 1.6-10 4.5-13.5"/><path d="M16.5 20.5c0-4.8 1-8 3-10.5"/><circle cx="7.5" cy="20.5" r="1"/><circle cx="12" cy="20.5" r="1"/><circle cx="16.5" cy="20.5" r="1"/>',
    scale: '<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M7.5 10a4.5 4.5 0 0 1 9 0"/><path d="M12 10l2-2.6"/>',
    embryo: '<circle cx="12" cy="12" r="8.5"/><circle cx="10" cy="10.3" r="2.5"/><circle cx="14.4" cy="10.8" r="2.3"/><circle cx="12" cy="14.8" r="2.4"/>',
    cells: '<path d="M12 3c3.6 4.3 6.2 7.6 6.2 10.8a6.2 6.2 0 0 1-12.4 0C5.8 10.6 8.4 7.3 12 3z"/><circle cx="10.3" cy="14" r="1.7"/><circle cx="13.9" cy="11.8" r="1.4"/><circle cx="13.6" cy="16.2" r="1.1"/>',
    kidney: '<path d="M15.2 3.4c-3.3 0-6.7 2.6-6.7 7.1 0 1.6 1 2.4 2 2.7 1 .3 1.6 1.3 1.6 2.5 0 2.2 1.3 4.9 4 4.9 2.9 0 4.6-4.1 4.6-8.6 0-5.1-2.3-8.6-5.5-8.6z"/><path d="M8.6 11.2H4.5"/>',
  };
  const icon = (sp, cls = 'sp-ico') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" style="--c:${SP[sp].color}">${ICONS[SP[sp].icon]}</svg>`;

  // Seeded cover art: original, generated per article so every page has a relevant featured image in this preview.
  function hash(s) { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
  function cover(sp, seed, w = 1200, h = 560, label = true) {
    const s = SP[sp]; const r = hash(seed); const id = 'g' + r.toString(36);
    const cx = w * (0.62 + ((r % 100) / 100) * 0.2), cy = h * (0.35 + (((r >> 8) % 100) / 100) * 0.3);
    let rings = '';
    for (let i = 1; i <= 7; i++) rings += `<circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="${(i * h * 0.13).toFixed(0)}" fill="none" stroke="#fff" stroke-opacity="${(0.13 - i * 0.012).toFixed(3)}" stroke-width="1.2"/>`;
    let dots = '';
    for (let i = 0; i < 18; i++) { const q = hash(seed + i); dots += `<circle cx="${(q % w)}" cy="${((q >> 10) % h)}" r="${1 + (q % 3)}" fill="#C9A66B" fill-opacity="${0.25 + (q % 40) / 100}"/>`; }
    const sz = h * 0.62;
    return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(s.name)} illustration"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14213B"/><stop offset="1" stop-color="${s.color}"/></linearGradient></defs><rect width="${w}" height="${h}" fill="url(#${id})"/>${rings}${dots}<g transform="translate(${(cx - sz / 2).toFixed(0)} ${(cy - sz / 2).toFixed(0)}) scale(${(sz / 24).toFixed(3)})" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="${(1.1).toFixed(2)}" stroke-linecap="round" stroke-linejoin="round">${ICONS[s.icon]}</g>${label ? `<rect x="${w * 0.05}" y="${h - h * 0.17}" width="40" height="3" fill="#C9A66B"/><text x="${w * 0.05}" y="${h - h * 0.09}" fill="#fff" fill-opacity=".85" font-family="Public Sans, sans-serif" font-size="${Math.round(h * 0.05)}" letter-spacing="2">${esc(s.name.toUpperCase())}</text>` : ''}</svg>`;
  }

  const playSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12-7.5z"/></svg>';
  const card = (a) => `<a class="card" href="#${a.slug}"><span class="cov">${cover(a.sp, a.slug, 800, 400)}</span><span class="card-b"><span class="meta"><span class="tag">${icon(a.sp)}${esc(SP[a.sp].name)}</span><span>· ${a.read} min read</span></span><h3>${esc(a.title)}</h3><p>${esc(a.desc)}</p></span></a>`;
  const listItem = (a, i) => `<a href="#${a.slug}"><span class="rank">${String(i + 1).padStart(2, '0')}</span><span><span class="lt">${esc(a.title)}</span><br><span class="small muted">${esc(SP[a.sp].name)}</span></span><span class="lr">${a.read} min</span></a>`;
  const vidTile = (v) => `<a class="vid" href="#video-${v.id.slice(2)}"><span class="play">${playSvg}</span><b>${esc(v.title)}</b><span class="meta">${esc(v.duration)} · animated explainer</span><span class="pill warn">Script ready, to be produced</span></a>`;
  const ctaBox = (sp) => `<div class="cta"><div><h3>${sp ? `Questions about ${esc(SP[sp].name.toLowerCase())} treatment?` : 'Not sure which specialist you need?'}</h3><p>Share your reports with a Nuhavi doctor. We will help you understand your options and connect you with the right specialist.</p></div><a class="btn btn-brass" href="#consult">Talk to a doctor</a></div>`;

  function searchBox(id) {
    return `<div class="search" role="search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><label for="${id}" class="skip">Search conditions and treatments</label><input id="${id}" type="search" autocomplete="off" placeholder="Search a condition, symptom or treatment, e.g. knee pain, CAR-T, IVF"><div class="search-results" id="${id}-r" hidden></div></div>`;
  }
  function wireSearch(id) {
    const inp = $('#' + id), out = $('#' + id + '-r');
    if (!inp) return;
    const run = () => {
      const q = inp.value.trim().toLowerCase();
      if (q.length < 2) { out.hidden = true; return; }
      const terms = q.split(/\s+/);
      const scored = D.articles.map((a) => {
        const hay = (a.title + ' ' + a.kw.join(' ') + ' ' + SP[a.sp].name).toLowerCase();
        const hay2 = a.desc.toLowerCase();
        let sc = 0; for (const t of terms) { if (hay.includes(t)) sc += 3; else if (hay2.includes(t)) sc += 1; else return null; }
        return { a, sc };
      }).filter(Boolean).sort((x, y) => y.sc - x.sc).slice(0, 8);
      out.innerHTML = scored.length ? scored.map(({ a }) => `<a href="#${a.slug}"><div>${esc(a.title)}</div><div class="sr-sp">${esc(SP[a.sp].name)} · ${a.read} min read</div></a>`).join('') : `<div class="empty">No articles match "${esc(inp.value)}". Try a simpler word, such as "heart" or "knee".</div>`;
      out.hidden = false;
    };
    inp.addEventListener('input', run);
    inp.addEventListener('keydown', (e) => { if (e.key === 'Escape') { inp.value = ''; out.hidden = true; } if (e.key === 'Enter') { const f = out.querySelector('a'); if (f) location.hash = f.getAttribute('href'); } });
    document.addEventListener('click', (e) => { if (!e.target.closest('.search')) out.hidden = true; });
  }

  // ---------- views ----------
  function home() {
    const latest = D.specialties.map((s) => D.articles.filter((a) => a.sp === s.id).slice(-1)[0]).slice(0, 6);
    const featured = ['car-t-cell-therapy-overview', 'stroke-warning-signs', 'when-you-need-knee-replacement'].map((s) => A[s]);
    return `
<section class="hero"><div class="wrap">
  <p class="eyebrow">Nuhavi Health Knowledge Centre</p>
  <h1>Understand your condition before you decide on treatment</h1>
  <p class="lede">Clear, doctor-led guides to ${D.articles.length} conditions, treatments and procedures across ${D.specialties.length} specialties. Written in plain language for patients and families.</p>
  ${searchBox('q-home')}
  <div class="trust"><span>Reviewed by specialists before publication</span><span>About 2 to 3 minutes per article</span><span>Education first, never a sales pitch</span></div>
</div></section>
<section class="sec"><div class="wrap">
  <div class="sec-h"><h2>Browse by specialty</h2><a href="#all-articles">See all ${D.articles.length} articles</a></div>
  <div class="sp-grid">${D.specialties.map((s) => `<a class="sp-card" href="#${s.id}" style="--c:${s.color}">${icon(s.id)}<b>${esc(s.name)}</b><small>${s.count} articles</small></a>`).join('')}</div>
</div></section>
<section class="sec"><div class="wrap">
  <div class="sec-h"><h2>Featured guides</h2></div>
  <div class="cards">${featured.map(card).join('')}</div>
</div></section>
<section class="sec"><div class="wrap two">
  <div><div class="sec-h"><h2>Most read</h2></div><div class="list">${D.popular.map((s, i) => listItem(A[s], i)).join('')}</div></div>
  <div><div class="sec-h"><h2>Latest articles</h2></div><div class="list">${latest.map((a, i) => listItem(a, i)).join('')}</div></div>
</div></section>
<section class="sec"><div class="wrap">
  <div class="sec-h"><h2>Explainer videos</h2><a href="#videos">All videos</a></div>
  <div class="vids">${D.videos.slice(0, 4).map(vidTile).join('')}</div>
</div></section>
<section class="sec" style="padding-bottom:48px"><div class="wrap">${ctaBox()}</div></section>`;
  }

  function specialty(id) {
    const s = SP[id];
    const arts = D.articles.filter((a) => a.sp === id);
    const pop = D.popular.filter((p) => A[p].sp === id).map((p) => A[p]);
    const popular = (pop.length ? pop : []).concat(arts.filter((a) => !pop.includes(a))).slice(0, 5);
    const vids = D.videos.filter((v) => v.articles.some((sl) => A[sl].sp === id));
    return `
<section class="banner"><div class="cov-bg">${cover(id, id + '-banner', 1600, 420, false)}</div><div class="wrap banner-in">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="#knowledge-centre">Knowledge Centre</a><span>/</span><span>${esc(s.name)}</span></nav>
  <h1>${esc(s.name)}</h1><p>${esc(s.intro)}</p>
</div></section>
<section class="sec"><div class="wrap">
  <div class="sec-h"><h2>Start here</h2><span class="muted small">${arts.length} articles</span></div>
  <div class="cards">${arts.slice(0, 3).map(card).join('')}</div>
</div></section>
<section class="sec"><div class="wrap two">
  <div><div class="sec-h"><h2>Popular in ${esc(s.name)}</h2></div><div class="list">${popular.map((a, i) => listItem(a, i)).join('')}</div></div>
  <div><div class="sec-h"><h2>Latest</h2></div><div class="list">${[...arts].reverse().slice(0, 5).map((a, i) => listItem(a, i)).join('')}</div></div>
</div></section>
<section class="sec"><div class="wrap">
  <div class="sec-h"><h2>All ${esc(s.name)} articles</h2></div>
  <div class="cards">${arts.slice(3).map(card).join('')}</div>
</div></section>
${vids.length ? `<section class="sec"><div class="wrap"><div class="sec-h"><h2>Related videos</h2></div><div class="vids">${vids.map(vidTile).join('')}</div></div></section>` : ''}
<section class="sec"><div class="wrap">
  <div class="sec-h"><h2>Related treatments</h2></div>
  <div class="chips">${s.treatments.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</div>
</div></section>
<section class="sec" style="padding-bottom:48px"><div class="wrap">${ctaBox(id)}</div></section>`;
  }

  let allFilter = 'all';
  function allArticles() {
    const arts = allFilter === 'all' ? D.articles : D.articles.filter((a) => a.sp === allFilter);
    return `
<section class="sec"><div class="wrap">
  <nav class="crumbs" aria-label="Breadcrumb" style="color:var(--muted)"><a href="#knowledge-centre" style="color:var(--muted)">Knowledge Centre</a><span>/</span><span>All articles</span></nav>
  <div class="sec-h"><h1 style="font-size:38px">All articles</h1><span class="muted">${arts.length} of ${D.articles.length}</span></div>
  <div style="margin-bottom:18px">${searchBox('q-all')}</div>
  <div class="chips" style="margin-bottom:22px" role="group" aria-label="Filter by specialty">
    <button class="chip" data-f="all" aria-pressed="${allFilter === 'all'}">All</button>
    ${D.specialties.map((s) => `<button class="chip" data-f="${s.id}" aria-pressed="${allFilter === s.id}">${esc(s.name)}</button>`).join('')}
  </div>
  <div class="cards">${arts.map(card).join('')}</div>
</div></section><div style="height:48px"></div>`;
  }

  function article(a) {
    const s = SP[a.sp];
    const v = a.video ? V[a.video] : null;
    const rel = a.links.map((l) => A[l]);
    const more = D.articles.filter((x) => x.sp === a.sp && x.slug !== a.slug && !a.links.includes(x.slug)).slice(0, 3);
    const html = a.html.replace(/<figure class="flow"/, `<figure class="flow" style="--c:${s.color}"`);
    return `
<header class="art-head"><div class="art-head-in">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="#knowledge-centre">Knowledge Centre</a><span>/</span><a href="#${s.id}">${esc(s.name)}</a></nav>
  <h1>${esc(a.title)}</h1>
  <div class="art-meta">
    <span class="tag" style="display:inline-flex;gap:6px;align-items:center">${icon(a.sp)}<b>${esc(s.name)}</b></span>
    <span>${a.read} min read</span>
    <span>Published <b>${fmtDate(D.brand.published)}</b></span>
    <span>Last reviewed <b>pending</b></span>
    <span>Written by <b>Nuhavi medical content team</b></span>
    <span>Medical reviewer <b>to be assigned</b></span>
  </div>
</div></header>
<div class="wrap art-grid">
  <article>
    <figure class="feat">${cover(a.sp, a.slug)}</figure>
    <p class="feat-cap ed-only"><b>Featured image brief:</b> ${esc(a.img[0] || '')}</p><div style="height:22px"></div>
    <div class="prose">${html}</div>
    ${v ? `<a class="vcard" href="#video-${v.id.slice(2)}"><span class="vthumb">${playSvg}</span><span><span class="pill warn">Script ready, to be produced</span><b style="margin-top:6px">${esc(v.title)}</b><span class="small muted">${esc(v.duration)} animated explainer with subtitles</span></span></a>` : ''}
    <section class="faq" aria-labelledby="faq-h"><h2 id="faq-h">Frequently asked questions</h2>
      ${a.faqs.map((f, i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('')}
    </section>
    <div class="disc"><b>Medical disclaimer.</b> This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.</div>
    <div style="margin-top:26px">${ctaBox(a.sp)}</div>
    <section class="ed-panel ed-only" aria-label="Editorial notes">
      <h3>Editorial notes · not shown to patients</h3>
      <dl>
        <dt>Status</dt><dd><span class="pill warn">Awaiting specialist review</span></dd>
        <dt>URL</dt><dd><code>/knowledge-centre/${a.sp}/${a.slug}</code></dd>
        <dt>SEO title</dt><dd>${esc(a.seo)} <span class="muted">(${a.seo.length} chars)</span></dd>
        <dt>Meta description</dt><dd>${esc(a.desc)} <span class="muted">(${a.desc.length} chars)</span></dd>
        <dt>Primary keyword</dt><dd>${esc(a.kw[0])}</dd>
        <dt>Secondary keywords</dt><dd>${esc(a.kw.slice(1).join(', '))}</dd>
        <dt>Word count</dt><dd>${a.words} words · ${a.read} min</dd>
        <dt>Featured image</dt><dd>${esc(a.img[0])}</dd>
        <dt>Illustration 2</dt><dd>${esc(a.img[1] || '')}</dd>
        <dt>Illustration 3</dt><dd>${esc(a.img[2] || '')}</dd>
        <dt>Internal links</dt><dd>${rel.map((r) => esc(r.title)).join(' · ')}</dd>
        <dt>Structured data</dt><dd>MedicalWebPage + FAQPage (JSON-LD injected in &lt;head&gt;)</dd>
      </dl>
    </section>
  </article>
  <aside class="aside"><div class="sticky">
    <div class="aside-box"><h3>On this page</h3><ul class="toc">${a.toc.map((t) => `<li><a href="#${a.slug}" data-jump="${t.id}">${esc(t.text)}</a></li>`).join('')}<li><a href="#${a.slug}" data-jump="faq-h">Frequently asked questions</a></li></ul></div>
    <div class="aside-box"><h3>Related articles</h3><div class="rel">${rel.map((r) => `<a href="#${r.slug}">${icon(r.sp)}<span>${esc(r.title)}</span></a>`).join('')}</div></div>
    ${more.length ? `<div class="aside-box"><h3>More in ${esc(s.name)}</h3><div class="rel">${more.map((r) => `<a href="#${r.slug}"><span class="dot" style="--c:${s.color};margin-top:8px"></span><span>${esc(r.title)}</span></a>`).join('')}</div></div>` : ''}
  </div></aside>
</div>`;
  }

  function videos() {
    return `
<section class="sec"><div class="wrap">
  <nav class="crumbs" aria-label="Breadcrumb" style="color:var(--muted)"><a href="#knowledge-centre" style="color:var(--muted)">Knowledge Centre</a><span>/</span><span>Videos</span></nav>
  <div class="sec-h"><h1 style="font-size:38px">Explainer videos</h1></div>
  <p class="muted" style="max-width:68ch">Short animated explainers of 60 to 120 seconds, with subtitles and no graphic surgical footage. Each script below is ready for an animation studio; the narration is written to be read at a calm pace.</p>
  <div class="vids" style="margin:22px 0 30px">${D.videos.map(vidTile).join('')}</div>
  ${D.videos.map((v) => `<article class="vscript" id="video-${v.id.slice(2)}-s"><span class="pill warn">Script ready, to be produced</span><h2 style="margin-top:10px">${esc(v.title)}</h2>
    <div class="meta"><span>${esc(v.duration)}</span><span>· ${v.words} narration words</span><span>· ${esc(v.style)}</span></div>
    <p class="small" style="margin:10px 0 0">Embedded in: ${v.articles.map((sl) => `<a href="#${sl}">${esc(A[sl].title)}</a>`).join(' · ')}</p>
    <div class="tbl"><table><thead><tr><th>Time</th><th>On screen</th><th>Narration</th></tr></thead><tbody>${v.scenes.map((sc) => `<tr><td>${esc(sc.t)}</td><td>${esc(sc.visual)}</td><td>${esc(sc.vo)}</td></tr>`).join('')}</tbody></table></div>
  </article>`).join('')}
</div></section><div style="height:32px"></div>`;
  }

  function consult() {
    return `
<section class="sec"><div class="wrap consult">
  <nav class="crumbs" aria-label="Breadcrumb" style="color:var(--muted)"><a href="#knowledge-centre" style="color:var(--muted)">Knowledge Centre</a><span>/</span><span>Talk to a doctor</span></nav>
  <h1 style="font-size:38px;margin-bottom:12px">Talk to a Nuhavi doctor</h1>
  <p>Nuhavi Health is led by doctors. Share your medical reports and a doctor on our team will review them, explain your options in plain language, and connect you with the right specialist.</p>
  <ol><li>Send your recent reports, scans and prescriptions.</li><li>A Nuhavi doctor reviews them and calls you back.</li><li>You receive a specialist opinion and a clear plan for next steps.</li></ol>
  <div class="ed-panel" style="display:block"><h3>Template · for the web developer</h3><p style="margin:0">Connect this page to the main Nuhavi enquiry form. Contact details to insert: WhatsApp <span class="placeholder">[number]</span>, email <span class="placeholder">[address]</span>. Keep this CTA free of prices, packages and cost language, in line with the Knowledge Centre content policy.</p></div>
</div></section><div style="height:48px"></div>`;
  }

  // ---------- structured data ----------
  function setLD(a) {
    const el = $('#ld');
    if (!a) { el.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Nuhavi Health Knowledge Centre', publisher: { '@type': 'Organization', name: 'Nuhavi Health' } }); return; }
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'MedicalWebPage', name: a.seo, headline: a.title, description: a.desc, keywords: a.kw.join(', '), inLanguage: 'en',
          audience: { '@type': 'PeopleAudience', audienceType: 'Patient' }, specialty: SP[a.sp].name,
          datePublished: D.brand.published, lastReviewed: null, reviewedBy: null,
          publisher: { '@type': 'Organization', name: 'Nuhavi Health' } },
        { '@type': 'FAQPage', mainEntity: a.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
        { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Knowledge Centre' },
          { '@type': 'ListItem', position: 2, name: SP[a.sp].name },
          { '@type': 'ListItem', position: 3, name: a.title } ] },
      ],
    });
  }

  // ---------- router ----------
  const SP_ALIASES = {
    'cardiac-sciences': 'cardiology',
    'cancer-care': 'oncology',
    'neurosciences': 'neurology',
    'orthopaedics': 'orthopedics',
    'spine-surgery': 'spine',
    'hair-transplantation': 'hair-transplant',
    'hair': 'hair-transplant',
    'weight-loss': 'weight-loss-surgery',
    'bariatric-surgery': 'weight-loss-surgery',
    'bariatric': 'weight-loss-surgery',
    'fertility': 'ivf',
    'bmt': 'bone-marrow-transplant',
    'organ-transplants': 'kidney-transplant',
    'nephrology-urology': 'kidney-transplant',
  };

  function route() {
    let h = decodeURIComponent(location.hash.slice(1));
    if (SP_ALIASES[h]) h = SP_ALIASES[h];
    let html, title = 'Nuhavi Knowledge Centre', nav = 'home', art = null, after = null;
    if (SP[h]) { html = specialty(h); title = SP[h].name + ' guides · Nuhavi'; nav = 'sp'; }
    else if (A[h]) { art = A[h]; html = article(art); title = art.seo + ' · Nuhavi'; nav = 'sp'; }
    else if (D.articles.find(function(a) { return a.slug.replace(/^what-is-/, '') === h || h.replace(/^what-is-/, '') === a.slug; })) {
      art = D.articles.find(function(a) { return a.slug.replace(/^what-is-/, '') === h || h.replace(/^what-is-/, '') === a.slug; });
      html = article(art); title = art.seo + ' · Nuhavi'; nav = 'sp';
    }
    else if (h === 'all-articles') { html = allArticles(); title = 'All articles · Nuhavi'; nav = 'all'; }
    else if (h === 'videos' || h.startsWith('video-')) { html = videos(); title = 'Explainer videos · Nuhavi'; nav = 'videos'; if (h.startsWith('video-')) after = h + '-s'; }
    else if (h === 'consult') { html = consult(); title = 'Talk to a doctor · Nuhavi'; nav = ''; }
    else { html = home(); }
    main.innerHTML = html;
    document.title = title;
    setLD(art);
    document.querySelectorAll('.nav > a').forEach((a) => { if (a.dataset.nav === nav) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    const dd = $('.dd'); if (dd) dd.open = false;
    wireSearch('q-home'); wireSearch('q-all');
    main.querySelectorAll('[data-f]').forEach((b) => b.addEventListener('click', () => { allFilter = b.dataset.f; route(); }));
    main.querySelectorAll('[data-jump]').forEach((l) => l.addEventListener('click', (e) => { e.preventDefault(); const t = document.getElementById(l.dataset.jump); if (t) t.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }));
    if (after) { const t = document.getElementById(after); if (t) { t.scrollIntoView(); return; } }
    window.scrollTo(0, 0);
  }

  $('#dd-menu').innerHTML = D.specialties.map((s) => `<a href="#${s.id}">${icon(s.id)}<span>${esc(s.name)}</span></a>`).join('');
  $('#skip').addEventListener('click', (e) => { e.preventDefault(); main.focus(); });
  const edBtn = $('#ed-toggle');
  const setEd = (on) => { document.body.classList.toggle('ed', on); edBtn.setAttribute('aria-pressed', String(on)); try { localStorage.setItem('kc-ed', on ? '1' : '0'); } catch (e) { /* storage unavailable */ } };
  let edInit = false; try { edInit = localStorage.getItem('kc-ed') === '1'; } catch (e) { /* storage unavailable */ }
  setEd(edInit);
  edBtn.addEventListener('click', () => setEd(!document.body.classList.contains('ed')));
  window.addEventListener('hashchange', route);
  route();
})();