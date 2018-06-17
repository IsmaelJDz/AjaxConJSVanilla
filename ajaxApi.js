((c,d,xhr,json) => {

	const starwars = d.querySelector('#starwars')
	  pagination = d.querySelector('#pagination')

<<<<<<< HEAD
	  function loadCharacters(startList){
  		let starwarsInfo,
  			starwarsTemplate = ''
  		if (xhr.status >= 200 && xhr.status < 400) {
  			starwarsInfo = json.parse(xhr.responseText)
  			c(starwarsInfo)

  			starwarsTemplate += `<h3>Personajes de starwars encontrados ${starwarsInfo.count}</h3>
  				<ol start="${startList}">
  			`
  			starwarsInfo.results.forEach(people => starwarsTemplate += `<li>${people.name}</li>`)

  			starwarsTemplate += `</ol>
  				<a href="${starwarsInfo.previous}" id="previous">atras</a>
  				<a href="${starwarsInfo.next}" id="next">siguiente</a>
  			`
  		}
  		else
  		{
  			starwarsTemplate = `<b>El servidor No responde. Error No ${xhr.status}:
  			<mark>${xhr.statusText}</mark></b>
  			`
  		}

  		starwars.innerHTML = starwarsTemplate
	}

	d.addEventListener('DOMContentLoaded', e => {
		xhr.open('GET', 'https://swapi.co/api/people/', true)
		xhr.addEventListener('load', loadCharacters)
		xhr.send()
	})

	d.addEventListener('click', e => {
		e.preventDefault()
		if ( e.target.localName == 'a' && e.target.href.indexOf('null') === -1 ) {
			let startList = ( e.target.search.slice(-1) - 1 ) * 10 + 1
			xhr.open('GET', e.target.href || 'https://swapi.co/api/people/', true)
			xhr.addEventListener('load', () => loadCharacters(startList) )
			xhr.send()
		}
	})
=======
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
>>>>>>> 4c75f87c96e921e53a36545f01f3805a7493a88c

})(console.log, document, new XMLHttpRequest(), JSON)
