const temp = [
  {
    id: "p2",
    type: "Container",
    propes: {},
    delay: "p2",
    animations: [{ prope: "alpha", time: [0, 5400, 5500, 6e3], value: [1, 0] }]
  },
  {
    id: "p2_bg1",
    type: "Bitmap",
    image: "p2_bg1",
    parent: "p2",
    propes: {},
    delay: "p2",
    animations: [
      {
        prope: "y",
        time: [2e3, 2200, 3500, 6400],
        value: [0, -662 + h.p2]
      }
    ]
  },
  {
    id: "p2_bg2",
    type: "Bitmap",
    image: "p2_bg2",
    parent: "p2",
    propes: {},
    delay: "p2",
    animations: [
      {
        prope: "y",
        time: [2e3, 2200, 3500, 6400],
        value: [0, -750 + h.p2]
      }
    ]
  },
  {
    id: "p2_m1",
    type: "Bitmap",
    image: "p2_m1",
    parent: "p2",
    propes: { x: 97, y: 84 },
    delay: "p2",
    animations: [
      {
        prope: "y",
        time: [2e3, 2200, 3e3, 4400],
        value: [84, -578 + h.p2]
      },
      {
        prope: "x",
        time: [2e3, 2790, 2820, 2850, 2880, 4400],
        value: [97, 111, 83, 97]
      }
    ]
  },
  {
    id: "p2_m2",
    type: "Bitmap",
    image: "p2_m2",
    parent: "p2",
    propes: { x: 0, y: 877 },
    delay: "p2",
    animations: [
      {
        prope: "y",
        time: [2e3, 2200, 3e3, 4400],
        value: [877, 201 + h.p2]
      },
      {
        prope: "x",
        time: [2e3, 2790, 2820, 2850, 2880, 4400],
        value: [0, -14, 14, 0]
      }
    ]
  },
  {
    id: "p2_m3",
    type: "Bitmap",
    image: "p2_m3",
    parent: "p2",
    propes: { x: 380, y: 936 },
    delay: "p2",
    animations: [
      {
        prope: "y",
        time: [2e3, 2200, 3e3, 4400],
        value: [936, 242 + h.p2]
      },
      {
        prope: "x",
        time: [2e3, 2790, 2820, 2850, 2880, 4400],
        value: [380, 394, 366, 380]
      }
    ]
  },
  {
    id: "p2_m4",
    type: "Bitmap",
    image: "p2_m4",
    parent: "p2",
    propes: { x: 265, y: 1440 },
    delay: "p2",
    animations: [
      {
        prope: "y",
        time: [2e3, 2200, 3e3, 3300, 3500, 3700, 5100],
        value: [1440, 776 + h.p2, 776 + h.p2, 816 + h.p2, 776 + h.p2]
      },
      {
        prope: "x",
        time: [2e3, 2790, 2820, 2850, 2880, 2900],
        value: [265, 279, 251, 265]
      },
      { prope: "x", time: [2910, 3e3, 3200, 4800], value: [265, 125] }
    ]
  },
  {
    id: "p2_monster",
    type: "Container",
    parent: "p2",
    propes: {},
    delay: "p2",
    animations: [
      {
        prope: "y",
        time: [2e3, 2200, 3e3, 4400],
        value: [0, -676 + h.p2]
      },
      { prope: "x", time: [2e3, 2660, 2800, 4400], value: [0, 34] }
    ]
  },
  {
    id: "p2_weapon",
    type: "Bitmap",
    image: "p2_weapon",
    parent: "p2_monster",
    propes: { x: 150, y: 900, rotation: 0, pivotX: 70, pivotY: 150 },
    delay: "p2",
    animations: [
      {
        prope: "x",
        time: [0, 2660, 2800, 3e3, 4400],
        value: [150, 163, 150]
      },
      {
        prope: "y",
        time: [0, 2660, 2800, 3e3, 4400],
        value: [900, 917, 900]
      },
      {
        prope: "rotation",
        time: [0, 2660, 2740, 2800, 3e3, 4400],
        value: [0, -12, 1, 0]
      }
    ]
  },
  {
    id: "p2_monster_body",
    type: "Bitmap",
    image: "p2_monster",
    parent: "p2_monster",
    propes: { x: -130, y: 857 },
    delay: "p2",
    animations: []
  },
  {
    id: "p2_weapon_blood",
    type: "Bitmap",
    image: "p1_sprite",
    parent: "p2_monster",
    propes: {
      x: 532,
      y: 1210,
      rect: [290, 80, 201, 211],
      pivotX: 200,
      pivotY: 210,
      scaleX: 0,
      scaleY: 0
    },
    delay: "p2",
    animations: [
      { prope: "scaleX", time: [2e3, 2800, 2900, 4400], value: [0, 1] },
      { prope: "scaleY", time: [2e3, 2800, 2900, 4400], value: [0, 1] }
    ]
  },
  {
    id: "p2_arms",
    type: "Container",
    parent: "p2_monster",
    propes: { x: 155, y: 925, pivotX: 45, pivotY: 24 },
    delay: "p2",
    animations: [
      {
        prope: "rotation",
        time: [2e3, 2660, 2740, 2800, 3880],
        value: [0, -13, 0]
      }
    ]
  },
  {
    id: "p2_arm1",
    type: "Bitmap",
    image: "p1_sprite",
    parent: "p2_arms",
    propes: { rect: [0, 80, 115, 191] },
    delay: "p2",
    animations: []
  },
  {
    id: "p2_arm2",
    type: "Bitmap",
    image: "p1_sprite",
    parent: "p2_arms",
    propes: {
      x: 92,
      y: 177,
      pivotX: 10,
      pivotY: 120,
      rect: [130, 80, 157, 137]
    },
    delay: "p2",
    animations: [
      {
        prope: "rotation",
        time: [2e3, 2800, 2900, 3e3, 4400],
        value: [0, 8, 0]
      }
    ]
  },
  {
    id: "p2_girl1",
    type: "Bitmap",
    image: "p1_sprite",
    parent: "p2",
    propes: { x: 477, y: 1170, rect: [0, 280, 173, 133] },
    delay: "p2",
    animations: [
      {
        prope: "y",
        time: [2e3, 2200, 3e3, 4400],
        value: [1170, 476 + h.p2]
      },
      { prope: "alpha", time: [2e3, 2800, 2810, 4400], value: [1, 0] }
    ]
  },
  {
    id: "p2_girl2_mask",
    type: "Graphics",
    image: "",
    parent: "p2",
    propes: { x: 380, y: 936 },
    delay: "p2",
    draw: function () {
      this.lineStyle(1, "rgba(0,0,0,0)")
        .beginFill("rgba(0,0,0,0)")
        .drawRect(0, 0, 299, 429)
        .endFill();
    },
    animations: [
      {
        prope: "y",
        time: [2e3, 2200, 3e3, 4400],
        value: [936, 242 + h.p2]
      }
    ]
  },
  {
    id: "p2_girl2",
    type: "Bitmap",
    image: "p2_girl2",
    parent: "p2",
    propes: {
      x: 477,
      y: 1170,
      scaleX: 0.5,
      scaleY: 0.5,
      alpha: 0,
      mask: "p2_girl2_mask"
    },
    delay: "p2",
    animations: [
      {
        prope: "y",
        time: [2e3, 2200, 2800, 3200, 5400],
        value: [1170, 556 + h.p2, 746 + h.p2]
      },
      { prope: "alpha", time: [2e3, 2900, 2910, 4400], value: [0, 1] }
    ]
  },
  {
    id: "p2_girl2_0",
    type: "Bitmap",
    image: "p2_girl3",
    parent: "p2",
    propes: { x: 477, y: 1170, scaleX: 0.5, scaleY: 0.5, alpha: 0 },
    delay: "p2",
    animations: [
      {
        prope: "y",
        time: [2e3, 2200, 3e3, 4400],
        value: [1170, 476 + h.p2]
      },
      {
        prope: "alpha",
        time: [2e3, 2800, 2810, 2900, 2910, 4400],
        value: [0, 1, 1, 0]
      }
    ]
  },
  {
    id: "p2_girl2_2_mask",
    type: "Graphics",
    image: "",
    parent: "p2",
    propes: { x: 265, y: 1440 + h.p2 },
    delay: "p2",
    draw: function () {
      this.lineStyle(1, "rgba(0,0,0,0)")
        .beginFill("rgba(0,0,0,0)")
        .drawRect(0, 0, 614, 429)
        .endFill();
    },
    animations: [
      {
        prope: "y",
        time: [2e3, 2200, 3e3, 4400],
        value: [1440, 800 + h.p2]
      },
      { prope: "x", time: [2e3, 3e3, 3200, 4800], value: [265, 125] }
    ]
  },
  {
    id: "p2_girl2_2",
    type: "Bitmap",
    image: "p2_girl2",
    parent: "p2",
    propes: {
      x: 377,
      y: 486 + h.p2,
      alpha: 1,
      mask: "p2_girl2_2_mask"
    },
    delay: "p2",
    animations: [
      {
        prope: "y",
        time: [2600, 2800, 3200, 5400],
        value: [486 + h.p2, 876 + h.p2]
      },
      { prope: "alpha", time: [2800, 3200, 3210, 4900], value: [1, 0] }
    ]
  },
  {
    id: "p2_girl2_4",
    type: "Bitmap",
    image: "p2_girl2_4",
    parent: "p2",
    propes: { x: 365, y: 995 + h.p2, alpha: 0 },
    delay: "p2",
    animations: [
      { prope: "alpha", time: [3e3, 3200, 3210, 4900], value: [0, 1] },
      {
        prope: "y",
        time: [3210, 3300, 3500, 3700, 5100],
        value: [995 + h.p2, 1035 + h.p2, 995 + h.p2]
      }
    ]
  },
  {
    id: "p2_fire0",
    type: "Bitmap",
    image: "p2_fire0",
    parent: "p2",
    propes: { x: 0, y: t - 1334, alpha: 0 },
    delay: "p2",
    animations: [
      { prope: "alpha", time: [3e3, 3500, 3600, 5400], value: [0, 1] }
    ]
  },

  {
    id: "p3",
    type: "Container",
    propes: { alpha: 0, y: h.p3 },
    delay: "p3",
    animations: [
      {
        prope: "alpha",
        time: [7e3, 10500, 10700, 11800],
        value: [1, 0]
      }
    ]
  },
  {
    id: "p3_wrap",
    type: "Container",
    propes: { x: 375, y: 980, pivotX: 375, pivotY: 980 },
    parent: "p3",
    delay: "p3",
    animations: [
      {
        prope: "scaleX",
        time: [7e3, 7800, 1e4, 11500],
        value: [1, 1.5]
      },
      {
        prope: "scaleY",
        time: [7e3, 7800, 1e4, 11500],
        value: [1, 1.5]
      },
      {
        prope: "alpha",
        time: [7e3, 10490, 10500, 11500],
        value: [1, 0]
      }
    ]
  },
  {
    id: "p3_bg",
    type: "Bitmap",
    image: "p3_bg",
    parent: "p3_wrap",
    propes: {},
    delay: "p3",
    animations: []
  },
  {
    id: "p3_people8",
    type: "Bitmap",
    image: "p3_people",
    parent: "p3_wrap",
    propes: { rect: [250, 0, 116, 220], x: 550, y: 782 },
    delay: "p3",
    animations: [
      { prope: "x", time: [6e3, 7e3, 7800, 11500], value: [590, 520] },
      { prope: "y", time: [6e3, 7e3, 8e3, 11500], value: [782, 742] }
    ]
  },
  {
    id: "p3_people7",
    type: "Bitmap",
    image: "p3_people",
    parent: "p3_wrap",
    propes: { rect: [620, 300, 259, 347], x: 521, y: 890 },
    delay: "p3",
    animations: [
      { prope: "x", time: [6e3, 7e3, 8e3, 11500], value: [521, 491] },
      { prope: "y", time: [6e3, 7e3, 8e3, 11500], value: [890, 810] }
    ]
  },
  {
    id: "p3_people6",
    type: "Bitmap",
    image: "p3_people",
    parent: "p3_wrap",
    propes: { rect: [130, 310, 193, 311], x: 0, y: 873 },
    delay: "p3",
    animations: [
      { prope: "y", time: [6e3, 7e3, 8e3, 11500], value: [863, 793] }
    ]
  },
  {
    id: "p3_people5",
    type: "Bitmap",
    image: "p3_people",
    parent: "p3_wrap",
    propes: { rect: [0, 310, 122, 335], x: 152, y: 926 },
    delay: "p3",
    animations: [
      { prope: "y", time: [6e3, 7e3, 8e3, 11500], value: [926, 846] }
    ]
  },
  {
    id: "p3_people4",
    type: "Container",
    parent: "p3_wrap",
    propes: { y: 0 },
    delay: "p3",
    animations: [{ prope: "y", time: [6e3, 7e3, 8e3, 11500], value: [70, 0] }]
  },
  {
    id: "p3_people4_1",
    type: "Bitmap",
    image: "p3_people",
    parent: "p3_people4",
    propes: { rect: [484, 270, 135, 405], x: 402, y: 845 },
    delay: "p3",
    animations: []
  },
  {
    id: "p3_people4_3",
    type: "Bitmap",
    image: "p3_people",
    parent: "p3_people4",
    propes: { rect: [661, 2, 97, 289], x: 336, y: 940 },
    delay: "p3",
    animations: [
      { prope: "alpha", time: [7e3, 8e3, 8010, 11500], value: [1, 0] }
    ]
  },
  {
    id: "p3_people4_4",
    type: "Bitmap",
    image: "p3_people",
    parent: "p3_people4",
    propes: { rect: [761, 2, 97, 289], x: 336, y: 940, alpha: 0 },
    delay: "p3",
    animations: [
      {
        prope: "alpha",
        time: [7e3, 8e3, 8010, 8050, 8060, 11500],
        value: [0, 1, 1, 0]
      }
    ]
  },
  {
    id: "p3_people4_5",
    type: "Bitmap",
    image: "p3_people",
    parent: "p3_people4",
    propes: { rect: [861, 2, 97, 289], x: 336, y: 940, alpha: 0 },
    delay: "p3",
    animations: [
      {
        prope: "alpha",
        time: [7e3, 8050, 8060, 8100, 8110, 11500],
        value: [0, 1, 1, 0]
      }
    ]
  },
  {
    id: "p3_people4_6",
    type: "Bitmap",
    image: "p3_people",
    parent: "p3_people4",
    propes: { rect: [961, 2, 97, 289], x: 336, y: 940, alpha: 0 },
    delay: "p3",
    animations: [
      {
        prope: "alpha",
        time: [7e3, 8100, 8110, 8150, 8160, 11500],
        value: [0, 1, 1, 0]
      }
    ]
  },
  {
    id: "p3_people4_7",
    type: "Bitmap",
    image: "p3_people",
    parent: "p3_people4",
    propes: { rect: [1061, 2, 97, 289], x: 336, y: 940, alpha: 0 },
    delay: "p3",
    animations: [
      { prope: "alpha", time: [7e3, 8150, 8160, 11500], value: [0, 1] }
    ]
  },
  {
    id: "p3_people4_2",
    type: "Bitmap",
    image: "p3_people",
    parent: "p3_people4",
    propes: { rect: [330, 270, 154, 361], x: 264, y: 876 },
    delay: "p3",
    animations: []
  },
  {
    id: "p3_people3",
    type: "Bitmap",
    image: "p3_people",
    parent: "p3_wrap",
    propes: { rect: [0, 0, 245, 305], x: 10, y: 1060 },
    delay: "p3",
    animations: [
      { prope: "y", time: [6e3, 7e3, 8e3, 11500], value: [1060, 980] }
    ]
  },
  {
    id: "p3_people2",
    type: "Bitmap",
    image: "p3_people",
    parent: "p3_wrap",
    propes: { rect: [880, 300, 148, 194], x: 628, y: 1220 },
    delay: "p3",
    animations: [
      { prope: "x", time: [6e3, 7e3, 8e3, 11e3], value: [628, 602] },
      { prope: "y", time: [6e3, 7e3, 8e3, 11e3], value: [1220, 1140] }
    ]
  },
  {
    id: "p3_people1",
    type: "Bitmap",
    image: "p3_people",
    parent: "p3_wrap",
    propes: { rect: [370, 0, 287, 268], x: 122, y: 1194 },
    delay: "p3",
    animations: [
      { prope: "y", time: [6e3, 7e3, 8e3, 11e3], value: [1194, 1064] }
    ]
  },
  {
    id: "p3_text2",
    type: "Bitmap",
    image: "p1_sprite",
    parent: "p3",
    propes: { rect: [130, 40, 130, 31], x: 310, y: 640, alpha: 0 },
    delay: "p3",
    animations: [
      { prope: "alpha", time: [5e3, 8e3, 8100, 12e3], value: [0, 1] },
      { prope: "y", time: [5e3, 8e3, 8300, 13200], value: [700, 610] }
    ]
  },
  {
    id: "p3_black",
    type: "Graphics",
    image: "",
    parent: "p3_wrap",
    propes: { x: 0, y: 0 },
    delay: "p3",
    draw: function () {
      this.lineStyle(1, "rgba(0,0,0,1)")
        .beginFill("rgba(0,0,0,1)")
        .drawRect(0, 0, 750, 1334)
        .endFill();
    },
    animations: [
      { prope: "alpha", time: [5e3, 6300, 7e3, 9900], value: [1, 0] }
    ]
  },
  {
    id: "p3_black2",
    type: "Graphics",
    image: "",
    parent: "p3",
    propes: { x: 0, y: 0 },
    delay: "p3",
    draw: function () {
      this.lineStyle(1, "rgba(0,0,0,1)")
        .beginFill("rgba(0,0,0,1)")
        .drawRect(0, 0, 750, 1334)
        .endFill();
    },
    animations: [
      { prope: "alpha", time: [5e3, 9500, 10500, 12e3], value: [0, 1] }
    ]
  },
  {
    id: "p3_cloud2",
    type: "Bitmap",
    image: "p3_clouds",
    parent: "p3_wrap",
    propes: { rect: [290, 880, 565, 394], x: 185, y: 0 },
    delay: "p3",
    animations: [
      { prope: "x", time: [6e3, 6300, 7e3, 8300], value: [185, 765] }
    ]
  },
  {
    id: "p3_cloud1",
    type: "Bitmap",
    image: "p3_clouds",
    parent: "p3_wrap",
    propes: { rect: [860, 880, 421, 344], x: 0, y: 0 },
    delay: "p3",
    animations: [{ prope: "y", time: [6e3, 6300, 7e3, 8300], value: [0, -350] }]
  },
  {
    id: "p3_cloud3",
    type: "Bitmap",
    image: "p3_clouds",
    parent: "p3_wrap",
    propes: { rect: [0, 880, 288, 588], x: 0, y: 110 },
    delay: "p3",
    animations: [{ prope: "x", time: [6e3, 6300, 7e3, 8300], value: [0, -300] }]
  },
  {
    id: "p3_cloud5",
    type: "Bitmap",
    image: "p3_clouds",
    parent: "p3_wrap",
    propes: { rect: [0, 0, 750, 871], x: 0, y: 463 },
    delay: "p3",
    animations: [
      { prope: "y", time: [6e3, 6300, 7e3, 8300], value: [463, 1363] }
    ]
  },
  {
    id: "p3_cloud4",
    type: "Bitmap",
    image: "p3_clouds",
    parent: "p3_wrap",
    propes: { rect: [752, 0, 382, 868], x: 370, y: 342 },
    delay: "p3",
    animations: [
      { prope: "x", time: [6e3, 6300, 7e3, 8300], value: [370, 770] }
    ]
  },
  {
    id: "p3_text",
    type: "Bitmap",
    image: "p1_sprite",
    parent: "p3_wrap",
    propes: { rect: [130, 0, 171, 31], x: 290, y: 535 },
    delay: "p3",
    animations: [
      {
        prope: "alpha",
        time: [0, 5300, 5800, 6300, 8e3],
        value: [1, 1, 0]
      }
    ]
  },
  {
    id: "p3_filter",
    type: "Graphics",
    parent: "p3",
    delay: "p3",
    propes: { alpha: 0 },
    draw: function () {
      this.lineStyle(1, "rgba(0,0,0,1)")
        .beginFill("rgba(0,0,0,1)")
        .drawRect(0, 0, 750, 1334)
        .endFill();
    },
    animations: [
      {
        prope: "alpha",
        time: [7e3, 12200, 12500, 13500],
        value: [0, 1]
      }
    ]
  },
  {
    id: "p4",
    type: "Container",
    propes: { alpha: 0, y: h.p4 },
    delay: "p4",
    animations: [
      { prope: "alpha", time: [-300, 0, 10, 500], value: [0, 1] },
      {
        prope: "y",
        time: [-300, 2900, 10400, 11e3],
        value: [h.p4, -4068]
      }
    ]
  },
  {
    id: "p4_bg",
    type: "Bitmap",
    image: "p4_bg",
    parent: "p4",
    propes: {},
    delay: "p4",
    animations: []
  },
  {
    id: "p4_craft",
    type: "Container",
    parent: "p4",
    propes: {},
    animations: []
  },
  {
    id: "p4_people1",
    type: "Bitmap",
    image: "p4_people1",
    parent: "p4",
    propes: { x: 12, y: 419 },
    delay: "p4",
    animations: []
  },
  {
    id: "p4_people2",
    type: "Bitmap",
    image: "p4_people2",
    parent: "p4",
    propes: { x: 129, y: 984 },
    delay: "p4",
    animations: []
  },
  {
    id: "p4_text1",
    type: "Bitmap",
    image: "p1_sprite",
    parent: "p4",
    propes: { rect: [270, 40, 344, 32], alpha: 0, x: 370, y: 815 },
    delay: "p4",
    animations: [
      { prope: "alpha", time: [-300, 400, 500, 1e3], value: [0, 1] },
      { prope: "y", time: [-300, 400, 500, 1e3], value: [815, 833] }
    ]
  },
  {
    id: "p4_text2",
    type: "Bitmap",
    image: "p1_sprite",
    parent: "p4",
    propes: { rect: [310, 0, 269, 29], alpha: 0, x: 445, y: 868 },
    delay: "p4",
    animations: [
      { prope: "alpha", time: [-300, 900, 1e3, 2500], value: [0, 1] },
      { prope: "y", time: [-300, 900, 1e3, 2500], value: [868, 886] }
    ]
  },
  {
    id: "p4_text3",
    type: "Bitmap",
    image: "p1_sprite",
    parent: "p4",
    propes: { rect: [580, 0, 133, 28], alpha: 0, x: 576, y: 920 },
    delay: "p4",
    animations: [
      { prope: "alpha", time: [0, 1400, 1500, 2500], value: [0, 1] },
      { prope: "y", time: [0, 1400, 1500, 2500], value: [920, 938] }
    ]
  },
  {
    id: "p4_mon1",
    type: "Bitmap",
    image: "p4_mon1",
    parent: "p4",
    propes: { alpha: 0 },
    delay: "p4",
    animations: [{ prope: "alpha", time: [0, 1800, 1810, 2500], value: [0, 1] }]
  },
  {
    id: "p4_mon2",
    type: "Bitmap",
    image: "p4_mon2",
    parent: "p4",
    propes: { alpha: 0 },
    delay: "p4",
    animations: [{ prope: "alpha", time: [0, 1900, 1910, 2500], value: [0, 1] }]
  },
  {
    id: "p4_mon3",
    type: "Bitmap",
    image: "p4_mon3",
    parent: "p4",
    propes: { alpha: 0 },
    delay: "p4",
    animations: [{ prope: "alpha", time: [0, 2e3, 2010, 2500], value: [0, 1] }]
  },
  {
    id: "p4_mon4",
    type: "Bitmap",
    image: "p4_mon4",
    parent: "p4",
    propes: { alpha: 0 },
    delay: "p4",
    animations: [{ prope: "alpha", time: [0, 2100, 2110, 2500], value: [0, 1] }]
  },
  {
    id: "p4_mon5",
    type: "Bitmap",
    image: "p4_mon5",
    parent: "p4",
    propes: { alpha: 0 },
    delay: "p4",
    animations: [{ prope: "alpha", time: [0, 2200, 2210, 2500], value: [0, 1] }]
  },
  {
    id: "p4_mon6",
    type: "Bitmap",
    image: "p4_mon6",
    parent: "p4",
    propes: { alpha: 0 },
    delay: "p4",
    animations: [{ prope: "alpha", time: [0, 2300, 2310, 2500], value: [0, 1] }]
  },
  {
    id: "p4_mon7",
    type: "Bitmap",
    image: "p4_mon7",
    parent: "p4",
    propes: { alpha: 0, pivotX: 375, pivotY: 620, x: 375, y: 620 },
    delay: "p4",
    animations: [
      { prope: "alpha", time: [0, 2200, 2210, 2500], value: [0, 1] },
      {
        prope: "scaleX",
        time: [0, 2300, 2340, 2380, 2420, 2460, 2900],
        value: [1, 1.1, 1, 1.1, 1]
      },
      {
        prope: "scaleY",
        time: [0, 2300, 2340, 2380, 2420, 2460, 2900],
        value: [1, 1.1, 1, 1.1, 1]
      }
    ]
  },
  {
    id: "p4_bg2",
    type: "Bitmap",
    image: "p4_bg2",
    parent: "p4",
    propes: { y: 1334 },
    delay: "p4",
    animations: []
  },
  {
    id: "p4_paper",
    type: "Bitmap",
    image: "p4_paper",
    parent: "p4",
    propes: { y: 1334 },
    delay: "p4",
    animations: [
      { prope: "y", time: [0, 2800, 6700, 7e3], value: [1334, -1266] }
    ]
  },
  {
    id: "p4_mon8wrap",
    type: "Container",
    parent: "p4",
    propes: { y: 2400 },
    delay: "p4",
    animations: [{ prope: "y", time: [0, 4500, 8e3, 1e4], value: [2400, 1800] }]
  },
  {
    id: "p4_mon8",
    type: "Bitmap",
    image: "p4_mon8",
    parent: "p4_mon8wrap",
    propes: { x: 143 },
    delay: "p4",
    animations: []
  },
  {
    id: "p4_blood",
    type: "Bitmap",
    image: "p1_sprite",
    parent: "p4_mon8wrap",
    propes: { rect: [180, 220, 35, 69], x: 317, y: 1374 },
    delay: "p4",
    animations: [
      {
        prope: "y",
        time: [7e3, 7200, 7900, 8100, 9200],
        value: [1374, 1537, 1874]
      }
    ]
  },
  {
    id: "p4_blood2",
    type: "Bitmap",
    image: "p1_sprite",
    parent: "p4_mon8wrap",
    propes: {
      rect: [220, 220, 39, 229],
      x: 313,
      y: 1360,
      scaleY: 0.22
    },
    delay: "p4",
    animations: [
      {
        prope: "scaleY",
        time: [7e3, 7200, 7900, 7950, 9200],
        value: [0.22, 1, 0]
      }
    ]
  },
]

