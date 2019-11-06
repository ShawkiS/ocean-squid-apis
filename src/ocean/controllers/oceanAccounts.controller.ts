import { OceanAccounts } from "@oceanprotocol/squid/dist/node/ocean/OceanAccounts";
import { Get, Body, Post, Controller } from "@nestjs/common";
import { Account } from "@oceanprotocol/squid";
import { RequestTokensDto } from "../dtos/requestTokens.dto";

@Controller('OceanAccount')
export class OceanAccountsController  {

    OceanAccounts: OceanAccounts

    constructor() {
        this.OceanAccounts = new OceanAccounts();
    }

    @Get('getList')
    getList() {
        return JSON.stringify(this.OceanAccounts.list());
    }

    @Get('getBalance')
    getBalance(@Body('account') account: Account) { 
        return JSON.stringify(this.OceanAccounts.balance(account));
    }

    @Post('requestTokens')
    requestTokens(@Body('requestTokensDto') requestTokensDto: RequestTokensDto){ 
        return JSON.stringify(this.OceanAccounts.requestTokens(requestTokensDto.account, requestTokensDto.amount))
    }
}