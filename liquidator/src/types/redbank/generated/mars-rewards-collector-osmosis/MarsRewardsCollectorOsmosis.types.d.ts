export declare type Decimal = string;
export interface InstantiateMsg {
    address_provider: string;
    channel_id: string;
    fee_collector_denom: string;
    owner: string;
    safety_fund_denom: string;
    safety_tax_rate: Decimal;
    slippage_tolerance: Decimal;
    timeout_blocks: number;
    timeout_revision: number;
    timeout_seconds: number;
}
export declare type ExecuteMsg = {
    update_config: {
        new_cfg: CreateOrUpdateConfig;
    };
} | {
    set_route: {
        denom_in: string;
        denom_out: string;
        route: OsmosisRoute;
    };
} | {
    withdraw_from_red_bank: {
        amount?: Uint128 | null;
        denom: string;
    };
} | {
    distribute_rewards: {
        amount?: Uint128 | null;
        denom: string;
    };
} | {
    swap_asset: {
        amount?: Uint128 | null;
        denom: string;
    };
} | {
    execute_cosmos_msg: {
        cosmos_msg: CosmosMsgForEmpty;
    };
};
export declare type OsmosisRoute = SwapAmountInRoute[];
export declare type Uint128 = string;
export declare type CosmosMsgForEmpty = {
    bank: BankMsg;
} | {
    custom: Empty;
} | {
    stargate: {
        type_url: string;
        value: Binary;
        [k: string]: unknown;
    };
} | {
    ibc: IbcMsg;
} | {
    wasm: WasmMsg;
} | {
    gov: GovMsg;
};
export declare type BankMsg = {
    send: {
        amount: Coin[];
        to_address: string;
        [k: string]: unknown;
    };
} | {
    burn: {
        amount: Coin[];
        [k: string]: unknown;
    };
};
export declare type Binary = string;
export declare type IbcMsg = {
    transfer: {
        amount: Coin;
        channel_id: string;
        timeout: IbcTimeout;
        to_address: string;
        [k: string]: unknown;
    };
} | {
    send_packet: {
        channel_id: string;
        data: Binary;
        timeout: IbcTimeout;
        [k: string]: unknown;
    };
} | {
    close_channel: {
        channel_id: string;
        [k: string]: unknown;
    };
};
export declare type Timestamp = Uint64;
export declare type Uint64 = string;
export declare type WasmMsg = {
    execute: {
        contract_addr: string;
        funds: Coin[];
        msg: Binary;
        [k: string]: unknown;
    };
} | {
    instantiate: {
        admin?: string | null;
        code_id: number;
        funds: Coin[];
        label: string;
        msg: Binary;
        [k: string]: unknown;
    };
} | {
    migrate: {
        contract_addr: string;
        msg: Binary;
        new_code_id: number;
        [k: string]: unknown;
    };
} | {
    update_admin: {
        admin: string;
        contract_addr: string;
        [k: string]: unknown;
    };
} | {
    clear_admin: {
        contract_addr: string;
        [k: string]: unknown;
    };
};
export declare type GovMsg = {
    vote: {
        proposal_id: number;
        vote: VoteOption;
        [k: string]: unknown;
    };
};
export declare type VoteOption = 'yes' | 'no' | 'abstain' | 'no_with_veto';
export interface CreateOrUpdateConfig {
    address_provider?: string | null;
    channel_id?: string | null;
    fee_collector_denom?: string | null;
    owner?: string | null;
    safety_fund_denom?: string | null;
    safety_tax_rate?: Decimal | null;
    slippage_tolerance?: Decimal | null;
    timeout_blocks?: number | null;
    timeout_revision?: number | null;
    timeout_seconds?: number | null;
}
export interface SwapAmountInRoute {
    pool_id: number;
    token_out_denom: string;
    [k: string]: unknown;
}
export interface Coin {
    amount: Uint128;
    denom: string;
    [k: string]: unknown;
}
export interface Empty {
    [k: string]: unknown;
}
export interface IbcTimeout {
    block?: IbcTimeoutBlock | null;
    timestamp?: Timestamp | null;
    [k: string]: unknown;
}
export interface IbcTimeoutBlock {
    height: number;
    revision: number;
    [k: string]: unknown;
}
export declare type QueryMsg = {
    config: {};
} | {
    route: {
        denom_in: string;
        denom_out: string;
    };
} | {
    routes: {
        limit?: number | null;
        start_after?: [string, string] | null;
    };
};
export interface ConfigForString {
    address_provider: string;
    channel_id: string;
    fee_collector_denom: string;
    owner: string;
    safety_fund_denom: string;
    safety_tax_rate: Decimal;
    slippage_tolerance: Decimal;
    timeout_blocks: number;
    timeout_revision: number;
    timeout_seconds: number;
}
export interface RouteResponseForString {
    denom_in: string;
    denom_out: string;
    route: string;
}
export declare type ArrayOfRouteResponseForString = RouteResponseForString[];
