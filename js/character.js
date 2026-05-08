const char_ob = document.querySelectorAll(".image__select_char");

char_ob.forEach((char, i) => {
  char.addEventListener("click", () => {
    if (!char.classList.contains("on")) {
      char_ob.forEach((elm) => {
        elm.classList.remove("on");
      });
      char.classList.add("on");
      const img_src = char.children[0].src;
      document.querySelector(".image__character img").src = img_src;
      const detail_arr = document.querySelectorAll(".detail__character");
      detail_arr.forEach((detail) => {
        detail.classList.remove("on");
      });
      detail_arr[i].classList.add("on");
    }
  });
});
