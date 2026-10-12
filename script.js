// スマホ用メニューの開閉
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#nav");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  })
);

// スクロールしたらヘッダーに線を出す
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// セクションをふわっと表示
const targets = document.querySelectorAll(".section, .hero > :not(.hero-vertical)");
if ("IntersectionObserver" in window) {
  targets.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 }
  );
  targets.forEach((el) => io.observe(el));
}

// フッターの年を自動更新
document.getElementById("year").textContent = new Date().getFullYear();
