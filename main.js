AOS.init({
    once: true,
    offset: 100
});

const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.body;

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
    
    const icon = hamburger.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');

        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            body.classList.remove('no-scroll');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
});



const newsletterForm = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');

newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    emailInput.classList.remove('error-border', 'success-border', 'shake-anim');
    formMessage.classList.remove('show', 'error', 'success');

    void emailInput.offsetWidth;

    if (emailValue === '') {
        showValidationMessage('Please enter your email address.', 'error');
    } else if (!emailValue.match(emailPattern)) {
        showValidationMessage('Please enter a valid email address.', 'error');
    } else {
        showValidationMessage('Thank you for subscribing!', 'success');
        emailInput.value = '';
        
        setTimeout(() => {
            formMessage.classList.remove('show', 'success');
            emailInput.classList.remove('success-border');
            window.location.href = '404.html'
        }, 400);
    }
});

function showValidationMessage(message, type) {
    formMessage.textContent = message;
    
    if (type === 'error') {
        formMessage.classList.add('error', 'show');
        emailInput.classList.add('error-border', 'shake-anim');
    } else {
        formMessage.classList.add('success', 'show');
        emailInput.classList.add('success-border');
    }
}



// ==========================================
// ⏳ PREMIUM LOADER TIMEOUT (2 SECONDS)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("premium-loader");
    
    // Exactly 2 Seconds (2000 ms) delay
    setTimeout(() => {
        // Add hidden class to trigger CSS fade-out animation
        loader.classList.add("hidden");
        
        // Completely remove the loader from DOM after fade-out finishes (800ms)
        setTimeout(() => {
            loader.remove();
        }, 800);
        
    }, 2000); 
});