/*====================================================
FURNIRENT AUTH & STORAGE
Lightweight localStorage-based auth for demo purposes.
Seeds default customer + admin credentials on first load
and exposes helpers used by login.html, register.html,
admin-login.html, admin-signup.html and the dashboards.
====================================================*/

const FurniAuth = (() => {

    const USERS_KEY = "furnirent_users";
    const SESSION_KEY = "furnirent_session";

    const DEFAULT_USERS = [
        {
            role: "customer",
            name: "John Carter",
            email: "customer@furnirent.com",
            password: "Customer@123"
        },
        {
            role: "admin",
            name: "Demo Admin",
            email: "admin@furnirent.com",
            password: "Admin@123"
        }
    ];

    function seedUsers() {
        if (!localStorage.getItem(USERS_KEY)) {
            localStorage.setItem(USERS_KEY, JSON.stringify(DEFAULT_USERS));
            return;
        }

        // One-time migration: earlier builds seeded the demo customer as
        // "Demo Customer". Rename it in place so existing sessions pick up
        // the new "John Carter" name without needing to clear storage.
        try {
            const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
            let changed = false;

            users.forEach(u => {
                if (u.role === "customer" && u.email === "customer@furnirent.com" && u.name === "Demo Customer") {
                    u.name = "John Carter";
                    changed = true;
                }
            });

            if (changed) {
                localStorage.setItem(USERS_KEY, JSON.stringify(users));

                const session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
                if (session && session.name === "Demo Customer") {
                    session.name = "John Carter";
                    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
                }
            }
        } catch (e) {
            /* ignore malformed storage */
        }
    }

    function getUsers() {
        seedUsers();
        try {
            return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
        } catch (e) {
            return DEFAULT_USERS;
        }
    }

    function saveUsers(users) {
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }

    // role: "customer" | "admin"
    function login(email, password, role) {
        const users = getUsers();
        const match = users.find(u =>
            u.email.toLowerCase() === String(email).trim().toLowerCase() &&
            u.password === password &&
            u.role === role
        );

        if (!match) return { success: false, message: "Invalid email or password." };

        localStorage.setItem(SESSION_KEY, JSON.stringify({
            email: match.email,
            name: match.name,
            role: match.role,
            loggedInAt: Date.now()
        }));

        return { success: true, user: match };
    }

    // role: "customer" | "admin"
    function signup(name, email, password, role) {
        const users = getUsers();
        const exists = users.some(u =>
            u.email.toLowerCase() === String(email).trim().toLowerCase() && u.role === role
        );

        if (exists) return { success: false, message: "An account with this email already exists." };

        const newUser = { role, name, email: String(email).trim(), password };
        users.push(newUser);
        saveUsers(users);

        localStorage.setItem(SESSION_KEY, JSON.stringify({
            email: newUser.email,
            name: newUser.name,
            role: newUser.role,
            loggedInAt: Date.now()
        }));

        return { success: true, user: newUser };
    }

    function logout() {
        localStorage.removeItem(SESSION_KEY);
    }

    function getSession() {
        try {
            return JSON.parse(localStorage.getItem(SESSION_KEY));
        } catch (e) {
            return null;
        }
    }

    // Redirects to loginPage if there's no active session of the given role.
    function requireAuth(role, loginPage) {
        const session = getSession();
        if (!session || session.role !== role) {
            window.location.href = loginPage;
        }
    }

    seedUsers();

    return { login, signup, logout, getSession, requireAuth };

})();
