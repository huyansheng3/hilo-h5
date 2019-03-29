import "./lib/flexible";
import "./lib/check";
import Hilo from "hilojs";
import { Scroller } from "scroller";
import pace from "pace";
import { musics, images } from "./constant";
import u from './views'

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

    loadQueue = null,
    m = {},
    f = function () {
      w(), b(), (window.pages = m);
    },
    _ = function () {
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
            m[t.id].on("touchend", function () {
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
    g = function (left, top, zoom) {
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
      initFire: function () {
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
      start: function () {
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
            (m.fires[i].alpha = 1), i++ , (t = n);
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
      init: function () {
        console.log(v.len);
        for (var e = 0; e < v.len; e++) {
          var t = loadQueue.get("p4_craft" + 2 * e).content;
          v.arr.push(
            new Hilo.Bitmap({ x: 0, y: 458, image: t }).addTo(m.p4_craft)
          );
        }
        v.start();
      },
      start: function () {
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
    x = function (e, t, i, n, a) {
      return e + ((t - e) / (n - i)) * (a - i);
    },
    w = function () {
      i.attr({ width: e, height: t }),
        (a = new Hilo.Stage({
          canvas: n,
          width: e,
          height: t
        }));
      var r = new Hilo.Ticker(60);
      r.addTick(a),
        r.addTick(Hilo.Tween),
        r.start(),
        a.enableDOMEvent(Hilo.event.POINTER_START, !0),
        a.enableDOMEvent(Hilo.event.POINTER_MOVE, !0),
        a.enableDOMEvent(Hilo.event.POINTER_END, !0);
    },
    b = function () {
      var e = 0,
        t = $(".cover .progress"),
        i = images.length;
      (loadQueue = new Hilo.LoadQueue()),
        (loadQueue.maxConnections = 5),
        loadQueue.add(images),
        loadQueue
          .on("load", function (n) {
            e++;
            var a = parseInt((e / i) * 100, 10);
            t.html(a + "%");
          })
          .on("error", function (n) {
            e++;
            var a = parseInt((e / i) * 100, 10);
            t.html(a + "%");
          }),
        loadQueue.on("complete", function () {
          _(),
            T(),
            A(),
            $(".cover").addClass("active"),
            setTimeout(function () {
              $(".cover").addClass("none");
            }, 50),
            setTimeout(function () {
              $(".cover").hide(), $(".logo").fadeOut(300);
            }, 1400),
            setTimeout(function () {
              $("audio").off();
            }, 1400);

          // var timeY = 0;
          // function autoScroll() {
          //   requestAnimationFrame(x => {
          //     timeY += 50;
          //     g(1, timeY);
          //     autoScroll();
          //   });
          // }
          // autoScroll();
        }),
        loadQueue.start();
    },
    T = function () {
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
    E = function (e) {
      var t = e;
      t.stopPropagation(),
        t.preventDefault(),
        (o = !0),
        r.doTouchStart(t.touches, t.timeStamp);
    },
    S = function (e) {
      if (o) {
        var t = e;
        t.stopPropagation(),
          t.preventDefault(),
          r.doTouchMove(t.touches, t.timeStamp, t.scale);
      }
    },
    C = function (e) {
      var t = e;
      r.doTouchEnd(t.timeStamp), (o = !1);
    },
    A = function () {
      $(".filter,.cover").on("touchstart", function (e) {
        e.stopPropagation(), e.preventDefault();
      });
    },
    B = function () {
      for (var e = 0; e < musics.length; e++)
        !(function (e) {
          var t = $("#" + musics[e].id)[0],
            i = function () {
              document.removeEventListener("WeixinJSBridgeReady", i),
                document.removeEventListener("YixinJSBridgeReady", i),
                t.play();
            };

          $(t).on("play", function () {
            this.pause();
          });
          t.play();
          document.addEventListener("WeixinJSBridgeReady", i, !1);
          document.addEventListener("YixinJSBridgeReady", i, !1);
        })(e);
    },
    D = function (e) {
      $(".log").append("<p>" + e + "</p>");
    };
  f(), B(), (window.nyphile = a);

  window.loadQueue = loadQueue;
}

(function () {
  "use strict";
  $(e);
})();
