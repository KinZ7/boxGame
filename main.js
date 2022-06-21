window.onload = () => {
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let down = document.getElementById("down");
    let up = document.getElementById("up");
    let Box = document.getElementById("box");
    let verticIndex = 0;
    let horizIndex = 0;



    right.onclick = () => {
        if (verticIndex <= 820) {
            verticIndex += 20;
            Box.style.left = `${verticIndex}px`;
        }

        else if (verticIndex > 820) {
            verticIndex = 0;
            Box.style.left = `${verticIndex}px`;
            verticIndex += 20;
        }
    }


    left.onclick = () => {
        if (verticIndex != 0) {
            verticIndex -= 20;
            Box.style.left = `${verticIndex}px`;
        } else {
            verticIndex = 820;
            Box.style.left = `${verticIndex}px`;
            verticIndex -= 20;
        }
    }

    up.onclick = () => {
        if (horizIndex == 0) {
            horizIndex = 420;
            Box.style.top = `${horizIndex}px`;
            horizIndex -= 20;
        } else {
            horizIndex -= 20;
            Box.style.top = `${horizIndex}px`;
        }
    }

    down.onclick = () => {
        if (horizIndex > 420) {
            horizIndex = 0;
            Box.style.top = `${horizIndex}px`;
            horizIndex += 20;
        } else {
            Box.style.top = `${horizIndex}px`;
            horizIndex += 20;
        }
    }
}