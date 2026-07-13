document.getElementById("searchBtn").addEventListener("click", function(){

alert("Welcome to GURUKRUPA TOURS\n\nTicket Search Feature Coming Soon!");

});
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
    registerBtn.addEventListener("click", function () {
        alert("Registration feature will be connected to Firebase soon.");
    });
}
const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {
    continueBtn.addEventListener("click", function () {
        window.location.href = "seat.html";
    });
}
const seats = document.querySelectorAll(".seat");

seats.forEach(seat=>{
    seat.addEventListener("click",function(){
        this.classList.toggle("selected");
    });
});