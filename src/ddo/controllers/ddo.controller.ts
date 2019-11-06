import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { DDO } from '@oceanprotocol/squid'
import { GenerateProofDto } from '../dtos/generateProof.dto';
import { AddProofDto } from '../dtos/addProof.dto';

@Controller('ddo')
export class DdoController {
    //#region Properties
    DDO: DDO;
    //#endregion

    //#region Constructor
    constructor() {
        this.DDO = new DDO();
    }
    //#endregion

    //#region Methods

    //#region Get
    @Get('serialize')
    serialize(@Body('ddo') ddo: DDO): string {
        return DDO.serialize(ddo);
    }

    @Get('deserialize')
    deserialize(@Param('ddoString') ddoString: string): string {
        return JSON.stringify(DDO.deserialize(ddoString));
    }

    //findServiceByType get

    @Get('getChecksum')
    getChecksum(): string {
        return this.DDO.getChecksum();
    }

    //#endregion

    //#region Post
    @Post('generateProof')
    generateProof(@Body('generateProofDto') generateProofDto: GenerateProofDto): string {
        return JSON.stringify(this.DDO.generateProof(generateProofDto.ocean,
                                 generateProofDto.publicKey, 
                                 generateProofDto.password));
    }

    @Post('addChecksum')
    addChecksum(){
        return this.DDO.addChecksum();
    }

    @Post('addProof')
    addProof(@Body('addProofDto') addProofDto: AddProofDto) {
        return this.DDO.addProof(addProofDto.web3, 
                                 addProofDto.publicKey,
                                 addProofDto.password);
    }
    //#endregion

    //#endregion
}