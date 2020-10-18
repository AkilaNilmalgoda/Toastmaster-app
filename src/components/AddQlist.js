import React, { Component } from 'react';
import Qitem from "./Qitem"
import { QuestionContext } from "./context"

export default class AddQlist extends Component {
    static contextType = QuestionContext
    render() {
        const { questions } = this.context;
        const { Deleteitem, Edititem } = this.context;
        const qlist = questions.map((question) => (
        <Qitem
            title={question.title}
            Deleteitem={() => Deleteitem(question.id)}
            Edititem={() => Edititem(question.id)}
            key={question.id}
        />
        ));

        return (
            <div>
                <ul>
                    {qlist}    
                </ul>
            </div>
        )
    }
}
