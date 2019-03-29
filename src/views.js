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
    id: "p0_bg",
    type: "Graphics",
    parent: "p0",
    delay: "p0",
    propes: {},
    draw: function () {
      this.lineStyle(1, "rgba(0,0,0,1)")
        .beginFill("rgba(0,0,0,1)")
        .drawRect(0, 0, 750, 1334)
        .endFill();
    },
    animations: []
  },
  {
    id: "p0_text",
    type: "Bitmap",
    image: "p0",
    parent: "p0",
    delay: "p0",
    propes: { rect: [380, 410, 32, 115], x: 366, y: t / 2 - 110 },
    animations: [{ prope: "alpha", time: [0, 1380, 1500, 6e3], value: [1, 0] }]
  },
  {
    id: "p0_text1",
    type: "Bitmap",
    image: "p9_text2",
    parent: "p0",
    delay: "p0",
    propes: {
      rect: [590, 440, 29, 358],
      x: 366,
      y: t / 2 - 110 - 120,
      alpha: 0
    },
    animations: [
      {
        prope: "alpha",
        time: [0, 1420, 1540, 2100, 2220, 6e3],
        value: [0, 1, 1, 0]
      }
    ]
  },
  {
    id: "p0_text2",
    type: "Bitmap",
    image: "p9_text2",
    parent: "p0",
    delay: "p0",
    propes: {
      rect: [620, 440, 28, 263],
      x: 366,
      y: t / 2 - 110 - 74,
      alpha: 0
    },
    animations: [
      {
        prope: "alpha",
        time: [0, 2140, 2260, 2820, 2940, 6e3],
        value: [0, 1, 1, 0]
      }
    ]
  },
  {
    id: "p0_text3",
    type: "Bitmap",
    image: "p9_text2",
    parent: "p0",
    delay: "p0",
    propes: {
      rect: [650, 440, 29, 359],
      x: 366,
      y: t / 2 - 110 - 120,
      alpha: 0
    },
    animations: [
      {
        prope: "alpha",
        time: [0, 2860, 2980, 3540, 3660, 6e3],
        value: [0, 1, 1, 0]
      }
    ]
  },
  {
    id: "p0_tips",
    type: "Container",
    parent: "p0",
    delay: "p0",
    propes: { x: 335, y: t - 290 },
    animations: [
      {
        prope: "y",
        time: [0, 0, 1200, 6e3],
        value: [t - 290, t - 290 - 100]
      },
      { prope: "alpha", time: [0, 600, 1200, 2e3], value: [1, 0] }
    ]
  },
  {
    id: "p0_tip1",
    type: "Bitmap",
    image: "p0",
    parent: "p0_tips",
    delay: "p0",
    propes: { rect: [420, 410, 22, 162], x: 0, y: 0 },
    animations: []
  },
  {
    id: "p0_tip2",
    type: "Bitmap",
    image: "p0",
    parent: "p0_tips",
    delay: "p0",
    propes: { rect: [444, 410, 22, 162], x: 74, y: 0 },
    animations: []
  },
  {
    id: "p0_tipline",
    type: "Bitmap",
    image: "p0",
    parent: "p0_tips",
    delay: "p0",
    propes: { rect: [418, 510, 1, 217], x: 47, y: -38 },
    animations: []
  },
  {
    id: "p0_tipround",
    type: "Bitmap",
    image: "p0",
    parent: "p0_tips",
    delay: "p0",
    propes: { rect: [420, 580, 14, 14], x: 40, y: 170 },
    animations: []
  },
  {
    id: "p0_cir4",
    type: "Bitmap",
    image: "p0",
    parent: "p0",
    delay: "p0",
    propes: {
      rect: [380, 0, 407, 403],
      x: 374,
      y: t / 2 - 40,
      pivotX: 204,
      pivotY: 200,
      scaleX: 0,
      scaleY: 0
    },
    animations: [
      { prope: "scaleX", time: [0, 600, 3e3, 6e3], value: [0, 8] },
      { prope: "scaleY", time: [0, 600, 3e3, 6e3], value: [0, 8] },
      { prope: "rotation", time: [0, 600, 3e3, 6e3], value: [0, 1080] },
      { prope: "scaleX", time: [6001, 1800, 4200, 6e3], value: [0, 8] },
      { prope: "scaleY", time: [6001, 1800, 4200, 6e3], value: [0, 8] },
      {
        prope: "rotation",
        time: [6001, 1800, 4200, 6e3],
        value: [0, 1080]
      }
    ]
  },
  {
    id: "p0_cir3",
    type: "Bitmap",
    image: "p0",
    parent: "p0",
    delay: "p0",
    propes: {
      rect: [0, 380, 370, 348],
      x: 375,
      y: t / 2 - 40,
      pivotX: 185,
      pivotY: 174,
      scaleX: 0,
      scaleY: 0
    },
    animations: [
      { prope: "scaleX", time: [0, 900, 3300, 6e3], value: [0, 8] },
      { prope: "scaleY", time: [0, 900, 3300, 6e3], value: [0, 8] },
      {
        prope: "rotation",
        time: [0, 900, 3300, 6e3],
        value: [0, 1080]
      },
      {
        prope: "scaleX",
        time: [6001, 2100, 4500, 6e3],
        value: [0, 10]
      },
      {
        prope: "scaleY",
        time: [6001, 2100, 4500, 6e3],
        value: [0, 10]
      },
      {
        prope: "rotation",
        time: [6001, 2100, 4500, 6e3],
        value: [0, 1080]
      }
    ]
  },
  {
    id: "p0_cir2",
    type: "Bitmap",
    image: "p0",
    parent: "p0",
    delay: "p0",
    propes: {
      rect: [470, 410, 315, 315],
      x: 377,
      y: t / 2 - 40,
      pivotX: 157,
      pivotY: 157,
      scaleX: 0,
      scaleY: 0
    },
    animations: [
      { prope: "scaleX", time: [0, 1200, 3600, 6e3], value: [0, 9] },
      { prope: "scaleY", time: [0, 1200, 3600, 6e3], value: [0, 9] },
      {
        prope: "rotation",
        time: [0, 1200, 3600, 6e3],
        value: [0, 1080]
      }
    ]
  },
  {
    id: "p0_cir1",
    type: "Bitmap",
    image: "p0",
    parent: "p0",
    delay: "p0",
    propes: {
      rect: [0, 0, 379, 379],
      x: 370,
      y: t / 2 - 40,
      pivotX: 190,
      pivotY: 190,
      scaleX: 0,
      scaleY: 0
    },
    animations: [
      {
        prope: "scaleX",
        time: [0, 1500, 2400, 3300, 6e3],
        value: [0, 3, 8]
      },
      {
        prope: "scaleY",
        time: [0, 1500, 2400, 3300, 6e3],
        value: [0, 3, 8]
      },
      {
        prope: "rotation",
        time: [0, 1500, 4500, 6e3],
        value: [0, 1080]
      },
      { prope: "alpha", time: [0, 2820, 2880, 6e3], value: [1, 0] }
    ]
  },

  // {
  //   id: "p1",
  //   type: "Container",
  //   propes: {
  //     width: e,
  //     height: t,
  //     x: 350,
  //     y: 610,
  //     pivotX: 350,
  //     pivotY: 610
  //   },
  //   delay: "p1",
  //   animations: [
  //     {
  //       prope: "scaleX",
  //       time: [0, 0, 900, 2400, 3e3],
  //       value: [1, 1.1, 40]
  //     },
  //     {
  //       prope: "scaleY",
  //       time: [0, 0, 900, 2400, 3e3],
  //       value: [1, 1.1, 40]
  //     },
  //     { prope: "alpha", time: [0, 1800, 2400, 3e3], value: [1, 0] }
  //   ]
  // },
  // {
  //   id: "p1_face",
  //   type: "Bitmap",
  //   image: "p1_face",
  //   parent: "p1",
  //   propes: {},
  //   animations: []
  // },
  // {
  //   id: "p1_eye1",
  //   type: "Bitmap",
  //   image: "p1_eye1",
  //   parent: "p1",
  //   propes: { x: 264, y: 513 },
  //   delay: "p1",
  //   animations: [
  //     {
  //       prope: "alpha",
  //       time: [0, 300, 310, 600, 610, 2400],
  //       value: [1, 0, 0, 1]
  //     }
  //   ]
  // },
  // {
  //   id: "p1_eye2",
  //   type: "Bitmap",
  //   image: "p1_eye2",
  //   parent: "p1",
  //   propes: { x: 264, y: 513, alpha: 0 },
  //   delay: "p1",
  //   animations: [
  //     {
  //       prope: "alpha",
  //       time: [0, 300, 310, 600, 610, 2400],
  //       value: [0, 1, 1, 0]
  //     }
  //   ]
  // },
  // {
  //   id: "p1_tear1",
  //   type: "Bitmap",
  //   image: "p1_sprite",
  //   parent: "p1",
  //   propes: {
  //     rect: [0, 0, 22, 70],
  //     pivotX: 11,
  //     pivotY: 35,
  //     x: 288,
  //     y: 714,
  //     scaleX: 0,
  //     scaleY: 0,
  //     rotation: 8
  //   },
  //   delay: "p1",
  //   animations: [
  //     { prope: "x", time: [0, 480, 780, 2e3], value: [288, 308] },
  //     { prope: "y", time: [0, 480, 780, 2e3], value: [714, 784] },
  //     { prope: "scaleX", time: [0, 480, 780, 2e3], value: [0, 1] },
  //     { prope: "scaleY", time: [0, 480, 780, 2e3], value: [0, 1] },
  //     { prope: "rotation", time: [0, 480, 780, 2e3], value: [8, 0] }
  //   ]
  // },
  // {
  //   id: "p1_tear2",
  //   type: "Bitmap",
  //   image: "p1_sprite",
  //   parent: "p1",
  //   propes: {
  //     rect: [30, 0, 57, 75],
  //     pivotX: 37,
  //     pivotY: 23,
  //     x: 324,
  //     y: 642,
  //     scaleY: 0,
  //     rotation: 24
  //   },
  //   delay: "p1",
  //   animations: [
  //     { prope: "scaleY", time: [0, 480, 780, 2e3], value: [0, 1] },
  //     { prope: "rotation", time: [0, 480, 780, 2e3], value: [24, 0] }
  //   ]
  // },
  // {
  //   id: "p1_tear3",
  //   type: "Bitmap",
  //   image: "p1_sprite",
  //   parent: "p1",
  //   propes: {
  //     rect: [90, 0, 32, 80],
  //     pivotX: 10,
  //     pivotY: 10,
  //     x: 664,
  //     y: 576,
  //     scaleY: 0,
  //     rotation: -34
  //   },
  //   delay: "p1",
  //   animations: [
  //     { prope: "scaleY", time: [0, 480, 780, 2e3], value: [0, 1] },
  //     { prope: "rotation", time: [0, 480, 780, 2e3], value: [-34, 0] }
  //   ]
  // },
  // {
  //   id: "p1_tears",
  //   type: "TextureAtlas",
  //   image: "p1_tears",
  //   parent: "null",
  //   propes: {
  //     frames: [
  //       [0, 0, 100, 30],
  //       [100, 0, 100, 30],
  //       [200, 0, 100, 30],
  //       [300, 0, 100, 30],
  //       [0, 30, 100, 30],
  //       [100, 30, 100, 30],
  //       [200, 30, 100, 30],
  //       [300, 30, 100, 30],
  //       [0, 60, 100, 40],
  //       [100, 60, 100, 40],
  //       [200, 60, 100, 40],
  //       [300, 60, 100, 40],
  //       [0, 100, 100, 40],
  //       [100, 100, 100, 40],
  //       [200, 100, 100, 40],
  //       [300, 100, 100, 40]
  //     ],
  //     sprites: {
  //       p1_tear5: [0, 1, 2, 3, 4, 5, 6, 7],
  //       p1_tear4: [8, 9, 10, 11, 12, 13, 14, 15]
  //     }
  //   },
  //   animations: {}
  // },
  // {
  //   id: "p1_tear5",
  //   type: "Sprite",
  //   frames: "p1_tears.p1_tear5",
  //   parent: "p1",
  //   propes: { interval: 10, x: 295, y: 614 },
  //   delay: "p1",
  //   animations: [
  //     {
  //       prope: "alpha",
  //       time: [0, 300, 310, 600, 610, 2400],
  //       value: [1, 0, 0, 1]
  //     }
  //   ]
  // },
  // {
  //   id: "p1_tear4",
  //   type: "Sprite",
  //   frames: "p1_tears.p1_tear4",
  //   parent: "p1",
  //   propes: { interval: 10, x: 574, y: 564 },
  //   delay: "p1",
  //   animations: [
  //     {
  //       prope: "alpha",
  //       time: [0, 300, 310, 600, 610, 2400],
  //       value: [1, 0, 0, 1]
  //     }
  //   ]
  // },
  // {
  //   id: "p1_text",
  //   type: "Bitmap",
  //   image: "p1_text",
  //   parent: "p1",
  //   propes: { x: 72, y: t - 190 },
  //   delay: "p1",
  //   animations: []
  // },

];

export default views;
