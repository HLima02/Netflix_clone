import { useState, useEffect, useContext } from 'react'
import api from '../../services/api'
import FeaturedMovie from '../../components/FeaturedMovie'
import MovieRow from '../../components/MovieRow'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { AuthContext } from '../../Contexts/auth'

import './style.scss'

export default function Home() {
  const { user, setMovieList, movieList, setFeaturedMovie } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const loadApi = async () => {
      const list = await api.getMovieList()
      setMovieList(list)
      setLoading(false)

      let originals = list.filter(i => i.slug === 'originais');
      let pickUpRandom = Math.floor(Math.random() * originals[0].item.results.length);
      let chosen = originals[0].item.results[pickUpRandom];
      let movieChosen = await api.getFeaturedMovie(chosen.id, 'tv')
      setFeaturedMovie(movieChosen)
    }

    loadApi()
  }, [])

  if(loading){
    return(
      <div>Carregando...</div>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <FeaturedMovie />
        {movieList.map((movieItem, index) => (
         <MovieRow rowList={movieItem} key={index} />
        ))}
        {/* <MovieRow rowList={movieList[4]} /> */}


      </main>

      <Footer />
    </div>
  )
}
