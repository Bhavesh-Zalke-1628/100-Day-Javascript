const url = `https://free-food-menus-api-two.vercel.app/burgers?limit=10`;
const container = document.querySelector(".container");
const modal = document.getElementById('orderModal');
const closeModal = document.getElementById('closeModal');

// Utility: fallback for missing image/price
function withFallback(val, fallback) {
    return (typeof val !== "undefined" && val !== null && val !== "") ? val : fallback;
}

async function fetchData(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();

        // Remove all previous cards to prevent duplicates
        container.innerHTML = "";

        data.forEach((item, idx) => {
            // Use safe properties, with fallback
            const name = withFallback(item.name, "Burger");
            const desc = withFallback(item.desc, item.dsc || "Juicy, delicious burger!");
            const img = withFallback(item.img, "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=450&q=80");
            // API may give price as number or string, ensure ₹ prefix
            let price = withFallback(item.price, 180);
            price = isNaN(price) ? price : `₹${price}`;

            // Build card markup to match advanced UI
            const card = document.createElement('div');
            card.className = 'burger-card';
            card.innerHTML = `
        <img src="${img}" alt="${name}" loading="lazy">
        <span class="price-badge">${price}</span>
        <div class="card-content">
          <h3>${name}</h3>
          <p>${desc}</p>
          <button class="order-btn" data-idx="${idx}">Order Now</button>
        </div>
      `;
            container.appendChild(card);
        });

        // After rendering, set up modal open for each "Order Now" button
        setTimeout(() => {
            document.querySelectorAll('.order-btn').forEach(btn => {
                btn.onclick = () => {
                    modal.style.display = 'flex';
                    window.setTimeout(() => { modal.style.display = 'none'; }, 1400);
                };
            });
        }, 100);

    } catch (e) {
        container.innerHTML = `<div style="padding:3em;text-align:center;color:#d32f2f;">Failed to load burgers.<br>${e.message}</div>`;
    }
}

// Modal close logic (in case you want manual close)
if (closeModal && modal) {
    closeModal.onclick = () => modal.style.display = 'none';
    window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };
}

fetchData(url);
