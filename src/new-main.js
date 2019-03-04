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

function e() {
  const width = 750,
    height = window.innerHeight > 1334 ? 1334 : window.innerHeight,
    app$ = $("#app"),
    scroller = null,
    hiloViews = {};

  function initHilo() {
    app$.attr({ width, height });
    var hiloStage = new Hilo.Stage({ canvas: n, width: e, height: t });
    var tikcer = new Hilo.Ticker(60);
    tikcer.addTick(hiloStage);
    tikcer.addTick(Hilo.Tween);
    tikcer.start();
    hiloStage.enableDOMEvent(Hilo.event.POINTER_START, !0);
    hiloStage.enableDOMEvent(Hilo.event.POINTER_MOVE, !0);
    hiloStage.enableDOMEvent(Hilo.event.POINTER_END, !0);
  }

  function autoPlay() {
    var timeY = 0;
    function autoScroll() {
      requestAnimationFrame(x => {
        timeY += 10;
        g(1, timeY);
        autoScroll();
      });
    }
    autoScroll();
  }

  function loadResource() {
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
        initViews();
        initEvents();
        removeCoverDefaultTouchEvent(),
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
      }),
      loadQueue.start();
  }

  function initViews() {
    for (var e = 0; e < views.length; e++) {
      var view = views[e];
      if (view.propes.mask) {
        view.propes.mask = hiloViews[view.propes.mask];
      }

      view.image ? (view.propes.image = loadQueue.get(view.image).content) : "";
      view.frames
        ? (view.propes.frames = hiloViews[view.frames.split(".")[0]].getSprite(
            view.frames.split(".")[1]
          ))
        : "";
      hiloViews[view.id] = new Hilo[view.type](view.propes);
      "Graphics" == view.type && view.draw.call(hiloViews[view.id]);
      view.touchend &&
        ((hiloViews[view.id].touchend = view.touchend),
        hiloViews[view.id].on("touchend", function() {
          this.touchend();
        }));

      if ("null" !== view.parent) {
        debugger;
        hiloViews[view.id].addTo(view.parent ? hiloViews[view.parent] : a);
      }
    }

    y.initFire();
    v.init();
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

  function initEvents() {
    E = function(e) {
      var t = e;
      t.stopPropagation(),
        t.preventDefault(),
        (o = !0),
        r.doTouchStart(t.touches, t.timeStamp);
    };
    S = function(e) {
      if (o) {
        var t = e;
        t.stopPropagation(),
          t.preventDefault(),
          r.doTouchMove(t.touches, t.timeStamp, t.scale);
      }
    };
    C = function(e) {
      var t = e;
      r.doTouchEnd(t.timeStamp), (o = !1);
    };

    app$
      .on("touchstart", E)
      .on("touchmove", S)
      .on("touchend", C);

    scroller = new Scroller(g, {
      zooming: !1,
      animating: !0,
      bouncing: !1,
      animationDuration: 1e3
    });

    scroller.setDimensions(e, t, e, 59e3 + t + 800 + 200);
    window.scroller = scroller;
  }

  function removeCoverDefaultTouchEvent() {
    $(".filter,.cover").on("touchstart", function(e) {
      e.stopPropagation(), e.preventDefault();
    });
  }

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
    loadQueue = null;

  var y = {
    fired: false,
    firing: false,
    time: 50,
    filter: $(".filter"),
    initFire: function() {
      hiloViews.fires = [];
      for (var e = 0; e < 39; e++) {
        var i = loadQueue.get("p2_fire" + e).content,
          n = new Hilo.Bitmap({
            x: 0,
            y: t - 1334,
            alpha: 0,
            image: i
          }).addTo(hiloViews.p2);
        hiloViews.fires.push(n);
      }
    },
    start: function() {
      function e() {
        y.filter.show(), (y.firing = y.fired = !0), r.scrollTo(0, 8650);
        var n = new Date().getTime();
        if (i > 38)
          return (
            (hiloViews.fires[38].alpha = 0),
            cancelAnimationFrame(e),
            (y.firing = !1),
            (hiloViews.p3.alpha = 1),
            void y.filter.hide()
          );
        if (n - t > y.time) {
          for (var a = 0; a < hiloViews.fires.length; a++)
            hiloViews.fires[a].alpha = 0;
          (hiloViews.fires[i].alpha = 1), i++, (t = n);
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
  };
  var v = {
    arr: [],
    len: 12,
    time: 120,
    init: function() {
      console.log(v.len);
      for (var e = 0; e < v.len; e++) {
        var t = loadQueue.get("p4_craft" + 2 * e).content;
        v.arr.push(
          new Hilo.Bitmap({ x: 0, y: 458, image: t }).addTo(hiloViews.p4_craft)
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
  };

  function initMusics() {
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
  }

  function updateLogs(e) {
    $(".log").append("<p>" + e + "</p>");
  }

  initHilo();
  loadResource();
  window.pages = hiloViews;
  initMusics();
  window.nyphile = app$;
  window.loadQueue = loadQueue;
}

(function() {
  "use strict";
  $(e);
})();
