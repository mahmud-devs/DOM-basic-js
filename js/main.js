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

// image all propertie

img.setAttribute("src", "./images/Banner.jpg");
img.style.width = "100%";
img.style.backgroundPosition = "center";

// div porperties 

div.style.position = "relative";

// h1 tag all properties


