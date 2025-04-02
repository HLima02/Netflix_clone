import { useState  } from 'react'
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

import './style.scss'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/'

export default function MovieRow({rowList}) {
  const [carrossel, setCarrossel ] = useState(0)
  const [margins, setMargins] = useState(30)
  const imgList = rowList.item.results
  console.log(imgList)

  return (
    <div className='movie_row_container'>
      <h1>{rowList.title}</h1>

      <div className='carossel_content'>
        <IoIosArrowBack  className='left_arrow' size={30} color='#fff' />
        <IoIosArrowForward className='right_arrow'  size={30} color='#fff' />
        <div className='carossel_row'>
          <div className='carossel_cards' style={{marginLeft: `${margins}px`}}>
            {imgList.map((val, index) => (
              <div key={index} className='card_section'>
                <img src={`${BASE_IMG_URL}/${val.poster_path}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
