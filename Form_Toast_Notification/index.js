const btn = document.getElementById("button");
const toasts = document.getElementById("toasts");
btn.addEventListener("click", () => {
  notificationShow();
});

function notificationShow() {
  const notf = document.createElement("div");
  notf.classList.add("toast");
  notf.innerText = `hello there`;
  toasts.appendChild(notf);
  setTimeout(() => {
    notf.remove();
  },3000);
}
