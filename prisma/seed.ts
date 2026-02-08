import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // The Witcher 3
    const witcher3 = await prisma.game.create({
        data: {
            title: 'The Witcher 3: Wild Hunt',
            slug: 'the-witcher-3-wild-hunt',
            description: 'Epicki RPG akcji osadzony w świecie fantasy, w którym wcielasz się w Geralta z Rivii, profesjonalnego łowcę potworów. Poszukuj zaginionej Ciri w olbrzymim, otwartym świecie pełnym niebezpieczeństw.',
            genre: ['RPG', 'Action', 'Open World'],
            releaseYear: 2015,
            platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
            developer: 'CD Projekt Red',
            publisher: 'CD Projekt',
            coverImage: '/images/games/witcher3.jpg',
            rating: 9.8,
            articles: {
                create: [
                    {
                        title: 'The Witcher 3 - Kompletny Przewodnik dla Początkujących',
                        slug: 'witcher-3-przewodnik-dla-poczatkujacych',
                        excerpt: 'Wszystko, co musisz wiedzieć, żeby rozpocząć przygodę w Świecie Wiedźmina.',
                        content: '# Wprowadzenie\n\nThe Witcher 3 to monumentalny RPG...',
                        coverImage: '/images/articles/witcher3-guide.jpg',
                    },
                    {
                        title: 'Top 10 Questów w The Witcher 3',
                        slug: 'top-10-questow-witcher-3',
                        excerpt: 'Najlepsze zadania poboczne, które musisz ukończyć.',
                        content: '# 1. Bloody Baron\n\nJeden z najbardziej emocjonalnych...',
                        coverImage: '/images/articles/witcher3-quests.jpg',
                    },
                ],
            },
            characters: {
                create: [
                    {
                        name: 'Geralt z Rivii',
                        slug: 'geralt-z-rivii',
                        bio: 'Profesjonalny wiedźmin, łowca potworów. Zmutowany w młodości, posiada nadludzkie refleksy i zdolności magiczne.',
                        role: 'Protagonist',
                        imageUrl: '/images/characters/geralt.jpg',
                    },
                    {
                        name: 'Yennefer z Vengerbergu',
                        slug: 'yennefer',
                        bio: 'Potężna czarodziejka i miłość życia Geralta. Adoptowała Ciri jako swoją córkę.',
                        role: 'Companion',
                        imageUrl: '/images/characters/yennefer.jpg',
                    },
                    {
                        name: 'Ciri',
                        slug: 'ciri',
                        bio: 'Dziecko-niespodzianka Geralta, księżniczka z Cintry posiadająca starożytną krew.',
                        role: 'Protagonist',
                        imageUrl: '/images/characters/ciri.jpg',
                    },
                ],
            },
        },
    });

    // Cyberpunk 2077
    const cyberpunk = await prisma.game.create({
        data: {
            title: 'Cyberpunk 2077',
            slug: 'cyberpunk-2077',
            description: 'Futurystyczny RPG akcji w otwartym świecie Night City. Wciel się w V, najemnika poszukującego unikalnego implantu dającego nieśmiertelność.',
            genre: ['RPG', 'Action', 'FPS', 'Open World'],
            releaseYear: 2020,
            platform: ['PC', 'PlayStation', 'Xbox'],
            developer: 'CD Projekt Red',
            publisher: 'CD Projekt',
            coverImage: '/images/games/cyberpunk.jpg',
            rating: 8.5,
            articles: {
                create: [
                    {
                        title: 'Cyberpunk 2077 - Najlepsze Buildy dla V',
                        slug: 'cyberpunk-2077-najlepsze-buildy',
                        excerpt: 'Optymalne buildy dla różnych stylów gry w Night City.',
                        content: '# Netrunner Build\n\nJeśli chcesz hakować wszystko...',
                        coverImage: '/images/articles/cyberpunk-builds.jpg',
                    },
                ],
            },
            characters: {
                create: [
                    {
                        name: 'V',
                        slug: 'v-cyberpunk',
                        bio: 'Główny protagonista, najemnik z Night City poszukujący sposobu na przetrwanie.',
                        role: 'Protagonist',
                    },
                    {
                        name: 'Johnny Silverhand',
                        slug: 'johnny-silverhand',
                        bio: 'Legendarny rockerboy i terrorysta, którego cyfrowa dusza mieszka w głowie V.',
                        role: 'Companion',
                    },
                ],
            },
        },
    });

    // Elden Ring
    const eldenRing = await prisma.game.create({
        data: {
            title: 'Elden Ring',
            slug: 'elden-ring',
            description: 'Epickie dark fantasy action RPG stworzone przez FromSoftware i George\'a R.R. Martina. Eksploruj Lands Between i zostań Elden Lord.',
            genre: ['RPG', 'Action', 'Souls-like', 'Open World'],
            releaseYear: 2022,
            platform: ['PC', 'PlayStation', 'Xbox'],
            developer: 'FromSoftware',
            publisher: 'Bandai Namco',
            coverImage: '/images/games/eldenring.jpg',
            rating: 9.5,
            articles: {
                create: [
                    {
                        title: 'Elden Ring - Przewodnik dla Nowych Graczy',
                        slug: 'elden-ring-przewodnik-nowi-gracze',
                        excerpt: 'Jak zacząć przygodę w Lands Between bez frustracji.',
                        content: '# Wybór klasy startowej\n\nJeśli jesteś nowy w serii Souls...',
                    },
                ],
            },
            characters: {
                create: [
                    {
                        name: 'Malenia, Blade of Miquella',
                        slug: 'malenia',
                        bio: 'Jeden z najtrudniejszych bossów w historii gier FromSoftware. Niezwyciężona wojowniczka dotknięta Scarlet Rot.',
                        role: 'Antagonist',
                    },
                ],
            },
        },
    });

    // Red Dead Redemption 2
    await prisma.game.create({
        data: {
            title: 'Red Dead Redemption 2',
            slug: 'red-dead-redemption-2',
            description: 'Epicka opowieść o upadku Dzikiego Zachodu. Wciel się w Arthura Morgana, outława w bandzie Van der Linde.',
            genre: ['Action', 'Adventure', 'Open World', 'Western'],
            releaseYear: 2018,
            platform: ['PC', 'PlayStation', 'Xbox'],
            developer: 'Rockstar Games',
            publisher: 'Rockstar Games',
            coverImage: '/images/games/rdr2.jpg',
            rating: 9.7,
            characters: {
                create: [
                    {
                        name: 'Arthur Morgan',
                        slug: 'arthur-morgan',
                        bio: 'Prawdziwy outlawę i najbliższy współpracownik Dutch van der Linde.',
                        role: 'Protagonist',
                    },
                ],
            },
        },
    });

    // God of War (2018)
    await prisma.game.create({
        data: {
            title: 'God of War (2018)',
            slug: 'god-of-war-2018',
            description: 'Kratos powraca w nordyckim restarcie serii. Wraz z synem Atreusem wyruszają w niebezpieczną podróż.',
            genre: ['Action', 'Adventure', 'Hack and Slash'],
            releaseYear: 2018,
            platform: ['PlayStation', 'PC'],
            developer: 'Santa Monica Studio',
            publisher: 'Sony Interactive Entertainment',
            coverImage: '/images/games/god-of-war.jpg',
            rating: 9.6,
        },
    });

    // Baldur's Gate 3
    await prisma.game.create({
        data: {
            title: "Baldur's Gate 3",
            slug: 'baldurs-gate-3',
            description: 'Triumfalny powrót legendarnej serii cRPG. Zbieraj drużynę, podejmuj decyzje, walcz w systemie D&D 5e.',
            genre: ['RPG', 'Turn-Based', 'Strategy'],
            releaseYear: 2023,
            platform: ['PC', 'PlayStation', 'Xbox'],
            developer: 'Larian Studios',
            publisher: 'Larian Studios',
            coverImage: '/images/games/baldurs-gate-3.jpg',
            rating: 9.4,
        },
    });

    // Starfield
    await prisma.game.create({
        data: {
            title: 'Starfield',
            slug: 'starfield',
            description: 'Pierwsza nowa właściwość intelektualna Bethesda od 25 lat. Eksploruj galaktykę w pierwszym RPG kosmicznym studia.',
            genre: ['RPG', 'Space', 'Open World', 'FPS'],
            releaseYear: 2023,
            platform: ['PC', 'Xbox'],
            developer: 'Bethesda Game Studios',
            publisher: 'Bethesda Softworks',
            coverImage: '/images/games/starfield.jpg',
            rating: 7.8,
        },
    });

    // Hogwarts Legacy
    await prisma.game.create({
        data: {
            title: 'Hogwarts Legacy',
            slug: 'hogwarts-legacy',
            description: 'RPG akcji osadzone w świecie Harry\'ego Pottera. Twórz własnego czarodzieja i eksploruj Hogwart w 1800 roku.',
            genre: ['RPG', 'Action', 'Open World', 'Magic'],
            releaseYear: 2023,
            platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
            developer: 'Avalanche Software',
            publisher: 'Warner Bros. Games',
            coverImage: '/images/games/hogwarts-legacy.jpg',
            rating: 8.4,
        },
    });

    // The Last of Us Part II
    await prisma.game.create({
        data: {
            title: 'The Last of Us Part II',
            slug: 'the-last-of-us-part-2',
            description: 'Kontynuacja kultowej historii Ellie i Joela. Brutalna, emocjonalna opowieść o zemście i przebaczeniu.',
            genre: ['Action', 'Adventure', 'Survival', 'Stealth'],
            releaseYear: 2020,
            platform: ['PlayStation', 'PC'],
            developer: 'Naughty Dog',
            publisher: 'Sony Interactive Entertainment',
            coverImage: '/images/games/tlou2.jpg',
            rating: 9.2,
        },
    });

    // Zelda: Tears of the Kingdom
    await prisma.game.create({
        data: {
            title: 'The Legend of Zelda: Tears of the Kingdom',
            slug: 'zelda-tears-of-the-kingdom',
            description: 'Sequel Breath of the Wild. Link eksploruje nie tylko Hyrule, ale także niebo i podziemia królestwa.',
            genre: ['Action', 'Adventure', 'Open World', 'Puzzle'],
            releaseYear: 2023,
            platform: ['Nintendo Switch'],
            developer: 'Nintendo EPD',
            publisher: 'Nintendo',
            coverImage: '/images/games/zelda-totk.jpg',
            rating: 9.9,
        },
    });

    console.log('✅ Seed completed!');
    console.log(`📊 Created:`);
    console.log(`   - ${await prisma.game.count()} games`);
    console.log(`   - ${await prisma.article.count()} articles`);
    console.log(`   - ${await prisma.character.count()} characters`);
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
