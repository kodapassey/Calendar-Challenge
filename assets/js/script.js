// simple jquery method using moment.js to show time with #time id selected and .text
$("#time").text(moment().format('ddd MMM Do, YYYY'));

const eightAm = moment().set('hour', 9);
const nineAm = moment().set('hour', 10);
const tenAm = moment().set('hour', 11);
const elevenAm = moment().set('hour', 12);
const twelvePm = moment().set('hour', 13);
const onePm = moment().set('hour', 14);
const twoPm = moment().set('hour', 15);
const threePm = moment().set('hour', 16);
const fourPm = moment().set('hour', 17);
const fivePm = moment().set('hour', 18);
const sixPm = moment().set('hour', 19);

// selectors for all save buttons (did this as global variables so i can use them outside of function and don't have to define them again).
const eightAmBtn = document.querySelector('#eightAmBtn');
const nineAmBtn = document.querySelector('#nineAmBtn');
const tenAmBtn = document.querySelector('#tenAmBtn');
const elevenAmBtn = document.querySelector('#elevenAmBtn');
const twelvePmBtn = document.querySelector('#twelvePmBtn');
const onePmBtn = document.querySelector('#onePmBtn');
const twoPmBtn = document.querySelector('#twoPmBtn');
const threePmBtn = document.querySelector('#threePmBtn');
const fourPmBtn = document.querySelector('#fourPmBtn');
const fivePmBtn = document.querySelector('#fivePmBtn');
const sixPmBtn = document.querySelector('#sixPmBtn');


// function to check time and see if time has passed, functions interval is set to 1 minute
function checkTime() {

    // 8 am section
    const eightAmEl = document.getElementById('eightAmEl');
    const eightAmElInput = document.getElementById('eightAmElInput');
    if (moment().isAfter(eightAm)) {
        eightAmEl.style.backgroundColor = 'red';
        eightAmElInput.style.backgroundColor = 'red';
        // added display none below so that once time passes, you can no longer input a task and save task button disappears
        eightAmBtn.style.visibility = 'hidden';
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
        // added display none below so that once time passes, you can no longer input a task and save task button disappears
        nineAmBtn.style.visibility = 'hidden';
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
        // added display none below so that once time passes, you can no longer input a task and save task button disappears
        tenAmBtn.style.visibility = 'hidden';
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
        // added display none below so that once time passes, you can no longer input a task and save task button disappears
        elevenAmBtn.style.visibility = 'hidden';
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
        // added display none below so that once time passes, you can no longer input a task and save task button disappears
        twelvePmBtn.style.visibility = 'hidden';
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
        // added display none below so that once time passes, you can no longer input a task and save task button disappears
        onePmBtn.style.visibility = 'hidden';
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
        // added display none below so that once time passes, you can no longer input a task and save task button disappears
        twoPmBtn.style.visibility = 'hidden';
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
        // added display none below so that once time passes, you can no longer input a task and save task button disappears
        threePmBtn.style.visibility = 'hidden';
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
        // added display none below so that once time passes, you can no longer input a task and save task button disappears
        fourPmBtn.style.visibility = 'hidden';
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
        // added display none below so that once time passes, you can no longer input a task and save task button disappears
        fivePmBtn.style.visibility = 'hidden';
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
        // added display none below so that once time passes, you can no longer input a task and save task button disappears
        sixPmBtn.style.visibility = 'hidden';
    } else {
        sixPmEl.style.backgroundColor = 'green';
        sixPmElInput.style.backgroundColor = 'green';
    };


};
// set interval for color code checkTime function
setInterval(checkTime, 1000 * 60);
checkTime();



// 8am localStorage set/getitem
let eightAmVar = document.querySelector('#eightAmElInput');

eightAmVar.value = localStorage.getItem('tasks8');

eightAmBtn.addEventListener('click', event => {
    localStorage.setItem('tasks8', eightAmVar.value)
});


// 9am localStorage set/getitem
let nineAmVar = document.querySelector('#nineAmElInput');

nineAmVar.value = localStorage.getItem('tasks9');

nineAmBtn.addEventListener('click', event => {
    localStorage.setItem('tasks9', nineAmVar.value)
});


// 10am localStorage set/getitem
let tenAmVar = document.querySelector('#tenAmElInput');

tenAmVar.value = localStorage.getItem('tasks10');

tenAmBtn.addEventListener('click', event => {
    localStorage.setItem('tasks10', tenAmVar.value)
});


// 11am localStorage set/getitem
let elevenAmVar = document.querySelector('#elevenAmElInput');

elevenAmVar.value = localStorage.getItem('tasks11');

elevenAmBtn.addEventListener('click', event => {
    localStorage.setItem('tasks11', elevenAmVar.value)
});


// 12pm localStorage set/getitem
let twelvePmVar = document.querySelector('#twelvePmElInput');

twelvePmVar.value = localStorage.getItem('tasks12');

twelvePmBtn.addEventListener('click', event => {
    localStorage.setItem('tasks12', twelvePmVar.value)
});


// 1pm localStorage set/getitem
let onePmVar = document.querySelector('#onePmElInput');

onePmVar.value = localStorage.getItem('tasks1');

onePmBtn.addEventListener('click', event => {
    localStorage.setItem('tasks1', onePmVar.value)
});


// 2pm localStorage set/getitem
let twoPmVar = document.querySelector('#twoPmElInput');

twoPmVar.value = localStorage.getItem('tasks2');

twoPmBtn.addEventListener('click', event => {
    localStorage.setItem('tasks2', twoPmVar.value)
});


// 3pm localStorage set/getitem
let threePmVar = document.querySelector('#threePmElInput');

threePmVar.value = localStorage.getItem('tasks3');

threePmBtn.addEventListener('click', event => {
    localStorage.setItem('tasks3', threePmVar.value)
});


// 4pm localStorage set/getitem
let fourPmVar = document.querySelector('#fourPmElInput');

fourPmVar.value = localStorage.getItem('tasks4');

fourPmBtn.addEventListener('click', event => {
    localStorage.setItem('tasks4', fourPmVar.value)
});


// 5pm localStorage set/getitem
let fivePmVar = document.querySelector('#fivePmElInput');

fivePmVar.value = localStorage.getItem('tasks5');

fivePmBtn.addEventListener('click', event => {
    localStorage.setItem('tasks5', fivePmVar.value)
});


// 6pm localStorage set/getitem
let sixPmVar = document.querySelector('#sixPmElInput');

sixPmVar.value = localStorage.getItem('tasks6');

sixPmBtn.addEventListener('click', event => {
    localStorage.setItem('tasks6', sixPmVar.value)
});




function clearStorage() {
    if (moment().isAfter(sixPm)) {
        localStorage.clear();
    } else {
        console.log("it's not after 6 yet");
    }
};

// set interval for clear storage function
setInterval(clearStorage, 1000 * 60);
clearStorage();