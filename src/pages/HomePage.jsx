import { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PhoneCard from '../components/PhoneCard';
import InteractiveButton from '../components/InteractiveButton';
import { getTopPhones, categories, searchPhones, getPhonesByCategory } from '../data/phones';
import './HomePage.css';

export default function HomePage() {
    const [heroQuery, setHeroQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();
    const searchRef = useRef(null);
    const topPhones = getTopPhones(6);
    const budgetPicks = getPhonesByCategory('budget', 6);

    // Combine and deduplicate phones, limit to 12
    const allPhones = useMemo(() => {
        const combined = [...topPhones, ...budgetPicks];
        const unique = combined.filter((v, i, a) => a.findIndex(x => x.id === v.id) === i);
        return unique.slice(0, 12);
    }, [topPhones, budgetPicks]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Intersection Observer for scroll reveal animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.section').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleHeroSearch = (e) => {
        e.preventDefault();
        if (heroQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(heroQuery.trim())}`);
            setShowSuggestions(false);
        }
    };

    const handleInputChange = (e) => {
        const val = e.target.value;
        setHeroQuery(val);
        if (val.trim().length > 0) {
            const filtered = searchPhones(val).slice(0, 5);
            setSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (phone) => {
        setHeroQuery('');
        setShowSuggestions(false);
        navigate(`/phone/${phone.slug}`);
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1 className="hero-title animate-fade-in-up">
                        Temukan smartphone terbaik untuk kebutuhanmu
                    </h1>
                    <form className="hero-search-wrap animate-fade-in-up" onSubmit={handleHeroSearch} ref={searchRef}>
                        <input
                            type="text"
                            className="hero-search-input"
                            placeholder="Cari smartphone... contoh: Samsung Galaxy S24"
                            value={heroQuery}
                            onChange={handleInputChange}
                            onFocus={() => heroQuery.trim() && setShowSuggestions(true)}
                            id="hero-search-input"
                        />
                        {heroQuery && (
                            <button
                                type="button"
                                className="hero-search-clear"
                                onClick={() => { setHeroQuery(''); setSuggestions([]); setShowSuggestions(false); }}
                            >
                                ✕
                            </button>
                        )}
                        <button type="submit">
                            <InteractiveButton text="Cari" variant="white" />
                        </button>

                        {showSuggestions && suggestions.length > 0 && (
                            <div className="search-suggestions">
                                {suggestions.map(phone => (
                                    <div
                                        key={phone.id}
                                        className="suggestion-item"
                                        onClick={() => handleSuggestionClick(phone)}
                                    >
                                        <img src={phone.image} alt={phone.name} className="suggestion-img" loading="lazy" />
                                        <div className="suggestion-info">
                                            <span className="suggestion-name">{phone.name}</span>
                                            <span className="suggestion-brand">{phone.brand}</span>
                                        </div>
                                    </div>
                                ))}
                                <div
                                    className="suggestion-all"
                                    onClick={handleHeroSearch}
                                >
                                    Lihat semua hasil untuk "{heroQuery}" →
                                </div>
                            </div>
                        )}
                    </form>
                    {!showSuggestions && !heroQuery && (
                        <div className="hero-tags animate-fade-in-up">
                            <span className="hero-tag-label">Populer:</span>
                            {['Samsung Galaxy S24', 'iPhone 15', 'Xiaomi 14', 'POCO F6'].map(tag => (
                                <Link key={tag} to={`/search?q=${encodeURIComponent(tag)}`} className="hero-tag">
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Top Rated Phones */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Rekomendasi Terbaik</h2>
                    <div className="grid grid-4 stagger-children">
                        {allPhones.map(phone => (
                            <PhoneCard key={phone.id} phone={phone} />
                        ))}
                    </div>
                    <div className="home-cta-center">
                        <Link to="/search">
                            <InteractiveButton text="Lihat Selengkapnya" />
                        </Link>
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
                            <Link to="/compare">
                                <InteractiveButton text="Bandingkan Sekarang" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
