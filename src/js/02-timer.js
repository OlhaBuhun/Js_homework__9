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

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0].getTime());
  },
};

const currentTime = new Date();
console.log(currentTime);

flatpickr(refs.input, options);