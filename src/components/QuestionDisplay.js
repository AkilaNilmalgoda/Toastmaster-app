import React, { Component } from 'react'
import { QuestionContext } from "./context"
import QNDUnit from './QNDunit'

export default class QuestionDisplay extends Component {
    static contextType = QuestionContext
    render() {
        const { questions, questiontodisplay} =this.context
        return (
        <ul>
            {questions.map((question)=>{
                if(question.id === questiontodisplay ){
                    return(
                        <QNDUnit
                        title = {question.title}
                        />
                    )
                }
                else{
                    return null
                }
            }
            
            )}
        </ul>
        )
    }
}
