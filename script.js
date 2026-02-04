document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips for all elements with data-tooltip attribute
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'absolute z-50 bg-gray-800 text-white text-xs rounded p-2 shadow-lg';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 5}px`;
            tooltip.style.left = `${rect.left + rect.width/2 - tooltip.offsetWidth/2}px`;
            
            this._tooltip = tooltip;
        });
        
        el.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                this._tooltip.remove();
                this._tooltip = null;
            }
        });
    });

    // Simulate game library count
    const libraryCount = document.getElementById('library-count');
    if (libraryCount) {
        setTimeout(() => {
            libraryCount.textContent = '127';
        }, 1000);
    }

    // Cart functionality
    const cartButton = document.getElementById('cart-button');
    if (cartButton) {
        cartButton.addEventListener('click', function() {
            const cartCount = this.querySelector('.cart-count');
            let count = parseInt(cartCount.textContent) || 0;
            cartCount.textContent = count + 1;
            cartCount.classList.remove('hidden');
            
            // Add animation
            cartCount.classList.add('animate-ping');
            setTimeout(() => {
                cartCount.classList.remove('animate-ping');
            }, 500);
        });
    }

    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.parentElement.classList.add('ring-2', 'ring-steam-400');
        });
        
        searchInput.addEventListener('blur', function() {
            this.parentElement.classList.remove('ring-2', 'ring-steam-400');
        });
    }
});

// Game rating stars
function renderStars(rating) {
    const stars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let html = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= stars) {
            html += '<span class="text-yellow-400">★</span>';
        } else if (i === stars + 1 && halfStar) {
            html += '<span class="text-yellow-400">½</span>';
        } else {
            html += '<span class="text-gray-400">★</span>';
        }
    }
    
    return html;
}

// Apply star ratings to all elements with data-rating attribute
document.querySelectorAll('[data-rating]').forEach(el => {
    const rating = parseFloat(el.getAttribute('data-rating'));
    el.innerHTML = renderStars(rating);
});