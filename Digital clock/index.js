function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Determine AM or PM
    const period = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format (remove 24-hour format)
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle 0 (midnight) as 12

    // Add leading zero if the number is less than 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Format time as hh:mm:ss AM/PM
    const timeString = `${hours}:${minutes}:${seconds} ${period}`;
    
    // Set the time in the clock div
    clockElement.textContent = timeString;
}

// Call updateClock every 1000ms (1 second)
setInterval(updateClock, 1000);

// Initial call to show the clock immediately
updateClock();
