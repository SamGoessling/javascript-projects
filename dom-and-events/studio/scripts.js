window.addEventListener("load", function() {

    let takeOffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("rocket");
    
    rocket.style.position = "absolute";
    rocket.style.left = "0px";
    rocket.style.bottom = "0px";

    takeOffButton.addEventListener("click", function() {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result) {
            flightStatus.textContent = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.textContent = parseInt(spaceShuttleHeight.textContent) + 10000;
        }
    });

    landButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.textContent = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.textContent = "0";
        resetRocketPosition();
    });

    abortButton.addEventListener("click", function() {
        let result = window.confirm("Confirm that you want to abort the mission.");
        if (result) {
            flightStatus.textContent = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.textContent = "0";
            resetRocketPosition();
        }
    });

    function resetRocketPosition() {
        rocket.style.left = "0px";
        rocket.style.bottom = "0px";
    }
    
    function checkRocketPosition() {
        const boundaries = {
            left: 0,
            right: shuttleBackground.offsetWidth - rocket.offsetWidth,
            top: 0,
            bottom: shuttleBackground.offsetHeight - rocket.offsetHeight
        };

        if (parseInt(rocket.style.left) < boundaries.left) {
            rocket.style.left = boundaries.left + "px";
        }
        if (parseInt(rocket.style.left) > boundaries.right) {
            rocket.style.left = boundaries.right + "px";
        }
        if (parseInt(rocket.style.bottom) < boundaries.top) {
            rocket.style.bottom = boundaries.top + "px";
        }
        if (parseInt(rocket.style.bottom) > boundaries.bottom) {
            rocket.style.bottom = boundaries.bottom + "px";
        }
    }
    
    document.getElementById("up").addEventListener("click", function() {
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        spaceShuttleHeight.textContent = parseInt(spaceShuttleHeight.textContent) + 10000;
        checkRocketPosition();
    });
    
    document.getElementById("down").addEventListener("click", function() {
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
        spaceShuttleHeight.textContent = parseInt(spaceShuttleHeight.textContent) - 10000;
        checkRocketPosition();
    });
    
    document.getElementById("left").addEventListener("click", function() {
        rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
        checkRocketPosition();
    });
    
    document.getElementById("right").addEventListener("click", function() {
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
        checkRocketPosition();
    });

});