document.getElementById("acceptPayment").addEventListener("click", function() {
    document.getElementById("processingState").style.display = "block";
    document.getElementById("successState").style.display = "none";
    document.getElementById("failureState").style.display = "none";

    simulatePayment(true)
        .then(function() {
            document.getElementById("processingState").style.display = "none";
            document.getElementById("successState").style.display = "block";
        })
        .catch(function() {
            document.getElementById("processingState").style.display = "none";
            document.getElementById("failureState").style.display = "block";
        });
});

document.getElementById("rejectPayment").addEventListener("click", function() {
    document.getElementById("processingState").style.display = "block";
    document.getElementById("successState").style.display = "none";
    document.getElementById("failureState").style.display = "none";

    simulatePayment(false)
        .then(function() {
            document.getElementById("processingState").style.display = "none";
            document.getElementById("successState").style.display = "block";
        })
        .catch(function() {
            document.getElementById("processingState").style.display = "none";
            document.getElementById("failureState").style.display = "block";
        });
});

function simulatePayment(accept) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (accept) {
                resolve();
            } else {
                reject();
            }
        }, 2000); 
    });
}
