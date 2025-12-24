/* Simple e-commerce front-end
   - products defined below
   - cart persisted in localStorage under key 'ss_cart'
*/

const PRODUCTS = [
  {
    id: "p1",
    title: "Men's Classic Polo Shirt",
    price: 45.0,
    image: "IMG-20251129-WA0057.jpg",
    desc: "Comfortable cotton polo shirt, perfect for casual and semi-formal occasions.",
  },
  {
    id: "p2",
    title: "Women's Elegant Handbag",
    price: 130.0,
    image: "IMG-20251217-WA0008.jpg",
    desc: "Stylish and spacious handbag, ideal for daily use and special events.",
  },
  {
    id: "p3",
    title: "Men's Leather Dress Shoes",
    price: 130.0,
    image: "IMG-20251217-WA0009.jpg",
    desc: "Premium leather shoes for formal wear, durable and elegant.",
  },
  {
    id: "p4",
    title: "Women's Fashion Sandals",
    price: 130.0,
    image: "IMG-20251217-WA0010.jpg",
    desc: "Trendy sandals with comfortable soles, perfect for summer outings.",
  },
  {
    id: "p5",
    title: "Unisex Sports Sneakers",
    price: 130.0,
    image: "IMG-20251217-WA0011.jpg",
    desc: "Lightweight sneakers suitable for running and everyday wear.",
  },
  {
    id: "p6",
    title: "Men's Denim Jeans",
    price: 150.0,
    image: "IMG-20251218-WA0008.jpg",
    desc: "Classic fit denim jeans, durable and stylish for all occasions.",
  },
  {
    id: "p7",
    title: "Women's Summer Dress",
    price: 150.0,
    image: "IMG-20251218-WA0009.jpg",
    desc: "Light and breezy summer dress, available in multiple colors.",
  },
  {
    id: "p8",
    title: "Men's Casual T-Shirt",
    price: 150.0,
    image: "IMG-20251218-WA0010.jpg",
    desc: "Soft cotton t-shirt, perfect for everyday comfort.",
  },
  {
    id: "p9",
    title: "Women's Stylish Blouse",
    price: 150.0,
    image: "IMG-20251218-WA0011.jpg",
    desc: "Elegant blouse for work or casual wear, easy to pair with jeans or skirts.",
  },
  {
    id: "p10",
    title: "Men's Hooded Sweatshirt",
    price: 150.0,
    image: "IMG-20251218-WA0012.jpg",
    desc: "Warm and cozy hoodie, great for chilly days and casual outings.",
  },
  {
    id: "p11",
    title: "Women's Cardigan Sweater",
    price: 150.0,
    image: "IMG-20251218-WA0013.jpg",
    desc: "Soft knit cardigan, perfect for layering in any season.",
  },
  {
    id: "p12",
    title: "Men's Classic Belt",
    price: 150.0,
    image: "IMG-20251218-WA0014.jpg",
    desc: "Genuine leather belt, suitable for both formal and casual wear.",
  },
  {
    id: "p13",
    title: "Women's Fashion Scarf",
    price: 150.0,
    image: "IMG-20251218-WA0014.jpg",
    desc: "Lightweight scarf, adds a stylish touch to any outfit.",
  },
  {
    id: "p14",
    title: "Men's Dress Watch",
    price: 150.0,
    image: "IMG-20251218-WA0015.jpg",
    desc: "Elegant wristwatch with leather strap, perfect for formal occasions.",
  },
  {
    id: "p15",
    title: "Women's Sunglasses",
    price: 150.0,
    image: "IMG-20251218-WA0016.jpg",
    desc: "UV-protected sunglasses, stylish and practical for sunny days.",
  },
  {
    id: "p16",
    title: "Men's Baseball Cap",
    price: 150.0,
    image: "IMG-20251218-WA0017.jpg",
    desc: "Adjustable cap, great for sports and outdoor activities.",
  },
  {
    id: "p17",
    title: "Women's Winter Coat",
    price: 150.0,
    image: "IMG-20251218-WA0018.jpg",
    desc: "Warm and stylish winter coat, perfect for cold weather.",
  },
  {
    id: "p18",
    title: "Men's Ankle Socks (Pack)",
    price: 120.0,
    image: "IMG-20251218-WA0023.jpg",
    desc: "Pack of soft, breathable ankle socks for men.",
  },
  {
    id: "p19",
    title: "Women's Ankle Socks (Pack)",
    price: 120.0,
    image: "IMG-20251218-WA0024.jpg",
    desc: "Pack of comfortable, colorful ankle socks for women.",
  },
  {
    id: "p20",
    title: "Men's Sports Cap",
    price: 120.0,
    image: "IMG-20251218-WA0026.jpg",
    desc: "Lightweight cap, ideal for sports and outdoor activities.",
  },
  {
    id: "p21",
    title: "Women's Leather Wallet",
    price: 120.0,
    image: "IMG-20251218-WA0027.jpg",
    desc: "Compact and elegant wallet, made from genuine leather.",
  },
  {
    id: "p22",
    title: "Men's Sunglasses",
    price: 120.0,
    image: "IMG-20251218-WA0028.jpg",
    desc: "UV-protected sunglasses, classic design for men.",
  },
  {
    id: "p23",
    title: "Women's Sunglasses",
    price: 120.0,
    image: "IMG-20251218-WA0029.jpg",
    desc: "Fashionable sunglasses with UV protection for women.",
  },
  {
    id: "p24",
    title: "Men's Travel Backpack",
    price: 220.0,
    image: "IMG-20251219-WA0006.jpg",
    desc: "Durable backpack, perfect for travel and daily use.",
  },
  {
    id: "p25",
    title: "Women's Travel Backpack",
    price: 220.0,
    image: "IMG-20251219-WA0007.jpg",
    desc: "Stylish and spacious backpack for women travelers.",
  },
  {
    id: "p26",
    title: "Men's Leather Briefcase",
    price: 220.0,
    image: "IMG-20251219-WA0009.jpg",
    desc: "Professional leather briefcase for business and work.",
  },
  {
    id: "p27",
    title: "Women's Tote Bag",
    price: 220.0,
    image: "IMG-20251219-WA0010.jpg",
    desc: "Large tote bag, ideal for shopping and daily errands.",
  },
  {
    id: "p28",
    title: "Men's Casual Shoes",
    price: 130.0,
    image: "IMG-20251219-WA0024.jpg",
    desc: "Comfortable shoes for everyday casual wear.",
  },
  {
    id: "p29",
    title: "Women's Casual Shoes",
    price: 130.0,
    image: "IMG-20251219-WA0025.jpg",
    desc: "Trendy and comfortable shoes for women.",
  },
  {
    id: "p30",
    title: "Men's Flip Flops",
    price: 130.0,
    image: "IMG-20251219-WA0026.jpg",
    desc: "Lightweight flip flops, perfect for the beach or pool.",
  },
  {
    id: "p31",
    title: "Women's Flip Flops",
    price: 130.0,
    image: "IMG-20251219-WA0027.jpg",
    desc: "Comfortable flip flops for summer days.",
  },
  {
    id: "p32",
    title: "Men's Dress Socks (Pack)",
    price: 130.0,
    image: "IMG-20251219-WA0028.jpg",
    desc: "Pack of classic dress socks for men.",
  },
  {
    id: "p33",
    title: "Men's Patterned Socks (Pack)",
    price: 130.0,
    image: "IMG-20251219-WA0029.jpg",
    desc: "Pack of stylish patterned socks for men.",
  },
  {
    id: "p34",
    title: "Women's Patterned Socks (Pack)",
    price: 130.0,
    image: "IMG-20251219-WA0030.jpg",
    desc: "Pack of colorful patterned socks for women.",
  },
  {
    id: "p35",
    title: "Men's Low-Cut Socks (Pack)",
    price: 110.0,
    image: "IMG-20251220-WA0018.jpg",
    desc: "Low-cut socks for men, comfortable and breathable.",
  },
  {
    id: "p36",
    title: "Women's Low-Cut Socks (Pack)",
    price: 110.0,
    image: "IMG-20251220-WA0019.jpg",
    desc: "Low-cut socks for women, soft and comfortable.",
  },
  {
    id: "p37",
    title: "Men's Athletic Socks (Pack)",
    price: 110.0,
    image: "IMG-20251220-WA0020.jpg",
    desc: "Athletic socks for men, ideal for sports and training.",
  },
  {
    id: "p38",
    title: "Women's Athletic Socks (Pack)",
    price: 110.0,
    image: "IMG-20251220-WA0021.jpg",
    desc: "Athletic socks for women, perfect for active lifestyles.",
  },
  {
    id: "p39",
    title: "Men's Dress Shirt",
    price: 150.0,
    image: "IMG-20251222-WA0006.jpg",
    desc: "Classic dress shirt for men, suitable for formal occasions.",
  },
  {
    id: "p40",
    title: "Women's Dress Shirt",
    price: 150.0,
    image: "IMG-20251222-WA0007.jpg",
    desc: "Elegant dress shirt for women, perfect for office or events.",
  },
  {
    id: "p41",
    title: "Men's Formal Trousers",
    price: 150.0,
    image: "IMG-20251222-WA0008.jpg",
    desc: "Formal trousers for men, comfortable and stylish.",
  },
  {
    id: "p42",
    title: "Women's Formal Trousers",
    price: 150.0,
    image: "IMG-20251222-WA0009.jpg",
    desc: "Formal trousers for women, elegant and versatile.",
  },
  {
    id: "p43",
    title: "Men's Casual Shirt",
    price: 150.0,
    image: "IMG-20251222-WA0010.jpg",
    desc: "Casual shirt for men, great for everyday wear.",
  },
  {
    id: "p44",
    title: "Women's Casual Shirt",
    price: 150.0,
    image: "IMG-20251222-WA0011.jpg",
    desc: "Casual shirt for women, comfortable and stylish.",
  },
  {
    id: "p45",
    title: "Men's Pullover Sweater",
    price: 150.0,
    image: "IMG-20251222-WA0012.jpg",
    desc: "Pullover sweater for men, warm and cozy.",
  },
  {
    id: "p46",
    title: "Women's Pullover Sweater",
    price: 150.0,
    image: "IMG-20251222-WA0013.jpg",
    desc: "Pullover sweater for women, soft and fashionable.",
  },
  {
    id: "p47",
    title: "Men's Winter Gloves",
    price: 150.0,
    image: "IMG-20251222-WA0014.jpg",
    desc: "Warm winter gloves for men, perfect for cold weather.",
  },
  {
    id: "p48",
    title: "Women's Winter Gloves",
    price: 150.0,
    image: "IMG-20251222-WA0015.jpg",
    desc: "Cozy winter gloves for women, stylish and warm.",
  },
  {
    id: "p49",
    title: "Men's Winter Scarf",
    price: 150.0,
    image: "IMG-20251222-WA0016.jpg",
    desc: "Warm and stylish scarf for men, perfect for winter.",
  },
  {
    id: "p50",
    title: "Women's Winter Scarf",
    price: 150.0,
    image: "IMG-20251222-WA0017.jpg",
    desc: "Cozy and fashionable scarf for women, ideal for cold days.",
  },
  {
    id: "p51",
    title: "Men's Woolen Hat",
    price: 150.0,
    image: "IMG-20251222-WA0018.jpg",
    desc: "Soft woolen hat for men, keeps you warm in winter.",
  },
  {
    id: "p52",
    title: "Women's Woolen Hat",
    price: 150.0,
    image: "IMG-20251222-WA0019.jpg",
    desc: "Stylish woolen hat for women, comfortable and warm.",
  },
  {
    id: "p53",
    title: "Men's Leather Wallet (Premium)",
    price: 130.0,
    image: "IMG-20251222-WA0020.jpg",
    desc: "Premium quality leather wallet for men, elegant and durable.",
  },
  {
    id: "p54",
    title: "Women's Leather Wallet (Premium)",
    price: 280.0,
    image: "IMG-20251222-WA0021.jpg",
    desc: "Premium leather wallet for women, stylish and spacious.",
  },
  {
    id: "p55",
    title: "Men's Travel Duffel Bag",
    price: 280.0,
    image: "IMG-20251222-WA0022.jpg",
    desc: "Spacious duffel bag for men, perfect for travel and gym.",
  },
  {
    id: "p56",
    title: "Women's Travel Duffel Bag",
    price: 280.0,
    image: "IMG-20251222-WA0023.jpg",
    desc: "Large duffel bag for women, ideal for trips and workouts.",
  },
  {
    id: "p57",
    title: "Men's Leather Gloves",
    price: 280.0,
    image: "IMG-20251222-WA0024.jpg",
    desc: "Elegant leather gloves for men, warm and comfortable.",
  },
  {
    id: "p58",
    title: "Women's Leather Gloves",
    price: 280.0,
    image: "IMG-20251222-WA0025.jpg",
    desc: "Stylish leather gloves for women, soft and warm.",
  },
  {
    id: "p59",
    title: "Men's Classic Umbrella",
    price: 280.0,
    image: "IMG-20251222-WA0026.jpg",
    desc: "Classic umbrella for men, sturdy and windproof.",
  },
  {
    id: "p60",
    title: "Women's Classic Umbrella",
    price: 280.0,
    image: "IMG-20251222-WA0027.jpg",
    desc: "Elegant umbrella for women, lightweight and durable.",
  },
  {
    id: "p61",
    title: "Men's Leather Belt (Premium)",
    price: 280.0,
    image: "IMG-20251222-WA0028.jpg",
    desc: "Premium leather belt for men, perfect for formal and casual wear.",
  },
];

const CART_KEY = "ss_cart";

// DOM refs
const productsEl = document.getElementById("products");
const cartBtn = document.getElementById("cart-btn");
const cartDrawer = document.getElementById("cart-drawer");
const closeCartBtn = document.getElementById("close-cart");
const cartItemsEl = document.getElementById("cart-items");
const cartSubtotalEl = document.getElementById("cart-subtotal");
const cartCountEl = document.getElementById("cart-count");
const clearCartBtn = document.getElementById("clear-cart");
const checkoutBtn = document.getElementById("checkout-btn");
const checkoutModal = document.getElementById("checkout-modal");
const closeCheckoutBtn = document.getElementById("close-checkout");
const checkoutForm = document.getElementById("checkout-form");
const checkoutTotalEl = document.getElementById("checkout-total");
const yearEl = document.getElementById("year");

let cart = loadCart();

// init
yearEl.textContent = new Date().getFullYear();
renderProducts();
updateCartUI();

// render products
function renderProducts() {
  productsEl.innerHTML = "";
  PRODUCTS.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="product-image" aria-hidden="true">
        <img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy" />
      </div>
      <h4>${p.title}</h4>
      <p class="small-muted">${p.desc}</p>
      <div class="price-row">
        <div><strong>₵${formatPrice(p.price)}</strong></div>
        <div>
          <button class="btn primary add-btn" data-id="${p.id}">Add</button>
        </div>
      </div>
    `;
    productsEl.appendChild(card);
  });

  // attach listeners
  document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = btn.dataset.id;
      addToCart(id, 1);
    });
  });
}

function addToCart(productId, qty = 1) {
  const item = cart.find((i) => i.id === productId);
  if (item) {
    item.qty += qty;
  } else {
    const p = PRODUCTS.find((x) => x.id === productId);
    cart.push({
      id: p.id,
      title: p.title,
      price: p.price,
      image: p.image,
      qty,
    });
  }
  saveCart();
  updateCartUI();

  // open cart briefly to show feedback
  openCart();
}

// update cart UI
function updateCartUI() {
  // count
  const count = cart.reduce((s, i) => s + i.qty, 0);
  cartCountEl.textContent = count;
  // items list
  cartItemsEl.innerHTML = "";
  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p class="small-muted">Your cart is empty.</p>`;
    cartSubtotalEl.textContent = "₵0.00";
    checkoutTotalEl.textContent = "₵0.00";
    return;
  }

  cart.forEach((item) => {
    const node = document.createElement("div");
    node.className = "cart-item";
    node.innerHTML = `
      <img src="${item.image}" alt="${escapeHtml(item.title)}" />
      <div style="flex:1;min-width:0">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <strong style="font-size:0.95rem">${escapeHtml(item.title)}</strong>
          <div>₵${formatPrice(item.price * item.qty)}</div>
        </div>
        <div class="small-muted" style="display:flex;justify-content:space-between;align-items:center;margin-top:.35rem">
          <div class="qty-control">
            <button class="btn outline dec" data-id="${item.id}">−</button>
            <span style="padding:.25rem .6rem;border-radius:6px;background:#f3f4f6;min-width:36px;text-align:center">${
              item.qty
            }</span>
            <button class="btn outline inc" data-id="${item.id}">+</button>
          </div>
          <button class="btn outline remove" data-id="${
            item.id
          }">Remove</button>
        </div>
      </div>
    `;
    cartItemsEl.appendChild(node);
  });

  // attach controls
  cartItemsEl.querySelectorAll(".inc").forEach((b) =>
    b.addEventListener("click", (e) => {
      const id = b.dataset.id;
      changeQty(id, +1);
    })
  );
  cartItemsEl.querySelectorAll(".dec").forEach((b) =>
    b.addEventListener("click", (e) => {
      const id = b.dataset.id;
      changeQty(id, -1);
    })
  );
  cartItemsEl.querySelectorAll(".remove").forEach((b) =>
    b.addEventListener("click", (e) => {
      const id = b.dataset.id;
      removeFromCart(id);
    })
  );

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  cartSubtotalEl.textContent = `₵${formatPrice(subtotal)}`;
  checkoutTotalEl.textContent = `₵${formatPrice(subtotal)}`;
}

function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== id);
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

// UI helpers
cartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
clearCartBtn.addEventListener("click", () => {
  if (confirm("Clear cart?")) clearCart();
});

checkoutBtn.addEventListener("click", () => {
  openCheckout();
});

closeCheckoutBtn.addEventListener("click", closeCheckout);

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // very simple front-end "place order" simulation
  const form = new FormData(checkoutForm);
  const name = form.get("name");
  const email = form.get("email");
  const address = form.get("address");
  const telephone = form.get("telephone");

  if (cart.length === 0) {
    alert("Your cart is empty.");
    closeCheckout();
    return;
  }

  // Build order summary
  const order = {
    id: "ORD" + Date.now(),
    image,
    name,
    email,
    address,
    telephone,
    items: cart,
    total: cart.reduce((s, i) => s + i.price * i.qty, 0),
    placedAt: new Date().toISOString(),
  };

  // In a real app you'd POST this to a server. For demo: log and clear.
  console.log("Order placed:", order);
  alert(
    `Thanks ${name}! Your order ${
      order.id
    } has been placed.\nTotal: ₵${formatPrice(order.total)}`
  );
  clearCart();
  checkoutForm.reset();
  closeCheckout();
});

// accessibility: close modal with escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
    closeCheckout();
  }
});

// open/close functions
function openCart() {
  cartDrawer.setAttribute("aria-hidden", "false");
}
function closeCart() {
  cartDrawer.setAttribute("aria-hidden", "true");
}
function openCheckout() {
  if (cart.length === 0) {
    alert("Please add items to cart before checkout.");
    return;
  }
  checkoutModal.setAttribute("aria-hidden", "false");
}
function closeCheckout() {
  checkoutModal.setAttribute("aria-hidden", "true");
}

// util
function formatPrice(num) {
  // ensure two decimals (do arithmetic digit-by-digit mentally)
  // convert to number and fixed
  return Number(num).toFixed(2);
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
  [];
}

// WhatsApp order sender
// This should be placed only once, after all other code
checkoutForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (cart.length === 0) {
    alert("Your cart is empty.");
    closeCheckout();
    return;
  }
  const name = document.getElementById("name")
    ? document.getElementById("name").value
    : "";
  const telephone = document.getElementById("telephone")
    ? document.getElementById("telephone").value
    : "";
  const email = document.getElementById("email")
    ? document.getElementById("email").value
    : "";
  const address = document.getElementById("address")
    ? document.getElementById("address").value
    : "";
  const notes = document.getElementById("notes")
    ? document.getElementById("notes").value
    : "";
  const total = checkoutTotalEl.innerText || "";

  let itemsList = "";
  cart.forEach((item) => {
    itemsList += `- ${item.title} (Qty: ${item.qty})%0AImage: ${
      item.image ? window.location.origin + item.image : "No image"
    }%0A`;
  });

  const phoneNumber = "233536736531"; // Seller's WhatsApp number without +
  const message = `*NEW ORDER*%0A----------------%0A*Name:* ${name}%0A*Phone:* ${telephone}%0A*Email:* ${email}%0A*Address:* ${address}%0A*Notes:* ${notes}%0A----------------%0A*Items:*%0A${itemsList}----------------%0A*Total:* ${total}`;
  const whatsappUrl = `https://wa.me/${233536736531}?text=${message}`;
  window.open(whatsappUrl, "_blank");

  // Optionally clear cart and close modal after sending
  clearCart();
  checkoutForm.reset();
  closeCheckout();
});

// ========================================
// MOBILE NAVIGATION
// ========================================

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", toggleMobileMenu);

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });
  }
}

/**
 * Toggle mobile menu open/closed
 */
function toggleMobileMenu() {
  if (isMobileMenuOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

/**
 * Open mobile menu
 */
function openMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  isMobileMenuOpen = true;
  hamburger.classList.add("active");
  navMenu.classList.add("active");

  // Animate hamburger lines
  const lines = hamburger.querySelectorAll(".hamburger-line");
  lines[0].style.transform = "rotate(45deg) translate(5px, 5px)";
  lines[1].style.opacity = "0";
  lines[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  isMobileMenuOpen = false;
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");

  // Reset hamburger lines
  const lines = hamburger.querySelectorAll(".hamburger-line");
  lines.forEach((line) => {
    line.style.transform = "";
    line.style.opacity = "";
  });
}




