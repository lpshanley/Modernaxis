//---------- On Page Load --------------------

function pageLoad() {
  startTime();
  bzConnect();
}

function testFunction() {
   alert("Test function region");
}

//--------- Clock -----------------------------

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

//-------- Bluezone Connection -----------------

function bzConnect() {
	
  document.getElementById('connection_status').innerHTML = "Connecting...";
	
  host = new ActiveXObject( "BZWhll.WhllObj" );
  //------- Session ID Here ----------------
  bzConnected = host.Connect( "C" );
  //----------------------------------------
  if ( bzConnected != 0 ) {
    alert("Error check your session id in the function");
    document.getElementById('connection_status').innerHTML = "Unable to Connect";
  }else if ( bzConnected == 0 ) {
    document.getElementById('connection_status').innerHTML = "Connected";
  }
  
}

//------- Content Region Swap ------------------------

function content_swap() {

}

//------- Test Functions -----------------------------

function sendKey() {
  host.SendKey ("TEST");
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

//---------- Misc Functions -------------------------

function exitProgram() {
   window.open('', '_self', ''); window.close();
}

//---------- Converted Object Methods ---------------

//function writeScreen(text,row,col) {
//	host.WriteScreen (text, row, col);
//	host.Focus();
//}

//function readScreen(var_name,len,row,col) {
//    var var_name = new Object();
//    host.ReadScreen (nar_name, len, row, col);
//	  host.Focus();
//}

//function sendKey(X) {
//  host.SendKey(X);
//  host.WaitReady(0,0);
//}

//function waitReady(X,Y) {
//  host.waitReady(X,Y);
//}

function setCursor(row,col) {
    Host.SetCursor(row, col);	
}

function getCursor() {
    Host.GetCursor(row, col);
	Return (row, col);	
}

function searchScreen(X) {
    row = 1;
    col = 1;
    Host.Search(X, row, col);
    Return(row, col);  
}

//---------- Basic Key Stroke Functions ----------------

function PF1() {
  host.SendKey ("@1");
  host.WaitReady(0,0);
}

function PF2() {
  host.SendKey ("@2");
  host.WaitReady(0,0);
}

function PF3() {
  host.SendKey ("@3");
  host.WaitReady(0,0);
}

function PF4() {
  host.SendKey ("@4");
  host.WaitReady(0,0);
}

function PF5() {
  host.SendKey ("@5");
  host.WaitReady(0,0);
}

function PF6() {
  host.SendKey ("@6");
  host.WaitReady(0,0);
}

function PF7() {
  host.SendKey ("@7");
  host.WaitReady(0,0);
}

function PF8() {
  host.SendKey ("@8");
  host.WaitReady(0,0);
}

function PF9() {
  host.SendKey ("@9");
  host.WaitReady(0,0);
}

function PF10() {
  host.SendKey ("@a");
  host.WaitReady(0,0);
}

function PF11() {
  host.SendKey ("@b");
  host.WaitReady(0,0);
}

function PF12() {
  host.SendKey ("@c");
  host.WaitReady(0,0);
}

function PF19() {
  host.SendKey ("@j");
  host.WaitReady(0,0);
}

function PF20() {
  host.SendKey ("@k");
  host.WaitReady(0,0);
}

function transmit() {
  host.SendKey ("@E");
  host.WaitReady(0,0);
}

//------------------------------------------------------

