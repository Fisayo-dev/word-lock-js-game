const menuBtns = document.querySelectorAll('.menus')
const menuContents = document.querySelectorAll('.menu-content')
const resMenuItems = document.querySelectorAll('.mobile-menus-parent')

menuBtns.forEach(btn => btn.addEventListener('click', selected));


function selected() {
    resMenuItems.forEach(i => i.classList.remove('active'))
    const searchArea = document.querySelector('.search-output')
    searchArea.classList.add('none')
    menuBtns.forEach(btn => btn.classList.remove('active'));
    menuContents.forEach(cont => cont.classList.remove('show'));
    
    this.classList.add('active')
    this.parentElement.classList.add('active')
    
    const selectMenuCont = document.querySelector(`#${this.id}-content`)
    selectMenuCont.classList.add('show')
    
    document.querySelector('body').classList.add('dark-scene')
}



// const resMenuItems = document.querySelectorAll('.mobile-menus-parent .menus')
// resMenuItems.forEach(item => {
//     if(item.classList.contains('active')) {
//         item.parentElement.classList.add('active')
//     }
// }) 


const cancelBtn = document.querySelectorAll('.cancel-btn')
cancelBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.remove('show')
    })
})



