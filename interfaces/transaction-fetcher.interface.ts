import { KnownAsset } from "./general.interface.ts";

export interface TransactionFetcher {
  fetchUserTransactions(
    apiKey: string,
    config: {
      latestAssetTransactionRecords: Transaction[];
      supportedAssets: KnownAsset[];
    }
  ): Promise<Transaction[]>;
}

export interface Transaction {
  time: Date;
  type: "buy" | "sell";
  asset_name: string;
  quantity: bigint | number;
  price: number | null;
  balance: bigint | number;
  meta: Record<string, unknown>;
}
