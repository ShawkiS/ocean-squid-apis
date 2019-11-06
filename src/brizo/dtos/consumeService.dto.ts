import * as OceanAccount from './../../../node_modules/@oceanprotocol/squid/dist/node/ocean/Account';
import { File } from './../../../node_modules/@oceanprotocol/squid/dist/node/ddo/MetaData';

export class ConsumeServiceDto {
    agreementId: string;
    serviceEndpoint: string;
    account: OceanAccount.default;
    files: File[];
    destination: string;
    index?: number;
}