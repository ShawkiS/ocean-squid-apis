import { OceanAgreements } from "@oceanprotocol/squid/dist/node/ocean/OceanAgreements";
import { Post, Body, Get, Param, Controller } from "@nestjs/common";
import { PrepareDto } from "../dtos/prepare.dto";
import { SendDto } from "../dtos/send.dto";
import { CreateDto } from "../dtos/create.dto";

@Controller('OceanAgreements')
export class OceanAgreementsController {

    OceanAgreements: OceanAgreements;

    constructor() {
        this.OceanAgreements = new OceanAgreements();
    }

    @Post('prepare')
    prepare(@Body('prepareDto') prepareDto: PrepareDto) {
        return JSON.stringify(this.OceanAgreements.prepare(prepareDto.did,
            prepareDto.serviceDefinitionId,
            prepareDto.consumer))
    }


    @Post('send')
    send(@Body('sendDto') sendDto: SendDto) {
        this.OceanAgreements.send(sendDto.did,
            sendDto.agreementId,
            sendDto.serviceDefinitionId,
            sendDto.signature,
            sendDto.consumer
        )
    }

    @Post('create')
    create(@Body('createDto') createDto: CreateDto) {
        this.OceanAgreements.create(createDto.did,
            createDto.agreementId,
            createDto.serviceDefinitionId,
            createDto.signature,
            createDto.consumer,
            createDto.publisher);
    }

    @Get('getStatus')
    getStatus(@Param('agreementId') agreementId: string, @Param('extended') extended?: false) {
        return JSON.stringify(this.OceanAgreements.status(agreementId, extended));
    }

}