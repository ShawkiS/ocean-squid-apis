import { ConditionStoreManager } from "@oceanprotocol/squid/dist/node/keeper/contracts/managers";
import { Get, Param, Controller } from "@nestjs/common";

@Controller('ConditionStoreManager')
export class ConditionStoreManagerController {

    //#region Properties
    ConditionStoreManager: ConditionStoreManager;
    //#endregion

    //#region Constructor
    constructor() {
        this.ConditionStoreManager = new ConditionStoreManager("");
    }
    //#endregion

    //#region Methods

    //#region Get
    @Get('getOwner')
    getOwner() {
        return this.ConditionStoreManager.getOwner();
    }

    @Get('getCondition')
    getCondition(@Param('conditionId') conditionId: string) {
        return this.ConditionStoreManager.getCondition(conditionId);
    }
    //#endregion

    //#endregion

} 