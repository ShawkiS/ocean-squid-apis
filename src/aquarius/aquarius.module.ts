import { Module } from '@nestjs/common';
import { AquariusController } from './controllers/Aquarius.controller';

@Module({
  imports: [],
 controllers: [AquariusController]
})
export class AquariusModule {}
