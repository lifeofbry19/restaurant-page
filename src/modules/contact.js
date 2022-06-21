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
  contactSection.appendChild(contactInfo);
  contactInfo.textContent = "Phone Number: 111 - 111 - 1111";

  footer.textContent = "made with magic";
}

export default renderContactPage;
