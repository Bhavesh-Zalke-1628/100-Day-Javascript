const container = document.querySelector(".card-container");

const fetchData = async () => {
    const url = "https://free-food-menus-api-two.vercel.app/desserts";

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        data.forEach((item) => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
        <img src="${item.img}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.dsc}</p>
        <div class="price">₹${item.price}</div>
      `;

            container.appendChild(card);
        });
    } catch (err) {
        console.error("Failed to fetch desserts", err);
    }
};

fetchData();
