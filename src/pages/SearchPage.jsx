import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import PhoneCard from '../components/PhoneCard';
import phones, { searchPhones, filterPhones, sortPhones, brands, categories, formatPrice } from '../data/phones';
import filterIcon from '../assets/icons/filter.json';
import './SearchPage.css';

const FILTER_ICON = { ...filterIcon };

const PHONES_PER_PAGE = 12;
const priceRanges = [
    { label: 'Semua Harga', min: 0, max: Infinity },
    { label: 'Di bawah 3 juta', min: 0, max: 3000000 },
    { label: '3 - 5 juta', min: 3000000, max: 5000000 },
    { label: '5 - 10 juta', min: 5000000, max: 10000000 },
    { label: '10 - 15 juta', min: 10000000, max: 15000000 },
    { label: 'Di atas 15 juta', min: 15000000, max: Infinity },
];

export default function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filtersOpen, setFiltersOpen] = useState(false);
    const [page, setPage] = useState(1);

    const query = searchParams.get('q') || '';
    const categoryParam = searchParams.get('category') || '';
    const brandParam = searchParams.get('brand') || '';
    const sortParam = searchParams.get('sort') || 'rating';
    const priceParam = searchParams.get('price') || '0';

    const results = useMemo(() => {
        let list = query ? searchPhones(query) : [...phones];

        const filters = {};
        if (categoryParam) filters.category = categoryParam;
        if (brandParam) filters.brand = brandParam;

        const priceRange = priceRanges[parseInt(priceParam)] || priceRanges[0];
        if (priceRange.min > 0) filters.minPrice = priceRange.min;
        if (priceRange.max < Infinity) filters.maxPrice = priceRange.max;

        list = filterPhones(list, filters);
        list = sortPhones(list, sortParam);

        return list;
    }, [query, categoryParam, brandParam, sortParam, priceParam]);

    const totalPages = Math.ceil(results.length / PHONES_PER_PAGE);
    const paginatedResults = results.slice((page - 1) * PHONES_PER_PAGE, page * PHONES_PER_PAGE);

    useEffect(() => {
        setPage(1);
    }, [query, categoryParam, brandParam, sortParam, priceParam]);

    const updateParam = (key, value) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        setSearchParams(params);
    };

    const clearFilters = () => {
        setSearchParams(query ? { q: query } : {});
    };

    const activeFilterCount = [categoryParam, brandParam, priceParam !== '0' ? priceParam : ''].filter(Boolean).length;

    return (
        <div className="search-page">
            <div className="container">
                {/* Header */}
                <div className="search-header animate-fade-in-up">
                    <div className="search-header-top">
                        <div>
                            <h1 className="search-title">
                                {query ? (
                                    <>Hasil pencarian: <span className="search-query">"{query}"</span></>
                                ) : categoryParam ? (
                                    <>Kategori: <span className="search-query">{categories.find(c => c.id === categoryParam)?.name || categoryParam}</span></>
                                ) : (
                                    'Semua Smartphone'
                                )}
                            </h1>
                            <p className="search-count">{results.length} smartphone ditemukan</p>
                        </div>
                        <button
                            className={`btn btn-outline filter-toggle ${filtersOpen ? 'active' : ''}`}
                            onClick={() => setFiltersOpen(!filtersOpen)}
                        >
                            <lord-icon trigger="hover" icon={FILTER_ICON} size="20px" color="#000000"></lord-icon> Filter {activeFilterCount > 0 && <span className="filter-badge">{activeFilterCount}</span>}
                        </button>
                    </div>

                    {/* Sort */}
                    <div className="search-sort">
                        <span className="sort-label">Urutkan:</span>
                        <div className="sort-options">
                            {[
                                { value: 'rating', label: '⭐ Rating' },
                                { value: 'price-low', label: '💰 Termurah' },
                                { value: 'price-high', label: '💎 Termahal' },
                                { value: 'newest', label: '🆕 Terbaru' },
                                { value: 'name', label: '🔤 A-Z' },
                            ].map(opt => (
                                <button
                                    key={opt.value}
                                    className={`sort-btn ${sortParam === opt.value ? 'active' : ''}`}
                                    onClick={() => updateParam('sort', opt.value)}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="search-layout">
                    {/* Filter Sidebar */}
                    <aside className={`filter-sidebar ${filtersOpen ? 'open' : ''}`}>
                        <div className="filter-header">
                            <h3 className="filter-title">🎛️ Filter</h3>
                            {activeFilterCount > 0 && (
                                <button className="filter-clear" onClick={clearFilters}>Reset</button>
                            )}
                        </div>

                        {/* Category Filter */}
                        <div className="filter-group">
                            <h4 className="filter-group-title">Kategori</h4>
                            <div className="filter-chips">
                                <button
                                    className={`filter-chip ${!categoryParam ? 'active' : ''}`}
                                    onClick={() => updateParam('category', '')}
                                >
                                    Semua
                                </button>
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        className={`filter-chip ${categoryParam === cat.id ? 'active' : ''}`}
                                        onClick={() => updateParam('category', cat.id)}
                                    >
                                        {cat.icon} {cat.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Brand Filter */}
                        <div className="filter-group">
                            <h4 className="filter-group-title">Merek</h4>
                            <div className="filter-chips">
                                <button
                                    className={`filter-chip ${!brandParam ? 'active' : ''}`}
                                    onClick={() => updateParam('brand', '')}
                                >
                                    Semua
                                </button>
                                {brands.map(brand => (
                                    <button
                                        key={brand}
                                        className={`filter-chip ${brandParam === brand ? 'active' : ''}`}
                                        onClick={() => updateParam('brand', brand)}
                                    >
                                        {brand}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Price Filter */}
                        <div className="filter-group">
                            <h4 className="filter-group-title">Harga</h4>
                            <div className="filter-chips filter-chips-col">
                                {priceRanges.map((range, idx) => (
                                    <button
                                        key={idx}
                                        className={`filter-chip ${parseInt(priceParam) === idx ? 'active' : ''}`}
                                        onClick={() => updateParam('price', idx === 0 ? '' : String(idx))}
                                    >
                                        {range.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Results */}
                    <div className="search-results">
                        {paginatedResults.length > 0 ? (
                            <>
                                <div className="grid grid-3 stagger-children">
                                    {paginatedResults.map(phone => (
                                        <PhoneCard key={phone.id} phone={phone} />
                                    ))}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="pagination">
                                        <button
                                            className="btn btn-outline pagination-btn"
                                            disabled={page === 1}
                                            onClick={() => setPage(p => p - 1)}
                                        >
                                            ← Sebelumnya
                                        </button>
                                        <div className="pagination-pages">
                                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                                                <button
                                                    key={p}
                                                    className={`pagination-num ${p === page ? 'active' : ''}`}
                                                    onClick={() => setPage(p)}
                                                >
                                                    {p}
                                                </button>
                                            ))}
                                        </div>
                                        <button
                                            className="btn btn-outline pagination-btn"
                                            disabled={page === totalPages}
                                            onClick={() => setPage(p => p + 1)}
                                        >
                                            Selanjutnya →
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="search-empty">
                                <div className="search-empty-icon">🔍</div>
                                <h3>Tidak ada hasil</h3>
                                <p>Coba ubah kata kunci atau filter pencarian</p>
                                <button className="btn btn-primary" onClick={clearFilters}>Reset Filter</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
