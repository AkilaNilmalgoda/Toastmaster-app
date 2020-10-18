import React, { Component }  from 'react';
import AddQlist from './AddQlist'
import { QuestionContext } from "./context"

export default class AddQ extends Component {
    static contextType = QuestionContext
    
    render() {
        const { question, questions,  } = this.context;
        const {handleChange, handleSubmit, } = this.context;
        
        return (
          <div className="container-fluid">
            <form className="mt-2" onSubmit={handleSubmit}>
              <div className="row ">
                <div className="input col-md-9 col-sm-12 input-group mb-3 mt-2">
                  <div className="col-12">
                    <input
                      className="col-12 form-control"
                      type="text"
                      name="question"
                      placeholder="Add a question"
                      value={question}
                      onChange={handleChange} 
                    ></input>
                  </div>
                </div>
                <div className="submit col-md-3 col-sm-12 mt-1 ">
                  <button
                    type="submit"
                    className="btn btn-lg btn-block addqbutton questionsubmit font-weight-bold mx-auto"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-2">
              <h2>
                <AddQlist questions={questions} />
              </h2>
            </div>
          </div>
        );
    }
}
