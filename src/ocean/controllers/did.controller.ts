import { DID } from "@oceanprotocol/squid";
import { Post, Body, Get, Controller } from "@nestjs/common";

@Controller('did')
export class didController {

    DID: DID;


    @Post('parse')
    parse(@Body('didString') didString: string | DID) {
        return JSON.stringify(DID.parse(didString));
    }

    @Post('generate')
    generate() {
        return JSON.stringify(DID.generate());
    }

    @Get('getDid')
    getDid() {
        return JSON.stringify(this.DID.getDid());
    }

    @Get('getId')
    getId() {
        return JSON.stringify(this.DID.getId());
    }
}
