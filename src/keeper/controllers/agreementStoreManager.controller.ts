import { AgreementStoreManager } from "@oceanprotocol/squid/dist/node/keeper/contracts/managers";
import { Get, Param,Controller } from "@nestjs/common";

@Controller('greementStoreManager')
export class greementStoreManagerController {

    //#region Properties
    AgreementStoreManager: AgreementStoreManager;
    //#endregion

    //#region Constructor
    constructor() {
        this.AgreementStoreManager = new AgreementStoreManager(""); 
     }
    //#endregion

    //#region Methods

    //#region Get
    @Get('getOwner')
    getOwner(){ 
        return this.AgreementStoreManager.getOwner();
    }

    @Get('getAgreement')
    getAgreement(@Param('agreementId') agreementId: string){ 
        return this.AgreementStoreManager.getAgreement(agreementId);
    }
    //#endregion

    //#endregion
}