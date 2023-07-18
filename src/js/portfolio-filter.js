const btnListRef = document.querySelector(".navigation-row");
const portfolioItemsRef = document.querySelectorAll(".experience-list__item");

let windowWidth = window.innerWidth;

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
  checkWindowSize();
});

btnListRef.addEventListener("click", onBtnListRefClick);

function onBtnListRefClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  const newActiveBtn = e.target;

  removeOldActiveClassFromBtnList();
  addNewActiveClassToBtnList(newActiveBtn);
  filterElementsInPortfolioList(newActiveBtn);
  checkWindowSize();
}

function removeOldActiveClassFromBtnList() {
  const currentActiveBtn = document.querySelector(
    ".navigation-row__button--active"
  );

  if (currentActiveBtn) {
    currentActiveBtn.classList.remove("navigation-row__button--active");
  }
}

function addNewActiveClassToBtnList(btn) {
  btn.classList.add("navigation-row__button--active");
}

function filterElementsInPortfolioList(btn) {
  portfolioItemsRef.forEach((el) => {
    if (btn.dataset.type === undefined) {
      el.style.display = "block";
      return;
    }

    if (el.dataset.type !== btn.dataset.type) {
      el.style.display = "none";
    } else {
      el.style.display = "block";
    }
  });
}

function checkWindowSize() {
  if (windowWidth >= 1200) {
    addToPortfolioDesktopStyles();
  }

  if (windowWidth >= 768 && windowWidth < 1200) {
    addToPortfolioTabletStyles();
  }
}

function addToPortfolioDesktopStyles() {
  const expItemsRef = Array.from(
    document.querySelectorAll(".experience-list__item")
  ).filter((el) => el.style.display !== "none");

  expItemsRef.forEach((el) => {
    el.style.marginTop = "30px";
    el.style.marginRight = "30px";
  });

  for (let i = 0; i < 3; i += 1) {
    expItemsRef[i].style.marginTop = "0";
  }

  for (let i = 2; i < expItemsRef.length; i += 3) {
    expItemsRef[i].style.marginRight = "0";
  }
}

function addToPortfolioTabletStyles() {
  const expItemsRef = Array.from(
    document.querySelectorAll(".experience-list__item")
  ).filter((el) => el.style.display !== "none");

  expItemsRef.forEach((el) => {
    el.style.marginTop = "30px";
    el.style.marginRight = "30px";
  });

  for (let i = 0; i < 2; i += 1) {
    expItemsRef[i].style.marginTop = "0";
  }

  for (let i = 1; i < expItemsRef.length; i += 2) {
    expItemsRef[i].style.marginRight = "0";
  }
}
