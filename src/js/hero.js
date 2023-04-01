import img from "./../images/hero-img.jpg";

const heroBlock = document.querySelector(".hero-section");

heroBlock.style.backgroundImage = `linear-gradient(rgba(47, 48, 58, 0.5), rgba(47, 48, 58, 0.5)), url('${img}')`;
