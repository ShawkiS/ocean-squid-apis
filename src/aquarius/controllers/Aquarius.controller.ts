import { GetaccessUrlDto } from './../dtos/getAccessUrl.dto';
import { DDO, DID } from '@oceanprotocol/squid';
import { Controller, Get, Body, Param, Post } from '@nestjs/common';
import { Aquarius, SearchQuery } from '@oceanprotocol/squid/dist/node/aquarius/Aquarius';
import { RetrieveDDODto } from '../dtos/retrieveDDO.dto';

@Controller('aquarius')
export class AquariusController {

    //#region Properties
    Aquarius: Aquarius;
    //#endregion

    //#region Constructor
    constructor() {
    }
    //#endregion


    //#region Methods

    //#region Get
    @Get('getVersionInfo')
    getVersionInfo() {
        this.Aquarius.getVersionInfo();
    }

    @Get('getaccessUrl')
    getaccessUrl(@Body('getaccessUrlDto') getaccessUrlDto: GetaccessUrlDto): string {
        return JSON.stringify(this.Aquarius.getAccessUrl(getaccessUrlDto.accessToken, getaccessUrlDto.payload));
    }

    @Get('queryMetadata')
    queryMetadata(@Param('query') query: SearchQuery) {
        return JSON.stringify(this.Aquarius.queryMetadata(query));
    }

    @Get('queryMetadataByText')
    queryMetadataByText(@Param('query') query: SearchQuery) {
        return JSON.stringify(this.Aquarius.queryMetadataByText(query));
    }

    @Get('retrieveDDO')
    retrieveDDO(@Body('retrieveDDODto') retrieveDDODto: RetrieveDDODto) {
        return JSON.stringify(this.Aquarius.retrieveDDO(retrieveDDODto.did, retrieveDDODto.metadataServiceEndpoint));
    }

    @Get('retrieveDDOByUrl')
    retrieveDDOByUrl(@Param('metadataServiceEndpoint') metadataServiceEndpoint: string) {
        return JSON.stringify(this.Aquarius.retrieveDDOByUrl(metadataServiceEndpoint));
    }

    @Get('getServiceEndpoint')
    getServiceEndpoint(@Body('did') did: DID) {
        return JSON.stringify(this.Aquarius.getServiceEndpoint(did));
    }
    //#endregion

    //#region Post
    @Post('storeDDO')
    storeDDO(@Body('ddo') ddo: DDO) {
        return JSON.stringify(this.Aquarius.storeDDO(ddo));
    }
    //#endregion

    //#endregion
}