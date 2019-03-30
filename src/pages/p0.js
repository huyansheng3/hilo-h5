const e = 750;
const t = window.innerHeight > 1334 ? 1334 : window.innerHeight;
const h = { p1: 0, p2: t - 1206, p3: t - 1334, p4: t - 1334 };

const views = [

    {
        id: "p0",
        type: "Container",
        propes: {},
        delay: "p0",
        animations: [{ prope: "y", time: [0, 0, t, t], value: [0, -t] }]
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
];

export default views;
