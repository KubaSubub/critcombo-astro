"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useParallax } from '@/lib/hooks/useParallax';

const HeroSection = () => {
    const [isMobile, setIsMobile] = useState(false);
    const parallaxY = useParallax();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden rounded-sm border border-white/5 bg-bg-elevated group">
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0"
                style={{ y: isMobile ? 0 : parallaxY }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
                    alt="Hero Game"
                    fill
                    className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
                />
            </motion.div>

            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-hud/80 via-transparent to-transparent pointer-events-none" />

            {/* Content Container */}
            <div className="relative flex h-full flex-col justify-end p-8 md:p-12 lg:w-2/3">
                <div className="mb-4 inline-flex items-center gap-2 bg-accent-primary/10 border border-accent-primary/20 px-3 py-1 text-accent-primary">
                    <Zap className="h-4 w-4 fill-accent-primary" />
                    <span className="font-display text-[10px] font-bold tracking-widest">GRA TYGODNIA</span>
                </div>

                <h1 className="mb-4 text-4xl md:text-6xl font-display font-black tracking-tighter text-text-primary">
                    Cyberpunk <span className="text-accent-primary">2077</span>
                </h1>

                <p className="mb-8 max-w-xl font-body text-base text-text-secondary leading-relaxed">
                    Wkrocz w mroczną przyszłość Night City jako V, najemnik poszukujący jedynego w swoim rodzaju implantu,
                    który jest kluczem do nieśmiertelności. Odkryj najbardziej zaawansowaną wizję RPG od CD PROJEKT RED.
                </p>

                <div className="flex items-center gap-4">
                    <button className="btn-primary">
                        CZYTAJ ARTYKUŁ
                    </button>
                    <button className="group/btn flex items-center gap-2 border border-white/10 px-6 py-3 font-display text-xs font-bold text-text-primary transition-all hover:bg-white/5">
                        ZOBACZ PROFIL <span className="text-text-muted group-hover/btn:translate-x-1 transition-transform inline-block">&gt;</span>
                    </button>
                </div>
            </div>

            {/* Technical Detail Overlays */}
            <div className="absolute bottom-4 right-8 hidden flex-col items-end gap-1 font-display text-[8px] text-text-muted md:flex">
                <span>RATING: 9.8 / 10.0</span>
                <span>STATUS: FEATURED_ARTICLE_STABLE</span>
                <span>COORD: 54.21N 18.64E</span>
            </div>
        </section>
    );
};

export default HeroSection;
