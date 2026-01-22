// footer.js - Shared footer component for Verified Remote Job Boards
// Edit this file to update the footer across all pages

document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>Verified Remote Job Boards</h3>
                <p>Independent verification and review of remote job boards to help you find legitimate opportunities.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/verification-process/">Verification Process</a></li>
                    <li><a href="/about/">About</a></li>
                    <li><a href="/blog/">Blog</a></li>
                    <li><a href="/contact/">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Top Rated Boards</h3>
                <ul>
                    <li><a href="/remote-job-assistant/">Remote Job Assistant</a></li>
                    <li><a href="/flexjobs/">FlexJobs</a></li>
                    <li><a href="/we-work-remotely/">We Work Remotely</a></li>
                    <li><a href="/remote-co/">Remote.co</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Verified Remote Job Boards. All rights reserved.</p>
        </div>
    </footer>
    `;

    // Insert footer at the end of body or replace existing footer placeholder
    const footerPlaceholder = document.getElementById('site-footer');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    } else {
        // Find and replace existing footer, or append to body
        const existingFooter = document.querySelector('footer');
        if (existingFooter) {
            existingFooter.outerHTML = footerHTML;
        } else {
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }
    }
});
