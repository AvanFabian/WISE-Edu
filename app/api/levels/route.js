import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, res) {
    const levels = await prisma.level.findMany({ orderBy: { number: 'asc' } });
    return new Response(JSON.stringify(levels), { status: 200 });
}
