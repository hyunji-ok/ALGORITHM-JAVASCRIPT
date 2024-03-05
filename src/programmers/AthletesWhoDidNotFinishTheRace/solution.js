const solution = (participant, completion) => {
    let hash = {}
    participant.forEach((par) => {
        hash[par] = hash[par] ? hash[par] +1 : 1
    })
    completion.forEach((par) => {
        hash[par] = hash[par] -1
    })

    for(let key in hash) {
        if(hash[key] >= 1) {
            return key
        }
    }
}

module.exports = solution