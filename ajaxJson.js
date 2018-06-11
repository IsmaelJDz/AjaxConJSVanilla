((c,d,xhr,json) => {

	const movies = d.querySelector('#movies')

	xhr.open('GET', './assets/movies.json', true)
	xhr.addEventListener('load', e => {
		let moviesInfo,
			moviesTemplate = ''
		if (xhr.status >= 200 && xhr.status < 400) {
			moviesInfo = json.parse(xhr.responseText)
			c(moviesInfo)

			moviesInfo['movies'].forEach(movie =>{
				moviesTemplate += `
					<article>
					  <h2>${movie.title}</h2>
					  <p><b>${movie.year}</b></p>
					  <p><i>${movie.genres}</i></p>
					  <img src="${movie.poster}">
					</article>
				`
			})
		} 
		else
		{
			moviesTemplate = `<b>El servidor No responde. Error No ${xhr.status}: 
			<mark>${xhr.statusText}</mark></b>
			`
		}

		movies.innerHTML = moviesTemplate
	})
	xhr.send()

})(console.log, document, new XMLHttpRequest(), JSON)