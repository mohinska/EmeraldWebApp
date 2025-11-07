import React from 'react';
import emeraldLogo from '../assets/logo.png';

interface HeaderProps {
    username?: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
    return (
        <div className="sticky top-0 z-50 bg-emerald-dark w-full left-0 right-0">
            <header className="w-full flex justify-between items-center px-6 py-4">
                {/* Logo and EMERALD text */}
                <div className="flex items-center gap-2">
                    <img
                        src={emeraldLogo}
                        alt="Emerald Logo"
                        className="w-8 h-8"
                    />
                    <span className="text-white text-xl font-bold font-heading tracking-wider">emerald</span>
                </div>

                {/* User icon and username - only show if username is provided */}
                {username && (
                    <div className="flex items-center gap-2">
                        <svg
                            className="w-6 h-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white text-lg font-pixel">{username}</span>
                    </div>
                )}
            </header>

            <div className="w-full h-0.5 bg-emerald-gray"></div>
        </div>
    );
};

export default Header;
