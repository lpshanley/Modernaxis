function pageLoad() {
  startTime();
  bzConnect();
}

function startTime() {
    var today=new Date();
    var h=today.getHours();
	if (h > 12) {
		h = h - 12
	};
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('bottom_clock').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}

function bzConnect() {
  host = new ActiveXObject( "BZWhll.WhllObj" );
  bzConnected = host.Connect( "A" );
  if ( bzConnected != 0 )
    alert("Error check your session id in the function");
}

function sendKey() {
  host.SendKey ("TEST")
}
