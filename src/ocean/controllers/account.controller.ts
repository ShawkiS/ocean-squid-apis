import { Account } from "@oceanprotocol/squid";
import { Get, Post, Body, Controller } from "@nestjs/common";


@Controller('Account')
export class AccountController {
    //#region Properties
    Account: Account;
    //#endregion

    //#region Constructor
    constructor() {
        this.Account = new Account
    }
    //#endregion

    //#region Methods

    //#region Get
    @Get('getId')
    getId() {
        return this.Account.getId();
    }

   
    @Get('getPassword')
    getPassword() {
        return this.Account.getPassword();
    }

 
    @Get('getToken')
    getToken() {
        return JSON.stringify(this.Account.getToken());
    }


    @Get('isTokenStored')
    isTokenStored() {
        return JSON.stringify(this.Account.isTokenStored());
    }


    @Get('getOceanBalance')
    getOceanBalance() {
        return JSON.stringify(this.Account.getOceanBalance());
    }

    @Get('getEtherBalance')
    getEtherBalance() {
        return JSON.stringify(this.Account.getEtherBalance());
    }

    @Get('getBalance')
    getBalance() {
        return JSON.stringify(this.Account.getBalance());
    }
    //#endregion

    //#region Post
    @Post('setId')
    setId(@Body('id') id: any) {
        this.Account.setId(id);
    }

    
    @Post('requestTokens')
    requestTokens(@Body('amount') amount: number | string) {
        this.Account.requestTokens(amount);
    }


    @Post('authenticate')
    authenticate() {
        this.Account.authenticate();
    }

    @Post('setPassword')
    setPassword(@Body('password') password: string) {
        this.Account.setPassword(password);
    }

    @Post('setToken')
    setToken(@Body('token') token: string) {
        this.Account.setToken(token);
    }

    //#endregion

    //#endregion
}