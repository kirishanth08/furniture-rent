document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("footer").innerHTML = `

<footer class="footer bg-dark text-white pt-5 pb-3">
    <div class="container pt-4">
        <div class="footer-cols-wrap mb-5">

            <div class="footer-col footer-col-brand">
                <a href="index.html"
                    class="footer-logo-link d-inline-flex align-items-center gap-2 text-decoration-none mb-3">
                    <svg width="36" height="36" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="FurniRent logo">
                        <rect x="0" y="0" width="42" height="42" rx="12" fill="#3F51B5"/>
                        <rect x="7" y="17" width="5" height="11" rx="2" fill="#ffffff"/>
                        <rect x="30" y="17" width="5" height="11" rx="2" fill="#ffffff"/>
                        <rect x="9" y="8" width="24" height="11" rx="4" fill="#ffffff"/>
                        <rect x="8" y="19" width="26" height="8" rx="3" fill="#ffffff"/>
                        <circle cx="31.5" cy="10.5" r="2.6" fill="#FFC107"/>
                    </svg>
                    <span class="brand-word fw-bold fs-3"
      style="font-family: 'Merriweather', serif; color:#3F51B5;">
    Furni<span class="text-warning">Rent</span>
</span>
                </a>

                <p class="text-white-50 mb-4">
                    Premium furniture rental solutions for students, professionals and families aiming for a beautiful home.
                </p>

                <div class="footer-social d-flex gap-3">

                    <a href="404.html"
                        aria-label="Facebook"
                        class="text-white bg-white bg-opacity-10 rounded-circle p-2 d-inline-flex justify-content-center align-items-center transition"
                        style="width:40px;height:40px;">
                        <i class="fab fa-facebook-f"></i>
                    </a>

                    <a href="404.html"
                        aria-label="Instagram"
                        class="text-white bg-white bg-opacity-10 rounded-circle p-2 d-inline-flex justify-content-center align-items-center transition"
                        style="width:40px;height:40px;">
                        <i class="fab fa-instagram"></i>
                    </a>

                    <a href="404.html"
                        aria-label="LinkedIn"
                        class="text-white bg-white bg-opacity-10 rounded-circle p-2 d-inline-flex justify-content-center align-items-center transition"
                        style="width:40px;height:40px;">
                        <i class="fab fa-linkedin-in"></i>
                    </a>

                    <a href="404.html"
                        aria-label="Twitter"
                        class="text-white bg-white bg-opacity-10 rounded-circle p-2 d-inline-flex justify-content-center align-items-center transition"
                        style="width:40px;height:40px;">
                        <i class="fab fa-x-twitter"></i>
                    </a>

                </div>
            </div>

            <div class="footer-col">

                <h5 class="fw-bold mb-3">
                    Company
                </h5>

                <ul class="footer-links list-unstyled text-white-50 lh-lg">

                    <li><a href="about.html" class="text-decoration-none text-white-50">About</a></li>

                    <li><a href="catalog.html" class="text-decoration-none text-white-50">Catalog</a></li>

                    <li><a href="pricing.html" class="text-decoration-none text-white-50">Pricing</a></li>

                    <li><a href="blog.html" class="text-decoration-none text-white-50">Blog</a></li>

                </ul>

            </div>

            <div class="footer-col">

                <h5 class="fw-bold mb-3">
                    Categories
                </h5>

                <ul class="footer-links list-unstyled text-white-50 lh-lg">

                    <li><a href="catalog.html?room=living-room" class="text-decoration-none text-white-50">Living Room</a></li>

                    <li><a href="catalog.html?room=bedroom" class="text-decoration-none text-white-50">Bedroom</a></li>

                    <li><a href="catalog.html?room=study" class="text-decoration-none text-white-50">Study</a></li>

                    <li><a href="catalog.html?room=dining" class="text-decoration-none text-white-50">Kitchen & Dining</a></li>

                    <li><a href="catalog.html?category=storage" class="text-decoration-none text-white-50">Storage</a></li>

                </ul>

            </div>

            <div class="footer-col">

                <h5 class="fw-bold mb-3">
                    Contact
                </h5>

                <ul class="footer-contact list-unstyled text-white-50 lh-lg">

                    <li>
                        <i class="fa-solid fa-location-dot me-2"></i>
                        Bangalore, India
                    </li>

                    <li>
                        <i class="fa-solid fa-phone me-2"></i>
                        +91 98765 43210
                    </li>

                    <li>
                        <i class="fa-solid fa-envelope me-2"></i>
                        support@furnirent.com
                    </li>

                </ul>

            </div>

        </div>

        <hr class="border-white border-opacity-25 mb-4">

        <div class="footer-bottom d-flex flex-wrap justify-content-between text-white-50 text-sm">

            <p class="mb-2 mb-md-0">
                © 2026 FurniRent. All Rights Reserved.
            </p>

            <div>

                <a href="#" class="text-decoration-none text-white-50 me-2">
                    Privacy Policy
                </a>

                |

                <a href="#" class="text-decoration-none text-white-50 ms-2">
                    Terms & Conditions
                </a>

            </div>

        </div>

    </div>

</footer>

`;

});