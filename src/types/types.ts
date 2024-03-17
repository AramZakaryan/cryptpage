import {AssetType} from "../Data";


////////// VIEW TYPES


export type AssetViewType = AssetType & {
    grow: number | undefined
    growthPercent: number | undefined
    totalAmount: number | undefined
    totalProfit: number | undefined
}