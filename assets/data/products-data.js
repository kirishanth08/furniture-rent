/*====================================================
FURNIRENT PRODUCT DATA
Single source of truth for every product shown on the
catalog, homepage and item-details pages. Each product
has a unique "id" — catalog/homepage links now pass this
id as ?id=... so item-details.html can look up and show
the correct product instead of the same hardcoded one.
====================================================*/

const FURNIRENT_PRODUCTS = [
    {
        id: "modern-luxury-sofa",
        name: "Modern Luxury Sofa",
        room: "Living Room",
        category: "sofas",
        style: "modern",
        price: 2499,
        stock: "in",
        rating: 5,
        reviews: 145,
        image: "../assets/images/hero/sofa.webp",
        shortDesc: "Comfortable 3-seater sofa with premium fabric finish.",
        longDesc: "Elevate your living space with our premium 3-seater sofa. Featuring high-density foam cushions and stain-resistant fabric, it perfectly balances luxury and everyday practicality.",
        specs: { width: "84 inches (213 cm)", depth: "35 inches (89 cm)", height: "33 inches (84 cm)", capacity: "3 Adults" },
        materials: "Upholstered in premium, pet-friendly performance fabric. Frame constructed from kiln-dried solid hardwood for maximum durability. High-resiliency foam cushions wrapped in poly-fiber.",
        care: "Vacuum regularly to remove dust. Blot spills immediately with a clean, dry cloth. Avoid direct sunlight to prevent fading. We perform deep sanitation between all rentals.",
        delivery: "Delivery and professional assembly are included for free. Minor wear and tear (like small scratches) are covered under your rental plan. Major structural damage or deep stains may incur a repair fee."
    },
    {
        id: "king-size-bed",
        name: "King Size Bed",
        room: "Bedroom",
        category: "beds",
        style: "classic",
        price: 1999,
        stock: "in",
        rating: 4.5,
        reviews: 102,
        image: "../assets/images/products/king.webp",
        shortDesc: "Wooden bed with premium headboard design.",
        longDesc: "Rest easy on our King Size Bed, built with a sturdy solid-wood frame and a tall upholstered headboard that instantly upgrades any bedroom's look and feel.",
        specs: { width: "76 inches (193 cm)", depth: "80 inches (203 cm)", height: "42 inches headboard (107 cm)", capacity: "King Mattress (not included)" },
        materials: "Solid sheesham wood frame with a rich walnut-finish stain. Headboard upholstered in soft linen-weave fabric over high-density foam padding.",
        care: "Dust the frame weekly with a dry microfiber cloth. Avoid dragging the bed across hard floors. Keep the headboard fabric away from direct moisture.",
        delivery: "Free delivery and full assembly by our technicians. Minor scuffs on the frame are covered under your rental plan; structural damage may incur a repair fee."
    },
    {
        id: "dining-set-6-seater",
        name: "6-Seater Dining Set",
        room: "Dining",
        category: "tables",
        style: "classic",
        price: 2299,
        stock: "in",
        rating: 5,
        reviews: 87,
        image: "../assets/images/products/dining.webp",
        shortDesc: "Elegant wooden dining table with matching chairs.",
        longDesc: "Bring the family together around our elegant 6-seater dining set, featuring a solid wood table top paired with six comfortably cushioned chairs.",
        specs: { width: "72 inches table (183 cm)", depth: "36 inches table (91 cm)", height: "30 inches (76 cm)", capacity: "6 Adults" },
        materials: "Solid mango wood table top with a matte walnut finish. Chairs feature a hardwood frame with cushioned, fabric-upholstered seats.",
        care: "Use coasters and placemats to protect the surface from heat and stains. Wipe spills immediately. Avoid harsh chemical cleaners on the wood finish.",
        delivery: "Free delivery and assembly included. Everyday wear like light scratches is covered; deep gouges or water damage may incur a repair fee."
    },
    {
        id: "executive-study-desk",
        name: "Executive Study Desk",
        room: "Study",
        category: "tables",
        style: "modern",
        price: 1299,
        stock: "in",
        rating: 4.5,
        reviews: 94,
        image: "../assets/images/categories/study.webp",
        shortDesc: "Spacious wooden desk for work and study.",
        longDesc: "Stay productive with our Executive Study Desk — a spacious work surface with integrated storage drawers, perfect for a home office or study corner.",
        specs: { width: "55 inches (140 cm)", depth: "24 inches (61 cm)", height: "30 inches (76 cm)", capacity: "2 Storage Drawers" },
        materials: "Engineered wood top with a scratch-resistant laminate finish, supported by a powder-coated steel frame for stability.",
        care: "Wipe the surface with a dry or slightly damp cloth. Avoid placing hot items directly on the desk. Keep drawer runners free of dust for smooth operation.",
        delivery: "Free delivery and assembly included. Normal wear is covered under your rental plan; major structural damage may incur a repair fee."
    },
    {
        id: "sliding-wardrobe",
        name: "Sliding Wardrobe",
        room: "Storage",
        category: "storage",
        style: "minimalist",
        price: 1799,
        stock: "out",
        rating: 5,
        reviews: 121,
        image: "https://imgs.search.brave.com/9jR4tXusCPCPySZ5FOveORu39H_cYouVKI2ibTDpo1g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMud29vZGVuc3Ry/ZWV0LmRlL2ltYWdl/L2NhY2hlL2RhdGEv/d2FyZHJvYmVzLW1k/Zi9iYXJyeS00LWRv/b3Itd2FyZHJvYmUt/d2l0aC1taXJyb3It/YW5kLWxvY2svRXhv/dGljLXRlYWstZnJv/c3R5LXdoaXRlL3Vw/ZGF0ZS9uZXctbG9n/by8xLTc1MHg2NTAu/anBn",
        shortDesc: "Premium storage wardrobe with mirror finish.",
        longDesc: "Maximize your bedroom storage with our 4-door sliding wardrobe, complete with a full-length mirror panel, hanging rails and multiple shelves.",
        specs: { width: "72 inches (183 cm)", depth: "22 inches (56 cm)", height: "80 inches (203 cm)", capacity: "6 Shelves + Hanging Rail" },
        materials: "Moisture-resistant engineered wood (MDF) with a teak-and-frosty-white finish, mirrored sliding door panel, and a soft-close locking mechanism.",
        care: "Clean the mirror panel with a glass cleaner. Wipe the body with a dry cloth. Ensure sliding tracks stay free of dust for smooth gliding.",
        delivery: "Free delivery and full assembly included. Minor cosmetic wear is covered; damage to the mirror or sliding mechanism may incur a repair fee. Currently out of stock — join the waitlist to be notified."
    },
    {
        id: "complete-home-package",
        name: "Complete Home Package",
        room: "Package",
        category: "",
        style: "modern",
        price: 4999,
        stock: "in",
        rating: 5,
        reviews: 173,
        image: "../assets/images/categories/fullyhome.webp",
        shortDesc: "Furnish your complete apartment with one plan.",
        longDesc: "Skip the furniture-shopping hassle entirely. Our Complete Home Package bundles a sofa, bed, dining set, study desk and storage wardrobe into a single, discounted monthly rental.",
        specs: { width: "Multiple items", depth: "Multiple items", height: "Multiple items", capacity: "Furnishes a full 1-2 BHK apartment" },
        materials: "A curated mix of solid wood and engineered wood pieces, each finished to match a cohesive modern aesthetic across your home.",
        care: "Each piece follows its own individual care guidelines, provided in your welcome kit. Our team performs a check-up during any mid-tenancy service visit.",
        delivery: "Free delivery, assembly and room-by-room setup for every item in the package. Damage protection applies per item as outlined in your rental agreement."
    },
    {
        id: "velvet-accent-chair",
        name: "Velvet Accent Chair",
        room: "Living Room",
        category: "sofas",
        style: "classic",
        price: 899,
        stock: "in",
        rating: 4,
        reviews: 68,
        image: "https://imgs.search.brave.com/Jgzq6-xTtA2lvFweRgxp3tPz-6XowaEyDH9qri8Krhw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMud2ZjZG4uY29t/L2ltLzc3ODEzMTc4/L3Jlc2l6ZS1oNDAw/LXc0MDBeY29tcHIt/cjg1LzI2MTkvMjYx/OTI4MTI0L0hlbmRy/aXgrVmVsdmV0K0Fj/Y2VudCtDaGFpci5q/cGc",
        shortDesc: "Plush velvet armchair with gold-finished metal legs.",
        longDesc: "Add a statement piece to any room with our Velvet Accent Chair, upholstered in a rich jewel-toned velvet and set on sleek gold-finished metal legs.",
        specs: { width: "28 inches (71 cm)", depth: "30 inches (76 cm)", height: "31 inches (79 cm)", capacity: "1 Adult" },
        materials: "Soft performance velvet upholstery over a solid wood frame, high-density foam cushioning, and gold-finished stainless steel legs.",
        care: "Vacuum with an upholstery attachment to keep the velvet nap fresh. Blot spills promptly; avoid rubbing. Keep out of direct sunlight to prevent fading.",
        delivery: "Free delivery included. Minor wear is covered under your rental plan; deep stains or leg damage may incur a repair fee."
    },
    {
        id: "ergonomic-office-chair",
        name: "Ergonomic Office Chair",
        room: "Study",
        category: "tables",
        style: "modern",
        price: 799,
        stock: "in",
        rating: 4.5,
        reviews: 76,
        image: "https://imgs.search.brave.com/U0dyPiYw8hkkxcbjKKupXrQAHiDAMXodXybQMb0ZCFU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvb2ZmaWNlLXN0/dWR5LWNoYWlyL3cv/eC9uLzEtbWFuZ28t/d29vZC03MC1sLWxl/by1kZXNpZ25lZC1m/b3ItYnJvYWQtc2hv/dWxkZXJzLWVyZ29u/b21pYy1vcmlnaW5h/bC1pbWFoZzg5Nmg1/dzZoYmF4LmpwZWc_/cT03MA",
        shortDesc: "Adjustable lumbar support and breathable mesh back.",
        longDesc: "Work in comfort with our Ergonomic Office Chair — adjustable height, tilt and lumbar support paired with a breathable mesh back to keep you cool through long work sessions.",
        specs: { width: "26 inches (66 cm)", depth: "26 inches (66 cm)", height: "40-44 inches adjustable (102-112 cm)", capacity: "1 Adult, up to 120 kg" },
        materials: "Breathable mesh backrest, high-resiliency foam seat cushion, chrome-finished gas-lift base and smooth-rolling casters.",
        care: "Wipe the mesh and frame with a dry cloth. Check and tighten the height-adjustment lever periodically. Avoid overloading beyond the rated capacity.",
        delivery: "Free delivery, pre-assembled and ready to use. Mechanical faults are covered under your rental plan."
    },
    {
        id: "minimalist-coffee-table",
        name: "Minimalist Coffee Table",
        room: "Living Room",
        category: "tables",
        style: "minimalist",
        price: 599,
        stock: "in",
        rating: 5,
        reviews: 59,
        image: "https://imgs.search.brave.com/uqXvANkNPs5FQAd0DrqNm6Uq7izGiXA4xqHvdtc2rM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTE2MVQzUnRiLUwu/anBn",
        shortDesc: "Tempered glass top with solid oak wood frame.",
        longDesc: "A clean, minimalist centerpiece for your living room — tempered glass top resting on a solid oak wood frame that adds warmth without visual clutter.",
        specs: { width: "42 inches (107 cm)", depth: "22 inches (56 cm)", height: "17 inches (43 cm)", capacity: "Up to 25 kg load" },
        materials: "8mm tempered safety glass top with a solid oak wood frame in a natural finish.",
        care: "Clean the glass with a standard glass cleaner and a soft cloth. Use coasters to avoid ring marks. Dust the wood frame regularly.",
        delivery: "Free delivery included; light assembly may be required and is handled by our team. Glass chips or cracks may incur a repair fee."
    },
    {
        id: "premium-ortho-mattress",
        name: "Premium Ortho Mattress",
        room: "Bedroom",
        category: "beds",
        style: "modern",
        price: 1499,
        stock: "out",
        rating: 4.5,
        reviews: 112,
        image: "https://imgs.search.brave.com/ONE_5HX8sc-RTszhh24OJ8_GoDWH9Jgeek6jgWucgbk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWxh/eG9ubWF0dHJlc3Nl/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMDcvcHJl/bWl1bS1vcnRoby1t/YXR0cmVzc2VzMi5w/bmc",
        shortDesc: "8-inch memory foam queen mattress for ultimate comfort.",
        longDesc: "Sleep better on our Premium Ortho Mattress — an 8-inch, multi-layer memory foam construction designed to support spinal alignment while staying breathable all night.",
        specs: { width: "60 inches / Queen (152 cm)", depth: "78 inches (198 cm)", height: "8 inches (20 cm)", capacity: "2 Adults" },
        materials: "High-resiliency orthopedic foam core topped with cooling gel-infused memory foam, wrapped in a breathable, removable knit cover.",
        care: "Rotate the mattress every 2-3 months. Use a mattress protector to guard against spills. Air it out periodically; avoid folding or bending.",
        delivery: "Free delivery in compressed roll packaging, ready to expand on arrival. Stains beyond normal wear may incur a cleaning fee. Currently out of stock — join the waitlist to be notified."
    },
    {
        id: "solid-wood-tv-unit",
        name: "Solid Wood TV Unit",
        room: "Living Room",
        category: "storage",
        style: "classic",
        price: 1199,
        stock: "in",
        rating: 4,
        reviews: 64,
        image: "https://imgs.search.brave.com/EewcRkk8ZC3FcrsfmU7l4eAj0JEHmszKuYgWZnABwJs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5zYXJhZi5jb20v/Y2RuL3Nob3AvcHJv/ZHVjdHMvSG9uZXlG/aW5hbF8xMmU2YjEy/OS03OGI1LTQ2ZGIt/YjY1Ny01M2I5NTJi/MDZjNTJfMTAyNHgx/MDI0LmpwZz92PTE1/OTU1OTc4NTY",
        shortDesc: "Walnut finish TV console with ample drawer storage.",
        longDesc: "Organize your entertainment setup with our Solid Wood TV Unit, offering a rich walnut finish and generous drawer and shelf storage for consoles, remotes and media.",
        specs: { width: "60 inches (152 cm)", depth: "16 inches (41 cm)", height: "20 inches (51 cm)", capacity: "3 Drawers + 2 Open Shelves" },
        materials: "Solid sheesham wood construction with a rich walnut-finish stain and smooth-gliding drawer channels.",
        care: "Dust regularly with a dry cloth. Avoid overloading shelves beyond rated capacity. Keep away from direct moisture to protect the wood finish.",
        delivery: "Free delivery and assembly included. Minor wear is covered under your rental plan; structural damage may incur a repair fee."
    },
    {
        id: "compact-4-seater-dining",
        name: "Compact 4-Seater Dining",
        room: "Dining",
        category: "tables",
        style: "minimalist",
        price: 1599,
        stock: "in",
        rating: 5,
        reviews: 51,
        image: "https://imgs.search.brave.com/xn6BFBmWndGxOsrL1vm93ciBWd1ztMSrREbecnzzIuQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF2bDUtQ3JYbUwu/anBn",
        shortDesc: "Space-saving round dining table perfect for apartments.",
        longDesc: "Perfect for compact apartments, our 4-seater round dining table pairs a durable engineered-wood top with slim metal legs to keep the footprint light without sacrificing style.",
        specs: { width: "36 inches diameter (91 cm)", depth: "36 inches diameter (91 cm)", height: "30 inches (76 cm)", capacity: "4 Adults" },
        materials: "Engineered wood top with a matte oak-effect laminate finish, supported by powder-coated black metal legs.",
        care: "Wipe the surface with a damp cloth after use. Use coasters and placemats to prevent scratches and heat marks.",
        delivery: "Free delivery and quick assembly included. Everyday wear is covered under your rental plan; major damage may incur a repair fee."
    }
];

const FurniProducts = (() => {

    function getAll() {
        return FURNIRENT_PRODUCTS;
    }

    function getById(id) {
        return FURNIRENT_PRODUCTS.find(p => p.id === id) || null;
    }

    function getRelated(id, count) {
        const others = FURNIRENT_PRODUCTS.filter(p => p.id !== id);
        return others.slice(0, count || 4);
    }

    return { getAll, getById, getRelated };

})();
