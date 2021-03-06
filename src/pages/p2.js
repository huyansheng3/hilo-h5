const e = 750;
const t = 1334;
const h = { p2: 0, p2: t - 1206, p3: t - 1334, p4: t - 1334 };


const views = [
    {
        id: "p2",
        type: "Container",
        propes: {},
        delay: "p2",
        animations: [
            { prope: "y", time: [0, 0, 8 * t, 8 * t], value: [0, -8 * t] },
        ]
    },
    {
        id: "story2.jpg",
        type: "Bitmap",
        image: "story2.jpg",
        parent: "p2",
        delay: "p2",
        propes: {
            y: 0 + t
        },
        animations: []
    },

    {
        id: "story2-1-texture",
        type: "TextureAtlas",
        image: "story2-1-texture.jpg",
        parent: "null",
        propes: {
            frames: [[2, 1338, 750, 1334],
            [2, 2, 750, 1334]
            ],
            sprites: {
                sprite: [0, 1]
            }
        },
        animations: {}
    },
    {
        id: "story2-1-sprite",
        type: "Sprite",
        frames: "story2-1-texture.sprite",
        parent: "p2",
        delay: "p2",
        propes: { interval: 200, timeBased: true, y: t + t },
        animations: []
    },

    {
        id: "story2-2.jpg",
        type: "Bitmap",
        image: "story2-2.jpg",
        parent: "p2",
        delay: "p2",
        propes: {
            y: 2 * t + t
        },
        animations: []
    }, {
        id: "story2-3.jpg",
        type: "Bitmap",
        image: "story2-3.jpg",
        parent: "p2",
        delay: "p2",
        propes: {
            y: 3 * t + t
        },
        animations: []
    },
    {
        id: "story2-4.jpg",
        type: "Bitmap",
        image: "story2-4.jpg",
        parent: "p2",
        delay: "p2",
        propes: {
            y: 4 * t + t,
        },
        animations: [
        ]
    },
    {
        id: "story2-5-1-2",
        type: "TextureAtlas",
        image: "story2-5-m-texture.jpg",
        parent: "null",
        propes: {
            frames: [[754, 2, 750, 1334], [2, 2, 750, 1334]],
            sprites: {
                sprite: [0, 1]
            }
        },
        animations: {}
    },
    {
        id: "story2-5-1-2-sprite",
        type: "Sprite",
        frames: "story2-5-1-2.sprite",
        parent: "p2",
        delay: "p2",
        propes: { interval: 500, timeBased: true, y: 5 * t + t },
        animations: []
    }
];

export default views;
