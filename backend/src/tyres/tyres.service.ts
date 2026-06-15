import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class TyresService {
    async findAll() {
        return prisma.tyre.findMany();
    }

    async findByCategory(category: string) {
        return prisma.tyre.findMany({
            where: {
                category,
            },
        });
    }
}
