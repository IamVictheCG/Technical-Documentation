let html = document.getElementById("html_nav-list")
let css = document.getElementById("css_nav-list")


let js =document.querySelector("#js_Nav")
let jsNav = document.querySelector(".js_nav-list")

js.addEventListener("click", function jsNav1(e) {
    if (e.target.tagName === "P") {
        e.target.classList.toggle('js_nav-list1')
    }
    
    // jsNav.classList.toggle("jsNav_nav-list1")
    // if (i = 0, i<jsNav.length, i++) {       
    //     jsNav[i].style.display ='block'
    // }
});
