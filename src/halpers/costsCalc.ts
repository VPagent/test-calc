


export const calcBackBlaze = (storage: number, transfer: number): number => {
     const result = (storage * 0.005) + (transfer * 0.01)
    return result < 7 ? 7 : Number(result.toFixed(2))
}

export const calcBunny = (storage: number, transfer: number, option: string): number => {
    let result
    if (option === 'hdd') {
        result = (storage * 0.01) + (transfer * 0.01)
        return result > 10 ? 10 : Number(result.toFixed(2))
    }
    result = (storage * 0.02) + (transfer * 0.01)
    return result > 10 ? 10 : Number(result.toFixed(2))
}

export const calcScaleWay = (storage: number, transfer: number, option: string): number  | string => {
    let result = 0
    if (storage < 75 && transfer < 75) {
        return result
    }
    if (option === 'multi') {
        result = ((storage - 75) * 0.06) + ((transfer - 75) * 0.02)
        return Number(result.toFixed(2))
    }
    result = ((storage - 75) * 0.03) + ((transfer - 75) * 0.02)
    return Number(result.toFixed(2))
}

export const calcVultr = (storage: number, transfer: number): number => {
    const result = (storage * 0.01) + (transfer * 0.01)
    return result < 5 ? 5 : Number(result.toFixed(2))
}