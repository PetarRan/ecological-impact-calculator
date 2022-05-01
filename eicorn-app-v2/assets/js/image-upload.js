function preview() {
    frame.src = URL.createObjectURL(event.target.files[0]);
    document.querySelector(".btn-fluid").classList.remove("hidden")
    document.querySelector(".submit").classList.remove("hidden")
    document.getElementById("formFile").classList.add("hidden")
}
function clearImage() {
    document.getElementById('formFile').value = null;
    frame.src = "assets/img/img_placeholder.png";
    document.querySelector(".btn-fluid").classList.add("hidden")
    document.querySelector(".submit").classList.add("hidden")
    document.getElementById("formFile").classList.remove("hidden")

}