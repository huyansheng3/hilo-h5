(function(e){function t(t){for(var i,o,s=t[0],p=t[1],d=t[2],l=0,c=[];l<s.length;l++)o=s[l],n[o]&&c.push(n[o][0]),n[o]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(e[i]=p[i]);u&&u(t);while(c.length)c.shift()();return a.push.apply(a,d||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],i=!0,s=1;s<r.length;s++){var p=r[s];0!==n[p]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var i={},n={app:0},a=[];function o(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=i,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(r,i,function(t){return e[t]}.bind(null,i));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=p;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("28a5");var i=r("e814"),n=r.n(i);r("ac6a"),r("cadf"),r("551c"),r("f751"),r("097d");(function(){function e(){t(),r(),i()}function t(){n=$("#common-landscape"),a=$("#common-pc"),$("#common-share"),$(".common-container")}function r(){var e=function(){switch(window.orientation){case 0:case 180:n.hide();break;case-90:case 90:n.show()}};e(),window.addEventListener("onorientationchange"in window?"orientationchange":"resize",e,!1)}function i(){$.os.phone||$.os.tablet||(new QRCode(a.children()[0]).makeCode(location.href),$("body").children().hide(),a.show())}var n,a;$(e)})();var a,o,s=r("bfc5"),p=r.n(s),d=r("5664"),u=(r("7bdd"),1334),l=[{id:"z0_m1",start:0,end:3*u},{id:"z1_m1",start:3.5*u,end:4*u},{id:"z3_m1",start:5.5*u,end:7*u},{id:"z4_m1",start:7.5*u,end:8.5*u},{id:"z5_m1",start:13.5*u,end:15*u},{id:"z6_m1",start:15.5*u,end:17*u},{id:"z7_m1",start:8.5*u,end:9.5*u}],c=[{id:"mother",src:"http://hongyu-static.oss-cn-beijing.aliyuncs.com/2019/03/lsd/video/mum.mp4"},{id:"manager",src:"http://hongyu-static.oss-cn-beijing.aliyuncs.com/2019/03/lsd/video/manager.mp4"},{id:"student",src:"http://hongyu-static.oss-cn-beijing.aliyuncs.com/2019/03/lsd/video/student.mp4"},{id:"shallen",src:"http://hongyu-static.oss-cn-beijing.aliyuncs.com/2019/03/lsd/video/shallen.mp4"}],m="/",y=[{id:"homepage-texture.jpg",src:m+"images/homepage-texture.jpg"},{id:"star.png",src:m+"images/star.png"},{id:"story1-1-texture.jpg",src:m+"images/story1-1-texture.jpg"},{id:"story1-2-texture.jpg",src:m+"images/story1-2-texture.jpg"},{id:"story1-3.jpg",src:m+"images/story1-3.jpg"},{id:"story1-4-texture.jpg",src:m+"images/story1-4-texture.jpg"},{id:"story1-5-texture.jpg",src:m+"images/story1-5-texture.jpg"},{id:"story1.jpg",src:m+"images/story1.jpg"},{id:"story2-1-texture.jpg",src:m+"images/story2-1-texture.jpg"},{id:"story2-2.jpg",src:m+"images/story2-2.jpg"},{id:"story2-3.jpg",src:m+"images/story2-3.jpg"},{id:"story2-4.jpg",src:m+"images/story2-4.jpg"},{id:"story2-5-1-2.jpg",src:m+"images/story2-5-1-2.jpg"},{id:"story2.jpg",src:m+"images/story2.jpg"},{id:"story3-1.jpg",src:m+"images/story3-1.jpg"},{id:"story3-2.jpg",src:m+"images/story3-2.jpg"},{id:"story3-3.jpg",src:m+"images/story3-3.jpg"},{id:"story3-4-texture.jpg",src:m+"images/story3-4-texture.jpg"},{id:"story3-5-texture.jpg",src:m+"images/story3-5-texture.jpg"},{id:"story3-6-texture.jpg",src:m+"images/story3-6-texture.jpg"},{id:"story3-7-texture.jpg",src:m+"images/story3-7-texture.jpg"},{id:"story3.jpg",src:m+"images/story3.jpg"}],g=r("75fc"),f=1334,h=[{id:"p0",type:"Container",propes:{},delay:"p0",animations:[{prope:"y",time:[0,0,f,f],value:[0,-f]},{prope:"alpha",time:[0,0,f,f],value:[1,0]}]},{id:"homepage-texture",type:"TextureAtlas",image:"homepage-texture.jpg",parent:"null",propes:{frames:[[6018,2,750,1334],[6018,2,750,1334],[6770,2,750,1334],[7522,2,750,1334],[8274,2,750,1334],[9026,2,750,1334],[9778,2,750,1334],[10530,2,750,1334],[11282,2,750,1334],[12034,2,750,1334],[12786,2,750,1334],[2,2,750,1334],[754,2,750,1334],[1506,2,750,1334],[2258,2,750,1334],[3010,2,750,1334],[3762,2,750,1334],[4514,2,750,1334],[5266,2,750,1334],[13538,2,750,1334]],sprites:{sprite:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]}},animations:{}},{id:"homepage-sprite",type:"Sprite",frames:"homepage-texture.sprite",parent:"p0",delay:"p0",propes:{x:0,interval:60,timeBased:!0},animations:[]}],v=h,j=750,x=1334,w=[{id:"p1",type:"Container",propes:{},delay:"p1",animations:[{prope:"y",time:[0,0,6*x,6*x],value:[0,-6*x]},{prope:"alpha",time:[0,5.5*x,6*x,6*x],value:[1,0]}]},{id:"story1.jpg",type:"Bitmap",image:"story1.jpg",parent:"p1",delay:"p1",propes:{y:0},animations:[]},{id:"story1-1-texture",type:"TextureAtlas",image:"story1-1-texture.jpg",parent:"null",propes:{frames:[[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2]}},animations:{}},{id:"story1-1-sprite",type:"Sprite",frames:"story1-1-texture.sprite",parent:"p1",delay:"p1",propes:{interval:200,timeBased:!0,y:x},animations:{}},{id:"story1-2-texture",type:"TextureAtlas",image:"story1-2-texture.jpg",parent:"null",propes:{frames:[[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1]}},animations:{}},{id:"story1-2-sprite",type:"Sprite",frames:"story1-2-texture.sprite",parent:"p1",delay:"p1",propes:{interval:200,timeBased:!0,y:2*x,x:j/2,pivotX:j/2,pivotY:x/2,scaleX:1,scaleY:1},animations:[{prope:"scaleX",time:[0,1*x,3*x,3*x],value:[1,3]},{prope:"scaleY",time:[0,1*x,3*x,3*x],value:[1,3]}]},{id:"story1-3.jpg",type:"Bitmap",image:"story1-3.jpg",parent:"p1",delay:"p1",propes:{y:3*x},animations:[]},{id:"story1-4-texture",type:"TextureAtlas",image:"story1-4-texture.jpg",parent:"null",propes:{frames:[[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2]}},animations:{}},{id:"story1-4-sprite",type:"Sprite",frames:"story1-4-texture.sprite",parent:"p1",delay:"p1",propes:{interval:200,timeBased:!0,y:4*x},animations:[]},{id:"story1-5-texture",type:"TextureAtlas",image:"story1-5-texture.jpg",parent:"null",propes:{frames:[[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2]}},animations:{}},{id:"story1-5-sprite",type:"Sprite",frames:"story1-5-texture.sprite",parent:"p1",delay:"p1",propes:{interval:200,timeBased:!0,y:5*x},animations:[]}],b=w,T=r("bd86"),B=750,S=1334,O=(a={p2:0},Object(T["a"])(a,"p2",S-1206),Object(T["a"])(a,"p3",S-1334),Object(T["a"])(a,"p4",S-1334),[{id:"p2",type:"Container",propes:{},delay:"p2",animations:[{prope:"y",time:[0,0,6*S,6*S],value:[0,-6*S]},{prope:"alpha",time:[0,5.5*S,6*S,6*S],value:[1,0]}]},{id:"story2.jpg",type:"Bitmap",image:"story2.jpg",parent:"p2",delay:"p2",propes:{y:0},animations:[]},{id:"story2-1-texture",type:"TextureAtlas",image:"story2-1-texture.jpg",parent:"null",propes:{frames:[[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1]}},animations:{}},{id:"story2-1-sprite",type:"Sprite",frames:"story2-1-texture.sprite",parent:"p2",delay:"p2",propes:{interval:200,timeBased:!0,y:S},animations:[]},{id:"story2-2.jpg",type:"Bitmap",image:"story2-2.jpg",parent:"p2",delay:"p2",propes:{y:2*S},animations:[]},{id:"story2-3.jpg",type:"Bitmap",image:"story2-3.jpg",parent:"p2",delay:"p2",propes:{y:3*S},animations:[]},{id:"story2-4.jpg",type:"Bitmap",image:"story2-4.jpg",parent:"p2",delay:"p2",propes:{y:4*S,x:B/2,pivotX:B/2,pivotY:S/2,scaleX:1,scaleY:1},animations:[{prope:"scaleX",time:[0,3*S,5*S,5*S],value:[1,3]},{prope:"scaleY",time:[0,3*S,5*S,5*S],value:[1,3]}]},{id:"story2-5-1-2",type:"TextureAtlas",image:"story2-5-1-2.jpg",parent:"null",propes:{frames:[[754,2,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1]}},animations:{}},{id:"story2-5-1-2-sprite",type:"Sprite",frames:"story2-5-1-2.sprite",parent:"p2",delay:"p2",propes:{interval:500,timeBased:!0,y:5*S},animations:[]}]),_=O,E=1334,k=(o={p2:0},Object(T["a"])(o,"p2",E-1206),Object(T["a"])(o,"p3",E-1334),Object(T["a"])(o,"p4",E-1334),[{id:"p3",type:"Container",propes:{},delay:"p3",animations:[{prope:"y",time:[0,0,8*E,8*E],value:[0,-8*E]},{prope:"alpha",time:[0,7.5*E,8*E,8*E],value:[1,0]}]},{id:"story3.jpg",type:"Bitmap",image:"story3.jpg",parent:"p3",delay:"p3",propes:{y:0},animations:[]},{id:"story3-1.jpg",type:"Bitmap",image:"story3-1.jpg",parent:"p3",delay:"p3",propes:{y:E},animations:[]},{id:"story3-2.jpg",type:"Bitmap",image:"story3-2.jpg",parent:"p3",delay:"p3",propes:{y:2*E},animations:[]},{id:"story3-3.jpg",type:"Bitmap",image:"story3-3.jpg",parent:"p3",delay:"p3",propes:{y:3*E},animations:[]},{id:"story3-4-texture",type:"TextureAtlas",image:"story3-4-texture.jpg",parent:"null",propes:{frames:[[2,4010,750,1334],[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2,3]}},animations:{}},{id:"story3-4-sprite",type:"Sprite",frames:"story3-4-texture.sprite",parent:"p3",delay:"p3",propes:{interval:200,timeBased:!0,y:4*E},animations:[]},{id:"story3-5-texture",type:"TextureAtlas",image:"story3-5-texture.jpg",parent:"null",propes:{frames:[[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2]}},animations:{}},{id:"story3-5-sprite",type:"Sprite",frames:"story3-5-texture.sprite",parent:"p3",delay:"p3",propes:{interval:200,timeBased:!0,y:5*E},animations:[]},{id:"story3-6-texture",type:"TextureAtlas",image:"story3-6-texture.jpg",parent:"null",propes:{frames:[[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2]}},animations:{}},{id:"story3-6-sprite",type:"Sprite",frames:"story3-6-texture.sprite",parent:"p3",delay:"p3",propes:{interval:200,timeBased:!0,y:6*E},animations:[]},{id:"story3-7-texture",type:"TextureAtlas",image:"story3-7-texture.jpg",parent:"null",propes:{frames:[[2,5346,750,1334],[2,4010,750,1334],[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2,3,4]}},animations:{}},{id:"story3-7-sprite",type:"Sprite",frames:"story3-7-texture.sprite",parent:"p3",delay:"p3",propes:{interval:800,timeBased:!0,y:7*E},animations:[]}]),A=k,R=[].concat(Object(g["a"])(A),Object(g["a"])(_),Object(g["a"])(b),Object(g["a"])(v)),P=R;r("abd0"),r("d225"),r("b0b4");function z(e,t,r,i,n){return e+(t-e)/(i-r)*(n-r)}function C(e){$(".log").append("<p>"+e+"</p>")}function L(){var e="",t=!1,r=!1,i=!1;$(".hotel_name").on("focus",function(){t=!0}),$(".hotel_address").on("focus",function(){r=!0}),$(".name").on("focus",function(){i=!0}),$(".hotel_name").on("blur",function(){t=!1,setTimeout(function(){t||r||i||$(window).scrollTop(0)},50)}),$(".hotel_address").on("blur",function(){r=!1,setTimeout(function(){t||r||i||$(window).scrollTop(0)},50)}),$(".name").on("blur",function(){i=!1,setTimeout(function(){t||r||i||$(window).scrollTop(0)},50)}),$("#left-btn").on("click",function(e){var t={openid:window.$userinfo&&window.$userinfo.openid,w:$(window).width(),h:$(window).height()};$.post("http://api.hongyu.ren/lsd/posters",t,function(e){$("#poster-img").attr("src",e.data.imgurl),$("#lansidai").hide(),$("#pages").hide(),$("#poster").show()})}),$("#right-btn").on("click",function(e){$("#lansidai").hide(),$("#form").show()}),$("#upload-btn").on("click",function(e){$("#upload").click()}),$("#confirm-btn").on("click",function(t){var r=$("#name")[0].value,i=$("#address")[0].value,n=$("#username")[0].value;if(e)if(r)if(i)if(n){var a={store_name:r,store_address:i,store_image:e,name:n,w:$(window).width(),h:$(window).height()};$.post("http://api.hongyu.ren/lsd/apply",a,function(e){$("#wall-image").attr("src",e.data.imgurl),$("#form").hide(),$("#pages").hide(),$("#wall").show()})}else confirm("请申请人姓名");else confirm("请输入酒店地址");else confirm("请输入酒店名称");else confirm("请上传图片")}),$("#upload").on("change",function(t){var r=t.target.files;if(r&&r[0]){var i=new FileReader;i.onload=function(t){e=t.target.result,$("#upload-btn").attr("src",t.target.result)},i.readAsDataURL(r[0])}})}function D(){function e(e){var t=document.getElementById(e);document.addEventListener("WeixinJSBridgeReady",function(){t.play(),t.pause()},!1)}c.forEach(function(t){e(t.id)})}function M(){var e,t,r,i=750,a=1334,o=$("#app"),s={p0:0,p1:a,p2:7*a,p3:13*a},u=null,m={},g=!1;function f(){o.attr({width:i,height:a}),e=new p.a.Stage({canvas:o[0],width:i,height:a}),t=new p.a.Ticker(60),t.addTick(e),t.addTick(p.a.Tween),t.start(),e.enableDOMEvent(p.a.event.POINTER_START,!0),e.enableDOMEvent(p.a.event.POINTER_MOVE,!0),e.enableDOMEvent(p.a.event.POINTER_END,!0)}function h(){var e=0,t=$(".cover .progress"),i=$(".cover .progress-bar"),a=y.length;r=new p.a.LoadQueue,r.maxConnections=5,r.add(y),r.on("load",function(r){e++;var o=n()(e/a*100,10);t.html(o+"%"),i.css({width:o+"%"})}).on("error",function(r){e++;var o=n()(e/a*100,10);t.html(o+"%"),i.css({width:o+"%"})}),r.on("complete",function(){v(),x(),w(),$(".cover").addClass("active"),setTimeout(function(){$(".cover").addClass("none")},50),setTimeout(function(){$(".cover").hide(),$(".logo").fadeOut(300)},1400),setTimeout(function(){$("audio").off()},1400)}),r.start()}function v(){for(var t=0;t<P.length;t++){var i=P[t];i.propes.mask&&(i.propes.mask=m[i.propes.mask]),i.image&&(i.propes.image=r.get(i.image).content),i.frames&&(i.propes.frames=m[i.frames.split(".")[0]].getSprite(i.frames.split(".")[1])),m[i.id]=new p.a[i.type](i.propes),"Graphics"===i.type&&i.draw.call(m[i.id]),i.touchend&&(m[i.id].touchend=i.touchend,m[i.id].on("touchend",function(){this.touchend()})),"null"!==i.parent&&m[i.id].addTo(i.parent?m[i.parent]:e)}for(var n=0;n<l.length;n++){var a=l[n];a.el=$("#"+a.id)[0]}}function j(e,t,r){t===20*a&&(o.hide(),$(".video").show(),$(".wp").show(),$(".wp-inner").fullpage({beforeChange:function(e){var t,r;void 0!==e.next&&c[e.next]&&(t=document.getElementById(c[e.next].id)),void 0!==e.cur&&c[e.cur]&&(r=document.getElementById(c[e.cur].id)),console.log("nextVideo",t),console.log("currVideo",r),r&&r.pause(),t&&t.play()}}),$("#lansidai").show()),window.timer=t;for(var i=P.length,n=0;n<i;n++)for(var p=P[n],d=p.animations,u=0;u<d.length;u++){var y=d[u],g=y.value,f=y.time,h=s[p.delay?p.delay:"p1"];t<f[1]+h&&t>f[0]+h?m[p.id][y.prope]=g[0]:t<f[f.length-1]+h&&t>f[f.length-2]+h&&(m[p.id][y.prope]=g[g.length-1]);for(var v=0;v<g.length-1;v++)t<f[v+2]+h&&t>f[v+1]+h&&(m[p.id][y.prope]=z(g[v],g[v+1],f[v+1]+h,f[v+2]+h,t))}for(var j=0;j<l.length;j++){var x=l[j];x.start&&t<x.start&&!x.el.paused?(x.played="",x.el.pause(),C("min pause "+x.el.id+", top:"+t)):x.end&&t>=x.end&&!x.el.paused?(x.el.pause(),x.played="",C("max pause "+x.el.id+", top:"+t)):x.start&&t>=x.start&&!x.played&&x.el.paused&&(x.end&&t<x.end||!x.end)&&(x.el.play(),x.played=!0,C("play "+x.el.id+", top:"+t))}}function x(){u=new d["Scroller"](j,{zooming:!1,animating:!0,bouncing:!1});var e=function(e){e.stopPropagation(),e.preventDefault(),g=!0,u.doTouchStart(e.touches,e.timeStamp)},t=function(e){g&&(e.stopPropagation(),e.preventDefault(),u.doTouchMove(e.touches,e.timeStamp,e.scale))},r=function(e){u.doTouchEnd(e.timeStamp),g=!1};o.on("touchstart",e).on("touchmove",t).on("touchend",r),u.setDimensions(i,a,i,21*a),window.scroller=u}function w(){$(".filter,.cover").on("touchstart",function(e){e.stopPropagation(),e.preventDefault()})}function b(){for(var e=1;e<l.length;e++)!function(e){var t=$("#"+l[e].id)[0],r=function e(){document.removeEventListener("WeixinJSBridgeReady",e),document.removeEventListener("YixinJSBridgeReady",e),t.play()};$(t).on("play",function(){this.pause()}),t.addEventListener("ended",function(){l[e].played=""});try{t.play()}catch(i){console.error(i)}document.addEventListener("WeixinJSBridgeReady",r,!1),document.addEventListener("YixinJSBridgeReady",r,!1)}(e)}f(),h(),b(),D(),L(),document.addEventListener("WeixinJSBridgeReady",function(){document.getElementById("z0_m1").play(),l[0].played=!0},!1),window.pages=m,window.nyphile=o,window.loadQueue=r,window.musics=l,window.videos=c}$(M)}});
//# sourceMappingURL=app.5b567d25.js.map