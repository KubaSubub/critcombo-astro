"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Search, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SearchInput() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (query.length >= 2) {
                setIsLoading(true);
                try {
                    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
                    if (res.ok) {
                        const data = await res.json();
                        setResults(data.results || []);
                        setIsOpen(true);
                    }
                } catch (error) {
                    console.error('Search error:', error);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setResults([]);
                setIsOpen(false);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [query]);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (slug: string) => {
        setQuery('');
        setIsOpen(false);
        router.push(`/games/${slug}`);
    };

    return (
        <div className="relative w-full max-w-md group" ref={dropdownRef}>
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                {isLoading ? (
                    <Loader2 className="h-4 w-4 text-[var(--accent-primary)] animate-spin" />
                ) : (
                    <Search className="h-4 w-4 text-[var(--text-muted)] transition-colors group-focus-within:text-[var(--accent-primary)]" />
                )}
            </div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="SZUKAJ W ENCYKLOPEDII..."
                className="w-full bg-[var(--bg-secondary)] border border-white/5 px-10 py-2 font-display text-xs tracking-wider text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-glow)] transition-all rounded-sm"
            />

            {/* Dropdown Results */}
            {isOpen && query.length >= 2 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--bg-elevated)] border border-[var(--accent-primary)]/20 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden z-50">
                    {results.length > 0 ? (
                        results.map((game) => (
                            <div
                                key={game.id}
                                onClick={() => handleSelect(game.slug)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--accent-primary)]/10 cursor-pointer transition-colors border-b border-white/5 last:border-0 group/item"
                            >
                                {game.coverImage && (
                                    <div className="relative h-8 w-12 shrink-0 overflow-hidden rounded-sm border border-white/10 group-hover/item:border-[var(--accent-primary)]">
                                        <Image
                                            src={game.coverImage}
                                            alt={game.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <div className="flex flex-col">
                                    <span
                                        className="font-display text-[10px] tracking-widest text-[var(--text-primary)] group-hover/item:text-white"
                                        dangerouslySetInnerHTML={{
                                            __html: game.title.replace(
                                                new RegExp(query, 'gi'),
                                                (match: string) => `<span class="text-[var(--accent-primary)] font-bold">${match}</span>`
                                            )
                                        }}
                                    />
                                    <span className="text-[10px] text-[var(--text-muted)]">{game.releaseYear}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-3 text-center text-[10px] text-[var(--text-muted)] tracking-widest">
                            BRAK WYNIKÓW
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
