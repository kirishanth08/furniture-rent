/*====================================================
FURNIRENT BLOG DATA
Single source of truth for every blog post. blog.html and
blog-details.html both read from this list so each "Read
More" link opens its own article instead of always showing
the same one, and so the blog search box has something to
search against.
====================================================*/

const FURNIRENT_POSTS = [
    {
        slug: "interior-design-ideas-modern-apartments",
        title: "10 Interior Design Ideas For Modern Apartments",
        category: "Interior Design",
        badgeClass: "bg-warning text-dark",
        badgeLabel: "Featured",
        image: "https://imgs.search.brave.com/Wqe7NAbr2FJRnGCeGRRHUyYTlgZztVhr9kZM6zTfLg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90YWxh/dGlhbmRwYXJ0bmVy/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDEvVFJF/TkRTLTYud2VicA",
        heroImage: "https://imgs.search.brave.com/L-hYVlkBo_wze2atMO84NfpAQYM6ALt5jfzcrK4ulno/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90YWxh/dGlhbmRwYXJ0bmVy/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDEvVFJF/TkRTLTEud2VicA",
        excerpt: "Learn how premium furniture can completely transform a small apartment into a luxurious, comfortable and functional home.",
        date: "January 15, 2026",
        readTime: "8 min read",
        author: "FurniRent Team",
        quote: "Beautiful interiors are not created by expensive furniture, but by thoughtful choices that combine comfort, style and functionality.",
        body: [
            "Creating a beautiful home doesn't always require buying expensive furniture. With flexible furniture rentals, you can create a stylish and comfortable living space while staying within your budget.",
            "Modern apartments require furniture that is elegant, functional and space-efficient. Choosing the right pieces improves comfort and creates a welcoming atmosphere for your family and guests.",
            "At FurniRent, we believe everyone deserves premium interiors without the financial burden of purchasing new furniture. Our rental plans make luxury living accessible and affordable."
        ]
    },
    {
        slug: "choosing-perfect-sofa",
        title: "Choosing The Perfect Sofa",
        category: "Interior",
        badgeClass: "bg-primary",
        badgeLabel: "Interior",
        image: "https://imgs.search.brave.com/NBE7hccJbop7u3602Et0_RknyIXM8KMDiPke2O--VxA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmxvYXRpbmd3YWxs/cy5pbi9jZG4vc2hv/cC9hcnRpY2xlcy9X/aHlfQ2hvb3Npbmdf/dGhlX1JpZ2h0X1Nv/ZmFfQ29sb3JfTWF0/dGVyc18xXzJmMmU4/OWU1LWU3ZjMtNDhm/Yi1iOTNiLWJhNDMz/ZWE3N2M5Yi5wbmc_/dj0xNzc3MDE2MDI3/JndpZHRoPTExMDA",
        heroImage: "https://imgs.search.brave.com/5Gorc8kgZNHlSOPvlvuEAGxmTorJdlnSym1KPiAh-WI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZGZzLmNvLnVr/L2kvZGZzL2MwODhf/c29mYS1idXlpbmct/Z3VpZGUtcmVjbGlu/ZXJfbW9iaWxlP3c9/NDExJmZtdD1hdXRv",
        excerpt: "Simple tips for selecting the perfect sofa for your living room.",
        date: "January 10, 2026",
        readTime: "5 min read",
        author: "FurniRent Team",
        quote: "The right sofa isn't just furniture — it's where your family's best moments happen.",
        body: [
            "A sofa is often the centerpiece of a living room, so getting the choice right matters more than people expect. Start by measuring your space and thinking about how many people typically sit together.",
            "Fabric choice affects both comfort and maintenance. Performance fabrics resist stains and are easier to clean, which is especially useful if you have kids or pets at home.",
            "Finally, consider the frame. A kiln-dried hardwood frame will hold its shape far longer than cheaper alternatives, so it's worth prioritizing durability over a slightly lower price."
        ]
    },
    {
        slug: "why-renting-saves-money",
        title: "Why Renting Saves Money",
        category: "Rental Tips",
        badgeClass: "bg-success",
        badgeLabel: "Rental Tips",
        image: "https://imgs.search.brave.com/LkaEoEB5gCdewXkA3IEaGuuP0XtF5rO_8lI6Zglhj2g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2F2ZXRoZXN0dWRl/bnQub3JnL3VwbG9h/ZHMvbW9uZXktYW5k/LXRlcnJhY2VkLWhv/dXNlcy1yZW50Lmpw/Zw",
        heroImage: "https://imgs.search.brave.com/LkaEoEB5gCdewXkA3IEaGuuP0XtF5rO_8lI6Zglhj2g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2F2ZXRoZXN0dWRl/bnQub3JnL3VwbG9h/ZHMvbW9uZXktYW5k/LXRlcnJhY2VkLWhv/dXNlcy1yZW50Lmpw/Zw",
        excerpt: "Furniture rental is the smartest choice for modern families.",
        date: "January 5, 2026",
        readTime: "6 min read",
        author: "FurniRent Team",
        quote: "You don't need to own furniture to enjoy a beautifully furnished home.",
        body: [
            "Buying furniture outright ties up a large amount of cash upfront, and that value depreciates the moment it leaves the showroom. Renting spreads the cost into predictable monthly payments instead.",
            "For students, young professionals and anyone who relocates often, renting removes the hassle and expense of moving heavy furniture between cities.",
            "Rental plans like ours also include delivery, assembly and damage protection, so there are no surprise repair bills — something that isn't true when you own furniture outright."
        ]
    },
    {
        slug: "luxury-bedroom-ideas",
        title: "Luxury Bedroom Ideas",
        category: "Design",
        badgeClass: "bg-warning text-dark",
        badgeLabel: "Design",
        image: "https://imgs.search.brave.com/u-iXE3MJAPWrh7LUWTzyUZJgX1QhdikcwfqpswN3ucA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzlB/VkRqUEo3bmdnTmsy/V1l0S0dKdkEuanBn",
        heroImage: "https://imgs.search.brave.com/1iRQvvEL4CJKkcxpFTFBTZgyk8VCkH4HNSqAjuZg6dU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9jYWRvbG9iby5j/b20vZW4vaW5zcGly/YXRpb24tYW5kLWlk/ZWFzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA5L0luZHVs/Z2UtSW4tT3B1bGVu/Y2UtNTAtTHV4dXJp/b3VzLUJlZHJvb20t/RGVjb3ItSWRlYXMt/MzItMTAyNHg2NjAu/anBlZw",
        excerpt: "Modern bedroom inspiration using premium rental furniture.",
        date: "December 28, 2025",
        readTime: "7 min read",
        author: "FurniRent Team",
        quote: "A well-designed bedroom is the difference between a house and a home.",
        body: [
            "Your bedroom should feel like a retreat. Start with a statement bed frame — a tall upholstered headboard instantly adds a hotel-like sense of luxury to the room.",
            "Layer your lighting: a central fixture for general light, bedside lamps for reading, and soft accent lighting for ambience in the evening.",
            "Keep a cohesive color palette across your bedding, curtains and wardrobe finish. Renting lets you experiment with a bolder look now and swap it out later if your taste changes."
        ]
    },
    {
        slug: "dining-room-inspiration",
        title: "Dining Room Inspiration",
        category: "Guide",
        badgeClass: "bg-danger",
        badgeLabel: "Guide",
        image: "https://imgs.search.brave.com/XsYCp5MRkSy6IKCtlXQG6TxWBKozquaMB9Q3vnwBLf4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wMi9N/b2Rlcm4tZGluaW5n/LXJvb20taW5zcGly/YXRpb24tYnktREVD/T1JJTExBLTEwMjR4/NjgzLmpwZw",
        heroImage: "https://imgs.search.brave.com/XsYCp5MRkSy6IKCtlXQG6TxWBKozquaMB9Q3vnwBLf4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wMi9N/b2Rlcm4tZGluaW5n/LXJvb20taW5zcGly/YXRpb24tYnktREVD/T1JJTExBLTEwMjR4/NjgzLmpwZw",
        excerpt: "Beautiful dining room ideas for modern apartments.",
        date: "December 20, 2025",
        readTime: "5 min read",
        author: "FurniRent Team",
        quote: "The dining table is where the day's stories get shared — it deserves to feel special.",
        body: [
            "Even in compact apartments, a well-chosen dining set can anchor the whole room. Round tables work especially well in smaller spaces since they don't create sharp corners to navigate around.",
            "Mix textures for visual interest: a solid wood tabletop paired with upholstered chairs feels warmer than an all-matching set.",
            "Pendant lighting hung at the right height above the table instantly elevates the space and makes everyday meals feel more intentional."
        ]
    },
    {
        slug: "workspace-setup-tips",
        title: "Workspace Setup Tips",
        category: "Decor",
        badgeClass: "bg-info",
        badgeLabel: "Decor",
        image: "https://imgs.search.brave.com/R6ByLZovV8pkqXaaYbVueemaVsQsC_Y-0Pe9klIxGkU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXV0b25vbW91cy5h/aS9zdGF0aWMvdXBs/b2FkL2ltYWdlcy9u/ZXdfcG9zdC85LXBl/cmZlY3Qtb2ZmaWNl/LWRlc2stc2V0dXAt/dGlwcy0zMjE1LTE2/ODcyMjk2MTQwNzUu/d2VicA",
        heroImage: "https://imgs.search.brave.com/R6ByLZovV8pkqXaaYbVueemaVsQsC_Y-0Pe9klIxGkU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXV0b25vbW91cy5h/aS9zdGF0aWMvdXBs/b2FkL2ltYWdlcy9u/ZXdfcG9zdC85LXBl/cmZlY3Qtb2ZmaWNl/LWRlc2stc2V0dXAt/dGlwcy0zMjE1LTE2/ODcyMjk2MTQwNzUu/d2VicA",
        excerpt: "Create a productive workspace using rental furniture.",
        date: "December 12, 2025",
        readTime: "6 min read",
        author: "FurniRent Team",
        quote: "A good workspace isn't about square footage — it's about intention.",
        body: [
            "Start with an ergonomic chair. Long work hours in the wrong seat lead to fatigue and poor posture, so this is one area worth prioritizing even in a small setup.",
            "A desk with enough surface area for a monitor, notebook and a cup of coffee — without feeling cramped — makes a real difference to daily focus.",
            "Keep storage within arm's reach. A desk with integrated drawers keeps cables and documents out of sight, which helps the whole room feel calmer."
        ]
    },
    {
        slug: "minimal-living-spaces",
        title: "Minimal Living Spaces",
        category: "Lifestyle",
        badgeClass: "bg-secondary",
        badgeLabel: "Lifestyle",
        image: "https://imgs.search.brave.com/PMK6RJ93gD071AtzAuSiU9PziJxJl5rHW5CZDkBUt1k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzAv/NjgxLzcyMC9zbWFs/bC9tb2Rlcm4taW50/ZXJpb3Itd2l0aC13/aGl0ZS1hcm1jaGFp/ci13b29kZW4tY29u/c29sZS10YWJsZS1h/bmQtbWluaW1hbGlz/dC1kZWNvci1hZ2Fp/bnN0LWEtd2hpdGUt/d2FsbC1waG90by5q/cGVn",
        heroImage: "https://imgs.search.brave.com/51FWVcNTQdXxfsDNeGpfNXBRhvXnPq1HuvQHnKwcusU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ldm9s/dmVhcnRpc2FuYWwu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzA3LzQwX0dv/LUxpbmVhci1NaW5p/bWFsaXN0LUxpdmlu/Zy1Sb29tLURlc2ln/bi0xMDI0eDY4My5q/cGc",
        excerpt: "Minimalist furniture ideas for compact homes.",
        date: "December 3, 2025",
        readTime: "4 min read",
        author: "FurniRent Team",
        quote: "Less furniture, chosen well, always beats more furniture chosen poorly.",
        body: [
            "Minimalism isn't about having empty rooms — it's about making sure every piece earns its place. Start by choosing multi-purpose furniture, like a coffee table with hidden storage.",
            "Stick to a neutral palette with one or two accent colors. This makes even a small, densely furnished room feel open and uncluttered.",
            "Renting makes minimalism easier to commit to: you can start with just the essentials and add pieces later only if you genuinely need them."
        ]
    }
];

const FurniBlog = (() => {

    function getAll() {
        return FURNIRENT_POSTS;
    }

    function getBySlug(slug) {
        return FURNIRENT_POSTS.find(p => p.slug === slug) || null;
    }

    function getRelated(slug, count) {
        const others = FURNIRENT_POSTS.filter(p => p.slug !== slug);
        return others.slice(0, count || 3);
    }

    function search(query) {
        const q = String(query || "").trim().toLowerCase();
        if (!q) return FURNIRENT_POSTS;
        return FURNIRENT_POSTS.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.excerpt.toLowerCase().includes(q)
        );
    }

    return { getAll, getBySlug, getRelated, search };

})();
