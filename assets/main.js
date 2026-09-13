(() => {
  const body = document.body;
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const links = [...document.querySelectorAll(".site-nav a")];

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = body.classList.toggle("is-menu-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        body.classList.remove("is-menu-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "メニューを開く");
      });
    });
  }

  const sections = [...document.querySelectorAll("main section[id]")];
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      links.forEach((link) => {
        const current = link.getAttribute("href") === `#${visible.target.id}`;
        if (current) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4] }
  );

  sections.forEach((section) => observer.observe(section));
})();
