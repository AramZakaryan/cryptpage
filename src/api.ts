import axios from 'axios';
import {crypto, cryptoBalance, CryptoBalanceType} from "./Data";

const axiosConfig = {
    headers: {
        accept: 'application/json',
        'X-API-KEY': 'Q8tSyFm/TKHHBe42Vw371tWyX+DQ5EliIWYjOS7WZaA='
    }
}

export const api = {
    fetchCrypto() {
        return axios.get<CryptoDataType>("https://openapiv1.coinstats.app/coins", axiosConfig)
    },
    fakeFetchCrypto(): Promise<CryptoType> {
        // return  new Promise((res,rej)=>res(cryptoData))
        return new Promise(res => setTimeout(() => {
                res(crypto)
            }
            , 1000))
    },
    fakeFetchCryptoBalance(): Promise<CryptoBalanceType> {
        // return  new Promise((res,rej)=>res(cryptoData))
        return new Promise(res => setTimeout(() => {
                res(cryptoBalance)
            }
            , 500))
    }
}


////////// TYPES

export type CryptoType = {
    data: CryptoDataType;
}
export type CryptoDataType = {
    result: CryptoDataSingleResultType[];
    meta: CryptoDataMetaType;
}
export type CryptoDataSingleResultType = {
    id: string;
    icon: string;
    name: string;
    symbol: string;
    rank: number;
    price: number;
    priceBtc: number;
    volume: number;
    marketCap: number;
    availableSupply: number;
    totalSupply: number;
    priceChange1h: number;
    priceChange1d: number;
    priceChange1w: number;
    redditUrl: string;
    websiteUrl: string;
    twitterUrl?: string;
    contractAddress?: string
    decimals?: number
    explorers: string[];
}
type CryptoDataMetaType = {
    page: number;
    limit: number;
    itemCount: number;
    pageCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}
