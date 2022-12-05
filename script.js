// bài 1

const day = document.querySelector("#day"),
    month = document.querySelector("#month"),
    year = document.querySelector("#year"),
    btn_ex1 = document.querySelector(".btn_ex1"),
    result_ex1 = document.querySelector(".result_ex1");

const dayOfMonth = {
    1: {
        "name": "January",
        "short": "Jan",
        "number": 1,
        "days": 31
    },
    2: {
        "name": "February",
        "short": "Feb",
        "number": 2,
        "days": 28
    },
    3: {
        "name": "March",
        "short": "Mar",
        "number": 3,
        "days": 31
    },
    4: {
        "name": "April",
        "short": "Apr",
        "number": 4,
        "days": 30
    },
    5: {
        "name": "May",
        "short": "May",
        "number": 5,
        "days": 31
    },
    6: {
        "name": "June",
        "short": "Jun",
        "number": 6,
        "days": 30
    },
    7: {
        "name": "July",
        "short": "Jul",
        "number": 7,
        "days": 31
    },
    8: {
        "name": "August",
        "short": "Aug",
        "number": 8,
        "days": 31
    },
    9: {
        "name": "September",
        "short": "Sep",
        "number": 9,
        "days": 30
    },
    10: {
        "name": "October",
        "short": "Oct",
        "number": 10,
        "days": 31
    },
    11: {
        "name": "November",
        "short": "Nov",
        "number": 11,
        "days": 30
    },
    12: {
        "name": "December",
        "short": "Dec",
        "number": 12,
        "days": 31
    }
}

btn_ex1.addEventListener("click", () => {

    let d = day.value * 1,
        m = month.value * 1,
        y = year.value * 1;

    let preDate = { d, m, y },
        nextDate = { d, m, y };

    if (m == 1 && d == 1) { // TH ngày đầu năm
        preDate['y'] -= 1;
        preDate['m'] = 12;
        preDate['d'] = 31;

        nextDate['d'] += 1;
    } else if (m == 12 && d == 31) { // TH ngày cuối năm
        preDate['d'] -= 1;

        nextDate['y'] += 1;
        nextDate['m'] = 1;
        nextDate['d'] = 1;
    } else if (d == dayOfMonth[m].days) { // TH ngày cuối tháng
        preDate['d'] -= 1;

        nextDate['m'] += 1;
        nextDate['d'] = 1;
    } else if (d == 1) { // TH ngày đầu tháng
        preDate['m'] -= 1;
        preDate['d'] = dayOfMonth[m - 1].days;

        nextDate['d'] += 1;
    } else { // TH ngày bình thường
        preDate['d'] -= 1;

        nextDate['d'] += 1;
    }

    result_ex1.innerHTML = `The previous day is ${dayOfMonth[preDate['m']].short} ${preDate['d']}, ${preDate['y']} <br> The next day is ${dayOfMonth[nextDate['m']].short} ${nextDate['d']}, ${nextDate['y']}`
})

// bài 2

const month_2 = document.querySelector("#month_2"),
    year_2 = document.querySelector("#year_2"),
    btn_ex2 = document.querySelector(".btn_ex2"),
    result_ex2 = document.querySelector(".result_ex2");

btn_ex2.addEventListener("click", () => {

    let m = month_2.value * 1,
        y = year_2.value * 1;

    if (m == 2 && y % 4 == 0) {
        result_ex2.innerHTML = `This month has 29 days`
    } else {
        result_ex2.innerHTML = `This month has ${dayOfMonth[m].days} days`
    }
})

// bài 3

const num = document.querySelector("#num"),
    btn_ex3 = document.querySelector(".btn_ex3"),
    result_ex3 = document.querySelector(".result_ex3");

btn_ex3.addEventListener("click", () => {

    const numPronuciation = {
        1: 'một',
        2: 'hai',
        3: 'ba',
        4: 'bốn',
        5: 'năm',
        6: 'sáu',
        7: 'bảy',
        8: 'tám',
        9: 'chín'
    }
    let number = num.value * 1;

    if (number % 100 == 0) {
        result_ex3.innerHTML = `How to read this number: ${numPronuciation[number / 100]} trăm`
    } else if (number % 10 == 0) {
        result_ex3.innerHTML = `How to read this number: ${numPronuciation[Math.floor(number / 100)]} trăm ${numPronuciation[number % 100]} chục`
    } else {
        result_ex3.innerHTML = `How to read this number: ${numPronuciation[Math.floor(number / 100)]} trăm ${numPronuciation[Math.floor(number % 100 / 10)]} mươi ${numPronuciation[number % 10]}`
    }
})

// bài 4

const firstName = document.querySelector("#firstName"),
    firstX = document.querySelector("#firstX"),
    firstY = document.querySelector("#firstY"),
    secondName = document.querySelector("#secondName"),
    secondX = document.querySelector("#secondX"),
    secondY = document.querySelector("#secondY"),
    thirdName = document.querySelector("#thirdName"),
    thirdX = document.querySelector("#thirdX"),
    thirdY = document.querySelector("#thirdY"),
    schoolX = document.querySelector("#schoolX"),
    schoolY = document.querySelector("#schoolY"),
    btn_ex4 = document.querySelector(".btn_ex4"),
    result_ex4 = document.querySelector(".result_ex4");

btn_ex4.addEventListener("click", () => {

    let dis_1 = Math.abs(schoolX.value * 1 - firstX.value * 1) ** 2 + Math.abs(schoolY.value * 1 - firstY.value * 1) ** 2,
        dis_2 = Math.abs(schoolX.value * 1 - secondX.value * 1) ** 2 + Math.abs(schoolY.value * 1 - secondY.value * 1) ** 2,
        dis_3 = Math.abs(schoolX.value * 1 - thirdX.value * 1) ** 2 + Math.abs(schoolY.value * 1 - thirdY.value * 1) ** 2;
    console.log(dis_1, dis_2, dis_3);

    if (dis_1 == dis_2 && dis_2 == dis_3) {
        result_ex4.innerHTML = `Everyone has the same distance to school`
    } else if (dis_1 == dis_2) {
        if (dis_1 > dis_3) {
            result_ex4.innerHTML = `${firstName.value} and ${secondName.value} home  is the furthest from school`
        } else {
            result_ex4.innerHTML = `${thirdName.value}'s home is the furthest from school`
        }
    } else if (dis_1 == dis_3) {
        if (dis_1 > dis_2) {
            result_ex4.innerHTML = `${firstName.value} and ${thirdName.value} home  is the furthest from school`
        } else {
            result_ex4.innerHTML = `${secondName.value}'s home is the furthest from school`
        }
    } else if (dis_3 == dis_2) {
        if (dis_3 > dis_1) {
            result_ex4.innerHTML = `${secondName.value} and ${thirdName.value} home  is the furthest from school`
        } else {
            result_ex4.innerHTML = `${firstName.value}'s home is the furthest from school`
        }
    } else if (dis_1 > dis_2) {
        if (dis_1 > dis_3) {
            result_ex4.innerHTML = `${firstName.value}'s home is the furthest from school`
        } else {
            result_ex4.innerHTML = `${thirdName.value}'s home is the furthest from school`
        }
    } else {
        if (dis_2 > dis_3) {
            result_ex4.innerHTML = `${secondName.value}'s home is the furthest from school`
        } else {
            result_ex4.innerHTML = `${thirdName.value}'s home is the furthest from school`
        }
    }
})