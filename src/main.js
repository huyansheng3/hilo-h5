import "./lib/flexible";
import "./lib/check";
import Hilo from "hilojs";
import { Scroller } from "scroller";
import pace from "pace";
import { musics, images } from "./constant";
import views from "./views";

function mix(e, t, i, n, a) {
  return e + ((t - e) / (n - i)) * (a - i);
}

function init() {
  const width = 750,
    height = window.innerHeight > 1334 ? 1334 : window.innerHeight,
    app$ = $("#app");

  let hiloStage, ticker, loadQueue, scroller = null, hiloViews = {};

  let isScrolling = false,
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
    };

  function initHilo() {
    app$.attr({ width, height });
    hiloStage = new Hilo.Stage({ canvas: app$[0], width, height });
    ticker = new Hilo.Ticker(60);
    ticker.addTick(hiloStage);
    ticker.addTick(Hilo.Tween);
    ticker.start();
    hiloStage.enableDOMEvent(Hilo.event.POINTER_START, !0);
    hiloStage.enableDOMEvent(Hilo.event.POINTER_MOVE, !0);
    hiloStage.enableDOMEvent(Hilo.event.POINTER_END, !0);
  }

  function loadResource() {
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
        initViews();
        initEvents();
        removeCoverDefaultTouchEvent(),
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
      }),
      loadQueue.start();
  }

  function initViews() {
    for (var e = 0; e < views.length; e++) {
      var view = views[e];

      if (view.propes.mask) {
        view.propes.mask = hiloViews[view.propes.mask];
      }

      if (view.image) {
        view.propes.image = loadQueue.get(view.image).content
      }

      if (view.frames) {
        view.propes.frames = hiloViews[view.frames.split(".")[0]].getSprite(
          view.frames.split(".")[1]
        )
      }

      hiloViews[view.id] = new Hilo[view.type](view.propes);

      if (view.type === "Graphics") {
        view.draw.call(hiloViews[view.id]);
      }

      if (view.touchend) {
        hiloViews[view.id].touchend = view.touchend

        hiloViews[view.id].on("touchend", function () {
          this.touchend();
        })
      }

      if ("null" !== view.parent) {
        hiloViews[view.id].addTo(view.parent ? hiloViews[view.parent] : hiloStage);
      }
    }

    // 小球动画
    Hilo.Tween.to(
      hiloViews.p0_tipround,
      { y: -40 },
      { time: 1000, repeatDelay: 600, loop: true }
    );
    Hilo.Tween.to(
      hiloViews.p0_tipround,
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
  }



  function scrollerCallback(left, top, zoom) {
    var n = top;
    window.timer = top;

    for (var a = views.length, r = 0; r < a; r++) {
      for (var o = views[r], s = o.animations, l = 0; l < s.length; l++) {
        var animation = s[l],
          value = animation.value,
          time = animation.time,
          delay = c[o.delay ? o.delay : "p1"];

        if (n < time[1] + delay && n > time[0] + delay) {
          hiloViews[o.id][animation.prope] = value[0];
          // console.log(o.id, animation.prope, value[0]);
        } else if (
          n < time[time.length - 1] + delay &&
          n > time[time.length - 2] + delay
        ) {
          hiloViews[o.id][animation.prope] = value[value.length - 1];
          // console.log(o.id, animation.prope, value[value.length - 1]);
        }

        for (var g = 0; g < value.length - 1; g++) {
          if (n < time[g + 2] + delay && n > time[g + 1] + delay) {
            hiloViews[o.id][animation.prope] = x(
              value[g],
              value[g + 1],
              time[g + 1] + delay,
              time[g + 2] + delay,
              n
            );
          }
        }
      }
    }

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
  }

  function initEvents() {
    scroller = new Scroller(scrollerCallback, {
      zooming: !1,
      animating: !0,
      bouncing: !1,
      animationDuration: 1e3
    });

    const handleTouchStart = function (e) {
      e.stopPropagation();
      e.preventDefault();
      isScrolling = true;
      scroller.doTouchStart(e.touches, e.timeStamp);
    };
    const handleTouchMove = function (e) {
      if (isScrolling) {
        e.stopPropagation();
        e.preventDefault();
        scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
      }
    };
    const handleTouchEnd = function (e) {
      scroller.doTouchEnd(e.timeStamp), (isScrolling = false);
    };

    app$
      .on("touchstart", handleTouchStart)
      .on("touchmove", handleTouchMove)
      .on("touchend", handleTouchEnd);

    scroller.setDimensions(width, height, width, 59e3 + height + 800 + 200);
    window.scroller = scroller;
  }

  function removeCoverDefaultTouchEvent() {
    $(".filter,.cover").on("touchstart", function (e) {
      e.stopPropagation(), e.preventDefault();
    });
  }

  function initMusics() {
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
  }

  function updateLogs(e) {
    $(".log").append("<p>" + e + "</p>");
  }

  initHilo();
  loadResource();
  // window.pages = hiloViews;
  // initMusics();
  // window.nyphile = app$;
  // window.loadQueue = loadQueue;
}

init()