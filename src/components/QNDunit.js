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
        <div className="QNdisplayinput col-9">
          <form onSubmit={handleSpeakerSubmit}>
            <div className="input-group m-auto ">

              <input
                type="text"
                className="form-control col-md-9 col-sm-12 mt-2 "
                placeholder="Speaker's name"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                name="speaker"
                value={speaker}
                onChange={handleSpeakerChange}
              ></input>
              <div className="input-group-append col-md-3 col-sm-12 mt-2 ">
                <button type="submit" className="btn btn-outline-secondary mx-auto  ">
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
