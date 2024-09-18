import React from 'react'
import './FaqItem.css'

type FaqItemProps = {
    question: string
    answer: string
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
    const [answered, setAnswered] = React.useState(false)
    const handleAnswered = () => {
        setAnswered((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <div className='faq-item'>
            <div className="d-f jc-sb align-center">
                <h5 className="faq-item-question">{question}</h5>
                <button type="button" className='btn-clear d-b' onClick={handleAnswered}>
                    <img src={answered ? "/images/arrow-up.png" : "/images/arrow-down.png"} alt="arrow" />
                </button>
            </div>
            <p className={answered ? "faq-item-answer" : "d-n"}>{answer}</p>
        </div>
    )
}

export default FaqItem