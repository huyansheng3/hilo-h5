const e = 750;
const t = window.innerHeight > 1334 ? 1334 : window.innerHeight;
const h = { p1: 0, p2: t - 1206, p3: t - 1334, p4: t - 1334 };

const views = [
    {
        id: "p0",
        type: "Container",
        propes: {},
        delay: "p0",
        animations: [{ prope: "alpha", time: [0, 3800, 4400, 6e3], value: [1, 0] }]
    },
    {
        id: "封面.jpg",
        type: "Bitmap",
        image: "封面.jpg",
        parent: "p0",
        delay: "p0",
        propes: {},
        animations: []
    },

];

export default views;
