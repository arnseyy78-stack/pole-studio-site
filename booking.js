const classType = document.getElementById("classType");
const priceDisplay = document.getElementById("priceDisplay");

classType.addEventListener("change", function () {
  if (classType.value === "Private Class") {
    priceDisplay.textContent = "Private Class: ₱1,500 per student";
  } else if (classType.value) {
    priceDisplay.textContent = classType.value + ": ₱800 per student";
  } else {
    priceDisplay.textContent = "Please select a class to see the price.";
  }
});

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const selectedClass = document.getElementById("classType").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const students = document.getElementById("students").value;

  const message =
    `Hi Legacy Studio, I would like to book a class.%0A%0A` +
    `Name: ${name}%0A` +
    `Mobile: ${phone}%0A` +
    `Email: ${email}%0A` +
    `Class: ${selectedClass}%0A` +
    `Date: ${date}%0A` +
    `Time: ${time}%0A` +
    `Students: ${students}%0A%0A` +
    `I will send my proof of payment.`;

  const whatsappNumber = "639063782296";

  const whatsappLink =
    `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

  const confirmationBox = document.getElementById("confirmationBox");

  confirmationBox.classList.remove("hidden");

  confirmationBox.innerHTML = `
    <h3>Thank you, ${name}!</h3>
    <p>Your booking request has been created.</p>
    <p>Please complete payment and send proof of payment.</p>
    <a class="booking-btn" href="${whatsappLink}" target="_blank">
      Send Booking on WhatsApp
    </a>
  `;
});
