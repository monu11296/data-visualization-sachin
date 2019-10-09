import { data } from '../data'

export const teams: any = () => {

    let teamSet: any = new Set([])
    let teamArray = []
    data.forEach(elm => {
        teamSet.add(elm.opposition)
    })
    teamArray = [...teamSet]
    return teamArray
}


export const totalRunScored = (param?: any) => {
    let totalRuns = 0

    if (param) {
        data.forEach((elm: any) => {
            if (!isNaN(parseInt(elm.batting_score)) && param === elm.opposition) {
                totalRuns += parseInt(elm.batting_score)
            }
        })
    }
    else {
        data.forEach((elm: any) => {
            if (!isNaN(parseInt(elm.batting_score))) {
                totalRuns += parseInt(elm.batting_score)
            }
        })
    }

    return totalRuns
}

export const totalCatches = () => {
    let catches = 0
    data.forEach((elm: any) => {
        if (!isNaN(elm.catches)) {
            catches += parseInt(elm.catches)
        }
    })
    return catches
}

export const totalMatchesWon = (param?: any) => {
    let won = 0

    if (param) {
        data.forEach((elm: any) => {
            if (elm.match_result === "won" && param === elm.opposition) {
                won++
            }
        })
    }
    else {
        data.forEach((elm: any) => {
            if (elm.match_result === "won") {
                won++
            }
        })
    }
    return won
}


export const matchesPlayed = (param: any) => {
    let matches = 0
    data.forEach((elm: any) => {
        if (param === elm.opposition) {
            matches++
        }
    })
    return matches
}

export const wicketsTaken = (param?: any) => {
    let wickets = 0
    if (param) {
        data.forEach((elm: any) => {
            if (param === elm.opposition && !isNaN(parseInt(elm.wickets))) {
                if (parseInt(elm.wickets) !== 0)
                    wickets += parseInt(elm.wickets)
            }
        })
    } else {
        data.forEach((elm: any) => {
            if (!isNaN(parseInt(elm.wickets))) {
                if (parseInt(elm.wickets) !== 0)
                    wickets += parseInt(elm.wickets)
            }
        })
    }
    return wickets
}

export const notOut = () => {
    let notOut = 0
    data.forEach((elm: any) => {
        if (elm['batting_score'].toString().match(/[\*]/))
            notOut++
    })
    return notOut
}

export const hundreds = () => {
    let hundreds = 0 
    data.forEach((elm: any) => {
        if (!isNaN(parseInt(elm.batting_score))) {
            if (parseInt(elm.batting_score) >= 100)
                hundreds++
        }
    })
    return hundreds
}

export const fifties = () => {
    let fifties = 0 
    data.forEach((elm: any) => {
        if (!isNaN(parseInt(elm.batting_score))) {
            if (parseInt(elm.batting_score) >= 50 && parseInt(elm.batting_score) < 100)
                fifties++
        }
    })
    return fifties
}