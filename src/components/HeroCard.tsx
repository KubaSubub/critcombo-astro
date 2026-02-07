import React from 'react';
import { Monitor, Activity } from 'lucide-react';

const HeroCard = () => {
    return (
        <div className="relative mb-8 grid w-full grid-cols-1 overflow-hidden rounded-sm border border-hud-border bg-hud-panel lg:grid-cols-2">

            {/* Visual Placeholder (Left) */}
            <div className="group relative h-64 w-full bg-gradient-to-br from-gray-900 to-black lg:h-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                    <Monitor className="h-16 w-16 text-hud-border group-hover:text-accent-primary transition-colors duration-500" />
                </div>

                {/* Decorative Overlay */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-accent-primary"></div>
            </div>

            {/* Data Panel (Right) */}
            <div className="flex flex-col justify-between p-6 lg:p-10">
                <div>
                    <div className="mb-2 flex items-center justify-between">
                        <span className="font-mono text-xs tracking-widest text-accent-secondary">FEATURED_ENTITY</span>
                        <div className="flex items-center gap-1 rounded bg-accent-primary/10 px-2 py-1 text-xs text-accent-primary border border-accent-primary/20">
                            <Activity className="h-3 w-3" />
                            LIVE UPDATE
                        </div>
                    </div>

                    <h1 className="mb-4 font-mono text-4xl font-bold uppercase tracking-tighter text-text-main md:text-5xl">
                        Cyber_Nexus_7
                    </h1>

                    <p className="mb-6 max-w-md text-sm leading-relaxed text-text-muted">
                        The ultimate tactical RPG simulation. Optimize your build, conquer the mainframe, and ascend the leaderboards.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-hud-border pt-6">
                    <div className="text-center">
                        <span className="block text-2xl font-bold text-accent-primary">9.8</span>
                        <span className="text-[10px] uppercase tracking-wider text-text-muted">Rating</span>
                    </div>
                    <div className="text-center border-l border-hud-border">
                        <span className="block text-2xl font-bold text-accent-primary">24K</span>
                        <span className="text-[10px] uppercase tracking-wider text-text-muted">Active</span>
                    </div>
                    <div className="text-center border-l border-hud-border flex items-center justify-center">
                        <button className="flex items-center gap-2 rounded bg-accent-primary px-4 py-2 font-bold text-hud-bg transition-transform hover:scale-105 hover:bg-white">
                            Analyize
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
