const latestProducts = [
    {
        id: 1,
        name: "Bluetooth Earphones",
        title: "Crystal clear sound with strong bass",
        price: 2500,
        img: "./src/images/blutooth-yerphone.png"
    },
    {
        id: 2,
        name: "Laptop",
        title: "High performance laptop for daily work",
        price: 65000,
        img: "./src/images/laptop.png"
    },
    {
        id: 3,
        name: "Wireless Headphones",
        title: "Immersive sound with deep bass",
        price: 4500,
        img: "./src/images/headphone.png"
    },
    {
        id: 4,
        name: "Smart Watch",
        title: "Track fitness and stay connected",
        price: 3200,
        img: "./src/images/smart-watch.png"
    },
    {
        id: 5,
        name: "Gaming Mouse",
        title: "Precision control for competitive gaming",
        price: 1800,
        img: "./src/images/gaming-mouse.png"
    },
    {
        id: 6,
        name: "Bluetooth Speaker",
        title: "Smooth typing experience with tactile keys",
        price: 5200,
        img: "./src/images/speaker.png"
    },
    {
        id: 7,
        name: "Bluetooth Earbuds",
        title: "True wireless earbuds for everyday use",
        price: 3900,
        img: "./src/images/airpods.png"
    },
    {
        id: 8,
        name: "Power Bank",
        title: "Fast Charging Anytime",
        price: 2700,
        img: "./src/images/power-bank.png"
    }
];

const latestProductContainer = document.getElementById("latest-product-container")

latestProducts.forEach((product) => {
    const div = document.createElement("div")
    div.innerHTML = `
    <div class='latest-product'>
        <img class='latest-img' src="${product.img}" alt="">
        <div class='name-price'>
            <p class='p-name'>${product.name}</p>
            <p>$${product.price}</p>
        </div>
        <p class='title'>${product.title}</p>
    </div>
    `
    latestProductContainer.appendChild(div)
})