import { useParams, Link } from 'react-router-dom';
import { getPhoneById, getRelatedPhones, formatPrice, getTokopediaLink, getShopeeLink } from '../data/phones';
import PhoneCard from '../components/PhoneCard';
import './PhoneDetailPage.css';

export default function PhoneDetailPage() {
    const { id } = useParams();
    const phone = getPhoneById(id);

    if (!phone) {
        return (
            <div className="detail-page">
                <div className="container">
                    <div className="detail-not-found">
                        <div className="not-found-icon">📱❌</div>
                        <h2>Smartphone Tidak Ditemukan</h2>
                        <p>Smartphone yang kamu cari tidak tersedia.</p>
                        <Link to="/search" className="btn btn-primary">Cari HP Lain</Link>
                    </div>
                </div>
            </div>
        );
    }

    const relatedPhones = getRelatedPhones(phone, 4);

    const specGroups = [
        {
            title: '📱 Layar',
            specs: [
                { label: 'Display', value: phone.display },
            ]
        },
        {
            title: '⚡ Performa',
            specs: [
                { label: 'Chipset', value: phone.chipset },
                { label: 'CPU', value: phone.cpu },
                { label: 'RAM', value: phone.ram },
                { label: 'Storage', value: phone.storage },
            ]
        },
        {
            title: '📷 Kamera',
            specs: [
                { label: 'Kamera Belakang', value: phone.cameraMain },
                { label: 'Kamera Depan', value: phone.cameraFront },
            ]
        },
        {
            title: '🔋 Baterai & OS',
            specs: [
                { label: 'Baterai', value: phone.battery },
                { label: 'Sistem Operasi', value: phone.os },
            ]
        },
    ];

    return (
        <div className="detail-page">
            <div className="container">
                {/* Breadcrumb */}
                <nav className="breadcrumb animate-fade-in">
                    <Link to="/">Beranda</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link to="/search">Smartphone</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span className="breadcrumb-current">{phone.name}</span>
                </nav>

                {/* Hero */}
                <div className="detail-hero">
                    <div className="detail-hero-img animate-fade-in-up">
                        <div className="detail-img-wrap">
                            <img src={phone.image} alt={phone.name} loading="lazy" />
                        </div>
                    </div>
                    <div className="detail-hero-info animate-fade-in-up">
                        <span className="detail-brand">{phone.brand}</span>
                        <h1 className="detail-name">{phone.name}</h1>

                        <div className="detail-meta">
                            <span className="detail-rating">⭐ {phone.rating} / 5.0</span>
                            <span className="detail-year">📅 {phone.year}</span>
                            {phone.category.map(cat => (
                                <Link key={cat} to={`/search?category=${cat}`} className="badge">
                                    {cat}
                                </Link>
                            ))}
                        </div>

                        <div className="detail-price">{formatPrice(phone.price)}</div>

                        <p className="detail-review-text">{phone.editorReview}</p>

                        {/* Quick Specs */}
                        <div className="detail-quick-specs">
                            <div className="quick-spec">
                                <span className="quick-spec-icon">💾</span>
                                <div>
                                    <span className="quick-spec-label">RAM</span>
                                    <span className="quick-spec-value">{phone.ram}</span>
                                </div>
                            </div>
                            <div className="quick-spec">
                                <span className="quick-spec-icon">📷</span>
                                <div>
                                    <span className="quick-spec-label">Kamera</span>
                                    <span className="quick-spec-value">{phone.cameraMain.split(' ')[0]} MP</span>
                                </div>
                            </div>
                            <div className="quick-spec">
                                <span className="quick-spec-icon">🔋</span>
                                <div>
                                    <span className="quick-spec-label">Baterai</span>
                                    <span className="quick-spec-value">{phone.battery.split(',')[0]}</span>
                                </div>
                            </div>
                            <div className="quick-spec">
                                <span className="quick-spec-icon">⚡</span>
                                <div>
                                    <span className="quick-spec-label">Chipset</span>
                                    <span className="quick-spec-value">{phone.chipset.split(' ').slice(0, 2).join(' ')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Marketplace Buttons */}
                        <div className="detail-marketplace">
                            <h3 className="marketplace-title">🛒 Beli Sekarang</h3>
                            <div className="marketplace-btns">
                                <a
                                    href={getTokopediaLink(phone.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-tokopedia"
                                    id="buy-tokopedia"
                                >
                                    🟢 Beli di Tokopedia
                                </a>
                                <a
                                    href={getShopeeLink(phone.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-shopee"
                                    id="buy-shopee"
                                >
                                    🟠 Beli di Shopee
                                </a>
                            </div>
                        </div>

                        <Link to="/compare" className="btn btn-outline detail-compare-btn">
                            ⚖️ Bandingkan dengan HP Lain
                        </Link>
                    </div>
                </div>

                {/* Full Specs */}
                <section className="detail-specs section">
                    <h2 className="section-title">📊 Spesifikasi Lengkap</h2>
                    <div className="specs-grid">
                        {specGroups.map((group, idx) => (
                            <div key={idx} className="spec-group animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <h3 className="spec-group-title">{group.title}</h3>
                                <div className="spec-rows">
                                    {group.specs.map((spec, sIdx) => (
                                        <div key={sIdx} className="spec-row">
                                            <span className="spec-label">{spec.label}</span>
                                            <span className="spec-value">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Related Phones */}
                {relatedPhones.length > 0 && (
                    <section className="section">
                        <h2 className="section-title">📱 Smartphone Terkait</h2>
                        <div className="grid grid-4 stagger-children">
                            {relatedPhones.map(p => (
                                <PhoneCard key={p.id} phone={p} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
