function renderContactPage() {
  const contentDiv = document.querySelector("#content");
  const midSection = document.querySelector(".mid-section");
  const oldFooter = document.querySelector(".footer");
  while (midSection.firstChild) {
    midSection.removeChild(midSection.firstChild);
  }
  midSection.remove();
  oldFooter.remove();

  const contactSection = document.createElement("div");
  const footer = document.createElement("div");

  contentDiv.appendChild(contactSection);
  contentDiv.appendChild(footer);

  contactSection.classList.add("contact-section");
  contactSection.classList.add("mid-section");
  footer.classList.add("footer");

  const contactTitle = document.createElement("h2");
  contactSection.appendChild(contactTitle);
  contactTitle.textContent = "Contact";
  const contactInfo = document.createElement("p");
  const addressInfo = document.createElement("p");
  contactSection.appendChild(addressInfo);
  contactSection.appendChild(contactInfo);
  addressInfo.textContent = "Location: if you know, you need only ask";
  contactInfo.textContent = "Phone Number: 123 - 456 - 0000";

  footer.textContent = "made with magic";
}

export default renderContactPage;
