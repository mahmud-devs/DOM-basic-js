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
console.log(div);
