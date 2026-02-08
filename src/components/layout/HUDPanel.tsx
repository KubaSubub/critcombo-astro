"use client";

import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, User, Target } from 'lucide-react';
import { useHUD } from '@/lib/context/HUDContext';

const HUDPanel = () => {
    const { isExpanded, toggleHUD, xp, level } = useHUD();
    const [displayedXp, setDisplayedXp] = useState(0);

    // Animate XP bar
    useEffect(() => {
        const timer = setTimeout(() => setDisplayedXp((xp / 2000) * 100), 100);
        return () => clearTimeout(timer);
    }, [xp]);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-40 w-full transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isExpanded ? 'translate-y-0' : 'translate-y-[calc(100%-40px)]'
                }`}
        >
            {/* Toggle Tab */}
            <div className="flex justify-end pr-6">
                <button
                    onClick={toggleHUD}
                    className="flex items-center gap-2 bg-accent-primary px-4 py-2 font-display text-[10px] font-bold text-white shadow-[0_0_15px_var(--accent-glow)] transition-all hover:brightness-110"
                >
                    {isExpanded ? (
                        <>ZWIŃ PANEL <ChevronDown className="h-3 w-3" /></>
                    ) : (
                        <>ROZWIŃ PANEL <ChevronUp className="h-3 w-3" /></>
                    )}
                </button>
            </div>

            {/* Main Panel Content */}
            <div className="h-[300px] border-t-2 border-accent-primary bg-bg-hud shadow-[0_-10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl md:h-[300px]">
                <div className="mx-auto h-full max-w-7xl p-8">
                    <div className="grid h-full grid-cols-1 gap-8 md:grid-cols-3">
                        {/* Profile Section */}
                        <div className="flex items-center gap-6 border-r border-white/5 pr-8">
                            <div className="relative h-20 w-20 flex-shrink-0 border-2 border-accent-primary p-1">
                                <div className={`flex h-full w-full items-center justify-center bg-bg-secondary transition-transform duration-700 ${isExpanded ? 'rotate-0' : 'rotate-180'}`}>
                                    <User className="h-10 w-10 text-text-muted" />
                                </div>
                                {/* Level Badge */}
                                <div className="absolute -bottom-2 -right-2 bg-accent-primary px-1.5 py-0.5 font-display text-[10px] font-bold text-white shadow-[0_0_10px_var(--accent-glow)]">
                                    LVL.{level}
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col justify-center">
                                <div className="font-display text-sm tracking-widest text-text-primary uppercase">GUEST_PLAYER_01</div>
                                <div className="mt-3 h-2 w-full bg-bg-secondary rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-accent-primary shadow-[0_0_15px_var(--accent-glow)] transition-all duration-1000 ease-out"
                                        style={{ width: `${displayedXp}%` }}
                                    />
                                </div>
                                <div className="mt-2 flex justify-between font-display text-[8px] tracking-[0.2em] text-text-muted">
                                    <span>XP: {xp} / 2000</span>
                                    <span className="text-accent-primary">{Math.round(displayedXp)}%</span>
                                </div>
                            </div>
                        </div>

                        {/* Guest Message Section */}
                        <div className="col-span-1 flex flex-col items-center justify-center text-center md:col-span-1 px-4">
                            <div className="relative mb-4">
                                <Target className="h-8 w-8 text-accent-primary animate-pulse" />
                                <div className="absolute inset-0 h-8 w-8 rounded-full border border-accent-primary/50 animate-ping opacity-20" />
                            </div>
                            <h3 className="font-display text-xs tracking-widest text-text-primary">DASHBOARD ZABLOKOWANY</h3>
                            <p className="mt-2 max-w-[200px] font-body text-[10px] leading-relaxed text-text-secondary opacity-70">
                                Zaloguj się, aby odblokować pełne statystyki, ekwipunek i minimapę.
                            </p>
                        </div>

                        {/* Minimap Placeholder Section */}
                        <div className="flex flex-col border-l border-white/5 pl-8">
                            <div className="font-display text-[10px] tracking-widest text-text-muted mb-4 uppercase">Tactical_minimap</div>
                            <div className="relative flex-1 border border-white/5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-opacity-10 overflow-hidden group/map">
                                {/* Grid Lines */}
                                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-20">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className="border border-white/10" />
                                    ))}
                                </div>

                                {/* Minimap Content Placeholder */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <div className="h-2 w-2 bg-accent-primary animate-pulse shadow-[0_0_10px_var(--accent-glow)]" />
                                    <span className="mt-2 font-display text-[8px] text-accent-primary tracking-[0.2em] font-bold">MINIMAP</span>
                                    <span className="font-display text-[6px] text-text-muted mt-1 uppercase">COMING_SOON</span>
                                </div>

                                {/* Scanner Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/10 to-transparent h-1/2 w-full animate-scan" style={{ animationDuration: '3s' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HUDPanel;
