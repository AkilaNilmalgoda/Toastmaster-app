import React, { Component }  from 'react';
import AddQlist from './AddQlist'
import { QuestionContext } from "./context"

export default class AddQ extends Component {
    static contextType = QuestionContext

    //state = {
        //question: "",
        //questions: [],
        //questionlist : ""
    //}
    

/*handleChange = event => {
        this.setState({
        question: event.target.value
    });
};

handleSubmit = event => {
event.preventDefault();
const newQuestion = this.state.question
const updatedQuestions = [...this.state.questions, newQuestion]
this.setState({
    questions : updatedQuestions,
    question:"",
});
};*/




    
    render() {
        const { question, questions,  } = this.context;
        const {handleChange, handleSubmit, } = this.context;
        
        return (
          <div className="container">
            <form className="mt-2" onSubmit={handleSubmit}>
              <div className="row">
                <div className="input col-9 sm-col-12 input-group mb-3 mt-2">
                  <div className="col-12">
                    <input
                      className="col-12 form-control"
                      type="text"
                      name="question"
                      placeholder="Add a question"
                      value={question}
                      onChange={
                        handleChange
                      } /*aria-label="Username" aria-describedby="basic-addon1"*/
                    ></input>
                  </div>
                </div>
                <div className="submit col-3 sm-col-12 mt-1 ">
                  <button
                    type="submit"
                    className="btn btn-lg btn-block addqbutton questionsubmit font-weight-bold"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <div>
              <h2>
                <AddQlist questions={questions} />
              </h2>
            </div>
          </div>
        );
    }
}
