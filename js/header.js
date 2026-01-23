// header.js - Shared header component for Verified Remote Job Boards
// Edit this file to update the header across all pages

document.addEventListener('DOMContentLoaded', function() {
    const headerHTML = `
    <header>
        <nav>
            <a href="/" class="logo">
                <img src="/images/logo.png" alt="Verified Remote Job Boards Logo">
            </a>
            <button class="mobile-menu-toggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle">Job Boards <span class="dropdown-arrow">▼</span></a>
                    <ul class="dropdown-menu">
                        <li class="dropdown-header">Top Rated</li>
                        <li><a href="/remote-job-assistant/">Remote Job Assistant</a></li>
                        <li><a href="/flexjobs/">FlexJobs</a></li>
                        <li><a href="/we-work-remotely/">We Work Remotely</a></li>
                        <li class="dropdown-divider"></li>
                        <li class="dropdown-header">All Verified Boards</li>
                        <li><a href="/remote-co/">Remote.co</a></li>
                        <li><a href="/dailyremote/">DailyRemote</a></li>
                        <li><a href="/jobspresso/">Jobspresso</a></li>
                        <li><a href="/justremote/">JustRemote</a></li>
                        <li><a href="/nodesk/">NoDesk</a></li>
                        <li><a href="/remote-ok/">Remote OK</a></li>
                        <li><a href="/remote-rocketship/">Remote Rocketship</a></li>
                        <li><a href="/remotive/">Remotive</a></li>
                        <li><a href="/working-nomads/">Working Nomads</a></li>
                    </ul>
                </li>
                <li><a href="/blog/">Blog</a></li>
                <li><a href="/about/">About</a></li>
                <li><a href="/verification-process/">Verification Process</a></li>
                <li><a href="/submit/">Submit a Job Board</a></li>
                <li><a href="/contact/">Contact</a></li>
            </ul>
        </nav>
    </header>
    `;

    // Insert header at the beginning of body or replace existing header placeholder
    const headerPlaceholder = document.getElementById('site-header');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    } else {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }

    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Dropdown functionality for desktop (hover) and mobile (click)
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        // Prevent default link behavior on dropdown toggle
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // On mobile, toggle the dropdown
            if (window.innerWidth <= 768) {
                dropdown.classList.toggle('active');
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    });
});
