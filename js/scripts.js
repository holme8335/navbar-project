

function profileClick() {
    var arrow = document.getElementById('profile-arrow');
    var showDiv = document.getElementById('profile-container');
        arrow.classList.toggle("js-rotated-180");
        showDiv.classList.toggle("hide");
};

document.getElementById('header-email-div').onclick = function() {
    var arrow = document.getElementById('email-arrow');
    var showDiv = document.getElementById('email-container');
        arrow.classList.toggle("js-rotated-180");
        showDiv.classList.toggle("hide");
};

document.getElementById('sub-menu').onclick = function() {
    var div = document.getElementById('menu-arrow');
        div.classList.toggle("js-rotated-90");
};

