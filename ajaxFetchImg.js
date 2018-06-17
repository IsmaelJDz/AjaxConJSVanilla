((c, d) => {

    const img = d.querySelector('#fetch-img')
    let tpl = ''

    fetch('./assets/img/js-logo.png')
        .then( res => res.blob() )
        .then( blob => {
            //c(blob)
            let objectURL = URL.createObjectURL(blob)
            img.src = objectURL
            img.style.maxWidth = '300px'
        })
        .catch( err => c( err.message) )

})(console.log, document)
