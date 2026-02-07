import React from 'react';
import { Terminal, Wifi } from 'lucide-react';
import SearchInput from './SearchInput';

const TopHUD = () => {
    return (
        <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-hud-border bg-hud-bg/95 backdrop-blur px-6 text-sm">
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-accent-primary" />
                <span className="font-mono text-lg font-bold tracking-widest text-accent-primary">
                    CRITCOMBO
                </span>
            </div>

            {/* Center: Command Line Search */}
            <div className="hidden w-1/3 md:block">
                <SearchInput />
            </div>

            {/* Right: System Status */}
            <div className="flex items-center gap-4 font-mono text-xs tracking-wider text-text-muted">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-status-online"></span>
                    <span>SYSTEM ONLINE</span>
                </div>
                <div className="hidden items-center gap-2 sm:flex">
                    <Wifi className="h-4 w-4" />
                    <span>PING: 12ms</span>
                </div>
                <div className="hidden sm:block">
                    {new Date().toLocaleTimeString('en-US', { hour12: false })}
                </div>
            </div>
        </header>
    );
};

export default TopHUD;
