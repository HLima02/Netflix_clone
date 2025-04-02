const API_KEY = 'ab0368d5ffe91b882e41a30eee56b943';
const BASE_URL = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const req = await fetch(`${BASE_URL}/${endpoint}`)
  const json = await req.json()
  return json
}

export default {
  getMovieList: async () => {
    return [
      {
        slug: 'originais',
        title: 'Originais Netflix',
        item: await basicFetch(`discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        item: await basicFetch(`trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        item: await basicFetch(`movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        item: await basicFetch(`discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        item: await basicFetch(`discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        item: await basicFetch(`discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        item: await basicFetch(`discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        item: await basicFetch(`discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      }
    ]
  }
}