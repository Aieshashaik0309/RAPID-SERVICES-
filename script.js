const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

function toggleMenu() {
  document.getElementById("mainNav").classList.toggle("open");
}

function selectService(serviceName) {
  document.getElementById("service").value = serviceName;
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => document.getElementById("name").focus(), 600);
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.filter;

    document.querySelectorAll(".service-card").forEach(card => {
      const visible = category === "all" || card.dataset.category === category;
      card.style.display = visible ? "" : "none";
    });
  });
});

const dateInput = document.getElementById("date");
const today = new Date();
dateInput.min = today.toISOString().split("T")[0];

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;

  if (!/^[0-9+\-\s]{10,15}$/.test(phone)) {
    showToast("Please enter a valid phone number.");
    return;
  }

  showToast(`Thanks ${name}! Your ${service} request for ${date} has been received.`);
  this.reset();
  dateInput.min = today.toISOString().split("T")[0];
});

document.querySelectorAll("nav a, .footer-links a").forEach(link => {
  link.addEventListener("click", () => document.getElementById("mainNav").classList.remove("open"));
});
