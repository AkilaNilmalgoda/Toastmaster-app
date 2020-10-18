import React, { Component } from 'react'
import QNUnit from "./QNUnit";
import { QuestionContext } from "./context"

export default class QuestionNumber extends Component {
    static contextType = QuestionContext
    render() {
        const {questions, handleUpdateQuestion } = this.context;
        
        return (
          <ul className="list-group QNlist">
            
            {questions.map((question, index) => {
              return (
                <QNUnit
                  title={question.title}
                  id={question.id}
                  questionno= {index +1}
                  speaker={question.speaker}
                  handleUpdateQuestion={() => handleUpdateQuestion(question.id)}
                  key={question.toString()}
                />
              );
            })}
          </ul>
        );
    }
} 
