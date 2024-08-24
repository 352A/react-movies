class MovieModel {
  async getPopularMovies(apiKey) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );
    const data = await response.json();
    return data.results;
  }

  async getPopularSeries(apiKey) {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
    );
    const data = await response.json();
    return data.results;
  }

  async getActionMovies(apiKey) {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`
    );
    const data = await response.json();
    return data.results;
  }
}

const MoviesModel = new MovieModel();
export default MoviesModel;
