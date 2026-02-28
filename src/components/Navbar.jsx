import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import phones from '../data/phones';
import './Navbar.css';

export default function Navbar() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const searchRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (e) => {
        const val = e.target.value;
        setQuery(val);
        if (val.trim().length > 0) {
            const filtered = phones
                .filter(p =>
                    p.name.toLowerCase().includes(val.toLowerCase()) ||
                    p.brand.toLowerCase().includes(val.toLowerCase())
                )
                .slice(0, 5);
            setSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query.trim())}`);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (phone) => {
        setQuery('');
        setShowSuggestions(false);
        navigate(`/phone/${phone.id}`);
    };

    const navLinks = [
        { to: '/', label: 'Beranda', icon: '🏠' },
        { to: '/search', label: 'Cari HP', icon: '🔍' },
        { to: '/compare', label: 'Bandingkan', icon: '⚖️' },
        { to: '/about', label: 'Tentang', icon: 'ℹ️' },
    ];

    return (
        <nav className="navbar glass">
            <div className="navbar-inner container">
                <Link to="/" className="navbar-brand">
                    <span className="brand-icon">📱</span>
                    <span className="brand-text">ReviewHP</span>
                </Link>

                <form className="navbar-search" onSubmit={handleSubmit} ref={searchRef}>
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Cari smartphone..."
                        value={query}
                        onChange={handleSearch}
                        onFocus={() => query.trim() && setShowSuggestions(true)}
                        id="navbar-search-input"
                    />
                    {query && (
                        <button
                            type="button"
                            className="search-clear"
                            onClick={() => { setQuery(''); setSuggestions([]); setShowSuggestions(false); }}
                        >
                            ✕
                        </button>
                    )}

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
                                onClick={handleSubmit}
                            >
                                Lihat semua hasil untuk "{query}" →
                            </div>
                        </div>
                    )}
                </form>

                <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
                    {navLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                        >
                            <span className="nav-icon">{link.icon}</span>
                            <span>{link.label}</span>
                        </Link>
                    ))}
                </div>

                <button
                    className="hamburger"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                    id="hamburger-btn"
                >
                    <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>
        </nav>
    );
}
