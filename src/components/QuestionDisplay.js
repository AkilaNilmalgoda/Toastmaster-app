import React, { Component } from 'react'
import { QuestionContext } from "./context"
import QNDUnit from './QNDunit'

export default class QuestionDisplay extends Component {
    static contextType = QuestionContext
    render() {
        const { questions, questiontodisplay} =this.context
        /*const currentq =  - 1;
        const showq = () => {
            //const currentq = questiontodisplay -1;
        
        };*/
        return (
        <ul>
            {questions.map((question)=>{
                if(question.id === questiontodisplay ){
                    return(
                        <QNDUnit
                        title = {question.title}
                        />
                    //<h1>{question.title}</h1>
                    )
                }
                else{
                    return null
                }
                /*return(
                    <QNDUnit
                    title={question.title}
                    />
                )
                else{
                    return(
                        <h1>Not this</h1>
                    )
                }*/
            }
            
            )}
        </ul>
            /*<div>
                <h1>hi</h1>
                <button><h2>Click me</h2></button>

            </div>*/
        )
    }
}
