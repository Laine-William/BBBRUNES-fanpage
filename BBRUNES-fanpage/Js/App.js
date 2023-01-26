// evenement pour notre histoire
let btn = document.getElementById("btn");

let btnIcon = document.getElementById("btn-icon");

let details = document.getElementById("details");

const toggleDetails = () => {

    if (btnIcon.name === "chevron-down" || btnIcon1.name === "chevron-down") {

        btnIcon.name = "chevron-up";

        details.style.height = "max-content";

        btnIcon1.name = "chevron-up";

        details1.style.height = "max-content";

    } else {

        btnIcon.name = "chevron-down";

        details.style.height = 0;

        btnIcon1.name = "chevron-down";

        details1.style.height = 0;
    }
};

btn.addEventListener("click", toggleDetails);

// evenement pour nos membres

let btn1 = document.getElementById("btn1");

let btnIcon1 = document.getElementById("btn-icon1");

let details1 = document.getElementById("details1");

const toggleDetails1 = () => {

    if (btnIcon1.name === "chevron-down") {

        btnIcon1.name = "chevron-up";

        details1.style.height = "max-content";

    } else {

        btnIcon1.name = "chevron-down";

        details1.style.height = 0;
    }
};

btn1.addEventListener("click", toggleDetails1);

// evenement pour nos albums

let btn2 = document.getElementById("btn2");

let btnIcon2 = document.getElementById("btn-icon2");

let details2 = document.getElementById("details2");

const toggleDetails2 = () => {

    if (btnIcon2.name === "chevron-down") {

        btnIcon2.name = "chevron-up";

        details2.style.height = "max-content";

    } else {

        btnIcon2.name = "chevron-down";

        details2.style.height = 0;
    }
};

btn2.addEventListener("click", toggleDetails2);