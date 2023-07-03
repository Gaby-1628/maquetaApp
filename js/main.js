const singIn = document.querySelector('#sing-in')
const singUp = document.querySelector('#sing-up')
const password = document.querySelector('#password')

singUp.style.display = 'none'
password.style.display = 'none'

function showHide(login) {
    if (login == 'singUp') {
        singIn.style.display = 'none'
        password.style.display = 'none'
        singUp.style.display = 'flex'
    }
    else if (login == 'singIn') {
        singIn.style.display = 'flex'
        password.style.display = 'none'
        singUp.style.display = 'none'
    }
    else if (login == 'password') {
        singIn.style.display = 'none'
        password.style.display = 'flex'
        singUp.style.display = 'none'
    }
}








