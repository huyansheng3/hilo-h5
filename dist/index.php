<?php
require('auth.php');
?>
<script>
  window.$userinfo = {};
  window.$userinfo.openid  = "<?php echo $userinfo['openid'];?>";
  window.$userinfo.nickname  = "<?php echo $userinfo['nickname'];?>";
  window.$userinfo.headimgurl  = "<?php echo $userinfo['headimgurl'];?>";
</script>
<?php
require('index.html');
?>