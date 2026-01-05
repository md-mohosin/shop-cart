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
    },
    {
        id: 9,
        name: "Lapotp stand",
        title: "Stand with 360 degree rotate",
        price: 5000,
        img: "./src/images/laptop-stand.png"
    },
    {
        id: 10,
        name: "Pendrive",
        title: "Duo link USB 3.2 pendrive",
        price: 5000,
        img: "./src/images/pendrive.png"
    }
];

const latestProductContainer = document.getElementById("latest-product-container")

latestProducts.forEach((product) => {
    const div = document.createElement("div")
    div.className = 'latest-product'
    div.innerHTML = `
        <img class='latest-img' src="${product.img}" alt="">
        <div class='name-price'>
            <p class='p-name'>${product.name}</p>
            <p>$${product.price}</p>
        </div>
        <p class='title'>${product.title}</p>
        <button class='add-cart-btn' data-id='${product.id}'>Add to cart</button>
    `
    latestProductContainer.appendChild(div)
})




let addProductArry = []

latestProductContainer.addEventListener("click", e => {
    if (e.target.classList.contains('add-cart-btn')) {
        const id = Number(e.target.dataset.id)

        const addProduct = latestProducts.find(addProduct => addProduct.id === id)
        if (!addProduct) return
        const existCartProduct = addProductArry.find(p => p.id === id)
        if (!existCartProduct) {
            addProductArry.push({ ...addProduct, quantity: 1 })
        }
        else {
            existCartProduct.quantity++
        }
        setLocalStorage()
    }
    cartCount()
    renderCartProduct()
})



function cartCount() {
    const quantityCount = addProductArry.reduce((sum, next) => sum + next.quantity, 0)
    document.getElementById("cart-product-count").innerText = quantityCount
}



const cartProductContainer = document.getElementById("cartProduct-container")

function renderCartProduct() {
    cartProductContainer.innerHTML = ''
    addProductArry.forEach(cartProduct => {
        const div = document.createElement("div")
        div.className = 'cart-product'
        div.innerHTML = `
       <div class='name-img'>
        <img class='cart-img' src="${cartProduct.img}" alt="">
        <p class='cartPName'>${cartProduct.name}</p>
       </div>
        <p class='cPPrice'>$${cartProduct.price}</p>
        <p class='quantity'>quantity:${cartProduct.quantity}</p>
        `
        cartProductContainer.appendChild(div)
    })
}



function setLocalStorage() {
    localStorage.setItem("cartProduct", JSON.stringify(addProductArry))
}
function getLocalStorage() {
    const data = localStorage.getItem("cartProduct")
    if (data) {
        addProductArry = JSON.parse(data)
        renderCartProduct()
    }
    cartCount()
}
getLocalStorage()


function hide(id) {
    document.getElementById(id).classList.add("hidden")
}
function show(id) {
    document.getElementById(id).classList.remove("hidden")
}



document.getElementById("cart-icon").addEventListener("click", () => {
    hide('home-page')
    show("cartSection")
})
document.getElementById("back-btn").addEventListener("click", () => {
    hide("cartSection")
    show('home-page')
})