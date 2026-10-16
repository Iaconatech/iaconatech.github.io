/* Business contact email. Keep the matching link in index.html in sync. */
const CONTACT_EMAIL = "contact@iaconatech.com";
const emailButton = document.getElementById("email-cta");
const emailStatus = document.getElementById("email-status");
if (CONTACT_EMAIL) {
  emailButton.href = `mailto:${CONTACT_EMAIL}?subject=Technology%20consulting%20inquiry`;
  emailStatus.textContent = CONTACT_EMAIL;
} else {
  emailButton.addEventListener("click", () => {
    emailStatus.textContent = "The business contact email is awaiting confirmation.";
  });
}
document.getElementById("year").textContent = new Date().getFullYear();
