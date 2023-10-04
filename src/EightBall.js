import React, { useState } from 'react';
import answers from "./answers.json"
import {choice} from './random'
import "./EightBall.css"


function EightBall() {
    const [answer, setAnswer] = useState({
        msg: "Think of a Question.",
        color: "black"
    })
    function handleClick() {
        setAnswer(choice(answers))
    }
    return (
        <div
            className='EightBall'
            onClick={handleClick}
            style={{backgroundColor: answer.color}}
        >
            <b>{answer.msg}</b>
        </div>
    )
}

export default EightBall;