function test_function_button() {
	alert("Tested and working!");
}
		  
var case_number = 211486;
var footer_month = 10;
var footer_year = 14;

function write_screen_test() {
	var var_text = $('#text_field').val();
	var row_text = $('#row_field').val();
	var col_text = $('#col_field').val();
	writeScreen(var_text,row_text,col_text);
}

function send_key_test() {
	var var_text = $('#key_field').val();
	host.sendKey(var_text);
}

function set_demo_values() {
	case_number = $('#case_number').val();
	footer_month = $('#footer_month').val();
	footer_year = $('#footer_year').val();
}

function check_demo_values() {
	alert("Case Number:   " + case_number + "\nFooter Month:   " + footer_month + "\nFooter Year:       " + footer_year);
}