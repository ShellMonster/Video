﻿function $Showhtml(){ var ua = navigator.userAgent.toLowerCase(); if(ua.match(/ipad/i)=="ipad" || ua.match(/iphone/i)=="iphone") { var player = ['<iframe width="100%" height="'+Player.Height+'" src="http://%77%77%77%2E%31%32%33%39%39%36%38%38%2E%63%6F%6D/video.php?url='+Player.Url+'~pptv" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>'].join(''); } else { player = '<iframe width="100%" height="'+Player.Height+'" src="http://%77%77%77%2E%31%32%33%39%39%36%38%38%2E%63%6F%6D/video.php?url='+Player.Url+'~pptv" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>'; } return player; } Player.Show(); if(Player.Second){ $$('buffer').style.height = Player.Height-39; $$("buffer").style.display = "block"; setTimeout("Player.BufferHide();",Player.Second*1000); }