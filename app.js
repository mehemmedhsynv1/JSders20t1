let div1 = document.querySelector(".boxes1");
let div2 = document.querySelector(".boxes2");
let div3 = document.querySelector(".boxes3");
div1.addEventListener("click", ()=>  {
    div1.classList.add("big");
    div2.classList.remove("big");
    div3.classList.remove("big");
})
div2.addEventListener("click", () => {
    div1.classList.remove("big");
    div2.classList.add("big");
    div3.classList.remove("big");
})
div3.addEventListener("click", () => {
    div1.classList.remove("big");
    div2.classList.remove("big");
    div3.classList.add("big");
})

