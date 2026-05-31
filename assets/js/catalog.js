let orderList = JSON.parse(localStorage.getItem('orderList')) || [];

function updateCartCount() { document.getElementById('cartCount').innerText = orderList.reduce((s,i)=>s+i.quantity,0); }
function saveOrder() { localStorage.setItem('orderList', JSON.stringify(orderList)); updateCartCount(); renderOrderSidebar(); }

function renderProducts(products) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = products.map(p => `
    <div class="product-card" data-id="${p.id}">
      <img class="product-img" src="assets/images/${p.image}" alt="${p.name}" onerror="this.src='https://placehold.co/300x200/EFF3F8/0B3B5F?text=${encodeURIComponent(p.name.slice(0,15))}'">
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-condition"><i class="fas fa-check-circle"></i> New</div>
        <div class="product-price">KES ${p.price.toLocaleString()}</div>
        <div class="quantity-control"><input type="number" id="qty-${p.id}" value="1" min="1" style="width:70px"></div>
        <button class="add-to-list" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}"><i class="fas fa-cart-plus"></i> Add to Order List</button>
      </div>
    </div>
  `).join('');
  document.querySelectorAll('.add-to-list').forEach(btn => btn.addEventListener('click', (e) => { let id = parseInt(btn.dataset.id), name = btn.dataset.name, price = parseInt(btn.dataset.price), qtyInput = document.getElementById(`qty-${id}`), qty = parseInt(qtyInput.value); if(qty>0){ let existing = orderList.find(i=>i.id===id); if(existing) existing.quantity += qty; else orderList.push({id,name,price,quantity:qty}); saveOrder(); renderOrderSidebar(); } }));
}

function renderOrderSidebar() {
  const container = document.getElementById('orderListItems');
  if(orderList.length===0){ container.innerHTML='<p class="empty-order">No items added yet.</p>'; document.getElementById('orderTotal').innerHTML='KES 0'; return; }
  container.innerHTML = orderList.map(item => `<div class="order-item"><div class="order-item-details"><strong>${item.name}</strong><br>Qty: ${item.quantity} x KES ${item.price.toLocaleString()}</div><div class="order-item-price">KES ${(item.price*item.quantity).toLocaleString()}</div><button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button></div>`).join('');
  const total = orderList.reduce((s,i)=>s+(i.price*i.quantity),0);
  document.getElementById('orderTotal').innerHTML=`KES ${total.toLocaleString()}`;
  document.querySelectorAll('.remove-item').forEach(btn => btn.addEventListener('click', (e)=>{ let id = parseInt(btn.dataset.id); orderList = orderList.filter(i=>i.id!==id); saveOrder(); renderOrderSidebar(); }));
}

function filterAndSearch(){ let active = document.querySelector('.filter-btn.active').dataset.cat; let search = document.getElementById('searchInput').value.toLowerCase(); let filtered = productsData.filter(p=>(active==='all'||p.category===active) && p.name.toLowerCase().includes(search)); renderProducts(filtered); }

document.getElementById('filterButtons').addEventListener('click',(e)=>{ if(e.target.classList.contains('filter-btn')){ document.querySelectorAll('.filter-btn').forEach(btn=>btn.classList.remove('active')); e.target.classList.add('active'); filterAndSearch(); } });
document.getElementById('searchInput').addEventListener('input', filterAndSearch);
document.getElementById('whatsappCheckoutBtn').addEventListener('click',()=>{ if(orderList.length===0){ alert('Your order list is empty.'); return; } let msg = "Hello Equinox Health,%0AI would like to order:%0A"; orderList.forEach(i=>{ msg += `- ${i.name} x ${i.quantity} = KES ${(i.price*i.quantity).toLocaleString()}%0A`; }); msg += `%0ATotal: KES ${orderList.reduce((s,i)=>s+(i.price*i.quantity),0).toLocaleString()}%0ADelivery: Nairobi / Other County%0AThank you!`; window.open(`https://wa.me/254706572762?text=${msg}`,'_blank'); });

// Sidebar UI
const trigger = document.getElementById('orderListTrigger'), sidebar = document.getElementById('orderSidebar'), overlay = document.getElementById('sidebarOverlay'), closeBtn = document.getElementById('closeSidebar');
function openSidebar(){ sidebar.classList.add('open'); overlay.classList.add('active'); }
function closeSidebarFn(){ sidebar.classList.remove('open'); overlay.classList.remove('active'); }
trigger.addEventListener('click', openSidebar); closeBtn.addEventListener('click', closeSidebarFn); overlay.addEventListener('click', closeSidebarFn);

renderProducts(productsData); renderOrderSidebar(); updateCartCount();
if(new URLSearchParams(window.location.search).get('cat')){ let cat = new URLSearchParams(window.location.search).get('cat'); document.querySelectorAll('.filter-btn').forEach(btn=>{ if(btn.dataset.cat===cat){ btn.click(); } }); }