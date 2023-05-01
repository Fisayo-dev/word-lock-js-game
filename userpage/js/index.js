
const gamePage = document.querySelector('.game-page')
const homePage = document.querySelector('.home-section')
const gameLevels = document.querySelectorAll('.box-level')
const subBtn = document.querySelector('#submit-btn')

let mode;


let score = 0;
let index = 0;


function collect(val) {
    return document.querySelector(`.${val}`)
}

const words = [
    {
        word: 'pronunciation',
        type: '9'
    },
    {
        word: 'quadilateral',
        type: "2"
    },
    {
        word: 'mensuration',
        type: "2"
    },
    {
        word: 'equations',
        type: "2"
    },
    {
        word: 'logarithms',
        type: "3"
    },
    {
        word: 'construction',
        type: "3"
    },
    {
        word: 'denomination',
        type: "3"
    },
    {
        word: 'factorisation',
        type: "4"
    },
    {
        word: 'permutation',
        type: "4"
    },
    {
        word: 'simultaneous',
        type: "4"
    },
    {
        word: 'statistics',
        type: "5"
    },
    {
        word: 'discriminant',
        type: "5"
    },
    {
        word: 'polynomials',
        type: "5"
    },
    {
        word: 'parabola',
        type: "5"
    },
    {
        word: 'supplementary',
        type: "6"
    },
    {
        word: 'equilateral',
        type: "6"
    },
    {
        word: 'differentiation',
        type: "6"
    },
    {
        word: 'approximation',
        type: "6"
    },
    {
        word: 'sequences',
        type: "7"
    },
    {
        word: 'adjacent',
        type: "7"
    },
    {
        word: 'pyramid',
        type: "7"
    },
    {
        word: 'geometry',
        type: "8"
    },
    {
        word: 'polygons',
        type: "8"
    },
    {
        word: 'probability',
        type: "8"
    },
    {
        word: 'inequalities',
        type: "8"
    },
    {
        word: 'reciprocals',
        type: "9"
    },
    {
        word: 'longitude',
        type: "9"
    },
    {
        word: 'percentage',
        type: "1"
    },
    {
        word: 'proportions',
        type: "1"
    },
    {
        word: 'theorems',
        type: "1"
    },
    {
        word: 'geodesy',
        type: "9"
    },
    {
        word: 'mulitplication',
        type: "1"
    },
    {
        word: 'sextillions',
        type: "9"
    },
    {
        word: 'elegant',
        type: '4'
    },
    {
        word: 'monetary',
        type: '4'
    },
    {
        word: 'adjacent',
        type: '6'
    },
    {
        word: 'examination',
        type: '6'
    },
    {
        word: 'capillary',
        type: '7'
    },
    {
        word: 'almighty',
        type: '7'
    },
    {
        word: 'drench',
        type: '8'
    },
    {
        word: 'please',
        type: '8'
    },
    {
        word: 'cordination',
        type: '1'
    },
    {
        word: 'denumination',
        type: '1'
    },
    {
        word: 'friendship',
        type: '2'
    },
    {
        word: 'communication',
        type: '2'
    },
    {
        word: 'suspense',
        type: '3'
    },
    {
        word: 'sternly',
        type: '3'
    },
    {
        word: 'codes',
        type: '5'
    },
    {
        word: 'refugee',
        type: '5'
    },
    {
        word: 'echinodermata',
        type: '9'
    }
]


function showAlert(title,msg,type) {
    const gameApp = document.querySelector('.game-app')
    gameApp.classList.add('dark-scene')
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
            break;
            
        case 'info':
            msgImg.setAttribute('src','../img/Game logo 2.png') 
            msgImg.setAttribute('')
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
        gameApp.classList.remove('dark-scene')
    })
   
}



submitBtn.addEventListener('click', () => {
    showAlert('Coming Soon!','Your progress is stored in our database and feedback would be sent to you','info')
})

const where = document.querySelector('.word-place');
const where2 = document.querySelector('.correct-value');

function showLevelDescription(levelNo,levelTitle) {
    document.querySelector('#level-description').innerHTML = `Level ${levelNo} - ${levelTitle}`
}

function showLevelContent(level,levelName) {
    if(level.querySelector('h3').innerText == levelName) {
        let selectedLevelWords = [];
        // Filter words based on the level type
        words
        .filter(word => word.type === levelName)
        .map(word =>  { 
            selectedLevelWords.push(word.word);
            // console.log(shuffledWord);
        });
        
        createWordOnScreen(selectedLevelWords)
        // console.log(selectedLevelWords) 

    }
}

// To Carry the list of words in selected level
function createWordOnScreen(levelWords) {
    // Sort the word list
    const shuffledLevelWords = levelWords.sort(() => Math.random() - .4)
    // displaying the first text in the sorted list item
    displayText(where,where2,shuffledLevelWords)
}

function updatingComponents(textArray) {
    // Adding the correct text
    let correctText = '';
    textArray.forEach(word => correctText += word)
    where2.innerText = correctText;
    
    // Adding the scrambled text 
    let finalText = '';
    const scrambledLevelWords = textArray.sort(() => Math.random() - .4)
    scrambledLevelWords.forEach(word => finalText += word)
    where.innerText = finalText.toUpperCase()
    // console.log(`UnScrambled Word: ${finalText}`);
}

function displayText(where,where2,selectedLevelWords) {
    // Creating an array from the selected word in the selected level
    const textArray = Array.from(selectedLevelWords[index])
    // console.log(textArray);
    
    updatingComponents(textArray)
    
    // Validating result when the submit btn is pressed
    subBtn.addEventListener('click', () => {
        if (selectedLevelWords.length > index + 1) {
            if(screen.value.toUpperCase() === where2.innerText.toUpperCase()) {
                score++;
                index++
                showAlert('Congrats!', `${document.querySelector('#usernameLoginField').innerText}, you unscrambled the word  ${where.innerText} correctly`,'success')  
                displayNextQuestion(selectedLevelWords,where,where2)
            } else {
                index++
                showAlert('Oops', `${document.querySelector('#usernameLoginField').innerText}, you failed to unscrambled the word  ${where.innerText} correctly`, 'error')
                displayNextQuestion(selectedLevelWords,where,where2)
                // location.reload()
                console.log('You Lost');
            }
            
        } else { 
            showAlert(`Welldone ${document.querySelector('#usernameLoginField').innerText}`,`You scored <b>${score}</b> !!`,'done')
            screen.value = ''
            
        }
        // showNextWord(shuffledLevelWords[1])
    })
    
  
}

function displayNextQuestion(textList,where,where2) {
    // Setting correct word based on the index
    const textArray = Array.from(textList[index])
    console.log(textArray);
    
    updatingComponents(textArray)
    
    
    // Reset work section
    screen.value = null
    
}

gameLevels.forEach(level => {
    level.addEventListener('click', () => {
        homePage.classList.add('none')
        gamePage.classList.remove('none')

        showLevelDescription(level.querySelector('h3').innerText,level.querySelector('p').innerText)
        showLevelContent(level,level.querySelector('h3').innerText)
    })
    

  
    
   
})




// Game app


