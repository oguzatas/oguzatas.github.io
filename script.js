// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = navbar.offsetHeight;
                const offsetTop = target.offsetTop - navbarHeight - 20; // Account for fixed navbar + extra spacing
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlight
    const sections = document.querySelectorAll('section[id]');
    const navLinksArray = Array.from(navLinks);

    function highlightActiveSection() {
        const navbarHeight = navbar.offsetHeight;
        const scrollPos = window.scrollY + navbarHeight + 50;

        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos <= bottom) {
                navLinksArray.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.class-card, .event-card, .gallery-item, .contact-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            
            for (let [key, value] of formData.entries()) {
                formObject[key] = value;
            }

            // Basic form validation
            if (!formObject.name || !formObject.email || !formObject.interest) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formObject.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            showLoadingState();
            
            setTimeout(() => {
                hideLoadingState();
                showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                contactForm.reset();
            }, 2000);
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10000;
            padding: 1rem 1.5rem;
            border-radius: 5px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            max-width: 400px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-family: 'Open Sans', sans-serif;
        `;

        // Set background color based on type
        if (type === 'success') {
            notification.style.background = '#4CAF50';
            notification.style.color = 'white';
        } else if (type === 'error') {
            notification.style.background = '#f44336';
            notification.style.color = 'white';
        } else {
            notification.style.background = '#2196F3';
            notification.style.color = 'white';
        }

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // Loading state for form submission
    function showLoadingState() {
        const submitBtn = document.querySelector('#contact-form button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        }
    }

    function hideLoadingState() {
        const submitBtn = document.querySelector('#contact-form button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
        }
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Class card hover effects
    const classCards = document.querySelectorAll('.class-card');
    classCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Gallery lightbox functionality (simple version)
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // For now, just show an alert. In a real implementation,
            // you'd open a proper lightbox modal
            showNotification('Gallery lightbox would open here!', 'info');
        });
    });

    // Scroll to top functionality
    function createScrollToTopButton() {
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--primary-color);
            color: white;
            border: none;
            cursor: pointer;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        `;

        document.body.appendChild(scrollBtn);

        // Show/hide scroll button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.visibility = 'visible';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.visibility = 'hidden';
            }
        });

        // Scroll to top functionality
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Hover effects
        scrollBtn.addEventListener('mouseenter', function() {
            this.style.background = 'var(--secondary-color)';
            this.style.color = 'var(--dark-color)';
            this.style.transform = 'scale(1.1)';
        });

        scrollBtn.addEventListener('mouseleave', function() {
            this.style.background = 'var(--primary-color)';
            this.style.color = 'white';
            this.style.transform = 'scale(1)';
        });
    }

    createScrollToTopButton();

    // Add loading animation to cards on page load
    setTimeout(() => {
        const cards = document.querySelectorAll('.class-card, .event-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('loading');
            }, index * 100);
        });
    }, 500);

    // Typing effect for hero title (optional enhancement)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Apply typing effect to hero title (uncomment if desired)
    // const heroTitle = document.querySelector('.hero-title');
    // if (heroTitle) {
    //     const originalText = heroTitle.textContent;
    //     typeWriter(heroTitle, originalText, 80);
    // }

    // Performance optimization: debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll-intensive functions
    const debouncedScrollHandler = debounce(() => {
        highlightActiveSection();
    }, 10);

    window.addEventListener('scroll', debouncedScrollHandler);

    // Accessibility improvements
    document.addEventListener('keydown', function(e) {
        // ESC key to close mobile menu
        if (e.key === 'Escape') {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Focus management for mobile menu
    mobileMenu.addEventListener('click', function() {
        if (navMenu.classList.contains('active')) {
            // Focus first nav link when menu opens
            const firstNavLink = navMenu.querySelector('.nav-link');
            if (firstNavLink) {
                setTimeout(() => firstNavLink.focus(), 100);
            }
        }
    });

    console.log('THFA Website initialized successfully!');
});

// Additional utility functions
function isMobile() {
    return window.innerWidth <= 768;
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Export functions for external use if needed
window.THFAWebsite = {
    isMobile,
    isElementInViewport
}; 