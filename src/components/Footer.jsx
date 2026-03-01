import { Link } from 'react-router-dom';
import './Footer.css';
import tokopediaIcon from '../assets/icons/tokopedia_icon.svg';
import shopeeIcon from '../assets/icons/shopee_icon.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-about">
                        <div className="footer-brand">
                            <span className="brand-icon">📱</span>
                            <span className="brand-text">ReviewHP</span>
                        </div>
                        <p className="footer-desc">
                            Platform review smartphone di Indonesia. Temukan HP terbaik
                            dengan spesifikasi detail dan link langsung ke marketplace.
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">Navigasi</h4>
                        <Link to="/" className="footer-link">Beranda</Link>
                        <Link to="/search" className="footer-link">Cari HP</Link>
                        <Link to="/compare" className="footer-link">Bandingkan HP</Link>
                        <Link to="/about" className="footer-link">Tentang Kami</Link>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">Kategori</h4>
                        <Link to="/search?category=budget" className="footer-link">Budget Terbaik</Link>
                        <Link to="/search?category=kamera" className="footer-link">Kamera Terbaik</Link>
                        <Link to="/search?category=gaming" className="footer-link">Gaming Terbaik</Link>
                        <Link to="/search?category=flagship" className="footer-link">Flagship Premium</Link>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">Marketplace</h4>
                        <a href="https://www.tokopedia.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <img src={tokopediaIcon} alt="Tokopedia" className="marketplace-icon" />
                            Tokopedia
                        </a>
                        <a href="https://shopee.co.id" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <img src={shopeeIcon} alt="Shopee" className="marketplace-icon" />
                            Shopee
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} ReviewHP. Semua harga bersifat estimasi dan dapat berubah.</p>
                    <p className="footer-disclaimer">
                        Harga dan spesifikasi bisa berubah sewaktu-waktu. Pastikan cek marketplace untuk info terbaru.
                    </p>
                </div>
            </div>
        </footer>
    );
}
