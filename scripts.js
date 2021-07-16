// Write your JavaScript code here.
// Remember to pay attention to page loading!
/*

23.8.2. The Requirements

    When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
        The rocket image should move 10 px in the direction of the button that was clicked.
        If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.

23.8.3. Bonus Mission

If you are done with the above and have some time left during class, there are a few problems that you can tackle for a bonus mission.

    Keep the rocket from flying off of the background.
    Return the rocket to its original position on the background when it has been landed or the mission was aborted.


*/
let launchButton = document.getElementById("takeoff"); 
let landButton = document.getElementById("landing");
let rocket = document.getElementById("rocket-picture");
let abortButton = document.getElementById("missionAbort");

let upButton = document.getElementById("move-up");
let downButton = document.getElementById("move-down");
let leftButton = document.getElementById("move-left");
let rightButton = document.getElementById("move-right");

let currentFlightStatus = document.getElementById("flightStatus");
let skyColor = document.getElementById("shuttleBackground");
let shuttleHeight = document.getElementById("spaceShuttleHeight");


window.addEventListener('load', function() {
    console.log('LOADED');
    
    this.document.getElementById('takeoff').addEventListener('click', askForLaunch); // launchButton

    this.document.getElementById('landing').addEventListener('click', askForLanding); // landButton

    this.document.getElementById('missionAbort').addEventListener('click', abortMission); // abortButton
})

function askForLaunch() {
   let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
   if (response === true) {
    currentFlightStatus.innerText = "Shuttle in flight";
    skyColor.style="background-color: blue";
    shuttleHeight.innerText = 10000;
   } else {
    alert("no takeoff");
   }
}

// launchButton.addEventListener("click", askForLaunch);

function askForLanding() {
    alert("The shuttle is landing. Landing gear engaged.");
    currentFlightStatus.innerText = "The shuttle has landed.";
    skyColor.style="background-color: green";
    shuttleHeight.innerText = 0;
}

// landButton.addEventListener("click", askForLanding);


function abortMission() {
    let response = window.confirm("Confirm that you want to abort the mission.");
    if (response === true) {
    currentFlightStatus.innerText = "Mission aborted";
    skyColor.style="background-color: green";
    shuttleHeight.innerText = 0;
    } else {
        null;
    }
}

// abortButton.addEventListener("click", abortMission);

