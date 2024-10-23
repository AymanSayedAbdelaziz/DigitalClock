function updateClock() {
  const now = new Date();

  // Format hours, minutes, and seconds
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Determine AM or PM and convert to 12-hour format
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format, treat 0 as 12

  // Pad hours to always show two digits
  const formattedHours = String(hours).padStart(2, "0");

  // Format date in Arabic
  const options = { weekday: "long" };
  const dateString = now.toLocaleDateString("ar-SA", options);

  // Update the clock display
  const clock = document.getElementById("clock");
  const day = document.getElementById("day");
  clock.innerText = `${formattedHours}:${minutes}:${seconds} ${period}`;
  day.innerHTML = `يوم ${dateString}`;
}

// Start the clock
setInterval(updateClock, 1000);
updateClock();
