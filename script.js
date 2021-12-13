var plus = document.getElementsByClassName("plus")
var plus1 = document.querySelector(".plus")
var grn = document.querySelector(".grn")
var blu = document.querySelector(".blu")
var rd = document.querySelector(".rd")
var X = document.querySelector(".X")
function callDis() {
    document.querySelector(".dialogBox").style.display = "none";
}
// function minimize(e) {

//     var box = e.target.closest(".dialogBox")
//      document.querySelector(".dialogBox").style.display = "none";
// }
function addDelete() {
    var delBtn = document.querySelectorAll(".item-3.but")
    var mini = document.querySelectorAll(".item-2.but")
    function minimize(e) {
        var box = e.target.closest(".box")
        if (box.querySelector("main").style.display !== "none") {
            // box.querySelector("main").style.display = "none"
            box.querySelector("main").style.display = "none"
            box.style.height = "50%"
            box.querySelector(".boxHead").style.marginTop = "5px"
            box.querySelector(".boxHead").style.borderBottom = "none"

        } else {
            box.querySelector("main").style.display = "block"
            box.style.height = "10rem"
            box.querySelector(".boxHead").style.borderBottom = "1px solid black"
            box.querySelector("#boxText").style.width = "100%"
            box.querySelector("#boxText").style.height = "200px"
            box.querySelector("#boxText").style.paddingTop = "2px"
        }
    }
    function deleteItem(e) {
        var box = e.target.closest(".box")
        box.style.display = "none"
    }
    for (let index = 0; index < delBtn.length; index++) {
        delBtn[index].addEventListener("click", deleteItem)

    }
    for (let index = 0; index < mini.length; index++) {
        mini[index].addEventListener("click", minimize)

    }

}

function callPlus() {
    document.querySelector(".dialogBox").style.display = "flex";
    console.log("clicked")
}
function addGreen() {
    addItem()
    document.querySelector(".box").style.backgroundColor = "lightgreen";
    document.querySelector("#boxText").style.backgroundColor = "lightgreen";
    console.log("green box selected")
}
function addBlue() {
    addItem()
    document.querySelector(".box").style.backgroundColor = "lightblue";
    document.querySelector("#boxText").style.backgroundColor = "lightblue";
    console.log("blue box selected")
}
function addRed() {
    addItem()
    document.querySelector(".box").style.backgroundColor = "red";
    document.querySelector("#boxText").style.backgroundColor = "red";
    console.log("red box selected")
}

plus1.addEventListener("click", callPlus)
X.addEventListener("click", callDis)

function addItem() {
    callDis()
    var boxes = document.querySelector(".wapper main")
    var puranaHTML = boxes.innerHTML;
    var boxContent = document.getElementById("form-content")
    var title = document.getElementById("title")
    boxes.innerHTML = puranaHTML + `
    <div class="box">
    <div class="boxHead">
        <div class="item-1 txt">${title.value}</div>
        <button class="item-2 but">+</button>
        <button class="item-3 but">-</button>
        <button class="item-4 but">$</button>
    </div>
    <main>
        <textarea name="" id="boxText" >${boxContent.value}</textarea>
    </main>
</div>
    `
    document.querySelector(".box").style.backgroundColor = "";
    document.querySelector("#boxText").style.backgroundColor = "";
    addDelete()
}