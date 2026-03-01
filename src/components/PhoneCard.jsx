import { Link } from 'react-router-dom';
import { formatPrice } from '../data/phones';
import InteractiveButton from './InteractiveButton';
import './PhoneCard.css';

export default function PhoneCard({ phone, onCompare, isInCompare }) {
    return (
        <div className="phone-card">
            <Link to={`/phone/${phone.id}`} className="phone-card-link">
                <div className="phone-card-img-wrap">
                    <img
                        src={phone.image}
                        alt={phone.name}
                        className="phone-card-img"
                        loading="lazy"
                    />
                    <div className="phone-card-badge">
                        <span className="badge">⭐ {phone.rating}</span>
                    </div>
                </div>

                <div className="phone-card-body">
                    <span className="phone-card-brand">{phone.brand}</span>
                    <h3 className="phone-card-name">{phone.name}</h3>

                    <div className="phone-card-specs">
                        <div className="spec-mini">
                            <span className="spec-mini-icon">💾</span>
                            <span>{phone.ram} RAM</span>
                        </div>
                        <div className="spec-mini">
                            <span className="spec-mini-icon">📷</span>
                            <span>{phone.cameraMain.split(' ')[0]} MP</span>
                        </div>
                        <div className="spec-mini">
                            <span className="spec-mini-icon">🔋</span>
                            <span>{phone.battery.split(' ')[0]} mAh</span>
                        </div>
                    </div>

                    <div className="phone-card-price">{formatPrice(phone.price)}</div>
                </div>
            </Link>

            <div className="phone-card-actions">
                <Link to={`/phone/${phone.id}`}>
                    <InteractiveButton text="Detail" />
                </Link>
                {onCompare && (
                    <button
                        className={`btn btn-sm ${isInCompare ? 'btn-compare-active' : 'btn-outline'}`}
                        onClick={(e) => { e.preventDefault(); onCompare(phone); }}
                    >
                        {isInCompare ? '✓ Dipilih' : '⚖️ Bandingkan'}
                    </button>
                )}
            </div>
        </div>
    );
}
