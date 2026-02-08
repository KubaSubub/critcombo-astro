# Backend Integration Notes

## Dodawanie Nowej Gry
1. Przez Prisma Studio (GUI):
   - npx prisma studio
   - Kliknij "Game" → "Add Record"
   - Wypełnij pola
   
2. Przez kod (seed script):
   - Edytuj `prisma/seed.ts`
   - Dodaj nowy `await prisma.game.create({ ... })`
   - `npx prisma db seed`

## Struktura Obrazów
- `/public/images/games/` - cover images gier
- `/public/images/articles/` - hero images artykułów
- `/public/images/characters/` - portrety postaci
- Format: WebP (fallback: JPG)
- Naming: slug + extension (np. `the-witcher-3.webp`)

## API Endpoints
- `GET /api/games` - lista (query params: ?limit=10&genre=RPG)
- `GET /api/games/[slug]` - szczegóły + relacje
- `GET /api/search?q=query` - wyszukiwarka (min 2 znaki)

## Przyszłe Rozszerzenia
- [ ] Paginacja (offset/cursor-based)
- [ ] Full-text search (PostgreSQL tsvector)
- [ ] Image upload (Supabase Storage)
- [ ] User-generated content (reviews, ratings)
