/**
 * Created by macos on 2018/11/18.
 */

$.ajax({
    type: 'post',
    url: 'http://api.hongyu.ren/wechat/share',
    data:{"url":location.href},
    dataType: "json",
    success: function (res){

        data = res['data']['data'];
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data['appId'], // 必填，公众号的唯一标识
            timestamp: data['timestamp'], // 必填，生成签名的时间戳
            nonceStr: data['nonceStr'], // 必填，生成签名的随机串
            signature: data['signature'],// 必填，签名
            url: data['url'],
            jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
        });
        initShar();
    },
    error: function (data){
        console.log("加载系统变量失败，请刷新重试","登录错误");
    }
});

function initShar() {
    wx.onMenuShareTimeline({
        title: '蓝丝带活动',
        desc: '蓝丝带活动',
        link: dataSDK.dealUrl('http://mapp.hongyu.ren/2019/03/lsd/index.html'),
        imgUrl: 'http://mapp.hongyu.ren/2019/03/lsd/images/share.png',
        success: function(res){
            dataSDK.share('timeline');
        }
    });
    wx.onMenuShareAppMessage({
        title: '蓝丝带活动',
        desc: '蓝丝带活动',
        link: dataSDK.dealUrl('http://mapp.hongyu.ren/2019/03/lsd/index.html'),
        imgUrl: 'http://mapp.hongyu.ren/2019/03/lsd/images/share.png',
        success: function(res){
            dataSDK.share('message');
        }
    });
}

wx.ready(initShar);
var shar = function(){
    // console.log("分享了")
}