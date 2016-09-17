function falcons_adclick_setcookie(c_name, value, exdays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
	document.cookie = c_name + "=" + c_value;
}

function falcons_adclick_getCookie(c_name) {
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1) {
		c_start = c_value.indexOf(c_name + "=");
	}
	if (c_start == -1) {
		c_value = null;
	} else {
		c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1) {
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start, c_end));
	}
	return c_value;
}

function falcons_adclick_load(falcons_adclick_page, falcons_adclick_allowed) {
	falcons_adclick_page_name = "falcons_adclick_count_" + falcons_adclick_page;
	var falcons_adclick_count = falcons_adclick_getCookie(falcons_adclick_page_name);
	if (falcons_adclick_count != null && falcons_adclick_count >= falcons_adclick_allowed) {
		$('.falcons_adclick_ad').block({
			message: '<b>Clicked</b>',
			css: {
				border: '2px solid #a00'
			}
		});
	}
	$(function() {
		$(".falcons_adclick_ad").click(function(e) {
			var falcons_adclick_count_ = falcons_adclick_getCookie(falcons_adclick_page_name);
			var tosave = 1;
			if (falcons_adclick_count_) {
				tosave = parseInt(falcons_adclick_count_, 10) + 1;
			}
			falcons_adclick_setcookie(falcons_adclick_page_name, tosave, 1);
			falcons_adclick_load(falcons_adclick_page, falcons_adclick_allowed);
		});
	})
}