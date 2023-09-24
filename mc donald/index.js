let button = document.getElementById("btn")

let randomTime = Math.floor(Math.random() * 5) + 1;
let random = randomTime * 1000;
let OrderRandom = Math.floor(Math.random() * 1000) + 1;
let orderid1 = document.getElementById("oderid");

button.addEventListener("click", function(e) {
    setTimeout(function() {
        new Promise(function(resolve, reject) {
            document.getElementById("order").style.display = "block";
            resolve(orderid1.textContent = OrderRandom);
        }).then(res => {
            console.log(res);
        })
    }, random);
})
