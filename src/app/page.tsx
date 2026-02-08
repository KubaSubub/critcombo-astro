"use client";

import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import HeroSection from '@/components/content/HeroSection';
import GameCard from '@/components/content/GameCard';
import { GameCardSkeleton } from '@/components/skeletons/GameCardSkeleton';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState<any[]>([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const res = await fetch('/api/games');
        if (res.ok) {
          const data = await res.json();
          setGames(data);
        }
      } catch (error) {
        console.error('Failed to fetch games', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGames();
  }, []);

  const reverseGames = [...games].reverse();

  return (
    <div className="space-y-16">
      {/* HERO SECTION */}
      <HeroSection />

      {/* AD SLOT - LEADERBOARD */}
      <div className="ad-slot max-w-4xl mx-auto">
        <div className="ad-label">REKLAMA</div>
        <span className="text-[10px] text-text-muted font-display tracking-widest">GOOGLE_ADSENSE_LEADERBOARD_[728x90]</span>
      </div>

      {/* NOWOŚCI SECTION */}
      <section>
        <div className="mb-8 flex items-end justify-between border-b border-white/5 pb-4">
          <div>
            <h2 className="text-2xl font-display font-black text-text-primary">NOWOŚCI</h2>
            <p className="mt-1 font-body text-xs text-text-secondary">Najnowsze wpisy w encyklopedii</p>
          </div>
          <a href="#" className="font-display text-[10px] tracking-widest text-accent-primary hover:underline transition-colors duration-300">ZOBACZ WSZYSTKO &gt;</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            [...Array(6)].map((_, i) => <GameCardSkeleton key={i} />)
          ) : (
            games.slice(0, 6).map((game, i) => (
              <GameCard
                key={game.id || i}
                title={game.title}
                genre={game.genre?.[0] || "RPG"}
                year={game.releaseYear}
                rating={game.rating || 0}
                image={game.coverImage}
                slug={game.slug}
                delay={i * 50}
              />
            ))
          )}
        </div>
      </section>

      {/* RETRO KLASYKI - HORIZONTAL SCROLL */}
      <section>
        <div className="mb-8 flex items-end justify-between border-b border-white/5 pb-4">
          <div>
            <h2 className="text-2xl font-display font-black text-text-primary">RETRO KLASYKI</h2>
            <p className="mt-1 font-body text-xs text-text-secondary">Fundamenty gamingu</p>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x">
          {isLoading ? (
            [...Array(4)].map((_, i) => (
              <div key={i} className="w-[280px] flex-shrink-0">
                <GameCardSkeleton />
              </div>
            ))
          ) : (
            reverseGames.slice(0, 4).map((game, i) => (
              <div key={i} className="w-[280px] flex-shrink-0 snap-start">
                <GameCard
                  title={game.title}
                  genre={game.genre?.[0] || "RPG"}
                  year={game.releaseYear}
                  rating={game.rating || 0}
                  image={game.coverImage}
                  slug={game.slug}
                  delay={i * 50}
                />
              </div>
            ))
          )}
        </div>
      </section>

      {/* POLECANE SECTION - GRID */}
      <section>
        <div className="mb-8 flex items-end justify-between border-b border-white/5 pb-4">
          <div>
            <h2 className="text-2xl font-display font-black text-text-primary">POLECANE</h2>
            <p className="mt-1 font-body text-xs text-text-secondary">Wybrane przez redakcję</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            [...Array(6)].map((_, i) => <GameCardSkeleton key={i} />)
          ) : (
            games.slice(0, 6).map((game, i) => (
              <GameCard
                key={game.id || i}
                title={game.title}
                genre={game.genre?.[0] || "RPG"}
                year={game.releaseYear}
                rating={game.rating || 0}
                image={game.coverImage}
                slug={game.slug}
                delay={i * 50}
              />
            ))
          )}
        </div>
      </section>

      {/* AD SLOT - BOTTOM BOX */}
      <div className="ad-slot max-w-sm mx-auto">
        <div className="ad-label">REKLAMA</div>
        <span className="text-[10px] text-text-muted font-display tracking-widest">GOOGLE_ADSENSE_BOX_[300x250]</span>
      </div>
    </div>
  );
}
