function updateLocalStorage(item) {
  localStorage.setItem('item', JSON.stringify(item))
}

export const state = () => ({
  // shows
  ShowDetails: [],
  ShowVideos: [],
  ShowCast: [],
  ShowImages: [],
  ShowPopular: [],

  // movie
  MovieDetails: [],
  MovieVideos: [],
  MovieCast: [],
  MovieImages: [],
  MoviePopular: [],

  // Favourie
  favMovie: [],

  // Artist
  ArtistDetails: [],
  ArtistImages: [],
  ArtistLastWork: [],

  // Search
  SearchResults: []
})

export const mutations = {
  // Shows
  getShowDetails(state, deploy) {
    state.ShowDetails = deploy
  },
  getShowVideos(state, deploy) {
    state.ShowVideos = deploy
  },
  getShowCast(state, deploy) {
    state.ShowCast = deploy
  },
  getShowImages(state, deploy) {
    state.ShowImages = deploy
  },
  getShowPopular(state, deploy) {
    state.ShowPopular = deploy
  },

  // Movies
  getMovieDetails(state, deploy) {
    state.MovieDetails = deploy
  },
  getMovieVideos(state, deploy) {
    state.MovieVideos = deploy
  },
  getMovieCast(state, deploy) {
    state.MovieCast = deploy
  },
  getMovieImages(state, deploy) {
    state.MovieImages = deploy
  },
  getMoviePopular(state, deploy) {
    state.MoviePopular = deploy
  },
  // Favourie
  FavourieMovie(state) {
    const item = state.MovieDetails
    const fav = state.favMovie

    fav.push({ ...item })

    updateLocalStorage(state.favMovie)
  },
  FavourieShow(state) {
    const item = state.ShowDetails

    state.favMovie.push(item)

    updateLocalStorage(state.favMovie)
  },
  removeFromFavourite(state, id) {
    let item = state.favMovie.find((i) => i.id == id)

    state.favMovie = state.favMovie.filter((i) => i.id !== item.id)

    updateLocalStorage(state.favMovie)
  },
  updateFavStorage(state) {
    const fav = localStorage.getItem('item')
    if (fav) {
      state.favMovie = JSON.parse(fav)
    }
  },
  // Artist
  getArtistDetails(state, deploy) {
    state.ArtistDetails = deploy
  },
  getArtistImages(state, deploy) {
    state.ArtistImages = deploy
  },
  getArtistLastWork(state, deploy) {
    state.ArtistLastWork = deploy
  },
  // Search
  getSearchResults(state, deploy) {
    state.SearchResults = deploy
  },
}

export const actions = {
  favMovieData(context) {
    context.commit('FavourieMovie')
  },
  favShowData(context) {
    context.commit('FavourieShow')
  },
  removeFavItem(context, id) {
    context.commit('removeFromFavourite', id)
  },
}
