const humberger = document.querySelector(".open");
const cross = document.querySelector(".close>img");
const sideBar = document.querySelector(".nav-links-mb");
humberger.addEventListener("click", (e) => {
  sideBar.classList.toggle("active");
  document.body.classList.add("op");
  
});
cross.addEventListener("click", (e) => {
  sideBar.classList.toggle("active");
  document.body.classList.remove("op");
  
});
