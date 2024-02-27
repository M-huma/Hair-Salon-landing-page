const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("#navbar");
const home = document.getElementById("home");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.addEventListener("scroll", function () {
  let offSet = window.scrollY;
  home.style.backgroundPositionY = offSet * 0.7 + "px";
});

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

document.querySelectorAll(".carousel").forEach((carousel) => {
  const imgs = carousel.querySelectorAll(".carousel_img");
  const buttonHtml = Array.from(imgs, () => {
    return `<span class="carousel_button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `<div class="carousel_nav">
    ${buttonHtml.join("")}
  </div>`
  );

  const buttons = carousel.querySelectorAll(".carousel_button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // unselect all the imgs
      imgs.forEach((img) => img.classList.remove("carousel_img_selected"));
      buttons.forEach((button) =>
        button.classList.remove("carousel_button_selected")
      );

      // select img
      imgs[i].classList.add("carousel_img_selected");
      button.classList.add("carousel_button_selected");
    });
  });

  imgs[0].classList.add("carousel_img_selected");
  buttons[0].classList.add("carousel_button_selected");
});
