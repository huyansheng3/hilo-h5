const texture = require('./story1-4-texture.json')
const fs = require('fs')

const frames = texture.frames.map(item => {
    let ret = []
    for (let x in item.frame) {
        ret.push(item.frame[x])
    }
    return ret
})

console.log(frames)




