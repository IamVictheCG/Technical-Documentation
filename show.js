let html = document.getElementById("html_nav-list")
let css = document.getElementById("css_nav-list")
let js = document.getElementById("js_Nav")




js.addEventListener("click", jsnav())

function jsnav() {
    let jsNav = document.getElementById("js_nav-list")
    jsNav.classList.toggle("js_nav-list1")
    // if (jsNav.classList === "js_nav-list") {
    //    jsNav.classList = "js_nav-list1"        
    // }
}
jsnav()