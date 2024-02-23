/*

=== create elements ===

*/
const body = document.body;
const div = document.createElement("div");
const div2 = document.createElement("div");
const h1 = document.createElement("h1");
const img = document.createElement("img");
const button = document.createElement("button");
const button2 = document.createElement("button");

// ====== append all tags

body.appendChild(div);
div.appendChild(img);
div.appendChild(h1);
div.appendChild(button);
div.appendChild(button2);
div.appendChild(div2);

// body css

body.style.margin = '0';

// image all propertie

img.setAttribute("src", "./images/Banner.jpg");
img.style.width = "100%";
img.style.backgroundPosition = "center";

// div porperties

div.style.position = "relative";

// div porperties

div2.style.position = "absolute";
div2.style.left = "0";
div2.style.top = "0";
div2.style.width = "100%";
div2.style.height = "100%";
div2.style.zIndex = "1";
div2.style.transition = "ease-in-out 0.3s";
// h1 tag all properties

h1.innerHTML = "This is Light Mode";

h1.style.position = "absolute";
h1.style.left = "50%";
h1.style.top = "20%";
h1.style.transform = "translateX(-50%)";
h1.style.textTransform = "upperCase";
h1.style.fontSize = "72px";
h1.style.margin = "0px";
h1.style.color = "red";
h1.style.zIndex = "10";
h1.style.transition = "ease-in-out 0.3s";

// button tag all properties

button.innerHTML = "Dark Mode";
button.style.position = "absolute";
button.style.left = "55%";
button.style.top = "30%";
