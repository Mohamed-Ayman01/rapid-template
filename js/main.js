// Change Navabr Background onscroll

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1) navbar.classList.add("scroll");
  else navbar.classList.remove("scroll");
});

// Scroll current to section & Toggle active class in navabr lis 

const navbarLis = document.querySelectorAll("nav .links li:not(li.dropdown)");
const AllnavabrLinks = document.querySelectorAll("nav a");

AllnavabrLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    let scrollValue = document.querySelector(
      `#${link.getAttribute("data-target")}`,
    ).offsetTop;

    window.scrollTo({
      top: scrollValue - navbar.clientHeight,
      left: 0,
      behavior: "smooth",
    });
  });
});

navbarLis.forEach((li) => {
  li.addEventListener("click", () => {
    navbarLis.forEach((li) => li.classList.remove("active"));

    li.classList.add("active");
  });
});

// More Links Accounts Drop Down

const showAccountsMenuBtn = document.querySelector(".dropdown");
const showAccountsMenuIcon = document.querySelector(".dropdown a i");
const socialAccountsMenu = document.querySelector(".dropdown ul.more-links");

showAccountsMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (socialAccountsMenu.classList.contains("visible")) {

    socialAccountsMenu.style.transform = "translateY(-15px)";
    socialAccountsMenu.style.opacity = "0";
    
    setTimeout(() => socialAccountsMenu.classList.remove("visible"), 400);
    
    showAccountsMenuIcon.classList.remove("fa-angle-up");
    showAccountsMenuIcon.classList.add("fa-angle-down");
    
  } else {
    
    socialAccountsMenu.classList.add("visible");
    
    setTimeout(function () {
      socialAccountsMenu.style.transform = "translateY(0px)";
      socialAccountsMenu.style.opacity = "1";
    }, 50);

    showAccountsMenuIcon.classList.add("fa-angle-up");
    showAccountsMenuIcon.classList.remove("fa-angle-down");
  
  }
});

// Show & Hide Full page nav

const fullPageNav = document.querySelector("nav .full-page-nav");
const burgerMenuBtn = document.querySelector("nav .burger-menu");
const exitFullNavBtn = document.querySelector(".exit-nav-btn");
const fullPageNavLinks = document.querySelectorAll(".full-page-nav a");

burgerMenuBtn.addEventListener("click", () => {
  fullPageNav.classList.add("visible");
});

function hideFullPageNav() {
  fullPageNav.classList.remove("visible");
}

exitFullNavBtn.addEventListener("click", hideFullPageNav);

fullPageNavLinks.forEach((a) => {
  a.addEventListener("click", hideFullPageNav);
});

// Increasing status number in status section

const statusHeadings = document.querySelectorAll(".status-box h3.sub-header");
const statusSection = document.querySelector(".why-us .status");


// ################
// ################################
// ################ DEBUG HERE
// ################################
// ################

function increasingNumAnim() {
  if (window.scrollY >= 3250) {
  } else {
    statusHeadings.forEach((el) => {
      el.innerHTML = "0";
    });
  }
}

window.addEventListener("scroll", increasingNumAnim);

// Imgs filter (portfolio section)

let filtetBtns = document.querySelectorAll(".filter-buttons button");
let filterImgBoxes = document.querySelectorAll(".imgs-container .img-box");

filtetBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Toggle active class between btns
    filtetBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    // filter Img Boxes
    if (btn.dataset.value !== "all") {
      filterImgBoxes.forEach((el) => {
        el.style.opacity = "0";
        setTimeout(() => el.classList.add("hidden"), 400);
      });

      setTimeout(() => {
        filterImgBoxes.forEach((el) => {
          if (el.children[0].dataset.filter === btn.dataset.value) {
            el.classList.remove("hidden");
            setTimeout(() => (el.style.opacity = "1"), 50);
          }
        });
      }, 450);
    } else {
      filterImgBoxes.forEach((el) => {
        el.style.opacity = "0";

        setTimeout(() => el.classList.add("hidden"), 400);

        setTimeout(() => el.classList.remove("hidden"), 450);

        setTimeout(() => (el.style.opacity = "1"), 500);
      });
    }
  });
});

// Show full Screen Modal of img in (portfolio section)

let imgBoxesContainer = document.querySelector(
  ".portfolio .container .imgs-container",
);
let portfolioImgs = document.querySelectorAll(".imgs-container .img-box img");
let showModalBtns = document.querySelectorAll(
  ".imgs-container .img-box .overlay button",
);

showModalBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Get Current Img Src
    let currentImgSrc = btn.parentElement.parentElement.children[0].src;

    // Create Modal Elements
    let box = document.createElement("div");
    let img = document.createElement("img");
    let imgCont = document.createElement("div");
    let exitBtn = document.createElement("button");

    // Set Elements Attributes
    box.classList.add("view-img-modal");

    imgCont.classList.add("container");

    img.setAttribute("src", `${currentImgSrc}`);

    exitBtn.classList.add("exit-modal-btn");
    exitBtn.innerHTML = "&times;";

    imgCont.append(img);

    box.append(imgCont, exitBtn);

    box.style.opacity = "0";

    imgBoxesContainer.append(box);

    setTimeout(function () {
      box.style.opacity = "1";
    }, 30);
  });
});

// get Created Element (exit modal btn)

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("exit-modal-btn")) {
    e.target.parentElement.style.opacity = "0";

    setTimeout(() => e.target.parentElement.remove(), 300);
  }
});


// carousal function (enter list of slides & enter list of bullets)
function bulletsCarousal(listOfBoxes, ListOfBullets) {
  ListOfBullets.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Toggle Active Class Between Bullets
      ListOfBullets.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");

      listOfBoxes.forEach((box) => {
        // Hide All Boxes
        box.style.opacity = "0";

        setTimeout(() => box.classList.remove("active"), 400);

        // Show Selected Box

        if (box.dataset.index === btn.dataset.number) {
          setTimeout(() => box.classList.add("active"), 450);
          setTimeout(() => (box.style.opacity = "1"), 500);
        }
      });
    });
  });
}

// Testimonails Section Carousal

let testimonCarousalBoxes = document.querySelectorAll(".testimonials .carousal .content-box");
let testimonCarousalBullets = document.querySelectorAll(".testimonials .carousal .bullets-box .bullet");

bulletsCarousal(testimonCarousalBoxes, testimonCarousalBullets);

// Our Clients Section Carousal

let clientsCarousalBoxes = document.querySelectorAll(".clients .carousal .box");
let clientsCarousalBullets = document.querySelectorAll(".clients .bullets-box .bullet");

bulletsCarousal(clientsCarousalBoxes, clientsCarousalBullets);

// Frequently Asked Questions Answer Drop Down

let questionBoxes = document.querySelectorAll(".questions-list .question-box .the-question");
let answerBoxes = document.querySelectorAll(".questions-list .question-box .drop-down");

questionBoxes.forEach(questionBox => {

  questionBox.addEventListener("click", function () {

    answerBoxes.forEach(answerBox => {

      if (answerBox.dataset.number === questionBox.dataset.number) {
        if (answerBox.classList.contains("active")) {
          answerBox.style.transform = "scaleY(0) translateX(-50%)";
          setTimeout(() => answerBox.classList.remove("active"), 300);
          
          setTimeout(() => questionBox.style.paddingBottom = `0px`, 350);
        } else {
          answerBox.classList.add("active");
          setTimeout(() => answerBox.style.transform = "scaleY(1) translateX(-50%)", 100);

          questionBox.style.paddingBottom = `${answerBox.clientHeight}px`;
        }
      }

    });

  });

});
