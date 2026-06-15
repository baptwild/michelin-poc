import { Controller, Get, Query } from '@nestjs/common';
import { TyresService } from './tyres.service';

@Controller('tyres')
export class TyresController {
    constructor(private readonly tyresService: TyresService) {}

    @Get()
    getAll() {
        return this.tyresService.findAll();
    }

    @Get('filter')
    getByCategory(@Query('category') category: string) {
        return this.tyresService.findByCategory(category);
    }
}