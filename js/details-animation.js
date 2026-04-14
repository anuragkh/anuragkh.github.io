document.addEventListener("DOMContentLoaded", function () {
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".animated-details").forEach(function (details) {
    var summary = details.querySelector("summary");
    var panel = details.querySelector(".details-panel");

    if (!summary || !panel) {
      return;
    }

    var animation = null;

    function finishOpen() {
      panel.style.height = "auto";
      panel.style.opacity = "1";
      panel.style.overflow = "visible";
      animation = null;
    }

    function finishClose() {
      details.open = false;
      panel.style.height = "0px";
      panel.style.opacity = "0";
      panel.style.overflow = "hidden";
      animation = null;
    }

    if (details.open) {
      panel.style.height = "auto";
      panel.style.opacity = "1";
      panel.style.overflow = "visible";
    } else {
      panel.style.height = "0px";
      panel.style.opacity = "0";
      panel.style.overflow = "hidden";
    }

    summary.addEventListener("click", function (event) {
      event.preventDefault();

      if (animation) {
        animation.cancel();
        animation = null;
      }

      var isOpening = !details.open;

      if (prefersReducedMotion) {
        details.open = isOpening;
        panel.style.height = isOpening ? "auto" : "0px";
        panel.style.opacity = isOpening ? "1" : "0";
        panel.style.overflow = isOpening ? "visible" : "hidden";
        return;
      }

      var startHeight = panel.offsetHeight;

      if (isOpening) {
        details.open = true;
      }

      var endHeight = isOpening ? panel.scrollHeight : 0;

      panel.style.overflow = "hidden";
      panel.style.height = startHeight + "px";
      panel.style.opacity = startHeight > 0 ? "1" : "0";

      animation = panel.animate(
        [
          { height: startHeight + "px", opacity: startHeight > 0 ? 1 : 0 },
          { height: endHeight + "px", opacity: isOpening ? 1 : 0 }
        ],
        {
          duration: 280,
          easing: "ease"
        }
      );

      animation.onfinish = function () {
        if (isOpening) {
          finishOpen();
        } else {
          finishClose();
        }
      };

      animation.oncancel = function () {
        animation = null;
      };
    });
  });
});
