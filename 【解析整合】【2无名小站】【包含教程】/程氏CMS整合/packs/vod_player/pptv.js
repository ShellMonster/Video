function $Showhtml(){ document.getElementById('playad').style.display = "none"; player = '<iframe width="100%" height="'+height+'" src="http://%77%77%77%2E%31%32%33%39%39%36%38%38%2E%63%6F%6D/video.php?url='+unescape(url)+'~pptv" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>'; document.getElementById('playlist').innerHTML = player; } if(parent.cs_adloadtime){ setTimeout("$Showhtml();",parent.cs_adloadtime*1000); }