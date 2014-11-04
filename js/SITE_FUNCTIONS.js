//------------------------------ JQuery Doc Ready Functions -----------------------

<<<<<<< HEAD
$(document).ready(function(){
	
	//----------- On Page Load ----------------------
	
	startTime();
	home_set();
	
	//----------- Content AJAX ----------------------
	
	function home_set() {
		$.get( "site_forms/index.html", function( home_page ) {
				$( "#content_wrapper" ).html( home_page );
		});
	};
	
	$(".content_load").click(function(value) {
		$.get( "site_forms/" + value.target.id + ".html", function( data ) {
  			$( "#content_wrapper" ).html( data );
		});
	});	

	$(".connection_method_Button").click(function() {
		var session_id = $('select[name=session_id_short]').val()
		bzConnect(session_id);		
	});
	
});
		
//------------------------------ Normal Functions ----------------------------------
=======
function pageLoad() {
  startTime();
  bzConnect();
}

//------------ Testing Area ------------------

function alert_test() {
	alert("WORKING!");	
}


          //------- Test Data---
          
var case_number = 211486;
var footer_month = 10;
var footer_year = 14;

          //--------------------

function testFunction() {
  alert("Are you in training or production? Navigate to a panel in 211486(training case) this will bring you to STAT/MEMB.");
  navigate_to_screen("STAT","MEMB");
}

function runme() {
	var var_text = document.forms["testform"]["text_field"].value;
	var row_text = document.forms["testform"]["row_field"].value;
	var col_text = document.forms["testform"]["col_field"].value;
	writeScreen(var_text,row_text,col_text);
	return false;
}

function keysendtest() {
  var X = document.forms["sendkeyform"]["key_field"].value;
  host.sendKey(X);
	return false;
}
>>>>>>> origin/alpha

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

function bzConnect(session_id) {
	document.getElementById('connection_status').innerHTML = "Connecting...";
	host = new ActiveXObject( "BZWhll.WhllObj" );
	//------- Session ID Here ----------------
	bzConnected = host.Connect( session_id );
	//----------------------------------------
	if ( bzConnected != 0 ) {
		alert("Session ID was not found. No connection could be made at this time.");
		document.getElementById('connection_status').innerHTML = "Unable to Connect";
	}else if ( bzConnected == 0 ) {
		document.getElementById('connection_status').innerHTML = "Connected";
	}
}

//---------- Misc Functions -------------------------

function exitProgram() {
   window.open('', '_self', ''); window.close();
}

//---------- Converted Object Methods ---------------

function writeScreen(text,row,col) {
	host.WriteScreen (text, row, col);
	host.Focus();
}

function readScreen(len, row, col) {
	var X = new Object();
	host.ReadScreen (X, len, row, col);
	return(X.Str);
}

function sendKey(X) {
  host.SendKey(X);
  host.WaitReady(0,0);
}

function waitReady(X,Y) {
  host.waitReady(X,Y);
}

function setCursor(row,col) {
	Host.SetCursor(row, col);	
}

function getCursor() {
	Host.GetCursor(row, col);
	Return (row, col);	
}

function searchScreen(X) {
  var row = 1;
  var runs = 1;
  while (runs != 25) {
	var rdln = readScreen(80, row, 1)
	var rdln = rdln.search(X)
	if(rdln != -1) {
	  var col = rdln + 1;
	  var runs = 25;
	} else {    
	var row = row + 1;
	var runs = runs + 1;
	}
  }
  if(row == 25) {
	var row = 0;
	var col = 0;
  }
  return {
	row: row,
	col: col
  };
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

//-- Converted VB Functions -----------------------------

function navigate_to_screen(X, Y) {
  sendKey('@E');
  waitReady(0,0);
  var MAXIS_check = readScreen(5, 1, 39);
  if(MAXIS_check == "MAXIS" || MAXIS_check == "AXIS ") {
	var search = searchScreen("Function: ");
	var row = search.row;
	var col = search.col;
	if(row != 0) { 
	  var MAXIS_function = readScreen(4, row, col + 10);
	  var STAT_note_check = readScreen(4, 2, 45);
	  var search = searchScreen("Case Nbr: ");
	  var row = search.row;
	  var col = search.col; 
	  var current_case_number = readScreen(8, row, col + 10);
	  current_case_number = current_case_number.replace("__", "");
	  current_case_number = current_case_number.trim();
	}
	if(current_case_number == case_number && MAXIS_function == X.toUpperCase() && STAT_note_check != "NOTE") { 
	  var search = searchScreen("Command: ");
	  var row = search.row;
	  var col = search.col;
	  writeScreen(Y, row, col + 9);
	  transmit();
	}else {
	  var SELF_check = "";
	  while (SELF_check != "SELF") {
		PF3();
		var SELF_check = readScreen(4, 2, 50);
	  }
	  writeScreen(X, 16, 43);
	  writeScreen("________", 18, 43);
	  writeScreen(case_number, 18, 43);
	  writeScreen(footer_month, 20, 43);
	  writeScreen(footer_year, 20, 46);
	  writeScreen(Y, 21, 70);
	  transmit();
	  var abended_check = readScreen(7, 9, 27);
	  if(abended_check == "abended") {
		transmit();
	  }
	}
  }
}


