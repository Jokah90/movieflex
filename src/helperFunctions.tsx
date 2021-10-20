export const subReleaseDate = (x: string, y: string) => {
    if (x !== undefined) {
        return x.substr(0,4)
    } else if (y !== undefined) {
        return y.substr(0,4)
    } else {
        return
    }
}

export const subOverView = (x: string) => {
    if (x !== undefined && x.length > 250) {
        return x.substr(0, 250) + '...'
    } else {
        return x
    }
}

export default { subReleaseDate, subOverView }