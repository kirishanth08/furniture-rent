document.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("adminSearch");
    const table = document.getElementById("adminRentalTable");
    const sidebar = document.getElementById("adminSidebar");
    const wrapper = document.querySelector(".admin-wrapper");
    const sidebarToggle = document.getElementById("adminSidebarToggle");
    const sidebarClose = document.getElementById("adminSidebarClose");
    const sidebarOverlay = document.getElementById("adminSidebarOverlay");
    const desktopQuery = window.matchMedia("(min-width: 992px)");
    const COLLAPSE_KEY = "adminSidebarCollapsed";

    // ---- Mobile: slide-in overlay drawer ----
    const closeSidebar = () => {
        document.body.classList.remove("admin-sidebar-open");
        sidebarOverlay?.setAttribute("aria-hidden", "true");
        if (!desktopQuery.matches) {
            sidebarToggle?.setAttribute("aria-expanded", "false");
        }
    };

    const openSidebar = () => {
        document.body.classList.add("admin-sidebar-open");
        sidebarOverlay?.setAttribute("aria-hidden", "false");
        sidebarToggle?.setAttribute("aria-expanded", "true");
    };

    // ---- Desktop: collapsible icon-rail ----
    const setCollapsed = (collapsed) => {
        wrapper?.classList.toggle("admin-sidebar-collapsed", collapsed);
        sidebarToggle?.setAttribute("aria-expanded", collapsed ? "false" : "true");
        localStorage.setItem(COLLAPSE_KEY, collapsed ? "true" : "false");
    };

    if (sidebar && sidebarToggle) {
        // Restore the last collapsed state on desktop.
        if (desktopQuery.matches) {
            setCollapsed(localStorage.getItem(COLLAPSE_KEY) === "true");
        }

        sidebarToggle.addEventListener("click", () => {
            if (desktopQuery.matches) {
                setCollapsed(!wrapper.classList.contains("admin-sidebar-collapsed"));
            } else {
                openSidebar();
            }
        });

        sidebarClose?.addEventListener("click", closeSidebar);
        sidebarOverlay?.addEventListener("click", closeSidebar);

        sidebar.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                if (!desktopQuery.matches) {
                    closeSidebar();
                }
            });
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeSidebar();
            }
        });

        desktopQuery.addEventListener("change", (event) => {
            closeSidebar();
            if (event.matches) {
                setCollapsed(localStorage.getItem(COLLAPSE_KEY) === "true");
            } else {
                wrapper?.classList.remove("admin-sidebar-collapsed");
            }
        });
    }

    if (search && table) {
        const rows = Array.from(table.querySelectorAll("tbody tr"));

        search.addEventListener("input", () => {
            const query = search.value.trim().toLowerCase();

            rows.forEach((row) => {
                row.style.display = row.innerText.toLowerCase().includes(query) ? "" : "none";
            });
        });
    }

    document.querySelectorAll(".admin-filter .btn").forEach((button) => {
        button.addEventListener("click", () => {
            const group = button.closest(".admin-filter");
            group.querySelectorAll(".btn").forEach((item) => {
                item.classList.remove("active", "btn-primary");
                item.classList.add("btn-outline-primary");
            });
            button.classList.add("active", "btn-primary");
            button.classList.remove("btn-outline-primary");
        });
    });
});