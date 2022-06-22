function renderHomePage() {
  const contentDiv = document.querySelector("#content");
  const midSection = document.querySelector(".mid-section");
  const oldFooter = document.querySelector(".footer");
  while (midSection.firstChild) {
    midSection.removeChild(midSection.firstChild);
  }
  midSection.remove();
  oldFooter.remove();

  const aboutSection = document.createElement("div");
  const footer = document.createElement("div");
  footer.classList.add("footer");

  contentDiv.appendChild(aboutSection);
  contentDiv.appendChild(footer);
  aboutSection.classList.add("about");
  aboutSection.classList.add("mid-section");

  const aboutTitle = document.createElement("h2");
  aboutSection.appendChild(aboutTitle);
  aboutTitle.textContent = "About";
  const aboutParagraph = document.createElement("p");
  aboutSection.appendChild(aboutParagraph);
  aboutParagraph.textContent =
    "The tastiest treats for our most magical customers. Witches, wizards, and\
    muggles alike come from 'round the world to try our carefully curated drinks and delectable\
    desserts. Come and see us, you're bound to find the experience enchanting.";

  footer.textContent = "made with magic";
}

export default renderHomePage;
