import "./lib/flexible";
import "./lib/check";
import Hilo from "hilojs";
import { Scroller } from "scroller";
import pace from "pace";
import { musics, images } from "./constant";

function e() {
  const width = 750,
    height = window.innerHeight > 1334 ? 1334 : window.innerHeight,
    app = $("#app")[0];

  var e = 750,
    t = window.innerHeight > 1334 ? 1334 : window.innerHeight,
    i = $("#app"),
    n = i[0],
    a = null,
    r = null,
    o = !1,
    c = {
      p0: 0,
      p1: 4400,
      p2: 4800,
      p3: 3300,
      p4: 13900,
      p5: 20800,
      p6: -16500,
      p7: -20600,
      p8: 34800,
      p9: 47840
    },
    h = { p1: 0, p2: t - 1206, p3: t - 1334, p4: t - 1334 },
    u = [
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
        animations: [
          { prope: "alpha", time: [0, 1800, 1810, 2500], value: [0, 1] }
        ]
      },
      {
        id: "p4_mon2",
        type: "Bitmap",
        image: "p4_mon2",
        parent: "p4",
        propes: { alpha: 0 },
        delay: "p4",
        animations: [
          { prope: "alpha", time: [0, 1900, 1910, 2500], value: [0, 1] }
        ]
      },
      {
        id: "p4_mon3",
        type: "Bitmap",
        image: "p4_mon3",
        parent: "p4",
        propes: { alpha: 0 },
        delay: "p4",
        animations: [
          { prope: "alpha", time: [0, 2e3, 2010, 2500], value: [0, 1] }
        ]
      },
      {
        id: "p4_mon4",
        type: "Bitmap",
        image: "p4_mon4",
        parent: "p4",
        propes: { alpha: 0 },
        delay: "p4",
        animations: [
          { prope: "alpha", time: [0, 2100, 2110, 2500], value: [0, 1] }
        ]
      },
      {
        id: "p4_mon5",
        type: "Bitmap",
        image: "p4_mon5",
        parent: "p4",
        propes: { alpha: 0 },
        delay: "p4",
        animations: [
          { prope: "alpha", time: [0, 2200, 2210, 2500], value: [0, 1] }
        ]
      },
      {
        id: "p4_mon6",
        type: "Bitmap",
        image: "p4_mon6",
        parent: "p4",
        propes: { alpha: 0 },
        delay: "p4",
        animations: [
          { prope: "alpha", time: [0, 2300, 2310, 2500], value: [0, 1] }
        ]
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
        animations: [
          { prope: "y", time: [0, 4500, 8e3, 1e4], value: [2400, 1800] }
        ]
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
      {
        id: "p2",
        type: "Container",
        propes: {},
        delay: "p2",
        animations: [
          { prope: "alpha", time: [0, 5400, 5500, 6e3], value: [1, 0] }
        ]
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
        draw: function() {
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
        draw: function() {
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
      {
        id: "p0",
        type: "Container",
        propes: {},
        delay: "p0",
        animations: [
          { prope: "alpha", time: [0, 3800, 4400, 6e3], value: [1, 0] }
        ]
      },
      {
        id: "p0_bg",
        type: "Graphics",
        parent: "p0",
        delay: "p0",
        propes: {},
        draw: function() {
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
        animations: [
          { prope: "alpha", time: [0, 1380, 1500, 6e3], value: [1, 0] }
        ]
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
        animations: [
          { prope: "y", time: [6e3, 7e3, 8e3, 11500], value: [70, 0] }
        ]
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
        draw: function() {
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
        draw: function() {
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
        animations: [
          { prope: "y", time: [6e3, 6300, 7e3, 8300], value: [0, -350] }
        ]
      },
      {
        id: "p3_cloud3",
        type: "Bitmap",
        image: "p3_clouds",
        parent: "p3_wrap",
        propes: { rect: [0, 880, 288, 588], x: 0, y: 110 },
        delay: "p3",
        animations: [
          { prope: "x", time: [6e3, 6300, 7e3, 8300], value: [0, -300] }
        ]
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
        draw: function() {
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
        id: "p5",
        type: "Container",
        propes: { y: 1334 },
        delay: "p5",
        animations: [
          { prope: "y", time: [0, 100, 9e3, 1e4], value: [1334, -3200] }
        ]
      },
      {
        id: "p5_whitebg",
        type: "Graphics",
        image: "",
        parent: "p5",
        propes: {},
        delay: "p5",
        draw: function() {
          this.lineStyle(1, "rgba(255,255,255,1)")
            .beginFill("rgba(255,255,255,1)")
            .drawRect(0, 0, 750, 4020)
            .endFill();
        },
        animations: []
      },
      {
        id: "p5_bg",
        type: "Bitmap",
        image: "p5_bg",
        parent: "p5",
        propes: {},
        delay: "p5",
        animations: [
          {
            prope: "y",
            time: [5e3, 5370, 5410, 5450, 5490, 5930],
            value: [0, -14, -14, 0]
          },
          {
            prope: "x",
            time: [5e3, 5370, 5410, 5450, 5490, 5930],
            value: [0, 14, -14, 0]
          }
        ]
      },
      {
        id: "p5_mon1_mask",
        type: "Graphics",
        image: "",
        parent: "p5",
        propes: { x: 460, y: 150 },
        delay: "p5",
        draw: function() {
          this.lineStyle(1, "rgba(0,0,0,0)")
            .beginFill("rgba(0,0,0,0)")
            .drawRect(0, 0, 210, 360)
            .endFill();
        },
        animations: []
      },
      {
        id: "p5_mon1",
        type: "Bitmap",
        image: "p5_mon1",
        parent: "p5",
        propes: { x: 630, y: 290, mask: "p5_mon1_mask" },
        delay: "p5",
        animations: [
          {
            prope: "y",
            time: [
              1e3,
              1050,
              1120,
              1190,
              1260,
              1330,
              1400,
              1470,
              1540,
              1610,
              1680,
              1750,
              1820,
              1890,
              1960,
              2030,
              2100,
              2170,
              2240,
              2310,
              2380,
              2450,
              8050
            ],
            value: [
              290,
              295,
              279,
              284,
              268,
              273,
              257,
              262,
              246,
              251,
              235,
              240,
              224,
              229,
              213,
              218,
              202,
              207,
              191,
              196,
              180
            ]
          },
          { prope: "x", time: [1e3, 1050, 2350, 2600], value: [630, 270] }
        ]
      },
      {
        id: "p5_mon2_mask",
        type: "Graphics",
        image: "",
        parent: "p5",
        propes: { x: 70, y: 80 },
        delay: "p5",
        draw: function() {
          this.lineStyle(1, "rgba(0,0,0,0)")
            .beginFill("rgba(0,0,0,0)")
            .drawRect(0, 0, 220, 264)
            .endFill();
        },
        animations: []
      },
      {
        id: "p5_mon2",
        type: "Bitmap",
        image: "p5_mon2",
        parent: "p5",
        propes: { x: -150, y: 166, mask: "p5_mon2_mask" },
        delay: "p5",
        animations: [
          {
            prope: "y",
            time: [
              1e3,
              1050,
              1120,
              1190,
              1260,
              1330,
              1400,
              1470,
              1540,
              1610,
              1680,
              1750,
              1820,
              1890,
              1960,
              2030,
              2100,
              2170,
              2240,
              2310,
              2380,
              2450,
              8050
            ],
            value: [
              166,
              174,
              166,
              174,
              166,
              174,
              166,
              174,
              166,
              174,
              166,
              174,
              166,
              174,
              166,
              174,
              166,
              174,
              166,
              174,
              166
            ]
          },
          { prope: "x", time: [1e3, 1050, 2350, 2600], value: [-150, 290] }
        ]
      },
      {
        id: "p5_window",
        type: "Bitmap",
        image: "p5_window",
        parent: "p5",
        propes: { x: 67, y: 91 },
        delay: "p5",
        animations: []
      },
      {
        id: "p5_dia1",
        type: "Bitmap",
        image: "p1_sprite",
        parent: "p5",
        propes: {
          rect: [290, 300, 165, 120],
          x: 237,
          y: 474,
          pivotX: 164,
          pivotY: 110,
          scaleX: 0,
          scaleY: 0
        },
        delay: "p5",
        animations: [
          {
            prope: "scaleX",
            time: [1400, 1800, 1900, 2700],
            value: [0, 1]
          },
          { prope: "scaleY", time: [1400, 1800, 1900, 2700], value: [0, 1] }
        ]
      },
      {
        id: "p5_dia2",
        type: "Bitmap",
        image: "p1_sprite",
        parent: "p5",
        propes: { rect: [500, 80, 258, 130], x: 38, y: 1343 },
        delay: "p5",
        animations: [
          { prope: "y", time: [3500, 4e3, 4800, 5400], value: [1343, 823] }
        ]
      },
      {
        id: "p5_m0",
        type: "Bitmap",
        image: "p5_m0",
        parent: "p5",
        propes: { x: 32, y: 1592 },
        delay: "p5",
        animations: [
          {
            prope: "y",
            time: [3500, 5410, 5490, 5570, 5650, 5930],
            value: [1592, 1578, 1598, 1592]
          },
          {
            prope: "x",
            time: [37e3, 5410, 5490, 5570, 5650, 5930],
            value: [32, 18, 18, 32]
          }
        ]
      },
      {
        id: "p5_m2",
        type: "Bitmap",
        image: "p5_m2",
        parent: "p5",
        propes: { x: 32, y: 1592 },
        delay: "p5",
        animations: [
          {
            prope: "y",
            time: [3500, 4100, 4800, 5370, 5410, 5450, 5490, 5930],
            value: [1592, 1282, 1282, 1268, 1268, 1282]
          },
          {
            prope: "x",
            time: [3500, 5410, 5410, 5450, 5490, 5930],
            value: [32, 18, 46, 32]
          }
        ]
      },
      {
        id: "p5_m1",
        type: "Bitmap",
        image: "p5_m1",
        parent: "p5",
        propes: { x: 32, y: 1592 },
        delay: "p5",
        animations: [
          { prope: "y", time: [3500, 4e3, 4800, 5400], value: [1592, 972] }
        ]
      },
      {
        id: "p5_m3",
        type: "Bitmap",
        image: "p5_m3",
        parent: "p5",
        propes: { x: 32, y: 2272, pivotY: 372 },
        delay: "p5",
        animations: [
          {
            prope: "scaleY",
            time: [5e3, 5260, 5300, 5900],
            value: [1, 0.3]
          }
        ]
      },
      {
        id: "p5_mon3",
        type: "Bitmap",
        image: "p5_mon3",
        parent: "p5",
        propes: { x: 1851, y: 490, pivotX: 686, pivotY: 190, rotation: 32 },
        delay: "p5",
        animations: [
          { prope: "x", time: [5e3, 5200, 5300, 5900], value: [1851, 751] },
          { prope: "y", time: [5e3, 5200, 5300, 5900], value: [490, 1190] },
          {
            prope: "rotation",
            time: [5e3, 5200, 5300, 5900],
            value: [32, 0]
          }
        ]
      },
      {
        id: "p5_dia3",
        type: "Bitmap",
        image: "p5_text",
        parent: "p5",
        propes: { x: 354, y: 1970, pivotX: 224, pivotY: 70 },
        delay: "p5",
        animations: [
          { prope: "scaleX", time: [3e3, 5e3, 5100, 5800], value: [0, 1] },
          { prope: "scaleY", time: [3e3, 5e3, 5100, 5800], value: [0, 1] }
        ]
      },
      {
        id: "p5_mon4",
        type: "Bitmap",
        image: "p5_mon4",
        parent: "p5",
        propes: { x: 0, y: 2195, scaleY: 0 },
        delay: "p5",
        animations: [
          { prope: "scaleY", time: [5e3, 5260, 5300, 5900], value: [0, 1] }
        ]
      },
      {
        id: "p6",
        type: "Container",
        delay: "p6",
        delay: "p6",
        propes: { y: 1334 },
        animations: [
          {
            prope: "y",
            time: [4e4, 42200, 51200, 64500],
            value: [1334, -3200]
          }
        ]
      },
      {
        id: "p6_f0",
        type: "Bitmap",
        image: "p6_f0",
        delay: "p6",
        parent: "p6",
        propes: { x: 473, y: 617, pivotX: 280, pivotY: 500, rotation: 0 },
        animations: [
          {
            prope: "rotation",
            time: [4e4, 42200, 44600, 47500],
            value: [0, 6]
          },
          {
            prope: "alpha",
            time: [4e4, 44600, 44610, 47500],
            value: [1, 0]
          }
        ]
      },
      {
        id: "p6_f1",
        type: "Bitmap",
        image: "p6_f1",
        delay: "p6",
        parent: "p6",
        propes: { x: 189, y: 0, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [4e4, 44600, 44610, 47500],
            value: [0, 1]
          }
        ]
      },
      {
        id: "p6_fork",
        type: "Bitmap",
        image: "p6_fork",
        delay: "p6",
        parent: "p6",
        propes: { x: 385, y: 0, scaleX: 0, scaleY: 0 },
        animations: [
          {
            prope: "scaleX",
            time: [4e4, 44440, 44600, 44610, 47500],
            value: [0, 0.3, 0]
          },
          {
            prope: "scaleY",
            time: [4e4, 44440, 44600, 44610, 47500],
            value: [0, 0.3, 0]
          }
        ]
      },
      {
        id: "p6_dia1",
        type: "Bitmap",
        image: "p6_m",
        delay: "p6",
        parent: "p6",
        propes: {
          rect: [0, 0, 156, 65],
          x: 732,
          y: 538,
          pivotX: 156,
          pivotY: 34,
          scaleX: 0,
          scaleY: 0
        },
        animations: [
          {
            prope: "scaleX",
            time: [4e4, 44600, 44700, 47800],
            value: [0, 1]
          },
          {
            prope: "scaleY",
            time: [4e4, 44600, 44700, 47800],
            value: [0, 1]
          }
        ]
      },
      {
        id: "p6_m3",
        type: "Bitmap",
        image: "p6_m",
        delay: "p6",
        parent: "p6",
        propes: { rect: [250, 80, 230, 335], x: 509, y: 940 },
        animations: [
          {
            prope: "y",
            time: [4e4, 44300, 48300, 48700],
            value: [940, 840]
          }
        ]
      },
      {
        id: "p6_m2",
        type: "Bitmap",
        image: "p6_m",
        delay: "p6",
        parent: "p6",
        propes: { rect: [0, 420, 255, 322], x: 238, y: 869 },
        animations: [
          {
            prope: "y",
            time: [4e4, 44300, 48300, 48700],
            value: [869, 719]
          }
        ]
      },
      {
        id: "p6_m1",
        type: "Bitmap",
        image: "p6_m",
        delay: "p6",
        parent: "p6",
        propes: { rect: [0, 80, 245, 322], x: 33, y: 734 },
        animations: [
          {
            prope: "y",
            time: [4e4, 44300, 48300, 48700],
            value: [734, 534]
          }
        ]
      },
      {
        id: "p7",
        type: "Container",
        delay: "p7",
        propes: { y: 1334 },
        animations: [
          {
            prope: "y",
            time: [48e3, 48800, 55800, 66480],
            value: [1334, -2200]
          }
        ]
      },
      {
        id: "p7_bg",
        type: "Bitmap",
        image: "p7_bg",
        parent: "p7",
        delay: "p7",
        propes: {},
        animations: []
      },
      {
        id: "p7_line",
        type: "Bitmap",
        image: "p7_line",
        parent: "p7",
        delay: "p7",
        propes: { y: 110 },
        animations: [
          {
            prope: "y",
            time: [48e3, 48800, 52800, 56100],
            value: [110, -70]
          }
        ]
      },
      {
        id: "p7_mon1",
        type: "Bitmap",
        image: "p7_mon1",
        parent: "p7",
        delay: "p7",
        propes: { x: 114, y: 1124 },
        animations: [
          { prope: "x", time: [5e4, 53e3, 53600, 53900], value: [114, 48] },
          {
            prope: "y",
            time: [5e4, 53e3, 53600, 53900],
            value: [1124, 1318]
          }
        ]
      },
      {
        id: "p7_mother",
        type: "Bitmap",
        image: "p7_person",
        parent: "p7",
        delay: "p7",
        propes: {
          rect: [0, 0, 209, 381],
          x: 94,
          y: 2230,
          pivotX: 20,
          pivotY: 360,
          rotation: -9
        },
        animations: [
          {
            prope: "rotation",
            time: [5e4, 53500, 54300, 54600],
            value: [-9, 8]
          }
        ]
      },
      {
        id: "p7_girl1",
        type: "Bitmap",
        image: "p7_person",
        parent: "p7",
        delay: "p7",
        propes: { rect: [210, 0, 135, 346], x: 200, y: 1950 },
        animations: [
          {
            prope: "alpha",
            time: [5e4, 54200, 54210, 62900],
            value: [1, 0]
          }
        ]
      },
      {
        id: "p7_girl2",
        type: "Bitmap",
        image: "p7_person",
        parent: "p7",
        delay: "p7",
        propes: { rect: [350, 0, 236, 256], x: 180, y: 2100, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [5e4, 54200, 54210, 54700, 54710, 64300],
            value: [0, 1, 1, 0]
          },
          {
            prope: "x",
            time: [5e4, 54200, 54700, 64300],
            value: [180, 340]
          },
          {
            prope: "y",
            time: [5e4, 54200, 54700, 64300],
            value: [2100, 2530]
          }
        ]
      },
      {
        id: "p7_girl3",
        type: "Bitmap",
        image: "p7_person1",
        parent: "p7",
        delay: "p7",
        propes: { x: 380, y: 2602, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [5e4, 54700, 54710, 64310],
            value: [0, 1]
          }
        ]
      },
      {
        id: "p7_mon2",
        type: "Bitmap",
        image: "p7_person",
        parent: "p7",
        delay: "p7",
        propes: {
          rect: [38, 390, 712, 915],
          x: 1620,
          y: 1510,
          pivotX: 712,
          pivotY: 300,
          rotation: 39
        },
        animations: [
          {
            prope: "x",
            time: [5e4, 54300, 54500, 64e3],
            value: [1620, 750]
          },
          {
            prope: "y",
            time: [5e4, 54300, 54500, 64e3],
            value: [1510, 1980]
          },
          {
            prope: "rotation",
            time: [5e4, 54300, 54500, 64e3],
            value: [39, 0]
          }
        ]
      },
      {
        id: "p8",
        type: "Container",
        propes: { y: 1334, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "y",
            time: [-500, 1100, 21100, 21300],
            value: [0, -1e4]
          },
          { prope: "alpha", time: [-1500, 0, 100, 2e3], value: [0, 1] }
        ]
      },
      {
        id: "p8_bg1",
        type: "Bitmap",
        image: "p8_bg1",
        parent: "p8",
        delay: "p8",
        propes: {},
        animations: []
      },
      {
        id: "p8_bg1_5",
        type: "Graphics",
        parent: "p8",
        delay: "p8",
        propes: { y: 1360 },
        draw: function() {
          this.lineStyle(1, "rgba(0,0,0,1)")
            .beginFill("rgba(0,0,0,1)")
            .drawRect(0, 0, 750, 1540)
            .endFill();
        },
        animations: []
      },
      {
        id: "p8_bg2",
        type: "Bitmap",
        image: "p8_bg2",
        parent: "p8",
        delay: "p8",
        propes: { y: 2900 },
        animations: []
      },
      {
        id: "p8_bg2_5",
        type: "Graphics",
        parent: "p8",
        delay: "p8",
        propes: { y: 5400 },
        draw: function() {
          this.lineStyle(1, "rgba(0,0,0,1)")
            .beginFill("rgba(0,0,0,1)")
            .drawRect(0, 0, 750, 2550)
            .endFill();
        },
        animations: []
      },
      {
        id: "p8_bg3",
        type: "Bitmap",
        image: "p8_bg3",
        parent: "p8",
        delay: "p8",
        propes: { y: 5110 },
        animations: [
          {
            prope: "y",
            time: [8e3, 9600, 14900, 15400],
            value: [5110, 4300]
          }
        ]
      },
      {
        id: "p8_bg4",
        type: "Bitmap",
        image: "p8_blood2",
        parent: "p8",
        delay: "p8",
        propes: { y: 5590, x: 100 },
        animations: []
      },
      {
        id: "p8_bg5",
        type: "Bitmap",
        image: "p8_blood",
        parent: "p8",
        delay: "p8",
        propes: { y: 6767, x: 512, scaleX: 2, scaleY: 2 },
        animations: []
      },
      {
        id: "p8_face",
        type: "Container",
        parent: "p8",
        propes: {
          width: 750,
          height: 1334,
          x: 350,
          y: 610,
          pivotX: 350,
          pivotY: 610,
          scaleX: 40,
          scaleY: 40
        },
        delay: "p8",
        animations: [
          {
            prope: "scaleX",
            time: [-300, 0, 900, 2600, 4600],
            value: [40, 1, 0.6]
          },
          {
            prope: "scaleY",
            time: [-300, 0, 900, 2600, 4600],
            value: [40, 1, 0.6]
          },
          { prope: "x", time: [0, 900, 2600, 4600], value: [350, 300] },
          { prope: "y", time: [0, 900, 2600, 4600], value: [610, 300] }
        ]
      },
      {
        id: "p8_face_bg2",
        type: "Graphics",
        parent: "p8_face",
        delay: "p8",
        propes: { y: -6, x: -6 },
        draw: function() {
          this.lineStyle(1, "rgba(0,0,0,1)")
            .beginFill("rgba(0,0,0,1)")
            .drawRect(0, 0, 762, 1346)
            .endFill();
        },
        animations: []
      },
      {
        id: "p8_face_bg",
        type: "Bitmap",
        image: "p1_face",
        parent: "p8_face",
        delay: "p8",
        propes: {},
        animations: []
      },
      {
        id: "p8_eye1",
        type: "Bitmap",
        image: "p1_eye1",
        parent: "p8_face",
        propes: { x: 264, y: 513 },
        delay: "p8",
        animations: []
      },
      {
        id: "p8_tear1",
        type: "Bitmap",
        image: "p1_sprite",
        parent: "p8_face",
        propes: {
          rect: [0, 0, 22, 70],
          pivotX: 11,
          pivotY: 35,
          x: 308,
          y: 784,
          scaleX: 1,
          scaleY: 1,
          rotation: 0
        },
        delay: "p8",
        animations: []
      },
      {
        id: "p8_tear2",
        type: "Bitmap",
        image: "p1_sprite",
        parent: "p8_face",
        propes: {
          rect: [30, 0, 57, 75],
          pivotX: 37,
          pivotY: 23,
          x: 324,
          y: 642,
          scaleY: 1,
          rotation: 0
        },
        delay: "p8",
        animations: []
      },
      {
        id: "p8_tear3",
        type: "Bitmap",
        image: "p1_sprite",
        parent: "p8_face",
        propes: {
          rect: [90, 0, 32, 80],
          pivotX: 10,
          pivotY: 10,
          x: 664,
          y: 576,
          scaleY: 1,
          rotation: 0
        },
        delay: "p8",
        animations: []
      },
      {
        id: "p8_tear5",
        type: "Sprite",
        frames: "p1_tears.p1_tear5",
        parent: "p8_face",
        propes: { interval: 10, x: 295, y: 614 },
        delay: "p8",
        animations: []
      },
      {
        id: "p8_tear4",
        type: "Sprite",
        frames: "p1_tears.p1_tear4",
        parent: "p8_face",
        propes: { interval: 10, x: 574, y: 564 },
        delay: "p8",
        animations: []
      },
      {
        id: "p8_text1",
        type: "Bitmap",
        image: "p8_text1",
        parent: "p8",
        propes: { x: 35, y: 1200, alpha: 0 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [0, 900, 910, 4600], value: [0, 1] },
          { prope: "y", time: [0, 900, 2600, 4600], value: [1200, 500] }
        ]
      },
      {
        id: "p8_text2",
        type: "Bitmap",
        image: "p8_text2",
        parent: "p8",
        propes: { rect: [0, 0, 28, 177], x: 270, y: 1600 },
        delay: "p8",
        animations: [
          { prope: "y", time: [0, 2100, 4200, 4600], value: [1600, 1100] }
        ]
      },
      {
        id: "p8_text3",
        type: "Bitmap",
        image: "p8_text2",
        parent: "p8",
        propes: { rect: [30, 0, 28, 299], x: 322, y: 2e3 },
        delay: "p8",
        animations: [
          { prope: "y", time: [0, 2100, 4200, 4600], value: [2e3, 1100] }
        ]
      },
      {
        id: "p8_text4",
        type: "Bitmap",
        image: "p8_text2",
        parent: "p8",
        propes: { rect: [60, 0, 28, 253], x: 374, y: 2400 },
        delay: "p8",
        animations: [
          { prope: "y", time: [0, 2100, 4200, 4600], value: [2400, 1100] }
        ]
      },
      {
        id: "p8_text5",
        type: "Bitmap",
        image: "p8_text2",
        parent: "p8",
        propes: { rect: [90, 0, 28, 522], x: 426, y: 2800 },
        delay: "p8",
        animations: [
          { prope: "y", time: [0, 2100, 4200, 4600], value: [2800, 1100] }
        ]
      },
      {
        id: "p8_cloud1",
        type: "Bitmap",
        image: "p8_cloud",
        parent: "p8",
        propes: { rect: [0, 0, 658, 113], x: -20, y: 2012 },
        delay: "p8",
        animations: [
          { prope: "y", time: [1e3, 2400, 4500, 4900], value: [2012, 1612] }
        ]
      },
      {
        id: "p8_cloud2",
        type: "Bitmap",
        image: "p8_cloud",
        parent: "p8",
        propes: { rect: [0, 120, 414, 235], x: 336, y: 2300 },
        delay: "p8",
        animations: [
          { prope: "y", time: [1e3, 2400, 4500, 4900], value: [2300, 2100] }
        ]
      },
      {
        id: "p8_ship",
        type: "Bitmap",
        image: "p8_ship",
        parent: "p8",
        propes: { x: 432, y: 2980, pivotX: 164, pivotY: 335 },
        delay: "p8",
        animations: [
          {
            prope: "y",
            time: [4e3, 5100, 5150, 5300, 5350, 6600],
            value: [2980, 3e3, 2974, 2980]
          },
          {
            prope: "rotation",
            time: [4e3, 5100, 5150, 5300, 5350, 5450, 5520, 5600, 5680, 6600],
            value: [0, 6, -2, 2, -2, 2, -2, 2]
          }
        ]
      },
      {
        id: "p8_blood",
        type: "Bitmap",
        image: "p8_blood",
        parent: "p8",
        propes: {
          x: 550,
          y: 2854,
          pivotX: 113,
          pivotY: 112,
          scaleX: 0,
          scaleY: 0
        },
        delay: "p8",
        animations: [
          { prope: "scaleX", time: [4e3, 5200, 5280, 5600], value: [0, 1] },
          { prope: "scaleY", time: [4e3, 5200, 5280, 5600], value: [0, 1] }
        ]
      },
      {
        id: "p8_fish1",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [529, 1050, 62, 104], x: 0, y: 1700, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 4140, 4150, 4196, 4206, 5300],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish2",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [0, 302, 114, 155], x: 0, y: 1736, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 4196, 4206, 4252, 4262, 5300],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish3",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [136, 980, 126, 166], x: 55, y: 1835, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 4252, 4262, 4308, 4318, 5300],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish4",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [263, 980, 127, 176], x: 93, y: 1880, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 4308, 4318, 4364, 4374, 5300],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish5",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [1, 978, 133, 195], x: 130, y: 1967, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 4364, 4374, 4420, 4430, 5300],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish6",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [830, 771, 171, 212], x: 155, y: 2016, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 4420, 4430, 4476, 4486, 5300],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish7",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [392, 982, 135, 172], x: 181, y: 2092, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 4476, 4486, 4532, 4542, 5300],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish8",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [672, 771, 152, 255], x: 211, y: 2049, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 4532, 4542, 4588, 4598, 5300],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish9",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [500, 771, 171, 268], x: 207, y: 2145, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 4588, 4598, 4644, 4654, 5300],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish10",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [154, 469, 185, 299], x: 254, y: 2224, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 4644, 4654, 4700, 4710, 5300],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish11",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [823, 0, 216, 337], x: 250, y: 2260, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 4700, 4710, 4756, 4766, 5300],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish12",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [340, 0, 237, 310], x: 242, y: 2338, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 4756, 4766, 4812, 4822, 5300],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish13",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [577, 0, 243, 333], x: 279, y: 2458, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 4812, 4822, 4868, 4878, 5300],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish14",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [842, 340, 253, 427], x: 349, y: 2480, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 4868, 4878, 4924, 4934, 5300],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish15",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [534, 380, 306, 390], x: 329, y: 2542, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 4924, 4934, 4980, 4990, 5300],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish16",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [0, 0, 337, 302], x: 251, y: 2596, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 4980, 4990, 5036, 5046, 5700],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish17",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [0, 770, 272, 186], x: 283, y: 2645, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 5036, 5046, 5092, 5102, 5700],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish18",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [117, 302, 243, 123], x: 332, y: 2682, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 5092, 5102, 5148, 5158, 5700],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish19",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [0, 484, 152, 284], x: 373, y: 2627, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 5148, 5158, 5204, 5214, 5700],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish20",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [342, 452, 190, 315], x: 351, y: 2674, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 5204, 5214, 5260, 5270, 5700],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish21",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [271, 770, 225, 208], x: 337, y: 2770, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 5260, 5270, 5316, 5326, 5700],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish22",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [886, 984, 261, 177], x: 337, y: 2907, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 5316, 5326, 5372, 5382, 5700],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish23",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [592, 1042, 278, 120], x: 331, y: 2892, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 5372, 5382, 5428, 5438, 5700],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish24",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [380, 312, 140, 62], x: 380, y: 2930, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 5428, 5438, 5484, 5494, 5700],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_fish25",
        type: "Bitmap",
        image: "p8_fish",
        parent: "p8",
        propes: { rect: [539, 327, 35, 26], x: 393, y: 2976, alpha: 0 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [3e3, 5484, 5494, 5540, 5550, 5700],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p8_gs",
        type: "Container",
        parent: "p8",
        propes: { x: 114, y: 3800 },
        delay: "p8",
        animations: [
          { prope: "y", time: [4e3, 4980, 8100, 8600], value: [3800, 2200] }
        ]
      },
      {
        id: "p8_gs1",
        type: "Bitmap",
        image: "p8_gs1",
        parent: "p8_gs",
        propes: { alpha: 1 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [3600, 6300, 6310, 7200], value: [1, 0] }
        ]
      },
      {
        id: "p8_gs2",
        type: "Bitmap",
        image: "p8_gs2",
        parent: "p8_gs",
        propes: { alpha: 0 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [3600, 6300, 6310, 7200], value: [0, 1] }
        ]
      },
      {
        id: "p8_gs3",
        type: "Bitmap",
        image: "p8_gs3",
        parent: "p8_gs",
        propes: { alpha: 0 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [3600, 6325, 6335, 7200], value: [0, 1] }
        ]
      },
      {
        id: "p8_gs4",
        type: "Bitmap",
        image: "p8_gs4",
        parent: "p8_gs",
        propes: { alpha: 0 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [3600, 6350, 6360, 7200], value: [0, 1] }
        ]
      },
      {
        id: "p8_gs5",
        type: "Bitmap",
        image: "p8_gs5",
        parent: "p8_gs",
        propes: { alpha: 0 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [3600, 6375, 6385, 7200], value: [0, 1] }
        ]
      },
      {
        id: "p8_gs6",
        type: "Bitmap",
        image: "p8_gs6",
        parent: "p8_gs",
        propes: { alpha: 0 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [3600, 6400, 6410, 7200], value: [0, 1] }
        ]
      },
      {
        id: "p8_gs7",
        type: "Bitmap",
        image: "p8_gs7",
        parent: "p8_gs",
        propes: { alpha: 0 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [3600, 6425, 6435, 7200], value: [0, 1] }
        ]
      },
      {
        id: "p8_gs8",
        type: "Bitmap",
        image: "p8_gs8",
        parent: "p8_gs",
        propes: { alpha: 0 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [3600, 6450, 6460, 7200], value: [0, 1] }
        ]
      },
      {
        id: "p8_gs9",
        type: "Bitmap",
        image: "p8_gs9",
        parent: "p8_gs",
        propes: { alpha: 0 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [3600, 6475, 6485, 7200], value: [0, 1] }
        ]
      },
      {
        id: "p8_gs10",
        type: "Bitmap",
        image: "p8_gs10",
        parent: "p8_gs",
        propes: { alpha: 0, y: -6 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [3600, 6500, 6510, 7200], value: [0, 1] }
        ]
      },
      {
        id: "p8_gs11",
        type: "Bitmap",
        image: "p8_gs11",
        parent: "p8_gs",
        propes: { alpha: 0, y: -11 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [3600, 6525, 6535, 7200], value: [0, 1] }
        ]
      },
      {
        id: "p8_gs12",
        type: "Bitmap",
        image: "p8_gs12",
        parent: "p8_gs",
        propes: { alpha: 0, y: -16 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [3600, 6550, 6560, 7200], value: [0, 1] }
        ]
      },
      {
        id: "p8_gs13",
        type: "Bitmap",
        image: "p8_gs13",
        parent: "p8_gs",
        propes: { alpha: 0, y: -20 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [3600, 6575, 6585, 7200], value: [0, 1] }
        ]
      },
      {
        id: "p8_gs14",
        type: "Bitmap",
        image: "p8_gs13",
        parent: "p8_gs",
        propes: { alpha: 0, y: -15 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [3600, 6600, 6610, 7200], value: [0, 1] }
        ]
      },
      {
        id: "p8_text6",
        type: "Bitmap",
        image: "p8_text3",
        parent: "p8_gs",
        propes: { x: 130, y: 538 },
        delay: "p8",
        animations: []
      },
      {
        id: "p8_whale1",
        type: "Bitmap",
        image: "p8_whale1",
        parent: "p8",
        propes: { x: 70, y: 3713 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [6e3, 7600, 8100, 8600], value: [1, 0] },
          { prope: "y", time: [6e3, 7500, 8100, 8600], value: [3713, 3800] }
        ]
      },
      {
        id: "p8_whale2",
        type: "Bitmap",
        image: "p8_whale2",
        parent: "p8",
        propes: { x: 60, y: 4e3 },
        delay: "p8",
        animations: [
          {
            prope: "alpha",
            time: [6e3, 8200, 8400, 9e3, 9200, 9600],
            value: [0, 1, 1, 0]
          },
          { prope: "y", time: [6e3, 8200, 9200, 9600], value: [4e3, 4200] }
        ]
      },
      {
        id: "p8_whale3",
        type: "Bitmap",
        image: "p8_whale3",
        parent: "p8",
        propes: { x: 260, y: 4522 },
        delay: "p8",
        animations: [
          { prope: "alpha", time: [6e3, 9200, 9400, 9600], value: [0, 1] },
          {
            prope: "y",
            time: [6e3, 9200, 11200, 12e3],
            value: [4522, 4583]
          }
        ]
      },
      {
        id: "p8_blood2",
        type: "Bitmap",
        image: "p8_blood2",
        parent: "p8",
        propes: {
          x: 375,
          y: 4330,
          pivotX: 290,
          pivotY: 180,
          scaleX: 0,
          scaleY: 0
        },
        delay: "p8",
        animations: [
          { prope: "scaleX", time: [6e3, 8e3, 8200, 9600], value: [0, 4] },
          { prope: "scaleY", time: [6e3, 8e3, 8200, 9600], value: [0, 4] }
        ]
      },
      {
        id: "p8_whale4",
        type: "Container",
        parent: "p8",
        propes: { x: 116, y: 5206 },
        delay: "p8",
        animations: []
      },
      {
        id: "p8_whale5_bg",
        type: "Bitmap",
        image: "p8_whale5_bg",
        parent: "p8_whale4",
        propes: { rect: [0, 0, 503, 509] },
        delay: "p8",
        animations: []
      },
      {
        id: "p8_whale5_cover",
        type: "Bitmap",
        image: "p8_whale5_cover",
        parent: "p8_whale4",
        propes: { rect: [0, 0, 503, 509] },
        delay: "p8",
        animations: [
          { prope: "y", time: [9e3, 10400, 10700, 12e3], value: [0, -200] },
          { prope: "alpha", time: [9e3, 10500, 10700, 12e3], value: [1, 0] }
        ]
      },
      {
        id: "p8_whale5_r",
        type: "Bitmap",
        image: "p8_whale5_r",
        parent: "p8_whale4",
        propes: {
          rect: [0, 0, 503, 509],
          pivotX: 244,
          pivotY: 304,
          x: 244,
          y: 304,
          scaleX: 0,
          scaleY: 0
        },
        delay: "p8",
        animations: [
          {
            prope: "scaleX",
            time: [9e3, 10400, 10700, 12e3],
            value: [0, 1]
          },
          {
            prope: "scaleY",
            time: [9e3, 10400, 10700, 12e3],
            value: [0, 1]
          }
        ]
      },
      {
        id: "p8_text7",
        type: "Bitmap",
        image: "p8_text4",
        parent: "p8_whale4",
        propes: { y: -106 },
        delay: "p8",
        animations: []
      },
      {
        id: "p8_m1",
        type: "Bitmap",
        image: "p8_m1",
        parent: "p8",
        propes: { y: 5828, x: 80 },
        delay: "p8",
        animations: []
      },
      {
        id: "p8_fishes1",
        type: "Bitmap",
        image: "p8_fish2",
        parent: "p8",
        propes: {
          rect: [0, 0, 286, 128],
          y: 6184,
          x: 73,
          pivotX: 143,
          pivotY: 64
        },
        delay: "p8",
        animations: [
          {
            prope: "rotation",
            time: [9e3, 10800, 13700, 14e3],
            value: [0, -13]
          },
          { prope: "x", time: [9e3, 10800, 13700, 14e3], value: [73, 543] },
          {
            prope: "y",
            time: [9e3, 10800, 13700, 14e3],
            value: [6184, 5964]
          }
        ]
      },
      {
        id: "p8_fishes2",
        type: "Bitmap",
        image: "p8_fish2",
        parent: "p8",
        propes: {
          rect: [290, 0, 208, 201],
          y: 6413,
          x: 104,
          pivotX: 104,
          pivotY: 100
        },
        delay: "p8",
        animations: [
          {
            prope: "x",
            time: [9e3, 11400, 14700, 15e3],
            value: [104, 244]
          },
          {
            prope: "y",
            time: [9e3, 11400, 14700, 15e3],
            value: [6413, 6013]
          }
        ]
      },
      {
        id: "p8_m2",
        type: "Container",
        parent: "p8",
        propes: { x: 40, y: 6440 },
        delay: "p8",
        animations: []
      },
      {
        id: "p8_m2_bg",
        type: "Graphics",
        parent: "p8_m2",
        delay: "p8",
        propes: {},
        draw: function() {
          this.lineStyle(1, "rgba(255,255,255,1)")
            .beginFill("rgba(255,255,255,1)")
            .drawRect(0, 0, 600, 240)
            .endFill();
        },
        animations: []
      },
      {
        id: "p8_m2_wave1",
        type: "Bitmap",
        image: "p8_m2",
        parent: "p8_m2",
        propes: { rect: [0, 0, 574, 226], x: 12, y: 10 },
        delay: "p8",
        animations: [
          {
            prope: "y",
            time: [10800, 11700, 12700, 13700, 14700, 15e3],
            value: [10, 0, 10]
          }
        ]
      },
      {
        id: "p8_m2_whale",
        type: "Bitmap",
        image: "p8_m2",
        parent: "p8_m2",
        propes: { rect: [600, 0, 524, 389], x: 114, y: -190 },
        delay: "p8",
        animations: [
          {
            prope: "y",
            time: [10800, 11700, 12700, 13700, 14700, 15e3],
            value: [-190, -180, -190]
          }
        ]
      },
      {
        id: "p8_m2_wave2",
        type: "Bitmap",
        image: "p8_m2",
        parent: "p8_m2",
        propes: { rect: [0, 230, 574, 174], x: 12, y: 87 },
        delay: "p8",
        animations: [
          {
            prope: "y",
            time: [10800, 11700, 12700, 13700, 14700, 15e3],
            value: [87, 77, 87]
          }
        ]
      },
      {
        id: "p8_m2_wave3",
        type: "Bitmap",
        image: "p8_m2",
        parent: "p8_m2",
        propes: { rect: [0, 410, 600, 150], x: 0, y: 163 },
        delay: "p8",
        animations: [
          {
            prope: "y",
            time: [10800, 11700, 12700, 13700, 14700, 15e3],
            value: [163, 173, 163]
          }
        ]
      },
      {
        id: "p8_m2_wave4",
        type: "Bitmap",
        image: "p8_m2",
        parent: "p8_m2",
        propes: { rect: [0, 651, 600, 216], x: 0, y: 236 },
        delay: "p8",
        animations: [
          {
            prope: "y",
            time: [10800, 11700, 12700, 13700, 14700, 15e3],
            value: [236, 206, 236]
          }
        ]
      },
      {
        id: "p9_wrap",
        type: "Container",
        propes: {},
        delay: "p9",
        animations: []
      },
      {
        id: "p9_bg",
        type: "Graphics",
        parent: "p9_wrap",
        delay: "p9",
        propes: { y: 1334 },
        draw: function() {
          this.lineStyle(1, "rgba(0,0,0,1)")
            .beginFill("rgba(0,0,0,1)")
            .drawRect(0, 0, 750, 5800)
            .endFill();
        },
        animations: [
          {
            prope: "y",
            time: [-500, 0, 11856, 12056],
            value: [1334, -5800 + t]
          }
        ]
      },
      {
        id: "p9_whale_atlas",
        type: "TextureAtlas",
        image: "p9_whale_bg",
        parent: "null",
        propes: {
          frames: [
            [0, 0, 432, 613],
            [440, 0, 432, 613],
            [0, 620, 432, 613],
            [440, 620, 432, 613]
          ],
          sprites: { p9: [0, 1, 2, 3] }
        },
        animations: {}
      },
      {
        id: "p9_whale_bg",
        type: "Sprite",
        frames: "p9_whale_atlas.p9",
        parent: "p9_wrap",
        propes: { interval: 10, x: 160, y: 2334, alpha: 0.5 },
        delay: "p9",
        animations: [
          {
            prope: "y",
            time: [
              -500,
              0,
              2 * (2334 - t + 280 + 613),
              2 * (2334 - t + 280 + 613) + 200
            ],
            value: [2334, t - 280 - 613]
          },
          {
            prope: "alpha",
            time: [7e3, 7400, 8400, 11300, 11600, 12e3],
            value: [0.5, 0.2, 0.2, 1]
          }
        ]
      },
      {
        id: "p9",
        type: "Container",
        propes: { y: 1334 },
        delay: "p9",
        parent: "p9_wrap",
        animations: [
          {
            prope: "y",
            time: [-500, 0, 11856, 12056],
            value: [1334, -5800 + t]
          }
        ]
      },
      {
        id: "p9_text1",
        type: "Bitmap",
        image: "p9_text",
        parent: "p9",
        propes: { rect: [0, 0, 29, 211], x: 275, y: 0 },
        delay: "p9",
        animations: []
      },
      {
        id: "p9_text2",
        type: "Bitmap",
        image: "p9_text",
        parent: "p9",
        propes: { rect: [30, 0, 32, 481], x: 336, y: 290 },
        delay: "p9",
        animations: [{ prope: "y", time: [-500, 0, 4e3, 6e3], value: [290, 0] }]
      },
      {
        id: "p9_text3",
        type: "Bitmap",
        image: "p9_text",
        parent: "p9",
        propes: { rect: [64, 0, 31, 388], x: 400, y: 334 },
        delay: "p9",
        animations: [{ prope: "y", time: [-500, 0, 4e3, 6e3], value: [334, 0] }]
      },
      {
        id: "p9_text4",
        type: "Bitmap",
        image: "p9_text",
        parent: "p9",
        propes: { rect: [96, 0, 32, 841], x: 474, y: 470 },
        delay: "p9",
        animations: [
          { prope: "y", time: [-500, 0, 4e3, 6e3], value: [470, -100] }
        ]
      },
      {
        id: "p9_m2",
        type: "Container",
        parent: "p9",
        propes: { x: 355, y: 964 },
        delay: "p9",
        animations: []
      },
      {
        id: "p9_m2_bg",
        type: "Graphics",
        parent: "p9_m2",
        delay: "p9",
        propes: {},
        draw: function() {
          this.lineStyle(1, "rgba(255,255,255,1)")
            .beginFill("rgba(255,255,255,1)")
            .drawRect(0, 0, 341, 534)
            .endFill();
        },
        animations: []
      },
      {
        id: "p9_m2_atlas",
        type: "TextureAtlas",
        image: "p9_m2",
        parent: "null",
        propes: {
          frames: [
            [0, 0, 313, 506],
            [320, 0, 313, 506],
            [640, 0, 313, 506],
            [960, 0, 313, 506],
            [1280, 0, 313, 506],
            [0, 510, 313, 506],
            [320, 510, 313, 506],
            [640, 510, 313, 506],
            [960, 510, 313, 506],
            [1280, 510, 313, 506],
            [0, 1020, 313, 506],
            [320, 1020, 313, 506],
            [640, 1020, 313, 506],
            [960, 1020, 313, 506],
            [1280, 1020, 313, 506]
          ],
          sprites: {
            p9_m2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
          }
        },
        animations: {}
      },
      {
        id: "p9_m2_img",
        type: "Sprite",
        frames: "p9_m2_atlas.p9_m2",
        parent: "p9_m2",
        propes: { interval: 10, x: 14, y: 14 },
        delay: "p9",
        animations: []
      },
      {
        id: "p9_m2_name",
        type: "Bitmap",
        image: "p9_text2",
        parent: "p9_m2",
        delay: "p9",
        propes: { rect: [150, 0, 142, 63], x: -40, y: 346 },
        animations: [
          { prope: "y", time: [2e3, 2800, 5500, 6e3], value: [346, 200] }
        ]
      },
      {
        id: "p9_m2_ev_bg",
        type: "Graphics",
        parent: "p9_m2",
        delay: "p9",
        propes: { x: -12, y: 388 },
        draw: function() {
          this.lineStyle(1, "rgba(178,36,36,1)")
            .beginFill("rgba(178,36,36,1)")
            .drawRect(0, 0, 148, 66)
            .endFill();
        },
        animations: []
      },
      {
        id: "p9_m2_ev_mask",
        type: "Graphics",
        parent: "p9_m2",
        delay: "p9",
        propes: { x: -12, y: 388 },
        draw: function() {
          this.lineStyle(1, "rgba(178,36,36,0)")
            .beginFill("rgba(178,36,36,0)")
            .drawRect(0, 0, 148, 66)
            .endFill();
        },
        animations: []
      },
      {
        id: "p9_m2_ev",
        type: "Bitmap",
        image: "p9_eval",
        parent: "p9_m2",
        delay: "p9",
        propes: { x: -6, y: 450, mask: "p9_m2_ev_mask" },
        animations: [
          { prope: "y", time: [3e3, 3620, 4e3, 6e3], value: [450, -226] }
        ]
      },
      {
        id: "p9_m2_tip",
        type: "Bitmap",
        image: "p9_text2",
        parent: "p9_m2",
        delay: "p9",
        propes: { x: -292, y: 54, rect: [0, 160, 235, 310] },
        animations: []
      },
      {
        id: "p9_m3",
        type: "Container",
        parent: "p9",
        propes: { x: 0, y: 1582 },
        delay: "p9",
        animations: []
      },
      {
        id: "p9_m3_bg",
        type: "Graphics",
        parent: "p9_m3",
        delay: "p9",
        propes: {},
        draw: function() {
          this.lineStyle(1, "rgba(255,255,255,1)")
            .beginFill("rgba(255,255,255,1)")
            .drawRect(0, 0, 628, 268)
            .endFill();
        },
        animations: []
      },
      {
        id: "p9_m3_atlas",
        type: "TextureAtlas",
        image: "p9_m3",
        parent: "null",
        propes: {
          frames: [
            [0, 0, 598, 238],
            [600, 0, 598, 238],
            [0, 240, 598, 238],
            [600, 240, 598, 238],
            [0, 480, 598, 238],
            [600, 480, 598, 238],
            [0, 720, 598, 238],
            [600, 720, 598, 238],
            [0, 960, 598, 238],
            [600, 960, 598, 238],
            [0, 1200, 598, 238],
            [600, 1200, 598, 238],
            [0, 1440, 598, 238]
          ],
          sprites: { p9_m3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }
        },
        animations: {}
      },
      {
        id: "p9_m3_img",
        type: "Sprite",
        frames: "p9_m3_atlas.p9_m3",
        parent: "p9_m3",
        propes: { interval: 10, x: 15, y: 15 },
        delay: "p9",
        animations: []
      },
      {
        id: "p9_m3_name",
        type: "Bitmap",
        image: "p9_text2",
        parent: "p9_m3",
        delay: "p9",
        propes: { rect: [300, 0, 142, 63], x: 526, y: 48 },
        animations: []
      },
      {
        id: "p9_m3_ev_bg",
        type: "Graphics",
        parent: "p9_m3",
        delay: "p9",
        propes: { x: 566, y: 130 },
        draw: function() {
          this.lineStyle(1, "rgba(178,36,36,1)")
            .beginFill("rgba(178,36,36,1)")
            .drawRect(0, 0, 148, 66)
            .endFill();
        },
        animations: []
      },
      {
        id: "p9_m3_ev_mask",
        type: "Graphics",
        parent: "p9_m3",
        delay: "p9",
        propes: { x: 566, y: 130 },
        draw: function() {
          this.lineStyle(1, "rgba(178,36,36,0)")
            .beginFill("rgba(178,36,36,0)")
            .drawRect(0, 0, 148, 66)
            .endFill();
        },
        animations: []
      },
      {
        id: "p9_m3_ev",
        type: "Bitmap",
        image: "p9_eval",
        parent: "p9_m3",
        delay: "p9",
        propes: { x: 572, y: 200, mask: "p9_m3_ev_mask" },
        animations: [
          { prope: "y", time: [4e3, 4300, 4800, 6300], value: [200, -484] }
        ]
      },
      {
        id: "p9_m3_tip",
        type: "Bitmap",
        image: "p9_text2",
        parent: "p9_m3",
        delay: "p9",
        propes: { x: 60, y: 302, rect: [0, 480, 567, 87] },
        animations: []
      },
      {
        id: "p9_m4",
        type: "Container",
        parent: "p9",
        propes: { x: 110, y: 2060 },
        delay: "p9",
        animations: []
      },
      {
        id: "p9_m4_bg",
        type: "Graphics",
        parent: "p9_m4",
        delay: "p9",
        propes: {},
        draw: function() {
          this.lineStyle(1, "rgba(255,255,255,1)")
            .beginFill("rgba(255,255,255,1)")
            .drawRect(0, 0, 544, 358)
            .endFill();
        },
        animations: []
      },
      {
        id: "p9_m4_atlas",
        type: "TextureAtlas",
        image: "p9_m4",
        parent: "null",
        propes: {
          frames: [
            [0, 0, 512, 326],
            [520, 0, 512, 326],
            [1040, 0, 512, 326],
            [0, 330, 512, 326],
            [520, 330, 512, 326],
            [1040, 330, 512, 326],
            [0, 660, 512, 326],
            [520, 660, 512, 326],
            [1040, 660, 512, 326],
            [0, 990, 512, 326],
            [520, 990, 512, 326],
            [1040, 990, 512, 326],
            [0, 1320, 512, 326],
            [520, 1320, 512, 326],
            [1040, 1320, 512, 326]
          ],
          sprites: {
            p9_m4: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
          }
        },
        animations: {}
      },
      {
        id: "p9_m4_img",
        type: "Sprite",
        frames: "p9_m4_atlas.p9_m4",
        parent: "p9_m4",
        propes: { interval: 10, x: 16, y: 16 },
        delay: "p9",
        animations: []
      },
      {
        id: "p9_m4_name",
        type: "Bitmap",
        image: "p9_text2",
        parent: "p9_m4",
        delay: "p9",
        propes: { rect: [450, 0, 142, 63], x: -10, y: 150 },
        animations: [
          { prope: "y", time: [4e3, 4980, 7430, 9e3], value: [150, 50] }
        ]
      },
      {
        id: "p9_m4_ev_bg",
        type: "Graphics",
        parent: "p9_m4",
        delay: "p9",
        propes: { x: -64, y: 228 },
        draw: function() {
          this.lineStyle(1, "rgba(178,36,36,1)")
            .beginFill("rgba(178,36,36,1)")
            .drawRect(0, 0, 148, 66)
            .endFill();
        },
        animations: []
      },
      {
        id: "p9_m4_ev_mask",
        type: "Graphics",
        parent: "p9_m4",
        delay: "p9",
        propes: { x: -64, y: 228 },
        draw: function() {
          this.lineStyle(1, "rgba(178,36,36,0)")
            .beginFill("rgba(178,36,36,0)")
            .drawRect(0, 0, 148, 66)
            .endFill();
        },
        animations: []
      },
      {
        id: "p9_m4_ev",
        type: "Bitmap",
        image: "p9_eval",
        parent: "p9_m4",
        delay: "p9",
        propes: { x: -60, y: 300, mask: "p9_m4_ev_mask" },
        animations: [
          { prope: "y", time: [5e3, 5300, 5800, 7300], value: [300, -448] }
        ]
      },
      {
        id: "p9_m4_tip",
        type: "Bitmap",
        image: "p9_text2",
        parent: "p9_m4",
        delay: "p9",
        propes: { x: -56, y: 386, rect: [0, 70, 545, 86] },
        animations: []
      },
      {
        id: "p9_m1",
        type: "Container",
        parent: "p9",
        propes: { x: 220, y: 2686 },
        delay: "p9",
        animations: []
      },
      {
        id: "p9_m1_bg",
        type: "Graphics",
        parent: "p9_m1",
        delay: "p9",
        propes: {},
        draw: function() {
          this.lineStyle(1, "rgba(255,255,255,1)")
            .beginFill("rgba(255,255,255,1)")
            .drawRect(0, 0, 530, 366)
            .endFill();
        },
        animations: []
      },
      {
        id: "p9_m1_atlas",
        type: "TextureAtlas",
        image: "p9_m1",
        parent: "null",
        propes: {
          frames: [
            [0, 0, 518, 342],
            [530, 0, 518, 342],
            [1060, 0, 518, 342],
            [0, 344, 518, 342],
            [530, 344, 518, 342],
            [1060, 344, 518, 342],
            [0, 688, 518, 342],
            [530, 688, 518, 342],
            [1060, 688, 518, 342],
            [0, 1032, 518, 342],
            [530, 1032, 518, 342],
            [1060, 1032, 518, 342],
            [0, 1376, 518, 342],
            [530, 1376, 518, 342]
          ],
          sprites: { p9_m1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] }
        },
        animations: {}
      },
      {
        id: "p9_m1_img",
        type: "Sprite",
        frames: "p9_m1_atlas.p9_m1",
        parent: "p9_m1",
        propes: { interval: 10, x: 12, y: 12 },
        delay: "p9",
        animations: []
      },
      {
        id: "p9_m1_name",
        type: "Bitmap",
        image: "p9_text2",
        parent: "p9_m1",
        delay: "p9",
        propes: { rect: [0, 0, 142, 63], x: -60, y: 200 },
        animations: [
          { prope: "y", time: [1e3, 5220, 7100, 9100], value: [200, 120] }
        ]
      },
      {
        id: "p9_m1_ev_bg",
        type: "Graphics",
        parent: "p9_m1",
        delay: "p9",
        propes: { x: 58, y: 272 },
        draw: function() {
          this.lineStyle(1, "rgba(178,36,36,1)")
            .beginFill("rgba(178,36,36,1)")
            .drawRect(0, 0, 148, 66)
            .endFill();
        },
        animations: []
      },
      {
        id: "p9_m1_ev_mask",
        type: "Graphics",
        parent: "p9_m1",
        delay: "p9",
        propes: { x: 58, y: 272 },
        draw: function() {
          this.lineStyle(1, "rgba(178,36,36,0)")
            .beginFill("rgba(178,36,36,0)")
            .drawRect(0, 0, 148, 66)
            .endFill();
        },
        animations: []
      },
      {
        id: "p9_m1_ev",
        type: "Bitmap",
        image: "p9_eval",
        parent: "p9_m1",
        delay: "p9",
        propes: { x: 58, y: 338, mask: "p9_m1_ev_mask" },
        animations: [
          { prope: "y", time: [1e3, 6100, 6900, 9100], value: [338, -280] }
        ]
      },
      {
        id: "p9_m1_tip",
        type: "Bitmap",
        image: "p9_text2",
        parent: "p9_m1",
        delay: "p9",
        propes: { x: 50, y: 400, rect: [240, 160, 425, 86] },
        animations: []
      },
      {
        id: "p9_tip",
        type: "Bitmap",
        image: "p9_text2",
        parent: "p9",
        delay: "p9",
        propes: { x: 80, y: 3310, rect: [0, 570, 582, 290] },
        animations: []
      },
      {
        id: "p9_lz00",
        type: "Bitmap",
        image: "p9_lz00",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9600, 9610, 9624, 9634, 1e4],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz01",
        type: "Bitmap",
        image: "p9_lz01",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9624, 9634, 9648, 9658, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz02",
        type: "Bitmap",
        image: "p9_lz02",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9648, 9658, 9672, 9682, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz03",
        type: "Bitmap",
        image: "p9_lz03",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9672, 9682, 9696, 9706, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz04",
        type: "Bitmap",
        image: "p9_lz04",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9696, 9706, 9720, 9730, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz05",
        type: "Bitmap",
        image: "p9_lz05",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9720, 9730, 9744, 9754, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz06",
        type: "Bitmap",
        image: "p9_lz06",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9744, 9754, 9768, 9778, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz07",
        type: "Bitmap",
        image: "p9_lz07",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9768, 9778, 9792, 9802, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz08",
        type: "Bitmap",
        image: "p9_lz08",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9792, 9802, 9816, 9826, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz09",
        type: "Bitmap",
        image: "p9_lz09",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9816, 9826, 9840, 9850, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz10",
        type: "Bitmap",
        image: "p9_lz10",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9840, 9850, 9864, 9874, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz11",
        type: "Bitmap",
        image: "p9_lz11",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9864, 9874, 9888, 9898, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz12",
        type: "Bitmap",
        image: "p9_lz12",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9888, 9898, 9912, 9922, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz13",
        type: "Bitmap",
        image: "p9_lz13",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9912, 9922, 9936, 9946, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz14",
        type: "Bitmap",
        image: "p9_lz14",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9936, 9946, 9960, 9970, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz15",
        type: "Bitmap",
        image: "p9_lz15",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9960, 9970, 9984, 9994, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz16",
        type: "Bitmap",
        image: "p9_lz16",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 9984, 9994, 10008, 10018, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz17",
        type: "Bitmap",
        image: "p9_lz17",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 10008, 10018, 10032, 10042, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz18",
        type: "Bitmap",
        image: "p9_lz18",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 10032, 10042, 10056, 10066, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz19",
        type: "Bitmap",
        image: "p9_lz19",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 10056, 10066, 10080, 10090, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz20",
        type: "Bitmap",
        image: "p9_lz20",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 10080, 10090, 10104, 10114, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz21",
        type: "Bitmap",
        image: "p9_lz21",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 10104, 10114, 10128, 10138, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz22",
        type: "Bitmap",
        image: "p9_lz22",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 10128, 10138, 10152, 10162, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz23",
        type: "Bitmap",
        image: "p9_lz23",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 10152, 10162, 10176, 10186, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lz24",
        type: "Bitmap",
        image: "p9_lz24",
        parent: "p9",
        delay: "p9",
        propes: { y: 3435, scaleX: 2, scaleY: 2, alpha: 0 },
        animations: [
          {
            prope: "alpha",
            time: [7e3, 10176, 10186, 10200, 10210, 11e3],
            value: [0, 1, 1, 0]
          }
        ]
      },
      {
        id: "p9_lztext3",
        type: "Bitmap",
        image: "p9_text3",
        parent: "p9",
        delay: "p9",
        propes: { rect: [670, 0, 683, 946], y: 3674 },
        animations: [
          { prope: "alpha", time: [7e3, 9600, 9610, 1e4], value: [1, 0] }
        ]
      },
      {
        id: "p9_lztext2",
        type: "Bitmap",
        image: "p9_text3",
        parent: "p9",
        delay: "p9",
        propes: { rect: [0, 700, 661, 791], x: 59, y: 3747 },
        animations: [
          { prope: "y", time: [7e3, 7500, 9500, 1e4], value: [4e3, 3747] },
          { prope: "alpha", time: [7e3, 9600, 9610, 1e4], value: [1, 0] }
        ]
      },
      {
        id: "p9_lztext1",
        type: "Bitmap",
        image: "p9_text3",
        parent: "p9",
        delay: "p9",
        propes: { rect: [0, 0, 661, 692], x: 55, y: 3759 },
        animations: [
          { prope: "y", time: [7e3, 7500, 9500, 1e4], value: [3859, 3759] },
          { prope: "alpha", time: [7e3, 9600, 9610, 1e4], value: [1, 0] }
        ]
      },
      {
        id: "p9_end1",
        type: "Bitmap",
        image: "p9_text2",
        parent: "p9",
        delay: "p9",
        propes: { rect: [270, 250, 126, 30], x: 312, y: 5936 - t },
        animations: []
      },
      {
        id: "p9_end2",
        type: "Bitmap",
        image: "p9_text2",
        parent: "p9",
        delay: "p9",
        propes: { rect: [270, 306, 126, 30], x: 312, y: 6092 - t },
        animations: [
          {
            prope: "y",
            time: [9900, 10100, 10500, 11900],
            value: [6092 - t, 5992 - t]
          }
        ]
      },
      {
        id: "p9_end3",
        type: "Bitmap",
        image: "p9_text2",
        parent: "p9",
        delay: "p9",
        propes: { rect: [270, 362, 126, 30], x: 312, y: 6148 - t },
        animations: [
          {
            prope: "y",
            time: [9900, 10300, 10700, 11900],
            value: [6148 - t, 6048 - t]
          }
        ]
      },
      {
        id: "p9_end4",
        type: "Bitmap",
        image: "p9_text2",
        parent: "p9",
        delay: "p9",
        propes: { rect: [270, 400, 426, 30], x: 162, y: 6260 - t },
        animations: [
          {
            prope: "y",
            time: [9900, 10700, 11300, 11900],
            value: [6260 - t, 6160 - t]
          }
        ]
      },
      {
        id: "p9_end6",
        type: "Bitmap",
        image: "p9_text2",
        parent: "p9",
        delay: "p9",
        propes: { rect: [400, 310, 231, 50], x: 264, y: 5608 },
        animations: [],
        touchend: function() {
          window.location.search = "fr=reload&t=" + new Date().getTime();
        }
      },
      {
        id: "p9_logo",
        type: "Bitmap",
        image: "p9_text2",
        parent: "p9",
        delay: "p9",
        propes: { rect: [400, 364, 224, 34], x: 264, y: 5686 },
        animations: []
      }
    ],
    loadQueue = null,
    m = {},
    f = function() {
      w(), b(), (window.pages = m);
    },
    _ = function() {
      for (var e = 0; e < u.length; e++) {
        var t = u[e];
        t.propes.mask && (t.propes.mask = m[t.propes.mask]),
          t.image ? (t.propes.image = loadQueue.get(t.image).content) : "",
          t.frames
            ? (t.propes.frames = m[t.frames.split(".")[0]].getSprite(
                t.frames.split(".")[1]
              ))
            : "",
          (m[t.id] = new Hilo[t.type](t.propes)),
          "Graphics" == t.type && t.draw.call(m[t.id]),
          t.touchend &&
            ((m[t.id].touchend = t.touchend),
            m[t.id].on("touchend", function() {
              this.touchend();
            })),
          "null" !== t.parent && m[t.id].addTo(t.parent ? m[t.parent] : a);
      }
      y.initFire();
      v.init();
      // 小球动画
      Hilo.Tween.to(
        m.p0_tipround,
        { y: -40 },
        { time: 1000, repeatDelay: 600, loop: true }
      );
      Hilo.Tween.to(
        m.p0_tipround,
        { alpha: 0 },
        {
          time: 1200,
          repeatDelay: 400,
          loop: true,
          ease: Hilo.Ease.Quad.EaseIn
        }
      );
      for (var e = 0; e < musics.length; e++) {
        var i = musics[e];
        i.el = $("#" + i.id)[0];
      }
    },
    g = function(left, top, zoom) {
      var n = top;
      window.timer = top;

      for (var a = u.length, r = 0; r < a; r++) {
        for (var o = u[r], s = o.animations, l = 0; l < s.length; l++) {
          var animation = s[l],
            value = animation.value,
            time = animation.time,
            delay = c[o.delay ? o.delay : "p1"];

          if (n < time[1] + delay && n > time[0] + delay) {
            m[o.id][animation.prope] = value[0];
            // console.log(o.id, animation.prope, value[0]);
          } else if (
            n < time[time.length - 1] + delay &&
            n > time[time.length - 2] + delay
          ) {
            m[o.id][animation.prope] = value[value.length - 1];
            // console.log(o.id, animation.prope, value[value.length - 1]);
          }

          for (var g = 0; g < value.length - 1; g++) {
            if (n < time[g + 2] + delay && n > time[g + 1] + delay) {
              m[o.id][animation.prope] = x(
                value[g],
                value[g + 1],
                time[g + 1] + delay,
                time[g + 2] + delay,
                n
              );

              // console.log(
              //   o.id,
              //   animation.prope,
              //   x(
              //     value[g],
              //     value[g + 1],
              //     time[g + 1] + delay,
              //     time[g + 2] + delay,
              //     n
              //   )
              // );
            }
          }
        }
      }

      top < 8500 ? ((y.fired = !1), (m.p3.alpha = 0)) : top < 8600 && y.start();

      for (var e = 0; e < musics.length; e++) {
        var v = musics[e];
        v.start && top < v.start && !v.el.paused
          ? ((v.played = ""),
            v.el.pause(),
            D("min pause " + v.el.id + ", top:" + n))
          : v.end && top >= v.end && !v.el.paused
          ? (v.el.pause(),
            (v.played = ""),
            D("max pause " + v.el.id + ", top:" + n))
          : v.start &&
            top >= v.start &&
            !v.played &&
            v.el.paused &&
            ((v.end && top < v.end) || !v.end) &&
            (v.el.play(), (v.played = !0), D("play " + v.el.id + ", top:" + n));
      }
    },
    y = {
      fired: false,
      firing: false,
      time: 50,
      filter: $(".filter"),
      initFire: function() {
        m.fires = [];
        for (var e = 0; e < 39; e++) {
          var i = loadQueue.get("p2_fire" + e).content,
            n = new Hilo.Bitmap({
              x: 0,
              y: t - 1334,
              alpha: 0,
              image: i
            }).addTo(m.p2);
          m.fires.push(n);
        }
      },
      start: function() {
        function e() {
          y.filter.show(), (y.firing = y.fired = !0), r.scrollTo(0, 8650);
          var n = new Date().getTime();
          if (i > 38)
            return (
              (m.fires[38].alpha = 0),
              cancelAnimationFrame(e),
              (y.firing = !1),
              (m.p3.alpha = 1),
              void y.filter.hide()
            );
          if (n - t > y.time) {
            for (var a = 0; a < m.fires.length; a++) m.fires[a].alpha = 0;
            (m.fires[i].alpha = 1), i++, (t = n);
          }
          requestAnimationFrame(e);
        }
        if (!y.firing && !y.fired) {
          y.firing = y.fired = !0;
          var t = new Date().getTime(),
            i = 0;
          $("#z1_m2")[0].play(), e();
        }
      }
    },
    v = {
      arr: [],
      len: 12,
      time: 120,
      init: function() {
        console.log(v.len);
        for (var e = 0; e < v.len; e++) {
          var t = loadQueue.get("p4_craft" + 2 * e).content;
          v.arr.push(
            new Hilo.Bitmap({ x: 0, y: 458, image: t }).addTo(m.p4_craft)
          );
        }
        v.start();
      },
      start: function() {
        function e() {
          var n = new Date().getTime();
          if (n - t > v.time) {
            for (var a = 0; a < v.arr.length; a++) v.arr[a].alpha = 0;
            (v.arr[i].alpha = 1), (i = i + 1 >= v.len ? 0 : i + 1), (t = n);
          }
          requestAnimationFrame(e);
        }
        var t = new Date().getTime(),
          i = 0;
        e();
      }
    },
    x = function(e, t, i, n, a) {
      return e + ((t - e) / (n - i)) * (a - i);
    },
    w = function() {
      i.attr({ width: e, height: t }),
        (a = new Hilo.Stage({ canvas: n, width: e, height: t }));
      var r = new Hilo.Ticker(60);
      r.addTick(a),
        r.addTick(Hilo.Tween),
        r.start(),
        a.enableDOMEvent(Hilo.event.POINTER_START, !0),
        a.enableDOMEvent(Hilo.event.POINTER_MOVE, !0),
        a.enableDOMEvent(Hilo.event.POINTER_END, !0);
    },
    b = function() {
      var e = 0,
        t = $(".cover .progress"),
        i = images.length;
      (loadQueue = new Hilo.LoadQueue()),
        (loadQueue.maxConnections = 5),
        loadQueue.add(images),
        loadQueue
          .on("load", function(n) {
            e++;
            var a = parseInt((e / i) * 100, 10);
            t.html(a + "%");
          })
          .on("error", function(n) {
            e++;
            var a = parseInt((e / i) * 100, 10);
            t.html(a + "%");
          }),
        loadQueue.on("complete", function() {
          _(),
            T(),
            A(),
            $(".cover").addClass("active"),
            setTimeout(function() {
              $(".cover").addClass("none");
            }, 50),
            setTimeout(function() {
              $(".cover").hide(), $(".logo").fadeOut(300);
            }, 1400),
            setTimeout(function() {
              $("audio").off();
            }, 1400);

          var timeY = 0;
          function autoScroll() {
            requestAnimationFrame(x => {
              timeY += 10;
              g(1, timeY);
              autoScroll();
            });
          }
          autoScroll();

        }),
        loadQueue.start();
    },
    T = function() {
      i
        .on("touchstart", E)
        .on("touchmove", S)
        .on("touchend", C),
        (r = new Scroller(g, {
          zooming: !1,
          animating: !0,
          bouncing: !1,
          animationDuration: 1e3
        })),
        r.setDimensions(e, t, e, 59e3 + t + 800 + 200),
        (window.scroller = r);
    },
    E = function(e) {
      var t = e;
      t.stopPropagation(),
        t.preventDefault(),
        (o = !0),
        r.doTouchStart(t.touches, t.timeStamp);
    },
    S = function(e) {
      if (o) {
        var t = e;
        t.stopPropagation(),
          t.preventDefault(),
          r.doTouchMove(t.touches, t.timeStamp, t.scale);
      }
    },
    C = function(e) {
      var t = e;
      r.doTouchEnd(t.timeStamp), (o = !1);
    },
    A = function() {
      $(".filter,.cover").on("touchstart", function(e) {
        e.stopPropagation(), e.preventDefault();
      });
    },
    B = function() {
      for (var e = 0; e < musics.length; e++)
        !(function(e) {
          var t = $("#" + musics[e].id)[0],
            i = function() {
              document.removeEventListener("WeixinJSBridgeReady", i),
                document.removeEventListener("YixinJSBridgeReady", i),
                t.play();
            };

          $(t).on("play", function() {
            this.pause();
          });
          t.play();
          document.addEventListener("WeixinJSBridgeReady", i, !1);
          document.addEventListener("YixinJSBridgeReady", i, !1);
        })(e);
    },
    D = function(e) {
      $(".log").append("<p>" + e + "</p>");
    };
  f(), B(), (window.nyphile = a);

  window.loadQueue = loadQueue;
}

(function() {
  "use strict";
  $(e);
})();
