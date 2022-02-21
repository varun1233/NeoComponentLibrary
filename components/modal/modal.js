const modal = document.querySelector("#swiftui-modal");
const showButton = document.querySelector("#modal-demo");
const closeButton = document.querySelector("#modal-close");
const closeButtonCTA = document.querySelector("#modal-close-cta");

showButton.addEventListener("click", () => {
  modal.classList.add("visible");
  document.body.style.overflow = "hidden";
});
closeButton.addEventListener("click", () => {
  modal.classList.remove("visible");
  document.body.style.overflow = "visible";
});
closeButtonCTA.addEventListener("click", () => {
  modal.classList.remove("visible");
  document.body.style.overflow = "visible";
});
