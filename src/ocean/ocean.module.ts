import { Module } from '@nestjs/common';
import { AccountController } from "./controllers/account.controller";
import { didController } from './controllers/did.controller';
import { OceanAccountsController } from './controllers/oceanAccounts.controller';
import { OceanAgreementsController } from './controllers/oceanAgreements.controller';

@Module({
    imports: [],
    controllers: [
        AccountController,
        didController,
        OceanAccountsController,
        OceanAgreementsController
    ]
})
export class oceanModule { }