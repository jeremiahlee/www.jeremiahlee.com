// TODO: Replace with Temporal once it becomes available.

function getYearsAgo(dateInPast) {
	const now = new Date();

	const month = now.getMonth() - dateInPast.getMonth();

	return (now.getFullYear()) - dateInPast.getFullYear()
    - ((month < 0 || (month === 0 && now.getDate() < dateInPast.getDate())) ? 1 : 0);
}

// Set Age
document.getElementById("age").innerText = `am ${getYearsAgo(new Date("1984-01-15"))} years old`;

// Set relative marriage
document.getElementById("marriage").innerText = `${getYearsAgo(new Date("2008-10-25"))} years ago`;

// Set relative immigration
document.getElementById("immigration").innerText = `${getYearsAgo(new Date("2017-04-02"))} years ago`;
