const button = document.getElementById("button");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");

//Opens popup 
button.onclick = () => {
    popup.style.display = "flex";
}

//Closes popup
closeBtn.onclick = () => {
    popup.style.display = "none";
}