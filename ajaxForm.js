((c,d,xhr) => {

    const READY_STATE_COMPLETE = 4,
        OK = 200,
        NOT_FOUND = 404,
        form = d.forms[0],
        preload = form.querySelector('.preload'),
        message = form.querySelector('.message')

    form.addEventListener('submit', e => {
        let formElements = d.querySelectorAll('[required]')
        formData = ''



        e.preventDefault()

        xhr.open('POST', './assets/send_mail.php', true)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

        xhr.addEventListener('load', e => {
            preload.classList.remove('hidden')

            if ( xhr.readyState === READY_STATE_COMPLETE ) {
                preload.classList.add('hidden')
                message.classList.remove('hidden')

                if ( xhr.status === OK ) {
                    message.innerHTML = xhr.response
                    form.reset()
                }
                else if( xhr.status === NOT_FOUND ) {
                    message.innerHTML = `<b>El servidor No responde. Error No
                    ${xhr.status}: <mark>${xhr.statusText}</mark></b>
                    `
                }
            }
        })

        formElements.forEach( input => formData += `${input.name}=${input.value}&` )
        //c(formData)
        xhr.send( encodeURI(formData) )
    })

})(console.log,document, new XMLHttpRequest())
