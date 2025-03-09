/*!
 * Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
 */

// Smooth scroll tapahtumankuuntelija .scroll-btn napeille
document.querySelectorAll(".scroll-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const id = this.getAttribute("data-target");
    const element = document.querySelector(id);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20,
        behavior: "smooth",
      });
    }
  });
});
