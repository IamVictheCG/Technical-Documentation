let html = document.getElementById("html_nav-list")
let css = document.getElementById("css_nav-list")
let jsNav = document.querySelector(".js_nav-list")


let js =document.querySelector("#js_Nav")

js.addEventListener("click", jsNav1)

function jsNav1(e) {
    let temp_nav = document.getElementById("temp_nav")
    temp_nav.style.display ="block"
    let inner_temp = temp_nav.innerHTML = `<ul class="js_nav-list" id="js_nav-list">
    <li class="title">JavaScript</li><hr>
    <li><a class="nav-link" href="#Introduction">Introduction</a></li><hr>
    <li><a class="nav-link" href="#What_you_should_already_know">What you should already know</a></li><hr>
    <li><a class="nav-link" href="#javascript_and_java">JavaScript and Java</a></li><hr>
    <li><a class="nav-link" href="#Hello_world">Hello world</a></li><hr>
    <li><a class="nav-link" href="#Variables">Variables</a></li><hr>
    <li><a class="nav-link" href="#Declaring_variables">Declaring variables</a></li><hr>
    <li><a class="nav-link" href="#Variable_scope">Variable scope</a></li><hr>
    <li><a class="nav-link" href="#Global_variables">Global variables</a></li><hr>
    <li><a class="nav-link" href="#Constants">Constants</a></li><hr>
    <li><a class="nav-link" href="#Data_types">Data types</a></li><hr>
    <li><a class="nav-link" href="#if...else_statement">if...else statement</a></li><hr>
    <li><a class="nav-link" href="#while_statement">while statement</a></li><hr>
    <li><a class="nav-link" href="#Function_declarations">Function declarations</a></li><hr>
    <li><a class="nav-link" href="#Reference">Reference</a></li><hr>    
    </ul>`

    // temp_nav.id.toggle('temp_nav')
    // if (e.target.tagName === "P") {
    //     navBox
    // }

    
    // jsNav.classList.toggle("jsNav_nav-list1")
    // if (i = 0, i<jsNav.length, i++) {       
    //     jsNav[i].style.display ='block'
    // }
};