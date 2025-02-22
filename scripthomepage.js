  // Get the navbar
  const navbar = document.querySelector('.navbar');

  // Listen for scroll event
  window.addEventListener('scroll', function() {
    if (window.scrollY >= 100) {
      navbar.classList.add('scrolled');
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.remove('hidden');
    }
  });


  //=============================================================

  gsap.registerPlugin(ScrollTrigger);


  const section10CardsContainer3 = document.getElementById("section10CardsContainer3");
  

  
  gsap.to(section10CardsContainer3, {
    x: () => -(section10CardsContainer3.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: "#section10CardsWrapper3",
      start: "top top",
      end: () => `+=${section10CardsContainer3.scrollWidth}`,
      pin: true,
      scrub: 0.5,
      invalidateOnRefresh: true,
    },
  });
  

  //========================================================================

  const toggleBtnCard1 = document.getElementById("toggleBtn-investor-gain-1");
const hiddenContentCard1 = document.getElementById("hiddenContent-investor-gain-1");
const card1 = document.getElementById("card-investor-gain-1");

// Card 2 Elements
const toggleBtnCard2 = document.getElementById("toggleBtn-investor-gain-2");
const hiddenContentCard2 = document.getElementById("hiddenContent-investor-gain-2");
const card2 = document.getElementById("card-investor-gain-2");

// Card 3 Elements
const toggleBtnCard3 = document.getElementById("toggleBtn-investor-gain-3");
const hiddenContentCard3 = document.getElementById("hiddenContent-investor-gain-3");
const card3 = document.getElementById("card-investor-gain-3");
// Card 4 Elements
const toggleBtnCard4 = document.getElementById("toggleBtn-investor-gain-4");
const hiddenContentCard4 = document.getElementById("hiddenContent-investor-gain-4");
const card4 = document.getElementById("card-investor-gain-4");

// Card 5 Elements
const toggleBtnCard5 = document.getElementById("toggleBtn-investor-gain-5");
const hiddenContentCard5 = document.getElementById("hiddenContent-investor-gain-5");
const card5 = document.getElementById("card-investor-gain-5");

// Card 1 Toggle Functionality
toggleBtnCard1.addEventListener("click", () => {
  hiddenContentCard1.classList.toggle("visible-investor-gain");
  toggleBtnCard1.textContent = hiddenContentCard1.classList.contains("visible-investor-gain")
    ? "Show Less"
    : "Show More";

    setTimeout(() => { ScrollTrigger.refresh(); }, 900);
});

// Card 2 Toggle Functionality
toggleBtnCard2.addEventListener("click", () => {
  hiddenContentCard2.classList.toggle("visible-investor-gain");
  toggleBtnCard2.textContent = hiddenContentCard2.classList.contains("visible-investor-gain")
    ? "Show Less"
    : "Show More";

    setTimeout(() => { ScrollTrigger.refresh(); }, 900);
});

// Card 3 Toggle Functionality
toggleBtnCard3.addEventListener("click", () => {
  hiddenContentCard3.classList.toggle("visible-investor-gain");
  toggleBtnCard3.textContent = hiddenContentCard3.classList.contains("visible-investor-gain")
    ? "Show Less"
    : "Show More";

    setTimeout(() => { ScrollTrigger.refresh(); }, 900);
});

// Card 4 Toggle Functionality
toggleBtnCard4.addEventListener("click", () => {
  hiddenContentCard4.classList.toggle("visible-investor-gain");
  toggleBtnCard4.textContent = hiddenContentCard4.classList.contains("visible-investor-gain")
    ? "Show Less"
    : "Show More";

    setTimeout(() => { ScrollTrigger.refresh(); }, 900);
});

// Card 5 Toggle Functionality
toggleBtnCard5.addEventListener("click", () => {
  hiddenContentCard5.classList.toggle("visible-investor-gain");
  toggleBtnCard5.textContent = hiddenContentCard5.classList.contains("visible-investor-gain")
    ? "Show Less"
    : "Show More";

    setTimeout(() => { ScrollTrigger.refresh(); }, 900);
});

// Hide Content When Clicking Outside Card 1
document.addEventListener("click", (event) => {
  if (!card1.contains(event.target)) {
    hiddenContentCard1.classList.remove("visible-investor-gain");
    toggleBtnCard1.textContent = "Show More";
  }
});

// Hide Content When Clicking Outside Card 2
document.addEventListener("click", (event) => {
  if (!card2.contains(event.target)) {
    hiddenContentCard2.classList.remove("visible-investor-gain");
    toggleBtnCard2.textContent = "Show More";
  }
});

// Hide Content When Clicking Outside Card 3
document.addEventListener("click", (event) => {
  if (!card3.contains(event.target)) {
    hiddenContentCard3.classList.remove("visible-investor-gain");
    toggleBtnCard3.textContent = "Show More";
  }
});


// Hide Content When Clicking Outside Card 4
document.addEventListener("click", (event) => {
  if (!card4.contains(event.target)) {
    hiddenContentCard4.classList.remove("visible-investor-gain");
    toggleBtnCard4.textContent = "Show More";
  }
});


// Hide Content When Clicking Outside Card 5
document.addEventListener("click", (event) => {
  if (!card5.contains(event.target)) {
    hiddenContentCard5.classList.remove("visible-investor-gain");
    toggleBtnCard5.textContent = "Show More";
  }
});

//*********************************************************************** 
function toggleText() {
  var text = document.getElementById("toggleText");
  var button = document.querySelector(".toggleButton");

  if (text.style.display === "none") {
      text.style.display = "inline";
      button.innerHTML = "Hide";
  } else {
      text.style.display = "none";
      button.innerHTML = "Show";
  }
}


function toggleText2() {
  var text = document.getElementById("toggleText2");
  var button = document.querySelector(".toggleButton2");

  if (text.style.display === "none") {
      text.style.display = "inline";
      button.innerHTML = "Hide";
  } else {
      text.style.display = "none";
      button.innerHTML = "Show";
  }
}


function toggleText3() {
  var text = document.getElementById("toggleText3");
  var button = document.querySelector(".toggleButton3");

  if (text.style.display === "none") {
      text.style.display = "inline";
      button.innerHTML = "Hide";
  } else {
      text.style.display = "none";
      button.innerHTML = "Show";
  }
}


function toggleText4() {
  var text = document.getElementById("toggleText4");
  var button = document.querySelector(".toggleButton4");

  if (text.style.display === "none") {
      text.style.display = "inline";
      button.innerHTML = "Hide";
  } else {
      text.style.display = "none";
      button.innerHTML = "Show";
  }
}


function toggleText5() {
  var text = document.getElementById("toggleText5");
  var button = document.querySelector(".toggleButton5");

  if (text.style.display === "none") {
      text.style.display = "inline";
      button.innerHTML = "Hide";
  } else {
      text.style.display = "none";
      button.innerHTML = "Show";
  }
}

//********************************************************************************************** 

/*setTimeout(() => {
  document.querySelector(".preloader").style.display = "none";
}, 5000);*/



let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);

let displayTime = visitCount === 1 ? 5000 : 2000; // First visit 5 sec, next visits 2 sec
let hideTimeout;

function hidePreloader() {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
}

let preloader = document.querySelector(".preloader");
let isHolding = false;

preloader.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
});
preloader.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(hidePreloader, 1000);
});

preloader.addEventListener("touchstart", () => {
    isHolding = true;
    clearTimeout(hideTimeout);
});
preloader.addEventListener("touchend", () => {
    isHolding = false;
    hideTimeout = setTimeout(hidePreloader, 1000);
});

hideTimeout = setTimeout(hidePreloader, displayTime);