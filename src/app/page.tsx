import ContentGrid from "@/components/ContentGrid";
import GameCard from "@/components/GameCard";
import Link from "next/link";

export default function Home() {
  const games = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
      rating: 9.5,
      tags: ["RPG", "Sci-Fi", "Open World"],
    },
    {
      id: 2,
      title: "Elden Ring",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3",
      rating: 9.8,
      tags: ["RPG", "Fantasy", "Hardcore"],
    },
    {
      id: 3,
      title: "Starfield",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2672&ixlib=rb-4.0.3",
      rating: 8.5,
      tags: ["RPG", "Space", "Exploration"],
    },
    {
      id: 4,
      title: "Baldur's Gate 3",
      image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?auto=format&fit=crop&q=80&w=2664&ixlib=rb-4.0.3",
      rating: 10.0,
      tags: ["RPG", "Fantasy", "Strategy"],
    },
    {
      id: 5,
      title: "Armored Core VI",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=2535&ixlib=rb-4.0.3",
      rating: 9.2,
      tags: ["Action", "Mecha", "Sci-Fi"],
    },
    {
      id: 6,
      title: "Hollow Knight",
      image: "https://images.unsplash.com/photo-1506318137071-a8bcbf67cc77?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
      rating: 9.6,
      tags: ["Metroidvania", "Indie", "2D"],
    },
    {
      id: 7,
      title: "Call of Duty: MW3",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
      rating: 7.0,
      tags: ["FPS", "Multiplayer", "Shooter"],
    },
    {
      id: 8,
      title: "Final Fantasy XVI",
      image: "https://images.unsplash.com/photo-1519669556860-2c96b56b024c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
      rating: 8.8,
      tags: ["RPG", "Fantasy", "Action"],
    }
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4 border-b border-hud-border pb-8">
        <h1 className="font-mono text-4xl font-bold uppercase tracking-tighter text-text-highlight md:text-6xl">
          Crit<span className="text-accent-primary">Combo</span>
          <span className="ml-2 text-base font-normal tracking-normal text-text-muted opacity-70">
            &#47;&#47; DB_VERSION: 1.0.0
          </span>
        </h1>
        <p className="max-w-2xl text-lg text-text-muted">
          The next-generation gaming encyclopedia. Built for speed, designed for data.
          <br />
          <Link href="/article" className="text-accent-primary underline decoration-accent-primary/50 underline-offset-4 hover:decoration-accent-primary">
            Check Typography Test (Article View)
          </Link>
        </p>
      </div>

      <ContentGrid title="Trending Games">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            image={game.image}
            rating={game.rating}
            tags={game.tags}
          />
        ))}
      </ContentGrid>

      <ContentGrid title="Recent Reviews">
        {games.slice(0, 4).reverse().map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            image={game.image}
            rating={game.rating}
            tags={game.tags}
          />
        ))}
      </ContentGrid>
    </div>
  );
}
