/*

=== create elements ===

*/
const body = document.body;
const div = document.createElement("div");
const h1 = document.createElement("h1");
const img = document.createElement("img");
const button = document.createElement("button");

// ====== append all tags

body.appendChild(div);
div.appendChild(img);
div.appendChild(h1);
div.appendChild(button);
// div.appendChild(div);

// image all propertie

img.setAttribute("src", "./images/Banner.jpg");
img.style.width = "100%";
img.style.backgroundPosition = "center";

// div porperties

div.style.position = "relative";

// h1 tag all properties

h1.innerHTML = "This is a big img";

h1.style.position = "absolute";
h1.style.left = "50%";
h1.style.top = "20%";
h1.style.transform = "translateX(-50%)";
h1.style.textTransform = "upperCase";
h1.style.fontSize = "60px";
h1.style.margin = "0px";

// button tag all properties

button.innerHTML = "Click Me";
button.style.position = "absolute";
button.style.left = "50%";
button.style.top = "30%";
button.style.transform = "translateX(-50%)";
button.style.padding = "15px 30px ";
button.style.background = "#1c1e53 ";
button.style.color = "#FFF ";
button.style.borderRadius = "25px ";
button.style.fontWeight = "700 ";
button.style.cursor = "pointer ";

// button event function

button.addEventListener("click", () => {});
