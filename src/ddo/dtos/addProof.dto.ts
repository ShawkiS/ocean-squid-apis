import { Ocean } from "@oceanprotocol/squid";
import * as Web3 from 'web3';

export class AddProofDto {
    web3: Web3;
    publicKey: string;
    password?: string;
}