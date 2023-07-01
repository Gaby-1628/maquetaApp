const singIn = document.querySelector('#sing-in')
const singUp = document.querySelector('#sing-up')


singUp.style.display = 'none'


function showHide(login) {
    if (login == 'singUp') {
        singIn.style.display = 'none'
        singUp.style.display = 'flex'
    }
    else if (login == 'singIn') {
        singIn.style.display = 'flex'
        singUp.style.display = 'none'
    }
}


