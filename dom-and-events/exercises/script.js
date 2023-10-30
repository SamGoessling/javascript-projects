function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston, we have liftoff!';
    });
    
    missionAbort.addEventListener('mouseover', event => {
        missionAbort.style.backgroundColor = 'red';
    });
    
    missionAbort.addEventListener('mouseout', event => {
        missionAbort.style.backgroundColor = "";
    });
    
    missionAbort.addEventListener('click', event => {
        let isConfirmed = confirm('Are you sure you want to abort the mission?');
        if (isConfirmed) {
            paragraph.innerHTML = 'Mission aborted! Space shuttle returning home.';
        }
    });
}

window.addEventListener("load", init);