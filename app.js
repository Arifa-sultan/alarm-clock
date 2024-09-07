// JavaScript for the alarm clock functionality

// Function to update the time every second
function updateClock() {
    const clock = new Date();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour clock to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;  // 12-hour clock doesn't have 0 as an hour

    // Add leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the clock display
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;

    checkAlarm(hours, minutes, ampm);  // Check if the alarm time matches
}

// Alarm variables
let alarmTime = null;
let alarmSet = false;

// Function to set the alarm
document.getElementById('setAlarmButton').addEventListener('click', () => {
    const alarmInput = document.getElementById('alarmTime').value;
    if (alarmInput) {
        alarmTime = formatTime(alarmInput);
        alarmSet = true;
        document.getElementById('alarmMessage').textContent = `Alarm set for ${alarmTime}`;
    } else {
        document.getElementById('alarmMessage').textContent = 'Please select a valid time.';
    }
});

// Function to format the alarm time to match the clock format
function formatTime(time) {
    let [hours, minutes] = time.split(':');
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;  // Convert to 12-hour format
    return `${hours < 10 ? '0' + hours : hours}:${minutes} ${ampm}`;
}

// Function to check the alarm
function checkAlarm(hours, minutes, ampm) {
    if (alarmSet && `${hours}:${minutes} ${ampm}` === alarmTime) {
        alert('Wake up! Alarm ringing!');
        alarmSet = false;  // Reset the alarm after it rings
    }
}

// Call updateClock every second
setInterval(updateClock, 1000);

// Start the clock immediately
updateClock();
