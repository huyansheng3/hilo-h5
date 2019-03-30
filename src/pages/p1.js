const e = 750;
const t = window.innerHeight > 1334 ? 1334 : window.innerHeight;
const h = { p1: 0, p2: t - 1206, p3: t - 1334, p4: t - 1334 };


const views = [
    {
        id: "p1",
        type: "Container",
        propes: {},
        delay: "p1",
        animations: [
            { prope: "y", time: [0, 0, 6 * t, 6 * t], value: [0, -6 * t] },
            { prope: "alpha", time: [0, 5.5 * t, 6 * t, 6 * t], value: [1, 0] }
        ]
    },
    {
        id: "story1.jpg",
        type: "Bitmap",
        image: "story1.jpg",
        parent: "p1",
        delay: "p1",
        propes: {
            y: 0
        },
        animations: []
    },
    {
        id: "story1-1.jpg",
        type: "Bitmap",
        image: "story1-1.jpg",
        parent: "p1",
        delay: "p1",
        propes: {
            y: t
        },
        animations: []
    },
    {
        id: "story1-2.jpg",
        type: "Bitmap",
        image: "story1-2.jpg",
        parent: "p1",
        delay: "p1",
        propes: {
            y: 2 * t
        },
        animations: []
    },
    {
        id: "story1-3.jpg",
        type: "Bitmap",
        image: "story1-3.jpg",
        parent: "p1",
        delay: "p1",
        propes: {
            y: 3 * t
        },
        animations: []
    }, {
        id: "story1-4.jpg",
        type: "Bitmap",
        image: "story1-4.jpg",
        parent: "p1",
        delay: "p1",
        propes: {
            y: 4 * t
        },
        animations: []
    },
    {
        id: "story1-5-1-2",
        type: "TextureAtlas",
        image: "story1-5-1-2.jpg",
        parent: "null",
        propes: {
            frames: [
                [754, 2, 750, 1334],
                [2, 2, 750, 1334],
            ],
            sprites: {
                sprite: [0, 1]
            }
        },
        animations: {}
    },
    {
        id: "story1-5-1-2-sprite",
        type: "Sprite",
        frames: "story1-5-1-2.sprite",
        parent: "p1",
        delay: "p1",
        propes: { interval: 200, timeBased: true, y: 5 * t },
        animations: []
    }
];

export default views;
