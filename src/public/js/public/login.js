$(document).ready(function(){$("form").bind("keydown",function(e){13===e.keyCode&&$("#loginBtn").click()}),$("#loginBtn").bind("click",function(){var e=$("#username").val(),o=$("#password").val();if(e)if(o)if(o.length<6){$("p.login-bg-error").remove();r='<p class="login-bg-error">请至少输入6位密码</p>';$(".login-bg-btn").before(r)}else $.ajax({dataType:"json",async:!0,data:{username:e,password:o},type:"POST",beforeSend:function(){},success:function(e){var o="登录失败";if(e){if(0==e.code&&e.userId){var r="/"+location.pathname.split("/")[1];return window.location=r,0}e.message&&(o=e.message)}$("p.login-bg-error").remove();var n='<p class="login-bg-error">'+o+"</p>";$(".login-bg-btn").before(n)},error:function(){$("p.login-bg-error").remove();$(".login-bg-btn").before('<p class="login-bg-error">请求失败，请重试！</p>')},complete:function(){}});else{$("p.login-bg-error").remove();r='<p class="login-bg-error">请输入6~16位密码</p>';$(".login-bg-btn").before(r)}else{$("p.login-bg-error").remove();var r='<p class="login-bg-error">请输入用户名，最多16位字符</p>';$(".login-bg-btn").before(r)}})});