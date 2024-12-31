import { PrismaClient } from '@prisma/client';

import prisma from '@/app/lib/prismadb.js'

export async function GET(req, res) {
    const levels = await prisma.level.findMany({ orderBy: { number: 'asc' } });
    return new Response(JSON.stringify(levels), { status: 200 });
}
