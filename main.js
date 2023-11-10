
const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelectorAll('.container-cart-products')
btnCart.addEventListener('click', () => {
    alert('funciona')
    containerCartProducts.classList.toggle('.container-cart-products')
})
