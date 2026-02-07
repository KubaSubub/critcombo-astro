import React from 'react';
import { Search } from 'lucide-react';

const SearchInput = () => {
    return (
        <div className="relative flex w-full items-center group">
            <div className="absolute left-3 text-text-muted transition-colors group-focus-within:text-accent-primary">
                <span className="font-mono text-lg">&gt;</span>
            </div>
            <input
                type="text"
                placeholder="ENTER_QUERY..."
                className="h-10 w-full rounded-sm border border-hud-border bg-hud-panel py-2 pl-8 pr-10 font-mono text-sm text-text-main placeholder-text-muted transition-all focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary"
            />
            <div className="absolute right-3 text-text-muted">
                <Search className="h-4 w-4" />
            </div>
        </div>
    );
};

export default SearchInput;
