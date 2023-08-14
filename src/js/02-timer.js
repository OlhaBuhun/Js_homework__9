import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// console.log(flatpickr);



const refs = {
  timer : document.querySelector('.timer'),
  input : document.querySelector('#datetime-picker'),
  buttonStart : document.querySelector('button'),
  dataDay : document.querySelector('[data-days]'),
  dataHours : document.querySelector('[data-hours]'),
  dataMinutes : document.querySelector('[data-minutes]'),
  dataSecondes : document.querySelector('[data-seconds]'),
}

// console.log(dataDay);
refs.buttonStart.addEventListener('click', onStartTimer);
refs.input.addEventListener('click', onInput);



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0].getTime();
    console.log(selectedDate);
    const currentData = Date.now();
    console.log(currentData);

    if(selectedDate < currentData){
      alert ("Please choose a date in the future") ;
    } else {
      const timerId = setInterval(() => {
        const currentTime = Date.now();
            const deltaTime =  selectedDate - currentTime;
            const { days, hours, minutes, seconds } = convertMs(deltaTime)
            console.log(`${days}:${hours}:${minutes}:${seconds}`);
           }, 1000)
      
        
    }
    
  },
  
};



flatpickr(refs.input, options);
console.dir(options.selectedDate);

function onInput(evt) {

  console.log(evt.target);
  
  

}


function onStartTimer() {
  const currentData = Data.now();
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
