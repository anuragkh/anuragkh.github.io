document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");

  if (!toggle) {
    return;
  }

  var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function getStoredTheme() {
    try {
      return localStorage.getItem("theme");
    } catch (error) {
      return null;
    }
  }

  function resolveTheme() {
    var storedTheme = getStoredTheme();
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return mediaQuery.matches ? "dark" : "light";
  }

  function setTheme(theme, persist) {
    root.setAttribute("data-theme", theme);

    if (persist) {
      try {
        localStorage.setItem("theme", theme);
      } catch (error) {}
    }

    var isDark = theme === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");

  }

  setTheme(resolveTheme(), false);

  toggle.addEventListener("click", function () {
    var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(nextTheme, true);
  });

  var handleSystemThemeChange = function (event) {
    var storedTheme = getStoredTheme();
    if (storedTheme === "light" || storedTheme === "dark") {
      return;
    }

    setTheme(event.matches ? "dark" : "light", false);
  };

  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", handleSystemThemeChange);
  } else if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(handleSystemThemeChange);
  }
});
