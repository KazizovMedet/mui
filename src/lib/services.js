export const apiUrl = 'https://api.themoviedb.org/3/'
export const lang = 'language=ru-Rus'
export const apiKey = 'api_key=b31025777813b5d783d9408ceb00e5ec'
export const originalPath = 'https://image.tmdb.org/t/p/original/'
export const smallPath = 'https://image.tmdb.org/t/p/w500/'

export const handleGenerateApi = (endpoint, page) => {
  if (page){
    return `${apiUrl}${endpoint}?${apiKey}&${lang}&page=${page}`
  } else {
    return `${apiUrl}${endpoint}?${apiKey}&${lang}`
  }
}

export const handleSearchApi = (endpoint,query) => {
  if (query){
    return `${apiUrl}${endpoint}?${apiKey}&${lang}&query=${query}`
  } else {
    return `${apiUrl}${endpoint}?${apiKey}&${lang}`
  }
}

export const handleShortDescription = (str) => {
  if (str.length > 100){
    return str.slice(0, 100) + '...'
  } else {
    return str
  }
}

// https://api.themoviedb.org/3/movie/popular?api_key=b31025777813b5d783d9408ceb00e5ec&language=ru-Rus