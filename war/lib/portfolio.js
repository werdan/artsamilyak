/**
 * @author ansam
 */

$(document).ready(function() {
	 jQuery(".clickable a").click(function () {
		  var address = jQuery(this).attr("href");
	      jQuery("#loadedimage").load(address);
	      return false;
	    });
});

