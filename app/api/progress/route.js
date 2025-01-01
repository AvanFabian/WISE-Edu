import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/lib/auth';

import prisma from '@/app/lib/prismadb.js';

export async function GET(req) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return new Response('Unauthorized', { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const levelNumber = parseInt(searchParams.get('level'), 10);
    const userId = session.user.id;

    try {
        const progress = await prisma.progress.findMany({
            where: {
                userId,
                level: {
                    number: levelNumber,
                },
            },
        });

        return new Response(JSON.stringify(progress), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Error fetching progress', { status: 500 });
    }
}
