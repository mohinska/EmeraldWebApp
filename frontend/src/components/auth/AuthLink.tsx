import React from 'react';
import { Link } from 'react-router-dom';

export interface AuthLinkProps {
    to: string;
    text: string;
    linkText: string;
    className?: string;
}

const AuthLink: React.FC<AuthLinkProps> = ({
    to,
    text,
    linkText,
    className = '',
}) => {
    return (
        <div className={`text-center font-pixel ${className}`}>
            <span className="text-white">{text} </span>
            <Link
                to={to}
                className="text-emerald-green hover:underline transition-colors"
            >
                {linkText}
            </Link>
        </div>
    );
};

export default AuthLink;

