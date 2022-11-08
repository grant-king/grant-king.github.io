var images = document.getElementsByTagName("img");
var col_images = document.querySelectorAll("div.project-thumbnail");
for(var i = 0; i < col_images.length; i++){
    col_images[i].onmouseover = function() {
        this.style.cursor = "hand";
        this.style.borderColor = "rgba(46, 132, 44, 0.8)";
        this.style.borderWidth = "4px";
    };
    col_images[i].onmouseout = function() {
        this.style.cursor = "pointer";
        this.style.borderColor = "rgba(255, 255, 255, 0.4)";
        this.style.borderWidth = "4px";
    };
}
function changeImageOnClick(event) {
    var targetElement = event.target;
    if (targetElement.className === "col text-center project-thumbnail" || targetElement.className === "img-fluid") {
        if (targetElement.className === "img-fluid") {
            var thumb_styles = window.getComputedStyle(targetElement.parentElement).background;
            mainImage_background = targetElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1];
        } else {
            var thumb_styles = window.getComputedStyle(targetElement).background;
            mainImage_background = targetElement.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1];
        }
        mainImage_background.style.background = thumb_styles;
        mainImage_background.style.backgroundRepeat = "no-repeat";
    }
}

//# sourceMappingURL=index.7a165a88.js.map
