const s = "https://static.ws.126.net/163/f2e/news/dada_protection/";

const l = [
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z0_m1.mp3?3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z1_m1.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z1_m2.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z1_m3.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z3_m1.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z3_m2.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z3_m3.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z3_m4.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z4_m1.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z5_m1.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z5_m2.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z6_m1.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z7_m1.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z7_m2.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z9_m1.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z9_m2.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z9_m3.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z10_m1.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z10_m2.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z10_m3.mp3",
  "https://static.ws.126.net/163/f2e/news/dada_protection/img/z12_m1.mp3"
];

const download = require("download");

l.forEach(item => {
  const filename = item.replace(
    "https://static.ws.126.net/163/f2e/news/dada_protection/img/",
    ""
  );
  download(item, "../public/mp3", { filename })
    .then(() => {
      console.log(`${filename} download`);
    })
    .catch(error => {
      console.error(error);
    });
});
