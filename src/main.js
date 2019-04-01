import "./lib/check";
import Hilo from "hilojs";
import { Scroller } from "scroller";
import pace from "pace";
import { musics, images, videos } from "./constant";
import views from "./views";
import AnimateCurve, { coord } from './lib/bezier';

function initVideos() {
  for (let i = 0, len = videos.length; i < len; i++) {
    let video = videos[i]
    if (video.wechatVideo) return
    let wechatVideo = new wechatH5Video(video.src, {
      context: video.id,
      mask: true,
      fill: true,
      poster: `/images/${video.id}.png`,
      playBtn: true,
      jumpBtn: false,
      autoClose: false,
      canvas: false,
      isRotate: false,
    });
    wechatVideo.load();
    video.wechatVideo = wechatVideo
  }
}

function mix(v0, v1, t1, t2, time) {
  return v0 + ((v1 - v0) / (t2 - t1)) * (time - t1);
}

function LOG(e) {
  $(".log").append("<p>" + e + "</p>");
};

function initPoster() {
  let uploadImage = '', name = '', address = '';

  $('#left-btn').on('click', e => {
    var openid = "<?php echo $userinfo['openid'];?>";

    // 详细参考 https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842
    // const oauthUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx520c15f417810387&redirect_uri=${encodeURI(location.href)}&response_type=code&scope=snsapi_base&state=authed#wechat_redirect`
    // location.href = oauthUrl

    // http://api.hongyu.ren/lsd/posters
    // 参数
    // openid   微信openid
    // w   浏览器可见宽度
    // h   浏览器可见高度
    const data = {
      openid: openid,
      w: $(window).width(),
      h: $(window).height(),
    }

    $.post('http://api.hongyu.ren/lsd/posters', data, function (response) {
      console.log(response)
      $('#lansidai').hide()
      $('#count').text(1233)
      $('#poster').show()
    })
  })

  $('#right-btn').on('click', e => {
    $('#lansidai').hide()
    $('#form').show()
  })

  $('#upload-btn').on('click', e => {
    $('#upload').click()
  })

  $('#confirm-btn').on('click', e => {
    // http://api.hongyu.ren/lsd/apply

    name = $('#name')[0].value
    address = $('#address')[0].value
    address = $('#username')[0].value

    // 参数
    // store_name   酒店名称
    // store_address   酒店地址
    // store_image   酒店图片（base64）
    // name   申请人
    // w   浏览器可见宽度
    // h   浏览器可见高度

    const data = {
      store_name: $('#name')[0].value,
      store_address: $('#address')[0].value,
      store_image: uploadImage,
      name: $('#username')[0].value,
      w: $(window).width(),
      h: $(window).height(),
    }

    $.post('http://api.hongyu.ren/lsd/apply', data, function (response) {
      console.log(response)
      // response.image
      $('#wall-image').attr('src', response.imgurl)
      $('#form').hide()
      $('#wall').show()
    })
  })

  $('#upload').on('change', e => {
    const files = e.target.files
    if (files && files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        uploadImage = e.target.result
        $('#upload-btn').attr('src', e.target.result);
      };
      reader.readAsDataURL(files[0]);
    }
  })
}

function videoAutoPlay(id) {
  var video = document.getElementById(id);
  document.addEventListener("WeixinJSBridgeReady", function () {
    video.play();
    var timer = setInterval(function () {
      if (video.currentTime) {
        video.pause();
        clearInterval(timer)
      }
    }, 50)

  }, false);
}

videos.forEach((video) => {
  videoAutoPlay(video.id)
})

function init() {
  const width = 750,
    height = 1334,
    app$ = $("#app");

  const delays = {
    p0: 0, //1
    p1: height, //6
    p2: height * 7, //6
    p3: height * 13, //8
  };

  let hiloStage, ticker, loadQueue, scroller = null, hiloViews = {};

  let isScrolling = false;

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
    let progress = 0,
      progress$ = $(".cover .progress"),
      progressBar$ = $(".cover .progress-bar"),
      len = images.length;
    loadQueue = new Hilo.LoadQueue();
    loadQueue.maxConnections = 5
    loadQueue.add(images)

    loadQueue
      .on("load", function (n) {
        progress++;
        let currentProgress = parseInt((progress / len) * 100, 10);
        progress$.html(currentProgress + "%");
        progressBar$.css({ width: currentProgress + "%" })
      })
      .on("error", function (n) {
        progress++;
        let currentProgress = parseInt((progress / len) * 100, 10);
        progress$.html(currentProgress + "%");
        progressBar$.css({ width: currentProgress + "%" })
      }),
      loadQueue.on("complete", function () {
        initViews();
        initEvents();
        removeCoverDefaultTouchEvent();
        $(".cover").addClass("active");
        setTimeout(function () {
          $(".cover").addClass("none");
        }, 50);
        setTimeout(function () {
          $(".cover").hide();
          $(".logo").fadeOut(300);
        }, 1400);
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

    let P1 = coord(380, 500),
      P2 = coord(300, 780),
      P3 = coord(180, 570),
      P4 = coord(400, 900)

    function drawStar(pos) {
      hiloViews.star.x = pos.x
      hiloViews.star.y = pos.y
      if (hiloViews.star.scaleX > 3) {
        hiloViews.star.scaleX = 1
        hiloViews.star.scaleY = 1
      }

      if (hiloViews.star.rotation > 90) {
        hiloViews.star.rotation = 0
      }

      hiloViews.star.rotation = hiloViews.star.rotation + 0.5
      hiloViews.star.scaleX = hiloViews.star.scaleX + 0.02
      hiloViews.star.scaleY = hiloViews.star.scaleY + 0.02
    }

    const animateCurve = new AnimateCurve({ P1, P2, P3, P4, callback: drawStar })

    animateCurve.start()

    for (let e = 0; e < musics.length; e++) {
      let i = musics[e];
      i.el = $("#" + i.id)[0];
    }
  }

  function scrollerCallback(left, top, zoom) {
    if (top === 20 * height) {
      app$.hide();
      $('.video').show();

      $('#lansidai').show();
      $('.common-container').css({
        'overflow-y': 'scroll'
      })
    }

    window.timer = top;

    for (let len = views.length, i = 0; i < len; i++) {
      for (let view = views[i], animations = view.animations, j = 0; j < animations.length; j++) {
        let animation = animations[j],
          value = animation.value,
          time = animation.time,
          delay = delays[view.delay ? view.delay : "p1"];

        if (top < time[1] + delay && top > time[0] + delay) {
          hiloViews[view.id][animation.prope] = value[0];
        } else if (
          top < time[time.length - 1] + delay &&
          top > time[time.length - 2] + delay
        ) {
          hiloViews[view.id][animation.prope] = value[value.length - 1];
        }

        for (let g = 0; g < value.length - 1; g++) {
          if (top < time[g + 2] + delay && top > time[g + 1] + delay) {
            hiloViews[view.id][animation.prope] = mix(
              value[g],
              value[g + 1],
              time[g + 1] + delay,
              time[g + 2] + delay,
              top
            );
          }
        }
      }
    }

    for (let e = 0; e < musics.length; e++) {
      let v = musics[e];
      v.start && top < v.start && !v.el.paused
        ? ((v.played = ""),
          v.el.pause(),
          LOG("min pause " + v.el.id + ", top:" + top))
        : v.end && top >= v.end && !v.el.paused
          ? (v.el.pause(),
            (v.played = ""),
            LOG("max pause " + v.el.id + ", top:" + top))
          : v.start &&
          top >= v.start &&
          !v.played &&
          v.el.paused &&
          ((v.end && top < v.end) || !v.end) &&
          (v.el.play(), (v.played = !0), LOG("play " + v.el.id + ", top:" + top));
    }
  }

  function initEvents() {
    scroller = new Scroller(scrollerCallback, {
      zooming: !1,
      animating: !0,
      bouncing: !1,
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

    scroller.setDimensions(width, height, width, 21 * height);
    window.scroller = scroller;
  }

  function removeCoverDefaultTouchEvent() {
    $(".filter,.cover").on("touchstart", function (e) {
      e.stopPropagation(), e.preventDefault();
    });
  }

  function initMusics() {
    for (let e = 1; e < musics.length; e++) {
      let music = musics[e]
      function handleBridgeReady() {
        document.removeEventListener("WeixinJSBridgeReady", handleBridgeReady)
        document.removeEventListener("YixinJSBridgeReady", handleBridgeReady)
        music.el.play();
      };
      $(`#${music.id}`).on("play", function () {
        this.pause();
      });
      document.addEventListener("WeixinJSBridgeReady", handleBridgeReady, false);
      document.addEventListener("YixinJSBridgeReady", handleBridgeReady, false);
    }

    let firstTouch = true;
    $("body").on("touchstart", function (e) {
      if (firstTouch) {
        firstTouch = false;
        document.getElementById('z0_m1').play();
      }
    });

  }

  function initMusicsOld() {
    for (var e = 1; e < musics.length; e++)
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

        t.addEventListener('ended', () => {
          musics[e].played = ''
        })

        try {
          t.play();
        } catch (error) {
          console.error(error)
        }
        document.addEventListener("WeixinJSBridgeReady", i, !1);
        document.addEventListener("YixinJSBridgeReady", i, !1);
      })(e);
  }

  initHilo();
  loadResource();
  initMusicsOld();

  //必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
  document.addEventListener("WeixinJSBridgeReady", function () {
    document.getElementById('z0_m1').play();
    musics[0].played = true
  }, false);

  initPoster();

  window.pages = hiloViews;
  window.nyphile = app$;
  window.loadQueue = loadQueue;
  window.musics = musics;
  window.videos = videos;
}

$(init)