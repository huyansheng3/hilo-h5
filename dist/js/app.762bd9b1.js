(function(e){function t(t){for(var a,o,s=t[0],p=t[1],d=t[2],c=0,l=[];c<s.length;c++)o=s[c],i[o]&&l.push(i[o][0]),i[o]=0;for(a in p)Object.prototype.hasOwnProperty.call(p,a)&&(e[a]=p[a]);u&&u(t);while(l.length)l.shift()();return n.push.apply(n,d||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,s=1;s<r.length;s++){var p=r[s];0!==i[p]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},i={app:0},n=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=p;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("28a5");var a=r("e814"),i=r.n(a);r("ac6a"),r("cadf"),r("551c"),r("f751"),r("097d");(function(){function e(){t(),r(),a()}function t(){i=$("#common-landscape"),n=$("#common-pc"),$("#common-share"),$(".common-container")}function r(){var e=function(){switch(window.orientation){case 0:case 180:i.hide();break;case-90:case 90:i.show()}};e(),window.addEventListener("onorientationchange"in window?"orientationchange":"resize",e,!1)}function a(){$.os.phone||$.os.tablet||(new QRCode(n.children()[0]).makeCode(location.href),$("body").children().hide(),n.show())}var i,n;$(e)})();var n,o,s=r("df84"),p=r.n(s),d=r("ec9e"),u=(r("fe3d"),1334),c=[{id:"z0_m1",start:0,end:3*u},{id:"z1_m1",start:3.5*u,end:4*u},{id:"z3_m1",start:5.5*u,end:7*u},{id:"z4_m1",start:7.5*u,end:9*u},{id:"z5_m1",start:13.5*u,end:15*u},{id:"z6_m1",start:15.5*u,end:17*u}],l=[{id:"manager",src:"http://hongyu-static.oss-cn-beijing.aliyuncs.com/2019/03/lsd/video/manager.mp4"},{id:"mother",src:"http://hongyu-static.oss-cn-beijing.aliyuncs.com/2019/03/lsd/video/mum.mp4"},{id:"student",src:"http://hongyu-static.oss-cn-beijing.aliyuncs.com/2019/03/lsd/video/student.mp4"},{id:"shallen",src:"http://hongyu-static.oss-cn-beijing.aliyuncs.com/2019/03/lsd/video/shallen.mp4"}],y="/",m=[{id:"homepage.jpg",src:y+"images/homepage.jpg"},{id:"star.png",src:y+"images/star.png"},{id:"story1-1-texture.jpg",src:y+"images/story1-1-texture.jpg"},{id:"story1-2-texture.jpg",src:y+"images/story1-2-texture.jpg"},{id:"story1-3.jpg",src:y+"images/story1-3.jpg"},{id:"story1-4-texture.jpg",src:y+"images/story1-4-texture.jpg"},{id:"story1-5-texture.jpg",src:y+"images/story1-5-texture.jpg"},{id:"story1.jpg",src:y+"images/story1.jpg"},{id:"story2-1-texture.jpg",src:y+"images/story2-1-texture.jpg"},{id:"story2-2.jpg",src:y+"images/story2-2.jpg"},{id:"story2-3.jpg",src:y+"images/story2-3.jpg"},{id:"story2-4.jpg",src:y+"images/story2-4.jpg"},{id:"story2-5-1-2.jpg",src:y+"images/story2-5-1-2.jpg"},{id:"story2.jpg",src:y+"images/story2.jpg"},{id:"story3-1.jpg",src:y+"images/story3-1.jpg"},{id:"story3-2.jpg",src:y+"images/story3-2.jpg"},{id:"story3-3.jpg",src:y+"images/story3-3.jpg"},{id:"story3-4-texture.jpg",src:y+"images/story3-4-texture.jpg"},{id:"story3-5-texture.jpg",src:y+"images/story3-5-texture.jpg"},{id:"story3-6-texture.jpg",src:y+"images/story3-6-texture.jpg"},{id:"story3-7-texture.jpg",src:y+"images/story3-7-texture.jpg"},{id:"story3.jpg",src:y+"images/story3.jpg"}],g=r("75fc"),f=750,h=1334,v=[{id:"p0",type:"Container",propes:{},delay:"p0",animations:[{prope:"y",time:[0,0,h,h],value:[0,-h]},{prope:"alpha",time:[0,0,h,h],value:[1,0]}]},{id:"homepage.jpg",type:"Bitmap",image:"homepage.jpg",parent:"p0",delay:"p0",propes:{},animations:[]},{id:"star",type:"Bitmap",image:"star.png",parent:"p0",delay:"p0",propes:{x:f/2,y:h/2,pivotX:90,pivotY:74},animations:{}}],j=v,x=750,w=1334,b=[{id:"p1",type:"Container",propes:{},delay:"p1",animations:[{prope:"y",time:[0,0,6*w,6*w],value:[0,-6*w]},{prope:"alpha",time:[0,5.5*w,6*w,6*w],value:[1,0]}]},{id:"story1.jpg",type:"Bitmap",image:"story1.jpg",parent:"p1",delay:"p1",propes:{y:0},animations:[]},{id:"story1-1-texture",type:"TextureAtlas",image:"story1-1-texture.jpg",parent:"null",propes:{frames:[[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2]}},animations:{}},{id:"story1-1-sprite",type:"Sprite",frames:"story1-1-texture.sprite",parent:"p1",delay:"p1",propes:{interval:200,timeBased:!0,y:w},animations:{}},{id:"story1-2-texture",type:"TextureAtlas",image:"story1-2-texture.jpg",parent:"null",propes:{frames:[[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1]}},animations:{}},{id:"story1-2-sprite",type:"Sprite",frames:"story1-2-texture.sprite",parent:"p1",delay:"p1",propes:{interval:200,timeBased:!0,y:2*w,x:x/2,pivotX:x/2,pivotY:w/2,scaleX:1,scaleY:1},animations:[{prope:"scaleX",time:[0,1*w,3*w,3*w],value:[1,3]},{prope:"scaleY",time:[0,1*w,3*w,3*w],value:[1,3]}]},{id:"story1-3.jpg",type:"Bitmap",image:"story1-3.jpg",parent:"p1",delay:"p1",propes:{y:3*w},animations:[]},{id:"story1-4-texture",type:"TextureAtlas",image:"story1-4-texture.jpg",parent:"null",propes:{frames:[[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2]}},animations:{}},{id:"story1-4-sprite",type:"Sprite",frames:"story1-4-texture.sprite",parent:"p1",delay:"p1",propes:{interval:200,timeBased:!0,y:4*w},animations:[]},{id:"story1-5-texture",type:"TextureAtlas",image:"story1-5-texture.jpg",parent:"null",propes:{frames:[[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2]}},animations:{}},{id:"story1-5-sprite",type:"Sprite",frames:"story1-5-texture.sprite",parent:"p1",delay:"p1",propes:{interval:200,timeBased:!0,y:5*w},animations:[]}],T=b,B=r("bd86"),O=750,S=1334,P=(n={p2:0},Object(B["a"])(n,"p2",S-1206),Object(B["a"])(n,"p3",S-1334),Object(B["a"])(n,"p4",S-1334),[{id:"p2",type:"Container",propes:{},delay:"p2",animations:[{prope:"y",time:[0,0,6*S,6*S],value:[0,-6*S]},{prope:"alpha",time:[0,5.5*S,6*S,6*S],value:[1,0]}]},{id:"story2.jpg",type:"Bitmap",image:"story2.jpg",parent:"p2",delay:"p2",propes:{y:0},animations:[]},{id:"story2-1-texture",type:"TextureAtlas",image:"story2-1-texture.jpg",parent:"null",propes:{frames:[[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1]}},animations:{}},{id:"story2-1-sprite",type:"Sprite",frames:"story2-1-texture.sprite",parent:"p2",delay:"p2",propes:{interval:200,timeBased:!0,y:S},animations:[]},{id:"story2-2.jpg",type:"Bitmap",image:"story2-2.jpg",parent:"p2",delay:"p2",propes:{y:2*S},animations:[]},{id:"story2-3.jpg",type:"Bitmap",image:"story2-3.jpg",parent:"p2",delay:"p2",propes:{y:3*S},animations:[]},{id:"story2-4.jpg",type:"Bitmap",image:"story2-4.jpg",parent:"p2",delay:"p2",propes:{y:4*S,x:O/2,pivotX:O/2,pivotY:S/2,scaleX:1,scaleY:1},animations:[{prope:"scaleX",time:[0,3*S,5*S,5*S],value:[1,3]},{prope:"scaleY",time:[0,3*S,5*S,5*S],value:[1,3]}]},{id:"story2-5-1-2",type:"TextureAtlas",image:"story2-5-1-2.jpg",parent:"null",propes:{frames:[[754,2,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1]}},animations:{}},{id:"story2-5-1-2-sprite",type:"Sprite",frames:"story2-5-1-2.sprite",parent:"p2",delay:"p2",propes:{interval:500,timeBased:!0,y:5*S},animations:[]}]),k=P,_=1334,E=(o={p2:0},Object(B["a"])(o,"p2",_-1206),Object(B["a"])(o,"p3",_-1334),Object(B["a"])(o,"p4",_-1334),[{id:"p3",type:"Container",propes:{},delay:"p3",animations:[{prope:"y",time:[0,0,8*_,8*_],value:[0,-8*_]},{prope:"alpha",time:[0,7.5*_,8*_,8*_],value:[1,0]}]},{id:"story3.jpg",type:"Bitmap",image:"story3.jpg",parent:"p3",delay:"p3",propes:{y:0},animations:[]},{id:"story3-1.jpg",type:"Bitmap",image:"story3-1.jpg",parent:"p3",delay:"p3",propes:{y:_},animations:[]},{id:"story3-2.jpg",type:"Bitmap",image:"story3-2.jpg",parent:"p3",delay:"p3",propes:{y:2*_},animations:[]},{id:"story3-3.jpg",type:"Bitmap",image:"story3-3.jpg",parent:"p3",delay:"p3",propes:{y:3*_},animations:[]},{id:"story3-4-texture",type:"TextureAtlas",image:"story3-4-texture.jpg",parent:"null",propes:{frames:[[2,4010,750,1334],[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2,3]}},animations:{}},{id:"story3-4-sprite",type:"Sprite",frames:"story3-4-texture.sprite",parent:"p3",delay:"p3",propes:{interval:200,timeBased:!0,y:4*_},animations:[]},{id:"story3-5-texture",type:"TextureAtlas",image:"story3-5-texture.jpg",parent:"null",propes:{frames:[[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2]}},animations:{}},{id:"story3-5-sprite",type:"Sprite",frames:"story3-5-texture.sprite",parent:"p3",delay:"p3",propes:{interval:200,timeBased:!0,y:5*_},animations:[]},{id:"story3-6-texture",type:"TextureAtlas",image:"story3-6-texture.jpg",parent:"null",propes:{frames:[[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2]}},animations:{}},{id:"story3-6-sprite",type:"Sprite",frames:"story3-6-texture.sprite",parent:"p3",delay:"p3",propes:{interval:200,timeBased:!0,y:6*_},animations:[]},{id:"story3-7-texture",type:"TextureAtlas",image:"story3-7-texture.jpg",parent:"null",propes:{frames:[[2,5346,750,1334],[2,4010,750,1334],[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2,3,4]}},animations:{}},{id:"story3-7-sprite",type:"Sprite",frames:"story3-7-texture.sprite",parent:"p3",delay:"p3",propes:{interval:800,timeBased:!0,y:7*_},animations:[]}]),C=E,A=[].concat(Object(g["a"])(C),Object(g["a"])(k),Object(g["a"])(T),Object(g["a"])(j)),I=A,R=r("abd0"),Y=r.n(R),X=r("d225"),L=r("b0b4");function z(e,t){if(!e)e=0;if(!t)t=0;return{x:e,y:t}}function D(e){return e*e*e}function M(e){return 3*e*e*(1-e)}function q(e){return 3*e*(1-e)*(1-e)}function J(e){return(1-e)*(1-e)*(1-e)}function N(e,t,r,a,i){var n=new z;return n.x=t.x*D(e)+r.x*M(e)+a.x*q(e)+i.x*J(e),n.y=t.y*D(e)+r.y*M(e)+a.y*q(e)+i.y*J(e),n}var W=function(){function e(t){var r=t.P1,a=t.P2,i=t.P3,n=t.P4,o=t.callback;Object(X["a"])(this,e),this.P1=r,this.P2=a,this.P3=i,this.P4=n,this.callback=o,this.stage=0}return Object(L["a"])(e,[{key:"start",value:function(){var e=this;this.requestId=requestAnimationFrame(function(t){return e.animate(t)})}},{key:"stop",value:function(){this.requestId&&Y()(this.requestId),this.requestId=null}},{key:"animate",value:function(e){var t=this;this.stage>1&&(this.stage=0),this.stage+=.01;var r=N(this.stage,this.P1,this.P2,this.P3,this.P4);this.callback(r),this.requestId=requestAnimationFrame(function(e){return t.animate(e)})}}]),e}();function F(e,t,r,a,i){return e+(t-e)/(a-r)*(i-r)}function Q(e){$(".log").append("<p>"+e+"</p>")}function G(){var e="",t=!1,r=!1,a=!1;$(".hotel_name").on("focus",function(){t=!0}),$(".hotel_address").on("focus",function(){r=!0}),$(".name").on("focus",function(){a=!0}),$(".hotel_name").on("blur",function(){t=!1,setTimeout(function(){t||r||a||$(window).scrollTop(0)},50)}),$(".hotel_address").on("blur",function(){r=!1,setTimeout(function(){t||r||a||$(window).scrollTop(0)},50)}),$(".name").on("blur",function(){a=!1,setTimeout(function(){t||r||a||$(window).scrollTop(0)},50)}),$("#left-btn").on("click",function(e){var t={openid:window.$userinfo&&window.$userinfo.openid,w:$(window).width(),h:$(window).height()};$.post("http://api.hongyu.ren/lsd/posters",t,function(e){$("#poster-image").attr("src",e.data.imgurl),$("#lansidai").hide(),$("#pages").hide(),$("#poster").show()})}),$("#right-btn").on("click",function(e){$("#lansidai").hide(),$("#form").show()}),$("#upload-btn").on("click",function(e){$("#upload").click()}),$("#confirm-btn").on("click",function(t){var r=$("#name")[0].value,a=$("#address")[0].value,i=$("#username")[0].value;if(e)if(r)if(a)if(i){var n={store_name:r,store_address:a,store_image:e,name:i,w:$(window).width(),h:$(window).height()};$.post("http://api.hongyu.ren/lsd/apply",n,function(e){$("#wall-image").attr("src",e.data.imgurl),$("#form").hide(),$("#pages").hide(),$("#wall").show()})}else confirm("请申请人姓名");else confirm("请输入酒店地址");else confirm("请输入酒店名称");else confirm("请上传图片")}),$("#upload").on("change",function(t){var r=t.target.files;if(r&&r[0]){var a=new FileReader;a.onload=function(t){e=t.target.result,$("#upload-btn").attr("src",t.target.result)},a.readAsDataURL(r[0])}})}function U(){function e(e){var t=document.getElementById(e);document.addEventListener("WeixinJSBridgeReady",function(){t.play();var e=setInterval(function(){t.currentTime&&(t.pause(),clearInterval(e))},50)},!1)}l.forEach(function(t){e(t.id)})}function V(){var e,t,r,a=750,n=1334,o=$("#app"),s={p0:0,p1:n,p2:7*n,p3:13*n},u=null,y={},g=!1;function f(){o.attr({width:a,height:n}),e=new p.a.Stage({canvas:o[0],width:a,height:n}),t=new p.a.Ticker(60),t.addTick(e),t.addTick(p.a.Tween),t.start(),e.enableDOMEvent(p.a.event.POINTER_START,!0),e.enableDOMEvent(p.a.event.POINTER_MOVE,!0),e.enableDOMEvent(p.a.event.POINTER_END,!0)}function h(){var e=0,t=$(".cover .progress"),a=$(".cover .progress-bar"),n=m.length;r=new p.a.LoadQueue,r.maxConnections=5,r.add(m),r.on("load",function(r){e++;var o=i()(e/n*100,10);t.html(o+"%"),a.css({width:o+"%"})}).on("error",function(r){e++;var o=i()(e/n*100,10);t.html(o+"%"),a.css({width:o+"%"})}),r.on("complete",function(){v(),x(),w(),$(".cover").addClass("active"),setTimeout(function(){$(".cover").addClass("none")},50),setTimeout(function(){$(".cover").hide(),$(".logo").fadeOut(300)},1400),setTimeout(function(){$("audio").off()},1400)}),r.start()}function v(){for(var t=0;t<I.length;t++){var a=I[t];a.propes.mask&&(a.propes.mask=y[a.propes.mask]),a.image&&(a.propes.image=r.get(a.image).content),a.frames&&(a.propes.frames=y[a.frames.split(".")[0]].getSprite(a.frames.split(".")[1])),y[a.id]=new p.a[a.type](a.propes),"Graphics"===a.type&&a.draw.call(y[a.id]),a.touchend&&(y[a.id].touchend=a.touchend,y[a.id].on("touchend",function(){this.touchend()})),"null"!==a.parent&&y[a.id].addTo(a.parent?y[a.parent]:e)}var i=z(380,500),n=z(300,780),o=z(180,570),s=z(400,900);function d(e){y.star.x=e.x,y.star.y=e.y,y.star.scaleX>3&&(y.star.scaleX=1,y.star.scaleY=1),y.star.rotation>90&&(y.star.rotation=0),y.star.rotation=y.star.rotation+.5,y.star.scaleX=y.star.scaleX+.02,y.star.scaleY=y.star.scaleY+.02}var u=new W({P1:i,P2:n,P3:o,P4:s,callback:d});u.start();for(var l=0;l<c.length;l++){var m=c[l];m.el=$("#"+m.id)[0]}}function j(e,t,r){t===20*n&&(o.hide(),$(".video").show(),$(".wp").show(),$(".wp-inner").fullpage({change:function(e){console.log("change",e.next,e.cur),$(".indicator li").removeClass("cur").eq(e.cur).addClass("cur")},beforeChange:function(e){var t,r;console.log("beforeChange",e.next,e.cur),void 0!==e.next&&l[e.next]&&(t=document.getElementById(l[e.next].id)),void 0!==e.cur&&l[e.cur]&&(r=document.getElementById(l[e.cur].id)),t&&t.play(),r&&r.pause()},afterChange:function(e){console.log("afterChange",e.next,e.cur)}}),$("#lansidai").show()),window.timer=t;for(var a=I.length,i=0;i<a;i++)for(var p=I[i],d=p.animations,u=0;u<d.length;u++){var m=d[u],g=m.value,f=m.time,h=s[p.delay?p.delay:"p1"];t<f[1]+h&&t>f[0]+h?y[p.id][m.prope]=g[0]:t<f[f.length-1]+h&&t>f[f.length-2]+h&&(y[p.id][m.prope]=g[g.length-1]);for(var v=0;v<g.length-1;v++)t<f[v+2]+h&&t>f[v+1]+h&&(y[p.id][m.prope]=F(g[v],g[v+1],f[v+1]+h,f[v+2]+h,t))}for(var j=0;j<c.length;j++){var x=c[j];x.start&&t<x.start&&!x.el.paused?(x.played="",x.el.pause(),Q("min pause "+x.el.id+", top:"+t)):x.end&&t>=x.end&&!x.el.paused?(x.el.pause(),x.played="",Q("max pause "+x.el.id+", top:"+t)):x.start&&t>=x.start&&!x.played&&x.el.paused&&(x.end&&t<x.end||!x.end)&&(x.el.play(),x.played=!0,Q("play "+x.el.id+", top:"+t))}}function x(){u=new d["Scroller"](j,{zooming:!1,animating:!0,bouncing:!1});var e=function(e){e.stopPropagation(),e.preventDefault(),g=!0,u.doTouchStart(e.touches,e.timeStamp)},t=function(e){g&&(e.stopPropagation(),e.preventDefault(),u.doTouchMove(e.touches,e.timeStamp,e.scale))},r=function(e){u.doTouchEnd(e.timeStamp),g=!1};o.on("touchstart",e).on("touchmove",t).on("touchend",r),u.setDimensions(a,n,a,21*n),window.scroller=u}function w(){$(".filter,.cover").on("touchstart",function(e){e.stopPropagation(),e.preventDefault()})}function b(){for(var e=1;e<c.length;e++)!function(e){var t=$("#"+c[e].id)[0],r=function e(){document.removeEventListener("WeixinJSBridgeReady",e),document.removeEventListener("YixinJSBridgeReady",e),t.play()};$(t).on("play",function(){this.pause()}),t.addEventListener("ended",function(){c[e].played=""});try{t.play()}catch(a){console.error(a)}document.addEventListener("WeixinJSBridgeReady",r,!1),document.addEventListener("YixinJSBridgeReady",r,!1)}(e)}f(),h(),b(),document.addEventListener("WeixinJSBridgeReady",function(){document.getElementById("z0_m1").play(),c[0].played=!0},!1);var T=window.$userinfo&&window.$userinfo.openid;console.log("op = "+T),G(),U(),window.pages=y,window.nyphile=o,window.loadQueue=r,window.musics=c,window.videos=l}$(V)}});
//# sourceMappingURL=app.762bd9b1.js.map