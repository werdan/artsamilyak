/**
 * @author ansam
 */

$(document).ready(function() {
	 jQuery(".warn").hide();
	 jQuery("#sendmailbutton").click(function () {
		 jQuery(".warn").hide();
		 var emailValidatorRegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

		 if (jQuery("#yourname").val().length == 0) {
			 jQuery("#yourname_warn").show();
		 } else if (jQuery("#email").val().length == 0) {
			 jQuery("#youremail_warn").show();
		 } else if (!emailValidatorRegExp.test(jQuery("#email").val())) {
			 jQuery("#youremail_nonvalid_warn").show();
		 } else if (jQuery("#comment").val().length == 0) {
			 jQuery("#yourcomment_warn").show();
		 } else {
			 jQuery("#sendmail").submit();
		 }
	 });
});
