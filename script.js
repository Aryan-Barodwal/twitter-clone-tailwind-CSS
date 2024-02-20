const input = document.querySelector(".input-boxx");

input.addEventListener("click", (e) => {
    if (input.style.border === "1px solid #0EA5E9") {
        input.style.border = "none";
    }
    else {
        input.style.border = "1px solid #0EA5E9"
    }
})


const hearts = document.querySelectorAll(".heartt");

for (const heart of hearts) {
    heart.addEventListener('click', function () {
        if (heart.style.color === "red") {
            heart.style.color = "grey";
            heart.innerHTML = "12";
        } else {
            heart.style.color = "red";
            heart.innerHTML = "13";
        }
    });
};




