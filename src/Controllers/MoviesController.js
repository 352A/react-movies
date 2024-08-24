import MoviesModel from "../Models/MoviesModel";

class MovieController {
  async getAllData(apiKey) {
    try {
      const [popularMovies, popularSeries, actionMovies] = await Promise.all([
        MoviesModel.getPopularMovies(apiKey),
        MoviesModel.getPopularSeries(apiKey),
        MoviesModel.getActionMovies(apiKey),
      ]);

      return {
        popularMovies,
        popularSeries,
        actionMovies,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
const MoviesController = new MovieController();
export default MoviesController;
