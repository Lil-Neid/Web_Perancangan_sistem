import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PhoneCard from '../components/PhoneCard';
import { getTopPhones, categories, searchPhones, getPhonesByCategory } from '../data/phones';
import './HomePage.css';

export default function HomePage() {
    const [heroQuery, setHeroQuery] = useState('');
    const navigate = useNavigate();
    const topPhones = getTopPhones(6);
    const budgetPicks = getPhonesByCategory('budget', 4);

    const handleHeroSearch = (e) => {
        e.preventDefault();
        if (heroQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(heroQuery.trim())}`);
        }
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1 className="hero-title animate-fade-in-up">
                        Temukan smartphone terbaik untuk kebutuhanmu
                    </h1>
                    <form className="hero-search-wrap animate-fade-in-up" onSubmit={handleHeroSearch}>
                        <span className="hero-search-icon">🔍</span>
                        <input
                            type="text"
                            className="hero-search-input"
                            placeholder="Cari smartphone... contoh: Samsung Galaxy S24"
                            value={heroQuery}
                            onChange={(e) => setHeroQuery(e.target.value)}
                            id="hero-search-input"
                        />
                        <button type="submit" className="btn btn-primary hero-search-btn">
                            Cari
                        </button>
                    </form>
                    <div className="hero-tags animate-fade-in-up">
                        <span className="hero-tag-label">Populer:</span>
                        {['Samsung Galaxy S24', 'iPhone 15', 'Xiaomi 14', 'POCO F6'].map(tag => (
                            <Link key={tag} to={`/search?q=${encodeURIComponent(tag)}`} className="hero-tag">
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Rated Phones */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Rekomendasi Terbaik</h2>
                    <div className="grid grid-3 stagger-children">
                        {topPhones.map(phone => (
                            <PhoneCard key={phone.id} phone={phone} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Budget Picks */}
            <section className="section section-budget">
                <div className="container">
                    <h2 className="section-title">Pilihan Budget Terbaik</h2>
                    <div className="grid grid-4 stagger-children">
                        {budgetPicks.map(phone => (
                            <PhoneCard key={phone.id} phone={phone} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Compare */}
            <section className="section">
                <div className="container">
                    <div className="cta-compare">
                        <div className="cta-content">
                            <h2 className="cta-title">Bingung Pilih HP?</h2>
                            <p className="cta-desc">Bandingkan hingga 3 smartphone sekaligus untuk menemukan yang paling cocok untukmu</p>
                            <Link to="/compare" className="btn btn-primary">
                                Bandingkan Sekarang
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
