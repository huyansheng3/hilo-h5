<?php

$code = $_GET['code'] ?? '';

function postCurl($url,$data,$type) {
    if($type == 'json'){
        $data = json_encode($data);//对数组进行json编码
        $header= array("Content-type: application/json;charset=UTF-8","Accept: application/json","Cache-Control: no-cache", "Pragma: no-cache");
    }
    $curl = curl_init();
    curl_setopt($curl,CURLOPT_URL,$url);
    curl_setopt($curl,CURLOPT_POST,1);
    curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,false);
    curl_setopt($curl,CURLOPT_SSL_VERIFYHOST,false);
    if(!empty($data)){
        curl_setopt($curl,CURLOPT_POSTFIELDS,$data);
    }
    curl_setopt($curl,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($curl,CURLOPT_HTTPHEADER,$header);
    $res = curl_exec($curl);
    if(curl_errno($curl)){
        return curl_error($curl);
    }
    curl_close($curl);
    return $res;
}


$locl = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

if (empty($code)) {
    $res = postCurl('http://api.hongyu.ren/wechat/code', array('url'=>$locl), 'json');
    $resarr = json_decode($res, true);
    header('location:'.$resarr['data']['url']);
} else {
    $res = postCurl('http://api.hongyu.ren/wechat/auth', array('code'=>$code, 'pro'=>''), 'json');
    $resarr = json_decode($res, true);
    if ($resarr['status'] == 100) {
        $userinfo = $resarr['data']['userinfo'];
    } else {
        header('location:'.'http://'.$_SERVER['HTTP_HOST'].$_SERVER['SCRIPT_NAME']);
    }
}

//$openid = $_GET['openid'] ?? '';
//$nickname = $_GET['nickname'] ?? '';
//$zl_nickname = base64_decode($zl_nickname);

?>