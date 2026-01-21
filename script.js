
let generatedOtp = "";

//  Register click
function startRegister() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let email = remail.value.trim();
  let password = rpassword.value.trim();

  if (password.length < 4) {
    alert("Password must be at least 4 characters");
    return;
  }

  let exists = users.find(u => u.email === email);
  if (exists) {
    alert("This email is already registered!");
    return;
  }

  generatedOtp = Math.floor(100000 + Math.random() * 900000);

  document.getElementById("showOtp").innerText = generatedOtp;
  document.getElementById("otpBox").style.display = "block";
}

//  OTP verify
function verifyOtp() {
  let enteredOtp = document.getElementById("otpInput").value;

  if (enteredOtp != generatedOtp) {
    alert("Invalid OTP");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let user = {
    name: rname.value,
    email: remail.value.trim(),
    phone: rphone.value,
    password: rpassword.value   // 🔐 password saved
  };

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully!");
  window.location.href = "login.html";
}




// LOGIN
let loginOtp = "";
let currentUserEmail = "";

//  Email + password check
function startLogin() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let enteredEmail = email.value.trim();
  let enteredPassword = password.value.trim();

  let user = users.find(
    u => u.email === enteredEmail && u.password === enteredPassword
  );

  if (!user) {
    alert("Invalid email or password");
    return;
  }

  // generate OTP only if email+password correct
  loginOtp = Math.floor(100000 + Math.random() * 900000);
  currentUserEmail = enteredEmail;

  document.getElementById("showOtp").innerText = loginOtp;
  document.getElementById("otpBox").style.display = "block";
}

//  OTP verify
function verifyLoginOtp() {
  let enteredOtp = document.getElementById("otpInput").value;

  if (enteredOtp != loginOtp) {
    alert("Invalid OTP");
    return;
  }

  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("loggedUser", currentUserEmail);

  window.location.href = "dashboard.html";
}



// DASHBOARD 
// if (window.location.pathname.includes("dashboard")) {
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (!localStorage.getItem("loggedIn")) {
//     window.location.href = "login.html";
//   }

//   if (user.approved) {
//     status.innerHTML = "Status: Approved ✅";
//     content.style.display = "block";
//   } else {
//     status.innerHTML = "Status: Waiting for Approval ⏳";
//   }
// }

// LOGOUT
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// navbar------

 
// INDUSTRY----
document.addEventListener("DOMContentLoaded", function () {

  const items = document.querySelectorAll(".industry-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 120); // stagger effect
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  items.forEach(item => observer.observe(item));
});

// customer---


const cards = document.querySelectorAll(".testimonial-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => observer.observe(card));

// form----





