function start() { //start button functionality 
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop() { //stop button functionality
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}