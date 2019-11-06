import { DID } from "@oceanprotocol/squid";

export class RetrieveDDODto {
    did: DID | string;
    metadataServiceEndpoint?: string;
}