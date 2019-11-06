import { Module } from '@nestjs/common';
import { BrizoController } from './controllers/Brizo.controller';

@Module({
  imports: [],
  controllers: [BrizoController]
})
export class brizoModule {}