const Hero = ({ Firstposter }) => {
  return (
    <div className="movies-Poster">
      <img src={`${Firstposter.poster_path}`} alt="poster" />
      <div className="movie-Poster-info">
        <p>{Firstposter.title}</p>
        <p>{Firstposter.type}</p>
      </div>
    </div>
  );
};
export default Hero;
