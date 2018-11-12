

function profileClick() {
    var arrow = document.getElementById('profile-arrow');
    var showDiv = document.getElementById('profile-container');
        arrow.classList.toggle("js-rotated-180");
        showDiv.classList.toggle("hide");
};

document.getElementById('header-email-div').onclick = function() {
    var arrow = document.getElementById('email-arrow');
    var showDiv = document.getElementById('email-container');
    var border = document.getElementById('header-email-span');
        arrow.classList.toggle("js-rotated-180");
        showDiv.classList.toggle("hide");
        if (border.classList.contains("selector-border") == false) {
            border.classList.add("selector-border");
        } else {
            border.classList.remove("selector-border");
        };
};

document.getElementById('sub-menu').onclick = function() {
    var div = document.getElementById('menu-arrow');
        div.classList.toggle("js-rotated-90");
};

