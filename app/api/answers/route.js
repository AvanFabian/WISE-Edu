import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/lib/auth';

import prisma from '@/app/lib/prismadb.js'

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { questionId, answerId, isCorrect, levelNumber } = await req.json();

  try {
    const storedAnswer = await prisma.progress.create({
      data: {
        userId: session.user.id, // Use the user ID from the session
        levelId: levelNumber,
        questionId,
        answerId,
        isCorrect,
      },
    });

    return new Response(JSON.stringify(storedAnswer), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response('Error storing answer', { status: 500 });
  }
}
