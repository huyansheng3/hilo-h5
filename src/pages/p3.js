const e = 750;
const t = window.innerHeight > 1334 ? 1334 : window.innerHeight;
const h = { p2: 0, p2: t - 1206, p3: t - 1334, p4: t - 1334 };


const views = [
    {
        id: "p3",
        type: "Container",
        propes: {},
        delay: "p3",
        animations: [
            { prope: "y", time: [0, 0, 8 * t, 8 * t], value: [0, -8 * t] },
            { prope: "alpha", time: [0, 7.5 * t, 8 * t, 8 * t], value: [1, 0] }
        ]
    },
    {
        id: "story3.jpg",
        type: "Bitmap",
        image: "story3.jpg",
        parent: "p3",
        delay: "p3",
        propes: {
            y: 0
        },
        animations: []
    },
    {
        id: "story3-1.jpg",
        type: "Bitmap",
        image: "story3-1.jpg",
        parent: "p3",
        delay: "p3",
        propes: {
            y: t
        },
        animations: []
    },
    {
        id: "story3-2.jpg",
        type: "Bitmap",
        image: "story3-2.jpg",
        parent: "p3",
        delay: "p3",
        propes: {
            y: 2 * t
        },
        animations: []
    }, {
        id: "story3-3.jpg",
        type: "Bitmap",
        image: "story3-3.jpg",
        parent: "p3",
        delay: "p3",
        propes: {
            y: 3 * t
        },
        animations: []
    },
    {
        id: "story3-4.jpg",
        type: "Bitmap",
        image: "story3-4.jpg",
        parent: "p3",
        delay: "p3",
        propes: {
            y: 4 * t
        },
        animations: []
    },


    {
        id: "story3-5-1-2-3",
        type: "TextureAtlas",
        image: "story3-5-1-2-3.jpg",
        parent: "null",
        propes: {
            frames: [
                [1506, 2, 750, 1334],
                [754, 2, 750, 1334],
                [2, 2, 750, 1334],
            ],
            sprites: {
                sprite: [0, 1, 2]
            }
        },
        animations: {}
    },
    {
        id: "story3-5-1-2-3-sprite",
        type: "Sprite",
        frames: "story3-5-1-2-3.sprite",
        parent: "p3",
        delay: "p3",
        propes: { interval: 200, timeBased: true, y: 5 * t },
        animations: []
    },
    {
        id: "story3-6.jpg",
        type: "Bitmap",
        image: "story3-6.jpg",
        parent: "p3",
        delay: "p3",
        propes: {
            y: 6 * t
        },
        animations: []
    },

    {
        id: "story3-7.jpg",
        type: "Bitmap",
        image: "story3-7.jpg",
        parent: "p3",
        delay: "p3",
        propes: {
            y: 7 * t
        },
        animations: []
    }
];

export default views;
