import "../css/wdpage.css";
import "../css/normalize.css";
import "../css/iconfont.css";
import "../js/flexible.js";

let btns = document.querySelector("#listStyle");
let lists = document.querySelector(".listFilter");

btns.addEventListener("click", () => {
    let b = lists.getAttribute("style");
    if (b == "visibility: initial;") {
        lists.style.visibility = "hidden";
    } else {
        lists.style.visibility = "initial";
    }
    console.log(1);
    console.log(2);
});
