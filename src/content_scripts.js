document.querySelectorAll(".incident > tbody > tr")
.forEach(row => {
    const date = row.querySelector("td.date")
    const time = row.querySelector("td.time")
    if (date && time) {
        const datetime = new Date(date.innerHTML + ' ' + time.innerHTML + ' PDT');
        date.innerHTML = datetime.toDateString()
        time.innerHTML = datetime.toTimeString()
    }
});
