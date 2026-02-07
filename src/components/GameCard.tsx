import React from 'react';
import Image from 'next/image';

interface GameCardProps {
    title: string;
    image: string;
    rating: number;
    tags: string[];
}

const GameCard: React.FC<GameCardProps> = ({ title, image, rating, tags }) => {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-lg border border-hud-border bg-[var(--card-bg)] transition-all duration-300 hover:border-accent-primary hover:shadow-[0_0_15px_var(--accent-glow)]">
            {/* Image Container with Aspect Ratio */}
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Rating Badge Overlay */}
                <div className="absolute right-2 top-2 rounded bg-black/80 px-2 py-1 text-sm font-bold text-accent-primary border border-accent-primary backdrop-blur-sm">
                    {rating.toFixed(1)}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-2 font-mono text-lg font-bold text-text-highlight uppercase tracking-wider group-hover:text-accent-primary transition-colors">
                    {title}
                </h3>

                <div className="mt-auto flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded bg-hud-panel px-2 py-0.5 text-xs font-medium text-text-muted border border-hud-border"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Decorative Corner (Gaming UI Element) */}
            <div className="absolute bottom-0 right-0 h-2 w-2 bg-hud-border transition-colors group-hover:bg-accent-primary" />
        </div>
    );
};

export default GameCard;
