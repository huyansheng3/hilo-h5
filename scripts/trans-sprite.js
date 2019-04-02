const texture = require('./homepage-texture.json')
const fs = require('fs')

const frames = texture.frames.sort((b, a) => {
    return +a.filename.split('.')[0] - +b.filename.split('.')[0]
}).map(item => {
    let ret = []
    for (let x in item.frame) {
        ret.push(item.frame[x])
    }
    return ret
})

console.log(frames)




