export function coord(x, y) {
    if (!x) var x = 0;
    if (!y) var y = 0;
    return { x: x, y: y };
};

function B1(t) {
    return t * t * t;
};

function B2(t) {
    return 3 * t * t * (1 - t);
};
function B3(t) {
    return 3 * t * (1 - t) * (1 - t);
};
function B4(t) {
    return (1 - t) * (1 - t) * (1 - t);
};

function getBezier(percent, C1, C2, C3, C4) {
    let pos = new coord();
    pos.x =
        C1.x * B1(percent) +
        C2.x * B2(percent) +
        C3.x * B3(percent) +
        C4.x * B4(percent);
    pos.y =
        C1.y * B1(percent) +
        C2.y * B2(percent) +
        C3.y * B3(percent) +
        C4.y * B4(percent);
    return pos;
}

// //Control Points
// P1 = coord(50, 50);
// P2 = coord(300, 50);
// P3 = coord(50, 300);
// P4 = coord(300, 300);

// let stage = 0;
// let dir = 0;
// let requestId;

// function animateCurve(timestamp, callback) {
//     //change direction of motion at each end of the curve
//     if (stage > 1) stage = 0;

//     //increment to next step
//     stage += 0.01;

//     //find position on bezier curve
//     let curpos = getBezier(stage, P1, P2, P3, P4);

//     callback(curpos)
//     requestId = requestAnimationFrame(animateCurve);
// }

// requestId = requestAnimationFrame(animateCurve);

export default class AnimateCurve {
    constructor({ P1, P2, P3, P4, callback }) {
        this.P1 = P1
        this.P2 = P2
        this.P3 = P3
        this.P4 = P4
        this.callback = callback
        this.stage = 0;
    }

    start() {
        this.requestId = requestAnimationFrame((timestamp) => this.animate(timestamp));
    }

    stop() {
        this.requestId && clearImmediate(this.requestId)
        this.requestId = null
    }

    animate(timestamp) {
        //change direction of motion at each end of the curve
        if (this.stage > 1) this.stage = 0;

        //increment to next step
        this.stage += 0.01;

        //find position on bezier curve
        let curpos = getBezier(this.stage, this.P1, this.P2, this.P3, this.P4);

        this.callback(curpos)
        this.requestId = requestAnimationFrame((timestamp) => this.animate(timestamp));
    }
}


