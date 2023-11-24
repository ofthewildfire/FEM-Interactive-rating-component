const selectionBtns = document.querySelectorAll('input[type="radio"]')
const buttonsList = document.querySelectorAll('input[type="radio"]')
const labelList = document.querySelectorAll("label")
const displayRating = document.querySelector(".rating")
const submitBtn = document.querySelector(".submit-btn")
const selectCard = document.querySelector(".card-selection")
const tyCard = document.querySelector(".card-thankyou")
const returnToRatingCard = document.querySelector(".return-btn")
const error = document.querySelector(".error")
let rating

Array.from(selectionBtns, (btn) => {
	btn.addEventListener("click", (e) => {
		rating = e.target.value
	})
})

submitBtn.addEventListener("click", onSubmitChange)

Array.from(buttonsList, (btn) => {
	btn.addEventListener("change", (e) => {
		const previous = document.querySelector(".active")
		if (previous) {
			previous.classList.remove("active")
		}
		btn.parentElement.classList.add("active")
	})
})

function onSubmitChange() {
	if (rating) {
		error.style.display = "none"
		selectCard.classList.add("hidden")
		tyCard.classList.remove("hidden")
		displayRating.innerText = rating
	} else {
		error.style.display = "block"
	}
}

returnToRatingCard.addEventListener("click", () => {
	selectCard.classList.remove("hidden")
	tyCard.classList.add("hidden")
	rating = ""
})
