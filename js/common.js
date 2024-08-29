document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
    let statusCount = 0
    document.querySelectorAll('.form__input').forEach(input => {
        if (input.value == '') {
            input.classList.add('error')
            input.closest('.row').querySelector('p').classList.add('visible')
            statusCount--
        } else {
            input.classList.remove('error')
            input.closest('.row').querySelector('p').classList.remove('visible')
            statusCount++
        }
    })

    if (statusCount == 3) {
        setTimeout(() => {
            e.target.closest('.section__wrapper').querySelector('.sended').classList.add('active')
        }, 1000)
    }
    
})