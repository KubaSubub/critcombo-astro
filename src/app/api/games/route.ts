import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const limit = parseInt(searchParams.get('limit') || '10');
        const genre = searchParams.get('genre');

        const games = await prisma.game.findMany({
            where: genre ? {
                genre: {
                    has: genre,
                },
            } : undefined,
            include: {
                _count: {
                    select: {
                        articles: true,
                        characters: true,
                    },
                },
            },
            orderBy: {
                rating: 'desc',
            },
            take: limit,
        });

        return NextResponse.json(games);
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch games' },
            { status: 500 }
        );
    }
}
