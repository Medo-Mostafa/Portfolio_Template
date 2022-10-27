// ------------------------------------ Global Animate Content Function ------------------------------------
let cssStyle = `
transition: 1.5s ease-in-out;
-webkit-transition: 1.5s ease-in-out;
-moz-transition: 1.5s ease-in-out;
opacity:1;  transform:translate(0,0) scale(1);
-webkit-transform:translate(0,0) scale(1);
-moz-transform:translate(0,0) scale(1);`;
function animateContent(parent, ...childs) {
  window.addEventListener("scroll", function () {
    // Check If Scroll Value Is More Than Element Start Or Not
    if (window.scrollY >= parent.offsetTop - 400) {
      childs.forEach((ele) => {
        let arr = Array.from(ele);
        if (arr.length === 0) {
          ele.style.cssText = cssStyle;
        } else {
          arr.forEach((element) => {
            element.style.cssText = cssStyle;
          });
        }
      });
    }
  });
}
// ------------------------------------ Articles Setion -----------------------------------
let articleSection = document.querySelector(".articles");
let articleBoxes = document.querySelectorAll(".articles .box");

animateContent(articleSection, articleBoxes);
// ------------------------------------ Gallery Section ------------------------------------
let gallerySection = document.querySelector(".gallery");
let galleryBoxes = document.querySelectorAll(".gallery .box");

animateContent(gallerySection, galleryBoxes);

// ------------------------------------ Features Section ------------------------------------
let featuresSection = document.querySelector(".features");
let featuresBoxes = document.querySelectorAll(".features .box");

animateContent(featuresSection, featuresBoxes);

// ------------------------------------ Testimonials Section ------------------------------------
let testimonialsSection = document.querySelector(".testimonials");
let testimonialsBoxes = document.querySelectorAll(".testimonials .box");

animateContent(testimonialsSection, testimonialsBoxes);

// ------------------------------------ Team Section ------------------------------------
let teamSection = document.querySelector(".team");
let teamBoxes = document.querySelectorAll(".team .box");

animateContent(teamSection, teamBoxes);
// ------------------------------------ Services Section ------------------------------------
let servicesSection = document.querySelector(".services");
let servicesBoxes = document.querySelectorAll(".services .box");

animateContent(servicesSection, servicesBoxes);
// ------------------------------------ Skills Section ------------------------------------
let skillsSection = document.querySelector(".our-skills");
let skillsImage = document.querySelector(".our-skills img");
let skillsProgressSpan = document.querySelectorAll(".our-skills .progress span");

window.addEventListener('scroll', () => {
  if (window.scrollY >= skillsSection.offsetTop - 400) {
    skillsProgressSpan.forEach((span) => {
      let goal = span.dataset.width;
      span.style.cssText = `width:${goal};`;
    });
  }
});
animateContent(skillsSection, skillsImage);
// ------------------------------------ Work Section ------------------------------------
let workSection = document.querySelector(".work");
let workImage = document.querySelector(".work img");
let workBigBox = document.querySelector(".work .boxes");

animateContent(workSection, workImage, workBigBox);
// ------------------------------------ Event Section ------------------------------------
let days = document.querySelector(".events .days");
let hours = document.querySelector(".events .hours");
let minutes = document.querySelector(".events .minutes");
let seconds = document.querySelector(".events .seconds");

let countDown = setInterval(() => {
  let date = new Date(`2022-12-31T11:59:59Z`);

  let nowDate = new Date().getTime();

  let diffrence = date - nowDate;
  // -------------------- Days --------------------
  let remainingDays = Math.floor(diffrence / (1000 * 60 * 60 * 24));
  // -------------------- Hours --------------------
  let remainingHours = Math.floor((diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // -------------------- Minutes --------------------
  let remainingMinutes = Math.floor((diffrence % (1000 * 60 * 60)) / (1000 * 60));
  // -------------------- Minutes --------------------
  let remainingSeconds = Math.floor((diffrence % (1000 * 60)) / (1000));

  days.textContent = remainingDays;
  hours.textContent = remainingHours;
  minutes.textContent = remainingMinutes;
  seconds.textContent = remainingSeconds;
}, 1000);
// ------------------------------------ Pricing Section ------------------------------------
let pricingSection = document.querySelector(".pricing");
let pricingBoxes = document.querySelectorAll(".pricing .box");

animateContent(pricingSection, pricingBoxes);
// ------------------------------------ Stats Section ------------------------------------
let statsSection = document.querySelector(".stats");
let statsSpans = document.querySelectorAll(".stats span");


let interval = 50;
let counter;
window.addEventListener("scroll", () => {
  if (window.scrollY > statsSection.offsetTop - 300) {
    statsSpans.forEach((ele) => {
      const updateCount = () => {
        let goal = +ele.dataset.goal;
        let currentNum = parseInt(ele.innerText);
        let inc = goal / interval;
        if (currentNum < goal) {
          ele.innerText = Math.floor(currentNum + inc);
          counter = setTimeout(updateCount, 1);
        } else {
          ele.innerText = goal.toLocaleString();
          clearInterval(counter);
        }
      };
      updateCount();
    });
  }
});
// ------------------------------------ Discount Section ------------------------------------
let discountSection = document.querySelector(".discount");
let discountLeft = document.querySelectorAll(".discount .image");
let discountRight = document.querySelectorAll(".discount .form");

animateContent(discountSection, discountLeft, discountRight);