// simple jquery method using moment.js to show time with #time id selected and .text
$("#time").text(moment().format('ddd MMM Do, YYYY'));

const eightAm = moment().set('hour', 8);
const nineAm = moment().set('hour', 9);
const tenAm = moment().set('hour', 10);
const elevenAm = moment().set('hour', 11);
const twelvePm = moment().set('hour', 12);
const onePm = moment().set('hour', 13);
const twoPm = moment().set('hour', 14);
const threePm = moment().set('hour', 15);
const fourPm = moment().set('hour', 16);
const fivePm = moment().set('hour', 17);
const sixPm = moment().set('hour', 18);

// function to check time and see if time has passed, functions interval is set to 1 minute
function checkTime() {

    // 8 am section
    const eightAmEl = document.getElementById('eightAmEl');
    const eightAmElInput = document.getElementById('eightAmElInput');
    if (moment().isAfter(eightAm)) {
        eightAmEl.style.backgroundColor = 'red';
        eightAmElInput.style.backgroundColor = 'red';
        // added display none below so that once time passes, you can no longer input a task
        eightAmElInput.style.display = 'none';
    } else {
        eightAmEl.style.backgroundColor = 'green';
        eightAmElInput.style.backgroundColor = 'green';
    };

    //9 am section
    const nineAmEl = document.getElementById('nineAmEl');
    const nineAmElInput = document.getElementById('nineAmElInput');
    if (moment().isAfter(nineAm)) {
        nineAmEl.style.backgroundColor = 'red';
        nineAmElInput.style.backgroundColor = 'red';
        // added display none below so that once time passes, you can no longer input a task
        nineAmElInput.style.display = 'none';
    } else {
        nineAmEl.style.backgroundColor = 'green';
        nineAmElInput.style.backgroundColor = 'green';
    };


    //10 am section
    const tenAmEl = document.getElementById('tenAmEl');
    const tenAmElInput = document.getElementById('tenAmElInput');
    if (moment().isAfter(tenAm)) {
        tenAmEl.style.backgroundColor = 'red';
        tenAmElInput.style.backgroundColor = 'red';
        // added display none below so that once time passes, you can no longer input a task
        tenAmElInput.style.display = 'none';
    } else {
        tenAmEl.style.backgroundColor = 'green';
        tenAmElInput.style.backgroundColor = 'green';
    };


    //11 am section
    const elevenAmEl = document.getElementById('elevenAmEl');
    const elevenAmElInput = document.getElementById('elevenAmElInput');
    if (moment().isAfter(elevenAm)) {
        elevenAmEl.style.backgroundColor = 'red';
        elevenAmElInput.style.backgroundColor = 'red';
        // added display none below so that once time passes, you can no longer input a task
        elevenAmElInput.style.display = 'none';
    } else {
        elevenAmEl.style.backgroundColor = 'green';
        elevenAmElInput.style.backgroundColor = 'green';
    };


    //noon section
    const twelvePmEl = document.getElementById('twelvePmEl');
    const twelvePmElInput = document.getElementById('twelvePmElInput');
    if (moment().isAfter(twelvePm)) {
        twelvePmEl.style.backgroundColor = 'red';
        twelvePmElInput.style.backgroundColor = 'red';
        // added display none below so that once time passes, you can no longer input a task
        twelvePmElInput.style.display = 'none';
    } else {
        twelvePmEl.style.backgroundColor = 'green';
        twelvePmElInput.style.backgroundColor = 'green';
    };


    //1 pm section
    const onePmEl = document.getElementById('onePmEl');
    const onePmElInput = document.getElementById('onePmElInput');
    if (moment().isAfter(onePm)) {
        onePmEl.style.backgroundColor = 'red';
        onePmElInput.style.backgroundColor = 'red';
        // added display none below so that once time passes, you can no longer input a task
        onePmElInput.style.display = 'none';
    } else {
        onePmEl.style.backgroundColor = 'green';
        onePmElInput.style.backgroundColor = 'green';
    };


    //2 pm section
    const twoPmEl = document.getElementById('twoPmEl');
    const twoPmElInput = document.getElementById('twoPmElInput');
    if (moment().isAfter(twoPm)) {
        twoPmEl.style.backgroundColor = 'red';
        twoPmElInput.style.backgroundColor = 'red';
        // added display none below so that once time passes, you can no longer input a task
        twoPmElInput.style.display = 'none';
    } else {
        twoPmEl.style.backgroundColor = 'green';
        twoPmElInput.style.backgroundColor = 'green';
    };


    //3pm section
    const threePmEl = document.getElementById('threePmEl');
    const threePmElInput = document.getElementById('threePmElInput');
    if (moment().isAfter(threePm)) {
        threePmEl.style.backgroundColor = 'red';
        threePmElInput.style.backgroundColor = 'red';
        // added display none below so that once time passes, you can no longer input a task
        threePmElInput.style.display = 'none';
    } else {
        threePmEl.style.backgroundColor = 'green';
        threePmElInput.style.backgroundColor = 'green';
    };


    //4 pm section
    const fourPmEl = document.getElementById('fourPmEl');
    const fourPmElInput = document.getElementById('fourPmElInput');
    if (moment().isAfter(fourPm)) {
        fourPmEl.style.backgroundColor = 'red';
        fourPmElInput.style.backgroundColor = 'red';
        // added display none below so that once time passes, you can no longer input a task
        fourPmElInput.style.display = 'none';
    } else {
        fourPmEl.style.backgroundColor = 'green';
        fourPmElInput.style.backgroundColor = 'green';
    };


    //5pm section
    const fivePmEl = document.getElementById('fivePmEl');
    const fivePmElInput = document.getElementById('fivePmElInput');
    if (moment().isAfter(fivePm)) {
        fivePmEl.style.backgroundColor = 'red';
        fivePmElInput.style.backgroundColor = 'red';
        // added display none below so that once time passes, you can no longer input a task
        fivePmElInput.style.display = 'none';
    } else {
        fivePmEl.style.backgroundColor = 'green';
        fivePmElInput.style.backgroundColor = 'green';
    };

    // 6pm section
    const sixPmEl = document.getElementById('sixPmEl');
    const sixPmElInput = document.getElementById('sixPmElInput');
    if (moment().isAfter(sixPm)) {
        sixPmEl.style.backgroundColor = 'red';
        sixPmElInput.style.backgroundColor = 'red';
        // added display none below so that once time passes, you can no longer input a task
        sixPmElInput.style.display = 'none';
    } else {
        sixPmEl.style.backgroundColor = 'green';
        sixPmElInput.style.backgroundColor = 'green';
    };


};

allNames = []

function submit() {
    var input8 = document.getElementById("sixPmElInput").value;
    var allNames = JSON.parse(localStorage.getItem("allNames")) || [];
    allNames.push(input8);
    localStorage.setItem("allNames", JSON.stringify(allNames));
    document.getElementById("sixPmElInput").value = '';
    document.getElementById("sixPmEl").textContent = localStorage.getItem("allNames");
}

document.getElementById("sixPmElInput").textContent = localStorage.getItem("allNames");

setInterval(checkTime, 1000 * 60);
checkTime();

// '#eightAmElInput', '#nineAmElInput', '#tenAmElInput', '#elevenAmElInput', '#twelvePmElInput', '#onePmElInput', '#twoPmElInput', '#threePmElInput', '#fourPmElInput', '#fivePmElInput'

// const nineAm = new Date('June 7, 2022 09:00:00');
// const tenAm = new Date('June 7, 2022 10:00:00');
// const elevenAm = new Date('June 7, 2022 11:00:00');
// const twelvePm = new Date('June 7, 2022 12:00:00');
// const onePm = new Date('June 7, 2022 13:00:00');
// const twoPm = new Date('June 7, 2022 14:00:00');
// const threePm = new Date('June 7, 2022 15:00:00');
// const fourPm = new Date('June 7, 2022 16:00:00');
// const fivePm = new Date('June 7, 2022 17:00:00');