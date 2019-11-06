import { Post, Body, Controller } from "@nestjs/common";
import Dispenser from "@oceanprotocol/squid/dist/node/keeper/contracts/Dispenser";
import { RequestTokensDto } from "../dtos/requestTokens.dto";

@Controller('Dispenser')
export class DispenserController {
    //#region Properties
    Dispenser: Dispenser;
    //#endregion

    //#region Constructor
    constructor() {
        this.Dispenser = new Dispenser("");
    }
    //#endregion

    //#region Methods

    //#region Post
    @Post('requestTokens')
    requestTokens(@Body('requestTokensDto') requestTokensDto: RequestTokensDto) {
        return JSON.stringify(this.Dispenser.requestTokens(requestTokensDto.amount,requestTokensDto.receiverAddress));
    }
    //#endregion

    //#endregion
}