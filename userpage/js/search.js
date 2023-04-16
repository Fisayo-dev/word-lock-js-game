function get(id) {
    return document.querySelector(`#${id}`)
}

function collect(className) {
    return document.querySelector(`.${className}`)
}

function log(value) {
	console.log(value)
}

const searchInput = document.querySelector('.search-bar input')
const searchArea = collect('search-output')	

searchInput.addEventListener('keyup', (e) => { 
	searchFriends()
})

function searchFriends(e) {
	searchArea.classList.remove('none')
	console.log(searchInput.value)
	const searchList = collect('users-list')
	const searchItem = searchList.querySelectorAll('.search')

	searchItem.forEach(item => {
		let itemVal = item.querySelector('.info h3')
		let filterValue = searchInput.value.toUpperCase();

		if(itemVal.innerHTML.toUpperCase().trim().indexOf(filterValue.trim()) > -1) {
			item.style.display = ''
		} else { 
			item.style.display = 'none'
		}
	})




}

