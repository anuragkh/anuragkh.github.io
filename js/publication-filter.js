document.addEventListener("DOMContentLoaded", function () {
  var tools = document.querySelector(".pub-tools");
  if (!tools) {
    return;
  }

  var buttons = Array.prototype.slice.call(tools.querySelectorAll("button[data-filter]"));
  var search = tools.querySelector(".pub-search");
  var status = document.querySelector(".pub-filter-status");
  var lists = Array.prototype.slice.call(document.querySelectorAll("ol.bibliography"));
  var entries = Array.prototype.slice.call(document.querySelectorAll(".pub-entry"));
  var total = entries.length;
  var state = { topic: "all", query: "" };

  // Search only the visible citation, not the hidden BibTeX or link labels.
  entries.forEach(function (entry) {
    var text = Array.prototype.map.call(
      entry.querySelectorAll(".pub-title, .pub-authors, .pub-venue, .pub-award"),
      function (node) { return node.textContent; }
    ).join(" ");
    entry.setAttribute("data-search", normalise(text));
  });

  buttons.forEach(function (button) {
    var topic = button.getAttribute("data-filter");
    var count = topic === "all" ? total : entries.filter(function (entry) {
      return entry.getAttribute("data-topic") === topic;
    }).length;
    var badge = document.createElement("span");
    badge.className = "pub-filter__count";
    badge.textContent = count;
    button.appendChild(document.createTextNode(" "));
    button.appendChild(badge);
  });

  function normalise(text) {
    return text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ");
  }

  function matches(entry) {
    if (state.topic !== "all" && entry.getAttribute("data-topic") !== state.topic) {
      return false;
    }
    var haystack = entry.getAttribute("data-search");
    return state.query.split(" ").every(function (word) {
      return haystack.indexOf(word) !== -1;
    });
  }

  function apply() {
    var shown = 0;

    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-filter") === state.topic));
    });

    lists.forEach(function (list) {
      var visibleInYear = 0;

      Array.prototype.forEach.call(list.children, function (item) {
        var entry = item.querySelector(".pub-entry");
        var visible = !entry || matches(entry);
        if (visible && item.hidden) {
          // Restart the fade-in for entries that reappear.
          item.classList.remove("pub-reveal");
          void item.offsetWidth;
          item.classList.add("pub-reveal");
        }
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
      var filtered = state.topic !== "all" || state.query !== "";
      status.textContent = !filtered ? "" : shown === 0 ? "No publications match." : "Showing " + shown + " of " + total + " publications.";
    }

    var url = new URL(window.location.href);
    if (state.topic === "all") {
      url.searchParams.delete("topic");
    } else {
      url.searchParams.set("topic", state.topic);
    }
    if (state.query === "") {
      url.searchParams.delete("q");
    } else {
      url.searchParams.set("q", search.value.trim());
    }
    window.history.replaceState(null, "", url);
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      state.topic = button.getAttribute("data-filter");
      apply();
    });
  });

  search.addEventListener("input", function () {
    state.query = normalise(search.value.trim());
    apply();
  });

  tools.hidden = false;

  var params = new URL(window.location.href).searchParams;
  var initialTopic = params.get("topic");
  if (buttons.some(function (button) { return button.getAttribute("data-filter") === initialTopic; })) {
    state.topic = initialTopic;
  }
  if (params.get("q")) {
    search.value = params.get("q");
    state.query = normalise(search.value.trim());
  }
  if (state.topic !== "all" || state.query !== "") {
    apply();
  }
});
