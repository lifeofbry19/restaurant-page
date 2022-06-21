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
    "this is the first menu item",
    "https://eatitandsayyum.com/wp-content/uploads/2015/12/Harry-Potter-Butterbeer-Cake-with-a-browned-butter-frosting-and-Spiced-Molasses-Butterscotch.jpg"
  );

  createMenuItem(
    "this is the second menu item",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLMtbqkPcOgiRnFig_D5mdx_ytE8Ue7-vGw&usqp=CAU"
  );
  const footer = document.createElement("div");
  contentDiv.appendChild(footer);
  footer.classList.add("footer");
  footer.textContent = "made with magic";
}

export default renderMenuPage;
