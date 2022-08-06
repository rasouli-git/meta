// start header
const headerTag = document.querySelector(".header");
const hamburgerMenu = document.querySelector(".header__humburger");
const menuItem = document.querySelectorAll(".header__menu li");

hamburgerMenu.addEventListener("click", () => {
  headerTag.classList.toggle("active");
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (headerTag.classList.contains("active")) {
      headerTag.classList.remove("active");
    }
  });
});

// end header

// start main

// start video slide
const speakerDiv = document.querySelector(".video-slide__mute");
const videoDiv = document.querySelector(".video");
const videoContent = document.querySelector(".video-slide__content");

speakerDiv.addEventListener("click", () => {
  speakerDiv.classList.toggle("active");

  if (videoDiv.hasAttribute("muted")) {
    videoDiv.removeAttribute("muted");
  } else {
    videoDiv.setAttribute("muted", "");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    videoContent.style.display = "none";
    console.log("ok");
  }, 7000);
});
// end video slide
// end main

// banner

const bannerLeft = document.querySelector(".banner-fixed__left");
const bannerDiv = document.querySelector(".banner-fixed");

bannerLeft.addEventListener("click", () => {
  bannerDiv.classList.toggle("active");
});


// loader
window.addEventListener('load',()=>{
  const loader = document.querySelector('.loader');
  loader.classList += ' hide'
})
// End loader