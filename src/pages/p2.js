const e = 750;
const t = window.innerHeight > 1334 ? 1334 : window.innerHeight;
const h = { p2: 0, p2: t - 1206, p3: t - 1334, p4: t - 1334 };


const views = [
    {
        id: "p2",
        type: "Container",
        propes: {},
        delay: "p2",
        animations: [
            { prope: "y", time: [0, 0, 6 * t, 6 * t], value: [0, -6 * t] },
            { prope: "alpha", time: [0, 5.9 * t, 6 * t, 6 * t], value: [1, 0] }
        ]
    },
    {
        id: "故事2.jpg",
        type: "Bitmap",
        image: "故事2.jpg",
        parent: "p2",
        delay: "p2",
        propes: {
            y: 0
        },
        animations: []
    },
    {
        id: "故事2-1.jpg",
        type: "Bitmap",
        image: "故事2-1.jpg",
        parent: "p2",
        delay: "p2",
        propes: {
            y: t
        },
        animations: []
    },
    {
        id: "故事2-2.jpg",
        type: "Bitmap",
        image: "故事2-2.jpg",
        parent: "p2",
        delay: "p2",
        propes: {
            y: 2 * t
        },
        animations: []
    }, {
        id: "故事2-3.jpg",
        type: "Bitmap",
        image: "故事2-3.jpg",
        parent: "p2",
        delay: "p2",
        propes: {
            y: 3 * t
        },
        animations: []
    },
    {
        id: "故事2-4.jpg",
        type: "Bitmap",
        image: "故事2-4.jpg",
        parent: "p2",
        delay: "p2",
        propes: {
            y: 4 * t
        },
        animations: []
    },
    {
        id: "故事2-5-1-2",
        type: "TextureAtlas",
        image: "故事2-5-1-2.jpg",
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
        id: "故事2-5-1-2-sprite",
        type: "Sprite",
        frames: "故事2-5-1-2.sprite",
        parent: "p2",
        delay: "p2",
        propes: { interval: 500, timeBased: true, y: 5 * t },
        animations: []
    }
];

export default views;
