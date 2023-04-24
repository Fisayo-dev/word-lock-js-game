export function collect(val) {
    return document.querySelector(`.${val}`)
}

export function get(val) {
    return document.querySelector(`#${val}`)
}

export function wrong(el,msg='Field cannot be empty') {
    el.parentElement.querySelector('small').innerText = msg
    el.style.border = '2px solid crimson'
}

export function correct(el) {
    el.parentElement.querySelector('small').innerText = null
    el.style.border = `2px solid rgb(246,176,50)`
}