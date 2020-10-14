import React, { Component } from 'react'
import { QuestionContext } from "./context";

export default class QNDunit extends Component {
  static contextType = QuestionContext;
  render() {
    const { title } = this.props;
    const {
      speaker,
      handleSpeakerSubmit,
      handleSpeakerChange,
      handleResetQuestion,
    } = this.context;

    return (
      <div className="container QNdisplay">
        <div className="row col-12 QNdisplaytitle  d-flex flex-wrap">
          <h1>{title}</h1>
        </div>
        <div className="QNdisplayinput col-6">
          <form onSubmit={handleSpeakerSubmit}>
            <div className="input-group m-auto">
              <input
                type="text"
                className="form-control  "
                placeholder="Speaker's name"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                name="speaker"
                value={speaker}
                onChange={handleSpeakerChange}
              ></input>
              <div className="input-group-append ">
                <button type="submit" className="btn btn-outline-secondary ">
                  Add name
                </button>
              </div>
            </div>
          </form>
          <button className="btn btn-danger mt-2" onClick={handleResetQuestion}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
