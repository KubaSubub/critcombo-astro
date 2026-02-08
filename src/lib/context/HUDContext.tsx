"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface HUDContextType {
    isExpanded: boolean;
    toggleHUD: () => void;
    xp: number;
    level: number;
    addXP: (amount: number) => void;
}

const HUDContext = createContext<HUDContextType | undefined>(undefined);

export const HUDProvider = ({ children }: { children: ReactNode }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [xp, setXp] = useState(1450);
    const [level, setLevel] = useState(5);

    const toggleHUD = () => setIsExpanded(prev => !prev);

    const addXP = (amount: number) => {
        setXp(prev => {
            const newXp = prev + amount;
            if (newXp >= 2000) {
                setLevel(l => l + 1);
                return newXp - 2000;
            }
            return newXp;
        });

        // Auto-expand HUD when gaining XP to show progress
        if (!isExpanded) {
            setIsExpanded(true);
            setTimeout(() => setIsExpanded(false), 3000);
        }
    };

    return (
        <HUDContext.Provider value={{ isExpanded, toggleHUD, xp, level, addXP }}>
            {children}
        </HUDContext.Provider>
    );
};

export const useHUD = () => {
    const context = useContext(HUDContext);
    if (context === undefined) {
        throw new Error('useHUD must be used within a HUDProvider');
    }
    return context;
};
