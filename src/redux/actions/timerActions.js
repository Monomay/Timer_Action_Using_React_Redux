// define action constants here
const START_TIMER = "start time";
const PAUSE_TIMER = "pause time";
const RESET_TIMER = "reset time";
const INCREMENT_TIMER = "increment time";
// define action creators here
const startTimer =(index)=>({index, type: START_TIMER});
const pauseTimer =(index)=>({index, type: PAUSE_TIMER});
const resetTimer = (index)=>({index, type: RESET_TIMER});
const incrementTimer = (index)=>({index, type: INCREMENT_TIMER});

export {START_TIMER,PAUSE_TIMER,RESET_TIMER,INCREMENT_TIMER, startTimer, pauseTimer, resetTimer, incrementTimer};