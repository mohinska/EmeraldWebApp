import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

export interface SidebarItem {
    label: string;
    path: string;
    isSectionHeader?: boolean;
}

export interface SidebarAction {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'gray' | 'outline';
}

export interface SidebarCV {
    id: string;
    title: string;
}

export interface SidebarProps {
    items: SidebarItem[];
    actions?: SidebarAction[];
    cvs?: SidebarCV[];
    onCVSelect?: (cvId: string) => void;
    onNewCV?: () => void;
    onAIGenerator?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    items,
    actions = [],
    cvs = [],
    onCVSelect,
    onNewCV,
    onAIGenerator,
}) => {
    const location = useLocation();

    return (
        <aside className="w-64 bg-emerald-gray min-h-screen p-4 flex flex-col shadow-emerald-lg">
            <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
                {items.map((item, index) => {
                    if (item.isSectionHeader) {
                        return (
                            <div
                                key={index}
                                className="text-white text-sm font-pixel mt-4 mb-2 px-2 uppercase tracking-wider"
                            >
                                {item.label}
                            </div>
                        );
                    }

                    const isActive = location.pathname === item.path;
                    const baseStyles = 'w-full border border-white rounded px-4 py-3 text-left font-pixel transition-colors shadow-emerald';
                    const activeStyles = isActive
                        ? 'bg-gray-500 text-white'
                        : 'bg-transparent text-white hover:bg-emerald-dark';

                    return (
                        <Link
                            key={index}
                            to={item.path}
                            className={`${baseStyles} ${activeStyles}`}
                        >
                            {item.label}
                        </Link>
                    );
                })}

                {/* Your CVs Section */}
                {cvs.length > 0 && (
                    <>
                        <div className="text-white text-sm font-pixel mt-4 mb-2 px-2 uppercase tracking-wider">
                            Your CVs
                        </div>
                        {cvs.map((cv) => (
                            <button
                                key={cv.id}
                                type="button"
                                onClick={() => onCVSelect?.(cv.id)}
                                className="w-full border border-white rounded px-4 py-3 text-left font-pixel transition-colors bg-transparent text-white hover:bg-emerald-dark shadow-emerald"
                            >
                                {cv.title}
                            </button>
                        ))}
                    </>
                )}

                {/* CV Actions */}
                {(onNewCV || onAIGenerator) && (
                    <>
                        {onNewCV && (
                            <Button
                                variant="outline"
                                fullWidth
                                onClick={onNewCV}
                                className="mt-4"
                            >
                                New CV
                            </Button>
                        )}
                        {onAIGenerator && (
                            <Button
                                variant="outline"
                                fullWidth
                                onClick={onAIGenerator}
                            >
                                AI Generator
                            </Button>
                        )}
                    </>
                )}
            </nav>

            {actions.length > 0 && (
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white">
                    {actions.map((action, index) => (
                        <Button
                            key={index}
                            variant={action.variant || 'primary'}
                            fullWidth
                            onClick={action.onClick}
                        >
                            {action.label}
                        </Button>
                    ))}
                </div>
            )}
        </aside>
    );
};

export default Sidebar;

