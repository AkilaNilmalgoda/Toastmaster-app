import React, { Component } from 'react';
import { QuestionContext } from "./context";

export default class Qitem extends Component {
  static contextType = QuestionContext;
  render() {
    const { title, Deleteitem, Edititem } = this.props;
    return (
      <div className="mb-2  ">
        <li className="list-group-item d-flex justify-content-between my-auto list-item-question   ">
          <div className="showlistedq ">
            <h3 className="a ">{title}</h3>
          </div>

          <div className=" my-auto icon-span ">
            <span
              type="button"
              className="text-success mx-2"
              onClick={Edititem}
            >
              <i className="fas fa-pen edit-icon " />
            </span>
            <span
              type="button"
              className="text-danger mx-2"
              onClick={Deleteitem}
            >
              <i className="fas fa-trash delete-icon " />
            </span>
          </div>
        </li>
      </div>
    );
  }
}

