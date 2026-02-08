"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Calendar, Building2, Gamepad2, ChevronLeft } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function GamePage() {
    const params = useParams();
    const slug = params.slug as string;

    const [game, setGame] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'overview' | 'characters' | 'articles'>('overview');

    useEffect(() => {
        async function fetchGame() {
            try {
                const res = await fetch(`/api/games/${slug}`);
                if (res.ok) {
                    const data = await res.json();
                    setGame(data);
                } else {
                    console.error('Failed to load game');
                }
            } catch (error) {
                console.error('Error fetching game', error);
            } finally {
                setIsLoading(false);
            }
        }

        if (slug) {
            fetchGame();
        }
    }, [slug]);

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center text-[var(--accent-primary)]">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-current border-t-transparent" />
            </div>
        );
    }

    if (!game) {
        return (
            <div className="flex h-screen flex-col items-center justify-center gap-4 text-[var(--text-secondary)]">
                <h1 className="text-2xl">Game not found</h1>
                <Link href="/" className="text-[var(--accent-primary)] hover:underline">
                    Return to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pb-20">
            {/* Back Button */}
            <div className="container mx-auto px-4 pt-4 relative z-10">
                <Link href="/" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors w-fit p-2 bg-black/20 backdrop-blur-sm rounded-sm">
                    <ChevronLeft className="h-4 w-4" />
                    BACK TO DATABASE
                </Link>
            </div>

            {/* HERO SECTION */}
            <div className="relative -mt-12 h-[50vh] w-full overflow-hidden md:h-[60vh]">
                <div className="absolute inset-0">
                    <Image
                        src={game.coverImage}
                        alt={game.title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-transparent to-transparent" />
                </div>

                <div className="container relative mx-auto flex h-full items-end px-4 pb-12 z-10">
                    <div className="max-w-3xl space-y-4">
                        <div className="flex items-center gap-3">
                            {game.genre?.map((g: string) => (
                                <span key={g} className="bg-[var(--accent-primary)]/10 px-3 py-1 text-xs font-bold tracking-widest text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                                    {g.toUpperCase()}
                                </span>
                            ))}
                            {game.rating && (
                                <div className="flex items-center gap-1 bg-black/50 px-3 py-1 backdrop-blur-md border border-white/10">
                                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                    <span className="font-mono font-bold text-white">{game.rating.toFixed(1)}</span>
                                </div>
                            )}
                        </div>

                        <h1 className="font-display text-5xl font-black uppercase tracking-tight text-white md:text-7xl drop-shadow-2xl">
                            {game.title}
                        </h1>

                        <div className="flex flex-wrap gap-6 text-sm text-[var(--text-secondary)] font-mono">
                            <div className="flex items-center gap-2">
                                <Building2 className="h-4 w-4" />
                                <span>{game.developer}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{game.releaseYear}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Gamepad2 className="h-4 w-4" />
                                <span>{game.platform.join(', ')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENT TABS */}
            <div className="container mx-auto mt-12 px-4 relative z-10">
                <div className="flex gap-8 border-b border-white/10 mb-8 overflow-x-auto">
                    {['overview', 'characters', 'articles'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`pb-4 text-sm font-bold tracking-widest uppercase transition-all border-b-2 px-2 ${activeTab === tab
                                    ? 'border-[var(--accent-primary)] text-[var(--accent-primary)]'
                                    : 'border-transparent text-[var(--text-secondary)] hover:text-white'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* TAB CONTENT */}
                <div className="min-h-[400px]">
                    {activeTab === 'overview' && (
                        <div className="grid gap-12 lg:grid-cols-3">
                            <div className="lg:col-span-2 space-y-6">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-[var(--accent-primary)]"></span>
                                    SYNOPSIS
                                </h3>
                                <div className="text-lg leading-relaxed text-[var(--text-secondary)] prose prose-invert max-w-none">
                                    {game.description}
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-[var(--bg-elevated)] p-6 border border-white/5 rounded-sm">
                                    <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest border-b border-white/10 pb-2">Data Points</h4>
                                    <dl className="space-y-4 text-sm">
                                        <div className="flex justify-between">
                                            <dt className="text-[var(--text-muted)]">Publisher</dt>
                                            <dd className="text-right text-white">{game.publisher}</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="text-[var(--text-muted)]">Release Date</dt>
                                            <dd className="text-right text-white">{game.releaseYear}</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="text-[var(--text-muted)]">Rating</dt>
                                            <dd className="text-right text-[var(--accent-primary)] font-bold">{game.rating}/10</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'characters' && (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {game.characters?.length > 0 ? (
                                game.characters.map((char: any) => (
                                    <div key={char.id} className="group bg-[var(--bg-elevated)] border border-white/5 hover:border-[var(--accent-primary)] transition-all overflow-hidden rounded-sm">
                                        {char.imageUrl && (
                                            <div className="relative h-48 w-full overflow-hidden">
                                                <Image
                                                    src={char.imageUrl}
                                                    alt={char.name}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                                />
                                            </div>
                                        )}
                                        <div className="p-4">
                                            <div className="text-xs text-[var(--accent-primary)] font-bold mb-1 tracking-widest uppercase">{char.role}</div>
                                            <h3 className="text-lg font-bold text-white mb-2">{char.name}</h3>
                                            <p className="text-sm text-[var(--text-secondary)] line-clamp-3">{char.bio}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-3 text-center py-10 text-[var(--text-muted)] bg-[var(--bg-elevated)] border border-white/5 border-dashed">
                                    No character archives found.
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'articles' && (
                        <div className="space-y-4">
                            {game.articles?.length > 0 ? (
                                game.articles.map((article: any) => (
                                    <Link key={article.id} href={`/articles/${article.slug}`} className="block group">
                                        <div className="flex gap-6 bg-[var(--bg-elevated)] p-6 border border-white/5 hover:border-[var(--accent-primary)] transition-all">
                                            {article.coverImage && (
                                                <div className="relative h-24 w-40 shrink-0 overflow-hidden hidden sm:block">
                                                    <Image
                                                        src={article.coverImage}
                                                        alt={article.title}
                                                        fill
                                                        className="object-cover grayscale group-hover:grayscale-0 transition-all"
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent-primary)] transition-colors mb-2">{article.title}</h3>
                                                <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-3">{article.excerpt}</p>
                                                <span className="text-xs text-[var(--text-muted)] font-mono">
                                                    {new Date(article.publishedAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="text-center py-10 text-[var(--text-muted)] bg-[var(--bg-elevated)] border border-white/5 border-dashed">
                                    No classified articles found.
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
