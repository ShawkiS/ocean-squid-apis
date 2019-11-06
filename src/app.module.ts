import { ddoModule } from './ddo/ddo.module';
import { AquariusModule } from './aquarius/aquarius.module';
import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { brizoModule } from './brizo/brizo.module';
import { keeperModule } from './keeper/keeper.module';
import { oceanModule } from './ocean/ocean.module';


@Module({
  imports: [
    AquariusModule,
    brizoModule,
    ddoModule,
    keeperModule,
    oceanModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
