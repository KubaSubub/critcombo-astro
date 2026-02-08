"use client";

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

import Link from 'next/link';
// ... imports

interface GameCardProps {
    title: string;
    image: string;
    rating: number;
    genre: string;
    year: number;
    slug: string;
    delay?: number;
}

const GameCard: React.FC<GameCardProps> = ({ title, image, rating, genre, year, slug, delay = 0 }) => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <Link href={`/games/${slug}`} className="block h-full">
            <div
                ref={ref}
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.4s ease-out ${delay}ms`
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-white/5 bg-bg-elevated transition-all duration-300 hover:border-accent-primary hover:shadow-[0_0_40px_var(--accent-glow)] hover:-translate-y-2 will-change-transform"
            >
                {/* Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Rating Badge */}
                    <div className="absolute right-2 top-2 flex items-center gap-1 bg-bg-hud/80 px-2 py-1 backdrop-blur-sm">
                        <Star className="h-3 w-3 fill-accent-primary text-accent-primary" />
                        <span className="font-display text-[10px] font-bold text-text-primary">{rating.toFixed(1)}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                    <div className="mb-1 font-display text-[10px] tracking-widest text-accent-primary group-hover:text-white transition-colors duration-300">{genre}</div>
                    <h3 className="mb-2 line-clamp-1 font-display text-sm tracking-tight text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                        {title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between">
                        <span className="font-body text-xs text-text-secondary">{year}</span>
                        <span className="font-display text-[10px] tracking-widest text-text-muted group-hover:text-text-primary transition-colors">
                            DETALE &gt;
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GameCard;
