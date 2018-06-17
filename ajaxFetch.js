((c, d) => {

    const respuestaFetch = d.querySelector('#fetch')
    let tpl = ''

    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then( res => res.json() )
        .then( albums => {
            albums.forEach( el => tpl += `<a href="${el.url}"><img src="${el.thumbnailUrl}"></a>`)
            respuestaFetch.innerHTML = tpl
        })
        .catch( err => c( err.message) )

})(console.log, document)
