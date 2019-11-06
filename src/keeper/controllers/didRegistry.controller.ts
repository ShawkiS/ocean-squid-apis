import DIDRegistry from "@oceanprotocol/squid/dist/node/keeper/contracts/DIDRegistry";
import { Post, Body, Get, Param, Controller } from "@nestjs/common";
import { RegisterAttributeDto } from "../dtos/registerAttribute.dto";
import { IsDIDProviderDto } from "../dtos/isDIDProvider.dto";

@Controller('DidRegistry')
export class DidRegistryController {
    //#region Properties
    DIDRegistry: DIDRegistry;
    //#endregion

    //#region Constructor
    constructor() {
        this.DIDRegistry = new DIDRegistry("");
    }
    //#endregion

    //#region Methods

    //#region Get
    @Get('getDIDOwner')
    getDIDOwner(@Param('did') did: string) {
        return this.DIDRegistry.getDIDOwner(did);
    }

    @Get('getBlockNumberUpdated')
    getBlockNumberUpdated(@Param('did') did: string) {
        return this.DIDRegistry.getBlockNumberUpdated(did);
    }

    @Get('isDIDProvider')
    isDIDProvider(@Body('isDIDProviderDto') isDIDProviderDto: IsDIDProviderDto) {
        return this.DIDRegistry.isDIDProvider(isDIDProviderDto.did, isDIDProviderDto.provider);
    }

    @Get('getAttributesByOwner')
    getAttributesByOwner(@Param('owner') owner: string) {
        return this.DIDRegistry.getAttributesByOwner(owner);
    }
    @Get('getAttributesByDid')
    getAttributesByDid(@Param('did') did: string) {
        return this.DIDRegistry.getAttributesByDid(did);
    }
    //#endregion

    //#region Post
    @Post('registerAttribute')
    registerAttribute(@Body('registerAttributeDto') registerAttributeDto: RegisterAttributeDto) {
        return JSON.stringify(this.DIDRegistry.registerAttribute(
            registerAttributeDto.did,
            registerAttributeDto.checksum,
            registerAttributeDto.providers,
            registerAttributeDto.value,
            registerAttributeDto.ownerAddress
        ))
    }
    //#endregion

    //#endregion
}