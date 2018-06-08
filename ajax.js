((c, d, xhr) => {

	const READY_STATE_COMPLETE = 4,
			OK = 200,
			NOT_FOUND = 404,
			preload = d.querySelector('#preload'),
			country = d.querySelector('#country'),
			menu = d.querySelector('.menu')

	function countryInfo(){
		preload.innerHTML = '<i class="fa fa-refresh fa-spin fa-5x"></i>'

		if ( xhr.readyState === READY_STATE_COMPLETE && xhr.status === OK) {
			c(xhr)
		}
	}

	function ajaxRequest(e) {
		e.preventDefault()
		c(e)
		if ( e.target.localName == 'a' ) 
		{
			xhr.open('GET', e.target.href, true)
			xhr.addEventListener('readystatechange', countryInfo)
			xhr.setRequestHeader('content-type', 'text/html')
			xhr.send()
		}
	}

	menu.addEventListener('click', ajaxRequest)

})(console.log, document, new XMLHttpRequest());