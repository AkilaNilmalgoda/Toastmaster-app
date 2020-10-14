import React, { Component } from 'react';
import QuestionNumber from "./QuestionNumber";
import {QuestionContext} from "./context"
import QuestionDisplay from "./QuestionDisplay"

export default class QuestionSection extends Component {
    static contextType = QuestionContext
    render() {
        //const {questiontodisplay} =this.context;
        //console.log(name);
        return (
          <div className="row mt-2">
            <div className="QN col-lg-3 col-sm-12">
              <QuestionNumber />
            </div>
            <div className="QD col-lg-9 col-sm-12">
              <QuestionDisplay />
            </div>
          </div>
        );
    }
}
