import "../lib/check";
import './index.css'

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



    $('#left-btn').on('click', e => {
        // http://api.hongyu.ren/lsd/posters
        // 参数
        // openid   微信openid
        // w   浏览器可见宽度
        // h   浏览器可见高度
        const data = {
            openid: window.$userinfo && window.$userinfo.openid,
            w: $(window).width(),
            h: $(window).height(),
        }

        $.post('http://api.hongyu.ren/lsd/posters', data, function (response) {
            $('#poster-img').attr('src', response.data.imgurl)
            $('#lansidai').hide()
            $('#pages').hide()
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

        const data = {
            store_name,
            store_address,
            store_image: uploadImage,
            name,
            w: $(window).width(),
            h: $(window).height(),
        }

        $.post('http://api.hongyu.ren/lsd/apply', data, function (response) {
            $('#wall-image').attr('src', response.data.imgurl)
            $('#form').hide()
            $('#pages').hide()
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



initPoster();
