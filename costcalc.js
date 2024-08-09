function changeTab(tabName) {
  var i, tabcontent, tablinks;
  // don't display old tab
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  //display new tab
  document.getElementById("t".concat(tabName)).style.display = "block";
};

function setManufacturerValue() {
	var select = document.getElementById("manufacturer");
	var manufacturerValue = select.options[select.selectedIndex].value;
	document.getElementById("manufacturerValue").value = manufacturerValue;
}

function calculate() {
	setManufacturerValue();
	var cost = 15 * document.getElementById("hours").value +
		0.4 * document.getElementById("paint").value +
		(1-document.getElementById("manufacturerValue").value) * document.getElementById("parts").value;
	var profit = document.getElementById("insurancePayout").value - cost;
   	document.getElementById("resultCost").innerHTML = "£".concat(cost.toFixed(2));
	document.getElementById("resultProfit").innerHTML = "£".concat(profit.toFixed(2));
	if (profit < 0) {
		document.getElementById("resultProfit").style.color = "red";
	}
	else {
		document.getElementById("resultProfit").style.color = "blue";
	}
	changeTab(6);
}

function startAgain() {
	document.getElementById("paint").value = null;
	document.getElementById("hours").value = null;
	document.getElementById("manufacturerValue").value = null;
	document.getElementById("parts").value = null;
	document.getElementById("insurancePayout").value = null;
	changeInsuranceImage('gemini.png')
	document.getElementById("resultCost").value = null;
	document.getElementById("resultProfit").value = null;
	changeTab(1);
}

function esure() {
	document.getElementById("insurancePayout").value = '1789';
	changeInsuranceImage('esure.png');
	changeTab(2);
}
function lv() {
	document.getElementById("insurancePayout").value = '2022';
	changeInsuranceImage('lv.png');
	changeTab(2);
}
function changeInsuranceImage(imagefile) {
	var elements = document.getElementsByClassName("insuranceimage");
	for (var i = 0, len = elements.length; i < len; i++) {
		elements[i].src = imagefile;
	}	
}
window.onload = function() {
 changeTab(1);
}
