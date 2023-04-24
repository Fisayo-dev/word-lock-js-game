function get(id) {
    return document.querySelector(`#${id}`)
}

function collect(className) {
    return document.querySelector(`.${className}`)
}

const form = collect('form')
const page = collect('page')

const email = get('email-field')
const password = get('password-field')

const INIT_CREATE_DATE = 2021


class Friend {
    constructor(name,email,for1,for2){
        this.name = name
        this.email = email
        this.type = 'friend'
        this.for1 = for1
        this.for2 = for2
    }

    static addFriend(obj) {
        let users;
        if(localStorage.getItem('fruit-app') == null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem('fruit-app'));
        }

        users.push(obj);
        localStorage.setItem('fruit-app', JSON.stringify(users)); 
    }

    static displayFriend(list) {

        list
        .filter(friend => friend.type == "friend")
        .map(friend => {

            if(friend.for2 == get('countryField').innerHTML && friend.for1 == get('usernameLoginField').innerHTML) {
                const friendSec = collect('friend-sec')
                const friendDiv = document.createElement('div')
                friendDiv.classList.add('friend')

                const friendDivContent = `
                    <img src="../img/user-icon.png" alt="">
                    <div class="middle">
                        <h3>${friend.name}</h3>
                        <p>${friend.email}</p>
                    </div>
                    <div class="right">
                        <button class="btn">&plus;</button>
                    </div>
                `;
                friendDiv.innerHTML = friendDivContent;
                friendSec.appendChild(friendDiv)    
            }
            
        })

    }

    static checkFriendAmongstUsers(list) {
        list
        .filter(data.type == 'friend')
        .map(friend => {
            const usersList = collect('users-list')
            const convertedUsersArray = Array.from(usersLists.children)

            convertedUsersArray.forEach(convertedUser => {
                // if()
            })

        })
    }
}

class Form{
    static loginUser(userMail,userPwd){
        const users = JSON.parse(localStorage.getItem('fruit-app'))
        users
        .filter(user => user.type == 'user')
        .forEach(user => {
            if(user.email == userMail && user.pwd == userPwd) {
                alert(`${user.email} has been logged in`)
                showUserPage(user.fname,user.lname,user.country,user.age)
                Friend.displayFriend(users)
                showUsers(users)
                        // console.log(friend)
            }
        })
        


    }
}

function showUserPage(fname,lname,country,age) {
    form.classList.add('none')
    page.classList.remove('none')

    get('usernameLoginField').innerHTML = `${fname} ${lname}`;
    collect('footer .left').innerHTML = `Copyright ${INIT_CREATE_DATE} - ${new Date().getFullYear()}`
    get('countryField').innerHTML = `${country} (${age} yrs) <a href="../about.html">About</a>`
}

function showFriend(name,email) {
    const users = JSON.parse(localStorage.getItem('fruit-app'))
    users
    .filter(user => user.type === 'user')
    .forEach(user => {
        if(`${user.fname} ${user.lname}` == name && user.email == email) {
            // console.log(user)

            const friendSec = collect('friend-sec')
            const friendDiv = document.createElement('div')
            friendDiv.classList.add('friend')
            
            const friendDivContent = `
                <img src="../img/user-icon.png" alt="">
                <div class="middle">
                    <h3>${name}</h3>
                    <p>${email}</p>
                </div>
                <div class="right">
                    <button class="btn">&check;</button>
                </div>
            `;
            friendDiv.innerHTML = friendDivContent;
            friendSec.appendChild(friendDiv)
        }
    })

}

function showUsers(list){
    console.log(list);
    
    const gameUsersSection = collect('users-list')
    list
    .filter(user => user.type == 'user') 
    .forEach(user => {
        const gameUsers = document.createElement('div')
        const cont = `
            <img class="img-width" src=${"../img/user-icon.png"} alt="">
            <div class="info">
                <h3>${user.fname} ${user.lname}</h3>
                <p>${user.email}</p>
            </div>
            <button class="btn" id="add-btn">Add</button>
        `;
        gameUsers.innerHTML = cont;
        gameUsers.classList.add('search')
        gameUsersSection.appendChild(gameUsers)
        

        let addBtn = ''
        gameUsers.querySelector('#add-btn').addEventListener('click', (f) => {
            let userName = f.path[0].parentElement.querySelector('.info h3');
            let userEmail = f.path[0].parentElement.querySelector('.info p');
            get('usernameLoginField').innerHTML
            const friend = new Friend(userName.innerText,userEmail.innerText,get('usernameLoginField').innerHTML,get('countryField').innerHTML)
            Friend.addFriend(friend)
            showFriend(userName.innerText,userEmail.innerText)     
            console.log(f.path[0])
            f.path[0].innerText = 'Added'
            addBtn = f.path[0];
            addBtn.setAttribute('id','added-btn')
                       
        })


    })
}



loginBtn = form.querySelector('#login-btn')

loginBtn.addEventListener('click', function(e) {
    e.preventDefault()
    if(email.value == '') {
        console.log('Error: Email not specified');
    }

    if(password.value == '') {
        console.log('Error: Password not specified');
    }

    if(password.value !== '' && email.value !== ''){
        Form.loginUser(email.value,password.value)
        clearFields(password,email)
    }
})


function clearFields(...fields) {
    fields.map(field => field.value = '')
}

// const bodyScene = document.querySelector('body.dark-scene');
// bodyScene.addEventListener('click', () => {
//     this.classList.remove('dark-scene')
// })


let inputFields = collect('search-bar')
let searchResultsContainer = collect('search-output')
const app = document.querySelector('body')
inputFields.addEventListener('click', () => {
    if(!app.classList.contains('dark-scene') && searchResultsContainer.classList.contains('none')){
        app.classList.add('dark-scene')
        searchResultsContainer.classList.remove('none')
    } else {
        app.classList.remove('dark-scene')
        searchResultsContainer.classList.add('none')
    } 
   
    clearPreviousSectionsForSearchBar()
    
})

function clearPreviousSectionsForSearchBar() {
    document.querySelectorAll('.menu-content').forEach(i => i.classList.remove('show'))
    document.querySelectorAll('.menu-bar-content').forEach(i => i.classList.add('none'))
    document.querySelectorAll('menus').forEach(i => i.classList.remove('active'))
}

// inputFields.addEventListener('', () => {
//     searchResultsContainer.classList.add('none')
// })

// let addUserAsFriendBtn = document.querySelectorAll('#add-btn')
// addUserAsFriendBtn.forEach(btn => {
//     btn.addEventListener('click', () => {
//         let userName = btn.parentElement.querySelector('.info h3');
//         console.log("btn.innerText")

//     })
// })