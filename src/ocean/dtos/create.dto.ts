import { Account } from "@oceanprotocol/squid";

export class CreateDto {
    did: string;
    agreementId: string;
    serviceDefinitionId: string;
    signature: string;
    consumer: Account;
    publisher: Account;
}