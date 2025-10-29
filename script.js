//your JS code here. If required.

const div = document.querySelector("#container");
const btn = document.querySelector("#enterBtn");

btn.addEventListener("click", () => {
	div.innerHTML = `
      <div id="status">
        <h1>Entered Metaverse</h1>
      </div>
    `;
})