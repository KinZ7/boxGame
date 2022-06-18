window.onload = function () {
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let Box = document.getElementById("box");
    let i = 0;

    right.onclick = () => {
        let left = Box.style.left;
        let leftval = left.split("px");
        var lefty = leftval[0];
        // alert(lefty);
        if (lefty < 820) {
            Box.style.left = i + "px";
            i += 20;
        }
        else if (lefty >= 820) {
            i = 0;
            Box.style.left = i + "px";
        }
    }


}