

type StylesObject = {
    height?: string | number,
    width?: string,
    backgroundColor: string
}

export const smallStyle = (word: string, minPrice: string, price:number | string, color: string, isBig: boolean): StylesObject => {
    
    const result = {
        height: "100%",
        width: "100%",
        backgroundColor: `${minPrice === word ? color : "#504444"}`,
    }
    if (isBig) {
        result.width = `${price}%`
        result.height = "45px"
        return result
    }
    result.height = `${price}%`
    result.width = "45px"
    return result
}
