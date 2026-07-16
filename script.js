 import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// ---------- Register ----------
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
  registerBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration Successful!");
      window.location.href = "login.html";
    } catch (error) {
      alert(error.message);
    }
  });
}

// ---------- Login ----------
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      window.location.href = "booking.html";
    } catch (error) {
      alert(error.message);
    }
  });
}

const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {
  continueBtn.addEventListener("click", () => {
    const passengers = document.getElementById("passengers").value;

    localStorage.setItem("passengers", passengers);

    window.location.href = "seat.html";
  });
}
// ---------- Ertiga Seat Selection ----------

const seats = document.querySelectorAll(".seat[data-seat]");

const maxSeats = parseInt(localStorage.getItem("passengers")) || 1;

let selectedSeats = [];

const farePerSeat = 500;

const seatBox = document.getElementById("selectedSeats");
const fareBox = document.getElementById("totalFare");

function updateSummary() {

  if (seatBox) {
    seatBox.innerHTML =
      selectedSeats.length > 0 ? selectedSeats.join(", ") : "None";
  }

  if (fareBox) {
    fareBox.innerHTML = "₹" + (selectedSeats.length * farePerSeat);
  }
}

seats.forEach((seat) => {

  seat.addEventListener("click", () => {

    const seatNo = seat.dataset.seat;

    if (seat.classList.contains("selected")) {

      seat.classList.remove("selected");

      selectedSeats = selectedSeats.filter(s => s !== seatNo);

      updateSummary();

      return;

    }

    if (selectedSeats.length >= maxSeats) {

      alert("You can select only " + maxSeats + " seat(s).");

      return;

    }

    seat.classList.add("selected");

    selectedSeats.push(seatNo);

    updateSummary();

  });

});

updateSummary();

const bookSeatBtn = document.getElementById("bookSeatBtn");

if (bookSeatBtn) {

  bookSeatBtn.addEventListener("click", () => {

    if (selectedSeats.length !== maxSeats) {

      alert("Please select exactly " + maxSeats + " seat(s).");

      return;

    }

    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));

    window.location.href = "passenger.html";

  });

}

// ---------- Passenger Details ----------
const paymentBtn = document.getElementById("paymentBtn");

if (paymentBtn) {
  paymentBtn.addEventListener("click", () => {

    const fullname = document.getElementById("fullname").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const phone = document.getElementById("phone").value;

    if (fullname === "" || age === "" || phone === "") {
      alert("Please fill all passenger details.");
      return;
    }

    localStorage.setItem("fullname", fullname);
    localStorage.setItem("age", age);
    localStorage.setItem("gender", gender);
    localStorage.setItem("phone", phone);

    window.location.href = "payment.html";
  });
}
// ---------- Payment ----------
const payBtn = document.getElementById("payBtn");

if (payBtn) {
  payBtn.addEventListener("click", () => {

    const paymentMethod =
      document.querySelector('input[name="payment"]:checked').value;

    localStorage.setItem("paymentMethod", paymentMethod);

    if (paymentMethod === "cash") {
      alert("Cash Payment Selected");
      window.location.href = "ticket.html";
    } else {
      alert("Online Payment Selected");
      // आगे Razorpay जोड़ेंगे
      window.location.href = "ticket.html";
    }
  });
                               }
