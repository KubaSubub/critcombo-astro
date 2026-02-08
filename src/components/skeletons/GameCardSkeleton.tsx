import React from 'react';

export function GameCardSkeleton() {
    return (
        <div className="bg-bg-elevated border border-white/5 rounded-sm overflow-hidden">
            {/* Image placeholder */}
            <div className="relative aspect-video w-full bg-white/5 animate-pulse" />

            {/* Content placeholders */}
            <div className="p-4 space-y-3">
                <div className="h-2 w-1/4 bg-accent-primary/20 rounded animate-pulse" />
                <div className="h-6 bg-white/5 rounded animate-pulse" />
                <div className="flex justify-between items-center pt-2">
                    <div className="h-4 w-1/4 bg-white/5 rounded animate-pulse" />
                    <div className="h-4 w-1/4 bg-white/5 rounded animate-pulse" />
                </div>
            </div>
        </div>
    );
}

export default GameCardSkeleton;
