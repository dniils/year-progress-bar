const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentDayOfYear = getDayOfYear(currentDate);
const totalDaysInYear = getDaysInYear(currentYear);

const percentOfYearComplete = (currentDayOfYear / totalDaysInYear) * 100;

const progressFiller = document.querySelector(".progress-bar__filler");
const progressText = document.querySelector(".progress-text");

setTimeout(() => {
  progressFiller.style.width = `${percentOfYearComplete}%`;
}, 200);

progressText.textContent = `${currentYear} is ${percentOfYearComplete.toFixed(
  1
)}% complete`;

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function getDaysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
