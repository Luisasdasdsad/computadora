document.getElementById('add-to-cart').addEventListener('click', function() {
    const product = {
        id: 3,
        name: 'Laptop',
        description: 'Laptop con hasta un procesador AMD Ryzen™ AI 7 350 (50 TOPS)',
        price: 3200,
        image: '../imagenes/product3.jpg'
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Producto añadido al carrito');
});