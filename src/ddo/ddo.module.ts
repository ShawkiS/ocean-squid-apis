import { Module } from '@nestjs/common';
import { DdoController } from './controllers/ddo.controller';

@Module({
  imports: [],
  controllers: [DdoController]
})
export class ddoModule {}