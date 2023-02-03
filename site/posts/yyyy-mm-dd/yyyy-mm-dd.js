function updateDynamicTime() {
	const localDateTime = Temporal.Now.zonedDateTimeISO();

	// Update headlines
	const localDate = localDateTime.toPlainDate();
	const quarter = Math.ceil(localDate.month/3);

	document.getElementById("dynamicToday").innerText = `Today is ${localDate.toString()}`;

	document.getElementById("dynamicWeek").innerText = `${localDate.getISOFields().isoYear}-W${String(localDate.weekOfYear).padStart(2, "0")}`;

	document.getElementById("dynamicQuarter").innerText = `${localDate.year}-Q${quarter}`;

	// Update date and time elements
	Array.from(document.getElementsByClassName("dynamicYear")).forEach(
		(element) => {
			element.innerText = localDateTime.year;
		}
	);

	Array.from(document.getElementsByClassName("dynamicMonth")).forEach(
		(element) => {
			element.innerText = String(localDateTime.month).padStart(2, "0");
		}
	);

	Array.from(document.getElementsByClassName("dynamicMonthNoPad")).forEach(
		(element) => {
			element.innerText = localDateTime.month;
		}
	);

	Array.from(document.getElementsByClassName("dynamicDay")).forEach(
		(element) => {
			element.innerText = String(localDateTime.day).padStart(2, "0");
		}
	);

	Array.from(document.getElementsByClassName("dynamicDayNoPad")).forEach(
		(element) => {
			element.innerText = localDateTime.day;
		}
	);

	Array.from(document.getElementsByClassName("dynamicHours")).forEach(
		(element) => {
			element.innerText = String(localDateTime.hour).padStart(2, "0");
		}
	);

	Array.from(document.getElementsByClassName("dynamicMeridiemHours")).forEach(
		(element) => {
			element.innerText = (localDateTime.hour <= 12)? localDateTime.hour : localDateTime.hour-12;
		}
	);

	Array.from(document.getElementsByClassName("dynamicMinutes")).forEach(
		(element) => {
			element.innerText = String(localDateTime.minute).padStart(2, "0");
		}
	);

	Array.from(document.getElementsByClassName("dynamicSeconds")).forEach(
		(element) => {
			element.innerText = String(localDateTime.second).padStart(2, "0");
		}
	);
	Array.from(document.getElementsByClassName("dynamicMilliseconds")).forEach(
		(element) => {
			element.innerText = String(localDateTime.millisecond).padStart(3, "0");
		}
	);

	Array.from(document.getElementsByClassName("dynamicMeridiem")).forEach(
		(element) => {
			element.innerText = (localDateTime.hour < 12)? "AM" : "PM";
		}
	);

	// Update localized time examples
	const zeroTz = Temporal.Instant.from(localDateTime).toZonedDateTimeISO("+00:00");
	const sanFranciscoTz = Temporal.Instant.from(localDateTime).toZonedDateTimeISO("-08:00");
	const sanFranciscoDSTTz = Temporal.Instant.from(localDateTime).toZonedDateTimeISO("-07:00");

	// UTC
	document.getElementById("dynamicUTC").innerHTML = `<span class="year">${zeroTz.year}</span>-<span class="month">${String(zeroTz.month).padStart(2, "0")}</span>-<span class="day">${String(zeroTz.day).padStart(2, "0")}</span>T<span class="hours">${String(zeroTz.hour).padStart(2, "0")}</span>:<span class="minutes">${String(zeroTz.minute).padStart(2, "0")}</span>Z`;

	// Dublin standard
	document.getElementById("dynamicDublin").innerHTML = `<span class="year">${zeroTz.year}</span>-<span class="month">${String(zeroTz.month).padStart(2, "0")}</span>-<span class="day">${String(zeroTz.day).padStart(2, "0")}</span>T<span class="hours">${String(zeroTz.hour).padStart(2, "0")}</span>:<span class="minutes">${String(zeroTz.minute).padStart(2, "0")}</span>+00:00`;

	// San Francisco PST
	document.getElementById("dynamicSanFrancisco").innerHTML = `<span class="year">${sanFranciscoTz.year}</span>-<span class="month">${String(sanFranciscoTz.month).padStart(2, "0")}</span>-<span class="day">${String(sanFranciscoTz.day).padStart(2, "0")}</span>T<span class="hours">${String(sanFranciscoTz.hour).padStart(2, "0")}</span>:<span class="minutes">${String(sanFranciscoTz.minute).padStart(2, "0")}</span>-08:00`;

	// San Francisco PDT
	document.getElementById("dynamicSanFranciscoDST").innerHTML = `<span class="year">${sanFranciscoDSTTz.year}</span>-<span class="month">${String(sanFranciscoDSTTz.month).padStart(2, "0")}</span>-<span class="day">${String(sanFranciscoDSTTz.day).padStart(2, "0")}</span>T<span class="hours">${String(sanFranciscoDSTTz.hour).padStart(2, "0")}</span>:<span class="minutes">${String(sanFranciscoDSTTz.minute).padStart(2, "0")}</span>-07:00`;

	// Update 52 week progress loader
	document.getElementById("yearProgressInWeeks").value = localDate.weekOfYear;

	// Update quarter progress loader
	document.getElementById("yearProgressInQuarters").value = quarter;
}

window.addEventListener("load", updateDynamicTime);
