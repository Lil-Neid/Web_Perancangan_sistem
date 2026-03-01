import { ArrowRight } from 'lucide-react';
import './InteractiveButton.css';

export default function InteractiveButton({ 
    text = "Button", 
    onClick, 
    className = "",
    variant = "default",
    ...props 
}) {
    return (
        <button 
            className={`interactive-btn ${variant} ${className}`}
            onClick={onClick}
            {...props}
        >
            <span className="btn-text">{text}</span>
            <span className="btn-text-hover">
                {text}
                <ArrowRight size={16} />
            </span>
        </button>
    );
}
