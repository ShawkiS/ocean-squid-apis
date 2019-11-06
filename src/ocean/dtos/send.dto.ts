import { Account } from "@oceanprotocol/squid";

export class SendDto {
    did: string;
    agreementId: string;
    serviceDefinitionId: string;
    signature: string;
    consumer: Account;
}