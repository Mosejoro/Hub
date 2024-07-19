const targetDate = new Date("2024-10-22 10:00:00"); // Set your target date and time here

const countdown = document.getElementById("countdown");

const updateTime = () => {
  const now = new Date();
  const diffInMs = targetDate.getTime() - now.getTime();

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

  // Format time values with leading zeros
  const formattedDays = days.toString().padStart(2, "0");
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  // Update the display
  document.getElementById("days").innerHTML = formattedDays;
  document.getElementById("hours").innerHTML = formattedHours;
  document.getElementById("minutes").innerHTML = formattedMinutes;
  document.getElementById("seconds").innerHTML = formattedSeconds;

  // Stop the timer when the countdown reaches 0
  if (diffInMs <= 0) {
    clearInterval(intervalId);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
};

const intervalId = setInterval(updateTime, 1000); // Update time every second

// Header
function smoothScroll(target) {
  const targetElement = document.getElementById(target);
  const headerHeight = document.querySelector('header').offsetHeight; // Adjust selector for your header

  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const targetY = targetElement.offsetTop - headerHeight; // Subtract header height to avoid overlapping

  const distance = targetY - scrollY;
  let start = null;

  requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const ease = progress / 500; // Adjust for desired speed
    const y = ease * distance + scrollY;
    window.scrollTo(0, y);
    if (ease < 1) {
      requestAnimationFrame(step);
    }
  }
}

// Attach the smooth scroll function to your links
const links = document.querySelectorAll('header a[href^="#"]'); // Select links starting with "#"

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default jumping behavior
    const target = this.getAttribute('href').substring(1); // Extract target section ID
    smoothScroll(target);
  });
});
// Header
