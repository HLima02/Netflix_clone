import { useState, useEffect, useContext } from 'react'

import { AuthContext } from '../../Contexts/auth'
import './styles.scss'

export default function FeaturedMovie() {
  const { featuredMovie } = useContext(AuthContext)
  
  let firstDate = new Date(featuredMovie.first_air_date);
  let genres = [];

  for(let i in featuredMovie.genres) {
    genres.push(featuredMovie.genres[i].name);
  }

  let description = featuredMovie.overview;
  if(description.length > 100) {
    description = description.substring(0, 100) + '...';
  }

  return (
    <div className='featured_container' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path})`}}>
      <div className='bg_vertical'>
        <div className="bg_horizontal">
          <h1 className="name">{featuredMovie.name}</h1>
          <div className="movie_infos">
             <span className="points">{featuredMovie.vote_average} pontos</span>
            <span>{firstDate.getFullYear()}</span>
            <span>{featuredMovie.number_of_seasons} temporada{featuredMovie.number_of_seasons !== 1 ? 's' : ''}</span>
          </div>
          <div className="desciption">{description}</div>
          <div className="movie_btn">
            <a href="#" className="watch">&#9658;Assistir</a>
            <a href="#" className="my-list">+ Minha lista</a>
          </div>
          <div className="genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
        </div>
      </div>
    </div>
  )
}
