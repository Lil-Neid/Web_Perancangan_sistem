import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import homeIcon from '../assets/icons/home.json';
import searchIcon from '../assets/icons/search.json';
import aboutIcon from '../assets/icons/about.json';
import compareIcon from '../assets/icons/compare.json';
import './Navbar.css';

const HOME_ICON = { ...homeIcon };
const SEARCH_ICON = { ...searchIcon };
const ABOUT_ICON = { ...aboutIcon };
const COMPARE_ICON = { ...compareIcon };

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        {
            to: '/',
            label: 'home',
            icon: <lord-icon trigger="hover" icon={HOME_ICON} size="24px" color="#000000"></lord-icon>
        },
        { to: '/search', label: 'Search', icon: <lord-icon trigger="hover" icon={SEARCH_ICON} size="24px" color="#000000"></lord-icon> },
        { to: '/compare', label: 'Compare', icon: <lord-icon trigger="hover" icon={COMPARE_ICON} size="24px" color="#000000"></lord-icon> },
        { to: '/about', label: 'About us', icon: <lord-icon trigger="hover" icon={ABOUT_ICON} size="24px" color="#000000"></lord-icon> },
    ];

    return (
        <nav className="navbar glass">
            <div className="navbar-inner container">
                <Link to="/" className="brand-text">
                    ReviewHP
                    <span className="built-by">By Nickholas K.</span>
                </Link>

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
