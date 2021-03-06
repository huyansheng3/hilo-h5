const e = 750;
const t = 1334;
const h = { p1: 0, p2: t - 1206, p3: t - 1334, p4: t - 1334 };


const homepageIosTexture = {
    id: "homepage-texture",
    type: "TextureAtlas",
    image: "homepage-texture.jpg",
    parent: "null",
    propes: {
        frames: [[6018, 2, 750, 1334],
        [6018, 2, 750, 1334],
        [6770, 2, 750, 1334],
        [7522, 2, 750, 1334],
        [8274, 2, 750, 1334],
        [9026, 2, 750, 1334],
        [9778, 2, 750, 1334],
        [10530, 2, 750, 1334],
        [11282, 2, 750, 1334],
        [12034, 2, 750, 1334],
        [12786, 2, 750, 1334],
        [2, 2, 750, 1334],
        [754, 2, 750, 1334],
        [1506, 2, 750, 1334],
        [2258, 2, 750, 1334],
        [3010, 2, 750, 1334],
        [3762, 2, 750, 1334],
        [4514, 2, 750, 1334],
        [5266, 2, 750, 1334],
        [13538, 2, 750, 1334]],
        sprites: {
            sprite: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
        }
    },
    animations: {}
}

const homepageAndroidTexture = {
    id: "homepage-android-texture",
    type: "TextureAtlas",
    image: "homepage-android-texture.jpg",
    parent: "null",
    propes: {
        frames: [[2, 12026, 750, 1334],
        [2, 10690, 750, 1334],
        [2, 9354, 750, 1334],
        [2, 8018, 750, 1334],
        [2, 6682, 750, 1334],
        [2, 5346, 750, 1334],
        [2, 5346, 750, 1334],
        [2, 4010, 750, 1334],
        [2, 2674, 750, 1334],
        [2, 1338, 750, 1334],
        [2, 2, 750, 1334]],
        sprites: {
            sprite: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    },
    animations: {}
}

const homepageTexture = $.os.android ? homepageAndroidTexture : homepageIosTexture

const views = [

    {
        id: "p0",
        type: "Container",
        propes: {},
        delay: "p0",
        animations: [
            { prope: "y", time: [0, 0, 2 * t, 2 * t], value: [0, -2 * t] },
        ]
    },
    homepageTexture,
    {
        id: "homepage-sprite",
        type: "Sprite",
        frames: $.os.android ? "homepage-android-texture.sprite" : "homepage-texture.sprite",
        parent: "p0",
        delay: "p0",
        propes: {
            x: 0,
            interval: $.os.android ? 100 : 60,
            timeBased: true,
        },
        animations: [
        ]
    },
];

export default views;
