// Review Form Component
// Add <div id="review-form"></div> to any review page
// Then include this script: <script src="/js/review-form.js"></script>

document.addEventListener('DOMContentLoaded', function() {
    const reviewFormContainer = document.getElementById('review-form');
    
    if (!reviewFormContainer) return;
    
    // Formspree form ID
    const formspreeId = 'mkojjjjg';
    
    // Job boards list for dropdown
    const jobBoards = [
        'Remote Job Assistant',
        'FlexJobs',
        'We Work Remotely',
        'Remote.co',
        'DailyRemote',
        'Jobspresso',
        'JustRemote',
        'NoDesk',
        'Remote OK',
        'RemoteRocketship',
        'Remotive',
        'Working Nomads'
    ];
    
    // Generate dropdown options
    const jobBoardOptions = jobBoards.map(board => 
        `<option value="${board}">${board}</option>`
    ).join('');
    
    reviewFormContainer.innerHTML = `
        <div class="review-submission-component">
            <div class="review-submission-header">
                <h3>Share Your Experience</h3>
                <p>Used one of these platforms? Help others make informed decisions by sharing your honest review.</p>
            </div>
            
            <div class="review-submission-body">
                <!-- Step 1: Star Rating Selection -->
                <div class="rating-selection-step">
                    <label class="rating-prompt">How would you rate your experience?</label>
                    <div class="star-rating-selector" role="radiogroup" aria-label="Rating">
                        <button type="button" class="star-btn" data-rating="1" aria-label="1 star">
                            <svg viewBox="0 0 24 24" class="star-icon"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        </button>
                        <button type="button" class="star-btn" data-rating="2" aria-label="2 stars">
                            <svg viewBox="0 0 24 24" class="star-icon"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        </button>
                        <button type="button" class="star-btn" data-rating="3" aria-label="3 stars">
                            <svg viewBox="0 0 24 24" class="star-icon"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        </button>
                        <button type="button" class="star-btn" data-rating="4" aria-label="4 stars">
                            <svg viewBox="0 0 24 24" class="star-icon"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        </button>
                        <button type="button" class="star-btn" data-rating="5" aria-label="5 stars">
                            <svg viewBox="0 0 24 24" class="star-icon"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        </button>
                    </div>
                    <div class="rating-label-text"></div>
                </div>
                
                <!-- Step 2: Review Form (revealed after rating) -->
                <form action="https://formspree.io/f/${formspreeId}" method="POST" class="review-form-fields" style="display: none;">
                    <input type="hidden" name="rating" id="rating-input" value="">
                    <input type="hidden" name="_subject" value="New Job Board Review Submission">
                    
                    <div class="form-group">
                        <label for="job-board">Which platform are you reviewing? <span class="required">*</span></label>
                        <select id="job-board" name="job_board" required>
                            <option value="">Select a job board...</option>
                            ${jobBoardOptions}
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="review-title">Review Title</label>
                        <input type="text" id="review-title" name="review_title" placeholder="Summarize your experience in a few words" maxlength="100">
                        <span class="field-hint">Optional but recommended</span>
                    </div>
                    
                    <div class="form-group">
                        <label for="review-text">Your Review <span class="required">*</span></label>
                        <textarea id="review-text" name="review_text" rows="5" placeholder="What did you like or dislike? How was your experience finding jobs on this platform?" required minlength="50" maxlength="2000"></textarea>
                        <span class="field-hint char-count">Minimum 50 characters</span>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="reviewer-name">Your Name <span class="required">*</span></label>
                            <input type="text" id="reviewer-name" name="reviewer_name" placeholder="e.g., Sarah M." required maxlength="50">
                            <span class="field-hint">Displayed publicly with your review</span>
                        </div>
                        
                        <div class="form-group">
                            <label for="reviewer-location">Location</label>
                            <input type="text" id="reviewer-location" name="reviewer_location" placeholder="e.g., Austin, TX" maxlength="50">
                            <span class="field-hint">Optional</span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="reviewer-email">
                            <svg class="lock-icon" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                            Email Address <span class="required">*</span>
                        </label>
                        <input type="email" id="reviewer-email" name="email" placeholder="your@email.com" required>
                        <span class="field-hint">For verification only — never published or shared</span>
                    </div>
                    
                    <div class="form-footer">
                        <p class="moderation-notice">
                            <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                            All reviews are moderated before publishing to ensure authenticity.
                        </p>
                        <button type="submit" class="submit-review-btn">
                            Submit Review
                            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    </div>
                </form>
                
                <!-- Success Message (shown after submission) -->
                <div class="review-success-message" style="display: none;">
                    <svg viewBox="0 0 24 24" width="48" height="48"><path fill="#10b981" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    <h4>Thank you for your review!</h4>
                    <p>Your feedback has been submitted and will be reviewed by our team. Approved reviews typically appear within 24-48 hours.</p>
                </div>
            </div>
        </div>
    `;
    
    // Rating labels
    const ratingLabels = {
        1: 'Poor',
        2: 'Fair', 
        3: 'Average',
        4: 'Good',
        5: 'Excellent'
    };
    
    // Star rating interaction
    const starBtns = reviewFormContainer.querySelectorAll('.star-btn');
    const ratingInput = reviewFormContainer.querySelector('#rating-input');
    const ratingLabelText = reviewFormContainer.querySelector('.rating-label-text');
    const reviewFormFields = reviewFormContainer.querySelector('.review-form-fields');
    let selectedRating = 0;
    
    starBtns.forEach((btn, index) => {
        // Hover effect
        btn.addEventListener('mouseenter', () => {
            highlightStars(index + 1);
            ratingLabelText.textContent = ratingLabels[index + 1];
        });
        
        // Click to select
        btn.addEventListener('click', () => {
            selectedRating = index + 1;
            ratingInput.value = selectedRating;
            highlightStars(selectedRating);
            ratingLabelText.textContent = ratingLabels[selectedRating];
            
            // Mark as selected
            starBtns.forEach((b, i) => {
                b.classList.toggle('selected', i < selectedRating);
            });
            
            // Reveal the form
            reviewFormFields.style.display = 'block';
            
            // Smooth scroll to form
            setTimeout(() => {
                reviewFormFields.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        });
    });
    
    // Reset stars on mouse leave (unless selected)
    reviewFormContainer.querySelector('.star-rating-selector').addEventListener('mouseleave', () => {
        highlightStars(selectedRating);
        ratingLabelText.textContent = selectedRating ? ratingLabels[selectedRating] : '';
    });
    
    function highlightStars(count) {
        starBtns.forEach((btn, index) => {
            btn.classList.toggle('highlighted', index < count);
        });
    }
    
    // Character count for textarea
    const reviewText = reviewFormContainer.querySelector('#review-text');
    const charCount = reviewFormContainer.querySelector('.char-count');
    
    reviewText.addEventListener('input', () => {
        const length = reviewText.value.length;
        if (length < 50) {
            charCount.textContent = `${50 - length} more characters needed`;
            charCount.classList.add('warning');
        } else {
            charCount.textContent = `${length}/2000 characters`;
            charCount.classList.remove('warning');
        }
    });
    
    // Form submission
    const form = reviewFormContainer.querySelector('form');
    const successMessage = reviewFormContainer.querySelector('.review-success-message');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate rating selected
        if (!selectedRating) {
            alert('Please select a star rating');
            return;
        }
        
        const submitBtn = form.querySelector('.submit-review-btn');
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
                reviewFormContainer.querySelector('.rating-selection-step').style.display = 'none';
                reviewFormFields.style.display = 'none';
                successMessage.style.display = 'block';
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            alert('There was an error submitting your review. Please try again.');
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Submit Review <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>';
        }
    });
});
