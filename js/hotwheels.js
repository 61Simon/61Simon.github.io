// Product Data
const products = [
    {
        id: 1,
        title: "Машинка Premium Hot Wheels Rexy Porsche 911 GT3 R (992) Race Day 1:64 HRV72 Greenㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
        series: "Серія: Race Day",
        price: 799.99,
        image: "https://retromagaz.com/uploads/products/2b/72/site_list_foe0ukjol_827486a5.webp",
        rating: 5,
        badge: "Новинка"
    },
    {
        id: 2,
        title: "Машинка Premium Hot Wheels Nissan Skyline GT-R (R34) Gran Turismo Pop Culture 1:64 HKC28 Whiteㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
        series: "Серія: Pop Culture",
        price: 589.99,
        image: "https://retromagaz.com/uploads/products/f4/c1/site_fj77cv8d1_aa6484f3.webp",
        rating: 5,
        badge: "Хіт"
    },
    {
        id: 3,
        title: "Машинка Premium Hot Wheels Toyota AE86 Sprinter Trueno Fast & Furious 1:64 HVR61 Greyㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
        series: "Серія: Fast & Furious",
        price: 655.55,
        image: "https://retromagaz.com/uploads/products/1a/66/site_list_fgmrccb7n_d7032c53.webp",
        rating: 4,
        badge: null
    },
    {
        id: 4,
        title: "Машинка Базова Hot Wheels Lamborghini Huracán LP 620-2 Super Trofeo Super Treasure Hunt STH Exotics 1:64 HTF43 Red",
        series: "Серія: Exotics",
        price: 3999.99,
        image: "https://retromagaz.com/uploads/products/dc/98/site_list_fns7brm4i_30a18f29.webp",
        rating: 4.5,
        badge: "Колекційна"
    },
    {
        id: 5,
        title: "Машинка Premium Hot Wheels 2шт Audi S4 quattro / R8 LMS 2-Packs 1:64 JDY82 Blue",
        series: "Серія: 2-Packs",
        price: 1049.99,
        oldPrice: 1399.99,
        image: "https://retromagaz.com/uploads/products/a7/b6/site_fr4q4fd5c_00f0a987.webp",
        rating: 4,
        badge: null
    },
    {
        id: 6,
        title: "Машинка Premium Hot Wheels Rexy Porsche 911 GT3 R (992) Chase Race Day 1:64 HRV96 Pinkㅤㅤㅤㅤㅤㅤㅤ",
        series: "Серія: Race Day",
        price: 9450.99,
        image: "https://retromagaz.com/uploads/products/7d/67/site_list_foekq3ev6_5ef058ec.webp",
        rating: 5,
        badge: "Обмежена серія"
    },
    {
        id: 7,
        title: "Машинка Premium Hot Wheels Nissan Silvia (S15) Fast & Furious 1:64 HYP73 Blueㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
        series: "Серія: Fast & Furious",
        price: 777.77,
        image: "https://retromagaz.com/uploads/products/40/8f/site_fhi4r4t4d_be043124.webp",
        rating: 5,
        badge: "Новинка"
    },
    {
        id: 8,
        title: "Машинка Базова Hot Wheels BMW M3 GT2 Race Day 1:64 GTC82 Whiteㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
        series: "Серія: Race Day",
        price: 399.50,
        image: "https://retromagaz.com/uploads/products/f7/de/site_list_f5rbreahe_b656d266.webp",
        rating: 4,
        badge: null
    },
    {
        id: 9,
        title: "Тематична Машинка Hot Wheels McLaren F1 GTR Gran Turismo 1:64 FKF34 Orangeㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
        series: "Серія: Gran Turismo",
        price: 449.99,
        image: "https://retromagaz.com/uploads/products/c1/c1/site_fdo1a5f6p_61d049c6.webp",
        rating: 5,
        badge: null
    },
    {
        id: 10,
        title: "Машинка Premium Hot Wheels 2шт Subaru Impreza WRX / '16 STI 2-Packs 1:64 HKF60 Silverㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
        series: "Серія: 2-Packs",
        price: 1488.88,
        image: "https://retromagaz.com/uploads/products/96/3b/site_fh9fone2e_a36630c3.webp",
        rating: 5,
        badge: null
    },
    {
        id: 11,
        title: "Машинка Базова Hot Wheels 2019 Audi R8 Spyder Super Treasure Hunt STH Exotics 1:64 GTD01 Blue",
        series: "Серія: Exotics",
        price: 3899.99,
        image: "https://retromagaz.com/uploads/products/b1/6a/site_fe27s52cf_d3d1fbd4.webp",
        rating: 4.5,
        badge: "Колекційна"
    },
    {
        id: 12,
        title: "Машинка Базова Hot Wheels '17 Nissan GT-R (R35) Nightburnerz 1:64 DVC50 Greyㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
        series: "Серія: Nightburnerz",
        price: 333.33,
        image: "https://retromagaz.com/uploads/products/f9/9f/site_fg4ebts84_ed0aaaa3.webp",
        rating: 4,
        badge: null
    },
    {
        id: 13,
        title: "Машинка Premium Hot Wheels '94 AMG-Mercedes C-Class DTM Touring Car Race Day 1:64 HKC62 Yellow",
        series: "Серія: Race Day",
        price: 599.99,
        image: "https://retromagaz.com/uploads/products/bc/e2/site_ffl564b2d_708e8a43.webp",
        rating: 5,
        badge: "Новинка"
    },
    {
        id: 14,
        title: "Машинка Premium Hot Wheels Mercedes-Benz 500 E Chase Canyon Warriors 1:64 FPY86/HKC57 Black",
        series: "Серія: Canyon Warriors",
        price: 2759.99,
        image: "https://retromagaz.com/uploads/products/c5/a6/site_fdhc6auev_26d63863.webp",
        rating: 5,
        badge: "Колекційна"
    },
    {
        id: 15,
        title: "Машинка Premium Hot Wheels 1996 Toyota Chaser JZX100 Elite 64 1:64 HGW10 Whiteㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
        series: "Серія: Elite 64",
        price: 2549.99,
        image: "https://retromagaz.com/uploads/products/1a/60/site_fdoqtksgv_c6f08396.webp",
        rating: 5,
        badge: "Колекційна"
    },
    {
        id: 16,
        title: "Машинка Premium Hot Wheels Nissan Skyline GT-R (BNR34) Red Line Club RLC 1:64 HWF14 Purpleㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
        series: "Серія: Red Line Club RLC",
        price: 4299.99,
        image: "https://retromagaz.com/uploads/products/8a/41/site_fle3urssj_3acaa454.webp",
        rating: 5,
        badge: "Колекційна"
    }
];

// Cart functionality
let cart = [];
const cartIcon = document.querySelector('.cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const orderSummaryItems = document.getElementById('order-summary-items');
const orderSummaryTotal = document.getElementById('order-summary-total');
const productsGrid = document.getElementById('products-grid');
const cartDropdown = document.querySelector('.cart-dropdown');
const closeCartBtn = document.querySelector('.close-cart');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    setupModalLinks();
    setupIntersectionObserver();
});

// Render products
function renderProducts() {
    productsGrid.innerHTML = '';
    products.forEach(product => {
        const ratingStars = renderRatingStars(product.rating);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
    <div class="product-image">
        <img src="${product.image}" alt="${product.title}">
    </div>
    <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-series">${product.series}</p>
        <div class="product-rating">
            ${ratingStars}
        </div>
        <div class="product-price">
            ${product.oldPrice ? `<span class="discount-price">${product.oldPrice.toFixed(2)} ₴</span>` : ''}
            <div class="price">${product.price.toFixed(2)} ₴</div>
            <div class="product-actions">
                <a href="car-${product.id}.html" class="btn-details"><i class="fas fa-info-circle"></i> Детальніше</a>
                <button class="btn-buy add-to-cart" data-id="${product.id}"><i class="fas fa-cart-plus"></i> Купити</button>
            </div>
        </div>
    </div>
`;

        productsGrid.appendChild(productCard);
    });
}

// Render rating stars
function renderRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Setup event listeners
function setupEventListeners() {
    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
            const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
            const productId = parseInt(button.getAttribute('data-id'));
            addToCart(productId);
        }
    });

    // Remove from cart buttons
    cartItemsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
            const element = e.target.classList.contains('remove-item') ? e.target : e.target.closest('.remove-item');
            const productId = parseInt(element.getAttribute('data-id'));
            removeFromCart(productId);
        }
        
        // Quantity buttons
        if (e.target.classList.contains('quantity-btn') || e.target.closest('.quantity-btn')) {
            const button = e.target.classList.contains('quantity-btn') ? e.target : e.target.closest('.quantity-btn');
            const productId = parseInt(button.closest('.cart-item').querySelector('.remove-item').getAttribute('data-id'));
            const isIncrease = button.textContent === '+';
            updateQuantity(productId, isIncrease);
        }
    });

    // Clear cart button
    document.getElementById('clear-cart').addEventListener('click', function() {
        cart = [];
        updateCart();
        showCartNotification('Кошик очищено', 'success');
    });

    // Search functionality
    document.getElementById('search-button').addEventListener('click', searchProducts);
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });

    // Order form submission
    document.getElementById('order-form').addEventListener('submit', submitOrder);

    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', submitContactForm);
    
    // Review form submission
    
    
    // Rating stars
    document.querySelectorAll('.rating-input i').forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            setRatingStars(rating);
        });
    });
    
    // Cart dropdown
    document.querySelector('.cart-icon').addEventListener('click', function(e) {
        e.stopPropagation();
        cartDropdown.classList.toggle('show');
    });
    
    closeCartBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        cartDropdown.classList.remove('show');
    });
    
    document.addEventListener('click', function() {
        cartDropdown.classList.remove('show');
    });
    
    cartDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
        // Image modal functionality
    document.querySelectorAll('.product-image img').forEach(img => {
        img.addEventListener('click', function() {
            openImageModal(this.src, this.alt);
        });
    });

    document.querySelector('.close-image-modal').addEventListener('click', closeImageModal);
    document.getElementById('imageModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeImageModal();
        }
    });
}

// Setup modal links
function setupModalLinks() {
    // Footer links that should open modals
    document.querySelectorAll('.footer-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const modal = document.getElementById(targetId);
            if (modal) {
                e.preventDefault();
                modal.style.display = 'flex';
            }
        });
    });

    // Close buttons in modals
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.closest('.modal').style.display = 'none';
        });
    });

    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
}

// Setup Intersection Observer for animations
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.slide-in, .fade-in').forEach(element => {
        observer.observe(element);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCart();
    showCartNotification('Товар додано до кошика', 'success');
    
    // Animation
    const button = document.querySelector(`.add-to-cart[data-id="${productId}"]`);
    button.innerHTML = '<i class="fas fa-check"></i> Додано';
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-cart-plus"></i> Купити';
    }, 1000);

    // Pulse cart icon
    cartIcon.classList.add('pulse');
    setTimeout(() => {
        cartIcon.classList.remove('pulse');
    }, 1000);
    
    // Show cart dropdown
    cartDropdown.classList.add('show');
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showCartNotification('Товар видалено з кошика', 'warning');
}

// Update product quantity
function updateQuantity(productId, isIncrease) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    if (isIncrease) {
        item.quantity += 1;
    } else {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(productId);
            return;
        }
    }
    
    updateCart();
}

// Update cart UI
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartIcon.textContent = totalItems;

    // Update cart dropdown
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Кошик порожній</p>';
        cartTotalElement.innerHTML = `
            <span>Всього:</span>
            <span>0 ₴</span>
        `;
    } else {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} ₴</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn">+</button>
                    </div>
                </div>
                <div class="remove-item" data-id="${item.id}">
                    <i class="fas fa-times"></i>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        
        cartTotalElement.innerHTML = `
            <span>Всього:</span>
            <span>${total.toFixed(2)} ₴</span>
        `;
    }

    // Update order summary
    updateOrderSummary();
}

// Update order summary
function updateOrderSummary() {
    if (cart.length === 0) {
        orderSummaryItems.innerHTML = '<p>Кошик порожній</p>';
        orderSummaryTotal.innerHTML = `
            <span>Всього:</span>
            <span>0 ₴</span>
        `;
    } else {
        orderSummaryItems.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <span>${item.title} × ${item.quantity}</span>
                <span>${itemTotal.toFixed(2)} ₴</span>
            `;
            orderSummaryItems.appendChild(orderItem);
        });
        
        orderSummaryTotal.innerHTML = `
            <span>Всього:</span>
            <span>${total.toFixed(2)} ₴</span>
        `;
    }
}

// Search products
function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
    
    if (searchTerm === '') {
        productCards.forEach(card => {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
        });
    }
}

// Submit order form
function submitOrder(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        showCartNotification('Ваш кошик порожній', 'error');
        return;
    }
    
    const name = document.getElementById('order-name').value;
    const phone = document.getElementById('order-phone').value;
    const city = document.getElementById('order-city').value;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    showCartNotification(`Дякуємо за замовлення, ${name}! Ваше замовлення на суму ${total.toFixed(2)} ₴ буде доставлено до ${city}. Наш менеджер зв'яжеться з вами за номером ${phone} для підтвердження.`, 'success');
    
    // Reset form and cart
    this.reset();
    cart = [];
    updateCart();
}

// Submit contact form
function submitContactForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    
    showCartNotification(`Дякуємо за ваше повідомлення, ${name || 'шановний клієнте'}! Ми зв'яжемося з вами найближчим часом.`, 'success');
    this.reset();
}


// Set rating stars
function setRatingStars(rating) {
    const stars = document.querySelectorAll('.rating-input i');
    stars.forEach(star => {
        star.classList.remove('active');
        if (parseInt(star.getAttribute('data-rating')) <= rating) {
            star.classList.add('active');
        }
    });
}

// Reset rating stars
function resetRatingStars() {
    document.querySelectorAll('.rating-input i').forEach(star => {
        star.classList.remove('active');
    });
}

// Show cart notification
function showCartNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `cart-notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Open image modal
function openImageModal(src, alt) {
    const modal = document.getElementById('imageModal');
    const img = document.getElementById('expandedImage');
    
    img.src = src;
    img.alt = alt;
    modal.classList.add('show');
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

// Close image modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    
    // Restore scrolling
    document.body.style.overflow = 'auto';
}

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});
// Registration form submission
document.getElementById('registration-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
    
    if (password !== confirmPassword) {
        showCartNotification('Пароли не совпадают', 'error');
        return;
    }
    
    // Here you would typically send data to server
    showCartNotification(`Спасибо за регистрацию, ${name}! На ваш email отправлено письмо с подтверждением.`, 'success');
    this.reset();
});
// Slider functionality
function initSlider() {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    const dotsContainer = document.getElementById('slide-dots');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slide-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    // Update slider position
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        document.querySelectorAll('.slide-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentSlide = (index + slideCount) % slideCount;
        updateSlider();
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', initSlider);
// Counter animation
function initCounters() {
    const counters = document.querySelectorAll('.counter-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(initCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Start counters when section is visible
const counterSection = document.querySelector('.counter-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            initCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (counterSection) {
    observer.observe(counterSection);
}
document.addEventListener('DOMContentLoaded', function() {
    // Елементи
    const reviewForm = document.getElementById('review-form');
    const reviewsList = document.getElementById('reviews-list');
    const avatarUpload = document.getElementById('avatar-upload');
    const avatarPreview = document.getElementById('avatar-preview');
    const removeAvatarBtn = document.getElementById('remove-avatar');
    const addPhotosBtn = document.getElementById('add-photos-btn');
    const photoUpload = document.getElementById('review-photos');
    const photoPreview = document.getElementById('photo-preview');
    const ratingStars = document.querySelectorAll('.rating-input i');
    
    // Модальне вікно для фотографій
    const imageModal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close-image-modal');
    
    // Дані
    let selectedRating = 0;
    let avatarFile = null;
    let uploadedPhotos = [];
    
    // ===== 1. Аватар =====
    avatarUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file && file.type.match('image.*')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                avatarFile = e.target.result;
                avatarPreview.innerHTML = `<img src="${avatarFile}" alt="Аватар" style="object-fit: cover;">`;
            };
            reader.readAsDataURL(file);
        }
    });
    
    removeAvatarBtn.addEventListener('click', function() {
        avatarFile = null;
        avatarUpload.value = '';
        avatarPreview.innerHTML = '<div class="initials">?</div>';
    });
    
    // ===== 2. Фото =====
    addPhotosBtn.addEventListener('click', function() {
        photoUpload.click();
    });
    
    photoUpload.addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        
        // Обмеження до 5 фото
        if (files.length + uploadedPhotos.length > 5) {
            alert('Максимум 5 фото!');
            return;
        }
        
        files.forEach((file, index) => {
            if (file.type.match('image.*')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    uploadedPhotos.push({
                        id: Date.now() + index,
                        src: e.target.result
                    });
                    updatePhotoPreview();
                };
                reader.readAsDataURL(file);
            }
        });
    });
    
    // Видалення фото
    photoPreview.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-photo')) {
            const photoId = parseInt(e.target.closest('.photo-preview-item').getAttribute('data-id'));
            uploadedPhotos = uploadedPhotos.filter(photo => photo.id !== photoId);
            updatePhotoPreview();
        }
    });
    
    function updatePhotoPreview() {
        photoPreview.innerHTML = '';
        uploadedPhotos.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-preview-item';
            photoItem.setAttribute('data-id', photo.id);
            photoItem.innerHTML = `
                <img src="${photo.src}" alt="Фото">
                <span class="remove-photo">&times;</span>
            `;
            photoPreview.appendChild(photoItem);
        });
    }
    
    // ===== 3. Рейтинг =====
    ratingStars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = parseInt(this.getAttribute('data-rating'));
            updateRatingStars();
            document.getElementById('rating-error').style.display = 'none';
        });
        
        star.addEventListener('mouseover', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            highlightStars(rating);
        });
        
        star.addEventListener('mouseout', function() {
            if (selectedRating > 0) {
                highlightStars(selectedRating);
            } else {
                resetRatingStars();
            }
        });
    });
    
    function highlightStars(rating) {
        ratingStars.forEach(star => {
            const starRating = parseInt(star.getAttribute('data-rating'));
            if (starRating <= rating) {
                star.classList.remove('far');
                star.classList.add('fas');
            } else {
                star.classList.remove('fas');
                star.classList.add('far');
            }
        });
    }
    
    function updateRatingStars() {
        ratingStars.forEach(star => {
            const rating = parseInt(star.getAttribute('data-rating'));
            if (rating <= selectedRating) {
                star.classList.remove('far');
                star.classList.add('fas', 'active');
            } else {
                star.classList.remove('fas', 'active');
                star.classList.add('far');
            }
        });
    }
    
    function resetRatingStars() {
        ratingStars.forEach(star => {
            star.classList.remove('fas', 'active');
            star.classList.add('far');
        });
    }
    
    // ===== 4. Відправка форми =====
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Отримання даних
        const name = document.getElementById('review-name').value.trim();
        const text = document.getElementById('review-text').value.trim();
        let isValid = true;
        
        // Валідація
        if (!name) {
            document.getElementById('name-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('name-error').style.display = 'none';
        }
        
        if (!selectedRating) {
            document.getElementById('rating-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('rating-error').style.display = 'none';
        }
        
        if (!text) {
            document.getElementById('text-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('text-error').style.display = 'none';
        }
        
        if (!isValid) return;
        
        // Створення відгуку
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-card';
        
        // Дата
        const now = new Date();
        const dateStr = `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getFullYear()}`;
        
        // Рейтинг (зірки)
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            starsHtml += `<i class="${i <= selectedRating ? 'fas' : 'far'} fa-star"></i>`;
        }
        
        // Аватар або ініціали
        let avatarHtml = avatarFile 
            ? `<img src="${avatarFile}" alt="${name}" style="object-fit: cover;">` 
            : `<div class="initials">${name.charAt(0).toUpperCase()}</div>`;
        
        // Фото (якщо є)
        let photosHtml = '';
        if (uploadedPhotos.length > 0) {
            photosHtml = '<div class="review-photos">';
            uploadedPhotos.forEach(photo => {
                photosHtml += `<img src="${photo.src}" class="review-photo">`;
            });
            photosHtml += '</div>';
        }
        
        // HTML відгуку
        reviewItem.innerHTML = `
            <div class="review-header">
                <div class="review-avatar">${avatarHtml}</div>
                <div>
                    <div class="review-author">${name}</div>
                    <div class="review-date">${dateStr}</div>
                </div>
            </div>
            <div class="review-rating">${starsHtml}</div>
            <div class="review-text">${text}</div>
            ${photosHtml}
        `;
        
        // Додавання відгуку
        reviewsList.prepend(reviewItem);
        
        // Анімація нового відгуку
        reviewItem.style.opacity = '0';
        reviewItem.style.transform = 'translateY(20px)';
        setTimeout(() => {
            reviewItem.style.animation = 'fadeInUp 0.6s forwards';
        }, 10);
        
        // Скидання форми
        reviewForm.reset();
        selectedRating = 0;
        updateRatingStars();
        avatarFile = null;
        avatarPreview.innerHTML = '<div class="initials">?</div>';
        uploadedPhotos = [];
        photoPreview.innerHTML = '';
        photoUpload.value = '';
        
        // Сповіщення
        showNotification('Дякуємо за ваш відгук! Він був успішно доданий.');
    });
    
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // ===== 5. Модальне вікно для фотографій =====
    // Обробник для фотографій у відгуках
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('review-photo')) {
            modalImg.src = e.target.src;
            imageModal.classList.add('show');
        }
    });
    
    // Закриття модального вікна
    closeModal.addEventListener('click', function() {
        imageModal.classList.remove('show');
    });
    
    imageModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('show');
        }
    });
    
    // Обробник для фотографій у формі перед відправкою
    photoPreview.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG') {
            modalImg.src = e.target.src;
            imageModal.classList.add('show');
        }
    });
});