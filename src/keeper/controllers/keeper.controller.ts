import { Keeper } from "@oceanprotocol/squid";
import { Get, Param, Controller } from "@nestjs/common";


@Controller('Keeper')
export class KeeperController {
    //#region Properties
    Keeper: Keeper

    //#endregion

    //#region Constructor
    constructor() {
        this.Keeper = new Keeper;
    }
    //#endregion

    //#region Methods

    //#region Get
    @Get('getConditionByAddress')
    getConditionByAddress(@Param('address') address: string) {
        return JSON.stringify(this.Keeper.getConditionByAddress(address));
    }

    @Get('getTemplateByName')
    getTemplateByName(@Param('name') name: string) {
        return JSON.stringify(this.Keeper.getTemplateByName(name));
    }


    @Get('getTemplateByAddress')
    getTemplateByAddress(address: string) {
        return JSON.stringify(this.Keeper.getTemplateByAddress(address));
    }

    @Get('getNetworkId')
    getNetworkId() {
        return JSON.stringify(this.Keeper.getNetworkId());
    }

    @Get('getNetworkName')
    getNetworkName() {
        return JSON.stringify(this.Keeper.getNetworkName());
    }
    //#endregion

    //#endregion
}