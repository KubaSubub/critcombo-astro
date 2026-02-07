import React from 'react';

interface ContentGridProps {
    children: React.ReactNode;
    title?: string;
}

const ContentGrid: React.FC<ContentGridProps> = ({ children, title }) => {
    return (
        <section className="w-full py-8">
            {title && (
                <div className="mb-6 flex items-center gap-4">
                    <h2 className="font-mono text-2xl font-bold uppercase tracking-widest text-text-highlight">
                        {title}
                    </h2>
                    <div className="h-[1px] flex-1 bg-hud-border" />
                    <div className="h-2 w-2 bg-accent-primary" />
                </div>
            )}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {children}
            </div>
        </section>
    );
};

export default ContentGrid;
