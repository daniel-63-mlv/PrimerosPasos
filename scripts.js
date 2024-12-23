{
    "products": [
        {
            "id": 1,
            "name": "Netbook 14\"",
            "description": "Liviana y amplias características",
            "price": 500,
            "image": "laptop.jpg"
        },
        {
            "id": 2,
            "name": "Smartphone X",
            "description": "Última generación con cámara de alta resolución",
            "price": 800,
            "image": "smartphone.jpg"
        },
        {
            "id": 3,
            "name": "Auriculares Bluetooth",
            "description": "Sonido envolvente y batería de larga duración",
            "price": 150,
            "image": "headphones.jpg"
        }
    ],
    "cart": []
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');

    // Cargar productos desde JSON
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementById('products-container');
            data.products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Precio: $${product.price}</p>
                    <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
                `;
                productsContainer.appendChild(productElement);
            });
        });

    // Mostrar carrito de compras
    const cartContainer = document.getElementById('cart-container');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(productId => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `Producto ID: ${productId}`;
        cartContainer.appendChild(cartItem);
    });
});

// Función para agregar productos al carrito
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`Producto ${productId} agregado al carrito`);
}

