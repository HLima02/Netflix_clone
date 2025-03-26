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
           <Accordion.Item key={item.id} className='question_content' eventKey={item.id} >
            <Accordion.Header className='question_title'>{item.askTitle}</Accordion.Header>
            <Accordion.Body>{item.askContent}</Accordion.Body>
          </Accordion.Item>
        ))}  
      </Accordion>

    </section>
  )
}
