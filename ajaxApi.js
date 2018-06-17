((c,d,xhr,json) => {

	const starwars = d.querySelector('#starwars')
	  pagination = d.querySelector('#pagination')

	xhr.open('GET', 'http://swapi.co/api/people/', true)
	xhr.addEventListener('load', e => {
		let starwarsInfo,
			starwarsTemplate = ''
		if (xhr.status >= 200 && xhr.status < 400) {
			starwarsInfo = json.parse(xhr.responseText)
			c(starwarsInfo)

			// starwarsInfo['movies'].forEach(movie =>{
			// 	starwarsTemplate += `
			// 		<article>
			// 		  <h2>${movie.title}</h2>
			// 		  <p><b>${movie.year}</b></p>
			// 		  <p><i>${movie.genres}</i></p>
			// 		  <img src="${movie.poster}">
			// 		</article>
			// 	`
			// })
		}
		else
		{
			starwarsTemplate = `<b>El servidor No responde. Error No ${xhr.status}:
			<mark>${xhr.statusText}</mark></b>
			`
		}

		starwars.innerHTML = starwarsTemplate
	})
	xhr.send()

})(console.log, document, new XMLHttpRequest(), JSON)
