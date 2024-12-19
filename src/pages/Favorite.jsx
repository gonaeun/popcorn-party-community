import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Favorite = ({ userId }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // 사용자 찜 목록 가져오기
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/favorites/${userId}`);
        setFavorites(response.data);
      } catch (error) {
        console.error('찜 목록 가져오기 실패:', error);
      }
    };

    fetchFavorites();
  }, [userId]);

  return (
    <div className="movie-list">
      {favorites.map((movie) => (
        <div className="movie-card" key={movie.movie_id}>
          <div
            className="movie-poster"
            style={{
              backgroundImage: `url(https://www.themoviedb.org/t/p/w500${movie.poster_path})`,
            }}
          ></div>
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <p>평점: {movie.vote_average}점</p>
            <p>개봉일: {movie.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorite;