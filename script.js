const API_KEY = '5f24a62abe3829037ada468c2f93975b'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

const searchButton = document.querySelector(`button`)
const searchInput = document.querySelector(`input`)
const searchImageDiv = document.querySelector(`.image`)
const list = document.querySelector(`.movie-list`)

searchButton.addEventListener('click', async () => {
  let searchValue = searchInput.value
  let response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${API_KEY}`
  )

  const renderMovies = () => {
    for (let i = 0; i < response.data.results.length; i++) {
      const renderMovieList = response.data.results[i].original_title
      const renderMoviePosterPath = response.data.results[i].poster_path

      const movieItemLi = document.createElement('li')
      const moviePosterItemLi = document.createElement(`li`)

      movieItemLi.innerHTML = renderMovieList
      moviePosterItemLi.innerHTML = `<img src=https://image.tmdb.org/t/p/original${renderMoviePosterPath}>`

      const viewBtn = document.createElement(`button`)
      const viewBtnText = document.createTextNode(`View Details`)
      viewBtn.appendChild(viewBtnText)
      list.appendChild(viewBtn)

      list.append(movieItemLi)
      searchImageDiv.append(moviePosterItemLi)
    }
  }

  renderMovies()
})
