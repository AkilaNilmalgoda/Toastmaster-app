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
                  //key=indexof()
                  speaker={question.speaker}
                  handleUpdateQuestion={() => handleUpdateQuestion(question.id)}
                  //showlog={() => showlog(question.id, this.state.questiontodisplay)}
                  //handleUpdateQuestion={()=>handleUpdateQuestion(question.id)}
                />
              );
            })}

            
          </ul>
        );


        /*
        const qnlist = questions.map((question) => (
          
          <QNUnit
            title={question.title}
            id={question.id}
            handleUpdateQuestion={() => handleUpdateQuestion(question.id)}
            
          />
        ));

          
        
        return (
            <div>
                {qnlist}
            </div>
        )*/
    }
} 
