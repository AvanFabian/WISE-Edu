const { PrismaClient } = require('@prisma/client');
import prisma from '@/app/lib/prismadb.js'

async function main() {
  for (let levelNumber = 1; levelNumber <= 9; levelNumber++) {
    // Create level
    const level = await prisma.level.create({
      data: {
        number: levelNumber,
        status: levelNumber === 1, // Unlock only the first level
      },
    });

    // Create questions for each level
    for (let questionNumber = 1; questionNumber <= 5; questionNumber++) {
      const question = await prisma.question.create({
        data: {
          content: `Question ${questionNumber} for Level ${levelNumber}`,
          level: { connect: { id: level.id } }, // Connect question to the level
        },
      });

      // Create answers for each question
      for (let answerNumber = 1; answerNumber <= 4; answerNumber++) {
        await prisma.answer.create({
          data: {
            content: `Answer ${answerNumber} for Question ${questionNumber}`,
            isCorrect: answerNumber === 1, // Mark the first answer as correct
            question: { connect: { id: question.id } }, // Connect answer to the question
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