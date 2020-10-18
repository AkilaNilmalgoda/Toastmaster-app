import React, { Component } from 'react'
import { QuestionContext } from "./context"

export default class QNUnit extends Component {
  static contextType = QuestionContext;

  render() {
    const {speaker, handleUpdateQuestion, questionno } = this.props;
    return (
      <div>
        <li className="list-group-item Questionnounit">
          <div className="qnbutton" onClick={handleUpdateQuestion}>
              <div className="col-12 qnbuttonblock">
                <h5>Question {questionno}</h5>
              </div>
              <div className="col-12 qnbuttonblock">
                <h6>Speaker: {speaker}</h6>
              </div>
          </div>
        </li>
      </div>
    );
  }
}
