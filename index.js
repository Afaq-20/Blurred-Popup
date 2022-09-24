const containerEl = document.querySelector(".container");

const popupContainerEl = document.querySelector(".popup-container")

const btnEl = document.querySelector(".btn")

const closeEl = document.querySelector(".close")

const x = () => {
    containerEl.classList.add("active")
    popupContainerEl.classList.remove("active")
}

btnEl.addEventListener("click", x)

const y = () => {
    containerEl.classList.remove("active")
    popupContainerEl.classList.add("active")
}

closeEl.addEventListener("click", y)