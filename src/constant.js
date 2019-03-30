const height = window.innerHeight > 1334 ? 1334 : window.innerHeight

// 1homepage背景音效.mp3
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

export const videos = [
  { id: "manager", },
  { id: "mother", },
  { id: "student", },

];

const source = "/";
export const images = [
  { id: "homepage.jpg", src: source + "images/homepage.jpg" },
  { id: "story1-1.jpg", src: source + "images/story1-1.jpg" },
  { id: "story1-2.jpg", src: source + "images/story1-2.jpg" },
  { id: "story1-3.jpg", src: source + "images/story1-3.jpg" },
  { id: "story1-4.jpg", src: source + "images/story1-4.jpg" },
  { id: "story1-5-1-2.jpg", src: source + "images/story1-5-1-2.jpg" },
  { id: "story1.jpg", src: source + "images/story1.jpg" },
  { id: "story2-1.jpg", src: source + "images/story2-1.jpg" },
  { id: "story2-2.jpg", src: source + "images/story2-2.jpg" },
  { id: "story2-3.jpg", src: source + "images/story2-3.jpg" },
  { id: "story2-4.jpg", src: source + "images/story2-4.jpg" },
  { id: "story2-5-1-2.jpg", src: source + "images/story2-5-1-2.jpg" },
  { id: "story2.jpg", src: source + "images/story2.jpg" },
  { id: "story3-1.jpg", src: source + "images/story3-1.jpg" },
  { id: "story3-2.jpg", src: source + "images/story3-2.jpg" },
  { id: "story3-3.jpg", src: source + "images/story3-3.jpg" },
  { id: "story3-4.jpg", src: source + "images/story3-4.jpg" },
  { id: "story3-5-1-2-3.jpg", src: source + "images/story3-5-1-2-3.jpg" },
  { id: "story3-6.jpg", src: source + "images/story3-6.jpg" },
  { id: "story3-7.jpg", src: source + "images/story3-7.jpg" },
  { id: "story3.jpg", src: source + "images/story3.jpg" },

];




















