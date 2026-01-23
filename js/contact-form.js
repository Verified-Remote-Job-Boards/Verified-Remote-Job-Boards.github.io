// Contact Form Component
// Add <div id="contact-form"></div> to your contact page
// Then include this script: <script src="/js/contact-form.js"></script>

document.addEventListener('DOMContentLoaded', function() {
    const contactFormContainer = document.getElementById('contact-form');
    
    if (!contactFormContainer) return;
    
    // Formspree form ID (same as review form)
    const formspreeId = 'mkojjjjg';
    
    contactFormContainer.innerHTML = `
        <div class="contact-form-component">
            <form action="https://formspree.io/f/${formspreeId}" method="POST" class="contact-form">
                <input type="hidden" name="_subject" value="New Contact Form Submission">
                <input type="hidden" name="form_type" value="Contact Form">
                
                <div class="form-group">
                    <label for="contact-name">Your Name <span class="required">*</span></label>
                    <input type="text" id="contact-name" name="name" placeholder="John Smith" required maxlength="100">
                </div>
                
                <div class="form-group">
                    <label for="contact-email">Email Address <span class="required">*</span></label>
                    <input type="email" id="contact-email" name="email" placeholder="your@email.com" required>
                    <span class="field-hint">We'll never share your email with anyone else.</span>
                </div>
                
                <div class="form-group">
                    <label for="contact-subject">Subject <span class="required">*</span></label>
                    <select id="contact-subject" name="subject" required>
                        <option value="">Select a topic...</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Suggest a Job Board">Suggest a Job Board</option>
                        <option value="Report an Issue">Report an Issue</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="contact-message">Message <span class="required">*</span></label>
                    <textarea id="contact-message" name="message" rows="6" placeholder="How can we help you?" required minlength="20" maxlength="5000"></textarea>
                    <span class="field-hint char-count">Minimum 20 characters</span>
                </div>
                
                <button type="submit" class="submit-contact-btn">
                    Send Message
                    <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </button>
            </form>
            
            <!-- Success Message -->
            <div class="contact-success-message" style="display: none;">
                <svg viewBox="0 0 24 24" width="48" height="48"><path fill="#10b981" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
            </div>
        </div>
    `;
    
    // Character count for textarea
    const messageText = contactFormContainer.querySelector('#contact-message');
    const charCount = contactFormContainer.querySelector('.char-count');
    
    messageText.addEventListener('input', () => {
        const length = messageText.value.length;
        if (length < 20) {
            charCount.textContent = `${20 - length} more characters needed`;
            charCount.classList.add('warning');
        } else {
            charCount.textContent = `${length}/5000 characters`;
            charCount.classList.remove('warning');
        }
    });
    
    // Form submission
    const form = contactFormContainer.querySelector('form');
    const successMessage = contactFormContainer.querySelector('.contact-success-message');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-contact-btn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Hide form, show success
                form.style.display = 'none';
                successMessage.style.display = 'block';
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            alert('There was an error sending your message. Please try again.');
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>';
        }
    });
});
