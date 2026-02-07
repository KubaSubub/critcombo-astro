export default function ArticlePage() {
    return (
        <article className="mx-auto max-w-[80ch] py-12">
            {/* Header */}
            <header className="mb-12 border-b border-hud-border pb-8">
                <div className="mb-4 flex items-center gap-2 text-sm font-mono text-accent-primary">
                    <span>REVIEW</span>
                    <span>&#47;&#47;</span>
                    <span>RPG</span>
                </div>
                <h1 className="mb-6 font-mono text-4xl font-bold uppercase leading-tight tracking-tight text-text-highlight md:text-5xl">
                    Cyberpunk 2077: Phantom Liberty
                </h1>
                <div className="flex items-center gap-6 text-text-muted">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-hud-panel border border-hud-border"></div>
                        <span className="font-medium text-text-main">V. Silverhand</span>
                    </div>
                    <span>•</span>
                    <time>February 8, 2026</time>
                    <span>•</span>
                    <span>15 min read</span>
                </div>
            </header>

            {/* Body Content */}
            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-mono prose-headings:text-text-highlight prose-a:text-accent-primary prose-strong:text-white">
                <p className="lead text-xl text-text-main">
                    Return to Night City in a spy-thriller expansion that proves CD Projekt Red hasn&apos;t lost its touch.
                    Dogtown awaits, and it&apos;s hungrier than ever.
                </p>

                <h2>Welcome to Dogtown</h2>
                <p>
                    The moment you step into the district of Dogtown, the atmosphere shifts. It&apos;s denser, grittier, and more vertical than the rest of Night City.
                    The attention to detail is staggering. Every corner tells a story of decay and desperate survival.
                </p>

                <div className="my-8 rounded-lg border border-hud-border bg-hud-panel p-6">
                    <h3 className="mt-0 text-accent-primary">New Mechanics</h3>
                    <ul className="mb-0">
                        <li><strong>Relic Tree:</strong> A completely new skill tree that overhauls combat.</li>
                        <li><strong>Vehicle Combat:</strong> Finally, you can shoot while driving.</li>
                        <li><strong>Police System:</strong> MaxTac is actually terrifying now.</li>
                    </ul>
                </div>

                <p>
                    The narrative is where Phantom Liberty truly shines. Idris Elba&apos;s performance as Solomon Reed is understated yet powerful,
                    providing a perfect foil to Keanu Reeves’ chaotic Johnny Silverhand. The choices you make here feel heavy,
                    with consequences that ripple out in unexpected ways.
                </p>

                <h3>Performance & Visuals</h3>
                <p>
                    Running on ultra settings with Path Tracing enabled, this is arguably the best-looking game on the market.
                    The neon lights cutting through the volumetric fog of Dogtown create scenes that look like concept art come to life.
                </p>

                <blockquote>
                    &quot;Phantom Liberty isn&apos;t just a DLC; it&apos;s a redemption arc for the entire game.&quot;
                </blockquote>

                <p>
                    Whether you&apos;re a netrunner hacking enemies from the shadows or a solo rushing in with a katana,
                    the gameplay refinements make every encounter feel satisfying. The new level cap and gear tier provide
                    plenty of reasons to grind.
                </p>

                <hr className="border-hud-border" />

                <div className="flex items-center justify-between">
                    <h2 className="mb-0 mt-0">Verdict</h2>
                    <div className="text-5xl font-bold text-accent-primary font-mono">9.5</div>
                </div>
                <p>
                    A masterclass in expansion design. It enriches the base game while telling a standalone story that stands
                    toe-to-toe with the best cyberpunk fiction.
                </p>
            </div>
        </article>
    );
}
