document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('notify-form');
    const formMessage = document.getElementById('form-message');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        
        // Simulate form submission
        formMessage.textContent = 'Submitting...';
        formMessage.className = 'form-message';
        
        // Simulate API call with timeout
        setTimeout(() => {
            // Email validation (basic)
            if (!isValidEmail(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.className = 'form-message error';
                return;
            }
            
            // Success response
            formMessage.textContent = 'Thank you! We\'ll notify you when the site is back online.';
            formMessage.className = 'form-message success';
            form.reset();
        }, 1000);
    });
    
    // Basic email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});