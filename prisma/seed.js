const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Loop through 9 levels
  for (let levelNumber = 1; levelNumber <= 9; levelNumber++) {
    const level = await prisma.level.create({
      data: {
        number: levelNumber,
        status: levelNumber === 1, // Unlock only the first level
      },
    });

    // Add 5 questions for each level
    for (let questionNumber = 1; questionNumber <= 5; questionNumber++) {
      const question = await prisma.question.create({
        data: {
          content: `Question ${questionNumber} for Level ${levelNumber}`,
          levelId: level.id,
        },
      });

      // Add 4 answers for each question, marking one as correct
      for (let answerNumber = 1; answerNumber <= 4; answerNumber++) {
        await prisma.answer.create({
          data: {
            content: `Answer ${answerNumber} for Question ${questionNumber}`,
            isCorrect: answerNumber === 1, // Mark the first answer as correct
            questionId: question.id,
          },
        });
      }
    }
  }

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
