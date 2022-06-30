function fostaticEnabler() {
	document.getElementById("static_form").hidden = true;
	// document.getElementById("secondary_form").hidden = true;
	document.getElementById("animation_form").hidden = true;
	document.getElementById("emergency_form").hidden = true;
	document.getElementById("hello1").hidden = true;
	document.getElementById("hello2").hidden = true;
	document.getElementById("hello3").hidden = true;
	document.getElementById("hello4").hidden = true;
	document.getElementById("hello5").hidden = true;
	document.getElementById("animation_text").hidden = true;
	document.getElementById("primary_file_obj").hidden = true;
	document.getElementById("primary_logo_pos").hidden = true;
	document.getElementById("static_logo").hidden = true;
	document.getElementById("emergency_text").hidden = true;
	document.getElementById("submit").disabled = true;
	document.getElementById("scrollingticker").style.background = "#00ab66";
	document.getElementById("multimediaticker").style.background = "#292b2c";

	// document.getElementById("occurancysection").hidden = true;
	// document.getElementById("datatimesection").hidden = true;
}

function fosubmit(id) {
	if (id == "multimediaticker") {
		document.getElementById("static_form").hidden = false;
		document.getElementById("multimediaticker").style.background = "#00ab66";
		document.getElementById("scrollingticker").style.background = "#292b2c";
		document.getElementById("primary_form").hidden = true;
		document.getElementById("secondary_form").hidden = true;
		document.getElementById("animation_form").hidden = false;
		document.getElementById("emergency_form").hidden = true;
	}
	if (id == "scrollingticker") {
		document.getElementById("static_form").hidden = true;
		document.getElementById("primary_form").hidden = false;
		document.getElementById("multimediaticker").style.background = "#292b2c";
		document.getElementById("scrollingticker").style.background = "#00ab66";
		document.getElementById("secondary_form").hidden = false;
		document.getElementById("animation_form").hidden = true;
		document.getElementById("emergency_form").hidden = true;
	}
	// if (id == "secondaryticker") {
	// 	document.getElementById("static_form").hidden = true;
	// 	document.getElementById("primary_form").hidden = true;
	// 	document.getElementById("secondary_form").hidden = false;
	// 	document.getElementById("multimediaticker").style.background = "#292b2c";
	// 	document.getElementById("scrollingticker").style.background = "#292b2c";
	// 	document.getElementById("secondaryticker").style.background = "#00ab66";
	// 	document.getElementById("animationticker").style.background = "#292b2c";
	// 	document.getElementById("animation_form").hidden = true;
	// 	document.getElementById("emergency_form").hidden = true;
	// }
	// if (id == "animationticker") {
	// 	document.getElementById("static_form").hidden = true;
	// 	document.getElementById("primary_form").hidden = true;
	// 	document.getElementById("secondary_form").hidden = true;
	// 	document.getElementById("animation_form").hidden = false;
	// 	document.getElementById("multimediaticker").style.background = "#292b2c";
	// 	document.getElementById("scrollingticker").style.background = "#292b2c";
	// 	document.getElementById("secondaryticker").style.background = "#292b2c";
	// 	document.getElementById("animationticker").style.background = "#00ab66";
	// 	document.getElementById("emergency_form").hidden = true;
	// }
	if (id == "emergencyticker") {
		document.getElementById("static_form").hidden = true;
		document.getElementById("primary_form").hidden = true;
		document.getElementById("secondary_form").hidden = true;
		document.getElementById("animation_form").hidden = true;
		document.getElementById("emergency_form").hidden = false;
		document.getElementById("multimediaticker").style.background = "#292b2c";
		document.getElementById("scrollingticker").style.background = "#292b2c";
		// document.getElementById("secondaryticker").style.background = "#292b2c";
		// document.getElementById("animationticker").style.background = "#292b2c";
	}
}

function foeventEnabler(id) {
	var b;
	var select;
	var option;
	if (id == "static_form_data") {
		b = document.getElementById("static_form_data");
		if (b.checked) {
			document.getElementById("animation_form_data").checked = false;
			document.getElementById("hello4").hidden = true;
			document.getElementById("hello1").hidden = false;
		} else {
			document.getElementById("hello1").hidden = true;
		}
	}
	if (id == "primary_form_data") {
		b = document.getElementById("primary_form_data");
		if (b.checked) {
			document.getElementById("hello2").hidden = false;
		} else {
			document.getElementById("hello2").hidden = true;
		}
	}
	if (id == "secondary_form_data") {
		b = document.getElementById("secondary_form_data");
		if (b.checked) {
			document.getElementById("hello3").hidden = false;
		} else {
			document.getElementById("hello3").hidden = true;
		}
	}
	if (id == "animation_form_data") {
		b = document.getElementById("animation_form_data");
		if (b.checked) {
			document.getElementById("static_form_data").checked = false;
			document.getElementById("hello1").hidden = true;
			document.getElementById("hello4").hidden = false;
		} else {
			document.getElementById("hello4").hidden = true;
		}
	}
	if (id == "emergency_form_data") {
		b = document.getElementById("emergency_form_data");
		if (b.checked) {
			document.getElementById("hello5").hidden = false;
		} else {
			document.getElementById("hello5").hidden = true;
		}
	}

	if (id == "checkbox_for_static_logo") {
		b = document.getElementById("checkbox_for_static_logo");
		if (b.checked) {
			document.getElementById("static_logo").hidden = false;
		} else {
			document.getElementById("static_logo").hidden = false;
		}
	}

	if (id == "animation_pos") {
		select = document.getElementById("animation_pos");
		option = select.options[select.selectedIndex];

		if (option.text == "center") {
			document.getElementById("animation_text").hidden = false;
		} else {
			document.getElementById("animation_text").hidden = true;
		}

	}

    if (id == "emergency_pos") {
        select = document.getElementById("emergency_pos");
        option = select.options[select.selectedIndex];

        if (option.text == "Custom") {
            document.getElementById("emergency_text").hidden = false;
        } else {
            document.getElementById("emergency_text").hidden = true;
        }
    }

	if (id == "primary_logo_enabler") {
		b = document.getElementById("primary_logo_enabler");
		if (b.checked) {
			document.getElementById("primary_file_obj").hidden = false;
			document.getElementById("primary_logo_pos").hidden = false;
		} else {
			document.getElementById("primary_file_obj").hidden = true;
			document.getElementById("primary_logo_pos").hidden = true;
		}
	}

	if (id == "checkbox_for_static_logo") {
		b = document.getElementById("checkbox_for_static_logo");
		if (b.checked) {
			document.getElementById("static_logo").hidden = false;
		} else {
			document.getElementById("static_logo").hidden = true;
		}
	}

	if (id == "static_pos_box") {
		select = document.getElementById("static_pos_box");
		option = select.options[select.selectedIndex];

		if (option.text == "center") {
			document.getElementById("checkbox_for_static_logo").checked = true;
			document.getElementById("static_logo").hidden = false;
		} else {
			document.getElementById("checkbox_for_static_logo").checked = false;
			document.getElementById("static_logo").hidden = true;
		}
	}
}

function fobuttonenabler() {
	var a = document.getElementById("static_form_data");
	var b = document.getElementById("primary_form_data");
	var c = document.getElementById("secondary_form_data");
	var d = document.getElementById("animation_form_data");
	var e = document.getElementById("emergency_form_data");
	if (a.checked || b.checked || c.checked || d.checked || e.checked) {
		document.getElementById("submit").disabled = false;
	} else {
		document.getElementById("submit").disabled = true;
	}
}

// function foemergencytickerenabler(){
//     var a = document.getElementById("static_form_data");
// 	var b = document.getElementById("primary_form_data");
// 	var c = document.getElementById("secondary_form_data");
// 	var d = document.getElementById("animation_form_data");
// 	var e= document.getElementById("emergency_form_data");

// 	if(e.checked){
// 		if (a.checked || b.checked || c.checked || d.checked) {
// 			if (confirm("Do you want to clear tickers other than emergency ticker")) {
// 				document.getElementById("static_form_data").checked = false;
// 				document.getElementById("primary_form_data").checked = false;
// 				document.getElementById("secondary_form_data").checked = false;
// 				document.getElementById("animation_form_data").checked = false;
// 				document.getElementById("primary_form").hidden = true;
// 				document.getElementById("secondary_form").hidden = true;
// 				document.getElementById("animation_form").hidden = true;
// 				document.getElementById("static_form").hidden = true;
// 			} else {
// 				document.getElementById("emergency_form_data").checked = false;
// 			}
// 		}
// 		// document.getElementById("primary_form").hidden = false;
// 		// document.getElementById("secondary_form").hidden = false;
// 		// document.getElementById("animation_form").hidden = false;
// 		// document.getElementById("static_form").hidden = false;
// 	}
// 	foeventEnabler("emergency_form_data")
// }



function foselectoneticker(id){
	
	if (id=="scrollingticker"){
		document.getElementById("ticker_priority").value = "Medium";
		document.getElementById("ticker_priority").disabled = false;
		document.getElementById("static_form_data").checked = false;
		document.getElementById("animation_form_data").checked = false;
		document.getElementById("hello4").hidden = true;
		document.getElementById("hello1").hidden = true;
		document.getElementById("emergency_form_data").checked = false;
		document.getElementById("hello5").hidden = true;
	}

	if (id=="multimediaticker"){
		document.getElementById("ticker_priority").value = "Medium";
		document.getElementById("ticker_priority").disabled = false;
		document.getElementById("primary_form_data").checked = false;
		document.getElementById("secondary_form_data").checked = false;
		document.getElementById("hello2").hidden = true;
		document.getElementById("hello3").hidden = true;
		document.getElementById("emergency_form_data").checked = false;
		document.getElementById("hello5").hidden = true;
	}

	if (id=="emergencyticker"){
		document.getElementById("static_form_data").checked = false;
		document.getElementById("primary_form_data").checked = false;
		document.getElementById("secondary_form_data").checked = false;
		document.getElementById("animation_form_data").checked = false;
		document.getElementById("hello1").hidden = true;
		document.getElementById("hello2").hidden = true;
		document.getElementById("hello3").hidden = true;
		document.getElementById("hello4").hidden = true;
		document.getElementById("ticker_priority").value = "High";
		document.getElementById("ticker_priority").disabled = true;
	}
}