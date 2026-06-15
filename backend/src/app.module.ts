import { Module } from '@nestjs/common';
import { TyresModule } from './tyres/tyres.module';

@Module({
  imports: [TyresModule],
})
export class AppModule {}