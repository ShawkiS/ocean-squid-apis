import { Ocean } from "@oceanprotocol/squid";

export class GenerateProofDto {
    ocean: Ocean;
    publicKey: string;
    password?: string;
  }