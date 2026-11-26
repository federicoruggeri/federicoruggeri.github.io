// Research explorer on the homepage. Each node has a view whose id is its URL fragment, and CSS shows the view
// of the current fragment. This script animates the move between views with the View Transitions API, so a node
// morphs from child to focus to parent, and marks the shown node and its ancestors in the minimap.
// Without this script, or without that API, links still switch views through the fragment.
const explorer = document.querySelector("[data-explorer]");

if (explorer) {
  const stages = new Set([...explorer.querySelectorAll(".stage")].map((stage) => stage.id));
  const root = explorer.querySelector(".stage.is-root").id;
  const map = new Map([...explorer.querySelectorAll("[data-map]")].map((link) => [link.dataset.map, link]));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");

  const current = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    return stages.has(id) ? id : root;
  };

  const mark = () => {
    const id = current();
    const path = new Set();
    for (let link = map.get(id); link; link = map.get(link.dataset.up)) path.add(link);
    for (const link of map.values()) {
      link.classList.toggle("is-path", path.has(link));
      if (link === map.get(id)) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    }
  };

  // Keeps the explorer in view after a switch, since a fragment change scrolls its view to the top.
  const go = (id) => {
    const y = window.scrollY;
    location.hash = id;
    window.scrollTo(0, y);
    const top = explorer.getBoundingClientRect().top;
    if (top < 0 || top > innerHeight / 2) explorer.scrollIntoView({ block: "start" });
  };

  explorer.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey) return;
    const id = decodeURIComponent(link.hash.slice(1));
    if (!stages.has(id)) return;
    event.preventDefault();
    if (id === current()) return;
    if (document.startViewTransition && !reduce.matches) document.startViewTransition(() => go(id));
    else go(id);
  });

  window.addEventListener("hashchange", mark);
  mark();
}

// Publications: a search box and filter groups combine; each group matches its pressed value against the item's
// `data-tags`, and the search matches its `data-search`. A year with no item left hides its heading.
const pubs = document.querySelector("[data-pubs]");

if (pubs) {
  const controls = pubs.querySelector(".pub-controls");
  const search = controls.querySelector("input[type=search]");
  const groups = [...controls.querySelectorAll("[data-filter-group]")];
  const count = controls.querySelector("[data-count]");
  const items = [...pubs.querySelectorAll(".year .pub")];

  const apply = () => {
    const query = search.value.trim().toLowerCase();
    const values = groups.map((group) => group.querySelector('[aria-pressed="true"]').dataset.filter);
    for (const item of items) {
      const tags = item.dataset.tags.split(" ");
      item.hidden = !(values.every((value) => !value || tags.includes(value)) && (!query || item.dataset.search.includes(query)));
    }
    for (const year of pubs.querySelectorAll(".year")) year.hidden = !year.querySelector(".pub:not([hidden])");
    const shown = items.filter((item) => !item.hidden).length;
    count.textContent = shown ? `${shown} of ${items.length} publications` : "Nothing matches. Try another filter or search.";
  };

  for (const group of groups) {
    const buttons = [...group.querySelectorAll("button")];
    for (const button of buttons) {
      button.addEventListener("click", () => {
        for (const other of buttons) other.setAttribute("aria-pressed", String(other === button));
        apply();
      });
    }
  }
  search.addEventListener("input", apply);
  controls.hidden = false;
  apply();
}

// Copy buttons next to BibTeX entries; they stay hidden where the Clipboard API is missing.
if (navigator.clipboard) {
  for (const button of document.querySelectorAll("[data-copy]")) {
    button.hidden = false;
    button.addEventListener("click", async () => {
      await navigator.clipboard.writeText(button.previousElementSibling.textContent);
      button.textContent = "Copied";
      setTimeout(() => { button.textContent = "Copy BibTeX"; }, 1500);
    });
  }
}
