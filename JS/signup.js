const pwd = get('pwd') 
const rpwd = get('rpwd') 
const email = get('email') 
const fname = get('fname') 
const lname = get('lname') 
const age = get('age')
const btn = collect('btn')
const selectTag = get('select-tag')


function wrong(el,msg='Field cannot be empty') {
    el.parentElement.querySelector('small').innerText = msg
    el.style.border = '2px solid crimson'
}

function correct(el) {
    el.parentElement.querySelector('small').innerText = null
    el.style.border = `2px solid rgb(246,176,50)`
}

class DB {
    constructor(fname,lname,age,email,pwd,country,date,type) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.email = email;
        this.pwd = pwd;
        this.country = country;
        this.date = date;
        this.type = type;
    }

    static login(user) {
        let users;
        if(localStorage.getItem('fruit-app') == null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem('fruit-app'));
        }

        users.push(user);
        localStorage.setItem('fruit-app', JSON.stringify(users));
    }
}

function collect(val) {
    return document.querySelector(`.${val}`)
}

function get(val) {
    return document.querySelector(`#${val}`)
}

function correct(el) {
    el.parentElement.querySelector('small').innerText = ''
}



// function lsCheck(field) {
//     const users = JSON.parse(localStorage.getItem('fruit-app'))
//     users
//     .filter(user => user.type === 'user')
//     .map(user => {
//         if(user.email === field) {
//             let val
//             val = true
//             return val
//         }
//     })
// }

// const check = lsCheck(email.value)

btn.addEventListener('click', (e) => {
    e.preventDefault()
    if(fname.value === '') {
        wrong(fname)
    } else {
        correct(fname)
    }

    if(lname.value === '') {
        wrong(lname)
    } else {
        correct(lname)
    }
    if(pwd.value === '') {
        wrong(pwd)
    } else {
        correct(pwd)
    }
    if(rpwd.value === '') {
        wrong(rpwd, 'Password is not provided')
    } else {
        correct(rpwd)
    }
    if(email.value === '') {
        wrong(email,'Email is not provided')
    } else {
        correct(email)
    }
    if(age.value === '') {
        wrong(age)
    } else {
        correct(age)
    }
    
    if(rpwd.value !== pwd.value) {
        wrong(rpwd, 'Password\'\s dont match')
    } else {
        correct(rpwd)
    }
    // for(let i = 0; i < selectTag.length; i++){
        //     // const value = Array.from([selectTag[i].innerText]);
        //     if(selectTag[i].selected) return console.log(Array.from([selectTag[i].innerText]));
        //     // console.log(value);
        // }    


    if(age.value !== '' && fname.value.trim() !== '' && lname.value.trim() !== '' && pwd.value.trim() !== '' && rpwd.value.trim() !== '' && email.value.trim() !== '' && pwd.value === rpwd.value) {
        // Getting value from a prompt function
        // const field = prompt('Type in success message')
        // console.log(field);
        
        let nation;
         for(let i = 0; i < selectTag.length; i++){
            if(selectTag[i].selected){
                nation = Array.from([selectTag[i].innerText]);
            }
        }  
        const user = new DB(fname.value,lname.value,age.value,email.value,pwd.value,nation[0], new Date(), 'user')
        DB.login(user)

        location.href= 'file:///C:/Users/User/Desktop/DESKTOP%20FOLDERS/FRUIT%20APP/userpage/page.html'
        clearFields()
    }

    // if(check == true) {
    //     wrong(email,'Email Address already taken')
    // }
})

function clearFields() {
    age.value = ''
    lname.value = ''
    fname.value = ''
    email.value = ''
    pwd.value = ''
    rpwd.value = ''
    selectTag[0].selected = true;
}

for(let i = 0; i < selectTag.length; i++){
    const value = Array.from([selectTag[i].innerText]);
    console.log(value);
}
