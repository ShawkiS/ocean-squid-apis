import OceanToken from "@oceanprotocol/squid/dist/node/keeper/contracts/Token";
import { Post, Body, Get, Param, Controller } from "@nestjs/common";
import { ApproveDto } from "../dtos/approve.dto";
import { TransferDto } from "../dtos/transfer.dto";


@Controller('OceanToken')
export class OceanTokenController {

    //#region Properties
    OceanToken: OceanToken
    //#endregion

    //#region Constructor
    constructor() {
        this.OceanToken = new OceanToken("");
    }
    //#endregion

    //#region Methods

    //#region Get

    @Get('decimals')
    decimals() {
        return JSON.stringify(this.OceanToken.decimals());
    }

    @Get('getBalanceOf')
    getBalanceOf(@Param('address') address: string) {
        return JSON.stringify(this.OceanToken.balanceOf(address));
    }

    //#endregion

    //#region Post
    @Post('approve')
    approve(@Body('approveDto') approveDto: ApproveDto) {
        return JSON.stringify(this.OceanToken.approve(approveDto.to, approveDto.price, approveDto.from))
    }

    @Post('transfer')
    transfer(@Body('transferDto') transferDto: TransferDto) {
        return JSON.stringify(this.OceanToken.transfer(transferDto.to, transferDto.amount, transferDto.from))
    }
    //#endregion

    //#endregion
}