// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {

    const flightStatus = document.getElementById("flightStatus");
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing")
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const rocket = document.getElementById("rocket");
    rocket.style.left = "145px";
    rocket.style.right = "0px";
    rocket.style.top = "250px";
    rocket.style.down = "0px";

window.addEventListener("load", (event) => {
    console.log("loaded");
});

takeoffButton.addEventListener("click", (event) => {
    let getTakeoffStatus = confirm("Confirm Shuttle is ready for takeoff");
    if (getTakeoffStatus) {
        flightStatus.innerHTML = "Shuttle in Flight";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = 10000;
    }
});
    
    landingButton.addEventListener("click", (event) => {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    upButton.addEventListener("click", () => {
       rocket.style.top = (parseInt(rocket.style.top)-10) + "px";
    });

}

window.addEventListener("load", init);