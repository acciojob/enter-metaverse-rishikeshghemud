//your JS code here. If required.

const div = document.querySelector("#container");
const btn = document.querySelector("#enterBtn");

btn.addEventListener("click", () => {
	div.innerHTML = "<h1 id='status'>Entered Metaverse</h1>";
})