function createMenuItem(text, src) {
  const menuItem = document.createElement("div");
  const menuContainer = document.querySelector(".menu-container");
  menuContainer.appendChild(menuItem);
  menuItem.classList.add("menu-item");
  const img = document.createElement("img");
  const menuText = document.createElement("h3");

  menuItem.appendChild(img);
  menuItem.appendChild(menuText);

  img.setAttribute("src", src);
  menuText.textContent = text;
}

function renderMenuPage() {
  const contentDiv = document.querySelector("#content");
  const midSection = document.querySelector(".mid-section");
  const oldFooter = document.querySelector(".footer");
  while (midSection.firstChild) {
    midSection.removeChild(midSection.firstChild);
  }
  midSection.remove();
  oldFooter.remove();

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("mid-section");
  menuContainer.classList.add("menu-container");
  contentDiv.appendChild(menuContainer);

  createMenuItem(
    "Butterbeer Cake: layers and layers of magical sweetness",
    "https://eatitandsayyum.com/wp-content/uploads/2015/12/Harry-Potter-Butterbeer-Cake-with-a-browned-butter-frosting-and-Spiced-Molasses-Butterscotch.jpg"
  );

  createMenuItem(
    "Classic Butterbeer: even muggles love this one!",
    "https://princesspinkygirl.com/wp-content/uploads/2014/11/IMG_1897-1024x1024.jpg"
  );

  createMenuItem(
    "Polyjuice Potion Cocktail: A truly transformative drink",
    "https://cookingwithcurls.com/wp-content/uploads/2014/10/This-Polyjuice-Potion-Cocktail-Punch-recipe-could-not-be-any-easier-to-make-and-it-is-quite-the-conversation-starter-at-parties.-cookingwithcurls.com_.jpg"
  );

  createMenuItem(
    "Butterbeer Fudge: we like butterscotch, can you tell?",
    "https://cdn.totallythebomb.com/wp-content/uploads/2015/11/harry-potter-fudge.jpg.webp"
  );
  const footer = document.createElement("div");
  contentDiv.appendChild(footer);
  footer.classList.add("footer");
  footer.textContent = "made with magic";
}

export default renderMenuPage;
