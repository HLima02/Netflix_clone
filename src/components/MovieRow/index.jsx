import { useState, useEffect, useRef  } from 'react'
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

import './style.scss'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/'

export default function MovieRow({rowList}) {
  const containerRef = useRef(null);
  const [margins, setMargins] = useState(30)
  const [visibleItems, setVisibleItems] = useState(0);
  
  const ITEM_WIDTH = 200;
  const imgList = rowList.item.results

  useEffect(() => {
    const updateVisibleItems = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const itemsVisible = Math.floor(containerWidth / ITEM_WIDTH);
        setVisibleItems(itemsVisible);
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  const handleMargin = (side) => {
    const totalWidth = imgList.length * ITEM_WIDTH;
    const visibleWidth = visibleItems * ITEM_WIDTH;

    const maxNegativeMargin = visibleWidth - totalWidth

    if (side === 'right') {
      setMargins((prev) => {
        const next = prev - ITEM_WIDTH;
        return next < maxNegativeMargin ? maxNegativeMargin : next;
      });
    }

    if (side === 'left') {
      setMargins((prev) => {
        const next = prev + ITEM_WIDTH;
        return next > 0 ? 0 : next;
      });
    }
  }

  return (
    <div className='movie_row_container'>
      <h1>{rowList.title}</h1>

      <div className='carossel_content'  ref={containerRef}>
        <IoIosArrowBack  className='left_arrow' size={30} color='#fff' onClick={() => handleMargin('left')} />
        <IoIosArrowForward className='right_arrow'  size={30} color='#fff' onClick={() => handleMargin('right')} />
        <div className='carossel_row'>
          <div className='carossel_cards'  style={{marginLeft: `${margins}px`}}>
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
