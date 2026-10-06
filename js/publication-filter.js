document.addEventListener("DOMContentLoaded", function () {
  var bar = document.querySelector(".pub-filter");
  if (!bar) {
    return;
  }

  var buttons = Array.prototype.slice.call(bar.querySelectorAll("button[data-filter]"));
  var status = document.querySelector(".pub-filter-status");
  var lists = Array.prototype.slice.call(document.querySelectorAll("ol.bibliography"));

  function matches(entry, filter) {
    if (filter === "all") {
      return true;
    }
    return entry.getAttribute("data-topic") === filter;
  }

  function apply(filter) {
    var shown = 0;

    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-filter") === filter));
    });

    lists.forEach(function (list) {
      var visibleInYear = 0;

      Array.prototype.forEach.call(list.children, function (item) {
        var entry = item.querySelector(".pub-entry");
        var visible = !entry || matches(entry, filter);
        item.hidden = !visible;
        if (visible) {
          visibleInYear += 1;
        }
      });

      // Hide the year heading too when none of its papers match.
      list.hidden = visibleInYear === 0;
      var heading = list.previousElementSibling;
      if (heading && heading.tagName === "H2") {
        heading.hidden = list.hidden;
      }
      shown += visibleInYear;
    });

    if (status) {
      status.textContent = filter === "all" ? "" : "Showing " + shown + " of " + document.querySelectorAll(".pub-entry").length + " publications.";
    }

    var url = new URL(window.location.href);
    if (filter === "all") {
      url.searchParams.delete("topic");
    } else {
      url.searchParams.set("topic", filter);
    }
    window.history.replaceState(null, "", url);
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      apply(button.getAttribute("data-filter"));
    });
  });

  bar.hidden = false;

  var initial = new URL(window.location.href).searchParams.get("topic");
  var known = buttons.some(function (button) {
    return button.getAttribute("data-filter") === initial;
  });
  if (known) {
    apply(initial);
  }
});
