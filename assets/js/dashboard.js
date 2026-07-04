window.addEventListener("load",()=>{

setTimeout(()=>{

const loader=document.getElementById("loader");

const dashboard=document.getElementById("dashboardContent");

if(loader){

loader.style.display="none";

}

if(dashboard){

dashboard.style.display="block";

}

},800);

});

/*====================================================
DASHBOARD MOBILE SIDEBAR TOGGLE
Opens/closes the off-canvas sidebar on phones & tablets
(mirrors the admin dashboard's drawer behavior).
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.getElementById("dashboardSidebar");
    const toggleBtn = document.getElementById("dashboardSidebarToggle");
    const closeBtn = document.getElementById("dashboardSidebarClose");
    const overlay = document.getElementById("dashboardSidebarOverlay");
    const desktopQuery = window.matchMedia("(min-width: 992px)");

    if (!sidebar || !toggleBtn) return;

    const closeSidebar = () => {
        document.body.classList.remove("dashboard-sidebar-open");
        overlay?.setAttribute("aria-hidden", "true");
        toggleBtn.setAttribute("aria-expanded", "false");
    };

    const openSidebar = () => {
        document.body.classList.add("dashboard-sidebar-open");
        overlay?.setAttribute("aria-hidden", "false");
        toggleBtn.setAttribute("aria-expanded", "true");
    };

    toggleBtn.addEventListener("click", openSidebar);
    closeBtn?.addEventListener("click", closeSidebar);
    overlay?.addEventListener("click", closeSidebar);

    sidebar.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (!desktopQuery.matches) closeSidebar();
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeSidebar();
    });

    desktopQuery.addEventListener("change", (event) => {
        if (event.matches) closeSidebar();
    });

});