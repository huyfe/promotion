(function main() { // IIFE Function
    var index = 1; // Start from second promotion
    var promotionArray = document.querySelectorAll(".promotion__item");
    setInterval(function () {
        var prevPromotion = document.querySelector(".promotion__item.show");

        if (prevPromotion !== null) {
            prevPromotion.classList.remove("show");
        }

        promotionArray[index].classList.add("show");

        if (index >= promotionArray.length - 1) {
            promotionArray[index - 1].classList.remove("show");

            index = 0;
        }
        else index++;
    }, 2000);
})()