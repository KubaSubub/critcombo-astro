import React from 'react';
import { Twitter, Youtube, Github } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-20 border-t border-white/5 bg-bg-secondary py-12 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    {/* Brand & Mission */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="font-display text-xl tracking-tighter mb-4">
                            <span className="text-accent-primary">CRIT</span>
                            <span className="text-text-primary">COMBO</span>
                        </div>
                        <p className="font-body text-xs leading-relaxed text-text-secondary max-w-xs">
                            Największa polska encyklopedia gamingu. Dane, analizy i historia Twoich ulubionych światów w jednym miejscu.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h4 className="font-display text-[10px] tracking-widest text-text-primary mb-6">NAWIGACJA</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="font-body text-xs text-text-muted hover:text-accent-primary transition-colors">Encyklopedia Gier</a></li>
                            <li><a href="#" className="font-body text-xs text-text-muted hover:text-accent-primary transition-colors">Baza Postaci</a></li>
                            <li><a href="#" className="font-body text-xs text-text-muted hover:text-accent-primary transition-colors">Systemy Rankingowe</a></li>
                        </ul>
                    </div>

                    {/* Meta Links */}
                    <div>
                        <h4 className="font-display text-[10px] tracking-widest text-text-primary mb-6">INFORMACJE</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="font-body text-xs text-text-muted hover:text-accent-primary transition-colors">O nas</a></li>
                            <li><a href="#" className="font-body text-xs text-text-muted hover:text-accent-primary transition-colors">Kontakt</a></li>
                            <li><a href="#" className="font-body text-xs text-text-muted hover:text-accent-primary transition-colors">Polityka Prywatności</a></li>
                        </ul>
                    </div>

                    {/* Socials & Tech Status */}
                    <div>
                        <h4 className="font-display text-[10px] tracking-widest text-text-primary mb-6">SPOŁECZNOŚĆ</h4>
                        <div className="flex gap-4 mb-8">
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/5 bg-bg-elevated hover:bg-accent-primary/10 hover:border-accent-primary transition-all group">
                                <Twitter className="h-4 w-4 text-text-muted group-hover:text-accent-primary" />
                            </a>
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/5 bg-bg-elevated hover:bg-accent-primary/10 hover:border-accent-primary transition-all group">
                                <Youtube className="h-4 w-4 text-text-muted group-hover:text-accent-primary" />
                            </a>
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/5 bg-bg-elevated hover:bg-accent-primary/10 hover:border-accent-primary transition-all group">
                                <Github className="h-4 w-4 text-text-muted group-hover:text-accent-primary" />
                            </a>
                        </div>
                        <div className="font-display text-[8px] text-text-muted tracking-widest">
                            <span className="flex items-center gap-2">
                                <div className="h-1 w-1 bg-green-500 rounded-full animate-pulse" />
                                NODE_STABLE_01
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="font-display text-[10px] text-text-muted tracking-widest">
                        CRITCOMBO &copy; {currentYear} | WSZYSTKIE PRAWA ZASTRZEŻONE
                    </div>
                    <div className="flex items-center gap-8 font-display text-[8px] text-text-muted tracking-tighter uppercase opacity-30">
                        <span>Ver: 2.0.0_NEON_AGGRO</span>
                        <span>Built_with_NextJS_15</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
