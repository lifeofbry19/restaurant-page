import onLoad from "./modules/page-load";
import renderHomePage from "./modules/home";
import renderMenuPage from "./modules/menu";
import renderContactPage from "./modules/contact";

onLoad();

function btnListeners() {
  const homeBtn = document.querySelector(".home");
  const menuBtn = document.querySelector(".menu");
  const contactBtn = document.querySelector(".contact");

  homeBtn.addEventListener("click", () => {
    renderHomePage();
  });

  menuBtn.addEventListener("click", () => {
    renderMenuPage();
  });
  contactBtn.addEventListener("click", () => {
    renderContactPage();
  });
}

btnListeners();
