(()=>{"use strict";function e(e,t){const n=document.createElement("div");document.querySelector(".menu-container").appendChild(n),n.classList.add("menu-item");const o=document.createElement("img"),d=document.createElement("h3");n.appendChild(o),n.appendChild(d),o.setAttribute("src",t),d.textContent=e}(function(){const e=document.getElementById("content"),t=document.createElement("header"),n=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div");e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(d),n.classList.add("nav"),o.classList.add("about"),o.classList.add("mid-section"),d.classList.add("footer"),t.textContent="Three Broomsticks";const c=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div");n.appendChild(c),n.appendChild(i),n.appendChild(a),c.classList.add("home"),i.classList.add("menu"),a.classList.add("contact"),c.textContent="home",i.textContent="menu",a.textContent="contact";const s=document.createElement("h2");o.appendChild(s),s.textContent="About";const m=document.createElement("p");o.appendChild(m),m.textContent="This is the about section on the home page of the website. There will    be info here about the kind of food and all that stuff",d.textContent="made with magic"})(),function(){const t=document.querySelector(".home"),n=document.querySelector(".menu"),o=document.querySelector(".contact");t.addEventListener("click",(()=>{!function(){const e=document.querySelector("#content"),t=document.querySelector(".mid-section"),n=document.querySelector(".footer");for(;t.firstChild;)t.removeChild(t.firstChild);t.remove(),n.remove();const o=document.createElement("div"),d=document.createElement("div");d.classList.add("footer"),e.appendChild(o),e.appendChild(d),o.classList.add("about"),o.classList.add("mid-section");const c=document.createElement("h2");o.appendChild(c),c.textContent="About";const i=document.createElement("p");o.appendChild(i),i.textContent="Welcome to the new about section on the home page of the website. There will    be info here about the kind of food and all that stuff",d.textContent="made with magic"}()})),n.addEventListener("click",(()=>{!function(){const t=document.querySelector("#content"),n=document.querySelector(".mid-section"),o=document.querySelector(".footer");for(;n.firstChild;)n.removeChild(n.firstChild);n.remove(),o.remove();const d=document.createElement("div");d.classList.add("mid-section"),d.classList.add("menu-container"),t.appendChild(d),e("this is the first menu item","https://eatitandsayyum.com/wp-content/uploads/2015/12/Harry-Potter-Butterbeer-Cake-with-a-browned-butter-frosting-and-Spiced-Molasses-Butterscotch.jpg"),e("this is the second menu item","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLMtbqkPcOgiRnFig_D5mdx_ytE8Ue7-vGw&usqp=CAU");const c=document.createElement("div");t.appendChild(c),c.classList.add("footer"),c.textContent="made with magic"}()})),o.addEventListener("click",(()=>{!function(){const e=document.querySelector("#content"),t=document.querySelector(".mid-section"),n=document.querySelector(".footer");for(;t.firstChild;)t.removeChild(t.firstChild);t.remove(),n.remove();const o=document.createElement("div"),d=document.createElement("div");e.appendChild(o),e.appendChild(d),o.classList.add("contact-section"),o.classList.add("mid-section"),d.classList.add("footer");const c=document.createElement("h2");o.appendChild(c),c.textContent="Contact";const i=document.createElement("p");o.appendChild(i),i.textContent="Phone Number: 111 - 111 - 1111",d.textContent="made with magic"}()}))}()})();