import { Link } from 'react-router-dom';
import InteractiveButton from '../components/InteractiveButton';
import './AboutPage.css';

export default function AboutPage() {
    return (
        <div className="about-page">
            <div className="container">
                {/* Hero */}
                <div className="about-hero animate-fade-in-up">
                    <div className="about-hero-badge">
                        <span>Tentang ReviewHP</span>
                    </div>
                    <h1 className="about-title">
                        Platform Review Smartphone
                    </h1>
                    <p className="about-subtitle">
                        Kami membantu kamu menemukan smartphone terbaik berdasarkan kebutuhan, budget, dan preferensi.
                    </p>
                </div>

                {/* Mission */}
                <div className="about-grid animate-fade-in-up">
                    <div className="about-card">
                        <h3>Misi Kami</h3>
                        <p>Memberikan informasi spesifikasi dan review HP yang akurat, objektif, dan mudah dipahami untuk membantu pengguna Indonesia membuat keputusan pembelian yang tepat.</p>
                    </div>
                    <div className="about-card">
                        <h3>Apa yang Kami Tawarkan</h3>
                        <p>Spesifikasi lengkap, review editor, perbandingan HP, dan link langsung ke Tokopedia & Shopee untuk kemudahan berbelanja.</p>
                    </div>
                    <div className="about-card">
                        <h3>Mengapa ReviewHP?</h3>
                        <p>Kami fokus pada kebutuhan pengguna Indonesia — dengan harga dalam Rupiah, link marketplace lokal, dan review dalam Bahasa Indonesia.</p>
                    </div>
                </div>

                {/* Methodology */}
                <section className="about-section animate-fade-in-up">
                    <h2 className="section-title">Metodologi Review</h2>
                    <div className="methodology-grid">
                        <div className="methodology-item">
                            <div className="methodology-number">01</div>
                            <h4>Pengujian Menyeluruh</h4>
                            <p>Setiap HP diuji oleh tim editor kami secara langsung selama minimal 1 minggu, meliputi performa sehari-hari, kamera, baterai, dan gaming.</p>
                        </div>
                        <div className="methodology-item">
                            <div className="methodology-number">02</div>
                            <h4>Benchmark Standar</h4>
                            <p>Kami menggunakan benchmark standar industri (AnTuTu, Geekbench, PCMark) untuk memastikan perbandingan yang adil antar perangkat.</p>
                        </div>
                        <div className="methodology-item">
                            <div className="methodology-number">03</div>
                            <h4>Rating Objektif</h4>
                            <p>Rating diberikan berdasarkan kriteria terukur: performa, kamera, baterai, layar, build quality, dan value for money.</p>
                        </div>
                        <div className="methodology-item">
                            <div className="methodology-number">04</div>
                            <h4>Update Berkala</h4>
                            <p>Harga dan ketersediaan diperbarui secara berkala untuk memastikan informasi yang kamu dapatkan selalu terkini.</p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <section className="about-disclaimer animate-fade-in-up">
                    <h3>Disclaimer</h3>
                    <ul>
                        <li>Harga yang ditampilkan merupakan estimasi dan dapat berbeda di setiap seller/marketplace.</li>
                        <li>Spesifikasi diambil dari sumber resmi pabrikan dan dapat berubah tanpa pemberitahuan.</li>
                        <li>Link marketplace mengarah ke halaman pencarian, bukan ke seller tertentu.</li>
                        <li>ReviewHP tidak berafiliasi dengan brand smartphone manapun.</li>
                    </ul>
                </section>

                {/* CTA */}
                <div className="about-cta animate-fade-in-up">
                    <h3>Siap Menemukan HP Impianmu?</h3>
                    <div className="about-cta-buttons">
                        <Link to="/search">
                            <InteractiveButton text="Cari Smartphone" />
                        </Link>
                        <Link to="/compare">
                            <InteractiveButton text="Bandingkan HP" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
