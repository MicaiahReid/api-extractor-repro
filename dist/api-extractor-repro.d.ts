/// <reference types="node" />

import type { AccessList } from '@ethereumjs/tx';
import type { Bloom } from './bloom';
import type { EVMResult } from '@ethereumjs/evm';
import type { Log } from '@ethereumjs/evm';

/**
 * Abstract interface with common transaction receipt fields
 */
declare interface BaseTxReceipt {
    /**
     * Cumulative gas used in the block including this tx
     */
    cumulativeBlockGasUsed: bigint;
    /**
     * Bloom bitvector
     */
    bitvector: Buffer;
    /**
     * Logs emitted
     */
    logs: Log[];
}

/**
 * Receipt type for Byzantium and beyond replacing the intermediary
 * state root field with a status code field (EIP-658)
 */
declare interface PostByzantiumTxReceipt extends BaseTxReceipt {
    /**
     * Status of transaction, `1` if successful, `0` if an exception occured
     */
    status: 0 | 1;
}

/**
 * Pre-Byzantium receipt type with a field
 * for the intermediary state root
 */
declare interface PreByzantiumTxReceipt extends BaseTxReceipt {
    /**
     * Intermediary state root
     */
    stateRoot: Buffer;
}

/**
 * Execution result of a transaction
 */
export declare interface RunTxResult extends EVMResult {
    /**
     * Bloom filter resulted from transaction
     */
    bloom: Bloom;
    /**
     * The amount of ether used by this transaction
     */
    amountSpent: bigint;
    /**
     * The tx receipt
     */
    receipt: TxReceipt;
    /**
     * The amount of gas used in this transaction, which is paid for
     * This contains the gas units that have been used on execution, plus the upfront cost,
     * which consists of calldata cost, intrinsic cost and optionally the access list costs
     */
    totalGasSpent: bigint;
    /**
     * The amount of gas as that was refunded during the transaction (i.e. `gasUsed = totalGasConsumed - gasRefund`)
     */
    gasRefund: bigint;
    /**
     * EIP-2930 access list generated for the tx (see `reportAccessList` option)
     */
    accessList?: AccessList;
}

declare type TxReceipt = PreByzantiumTxReceipt | PostByzantiumTxReceipt;

export { }
