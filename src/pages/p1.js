const e = 750;
const t = 1334;
const h = { p1: 0, p2: t - 1206, p3: t - 1334, p4: t - 1334 };


const views = [
    {
        id: "p1",
        type: "Container",
        propes: {},
        delay: "p1",
        animations: [
            { prope: "y", time: [0, 0, 7 * t, 7 * t], value: [0, -7 * t] },
        ]
    },

    {
        id: "story1.jpg",
        type: "Bitmap",
        image: "story1.jpg",
        parent: "p1",
        delay: "p1",
        propes: {
            y: 0 + t
        },
        animations: []
    },

    {
        id: "story1-1-texture",
        type: "TextureAtlas",
        image: "story1-1-texture.jpg",
        parent: "null",
        propes: {
            frames: [[2, 2674, 750, 1334],
            [2, 1338, 750, 1334],
            [2, 2, 750, 1334]],
            sprites: {
                sprite: [0, 1, 2]
            }
        },
        animations: {}
    },
    {
        id: "story1-1-sprite",
        type: "Sprite",
        frames: "story1-1-texture.sprite",
        parent: "p1",
        delay: "p1",
        propes: {
            interval: 200, timeBased: true, y: t + t
        },
        animations: {}
    },
    {
        id: "story1-2-texture",
        type: "TextureAtlas",
        image: "story1-2-texture.jpg",
        parent: "null",
        propes: {
            frames: [[2, 1338, 750, 1334],
            [2, 2, 750, 1334],
            ],
            sprites: {
                sprite: [0, 1]
            }
        },
        animations: {}
    },
    {
        id: "story1-2-sprite",
        type: "Sprite",
        frames: "story1-2-texture.sprite",
        parent: "p1",
        delay: "p1",
        propes: {
            interval: 200, timeBased: true,
            y: 2 * t + t,
        },
        animations: [

        ]
    },

    {
        id: "story1-3.jpg",
        type: "Bitmap",
        image: "story1-3.jpg",
        parent: "p1",
        delay: "p1",
        propes: {
            y: 3 * t + t
        },
        animations: []
    },

    {
        id: "story1-4-texture",
        type: "TextureAtlas",
        image: "story1-4-texture.jpg",
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
        id: "story1-4-sprite",
        type: "Sprite",
        frames: "story1-4-texture.sprite",
        parent: "p1",
        delay: "p1",
        propes: { interval: 200, timeBased: true, y: 4 * t + t },
        animations: []
    },

    {
        id: "story1-5-texture",
        type: "TextureAtlas",
        image: "story1-5-texture.jpg",
        parent: "null",
        propes: {
            frames: [[2, 2674, 750, 1334],
            [2, 1338, 750, 1334],
            [2, 2, 750, 1334]],
            sprites: {
                sprite: [0, 1, 2]
            }
        },
        animations: {}
    },
    {
        id: "story1-5-sprite",
        type: "Sprite",
        frames: "story1-5-texture.sprite",
        parent: "p1",
        delay: "p1",
        propes: { interval: 200, timeBased: true, y: 5 * t + t },
        animations: []
    }
];

export default views;
