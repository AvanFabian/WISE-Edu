import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/lib/auth';

import prisma from '@/app/lib/prismadb.js';

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { questionId, answerId, isCorrect, levelNumber } = await req.json();

  try {
    // Check if progress already exists
    const existingProgress = await prisma.progress.findFirst({
      where: {
        userId: session.user.id,
        questionId,
      },
    });

    let progress;

    if (existingProgress) {
      // Update existing progress
      progress = await prisma.progress.update({
        where: { id: existingProgress.id },
        data: { answerId, isCorrect },
      });
    } else {
      // Create new progress
      progress = await prisma.progress.create({
        data: {
          userId: session.user.id,
          levelId: levelNumber,
          questionId,
          answerId,
          isCorrect,
        },
      });
    }

    return new Response(JSON.stringify(progress), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response('Error saving progress', { status: 500 });
  }
}
