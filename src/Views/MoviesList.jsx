import React, { Component } from "react";
import MoviesController from "../Controllers/MoviesController";

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: [],
      popularSeries: [],
      actionMovies: [],
    };
  }

  async componentDidMount() {
    const apiKey = process.env.REACT_APP_API_KEY;
    try {
      const data = await MoviesController.getAllData(apiKey);
      this.setState({
        popularMovies: data.popularMovies,
        popularSeries: data.popularSeries,
        actionMovies: data.actionMovies,
      });
    } catch (error) {
      console.error("Error setting data:", error);
    }
  }

  render() {
    const { popularMovies, popularSeries, actionMovies } = this.state;
    console.log(popularMovies);

    return (
      <div className="container">
        {popularMovies.length > 0 && (
          <div className="movie-header">
            <h2 className="title">{popularMovies[0].title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${popularMovies[0].poster_path}`}
              alt={popularMovies[0].title}
              className="hero"
            />
            <img
              src={`https://image.tmdb.org/t/p/w500${popularMovies[0].backdrop_path}`}
              alt={popularMovies[0].title}
              className="hero-blur"
            />
          </div>
        )}

        <div className="container">
          <div className="titles">
            <h1>Movies</h1>
            <h3>See all</h3>
          </div>
          <ul>
            {popularMovies.slice(1, 7).map((movie) => (
              <li key={movie.id}>
                <h3 className="movie-title">{movie.title}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="container">
          <div className="titles">
            <h1>Series</h1>
            <h3>See all</h3>
          </div>
          <ul>
            {popularSeries.slice(0, 6).map((series) => (
              <li key={series.id}>
                <h3 className="movie-title">{series.name}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                  alt={series.name}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="container">
          <div className="titles">
            <h1>Action</h1>
            <h3>See all</h3>
          </div>
          <ul>
            {actionMovies.slice(0, 6).map((movie) => (
              <li key={movie.id}>
                <h3 className="movie-title">{movie.title}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MoviesList;
