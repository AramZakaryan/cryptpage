export function growthPercent(assetPrice: number, cryptoPrice: number):number {
    return +((cryptoPrice - assetPrice) / assetPrice).toFixed(2)
}