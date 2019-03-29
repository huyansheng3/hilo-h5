const e = 750;
const t = window.innerHeight > 1334 ? 1334 : window.innerHeight;
const h = { p1: 0, p2: t - 1206, p3: t - 1334, p4: t - 1334 };


const views = [
    {
        id: "p1",
        type: "Container",
        propes: {
            width: e,
            height: t,
            x: 350,
            y: 610,
            pivotX: 350,
            pivotY: 610
        },
        delay: "p1",
        animations: [
            {
                prope: "scaleX",
                time: [0, 0, 900, 2400, 3e3],
                value: [1, 1.1, 40]
            },
            {
                prope: "scaleY",
                time: [0, 0, 900, 2400, 3e3],
                value: [1, 1.1, 40]
            },
            { prope: "alpha", time: [0, 1800, 2400, 3e3], value: [1, 0] }
        ]
    },
    {
        id: "p1_face",
        type: "Bitmap",
        image: "p1_face",
        parent: "p1",
        propes: {},
        animations: []
    },
    {
        id: "p1_eye1",
        type: "Bitmap",
        image: "p1_eye1",
        parent: "p1",
        propes: { x: 264, y: 513 },
        delay: "p1",
        animations: [
            {
                prope: "alpha",
                time: [0, 300, 310, 600, 610, 2400],
                value: [1, 0, 0, 1]
            }
        ]
    },
    {
        id: "p1_eye2",
        type: "Bitmap",
        image: "p1_eye2",
        parent: "p1",
        propes: { x: 264, y: 513, alpha: 0 },
        delay: "p1",
        animations: [
            {
                prope: "alpha",
                time: [0, 300, 310, 600, 610, 2400],
                value: [0, 1, 1, 0]
            }
        ]
    },
    {
        id: "p1_tear1",
        type: "Bitmap",
        image: "p1_sprite",
        parent: "p1",
        propes: {
            rect: [0, 0, 22, 70],
            pivotX: 11,
            pivotY: 35,
            x: 288,
            y: 714,
            scaleX: 0,
            scaleY: 0,
            rotation: 8
        },
        delay: "p1",
        animations: [
            { prope: "x", time: [0, 480, 780, 2e3], value: [288, 308] },
            { prope: "y", time: [0, 480, 780, 2e3], value: [714, 784] },
            { prope: "scaleX", time: [0, 480, 780, 2e3], value: [0, 1] },
            { prope: "scaleY", time: [0, 480, 780, 2e3], value: [0, 1] },
            { prope: "rotation", time: [0, 480, 780, 2e3], value: [8, 0] }
        ]
    },
    {
        id: "p1_tear2",
        type: "Bitmap",
        image: "p1_sprite",
        parent: "p1",
        propes: {
            rect: [30, 0, 57, 75],
            pivotX: 37,
            pivotY: 23,
            x: 324,
            y: 642,
            scaleY: 0,
            rotation: 24
        },
        delay: "p1",
        animations: [
            { prope: "scaleY", time: [0, 480, 780, 2e3], value: [0, 1] },
            { prope: "rotation", time: [0, 480, 780, 2e3], value: [24, 0] }
        ]
    },
    {
        id: "p1_tear3",
        type: "Bitmap",
        image: "p1_sprite",
        parent: "p1",
        propes: {
            rect: [90, 0, 32, 80],
            pivotX: 10,
            pivotY: 10,
            x: 664,
            y: 576,
            scaleY: 0,
            rotation: -34
        },
        delay: "p1",
        animations: [
            { prope: "scaleY", time: [0, 480, 780, 2e3], value: [0, 1] },
            { prope: "rotation", time: [0, 480, 780, 2e3], value: [-34, 0] }
        ]
    },
    {
        id: "p1_tears",
        type: "TextureAtlas",
        image: "p1_tears",
        parent: "null",
        propes: {
            frames: [
                [0, 0, 100, 30],
                [100, 0, 100, 30],
                [200, 0, 100, 30],
                [300, 0, 100, 30],
                [0, 30, 100, 30],
                [100, 30, 100, 30],
                [200, 30, 100, 30],
                [300, 30, 100, 30],
                [0, 60, 100, 40],
                [100, 60, 100, 40],
                [200, 60, 100, 40],
                [300, 60, 100, 40],
                [0, 100, 100, 40],
                [100, 100, 100, 40],
                [200, 100, 100, 40],
                [300, 100, 100, 40]
            ],
            sprites: {
                p1_tear5: [0, 1, 2, 3, 4, 5, 6, 7],
                p1_tear4: [8, 9, 10, 11, 12, 13, 14, 15]
            }
        },
        animations: {}
    },
    {
        id: "p1_tear5",
        type: "Sprite",
        frames: "p1_tears.p1_tear5",
        parent: "p1",
        propes: { interval: 10, x: 295, y: 614 },
        delay: "p1",
        animations: [
            {
                prope: "alpha",
                time: [0, 300, 310, 600, 610, 2400],
                value: [1, 0, 0, 1]
            }
        ]
    },
    {
        id: "p1_tear4",
        type: "Sprite",
        frames: "p1_tears.p1_tear4",
        parent: "p1",
        propes: { interval: 10, x: 574, y: 564 },
        delay: "p1",
        animations: [
            {
                prope: "alpha",
                time: [0, 300, 310, 600, 610, 2400],
                value: [1, 0, 0, 1]
            }
        ]
    },
    {
        id: "p1_text",
        type: "Bitmap",
        image: "p1_text",
        parent: "p1",
        propes: { x: 72, y: t - 190 },
        delay: "p1",
        animations: []
    },
];

export default views;
