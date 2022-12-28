let bar = document.querySelector(".mobbar");
let toggler = document.querySelector(".mobmenu");
let moblink = document.querySelector(".moblink")
let downloads = document.querySelector(".downnw")
toggler.addEventListener("click", function () {
  bar.classList.toggle("open");
  moblink.classList.toggle("show")
  downloads.classList.toggle("show")
});