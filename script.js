function RandomCoords() {
	const x = Math.random() * window.innerWidth
	const y = Math.random() * window.innerWidth
	if (x <= window.innerWidth / 1.5 && y <= window.innerHeight / 1.5) {
		return {
			x: x,
			y: y,
		}
	} else {
		return RandomCoords()
	}
}
btnNo.addEventListener('click', () => {
	const random = RandomCoords()

	btnNo.style.position = 'absolute'
	btnNo.style.top = `${random.y}px`
	btnNo.style.left = `${random.x}px`
})

btnYes.addEventListener('click', () => {
	modalGey.classList.remove('block')
	modalGey.classList.add('hidden')

	modal.classList.remove('hidden')
	modal.classList.add('block')
})

modalClose.addEventListener('click', () => {
	modalGey.classList.remove('hidden')
	modalGey.classList.add('block')

	modal.classList.remove('block')
	modal.classList.add('hidden')
})
