// Helper function to generate slug from name
const generateSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-');
};

const phones = [
    {
        id: 1,
        name: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        slug: generateSlug("Samsung Galaxy S24 Ultra"),
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg",
        price: 19999000,
        chipset: "Snapdragon 8 Gen 3",
        cpu: "Octa-core (1x3.39 GHz Cortex-X4 & 3x3.1 GHz Cortex-A720 & 4x2.2 GHz Cortex-A520)",
        ram: "12 GB",
        storage: "256 GB / 512 GB / 1 TB",
        cameraMain: "200 MP (wide) + 50 MP (periscope telephoto) + 10 MP (telephoto) + 12 MP (ultrawide)",
        cameraFront: "12 MP (wide)",
        battery: "5000 mAh, 45W wired, 15W wireless",
        display: '6.8" Dynamic AMOLED 2X, 120Hz, 1440 x 3120 pixels',
        os: "Android 14, One UI 6.1",
        year: 2024,
        category: ["flagship", "kamera", "gaming"],
        rating: 4.8,
        editorReview: "Samsung Galaxy S24 Ultra hadir sebagai smartphone flagship terbaik dari Samsung dengan fitur AI generatif, S Pen terintegrasi, dan kamera 200MP yang menghasilkan foto luar biasa. Performa gaming juga sangat mumpuni berkat Snapdragon 8 Gen 3.",
        color: "#1a1a2e"
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max",
        brand: "Apple",
        slug: generateSlug("iPhone 15 Pro Max"),
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
        price: 21999000,
        chipset: "Apple A17 Pro (3 nm)",
        cpu: "Hexa-core (2x3.78 GHz + 4x2.11 GHz)",
        ram: "8 GB",
        storage: "256 GB / 512 GB / 1 TB",
        cameraMain: "48 MP (wide) + 12 MP (periscope telephoto) + 12 MP (ultrawide)",
        cameraFront: "12 MP TrueDepth",
        battery: "4441 mAh, 27W wired, 15W MagSafe",
        display: '6.7" Super Retina XDR OLED, 120Hz ProMotion, 1290 x 2796 pixels',
        os: "iOS 17",
        year: 2023,
        category: ["flagship", "kamera"],
        rating: 4.7,
        editorReview: "iPhone 15 Pro Max membawa chip A17 Pro dengan ray tracing, tombol Action, dan port USB-C pertama di iPhone. Kamera periskop 5x zoom dan video recording ProRes menjadikannya pilihan utama untuk konten kreator.",
        color: "#1c1c1e"
    },
    {
        id: 3,
        name: "Xiaomi 14 Ultra",
        brand: "Xiaomi",
        slug: generateSlug("Xiaomi 14 Ultra"),
        image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-ultra-1.jpg",
        price: 14999000,
        chipset: "Snapdragon 8 Gen 3",
        cpu: "Octa-core (1x3.3 GHz Cortex-X4 & 3x3.2 GHz Cortex-A720 & 4x2.3 GHz Cortex-A520)",
        ram: "16 GB",
        storage: "512 GB",
        cameraMain: "50 MP Leica (wide) + 50 MP (periscope telephoto) + 50 MP (telephoto) + 50 MP (ultrawide)",
        cameraFront: "32 MP",
        battery: "5000 mAh, 90W wired, 50W wireless",
        display: '6.73" LTPO AMOLED, 120Hz, 1440 x 3200 pixels',
        os: "Android 14, HyperOS",
        year: 2024,
        category: ["flagship", "kamera"],
        rating: 4.7,
        editorReview: "Xiaomi 14 Ultra adalah kolaborasi terbaik Xiaomi x Leica. Dengan 4 kamera 50MP dan pengisian daya 90W, smartphone ini menawarkan pengalaman fotografi kelas profesional dengan harga lebih terjangkau dari kompetitor.",
        color: "#ff6600"
    },
    {
        id: 4,
        name: "Samsung Galaxy A55 5G",
        brand: "Samsung",
        slug: generateSlug("Samsung Galaxy A55 5G"),
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg",
        price: 5499000,
        chipset: "Exynos 1480",
        cpu: "Octa-core (4x2.75 GHz Cortex-A78 & 4x2.0 GHz Cortex-A55)",
        ram: "8 GB",
        storage: "128 GB / 256 GB",
        cameraMain: "50 MP (wide) + 12 MP (ultrawide) + 5 MP (macro)",
        cameraFront: "13 MP",
        battery: "5000 mAh, 25W wired",
        display: '6.6" Super AMOLED, 120Hz, 1080 x 2340 pixels',
        os: "Android 14, One UI 6.1",
        year: 2024,
        category: ["budget"],
        rating: 4.3,
        editorReview: "Galaxy A55 5G adalah mid-range terbaik Samsung dengan layar Super AMOLED 120Hz yang tajam, bodi tahan air IP67, dan jaminan update OS hingga 4 tahun. Pilihan solid untuk budget 5 jutaan.",
        color: "#4a90d9"
    },
    {
        id: 5,
        name: "OPPO Find X7 Ultra",
        brand: "OPPO",
        slug: generateSlug("OPPO Find X7 Ultra"),
        image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x7-ultra.jpg",
        price: 16999000,
        chipset: "Snapdragon 8 Gen 3",
        cpu: "Octa-core (1x3.3 GHz Cortex-X4 & 3x3.2 GHz Cortex-A720 & 4x2.3 GHz Cortex-A520)",
        ram: "16 GB",
        storage: "256 GB / 512 GB",
        cameraMain: "50 MP Hasselblad (wide) + 50 MP (periscope) + 50 MP (ultrawide) + 50 MP (periscope)",
        cameraFront: "32 MP",
        battery: "5400 mAh, 100W wired, 50W wireless",
        display: '6.82" LTPO AMOLED, 120Hz, 1440 x 3168 pixels',
        os: "Android 14, ColorOS 14",
        year: 2024,
        category: ["flagship", "kamera"],
        rating: 4.6,
        editorReview: "OPPO Find X7 Ultra hadir dengan dual periskop Hasselblad yang revolusioner dan baterai 5400mAh. Pengisian 100W super cepat membuatnya siap digunakan hanya dalam hitungan menit.",
        color: "#00a86b"
    },
    {
        id: 6,
        name: "Xiaomi POCO F6 Pro",
        brand: "Xiaomi",
        slug: generateSlug("Xiaomi POCO F6 Pro"),
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6-pro.jpg",
        price: 6999000,
        chipset: "Snapdragon 8 Gen 2",
        cpu: "Octa-core (1x3.2 GHz Cortex-X3 & 2x2.8 GHz Cortex-A715 & 2x2.8 GHz Cortex-A710 & 3x2.0 GHz Cortex-A510)",
        ram: "12 GB",
        storage: "256 GB / 512 GB",
        cameraMain: "64 MP (wide) + 8 MP (ultrawide) + 2 MP (macro)",
        cameraFront: "16 MP",
        battery: "5000 mAh, 120W HyperCharge",
        display: '6.67" AMOLED, 120Hz, 1440 x 3200 pixels',
        os: "Android 14, HyperOS",
        year: 2024,
        category: ["gaming", "budget"],
        rating: 4.5,
        editorReview: "POCO F6 Pro menawarkan performa flagship dengan harga mid-range. Snapdragon 8 Gen 2 dan layar 2K 120Hz menjadikannya monster gaming terbaik di kelasnya. Pengisian 120W juga sangat cepat.",
        color: "#ffd700"
    },
    {
        id: 7,
        name: "Vivo X100 Pro",
        brand: "Vivo",
        slug: generateSlug("Vivo X100 Pro"),
        image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg",
        price: 12999000,
        chipset: "MediaTek Dimensity 9300",
        cpu: "Octa-core (1x3.25 GHz Cortex-X4 & 3x2.8 GHz Cortex-A720 & 4x2.0 GHz Cortex-A520)",
        ram: "16 GB",
        storage: "256 GB / 512 GB",
        cameraMain: "50 MP ZEISS (wide) + 50 MP (periscope telephoto) + 50 MP (ultrawide)",
        cameraFront: "32 MP",
        battery: "5400 mAh, 100W wired",
        display: '6.78" LTPO AMOLED, 120Hz, 1260 x 2800 pixels',
        os: "Android 14, Funtouch 14",
        year: 2024,
        category: ["flagship", "kamera"],
        rating: 4.5,
        editorReview: "Vivo X100 Pro membawa kolaborasi ZEISS ke level baru dengan video Cinematic Portrait dan Night Mode yang luar biasa. Chipset Dimensity 9300 juga menghadirkan performa kelas atas.",
        color: "#003366"
    },
    {
        id: 8,
        name: "Realme GT 6",
        brand: "Realme",
        slug: generateSlug("Realme GT 6"),
        image: "https://fdn2.gsmarena.com/vv/bigpic/realme-gt6.jpg",
        price: 6499000,
        chipset: "Snapdragon 8s Gen 3",
        cpu: "Octa-core (1x3.0 GHz Cortex-X4 & 4x2.8 GHz Cortex-A720 & 3x2.0 GHz Cortex-A520)",
        ram: "8 GB / 12 GB",
        storage: "256 GB",
        cameraMain: "50 MP Sony LYT-808 (wide) + 8 MP (ultrawide) + 2 MP (macro)",
        cameraFront: "32 MP",
        battery: "5500 mAh, 120W SuperVOOC",
        display: '6.78" LTPO AMOLED, 120Hz, 1264 x 2780 pixels, 6000 nits peak',
        os: "Android 14, Realme UI 5.0",
        year: 2024,
        category: ["gaming", "budget"],
        rating: 4.4,
        editorReview: "Realme GT 6 hadir dengan layar terbright di kelasnya (6000 nits!) dan pengisian 120W. Sensor Sony LYT-808 menghadirkan foto yang jauh lebih baik dari HP sekelasnya. Value for money terbaik.",
        color: "#ffd900"
    },
    {
        id: 9,
        name: "Samsung Galaxy Z Fold 5",
        brand: "Samsung",
        slug: generateSlug("Samsung Galaxy Z Fold 5"),
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5.jpg",
        price: 25999000,
        chipset: "Snapdragon 8 Gen 2 for Galaxy",
        cpu: "Octa-core (1x3.36 GHz Cortex-X3 & 2x2.8 GHz Cortex-A715 & 2x2.8 GHz Cortex-A710 & 3x2.0 GHz Cortex-A510)",
        ram: "12 GB",
        storage: "256 GB / 512 GB / 1 TB",
        cameraMain: "50 MP (wide) + 12 MP (ultrawide) + 10 MP (telephoto 3x)",
        cameraFront: "10 MP cover + 4 MP under-display",
        battery: "4400 mAh, 25W wired, 15W wireless",
        display: '7.6" Foldable Dynamic AMOLED 2X, 120Hz (inner), 6.2" (cover)',
        os: "Android 13, One UI 5.1.1",
        year: 2023,
        category: ["flagship"],
        rating: 4.4,
        editorReview: "Galaxy Z Fold 5 adalah foldable terbaik dengan hinge baru yang lebih tipis dan layar 7.6 inci yang produktif. Multitasking hingga 3 aplikasi sekaligus menjadikannya device paling versatile.",
        color: "#1a1a2e"
    },
    {
        id: 10,
        name: "Xiaomi Redmi Note 13 Pro 5G",
        brand: "Xiaomi",
        slug: generateSlug("Xiaomi Redmi Note 13 Pro 5G"),
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro-5g.jpg",
        price: 3699000,
        chipset: "Snapdragon 7s Gen 2",
        cpu: "Octa-core (4x2.4 GHz Cortex-A78 & 4x1.95 GHz Cortex-A55)",
        ram: "8 GB",
        storage: "256 GB",
        cameraMain: "200 MP Samsung HP3 (wide) + 8 MP (ultrawide) + 2 MP (macro)",
        cameraFront: "16 MP",
        battery: "5100 mAh, 67W turbo charging",
        display: '6.67" AMOLED, 120Hz, 1080 x 2400 pixels',
        os: "Android 13, MIUI 14",
        year: 2024,
        category: ["budget", "kamera"],
        rating: 4.3,
        editorReview: "Redmi Note 13 Pro 5G mengejutkan dengan kamera 200MP di harga 3 jutaan! Layar AMOLED 120Hz dan 5G connectivity menjadikannya raja mid-range. Desain premium dengan bodi kaca yang elegan.",
        color: "#ff6b35"
    },
    {
        id: 11,
        name: "OPPO Reno 12 Pro 5G",
        brand: "OPPO",
        slug: generateSlug("OPPO Reno 12 Pro 5G"),
        image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno12-pro-cn.jpg",
        price: 5999000,
        chipset: "MediaTek Dimensity 7300 Energy",
        cpu: "Octa-core (4x2.5 GHz Cortex-A78 & 4x2.0 GHz Cortex-A55)",
        ram: "12 GB",
        storage: "256 GB / 512 GB",
        cameraMain: "50 MP Sony LYT-600 (wide) + 8 MP (ultrawide) + 50 MP (telephoto 2x)",
        cameraFront: "50 MP Sony IMX615",
        battery: "5000 mAh, 80W SuperVOOC",
        display: '6.7" AMOLED, 120Hz, 1080 x 2412 pixels',
        os: "Android 14, ColorOS 14",
        year: 2024,
        category: ["budget", "kamera"],
        rating: 4.2,
        editorReview: "OPPO Reno 12 Pro 5G difokuskan untuk fotografi portrait dengan AI. Kamera selfie 50MP menjadikannya pilihan terbaik untuk content creator. Desain elegan dan AI-powered editing tools melengkapi paketnya.",
        color: "#7b68ee"
    },
    {
        id: 12,
        name: "ASUS ROG Phone 8 Pro",
        brand: "ASUS",
        slug: generateSlug("ASUS ROG Phone 8 Pro"),
        image: "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg",
        price: 17999000,
        chipset: "Snapdragon 8 Gen 3",
        cpu: "Octa-core (1x3.3 GHz Cortex-X4 & 3x3.2 GHz Cortex-A720 & 4x2.3 GHz Cortex-A520)",
        ram: "24 GB",
        storage: "1 TB",
        cameraMain: "50 MP Sony IMX890 (wide) + 13 MP (ultrawide) + 5 MP (macro)",
        cameraFront: "32 MP",
        battery: "5500 mAh, 65W HyperCharge",
        display: '6.78" Samsung E6 AMOLED, 165Hz, 1080 x 2400 pixels',
        os: "Android 14, ROG UI",
        year: 2024,
        category: ["gaming", "flagship"],
        rating: 4.6,
        editorReview: "ROG Phone 8 Pro adalah raja gaming mobile dengan RAM 24GB dan layar 165Hz. AirTrigger ultrasonic dan cooling vapor chamber memastikan performa konsisten saat marathon gaming.",
        color: "#ff0050"
    },
    {
        id: 13,
        name: "Samsung Galaxy A15",
        brand: "Samsung",
        slug: generateSlug("Samsung Galaxy A15"),
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a15-5g-new.jpg",
        price: 2299000,
        chipset: "MediaTek Helio G99",
        cpu: "Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)",
        ram: "6 GB",
        storage: "128 GB",
        cameraMain: "50 MP (wide) + 5 MP (ultrawide) + 2 MP (macro)",
        cameraFront: "13 MP",
        battery: "5000 mAh, 25W wired",
        display: '6.5" Super AMOLED, 90Hz, 1080 x 2340 pixels',
        os: "Android 14, One UI 6.0",
        year: 2024,
        category: ["budget"],
        rating: 4.0,
        editorReview: "Samsung Galaxy A15 memberikan layar Super AMOLED di harga 2 jutaan — sesuatu yang jarang ditemui. Baterai 5000mAh awet seharian dan update software terjamin dari Samsung.",
        color: "#2d89ef"
    },
    {
        id: 14,
        name: "Google Pixel 8 Pro",
        brand: "Google",
        slug: generateSlug("Google Pixel 8 Pro"),
        image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg",
        price: 16499000,
        chipset: "Google Tensor G3",
        cpu: "Nona-core (1x3.0 GHz Cortex-X3 & 4x2.45 GHz Cortex-A715 & 4x2.15 GHz Cortex-A510)",
        ram: "12 GB",
        storage: "128 GB / 256 GB / 512 GB / 1 TB",
        cameraMain: "50 MP (wide) + 48 MP (ultrawide) + 48 MP (telephoto 5x)",
        cameraFront: "10.5 MP",
        battery: "5050 mAh, 30W wired, 23W wireless",
        display: '6.7" LTPO OLED, 120Hz, 1344 x 2992 pixels',
        os: "Android 14",
        year: 2023,
        category: ["flagship", "kamera"],
        rating: 4.5,
        editorReview: "Pixel 8 Pro menawarkan pengalaman Android murni terbaik dengan AI photography yang revolusioner. Magic Eraser, Best Take, dan Audio Magic Eraser membuat editing foto/video semudah sekali klik.",
        color: "#4285f4"
    },
    {
        id: 15,
        name: "Infinix GT 20 Pro",
        brand: "Infinix",
        slug: generateSlug("Infinix GT 20 Pro"),
        image: "https://fdn2.gsmarena.com/vv/bigpic/infinix-gt-20-pro.jpg",
        price: 3499000,
        chipset: "MediaTek Dimensity 8200 Ultimate",
        cpu: "Octa-core (1x3.1 GHz Cortex-A78 & 3x3.0 GHz Cortex-A78 & 4x2.0 GHz Cortex-A55)",
        ram: "8 GB",
        storage: "256 GB",
        cameraMain: "108 MP Samsung HM6 (wide) + 2 MP (depth) + AMOLED ring light",
        cameraFront: "32 MP",
        battery: "5000 mAh, 45W wired",
        display: '6.78" AMOLED, 120Hz, 1080 x 2436 pixels',
        os: "Android 14, XOS 14",
        year: 2024,
        category: ["gaming", "budget"],
        rating: 4.1,
        editorReview: "Infinix GT 20 Pro hadir dengan desain gaming RGB yang unik dan performa Dimensity 8200 Ultimate yang kencang. Di harga 3 jutaan, ini adalah entry point terbaik ke dunia gaming mobile.",
        color: "#00d4ff"
    }
];

export const categories = [
    {
        id: "budget",
        name: "Budget Terbaik",
        icon: "💰",
        description: "HP terbaik dengan harga terjangkau",
        gradient: "linear-gradient(135deg, #00b894, #00cec9)"
    },
    {
        id: "kamera",
        name: "Kamera Terbaik",
        icon: "📸",
        description: "HP dengan kualitas kamera terbaik",
        gradient: "linear-gradient(135deg, #6c5ce7, #a29bfe)"
    },
    {
        id: "gaming",
        name: "Gaming Terbaik",
        icon: "🎮",
        description: "HP paling kencang untuk gaming",
        gradient: "linear-gradient(135deg, #e17055, #d63031)"
    },
    {
        id: "flagship",
        name: "Flagship Premium",
        icon: "👑",
        description: "HP tercanggih tanpa kompromi",
        gradient: "linear-gradient(135deg, #fdcb6e, #f39c12)"
    }
];

export const brands = [...new Set(phones.map(p => p.brand))].sort();

export const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
};

export const getTokopediaLink = (name) => {
    return `https://www.tokopedia.com/search?st=&q=${encodeURIComponent(name)}`;
};

export const getShopeeLink = (name) => {
    return `https://shopee.co.id/search?keyword=${encodeURIComponent(name)}`;
};

export const searchPhones = (query) => {
    if (!query || query.trim() === '') return phones;
    const q = query.toLowerCase().trim();
    return phones.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.chipset.toLowerCase().includes(q) ||
        p.category.some(c => c.includes(q))
    );
};

export const filterPhones = (phoneList, filters) => {
    let result = [...phoneList];

    if (filters.brand) {
        result = result.filter(p => p.brand === filters.brand);
    }
    if (filters.category) {
        result = result.filter(p => p.category.includes(filters.category));
    }
    if (filters.minPrice) {
        result = result.filter(p => p.price >= filters.minPrice);
    }
    if (filters.maxPrice) {
        result = result.filter(p => p.price <= filters.maxPrice);
    }
    if (filters.minRam) {
        const minRam = parseInt(filters.minRam);
        result = result.filter(p => parseInt(p.ram) >= minRam);
    }
    if (filters.year) {
        result = result.filter(p => p.year === parseInt(filters.year));
    }

    return result;
};

export const sortPhones = (phoneList, sortBy) => {
    const sorted = [...phoneList];
    switch (sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'newest':
            return sorted.sort((a, b) => b.year - a.year);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        default:
            return sorted;
    }
};

export const getPhoneById = (id) => {
    return phones.find(p => p.id === parseInt(id));
};

export const getRelatedPhones = (phone, limit = 4) => {
    return phones
        .filter(p => p.id !== phone.id && (p.brand === phone.brand || p.category.some(c => phone.category.includes(c))))
        .slice(0, limit);
};

export const getPhonesByCategory = (category, limit) => {
    const filtered = phones.filter(p => p.category.includes(category));
    return limit ? filtered.slice(0, limit) : filtered;
};

export const getTopPhones = (limit = 6) => {
    return [...phones].sort((a, b) => b.rating - a.rating).slice(0, limit);
};

export default phones;
