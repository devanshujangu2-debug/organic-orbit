/* ===== YAHAN APNI RAZORPAY KEY ID DAALO (sirf Key Id, Secret nahi) ===== */
const RAZORPAY_KEY_ID = 'rzp_test_xxxxxxxxxxxx';

/* =====================================================
   1) BUSINESS INFO
===================================================== */
const B = {
  name: 'Ramsnehi Enterprises',
  tel: '+918432644312', show: '084326 44312', wa: '918432644312',
  ig: 'https://www.instagram.com/ramsnehi_enterprise?utm_source=ig_web_button_share_sheet&mdxt=ZDNlZDc0MzIxNw==',
  map: 'https://share.google/jITzPSecSybUU6dbn',
  embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.482975295628!2d73.00071777543923!3d26.278438577030936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d72f1f6220b%3A0xc945c9f7878a4299!2sRAMSNEHI%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1792389050005!5m2!1sen!2sin'
};

/* =====================================================
   2) IMAGES – folder: images/
===================================================== */
const EXTS = ['jpg', 'jpeg', 'png', 'webp'];
const LOGO_BASE = 'images/logo';

const MEDIA = {
  images: {
    hero: 'images/hero',
    about: 'images/about',
    'weighing-machines': 'images/weighing-machines',
    'packaging-machines': 'images/packaging-machines',
    'billing-machines': 'images/billing-machines',
    'counting-machines': 'images/counting-machines',
    'batch-coding': 'images/batch-coding',
    'band-sealer': 'images/band-sealer',
    /* Hero slider images — EXACT filenames as uploaded, keep spelling same */
    slideWeighing: 'images/weghing_machine_home_page.jpg',
    slideBilling: 'images/billing_machine_home_page.jpg',
    slideCounting: 'images/cash_counting_machine_home_page.jpg',
    slideSealer: 'images/band_selling_machine_home_page.jpg',
    slideInstall: 'images/free_installation_and_demo_home_page.jpg',
    slideWarranty: 'images/2years_warranty_iamge.jpg',
    slideDelivery: 'images/fast_delivery_image.jpg'
  }
};

/* =====================================================
   3) PRODUCTS DATA (6 products) — unchanged
===================================================== */
const PRODUCTS = {
  'weighing-machines': { icon: '⚖️', cat: 'Weighing Solutions', title: 'Weighing Machines in Rajasthan', name: 'Weighing Machines', short: 'Digital, platform, table-top & precision scales',
    desc: 'Accurate digital weighing machines for shops, godowns, factories and jewellers – with installation, calibration and service support.',
    features: ['Digital table-top & price computing scales for shops', 'Heavy platform scales for godowns & factories', 'Precision / jewellery balances', 'Rechargeable battery & bright LED/LCD display', 'Calibration, repair & after-sales service'],
    types: [['🛒', 'Shop Scales', 'For grocery, vegetable, dairy and retail'], ['🏭', 'Platform Scales', 'High capacity for heavy goods'], ['💎', 'Precision Balance', 'For gold, lab and small weights']],
    faq: [['How do I choose the right capacity?', 'Pick a capacity slightly above the maximum weight you will weigh. We will help you choose the right model.'], ['Do you provide calibration service?', 'Yes, installation and calibration support is available. Call us for details.']] },
  'packaging-machines': { icon: '📦', cat: 'Packaging Solutions', title: 'Packaging Machine Supplier in Jodhpur', name: 'Packaging Machines', short: 'Pouch, vacuum, filling & sealing machines',
    desc: 'Make your product market-ready with packaging machines for small businesses and large-scale production.',
    features: ['Pouch & pillow packing machines', 'Vacuum packing machines', 'Filling & weighing-based packing options', 'Fast, uniform & leak-proof sealing', 'Machine demo and training support'],
    types: [['🛍️', 'Pouch Packing', 'For snacks, spices and grains'], ['🌀', 'Vacuum Packing', 'To increase shelf life'], ['🔥', 'Sealing Machines', 'Fast and strong seals']],
    faq: [['Which machine suits my product?', 'Tell us your product type and daily quantity and we will suggest the right machine.'], ['Can I get a demo?', 'Yes, send us an enquiry to arrange a demo.']] },
  'billing-machines': { icon: '🧾', cat: 'Retail & POS', title: 'Billing Machine Shop in Jodhpur', name: 'Billing Machines', short: 'POS systems, printers & barcode scanners',
    desc: 'Make your shop billing fast, smart and GST-ready with POS billing machines, thermal printers and barcode scanners – all in one place.',
    features: ['POS billing machines & software setup', 'Thermal receipt printers', 'Barcode scanners & label printers', 'Cash drawers & accessories', 'Installation and training support'],
    types: [['🖥️', 'POS Systems', 'Complete billing counter setup'], ['🖨️', 'Thermal Printers', 'Fast, silent receipt printing'], ['📟', 'Barcode Scanners', 'Quick scanning, zero mistakes']],
    faq: [['Can I do GST billing?', 'Yes, GST billing is possible with POS software. We will explain the details in the shop.'], ['Do you set up the system?', 'Please call us to confirm setup and training for your location.']] },
  'counting-machines': { icon: '💵', cat: 'Cash Handling', title: 'Cash Counting Machine Dealer in Jodhpur', name: 'Cash Counting Machines', short: 'Note counters with fake note detection',
    desc: 'Fast cash counting machines for banks, shops, petrol pumps and businesses – speed in counting and safety with fake note detection.',
    features: ['Fast note counting with LED display', 'Fake note detection (UV / MG)', 'Mix-value & loose note counters', 'Compact, durable & easy to use', 'Service support & warranty guidance'],
    types: [['⚡', 'Note Counter', 'Speedy, accurate counting'], ['🔍', 'Fake Note Detector', 'UV / MG detection modes'], ['📊', 'Value Counter', 'Total value of mixed notes']],
    faq: [['Does it detect fake notes?', 'Models with detection alert you to fake notes. Confirm the model when you enquire.'], ['Is warranty available?', 'Warranty depends on the model. Details are provided with the bill.']] },
  'batch-coding': { icon: '🏷️', cat: 'Product Coding', title: 'Batch Coding Machines', name: 'Batch Coding Machines', short: 'MRP, date & batch number printing',
    desc: 'Batch coding machines that print clear Batch No., MFG/EXP dates and MRP on packets, pouches, cartons and bottles.',
    features: ['Hand-operated & automatic coding options', 'MRP, MFG, EXP & batch number printing', 'Clear, long-lasting print', 'Works with pouches, cartons, bottles & films', 'Consumables and service available'],
    types: [['✋', 'Manual Coder', 'Low cost, easy to operate'], ['⚙️', 'Automatic Coder', 'High-speed production lines'], ['🧴', 'Consumables', 'Ink, foil and spare parts']],
    faq: [['On which surfaces can it print?', 'Plastic, paper, foil and cartons – depending on the model.'], ['Are ink and foil available?', 'Yes, send us an enquiry for consumables.']] },
  'band-sealer': { icon: '🔥', cat: 'Sealing Solutions', title: 'Band Sealer Machines', name: 'Band Sealer Machines', short: 'Continuous & vertical band sealers',
    desc: 'Continuous band sealer machines for strong and neat sealing of plastic pouches and packets, from small to large packing.',
    features: ['Continuous band sealing', 'Horizontal & vertical models', 'Adjustable temperature & speed', 'Date coding attachment options', 'Strong build, low maintenance'],
    types: [['➡️', 'Horizontal Sealer', 'For standard packets'], ['⬆️', 'Vertical Sealer', 'For heavy / liquid pouches'], ['📅', 'Sealer with Coder', 'Seal and date print together']],
    faq: [['Which materials can be sealed?', 'PP, PE, laminates and many other plastic pouches.'], ['What is the power consumption?', 'It depends on the model. Details are shared on enquiry.']] }
};

/* =====================================================
   4) SHOP ITEMS — unchanged
===================================================== */
const SHOP_ITEMS = [
  { id:'wt1', category:'weighing-machines', name:'Digital Table-Top Scale 10kg', price:1499, mrp:1999, rating:4.3, reviews:182 },
  { id:'wt2', category:'weighing-machines', name:'Digital Platform Scale 100kg', price:5999, mrp:7499, rating:4.5, reviews:94 },
  { id:'wt3', category:'weighing-machines', name:'Jewellery Precision Balance 500g', price:2299, mrp:2999, rating:4.6, reviews:61 },

  { id:'pk1', category:'packaging-machines', name:'Pouch Packing Machine (Manual)', price:8999, mrp:10999, rating:4.2, reviews:37 },
  { id:'pk2', category:'packaging-machines', name:'Vacuum Packing Machine', price:6499, mrp:7999, rating:4.4, reviews:28 },
  { id:'pk3', category:'packaging-machines', name:'Continuous Sealing Machine', price:4999, mrp:5999, rating:4.3, reviews:19 },

  { id:'bl1', category:'billing-machines', name:'POS Billing Machine', price:12999, mrp:15999, rating:4.5, reviews:46 },
  { id:'bl2', category:'billing-machines', name:'Thermal Receipt Printer', price:3499, mrp:4299, rating:4.4, reviews:73 },

  { id:'ct1', category:'counting-machines', name:'Mix Note Counter with Fake Detection', price:5499, mrp:6999, rating:4.6, reviews:112 },
  { id:'ct2', category:'counting-machines', name:'Loose Note Counter', price:2999, mrp:3799, rating:4.3, reviews:58 },
  { id:'ct3', category:'counting-machines', name:'Value Counting Machine', price:7499, mrp:8999, rating:4.5, reviews:24 },

  { id:'bc1', category:'batch-coding', name:'Manual Batch Coding Machine', price:3999, mrp:4999, rating:4.1, reviews:15 },
  { id:'bc2', category:'batch-coding', name:'Automatic Batch Coder', price:9999, mrp:11999, rating:4.4, reviews:9 },

  { id:'bs1', category:'band-sealer', name:'Horizontal Band Sealer', price:6999, mrp:8499, rating:4.3, reviews:21 },
  { id:'bs2', category:'band-sealer', name:'Vertical Band Sealer with Coder', price:8999, mrp:10999, rating:4.2, reviews:12 }
];

/* =====================================================
   5) HELPERS
===================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const wa = t => `https://wa.me/${B.wa}?text=${encodeURIComponent(t)}`;
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const HRS = [[9, 20.5, '9:00 AM – 8:30 PM'], [8, 17, '8:00 AM – 5:00 PM'], [8, 20, '8:00 AM – 8:00 PM'], [9, 19, '9:00 AM – 7:00 PM'], [9, 20, '9:00 AM – 8:00 PM'], [9, 17, '9:00 AM – 5:00 PM'], [9, 20, '9:00 AM – 8:00 PM']];
const ist = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
const openNow = () => { const d = ist(), t = d.getHours() + d.getMinutes() / 60, h = HRS[d.getDay()]; return t >= h[0] && t < h[1]; };
const hoursHTML = () => { const today = ist().getDay(); return `<ul class="hours">${[1, 2, 3, 4, 5, 6, 0].map(i => `<li class="${i === today ? 'today' : ''}"><span>${DAYS[i]}</span><span>${HRS[i][2]}</span></li>`).join('')}</ul>`; };

const cands = base => (/^https?:|\.[a-z0-9]{3,4}$/i.test(base)) ? [base] : EXTS.map(e => `${base}.${e}`);
function imgNext(img) {
  const list = cands(img.dataset.b), i = (+img.dataset.i || 0) + 1;
  if (i < list.length) { img.dataset.i = i; img.src = list[i]; }
  else if (img.hasAttribute('data-logo')) { const s = document.createElement('span'); s.className = 'lf'; s.textContent = 'RS'; img.replaceWith(s); }
  else img.remove();
}
function initImg(img, base) {
  img.dataset.b = base; img.dataset.i = 0;
  img.onerror = () => imgNext(img);
  img.src = cands(base)[0];
}
const imgTag = (k, alt) => MEDIA.images[k]
  ? `<img data-b="${MEDIA.images[k]}" data-i="0" src="${cands(MEDIA.images[k])[0]}" alt="${alt}" loading="lazy" decoding="async" onerror="imgNext(this)">`
  : '';

/* =====================================================
   6) BUILD CONTENT
===================================================== */
function setupLogo() { $$('img[data-logo]').forEach(img => initImg(img, LOGO_BASE)); }

function stars(r) { const full = Math.round(r); return '★'.repeat(full) + '☆'.repeat(5 - full); }

function shopItemHTML(p) {
  const off = p.mrp > p.price ? Math.round((1 - p.price / p.mrp) * 100) : 0;
  return `<div class="item-card" data-item="${p.id}">
    <div class="item-img ph" data-e="${PRODUCTS[p.category].icon}">${imgTag(p.category, p.name)}</div>
    <h4>${p.name}</h4>
    <div class="rating"><span class="stars">${stars(p.rating)}</span><span class="rc">${p.rating} (${p.reviews})</span></div>
    <div class="price-row"><span class="price">₹${p.price.toLocaleString('en-IN')}</span>${off ? `<span class="mrp">₹${p.mrp.toLocaleString('en-IN')}</span><span class="off">${off}% off</span>` : ''}</div>
    <button class="btn add-cart" data-id="${p.id}">🛒 Add to Cart</button>
  </div>`;
}

function buildProducts() {
  $('#product-grid').innerHTML = Object.entries(PRODUCTS).map(([k, p]) =>
    `<a class="b reveal" href="#${k}"><div class="ph" data-e="${p.icon}">${imgTag(k, p.title)}</div><div class="in"><h3>${p.icon} ${p.name}</h3><p>${p.short}</p><span>Explore →</span></div></a>`).join('');

  $('#product-sections').innerHTML = Object.entries(PRODUCTS).map(([k, p], i) => {
    const rev = i % 2 === 1;
    const items = SHOP_ITEMS.filter(s => s.category === k);
    return `<section id="${k}" class="psec ${rev ? 'alt' : ''}"><div class="container">
      <div class="split ${rev ? 'rev' : ''}">
        <div class="reveal ${rev ? 'right' : 'left'}"><div class="ph pimg" data-e="${p.icon}">${imgTag(k, p.title)}</div></div>
        <div class="reveal ${rev ? 'left' : 'right'}">
          <span class="tag">${p.icon} ${p.cat}</span><h2>${p.title}</h2><p>${p.desc}</p>
          <ul class="checks">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
          <div class="row"><a class="btn" href="#contact" data-product="${p.name}">Get Quote →</a><a class="btn ghost" href="tel:${B.tel}">📞 Call Now</a></div>
        </div>
      </div>
      <div class="types stagger">${p.types.map(t => `<div class="t"><b>${t[0]}</b><div><h3>${t[1]}</h3><p>${t[2]}</p></div></div>`).join('')}</div>
      ${items.length ? `<div class="shop-head center reveal"><span class="tag">🛒 Shop Now</span><h3>Order these ${p.name.toLowerCase()} online</h3></div>
      <div class="item-grid">${items.map(shopItemHTML).join('')}</div>` : ''}
      <div class="faq reveal">${p.faq.map(q => `<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join('')}</div>
    </div></section>`;
  }).join('');

  $('#fprod').innerHTML = Object.entries(PRODUCTS).map(([k, p]) => `<li><a href="#${k}">${p.icon} ${p.name}</a></li>`).join('');
  $('#pSelect').innerHTML = '<option value="">Select a product</option>' + Object.values(PRODUCTS).map(p => `<option>${p.name}</option>`).join('');
}

/* =====================================================
   7) CART — unchanged
===================================================== */
let cart = JSON.parse(localStorage.getItem('rs_cart') || '[]');
const saveCart = () => localStorage.setItem('rs_cart', JSON.stringify(cart));
const cartCount = () => cart.reduce((n, c) => n + c.qty, 0);
const cartTotal = () => cart.reduce((n, c) => { const p = SHOP_ITEMS.find(x => x.id === c.id); return n + (p ? p.price * c.qty : 0); }, 0);

function addToCart(id) { const line = cart.find(c => c.id === id); if (line) line.qty++; else cart.push({ id, qty: 1 }); saveCart(); renderBadge(); }
function changeQty(id, delta) { const line = cart.find(c => c.id === id); if (!line) return; line.qty += delta; if (line.qty <= 0) cart = cart.filter(c => c.id !== id); saveCart(); renderCart(); }
function removeFromCart(id) { cart = cart.filter(c => c.id !== id); saveCart(); renderCart(); }
function renderBadge() { const b = $('#cartBadge'); const n = cartCount(); b.textContent = n; b.toggleAttribute('data-zero', n === 0); }

function renderCart() {
  const box = $('#cartItems'), foot = $('#cartFoot');
  if (!cart.length) { box.innerHTML = '<p class="empty">Aapka cart khali hai.</p>'; foot.innerHTML = ''; renderBadge(); return; }
  box.innerHTML = cart.map(c => {
    const p = SHOP_ITEMS.find(x => x.id === c.id);
    if (!p) return '';
    return `<div class="cart-item">
      <div class="ph item-img" data-e="${PRODUCTS[p.category].icon}">${imgTag(p.category, p.name)}</div>
      <div class="ci-info"><b>${p.name}</b><span>₹${p.price.toLocaleString('en-IN')}</span>
        <div class="qty"><button data-act="dec" data-id="${p.id}">−</button><span>${c.qty}</span><button data-act="inc" data-id="${p.id}">+</button></div>
      </div>
      <button class="rm" data-act="rm" data-id="${p.id}">🗑️</button>
    </div>`;
  }).join('');
  foot.innerHTML = `<div class="sum-row total"><span>Total</span><span>₹${cartTotal().toLocaleString('en-IN')}</span></div><button class="btn" id="checkoutBtn">Proceed to Checkout →</button>`;
  $('#checkoutBtn').onclick = openCheckout;
  renderBadge();
}

function toast(msg) { let t = $('.toast'); if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); } t.textContent = msg; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 1800); }
function openDrawerEl(el) { el.classList.add('open'); $('#overlay').classList.add('show'); }
function closeDrawer(el) { el.classList.remove('open'); $('#overlay').classList.remove('show'); }

function openCheckout() {
  closeDrawer($('#cartDrawer'));
  const total = cartTotal();
  $('#checkoutSummary').innerHTML = `<div class="sum-row"><span>Items (${cartCount()})</span><span>₹${total.toLocaleString('en-IN')}</span></div><div class="sum-row total"><span>Total</span><span>₹${total.toLocaleString('en-IN')}</span></div>`;
  $('#payBtn').textContent = `Pay ₹${total.toLocaleString('en-IN')}`;
  openDrawerEl($('#checkoutDrawer'));
}

function wireCart() {
  $('#cartBtn').onclick = () => { renderCart(); openDrawerEl($('#cartDrawer')); };
  $('#closeCart').onclick = () => closeDrawer($('#cartDrawer'));
  $('#closeCheckout').onclick = () => closeDrawer($('#checkoutDrawer'));
  $('#overlay').onclick = () => { closeDrawer($('#cartDrawer')); closeDrawer($('#checkoutDrawer')); closeDrawer($('#searchDrawer')); };

  document.addEventListener('click', e => {
    const add = e.target.closest('.add-cart');
    if (add) { addToCart(add.dataset.id); toast('Cart mein add ho gaya ✓'); return; }
    const b = e.target.closest('[data-act]');
    if (b) { const id = b.dataset.id, act = b.dataset.act; if (act === 'inc') changeQty(id, 1); if (act === 'dec') changeQty(id, -1); if (act === 'rm') removeFromCart(id); }
  });

  $('#checkoutForm').onsubmit = e => {
    e.preventDefault();
    if (!cart.length) return;
    const fd = new FormData(e.target);
    const customer = { name: fd.get('name'), phone: fd.get('phone'), email: fd.get('email'), address: fd.get('address') };
    const total = cartTotal();
    const payBtn = $('#payBtn'); payBtn.disabled = true; payBtn.textContent = 'Processing...';

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: total * 100,
      currency: 'INR',
      name: 'Ramsnehi Enterprises',
      description: 'Machine order',
      prefill: { name: customer.name, contact: customer.phone, email: customer.email },
      theme: { color: '#2563eb' },
      handler: function (resp) {
        const lines = cart.map(c => { const p = SHOP_ITEMS.find(x => x.id === c.id); return `• ${p.name} x${c.qty} = ₹${(p.price * c.qty).toLocaleString('en-IN')}`; }).join('\n');
        const msg = `🛒 NAYA ORDER - Ramsnehi Enterprises\n\nGrahak: ${customer.name}\nPhone: ${customer.phone}\nAddress: ${customer.address}\n\n${lines}\n\nTotal: ₹${total.toLocaleString('en-IN')}\nPayment ID: ${resp.razorpay_payment_id}`;
        alert('✅ Payment ho gaya! Order details WhatsApp par bhej rahe hain.');
        window.open(wa(msg), '_blank');
        cart = []; saveCart(); renderCart();
        closeDrawer($('#checkoutDrawer'));
        e.target.reset();
      },
      modal: { ondismiss: () => { payBtn.disabled = false; payBtn.textContent = 'Pay ₹' + cartTotal().toLocaleString('en-IN'); } }
    };

    const rzp = new Razorpay(options);
    rzp.open();
    payBtn.disabled = false;
  };
}

/* =====================================================
   8) SEARCH
===================================================== */
function renderSearch(query) {
  const box = $('#searchResults');
  const q = query.trim().toLowerCase();
  if (!q) { box.innerHTML = '<p class="search-empty">Machine ka naam ya category type karo, jaise "scale" ya "counter".</p>'; return; }
  const results = SHOP_ITEMS.filter(p => p.name.toLowerCase().includes(q) || PRODUCTS[p.category].title.toLowerCase().includes(q));
  if (!results.length) { box.innerHTML = `<p class="search-empty">Koi match nahi mila. Sahi spelling try karo, ya seedha call karo: <a href="tel:${B.tel}" style="color:var(--a);font-weight:600">${B.show}</a></p>`; return; }
  box.innerHTML = results.map(p => `<div class="search-row" data-goto="${p.id}">
      <div><b>${PRODUCTS[p.category].icon} ${p.name}</b><small>${PRODUCTS[p.category].title}</small></div>
      <span class="search-price">₹${p.price.toLocaleString('en-IN')}</span>
    </div>`).join('');
}

function goToItem(id) {
  const p = SHOP_ITEMS.find(x => x.id === id);
  if (!p) return;
  closeDrawer($('#searchDrawer'));
  setTimeout(() => {
    const card = $(`.item-card[data-item="${id}"]`);
    if (!card) return;
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.add('flash');
    setTimeout(() => card.classList.remove('flash'), 1500);
  }, 300);
}

function wireSearch() {
  $('#searchBtn').onclick = () => { renderSearch($('#searchInput').value); openDrawerEl($('#searchDrawer')); $('#searchInput').focus(); };
  $('#closeSearch').onclick = () => closeDrawer($('#searchDrawer'));
  $('#searchInput').oninput = e => renderSearch(e.target.value);
  $('#searchResults').addEventListener('click', e => {
    const row = e.target.closest('[data-goto]');
    if (row) goToItem(row.dataset.goto);
  });
}

/* =====================================================
   9) SERVICE & REPAIR MODAL
===================================================== */
function wireService() {
  $('#openServiceBtn').onclick = () => $('#serviceOverlay').classList.add('show');
  $('#closeService').onclick = () => $('#serviceOverlay').classList.remove('show');
  $('#serviceOverlay').addEventListener('click', e => { if (e.target.id === 'serviceOverlay') $('#serviceOverlay').classList.remove('show'); });

  $('#serviceForm').onsubmit = e => {
    e.preventDefault();
    const d = new FormData(e.target);
    const msg = `🛠️ SERVICE REQUEST - Ramsnehi Enterprises\n\nName: ${d.get('name')}\nMobile: ${d.get('phone')}\nOrder/Invoice No.: ${d.get('order') || '-'}\nMachine Model: ${d.get('model')}\nSerial Number: ${d.get('serial') || '-'}\nService Type: ${d.get('type')}\nProblem: ${d.get('problem')}\nAddress/Pincode: ${d.get('address')}`;
    window.open(wa(msg), '_blank');
    $('#serviceOverlay').classList.remove('show');
    e.target.reset();
    toast('Service request WhatsApp par bhej rahe hain ✓');
  };
}

/* =====================================================
   10) HERO SLIDER
===================================================== */
function initSlider() {
  const slides = $$('#heroSlider .slide');
  const dotsBox = $('#sliderDots');
  if (!slides.length) return;
  dotsBox.innerHTML = slides.map((_, i) => `<button data-i="${i}" class="${i === 0 ? 'active' : ''}"></button>`).join('');
  const dots = $$('#sliderDots button');
  let current = 0, timer;

  function show(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach((s, idx) => s.classList.toggle('active', idx === current));
    dots.forEach((d, idx) => d.classList.toggle('active', idx === current));
  }
  function startTimer() { clearInterval(timer); timer = setInterval(() => show(current + 1), 4500); }

  dots.forEach(d => d.onclick = () => { show(+d.dataset.i); startTimer(); });
  startTimer();
}

/* =====================================================
   11) GENERAL PAGE STUFF
===================================================== */
function fillDynamic() {
  $$('img[data-img]').forEach(el => {
    const base = MEDIA.images[el.dataset.img];
    if (base) initImg(el, base); else el.remove();
  });
  $$('[data-hours]').forEach(el => el.innerHTML = hoursHTML());
  $$('[data-open]').forEach(el => { const o = openNow(); el.className = 'open ' + (o ? 'on' : ''); el.innerHTML = `<i></i>${o ? 'Open Now' : 'Closed Now'} • Jodhpur`; });

  $('#mapBox').innerHTML = `<iframe class="map" src="${B.embed}" referrerpolicy="no-referrer-when-downgrade" allowfullscreen title="Ramsnehi Enterprises location"></iframe>`;

  $('#callCard').href = $('#ctaCall').href = $('#fCall').href = $('#fltCall').href = 'tel:' + B.tel;
  $('#fltWa').href = wa('Hello Ramsnehi Enterprises, I need some information about your machines.');
  $('#igCard').href = $('#fIg').href = B.ig;
  $('#dirBtn').href = $('#fMap').href = B.map;
  $('#yr').textContent = '© ' + new Date().getFullYear();

  $('#enqForm').onsubmit = e => {
    e.preventDefault(); const d = new FormData(e.target);
    window.open(wa(`Hello Ramsnehi Enterprises,\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nProduct: ${d.get('product') || '-'}\nMessage: ${d.get('msg') || '-'}`), '_blank');
  };

  document.addEventListener('click', e => {
    const b = e.target.closest('[data-product]');
    if (b) $('#pSelect').value = b.dataset.product;
  });
}

/* =====================================================
   12) EFFECTS (lightweight)
===================================================== */
function initEffects() {
  const burger = $('#burger'), menu = $('#menu');
  burger.onclick = () => { menu.classList.toggle('open'); burger.textContent = menu.classList.contains('open') ? '✕' : '☰'; };
  menu.onclick = e => { if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.textContent = '☰'; } };

  if (!('IntersectionObserver' in window)) {
    $$('.stagger>*').forEach(c => c.classList.add('reveal'));
    $$('.reveal').forEach(el => el.classList.add('show'));
    $$('[data-count]').forEach(el => el.textContent = el.dataset.count + (el.dataset.suf || ''));
  } else {
    $$('.stagger').forEach(g => [...g.children].forEach((c, i) => { c.classList.add('reveal'); c.style.transitionDelay = (i * 80) + 'ms'; }));
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target; el.classList.add('show'); io.unobserve(el);
      setTimeout(() => { el.classList.remove('reveal', 'left', 'right', 'zoom', 'show'); el.style.transitionDelay = ''; el.style.willChange = 'auto'; }, 1000 + (parseInt(el.style.transitionDelay) || 0));
    }), { threshold: .1, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach(el => io.observe(el));

    const cio = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return; cio.unobserve(e.target);
      const el = e.target, end = +el.dataset.count, suf = el.dataset.suf || '', t0 = performance.now(), dur = 1200;
      const tick = t => { const p = Math.min(1, (t - t0) / dur); el.textContent = Math.floor(end * p) + suf; if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }), { threshold: .5 });
    $$('[data-count]').forEach(el => cio.observe(el));

    const links = $$('#menu a');
    const so = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      const id = PRODUCTS[e.target.id] ? 'products' : e.target.id;
      if (!links.some(a => a.hash === '#' + id)) return;
      links.forEach(a => a.classList.toggle('active', a.hash === '#' + id));
    }), { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(s => so.observe(s));
  }

  const nav = $('#nav'), bar = $('#bar'); let ticking = false;
  const onScroll = () => {
    nav.classList.toggle('scrolled', scrollY > 30);
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();
}

document.addEventListener('DOMContentLoaded', () => {
  setupLogo(); buildProducts(); fillDynamic(); initEffects(); wireCart(); wireSearch(); wireService(); initSlider(); renderBadge();
});