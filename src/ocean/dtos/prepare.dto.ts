//.    
import { Account } from "@oceanprotocol/squid";

export class PrepareDto {
    did: string;
    serviceDefinitionId: string;
    consumer: Account;
}