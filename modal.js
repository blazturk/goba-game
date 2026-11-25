const closeBtn = document.getElementById("closeModalBtn")
const modal = document.getElementById("modal")
const showRules = document.getElementById("showRules")

closeBtn.addEventListener("click", function() {
    modal.classList.remove("show-modal")
})

showRules.addEventListener("click", function() {
    modal.classList.add("show-modal")
})