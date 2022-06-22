function onLoad() {
  const contentDiv = document.getElementById("content");
  const header = document.createElement("header");
  const nav = document.createElement("div");
  const aboutSection = document.createElement("div");
  const footer = document.createElement("div");

  contentDiv.appendChild(header);
  contentDiv.appendChild(nav);
  contentDiv.appendChild(aboutSection);
  contentDiv.appendChild(footer);

  nav.classList.add("nav");
  aboutSection.classList.add("about");
  aboutSection.classList.add("mid-section");
  footer.classList.add("footer");

  header.textContent = "Tonks' Tasty Treats";

  const homeBtn = document.createElement("div");
  const menuBtn = document.createElement("div");
  const contactBtn = document.createElement("div");

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  homeBtn.classList.add("home");
  menuBtn.classList.add("menu");
  contactBtn.classList.add("contact");
  homeBtn.textContent = "home";
  menuBtn.textContent = "menu";
  contactBtn.textContent = "contact";

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

export default onLoad;
