import React from 'react';

export interface LibraryLinkProps {
    title: string;
    url: string;
    onClick?: () => void;
}

const LibraryLink: React.FC<LibraryLinkProps> = ({ title, url, onClick }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
            className="flex items-center gap-2 border border-white rounded px-4 py-3 bg-emerald-gray text-white font-pixel hover:bg-emerald-dark transition-colors shadow-emerald"
        >
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
            </svg>
            <span>{title}</span>
        </a>
    );
};

export default LibraryLink;

