import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
    const url = new URL(req.url);
    const levelNumber = parseInt(url.searchParams.get('level'));

    const level = await prisma.level.findUnique({
        where: { number: levelNumber },
        include: {
            questions: {
                include: {
                    answers: true,
                },
            },
        },
    });

    if (!level) {
        return new Response('Level not found', { status: 404 });
    }

    return new Response(JSON.stringify(level.questions), { status: 200 });
}
