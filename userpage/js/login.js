function get(id) {
    return document.querySelector(`#${id}`)
}

function collect(className) {
    return document.querySelector(`.${className}`)
}

function grab(element) {
    return document.querySelector(`${element}`)
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
                showAlert('Hurray',`${user.email} has been logged In`,'success')
                showUserPage(user.fname,user.lname,user.country,user.age)
                Friend.displayFriend(users)
                showUsers(users)
                        // console.log(friend)
            }
        })
        
        
    }
    static checkUserExist(userMail,userPwd) {
        const users = JSON.parse(localStorage.getItem('fruit-app'))

        const arrUser = users.filter(user => user.type == 'user').filter(user => user.email == userMail.toString() && user.pwd == userPwd)
        if(arrUser.length > 0) {
            return true
        } else {
            return false
        }

    }

    static checkUserPwdValid(userMail,userPwd) {
        const users = JSON.parse(localStorage.getItem('fruit-app'))

        const arrUsers = users
        .filter(user => user.type == 'user')
        .filter(user => user.email == userMail)
        .flat(2)
        // arrUsers.map(user => {
        if(arrUsers.pwd !== userPwd) {
            return false
        }
        // })

        
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

function showAlert(title,msg,type) {
    const page = grab('body')
    page.classList.add('dark-scene')
    // if(title === 'You \'re finished') {
    //     score = 0
    //     index = 0
    //     homePage.classList.remove('none')
    //     gamePage.classList.add('none')
    // }

    const div = document.createElement('div')
    div.classList.add('msg-box')
    const value = `
        <img src="#">
        <h2>${title}</h2>
        <p>${msg}</p>
        <button class="btn">Got It!</button>

    `
    div.innerHTML = value

    // const msgTitle = msgBox.querySelector('h2') 
    // const msgCont = msgBox.querySelector('p') 
    const msgImg = div.querySelector('img') 


    // msgTitle.innerHTML = title;
    // msgCont.innerHTML = msg;

    switch(type){
        case 'error': 
            msgImg.setAttribute('src','../img/warn-icon.png') 
        break;

        case 'success': 
            msgImg.setAttribute('src','../img/check-icon.png') 
            msgImg.setAttribute('id', 'no-rotate')
            break;
            
        case 'info':
            msgImg.setAttribute('src','../img/Game logo 2.png') 
        break;

        default: 
            msgImg.setAttribute('src','../img/logo 5.png') 
        break;
    }


    const body = document.querySelector('body')
    body.appendChild(div)


    // Clicked gotIt button
    const gotItBtn = div.querySelector('.btn')
    gotItBtn.addEventListener('click', function()  {
        gotItBtn.parentElement.remove()
        page.classList.remove('dark-scene')
    })
   
}

loginBtn.addEventListener('click', function(e) {
    e.preventDefault()
    if(email.value.trim() == '' || password.value.trim() == '') {
        showAlert('Error','Fields Cannot be empty','info')
    }

    if(password.value !== '' && email.value !== ''){
        const emailVal = email.value
        const passwordVal = password.value
        
        if(Form.checkUserExist(emailVal,passwordVal)) {
            Form.loginUser(email.value,password.value)
            clearFields(password,email)
        } 
         else {
            showAlert('Wait','The details specified don\'t exist in our database')
        }
        // else {
        //     showAlert('Sorry','The Email provided does not exist in our database, try logging in', 'error')
        // }
        
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