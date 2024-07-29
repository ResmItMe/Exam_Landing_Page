var scrollButton = document.querySelector(".scroll");
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY || window.pageYOffset;
  var windowHeight = document.documentElement.scrollHeight - window.innerHeight;
  var scrollThreshold = windowHeight * 0.4;

  if (scrollPosition > scrollThreshold) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});
scrollButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
