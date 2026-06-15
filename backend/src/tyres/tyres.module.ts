import { Module } from '@nestjs/common';
import { TyresService } from './tyres.service';
import { TyresController } from './tyres.controller';

@Module({
  providers: [TyresService],
  controllers: [TyresController]
})
export class TyresModule {}
