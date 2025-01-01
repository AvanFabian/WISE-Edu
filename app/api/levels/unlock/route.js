export async function POST(req) {
  const body = await req.json();
  const { userId, levelNumber } = body;

  // Fetch progress for the level
  const userProgress = await prisma.progress.findMany({
    where: {
      userId: userId,
      level: {
        number: levelNumber,
      },
      isCorrect: true,
    },
  });

  const totalQuestions = await prisma.question.count({
    where: { level: { number: levelNumber } },
  });

  if (userProgress.length === totalQuestions) {
    const nextLevel = await prisma.level.findUnique({
      where: { number: levelNumber + 1 },
    });

    if (nextLevel) {
      // Unlock the next level
      await prisma.level.update({
        where: { id: nextLevel.id },
        data: { status: true },
      });
    }
  }

  return NextResponse.json({ success: true });
}
