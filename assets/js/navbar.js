document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("navbar").innerHTML = `
    
    <header class="sticky-top bg-white shadow-sm py-2">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
    
                <a class="navbar-brand d-flex align-items-center gap-2 fw-bold fs-3 text-primary"
                    href="index.html"
                    style="font-family: 'Merriweather', serif;">
                    <svg class="brand-mark" width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="FurniRent logo">
                        <rect x="0" y="0" width="42" height="42" rx="12" fill="#3F51B5"/>
                        <rect x="7" y="17" width="5" height="11" rx="2" fill="#ffffff"/>
                        <rect x="30" y="17" width="5" height="11" rx="2" fill="#ffffff"/>
                        <rect x="9" y="8" width="24" height="11" rx="4" fill="#ffffff"/>
                        <rect x="8" y="19" width="26" height="8" rx="3" fill="#ffffff"/>
                        <circle cx="31.5" cy="10.5" r="2.6" fill="#FFC107"/>
                    </svg>
                    <span class="brand-word">Furni<span class="text-warning">Rent</span></span>
                </a>
    
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainMenu"
                    aria-label="Toggle navigation">
    
                    <span class="navbar-toggler-icon"></span>
    
                </button>
    
                <div class="collapse navbar-collapse" id="mainMenu">
    
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
    
                        <li class="nav-item dropdown">
    
                            <a class="nav-link dropdown-toggle fw-semibold"
                                href="index.html"
                                id="homeNavDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
    
                                Home
    
                            </a>
    
                            <ul class="dropdown-menu" aria-labelledby="homeNavDropdown">
    
                                <li>
    
                                    <a class="dropdown-item"
                                        href="index.html">
    
                                        <i class="fa-solid fa-house me-2 text-primary"></i>
                                        Home 1
    
                                    </a>
    
                                </li>
    
                                <li>
    
                                    <a class="dropdown-item"
                                        href="home-2.html">
    
                                        <i class="fa-solid fa-house-chimney me-2 text-primary"></i>
                                        Home 2
    
                                    </a>
    
                                </li>
    
                            </ul>
    
                        </li>
    
                        <li class="nav-item">
    
                            <a class="nav-link fw-semibold"
                                href="about.html">
    
                                About
    
                            </a>
    
                        </li>
    
                        <li class="nav-item">
    
                            <a class="nav-link fw-semibold"
                                href="catalog.html">
    
                                Catalog
    
                            </a>
    
                        </li>
    
                        <li class="nav-item">
    
                            <a class="nav-link fw-semibold"
                                href="pricing.html">
    
                                Pricing
    
                            </a>
    
                        </li>
    
                        <li class="nav-item">
    
                            <a class="nav-link fw-semibold"
                                href="services.html">
    
                                Services
    
                            </a>
    
                        </li>
    
                        <li class="nav-item">
    
                            <a class="nav-link fw-semibold"
                                href="blog.html">
    
                                Blog
    
                            </a>
    
                        </li>
    
                        <li class="nav-item">
    
                            <a class="nav-link fw-semibold"
                                href="contact.html">
    
                                Contact
    
                            </a>
    
                        </li>
    
                    </ul>
    
                    <div class="d-flex align-items-center gap-2">
    
                        <button
                            class="btn btn-light rounded-circle border nav-icon-btn"
                            id="themeBtn"
                            title="Toggle Dark Mode"
                            aria-label="Toggle Dark Mode">
    
                            <i class="fa-solid fa-moon text-dark"></i>
    
                        </button>
    
                        <button
                            class="btn btn-light rounded-circle border nav-icon-btn"
                            id="rtlBtn"
                            title="Switch to RTL"
                            aria-label="Switch to RTL layout">
    
                            <span class="rtl-btn-label text-dark fw-bold">RTL</span>
    
                        </button>
    
                        <span
                            id="authButtons"
                            class="d-flex align-items-center gap-2">
    
                            <a href="login.html"
                                class="btn btn-outline-primary fw-semibold nav-cta-btn">
    
                                Login
    
                            </a>
    
                            <a href="register.html"
                                class="btn btn-warning fw-semibold text-dark nav-cta-btn">
    
                                Sign Up
    
                            </a>
    
                        </span>
    
                    </div>
    
                </div>
    
            </div>
    
        </nav>
    
    </header>
    
    `;

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".navbar .nav-link").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        }

    });

    document.querySelectorAll(".dropdown-item").forEach(item => {

        const href = item.getAttribute("href");

        if (href === currentPage) {

            item.classList.add("active");

            const dropdown = item.closest(".dropdown");

            if (dropdown) {

                dropdown.querySelector(".dropdown-toggle")
                    .classList.add("active");

            }

        }

    });

    // Re-initialize Bootstrap dropdowns
    document.querySelectorAll('.dropdown-toggle').forEach(el => {
        new bootstrap.Dropdown(el);
    });

    // Theme toggle, RTL toggle, and the logged-in auth dropdown are all
    // wired up in main.js — but main.js's own DOMContentLoaded listener
    // runs BEFORE this one (its <script> tag comes first in every page),
    // so those elements don't exist yet when it first runs. Fire this
    // event now that the navbar markup is actually in the DOM so main.js
    // can safely bind to it.
    document.dispatchEvent(new Event("navbar:ready"));

});