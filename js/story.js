const text = document.querySelectorAll(".container__storyline .text");
const text__dialogue = document.querySelectorAll(".text__dialogue");

text.forEach((t) => {
  t.style.opacity = 0;
});

const fade_text = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0, 1],
          transform: ["translateY(20px)", "translateY(0)"],
        },
        {
          duration: 1000,
          fill: "forwards",
          easing: "ease",
        },
      );

      ob.unobserve(entry.target);
    }
  });
};

ob = new IntersectionObserver(fade_text, { threshold: 1 });

text.forEach((t) => {
  ob.observe(t);
});

const add_class = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("on");
    }
  });
};

ob_ss = new IntersectionObserver(add_class, { threshold: 0 });

text__dialogue.forEach((t) => {
  ob_ss.observe(t);
});
