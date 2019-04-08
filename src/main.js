import "./lib/check";
import Hilo from "hilojs";
import { Scroller } from "scroller";
import pace from "pace";
import { musics, images, videos } from "./constant";
import views from "./views";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

function mix(v0, v1, t1, t2, time) {
  return v0 + ((v1 - v0) / (t2 - t1)) * (time - t1);
}

function LOG(e) {
  $(".log").append("<p>" + e + "</p>");
};

let formData = new FormData()

function initPoster() {
  let uploadImage = '', name = '', address = '';

  //解决ios微信浏览器页面滑动上去不能归位bug
  let focus_hotel_name = false;
  let focus_hotel_address = false;
  let focus_name = false;
  $('.hotel_name').on('focus', function () {
    focus_hotel_name = true
  });
  $('.hotel_address').on('focus', function () {
    focus_hotel_address = true
  });
  $('.name').on('focus', function () {
    focus_name = true
  });
  $('.hotel_name').on('blur', function () {
    focus_hotel_name = false
    setTimeout(function () {
      if (!focus_hotel_name && !focus_hotel_address && !focus_name) {
        $(window).scrollTop(0);
      }
    }, 50);

  });
  $('.hotel_address').on('blur', function () {
    focus_hotel_address = false
    setTimeout(function () {
      if (!focus_hotel_name && !focus_hotel_address && !focus_name) {
        $(window).scrollTop(0);
      }
    }, 50);
  });
  $('.name').on('blur', function () {
    focus_name = false
    setTimeout(function () {
      if (!focus_hotel_name && !focus_hotel_address && !focus_name) {
        $(window).scrollTop(0);
      }
    }, 50);
  });

  $('#wall-back').on('click', e => {
    $('#lansidai').show()
    $('#wall').hide()
  })
  $('#poster-back').on('click', e => {
    $('#lansidai').show()
    $('#poster').hide()
  })

  $('#left-btn').on('click', e => {
    // http://api.hongyu.ren/lsd/posters
    // 参数
    // openid   微信openid
    // w   浏览器可见宽度
    // h   浏览器可见高度
    const data = {
      openid: window.$userinfo && window.$userinfo.openid,
      w: document.body.clientWidth,
      h: document.body.clientHeight,
    }
    NProgress.start();
    $.post('http://api.hongyu.ren/lsd/posters', data, function (response) {
      NProgress.done();
      $('#poster-img').attr('src', response.data.imgurl)
      $('#lansidai').hide()
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

  let clicked = false

  $('#confirm-btn').on('click', e => {
    if (clicked) return
    clicked = true
    // http://api.hongyu.ren/lsd/apply
    let store_name = $('#name')[0].value,
      store_address = $('#address')[0].value,
      name = $('#username')[0].value

    if (!uploadImage) {
      confirm('请上传图片')
      return
    }
    if (!store_name) {
      confirm('请输入酒店名称')
      return
    }
    if (!store_address) {
      confirm('请输入酒店地址')
      return
    }
    if (!name) {
      confirm('请申请人姓名')
      return
    }

    // 参数
    // store_name   酒店名称
    // store_address   酒店地址
    // store_image   酒店图片（base64）
    // name   申请人
    // w   浏览器可见宽度
    // h   浏览器可见高度


    formData.set('openid', window.$userinfo && window.$userinfo.openid)
    formData.set('store_name', store_name)
    formData.set('store_address', store_address)
    formData.set('name', name)
    formData.set('w', document.body.clientWidth)
    formData.set('h', document.body.clientHeight)

    let xhr = new XMLHttpRequest();

    xhr.addEventListener("error", () => {
      NProgress.done();
      clicked = false
    });

    xhr.addEventListener("load", function (e) {
      NProgress.done();
      clicked = false
      const response = JSON.parse(e.target.response)
      if (response.status == 100) {
        $('#wall-image').attr('src', response.data.imgurl)
        $('#form').hide()
        $('#wall').show()
      } else {
        confirm(response.data.err_msg)
      }
    }, false);
    xhr.open("POST", 'http://api.hongyu.ren/lsd/apply');
    NProgress.start();
    xhr.send(formData);

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
      formData.set('image', files[0])
    }
  })
}

function initVideos() {
  function videoAutoPlay(id) {
    let video = document.getElementById(id);
    document.addEventListener("WeixinJSBridgeReady", function () {
      video.play();
      video.pause();
    }, false);

    video.addEventListener('ended', e => {
      $.fn.fullpage.moveNext(true)
    })

  }

  videos.forEach((video) => {
    videoAutoPlay(video.id)
  })
}

function init() {
  const width = 750,
    height = 1334,
    app$ = $("#app");

  const delays = {
    p0: 0, //1
    p1: 0, //6
    p2: height * 6, //6
    p3: height * 12, //8
  };

  let hiloStage, ticker, loadQueue, scroller = null, hiloViews = {};

  let isScrolling = false;

  function initHilo() {
    app$.attr({ width, height });
    hiloStage = new Hilo.Stage({
      canvas: app$[0], width, height,
      // renderType: 'webgl', //会流畅很多 但是有bug。。。
    });
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


    for (let e = 0; e < musics.length; e++) {
      let i = musics[e];
      i.el = $("#" + i.id)[0];
    }
  }

  function scrollerCallback(left, top, zoom) {
    if (top === 21 * height) {
      app$.animate(
        {
          opacity: 0,
        },
        {
          duration: 3000,
          complete: () => {
            app$.hide()
            $('.video').show();
            $('.wp').show();
            $('.wp-inner').fullpage({
              beforeChange: function (e) {
                let nextVideo, currVideo
                if (e.next !== undefined && videos[e.next]) {
                  nextVideo = document.getElementById(videos[e.next].id);

                  if (videos[e.next].id === 'shallen') {
                    $('.common-container, body, html').css({
                      background: '#f0f0f0'
                    })
                  } else {
                    $('.common-container, body, html').css({
                      background: '#000'
                    })
                  }
                }
                if (e.cur !== undefined && videos[e.cur]) {
                  currVideo = document.getElementById(videos[e.cur].id);
                }
                currVideo && currVideo.pause()
                nextVideo && nextVideo.play()
              },
            });

            $('#lansidai').show();
          }
        });

    }

    window.timer = top;
    if (top > height) {
      hiloViews['homepage-sprite'].stop()
    } else {
      if (hiloViews['homepage-sprite'].paused) {
        hiloViews['homepage-sprite'].play()
      }
    }

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

    scroller.setDimensions(width, height, width, 22 * height);
    window.scroller = scroller;
  }

  function removeCoverDefaultTouchEvent() {
    $(".filter,.cover").on("touchstart", function (e) {
      e.stopPropagation(), e.preventDefault();
    });
  }

  // function B() {
  //   for (var e = 0; e < musics.length; e++)
  //     !(function (e) {
  //       var t = $("#" + musics[e].id)[0],
  //         i = function () {
  //           document.removeEventListener("WeixinJSBridgeReady", i),
  //             document.removeEventListener("YixinJSBridgeReady", i),
  //             t.play();
  //         };

  //       $(t).on("play", function () {
  //         this.pause();
  //       });
  //       t.play();
  //       document.addEventListener("WeixinJSBridgeReady", i, !1);
  //       document.addEventListener("YixinJSBridgeReady", i, !1);
  //     })(e);
  // }

  function initMusicsOld() {
    for (let e = 1; e < musics.length; e++)
      !(function (e) {
        let t = $("#" + musics[e].id)[0],
          i = function () {
            document.removeEventListener("WeixinJSBridgeReady", i),
              document.removeEventListener("YixinJSBridgeReady", i),
              t.play();
            t.pause();
            t.currentTime = 0;
            setTimeout(() => {
              t.pause()
              t.currentTime = 0;
            })
          };

        t.addEventListener('ended', () => {
          musics[e].played = ''
        })

        // try {
        //   t.play();
        // } catch (error) {
        //   console.error(error)
        // }
        document.addEventListener("WeixinJSBridgeReady", i, !1);
        document.addEventListener("YixinJSBridgeReady", i, !1);
      })(e);
  }

  function saveInfo() {
    const data = {
      openid: window.$userinfo && window.$userinfo.openid,
      nickname: window.$userinfo && window.$userinfo.nickname,
      headimgurl: window.$userinfo && window.$userinfo.headimgurl,
      sex: window.$userinfo && window.$userinfo.sex,
    }
    $.post('http://api.hongyu.ren/lsd/save', data, function (response) {
      console.log(response)
    })
  }

  initHilo();
  loadResource();
  saveInfo();
  initMusicsOld();
  initVideos();
  initPoster();

  window.pages = hiloViews;
  window.nyphile = app$;
  window.loadQueue = loadQueue;
  window.musics = musics;
  window.videos = videos;
}
$(init)