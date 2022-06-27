const ratingCard = document.querySelector(".rating-container");
const thanksCard = document.querySelector(".thanks-container");
const ratingForm = document.getElementById("rating-form");

ratingForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const selector = "input[name=rating]:checked";
    const checkedInput = document.querySelector(selector);

    if (checkedInput !== null) {
        const selectedRating = document.querySelector(".selection");
        selectedRating.textContent = "You selected " + checkedInput.getAttribute("value") + " out of 5"
        ratingCard.classList.add("hidden");
        thanksCard.classList.remove("hidden");
    }
})