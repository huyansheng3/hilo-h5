const height = window.innerHeight > 1334 ? 1334 : window.innerHeight

// 1封面背景音效.mp3
// 2等待红绿灯.mp3
// 3手拍打车窗声音.mp3
// 4草丛沙沙，树叶声音.mp3
// 5口哨声.mp3
// 6电动车飞驰而过.mp3

export const musics = [
  { id: "z0_m1", start: 0, end: height * 2 },
  { id: "z1_m1", start: height * 3.5 },
  { id: "z3_m1", start: height * 5.5 },
  { id: "z4_m1", start: height * 7.5 },
  { id: "z5_m1", start: height * 13.5 },
  { id: "z6_m1", start: height * 15.5 },
];

const source = "/";
export const images = [
  { id: "封面.jpg", src: source + "images/封面.jpg" },
  { id: "故事1-1.jpg", src: source + "images/故事1-1.jpg" },
  { id: "故事1-2.jpg", src: source + "images/故事1-2.jpg" },
  { id: "故事1-3.jpg", src: source + "images/故事1-3.jpg" },
  { id: "故事1-4.jpg", src: source + "images/故事1-4.jpg" },
  { id: "故事1-5-1-2.jpg", src: source + "images/故事1-5-1-2.jpg" },
  { id: "故事1.jpg", src: source + "images/故事1.jpg" },
  { id: "故事2-1.jpg", src: source + "images/故事2-1.jpg" },
  { id: "故事2-2.jpg", src: source + "images/故事2-2.jpg" },
  { id: "故事2-3.jpg", src: source + "images/故事2-3.jpg" },
  { id: "故事2-4.jpg", src: source + "images/故事2-4.jpg" },
  { id: "故事2-5-1-2.jpg", src: source + "images/故事2-5-1-2.jpg" },
  { id: "故事2.jpg", src: source + "images/故事2.jpg" },
  { id: "故事3-1.jpg", src: source + "images/故事3-1.jpg" },
  { id: "故事3-2.jpg", src: source + "images/故事3-2.jpg" },
  { id: "故事3-3.jpg", src: source + "images/故事3-3.jpg" },
  { id: "故事3-4.jpg", src: source + "images/故事3-4.jpg" },
  { id: "故事3-5-1-2-3.jpg", src: source + "images/故事3-5-1-2-3.jpg" },
  { id: "故事3-6.jpg", src: source + "images/故事3-6.jpg" },
  { id: "故事3-7.jpg", src: source + "images/故事3-7.jpg" },
  { id: "故事3.jpg", src: source + "images/故事3.jpg" },

];




















