
// Owner setup: replace YOUR_UPI_ID_HERE with your merchant UPI ID before publishing. Keep your UPI PIN and OTP private.
const SHIVAI_UPI_ID = 'YOUR_UPI_ID_HERE';
const SHIVAI_UPI_CONFIGURED = !!SHIVAI_UPI_ID && SHIVAI_UPI_ID !== 'YOUR_UPI_ID_HERE';
const categories=[
{name:'All Products',emoji:'✨'},{name:'Gravies & Curries',emoji:'🍲'},{name:'Soups',emoji:'🥣'},{name:'Breakfast & Khichdi',emoji:'🌾'},{name:'Chutneys',emoji:'🌶️'},{name:'Upvas/Farali Premixes',emoji:'🥘'},{name:'Ready-to-Eat',emoji:'🍚'},{name:'Special Products',emoji:'🧁'}];
const products=[
{id:'p1',name:'Kolhapuri Pandhra Rassa Instant Gravy Mix',category:'Gravies & Curries',price:119,desc:'A convenient premix for preparing Kolhapuri-style Pandhra Rassa at home.',prep:'Prepare according to the instructions printed on the product pack.',stock:120},
{id:'p2',name:'Malvani Fish Curry Premix',category:'Gravies & Curries',price:149,desc:'A premix for making Malvani-style fish curry.',prep:'Prepare according to the instructions printed on the product pack.',stock:80},
{id:'p3',name:'Chicken Tandoori Masala Instant Mix',category:'Special Products',price:129,desc:'An instant masala mix for chicken tandoori-style preparation.',prep:'Prepare according to the instructions printed on the product pack.',stock:150},
{id:'p4',name:'Jaggery Masala Chai Mix',category:'Special Products',price:99,desc:'Instant tea premix featuring jaggery and masala chai.',prep:'Prepare according to the instructions printed on the product pack.',stock:200},
{id:'p5',name:'Sabudana Snack Mix',category:'Upvas/Farali Premixes',price:119,desc:'A sabudana snack mix for preparing sticks, tikki, cutlet or patty as shown on the pack.',prep:'Prepare according to the instructions printed on the product pack.',stock:100},
{id:'p6',name:'Tomato Soup Premix',category:'Soups',price:99,emoji:'🥣',desc:'A comforting tomato soup for a quick, warming break.',prep:'Add hot water gradually, stir well and simmer until smooth.',stock:250},
{id:'p7',name:'Creamy Sweet Corn Soup',category:'Soups',price:109,emoji:'🌽',desc:'A gentle, homestyle soup for cosy evenings.',prep:'Mix with water, stir continuously and cook until ready.',stock:250},
{id:'p8',name:'Punjabi Curry Base',category:'Gravies & Curries',price:149,emoji:'🍛',desc:'A convenient curry base to help make everyday meals easier.',prep:'Add water as directed and simmer with your choice of vegetables or paneer.',stock:250},
{id:'p9',name:'Maharashtrian Usal Mix',category:'Gravies & Curries',price:129,emoji:'🫘',desc:'A pantry-friendly mix inspired by a classic Maharashtrian favourite.',prep:'Cook with water according to the final product label.',stock:250},
{id:'p10',name:'Masala Khichdi Premix',category:'Breakfast & Khichdi',price:119,emoji:'🍚',desc:'A quick, satisfying meal for busy days.',prep:'Add the recommended water quantity and cook until soft.',stock:250},
{id:'p11',name:'Poha Premix',category:'Breakfast & Khichdi',price:89,emoji:'🥘',desc:'A convenient breakfast option with familiar Indian flavours.',prep:'Add hot water as directed, cover briefly and fluff before serving.',stock:250},
{id:'p12',name:'Peanut Garlic Chutney',category:'Chutneys',price:79,emoji:'🌶️',desc:'A punchy accompaniment to brighten everyday meals.',prep:'Serve as directed on the product label; add water or oil if required.',stock:250},
{id:'p13',name:'Coconut Chutney Mix',category:'Chutneys',price:89,emoji:'🥥',desc:'A quick chutney option for breakfast and snacks.',prep:'Mix with the recommended amount of water and serve fresh.',stock:250},
{id:'p14',name:'Farali Upvas Mix',category:'Upvas/Farali Premixes',price:139,emoji:'🥔',desc:'A convenient option for fasting-day meal preparation.',prep:'Prepare according to the pack instructions and your dietary needs.',stock:250},
{id:'p15',name:'Sabudana Khichdi Mix',category:'Upvas/Farali Premixes',price:129,emoji:'🍽️',desc:'A simple way to get started on a familiar farali dish.',prep:'Follow pack instructions; verify fasting suitability from the ingredient label.',stock:250},
{id:'p16',name:'Ready-to-Eat Dal Tadka',category:'Ready-to-Eat',price:159,emoji:'🍲',desc:'A handy meal option for home, work or travel.',prep:'Heat as directed on the actual product packaging before serving.',stock:250},
{id:'p17',name:'Special Masala Blend',category:'Special Products',price:99,emoji:'🫙',desc:'A versatile pantry addition for flavourful cooking.',prep:'Use according to the product label and your preferred taste.',stock:250},
{id:'p18',name:"Puranpoli Puran Readymix",category:"Special Products",price:149,emoji:"🫓",desc:"Just add water and make puran for puranpoli within 2 minutes.",prep:"Just add water and make the puran as directed on the pack.",stock:250},
{id:'p19',name:"Sprouted Matki Misal Cut",category:"Gravies & Curries",price:139,emoji:"🫘",desc:"A sprouted matki misal cut that is ready in minutes.",prep:"Serves 2. Just add water and boil it.",stock:250},
{id:'p20',name:"Spinach Soup",category:"Soups",price:99,emoji:"🥬",desc:"A ready-to-make spinach soup.",prep:"Serves 3. Just add water and boil it.",stock:250},
{id:'p21',name:"Beetroot Soup",category:"Soups",price:99,emoji:"🫜",desc:"A ready-to-make beetroot soup.",prep:"Serves 3. Just add water and boil it.",stock:250},
{id:'p22',name:"Moringa Soup",category:"Soups",price:99,emoji:"🥣",desc:"A ready-to-make moringa soup.",prep:"Serves 3. Just add water and boil it.",stock:250},
{id:'p23',name:"Pumpkin Soup",category:"Soups",price:99,emoji:"🎃",desc:"A ready-to-make pumpkin soup.",prep:"Serves 3. Just add water and boil it.",stock:250},
{id:'p24',name:"Curry Leaves Chutney",category:"Chutneys",price:79,emoji:"🌿",desc:"Fresh curry leaves chutney podi powder style.",prep:"Serve as directed on the pack.",stock:250},
{id:'p25',name:"Veg Non Veg Gravy Masala",category:"Gravies & Curries",price:179,emoji:"🍲",desc:"A gravy masala premix for 8 gravies, including black mutton, tandoori chicken and Kolhapuri Pandhra Rassa.",prep:"Prepare according to the instructions printed on the pack.",stock:250},
{id:'p26',name:"Chutney Moringa Beetroot Chutney",category:"Chutneys",price:99,emoji:"🌱",desc:"A ready-to-eat chutney made with moringa and beetroot.",prep:"Serve as directed on the pack.",stock:250},
{id:'p27',name:"Flex Seeds Chutney",category:"Chutneys",price:119,emoji:"🌰",desc:"Omega-3 rich, healthy, ready-to-eat flax seed chutney with a tasty flavour.",prep:"Ready to eat. Serve as directed on the pack.",stock:250},
{id:'p28',name:"Oats n Mix Dal Dosa",category:"Breakfast & Khichdi",price:149,emoji:"🥞",desc:"Healthy oats and three types of dal for a protein-rich breakfast.",prep:"Just add water as directed on the pack.",stock:250},
{id:'p29',name:"Instant Rava Upma",category:"Breakfast & Khichdi",price:119,emoji:"🍚",desc:"An instant rava upma premix for a quick breakfast.",prep:"Prepare according to the instructions printed on the pack.",stock:250},
{id:'p30',name:"Moong Dal Rice Khichdi",category:"Breakfast & Khichdi",price:129,emoji:"🍚",desc:"A moong dal and rice khichdi premix in a 200 g pack.",prep:"Prepare according to the instructions printed on the pack.",stock:250},
{id:'p31',name:"Moong Dal Halwa Premix",category:"Special Products",price:139,emoji:"🍮",desc:"A moong dal halwa premix for a sweet treat.",prep:"Prepare according to the instructions printed on the pack.",stock:250},
{id:'p32',name:"Jowar Moong Dal Upma",category:"Breakfast & Khichdi",price:119,emoji:"🥣",desc:"A jowar and moong dal upma premix.",prep:"Prepare according to the instructions printed on the pack.",stock:250}
];
let selectedCategory='All Products';
// Start every fresh page visit with an empty cart. Products, photos, prices and other store settings remain saved.
try{localStorage.removeItem('shivaiCart')}catch(e){}
let cart={};
// Defensive storage readers: one malformed or old browser-storage value must never stop the whole storefront from rendering.
function readStoreJSON(key,fallback){try{const raw=localStorage.getItem(key);return raw===null||raw===''?fallback:JSON.parse(raw)}catch(e){console.warn('Ignoring invalid saved setting:',key);return fallback}}
function readStoreObject(key){const value=readStoreJSON(key,{});return value&&typeof value==='object'&&!Array.isArray(value)?value:{}}
function readStoreArray(key){const value=readStoreJSON(key,[]);return Array.isArray(value)?value:[]}
let stockOverrides=readStoreObject('shivaiStock');
let orders=readStoreArray('shivaiOrders');
let customProducts=readStoreArray('shivaiCustomProducts');
let productPhotos=readStoreObject('shivaiPhotos');
let productPhotoModes=readStoreObject('shivaiPhotoModes');
let pendingPhotos=[];
let galleryPhotoProductId='';
let productGallery=readStoreObject('shivaiGallery');
let productApplications=readStoreObject('shivaiApplications');
let priceOverrides=readStoreObject('shivaiPrices');
let deletedProducts=readStoreArray('shivaiDeletedProducts');
let shivaiAdminToken='';
let shivaiDeliveryQuote=null;
const allProducts=()=>{
  const deleted=Array.isArray(deletedProducts)?deletedProducts:[];
  const custom=Array.isArray(customProducts)?customProducts:[];
  const stocks=stockOverrides&&typeof stockOverrides==='object'?stockOverrides:{};
  const prices=priceOverrides&&typeof priceOverrides==='object'?priceOverrides:{};
  const photos=productPhotos&&typeof productPhotos==='object'?productPhotos:{};
  const modes=productPhotoModes&&typeof productPhotoModes==='object'?productPhotoModes:{};
  return [...products.filter(p=>!deleted.includes(p.id)).map(p=>({...p,stock:stocks[p.id]??p.stock,price:(p.id in prices)?prices[p.id]:p.price,image:photos[p.id]||p.image,uploadedPhoto:!!photos[p.id],photoMode:modes[p.id]||(photos[p.id]?'crop':'fit')})),...custom.filter(p=>p&&!deleted.includes(p.id)).map(p=>({...p,price:(p.id in prices)?prices[p.id]:p.price,image:photos[p.id]||p.image,uploadedPhoto:!!photos[p.id],photoMode:modes[p.id]||(photos[p.id]?'crop':'fit')}))];
};
function productPackInfo(p){
  const name=String(p&&p.name||'').toLowerCase();
  const category=String(p&&p.category||'').toLowerCase();
  if(p&&p.packSize)return String(p.packSize);
  if(category.includes('soup'))return '35 g · 3 servings';
  if(/puran/.test(name))return '200 g';
  if(/burger.*(?:tiki|tikki)|(?:tiki|tikki).*burger/.test(name))return '200 g';
  if(/sabudana.*(?:tiki|tikki|snack\s*mix)|(?:tiki|tikki).*sabudana/.test(name))return '200 g';
  if(/moringa.*powder|powder.*moringa/.test(name))return '50 g';
  if(category.includes('chutney')||category.includes('chutneys'))return '50 g';
  if(category.includes('gravy')||category.includes('gravies')||category.includes('curry')||category.includes('curries'))return '50 g';
  if(/khichdi|khichidi|kichidi|upma/.test(name))return '200 g';
  return '';
}
function productImageUrl(url){
  const source=String(url||'').trim();
  if(!source)return '';
  if(/drive\.google\.com/i.test(source)){
    const match=source.match(/[?&]id=([^&]+)/i)||source.match(/\/file\/d\/([^/?]+)/i)||source.match(/\/d\/([^/?]+)/i);
    if(match&&match[1]){
      let id=match[1];try{id=decodeURIComponent(id)}catch(e){}
      return 'https://drive.google.com/thumbnail?id='+encodeURIComponent(id)+'&sz=w1600';
    }
  }
  return source;
}
function productFallbackImage(emoji){
  const symbol=String(emoji||'🍲').replace(/[<>&]/g,'');
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fbf7ec"/><stop offset="1" stop-color="#efe3c4"/></linearGradient></defs><rect width="800" height="600" rx="32" fill="url(#b)"/><circle cx="400" cy="245" r="138" fill="#fffdf6" stroke="#efe3c4" stroke-width="5"/><text x="400" y="290" font-size="150" text-anchor="middle" font-family="Arial,sans-serif">${symbol}</text><text x="400" y="465" font-size="36" font-weight="800" letter-spacing="5" text-anchor="middle" fill="#0f4a2c" font-family="Arial,sans-serif">SHIVAI</text><text x="400" y="510" font-size="19" letter-spacing="2" text-anchor="middle" fill="#5a6b5c" font-family="Arial,sans-serif">PRODUCT PHOTO</text></svg>`;
  return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);
}
function handleProductImageError(img){
  if(!img||img.dataset.fallback==='1')return;
  img.dataset.fallback='1';
  img.src=productFallbackImage(img.dataset.emoji||'🍲');
}

function save(){localStorage.setItem('shivaiCart',JSON.stringify(cart));localStorage.setItem('shivaiOrders',JSON.stringify(orders));localStorage.setItem('shivaiStock',JSON.stringify(stockOverrides));localStorage.setItem('shivaiCustomProducts',JSON.stringify(customProducts));}
function money(n){return '₹'+Number(n).toLocaleString('en-IN')}
function renderCategories(){document.getElementById('categories').innerHTML=categories.map(c=>`<button class="cat ${selectedCategory===c.name?'active':''}" onclick="chooseCategory('${c.name}')"><span class="emoji">${c.emoji}</span>${c.name}</button>`).join('')}
function chooseCategory(c){selectedCategory=c;renderCategories();renderProducts();document.querySelector('#shop').scrollIntoView({behavior:'smooth'})}
function stockBadge(p){
  if(p.stock==null)return '<span class="stock-pill stock-unknown">Availability to be confirmed</span>';
  if(p.stock<=0)return '<span class="stock-pill stock-out">Out of stock</span>';
  const low=p.stock<=20;
  return `<span class="stock-pill ${low?'stock-low':'stock-ok'}">${low?`Only ${p.stock} left`:`In stock: ${p.stock}`}</span>`;
}
const collapsedCats=new Set();
function productCard(p){
  const pack=productPackInfo(p);
  const image=p.image?`<img class="product-image ${p.uploadedPhoto&&p.photoMode!=='fit'?'uploaded-product-image':''}" data-emoji="${escapeHtml(p.emoji||'🍲')}" onerror="handleProductImageError(this)" src="${escapeHtml(productImageUrl(p.image))}" alt="${escapeHtml(p.name)}">`:`<img class="product-image" data-emoji="${escapeHtml(p.emoji||'🍲')}" src="${productFallbackImage(p.emoji||'🍲')}" alt="${escapeHtml(p.name)}">`;
  return `<article class="product"><div class="card-top">${stockBadge(p)}</div><div class="product-visual" role="button" tabindex="0" onclick="showProductDetail('${p.id}')">${image}</div><div class="product-body"><div class="card-cat">${escapeHtml(p.category)}</div><h3><a href="#" onclick="showProductDetail('${p.id}');return false" style="color:inherit;text-decoration:none">${escapeHtml(p.name)}</a></h3><p>${escapeHtml(p.desc||'A convenient pantry favourite.')}</p><div class="product-foot"><span class="price">${p.price==null?'Price on request':money(p.price)}</span><button class="btn btn-primary" onclick="${p.price==null?`enquireProduct('${p.id}')`:`addToCart('${p.id}')`}" ${p.price==null?'':(p.stock<=0?'disabled':'')}>${p.price==null?'Enquire':(p.stock<=0?'Out of stock':'Add to cart +')}</button></div></div></article>`;
}
function renderProducts(){
  const query=(document.getElementById('search')?.value||'').toLowerCase();
  let list=allProducts().filter(p=>(selectedCategory==='All Products'||p.category===selectedCategory)&&(p.name+' '+(p.desc||'')+' '+p.category).toLowerCase().includes(query));
  const sort=document.getElementById('sort')?.value||'featured';
  if(sort==='low')list.sort((a,b)=>(a.price??Infinity)-(b.price??Infinity));
  if(sort==='high')list.sort((a,b)=>(b.price??-Infinity)-(a.price??-Infinity));
  if(sort==='name')list.sort((a,b)=>a.name.localeCompare(b.name));
  const el=document.getElementById('products');
  if(!list.length){el.innerHTML='<div class="empty">No products found. Try another category or search.</div>';return}
  el.innerHTML=list.map(productCard).join('');
}
function toggleCat(name){collapsedCats.has(name)?collapsedCats.delete(name):collapsedCats.add(name);renderProducts()}
const defaultApplications={p2:['Serving - Serve hot with steamed rice, bhakri or chapati.','Cooking - Prepare as directed on the pack, then simmer until the gravy is ready.']};
let galleryImgs=[],galleryIndex=0;
function gallerySet(i){
  if(!galleryImgs.length)return;
  galleryIndex=(i+galleryImgs.length)%galleryImgs.length;
  const im=document.getElementById('gImg');if(im){delete im.dataset.fallback;im.src=galleryImgs[galleryIndex];}
  document.querySelectorAll('.gdot').forEach((d,k)=>d.style.background=k===galleryIndex?'#0f4a2c':'#d9ccb0');
  document.querySelectorAll('.gthumb').forEach((b,k)=>b.style.borderColor=k===galleryIndex?'#0f4a2c':'transparent');
}
function showProductDetail(id){
  const p=allProducts().find(x=>x.id===id);if(!p)return;
  galleryImgs=[p.image,...(productGallery[id]||[])].filter(Boolean).map(productImageUrl);galleryIndex=0;
  const multi=galleryImgs.length>1;
  const navBtn=(side,fn,label)=>`<button onclick="${fn}" aria-label="${label}" style="position:absolute;${side}:8px;top:50%;transform:translateY(-50%);background:#fffdf6;color:var(--green);border:1px solid var(--line);width:36px;height:36px;border-radius:50%;padding:0;font-size:20px;line-height:1">${side==='left'?'‹':'›'}</button>`;
  // Always show the complete product photo in the detail gallery; never crop the packet.
  const galleryImageStyle='display:block;width:auto;height:auto;max-width:100%;max-height:calc(60vh - 28px);object-fit:contain;padding:8px;box-sizing:border-box;';
  const stage=galleryImgs.length?`<img id="gImg" data-emoji="${escapeHtml(p.emoji||'🍲')}" onerror="handleProductImageError(this)" src="${escapeHtml(galleryImgs[0])}" alt="${escapeHtml(p.name)}" style="${galleryImageStyle}">`:`<img id="gImg" data-emoji="${escapeHtml(p.emoji||'🍲')}" src="${productFallbackImage(p.emoji||'🍲')}" alt="${escapeHtml(p.name)}" style="${galleryImageStyle}">`;
  const nav=multi?navBtn('left','gallerySet(galleryIndex-1)','Previous photo')+navBtn('right','gallerySet(galleryIndex+1)','Next photo'):'';
  const dots=multi?`<div style="display:flex;justify-content:center;gap:6px;margin-top:8px">${galleryImgs.map((_,k)=>`<span class="gdot" onclick="gallerySet(${k})" style="width:9px;height:9px;border-radius:50%;cursor:pointer;background:${k===0?'#0f4a2c':'#d9ccb0'}"></span>`).join('')}</div>`:'';
  const thumbs=multi?`<div style="display:flex;gap:8px;overflow-x:auto;margin-top:10px">${galleryImgs.map((src,k)=>`<button class="gthumb" onclick="gallerySet(${k})" style="flex:0 0 auto;width:60px;height:60px;padding:4px;background:#fbf7ec;border:2px solid ${k===0?'#0f4a2c':'transparent'};border-radius:10px"><img data-emoji="${escapeHtml(p.emoji||'🍲')}" onerror="handleProductImageError(this)" src="${escapeHtml(src)}" alt="" style="width:100%;height:100%;object-fit:contain"></button>`).join('')}</div>`:'';
  const apps=productApplications[id]||defaultApplications[id]||[];
  const appsHtml=apps.length?`<div style="font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin:16px 0 6px">Product application</div><ul style="padding-left:18px;font-size:14px;line-height:1.6;margin:0">${apps.map(a=>{const k=a.indexOf(' - ');return k>0?`<li><b>${escapeHtml(a.slice(0,k))}</b> - ${escapeHtml(a.slice(k+3))}</li>`:`<li>${escapeHtml(a)}</li>`}).join('')}</ul>`:'';
  const action=p.price==null?`<button class="btn btn-primary" onclick="enquireProduct('${id}')">Enquire</button>`:`<button class="btn btn-primary" ${p.stock<=0?'disabled':''} onclick="addToCart('${id}');closeModal()">${p.stock<=0?'Out of stock':'Add to cart · '+money(p.price)}</button>`;
  const hashId=t=>{let h=0;for(const c of t)h=(h*31+c.charCodeAt(0))|0;return Math.abs(h)};const others=allProducts().filter(x=>x.id!==id).map(x=>({x,k:(x.category===p.category?0:1000)+(hashId(id+x.id)%1000)})).sort((a,b)=>a.k-b.k).slice(0,4).map(o=>o.x);
  const relatedHtml=others.length?`<div style="margin-top:22px;font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase">Explore our other products</div><div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:10px">${others.map(o=>`<button onclick="showProductDetail('${o.id}')" style="text-align:left;background:#fffdf6;color:var(--ink);border:1px solid var(--line);border-radius:14px;padding:10px;display:flex;gap:10px;align-items:center;min-width:0"><span style="width:56px;height:56px;flex-shrink:0;border-radius:10px;background:#fbf7ec;display:grid;place-items:center;overflow:hidden">${o.image?`<img data-emoji="${escapeHtml(o.emoji||'🍲')}" onerror="handleProductImageError(this)" src="${escapeHtml(productImageUrl(o.image))}" alt="" style="width:100%;height:100%;object-fit:contain">`:`<img data-emoji="${escapeHtml(o.emoji||'🍲')}" src="${productFallbackImage(o.emoji||'🍲')}" alt="" style="width:100%;height:100%;object-fit:contain">`}</span><span style="min-width:0"><b style="display:block;font-size:14px;line-height:1.3">${escapeHtml(o.name)}</b><span style="font-size:13px;color:var(--green);font-weight:800">${o.price==null?'Price on request':money(o.price)}</span></span></button>`).join('')}</div>`:'';
  const pack=productPackInfo(p);
  openModal(p.name,`<div class="product-detail-photo-stage" style="position:relative;background:#fbf7ec;border-radius:14px;height:min(460px,60vh);min-height:220px;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;box-sizing:border-box">${stage}${nav}</div>${dots}${thumbs}<p style="margin-top:14px;display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span class="pill">${escapeHtml(p.category)}</span>${pack?`<span class="pack-size-chip" style="margin:0">📦 Pack size: ${escapeHtml(pack)}</span>`:''}</p><p>${escapeHtml(p.desc||'A convenient pantry favourite.')}</p><p style="margin-top:8px">${stockBadge(p)}</p>${appsHtml}<div style="font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin:16px 0 6px">How to prepare</div><p style="font-size:14px;line-height:1.6;margin:0">${escapeHtml(p.prep||'Prepare according to the instructions printed on the product pack.')}</p><p class="hint" style="margin-top:8px">Check the pack for ingredients, allergens, nutrition, storage and shelf life before use.</p><div style="font-size:24px;font-weight:900;color:var(--green);margin:14px 0 10px">${p.price==null?'Price on request':money(p.price)}</div><div style="display:flex;gap:10px;flex-wrap:wrap">${action}<button class="btn btn-outline" onclick="showPrep('${id}')">Preparation guide</button></div>${relatedHtml}`);
}
function enquireProduct(id){const p=allProducts().find(x=>x.id===id);if(!p)return;openModal('Product enquiry',`<h3>${escapeHtml(p.name)}</h3><p>Price and availability for this product have not been confirmed yet.</p><p class="hint">Please add the confirmed selling price and official enquiry contact details before accepting orders through the website.</p>`)}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function addToCart(id){const p=allProducts().find(x=>x.id===id);if(!p||p.stock<=0)return;cart[id]=(cart[id]||0)+1;if(cart[id]>p.stock)cart[id]=p.stock;save();updateCartCount();toast('Added to cart');}
function updateCartCount(){document.getElementById('cartCount').textContent=Object.values(cart).reduce((a,b)=>a+b,0)}
function toast(s){let el=document.getElementById('toast');if(!el){el=document.createElement('div');el.id='toast';el.style.cssText='position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:50;background:#0c2a1a;color:white;padding:12px 18px;border-radius:999px;font-size:13px;box-shadow:0 8px 30px #0002';document.body.appendChild(el)}el.textContent=s;el.style.display='block';clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.style.display='none',2200)}
function openModal(title,body){document.getElementById('modalTitle').textContent=title;document.getElementById('modalBody').innerHTML=body;document.getElementById('modal').classList.add('open')}
function closeModal(){document.getElementById('modal').classList.remove('open')}
function backdropClose(e){if(e.target.id==='modal')closeModal()}
function openCart(){const lines=Object.entries(cart).filter(([id,q])=>q>0).map(([id,q])=>{const p=allProducts().find(x=>x.id===id);return p?{p,q}:null}).filter(Boolean);const total=lines.reduce((s,x)=>s+x.p.price*x.q,0);openModal('Your Cart',lines.length?lines.map(({p,q})=>`<div class="cart-line"><div><b>${escapeHtml(p.name)}</b><div class="hint">${money(p.price)} each</div></div><div class="qty"><button onclick="changeQty('${p.id}',-1)">−</button>${q}<button onclick="changeQty('${p.id}',1)">+</button><button onclick="changeQty('${p.id}',-${q})" title="Remove">×</button></div></div>`).join('')+`<div class="total"><span>Product subtotal</span><span>${money(total)}</span></div><button class="btn btn-primary" style="width:100%" onclick="checkout()">Continue to checkout →</button><p class="hint">No payment is collected on this website. SHIVAI will contact you to arrange payment after reviewing your order.</p>`:'<div class="empty">Your cart is empty. Find a flavour you love!</div><button class="btn btn-primary" onclick="closeModal();document.querySelector(\'#shop\').scrollIntoView()">Explore products</button>')}
function changeQty(id,d){const p=allProducts().find(x=>x.id===id);cart[id]=(cart[id]||0)+d;if(cart[id]<=0)delete cart[id];else if(p&&cart[id]>p.stock)cart[id]=p.stock;save();updateCartCount();openCart()}
function checkout(){
  if(!Object.keys(cart).length)return;
  shivaiDeliveryQuote=null;
  openModal('Secure checkout',`<p class="hint">Enter your delivery details. After submitting, open WhatsApp to send your order details and arrange payment directly with SHIVAI.</p><form id="checkoutForm" onsubmit="placeOrder(event)"><div class="form-grid"><label>Full name<input class="field" name="name" autocomplete="name" maxlength="100" required></label><label>Email for order updates<input class="field" id="checkoutEmail" name="email" type="email" autocomplete="email" maxlength="200" required></label><div class="wide" style="display:flex;flex-direction:column;gap:6px"><label for="checkoutPhone">Mobile number (for delivery contact)</label><input class="field" id="checkoutPhone" name="phone" type="tel" autocomplete="tel" placeholder="10-digit Indian mobile or +country code" required pattern="[0-9+() .-]{7,30}"><span class="hint">We’ll use this number to contact you about delivery. No email verification is required.</span></div><div class="wide"><div class="notice" style="margin:0"><b>No online payment required at checkout.</b><br>Submit your order details. SHIVAI will contact you to arrange payment and confirm the order.</div></div></div><label class="wide">Delivery address<textarea class="field" name="address" rows="3" maxlength="1000" autocomplete="street-address" required></textarea></label><div class="wide"><div class="notice" id="deliveryQuotePanel" style="margin:0"><b>Delivery charge estimate</b><p class="hint" id="deliveryQuoteStatus" style="margin:8px 0">Calculate the delivery fee before placing your order.</p><button type="button" class="btn btn-light" id="deliveryQuoteButton" onclick="estimateDeliveryCharge()">Estimate using my location</button><div id="deliveryQuoteSummary" style="margin-top:10px"></div><p class="hint" style="margin-bottom:0">For the best estimate, be at the delivery address when sharing location. Distance is a straight-line estimate, not road distance. Your browser will ask permission to share your location.</p></div></div></div><div class="notice" id="checkout-payment-notice">No payment is collected on this website. SHIVAI will contact you to arrange payment after reviewing your order.</div><button id="place-order-btn" class="btn btn-primary" style="width:100%">Place order</button></form>`);
  updateCheckoutDeliverySummary();
}
function toggleCheckoutPayment(){ updateCheckoutDeliverySummary(); }
function estimateDeliveryCharge(){
  const status=document.getElementById('deliveryQuoteStatus');
  const button=document.getElementById('deliveryQuoteButton');
  if(!navigator.geolocation){if(status)status.textContent='This browser cannot share location. Please open SHIVAI on a location-enabled browser or contact SHIVAI to confirm the delivery charge.';return;}
  if(status)status.textContent='Requesting location permission…';
  if(button){button.disabled=true;button.textContent='Checking location…';}
  navigator.geolocation.getCurrentPosition(async function(pos){
    try{
      const lat=Number(pos.coords.latitude),lng=Number(pos.coords.longitude);
      const quote=await window.shivaiAppsScriptCall('quoteDelivery',{lat:lat,lng:lng});
      if(!quote||!quote.ok)throw new Error((quote&&quote.error)||'Could not calculate delivery charge.');
      shivaiDeliveryQuote={...quote,lat:lat,lng:lng};
      updateCheckoutDeliverySummary();
    }catch(err){
      shivaiDeliveryQuote=null;
      if(status)status.textContent=err.message||'Could not calculate delivery charge. Please try again.';
      updateCheckoutDeliverySummary();
    }finally{
      if(button){button.disabled=false;button.textContent='Update delivery estimate';}
    }
  },function(err){
    shivaiDeliveryQuote=null;
    const msg=err&&err.code===1?'Location permission was denied. Allow location access in your browser to calculate the delivery fee.':(err&&err.code===3?'Location request timed out. Please try again.':'Your location could not be detected. Please try again or contact SHIVAI.');
    if(status)status.textContent=msg;
    if(button){button.disabled=false;button.textContent='Try location again';}
    updateCheckoutDeliverySummary();
  },{enableHighAccuracy:true,timeout:15000,maximumAge:60000});
}
function updateCheckoutDeliverySummary(){
  const status=document.getElementById('deliveryQuoteStatus');
  const summary=document.getElementById('deliveryQuoteSummary');
  const submit=document.getElementById('place-order-btn');
  const lines=Object.entries(cart).filter(([id,q])=>q>0).map(([id,q])=>{const p=allProducts().find(x=>x.id===id);return p?{p,q}:null}).filter(Boolean);
  const subtotal=lines.reduce((s,x)=>s+x.p.price*x.q,0);
  if(!summary)return;
  if(!shivaiDeliveryQuote){
    if(status)status.textContent='No delivery estimate yet. Tap the button below to calculate it.';
    summary.innerHTML=`<div style="display:flex;justify-content:space-between;gap:10px"><span>Product subtotal</span><b>${money(subtotal)}</b></div><div style="display:flex;justify-content:space-between;gap:10px"><span>Delivery charge</span><b>Not calculated</b></div>`;
    if(submit)submit.disabled=true;
    return;
  }
  if(!shivaiDeliveryQuote.withinRange){
    if(status)status.textContent=`Estimated straight-line distance: ${Number(shivaiDeliveryQuote.distanceKm).toFixed(2)} km. This is beyond SHIVAI's current delivery range (${Number(shivaiDeliveryQuote.maxKm).toFixed(1)} km). Please contact SHIVAI to confirm delivery before ordering.`;
    summary.innerHTML=`<div style="display:flex;justify-content:space-between;gap:10px"><span>Product subtotal</span><b>${money(subtotal)}</b></div><div style="display:flex;justify-content:space-between;gap:10px"><span>Delivery charge</span><b>Needs confirmation</b></div><p style="margin:10px 0 0"><a href="https://wa.me/917045745898?text=${encodeURIComponent('Hi SHIVAI, please confirm delivery availability and charges for my location.') }" target="_blank" rel="noopener noreferrer" style="color:var(--green);font-weight:800">Contact SHIVAI on WhatsApp</a></p>`;
    if(submit)submit.disabled=true;
    return;
  }
  const fee=Number(shivaiDeliveryQuote.fee||0),total=subtotal+fee;
  if(status)status.textContent=`Estimated straight-line distance from SHIVAI: ${Number(shivaiDeliveryQuote.distanceKm).toFixed(2)} km.`;
  summary.innerHTML=`<div style="display:flex;justify-content:space-between;gap:10px;margin:4px 0"><span>Product subtotal</span><b>${money(subtotal)}</b></div><div style="display:flex;justify-content:space-between;gap:10px;margin:4px 0"><span>Delivery charge</span><b>${money(fee)}</b></div><div style="display:flex;justify-content:space-between;gap:10px;border-top:1px solid var(--line);padding-top:8px;margin-top:8px;font-size:16px"><b>Final total</b><b>${money(total)}</b></div>`;
  if(submit)submit.disabled=false;
}
function renderDeliverySettingsPanel(){
  if(!requireAdminAccess())return;
  window.shivaiAppsScriptCall('getDeliverySettings',{}).then(function(res){
    if(!res||!res.ok)throw new Error((res&&res.error)||'Could not load delivery settings.');
    const d=res.settings||{};const slabs=Array.isArray(d.slabs)?d.slabs:[];
    const one=slabs[0]||{maxKm:5,fee:30},two=slabs[1]||{maxKm:10,fee:50},three=slabs[2]||{maxKm:15,fee:80};
    openModal('Delivery charge settings',`<p class="hint">Change the fee tiers here; they are saved server-side and apply to every customer. Distance is calculated in a straight line, not by road route.</p><form onsubmit="saveDeliverySettings(event)"><h3 style="margin-bottom:8px">SHIVAI dispatch location</h3><div class="form-grid"><label>Latitude<input class="field" id="delivery-origin-lat" name="originLat" type="number" step="0.000001" min="-90" max="90" value="${Number(d.originLat??18.98556)}" required></label><label>Longitude<input class="field" id="delivery-origin-lng" name="originLng" type="number" step="0.000001" min="-180" max="180" value="${Number(d.originLng??72.83917)}" required></label></div><button type="button" class="btn btn-light" style="margin-top:10px" onclick="useCurrentLocationAsDeliveryOrigin()">Use my current location as SHIVAI's origin</button><p class="hint">Default coordinates are an approximate Ghodapdeo-area location. Set the exact dispatch address coordinates before relying on fees.</p><h3 style="margin:20px 0 8px">Distance tiers and fees</h3><div class="form-grid"><label>Tier 1 — up to km<input class="field" name="maxKm1" type="number" min="0.1" step="0.1" value="${Number(one.maxKm)}" required></label><label>Tier 1 fee (₹)<input class="field" name="fee1" type="number" min="0" step="1" value="${Number(one.fee)}" required></label><label>Tier 2 — up to km<input class="field" name="maxKm2" type="number" min="0.1" step="0.1" value="${Number(two.maxKm)}" required></label><label>Tier 2 fee (₹)<input class="field" name="fee2" type="number" min="0" step="1" value="${Number(two.fee)}" required></label><label>Tier 3 — up to km<input class="field" name="maxKm3" type="number" min="0.1" step="0.1" value="${Number(three.maxKm)}" required></label><label>Tier 3 fee (₹)<input class="field" name="fee3" type="number" min="0" step="1" value="${Number(three.fee)}" required></label></div><p class="hint">Customers beyond the last distance tier must contact SHIVAI to confirm delivery. For best accuracy, set origin coordinates where orders are dispatched from.</p><button class="btn btn-primary" style="width:100%;margin-top:12px">Save delivery settings</button></form>`);
  }).catch(function(err){alert(err.message||'Could not load delivery settings.')});
}
function useCurrentLocationAsDeliveryOrigin(){
  if(!navigator.geolocation){alert('This browser cannot share location. Enter latitude and longitude manually.');return;}
  navigator.geolocation.getCurrentPosition(function(pos){const lat=document.getElementById('delivery-origin-lat'),lng=document.getElementById('delivery-origin-lng');if(lat)lat.value=Number(pos.coords.latitude).toFixed(6);if(lng)lng.value=Number(pos.coords.longitude).toFixed(6);toast('Origin coordinates filled. Save to apply them.');},function(){alert('Could not read location. Allow location permission or enter the coordinates manually.');},{enableHighAccuracy:true,timeout:15000,maximumAge:60000});
}
async function saveDeliverySettings(e){
  if(!requireAdminAccess())return;e.preventDefault();const form=e.target;const f=new FormData(form);
  const settings={originLat:Number(f.get('originLat')),originLng:Number(f.get('originLng')),slabs:[{maxKm:Number(f.get('maxKm1')),fee:Number(f.get('fee1'))},{maxKm:Number(f.get('maxKm2')),fee:Number(f.get('fee2'))},{maxKm:Number(f.get('maxKm3')),fee:Number(f.get('fee3'))}]};
  if(!Number.isFinite(settings.originLat)||Math.abs(settings.originLat)>90||!Number.isFinite(settings.originLng)||Math.abs(settings.originLng)>180){alert('Enter a valid origin latitude and longitude.');return;}
  if(settings.slabs.some(s=>!Number.isFinite(s.maxKm)||s.maxKm<=0||s.maxKm>500||!Number.isFinite(s.fee)||s.fee<0||s.fee>100000)||!(settings.slabs[0].maxKm<settings.slabs[1].maxKm&&settings.slabs[1].maxKm<settings.slabs[2].maxKm)){alert('Set three increasing distance limits (Tier 1 < Tier 2 < Tier 3) and valid non-negative fees.');return;}
  const btn=form.querySelector('button[type="submit"],button:not([type])');if(btn){btn.disabled=true;btn.textContent='Saving…';}
  try{const r=await window.shivaiAppsScriptCall('adminSaveDeliverySettings',{adminToken:shivaiAdminToken,settings:settings});if(!r||!r.ok)throw new Error((r&&r.error)||'Could not save delivery settings.');shivaiDeliveryQuote=null;toast('Delivery settings saved for all customers.');renderAdmin();}
  catch(err){alert(err.message||'Could not save delivery settings.');if(btn){btn.disabled=false;btn.textContent='Save delivery settings';}}
}
let shivaiLastOrderWhatsapp = null;
function openWhatsAppOrder(){
  if(!shivaiLastOrderWhatsapp){alert('Order details are not ready. Please place your order first.');return;}
  const o=shivaiLastOrderWhatsapp;
  const lines=['Hello SHIVAI, I have placed an order on your website.','Order ID: '+o.id,'Name: '+o.name,'Mobile: '+o.phone,'Delivery address: '+o.address,'Items: '+o.items.map(x=>x.name+' x '+x.qty).join(', '),'Product subtotal: '+money(o.subtotal),'Delivery charge: '+money(o.deliveryFee),'Estimated total: '+money(o.total),'Please guide me to complete payment on WhatsApp.'];
  const url='https://wa.me/917045745898?text='+encodeURIComponent(lines.join('\n'));
  window.open(url,'_blank','noopener');
}
async function placeOrder(e){
  e.preventDefault();
  if(!Object.keys(cart).length)return;
  const form=e.target;
  const submitBtn=document.getElementById('place-order-btn');
  if(submitBtn){submitBtn.disabled=true;submitBtn.textContent='Placing order…'}
  try{
    if(!shivaiDeliveryQuote||!shivaiDeliveryQuote.withinRange){alert('Please calculate a valid delivery charge before placing your order.');return;}
    const f=new FormData(form);
    const paymentMethod='Payment arranged after order review';
    const isUpi=false;
    const items=Object.entries(cart).map(([id,q])=>{const p=allProducts().find(x=>x.id===id);return p?{id,name:p.name,qty:q,price:p.price}:null}).filter(Boolean);
    if(!items.length)return;
    for(const it of items){const p=allProducts().find(x=>x.id===it.id);if(!p||p.stock<it.qty){alert('Not enough stock for '+it.name);return}}
    const subtotal=items.reduce((s,x)=>s+x.qty*x.price,0);
    const deliveryFee=Number(shivaiDeliveryQuote.fee||0);
    const total=subtotal+deliveryFee;
    const paymentReference='';
    const orderPayload={name:String(f.get('name')||'').trim(),email:String(f.get('email')||'').trim(),phone:String(f.get('phone')||'').trim(),address:String(f.get('address')||'').trim(),payment:paymentMethod,paymentReference:isUpi?paymentReference:'',subtotal,deliveryFee,deliveryDistanceKm:Number(shivaiDeliveryQuote.distanceKm),deliveryLat:Number(shivaiDeliveryQuote.lat),deliveryLng:Number(shivaiDeliveryQuote.lng),total,items};
    if(!orderPayload.name||!orderPayload.email||!orderPayload.phone||!orderPayload.address){alert('Please fill in your name, a valid email, mobile number, and delivery address.');return}
    const result=await window.shivaiAppsScriptCall('createOrder',orderPayload);
    if(!result||!result.ok)throw new Error((result&&result.error)||'Could not submit your order. Please try again.');
    const fallbackStatus='Order placed — payment to be arranged';
    const order={id:result.orderId||('SHV'+Date.now().toString().slice(-8)),date:new Date().toLocaleString('en-IN'),name:orderPayload.name,email:orderPayload.email,phone:orderPayload.phone,address:orderPayload.address,payment:orderPayload.payment,total,status:result.orderStatus||fallbackStatus,emailNotificationsSent:result.emailNotificationsSent===true,items};
    orders.unshift(order);
    for(const it of items)stockOverrides[it.id]=(stockOverrides[it.id]??allProducts().find(x=>x.id===it.id).stock)-it.qty;
    cart={};save();updateCartCount();renderProducts();
    const emailMsg=order.emailNotificationsSent?'Your order details were emailed to you and SHIVAI.':(result.warning||'Your order was saved, but one or both email notifications may have failed. Please contact SHIVAI to confirm.');
    const orderTitle='Order placed';
    shivaiLastOrderWhatsapp={id:order.id,name:order.name,phone:order.phone,address:order.address,items:items,subtotal:subtotal,deliveryFee:deliveryFee,total:total};
    const paymentMessage='Your order has been saved. <b>Complete payment by chatting with SHIVAI on WhatsApp.</b> No payment is collected on this website.';
    const verifyMessage='Tap the WhatsApp button below to send your order details and arrange payment directly with SHIVAI.';
    openModal(orderTitle,`<div class="notice"><b>Thank you, ${escapeHtml(order.name)}.</b><br>${paymentMessage}</div><p>Order ID: <b>${escapeHtml(order.id)}</b></p><div class="cart-line"><span>Product subtotal</span><b>${money(subtotal)}</b></div><div class="cart-line"><span>Delivery fee (${Number(shivaiDeliveryQuote.distanceKm).toFixed(2)} km estimated)</span><b>${money(deliveryFee)}</b></div><p class="total"><span>Estimated total</span><span>${money(total)}</span></p><button class="btn btn-primary" style="width:100%;margin:8px 0" onclick="openWhatsAppOrder()">Continue to WhatsApp for payment</button><p class="hint">${verifyMessage} ${escapeHtml(emailMsg)}</p><button class="btn btn-light" onclick="openTrack('${escapeHtml(order.id)}')">Track this order</button>`);
  }catch(err){console.error('Order submission failed',err);alert(err.message||'Order could not be submitted. Please try again.')}
  finally{if(submitBtn&&document.body.contains(submitBtn)){submitBtn.disabled=false;updateCheckoutDeliverySummary()}}
}
function openTrack(id=''){openModal('Track your order',`<p class="hint">Enter the order ID shown after checkout. Status is looked up in SHIVAI's shared order register.</p><form onsubmit="trackOrder(event)"><div style="display:grid;gap:8px"><input class="field" name="email" type="email" required placeholder="Email used at checkout"><div style="display:flex;gap:8px"><input class="field" name="id" value="${escapeHtml(id)}" required placeholder="Order ID, e.g. SHV20261024ABCD1234" style="flex:1"><button class="btn btn-primary">Track</button></div></div></form><div id="trackResult"></div>`)}
async function trackOrder(e){e.preventDefault();const id=new FormData(e.target).get('id').trim();const email=String(new FormData(e.target).get('email')||'').trim();const el=document.getElementById('trackResult');el.innerHTML='<div class="notice">Looking up your order…</div>';try{const r=await window.shivaiAppsScriptCall('trackOrder',{id:id,email:email});if(!r||!r.ok)throw new Error((r&&r.error)||'Order not found. Check the order ID.');const o=r.order;el.innerHTML=`<div class="notice"><span class="pill">${escapeHtml(o.status)}</span><h3>${escapeHtml(o.id)}</h3><p>Placed: ${escapeHtml(o.date)}</p><p>Total: <b>${money(o.total)}</b></p><p>Payment: ${escapeHtml(o.payment)}</p><p>${(o.items||[]).map(i=>escapeHtml(i.name)+' × '+i.qty).join('<br>')}</p></div>`}catch(err){el.innerHTML=`<div class="notice">${escapeHtml(err.message||'Order not found.')}</div>`}}
let shivaiAdminAuthenticated=false;
function openAdmin(){openModal('SHIVAI Admin',`<p class="hint">Enter the private admin password configured by the site owner.</p><form onsubmit="adminLogin(event)"><label style="display:block;font-size:12px;font-weight:800;margin:12px 0">Admin password<input class="field" type="password" name="password" autocomplete="current-password" placeholder="Enter your admin password" required style="display:block;width:100%;margin-top:6px"></label><button class="btn btn-primary" id="admin-login-btn">Sign in</button><p class="hint" id="admin-login-status" role="status"></p></form>`)}
async function adminLogin(e){e.preventDefault();const form=e.target;const btn=document.getElementById('admin-login-btn');const status=document.getElementById('admin-login-status');const password=String(new FormData(form).get('password')||'');if(btn){btn.disabled=true;btn.textContent='Checking…'}if(status)status.textContent='Checking administrator access…';try{const result=await window.shivaiAppsScriptCall('adminLogin',{pin:password,password:password});if(!result||!result.ok)throw new Error((result&&result.error)||'Administrator sign-in failed.');shivaiAdminToken=result.token||'';shivaiAdminAuthenticated=!!shivaiAdminToken;await migrateLocalAdminDataIfNeeded();await syncSharedStoreData();await refreshAdminData();renderAdmin()}catch(err){if(status)status.textContent=err.message||'Sign-in failed. Check Apps Script configuration.';if(btn){btn.disabled=false;btn.textContent='Sign in'}}}
function requireAdminAccess(){if(shivaiAdminAuthenticated)return true;alert('Please sign in to the SHIVAI Admin dashboard.');openAdmin();return false}
async function refreshAdminData(){
  if(!shivaiAdminToken)return;
  const result=await window.shivaiAppsScriptCall('adminGetData',{adminToken:shivaiAdminToken});
  if(!result||!result.ok)throw new Error((result&&result.error)||'Could not load shared admin data.');
  orders=Array.isArray(result.orders)?result.orders:[];
}
function renderAdmin(){if(!requireAdminAccess())return;const revenue=orders.reduce((s,o)=>s+Number(o.total||0),0);openModal('Admin dashboard',`<div class="why" style="display:block;padding:18px;margin:14px 0"><div style="font-size:12px;color:#efe3c4">Orders stored for the whole store</div><div style="font-size:30px;font-weight:900">${orders.length}</div><div style="margin-top:10px;font-size:12px;color:#efe3c4">Submitted order value (payment must be verified separately)</div><div style="font-size:24px;font-weight:900">${money(revenue)}</div></div><p class="hint">Admin changes are saved to the shared SHIVAI catalog. Product photos are stored in Drive so every visitor can see them.</p><p class="hint">Admin sign-in uses one private password configured in the server-side Apps Script code.</p><h3>Delivery Charges</h3><p class="hint">Edit the store dispatch coordinates and three distance-based delivery fees. Changes apply to all customers.</p><button class="btn btn-light" style="width:100%;margin:8px 0 18px" onclick="renderDeliverySettingsPanel()">Open delivery charge settings</button><h3>Manage stock, prices and products</h3><div class="admin-list">${allProducts().map(p=>`<div class="admin-row"><b>${escapeHtml(p.name)}</b><div style="display:flex;gap:8px;align-items:center;margin-top:7px;flex-wrap:wrap"><span class="hint">Stock: ${p.stock}</span><input class="field" type="number" min="0" id="stock-${p.id}" value="${p.stock}" style="width:100px;padding:8px"><button class="btn btn-light" onclick="saveStock('${p.id}')">Save stock</button></div><div style="display:flex;gap:8px;align-items:center;margin-top:7px;flex-wrap:wrap"><span class="hint">Price: ${p.price==null?'not set':money(p.price)}</span><input class="field" type="number" min="0" id="price-${p.id}" value="${p.price??''}" placeholder="₹" style="width:100px;padding:8px"><button class="btn btn-light" onclick="savePrice('${p.id}')">Save price</button><button class="btn btn-outline" onclick="deleteProduct('${p.id}')">Remove product</button></div></div>`).join('')}</div><h3>Add product</h3><form onsubmit="addProduct(event)"><div class="form-grid"><label>Product name<input class="field" name="name" required maxlength="160"></label><label>Price (₹)<input class="field" name="price" type="number" min="0" required></label><label>Category<select class="field" name="category">${categories.slice(1).map(c=>`<option>${escapeHtml(c.name)}</option>`).join('')}</select></label><label>Emoji / icon<input class="field" name="emoji" value="🍲" maxlength="4"></label><label class="wide">Short description<input class="field" name="desc" maxlength="500"></label><label class="wide">Preparation instructions<input class="field" name="prep" maxlength="1000"></label><label>Starting stock<input class="field" name="stock" type="number" min="0" value="250"></label></div><button class="btn btn-primary" style="margin-top:12px">Add product</button></form><h3>Product photos</h3><div id="photoPanel"></div><h3>Product details</h3><div id="detailPanel"></div><h3>Recent orders</h3>${orders.length?orders.slice(0,10).map(o=>`<div class="admin-row"><b>${escapeHtml(o.id)}</b> · ${escapeHtml(o.name||'Customer')} · ${money(o.total)}<div class="hint">${escapeHtml(o.date||'')} · ${escapeHtml(o.status||'Order placed')} · ${escapeHtml(o.payment||'')}</div><button class="btn btn-light" style="margin-top:7px" onclick="updateStatus('${o.id}')">Update status</button></div>`).join(''):'<p class="hint">No orders have been submitted yet.</p>'}`);renderPhotoPanel();renderDetailEditor()}
async function saveStock(id){if(!requireAdminAccess())return;const val=Math.max(0,Math.floor(Number(document.getElementById('stock-'+id).value)||0));try{const r=await window.shivaiAppsScriptCall('adminSaveStock',{adminToken:shivaiAdminToken,id:id,stock:val});if(!r||!r.ok)throw new Error((r&&r.error)||'Could not save stock.');stockOverrides[id]=val;try{localStorage.setItem('shivaiStock',JSON.stringify(stockOverrides))}catch(e){}renderProducts();await renderAdminAfterSave();toast('Stock saved for all visitors')}catch(err){alert(err.message||'Stock could not be saved') }}
async function addProduct(e){if(!requireAdminAccess())return;e.preventDefault();const f=new FormData(e.target);const p={id:'custom'+Date.now(),name:String(f.get('name')||'').trim(),price:Number(f.get('price')),category:String(f.get('category')||''),emoji:f.get('emoji')||'🍲',desc:f.get('desc')||'A SHIVAI pantry favourite.',prep:f.get('prep')||'Prepare according to pack instructions.',stock:Math.max(0,Math.floor(Number(f.get('stock'))||0))};try{const r=await window.shivaiAppsScriptCall('adminSaveProduct',{adminToken:shivaiAdminToken,...p});if(!r||!r.ok)throw new Error((r&&r.error)||'Could not save product');customProducts.push(p);try{localStorage.setItem('shivaiCustomProducts',JSON.stringify(customProducts))}catch(e){}renderProducts();await renderAdminAfterSave();toast('Product added to the shared store')}catch(err){alert(err.message||'Product could not be saved')}}
async function deleteProduct(id){if(!requireAdminAccess())return;const p=allProducts().find(x=>x.id===id);if(!p)return;if(!confirm('Remove “'+p.name+'” from the storefront for all customers?'))return;try{const r=await window.shivaiAppsScriptCall('adminDeleteProduct',{adminToken:shivaiAdminToken,id:id});if(!r||!r.ok)throw new Error((r&&r.error)||'Could not remove product');deletedProducts=[...new Set([...deletedProducts,id])];try{localStorage.setItem('shivaiDeletedProducts',JSON.stringify(deletedProducts))}catch(e){}renderProducts();await syncSharedStoreData();await renderAdminAfterSave();toast('Product removed from the shared store')}catch(err){alert(err.message||'Product could not be removed')}}
async function updateStatus(id){if(!requireAdminAccess())return;const o=orders.find(x=>x.id===id);if(!o)return;const statuses=['Order placed','Confirmed','Packed','Shipped','Out for delivery','Delivered','Cancelled'];const next=statuses[(statuses.indexOf(o.status)+1)%statuses.length];try{const r=await window.shivaiAppsScriptCall('adminUpdateOrderStatus',{adminToken:shivaiAdminToken,id:id,status:next});if(!r||!r.ok)throw new Error((r&&r.error)||'Could not update order');o.status=next;await refreshAdminData();renderAdmin();toast('Shared order status updated')}catch(err){alert(err.message||'Order status could not be saved')}}
async function renderAdminAfterSave(){await refreshAdminData();renderAdmin()}

async function syncSharedStoreData(){
  try{
    const d=await window.shivaiAppsScriptCall('getStoreData',{});if(!d||!d.ok)return;
    // Preserve any existing local admin data until the owner signs in and migration runs.
    if(!d.migrationComplete)return d;
    stockOverrides=(d.stockOverrides&&typeof d.stockOverrides==='object'&&!Array.isArray(d.stockOverrides))?d.stockOverrides:{};
    priceOverrides=(d.priceOverrides&&typeof d.priceOverrides==='object'&&!Array.isArray(d.priceOverrides))?d.priceOverrides:{};
    customProducts=Array.isArray(d.customProducts)?d.customProducts.filter(p=>p&&typeof p==='object'):[];
    productPhotos=(d.photos&&typeof d.photos==='object'&&!Array.isArray(d.photos))?d.photos:{};
    productPhotoModes=(d.photoModes&&typeof d.photoModes==='object'&&!Array.isArray(d.photoModes))?d.photoModes:{};
    productGallery=(d.gallery&&typeof d.gallery==='object'&&!Array.isArray(d.gallery))?d.gallery:{};
    productApplications=(d.applications&&typeof d.applications==='object'&&!Array.isArray(d.applications))?d.applications:{};
    deletedProducts=Array.isArray(d.deletedProducts)?d.deletedProducts:[];
    try{localStorage.setItem('shivaiStock',JSON.stringify(stockOverrides));localStorage.setItem('shivaiPrices',JSON.stringify(priceOverrides));localStorage.setItem('shivaiCustomProducts',JSON.stringify(customProducts));localStorage.setItem('shivaiPhotos',JSON.stringify(productPhotos));localStorage.setItem('shivaiPhotoModes',JSON.stringify(productPhotoModes));localStorage.setItem('shivaiGallery',JSON.stringify(productGallery));localStorage.setItem('shivaiApplications',JSON.stringify(productApplications));localStorage.setItem('shivaiDeletedProducts',JSON.stringify(deletedProducts))}catch(e){}
    renderCategories();renderProducts();
    return d;
  }catch(e){console.warn('Shared store data is not available yet.',e);return null}
}
async function migrateLocalAdminDataIfNeeded(){
  if(!shivaiAdminToken)return;
  let d;try{d=await window.shivaiAppsScriptCall('getStoreData',{})}catch(e){return}
  if(!d||d.migrationComplete)return;
  const local={stockOverrides:readStoreObject('shivaiStock'),priceOverrides:readStoreObject('shivaiPrices'),customProducts:readStoreArray('shivaiCustomProducts'),photoModes:readStoreObject('shivaiPhotoModes'),applications:readStoreObject('shivaiApplications'),deletedProducts:readStoreArray('shivaiDeletedProducts')};
  const photos=readStoreObject('shivaiPhotos'), gallery=readStoreObject('shivaiGallery');
  const photoIds=Object.keys(photos).filter(id=>String(photos[id]||'').startsWith('data:image/'));
  const galleryIds=Object.keys(gallery);
  const m=await window.shivaiAppsScriptCall('adminImportMetadata',{adminToken:shivaiAdminToken, baseProducts:products, ...local});
  if(!m||!m.ok)throw new Error((m&&m.error)||'Could not migrate existing admin settings');
  for(const id of photoIds){const r=await window.shivaiAppsScriptCall('adminSavePhoto',{adminToken:shivaiAdminToken,id:id,dataUrl:photos[id],mode:local.photoModes[id]||'crop'});if(!r||!r.ok)throw new Error((r&&r.error)||'Could not migrate an existing product photo')}
  for(const id of galleryIds){for(const dataUrl of (gallery[id]||[])){if(String(dataUrl).startsWith('data:image/')){const r=await window.shivaiAppsScriptCall('adminSavePhoto',{adminToken:shivaiAdminToken,id:id,dataUrl:dataUrl,mode:local.photoModes[id]||'crop',gallery:true});if(!r||!r.ok)throw new Error((r&&r.error)||'Could not migrate a gallery photo')}}}
  const done=await window.shivaiAppsScriptCall('adminFinishMigration',{adminToken:shivaiAdminToken});
  if(!done||!done.ok)throw new Error((done&&done.error)||'Could not finish the shared catalog setup.');
}

function showPrep(id){const p=allProducts().find(x=>x.id===id);if(!p)return;const pack=productPackInfo(p);const photo=p.image?`<div class="product-visual" style="height:190px;border-radius:14px;margin-bottom:14px"><img class="product-image ${p.uploadedPhoto&&p.photoMode!=='fit'?'uploaded-product-image':''}" data-emoji="${escapeHtml(p.emoji||'🍲')}" onerror="handleProductImageError(this)" src="${escapeHtml(productImageUrl(p.image))}" alt="${escapeHtml(p.name)}"></div>`:`<div class="product-visual" style="height:190px;border-radius:14px;margin-bottom:14px"><img class="product-image" data-emoji="${escapeHtml(p.emoji||'🍲')}" src="${productFallbackImage(p.emoji||'🍲')}" alt="${escapeHtml(p.name)}"></div>`;openModal('How to prepare',`${photo}<h3>${escapeHtml(p.name)}</h3>${pack?`<div class="pack-size-chip">📦 Pack size: ${escapeHtml(pack)}</div>`:''}<p>${escapeHtml(p.prep||'Prepare according to the package instructions.')}</p><p class="hint">Always follow the instructions and allergen information printed on the actual product pack.</p>${p.price==null?`<p><b>Price on request</b></p><button class="btn btn-primary" onclick="enquireProduct('${id}')">Enquire about this product</button>`:`<button class="btn btn-primary" onclick="addToCart('${id}');closeModal()">Add to cart · ${money(p.price)}</button>`}`)}
function openStory(){openModal('The SHIVAI story',`<p class="marathi" style="color:var(--green);font-weight:900;font-size:20px">घरगुती चव, कोणत्याही वेळेस!</p><p>SHIVAI began with a simple idea: make familiar, comforting food easier to enjoy even when home is far away or time is short.</p><p>From students and working professionals to travellers and families, the aim is to make meal preparation feel simpler without losing the warmth of a kitchen memory.</p>`)}
function subscribe(e){e.preventDefault();const email=document.getElementById('newsletterEmail').value;let list=readStoreArray('shivaiSubscribers');if(!list.includes(email))list.push(email);localStorage.setItem('shivaiSubscribers',JSON.stringify(list));e.target.reset();toast('Thanks for joining! (saved in this browser)')}
renderCategories();renderProducts();updateCartCount();window.__SHIVAI_CLIENT_READY__=true;
// A small startup safeguard: never leave the product grid blank after an unexpected rendering error.
try{if(!document.getElementById('products').children.length){renderCategories();renderProducts()}}catch(e){console.error('SHIVAI product display initialization failed:',e);const grid=document.getElementById('products');if(grid)grid.innerHTML='<div class=\"empty\">Products could not be loaded. Please refresh the page. If the problem continues, contact SHIVAI support.</div>'}

const PHOTO_STOP=new Set(['instant','mix','premix','the','and','with','for','style','ready']);
function photoTokens(s){return s.toLowerCase().replace(/[^a-z0-9 ]+/g,' ').split(/\s+/).filter(t=>t.length>1&&!PHOTO_STOP.has(t))}
function matchPhotoName(filename){
  const base=filename.replace(/\.[^.]+$/,'');const lower=base.toLowerCase();const ft=new Set(photoTokens(base));
  let best=null,bestScore=0,tie=false;
  for(const p of allProducts()){
    if(new RegExp('(^|[^a-z0-9])'+String(p.id).toLowerCase()+'($|[^a-z0-9])').test(lower))return {id:p.id,score:1};
    const pt=photoTokens(p.name);if(!pt.length)continue;
    const hit=pt.filter(t=>ft.has(t)).length;if(!hit)continue;
    const score=hit/pt.length;
    if(score>bestScore){bestScore=score;best=p.id;tie=false}else if(score===bestScore)tie=true;
  }
  return (!best||tie)?{id:null,score:0}:{id:best,score:bestScore};
}
function photoToDataURL(file,mode='crop'){
  return new Promise((resolve,reject)=>{
    const url=URL.createObjectURL(file);const img=new Image();
    img.onload=()=>{
      try{
        const size=640,c=document.createElement('canvas');c.width=size;c.height=size;
        const ctx=c.getContext('2d');if(!ctx)throw new Error('Photo editor is not available in this browser.');
        // A pure white photo stage makes uploaded product images consistent with marketplace listings.
        ctx.fillStyle='#fffdf6';ctx.fillRect(0,0,size,size);
        const iw=img.naturalWidth,ih=img.naturalHeight;
        if(mode==='fit'){
          const scale=Math.min(size/iw,size/ih),w=iw*scale,h=ih*scale;
          ctx.drawImage(img,(size-w)/2,(size-h)/2,w,h);
        }else{
          const side=Math.min(iw,ih),sx=(iw-side)/2,sy=(ih-side)/2;
          ctx.drawImage(img,sx,sy,side,side,0,0,size,size);
        }
        let d=c.toDataURL('image/webp',0.86);if(!d.startsWith('data:image/webp'))d=c.toDataURL('image/png');
        URL.revokeObjectURL(url);resolve(d);
      }catch(err){URL.revokeObjectURL(url);reject(err)}
    };
    img.onerror=()=>{URL.revokeObjectURL(url);reject(new Error('Could not read '+file.name))};
    img.src=url;
  });
}
function addPendingPhotos(files){
  for(const f of files){
    if(!f.type.startsWith('image/'))continue;
    if(f.size>20*1024*1024){alert('Each product photo must be smaller than 20 MB: '+f.name);continue;}
    const m=matchPhotoName(f.name);
    pendingPhotos.push({file:f,url:URL.createObjectURL(f),productId:m.id,score:m.score,mode:'crop',targeted:false});
  }
  renderPhotoPanel();
}
function selectGalleryProduct(id){galleryPhotoProductId=String(id||'');renderPhotoPanel()}
function addPhotosToSelectedProduct(files){
  if(!requireAdminAccess())return;
  const id=galleryPhotoProductId;
  if(!id){alert('Choose the product first.');return;}
  const product=allProducts().find(p=>p.id===id);
  if(!product){alert('That product is no longer available. Choose it again.');return;}
  for(const f of files){
    if(!f.type.startsWith('image/'))continue;
    if(f.size>20*1024*1024){alert('Each product photo must be smaller than 20 MB: '+f.name);continue;}
    // The product is assigned explicitly here; the file name does not need to match.
    pendingPhotos.push({file:f,url:URL.createObjectURL(f),productId:id,score:1,mode:'fit',targeted:true});
  }
  renderPhotoPanel();
}
function setPendingPhotoMode(i,mode){
  if(!pendingPhotos[i])return;
  pendingPhotos[i].mode=mode==='fit'?'fit':'crop';
  renderPhotoPanel();
}
function photoNameGuess(filename){return filename.replace(/\.[^.]+$/,'').replace(/[-_]+/g,' ').trim()}
function renderPhotoPanel(){if(!requireAdminAccess())return;
  const el=document.getElementById('photoPanel');if(!el)return;
  const prods=allProducts();
  if(!galleryPhotoProductId||!prods.some(p=>p.id===galleryPhotoProductId))galleryPhotoProductId=prods[0]?prods[0].id:'';
  const target=prods.find(p=>p.id===galleryPhotoProductId);
  const mainUrl=target?(productPhotos[target.id]||target.image||''):'';
  const extraUrls=target?(productGallery[target.id]||[]):[];
  const selectedPhotos=target?([mainUrl,...extraUrls].filter(Boolean)):[];
  const currentGallery=target?`<div class="admin-row" style="margin-top:10px">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap"><b>Current product gallery</b><span class="pill">${selectedPhotos.length} photo${selectedPhotos.length===1?'':'s'}</span></div>
    ${mainUrl?`<div style="display:flex;align-items:center;gap:12px;margin-top:12px"><img data-emoji="${escapeHtml(target.emoji||'🍲')}" onerror="handleProductImageError(this)" src="${escapeHtml(productImageUrl(mainUrl))}" alt="Main photo of ${escapeHtml(target.name)}" style="width:92px;height:92px;object-fit:contain;background:#fffdf6;border:1px solid var(--line);border-radius:12px;padding:4px"><div style="flex:1;min-width:0"><b>Main product photo</b><div class="hint">This is the first photo customers see.</div></div></div>`:'<p class="hint" style="margin-top:10px">No main photo is saved yet. The first upload will become the main photo.</p>'}
    ${extraUrls.length?`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(92px,1fr));gap:10px;margin-top:12px">${extraUrls.map((url,k)=>`<div style="border:1px solid var(--line);border-radius:12px;padding:6px;background:#fffdf6;min-width:0"><img data-emoji="${escapeHtml(target.emoji||'🍲')}" onerror="handleProductImageError(this)" src="${escapeHtml(productImageUrl(url))}" alt="Gallery photo ${k+1}" style="display:block;width:100%;aspect-ratio:1;object-fit:contain;border-radius:8px"><div class="hint" style="text-align:center;margin-top:5px">Photo ${k+2}</div></div>`).join('')}</div>`:''}
    ${(productPhotos[target.id]||extraUrls.length)?`<button class="btn btn-outline" style="margin-top:12px" onclick="removeProductPhoto('${target.id}')">Remove all uploaded photos</button>`:''}
  </div>`:'';
  const pend=pendingPhotos.map((ph,i)=>{
    const status=ph.creating?'<span class="hint" style="color:var(--green)">Creating a new product for this photo</span>':(ph.productId?(ph.targeted?'<span class="hint" style="color:var(--green)">Assigned to selected product gallery</span>':(ph.score>=0.5?'<span class="hint" style="color:var(--green)">Matched automatically</span>':'<span class="hint" style="color:#9a5a00">Possible match, please check</span>')):'<span class="hint" style="color:#9a5a00">No match: choose a product or create one</span>');
    const control=ph.creating?
      `<div style="display:grid;gap:6px;margin-top:6px"><input class="field" id="newname-${i}" value="${escapeHtml(photoNameGuess(ph.file.name))}" placeholder="Product name"><div style="display:flex;gap:6px"><input class="field" id="newprice-${i}" type="number" min="0" placeholder="₹ price" style="width:40%"><select class="field" id="newcat-${i}" style="flex:1">${categories.slice(1).map(c=>`<option>${escapeHtml(c.name)}</option>`).join('')}</select></div><div style="display:flex;gap:6px"><button class="btn btn-primary" onclick="createFromPending(${i})">Create and assign</button><button class="btn btn-light" onclick="cancelCreate(${i})">Cancel</button></div></div>`:
      `<select class="field" style="margin-top:6px;width:100%" onchange="setPendingPhoto(${i},this.value)"><option value="">— choose product —</option>${prods.map(p=>`<option value="${escapeHtml(p.id)}"${p.id===ph.productId?' selected':''}>${escapeHtml(p.name)}</option>`).join('')}<option value="__new__">+ New product from this photo</option></select>`;
    return `<div class="admin-row" style="display:flex;gap:10px;align-items:flex-start"><img class="pending-photo-preview" src="${ph.url}" alt="Preview of ${escapeHtml(ph.file.name)}" style="object-fit:${ph.mode==='fit'?'contain':'cover'}"><div style="flex:1;min-width:0"><div class="hint" style="word-break:break-word;font-weight:800">${escapeHtml(ph.file.name)}</div>${status}<label class="photo-mode-label">Photo framing<select class="field photo-mode-select" onchange="setPendingPhotoMode(${i},this.value)"><option value="crop"${(ph.mode||'crop')==='crop'?' selected':''}>Square crop — marketplace style</option><option value="fit"${ph.mode==='fit'?' selected':''}>Fit full photo — no crop</option></select></label>${control}</div></div>`;
  }).join('');
  const saveable=pendingPhotos.filter(p=>p.productId).length;
  el.innerHTML=`<div class="admin-row" style="margin-bottom:14px"><h4 style="margin:0 0 8px">Add multiple photos to one product</h4><p class="hint">Choose a product, then select several photos at once. They will be saved to that exact product, without relying on filenames. If the product already has a saved main photo, new photos are added to its gallery instead of replacing the main photo.</p><label style="display:block;font-size:12px;font-weight:800;margin:12px 0 5px">Choose product</label><select class="field" style="width:100%" onchange="selectGalleryProduct(this.value)">${prods.map(p=>`<option value="${escapeHtml(p.id)}"${p.id===galleryPhotoProductId?' selected':''}>${escapeHtml(p.name)}</option>`).join('')}</select>${currentGallery}<label style="display:block;font-size:12px;font-weight:800;margin:14px 0 5px">Select photos for this product</label><input class="field" type="file" accept="image/*" multiple style="width:100%" onchange="addPhotosToSelectedProduct(this.files);this.value=''"><p class="hint" style="margin:7px 0 0">Tip: choose <b>Fit full photo</b> to show the whole product packet. Each file must be under 20 MB; photos are optimized before upload.</p></div>`+
    `<details style="margin:12px 0"><summary style="cursor:pointer;font-weight:800;color:var(--green);padding:8px 0">Bulk upload photos for different products</summary><p class="hint">For a batch of products, upload multiple files here and match each file to a product. Matching by filename is only a suggestion; check the product selector before saving.</p><input class="field" type="file" accept="image/*" multiple style="width:100%" onchange="addPendingPhotos(this.files);this.value=''"></details>`+
    (pend?`<h4 style="margin:14px 0 4px">Pending photos</h4><div class="admin-list" style="margin-top:10px">${pend}</div><button class="btn btn-primary" style="margin-top:10px" ${saveable?'':'disabled'} onclick="savePendingPhotos()">Save ${saveable} photo(s)</button> <button class="btn btn-light" style="margin-top:10px" onclick="clearPendingPhotos()">Clear pending</button>`:'');
}
function clearPendingPhotos(){pendingPhotos.forEach(ph=>{try{URL.revokeObjectURL(ph.url)}catch(e){}});pendingPhotos=[];renderPhotoPanel()}
function setPendingPhoto(i,id){
  if(id==='__new__'){pendingPhotos[i].creating=true;pendingPhotos[i].productId=null;pendingPhotos[i].score=0;renderPhotoPanel();return}
  pendingPhotos[i].creating=false;pendingPhotos[i].productId=id||null;pendingPhotos[i].score=id?1:0;renderPhotoPanel();
}
function cancelCreate(i){pendingPhotos[i].creating=false;renderPhotoPanel()}
async function createFromPending(i){
  const name=(document.getElementById('newname-'+i).value||'').trim();
  const priceEl=document.getElementById('newprice-'+i);
  const category=document.getElementById('newcat-'+i).value;
  if(!name){alert('Enter a product name');return}
  if(priceEl.value.trim()===''||!(Number(priceEl.value)>=0)){alert('Enter a price');return}
  const p={id:'custom'+Date.now()+i,name,price:Number(priceEl.value),category,emoji:'🍲',desc:'A SHIVAI pantry favourite.',prep:'Prepare according to pack instructions.',stock:250};
  try{const saved=await window.shivaiAppsScriptCall('adminSaveProduct',{adminToken:shivaiAdminToken,...p});if(!saved||!saved.ok)throw new Error((saved&&saved.error)||'Could not save product');}
  catch(err){alert(err.message||'Could not save the product');return}
  const next=[...customProducts,p];customProducts=next;
  try{localStorage.setItem('shivaiCustomProducts',JSON.stringify(next))}catch(err){}
  pendingPhotos[i].creating=false;pendingPhotos[i].productId=p.id;pendingPhotos[i].score=1;
  renderProducts();renderPhotoPanel();toast('Product created for all visitors');
}
async function savePendingPhotos(){
  if(!requireAdminAccess())return;
  const todo=pendingPhotos.filter(p=>p.productId);if(!todo.length)return;
  try{
    for(const ph of todo){
      const dataUrl=await photoToDataURL(ph.file,ph.mode||'crop');
      // If a main photo was already saved before this upload, append to the gallery; do not overwrite it.
      const appendToGallery=!!productPhotos[ph.productId];
      const r=await window.shivaiAppsScriptCall('adminSavePhoto',{adminToken:shivaiAdminToken,id:ph.productId,dataUrl:dataUrl,mode:ph.mode||'fit',gallery:appendToGallery});
      if(!r||!r.ok)throw new Error((r&&r.error)||('Could not save '+ph.file.name));
      if(!r.isGallery){productPhotos[ph.productId]=r.url;productPhotoModes[ph.productId]=ph.mode||'fit'}
      else {productGallery[ph.productId]=[...(productGallery[ph.productId]||[]),r.url]}
    }
  }catch(err){alert('Photo upload failed: '+(err.message||'Please retry'));return}
  try{localStorage.setItem('shivaiPhotos',JSON.stringify(productPhotos));localStorage.setItem('shivaiGallery',JSON.stringify(productGallery));localStorage.setItem('shivaiPhotoModes',JSON.stringify(productPhotoModes))}catch(e){}
  pendingPhotos.forEach(ph=>{try{URL.revokeObjectURL(ph.url)}catch(e){}});pendingPhotos=[];
  await syncSharedStoreData();renderProducts();renderPhotoPanel();toast('Photos saved for all visitors');
}
async function removeProductPhoto(id){if(!requireAdminAccess())return;if(!confirm('Remove this product photo from the shared store?'))return;try{const r=await window.shivaiAppsScriptCall('adminRemovePhoto',{adminToken:shivaiAdminToken,id:id});if(!r||!r.ok)throw new Error((r&&r.error)||'Could not remove photo');const nm={...productPhotos},ng={...productGallery},modes={...productPhotoModes};delete nm[id];delete ng[id];delete modes[id];productPhotos=nm;productGallery=ng;productPhotoModes=modes;try{localStorage.setItem('shivaiPhotos',JSON.stringify(nm));localStorage.setItem('shivaiGallery',JSON.stringify(ng));localStorage.setItem('shivaiPhotoModes',JSON.stringify(modes))}catch(e){}await syncSharedStoreData();renderProducts();renderPhotoPanel();toast('Photo removed for all visitors')}catch(err){alert(err.message||'Photo could not be removed')}}
let detailEditId=null;
function renderDetailEditor(){if(!requireAdminAccess())return;
  const el=document.getElementById('detailPanel');if(!el)return;
  const prods=allProducts();
  if(!detailEditId||!prods.find(p=>p.id===detailEditId))detailEditId=prods[0]?prods[0].id:null;
  if(!detailEditId){el.innerHTML='<p class="hint">Add a product first.</p>';return}
  const apps=(productApplications[detailEditId]||[]).join('\n');
  const extra=(productGallery[detailEditId]||[]).length;
  el.innerHTML=`<p class="hint">Choose a product, then add its applications, one per line, written as "Title - description".</p>`+
    `<select class="field" style="width:100%" onchange="detailEditId=this.value;renderDetailEditor()">${prods.map(p=>`<option value="${p.id}"${p.id===detailEditId?' selected':''}>${escapeHtml(p.name)}</option>`).join('')}</select>`+
    `<label style="display:block;font-size:12px;font-weight:800;margin:10px 0 4px">Product application</label>`+
    `<textarea class="field" id="appsText" rows="5" style="width:100%">${escapeHtml(apps)}</textarea>`+
    `<div class="hint" style="margin-top:6px">Extra gallery photos for this product: ${extra}. To add them, name several photo files for this product in Product photos; the first becomes the main photo and the rest go in the gallery.</div>`+
    `<button class="btn btn-primary" style="margin-top:10px" onclick="saveApplications()">Save details</button>`;
}
async function saveApplications(){if(!requireAdminAccess())return;
  const lines=document.getElementById('appsText').value.split('\n').map(x=>x.trim()).filter(Boolean);
  try{const r=await window.shivaiAppsScriptCall('adminSaveApplications',{adminToken:shivaiAdminToken,id:detailEditId,applications:lines});if(!r||!r.ok)throw new Error((r&&r.error)||'Could not save details');}
  catch(err){alert(err.message||'Could not save the details');return}
  const next={...productApplications};if(lines.length)next[detailEditId]=lines;else delete next[detailEditId];productApplications=next;
  try{localStorage.setItem('shivaiApplications',JSON.stringify(next))}catch(e){}toast('Details saved for all visitors');
}

async function savePrice(id){if(!requireAdminAccess())return;
  const raw=document.getElementById('price-'+id).value.trim();let v=null;
  if(raw!==''){v=Number(raw);if(!(v>=0)){alert('Enter a valid price');return}}
  try{const r=await window.shivaiAppsScriptCall('adminSavePrice',{adminToken:shivaiAdminToken,id:id,price:v===null?'':v});if(!r||!r.ok)throw new Error((r&&r.error)||'Could not save price');}
  catch(err){alert(err.message||'Price could not be saved');return}
  const next={...priceOverrides};if(raw==='')delete next[id];else next[id]=v;priceOverrides=next;
  try{localStorage.setItem('shivaiPrices',JSON.stringify(next))}catch(e){}
  await syncSharedStoreData();renderProducts();await renderAdminAfterSave();toast('Price saved for all visitors');
}
