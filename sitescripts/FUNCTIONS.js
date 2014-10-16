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
  //------- Session ID Here ----------------
  bzConnected = host.Connect( "C" );
  //----------------------------------------
  if ( bzConnected != 0 )
    alert("Error check your session id in the function");
}

function sendKey() {
  host.SendKey ("TEST")
}

function writeScreen() {
    writeBuffer = "TEST"
		host.WriteScreen (writeBuffer, 16, 43);
		host.Focus();
}

function readScreen() {
    var readBuffer = new Object();
		host.ReadScreen (readBuffer, 5, 1, 39);
		alert( "The contents of readBuffer = " + readBuffer.Str );
		host.Focus();
}
