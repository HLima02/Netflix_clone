import { useState, useEffect, useContext } from 'react'
import api from '../../services/api'
import MovieRow from '../../components/MovieRow'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { AuthContext } from '../../Contexts/auth'

import './style.scss'

export default function Home() {
  const { user, setMovieList, movieList, featuredMovie, setFeaturedMovie } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const loadApi = async () => {
      await api.getMovieList()
      .then((value) => {
        setMovieList(value)
        setLoading(false)
      })
    }

    loadApi()
    console.log(movieList)
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
        {movieList.map((movieItem, index) => (
         <MovieRow rowList={movieItem} />
        ))}
        {/* <MovieRow rowList={movieList[4]} /> */}


      </main>

      <Footer />
    </div>
  )
}
