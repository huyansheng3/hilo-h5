(function(e){function t(t){for(var a,n,o=t[0],p=t[1],d=t[2],l=0,c=[];l<o.length;l++)n=o[l],i[n]&&c.push(i[n][0]),i[n]=0;for(a in p)Object.prototype.hasOwnProperty.call(p,a)&&(e[a]=p[a]);u&&u(t);while(c.length)c.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,o=1;o<r.length;o++){var p=r[o];0!==i[p]&&(a=!1)}a&&(s.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},i={app:0},s=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],p=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=p;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("28a5");var a=r("e814"),i=r.n(a);r("cadf"),r("551c"),r("f751"),r("097d");(function(){function e(){t(),r(),a()}function t(){i=$("#common-landscape"),s=$("#common-pc"),$("#common-share"),$(".common-container")}function r(){var e=function(){switch(window.orientation){case 0:case 180:i.hide();break;case-90:case 90:i.show()}};e(),window.addEventListener("onorientationchange"in window?"orientationchange":"resize",e,!1)}function a(){$.os.phone||$.os.tablet||(new QRCode(s.children()[0]).makeCode(location.href),$("body").children().hide(),s.show())}var i,s;$(e)})();var s,n,o=r("df84"),p=r.n(o),d=r("ec9e"),u=(r("fe3d"),1334),l=[{id:"z0_m1",start:0,end:3*u},{id:"z1_m1",start:3.5*u,end:4*u},{id:"z3_m1",start:5.5*u,end:7*u},{id:"z4_m1",start:7.5*u,end:9*u},{id:"z5_m1",start:13.5*u,end:15*u},{id:"z6_m1",start:15.5*u,end:17*u}],c=[{id:"manager",src:"http://hongyu-static.oss-cn-beijing.aliyuncs.com/2019/03/lsd/video/manager.mp4"},{id:"mother",src:"http://hongyu-static.oss-cn-beijing.aliyuncs.com/2019/03/lsd/video/mum.mp4"},{id:"student",src:"http://hongyu-static.oss-cn-beijing.aliyuncs.com/2019/03/lsd/video/student.mp4"},{id:"shallen",src:"http://hongyu-static.oss-cn-beijing.aliyuncs.com/2019/03/lsd/video/shallen.mp4"}],y="/",m=[{id:"homepage.jpg",src:y+"images/homepage.jpg"},{id:"star.png",src:y+"images/star.png"},{id:"story1-1-texture.jpg",src:y+"images/story1-1-texture.jpg"},{id:"story1-2-texture.jpg",src:y+"images/story1-2-texture.jpg"},{id:"story1-3.jpg",src:y+"images/story1-3.jpg"},{id:"story1-4-texture.jpg",src:y+"images/story1-4-texture.jpg"},{id:"story1-5-texture.jpg",src:y+"images/story1-5-texture.jpg"},{id:"story1.jpg",src:y+"images/story1.jpg"},{id:"story2-1-texture.jpg",src:y+"images/story2-1-texture.jpg"},{id:"story2-2.jpg",src:y+"images/story2-2.jpg"},{id:"story2-3.jpg",src:y+"images/story2-3.jpg"},{id:"story2-4.jpg",src:y+"images/story2-4.jpg"},{id:"story2-5-1-2.jpg",src:y+"images/story2-5-1-2.jpg"},{id:"story2.jpg",src:y+"images/story2.jpg"},{id:"story3-1.jpg",src:y+"images/story3-1.jpg"},{id:"story3-2.jpg",src:y+"images/story3-2.jpg"},{id:"story3-3.jpg",src:y+"images/story3-3.jpg"},{id:"story3-4-texture.jpg",src:y+"images/story3-4-texture.jpg"},{id:"story3-5-texture.jpg",src:y+"images/story3-5-texture.jpg"},{id:"story3-6-texture.jpg",src:y+"images/story3-6-texture.jpg"},{id:"story3-7-texture.jpg",src:y+"images/story3-7-texture.jpg"},{id:"story3.jpg",src:y+"images/story3.jpg"}],g=r("75fc"),f=750,h=1334,v=[{id:"p0",type:"Container",propes:{},delay:"p0",animations:[{prope:"y",time:[0,0,h,h],value:[0,-h]},{prope:"alpha",time:[0,0,h,h],value:[1,0]}]},{id:"homepage.jpg",type:"Bitmap",image:"homepage.jpg",parent:"p0",delay:"p0",propes:{},animations:[]},{id:"star",type:"Bitmap",image:"star.png",parent:"p0",delay:"p0",propes:{x:f/2,y:h/2,pivotX:90,pivotY:74},animations:{}}],j=v,x=750,w=1334,b=[{id:"p1",type:"Container",propes:{},delay:"p1",animations:[{prope:"y",time:[0,0,6*w,6*w],value:[0,-6*w]},{prope:"alpha",time:[0,5.5*w,6*w,6*w],value:[1,0]}]},{id:"story1.jpg",type:"Bitmap",image:"story1.jpg",parent:"p1",delay:"p1",propes:{y:0},animations:[]},{id:"story1-1-texture",type:"TextureAtlas",image:"story1-1-texture.jpg",parent:"null",propes:{frames:[[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2]}},animations:{}},{id:"story1-1-sprite",type:"Sprite",frames:"story1-1-texture.sprite",parent:"p1",delay:"p1",propes:{interval:200,timeBased:!0,y:w},animations:{}},{id:"story1-2-texture",type:"TextureAtlas",image:"story1-2-texture.jpg",parent:"null",propes:{frames:[[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1]}},animations:{}},{id:"story1-2-sprite",type:"Sprite",frames:"story1-2-texture.sprite",parent:"p1",delay:"p1",propes:{interval:200,timeBased:!0,y:2*w,x:x/2,pivotX:x/2,pivotY:w/2,scaleX:1,scaleY:1},animations:[{prope:"scaleX",time:[0,1*w,3*w,3*w],value:[1,3]},{prope:"scaleY",time:[0,1*w,3*w,3*w],value:[1,3]}]},{id:"story1-3.jpg",type:"Bitmap",image:"story1-3.jpg",parent:"p1",delay:"p1",propes:{y:3*w},animations:[]},{id:"story1-4-texture",type:"TextureAtlas",image:"story1-4-texture.jpg",parent:"null",propes:{frames:[[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2]}},animations:{}},{id:"story1-4-sprite",type:"Sprite",frames:"story1-4-texture.sprite",parent:"p1",delay:"p1",propes:{interval:200,timeBased:!0,y:4*w},animations:[]},{id:"story1-5-texture",type:"TextureAtlas",image:"story1-5-texture.jpg",parent:"null",propes:{frames:[[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2]}},animations:{}},{id:"story1-5-sprite",type:"Sprite",frames:"story1-5-texture.sprite",parent:"p1",delay:"p1",propes:{interval:200,timeBased:!0,y:5*w},animations:[]}],O=b,B=r("bd86"),P=750,S=1334,T=(s={p2:0},Object(B["a"])(s,"p2",S-1206),Object(B["a"])(s,"p3",S-1334),Object(B["a"])(s,"p4",S-1334),[{id:"p2",type:"Container",propes:{},delay:"p2",animations:[{prope:"y",time:[0,0,6*S,6*S],value:[0,-6*S]},{prope:"alpha",time:[0,5.5*S,6*S,6*S],value:[1,0]}]},{id:"story2.jpg",type:"Bitmap",image:"story2.jpg",parent:"p2",delay:"p2",propes:{y:0},animations:[]},{id:"story2-1-texture",type:"TextureAtlas",image:"story2-1-texture.jpg",parent:"null",propes:{frames:[[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1]}},animations:{}},{id:"story2-1-sprite",type:"Sprite",frames:"story2-1-texture.sprite",parent:"p2",delay:"p2",propes:{interval:200,timeBased:!0,y:S},animations:[]},{id:"story2-2.jpg",type:"Bitmap",image:"story2-2.jpg",parent:"p2",delay:"p2",propes:{y:2*S},animations:[]},{id:"story2-3.jpg",type:"Bitmap",image:"story2-3.jpg",parent:"p2",delay:"p2",propes:{y:3*S},animations:[]},{id:"story2-4.jpg",type:"Bitmap",image:"story2-4.jpg",parent:"p2",delay:"p2",propes:{y:4*S,x:P/2,pivotX:P/2,pivotY:S/2,scaleX:1,scaleY:1},animations:[{prope:"scaleX",time:[0,3*S,5*S,5*S],value:[1,3]},{prope:"scaleY",time:[0,3*S,5*S,5*S],value:[1,3]}]},{id:"story2-5-1-2",type:"TextureAtlas",image:"story2-5-1-2.jpg",parent:"null",propes:{frames:[[754,2,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1]}},animations:{}},{id:"story2-5-1-2-sprite",type:"Sprite",frames:"story2-5-1-2.sprite",parent:"p2",delay:"p2",propes:{interval:500,timeBased:!0,y:5*S},animations:[]}]),k=T,_=1334,E=(n={p2:0},Object(B["a"])(n,"p2",_-1206),Object(B["a"])(n,"p3",_-1334),Object(B["a"])(n,"p4",_-1334),[{id:"p3",type:"Container",propes:{},delay:"p3",animations:[{prope:"y",time:[0,0,8*_,8*_],value:[0,-8*_]},{prope:"alpha",time:[0,7.5*_,8*_,8*_],value:[1,0]}]},{id:"story3.jpg",type:"Bitmap",image:"story3.jpg",parent:"p3",delay:"p3",propes:{y:0},animations:[]},{id:"story3-1.jpg",type:"Bitmap",image:"story3-1.jpg",parent:"p3",delay:"p3",propes:{y:_},animations:[]},{id:"story3-2.jpg",type:"Bitmap",image:"story3-2.jpg",parent:"p3",delay:"p3",propes:{y:2*_},animations:[]},{id:"story3-3.jpg",type:"Bitmap",image:"story3-3.jpg",parent:"p3",delay:"p3",propes:{y:3*_},animations:[]},{id:"story3-4-texture",type:"TextureAtlas",image:"story3-4-texture.jpg",parent:"null",propes:{frames:[[2,4010,750,1334],[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2,3]}},animations:{}},{id:"story3-4-sprite",type:"Sprite",frames:"story3-4-texture.sprite",parent:"p3",delay:"p3",propes:{interval:200,timeBased:!0,y:4*_},animations:[]},{id:"story3-5-texture",type:"TextureAtlas",image:"story3-5-texture.jpg",parent:"null",propes:{frames:[[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2]}},animations:{}},{id:"story3-5-sprite",type:"Sprite",frames:"story3-5-texture.sprite",parent:"p3",delay:"p3",propes:{interval:200,timeBased:!0,y:5*_},animations:[]},{id:"story3-6-texture",type:"TextureAtlas",image:"story3-6-texture.jpg",parent:"null",propes:{frames:[[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2]}},animations:{}},{id:"story3-6-sprite",type:"Sprite",frames:"story3-6-texture.sprite",parent:"p3",delay:"p3",propes:{interval:200,timeBased:!0,y:6*_},animations:[]},{id:"story3-7-texture",type:"TextureAtlas",image:"story3-7-texture.jpg",parent:"null",propes:{frames:[[2,5346,750,1334],[2,4010,750,1334],[2,2674,750,1334],[2,1338,750,1334],[2,2,750,1334]],sprites:{sprite:[0,1,2,3,4]}},animations:{}},{id:"story3-7-sprite",type:"Sprite",frames:"story3-7-texture.sprite",parent:"p3",delay:"p3",propes:{interval:800,timeBased:!0,y:7*_},animations:[]}]),A=E,R=[].concat(Object(g["a"])(A),Object(g["a"])(k),Object(g["a"])(O),Object(g["a"])(j)),Y=R,X=r("abd0"),z=r.n(X),C=r("d225"),D=r("b0b4");function I(e,t){if(!e)e=0;if(!t)t=0;return{x:e,y:t}}function L(e){return e*e*e}function M(e){return 3*e*e*(1-e)}function q(e){return 3*e*(1-e)*(1-e)}function J(e){return(1-e)*(1-e)*(1-e)}function N(e,t,r,a,i){var s=new I;return s.x=t.x*L(e)+r.x*M(e)+a.x*q(e)+i.x*J(e),s.y=t.y*L(e)+r.y*M(e)+a.y*q(e)+i.y*J(e),s}var F=function(){function e(t){var r=t.P1,a=t.P2,i=t.P3,s=t.P4,n=t.callback;Object(C["a"])(this,e),this.P1=r,this.P2=a,this.P3=i,this.P4=s,this.callback=n,this.stage=0}return Object(D["a"])(e,[{key:"start",value:function(){var e=this;this.requestId=requestAnimationFrame(function(t){return e.animate(t)})}},{key:"stop",value:function(){this.requestId&&z()(this.requestId),this.requestId=null}},{key:"animate",value:function(e){var t=this;this.stage>1&&(this.stage=0),this.stage+=.01;var r=N(this.stage,this.P1,this.P2,this.P3,this.P4);this.callback(r),this.requestId=requestAnimationFrame(function(e){return t.animate(e)})}}]),e}();function Q(e,t,r,a,i){return e+(t-e)/(a-r)*(i-r)}function W(e){$(".log").append("<p>"+e+"</p>")}function G(){var e="";$("#left-btn").on("click",function(e){var t="<?php echo $userinfo['openid'];?>",r={openid:t,w:$(window).width(),h:$(window).height()};$.post("http://api.hongyu.ren/lsd/posters",r,function(e){console.log(e),$("#lansidai").hide(),$("#count").text(1233),$("#poster").show()})}),$("#right-btn").on("click",function(e){$("#lansidai").hide(),$("#form").show()}),$("#upload-btn").on("click",function(e){$("#upload").click()}),$("#confirm-btn").on("click",function(t){$("#name")[0].value,$("#address")[0].value,$("#username")[0].value;var r={store_name:$("#name")[0].value,store_address:$("#address")[0].value,store_image:e,name:$("#username")[0].value,w:$(window).width(),h:$(window).height()};$.post("http://api.hongyu.ren/lsd/apply",r,function(e){console.log(e),$("#wall-image").attr("src",e.imgurl),$("#form").hide(),$("#wall").show()})}),$("#upload").on("change",function(t){var r=t.target.files;if(r&&r[0]){var a=new FileReader;a.onload=function(t){e=t.target.result,$("#upload-btn").attr("src",t.target.result)},a.readAsDataURL(r[0])}})}function U(){var e,t,r,a=750,s=1334,n=$("#app"),o={p0:0,p1:s,p2:7*s,p3:13*s},u=null,y={},g=!1;function f(){n.attr({width:a,height:s}),e=new p.a.Stage({canvas:n[0],width:a,height:s}),t=new p.a.Ticker(60),t.addTick(e),t.addTick(p.a.Tween),t.start(),e.enableDOMEvent(p.a.event.POINTER_START,!0),e.enableDOMEvent(p.a.event.POINTER_MOVE,!0),e.enableDOMEvent(p.a.event.POINTER_END,!0)}function h(){var e=0,t=$(".cover .progress"),a=$(".cover .progress-bar"),s=m.length;r=new p.a.LoadQueue,r.maxConnections=5,r.add(m),r.on("load",function(r){e++;var n=i()(e/s*100,10);t.html(n+"%"),a.css({width:n+"%"})}).on("error",function(r){e++;var n=i()(e/s*100,10);t.html(n+"%"),a.css({width:n+"%"})}),r.on("complete",function(){v(),x(),w(),$(".cover").addClass("active"),setTimeout(function(){$(".cover").addClass("none")},50),setTimeout(function(){$(".cover").hide(),$(".logo").fadeOut(300)},1400),setTimeout(function(){$("audio").off()},1400)}),r.start()}function v(){for(var t=0;t<Y.length;t++){var a=Y[t];a.propes.mask&&(a.propes.mask=y[a.propes.mask]),a.image&&(a.propes.image=r.get(a.image).content),a.frames&&(a.propes.frames=y[a.frames.split(".")[0]].getSprite(a.frames.split(".")[1])),y[a.id]=new p.a[a.type](a.propes),"Graphics"===a.type&&a.draw.call(y[a.id]),a.touchend&&(y[a.id].touchend=a.touchend,y[a.id].on("touchend",function(){this.touchend()})),"null"!==a.parent&&y[a.id].addTo(a.parent?y[a.parent]:e)}var i=I(380,500),s=I(300,780),n=I(180,570),o=I(400,900);function d(e){y.star.x=e.x,y.star.y=e.y,y.star.scaleX>3&&(y.star.scaleX=1,y.star.scaleY=1),y.star.rotation>90&&(y.star.rotation=0),y.star.rotation=y.star.rotation+.5,y.star.scaleX=y.star.scaleX+.02,y.star.scaleY=y.star.scaleY+.02}var u=new F({P1:i,P2:s,P3:n,P4:o,callback:d});u.start();for(var c=0;c<l.length;c++){var m=l[c];m.el=$("#"+m.id)[0]}}function j(e,t,r){t===20*s&&(n.hide(),$(".video").show(),$("#lansidai").show(),$(".common-container").css({"overflow-y":"scroll"})),window.timer=t;for(var a=Y.length,i=0;i<a;i++)for(var p=Y[i],d=p.animations,u=0;u<d.length;u++){var c=d[u],m=c.value,g=c.time,f=o[p.delay?p.delay:"p1"];t<g[1]+f&&t>g[0]+f?y[p.id][c.prope]=m[0]:t<g[g.length-1]+f&&t>g[g.length-2]+f&&(y[p.id][c.prope]=m[m.length-1]);for(var h=0;h<m.length-1;h++)t<g[h+2]+f&&t>g[h+1]+f&&(y[p.id][c.prope]=Q(m[h],m[h+1],g[h+1]+f,g[h+2]+f,t))}for(var v=0;v<l.length;v++){var j=l[v];j.start&&t<j.start&&!j.el.paused?(j.played="",j.el.pause(),W("min pause "+j.el.id+", top:"+t)):j.end&&t>=j.end&&!j.el.paused?(j.el.pause(),j.played="",W("max pause "+j.el.id+", top:"+t)):j.start&&t>=j.start&&!j.played&&j.el.paused&&(j.end&&t<j.end||!j.end)&&(j.el.play(),j.played=!0,W("play "+j.el.id+", top:"+t))}}function x(){u=new d["Scroller"](j,{zooming:!1,animating:!0,bouncing:!1});var e=function(e){e.stopPropagation(),e.preventDefault(),g=!0,u.doTouchStart(e.touches,e.timeStamp)},t=function(e){g&&(e.stopPropagation(),e.preventDefault(),u.doTouchMove(e.touches,e.timeStamp,e.scale))},r=function(e){u.doTouchEnd(e.timeStamp),g=!1};n.on("touchstart",e).on("touchmove",t).on("touchend",r),u.setDimensions(a,s,a,21*s),window.scroller=u}function w(){$(".filter,.cover").on("touchstart",function(e){e.stopPropagation(),e.preventDefault()})}function b(){for(var e=1;e<l.length;e++)!function(e){var t=$("#"+l[e].id)[0],r=function e(){document.removeEventListener("WeixinJSBridgeReady",e),document.removeEventListener("YixinJSBridgeReady",e),t.play()};$(t).on("play",function(){this.pause()}),t.addEventListener("ended",function(){l[e].played=""});try{t.play()}catch(a){console.error(a)}document.addEventListener("WeixinJSBridgeReady",r,!1),document.addEventListener("YixinJSBridgeReady",r,!1)}(e)}f(),h(),b(),document.addEventListener("WeixinJSBridgeReady",function(){document.getElementById("z0_m1").play(),l[0].played=!0},!1),G(),window.pages=y,window.nyphile=n,window.loadQueue=r,window.musics=l,window.videos=c}$(U)}});
//# sourceMappingURL=app.3bc90d62.js.map