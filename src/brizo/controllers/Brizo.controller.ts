import { ConsumeServiceDto } from './../dtos/consumeService.dto';
import { InitializeServiceAgreementDto } from './../dtos/initializeServiceAgreement.dto';
import { Controller, Get, Body, Post } from '@nestjs/common';
import { Brizo } from '@oceanprotocol/squid/dist/node/brizo/Brizo';
import { InstantiableConfiguration } from 'src/shared/Configuration/instantiableConfiguration';
import { GetComputeEndpointDto } from '../dtos/getComputeEndpoint.dto';

@Controller('brizo')
export class BrizoController {
    //#region Properties
    Brizo: Brizo;
    //#endregion

    //#region Constructor
    constructor() {
    }
    //#endregion

    //#region Methods

    //#region Get
    @Get('getVersionInfo')
    getVersionInfo() {
        return this.Brizo.getVersionInfo();
    }

    @Get('getPurchaseEndpoint')
    getPurchaseEndpoint() {
        return this.Brizo.getPurchaseEndpoint();
    }

    @Get('getConsumeEndpoint')
    getConsumeEndpoint() {
        return this.Brizo.getConsumeEndpoint();
    }

    @Get('getEncryptEndpoint')
    getEncryptEndpoint() {
        return this.Brizo.getEncryptEndpoint();
    }

    @Get('getComputeEndpoint')
    getComputeEndpoint(@Body('getComputeEndpointDto') getComputeEndpointDto: GetComputeEndpointDto) {
        return this.Brizo.getComputeEndpoint(getComputeEndpointDto.pubKey,
            getComputeEndpointDto.serviceId,
            getComputeEndpointDto._notUsed,
            getComputeEndpointDto.container);
    }
    //#endregion

    //#region Post
    @Post('initializeServiceAgreement')
    initializeServiceAgreement(@Body('initializeServiceAgreementDto') initializeServiceAgreementDto: InitializeServiceAgreementDto) {
        return this.Brizo.initializeServiceAgreement(initializeServiceAgreementDto.did,
                                                     initializeServiceAgreementDto.serviceAgreementId,
                                                     initializeServiceAgreementDto.serviceDefinitionId,
                                                     initializeServiceAgreementDto.signature,
                                                     initializeServiceAgreementDto.signature        
        );
    }

    @Post('consumeService')
    consumeService(@Body('consumeServiceDto') consumeServiceDto: ConsumeServiceDto) {
        return this.Brizo.consumeService(consumeServiceDto.agreementId,
            consumeServiceDto.serviceEndpoint,
            consumeServiceDto.account,
            consumeServiceDto.files,
            consumeServiceDto.destination,
            consumeServiceDto.index
            );
    }
    //#endregion

    //#endregion
}