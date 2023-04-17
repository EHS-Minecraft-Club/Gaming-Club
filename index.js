//meet count down

// Define an array of dates to count down to
var dates = ["apr 17, 2023 14:45:00", "apr 18, 2023 14:45:00", "apr 24, 2023 14:45:00", "apr 25, 2023 14:45:00", "may 1, 2023 14:45:00", "may 2, 2023 14:45:00", "may 8, 2023 14:45:00", "may 9, 2023 14:45:00", "may 15, 2023 14:45:00", "may 16, 2023 14:45:00", "may 22, 2023 14:45:00", "may 23, 2023 14:45:00", "may 30, 2023 14:45:00"];

// Initialize the countdown index to zero
var countDownIndex = 0;

// Get the first date from the array
var countDownDate = new Date(dates[countDownIndex]).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="meet"
  document.getElementById("meet").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, set the next date to count down to
  if (distance < 0) {
    // Increment the countdown index
    countDownIndex++;

    // Check if we have reached the end of the array
    if (countDownIndex >= dates.length) {
      clearInterval(x);
      document.getElementById("meet").innerHTML = "See you next year!";
      return;
    }

    // Get the next date from the array
    countDownDate = new Date(dates[countDownIndex]).getTime();

    // Display the new countdown in the element with id="meet"
    document.getElementById("meet").innerHTML = "Next event: " + dates[countDownIndex];
  }
}, 1000);
