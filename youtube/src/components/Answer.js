import React from 'react'
import './Answer.css'

const GroupAnswer = () => {
    return (
        <div className="answer-section">
            <form className="ui form">
                <div className="two fields ui two column grid container">
                    <div className="field column">
                        <label> Qual é o grupo? </label>
                        <div className="ui inout focus"> 
                            <input type="text" placeholder="Grupo..."></input>
                        </div>
                    </div>
                    <div className="field column">
                    <label> Qual é a música? </label>
                        <div className="ui inout focus"> 
                            <input type="text" placeholder="Música..."></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default GroupAnswer;