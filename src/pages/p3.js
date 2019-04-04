const e = 750;
const t = 1334;
const h = { p2: 0, p2: t - 1206, p3: t - 1334, p4: t - 1334 };


const views = [
    {
        id: "p3",
        type: "Container",
        propes: {},
        delay: "p3",
        animations: [
            { prope: "y", time: [0, 0, 10 * t, 10 * t], value: [0, -10 * t] },
        ]
    },
    {
        id: "story3.jpg",
        type: "Bitmap",
        image: "story3.jpg",
        parent: "p3",
        delay: "p3",
        propes: {
            y: 0 + t
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
            y: t + t
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
            y: 2 * t + t
        },
        animations: []
    }, {
        id: "story3-3.jpg",
        type: "Bitmap",
        image: "story3-3.jpg",
        parent: "p3",
        delay: "p3",
        propes: {
            y: 3 * t + t
        },
        animations: []
    },

    {
        id: "story3-4-texture",
        type: "TextureAtlas",
        image: "story3-4-texture.jpg",
        parent: "null",
        propes: {
            frames: [[2, 4010, 750, 1334],
            [2, 2674, 750, 1334],
            [2, 1338, 750, 1334],
            [2, 2, 750, 1334]],
            sprites: {
                sprite: [0, 1, 2, 3]
            }
        },
        animations: {}
    },
    {
        id: "story3-4-sprite",
        type: "Sprite",
        frames: "story3-4-texture.sprite",
        parent: "p3",
        delay: "p3",
        propes: { interval: 200, timeBased: true, y: 4 * t + t },
        animations: []
    },


    {
        id: "story3-5-texture",
        type: "TextureAtlas",
        image: "story3-5-texture.jpg",
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
        id: "story3-5-sprite",
        type: "Sprite",
        frames: "story3-5-texture.sprite",
        parent: "p3",
        delay: "p3",
        propes: { interval: 200, timeBased: true, y: 5 * t + t },
        animations: []
    },


    {
        id: "story3-6-texture",
        type: "TextureAtlas",
        image: "story3-6-texture.jpg",
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
        id: "story3-6-sprite",
        type: "Sprite",
        frames: "story3-6-texture.sprite",
        parent: "p3",
        delay: "p3",
        propes: { interval: 200, timeBased: true, y: 6 * t + t },
        animations: []
    },

    {
        id: "story3-7-texture",
        type: "TextureAtlas",
        image: "story3-7-texture.jpg",
        parent: "null",
        propes: {
            frames: [[2, 5346, 750, 1334],
            [2, 4010, 750, 1334],
            [2, 2674, 750, 1334],
            [2, 1338, 750, 1334],
            [2, 2, 750, 1334]],
            sprites: {
                sprite: [0, 1, 2, 3, 4]
            }
        },
        animations: {}
    },
    {
        id: "story3-7-sprite",
        type: "Sprite",
        frames: "story3-7-texture.sprite",
        parent: "p3",
        delay: "p3",
        propes: { interval: 800, timeBased: true, y: 7 * t + t },
        animations: []
    },
    {
        id: "story3-8.jpg",
        type: "Bitmap",
        image: "story3-8.jpg",
        parent: "p3",
        delay: "p3",
        propes: {
            y: 9 * t
        },
        animations: []
    },
];

export default views;
