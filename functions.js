function change_color_border() {
    var border_r = document.getElementById("border_r").value;
    var border_g = document.getElementById("border_g").value;
    var border_b = document.getElementById("border_b").value;
    var border_width = document.getElementById("border_width").value;
    var background_r = document.getElementById("background_r").value;
    var background_g = document.getElementById("background_g").value;
    var background_b = document.getElementById("background_b").value;

    var tag = document.getElementById("paragraph");
    tag.style.borderColor = `rgb(${border_r},${border_g},${border_b})`;
    tag.style.borderWidth = border_width
    tag.style.backgroundColor = `rgb(${background_r},${background_g},${background_b})`;
}

function validate_passwords() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;


    if (password1.length < 8) {
        alert("The length of the first password is less than 8 letters!")
    } else if (password2.length < 8) {
        alert("The length of the second password is less than 8 letters!")
    } else if (password1 != password2) {
        alert("Two passwords don't match!")
    } else {
        alert("Everything is good!")
    }
}

