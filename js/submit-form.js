// Submit Job Board Form Component
// Add <div id="submit-form"></div> to your submit page
// Then include this script: <script src="/js/submit-form.js"></script>

document.addEventListener('DOMContentLoaded', function() {
    const submitFormContainer = document.getElementById('submit-form');
    
    if (!submitFormContainer) return;
    
    // Formspree form ID (same as other forms)
    const formspreeId = 'mkojjjjg';
    
    submitFormContainer.innerHTML = `
        <div class="submit-form-component">
            <form action="https://formspree.io/f/${formspreeId}" method="POST" class="submit-form">
                <input type="hidden" name="_subject" value="New Job Board Submission for Review">
                <input type="hidden" name="form_type" value="Job Board Submission">
                
                <div class="form-section">
                    <h3>Job Board Information</h3>
                    
                    <div class="form-group">
                        <label for="board-name">Job Board Name <span class="required">*</span></label>
                        <input type="text" id="board-name" name="board_name" placeholder="e.g., RemoteJobs.com" required maxlength="100">
                    </div>
                    
                    <div class="form-group">
                        <label for="board-url">Website URL <span class="required">*</span></label>
                        <input type="url" id="board-url" name="board_url" placeholder="https://yourjobboard.com" required>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="board-focus">Primary Focus <span class="required">*</span></label>
                            <select id="board-focus" name="board_focus" required>
                                <option value="">Select focus area...</option>
                                <option value="All Remote Jobs">All Remote Jobs</option>
                                <option value="Tech & Engineering">Tech & Engineering</option>
                                <option value="Marketing & Sales">Marketing & Sales</option>
                                <option value="Design & Creative">Design & Creative</option>
                                <option value="Customer Support">Customer Support</option>
                                <option value="Writing & Content">Writing & Content</option>
                                <option value="Finance & Accounting">Finance & Accounting</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Education">Education</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="board-pricing">Pricing Model <span class="required">*</span></label>
                            <select id="board-pricing" name="board_pricing" required>
                                <option value="">Select pricing...</option>
                                <option value="Free for Job Seekers">Free for Job Seekers</option>
                                <option value="Paid Subscription">Paid Subscription</option>
                                <option value="Freemium">Freemium (Free + Paid tiers)</option>
                                <option value="Pay Per Application">Pay Per Application</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="board-description">Brief Description <span class="required">*</span></label>
                        <textarea id="board-description" name="board_description" rows="3" placeholder="What makes your job board unique? What types of remote jobs do you specialize in?" required minlength="50" maxlength="500"></textarea>
                        <span class="field-hint">50-500 characters</span>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="active-listings">Approximate Active Listings</label>
                            <select id="active-listings" name="active_listings">
                                <option value="">Select range...</option>
                                <option value="Under 100">Under 100</option>
                                <option value="100-500">100-500</option>
                                <option value="500-1,000">500-1,000</option>
                                <option value="1,000-5,000">1,000-5,000</option>
                                <option value="5,000-10,000">5,000-10,000</option>
                                <option value="10,000+">10,000+</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="year-founded">Year Founded</label>
                            <input type="number" id="year-founded" name="year_founded" placeholder="e.g., 2020" min="1990" max="2026">
                        </div>
                    </div>
                </div>
                
                <div class="form-section">
                    <h3>Your Information</h3>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="contact-name">Your Name <span class="required">*</span></label>
                            <input type="text" id="contact-name" name="contact_name" placeholder="John Smith" required maxlength="100">
                        </div>
                        
                        <div class="form-group">
                            <label for="contact-role">Your Role</label>
                            <input type="text" id="contact-role" name="contact_role" placeholder="e.g., Founder, Marketing Manager" maxlength="100">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-email">Email Address <span class="required">*</span></label>
                        <input type="email" id="contact-email" name="email" placeholder="your@email.com" required>
                        <span class="field-hint">We'll contact you here with our review decision.</span>
                    </div>
                </div>
                
                <div class="form-section">
                    <h3>Additional Information</h3>
                    
                    <div class="form-group">
                        <label for="additional-notes">Anything Else We Should Know?</label>
                        <textarea id="additional-notes" name="additional_notes" rows="3" placeholder="Special features, recent updates, press coverage, etc." maxlength="1000"></textarea>
                    </div>
                </div>
                
                <div class="form-footer">
                    <p class="submission-notice">
                        <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                        Submissions are reviewed within 5-7 business days. We'll email you with our decision or any follow-up questions.
                    </p>
                    <button type="submit" class="submit-board-btn">
                        Submit for Review
                        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    </button>
                </div>
            </form>
            
            <!-- Success Message -->
            <div class="submit-success-message" style="display: none;">
                <svg viewBox="0 0 24 24" width="56" height="56"><path fill="#10b981" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <h4>Submission Received!</h4>
                <p>Thank you for submitting your job board for review. Our editorial team will evaluate it against our 7-stage verification process and get back to you within 5-7 business days.</p>
                <a href="/" class="back-home-btn">← Back to Home</a>
            </div>
        </div>
    `;
    
    // Form submission
    const form = submitFormContainer.querySelector('form');
    const successMessage = submitFormContainer.querySelector('.submit-success-message');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-board-btn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Submitting...';
        
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
                // Scroll to top of success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            alert('There was an error submitting your job board. Please try again.');
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Submit for Review <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>';
        }
    });
});
