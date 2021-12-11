window.onscroll = function () { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("navbar").style.background = "#FFFFFF"
        document.getElementById("fab").style.background = "#FFFFFF"
        document.getElementById("upArrow").style.visibility = "visible"
    } else {
        document.getElementById("navbar").style.background = "transparent"
        document.getElementById("fab").style.background = "transparent"
        document.getElementById("upArrow").style.visibility = "hidden"
    }
}
