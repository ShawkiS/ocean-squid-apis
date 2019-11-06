import { Module } from '@nestjs/common';
import { greementStoreManagerController } from './controllers/agreementStoreManager.controller';
import { ConditionStoreManagerController } from './controllers/conditionStoreManager.controller';
import { DidRegistryController } from './controllers/didRegistry.controller';
import { DispenserController } from './controllers/dispenser.controller';
import { KeeperController } from './controllers/keeper.controller';
import { OceanTokenController } from './controllers/oceanToken.controller';
import { TemplateStoreManagerController } from './controllers/templateStoreManager.controller';



@Module({
    imports: [],
    controllers: [
        greementStoreManagerController,
        ConditionStoreManagerController,
        DidRegistryController,
        DispenserController,
        KeeperController,
        OceanTokenController,
        TemplateStoreManagerController]
})
export class keeperModule { }