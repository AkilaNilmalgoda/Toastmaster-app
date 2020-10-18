import React, { Component } from 'react';
import Categories from './Categories'

export default class Instructions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Toggled: false,
            name: "Akila"
        }
    }

    Toggleinfo = () => {
        this.setState({
            Toggled: !this.state.Toggled
        })
    }
    
    render() {
        
        return (
          <section>
            <div className="row justify-content-between toggle-heading mt-2 ">
              <div className="toggle-heading-name ml-5 my-auto ">
                <Categories heading="Instructions"></Categories>
              </div>

              <div className=" mr-5">
                <span type="button" onClick={this.Toggleinfo}>
                  <i className="fas fa-angle-double-down fa-3x toggle-icon  "></i>
                </span>
              </div>
            </div>
            <div className="sdcsedc">
              {this.state.Toggled ? (
                
                <ul className="list-group mt-2 ">
                  <li className="list-group-item orange font-weight-bold">
                    Before the meeting
                  </li>
                  <li className="list-group-item orange">
                    1. Toggle down the Add Question section{" "}
                  </li>
                  <li className="list-group-item orange">
                    2. Add your questions
                  </li>
                  <li className="list-group-item orange">
                    3. Use the buttons on the right of the question to edit and
                    delete, if needed
                  </li>
                  <li className="list-group-item orange">
                    4. Once all the questions are added toogle up the Add
                    Question Section
                  </li>
                  <li className="list-group-item orange mt-2 font-weight-bold">
                    At the meeting
                  </li>
                  <li className="list-group-item orange">
                    1. Toggle Down the Questions section
                  </li>
                  <li className="list-group-item orange">
                    2. Speakers can choose their questions from the list on the
                    left
                  </li>
                  <li className="list-group-item orange">
                    3. Click on the question number, the question will be
                    displayed{" "}
                  </li>
                  <li className="list-group-item orange">
                    4. Use the input below the question to add the speakers name
                    to the question
                  </li>
                </ul>
              ) : null}
            </div>
          </section>
        );
    }
}

