"use client";

import React from 'react';
import { Menu, User } from 'lucide-react';
import SearchInput from '../ui/SearchInput';

const TopNav = () => {



    return (
        <header className="sticky top-0 z-50 h-16 w-full border-b border-white/5 bg-bg-hud/80 backdrop-blur-md px-6">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="font-display text-xl tracking-tighter">
                        <span className="text-accent-primary">CRIT</span>
                        <span className="text-text-primary">COMBO</span>
                    </div>
                </div>

                {/* Search - Desktop */}
                <div className="hidden flex-1 justify-center md:flex px-8">
                    <SearchInput />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <nav className="hidden items-center gap-6 lg:flex">
                        <a href="#" className="font-display text-xs tracking-widest text-text-secondary hover:text-accent-primary transition-colors">DATABASE</a>
                        <a href="#" className="font-display text-xs tracking-widest text-text-secondary hover:text-accent-primary transition-colors">STASH</a>
                        <a href="#" className="font-display text-xs tracking-widest text-text-secondary hover:text-accent-primary transition-colors">INTEL</a>
                    </nav>

                    <div className="h-4 w-px bg-white/10 hidden lg:block" />

                    <button className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/5 hover:bg-white/5 transition-colors">
                        <User className="h-5 w-5 text-text-secondary" />
                    </button>

                    <button className="flex md:hidden h-10 w-10 items-center justify-center rounded-sm border border-white/5 hover:bg-white/5 transition-colors">
                        <Menu className="h-5 w-5 text-text-secondary" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default TopNav;
