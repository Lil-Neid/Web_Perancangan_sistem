import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import phones, { formatPrice } from '../data/phones';
import InteractiveButton from '../components/InteractiveButton';
import './ComparePage.css';

const MAX_COMPARE = 3;

export default function ComparePage() {
    const [selected, setSelected] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const addPhone = (phone) => {
        if (selected.length < MAX_COMPARE && !selected.find(s => s.id === phone.id)) {
            setSelected([...selected, phone]);
        }
        setShowDropdown(null);
        setSearchQuery('');
    };

    const removePhone = (phoneId) => {
        setSelected(selected.filter(s => s.id !== phoneId));
    };

    const filteredPhones = phones.filter(p =>
        !selected.find(s => s.id === p.id) &&
        (p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.brand.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Show only filled slots + 1 empty slot (max 3)
    const visibleSlots = Math.min(selected.length + 1, MAX_COMPARE);

    const specRows = [
        { label: 'Harga', key: 'price', format: (v) => formatPrice(v) },
        { label: 'Rating', key: 'rating', format: (v) => `⭐ ${v} / 5.0` },
        { label: 'Chipset', key: 'chipset' },
        { label: 'CPU', key: 'cpu' },
        { label: 'RAM', key: 'ram' },
        { label: 'Storage', key: 'storage' },
        { label: 'Layar', key: 'display' },
        { label: 'Kamera Belakang', key: 'cameraMain' },
        { label: 'Kamera Depan', key: 'cameraFront' },
        { label: 'Baterai', key: 'battery' },
        { label: 'OS', key: 'os' },
        { label: 'Tahun', key: 'year' },
    ];

    const getBest = (key) => {
        if (selected.length < 2) return null;
        if (key === 'price') {
            const minPrice = Math.min(...selected.map(s => s[key]));
            return selected.find(s => s[key] === minPrice)?.id;
        }
        if (key === 'rating' || key === 'year') {
            const max = Math.max(...selected.map(s => s[key]));
            return selected.find(s => s[key] === max)?.id;
        }
        return null;
    };

    return (
        <div className="compare-page">
            <div className="container">
                <div className="compare-header animate-fade-in-up">
                    <h1 className="compare-title">Bandingkan Smartphone</h1>
                    <p className="compare-subtitle">Pilih hingga {MAX_COMPARE} smartphone untuk dibandingkan secara berdampingan</p>
                </div>

                {/* Phone Selection */}
                <div className="compare-selectors animate-fade-in-up">
                    {Array.from({ length: visibleSlots }).map((_, idx) => (
                        <div
                            key={idx}
                            className={`compare-slot ${selected[idx] ? 'filled' : 'new'}`}
                        >
                            {selected[idx] ? (
                                <div className="compare-selected-card">
                                    <button className="compare-remove" onClick={() => removePhone(selected[idx].id)}>✕</button>
                                    <img src={selected[idx].image} alt={selected[idx].name} className="compare-selected-img" loading="lazy" />
                                    <span className="compare-selected-brand">{selected[idx].brand}</span>
                                    <h4 className="compare-selected-name">{selected[idx].name}</h4>
                                    <span className="compare-selected-price">{formatPrice(selected[idx].price)}</span>
                                </div>
                            ) : (
                                <div className="compare-empty-slot">
                                    <div className="compare-add-wrap" ref={dropdownRef}>
                                        <button
                                            className="compare-add-btn"
                                            onClick={() => setShowDropdown(showDropdown === idx ? null : idx)}
                                        >
                                            <span className="compare-add-icon">+</span>
                                            <span>Pilih HP {idx + 1}</span>
                                        </button>
                                        {showDropdown === idx && (
                                            <div className="compare-dropdown">
                                                <input
                                                    type="text"
                                                    placeholder="Cari HP..."
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                    className="compare-dropdown-search"
                                                    autoFocus
                                                />
                                                <div className="compare-dropdown-list">
                                                    {filteredPhones.map(phone => (
                                                        <div
                                                            key={phone.id}
                                                            className="compare-dropdown-item"
                                                            onClick={() => addPhone(phone)}
                                                        >
                                                            <img src={phone.image} alt={phone.name} loading="lazy" />
                                                            <div>
                                                                <span className="dd-name">{phone.name}</span>
                                                                <span className="dd-price">{formatPrice(phone.price)}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    {filteredPhones.length === 0 && (
                                                        <div className="compare-dropdown-empty">Tidak ada HP ditemukan</div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                {selected.length >= 2 && (
                    <div className="compare-table-wrap animate-fade-in-up">
                        <h2 className="section-title">Perbandingan Spesifikasi</h2>
                        <div className="compare-table" style={{ '--compare-count': selected.length }}>
                            <div className="compare-table-header">
                                <div className="compare-table-label">Spesifikasi</div>
                                {selected.map(phone => (
                                    <div key={phone.id} className="compare-table-phone-name">
                                        {phone.name}
                                    </div>
                                ))}
                            </div>
                            {specRows.map(row => {
                                const bestId = getBest(row.key);
                                return (
                                    <div key={row.key} className="compare-table-row">
                                        <div className="compare-table-label">{row.label}</div>
                                        {selected.map(phone => (
                                            <div
                                                key={phone.id}
                                                className={`compare-table-value ${phone.id === bestId ? 'best' : ''}`}
                                            >
                                                {row.format ? row.format(phone[row.key]) : phone[row.key]}
                                                {phone.id === bestId && <span className="best-badge">🏆</span>}
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {selected.length < 2 && showDropdown === null && (
                    <div className="compare-onboarding animate-fade-in-up">
                        <h3>Pilih minimal 2 HP untuk mulai membandingkan</h3>
                        <p>Klik tombol "+" di atas untuk menambahkan smartphone yang ingin kamu bandingkan</p>
                        <Link to="/search">
                            <InteractiveButton text="Jelajahi Smartphone" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
