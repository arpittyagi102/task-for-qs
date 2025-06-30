import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Find or create Université de Montréal profile
  let university = await prisma.university.findFirst({
    where: { name: "Université de Montréal" },
  });
  if (!university) {
    university = await prisma.university.create({
      data: {
        name: "Université de Montréal",
        country: "Canada",
        logoUrl: "/public/globe.svg", // Update with actual logo path if available
        description: `Université de Montréal is a leading research university located in Montreal, Quebec, Canada. It is renowned for its diverse academic programs and vibrant campus life.`,
      },
    });
  }

  // Rankings for the last 5 years (QS World University Rankings)
  const rankings = [
    { year: 2024, rank: 141 },
    { year: 2023, rank: 116 },
    { year: 2022, rank: 111 },
    { year: 2021, rank: 118 },
    { year: 2020, rank: 137 },
  ];

  // Upsert rankings (delete old, insert new for demo)
  await prisma.ranking.deleteMany({ where: { universityId: university.id } });
  for (const r of rankings) {
    await prisma.ranking.create({
      data: {
        universityId: university.id,
        year: r.year,
        rank: r.rank,
      },
    });
  }

  console.log("Seeded Université de Montréal and rankings.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
