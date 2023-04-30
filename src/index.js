const accItems = document.querySelectorAll(".acc-item")
accItems.forEach(accItem => {
  accItem.addEventListener('click', () => {
    accItem.classList.toggle("open")
    accItem.classList.toggle("close")
    if (accItem.classList.contains("open")) {
      closeOtherAccordions(accItem)
    }
  })
})

const closeOtherAccordions = (activeAcc) => {
  accItems.forEach(accItem => {
    if (accItem !== activeAcc && accItem.classList.contains("open")) {
      accItem.classList.toggle("open")
      accItem.classList.toggle("close")
    }
  })
}
