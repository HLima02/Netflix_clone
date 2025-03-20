import {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';

import { QuestionsAsked } from '../../services/api_questions'
import { FaPlus, FaMinus  } from "react-icons/fa";

import './questions.style.scss'

export default function Questions() {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false)

  const showQuestion = () => {
    setIsQuestionOpen(!isQuestionOpen)
  }

  console.log(QuestionsAsked)
  return (
    <section className='question_container'>
      <Accordion defaultActiveKey="0">
        {QuestionsAsked.map((item) => (
           <Accordion.Item className='question_content' eventKey={item.id} >
            <Accordion.Header className='question_title'>{item.askTitle}</Accordion.Header>
            <Accordion.Body>{item.askContent}</Accordion.Body>
          </Accordion.Item>
          // <div key={item.id} className='question_content'>
          //   <div className='question_bar'>
          //     <p>{item.askTitle}</p>
          //     {isQuestionOpen ? (
          //       <FaMinus size={25} color='#fff' onClick={showQuestion} />
          //     ) : (
          //       <FaPlus size={25} color='#fff' onClick={showQuestion} />
          //     )}
              
          //   </div>
          //   <div className={`question_answer ${isQuestionOpen? 'display_block fade_in' : 'display_none'}`} >
          //     <p>{item.askContent}</p>
          //   </div>
          //</div> 
        ))}
       
       
      </Accordion>

    </section>
  )
}
