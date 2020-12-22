import React, { useState, useRef } from 'react'
import './styles.css'

const FaqItem = ({ question, answer }) => {
    const [status, setStatus] = useState(false)
    const [height, setHeight] = useState('0px')

    const content = useRef(null)

    const handleSubmit = () => {
        setStatus(!status)
        setHeight(status ? '0px' : `${content.current.scrollHeight}px`)
    }

    return (
        
        <div className="faqItem w-1/2 flex flex-row items-center justify-center">
            <button
                type="button"
                onClick={handleSubmit}
                className={`accordion ${status ? 'accordion-active' : ''}`}>
                {question}
               
                <img src="/plus.svg" alt="icone +" />
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${height}` }}
                className={`description-container${status ? 'active' : ''}`}>
                <div className="back">
                    <p className="description text-justify">{answer}</p>
                </div>
            </div>
        </div>
    )
}

export default FaqItem
