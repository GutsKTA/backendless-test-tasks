const themes = document.querySelectorAll(".themes");
const body = document.querySelector(".body");

let theme = "Grey Theme";

const lightTheme = () => {
  body.classList.add("theme-light");
  body.classList.remove("theme-dark");
  body.classList.remove("theme-grey");
};

const darkTheme = () => {
  body.classList.remove("theme-light");
  body.classList.add("theme-dark");
  body.classList.remove("theme-grey");
};

const greyTheme = () => {
  body.classList.remove("theme-light");
  body.classList.remove("theme-dark");
  body.classList.add("theme-grey");
};

const changeTheme = (value) => {
  switch (value) {
    case "Light Theme":
      if (theme === "Light Theme") {
        return;
      }

      theme = "Light Theme";
      lightTheme();
      break;

    case "Dark Theme":
      if (theme === "Dark Theme") {
        return;
      }

      theme = "Dark Theme";
      darkTheme();
      break;

    case "Grey Theme":
      if (theme === "Grey Theme") {
        return;
      }

      theme = "Grey Theme";
      greyTheme();
      break;
  }
};

for (let i = 0; i < themes.length; i++) {
  themes[i].addEventListener("click", (e) => {
    if (!e.target.parentElement.classList.contains("theme")) {
      return;
    }

    changeTheme(e.target.value);
  });
}
