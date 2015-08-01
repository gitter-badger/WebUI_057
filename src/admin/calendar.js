/*
function createCalendar(cl, year, month) {
	var elem = document.getElementsByClassName(cl)[0];
	var date = new Date(year, month - 1);
	var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>нд</th></tr><tr>';
	month = date.getMonth();

	for (var i = 1; i < getDay(date); i++) {
		table += '<td></td>';
	}

	while (date.getMonth() === month) {
		table += '<td>' + date.getDate() + '</td>';
		if (getDay(date) % 8 === 7) {
			table += '</tr></tr>';
		}
		date.setDate(date.getDate() + 1);

	}

	if (getDay(date) > 1) {
		for (var i = getDay(date); i <= 7; i++) {
			table += '<td></td>';
		}
	}

	table += '</tr></table>';
	elem.innerHTML = table;
}

function getDay(date) {
	var day = date.getDay();
	if (day === 0) day = 7;
	return day;
}

createCalendar('cal', 15, 7);
createCalendar('cal-sm', 15, 7);

var calendar = document.getElementsByClassName('cal')[0];
calendar.getElementsByTagName('table')[0].className = "table table-bordered table-hover";

var calendarSm = document.getElementsByClassName('cal-sm')[0];
calendarSm.getElementsByTagName('table')[0].className = "table table-bordered table-hover";*/
