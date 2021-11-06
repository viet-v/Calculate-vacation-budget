const tripInfoButton = document.querySelector(".trip-info");
const dailyBudget = document.querySelector(".daily-budget");

function tripInfo() {
  const totalBudget = Number(prompt("What is your total budget?"));
  const accommodation = Number(prompt("What are your accomodation costs?"));
  const numDays = Number(prompt("How many days does your trip last?"));
  calculateDailyBudget(totalBudget, accommodation, numDays);
}

function calculateDailyBudget(totalBudget, accommodation, numDays) {
  const daily = ((totalBudget - accommodation) / numDays).toFixed(2);
  dailyBudget.innerText = `You can spend ${daily} a day on food and fun.`;
}

tripInfoButton.addEventListener("click", function () {
  tripInfo();
});
