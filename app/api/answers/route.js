import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  const { questionId, answerId, isCorrect } = await req.json();

  try {
    const storedAnswer = await prisma.progress.create({
      data: {
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
