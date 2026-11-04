'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const S = (inner, label) => `<svg viewBox="0 0 200 150" role="img" aria-label="${label}">${inner}</svg>`;

/* ---------- Ilustrasi anatomi digital (SVG vektor, tajam di semua ukuran) ---------- */
const neuron = (l) => S(
  `<circle class="a" cx="32" cy="75" r="17"/><circle class="c" cx="32" cy="75" r="6"/>
   <path class="l" d="M17 66l-12-10M17 84l-12 10M24 60l-4-16"/>
   <path class="l" d="M49 75h108"/>
   ${[0, 1, 2, 3, 4].map(i => `<rect class="a" x="${58 + i * 20}" y="67" width="15" height="16" rx="7"/>`).join('')}
   <path class="l" d="M157 75l25-17M157 75h27M157 75l25 17"/>
   <circle class="p" cx="184" cy="58" r="3"/><circle class="p" cx="186" cy="75" r="3"/><circle class="p" cx="184" cy="92" r="3"/>
   <path class="n" d="M50 75h106"/>
   <text class="t" x="20" y="125">Badan sel</text><text class="t" x="84" y="50">Akson + selubung mielin</text><text class="t" x="140" y="125">Ujung akson</text>`, l);

const brain = (l) => S(
  `<path class="a" d="M52 82c-18-6-22-32-4-42 4-20 32-26 46-12 14-12 42-4 44 18 18 8 16 34-4 40-4 16-28 20-38 8-12 10-36 8-44-12z"/>
   <path class="l" d="M98 30v62M70 50c12 6 16 14 13 26M126 48c-12 6-16 14-13 26M58 76c12-3 20 3 24 12M138 76c-12-3-20 3-24 12"/>
   <path class="a" d="M112 104c8 6 22 8 30 14l-6 7c-9-5-22-8-30-14z"/>
   <path class="c" d="M92 100c-2 12 0 22 2 30h10c0-10 0-20-2-30z"/>
   <text class="t" x="8" y="22">Otak besar</text><text class="t" x="128" y="136">Otak kecil</text><text class="t" x="20" y="134">Batang otak</text>
   <path class="n" d="M70 62c10 8 20 6 28-4s20-10 30 0"/>`, l);

const spinal = (l) => S(
  `${[0, 1, 2, 3, 4, 5].map(i => `<rect class="a" x="72" y="${10 + i * 22}" width="56" height="17" rx="7"/>
   <path class="l" d="M94 ${19 + i * 22}q-30-4-50 12M106 ${19 + i * 22}q30-4 50 12"/>`).join('')}
   <rect class="c" x="93" y="4" width="14" height="140" rx="7"/><path class="n" d="M100 8v132"/>
   <text class="t" x="4" y="14">Sumsum tulang</text><text class="t" x="4" y="26">belakang</text><text class="t" x="144" y="140">Ruas tulang</text><text class="t" x="144" y="152"></text>`, l);

const nerve = (l) => S(
  `<path class="l" d="M20 20c20 40 20 70 50 80"/><path class="l" d="M20 20c30 20 60 20 80 50"/>
   <path class="a" d="M118 52c10-12 30-12 40 0l12 38c4 14-4 24-16 24h-32c-12 0-16-10-12-24z"/>
   <path class="l" d="M122 112v22M136 114v26M150 114v26M164 110v22"/>
   <path class="n" d="M20 20c20 40 20 70 50 80s30-20 56-18M20 20c30 20 60 20 80 50l30 6"/>
   <circle class="p" cx="20" cy="20" r="4"/><circle class="p" cx="126" cy="82" r="3"/>
   <text class="t" x="30" y="128">Saraf tepi</text><text class="t" x="30" y="14">Dari sumsum tulang</text><text class="t" x="140" y="46">Tangan</text>`, l);

const bone = (l) => S(
  `<g transform="rotate(28 100 75)"><rect class="a" x="84" y="30" width="32" height="90" rx="8"/>
   ${[[86, 28], [114, 28], [86, 122], [114, 122]].map(p => `<circle class="a" cx="${p[0]}" cy="${p[1]}" r="15"/>`).join('')}
   <rect class="c" x="94" y="40" width="12" height="70" rx="6"/>
   <path class="l" d="M88 22l8 8M112 22l-8 8M88 128l8-8M112 128l-8-8"/></g>
   <text class="t" x="6" y="30">Ujung tulang</text><text class="t" x="6" y="44">(spons)</text><text class="t" x="132" y="76">Sumsum tulang</text><text class="t" x="132" y="90">(di rongga)</text>`, l);

const joint = (l) => S(
  `<rect class="a" x="76" y="4" width="32" height="64" rx="13"/><rect class="a" x="84" y="84" width="32" height="62" rx="13"/>
   <rect class="c" x="76" y="66" width="38" height="18" rx="9"/>
   <path class="l" d="M72 56c-16 10-16 28 2 40M120 56c18 10 18 28 0 40M86 62l-2 26M104 62l4 26"/>
   <text class="t" x="120" y="40">Tulang paha</text><text class="t" x="122" y="125">Tulang kering</text><text class="t" x="6" y="80">Tulang rawan</text><text class="t" x="6" y="92">+ kapsul sendi</text>`, l);

const muscle = (l) => S(
  `<rect class="c" x="2" y="63" width="22" height="24" rx="8"/><rect class="c" x="176" y="63" width="22" height="24" rx="8"/>
   <path class="l" d="M24 75h14M162 75h14" style="stroke-width:5"/>
   <path class="a" d="M38 75c24-44 100-44 124 0-24 44-100 44-124 0z"/>
   <path class="l" d="M50 75h100M56 62c30-8 58-8 88 0M56 88c30 8 58 8 88 0M70 51c20-4 40-4 60 0M70 99c20 4 40 4 60 0"/>
   <path class="n" d="M52 75h96"/>
   <text class="t" x="70" y="30">Serabut otot</text><text class="t" x="2" y="125">Tendon</text><text class="t" x="66" y="125">Perut otot</text><text class="t" x="150" y="125">Tulang</text>`, l);

const stimulus = (l) => S(
  `<path class="a" d="M100 14c22 30 46 42 34 76-8 22-60 22-68 0-12-34 14-44 34-76z"/>
   <path class="c" d="M100 56c10 16 22 22 16 38-4 10-28 10-32 0-6-16 6-22 16-38z"/>
   <path class="l" d="M30 40l-14-8M170 40l14-8M24 80h-16M176 80h16"/><text class="t" x="70" y="136">Api (rangsangan)</text>`, l);

const receptor = (l) => S(
  `<rect class="a" x="10" y="84" width="180" height="22" rx="8"/><rect class="c" x="10" y="106" width="180" height="30" rx="8"/>
   ${[40, 100, 160].map(x => `<path class="l" d="M${x} 84v-14"/>`).join('')}
   <ellipse class="a" cx="100" cy="94" rx="12" ry="9"/><circle class="p" cx="100" cy="94" r="4"/>
   <path class="n" d="M100 110v26"/><path class="l" d="M92 54l8 14 8-14"/>
   <text class="t" x="14" y="76">Kulit</text><text class="t" x="118" y="98">Reseptor</text><text class="t" x="118" y="128">Menuju saraf sensorik</text>`, l);

const arm = (l) => S(
  `<g transform="rotate(-18 70 110)"><rect class="a" x="52" y="96" width="82" height="26" rx="13"/></g>
   <g transform="rotate(-60 52 108)"><rect class="a" x="38" y="98" width="72" height="22" rx="11"/></g>
   <circle class="c" cx="50" cy="108" r="11"/>
   <path class="n" d="M150 40c-12-14-34-20-52-8"/><path class="l" d="M92 24l8 8-10 8"/>
   <path class="l" d="M16 130h168"/><text class="t" x="108" y="62">Lengan menarik</text><text class="t" x="108" y="76">menjauh</text>`, l);

/* Hero: tubuh digital transparan */
function heroSVG() {
  const ribs = [0, 1, 2, 3, 4].map(i => `<path class="l" d="M180 ${150 + i * 17}q-36 4-44 24M180 ${150 + i * 17}q36 4 44 24"/>`).join('');
  const L = (x1, y1, x2, y2, t, tx, ty, anchor = 'start') =>
    `<path class="l" style="stroke-width:1" d="M${x1} ${y1}L${x2} ${y2}"/><circle class="p" cx="${x1}" cy="${y1}" r="3"/><text class="t" style="font-size:13px" x="${tx}" y="${ty}" text-anchor="${anchor}">${t}</text>`;
  return `<svg viewBox="0 0 400 480" role="img" aria-label="Ilustrasi tubuh manusia digital transparan dengan otak, sumsum tulang belakang, saraf, dan rangka">
  <g fill="rgba(191,227,255,.06)" stroke="rgba(191,227,255,.45)" stroke-width="1.5">
   <circle cx="200" cy="72" r="44"/><rect x="152" y="124" width="96" height="170" rx="36"/>
   <rect x="108" y="130" width="34" height="150" rx="17"/><rect x="258" y="130" width="34" height="150" rx="17"/>
   <rect x="160" y="286" width="38" height="170" rx="18"/><rect x="202" y="286" width="38" height="170" rx="18"/></g>
  <g transform="translate(20 0)">
   <path class="a" d="M162 70c-12-4-14-22-2-28 2-14 22-18 30-8 10-8 28-2 30 12 12 6 10 24-4 28-2 10-18 14-26 6-8 8-24 6-28-10z"/>
   <path class="l" d="M180 38v40M164 52c8 4 10 10 8 18M196 52c-8 4-10 10-8 18"/>
   <rect class="c" x="172" y="104" width="10" height="190" rx="5"/>
   ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<rect class="a" x="162" y="${112 + i * 22}" width="30" height="13" rx="5"/>`).join('')}
   ${ribs}
   <path class="a" d="M142 296c0-14 12-18 38-18s38 4 38 18c0 12-10 18-20 18l-18-6-18 6c-10 0-20-6-20-18z"/>
   <path class="l" d="M140 140l-34 70-6 70M220 140l34 70 6 70M160 314l-8 70 2 70M200 314l8 70-2 70"/>
   <path class="n" d="M176 120C150 150 120 200 108 280M176 120C206 150 236 200 248 280M176 300l-24 150M176 300l24 150"/></g>
  ${L(238, 64, 290, 40, 'Otak', 296, 40)}
  ${L(202, 180, 300, 150, 'Sumsum tulang belakang', 306, 150)}
  ${L(128, 252, 60, 232, 'Saraf tepi', 40, 232, 'start')}
  ${L(228, 220, 306, 262, 'Rangka (tulang rusuk)', 312, 262)}
  </svg>`;
}

const I = { neuron, brain, spinal, nerve, bone, joint, muscle, stimulus, receptor, arm };

/* ---------- Data materi ---------- */
const saraf = [
  { id: 'otak', t: 'Otak', ill: 'brain', cap: 'Otak besar, otak kecil, dan batang otak',
    fn: 'Pusat pengendali berpikir, ingatan, perasaan, dan gerak sadar.',
    desc: 'Otak berada di dalam rongga tengkorak. Otak besar mengatur berpikir dan gerak sadar, otak kecil mengatur keseimbangan, dan batang otak mengatur napas serta detak jantung.',
    ex: 'Saat kamu memutuskan mengangkat tangan untuk bertanya di kelas, perintahnya berasal dari otak.',
    detail: ['Otak besar: berpikir, ingatan, penglihatan, dan pendengaran.', 'Otak kecil: menjaga keseimbangan dan koordinasi gerak.', 'Batang otak: mengatur napas, detak jantung, dan menghubungkan otak ke sumsum tulang belakang.'] },
  { id: 'sumsum', t: 'Sumsum Tulang Belakang', ill: 'spinal', cap: 'Sumsum tulang belakang di dalam ruas tulang belakang',
    fn: 'Jalur utama pesan antara otak dan tubuh, serta pusat gerak refleks.',
    desc: 'Sumsum tulang belakang berupa jaringan saraf memanjang yang dilindungi ruas tulang belakang. Dari sini keluar pasangan saraf ke seluruh tubuh.',
    ex: 'Tanganmu langsung menjauh ketika tersentuh benda panas sebelum kamu sempat memikirkannya.',
    detail: ['Meneruskan impuls dari saraf sensorik ke otak dan perintah dari otak ke saraf motorik.', 'Menjadi pusat pengolah gerak refleks.', 'Terlindungi ruas tulang belakang dan cairan di sekitarnya.'] },
  { id: 'tepi', t: 'Saraf Tepi', ill: 'nerve', cap: 'Saraf tepi dari sumsum tulang belakang menuju tangan',
    fn: 'Membawa impuls dari reseptor ke pusat saraf dan dari pusat saraf ke otot.',
    desc: 'Saraf tepi tersusun dari sel saraf (neuron) yang menyebar ke seluruh tubuh. Saraf sensorik membawa rangsangan, sedangkan saraf motorik membawa perintah.',
    ex: 'Rasa dingin pada jari saat memegang es dikirim ke otak oleh saraf sensorik.',
    detail: ['Saraf sensorik: dari reseptor menuju otak atau sumsum tulang belakang.', 'Saraf motorik: dari pusat saraf menuju otot.', 'Satu neuron terdiri dari badan sel, dendrit, dan akson.'], extra: 'neuron' }
];
const gerak = [
  { id: 'tulang', t: 'Tulang', ill: 'bone', cap: 'Struktur tulang panjang',
    fn: 'Menopang tubuh, melindungi organ, dan tempat melekatnya otot.',
    desc: 'Tulang adalah alat gerak pasif. Tulang tengkorak melindungi otak, tulang rusuk melindungi paru-paru dan jantung, dan sumsum tulang membentuk sel darah.',
    ex: 'Tulang paha menopang berat badan saat kamu berdiri dan berjalan.',
    detail: ['Memberi bentuk dan menopang tubuh.', 'Melindungi organ vital.', 'Sumsum tulang merah menghasilkan sel darah.'] },
  { id: 'sendi', t: 'Sendi', ill: 'joint', cap: 'Sendi engsel antara tulang paha dan tulang kering',
    fn: 'Menghubungkan antartulang agar tubuh dapat digerakkan.',
    desc: 'Sendi dilapisi tulang rawan dan cairan sendi agar gerakan halus. Contohnya sendi engsel pada siku dan lutut, serta sendi peluru pada bahu.',
    ex: 'Lutut menekuk saat kamu duduk atau naik tangga.',
    detail: ['Sendi engsel: gerak satu arah (siku, lutut).', 'Sendi peluru: gerak ke segala arah (bahu, pangkal paha).', 'Sendi putar: gerak memutar (leher).'] },
  { id: 'otot', t: 'Otot', ill: 'muscle', cap: 'Otot rangka, tendon, dan tulang',
    fn: 'Menggerakkan tulang dengan cara berkontraksi dan berelaksasi.',
    desc: 'Otot adalah alat gerak aktif. Otot rangka melekat pada tulang lewat tendon dan bekerja berpasangan, misalnya otot bisep dan trisep.',
    ex: 'Saat lengan menekuk, bisep berkontraksi dan trisep berelaksasi.',
    detail: ['Kontraksi memendekkan otot dan menarik tulang.', 'Otot bekerja berpasangan (antagonis).', 'Otot rangka dikendalikan sistem saraf.'] }
];
const flows = {
  sadar: [
    { n: 'Rangsangan', ill: 'stimulus', d: 'Sebuah rangsangan datang dari lingkungan, misalnya bola yang melayang ke arahmu.' },
    { n: 'Reseptor', ill: 'receptor', d: 'Alat indera, misalnya mata atau kulit, menerima rangsangan dan mengubahnya menjadi impuls.' },
    { n: 'Saraf sensorik', ill: 'neuron', d: 'Impuls dibawa saraf sensorik menuju sumsum tulang belakang lalu ke otak.' },
    { n: 'Otak', ill: 'brain', d: 'Otak mengolah impuls, mengenali rangsangan, lalu memutuskan respons yang tepat.' },
    { n: 'Saraf motorik', ill: 'neuron', d: 'Perintah dari otak dibawa saraf motorik menuju otot yang akan bergerak.' },
    { n: 'Otot', ill: 'muscle', d: 'Otot menerima perintah, berkontraksi, dan menarik tulang.' },
    { n: 'Gerakan', ill: 'arm', d: 'Terjadi gerakan sadar, misalnya tanganmu menangkap bola.' }],
  refleks: [
    { n: 'Rangsangan', ill: 'stimulus', d: 'Rangsangan mendadak datang, misalnya tangan menyentuh benda panas.' },
    { n: 'Reseptor', ill: 'receptor', d: 'Reseptor di kulit menerima rangsangan panas dan membentuk impuls.' },
    { n: 'Saraf sensorik', ill: 'neuron', d: 'Impuls dibawa saraf sensorik menuju sumsum tulang belakang.' },
    { n: 'Sumsum tulang belakang', ill: 'spinal', d: 'Sumsum tulang belakang langsung mengolah impuls tanpa menunggu otak. Karena itu respons sangat cepat.' },
    { n: 'Saraf motorik', ill: 'neuron', d: 'Perintah dari sumsum tulang belakang dibawa saraf motorik ke otot.' },
    { n: 'Otot', ill: 'muscle', d: 'Otot berkontraksi dan menarik tulang menjauhi sumber rangsangan.' },
    { n: 'Respons', ill: 'arm', d: 'Tanganmu menjauh dari benda panas sebelum otak menyadarinya.' }]
};
const quizData = [
  { q: 'Bagian otak yang mengatur keseimbangan tubuh adalah ...', o: ['Otak besar', 'Otak kecil', 'Sumsum tulang belakang', 'Saraf tepi'], a: 1, e: 'Otak kecil mengatur keseimbangan dan koordinasi gerak.' },
  { q: 'Pusat pengolah gerak refleks terdapat pada ...', o: ['Otak besar', 'Batang otak', 'Sumsum tulang belakang', 'Otot'], a: 2, e: 'Refleks diolah di sumsum tulang belakang sehingga respons sangat cepat.' },
  { q: 'Saraf yang membawa impuls dari reseptor ke pusat saraf adalah ...', o: ['Saraf motorik', 'Saraf sensorik', 'Saraf otak', 'Saraf simpatik'], a: 1, e: 'Saraf sensorik membawa impuls dari reseptor menuju pusat saraf.' },
  { q: 'Sendi yang memungkinkan gerak ke segala arah, seperti pada bahu, adalah sendi ...', o: ['Engsel', 'Putar', 'Peluru', 'Geser'], a: 2, e: 'Sendi peluru bergerak ke segala arah.' },
  { q: 'Otot melekat pada tulang melalui ...', o: ['Ligamen', 'Tendon', 'Tulang rawan', 'Sumsum'], a: 1, e: 'Tendon menghubungkan otot dengan tulang. Ligamen menghubungkan tulang dengan tulang.' },
  { q: 'Urutan yang benar pada gerak refleks adalah ...', o: ['Rangsangan, reseptor, saraf sensorik, otak, saraf motorik, otot', 'Rangsangan, reseptor, saraf sensorik, sumsum tulang belakang, saraf motorik, otot', 'Rangsangan, otot, saraf motorik, otak', 'Reseptor, otak, sumsum tulang belakang, otot'], a: 1, e: 'Pada refleks, impuls diolah di sumsum tulang belakang tanpa melewati otak.' }
];

/* ---------- Render kartu + modal ---------- */
const card = d => `<article class="card"><figure>${I[d.ill](d.t)}<figcaption>${d.cap}</figcaption></figure>
  <h3>${d.t}</h3><p><b>Fungsi:</b> ${d.fn}</p><p>${d.desc}</p><p><b>Contoh sehari-hari:</b> ${d.ex}</p>
  <button class="btn ghost" data-id="${d.id}">Lihat detail</button></article>`;
$('#sarafGrid').innerHTML = saraf.map(card).join('');
$('#gerakGrid').innerHTML = gerak.map(card).join('');
$('#heroArt').innerHTML = heroSVG();

const modal = $('#modal');
let lastBtn = null;
function openModal(id, btn) {
  const d = [...saraf, ...gerak].find(x => x.id === id);
  lastBtn = btn;
  $('#modalBody').style.display = 'contents';
  $('#modalBody').innerHTML = `<div><figure>${I[d.ill](d.t)}<figcaption>${d.cap}</figcaption></figure>
    ${d.extra ? `<figure style="margin-top:12px">${I[d.extra]('Neuron')}<figcaption>Struktur satu neuron</figcaption></figure>` : ''}</div>
    <div><h3 id="mTitle">${d.t}</h3><p style="margin-bottom:10px;color:#4b6283">${d.fn}</p><ul>${d.detail.map(x => `<li>${x}</li>`).join('')}</ul></div>`;
  modal.hidden = false;
  $('#closeModal').focus();
}
function closeModal() { modal.hidden = true; if (lastBtn) lastBtn.focus(); }
document.addEventListener('click', e => { const b = e.target.closest('[data-id]'); if (b) openModal(b.dataset.id, b); });
$('#closeModal').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

/* ---------- Diagram gerak sadar & refleks ---------- */
let flow = 'sadar', cur = 0, timer = null;
function renderFlow() {
  const st = flows[flow];
  $('#steps').innerHTML = st.map((s, i) =>
    `<button class="step ${i === cur ? 'on' : i < cur ? 'done' : ''}" data-i="${i}">${i + 1}. ${s.n}</button>${i < st.length - 1 ? '<span class="arrow" aria-hidden="true">&rarr;</span>' : ''}`).join('');
  const s = st[cur];
  $('#stepPanel').innerHTML = `<figure>${I[s.ill](s.n)}<figcaption>Tahap ${cur + 1}: ${s.n}</figcaption></figure>
    <div><h3>${s.n}</h3><p>${s.d}</p></div>`;
  $('#prevStep').disabled = cur === 0;
  $('#nextStep').disabled = cur === st.length - 1;
}
function stopFlow() { clearInterval(timer); timer = null; $('#playFlow').textContent = 'Jalankan animasi'; }
$('#steps').addEventListener('click', e => { const b = e.target.closest('.step'); if (b) { stopFlow(); cur = +b.dataset.i; renderFlow(); } });
$('#prevStep').addEventListener('click', () => { stopFlow(); cur--; renderFlow(); });
$('#nextStep').addEventListener('click', () => { stopFlow(); cur++; renderFlow(); });
$('#playFlow').addEventListener('click', () => {
  if (timer) return stopFlow();
  if (cur === flows[flow].length - 1) cur = 0;
  renderFlow();
  $('#playFlow').textContent = 'Hentikan';
  timer = setInterval(() => {
    if (cur >= flows[flow].length - 1) return stopFlow();
    cur++; renderFlow();
  }, 2400);
});
$$('.tab').forEach(t => t.addEventListener('click', () => {
  stopFlow(); flow = t.dataset.flow; cur = 0;
  $$('.tab').forEach(x => x.classList.toggle('on', x === t));
  renderFlow();
}));
renderFlow();

/* ---------- Kuis ---------- */
let qi = 0, correct = 0, locked = false;
function renderQuiz() {
  const box = $('#quiz'), total = quizData.length;
  if (qi >= total) {
    const score = Math.round(correct / total * 100);
    const msg = score >= 80 ? 'Luar biasa, pemahamanmu sudah kuat.' : score >= 60 ? 'Cukup baik. Pelajari lagi materi yang masih keliru.' : 'Ayo baca ulang materi, lalu coba lagi.';
    box.innerHTML = `<div class="bar"><i style="width:100%"></i></div><div class="score"><p>Skor akhirmu</p><strong>${score}</strong><p>${correct} dari ${total} soal benar. ${msg}</p><br><button class="btn" id="retry">Ulangi kuis</button></div>`;
    $('#retry').addEventListener('click', () => { qi = 0; correct = 0; renderQuiz(); });
    return;
  }
  const d = quizData[qi]; locked = false;
  box.innerHTML = `<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(qi / total * 100)}"><i style="width:${qi / total * 100}%"></i></div>
    <p class="qn">Soal ${qi + 1} dari ${total}</p><h3>${d.q}</h3>
    ${d.o.map((o, i) => `<button class="opt" data-k="${i}">${String.fromCharCode(65 + i)}. ${o}</button>`).join('')}
    <p class="fb" id="fb" aria-live="polite"></p><button class="btn" id="nextQ" hidden>${qi === total - 1 ? 'Lihat hasil' : 'Soal berikutnya'}</button>`;
  $$('.opt', box).forEach(b => b.addEventListener('click', () => answer(+b.dataset.k)));
  $('#nextQ').addEventListener('click', () => { qi++; renderQuiz(); });
}
function answer(k) {
  if (locked) return; locked = true;
  const d = quizData[qi], opts = $$('.opt');
  opts.forEach((b, i) => { b.disabled = true; if (i === d.a) b.classList.add('ok'); });
  if (k === d.a) { correct++; $('#fb').innerHTML = `<b style="color:#16a37a">Benar.</b> ${d.e}`; }
  else { opts[k].classList.add('no'); $('#fb').innerHTML = `<b style="color:#d9455f">Salah.</b> ${d.e}`; }
  $('#nextQ').hidden = false;
}
renderQuiz();

/* ---------- Navigasi mobile ---------- */
const menu = $('#menu'), mb = $('#menuBtn');
mb.addEventListener('click', () => { const o = menu.classList.toggle('open'); mb.setAttribute('aria-expanded', o); });
$$('#menu a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); mb.setAttribute('aria-expanded', false); }));