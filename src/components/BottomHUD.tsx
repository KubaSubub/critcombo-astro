import React from 'react';
import { Home, Grid, Trophy, Users, LayoutDashboard, Settings } from 'lucide-react';

const BottomHUD = () => {
    return (
        <nav className="fixed bottom-0 z-50 flex h-24 w-full items-center justify-between border-t border-hud-border bg-hud-bg/95 backdrop-blur px-6">

            {/* Left: Profile / XP */}
            <div className="flex w-1/4 min-w-[150px] items-center gap-4 border-r border-hud-border pr-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-accent-secondary bg-hud-panel">
                    <span className="font-mono text-xs font-bold text-text-muted">P1</span>
                </div>
                <div className="flex w-full flex-col gap-1">
                    <div className="flex items-center justify-between text-xs font-bold text-accent-primary">
                        <span>USER_ID</span>
                        <span>LVL 01</span>
                    </div>
                    <div className="h-2 w-full bg-hud-border">
                        <div className="h-full w-1/3 bg-accent-primary transition-all hover:bg-white"></div>
                    </div>
                    <span className="font-mono text-[10px] text-text-muted">XP: 340 / 1000</span>
                </div>
            </div>

            {/* Center: Main Navigation */}
            <div className="flex flex-1 items-center justify-center gap-8">
                {[
                    { icon: Home, label: 'HOME', active: true },
                    { icon: Grid, label: 'DATA', active: false },
                    { icon: Trophy, label: 'RANK', active: false },
                    { icon: Users, label: 'comm', active: false },
                ].map((item) => (
                    <button
                        key={item.label}
                        className={`group flex flex-col items-center gap-1 transition-all hover:scale-105 ${item.active ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                            }`}
                    >
                        <item.icon
                            className={`h-8 w-8 ${item.active ? 'text-accent-primary' : 'text-text-muted'
                                }`}
                        />
                        <span className="font-mono text-[10px] tracking-wider text-text-muted group-hover:text-accent-primary">
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>

            {/* Right: Tools / Minimap Placeholder */}
            <div className="flex w-1/4 min-w-[150px] items-center justify-end border-l border-hud-border pl-6">
                <div className="flex items-center gap-4">
                    <button className="flex h-10 w-10 items-center justify-center rounded-sm border border-hud-border bg-hud-panel text-text-muted hover:border-accent-primary hover:text-accent-primary">
                        <LayoutDashboard className="h-5 w-5" />
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-sm border border-hud-border bg-hud-panel text-text-muted hover:border-accent-primary hover:text-accent-primary">
                        <Settings className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default BottomHUD;
