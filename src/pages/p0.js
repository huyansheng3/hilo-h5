const e = 750;
const t = 1334;
const h = { p1: 0, p2: t - 1206, p3: t - 1334, p4: t - 1334 };

const views = [

    {
        id: "p0",
        type: "Container",
        propes: {},
        delay: "p0",
        animations: [
            { prope: "y", time: [0, 0, t, t], value: [0, -t] },
            { prope: "alpha", time: [0, 0, t, t], value: [1, 0] },
        ]
    },


    {
        id: "homepage.jpg",
        type: "Bitmap",
        image: "homepage.jpg",
        parent: "p0",
        delay: "p0",
        propes: {},
        animations: []
    },

    {
        id: "star",
        type: "Bitmap",
        image: "star.png",
        parent: "p0",
        delay: "p0",
        propes: {
            x: e / 2, y: t / 2,
            pivotX: 90,
            pivotY: 74,
        },
        animations: {}
    },

    // {
    //     id: "star2",
    //     type: "Graphics",
    //     parent: "p0",
    //     propes: { x: e / 2, y: t / 2 },
    //     delay: "p0",
    //     draw: function () {
    //         this.lineStyle(1, "#b5dced")
    //             .beginFill("#b5dced")
    //             .drawRect(0, 0, 10, 10)
    //             .endFill();
    //     },
    //     animations: [
    //     ]
    // },



];

export default views;
