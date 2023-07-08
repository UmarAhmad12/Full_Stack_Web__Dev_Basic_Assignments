
{
  // this code is for humbugger toggle.
  const hamburger = document.querySelector(".humbugger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
}
