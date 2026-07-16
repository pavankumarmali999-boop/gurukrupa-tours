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
    alert("Continue button clicked");
    window.location.href = "seat.html";
  });
}
// ---------- Seat Selection ----------
const seats = document.querySelectorAll(".seat");
let selectedSeat = "";

seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    seats.forEach(s => s.classList.remove("selected"));
    seat.classList.add("selected");
    selectedSeat = seat.innerText;
  });
});

const bookSeatBtn = document.getElementById("bookSeatBtn");

if (bookSeatBtn) {
  bookSeatBtn.addEventListener("click", () => {
    if (selectedSeat === "") {
      alert("Please select a seat.");
      return;
    }

    alert("Seat " + selectedSeat + " selected.");
    window.location.href = "passenger.html";
  });
}
