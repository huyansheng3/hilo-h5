const height = 1334

// 1homepage背景音效.mp3
// 2等待红绿灯.mp3
// 3手拍打车窗声音.mp3
// 4草丛沙沙，树叶声音.mp3
// 5口哨声.mp3
// 6电动车飞驰而过.mp3
// 7硬地面奔跑_

export const musics = [
  { id: "z0_m1", start: 0, end: height * 21 },
  { id: "z1_m1", start: height * 3.5, end: height * 4 },
  { id: "z3_m1", start: height * 5, end: height * 7 },
  { id: "z4_m1", start: height * 7.5, end: height * 8.5 },
  { id: "z5_m1", start: height * 13.5, end: height * 15 },
  { id: "z6_m1", start: height * 15.5, end: height * 17 },
  { id: "z7_m1", start: height * 8.5, end: height * 9.5 },
];

// http://hongyu-static.oss-cn-beijing.aliyuncs.com/2019/03/lsd/video/manager.mp4
// http://hongyu-static.oss-cn-beijing.aliyuncs.com/2019/03/lsd/video/student.mp4
// http://hongyu-static.oss-cn-beijing.aliyuncs.com/2019/03/lsd/video/mum.mp4
// http://hongyu-static.oss-cn-beijing.aliyuncs.com/2019/03/lsd/video/shallen.mp4

export const videos = [
  { id: "mother", src: 'https://static-1251144334.cos.ap-guangzhou.myqcloud.com/201903/lsd/mum.mp4' },
  { id: "student", src: 'https://static-1251144334.cos.ap-guangzhou.myqcloud.com/201903/lsd/student.mp4' },
  { id: "manager", src: 'https://static-1251144334.cos.ap-guangzhou.myqcloud.com/201903/lsd/manager.mp4' },
  { id: 'shallen', src: 'https://static-1251144334.cos.ap-guangzhou.myqcloud.com/201903/lsd/shallen.mp4' }
];

const source = "/";
const androidImage = { id: "homepage-android-texture.jpg", src: source + "images/homepage-android-texture.jpg" }
const iosImage = { id: "homepage-texture.jpg", src: source + "images/homepage-texture.jpg" }

const homepageImage = $.os.android ? androidImage : iosImage

export const images = [
  homepageImage,
  { id: "story1-1-texture.jpg", src: source + "images/story1-1-texture.jpg" },
  { id: "story1-2-texture.jpg", src: source + "images/story1-2-texture.jpg" },
  { id: "story1-3.jpg", src: source + "images/story1-3.jpg" },
  { id: "story1-4-texture.jpg", src: source + "images/story1-4-texture.jpg" },
  { id: "story1-5-texture.jpg", src: source + "images/story1-5-texture.jpg" },
  { id: "story1.jpg", src: source + "images/story1.jpg" },
  { id: "story2-1-texture.jpg", src: source + "images/story2-1-texture.jpg" },
  { id: "story2-2.jpg", src: source + "images/story2-2.jpg" },
  { id: "story2-3.jpg", src: source + "images/story2-3.jpg" },
  { id: "story2-4.jpg", src: source + "images/story2-4.jpg" },
  { id: "story2-5-m-texture.jpg", src: source + "images/story2-5-m-texture.jpg" },
  { id: "story2.jpg", src: source + "images/story2.jpg" },
  { id: "story3-1.jpg", src: source + "images/story3-1.jpg" },
  { id: "story3-2.jpg", src: source + "images/story3-2.jpg" },
  { id: "story3-3.jpg", src: source + "images/story3-3.jpg" },
  { id: "story3-4-texture.jpg", src: source + "images/story3-4-texture.jpg" },
  { id: "story3-5-texture.jpg", src: source + "images/story3-5-texture.jpg" },
  { id: "story3-6-texture.jpg", src: source + "images/story3-6-texture.jpg" },
  { id: "story3-7-texture.jpg", src: source + "images/story3-7-texture.jpg" },
  { id: "story3-8.jpg", src: source + "images/story3-8.jpg" },
  { id: "story3.jpg", src: source + "images/story3.jpg" },

];




















