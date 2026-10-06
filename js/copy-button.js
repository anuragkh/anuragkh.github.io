document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll("[data-copy-target]");

  if (!buttons.length) {
    return;
  }

  // One shared live region announces the result to screen readers; swapping the
  // button label alone is not reliably announced.
  var status = document.createElement("div");
  status.className = "visually-hidden";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  document.body.appendChild(status);

  function legacyCopy(text) {
    var field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.top = "-1000px";
    document.body.appendChild(field);
    field.select();

    var copied = false;
    try {
      copied = document.execCommand("copy");
    } catch (error) {}

    document.body.removeChild(field);
    return copied ? Promise.resolve() : Promise.reject(new Error("copy failed"));
  }

  buttons.forEach(function (button) {
    var source = document.getElementById(button.getAttribute("data-copy-target"));

    if (!source) {
      button.hidden = true;
      return;
    }

    // Buttons that do nothing without JavaScript ship hidden.
    button.hidden = false;

    var defaultLabel = button.textContent;
    var resetTimer = null;

    function report(label, succeeded) {
      button.textContent = label;
      button.setAttribute("data-copied", String(succeeded));
      status.textContent = label;

      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(function () {
        button.textContent = defaultLabel;
        button.removeAttribute("data-copied");
        status.textContent = "";
      }, 2000);
    }

    button.addEventListener("click", function () {
      var text = source.textContent;
      var attempt;

      // The async clipboard API rejects when permission is denied, so fall
      // back to the selection-based copy rather than reporting failure.
      if (navigator.clipboard && window.isSecureContext) {
        attempt = navigator.clipboard.writeText(text).catch(function () {
          return legacyCopy(text);
        });
      } else {
        attempt = legacyCopy(text);
      }

      attempt.then(
        function () {
          report("Copied", true);
        },
        function () {
          report("Press Ctrl+C", false);
        }
      );
    });
  });
});
