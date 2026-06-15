import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.tyre.createMany({
        data: [
            {
                name: 'Michelin Power Road',
                category: 'road',
                speed: 95,
                grip: 70,
            },
            {
                name: 'Michelin Power Gravel',
                category: 'gravel',
                speed: 80,
                grip: 90,
            },
            {
                name: 'Michelin MTB Wild',
                category: 'mtb',
                speed: 60,
                grip: 95,
            },
            {
                name: 'Michelin City Pro',
                category: 'urban',
                speed: 50,
                grip: 75,
            },
        ],
    });
}

main()
    .then(() => prisma.$disconnect())
    .catch((e) => {
        console.error(e);
        prisma.$disconnect();
        process.exit(1);
    });
