// simple jquery method using moment.js to show time with #time id selected and .text
$("#time").text(moment().format('ddd MMM Do, YYYY'));

const eightAm = new Date('June 7, 2022 08:00:00');
const nineAm = new Date('June 7, 2022 09:00:00');
const tenAm = new Date('June 7, 2022 10:00:00');
const elevenAm = new Date('June 7, 2022 11:00:00');
const twelvePm = new Date('June 7, 2022 12:00:00');
const onePm = new Date('June 7, 2022 13:00:00');
const twoPm = new Date('June 7, 2022 14:00:00');
const threePm = new Date('June 7, 2022 15:00:00');
const fourPm = new Date('June 7, 2022 16:00:00');
const fivePm = new Date('June 7, 2022 17:00:00');

// function to update background color every minute
function updateBackground() {

    // 8 am section
    const eightAmEl = document.getElementById('eightAmEl');
    const eightAmElInput = document.getElementById('eightAmElInput');
    if (eightAm < Date.now()) {
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
    if (nineAm < Date.now()) {
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
    if (tenAm < Date.now()) {
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
    if (elevenAm < Date.now()) {
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
    if (twelvePm < Date.now()) {
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
    if (onePm < Date.now()) {
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
    if (twoPm < Date.now()) {
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
    if (threePm < Date.now()) {
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
    if (fourPm < Date.now()) {
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
    if (fivePm < Date.now()) {
        fivePmEl.style.backgroundColor = 'red';
        fivePmElInput.style.backgroundColor = 'red';
        // added display none below so that once time passes, you can no longer input a task
        fivePmElInput.style.display = 'none';
    } else {
        fivePmEl.style.backgroundColor = 'green';
        fivePmElInput.style.backgroundColor = 'green';
    };

};


var saveButton = document.querySelector('#save-tasks');

saveButton.addEventListener('click', function () {

    var taskInput = document.querySelector('#eightAmElInput', '#nineAmElInput', '#tenAmElInput', '#elevenAmElInput', '#twelvePmElInput', '#onePmElInput', '#twoPmElInput', '#threePmElInput', '#fourPmElInput', '#fivePmElInput');
    localStorage.setItem('inputName', taskInput.val());
})

setInterval(updateBackground, 1000 * 60);
updateBackground();