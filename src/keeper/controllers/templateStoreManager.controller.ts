import { TemplateStoreManager } from "@oceanprotocol/squid/dist/node/keeper/contracts/managers";
import { Get, Param, Post, Controller } from "@nestjs/common";

@Controller('TemplateStoreManager')
export class TemplateStoreManagerController {
    //#region Properties
    TemplateStoreManager: TemplateStoreManager;
    //#endregion

    //#region Constructor
    constructor() {
        this.TemplateStoreManager = new TemplateStoreManager("");
    }
    //#endregion

    //#region Methods

    //#region Get
    @Get('getTemplate')
    getTemplate(@Param('address') address: string) { 
        return this.TemplateStoreManager.getTemplate(address);
    }
    
    @Get('getOwner')
    getOwner() {
        return this.TemplateStoreManager.getOwner;
    }
    //#endregion

    //#region Post
    @Post('proposeTemplate')
    proposeTemplate(@Param('address') address: string,
        @Param('from') from?: string,
        @Param('ignoreExists') ignoreExists?: boolean) {
        return this.TemplateStoreManager.proposeTemplate(address, from, ignoreExists)
    }

    @Post('approveTemplate')
    approveTemplate(@Param('address') address: string,
        @Param('from') from?: string,
        @Param('ignoreApproved') ignoreApproved?: boolean) {
        return this.TemplateStoreManager.approveTemplate(address, from, ignoreApproved)
    }

    @Post('revokeTemplate')
    revokeTemplate(@Param('address') address: string, @Param('from') from?: string) {
        return this.TemplateStoreManager.revokeTemplate(address, from);
    }
    //#endregion

    //#endregion
}