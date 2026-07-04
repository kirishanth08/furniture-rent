/*====================================================
FURNIRENT MAIN JS
====================================================*/

/*====================================================
DEMO-ONLY ACTION NOTICE
Dashboard action buttons (ticket View/Closed/Follow Up,
invoice Download, Pay Now, rental Extend/Return) have no
backend to call, so instead of linking to a dead page
they show this quick "static demo" notice.
====================================================*/

function showDemoNotice(message) {

    let toast = document.getElementById("demoNoticeToast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "demoNoticeToast";
        toast.className = "demo-toast shadow position-fixed mb-0";
        toast.style.cssText = "bottom:20px; right:20px; z-index:2000; max-width:320px;";
        toast.setAttribute("role", "alert");
        document.body.appendChild(toast);
    }

    toast.textContent = message ||
        "This is a static front-end demo — no backend is connected, so this action isn't available.";

    toast.style.display = "block";

    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
        toast.style.display = "none";
    }, 3000);

}

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".demo-action").forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            showDemoNotice();
        });
    });

    /*====================================================
    NAVBAR AUTH STATE
    Swaps the Login / Get Started buttons for the logged-in
    customer's name + avatar dropdown whenever a session
    exists (see assets/js/storage.js -> FurniAuth).
    ====================================================*/

    (function renderAuthState() {

        const authButtons = document.getElementById("authButtons");

        if (!authButtons || typeof FurniAuth === "undefined") return;

        const session = FurniAuth.getSession();

        if (!session) return;

        const initial = (session.name || "U").trim().charAt(0).toUpperCase();
        const firstName = (session.name || "Account").trim().split(" ")[0];
        const adminDisplayName = "Admin";

        if (session.role === "customer") {

            authButtons.innerHTML = `
                <div class="dropdown">
                    <button class="btn btn-outline-primary fw-semibold dropdown-toggle d-flex align-items-center gap-2"
                        type="button" id="navUserMenuBtn" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center fw-bold"
                            style="width:26px;height:26px;font-size:.8rem;">${initial}</span>
                        <span>${firstName}</span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end shadow-sm" aria-labelledby="navUserMenuBtn">
                        <li><a class="dropdown-item" href="dashboard-home.html"><i class="fa-solid fa-gauge me-2"></i>Dashboard</a></li>
                        <li><a class="dropdown-item" href="dashboard-rentals.html"><i class="fa-solid fa-box me-2"></i>My Rentals</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item text-danger" href="#" id="navLogoutBtn"><i class="fa-solid fa-right-from-bracket me-2"></i>Logout</a></li>
                    </ul>
                </div>
            `;

            const navLogoutBtn = document.getElementById("navLogoutBtn");

            if (navLogoutBtn) {
                navLogoutBtn.addEventListener("click", function (e) {
                    e.preventDefault();
                    FurniAuth.logout();
                    window.location.href = "index.html";
                });
            }

            return;
        }

        if (session.role === "admin") {

            authButtons.innerHTML = `
                <div class="dropdown">
                    <button class="btn btn-outline-primary fw-semibold dropdown-toggle d-flex align-items-center gap-2"
                        type="button" id="navAdminMenuBtn" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center fw-bold"
                            style="width:26px;height:26px;font-size:.8rem;">${initial}</span>
                        <span>${adminDisplayName}</span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end shadow-sm" aria-labelledby="navAdminMenuBtn">
                        <li><a class="dropdown-item" href="admin-dashboard.html"><i class="fa-solid fa-gauge me-2"></i>Admin Dashboard</a></li>
                        <li><a class="dropdown-item" href="dashboard-home.html"><i class="fa-solid fa-user me-2"></i>Customer View</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item text-danger" href="#" id="navAdminLogoutBtn"><i class="fa-solid fa-right-from-bracket me-2"></i>Logout</a></li>
                    </ul>
                </div>
            `;

            const navAdminLogoutBtn = document.getElementById("navAdminLogoutBtn");

            if (navAdminLogoutBtn) {
                navAdminLogoutBtn.addEventListener("click", function (e) {
                    e.preventDefault();
                    FurniAuth.logout();
                    window.location.href = "admin-login.html";
                });
            }

        }

    })();

    /*====================================================
    DARK MODE
    ====================================================*/

    const themeBtn = document.getElementById("themeBtn");
    const body = document.body;
    const html = document.documentElement;
    const icon = themeBtn ? themeBtn.querySelector("i") : null;

    function setTheme(theme) {

        if (theme === "dark") {

            html.classList.add("dark-mode");
            body.classList.add("dark-mode");

            localStorage.setItem("theme", "dark");

            if (icon) {

                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");

                icon.classList.remove("text-dark");
                icon.classList.add("text-warning");

            }

        } else {

            html.classList.remove("dark-mode");
            body.classList.remove("dark-mode");

            localStorage.setItem("theme", "light");

            if (icon) {

                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");

                icon.classList.remove("text-warning");
                icon.classList.add("text-dark");

            }

        }

    }

    setTheme(localStorage.getItem("theme") || "light");

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            if (body.classList.contains("dark-mode")) {

                setTheme("light");

            } else {

                setTheme("dark");

            }

        });

    }

    /*====================================================
    RTL / LTR TOGGLE
    ====================================================*/

    const rtlBtn = document.getElementById("rtlBtn");

    function setDirection(dir) {

        html.setAttribute("dir", dir);
        localStorage.setItem("dir", dir);

        if (rtlBtn) {
            rtlBtn.title = dir === "rtl" ? "Switch to LTR" : "Switch to RTL";
            rtlBtn.classList.toggle("active-rtl", dir === "rtl");
        }

    }

    setDirection(localStorage.getItem("dir") || "ltr");

    if (rtlBtn) {

        rtlBtn.addEventListener("click", () => {

            const next = html.getAttribute("dir") === "rtl" ? "ltr" : "rtl";
            setDirection(next);

        });

    }

    /*====================================================
    CATALOG FILTER
    ====================================================*/

    const productCards = document.querySelectorAll(".product-card");

    const roomCheckboxes = document.querySelectorAll(
        "#roomLiving,#roomBedroom,#roomDining,#roomStudy"
    );

    const categoryCheckboxes = document.querySelectorAll(
        "#catSofas,#catBeds,#catStorage,#catTables"
    );

    const styleCheckboxes = document.querySelectorAll(
        "#styleModern,#styleMinimal,#styleClassic"
    );

    const priceRange = document.getElementById("priceRange");
    const inStockSwitch = document.getElementById("inStockSwitch");
    const resetBtn = document.getElementById("filterReset");

    const CATEGORY_MAP = {
        catSofas: "sofas",
        catBeds: "beds",
        catStorage: "storage",
        catTables: "tables"
    };

    const STYLE_MAP = {
        styleModern: "modern",
        styleMinimal: "minimalist",
        styleClassic: "classic"
    };

    if (roomCheckboxes.length && productCards.length) {

        function getChecked(nodeList, valueMap) {
            return [...nodeList]
                .filter(box => box.checked)
                .map(box => valueMap ? valueMap[box.id] : box.nextElementSibling.innerText
                    .split("(")[0]
                    .trim()
                    .toLowerCase());
        }

        function filterProducts() {

            const activeRooms = getChecked(roomCheckboxes);
            const activeCategories = getChecked(categoryCheckboxes, CATEGORY_MAP);
            const activeStyles = getChecked(styleCheckboxes, STYLE_MAP);
            const maxPrice = priceRange ? Number(priceRange.value) : null;
            const onlyInStock = inStockSwitch ? inStockSwitch.checked : false;

            productCards.forEach(card => {

                const badge = card.querySelector(".product-category");
                const room = badge ? badge.innerText.trim().toLowerCase() : "";
                const category = card.getAttribute("data-category") || "";
                const style = card.getAttribute("data-style") || "";
                const price = Number(card.getAttribute("data-price")) || 0;
                const stock = card.getAttribute("data-stock") || "in";

                const roomMatch = activeRooms.length === 0 || activeRooms.includes(room);
                const categoryMatch = activeCategories.length === 0 || activeCategories.includes(category);
                const styleMatch = activeStyles.length === 0 || activeStyles.includes(style);
                const priceMatch = maxPrice === null || price <= maxPrice;
                const stockMatch = !onlyInStock || stock === "in";

                const visible = roomMatch && categoryMatch && styleMatch && priceMatch && stockMatch;

                card.parentElement.style.display = visible ? "" : "none";

            });

        }

        [...roomCheckboxes, ...categoryCheckboxes, ...styleCheckboxes].forEach(box =>
            box.addEventListener("change", filterProducts)
        );

        if (priceRange) {
            priceRange.addEventListener("input", filterProducts);
        }

        if (inStockSwitch) {
            inStockSwitch.addEventListener("change", filterProducts);
        }

        if (resetBtn) {
            resetBtn.addEventListener("click", (e) => {
                e.preventDefault();

                roomCheckboxes.forEach(box => box.checked = false);
                categoryCheckboxes.forEach(box => box.checked = false);
                styleCheckboxes.forEach(box => box.checked = false);

                if (priceRange) {
                    priceRange.value = priceRange.max;
                }

                if (inStockSwitch) {
                    inStockSwitch.checked = false;
                }

                filterProducts();
            });
        }

        // Only pre-check a filter if the person arrived with an explicit
        // ?room= or ?category= link (e.g. from the homepage category
        // selector or category cards). Otherwise every filter starts
        // empty, exactly as the checkboxes render by default.
        const ROOM_PARAM_MAP = {
            "living-room": "roomLiving",
            "bedroom": "roomBedroom",
            "dining": "roomDining",
            "study": "roomStudy"
        };

        const params = new URLSearchParams(window.location.search);
        const roomParam = params.get("room");
        const categoryParam = params.get("category");
        let appliedFromUrl = false;

        if (roomParam && ROOM_PARAM_MAP[roomParam]) {
            const box = document.getElementById(ROOM_PARAM_MAP[roomParam]);
            if (box) {
                box.checked = true;
                appliedFromUrl = true;
            }
        }

        if (categoryParam) {
            const idFromMap = Object.keys(CATEGORY_MAP).find(id => CATEGORY_MAP[id] === categoryParam);
            const box = idFromMap ? document.getElementById(idFromMap) : null;
            if (box) {
                box.checked = true;
                appliedFromUrl = true;
            }
        }

        filterProducts();

    }

    /*====================================================
RENTAL PRICE CALCULATOR
====================================================*/

    const durationSelect = document.getElementById("rentalDuration");
    const priceDisplay = document.getElementById("calculatedPrice");
    const savingsMessage = document.getElementById("savingsMessage");

    if (durationSelect && priceDisplay) {

        durationSelect.addEventListener("change", function () {

            const option = this.options[this.selectedIndex];

            const price = option.getAttribute("data-price");

            const duration = this.value;

            priceDisplay.innerHTML =
                `₹${price}<span class="fs-6 text-muted fw-normal"> / month</span>`;

            if (savingsMessage) {

                if (duration === "3") {

                    savingsMessage.innerText =
                        "Standard base rate applied.";

                    savingsMessage.className =
                        "text-sm fw-semibold text-muted mb-4";

                } else {

                    savingsMessage.innerText =
                        `Great! You are locking in a discounted rate for ${duration} months.`;

                    savingsMessage.className =
                        "text-sm fw-semibold text-success mb-4";

                }

            }

        });

    }

    /*====================================================
    BACK TO TOP BUTTON
    Reveals the floating button once the page has been
    scrolled down a bit, and scrolls smoothly back to the
    top when clicked.
    ====================================================*/

    const backToTopBtn = document.querySelector(".back-to-top");

    if (backToTopBtn) {

        const toggleBackToTop = () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove("d-none");
            } else {
                backToTopBtn.classList.add("d-none");
            }
        };

        toggleBackToTop();

        window.addEventListener("scroll", toggleBackToTop);

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

    }

});

/*====================================================
LOGIN PASSWORD
====================================================*/

function toggleLoginPassword() {

    const input = document.getElementById("loginPassword");

    const icon = document.querySelector(".password-toggle i");

    if (!input || !icon) return;

    if (input.type === "password") {

        input.type = "text";

        icon.classList.replace("fa-eye", "fa-eye-slash");

    } else {

        input.type = "password";

        icon.classList.replace("fa-eye-slash", "fa-eye");

    }

}

/*====================================================
REGISTER PASSWORD
====================================================*/

function toggleRegisterPassword() {

    const input = document.getElementById("registerPassword");

    const icon = document.querySelector("#registerPassword + .password-toggle i");

    if (!input || !icon) return;

    if (input.type === "password") {

        input.type = "text";

        icon.classList.replace("fa-eye", "fa-eye-slash");

    } else {

        input.type = "password";

        icon.classList.replace("fa-eye-slash", "fa-eye");

    }

}